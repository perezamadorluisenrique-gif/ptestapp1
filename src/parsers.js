import * as pdfjs from './vendor/pdf.mjs';
import { strFromU8, unzipSync } from './vendor/fflate.mjs';

const SECTION_MARKER = '\uE000';
const WORD_CHARS = /[0-9A-Za-zÀ-ÿ]/;

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.mjs';

function normalizeNewlines(text) {
  return text.replace(/\r\n?/g, '\n');
}

function normalizeWhitespace(text) {
  return normalizeNewlines(text)
    .replace(/\u00a0/g, ' ')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n[ \t]+/g, '\n')
    .replace(/[ \t]{2,}/g, ' ')
    .replace(/\n{3,}/g, `\n${SECTION_MARKER}\n`)
    .trim();
}

function stripMarkdown(text) {
  let cleaned = normalizeNewlines(text);

  cleaned = cleaned
    .replace(/^```[\s\S]*?^```/gm, (block) => block.replace(/^```.*$/gm, ''))
    .replace(/^#{1,6}\s*(.+)$/gm, `${SECTION_MARKER}\n$1\n${SECTION_MARKER}`)
    .replace(/^>\s?/gm, '')
    .replace(/^[-*+]\s+/gm, '')
    .replace(/^\d+\.\s+/gm, '')
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, ' $1 ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, ' $1 ')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/__([^_]+)__/g, '$1')
    .replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '$1')
    .replace(/(?<!_)_([^_]+)_(?!_)/g, '$1')
    .replace(/~~([^~]+)~~/g, '$1')
    .replace(/^\|/gm, '')
    .replace(/\|$/gm, '')
    .replace(/\|/g, ' ');

  return normalizeWhitespace(cleaned);
}

function buildPdfLines(items) {
  const lines = [];

  for (const item of items) {
    if (!item.str?.trim()) {
      continue;
    }

    const y = Number(item.transform?.[5] ?? 0);
    const x = Number(item.transform?.[4] ?? 0);
    const current = lines[lines.length - 1];

    if (!current || Math.abs(current.y - y) > 3) {
      lines.push({ y, chunks: [{ x, text: item.str }] });
      continue;
    }

    current.chunks.push({ x, text: item.str });
  }

  return lines
    .map((line) => line.chunks.sort((a, b) => a.x - b.x).map((chunk) => chunk.text).join(' '))
    .join('\n');
}

async function extractPdfText(file) {
  const data = await file.arrayBuffer();
  const loadingTask = pdfjs.getDocument({ data });
  const pdf = await loadingTask.promise;
  const pages = [];

  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber);
    const content = await page.getTextContent();
    const text = buildPdfLines(content.items);
    if (text.trim()) {
      pages.push(text);
    }
  }

  const combined = normalizeWhitespace(pages.join(`\n${SECTION_MARKER}\n`));
  if (!combined.trim()) {
    throw new Error('No pude extraer texto utilizable del PDF. Probablemente es un PDF escaneado o mal estructurado.');
  }

  return combined;
}

function appendBlockBreaks(root) {
  root.querySelectorAll('script,style,noscript').forEach((node) => node.remove());
  root.querySelectorAll('br').forEach((node) => node.replaceWith('\n'));
  root.querySelectorAll('p,div,section,article,header,footer,blockquote,li,ul,ol,h1,h2,h3,h4,h5,h6,table,tr,td,th,pre').forEach((node) => {
    node.append('\n');
  });
}

function htmlMarkupToText(markup) {
  const doc = new DOMParser().parseFromString(markup, 'text/html');
  appendBlockBreaks(doc);
  return normalizeWhitespace(doc.body?.textContent ?? doc.documentElement?.textContent ?? '');
}

function dirname(path) {
  const index = path.lastIndexOf('/');
  return index >= 0 ? path.slice(0, index + 1) : '';
}

function joinPath(base, relative) {
  const normalized = `${base}${relative}`.replace(/\\/g, '/');
  const parts = normalized.split('/');
  const resolved = [];

  for (const part of parts) {
    if (!part || part === '.') {
      continue;
    }
    if (part === '..') {
      resolved.pop();
      continue;
    }
    resolved.push(part);
  }

  return resolved.join('/');
}

function readZipText(files, path) {
  const normalizedPath = path.replace(/^\/+/, '').replace(/\\/g, '/');
  const direct = files[normalizedPath] ?? files[decodeURIComponent(normalizedPath)];
  if (!direct) {
    throw new Error(`No encontré ${normalizedPath} dentro del EPUB.`);
  }

  try {
    return strFromU8(direct);
  } catch {
    return strFromU8(direct, true);
  }
}

function extractSpineDocuments(opfMarkup) {
  const opf = new DOMParser().parseFromString(opfMarkup, 'application/xml');
  const manifestItems = [...opf.getElementsByTagName('item')].reduce((map, item) => {
    map.set(item.getAttribute('id'), {
      href: item.getAttribute('href'),
      mediaType: item.getAttribute('media-type')
    });
    return map;
  }, new Map());

  return [...opf.getElementsByTagName('itemref')]
    .map((itemRef) => manifestItems.get(itemRef.getAttribute('idref')))
    .filter((item) => item?.href);
}

async function extractEpubText(file) {
  const archive = unzipSync(new Uint8Array(await file.arrayBuffer()));
  const containerMarkup = readZipText(archive, 'META-INF/container.xml');
  const container = new DOMParser().parseFromString(containerMarkup, 'application/xml');
  const rootfile = container.getElementsByTagName('rootfile')[0];

  if (!rootfile) {
    throw new Error('El EPUB no tiene un `container.xml` válido.');
  }

  const opfPath = rootfile.getAttribute('full-path');
  const opfMarkup = readZipText(archive, opfPath);
  const spineItems = extractSpineDocuments(opfMarkup);
  const basePath = dirname(opfPath);
  const sections = [];

  for (const item of spineItems) {
    if (!/xhtml|html|xml/i.test(item.mediaType ?? '')) {
      continue;
    }

    const chapterPath = joinPath(basePath, item.href);
    const chapterMarkup = readZipText(archive, chapterPath);
    const chapterText = htmlMarkupToText(chapterMarkup);
    if (chapterText.trim()) {
      sections.push(chapterText);
    }
  }

  const combined = normalizeWhitespace(sections.join(`\n${SECTION_MARKER}\n`));
  if (!combined.trim()) {
    throw new Error('No pude extraer capítulos legibles del EPUB.');
  }

  return combined;
}

function extensionFromFile(file) {
  const parts = file.name.toLowerCase().split('.');
  return parts.length > 1 ? parts.pop() : 'txt';
}

function baseTitle(fileName) {
  return fileName.replace(/\.[^.]+$/, '').trim() || 'Documento sin título';
}

function structuralText(text) {
  const normalized = normalizeWhitespace(text);
  const lines = normalized.split('\n');
  const output = [];

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index].trim();
    if (!line) {
      continue;
    }

    output.push(line);

    const nextLine = lines[index + 1]?.trim() ?? '';
    const looksLikeTitle =
      line.length <= 64 &&
      nextLine &&
      nextLine.length > 64;

    if (looksLikeTitle) {
      output.push(SECTION_MARKER);
    }
  }

  return output.join('\n');
}

function wordDelayFactor(rawWord, sectionStart) {
  const trimmed = rawWord.trim();
  const coreLength = [...trimmed].filter((char) => WORD_CHARS.test(char)).length;
  let factor = 1;

  if (/[.!?…]["')\]]*$/.test(trimmed)) {
    factor += 1.35;
  } else if (/[;:]["')\]]*$/.test(trimmed)) {
    factor += 0.8;
  } else if (/[,]["')\]]*$/.test(trimmed)) {
    factor += 0.4;
  }

  if (sectionStart) {
    factor += 1.6;
  }

  if (coreLength >= 8) {
    factor += 0.12;
  }
  if (coreLength >= 12) {
    factor += 0.16;
  }

  return factor;
}

function coreSpan(word) {
  let start = 0;
  let end = word.length;

  while (start < end && !WORD_CHARS.test(word[start])) {
    start += 1;
  }

  while (end > start && !WORD_CHARS.test(word[end - 1])) {
    end -= 1;
  }

  return {
    start,
    end,
    core: word.slice(start, end)
  };
}

export function splitOrpWord(word) {
  if (!word) {
    return { left: '', pivot: '·', right: '' };
  }

  const { start, core } = coreSpan(word);
  const characters = [...(core || word)];
  const pivotIndex = Math.max(0, Math.min(characters.length - 1, Math.ceil(characters.length / 3) - 1));
  const rawPivotIndex = core ? start + [...core].slice(0, pivotIndex).join('').length : pivotIndex;

  return {
    left: word.slice(0, rawPivotIndex),
    pivot: word.slice(rawPivotIndex, rawPivotIndex + 1) || word.slice(-1),
    right: word.slice(rawPivotIndex + 1)
  };
}

export function tokenizeText(text) {
  const sections = structuralText(text).split(SECTION_MARKER);
  const tokens = [];
  let nextStartsSection = false;

  for (const section of sections) {
    const words = section.match(/\S+/g) ?? [];
    for (const rawWord of words) {
      tokens.push({
        raw: rawWord,
        factor: wordDelayFactor(rawWord, nextStartsSection),
        sectionStart: nextStartsSection
      });
      nextStartsSection = false;
    }

    if (words.length) {
      nextStartsSection = true;
    }
  }

  return tokens;
}

export function delayMsForToken(token, wpm) {
  const base = 60000 / Math.max(100, Math.min(1000, Number(wpm) || 300));
  return Math.round(base * (token?.factor ?? 1));
}

export async function extractDocument(file) {
  const extension = extensionFromFile(file);
  let content = '';

  if (extension === 'txt') {
    content = normalizeWhitespace(await file.text());
  } else if (extension === 'md') {
    content = stripMarkdown(await file.text());
  } else if (extension === 'pdf') {
    content = await extractPdfText(file);
  } else if (extension === 'epub') {
    content = await extractEpubText(file);
  } else {
    throw new Error(`Formato no soportado: .${extension}`);
  }

  const tokens = tokenizeText(content);
  if (!tokens.length) {
    throw new Error('El archivo no contiene palabras legibles después de procesarlo.');
  }

  return {
    title: baseTitle(file.name),
    format: extension.toUpperCase(),
    sourceName: file.name,
    content,
    tokenCount: tokens.length
  };
}

export function createPastedDocument(title, text) {
  const normalizedTitle = title.trim() || `Texto pegado ${new Date().toLocaleString('es-ES')}`;
  const content = normalizeWhitespace(text);
  const tokens = tokenizeText(content);

  if (!tokens.length) {
    throw new Error('El texto pegado está vacío o no contiene palabras legibles.');
  }

  return {
    title: normalizedTitle,
    format: 'TXT',
    sourceName: normalizedTitle,
    content,
    tokenCount: tokens.length
  };
}

