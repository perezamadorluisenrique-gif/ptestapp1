import { createPastedDocument, delayMsForToken, extractDocument, splitOrpWord, tokenizeText } from './parsers.js';
import { defaultSettings, settingsStore, storage } from './storage.js';

const app = document.querySelector('#app');
const fileInput = document.querySelector('#fileInput');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

const state = {
  view: 'library',
  loading: true,
  busyMessage: '',
  folders: [],
  documents: [],
  settings: settingsStore.load(),
  sheet: { type: null, data: null },
  reader: {
    documentId: null,
    tokens: [],
    index: 0,
    playing: false,
    wpm: settingsStore.load().defaultWpm,
    timerId: null,
    lastSavedIndex: 0
  },
  longPressDocId: null
};

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatPercent(value) {
  return `${Math.round(value)}%`;
}

function resolveTheme() {
  if (state.settings.theme === 'auto') {
    return prefersDark.matches ? 'dark' : 'light';
  }
  return state.settings.theme;
}

function applyTheme() {
  document.documentElement.dataset.theme = resolveTheme();
  document.body.dataset.view = state.view;
  document.documentElement.style.setProperty('--orp-color', state.settings.orpColor);
  document.documentElement.style.setProperty('--reader-font-size', `${state.settings.fontSize}px`);
}

function documentProgress(doc) {
  if (!doc.tokenCount) {
    return 0;
  }
  return Math.min(100, (doc.currentIndex / doc.tokenCount) * 100);
}

function folderDocuments(folderId) {
  return state.documents.filter((doc) => (doc.folderId ?? null) === folderId);
}

function currentDocument() {
  return state.documents.find((doc) => doc.id === state.reader.documentId) ?? null;
}

function setBusy(message) {
  state.busyMessage = message;
  render();
}

function clearBusy() {
  state.busyMessage = '';
  render();
}

function showSheet(type, data = null) {
  state.sheet = { type, data };
  render();
}

function closeSheet() {
  state.sheet = { type: null, data: null };
  render();
}

function toast(message) {
  const node = document.createElement('div');
  node.className = 'toast';
  node.textContent = message;
  document.body.append(node);
  requestAnimationFrame(() => node.classList.add('toast--visible'));
  setTimeout(() => {
    node.classList.remove('toast--visible');
    setTimeout(() => node.remove(), 220);
  }, 2200);
}

async function refreshLibrary() {
  const [folders, documents] = await Promise.all([
    storage.getFolders(),
    storage.getDocuments()
  ]);
  state.folders = folders;
  state.documents = documents;
  state.loading = false;
  render();
}

function shellTemplate(content) {
  return `
    <div class="shell">
      ${content}
      ${sheetTemplate()}
      ${state.busyMessage ? `<div class="busy"><div class="busy__card">${escapeHtml(state.busyMessage)}</div></div>` : ''}
    </div>
  `;
}

function libraryTemplate() {
  const uncategorized = folderDocuments(null);
  const hasContent = state.folders.length || uncategorized.length;

  return shellTemplate(`
    <header class="topbar">
      <div>
        <p class="eyebrow">Biblioteca local</p>
        <h1>flowread</h1>
      </div>
      <button class="icon-button" data-open-settings aria-label="Abrir ajustes">⚙</button>
    </header>

    <main class="library">
      <section class="toolbar">
        <button class="primary-button" data-import-file>Subir archivo</button>
        <button class="secondary-button" data-paste-text>Pegar texto</button>
        <button class="secondary-button" data-create-folder>Nueva carpeta</button>
      </section>

      <section class="intro-card">
        <p class="intro-card__title">Lectura RSVP</p>
        <p class="intro-card__text">Una palabra por vez, ORP fijo, progreso guardado y extracción local de TXT, MD, PDF y EPUB.</p>
      </section>

      ${hasContent ? folderSectionsTemplate(uncategorized) : emptyLibraryTemplate()}
    </main>
  `);
}

function emptyLibraryTemplate() {
  return `
    <section class="empty-state">
      <p class="empty-state__title">La biblioteca está vacía.</p>
      <p class="empty-state__text">Importa un archivo o pega texto para empezar. Todo queda guardado solo en este dispositivo.</p>
    </section>
  `;
}

function folderSectionsTemplate(uncategorized) {
  const folderSections = state.folders.map((folder) => {
    const docs = folderDocuments(folder.id);
    return `
      <section class="folder-section">
        <div class="folder-section__header" data-folder-id="${folder.id}">
          <div>
            <h2>${escapeHtml(folder.name)}</h2>
            <p>${docs.length} archivo${docs.length === 1 ? '' : 's'}</p>
          </div>
          <button class="icon-button" data-folder-menu="${folder.id}" aria-label="Opciones de carpeta">⋯</button>
        </div>
        ${docs.length ? docs.map(documentCardTemplate).join('') : '<p class="folder-section__empty">Carpeta vacía.</p>'}
      </section>
    `;
  }).join('');

  const looseSection = `
    <section class="folder-section">
      <div class="folder-section__header">
        <div>
          <h2>Sin carpeta</h2>
          <p>${uncategorized.length} archivo${uncategorized.length === 1 ? '' : 's'}</p>
        </div>
      </div>
      ${uncategorized.length ? uncategorized.map(documentCardTemplate).join('') : '<p class="folder-section__empty">Aquí aparecen los archivos sueltos.</p>'}
    </section>
  `;

  return `${folderSections}${looseSection}`;
}

function documentCardTemplate(doc) {
  const progress = documentProgress(doc);
  const folderName = doc.folderId ? state.folders.find((folder) => folder.id === doc.folderId)?.name ?? '' : '';

  return `
    <article class="doc-card" data-doc-id="${doc.id}">
      <button class="icon-button doc-card__menu" data-doc-menu="${doc.id}" aria-label="Opciones del archivo">⋯</button>
      <div class="doc-card__body">
        <div class="doc-card__topline">
          <h3>${escapeHtml(doc.title)}</h3>
          <span class="badge">${escapeHtml(doc.format)}</span>
        </div>
        <p class="doc-card__meta">${doc.tokenCount.toLocaleString('es-ES')} palabras${folderName ? ` · ${escapeHtml(folderName)}` : ''}</p>
        <div class="progress-row">
          <div class="progress-bar"><span style="width:${progress}%"></span></div>
          <strong>${formatPercent(progress)}</strong>
        </div>
      </div>
      <div class="doc-card__reorder">
        <button class="mini-button" data-doc-order="${doc.id}" data-direction="-1" aria-label="Subir">↑</button>
        <button class="mini-button" data-doc-order="${doc.id}" data-direction="1" aria-label="Bajar">↓</button>
      </div>
    </article>
  `;
}
function readerTemplate() {
  const doc = currentDocument();
  const token = state.reader.tokens[state.reader.index] ?? null;
  const display = splitOrpWord(token?.raw ?? '');
  const progress = doc ? documentProgress({
    ...doc,
    currentIndex: state.reader.index
  }) : 0;
  const atEnd = state.reader.index >= state.reader.tokens.length;

  return shellTemplate(`
    <main class="reader">
      <header class="reader__header">
        <button class="secondary-button" data-back-library>Biblioteca</button>
        <div class="reader__title">
          <strong>${escapeHtml(doc?.title ?? '')}</strong>
          <span>${formatPercent(progress)}</span>
        </div>
      </header>

      <section class="reader__viewport" data-reader-tap>
        <div class="reader__hint reader__hint--left">−10</div>
        <div class="reader__hint reader__hint--right">+10</div>
        <div class="reader__word-wrap">
          <div class="reader__anchor"></div>
          <div class="reader__word" aria-live="polite">
            <span class="reader__left">${escapeHtml(display.left)}</span>
            <span class="reader__pivot">${escapeHtml(display.pivot)}</span>
            <span class="reader__right">${escapeHtml(display.right)}</span>
          </div>
          <p class="reader__status">${atEnd ? 'Fin del documento' : state.reader.playing ? 'Reproduciendo' : 'Pausado'}</p>
        </div>
      </section>

      <section class="reader__controls">
        <div class="reader__buttons">
          <button class="secondary-button" data-reader-restart>Inicio</button>
          <button class="primary-button" data-reader-toggle>${state.reader.playing ? 'Pausa' : 'Play'}</button>
          <button class="secondary-button" data-reader-skip="-10">−10</button>
          <button class="secondary-button" data-reader-skip="10">+10</button>
        </div>

        <div class="speed-panel">
          <button class="mini-button mini-button--wide" data-speed-step="-20">−</button>
          <div class="speed-panel__center">
            <label for="speedRange">${Math.round(state.reader.wpm)} ppm</label>
            <input id="speedRange" type="range" min="100" max="1000" step="10" value="${Math.round(state.reader.wpm)}" data-speed-range>
          </div>
          <button class="mini-button mini-button--wide" data-speed-step="20">+</button>
        </div>
      </section>
    </main>
  `);
}

function themeOptionTemplate(value, label) {
  return `
    <button class="chip ${state.settings.theme === value ? 'chip--active' : ''}" data-theme-value="${value}">
      ${label}
    </button>
  `;
}

function sheetTemplate() {
  if (!state.sheet.type) {
    return '';
  }

  const { type, data } = state.sheet;

  if (type === 'settings') {
    return `
      <div class="sheet-backdrop" data-close-sheet>
        <section class="sheet" onclick="event.stopPropagation()">
          <div class="sheet__header">
            <h2>Ajustes</h2>
            <button class="icon-button" data-close-sheet>✕</button>
          </div>
          <label class="field">
            <span>Velocidad por defecto</span>
            <input id="settingsDefaultWpm" type="range" min="100" max="1000" step="10" value="${state.settings.defaultWpm}">
            <strong>${state.settings.defaultWpm} ppm</strong>
          </label>
          <div class="field">
            <span>Tema</span>
            <div class="chip-row">
              ${themeOptionTemplate('dark', 'Oscuro')}
              ${themeOptionTemplate('light', 'Claro')}
              ${themeOptionTemplate('auto', 'Auto')}
            </div>
          </div>
          <label class="field">
            <span>Tamaño de fuente</span>
            <input id="settingsFontSize" type="range" min="40" max="120" step="2" value="${state.settings.fontSize}">
            <strong>${state.settings.fontSize}px</strong>
          </label>
          <label class="field">
            <span>Color ORP</span>
            <input id="settingsOrpColor" type="color" value="${state.settings.orpColor}">
          </label>
          <button class="primary-button" data-save-settings>Guardar ajustes</button>
        </section>
      </div>
    `;
  }

  if (type === 'doc-actions') {
    const doc = state.documents.find((item) => item.id === data.documentId);
    if (!doc) {
      return '';
    }

    return `
      <div class="sheet-backdrop" data-close-sheet>
        <section class="sheet sheet--compact" onclick="event.stopPropagation()">
          <div class="sheet__header">
            <h2>${escapeHtml(doc.title)}</h2>
            <button class="icon-button" data-close-sheet>✕</button>
          </div>
          <button class="sheet-action" data-doc-rename="${doc.id}">Renombrar</button>
          <button class="sheet-action" data-doc-move="${doc.id}">Mover a carpeta</button>
          <button class="sheet-action sheet-action--danger" data-doc-delete="${doc.id}">Eliminar</button>
        </section>
      </div>
    `;
  }

  if (type === 'folder-actions') {
    const folder = state.folders.find((item) => item.id === data.folderId);
    if (!folder) {
      return '';
    }

    return `
      <div class="sheet-backdrop" data-close-sheet>
        <section class="sheet sheet--compact" onclick="event.stopPropagation()">
          <div class="sheet__header">
            <h2>${escapeHtml(folder.name)}</h2>
            <button class="icon-button" data-close-sheet>✕</button>
          </div>
          <button class="sheet-action" data-folder-rename="${folder.id}">Renombrar</button>
          <button class="sheet-action sheet-action--danger" data-folder-delete="${folder.id}">Eliminar</button>
        </section>
      </div>
    `;
  }

  if (type === 'move-doc') {
    const doc = state.documents.find((item) => item.id === data.documentId);
    if (!doc) {
      return '';
    }

    return `
      <div class="sheet-backdrop" data-close-sheet>
        <section class="sheet sheet--compact" onclick="event.stopPropagation()">
          <div class="sheet__header">
            <h2>Mover archivo</h2>
            <button class="icon-button" data-close-sheet>✕</button>
          </div>
          <button class="sheet-action" data-move-target="${doc.id}" data-folder-target="">Sin carpeta</button>
          ${state.folders.map((folder) => `
            <button class="sheet-action" data-move-target="${doc.id}" data-folder-target="${folder.id}">
              ${escapeHtml(folder.name)}
            </button>
          `).join('')}
        </section>
      </div>
    `;
  }

  if (type === 'paste') {
    return `
      <div class="sheet-backdrop" data-close-sheet>
        <section class="sheet" onclick="event.stopPropagation()">
          <div class="sheet__header">
            <h2>Pegar texto</h2>
            <button class="icon-button" data-close-sheet>✕</button>
          </div>
          <label class="field">
            <span>Título</span>
            <input id="pasteTitle" type="text" maxlength="120" value="${escapeHtml(data?.title ?? '')}">
          </label>
          <label class="field">
            <span>Contenido</span>
            <textarea id="pasteContent" rows="10" placeholder="Pega aquí el texto">${escapeHtml(data?.content ?? '')}</textarea>
          </label>
          <button class="primary-button" data-create-pasted-document>Crear archivo</button>
        </section>
      </div>
    `;
  }

  if (type === 'resume') {
    const doc = state.documents.find((item) => item.id === data.documentId);
    if (!doc) {
      return '';
    }

    return `
      <div class="sheet-backdrop" data-close-sheet>
        <section class="sheet sheet--compact" onclick="event.stopPropagation()">
          <div class="sheet__header">
            <h2>${escapeHtml(doc.title)}</h2>
            <button class="icon-button" data-close-sheet>✕</button>
          </div>
          <p class="sheet__text">Hay progreso guardado en ${formatPercent(documentProgress(doc))}.</p>
          <button class="primary-button" data-resume-document="${doc.id}">Continuar</button>
          <button class="secondary-button" data-restart-document="${doc.id}">Reiniciar</button>
        </section>
      </div>
    `;
  }

  return '';
}

function render() {
  applyTheme();
  app.innerHTML = state.view === 'reader' ? readerTemplate() : libraryTemplate();
  wireLongPress();
}

function clearReaderTimer() {
  if (state.reader.timerId) {
    clearTimeout(state.reader.timerId);
    state.reader.timerId = null;
  }
}

async function persistReaderProgress(force = false) {
  const doc = currentDocument();
  if (!doc) {
    return;
  }

  const nextIndex = Math.max(0, Math.min(state.reader.index, state.reader.tokens.length));
  const changedEnough = force || Math.abs(nextIndex - state.reader.lastSavedIndex) >= 5;
  if (!changedEnough && nextIndex !== 0 && nextIndex !== state.reader.tokens.length) {
    return;
  }

  state.reader.lastSavedIndex = nextIndex;
  const progressPercent = state.reader.tokens.length
    ? (nextIndex / state.reader.tokens.length) * 100
    : 0;

  await storage.updateDocument(doc.id, {
    currentIndex: nextIndex,
    progressPercent,
    lastOpenedAt: new Date().toISOString()
  });
  await refreshLibrary();
}

function scheduleNextToken() {
  clearReaderTimer();
  if (!state.reader.playing) {
    return;
  }

  if (state.reader.index >= state.reader.tokens.length) {
    state.reader.playing = false;
    render();
    persistReaderProgress(true);
    return;
  }

  render();

  const currentToken = state.reader.tokens[state.reader.index];
  state.reader.timerId = setTimeout(async () => {
    state.reader.index += 1;
    if (state.reader.index < state.reader.tokens.length) {
      await persistReaderProgress(false);
      scheduleNextToken();
      return;
    }
    state.reader.playing = false;
    await persistReaderProgress(true);
    render();
  }, delayMsForToken(currentToken, state.reader.wpm));
}
async function stopReader(forceSave = true) {
  clearReaderTimer();
  state.reader.playing = false;
  if (forceSave) {
    await persistReaderProgress(true);
  }
}

async function openDocumentForReading(documentId, startFromSaved = true) {
  const doc = await storage.getDocument(documentId);
  if (!doc) {
    return;
  }

  state.reader.documentId = doc.id;
  state.reader.tokens = tokenizeText(doc.content);
  state.reader.index = startFromSaved ? Math.min(doc.currentIndex ?? 0, state.reader.tokens.length) : 0;
  state.reader.wpm = state.settings.defaultWpm;
  state.reader.playing = false;
  state.reader.lastSavedIndex = state.reader.index;
  state.view = 'reader';
  closeSheet();
  render();
}

async function requestOpenDocument(documentId) {
  const doc = state.documents.find((item) => item.id === documentId);
  if (!doc) {
    return;
  }

  if (doc.currentIndex > 0 && doc.currentIndex < doc.tokenCount) {
    showSheet('resume', { documentId });
    return;
  }

  await openDocumentForReading(documentId, false);
}

async function importFile(file) {
  setBusy(`Procesando ${file.name}...`);
  try {
    const parsed = await extractDocument(file);
    const documentRecord = await storage.createDocument(parsed);
    await refreshLibrary();
    clearBusy();
    toast('Archivo importado.');
    await openDocumentForReading(documentRecord.id, false);
  } catch (error) {
    clearBusy();
    alert(error.message);
  }
}

async function createFolder() {
  const name = prompt('Nombre de la carpeta');
  if (!name?.trim()) {
    return;
  }
  await storage.createFolder(name);
  await refreshLibrary();
}

async function renameFolder(folderId) {
  closeSheet();
  const folder = state.folders.find((item) => item.id === folderId);
  const name = prompt('Nuevo nombre de la carpeta', folder?.name ?? '');
  if (!name?.trim()) {
    return;
  }
  await storage.renameFolder(folderId, name);
  await refreshLibrary();
}

async function removeFolder(folderId) {
  closeSheet();
  if (!confirm('La carpeta se eliminará y sus archivos pasarán a "Sin carpeta".')) {
    return;
  }
  await storage.deleteFolder(folderId);
  await refreshLibrary();
}

async function renameDocument(documentId) {
  closeSheet();
  const doc = state.documents.find((item) => item.id === documentId);
  const title = prompt('Nuevo nombre del archivo', doc?.title ?? '');
  if (!title?.trim()) {
    return;
  }
  await storage.renameDocument(documentId, title);
  await refreshLibrary();
}

async function removeDocument(documentId) {
  closeSheet();
  if (!confirm('Este archivo se eliminará de la biblioteca.')) {
    return;
  }
  await storage.deleteDocument(documentId);
  await refreshLibrary();
}

async function moveDocument(documentId, folderId) {
  closeSheet();
  await storage.moveDocument(documentId, folderId || null);
  await refreshLibrary();
}

async function saveSettingsFromSheet() {
  const defaultWpm = Number(document.querySelector('#settingsDefaultWpm')?.value ?? defaultSettings.defaultWpm);
  const fontSize = Number(document.querySelector('#settingsFontSize')?.value ?? defaultSettings.fontSize);
  const orpColor = document.querySelector('#settingsOrpColor')?.value ?? defaultSettings.orpColor;

  state.settings = settingsStore.save({
    ...state.settings,
    defaultWpm,
    fontSize,
    orpColor
  });

  if (state.view === 'reader') {
    state.reader.wpm = defaultWpm;
  }

  closeSheet();
  render();
}

async function createDocumentFromPaste() {
  const title = document.querySelector('#pasteTitle')?.value ?? '';
  const content = document.querySelector('#pasteContent')?.value ?? '';

  try {
    const parsed = createPastedDocument(title, content);
    const documentRecord = await storage.createDocument(parsed);
    closeSheet();
    await refreshLibrary();
    await openDocumentForReading(documentRecord.id, false);
  } catch (error) {
    alert(error.message);
  }
}

function openPasteSheet(prefill = {}) {
  showSheet('paste', {
    title: prefill.title ?? '',
    content: prefill.content ?? ''
  });
}

async function handlePasteAction() {
  try {
    const clipboardText = await navigator.clipboard.readText();
    if (clipboardText.trim()) {
      openPasteSheet({
        title: `Texto pegado ${new Date().toLocaleString('es-ES')}`,
        content: clipboardText
      });
      return;
    }
  } catch {}

  openPasteSheet({
    title: `Texto pegado ${new Date().toLocaleString('es-ES')}`,
    content: ''
  });
}

async function backToLibrary() {
  await stopReader(true);
  state.view = 'library';
  render();
}

async function togglePlayback() {
  state.reader.playing = !state.reader.playing;
  if (state.reader.playing) {
    scheduleNextToken();
    return;
  }
  await persistReaderProgress(true);
  render();
}

async function restartReader() {
  await stopReader(false);
  state.reader.index = 0;
  state.reader.lastSavedIndex = 0;
  await persistReaderProgress(true);
  render();
}

async function skipWords(amount) {
  await stopReader(false);
  state.reader.index = Math.max(0, Math.min(state.reader.index + amount, state.reader.tokens.length));
  await persistReaderProgress(true);
  render();
}

function wireLongPress() {
  document.querySelectorAll('[data-doc-id]').forEach((element) => {
    let timer = null;
    const docId = element.dataset.docId;

    const start = () => {
      timer = window.setTimeout(() => {
        state.longPressDocId = docId;
        showSheet('doc-actions', { documentId: docId });
      }, 420);
    };

    const cancel = () => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    };

    element.addEventListener('pointerdown', start);
    element.addEventListener('pointerup', cancel);
    element.addEventListener('pointerleave', cancel);
    element.addEventListener('pointercancel', cancel);
  });
}

document.addEventListener('click', async (event) => {
  const target = event.target;

  if (target.closest('[data-open-settings]')) {
    showSheet('settings');
    return;
  }

  if (target.closest('[data-close-sheet]')) {
    closeSheet();
    return;
  }

  if (target.closest('[data-import-file]')) {
    fileInput.click();
    return;
  }

  if (target.closest('[data-create-folder]')) {
    await createFolder();
    return;
  }

  if (target.closest('[data-paste-text]')) {
    await handlePasteAction();
    return;
  }

  const docMenu = target.closest('[data-doc-menu]');
  if (docMenu) {
    showSheet('doc-actions', { documentId: docMenu.dataset.docMenu });
    return;
  }

  const folderMenu = target.closest('[data-folder-menu]');
  if (folderMenu) {
    showSheet('folder-actions', { folderId: folderMenu.dataset.folderMenu });
    return;
  }

  const docOrder = target.closest('[data-doc-order]');
  if (docOrder) {
    await storage.reorderDocument(docOrder.dataset.docOrder, Number(docOrder.dataset.direction));
    await refreshLibrary();
    return;
  }

  const docRename = target.closest('[data-doc-rename]');
  if (docRename) {
    await renameDocument(docRename.dataset.docRename);
    return;
  }

  const docMove = target.closest('[data-doc-move]');
  if (docMove) {
    showSheet('move-doc', { documentId: docMove.dataset.docMove });
    return;
  }

  const docDelete = target.closest('[data-doc-delete]');
  if (docDelete) {
    await removeDocument(docDelete.dataset.docDelete);
    return;
  }

  const folderRename = target.closest('[data-folder-rename]');
  if (folderRename) {
    await renameFolder(folderRename.dataset.folderRename);
    return;
  }

  const folderDelete = target.closest('[data-folder-delete]');
  if (folderDelete) {
    await removeFolder(folderDelete.dataset.folderDelete);
    return;
  }

  const moveTarget = target.closest('[data-move-target]');
  if (moveTarget) {
    await moveDocument(moveTarget.dataset.moveTarget, moveTarget.dataset.folderTarget || null);
    return;
  }

  const resumeButton = target.closest('[data-resume-document]');
  if (resumeButton) {
    await openDocumentForReading(resumeButton.dataset.resumeDocument, true);
    return;
  }

  const restartButton = target.closest('[data-restart-document]');
  if (restartButton) {
    await openDocumentForReading(restartButton.dataset.restartDocument, false);
    return;
  }

  if (target.closest('[data-save-settings]')) {
    await saveSettingsFromSheet();
    return;
  }

  const themeButton = target.closest('[data-theme-value]');
  if (themeButton) {
    state.settings = {
      ...state.settings,
      theme: themeButton.dataset.themeValue
    };
    render();
    return;
  }

  if (target.closest('[data-create-pasted-document]')) {
    await createDocumentFromPaste();
    return;
  }

  if (target.closest('[data-back-library]')) {
    await backToLibrary();
    return;
  }

  if (target.closest('[data-reader-toggle]')) {
    await togglePlayback();
    return;
  }

  if (target.closest('[data-reader-restart]')) {
    await restartReader();
    return;
  }

  const readerSkip = target.closest('[data-reader-skip]');
  if (readerSkip) {
    await skipWords(Number(readerSkip.dataset.readerSkip));
    return;
  }

  const speedStep = target.closest('[data-speed-step]');
  if (speedStep) {
    state.reader.wpm = Math.max(100, Math.min(1000, state.reader.wpm + Number(speedStep.dataset.speedStep)));
    render();
    if (state.reader.playing) {
      scheduleNextToken();
    }
    return;
  }

  const docCard = target.closest('[data-doc-id]');
  if (docCard && !target.closest('button')) {
    const docId = docCard.dataset.docId;
    if (state.longPressDocId === docId) {
      state.longPressDocId = null;
      return;
    }
    await requestOpenDocument(docId);
    return;
  }

  const readerTap = target.closest('[data-reader-tap]');
  if (readerTap) {
    const bounds = readerTap.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const ratio = x / bounds.width;

    if (ratio < 0.3) {
      await skipWords(-10);
    } else if (ratio > 0.7) {
      await skipWords(10);
    } else {
      await togglePlayback();
    }
  }
});

document.addEventListener('input', (event) => {
  const target = event.target;
  if (target.matches('[data-speed-range]')) {
    state.reader.wpm = Number(target.value);
    if (state.reader.playing) {
      scheduleNextToken();
    } else {
      render();
    }
    return;
  }

  if (target.id === 'settingsDefaultWpm') {
    state.settings = {
      ...state.settings,
      defaultWpm: Number(target.value)
    };
    render();
    return;
  }

  if (target.id === 'settingsFontSize') {
    state.settings = {
      ...state.settings,
      fontSize: Number(target.value)
    };
    render();
  }
});

fileInput.addEventListener('change', async (event) => {
  const [file] = event.target.files ?? [];
  fileInput.value = '';
  if (!file) {
    return;
  }
  await importFile(file);
});

prefersDark.addEventListener('change', () => {
  if (state.settings.theme === 'auto') {
    applyTheme();
  }
});

document.addEventListener('visibilitychange', () => {
  if (document.hidden && state.view === 'reader') {
    stopReader(true);
  }
});

window.addEventListener('beforeunload', () => {
  if (state.view === 'reader') {
    stopReader(true);
  }
});

render();
refreshLibrary();
