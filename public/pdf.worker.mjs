/**
 * @licstart The following is the entire license notice for the
 * JavaScript code in this page
 *
 * Copyright 2024 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @licend The above is the entire license notice for the
 * JavaScript code in this page
 */

/**
 * pdfjsVersion = 5.6.205
 * pdfjsBuild = ada343803
 */
/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};

;// ./src/shared/util.js
const isNodeJS = typeof process === "object" && process + "" === "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser");
const FONT_IDENTITY_MATRIX = [0.001, 0, 0, 0.001, 0, 0];
const LINE_FACTOR = 1.35;
const LINE_DESCENT_FACTOR = 0.35;
const BASELINE_FACTOR = LINE_DESCENT_FACTOR / LINE_FACTOR;
const RenderingIntentFlag = {
  ANY: 0x01,
  DISPLAY: 0x02,
  PRINT: 0x04,
  SAVE: 0x08,
  ANNOTATIONS_FORMS: 0x10,
  ANNOTATIONS_STORAGE: 0x20,
  ANNOTATIONS_DISABLE: 0x40,
  IS_EDITING: 0x80,
  OPLIST: 0x100
};
const AnnotationMode = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_FORMS: 2,
  ENABLE_STORAGE: 3
};
const AnnotationEditorPrefix = "pdfjs_internal_editor_";
const AnnotationEditorType = {
  DISABLE: -1,
  NONE: 0,
  FREETEXT: 3,
  HIGHLIGHT: 9,
  STAMP: 13,
  INK: 15,
  POPUP: 16,
  SIGNATURE: 101,
  COMMENT: 102
};
const AnnotationEditorParamsType = {
  RESIZE: 1,
  CREATE: 2,
  FREETEXT_SIZE: 11,
  FREETEXT_COLOR: 12,
  FREETEXT_OPACITY: 13,
  INK_COLOR: 21,
  INK_THICKNESS: 22,
  INK_OPACITY: 23,
  HIGHLIGHT_COLOR: 31,
  HIGHLIGHT_THICKNESS: 32,
  HIGHLIGHT_FREE: 33,
  HIGHLIGHT_SHOW_ALL: 34,
  DRAW_STEP: 41
};
const PermissionFlag = {
  PRINT: 0x04,
  MODIFY_CONTENTS: 0x08,
  COPY: 0x10,
  MODIFY_ANNOTATIONS: 0x20,
  FILL_INTERACTIVE_FORMS: 0x100,
  COPY_FOR_ACCESSIBILITY: 0x200,
  ASSEMBLE: 0x400,
  PRINT_HIGH_QUALITY: 0x800
};
const MeshFigureType = {
  TRIANGLES: 1,
  LATTICE: 2,
  PATCH: 3
};
const TextRenderingMode = {
  FILL: 0,
  STROKE: 1,
  FILL_STROKE: 2,
  INVISIBLE: 3,
  FILL_ADD_TO_PATH: 4,
  STROKE_ADD_TO_PATH: 5,
  FILL_STROKE_ADD_TO_PATH: 6,
  ADD_TO_PATH: 7,
  FILL_STROKE_MASK: 3,
  ADD_TO_PATH_FLAG: 4
};
const ImageKind = {
  GRAYSCALE_1BPP: 1,
  RGB_24BPP: 2,
  RGBA_32BPP: 3
};
const AnnotationType = {
  TEXT: 1,
  LINK: 2,
  FREETEXT: 3,
  LINE: 4,
  SQUARE: 5,
  CIRCLE: 6,
  POLYGON: 7,
  POLYLINE: 8,
  HIGHLIGHT: 9,
  UNDERLINE: 10,
  SQUIGGLY: 11,
  STRIKEOUT: 12,
  STAMP: 13,
  CARET: 14,
  INK: 15,
  POPUP: 16,
  FILEATTACHMENT: 17,
  SOUND: 18,
  MOVIE: 19,
  WIDGET: 20,
  SCREEN: 21,
  PRINTERMARK: 22,
  TRAPNET: 23,
  WATERMARK: 24,
  THREED: 25,
  REDACT: 26
};
const AnnotationReplyType = {
  GROUP: "Group",
  REPLY: "R"
};
const AnnotationFlag = {
  INVISIBLE: 0x01,
  HIDDEN: 0x02,
  PRINT: 0x04,
  NOZOOM: 0x08,
  NOROTATE: 0x10,
  NOVIEW: 0x20,
  READONLY: 0x40,
  LOCKED: 0x80,
  TOGGLENOVIEW: 0x100,
  LOCKEDCONTENTS: 0x200
};
const AnnotationFieldFlag = {
  READONLY: 0x0000001,
  REQUIRED: 0x0000002,
  NOEXPORT: 0x0000004,
  MULTILINE: 0x0001000,
  PASSWORD: 0x0002000,
  NOTOGGLETOOFF: 0x0004000,
  RADIO: 0x0008000,
  PUSHBUTTON: 0x0010000,
  COMBO: 0x0020000,
  EDIT: 0x0040000,
  SORT: 0x0080000,
  FILESELECT: 0x0100000,
  MULTISELECT: 0x0200000,
  DONOTSPELLCHECK: 0x0400000,
  DONOTSCROLL: 0x0800000,
  COMB: 0x1000000,
  RICHTEXT: 0x2000000,
  RADIOSINUNISON: 0x2000000,
  COMMITONSELCHANGE: 0x4000000
};
const AnnotationBorderStyleType = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5
};
const AnnotationActionEventType = {
  E: "Mouse Enter",
  X: "Mouse Exit",
  D: "Mouse Down",
  U: "Mouse Up",
  Fo: "Focus",
  Bl: "Blur",
  PO: "PageOpen",
  PC: "PageClose",
  PV: "PageVisible",
  PI: "PageInvisible",
  K: "Keystroke",
  F: "Format",
  V: "Validate",
  C: "Calculate"
};
const DocumentActionEventType = {
  WC: "WillClose",
  WS: "WillSave",
  DS: "DidSave",
  WP: "WillPrint",
  DP: "DidPrint"
};
const PageActionEventType = {
  O: "PageOpen",
  C: "PageClose"
};
const VerbosityLevel = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5
};
const OPS = {
  dependency: 1,
  setLineWidth: 2,
  setLineCap: 3,
  setLineJoin: 4,
  setMiterLimit: 5,
  setDash: 6,
  setRenderingIntent: 7,
  setFlatness: 8,
  setGState: 9,
  save: 10,
  restore: 11,
  transform: 12,
  moveTo: 13,
  lineTo: 14,
  curveTo: 15,
  curveTo2: 16,
  curveTo3: 17,
  closePath: 18,
  rectangle: 19,
  stroke: 20,
  closeStroke: 21,
  fill: 22,
  eoFill: 23,
  fillStroke: 24,
  eoFillStroke: 25,
  closeFillStroke: 26,
  closeEOFillStroke: 27,
  endPath: 28,
  clip: 29,
  eoClip: 30,
  beginText: 31,
  endText: 32,
  setCharSpacing: 33,
  setWordSpacing: 34,
  setHScale: 35,
  setLeading: 36,
  setFont: 37,
  setTextRenderingMode: 38,
  setTextRise: 39,
  moveText: 40,
  setLeadingMoveText: 41,
  setTextMatrix: 42,
  nextLine: 43,
  showText: 44,
  showSpacedText: 45,
  nextLineShowText: 46,
  nextLineSetSpacingShowText: 47,
  setCharWidth: 48,
  setCharWidthAndBounds: 49,
  setStrokeColorSpace: 50,
  setFillColorSpace: 51,
  setStrokeColor: 52,
  setStrokeColorN: 53,
  setFillColor: 54,
  setFillColorN: 55,
  setStrokeGray: 56,
  setFillGray: 57,
  setStrokeRGBColor: 58,
  setFillRGBColor: 59,
  setStrokeCMYKColor: 60,
  setFillCMYKColor: 61,
  shadingFill: 62,
  beginInlineImage: 63,
  beginImageData: 64,
  endInlineImage: 65,
  paintXObject: 66,
  markPoint: 67,
  markPointProps: 68,
  beginMarkedContent: 69,
  beginMarkedContentProps: 70,
  endMarkedContent: 71,
  beginCompat: 72,
  endCompat: 73,
  paintFormXObjectBegin: 74,
  paintFormXObjectEnd: 75,
  beginGroup: 76,
  endGroup: 77,
  beginAnnotation: 80,
  endAnnotation: 81,
  paintImageMaskXObject: 83,
  paintImageMaskXObjectGroup: 84,
  paintImageXObject: 85,
  paintInlineImageXObject: 86,
  paintInlineImageXObjectGroup: 87,
  paintImageXObjectRepeat: 88,
  paintImageMaskXObjectRepeat: 89,
  paintSolidColorImageMask: 90,
  constructPath: 91,
  setStrokeTransparent: 92,
  setFillTransparent: 93,
  rawFillPath: 94
};
const DrawOPS = {
  moveTo: 0,
  lineTo: 1,
  curveTo: 2,
  quadraticCurveTo: 3,
  closePath: 4
};
const PasswordResponses = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
let verbosity = VerbosityLevel.WARNINGS;
function setVerbosityLevel(level) {
  if (Number.isInteger(level)) {
    verbosity = level;
  }
}
function getVerbosityLevel() {
  return verbosity;
}
function info(msg) {
  if (verbosity >= VerbosityLevel.INFOS) {
    console.info(`Info: ${msg}`);
  }
}
function warn(msg) {
  if (verbosity >= VerbosityLevel.WARNINGS) {
    console.warn(`Warning: ${msg}`);
  }
}
function unreachable(msg) {
  throw new Error(msg);
}
function assert(cond, msg) {
  if (!cond) {
    unreachable(msg);
  }
}
function _isValidProtocol(url) {
  switch (url?.protocol) {
    case "http:":
    case "https:":
    case "ftp:":
    case "mailto:":
    case "tel:":
      return true;
    default:
      return false;
  }
}
function createValidAbsoluteUrl(url, baseUrl = null, options = null) {
  if (!url) {
    return null;
  }
  if (options && typeof url === "string") {
    if (options.addDefaultProtocol && url.startsWith("www.")) {
      const dots = url.match(/\./g);
      if (dots?.length >= 2) {
        url = `http://${url}`;
      }
    }
    if (options.tryConvertEncoding) {
      try {
        url = stringToUTF8String(url);
      } catch {}
    }
  }
  const absoluteUrl = baseUrl ? URL.parse(url, baseUrl) : URL.parse(url);
  return _isValidProtocol(absoluteUrl) ? absoluteUrl : null;
}
function updateUrlHash(url, hash, allowRel = false) {
  const res = URL.parse(url);
  if (res) {
    res.hash = hash;
    return res.href;
  }
  if (allowRel && createValidAbsoluteUrl(url, "http://example.com")) {
    return url.split("#", 1)[0] + `${hash ? `#${hash}` : ""}`;
  }
  return "";
}
function stripPath(str) {
  return str.substring(str.lastIndexOf("/") + 1);
}
function shadow(obj, prop, value, nonSerializable = false) {
  Object.defineProperty(obj, prop, {
    value,
    enumerable: !nonSerializable,
    configurable: true,
    writable: false
  });
  return value;
}
const BaseException = function BaseExceptionClosure() {
  function BaseException(message, name) {
    this.message = message;
    this.name = name;
  }
  BaseException.prototype = new Error();
  BaseException.constructor = BaseException;
  return BaseException;
}();
class PasswordException extends BaseException {
  constructor(msg, code) {
    super(msg, "PasswordException");
    this.code = code;
  }
}
class UnknownErrorException extends BaseException {
  constructor(msg, details) {
    super(msg, "UnknownErrorException");
    this.details = details;
  }
}
class InvalidPDFException extends BaseException {
  constructor(msg) {
    super(msg, "InvalidPDFException");
  }
}
class ResponseException extends BaseException {
  constructor(msg, status, missing) {
    super(msg, "ResponseException");
    this.status = status;
    this.missing = missing;
  }
}
class FormatError extends BaseException {
  constructor(msg) {
    super(msg, "FormatError");
  }
}
class AbortException extends BaseException {
  constructor(msg) {
    super(msg, "AbortException");
  }
}
function bytesToString(bytes) {
  if (typeof bytes !== "object" || bytes?.length === undefined) {
    unreachable("Invalid argument for bytesToString");
  }
  const length = bytes.length;
  const MAX_ARGUMENT_COUNT = 8192;
  if (length < MAX_ARGUMENT_COUNT) {
    return String.fromCharCode.apply(null, bytes);
  }
  const strBuf = [];
  for (let i = 0; i < length; i += MAX_ARGUMENT_COUNT) {
    const chunkEnd = Math.min(i + MAX_ARGUMENT_COUNT, length);
    const chunk = bytes.subarray(i, chunkEnd);
    strBuf.push(String.fromCharCode.apply(null, chunk));
  }
  return strBuf.join("");
}
function stringToBytes(str) {
  if (typeof str !== "string") {
    unreachable("Invalid argument for stringToBytes");
  }
  const length = str.length;
  const bytes = new Uint8Array(length);
  for (let i = 0; i < length; ++i) {
    bytes[i] = str.charCodeAt(i) & 0xff;
  }
  return bytes;
}
function string32(value) {
  return String.fromCharCode(value >> 24 & 0xff, value >> 16 & 0xff, value >> 8 & 0xff, value & 0xff);
}
function objectSize(obj) {
  return Object.keys(obj).length;
}
function isLittleEndian() {
  const buffer8 = new Uint8Array(4);
  buffer8[0] = 1;
  const view32 = new Uint32Array(buffer8.buffer, 0, 1);
  return view32[0] === 1;
}
function isEvalSupported() {
  try {
    new Function("");
    return true;
  } catch {
    return false;
  }
}
class FeatureTest {
  static get isLittleEndian() {
    return shadow(this, "isLittleEndian", isLittleEndian());
  }
  static get isEvalSupported() {
    return shadow(this, "isEvalSupported", isEvalSupported());
  }
  static get isOffscreenCanvasSupported() {
    return shadow(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas !== "undefined");
  }
  static get isImageDecoderSupported() {
    return shadow(this, "isImageDecoderSupported", typeof ImageDecoder !== "undefined");
  }
  static get isFloat16ArraySupported() {
    return shadow(this, "isFloat16ArraySupported", typeof Float16Array !== "undefined");
  }
  static get isSanitizerSupported() {
    return shadow(this, "isSanitizerSupported", typeof Sanitizer !== "undefined");
  }
  static get platform() {
    const {
      platform,
      userAgent
    } = navigator;
    return shadow(this, "platform", {
      isAndroid: userAgent.includes("Android"),
      isLinux: platform.includes("Linux"),
      isMac: platform.includes("Mac"),
      isWindows: platform.includes("Win"),
      isFirefox: userAgent.includes("Firefox")
    });
  }
  static get isCSSRoundSupported() {
    return shadow(this, "isCSSRoundSupported", globalThis.CSS?.supports?.("width: round(1.5px, 1px)"));
  }
}
const hexNumbers = Array.from(Array(256).keys(), n => n.toString(16).padStart(2, "0"));
class Util {
  static makeHexColor(r, g, b) {
    return `#${hexNumbers[r]}${hexNumbers[g]}${hexNumbers[b]}`;
  }
  static domMatrixToTransform(dm) {
    return [dm.a, dm.b, dm.c, dm.d, dm.e, dm.f];
  }
  static scaleMinMax(transform, minMax) {
    let temp;
    if (transform[0]) {
      if (transform[0] < 0) {
        temp = minMax[0];
        minMax[0] = minMax[2];
        minMax[2] = temp;
      }
      minMax[0] *= transform[0];
      minMax[2] *= transform[0];
      if (transform[3] < 0) {
        temp = minMax[1];
        minMax[1] = minMax[3];
        minMax[3] = temp;
      }
      minMax[1] *= transform[3];
      minMax[3] *= transform[3];
    } else {
      temp = minMax[0];
      minMax[0] = minMax[1];
      minMax[1] = temp;
      temp = minMax[2];
      minMax[2] = minMax[3];
      minMax[3] = temp;
      if (transform[1] < 0) {
        temp = minMax[1];
        minMax[1] = minMax[3];
        minMax[3] = temp;
      }
      minMax[1] *= transform[1];
      minMax[3] *= transform[1];
      if (transform[2] < 0) {
        temp = minMax[0];
        minMax[0] = minMax[2];
        minMax[2] = temp;
      }
      minMax[0] *= transform[2];
      minMax[2] *= transform[2];
    }
    minMax[0] += transform[4];
    minMax[1] += transform[5];
    minMax[2] += transform[4];
    minMax[3] += transform[5];
  }
  static transform(m1, m2) {
    return [m1[0] * m2[0] + m1[2] * m2[1], m1[1] * m2[0] + m1[3] * m2[1], m1[0] * m2[2] + m1[2] * m2[3], m1[1] * m2[2] + m1[3] * m2[3], m1[0] * m2[4] + m1[2] * m2[5] + m1[4], m1[1] * m2[4] + m1[3] * m2[5] + m1[5]];
  }
  static multiplyByDOMMatrix(m, md) {
    return [m[0] * md.a + m[2] * md.b, m[1] * md.a + m[3] * md.b, m[0] * md.c + m[2] * md.d, m[1] * md.c + m[3] * md.d, m[0] * md.e + m[2] * md.f + m[4], m[1] * md.e + m[3] * md.f + m[5]];
  }
  static applyTransform(p, m, pos = 0) {
    const p0 = p[pos];
    const p1 = p[pos + 1];
    p[pos] = p0 * m[0] + p1 * m[2] + m[4];
    p[pos + 1] = p0 * m[1] + p1 * m[3] + m[5];
  }
  static applyTransformToBezier(p, transform, pos = 0) {
    const m0 = transform[0];
    const m1 = transform[1];
    const m2 = transform[2];
    const m3 = transform[3];
    const m4 = transform[4];
    const m5 = transform[5];
    for (let i = 0; i < 6; i += 2) {
      const pI = p[pos + i];
      const pI1 = p[pos + i + 1];
      p[pos + i] = pI * m0 + pI1 * m2 + m4;
      p[pos + i + 1] = pI * m1 + pI1 * m3 + m5;
    }
  }
  static applyInverseTransform(p, m) {
    const p0 = p[0];
    const p1 = p[1];
    const d = m[0] * m[3] - m[1] * m[2];
    p[0] = (p0 * m[3] - p1 * m[2] + m[2] * m[5] - m[4] * m[3]) / d;
    p[1] = (-p0 * m[1] + p1 * m[0] + m[4] * m[1] - m[5] * m[0]) / d;
  }
  static axialAlignedBoundingBox(rect, transform, output) {
    const m0 = transform[0];
    const m1 = transform[1];
    const m2 = transform[2];
    const m3 = transform[3];
    const m4 = transform[4];
    const m5 = transform[5];
    const r0 = rect[0];
    const r1 = rect[1];
    const r2 = rect[2];
    const r3 = rect[3];
    let a0 = m0 * r0 + m4;
    let a2 = a0;
    let a1 = m0 * r2 + m4;
    let a3 = a1;
    let b0 = m3 * r1 + m5;
    let b2 = b0;
    let b1 = m3 * r3 + m5;
    let b3 = b1;
    if (m1 !== 0 || m2 !== 0) {
      const m1r0 = m1 * r0;
      const m1r2 = m1 * r2;
      const m2r1 = m2 * r1;
      const m2r3 = m2 * r3;
      a0 += m2r1;
      a3 += m2r1;
      a1 += m2r3;
      a2 += m2r3;
      b0 += m1r0;
      b3 += m1r0;
      b1 += m1r2;
      b2 += m1r2;
    }
    output[0] = Math.min(output[0], a0, a1, a2, a3);
    output[1] = Math.min(output[1], b0, b1, b2, b3);
    output[2] = Math.max(output[2], a0, a1, a2, a3);
    output[3] = Math.max(output[3], b0, b1, b2, b3);
  }
  static inverseTransform(m) {
    const d = m[0] * m[3] - m[1] * m[2];
    return [m[3] / d, -m[1] / d, -m[2] / d, m[0] / d, (m[2] * m[5] - m[4] * m[3]) / d, (m[4] * m[1] - m[5] * m[0]) / d];
  }
  static singularValueDecompose2dScale(matrix, output) {
    const m0 = matrix[0];
    const m1 = matrix[1];
    const m2 = matrix[2];
    const m3 = matrix[3];
    const a = m0 ** 2 + m1 ** 2;
    const b = m0 * m2 + m1 * m3;
    const c = m2 ** 2 + m3 ** 2;
    const first = (a + c) / 2;
    const second = Math.sqrt(first ** 2 - (a * c - b ** 2));
    output[0] = Math.sqrt(first + second || 1);
    output[1] = Math.sqrt(first - second || 1);
  }
  static normalizeRect(rect) {
    const r = rect.slice(0);
    if (rect[0] > rect[2]) {
      r[0] = rect[2];
      r[2] = rect[0];
    }
    if (rect[1] > rect[3]) {
      r[1] = rect[3];
      r[3] = rect[1];
    }
    return r;
  }
  static intersect(rect1, rect2) {
    const xLow = Math.max(Math.min(rect1[0], rect1[2]), Math.min(rect2[0], rect2[2]));
    const xHigh = Math.min(Math.max(rect1[0], rect1[2]), Math.max(rect2[0], rect2[2]));
    if (xLow > xHigh) {
      return null;
    }
    const yLow = Math.max(Math.min(rect1[1], rect1[3]), Math.min(rect2[1], rect2[3]));
    const yHigh = Math.min(Math.max(rect1[1], rect1[3]), Math.max(rect2[1], rect2[3]));
    if (yLow > yHigh) {
      return null;
    }
    return [xLow, yLow, xHigh, yHigh];
  }
  static pointBoundingBox(x, y, minMax) {
    minMax[0] = Math.min(minMax[0], x);
    minMax[1] = Math.min(minMax[1], y);
    minMax[2] = Math.max(minMax[2], x);
    minMax[3] = Math.max(minMax[3], y);
  }
  static rectBoundingBox(x0, y0, x1, y1, minMax) {
    minMax[0] = Math.min(minMax[0], x0, x1);
    minMax[1] = Math.min(minMax[1], y0, y1);
    minMax[2] = Math.max(minMax[2], x0, x1);
    minMax[3] = Math.max(minMax[3], y0, y1);
  }
  static #getExtremumOnCurve(x0, x1, x2, x3, y0, y1, y2, y3, t, minMax) {
    if (t <= 0 || t >= 1) {
      return;
    }
    const mt = 1 - t;
    const tt = t * t;
    const ttt = tt * t;
    const x = mt * (mt * (mt * x0 + 3 * t * x1) + 3 * tt * x2) + ttt * x3;
    const y = mt * (mt * (mt * y0 + 3 * t * y1) + 3 * tt * y2) + ttt * y3;
    minMax[0] = Math.min(minMax[0], x);
    minMax[1] = Math.min(minMax[1], y);
    minMax[2] = Math.max(minMax[2], x);
    minMax[3] = Math.max(minMax[3], y);
  }
  static #getExtremum(x0, x1, x2, x3, y0, y1, y2, y3, a, b, c, minMax) {
    if (Math.abs(a) < 1e-12) {
      if (Math.abs(b) >= 1e-12) {
        this.#getExtremumOnCurve(x0, x1, x2, x3, y0, y1, y2, y3, -c / b, minMax);
      }
      return;
    }
    const delta = b ** 2 - 4 * c * a;
    if (delta < 0) {
      return;
    }
    const sqrtDelta = Math.sqrt(delta);
    const a2 = 2 * a;
    this.#getExtremumOnCurve(x0, x1, x2, x3, y0, y1, y2, y3, (-b + sqrtDelta) / a2, minMax);
    this.#getExtremumOnCurve(x0, x1, x2, x3, y0, y1, y2, y3, (-b - sqrtDelta) / a2, minMax);
  }
  static bezierBoundingBox(x0, y0, x1, y1, x2, y2, x3, y3, minMax) {
    minMax[0] = Math.min(minMax[0], x0, x3);
    minMax[1] = Math.min(minMax[1], y0, y3);
    minMax[2] = Math.max(minMax[2], x0, x3);
    minMax[3] = Math.max(minMax[3], y0, y3);
    this.#getExtremum(x0, x1, x2, x3, y0, y1, y2, y3, 3 * (-x0 + 3 * (x1 - x2) + x3), 6 * (x0 - 2 * x1 + x2), 3 * (x1 - x0), minMax);
    this.#getExtremum(x0, x1, x2, x3, y0, y1, y2, y3, 3 * (-y0 + 3 * (y1 - y2) + y3), 6 * (y0 - 2 * y1 + y2), 3 * (y1 - y0), minMax);
  }
}
const PDFStringTranslateTable = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x2d8, 0x2c7, 0x2c6, 0x2d9, 0x2dd, 0x2db, 0x2da, 0x2dc, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x2022, 0x2020, 0x2021, 0x2026, 0x2014, 0x2013, 0x192, 0x2044, 0x2039, 0x203a, 0x2212, 0x2030, 0x201e, 0x201c, 0x201d, 0x2018, 0x2019, 0x201a, 0x2122, 0xfb01, 0xfb02, 0x141, 0x152, 0x160, 0x178, 0x17d, 0x131, 0x142, 0x153, 0x161, 0x17e, 0, 0x20ac];
function stringToPDFString(str, keepEscapeSequence = false) {
  if (str[0] >= "\xEF") {
    let encoding;
    if (str[0] === "\xFE" && str[1] === "\xFF") {
      encoding = "utf-16be";
      if (str.length % 2 === 1) {
        str = str.slice(0, -1);
      }
    } else if (str[0] === "\xFF" && str[1] === "\xFE") {
      encoding = "utf-16le";
      if (str.length % 2 === 1) {
        str = str.slice(0, -1);
      }
    } else if (str[0] === "\xEF" && str[1] === "\xBB" && str[2] === "\xBF") {
      encoding = "utf-8";
    }
    if (encoding) {
      try {
        const decoder = new TextDecoder(encoding, {
          fatal: true
        });
        const buffer = stringToBytes(str);
        const decoded = decoder.decode(buffer);
        if (keepEscapeSequence || !decoded.includes("\x1b")) {
          return decoded;
        }
        return decoded.replaceAll(/\x1b[^\x1b]*(?:\x1b|$)/g, "");
      } catch (ex) {
        warn(`stringToPDFString: "${ex}".`);
      }
    }
  }
  const strBuf = [];
  for (let i = 0, ii = str.length; i < ii; i++) {
    const charCode = str.charCodeAt(i);
    if (!keepEscapeSequence && charCode === 0x1b) {
      while (++i < ii && str.charCodeAt(i) !== 0x1b) {}
      continue;
    }
    const code = PDFStringTranslateTable[charCode];
    strBuf.push(code ? String.fromCharCode(code) : str.charAt(i));
  }
  return strBuf.join("");
}
function stringToUTF8String(str) {
  return decodeURIComponent(escape(str));
}
function utf8StringToString(str) {
  return unescape(encodeURIComponent(str));
}
function isArrayEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0, ii = arr1.length; i < ii; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
function getModificationDate(date = new Date()) {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  const buffer = [date.getUTCFullYear().toString(), (date.getUTCMonth() + 1).toString().padStart(2, "0"), date.getUTCDate().toString().padStart(2, "0"), date.getUTCHours().toString().padStart(2, "0"), date.getUTCMinutes().toString().padStart(2, "0"), date.getUTCSeconds().toString().padStart(2, "0")];
  return buffer.join("");
}
let NormalizeRegex = null;
let NormalizationMap = null;
function normalizeUnicode(str) {
  if (!NormalizeRegex) {
    NormalizeRegex = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu;
    NormalizationMap = new Map([["ﬅ", "ſt"]]);
  }
  return str.replaceAll(NormalizeRegex, (_, p1, p2) => p1 ? p1.normalize("NFKC") : NormalizationMap.get(p2));
}
function getUuid() {
  if (typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  const buf = new Uint8Array(32);
  crypto.getRandomValues(buf);
  return bytesToString(buf);
}
const AnnotationPrefix = "pdfjs_internal_id_";
function _isValidExplicitDest(validRef, validName, dest) {
  if (!Array.isArray(dest) || dest.length < 2) {
    return false;
  }
  const [page, zoom, ...args] = dest;
  if (!validRef(page) && !Number.isInteger(page)) {
    return false;
  }
  if (!validName(zoom)) {
    return false;
  }
  const argsLen = args.length;
  let allowNull = true;
  switch (zoom.name) {
    case "XYZ":
      if (argsLen < 2 || argsLen > 3) {
        return false;
      }
      break;
    case "Fit":
    case "FitB":
      return argsLen === 0;
    case "FitH":
    case "FitBH":
    case "FitV":
    case "FitBV":
      if (argsLen > 1) {
        return false;
      }
      break;
    case "FitR":
      if (argsLen !== 4) {
        return false;
      }
      allowNull = false;
      break;
    default:
      return false;
  }
  for (const arg of args) {
    if (typeof arg === "number" || allowNull && arg === null) {
      continue;
    }
    return false;
  }
  return true;
}
const makeArr = () => [];
const makeMap = () => new Map();
const makeObj = () => Object.create(null);
function MathClamp(v, min, max) {
  return Math.min(Math.max(v, min), max);
}
if (typeof Math.sumPrecise !== "function") {
  Math.sumPrecise = function (numbers) {
    return numbers.reduce((a, b) => a + b, 0);
  };
}

;// ./src/core/primitives.js

const CIRCULAR_REF = Symbol("CIRCULAR_REF");
const EOF = Symbol("EOF");
let CmdCache = Object.create(null);
let NameCache = Object.create(null);
let RefCache = Object.create(null);
function clearPrimitiveCaches() {
  CmdCache = Object.create(null);
  NameCache = Object.create(null);
  RefCache = Object.create(null);
}
class Name {
  constructor(name) {
    this.name = name;
  }
  static get(name) {
    return NameCache[name] ||= new Name(name);
  }
}
class Cmd {
  constructor(cmd) {
    this.cmd = cmd;
  }
  static get(cmd) {
    return CmdCache[cmd] ||= new Cmd(cmd);
  }
}
const nonSerializable = function nonSerializableClosure() {
  return nonSerializable;
};
class Dict {
  __nonSerializable__ = nonSerializable;
  #map = new Map();
  objId = null;
  suppressEncryption = false;
  xref;
  constructor(xref = null) {
    this.xref = xref;
  }
  assignXref(newXref) {
    this.xref = newXref;
  }
  get size() {
    return this.#map.size;
  }
  #getValue(isAsync, key1, key2, key3) {
    let value = this.#map.get(key1);
    if (value === undefined && key2 !== undefined) {
      value = this.#map.get(key2);
      if (value === undefined && key3 !== undefined) {
        value = this.#map.get(key3);
      }
    }
    if (value instanceof Ref && this.xref) {
      return isAsync ? this.xref.fetchAsync(value, this.suppressEncryption) : this.xref.fetch(value, this.suppressEncryption);
    }
    return value;
  }
  get(key1, key2, key3) {
    return this.#getValue(false, key1, key2, key3);
  }
  async getAsync(key1, key2, key3) {
    return this.#getValue(true, key1, key2, key3);
  }
  getArray(key1, key2, key3) {
    let value = this.#getValue(false, key1, key2, key3);
    if (Array.isArray(value)) {
      value = value.slice();
      for (let i = 0, ii = value.length; i < ii; i++) {
        if (value[i] instanceof Ref && this.xref) {
          value[i] = this.xref.fetch(value[i], this.suppressEncryption);
        }
      }
    }
    return value;
  }
  getRaw(key) {
    return this.#map.get(key);
  }
  getKeys() {
    return this.#map.keys();
  }
  getRawValues() {
    return this.#map.values();
  }
  getRawEntries() {
    return this.#map.entries();
  }
  set(key, value) {
    this.#map.set(key, value);
  }
  setIfNotExists(key, value) {
    if (!this.has(key)) {
      this.set(key, value);
    }
  }
  setIfNumber(key, value) {
    if (typeof value === "number") {
      this.set(key, value);
    }
  }
  setIfArray(key, value) {
    if (Array.isArray(value) || ArrayBuffer.isView(value)) {
      this.set(key, value);
    }
  }
  setIfDefined(key, value) {
    if (value !== undefined && value !== null) {
      this.set(key, value);
    }
  }
  setIfName(key, value) {
    if (typeof value === "string") {
      this.set(key, Name.get(value));
    } else if (value instanceof Name) {
      this.set(key, value);
    }
  }
  setIfDict(key, value) {
    if (value instanceof Dict) {
      this.set(key, value);
    }
  }
  has(key) {
    return this.#map.has(key);
  }
  *[Symbol.iterator]() {
    for (const [key, value] of this.#map) {
      yield [key, value instanceof Ref && this.xref ? this.xref.fetch(value, this.suppressEncryption) : value];
    }
  }
  static get empty() {
    const emptyDict = new Dict(null);
    emptyDict.set = (key, value) => {
      unreachable("Should not call `set` on the empty dictionary.");
    };
    return shadow(this, "empty", emptyDict);
  }
  static merge({
    xref,
    dictArray,
    mergeSubDicts = false
  }) {
    const mergedDict = new Dict(xref),
      properties = new Map();
    for (const dict of dictArray) {
      if (!(dict instanceof Dict)) {
        continue;
      }
      for (const [key, value] of dict.getRawEntries()) {
        let property = properties.get(key);
        if (property === undefined) {
          property = [];
          properties.set(key, property);
        } else if (!mergeSubDicts || !(value instanceof Dict)) {
          continue;
        }
        property.push(value);
      }
    }
    for (const [name, values] of properties) {
      if (values.length === 1 || !(values[0] instanceof Dict)) {
        mergedDict.set(name, values[0]);
        continue;
      }
      const subDict = new Dict(xref);
      for (const dict of values) {
        for (const [key, value] of dict.getRawEntries()) {
          subDict.setIfNotExists(key, value);
        }
      }
      if (subDict.size > 0) {
        mergedDict.set(name, subDict);
      }
    }
    properties.clear();
    return mergedDict.size > 0 ? mergedDict : Dict.empty;
  }
  clone() {
    const dict = new Dict(this.xref);
    for (const [key, value] of this.#map) {
      dict.set(key, value);
    }
    return dict;
  }
  delete(key) {
    this.#map.delete(key);
  }
}
class Ref {
  constructor(num, gen) {
    this.num = num;
    this.gen = gen;
  }
  toString() {
    if (this.gen === 0) {
      return `${this.num}R`;
    }
    return `${this.num}R${this.gen}`;
  }
  static fromString(str) {
    const ref = RefCache[str];
    if (ref) {
      return ref;
    }
    const m = /^(\d+)R(\d*)$/.exec(str);
    if (!m || m[1] === "0") {
      return null;
    }
    return RefCache[str] = new Ref(parseInt(m[1]), !m[2] ? 0 : parseInt(m[2]));
  }
  static get(num, gen) {
    const key = gen === 0 ? `${num}R` : `${num}R${gen}`;
    return RefCache[key] ||= new Ref(num, gen);
  }
}
class RefSet {
  constructor(parent = null) {
    this._set = new Set(parent?._set);
  }
  has(ref) {
    return this._set.has(ref.toString());
  }
  put(ref) {
    this._set.add(ref.toString());
  }
  remove(ref) {
    this._set.delete(ref.toString());
  }
  [Symbol.iterator]() {
    return this._set.values();
  }
  clear() {
    this._set.clear();
  }
}
class RefSetCache {
  _map = new Map();
  get size() {
    return this._map.size;
  }
  get(ref) {
    return this._map.get(ref.toString());
  }
  has(ref) {
    return this._map.has(ref.toString());
  }
  put(ref, obj) {
    this._map.set(ref.toString(), obj);
  }
  putAlias(ref, aliasRef) {
    this._map.set(ref.toString(), this.get(aliasRef));
  }
  [Symbol.iterator]() {
    return this._map.values();
  }
  clear() {
    this._map.clear();
  }
  *values() {
    yield* this._map.values();
  }
  *items() {
    for (const [ref, value] of this._map) {
      yield [Ref.fromString(ref), value];
    }
  }
  *keys() {
    for (const ref of this._map.keys()) {
      yield Ref.fromString(ref);
    }
  }
}
function isName(v, name) {
  return v instanceof Name && (name === undefined || v.name === name);
}
function isCmd(v, cmd) {
  return v instanceof Cmd && (cmd === undefined || v.cmd === cmd);
}
function isDict(v, type) {
  return v instanceof Dict && (type === undefined || isName(v.get("Type"), type));
}
function isRefsEqual(v1, v2) {
  return v1.num === v2.num && v1.gen === v2.gen;
}

;// ./src/core/base_stream.js

class BaseStream {
  get length() {
    unreachable("Abstract getter `length` accessed");
  }
  get isEmpty() {
    unreachable("Abstract getter `isEmpty` accessed");
  }
  get isDataLoaded() {
    return shadow(this, "isDataLoaded", true);
  }
  getByte() {
    unreachable("Abstract method `getByte` called");
  }
  getBytes(length) {
    unreachable("Abstract method `getBytes` called");
  }
  async getImageData(length, decoderOptions) {
    return this.getBytes(length, decoderOptions);
  }
  async asyncGetBytes() {
    unreachable("Abstract method `asyncGetBytes` called");
  }
  get isAsync() {
    return false;
  }
  get isAsyncDecoder() {
    return false;
  }
  get isImageStream() {
    return false;
  }
  get canAsyncDecodeImageFromBuffer() {
    return false;
  }
  async getTransferableImage() {
    return null;
  }
  peekByte() {
    const peekedByte = this.getByte();
    if (peekedByte !== -1) {
      this.pos--;
    }
    return peekedByte;
  }
  peekBytes(length) {
    const bytes = this.getBytes(length);
    this.pos -= bytes.length;
    return bytes;
  }
  getUint16() {
    const b0 = this.getByte();
    const b1 = this.getByte();
    if (b0 === -1 || b1 === -1) {
      return -1;
    }
    return (b0 << 8) + b1;
  }
  getInt32() {
    const b0 = this.getByte();
    const b1 = this.getByte();
    const b2 = this.getByte();
    const b3 = this.getByte();
    return (b0 << 24) + (b1 << 16) + (b2 << 8) + b3;
  }
  getByteRange(begin, end) {
    unreachable("Abstract method `getByteRange` called");
  }
  getString(length) {
    return bytesToString(this.getBytes(length));
  }
  skip(n) {
    this.pos += n || 1;
  }
  reset() {
    unreachable("Abstract method `reset` called");
  }
  moveStart() {
    unreachable("Abstract method `moveStart` called");
  }
  makeSubStream(start, length, dict = null) {
    unreachable("Abstract method `makeSubStream` called");
  }
  getBaseStreams() {
    return null;
  }
  getOriginalStream() {
    return this.stream?.getOriginalStream() || this;
  }
}

;// ./src/core/core_utils.js



const PDF_VERSION_REGEXP = /^[1-9]\.\d$/;
const MAX_INT_32 = 2 ** 31 - 1;
const MIN_INT_32 = -(2 ** 31);
const IDENTITY_MATRIX = [1, 0, 0, 1, 0, 0];
const RESOURCES_KEYS_OPERATOR_LIST = ["ColorSpace", "ExtGState", "Font", "Pattern", "Properties", "Shading", "XObject"];
const RESOURCES_KEYS_TEXT_CONTENT = ["ExtGState", "Font", "Properties", "XObject"];
function getLookupTableFactory(initializer) {
  let lookup;
  return function () {
    if (initializer) {
      lookup = Object.create(null);
      initializer(lookup);
      initializer = null;
    }
    return lookup;
  };
}
class MissingDataException extends BaseException {
  constructor(begin, end) {
    super(`Missing data [${begin}, ${end})`, "MissingDataException");
    this.begin = begin;
    this.end = end;
  }
}
class ParserEOFException extends BaseException {
  constructor(msg) {
    super(msg, "ParserEOFException");
  }
}
class XRefEntryException extends BaseException {
  constructor(msg) {
    super(msg, "XRefEntryException");
  }
}
class XRefParseException extends BaseException {
  constructor(msg) {
    super(msg, "XRefParseException");
  }
}
function arrayBuffersToBytes(arr) {
  const length = arr.length;
  if (length === 0) {
    return new Uint8Array(0);
  }
  if (length === 1) {
    return new Uint8Array(arr[0]);
  }
  let dataLength = 0;
  for (let i = 0; i < length; i++) {
    dataLength += arr[i].byteLength;
  }
  const data = new Uint8Array(dataLength);
  let pos = 0;
  for (let i = 0; i < length; i++) {
    const item = new Uint8Array(arr[i]);
    data.set(item, pos);
    pos += item.byteLength;
  }
  return data;
}
async function fetchBinaryData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch file "${url}" with "${response.statusText}".`);
  }
  return response.bytes();
}
function getInheritableProperty({
  dict,
  key,
  getArray = false,
  stopWhenFound = true
}) {
  let values;
  const visited = new RefSet();
  while (dict instanceof Dict && !(dict.objId && visited.has(dict.objId))) {
    if (dict.objId) {
      visited.put(dict.objId);
    }
    const value = getArray ? dict.getArray(key) : dict.get(key);
    if (value !== undefined) {
      if (stopWhenFound) {
        return value;
      }
      (values ||= []).push(value);
    }
    dict = dict.get("Parent");
  }
  return values;
}
function getParentToUpdate(dict, ref, xref) {
  const visited = new RefSet();
  const firstDict = dict;
  const result = {
    dict: null,
    ref: null
  };
  while (dict instanceof Dict && !visited.has(ref)) {
    visited.put(ref);
    if (dict.has("T")) {
      break;
    }
    ref = dict.getRaw("Parent");
    if (!(ref instanceof Ref)) {
      return result;
    }
    dict = xref.fetch(ref);
  }
  if (dict instanceof Dict && dict !== firstDict) {
    result.dict = dict;
    result.ref = ref;
  }
  return result;
}
function deepCompare(a, b) {
  if (a === b) {
    return true;
  }
  if (a instanceof Dict && b instanceof Dict) {
    if (a.size !== b.size) {
      return false;
    }
    for (const [key, value1] of a.getRawEntries()) {
      const value2 = b.getRaw(key);
      if (value2 === undefined || !deepCompare(value1, value2)) {
        return false;
      }
    }
    return true;
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return false;
    }
    for (let i = 0, ii = a.length; i < ii; i++) {
      if (!deepCompare(a[i], b[i])) {
        return false;
      }
    }
    return true;
  }
  return false;
}
const ROMAN_NUMBER_MAP = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
function toRomanNumerals(number, lowerCase = false) {
  assert(Number.isInteger(number) && number > 0, "The number should be a positive integer.");
  const roman = "M".repeat(number / 1000 | 0) + ROMAN_NUMBER_MAP[number % 1000 / 100 | 0] + ROMAN_NUMBER_MAP[10 + (number % 100 / 10 | 0)] + ROMAN_NUMBER_MAP[20 + number % 10];
  return lowerCase ? roman.toLowerCase() : roman;
}
function log2(x) {
  return x > 0 ? Math.ceil(Math.log2(x)) : 0;
}
function readInt8(data, offset) {
  return data[offset] << 24 >> 24;
}
function readInt16(data, offset) {
  return (data[offset] << 24 | data[offset + 1] << 16) >> 16;
}
function readUint16(data, offset) {
  return data[offset] << 8 | data[offset + 1];
}
function readUint32(data, offset) {
  return (data[offset] << 24 | data[offset + 1] << 16 | data[offset + 2] << 8 | data[offset + 3]) >>> 0;
}
function isWhiteSpace(ch) {
  return ch === 0x20 || ch === 0x09 || ch === 0x0d || ch === 0x0a;
}
function isBooleanArray(arr, len) {
  return Array.isArray(arr) && (len === null || arr.length === len) && arr.every(x => typeof x === "boolean");
}
function isNumberArray(arr, len) {
  if (Array.isArray(arr)) {
    return (len === null || arr.length === len) && arr.every(x => typeof x === "number");
  }
  return ArrayBuffer.isView(arr) && !(arr instanceof BigInt64Array || arr instanceof BigUint64Array) && (len === null || arr.length === len);
}
function lookupMatrix(arr, fallback) {
  return isNumberArray(arr, 6) ? arr : fallback;
}
function lookupRect(arr, fallback) {
  return isNumberArray(arr, 4) ? arr : fallback;
}
function lookupNormalRect(arr, fallback) {
  return isNumberArray(arr, 4) ? Util.normalizeRect(arr) : fallback;
}
function parseXFAPath(path) {
  const positionPattern = /(.+)\[(\d+)\]$/;
  return path.split(".").map(component => {
    const m = component.match(positionPattern);
    if (m) {
      return {
        name: m[1],
        pos: parseInt(m[2], 10)
      };
    }
    return {
      name: component,
      pos: 0
    };
  });
}
function escapePDFName(str) {
  const buffer = [];
  let start = 0;
  for (let i = 0, ii = str.length; i < ii; i++) {
    const char = str.charCodeAt(i);
    if (char < 0x21 || char > 0x7e || char === 0x23 || char === 0x28 || char === 0x29 || char === 0x3c || char === 0x3e || char === 0x5b || char === 0x5d || char === 0x7b || char === 0x7d || char === 0x2f || char === 0x25) {
      if (start < i) {
        buffer.push(str.substring(start, i));
      }
      buffer.push(`#${char.toString(16)}`);
      start = i + 1;
    }
  }
  if (buffer.length === 0) {
    return str;
  }
  if (start < str.length) {
    buffer.push(str.substring(start, str.length));
  }
  return buffer.join("");
}
function escapeString(str) {
  return str.replaceAll(/([()\\\n\r])/g, match => {
    if (match === "\n") {
      return "\\n";
    } else if (match === "\r") {
      return "\\r";
    }
    return `\\${match}`;
  });
}
function _collectJS(entry, xref, list, parents) {
  if (!entry) {
    return;
  }
  let parent = null;
  if (entry instanceof Ref) {
    if (parents.has(entry)) {
      return;
    }
    parent = entry;
    parents.put(parent);
    entry = xref.fetch(entry);
  }
  if (Array.isArray(entry)) {
    for (const element of entry) {
      _collectJS(element, xref, list, parents);
    }
  } else if (entry instanceof Dict) {
    if (isName(entry.get("S"), "JavaScript")) {
      const js = entry.get("JS");
      let code;
      if (js instanceof BaseStream) {
        code = js.getString();
      } else if (typeof js === "string") {
        code = js;
      }
      code &&= stringToPDFString(code, true).replaceAll("\x00", "");
      if (code) {
        list.push(code.trim());
      }
    }
    _collectJS(entry.getRaw("Next"), xref, list, parents);
  }
  if (parent) {
    parents.remove(parent);
  }
}
function collectActions(xref, dict, eventType) {
  const actions = Object.create(null);
  const additionalActionsDicts = getInheritableProperty({
    dict,
    key: "AA",
    stopWhenFound: false
  });
  if (additionalActionsDicts) {
    for (let i = additionalActionsDicts.length - 1; i >= 0; i--) {
      const additionalActions = additionalActionsDicts[i];
      if (!(additionalActions instanceof Dict)) {
        continue;
      }
      for (const [key, rawActionDict] of additionalActions.getRawEntries()) {
        const action = eventType[key];
        if (!action) {
          continue;
        }
        const parents = new RefSet();
        const list = [];
        _collectJS(rawActionDict, xref, list, parents);
        if (list.length > 0) {
          actions[action] = list;
        }
      }
    }
  }
  if (dict.has("A")) {
    const actionDict = dict.get("A");
    const parents = new RefSet();
    const list = [];
    _collectJS(actionDict, xref, list, parents);
    if (list.length > 0) {
      actions.Action = list;
    }
  }
  return objectSize(actions) > 0 ? actions : null;
}
const XMLEntities = {
  0x3c: "&lt;",
  0x3e: "&gt;",
  0x26: "&amp;",
  0x22: "&quot;",
  0x27: "&apos;"
};
function* codePointIter(str) {
  for (let i = 0, ii = str.length; i < ii; i++) {
    const char = str.codePointAt(i);
    if (char > 0xd7ff && (char < 0xe000 || char > 0xfffd)) {
      i++;
    }
    yield char;
  }
}
function encodeToXmlString(str) {
  const buffer = [];
  let start = 0;
  for (let i = 0, ii = str.length; i < ii; i++) {
    const char = str.codePointAt(i);
    if (0x20 <= char && char <= 0x7e) {
      const entity = XMLEntities[char];
      if (entity) {
        if (start < i) {
          buffer.push(str.substring(start, i));
        }
        buffer.push(entity);
        start = i + 1;
      }
    } else {
      if (start < i) {
        buffer.push(str.substring(start, i));
      }
      buffer.push(`&#x${char.toString(16).toUpperCase()};`);
      if (char > 0xd7ff && (char < 0xe000 || char > 0xfffd)) {
        i++;
      }
      start = i + 1;
    }
  }
  if (buffer.length === 0) {
    return str;
  }
  if (start < str.length) {
    buffer.push(str.substring(start, str.length));
  }
  return buffer.join("");
}
function validateFontName(fontFamily, mustWarn = false) {
  const m = /^("|').*("|')$/.exec(fontFamily);
  if (m && m[1] === m[2]) {
    const re = new RegExp(`[^\\\\]${m[1]}`);
    if (re.test(fontFamily.slice(1, -1))) {
      if (mustWarn) {
        warn(`FontFamily contains unescaped ${m[1]}: ${fontFamily}.`);
      }
      return false;
    }
  } else {
    for (const ident of fontFamily.split(/[ \t]+/)) {
      if (/^(\d|(-(\d|-)))/.test(ident) || !/^[\w-\\]+$/.test(ident)) {
        if (mustWarn) {
          warn(`FontFamily contains invalid <custom-ident>: ${fontFamily}.`);
        }
        return false;
      }
    }
  }
  return true;
}
function validateCSSFont(cssFontInfo) {
  const DEFAULT_CSS_FONT_OBLIQUE = "14";
  const DEFAULT_CSS_FONT_WEIGHT = "400";
  const CSS_FONT_WEIGHT_VALUES = new Set(["100", "200", "300", "400", "500", "600", "700", "800", "900", "1000", "normal", "bold", "bolder", "lighter"]);
  const {
    fontFamily,
    fontWeight,
    italicAngle
  } = cssFontInfo;
  if (!validateFontName(fontFamily, true)) {
    return false;
  }
  const weight = fontWeight ? fontWeight.toString() : "";
  cssFontInfo.fontWeight = CSS_FONT_WEIGHT_VALUES.has(weight) ? weight : DEFAULT_CSS_FONT_WEIGHT;
  const angle = parseFloat(italicAngle);
  cssFontInfo.italicAngle = isNaN(angle) || angle < -90 || angle > 90 ? DEFAULT_CSS_FONT_OBLIQUE : italicAngle.toString();
  return true;
}
function recoverJsURL(str) {
  const URL_OPEN_METHODS = ["app.launchURL", "window.open", "xfa.host.gotoURL"];
  const regex = new RegExp("^\\s*(" + URL_OPEN_METHODS.join("|").replaceAll(".", "\\.") + ")\\((?:'|\")([^'\"]*)(?:'|\")(?:,\\s*(\\w+)\\)|\\))", "i");
  const jsUrl = regex.exec(str);
  if (jsUrl?.[2]) {
    return {
      url: jsUrl[2],
      newWindow: jsUrl[1] === "app.launchURL" && jsUrl[3] === "true"
    };
  }
  return null;
}
function numberToString(value) {
  if (Number.isInteger(value)) {
    return value.toString();
  }
  const roundedValue = Math.round(value * 100);
  if (roundedValue % 100 === 0) {
    return (roundedValue / 100).toString();
  }
  if (roundedValue % 10 === 0) {
    return value.toFixed(1);
  }
  return value.toFixed(2);
}
function getNewAnnotationsMap(annotationStorage) {
  if (!annotationStorage) {
    return null;
  }
  const newAnnotationsByPage = new Map();
  for (const [key, value] of annotationStorage) {
    if (!key.startsWith(AnnotationEditorPrefix)) {
      continue;
    }
    newAnnotationsByPage.getOrInsertComputed(value.pageIndex, makeArr).push(value);
  }
  return newAnnotationsByPage.size > 0 ? newAnnotationsByPage : null;
}
function stringToAsciiOrUTF16BE(str) {
  if (str === null || str === undefined) {
    return str;
  }
  return isAscii(str) ? str : stringToUTF16String(str, true);
}
function isAscii(str) {
  if (typeof str !== "string") {
    return false;
  }
  return !str || /^[\x00-\x7F]*$/.test(str);
}
function stringToUTF16HexString(str) {
  const buf = [];
  for (let i = 0, ii = str.length; i < ii; i++) {
    const char = str.charCodeAt(i);
    buf.push(hexNumbers[char >> 8 & 0xff], hexNumbers[char & 0xff]);
  }
  return buf.join("");
}
function stringToUTF16String(str, bigEndian = false) {
  const buf = [];
  if (bigEndian) {
    buf.push("\xFE\xFF");
  }
  for (let i = 0, ii = str.length; i < ii; i++) {
    const char = str.charCodeAt(i);
    buf.push(String.fromCharCode(char >> 8 & 0xff), String.fromCharCode(char & 0xff));
  }
  return buf.join("");
}
function getRotationMatrix(rotation, width, height) {
  switch (rotation) {
    case 90:
      return [0, 1, -1, 0, width, 0];
    case 180:
      return [-1, 0, 0, -1, width, height];
    case 270:
      return [0, -1, 1, 0, 0, height];
    default:
      throw new Error("Invalid rotation");
  }
}
function getSizeInBytes(x) {
  return Math.ceil(Math.ceil(Math.log2(1 + x)) / 8);
}

;// ./external/qcms/qcms_utils.js
class QCMS {
  static #memoryArray = null;
  static _memory = null;
  static _mustAddAlpha = false;
  static _destBuffer = null;
  static _destOffset = 0;
  static _destLength = 0;
  static _cssColor = "";
  static _makeHexColor = null;
  static get _memoryArray() {
    const array = this.#memoryArray;
    if (array?.byteLength) {
      return array;
    }
    return this.#memoryArray = new Uint8Array(this._memory.buffer);
  }
}
function copy_result(ptr, len) {
  const {
    _mustAddAlpha,
    _destBuffer,
    _destOffset,
    _destLength,
    _memoryArray
  } = QCMS;
  if (len === _destLength) {
    _destBuffer.set(_memoryArray.subarray(ptr, ptr + len), _destOffset);
    return;
  }
  if (_mustAddAlpha) {
    for (let i = ptr, ii = ptr + len, j = _destOffset; i < ii; i += 3, j += 4) {
      _destBuffer[j] = _memoryArray[i];
      _destBuffer[j + 1] = _memoryArray[i + 1];
      _destBuffer[j + 2] = _memoryArray[i + 2];
      _destBuffer[j + 3] = 255;
    }
  } else {
    for (let i = ptr, ii = ptr + len, j = _destOffset; i < ii; i += 3, j += 4) {
      _destBuffer[j] = _memoryArray[i];
      _destBuffer[j + 1] = _memoryArray[i + 1];
      _destBuffer[j + 2] = _memoryArray[i + 2];
    }
  }
}
function copy_rgb(ptr) {
  const {
    _destBuffer,
    _destOffset,
    _memoryArray
  } = QCMS;
  _destBuffer[_destOffset] = _memoryArray[ptr];
  _destBuffer[_destOffset + 1] = _memoryArray[ptr + 1];
  _destBuffer[_destOffset + 2] = _memoryArray[ptr + 2];
}
function make_cssRGB(ptr) {
  const {
    _memoryArray
  } = QCMS;
  QCMS._cssColor = QCMS._makeHexColor(_memoryArray[ptr], _memoryArray[ptr + 1], _memoryArray[ptr + 2]);
}

;// ./external/qcms/qcms.js

let wasm;
const cachedTextDecoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-8', {
  ignoreBOM: true,
  fatal: true
}) : {
  decode: () => {
    throw Error('TextDecoder not available');
  }
};
if (typeof TextDecoder !== 'undefined') {
  cachedTextDecoder.decode();
}
;
let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
  if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
    cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
  }
  return cachedUint8ArrayMemory0;
}
function getStringFromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}
let WASM_VECTOR_LEN = 0;
function passArray8ToWasm0(arg, malloc) {
  const ptr = malloc(arg.length * 1, 1) >>> 0;
  getUint8ArrayMemory0().set(arg, ptr / 1);
  WASM_VECTOR_LEN = arg.length;
  return ptr;
}
function qcms_convert_array(transformer, src) {
  const ptr0 = passArray8ToWasm0(src, wasm.__wbindgen_malloc);
  const len0 = WASM_VECTOR_LEN;
  wasm.qcms_convert_array(transformer, ptr0, len0);
}
function qcms_convert_one(transformer, src, css) {
  wasm.qcms_convert_one(transformer, src, css);
}
function qcms_convert_three(transformer, src1, src2, src3, css) {
  wasm.qcms_convert_three(transformer, src1, src2, src3, css);
}
function qcms_convert_four(transformer, src1, src2, src3, src4, css) {
  wasm.qcms_convert_four(transformer, src1, src2, src3, src4, css);
}
function qcms_transformer_from_memory(mem, in_type, intent) {
  const ptr0 = passArray8ToWasm0(mem, wasm.__wbindgen_malloc);
  const len0 = WASM_VECTOR_LEN;
  const ret = wasm.qcms_transformer_from_memory(ptr0, len0, in_type, intent);
  return ret >>> 0;
}
function qcms_drop_transformer(transformer) {
  wasm.qcms_drop_transformer(transformer);
}
const DataType = Object.freeze({
  RGB8: 0,
  "0": "RGB8",
  RGBA8: 1,
  "1": "RGBA8",
  BGRA8: 2,
  "2": "BGRA8",
  Gray8: 3,
  "3": "Gray8",
  GrayA8: 4,
  "4": "GrayA8",
  CMYK: 5,
  "5": "CMYK"
});
const Intent = Object.freeze({
  Perceptual: 0,
  "0": "Perceptual",
  RelativeColorimetric: 1,
  "1": "RelativeColorimetric",
  Saturation: 2,
  "2": "Saturation",
  AbsoluteColorimetric: 3,
  "3": "AbsoluteColorimetric"
});
async function __wbg_load(module, imports) {
  if (typeof Response === 'function' && module instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming === 'function') {
      try {
        return await WebAssembly.instantiateStreaming(module, imports);
      } catch (e) {
        if (module.headers.get('Content-Type') != 'application/wasm') {
          console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
        } else {
          throw e;
        }
      }
    }
    const bytes = await module.arrayBuffer();
    return await WebAssembly.instantiate(bytes, imports);
  } else {
    const instance = await WebAssembly.instantiate(module, imports);
    if (instance instanceof WebAssembly.Instance) {
      return {
        instance,
        module
      };
    } else {
      return instance;
    }
  }
}
function __wbg_get_imports() {
  const imports = {};
  imports.wbg = {};
  imports.wbg.__wbg_copyresult_b08ee7d273f295dd = function (arg0, arg1) {
    copy_result(arg0 >>> 0, arg1 >>> 0);
  };
  imports.wbg.__wbg_copyrgb_d60ce17bb05d9b67 = function (arg0) {
    copy_rgb(arg0 >>> 0);
  };
  imports.wbg.__wbg_makecssRGB_893bf0cd9fdb302d = function (arg0) {
    make_cssRGB(arg0 >>> 0);
  };
  imports.wbg.__wbindgen_init_externref_table = function () {
    const table = wasm.__wbindgen_export_0;
    const offset = table.grow(4);
    table.set(0, undefined);
    table.set(offset + 0, undefined);
    table.set(offset + 1, null);
    table.set(offset + 2, true);
    table.set(offset + 3, false);
  };
  imports.wbg.__wbindgen_throw = function (arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
  };
  return imports;
}
function __wbg_init_memory(imports, memory) {}
function __wbg_finalize_init(instance, module) {
  wasm = instance.exports;
  __wbg_init.__wbindgen_wasm_module = module;
  cachedUint8ArrayMemory0 = null;
  wasm.__wbindgen_start();
  return wasm;
}
function initSync(module) {
  if (wasm !== undefined) return wasm;
  if (typeof module !== 'undefined') {
    if (Object.getPrototypeOf(module) === Object.prototype) {
      ({
        module
      } = module);
    } else {
      console.warn('using deprecated parameters for `initSync()`; pass a single object instead');
    }
  }
  const imports = __wbg_get_imports();
  __wbg_init_memory(imports);
  if (!(module instanceof WebAssembly.Module)) {
    module = new WebAssembly.Module(module);
  }
  const instance = new WebAssembly.Instance(module, imports);
  return __wbg_finalize_init(instance, module);
}
async function __wbg_init(module_or_path) {
  if (wasm !== undefined) return wasm;
  if (typeof module_or_path !== 'undefined') {
    if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
      ({
        module_or_path
      } = module_or_path);
    } else {
      console.warn('using deprecated parameters for the initialization function; pass a single object instead');
    }
  }
  const imports = __wbg_get_imports();
  if (typeof module_or_path === 'string' || typeof Request === 'function' && module_or_path instanceof Request || typeof URL === 'function' && module_or_path instanceof URL) {
    module_or_path = fetch(module_or_path);
  }
  __wbg_init_memory(imports);
  const {
    instance,
    module
  } = await __wbg_load(await module_or_path, imports);
  return __wbg_finalize_init(instance, module);
}

/* harmony default export */ const qcms = ((/* unused pure expression or super */ null && (__wbg_init)));
;// ./src/core/colorspace.js


function resizeRgbImage(src, dest, w1, h1, w2, h2, alpha01) {
  const COMPONENTS = 3;
  alpha01 = alpha01 !== 1 ? 0 : alpha01;
  const xRatio = w1 / w2;
  const yRatio = h1 / h2;
  let newIndex = 0,
    oldIndex;
  const xScaled = new Uint16Array(w2);
  const w1Scanline = w1 * COMPONENTS;
  for (let i = 0; i < w2; i++) {
    xScaled[i] = Math.floor(i * xRatio) * COMPONENTS;
  }
  for (let i = 0; i < h2; i++) {
    const py = Math.floor(i * yRatio) * w1Scanline;
    for (let j = 0; j < w2; j++) {
      oldIndex = py + xScaled[j];
      dest[newIndex++] = src[oldIndex++];
      dest[newIndex++] = src[oldIndex++];
      dest[newIndex++] = src[oldIndex++];
      newIndex += alpha01;
    }
  }
}
function resizeRgbaImage(src, dest, w1, h1, w2, h2, alpha01) {
  const xRatio = w1 / w2;
  const yRatio = h1 / h2;
  let newIndex = 0;
  const xScaled = new Uint16Array(w2);
  if (alpha01 === 1) {
    for (let i = 0; i < w2; i++) {
      xScaled[i] = Math.floor(i * xRatio);
    }
    const src32 = new Uint32Array(src.buffer);
    const dest32 = new Uint32Array(dest.buffer);
    const rgbMask = FeatureTest.isLittleEndian ? 0x00ffffff : 0xffffff00;
    for (let i = 0; i < h2; i++) {
      const buf = src32.subarray(Math.floor(i * yRatio) * w1);
      for (let j = 0; j < w2; j++) {
        dest32[newIndex++] |= buf[xScaled[j]] & rgbMask;
      }
    }
  } else {
    const COMPONENTS = 4;
    const w1Scanline = w1 * COMPONENTS;
    for (let i = 0; i < w2; i++) {
      xScaled[i] = Math.floor(i * xRatio) * COMPONENTS;
    }
    for (let i = 0; i < h2; i++) {
      const buf = src.subarray(Math.floor(i * yRatio) * w1Scanline);
      for (let j = 0; j < w2; j++) {
        const oldIndex = xScaled[j];
        dest[newIndex++] = buf[oldIndex];
        dest[newIndex++] = buf[oldIndex + 1];
        dest[newIndex++] = buf[oldIndex + 2];
      }
    }
  }
}
function copyRgbaImage(src, dest, alpha01) {
  if (alpha01 === 1) {
    const src32 = new Uint32Array(src.buffer);
    const dest32 = new Uint32Array(dest.buffer);
    const rgbMask = FeatureTest.isLittleEndian ? 0x00ffffff : 0xffffff00;
    for (let i = 0, ii = src32.length; i < ii; i++) {
      dest32[i] |= src32[i] & rgbMask;
    }
  } else {
    let j = 0;
    for (let i = 0, ii = src.length; i < ii; i += 4) {
      dest[j++] = src[i];
      dest[j++] = src[i + 1];
      dest[j++] = src[i + 2];
    }
  }
}
function isDefaultDecodeHelper(decode, expectedLen) {
  if (!Array.isArray(decode)) {
    return true;
  }
  const decodeLen = decode.length;
  if (decodeLen < expectedLen) {
    warn("Decode map length is too short.");
    return true;
  }
  if (decodeLen > expectedLen) {
    info("Truncating too long decode map.");
    decode.length = expectedLen;
  }
  return false;
}
class ColorSpace {
  static #rgbBuf = new Uint8ClampedArray(3);
  constructor(name, numComps) {
    this.name = name;
    this.numComps = numComps;
  }
  getRgb(src, srcOffset, output = new Uint8ClampedArray(3)) {
    this.getRgbItem(src, srcOffset, output, 0);
    return output;
  }
  getRgbHex(src, srcOffset) {
    const buffer = this.getRgb(src, srcOffset, ColorSpace.#rgbBuf);
    return Util.makeHexColor(buffer[0], buffer[1], buffer[2]);
  }
  getRgbItem(src, srcOffset, dest, destOffset) {
    unreachable("Should not call ColorSpace.getRgbItem");
  }
  getRgbBuffer(src, srcOffset, count, dest, destOffset, bits, alpha01) {
    unreachable("Should not call ColorSpace.getRgbBuffer");
  }
  getOutputLength(inputLength, alpha01) {
    unreachable("Should not call ColorSpace.getOutputLength");
  }
  isPassthrough(bits) {
    return false;
  }
  isDefaultDecode(decode, bpc) {
    return ColorSpace.isDefaultDecode(decode, this.numComps);
  }
  fillRgb(dest, originalWidth, originalHeight, width, height, actualHeight, bpc, comps, alpha01) {
    const count = originalWidth * originalHeight;
    let rgbBuf = null;
    const numComponentColors = 1 << bpc;
    const needsResizing = originalHeight !== height || originalWidth !== width;
    if (this.isPassthrough(bpc)) {
      rgbBuf = comps;
    } else if (this.numComps === 1 && count > numComponentColors && this.name !== "DeviceGray" && this.name !== "DeviceRGB") {
      const allColors = bpc <= 8 ? new Uint8Array(numComponentColors) : new Uint16Array(numComponentColors);
      for (let i = 0; i < numComponentColors; i++) {
        allColors[i] = i;
      }
      const colorMap = new Uint8ClampedArray(numComponentColors * 3);
      this.getRgbBuffer(allColors, 0, numComponentColors, colorMap, 0, bpc, 0);
      if (!needsResizing) {
        let destPos = 0;
        for (let i = 0; i < count; ++i) {
          const key = comps[i] * 3;
          dest[destPos++] = colorMap[key];
          dest[destPos++] = colorMap[key + 1];
          dest[destPos++] = colorMap[key + 2];
          destPos += alpha01;
        }
      } else {
        rgbBuf = new Uint8Array(count * 3);
        let rgbPos = 0;
        for (let i = 0; i < count; ++i) {
          const key = comps[i] * 3;
          rgbBuf[rgbPos++] = colorMap[key];
          rgbBuf[rgbPos++] = colorMap[key + 1];
          rgbBuf[rgbPos++] = colorMap[key + 2];
        }
      }
    } else if (!needsResizing) {
      this.getRgbBuffer(comps, 0, width * actualHeight, dest, 0, bpc, alpha01);
    } else {
      rgbBuf = new Uint8ClampedArray(count * 3);
      this.getRgbBuffer(comps, 0, count, rgbBuf, 0, bpc, 0);
    }
    if (rgbBuf) {
      if (needsResizing) {
        resizeRgbImage(rgbBuf, dest, originalWidth, originalHeight, width, height, alpha01);
      } else {
        let destPos = 0,
          rgbPos = 0;
        for (let i = 0, ii = width * actualHeight; i < ii; i++) {
          dest[destPos++] = rgbBuf[rgbPos++];
          dest[destPos++] = rgbBuf[rgbPos++];
          dest[destPos++] = rgbBuf[rgbPos++];
          destPos += alpha01;
        }
      }
    }
  }
  get usesZeroToOneRange() {
    return shadow(this, "usesZeroToOneRange", true);
  }
  static isDefaultDecode(decode, numComps) {
    if (isDefaultDecodeHelper(decode, numComps * 2)) {
      return true;
    }
    for (let i = 0, ii = decode.length; i < ii; i += 2) {
      if (decode[i] !== 0 || decode[i + 1] !== 1) {
        return false;
      }
    }
    return true;
  }
}
class AlternateCS extends ColorSpace {
  constructor(numComps, base, tintFn) {
    super("Alternate", numComps);
    this.base = base;
    this.tintFn = tintFn;
    this.tmpBuf = new Float32Array(base.numComps);
  }
  getRgbItem(src, srcOffset, dest, destOffset) {
    const tmpBuf = this.tmpBuf;
    this.tintFn(src, srcOffset, tmpBuf, 0);
    this.base.getRgbItem(tmpBuf, 0, dest, destOffset);
  }
  getRgbBuffer(src, srcOffset, count, dest, destOffset, bits, alpha01) {
    const tintFn = this.tintFn;
    const base = this.base;
    const scale = 1 / ((1 << bits) - 1);
    const baseNumComps = base.numComps;
    const usesZeroToOneRange = base.usesZeroToOneRange;
    const isPassthrough = (base.isPassthrough(8) || !usesZeroToOneRange) && alpha01 === 0;
    let pos = isPassthrough ? destOffset : 0;
    const baseBuf = isPassthrough ? dest : new Uint8ClampedArray(baseNumComps * count);
    const numComps = this.numComps;
    const scaled = new Float32Array(numComps);
    const tinted = new Float32Array(baseNumComps);
    let i, j;
    for (i = 0; i < count; i++) {
      for (j = 0; j < numComps; j++) {
        scaled[j] = src[srcOffset++] * scale;
      }
      tintFn(scaled, 0, tinted, 0);
      if (usesZeroToOneRange) {
        for (j = 0; j < baseNumComps; j++) {
          baseBuf[pos++] = tinted[j] * 255;
        }
      } else {
        base.getRgbItem(tinted, 0, baseBuf, pos);
        pos += baseNumComps;
      }
    }
    if (!isPassthrough) {
      base.getRgbBuffer(baseBuf, 0, count, dest, destOffset, 8, alpha01);
    }
  }
  getOutputLength(inputLength, alpha01) {
    return this.base.getOutputLength(inputLength * this.base.numComps / this.numComps, alpha01);
  }
}
class PatternCS extends ColorSpace {
  constructor(baseCS) {
    super("Pattern", null);
    this.base = baseCS;
  }
  isDefaultDecode(decode, bpc) {
    unreachable("Should not call PatternCS.isDefaultDecode");
  }
}
class IndexedCS extends ColorSpace {
  constructor(base, highVal, lookup) {
    super("Indexed", 1);
    this.base = base;
    this.highVal = highVal;
    const length = base.numComps * (highVal + 1);
    this.lookup = new Uint8Array(length);
    if (lookup instanceof BaseStream) {
      const bytes = lookup.getBytes(length);
      this.lookup.set(bytes);
    } else if (typeof lookup === "string") {
      for (let i = 0; i < length; ++i) {
        this.lookup[i] = lookup.charCodeAt(i) & 0xff;
      }
    } else {
      throw new FormatError(`IndexedCS - unrecognized lookup table: ${lookup}`);
    }
  }
  getRgbItem(src, srcOffset, dest, destOffset) {
    const {
      base,
      highVal,
      lookup
    } = this;
    const start = MathClamp(Math.round(src[srcOffset]), 0, highVal) * base.numComps;
    base.getRgbBuffer(lookup, start, 1, dest, destOffset, 8, 0);
  }
  getRgbBuffer(src, srcOffset, count, dest, destOffset, bits, alpha01) {
    const {
      base,
      highVal,
      lookup
    } = this;
    const {
      numComps
    } = base;
    const outputDelta = base.getOutputLength(numComps, alpha01);
    for (let i = 0; i < count; ++i) {
      const lookupPos = MathClamp(Math.round(src[srcOffset++]), 0, highVal) * numComps;
      base.getRgbBuffer(lookup, lookupPos, 1, dest, destOffset, 8, alpha01);
      destOffset += outputDelta;
    }
  }
  getOutputLength(inputLength, alpha01) {
    return this.base.getOutputLength(inputLength * this.base.numComps, alpha01);
  }
  isDefaultDecode(decode, bpc) {
    if (isDefaultDecodeHelper(decode, 2)) {
      return true;
    }
    if (!Number.isInteger(bpc) || bpc < 1) {
      warn("Bits per component is not correct");
      return true;
    }
    return decode[0] === 0 && decode[1] === (1 << bpc) - 1;
  }
}
class DeviceGrayCS extends ColorSpace {
  constructor() {
    super("DeviceGray", 1);
  }
  getRgbItem(src, srcOffset, dest, destOffset) {
    const c = src[srcOffset] * 255;
    dest[destOffset] = dest[destOffset + 1] = dest[destOffset + 2] = c;
  }
  getRgbBuffer(src, srcOffset, count, dest, destOffset, bits, alpha01) {
    const scale = 255 / ((1 << bits) - 1);
    let j = srcOffset,
      q = destOffset;
    for (let i = 0; i < count; ++i) {
      const c = scale * src[j++];
      dest[q++] = c;
      dest[q++] = c;
      dest[q++] = c;
      q += alpha01;
    }
  }
  getOutputLength(inputLength, alpha01) {
    return inputLength * (3 + alpha01);
  }
}
class DeviceRgbCS extends ColorSpace {
  constructor() {
    super("DeviceRGB", 3);
  }
  getRgbItem(src, srcOffset, dest, destOffset) {
    dest[destOffset] = src[srcOffset] * 255;
    dest[destOffset + 1] = src[srcOffset + 1] * 255;
    dest[destOffset + 2] = src[srcOffset + 2] * 255;
  }
  getRgbBuffer(src, srcOffset, count, dest, destOffset, bits, alpha01) {
    if (bits === 8 && alpha01 === 0) {
      dest.set(src.subarray(srcOffset, srcOffset + count * 3), destOffset);
      return;
    }
    const scale = 255 / ((1 << bits) - 1);
    let j = srcOffset,
      q = destOffset;
    for (let i = 0; i < count; ++i) {
      dest[q++] = scale * src[j++];
      dest[q++] = scale * src[j++];
      dest[q++] = scale * src[j++];
      q += alpha01;
    }
  }
  getOutputLength(inputLength, alpha01) {
    return inputLength * (3 + alpha01) / 3 | 0;
  }
  isPassthrough(bits) {
    return bits === 8;
  }
}
class DeviceRgbaCS extends ColorSpace {
  constructor() {
    super("DeviceRGBA", 4);
  }
  getOutputLength(inputLength, _alpha01) {
    return inputLength * 4;
  }
  isPassthrough(bits) {
    return bits === 8;
  }
  fillRgb(dest, originalWidth, originalHeight, width, height, actualHeight, bpc, comps, alpha01) {
    if (originalHeight !== height || originalWidth !== width) {
      resizeRgbaImage(comps, dest, originalWidth, originalHeight, width, height, alpha01);
    } else {
      copyRgbaImage(comps, dest, alpha01);
    }
  }
}
class DeviceCmykCS extends ColorSpace {
  constructor() {
    super("DeviceCMYK", 4);
  }
  #toRgb(src, srcOffset, srcScale, dest, destOffset) {
    const c = src[srcOffset] * srcScale;
    const m = src[srcOffset + 1] * srcScale;
    const y = src[srcOffset + 2] * srcScale;
    const k = src[srcOffset + 3] * srcScale;
    dest[destOffset] = 255 + c * (-4.387332384609988 * c + 54.48615194189176 * m + 18.82290502165302 * y + 212.25662451639585 * k + -285.2331026137004) + m * (1.7149763477362134 * m - 5.6096736904047315 * y + -17.873870861415444 * k - 5.497006427196366) + y * (-2.5217340131683033 * y - 21.248923337353073 * k + 17.5119270841813) + k * (-21.86122147463605 * k - 189.48180835922747);
    dest[destOffset + 1] = 255 + c * (8.841041422036149 * c + 60.118027045597366 * m + 6.871425592049007 * y + 31.159100130055922 * k + -79.2970844816548) + m * (-15.310361306967817 * m + 17.575251261109482 * y + 131.35250912493976 * k - 190.9453302588951) + y * (4.444339102852739 * y + 9.8632861493405 * k - 24.86741582555878) + k * (-20.737325471181034 * k - 187.80453709719578);
    dest[destOffset + 2] = 255 + c * (0.8842522430003296 * c + 8.078677503112928 * m + 30.89978309703729 * y - 0.23883238689178934 * k + -14.183576799673286) + m * (10.49593273432072 * m + 63.02378494754052 * y + 50.606957656360734 * k - 112.23884253719248) + y * (0.03296041114873217 * y + 115.60384449646641 * k + -193.58209356861505) + k * (-22.33816807309886 * k - 180.12613974708367);
  }
  getRgbItem(src, srcOffset, dest, destOffset) {
    this.#toRgb(src, srcOffset, 1, dest, destOffset);
  }
  getRgbBuffer(src, srcOffset, count, dest, destOffset, bits, alpha01) {
    const scale = 1 / ((1 << bits) - 1);
    for (let i = 0; i < count; i++) {
      this.#toRgb(src, srcOffset, scale, dest, destOffset);
      srcOffset += 4;
      destOffset += 3 + alpha01;
    }
  }
  getOutputLength(inputLength, alpha01) {
    return inputLength / 4 * (3 + alpha01) | 0;
  }
}
class CalGrayCS extends ColorSpace {
  constructor(whitePoint, blackPoint, gamma) {
    super("CalGray", 1);
    if (!whitePoint) {
      throw new FormatError("WhitePoint missing - required for color space CalGray");
    }
    [this.XW, this.YW, this.ZW] = whitePoint;
    [this.XB, this.YB, this.ZB] = blackPoint || [0, 0, 0];
    this.G = gamma || 1;
    if (this.XW < 0 || this.ZW < 0 || this.YW !== 1) {
      throw new FormatError(`Invalid WhitePoint components for ${this.name}, no fallback available`);
    }
    if (this.XB < 0 || this.YB < 0 || this.ZB < 0) {
      info(`Invalid BlackPoint for ${this.name}, falling back to default.`);
      this.XB = this.YB = this.ZB = 0;
    }
    if (this.XB !== 0 || this.YB !== 0 || this.ZB !== 0) {
      warn(`${this.name}, BlackPoint: XB: ${this.XB}, YB: ${this.YB}, ` + `ZB: ${this.ZB}, only default values are supported.`);
    }
    if (this.G < 1) {
      info(`Invalid Gamma: ${this.G} for ${this.name}, falling back to default.`);
      this.G = 1;
    }
  }
  #toRgb(src, srcOffset, dest, destOffset, scale) {
    const A = src[srcOffset] * scale;
    const AG = A ** this.G;
    const L = this.YW * AG;
    const val = Math.max(295.8 * L ** 0.3333333333333333 - 40.8, 0);
    dest[destOffset] = val;
    dest[destOffset + 1] = val;
    dest[destOffset + 2] = val;
  }
  getRgbItem(src, srcOffset, dest, destOffset) {
    this.#toRgb(src, srcOffset, dest, destOffset, 1);
  }
  getRgbBuffer(src, srcOffset, count, dest, destOffset, bits, alpha01) {
    const scale = 1 / ((1 << bits) - 1);
    for (let i = 0; i < count; ++i) {
      this.#toRgb(src, srcOffset, dest, destOffset, scale);
      srcOffset += 1;
      destOffset += 3 + alpha01;
    }
  }
  getOutputLength(inputLength, alpha01) {
    return inputLength * (3 + alpha01);
  }
}
class CalRGBCS extends ColorSpace {
  static #BRADFORD_SCALE_MATRIX = new Float32Array([0.8951, 0.2664, -0.1614, -0.7502, 1.7135, 0.0367, 0.0389, -0.0685, 1.0296]);
  static #BRADFORD_SCALE_INVERSE_MATRIX = new Float32Array([0.9869929, -0.1470543, 0.1599627, 0.4323053, 0.5183603, 0.0492912, -0.0085287, 0.0400428, 0.9684867]);
  static #SRGB_D65_XYZ_TO_RGB_MATRIX = new Float32Array([3.2404542, -1.5371385, -0.4985314, -0.9692660, 1.8760108, 0.0415560, 0.0556434, -0.2040259, 1.0572252]);
  static #FLAT_WHITEPOINT_MATRIX = new Float32Array([1, 1, 1]);
  static #tempNormalizeMatrix = new Float32Array(3);
  static #tempConvertMatrix1 = new Float32Array(3);
  static #tempConvertMatrix2 = new Float32Array(3);
  static #DECODE_L_CONSTANT = ((8 + 16) / 116) ** 3 / 8.0;
  constructor(whitePoint, blackPoint, gamma, matrix) {
    super("CalRGB", 3);
    if (!whitePoint) {
      throw new FormatError("WhitePoint missing - required for color space CalRGB");
    }
    const [XW, YW, ZW] = this.whitePoint = whitePoint;
    const [XB, YB, ZB] = this.blackPoint = blackPoint || new Float32Array(3);
    [this.GR, this.GG, this.GB] = gamma || new Float32Array([1, 1, 1]);
    [this.MXA, this.MYA, this.MZA, this.MXB, this.MYB, this.MZB, this.MXC, this.MYC, this.MZC] = matrix || new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
    if (XW < 0 || ZW < 0 || YW !== 1) {
      throw new FormatError(`Invalid WhitePoint components for ${this.name}, no fallback available`);
    }
    if (XB < 0 || YB < 0 || ZB < 0) {
      info(`Invalid BlackPoint for ${this.name} [${XB}, ${YB}, ${ZB}], ` + "falling back to default.");
      this.blackPoint = new Float32Array(3);
    }
    if (this.GR < 0 || this.GG < 0 || this.GB < 0) {
      info(`Invalid Gamma [${this.GR}, ${this.GG}, ${this.GB}] for ` + `${this.name}, falling back to default.`);
      this.GR = this.GG = this.GB = 1;
    }
  }
  #matrixProduct(a, b, result) {
    result[0] = a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    result[1] = a[3] * b[0] + a[4] * b[1] + a[5] * b[2];
    result[2] = a[6] * b[0] + a[7] * b[1] + a[8] * b[2];
  }
  #toFlat(sourceWhitePoint, LMS, result) {
    result[0] = LMS[0] * 1 / sourceWhitePoint[0];
    result[1] = LMS[1] * 1 / sourceWhitePoint[1];
    result[2] = LMS[2] * 1 / sourceWhitePoint[2];
  }
  #toD65(sourceWhitePoint, LMS, result) {
    const D65X = 0.95047;
    const D65Y = 1;
    const D65Z = 1.08883;
    result[0] = LMS[0] * D65X / sourceWhitePoint[0];
    result[1] = LMS[1] * D65Y / sourceWhitePoint[1];
    result[2] = LMS[2] * D65Z / sourceWhitePoint[2];
  }
  #sRGBTransferFunction(color) {
    if (color <= 0.0031308) {
      return MathClamp(12.92 * color, 0, 1);
    }
    if (color >= 0.99554525) {
      return 1;
    }
    return MathClamp((1 + 0.055) * color ** (1 / 2.4) - 0.055, 0, 1);
  }
  #decodeL(L) {
    if (L < 0) {
      return -this.#decodeL(-L);
    }
    if (L > 8.0) {
      return ((L + 16) / 116) ** 3;
    }
    return L * CalRGBCS.#DECODE_L_CONSTANT;
  }
  #compensateBlackPoint(sourceBlackPoint, XYZ_Flat, result) {
    if (sourceBlackPoint[0] === 0 && sourceBlackPoint[1] === 0 && sourceBlackPoint[2] === 0) {
      result[0] = XYZ_Flat[0];
      result[1] = XYZ_Flat[1];
      result[2] = XYZ_Flat[2];
      return;
    }
    const zeroDecodeL = this.#decodeL(0);
    const X_DST = zeroDecodeL;
    const X_SRC = this.#decodeL(sourceBlackPoint[0]);
    const Y_DST = zeroDecodeL;
    const Y_SRC = this.#decodeL(sourceBlackPoint[1]);
    const Z_DST = zeroDecodeL;
    const Z_SRC = this.#decodeL(sourceBlackPoint[2]);
    const X_Scale = (1 - X_DST) / (1 - X_SRC);
    const X_Offset = 1 - X_Scale;
    const Y_Scale = (1 - Y_DST) / (1 - Y_SRC);
    const Y_Offset = 1 - Y_Scale;
    const Z_Scale = (1 - Z_DST) / (1 - Z_SRC);
    const Z_Offset = 1 - Z_Scale;
    result[0] = XYZ_Flat[0] * X_Scale + X_Offset;
    result[1] = XYZ_Flat[1] * Y_Scale + Y_Offset;
    result[2] = XYZ_Flat[2] * Z_Scale + Z_Offset;
  }
  #normalizeWhitePointToFlat(sourceWhitePoint, XYZ_In, result) {
    if (sourceWhitePoint[0] === 1 && sourceWhitePoint[2] === 1) {
      result[0] = XYZ_In[0];
      result[1] = XYZ_In[1];
      result[2] = XYZ_In[2];
      return;
    }
    const LMS = result;
    this.#matrixProduct(CalRGBCS.#BRADFORD_SCALE_MATRIX, XYZ_In, LMS);
    const LMS_Flat = CalRGBCS.#tempNormalizeMatrix;
    this.#toFlat(sourceWhitePoint, LMS, LMS_Flat);
    this.#matrixProduct(CalRGBCS.#BRADFORD_SCALE_INVERSE_MATRIX, LMS_Flat, result);
  }
  #normalizeWhitePointToD65(sourceWhitePoint, XYZ_In, result) {
    const LMS = result;
    this.#matrixProduct(CalRGBCS.#BRADFORD_SCALE_MATRIX, XYZ_In, LMS);
    const LMS_D65 = CalRGBCS.#tempNormalizeMatrix;
    this.#toD65(sourceWhitePoint, LMS, LMS_D65);
    this.#matrixProduct(CalRGBCS.#BRADFORD_SCALE_INVERSE_MATRIX, LMS_D65, result);
  }
  #toRgb(src, srcOffset, dest, destOffset, scale) {
    const A = MathClamp(src[srcOffset] * scale, 0, 1);
    const B = MathClamp(src[srcOffset + 1] * scale, 0, 1);
    const C = MathClamp(src[srcOffset + 2] * scale, 0, 1);
    const AGR = A === 1 ? 1 : A ** this.GR;
    const BGG = B === 1 ? 1 : B ** this.GG;
    const CGB = C === 1 ? 1 : C ** this.GB;
    const X = this.MXA * AGR + this.MXB * BGG + this.MXC * CGB;
    const Y = this.MYA * AGR + this.MYB * BGG + this.MYC * CGB;
    const Z = this.MZA * AGR + this.MZB * BGG + this.MZC * CGB;
    const XYZ = CalRGBCS.#tempConvertMatrix1;
    XYZ[0] = X;
    XYZ[1] = Y;
    XYZ[2] = Z;
    const XYZ_Flat = CalRGBCS.#tempConvertMatrix2;
    this.#normalizeWhitePointToFlat(this.whitePoint, XYZ, XYZ_Flat);
    const XYZ_Black = CalRGBCS.#tempConvertMatrix1;
    this.#compensateBlackPoint(this.blackPoint, XYZ_Flat, XYZ_Black);
    const XYZ_D65 = CalRGBCS.#tempConvertMatrix2;
    this.#normalizeWhitePointToD65(CalRGBCS.#FLAT_WHITEPOINT_MATRIX, XYZ_Black, XYZ_D65);
    const SRGB = CalRGBCS.#tempConvertMatrix1;
    this.#matrixProduct(CalRGBCS.#SRGB_D65_XYZ_TO_RGB_MATRIX, XYZ_D65, SRGB);
    dest[destOffset] = this.#sRGBTransferFunction(SRGB[0]) * 255;
    dest[destOffset + 1] = this.#sRGBTransferFunction(SRGB[1]) * 255;
    dest[destOffset + 2] = this.#sRGBTransferFunction(SRGB[2]) * 255;
  }
  getRgbItem(src, srcOffset, dest, destOffset) {
    this.#toRgb(src, srcOffset, dest, destOffset, 1);
  }
  getRgbBuffer(src, srcOffset, count, dest, destOffset, bits, alpha01) {
    const scale = 1 / ((1 << bits) - 1);
    for (let i = 0; i < count; ++i) {
      this.#toRgb(src, srcOffset, dest, destOffset, scale);
      srcOffset += 3;
      destOffset += 3 + alpha01;
    }
  }
  getOutputLength(inputLength, alpha01) {
    return inputLength * (3 + alpha01) / 3 | 0;
  }
}
class LabCS extends ColorSpace {
  constructor(whitePoint, blackPoint, range) {
    super("Lab", 3);
    if (!whitePoint) {
      throw new FormatError("WhitePoint missing - required for color space Lab");
    }
    [this.XW, this.YW, this.ZW] = whitePoint;
    [this.amin, this.amax, this.bmin, this.bmax] = range || [-100, 100, -100, 100];
    [this.XB, this.YB, this.ZB] = blackPoint || [0, 0, 0];
    if (this.XW < 0 || this.ZW < 0 || this.YW !== 1) {
      throw new FormatError("Invalid WhitePoint components, no fallback available");
    }
    if (this.XB < 0 || this.YB < 0 || this.ZB < 0) {
      info("Invalid BlackPoint, falling back to default");
      this.XB = this.YB = this.ZB = 0;
    }
    if (this.amin > this.amax || this.bmin > this.bmax) {
      info("Invalid Range, falling back to defaults");
      this.amin = -100;
      this.amax = 100;
      this.bmin = -100;
      this.bmax = 100;
    }
  }
  #fn_g(x) {
    return x >= 6 / 29 ? x ** 3 : 108 / 841 * (x - 4 / 29);
  }
  #decode(value, high1, low2, high2) {
    return low2 + value * (high2 - low2) / high1;
  }
  #toRgb(src, srcOffset, maxVal, dest, destOffset) {
    let Ls = src[srcOffset];
    let as = src[srcOffset + 1];
    let bs = src[srcOffset + 2];
    if (maxVal !== false) {
      Ls = this.#decode(Ls, maxVal, 0, 100);
      as = this.#decode(as, maxVal, this.amin, this.amax);
      bs = this.#decode(bs, maxVal, this.bmin, this.bmax);
    }
    if (as > this.amax) {
      as = this.amax;
    } else if (as < this.amin) {
      as = this.amin;
    }
    if (bs > this.bmax) {
      bs = this.bmax;
    } else if (bs < this.bmin) {
      bs = this.bmin;
    }
    const M = (Ls + 16) / 116;
    const L = M + as / 500;
    const N = M - bs / 200;
    const X = this.XW * this.#fn_g(L);
    const Y = this.YW * this.#fn_g(M);
    const Z = this.ZW * this.#fn_g(N);
    let r, g, b;
    if (this.ZW < 1) {
      r = X * 3.1339 + Y * -1.617 + Z * -0.4906;
      g = X * -0.9785 + Y * 1.916 + Z * 0.0333;
      b = X * 0.072 + Y * -0.229 + Z * 1.4057;
    } else {
      r = X * 3.2406 + Y * -1.5372 + Z * -0.4986;
      g = X * -0.9689 + Y * 1.8758 + Z * 0.0415;
      b = X * 0.0557 + Y * -0.204 + Z * 1.057;
    }
    dest[destOffset] = Math.sqrt(r) * 255;
    dest[destOffset + 1] = Math.sqrt(g) * 255;
    dest[destOffset + 2] = Math.sqrt(b) * 255;
  }
  getRgbItem(src, srcOffset, dest, destOffset) {
    this.#toRgb(src, srcOffset, false, dest, destOffset);
  }
  getRgbBuffer(src, srcOffset, count, dest, destOffset, bits, alpha01) {
    const maxVal = (1 << bits) - 1;
    for (let i = 0; i < count; i++) {
      this.#toRgb(src, srcOffset, maxVal, dest, destOffset);
      srcOffset += 3;
      destOffset += 3 + alpha01;
    }
  }
  getOutputLength(inputLength, alpha01) {
    return inputLength * (3 + alpha01) / 3 | 0;
  }
  isDefaultDecode(decode, bpc) {
    return true;
  }
  get usesZeroToOneRange() {
    return shadow(this, "usesZeroToOneRange", false);
  }
}

;// ./src/core/icc_colorspace.js




function fetchSync(url) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, false);
  xhr.responseType = "arraybuffer";
  xhr.send(null);
  return xhr.response;
}
class IccColorSpace extends ColorSpace {
  #transformer;
  #convertPixel;
  static #useWasm = true;
  static #wasmUrl = null;
  static #finalizer = null;
  constructor(iccProfile, name, numComps) {
    if (!IccColorSpace.isUsable) {
      throw new Error("No ICC color space support");
    }
    super(name, numComps);
    let inType;
    switch (numComps) {
      case 1:
        inType = DataType.Gray8;
        this.#convertPixel = (src, srcOffset, css) => qcms_convert_one(this.#transformer, src[srcOffset] * 255, css);
        break;
      case 3:
        inType = DataType.RGB8;
        this.#convertPixel = (src, srcOffset, css) => qcms_convert_three(this.#transformer, src[srcOffset] * 255, src[srcOffset + 1] * 255, src[srcOffset + 2] * 255, css);
        break;
      case 4:
        inType = DataType.CMYK;
        this.#convertPixel = (src, srcOffset, css) => qcms_convert_four(this.#transformer, src[srcOffset] * 255, src[srcOffset + 1] * 255, src[srcOffset + 2] * 255, src[srcOffset + 3] * 255, css);
        break;
      default:
        throw new Error(`Unsupported number of components: ${numComps}`);
    }
    this.#transformer = qcms_transformer_from_memory(iccProfile, inType, Intent.Perceptual);
    if (!this.#transformer) {
      throw new Error("Failed to create ICC color space");
    }
    IccColorSpace.#finalizer ||= new FinalizationRegistry(transformer => {
      qcms_drop_transformer(transformer);
    });
    IccColorSpace.#finalizer.register(this, this.#transformer);
  }
  getRgbHex(src, srcOffset) {
    this.#convertPixel(src, srcOffset, true);
    return QCMS._cssColor;
  }
  getRgbItem(src, srcOffset, dest, destOffset) {
    QCMS._destBuffer = dest;
    QCMS._destOffset = destOffset;
    QCMS._destLength = 3;
    this.#convertPixel(src, srcOffset, false);
    QCMS._destBuffer = null;
  }
  getRgbBuffer(src, srcOffset, count, dest, destOffset, bits, alpha01) {
    src = src.subarray(srcOffset, srcOffset + count * this.numComps);
    if (bits !== 8) {
      const scale = 255 / ((1 << bits) - 1);
      for (let i = 0, ii = src.length; i < ii; i++) {
        src[i] *= scale;
      }
    }
    QCMS._mustAddAlpha = alpha01 && dest.buffer === src.buffer;
    QCMS._destBuffer = dest;
    QCMS._destOffset = destOffset;
    QCMS._destLength = count * (3 + alpha01);
    qcms_convert_array(this.#transformer, src);
    QCMS._mustAddAlpha = false;
    QCMS._destBuffer = null;
  }
  getOutputLength(inputLength, alpha01) {
    return inputLength / this.numComps * (3 + alpha01) | 0;
  }
  static setOptions({
    useWasm,
    useWorkerFetch,
    wasmUrl
  }) {
    if (!useWorkerFetch) {
      this.#useWasm = false;
      return;
    }
    this.#useWasm = useWasm;
    this.#wasmUrl = wasmUrl;
  }
  static get isUsable() {
    let isUsable = false;
    if (this.#useWasm) {
      if (this.#wasmUrl) {
        try {
          this._module = initSync({
            module: fetchSync(`${this.#wasmUrl}qcms_bg.wasm`)
          });
          isUsable = !!this._module;
          QCMS._memory = this._module.memory;
          QCMS._makeHexColor = Util.makeHexColor;
        } catch (e) {
          warn(`ICCBased color space: "${e}".`);
        }
      } else {
        warn("No ICC color space support due to missing `wasmUrl` API option");
      }
    }
    return shadow(this, "isUsable", isUsable);
  }
}
class CmykICCBasedCS extends IccColorSpace {
  static #iccUrl;
  constructor() {
    const iccProfile = new Uint8Array(fetchSync(`${CmykICCBasedCS.#iccUrl}CGATS001Compat-v2-micro.icc`));
    super(iccProfile, "DeviceCMYK", 4);
  }
  static setOptions({
    iccUrl
  }) {
    this.#iccUrl = iccUrl;
  }
  static get isUsable() {
    let isUsable = false;
    if (IccColorSpace.isUsable) {
      if (this.#iccUrl) {
        isUsable = true;
      } else {
        warn("No CMYK ICC profile support due to missing `iccUrl` API option");
      }
    }
    return shadow(this, "isUsable", isUsable);
  }
}

;// ./src/core/stream.js


class Stream extends BaseStream {
  constructor(arrayBuffer, start, length, dict) {
    super();
    this.bytes = arrayBuffer instanceof Uint8Array ? arrayBuffer : new Uint8Array(arrayBuffer);
    this.start = start || 0;
    this.pos = this.start;
    this.end = start + length || this.bytes.length;
    this.dict = dict;
  }
  get length() {
    return this.end - this.start;
  }
  get isEmpty() {
    return this.length === 0;
  }
  getByte() {
    if (this.pos >= this.end) {
      return -1;
    }
    return this.bytes[this.pos++];
  }
  getBytes(length) {
    const bytes = this.bytes;
    const pos = this.pos;
    const strEnd = this.end;
    if (!length) {
      this.pos = strEnd;
      return bytes.subarray(pos, strEnd);
    }
    let end = pos + length;
    if (end > strEnd) {
      end = strEnd;
    }
    this.pos = end;
    return bytes.subarray(pos, end);
  }
  getByteRange(begin, end) {
    if (begin < 0) {
      begin = 0;
    }
    if (end > this.end) {
      end = this.end;
    }
    return this.bytes.subarray(begin, end);
  }
  reset() {
    this.pos = this.start;
  }
  moveStart() {
    this.start = this.pos;
  }
  makeSubStream(start, length, dict = null) {
    return new Stream(this.bytes.buffer, start, length, dict);
  }
  clone() {
    return new Stream(this.bytes.buffer, this.start, this.end - this.start, this.dict.clone());
  }
}
class StringStream extends Stream {
  constructor(str) {
    super(stringToBytes(str));
  }
}
class NullStream extends Stream {
  constructor() {
    super(new Uint8Array(0));
  }
}

;// ./src/core/chunked_stream.js



class ChunkedStream extends Stream {
  progressiveDataLength = 0;
  _lastSuccessfulEnsureByteChunk = -1;
  _loadedChunks = new Set();
  constructor(length, chunkSize, manager) {
    super(new Uint8Array(length), 0, length, null);
    this.chunkSize = chunkSize;
    this.numChunks = Math.ceil(length / chunkSize);
    this.manager = manager;
  }
  getMissingChunks() {
    const chunks = [];
    for (let chunk = 0, n = this.numChunks; chunk < n; ++chunk) {
      if (!this._loadedChunks.has(chunk)) {
        chunks.push(chunk);
      }
    }
    return chunks;
  }
  get numChunksLoaded() {
    return this._loadedChunks.size;
  }
  get isDataLoaded() {
    return this.numChunksLoaded === this.numChunks;
  }
  onReceiveData(begin, chunk) {
    const chunkSize = this.chunkSize;
    if (begin % chunkSize !== 0) {
      throw new Error(`Bad begin offset: ${begin}`);
    }
    const end = begin + chunk.byteLength;
    if (end % chunkSize !== 0 && end !== this.bytes.length) {
      throw new Error(`Bad end offset: ${end}`);
    }
    this.bytes.set(new Uint8Array(chunk), begin);
    const beginChunk = Math.floor(begin / chunkSize);
    const endChunk = Math.floor((end - 1) / chunkSize) + 1;
    for (let curChunk = beginChunk; curChunk < endChunk; ++curChunk) {
      this._loadedChunks.add(curChunk);
    }
  }
  onReceiveProgressiveData(data) {
    let position = this.progressiveDataLength;
    const beginChunk = Math.floor(position / this.chunkSize);
    this.bytes.set(new Uint8Array(data), position);
    position += data.byteLength;
    this.progressiveDataLength = position;
    const endChunk = position >= this.end ? this.numChunks : Math.floor(position / this.chunkSize);
    for (let curChunk = beginChunk; curChunk < endChunk; ++curChunk) {
      this._loadedChunks.add(curChunk);
    }
  }
  ensureByte(pos) {
    if (pos < this.progressiveDataLength) {
      return;
    }
    const chunk = Math.floor(pos / this.chunkSize);
    if (chunk > this.numChunks) {
      return;
    }
    if (chunk === this._lastSuccessfulEnsureByteChunk) {
      return;
    }
    if (!this._loadedChunks.has(chunk)) {
      throw new MissingDataException(pos, pos + 1);
    }
    this._lastSuccessfulEnsureByteChunk = chunk;
  }
  ensureRange(begin, end) {
    if (begin >= end) {
      return;
    }
    if (end <= this.progressiveDataLength) {
      return;
    }
    const beginChunk = Math.floor(begin / this.chunkSize);
    if (beginChunk > this.numChunks) {
      return;
    }
    const endChunk = Math.min(Math.floor((end - 1) / this.chunkSize) + 1, this.numChunks);
    for (let chunk = beginChunk; chunk < endChunk; ++chunk) {
      if (!this._loadedChunks.has(chunk)) {
        throw new MissingDataException(begin, end);
      }
    }
  }
  nextEmptyChunk(beginChunk) {
    const numChunks = this.numChunks;
    for (let i = 0; i < numChunks; ++i) {
      const chunk = (beginChunk + i) % numChunks;
      if (!this._loadedChunks.has(chunk)) {
        return chunk;
      }
    }
    return null;
  }
  hasChunk(chunk) {
    return this._loadedChunks.has(chunk);
  }
  getByte() {
    const pos = this.pos;
    if (pos >= this.end) {
      return -1;
    }
    if (pos >= this.progressiveDataLength) {
      this.ensureByte(pos);
    }
    return this.bytes[this.pos++];
  }
  getBytes(length) {
    const bytes = this.bytes;
    const pos = this.pos;
    const strEnd = this.end;
    if (!length) {
      if (strEnd > this.progressiveDataLength) {
        this.ensureRange(pos, strEnd);
      }
      return bytes.subarray(pos, strEnd);
    }
    let end = pos + length;
    if (end > strEnd) {
      end = strEnd;
    }
    if (end > this.progressiveDataLength) {
      this.ensureRange(pos, end);
    }
    this.pos = end;
    return bytes.subarray(pos, end);
  }
  getByteRange(begin, end) {
    if (begin < 0) {
      begin = 0;
    }
    if (end > this.end) {
      end = this.end;
    }
    if (end > this.progressiveDataLength) {
      this.ensureRange(begin, end);
    }
    return this.bytes.subarray(begin, end);
  }
  makeSubStream(start, length, dict = null) {
    if (length) {
      if (start + length > this.progressiveDataLength) {
        this.ensureRange(start, start + length);
      }
    } else if (start >= this.progressiveDataLength) {
      this.ensureByte(start);
    }
    function ChunkedStreamSubstream() {}
    ChunkedStreamSubstream.prototype = Object.create(this);
    ChunkedStreamSubstream.prototype.getMissingChunks = function () {
      const chunkSize = this.chunkSize;
      const beginChunk = Math.floor(this.start / chunkSize);
      const endChunk = Math.floor((this.end - 1) / chunkSize) + 1;
      const missingChunks = [];
      for (let chunk = beginChunk; chunk < endChunk; ++chunk) {
        if (!this._loadedChunks.has(chunk)) {
          missingChunks.push(chunk);
        }
      }
      return missingChunks;
    };
    Object.defineProperty(ChunkedStreamSubstream.prototype, "isDataLoaded", {
      get() {
        if (this.numChunksLoaded === this.numChunks) {
          return true;
        }
        return this.getMissingChunks().length === 0;
      },
      configurable: true
    });
    const subStream = new ChunkedStreamSubstream();
    subStream.pos = subStream.start = start;
    subStream.end = start + length || this.end;
    subStream.dict = dict;
    return subStream;
  }
  getBaseStreams() {
    return [this];
  }
}
class ChunkedStreamManager {
  aborted = false;
  currRequestId = 0;
  _chunksNeededByRequest = new Map();
  _loadedStreamCapability = Promise.withResolvers();
  _promisesByRequest = new Map();
  _requestsByChunk = new Map();
  constructor(pdfStream, args) {
    this.length = args.length;
    this.chunkSize = args.rangeChunkSize;
    this.stream = new ChunkedStream(this.length, this.chunkSize, this);
    this.pdfStream = pdfStream;
    this.disableAutoFetch = args.disableAutoFetch;
    this.msgHandler = args.msgHandler;
  }
  async sendRequest(begin, end) {
    const rangeReader = this.pdfStream.getRangeReader(begin, end);
    let chunks = [];
    while (true) {
      const {
        value,
        done
      } = await rangeReader.read();
      if (this.aborted) {
        chunks = null;
        return;
      }
      if (done) {
        break;
      }
      chunks.push(value);
    }
    if (chunks.length === 0 && this.disableAutoFetch) {
      return;
    }
    const data = arrayBuffersToBytes(chunks);
    chunks = null;
    this.onReceiveData({
      chunk: data.buffer,
      begin
    });
  }
  requestAllChunks(noFetch = false) {
    if (!noFetch) {
      const missingChunks = this.stream.getMissingChunks();
      this._requestChunks(missingChunks);
    }
    return this._loadedStreamCapability.promise;
  }
  _requestChunks(chunks) {
    const requestId = this.currRequestId++;
    const chunksNeeded = new Set();
    this._chunksNeededByRequest.set(requestId, chunksNeeded);
    for (const chunk of chunks) {
      if (!this.stream.hasChunk(chunk)) {
        chunksNeeded.add(chunk);
      }
    }
    if (chunksNeeded.size === 0) {
      return Promise.resolve();
    }
    const capability = Promise.withResolvers();
    this._promisesByRequest.set(requestId, capability);
    const chunksToRequest = [];
    for (const chunk of chunksNeeded) {
      let requestIds = this._requestsByChunk.get(chunk);
      if (!requestIds) {
        requestIds = [];
        this._requestsByChunk.set(chunk, requestIds);
        chunksToRequest.push(chunk);
      }
      requestIds.push(requestId);
    }
    if (chunksToRequest.length > 0) {
      const groupedChunksToRequest = this.groupChunks(chunksToRequest);
      for (const groupedChunk of groupedChunksToRequest) {
        const begin = groupedChunk.beginChunk * this.chunkSize;
        const end = Math.min(groupedChunk.endChunk * this.chunkSize, this.length);
        this.sendRequest(begin, end).catch(capability.reject);
      }
    }
    return capability.promise.catch(reason => {
      if (this.aborted) {
        return;
      }
      throw reason;
    });
  }
  getStream() {
    return this.stream;
  }
  requestRange(begin, end) {
    end = Math.min(end, this.length);
    const beginChunk = this.getBeginChunk(begin);
    const endChunk = this.getEndChunk(end);
    const chunks = [];
    for (let chunk = beginChunk; chunk < endChunk; ++chunk) {
      chunks.push(chunk);
    }
    return this._requestChunks(chunks);
  }
  requestRanges(ranges = []) {
    const chunksToRequest = [];
    for (const range of ranges) {
      const beginChunk = this.getBeginChunk(range.begin);
      const endChunk = this.getEndChunk(range.end);
      for (let chunk = beginChunk; chunk < endChunk; ++chunk) {
        if (!chunksToRequest.includes(chunk)) {
          chunksToRequest.push(chunk);
        }
      }
    }
    chunksToRequest.sort((a, b) => a - b);
    return this._requestChunks(chunksToRequest);
  }
  groupChunks(chunks) {
    const groupedChunks = [];
    let beginChunk = -1;
    let prevChunk = -1;
    for (let i = 0, ii = chunks.length; i < ii; ++i) {
      const chunk = chunks[i];
      if (beginChunk < 0) {
        beginChunk = chunk;
      }
      if (prevChunk >= 0 && prevChunk + 1 !== chunk) {
        groupedChunks.push({
          beginChunk,
          endChunk: prevChunk + 1
        });
        beginChunk = chunk;
      }
      if (i + 1 === chunks.length) {
        groupedChunks.push({
          beginChunk,
          endChunk: chunk + 1
        });
      }
      prevChunk = chunk;
    }
    return groupedChunks;
  }
  onReceiveData(args) {
    const {
      chunkSize,
      length,
      stream
    } = this;
    const chunk = args.chunk;
    const isProgressive = args.begin === undefined;
    const begin = isProgressive ? stream.progressiveDataLength : args.begin;
    const end = begin + chunk.byteLength;
    const beginChunk = Math.floor(begin / chunkSize);
    const endChunk = end < length ? Math.floor(end / chunkSize) : Math.ceil(end / chunkSize);
    if (isProgressive) {
      stream.onReceiveProgressiveData(chunk);
    } else {
      stream.onReceiveData(begin, chunk);
    }
    if (stream.isDataLoaded) {
      this._loadedStreamCapability.resolve(stream);
    }
    const loadedRequests = [];
    for (let curChunk = beginChunk; curChunk < endChunk; ++curChunk) {
      const requestIds = this._requestsByChunk.get(curChunk);
      if (!requestIds) {
        continue;
      }
      this._requestsByChunk.delete(curChunk);
      for (const requestId of requestIds) {
        const chunksNeeded = this._chunksNeededByRequest.get(requestId);
        if (chunksNeeded.has(curChunk)) {
          chunksNeeded.delete(curChunk);
        }
        if (chunksNeeded.size > 0) {
          continue;
        }
        loadedRequests.push(requestId);
      }
    }
    if (!this.disableAutoFetch && this._requestsByChunk.size === 0) {
      let nextEmptyChunk;
      if (stream.numChunksLoaded === 1) {
        const lastChunk = stream.numChunks - 1;
        if (!stream.hasChunk(lastChunk)) {
          nextEmptyChunk = lastChunk;
        }
      } else {
        nextEmptyChunk = stream.nextEmptyChunk(endChunk);
      }
      if (Number.isInteger(nextEmptyChunk)) {
        this._requestChunks([nextEmptyChunk]);
      }
    }
    for (const requestId of loadedRequests) {
      const capability = this._promisesByRequest.get(requestId);
      this._promisesByRequest.delete(requestId);
      capability.resolve();
    }
    this.msgHandler.send("DocProgress", {
      loaded: MathClamp(stream.numChunksLoaded * chunkSize, stream.progressiveDataLength, length),
      total: length
    });
  }
  onError(err) {
    this._loadedStreamCapability.reject(err);
  }
  getBeginChunk(begin) {
    return Math.floor(begin / this.chunkSize);
  }
  getEndChunk(end) {
    return Math.floor((end - 1) / this.chunkSize) + 1;
  }
  abort(reason) {
    this.aborted = true;
    this.pdfStream?.cancelAllRequests(reason);
    for (const capability of this._promisesByRequest.values()) {
      capability.reject(reason);
    }
  }
}

;// ./src/shared/image_utils.js

function convertToRGBA(params) {
  switch (params.kind) {
    case ImageKind.GRAYSCALE_1BPP:
      return convertBlackAndWhiteToRGBA(params);
    case ImageKind.RGB_24BPP:
      return convertRGBToRGBA(params);
  }
  return null;
}
function convertBlackAndWhiteToRGBA({
  src,
  srcPos = 0,
  dest,
  width,
  height,
  nonBlackColor = 0xffffffff,
  inverseDecode = false
}) {
  const black = FeatureTest.isLittleEndian ? 0xff000000 : 0x000000ff;
  const [zeroMapping, oneMapping] = inverseDecode ? [nonBlackColor, black] : [black, nonBlackColor];
  const widthInSource = width >> 3;
  const widthRemainder = width & 7;
  const xorMask = zeroMapping ^ oneMapping;
  const srcLength = src.length;
  dest = new Uint32Array(dest.buffer);
  let destPos = 0;
  for (let i = 0; i < height; ++i) {
    for (const max = srcPos + widthInSource; srcPos < max; ++srcPos, destPos += 8) {
      const elem = src[srcPos];
      dest[destPos] = zeroMapping ^ -(elem >> 7 & 1) & xorMask;
      dest[destPos + 1] = zeroMapping ^ -(elem >> 6 & 1) & xorMask;
      dest[destPos + 2] = zeroMapping ^ -(elem >> 5 & 1) & xorMask;
      dest[destPos + 3] = zeroMapping ^ -(elem >> 4 & 1) & xorMask;
      dest[destPos + 4] = zeroMapping ^ -(elem >> 3 & 1) & xorMask;
      dest[destPos + 5] = zeroMapping ^ -(elem >> 2 & 1) & xorMask;
      dest[destPos + 6] = zeroMapping ^ -(elem >> 1 & 1) & xorMask;
      dest[destPos + 7] = zeroMapping ^ -(elem & 1) & xorMask;
    }
    if (widthRemainder === 0) {
      continue;
    }
    const elem = srcPos < srcLength ? src[srcPos++] : 255;
    for (let j = 0; j < widthRemainder; ++j, ++destPos) {
      dest[destPos] = zeroMapping ^ -(elem >> 7 - j & 1) & xorMask;
    }
  }
  return {
    srcPos,
    destPos
  };
}
function convertRGBToRGBA({
  src,
  srcPos = 0,
  dest,
  destPos = 0,
  width,
  height
}) {
  let i = 0;
  const len = width * height * 3;
  const len32 = len >> 2;
  const src32 = new Uint32Array(src.buffer, srcPos, len32);
  const alphaMask = FeatureTest.isLittleEndian ? 0xff000000 : 0xff;
  if (FeatureTest.isLittleEndian) {
    for (; i < len32 - 2; i += 3, destPos += 4) {
      const s1 = src32[i],
        s2 = src32[i + 1],
        s3 = src32[i + 2];
      dest[destPos] = s1 | alphaMask;
      dest[destPos + 1] = s1 >>> 24 | s2 << 8 | alphaMask;
      dest[destPos + 2] = s2 >>> 16 | s3 << 16 | alphaMask;
      dest[destPos + 3] = s3 >>> 8 | alphaMask;
    }
    for (let j = i * 4, jj = srcPos + len; j < jj; j += 3) {
      dest[destPos++] = src[j] | src[j + 1] << 8 | src[j + 2] << 16 | alphaMask;
    }
  } else {
    for (; i < len32 - 2; i += 3, destPos += 4) {
      const s1 = src32[i],
        s2 = src32[i + 1],
        s3 = src32[i + 2];
      dest[destPos] = s1 | alphaMask;
      dest[destPos + 1] = s1 << 24 | s2 >>> 8 | alphaMask;
      dest[destPos + 2] = s2 << 16 | s3 >>> 16 | alphaMask;
      dest[destPos + 3] = s3 << 8 | alphaMask;
    }
    for (let j = i * 4, jj = srcPos + len; j < jj; j += 3) {
      dest[destPos++] = src[j] << 24 | src[j + 1] << 16 | src[j + 2] << 8 | alphaMask;
    }
  }
  return {
    srcPos: srcPos + len,
    destPos
  };
}
function grayToRGBA(src, dest) {
  if (FeatureTest.isLittleEndian) {
    for (let i = 0, ii = src.length; i < ii; i++) {
      dest[i] = src[i] * 0x10101 | 0xff000000;
    }
  } else {
    for (let i = 0, ii = src.length; i < ii; i++) {
      dest[i] = src[i] * 0x1010100 | 0x000000ff;
    }
  }
}

;// ./src/core/image_resizer.js



const MIN_IMAGE_DIM = 2048;
const MAX_IMAGE_DIM = 32768;
const MAX_ERROR = 128;
class ImageResizer {
  static #goodSquareLength = MIN_IMAGE_DIM;
  static #isImageDecoderSupported = FeatureTest.isImageDecoderSupported;
  constructor(imgData, isMask) {
    this._imgData = imgData;
    this._isMask = isMask;
  }
  static get canUseImageDecoder() {
    return shadow(this, "canUseImageDecoder", this.#isImageDecoderSupported ? ImageDecoder.isTypeSupported("image/bmp") : Promise.resolve(false));
  }
  static needsToBeResized(width, height) {
    if (width <= this.#goodSquareLength && height <= this.#goodSquareLength) {
      return false;
    }
    const {
      MAX_DIM
    } = this;
    if (width > MAX_DIM || height > MAX_DIM) {
      return true;
    }
    const area = width * height;
    if (this._hasMaxArea) {
      return area > this.MAX_AREA;
    }
    if (area < this.#goodSquareLength ** 2) {
      return false;
    }
    if (this._areGoodDims(width, height)) {
      this.#goodSquareLength = Math.max(this.#goodSquareLength, Math.floor(Math.sqrt(width * height)));
      return false;
    }
    this.#goodSquareLength = this._guessMax(this.#goodSquareLength, MAX_DIM, MAX_ERROR, 0);
    const maxArea = this.MAX_AREA = this.#goodSquareLength ** 2;
    return area > maxArea;
  }
  static getReducePowerForJPX(width, height, componentsCount) {
    const area = width * height;
    const maxJPXArea = 2 ** 30 / (componentsCount * 4);
    if (!this.needsToBeResized(width, height)) {
      if (area > maxJPXArea) {
        return Math.ceil(Math.log2(area / maxJPXArea));
      }
      return 0;
    }
    const {
      MAX_DIM,
      MAX_AREA
    } = this;
    const minFactor = Math.max(width / MAX_DIM, height / MAX_DIM, Math.sqrt(area / Math.min(maxJPXArea, MAX_AREA)));
    return Math.ceil(Math.log2(minFactor));
  }
  static get MAX_DIM() {
    return shadow(this, "MAX_DIM", this._guessMax(MIN_IMAGE_DIM, MAX_IMAGE_DIM, 0, 1));
  }
  static get MAX_AREA() {
    this._hasMaxArea = true;
    return shadow(this, "MAX_AREA", this._guessMax(this.#goodSquareLength, this.MAX_DIM, MAX_ERROR, 0) ** 2);
  }
  static set MAX_AREA(area) {
    if (area >= 0) {
      this._hasMaxArea = true;
      shadow(this, "MAX_AREA", area);
    }
  }
  static setOptions({
    canvasMaxAreaInBytes = -1,
    isImageDecoderSupported = false
  }) {
    if (!this._hasMaxArea) {
      this.MAX_AREA = canvasMaxAreaInBytes >> 2;
    }
    this.#isImageDecoderSupported = isImageDecoderSupported;
  }
  static _areGoodDims(width, height) {
    try {
      const canvas = new OffscreenCanvas(width, height);
      const ctx = canvas.getContext("2d");
      ctx.fillRect(0, 0, 1, 1);
      const opacity = ctx.getImageData(0, 0, 1, 1).data[3];
      canvas.width = canvas.height = 1;
      return opacity !== 0;
    } catch {
      return false;
    }
  }
  static _guessMax(start, end, tolerance, defaultHeight) {
    while (start + tolerance + 1 < end) {
      const middle = Math.floor((start + end) / 2);
      const height = defaultHeight || middle;
      if (this._areGoodDims(middle, height)) {
        start = middle;
      } else {
        end = middle;
      }
    }
    return start;
  }
  static async createImage(imgData, isMask = false) {
    return new ImageResizer(imgData, isMask)._createImage();
  }
  async _createImage() {
    const {
      _imgData: imgData
    } = this;
    const {
      width,
      height
    } = imgData;
    if (width * height * 4 > MAX_INT_32) {
      const result = this.#rescaleImageData();
      if (result) {
        return result;
      }
    }
    const data = this._encodeBMP();
    let decoder, imagePromise;
    if (await ImageResizer.canUseImageDecoder) {
      decoder = new ImageDecoder({
        data,
        type: "image/bmp",
        preferAnimation: false,
        transfer: [data.buffer]
      });
      imagePromise = decoder.decode().catch(reason => {
        warn(`BMP image decoding failed: ${reason}`);
        return createImageBitmap(new Blob([this._encodeBMP().buffer], {
          type: "image/bmp"
        }));
      }).finally(() => {
        decoder.close();
      });
    } else {
      imagePromise = createImageBitmap(new Blob([data.buffer], {
        type: "image/bmp"
      }));
    }
    const {
      MAX_AREA,
      MAX_DIM
    } = ImageResizer;
    const minFactor = Math.max(width / MAX_DIM, height / MAX_DIM, Math.sqrt(width * height / MAX_AREA));
    const firstFactor = Math.max(minFactor, 2);
    const factor = Math.round(10 * (minFactor + 1.25)) / 10 / firstFactor;
    const N = Math.floor(Math.log2(factor));
    const steps = new Array(N + 2).fill(2);
    steps[0] = firstFactor;
    steps.splice(-1, 1, factor / (1 << N));
    let newWidth = width;
    let newHeight = height;
    const result = await imagePromise;
    let bitmap = result.image || result;
    for (const step of steps) {
      const prevWidth = newWidth;
      const prevHeight = newHeight;
      newWidth = Math.floor(newWidth / step) - 1;
      newHeight = Math.floor(newHeight / step) - 1;
      const canvas = new OffscreenCanvas(newWidth, newHeight);
      const ctx = canvas.getContext("2d");
      ctx.drawImage(bitmap, 0, 0, prevWidth, prevHeight, 0, 0, newWidth, newHeight);
      bitmap.close();
      bitmap = canvas.transferToImageBitmap();
    }
    imgData.data = null;
    imgData.bitmap = bitmap;
    imgData.width = newWidth;
    imgData.height = newHeight;
    return imgData;
  }
  #rescaleImageData() {
    const {
      _imgData: imgData
    } = this;
    const {
      data,
      width,
      height,
      kind
    } = imgData;
    const rgbaSize = width * height * 4;
    const K = Math.ceil(Math.log2(rgbaSize / MAX_INT_32));
    const newWidth = width >> K;
    const newHeight = height >> K;
    let rgbaData;
    let maxHeight = height;
    try {
      rgbaData = new Uint8Array(rgbaSize);
    } catch {
      let n = Math.floor(Math.log2(rgbaSize + 1));
      while (true) {
        try {
          rgbaData = new Uint8Array(2 ** n - 1);
          break;
        } catch {
          n -= 1;
        }
      }
      maxHeight = Math.floor((2 ** n - 1) / (width * 4));
      const newSize = width * maxHeight * 4;
      if (newSize < rgbaData.length) {
        rgbaData = new Uint8Array(newSize);
      }
    }
    const src32 = new Uint32Array(rgbaData.buffer);
    const dest32 = new Uint32Array(newWidth * newHeight);
    let srcPos = 0;
    let newIndex = 0;
    const step = Math.ceil(height / maxHeight);
    const remainder = height % maxHeight === 0 ? height : height % maxHeight;
    for (let k = 0; k < step; k++) {
      const h = k < step - 1 ? maxHeight : remainder;
      ({
        srcPos
      } = convertToRGBA({
        kind,
        src: data,
        dest: src32,
        width,
        height: h,
        inverseDecode: this._isMask,
        srcPos
      }));
      for (let i = 0, ii = h >> K; i < ii; i++) {
        const buf = src32.subarray((i << K) * width);
        for (let j = 0; j < newWidth; j++) {
          dest32[newIndex++] = buf[j << K];
        }
      }
    }
    if (ImageResizer.needsToBeResized(newWidth, newHeight)) {
      imgData.data = dest32;
      imgData.width = newWidth;
      imgData.height = newHeight;
      imgData.kind = ImageKind.RGBA_32BPP;
      return null;
    }
    const canvas = new OffscreenCanvas(newWidth, newHeight);
    const ctx = canvas.getContext("2d", {
      willReadFrequently: true
    });
    ctx.putImageData(new ImageData(new Uint8ClampedArray(dest32.buffer), newWidth, newHeight), 0, 0);
    imgData.data = null;
    imgData.bitmap = canvas.transferToImageBitmap();
    imgData.width = newWidth;
    imgData.height = newHeight;
    return imgData;
  }
  _encodeBMP() {
    const {
      width,
      height,
      kind
    } = this._imgData;
    let data = this._imgData.data;
    let bitPerPixel;
    let colorTable = new Uint8Array(0);
    let maskTable = colorTable;
    let compression = 0;
    switch (kind) {
      case ImageKind.GRAYSCALE_1BPP:
        {
          bitPerPixel = 1;
          colorTable = new Uint8Array(this._isMask ? [255, 255, 255, 255, 0, 0, 0, 0] : [0, 0, 0, 0, 255, 255, 255, 255]);
          const rowLen = width + 7 >> 3;
          const rowSize = rowLen + 3 & -4;
          if (rowLen !== rowSize) {
            const newData = new Uint8Array(rowSize * height);
            let k = 0;
            for (let i = 0, ii = height * rowLen; i < ii; i += rowLen, k += rowSize) {
              newData.set(data.subarray(i, i + rowLen), k);
            }
            data = newData;
          }
          break;
        }
      case ImageKind.RGB_24BPP:
        {
          bitPerPixel = 24;
          if (width & 3) {
            const rowLen = 3 * width;
            const rowSize = rowLen + 3 & -4;
            const extraLen = rowSize - rowLen;
            const newData = new Uint8Array(rowSize * height);
            let k = 0;
            for (let i = 0, ii = height * rowLen; i < ii; i += rowLen) {
              const row = data.subarray(i, i + rowLen);
              for (let j = 0; j < rowLen; j += 3) {
                newData[k++] = row[j + 2];
                newData[k++] = row[j + 1];
                newData[k++] = row[j];
              }
              k += extraLen;
            }
            data = newData;
          } else {
            for (let i = 0, ii = data.length; i < ii; i += 3) {
              const tmp = data[i];
              data[i] = data[i + 2];
              data[i + 2] = tmp;
            }
          }
          break;
        }
      case ImageKind.RGBA_32BPP:
        bitPerPixel = 32;
        compression = 3;
        maskTable = new Uint8Array(4 + 4 + 4 + 4 + 52);
        const view = new DataView(maskTable.buffer);
        if (FeatureTest.isLittleEndian) {
          view.setUint32(0, 0x000000ff, true);
          view.setUint32(4, 0x0000ff00, true);
          view.setUint32(8, 0x00ff0000, true);
          view.setUint32(12, 0xff000000, true);
        } else {
          view.setUint32(0, 0xff000000, true);
          view.setUint32(4, 0x00ff0000, true);
          view.setUint32(8, 0x0000ff00, true);
          view.setUint32(12, 0x000000ff, true);
        }
        break;
      default:
        throw new Error("invalid format");
    }
    let i = 0;
    const headerLength = 40 + maskTable.length;
    const fileLength = 14 + headerLength + colorTable.length + data.length;
    const bmpData = new Uint8Array(fileLength);
    const view = new DataView(bmpData.buffer);
    view.setUint16(i, 0x4d42, true);
    i += 2;
    view.setUint32(i, fileLength, true);
    i += 4;
    view.setUint32(i, 0, true);
    i += 4;
    view.setUint32(i, 14 + headerLength + colorTable.length, true);
    i += 4;
    view.setUint32(i, headerLength, true);
    i += 4;
    view.setInt32(i, width, true);
    i += 4;
    view.setInt32(i, -height, true);
    i += 4;
    view.setUint16(i, 1, true);
    i += 2;
    view.setUint16(i, bitPerPixel, true);
    i += 2;
    view.setUint32(i, compression, true);
    i += 4;
    view.setUint32(i, 0, true);
    i += 4;
    view.setInt32(i, 0, true);
    i += 4;
    view.setInt32(i, 0, true);
    i += 4;
    view.setUint32(i, colorTable.length / 4, true);
    i += 4;
    view.setUint32(i, 0, true);
    i += 4;
    bmpData.set(maskTable, i);
    i += maskTable.length;
    bmpData.set(colorTable, i);
    i += colorTable.length;
    bmpData.set(data, i);
    return bmpData;
  }
}

;// ./external/jbig2/jbig2.js
async function JBig2(moduleArg = {}) {
  var moduleRtn;
  var Module = moduleArg;
  var ENVIRONMENT_IS_WEB = true;
  var ENVIRONMENT_IS_WORKER = false;
  var arguments_ = [];
  var thisProgram = "./this.program";
  var quit_ = (status, toThrow) => {
    throw toThrow;
  };
  var _scriptName = import.meta.url;
  var scriptDirectory = "";
  var readAsync, readBinary;
  if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
    try {
      scriptDirectory = new URL(".", _scriptName).href;
    } catch {}
    readAsync = async url => {
      var response = await fetch(url, {
        credentials: "same-origin"
      });
      if (response.ok) {
        return response.arrayBuffer();
      }
      throw new Error(response.status + " : " + response.url);
    };
  } else {}
  var out = console.log.bind(console);
  var err = console.error.bind(console);
  var wasmBinary;
  var ABORT = false;
  var EXITSTATUS;
  var readyPromiseResolve, readyPromiseReject;
  var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
  var HEAP64, HEAPU64;
  var runtimeInitialized = false;
  function updateMemoryViews() {
    var b = wasmMemory.buffer;
    HEAP8 = new Int8Array(b);
    HEAP16 = new Int16Array(b);
    HEAPU8 = new Uint8Array(b);
    HEAPU16 = new Uint16Array(b);
    HEAP32 = new Int32Array(b);
    HEAPU32 = new Uint32Array(b);
    HEAPF32 = new Float32Array(b);
    HEAPF64 = new Float64Array(b);
    HEAP64 = new BigInt64Array(b);
    HEAPU64 = new BigUint64Array(b);
  }
  function preRun() {
    if (Module["preRun"]) {
      if (typeof Module["preRun"] == "function") Module["preRun"] = [Module["preRun"]];
      while (Module["preRun"].length) {
        addOnPreRun(Module["preRun"].shift());
      }
    }
    callRuntimeCallbacks(onPreRuns);
  }
  function initRuntime() {
    runtimeInitialized = true;
    wasmExports["j"]();
  }
  function postRun() {
    if (Module["postRun"]) {
      if (typeof Module["postRun"] == "function") Module["postRun"] = [Module["postRun"]];
      while (Module["postRun"].length) {
        addOnPostRun(Module["postRun"].shift());
      }
    }
    callRuntimeCallbacks(onPostRuns);
  }
  function abort(what) {
    Module["onAbort"]?.(what);
    what = "Aborted(" + what + ")";
    err(what);
    ABORT = true;
    what += ". Build with -sASSERTIONS for more info.";
    var e = new WebAssembly.RuntimeError(what);
    readyPromiseReject?.(e);
    throw e;
  }
  var wasmBinaryFile;
  function getWasmImports() {
    var imports = {
      a: wasmImports
    };
    return imports;
  }
  async function createWasm() {
    function receiveInstance(instance, module) {
      wasmExports = instance.exports;
      assignWasmExports(wasmExports);
      updateMemoryViews();
      return wasmExports;
    }
    var info = getWasmImports();
    return new Promise((resolve, reject) => {
      Module["instantiateWasm"](info, (inst, mod) => {
        resolve(receiveInstance(inst, mod));
      });
    });
  }
  class ExitStatus {
    name = "ExitStatus";
    constructor(status) {
      this.message = `Program terminated with exit(${status})`;
      this.status = status;
    }
  }
  var callRuntimeCallbacks = callbacks => {
    while (callbacks.length > 0) {
      callbacks.shift()(Module);
    }
  };
  var onPostRuns = [];
  var addOnPostRun = cb => onPostRuns.push(cb);
  var onPreRuns = [];
  var addOnPreRun = cb => onPreRuns.push(cb);
  var noExitRuntime = true;
  var __abort_js = () => abort("");
  var runtimeKeepaliveCounter = 0;
  var __emscripten_runtime_keepalive_clear = () => {
    noExitRuntime = false;
    runtimeKeepaliveCounter = 0;
  };
  var timers = {};
  var handleException = e => {
    if (e instanceof ExitStatus || e == "unwind") {
      return EXITSTATUS;
    }
    quit_(1, e);
  };
  var keepRuntimeAlive = () => noExitRuntime || runtimeKeepaliveCounter > 0;
  var _proc_exit = code => {
    EXITSTATUS = code;
    if (!keepRuntimeAlive()) {
      Module["onExit"]?.(code);
      ABORT = true;
    }
    quit_(code, new ExitStatus(code));
  };
  var exitJS = (status, implicit) => {
    EXITSTATUS = status;
    _proc_exit(status);
  };
  var _exit = exitJS;
  var maybeExit = () => {
    if (!keepRuntimeAlive()) {
      try {
        _exit(EXITSTATUS);
      } catch (e) {
        handleException(e);
      }
    }
  };
  var callUserCallback = func => {
    if (ABORT) {
      return;
    }
    try {
      return func();
    } catch (e) {
      handleException(e);
    } finally {
      maybeExit();
    }
  };
  var _emscripten_get_now = () => performance.now();
  var __setitimer_js = (which, timeout_ms) => {
    if (timers[which]) {
      clearTimeout(timers[which].id);
      delete timers[which];
    }
    if (!timeout_ms) return 0;
    var id = setTimeout(() => {
      delete timers[which];
      callUserCallback(() => __emscripten_timeout(which, _emscripten_get_now()));
    }, timeout_ms);
    timers[which] = {
      id,
      timeout_ms
    };
    return 0;
  };
  function _createImageData(size) {
    Module.imageData = new Uint8Array(size);
  }
  var getHeapMax = () => 2147483648;
  var alignMemory = (size, alignment) => Math.ceil(size / alignment) * alignment;
  var growMemory = size => {
    var oldHeapSize = wasmMemory.buffer.byteLength;
    var pages = (size - oldHeapSize + 65535) / 65536 | 0;
    try {
      wasmMemory.grow(pages);
      updateMemoryViews();
      return 1;
    } catch (e) {}
  };
  var _emscripten_resize_heap = requestedSize => {
    var oldSize = HEAPU8.length;
    requestedSize >>>= 0;
    var maxHeapSize = getHeapMax();
    if (requestedSize > maxHeapSize) {
      return false;
    }
    for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
      var overGrownHeapSize = oldSize * (1 + .2 / cutDown);
      overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
      var newSize = Math.min(maxHeapSize, alignMemory(Math.max(requestedSize, overGrownHeapSize), 65536));
      var replacement = growMemory(newSize);
      if (replacement) {
        return true;
      }
    }
    return false;
  };
  function _setImageData(array_ptr, pitch8, pitch32, height) {
    if (pitch32 === pitch8) {
      Module.imageData = new Uint8ClampedArray(HEAPU8.subarray(array_ptr, array_ptr + pitch32 * height));
      return;
    }
    const destSize = pitch8 * height;
    const imageData = Module.imageData = new Uint8ClampedArray(destSize);
    for (let srcStart = array_ptr, destStart = 0; destStart < destSize; srcStart += pitch32, destStart += pitch8) {
      imageData.set(HEAPU8.subarray(srcStart, srcStart + pitch8), destStart);
    }
  }
  function _setLineData(line_ptr, pitch8, offset) {
    Module.imageData.set(HEAPU8.subarray(line_ptr, line_ptr + pitch8), offset);
  }
  var writeArrayToMemory = (array, buffer) => {
    HEAP8.set(array, buffer);
  };
  if (Module["noExitRuntime"]) noExitRuntime = Module["noExitRuntime"];
  if (Module["print"]) out = Module["print"];
  if (Module["printErr"]) err = Module["printErr"];
  if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];
  if (Module["arguments"]) arguments_ = Module["arguments"];
  if (Module["thisProgram"]) thisProgram = Module["thisProgram"];
  if (Module["preInit"]) {
    if (typeof Module["preInit"] == "function") Module["preInit"] = [Module["preInit"]];
    while (Module["preInit"].length > 0) {
      Module["preInit"].shift()();
    }
  }
  Module["writeArrayToMemory"] = writeArrayToMemory;
  var _malloc, _free, _jbig2_decode, _ccitt_decode, __emscripten_timeout, memory, __indirect_function_table, wasmMemory;
  function assignWasmExports(wasmExports) {
    _malloc = Module["_malloc"] = wasmExports["k"];
    _free = Module["_free"] = wasmExports["l"];
    _jbig2_decode = Module["_jbig2_decode"] = wasmExports["m"];
    _ccitt_decode = Module["_ccitt_decode"] = wasmExports["n"];
    __emscripten_timeout = wasmExports["o"];
    memory = wasmMemory = wasmExports["i"];
    __indirect_function_table = wasmExports["__indirect_function_table"];
  }
  var wasmImports = {
    e: __abort_js,
    b: __emscripten_runtime_keepalive_clear,
    c: __setitimer_js,
    g: _createImageData,
    d: _emscripten_resize_heap,
    a: _proc_exit,
    h: _setImageData,
    f: _setLineData
  };
  function run() {
    preRun();
    function doRun() {
      Module["calledRun"] = true;
      if (ABORT) return;
      initRuntime();
      readyPromiseResolve?.(Module);
      Module["onRuntimeInitialized"]?.();
      postRun();
    }
    if (Module["setStatus"]) {
      Module["setStatus"]("Running...");
      setTimeout(() => {
        setTimeout(() => Module["setStatus"](""), 1);
        doRun();
      }, 1);
    } else {
      doRun();
    }
  }
  var wasmExports;
  wasmExports = await createWasm();
  run();
  if (runtimeInitialized) {
    moduleRtn = Module;
  } else {
    moduleRtn = new Promise((resolve, reject) => {
      readyPromiseResolve = resolve;
      readyPromiseReject = reject;
    });
  }
  return moduleRtn;
}
/* harmony default export */ const jbig2 = (JBig2);
;// ./src/core/arithmetic_decoder.js
const QeTable = [{
  qe: 0x5601,
  nmps: 1,
  nlps: 1,
  switchFlag: 1
}, {
  qe: 0x3401,
  nmps: 2,
  nlps: 6,
  switchFlag: 0
}, {
  qe: 0x1801,
  nmps: 3,
  nlps: 9,
  switchFlag: 0
}, {
  qe: 0x0ac1,
  nmps: 4,
  nlps: 12,
  switchFlag: 0
}, {
  qe: 0x0521,
  nmps: 5,
  nlps: 29,
  switchFlag: 0
}, {
  qe: 0x0221,
  nmps: 38,
  nlps: 33,
  switchFlag: 0
}, {
  qe: 0x5601,
  nmps: 7,
  nlps: 6,
  switchFlag: 1
}, {
  qe: 0x5401,
  nmps: 8,
  nlps: 14,
  switchFlag: 0
}, {
  qe: 0x4801,
  nmps: 9,
  nlps: 14,
  switchFlag: 0
}, {
  qe: 0x3801,
  nmps: 10,
  nlps: 14,
  switchFlag: 0
}, {
  qe: 0x3001,
  nmps: 11,
  nlps: 17,
  switchFlag: 0
}, {
  qe: 0x2401,
  nmps: 12,
  nlps: 18,
  switchFlag: 0
}, {
  qe: 0x1c01,
  nmps: 13,
  nlps: 20,
  switchFlag: 0
}, {
  qe: 0x1601,
  nmps: 29,
  nlps: 21,
  switchFlag: 0
}, {
  qe: 0x5601,
  nmps: 15,
  nlps: 14,
  switchFlag: 1
}, {
  qe: 0x5401,
  nmps: 16,
  nlps: 14,
  switchFlag: 0
}, {
  qe: 0x5101,
  nmps: 17,
  nlps: 15,
  switchFlag: 0
}, {
  qe: 0x4801,
  nmps: 18,
  nlps: 16,
  switchFlag: 0
}, {
  qe: 0x3801,
  nmps: 19,
  nlps: 17,
  switchFlag: 0
}, {
  qe: 0x3401,
  nmps: 20,
  nlps: 18,
  switchFlag: 0
}, {
  qe: 0x3001,
  nmps: 21,
  nlps: 19,
  switchFlag: 0
}, {
  qe: 0x2801,
  nmps: 22,
  nlps: 19,
  switchFlag: 0
}, {
  qe: 0x2401,
  nmps: 23,
  nlps: 20,
  switchFlag: 0
}, {
  qe: 0x2201,
  nmps: 24,
  nlps: 21,
  switchFlag: 0
}, {
  qe: 0x1c01,
  nmps: 25,
  nlps: 22,
  switchFlag: 0
}, {
  qe: 0x1801,
  nmps: 26,
  nlps: 23,
  switchFlag: 0
}, {
  qe: 0x1601,
  nmps: 27,
  nlps: 24,
  switchFlag: 0
}, {
  qe: 0x1401,
  nmps: 28,
  nlps: 25,
  switchFlag: 0
}, {
  qe: 0x1201,
  nmps: 29,
  nlps: 26,
  switchFlag: 0
}, {
  qe: 0x1101,
  nmps: 30,
  nlps: 27,
  switchFlag: 0
}, {
  qe: 0x0ac1,
  nmps: 31,
  nlps: 28,
  switchFlag: 0
}, {
  qe: 0x09c1,
  nmps: 32,
  nlps: 29,
  switchFlag: 0
}, {
  qe: 0x08a1,
  nmps: 33,
  nlps: 30,
  switchFlag: 0
}, {
  qe: 0x0521,
  nmps: 34,
  nlps: 31,
  switchFlag: 0
}, {
  qe: 0x0441,
  nmps: 35,
  nlps: 32,
  switchFlag: 0
}, {
  qe: 0x02a1,
  nmps: 36,
  nlps: 33,
  switchFlag: 0
}, {
  qe: 0x0221,
  nmps: 37,
  nlps: 34,
  switchFlag: 0
}, {
  qe: 0x0141,
  nmps: 38,
  nlps: 35,
  switchFlag: 0
}, {
  qe: 0x0111,
  nmps: 39,
  nlps: 36,
  switchFlag: 0
}, {
  qe: 0x0085,
  nmps: 40,
  nlps: 37,
  switchFlag: 0
}, {
  qe: 0x0049,
  nmps: 41,
  nlps: 38,
  switchFlag: 0
}, {
  qe: 0x0025,
  nmps: 42,
  nlps: 39,
  switchFlag: 0
}, {
  qe: 0x0015,
  nmps: 43,
  nlps: 40,
  switchFlag: 0
}, {
  qe: 0x0009,
  nmps: 44,
  nlps: 41,
  switchFlag: 0
}, {
  qe: 0x0005,
  nmps: 45,
  nlps: 42,
  switchFlag: 0
}, {
  qe: 0x0001,
  nmps: 45,
  nlps: 43,
  switchFlag: 0
}, {
  qe: 0x5601,
  nmps: 46,
  nlps: 46,
  switchFlag: 0
}];
class ArithmeticDecoder {
  constructor(data, start, end) {
    this.data = data;
    this.bp = start;
    this.dataEnd = end;
    this.chigh = data[start];
    this.clow = 0;
    this.byteIn();
    this.chigh = this.chigh << 7 & 0xffff | this.clow >> 9 & 0x7f;
    this.clow = this.clow << 7 & 0xffff;
    this.ct -= 7;
    this.a = 0x8000;
  }
  byteIn() {
    const data = this.data;
    let bp = this.bp;
    if (data[bp] === 0xff) {
      if (data[bp + 1] > 0x8f) {
        this.clow += 0xff00;
        this.ct = 8;
      } else {
        bp++;
        this.clow += data[bp] << 9;
        this.ct = 7;
        this.bp = bp;
      }
    } else {
      bp++;
      this.clow += bp < this.dataEnd ? data[bp] << 8 : 0xff00;
      this.ct = 8;
      this.bp = bp;
    }
    if (this.clow > 0xffff) {
      this.chigh += this.clow >> 16;
      this.clow &= 0xffff;
    }
  }
  readBit(contexts, pos) {
    let cx_index = contexts[pos] >> 1,
      cx_mps = contexts[pos] & 1;
    const qeTableIcx = QeTable[cx_index];
    const qeIcx = qeTableIcx.qe;
    let d;
    let a = this.a - qeIcx;
    if (this.chigh < qeIcx) {
      if (a < qeIcx) {
        a = qeIcx;
        d = cx_mps;
        cx_index = qeTableIcx.nmps;
      } else {
        a = qeIcx;
        d = 1 ^ cx_mps;
        if (qeTableIcx.switchFlag === 1) {
          cx_mps = d;
        }
        cx_index = qeTableIcx.nlps;
      }
    } else {
      this.chigh -= qeIcx;
      if ((a & 0x8000) !== 0) {
        this.a = a;
        return cx_mps;
      }
      if (a < qeIcx) {
        d = 1 ^ cx_mps;
        if (qeTableIcx.switchFlag === 1) {
          cx_mps = d;
        }
        cx_index = qeTableIcx.nlps;
      } else {
        d = cx_mps;
        cx_index = qeTableIcx.nmps;
      }
    }
    do {
      if (this.ct === 0) {
        this.byteIn();
      }
      a <<= 1;
      this.chigh = this.chigh << 1 & 0xffff | this.clow >> 15 & 1;
      this.clow = this.clow << 1 & 0xffff;
      this.ct--;
    } while ((a & 0x8000) === 0);
    this.a = a;
    contexts[pos] = cx_index << 1 | cx_mps;
    return d;
  }
}

;// ./src/core/ccitt.js

const ccittEOL = -2;
const ccittEOF = -1;
const twoDimPass = 0;
const twoDimHoriz = 1;
const twoDimVert0 = 2;
const twoDimVertR1 = 3;
const twoDimVertL1 = 4;
const twoDimVertR2 = 5;
const twoDimVertL2 = 6;
const twoDimVertR3 = 7;
const twoDimVertL3 = 8;
const twoDimTable = [[-1, -1], [-1, -1], [7, twoDimVertL3], [7, twoDimVertR3], [6, twoDimVertL2], [6, twoDimVertL2], [6, twoDimVertR2], [6, twoDimVertR2], [4, twoDimPass], [4, twoDimPass], [4, twoDimPass], [4, twoDimPass], [4, twoDimPass], [4, twoDimPass], [4, twoDimPass], [4, twoDimPass], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0]];
const whiteTable1 = [[-1, -1], [12, ccittEOL], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [11, 1792], [11, 1792], [12, 1984], [12, 2048], [12, 2112], [12, 2176], [12, 2240], [12, 2304], [11, 1856], [11, 1856], [11, 1920], [11, 1920], [12, 2368], [12, 2432], [12, 2496], [12, 2560]];
const whiteTable2 = [[-1, -1], [-1, -1], [-1, -1], [-1, -1], [8, 29], [8, 29], [8, 30], [8, 30], [8, 45], [8, 45], [8, 46], [8, 46], [7, 22], [7, 22], [7, 22], [7, 22], [7, 23], [7, 23], [7, 23], [7, 23], [8, 47], [8, 47], [8, 48], [8, 48], [6, 13], [6, 13], [6, 13], [6, 13], [6, 13], [6, 13], [6, 13], [6, 13], [7, 20], [7, 20], [7, 20], [7, 20], [8, 33], [8, 33], [8, 34], [8, 34], [8, 35], [8, 35], [8, 36], [8, 36], [8, 37], [8, 37], [8, 38], [8, 38], [7, 19], [7, 19], [7, 19], [7, 19], [8, 31], [8, 31], [8, 32], [8, 32], [6, 1], [6, 1], [6, 1], [6, 1], [6, 1], [6, 1], [6, 1], [6, 1], [6, 12], [6, 12], [6, 12], [6, 12], [6, 12], [6, 12], [6, 12], [6, 12], [8, 53], [8, 53], [8, 54], [8, 54], [7, 26], [7, 26], [7, 26], [7, 26], [8, 39], [8, 39], [8, 40], [8, 40], [8, 41], [8, 41], [8, 42], [8, 42], [8, 43], [8, 43], [8, 44], [8, 44], [7, 21], [7, 21], [7, 21], [7, 21], [7, 28], [7, 28], [7, 28], [7, 28], [8, 61], [8, 61], [8, 62], [8, 62], [8, 63], [8, 63], [8, 0], [8, 0], [8, 320], [8, 320], [8, 384], [8, 384], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [7, 27], [7, 27], [7, 27], [7, 27], [8, 59], [8, 59], [8, 60], [8, 60], [9, 1472], [9, 1536], [9, 1600], [9, 1728], [7, 18], [7, 18], [7, 18], [7, 18], [7, 24], [7, 24], [7, 24], [7, 24], [8, 49], [8, 49], [8, 50], [8, 50], [8, 51], [8, 51], [8, 52], [8, 52], [7, 25], [7, 25], [7, 25], [7, 25], [8, 55], [8, 55], [8, 56], [8, 56], [8, 57], [8, 57], [8, 58], [8, 58], [6, 192], [6, 192], [6, 192], [6, 192], [6, 192], [6, 192], [6, 192], [6, 192], [6, 1664], [6, 1664], [6, 1664], [6, 1664], [6, 1664], [6, 1664], [6, 1664], [6, 1664], [8, 448], [8, 448], [8, 512], [8, 512], [9, 704], [9, 768], [8, 640], [8, 640], [8, 576], [8, 576], [9, 832], [9, 896], [9, 960], [9, 1024], [9, 1088], [9, 1152], [9, 1216], [9, 1280], [9, 1344], [9, 1408], [7, 256], [7, 256], [7, 256], [7, 256], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [6, 16], [6, 16], [6, 16], [6, 16], [6, 16], [6, 16], [6, 16], [6, 16], [6, 17], [6, 17], [6, 17], [6, 17], [6, 17], [6, 17], [6, 17], [6, 17], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [6, 14], [6, 14], [6, 14], [6, 14], [6, 14], [6, 14], [6, 14], [6, 14], [6, 15], [6, 15], [6, 15], [6, 15], [6, 15], [6, 15], [6, 15], [6, 15], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7]];
const blackTable1 = [[-1, -1], [-1, -1], [12, ccittEOL], [12, ccittEOL], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [11, 1792], [11, 1792], [11, 1792], [11, 1792], [12, 1984], [12, 1984], [12, 2048], [12, 2048], [12, 2112], [12, 2112], [12, 2176], [12, 2176], [12, 2240], [12, 2240], [12, 2304], [12, 2304], [11, 1856], [11, 1856], [11, 1856], [11, 1856], [11, 1920], [11, 1920], [11, 1920], [11, 1920], [12, 2368], [12, 2368], [12, 2432], [12, 2432], [12, 2496], [12, 2496], [12, 2560], [12, 2560], [10, 18], [10, 18], [10, 18], [10, 18], [10, 18], [10, 18], [10, 18], [10, 18], [12, 52], [12, 52], [13, 640], [13, 704], [13, 768], [13, 832], [12, 55], [12, 55], [12, 56], [12, 56], [13, 1280], [13, 1344], [13, 1408], [13, 1472], [12, 59], [12, 59], [12, 60], [12, 60], [13, 1536], [13, 1600], [11, 24], [11, 24], [11, 24], [11, 24], [11, 25], [11, 25], [11, 25], [11, 25], [13, 1664], [13, 1728], [12, 320], [12, 320], [12, 384], [12, 384], [12, 448], [12, 448], [13, 512], [13, 576], [12, 53], [12, 53], [12, 54], [12, 54], [13, 896], [13, 960], [13, 1024], [13, 1088], [13, 1152], [13, 1216], [10, 64], [10, 64], [10, 64], [10, 64], [10, 64], [10, 64], [10, 64], [10, 64]];
const blackTable2 = [[8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [11, 23], [11, 23], [12, 50], [12, 51], [12, 44], [12, 45], [12, 46], [12, 47], [12, 57], [12, 58], [12, 61], [12, 256], [10, 16], [10, 16], [10, 16], [10, 16], [10, 17], [10, 17], [10, 17], [10, 17], [12, 48], [12, 49], [12, 62], [12, 63], [12, 30], [12, 31], [12, 32], [12, 33], [12, 40], [12, 41], [11, 22], [11, 22], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [9, 15], [9, 15], [9, 15], [9, 15], [9, 15], [9, 15], [9, 15], [9, 15], [12, 128], [12, 192], [12, 26], [12, 27], [12, 28], [12, 29], [11, 19], [11, 19], [11, 20], [11, 20], [12, 34], [12, 35], [12, 36], [12, 37], [12, 38], [12, 39], [11, 21], [11, 21], [12, 42], [12, 43], [10, 0], [10, 0], [10, 0], [10, 0], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12]];
const blackTable3 = [[-1, -1], [-1, -1], [-1, -1], [-1, -1], [6, 9], [6, 8], [5, 7], [5, 7], [4, 6], [4, 6], [4, 6], [4, 6], [4, 5], [4, 5], [4, 5], [4, 5], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 4], [3, 4], [3, 4], [3, 4], [3, 4], [3, 4], [3, 4], [3, 4], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2]];
class CCITTFaxDecoder {
  constructor(source, options = {
    K: 0,
    EndOfLine: false,
    EncodedByteAlign: false,
    Columns: 1728,
    Rows: 0,
    EndOfBlock: true,
    BlackIs1: false
  }) {
    if (typeof source?.next !== "function") {
      throw new Error('CCITTFaxDecoder - invalid "source" parameter.');
    }
    this.source = source;
    this.eof = false;
    ({
      K: this.encoding,
      EndOfLine: this.eoline,
      EncodedByteAlign: this.byteAlign,
      Columns: this.columns,
      Rows: this.rows,
      EndOfBlock: this.eoblock,
      BlackIs1: this.black
    } = options);
    this.codingLine = new Uint32Array(this.columns + 1);
    this.refLine = new Uint32Array(this.columns + 2);
    this.codingLine[0] = this.columns;
    this.codingPos = 0;
    this.row = 0;
    this.nextLine2D = this.encoding < 0;
    this.inputBits = 0;
    this.inputBuf = 0;
    this.outputBits = 0;
    this.rowsDone = false;
    let code1;
    while ((code1 = this._lookBits(12)) === 0) {
      this._eatBits(1);
    }
    if (code1 === 1) {
      this._eatBits(12);
    }
    if (this.encoding > 0) {
      this.nextLine2D = !this._lookBits(1);
      this._eatBits(1);
    }
  }
  readNextChar() {
    if (this.eof) {
      return -1;
    }
    const refLine = this.refLine;
    const codingLine = this.codingLine;
    const columns = this.columns;
    let refPos, blackPixels, bits, i;
    if (this.outputBits === 0) {
      if (this.rowsDone) {
        this.eof = true;
      }
      if (this.eof) {
        return -1;
      }
      this.err = false;
      let code1, code2, code3;
      if (this.nextLine2D) {
        for (i = 0; codingLine[i] < columns; ++i) {
          refLine[i] = codingLine[i];
        }
        refLine[i++] = columns;
        refLine[i] = columns;
        codingLine[0] = 0;
        this.codingPos = 0;
        refPos = 0;
        blackPixels = 0;
        while (codingLine[this.codingPos] < columns) {
          code1 = this._getTwoDimCode();
          switch (code1) {
            case twoDimPass:
              this._addPixels(refLine[refPos + 1], blackPixels);
              if (refLine[refPos + 1] < columns) {
                refPos += 2;
              }
              break;
            case twoDimHoriz:
              code1 = code2 = 0;
              if (blackPixels) {
                do {
                  code1 += code3 = this._getBlackCode();
                } while (code3 >= 64);
                do {
                  code2 += code3 = this._getWhiteCode();
                } while (code3 >= 64);
              } else {
                do {
                  code1 += code3 = this._getWhiteCode();
                } while (code3 >= 64);
                do {
                  code2 += code3 = this._getBlackCode();
                } while (code3 >= 64);
              }
              this._addPixels(codingLine[this.codingPos] + code1, blackPixels);
              if (codingLine[this.codingPos] < columns) {
                this._addPixels(codingLine[this.codingPos] + code2, blackPixels ^ 1);
              }
              while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                refPos += 2;
              }
              break;
            case twoDimVertR3:
              this._addPixels(refLine[refPos] + 3, blackPixels);
              blackPixels ^= 1;
              if (codingLine[this.codingPos] < columns) {
                ++refPos;
                while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                  refPos += 2;
                }
              }
              break;
            case twoDimVertR2:
              this._addPixels(refLine[refPos] + 2, blackPixels);
              blackPixels ^= 1;
              if (codingLine[this.codingPos] < columns) {
                ++refPos;
                while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                  refPos += 2;
                }
              }
              break;
            case twoDimVertR1:
              this._addPixels(refLine[refPos] + 1, blackPixels);
              blackPixels ^= 1;
              if (codingLine[this.codingPos] < columns) {
                ++refPos;
                while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                  refPos += 2;
                }
              }
              break;
            case twoDimVert0:
              this._addPixels(refLine[refPos], blackPixels);
              blackPixels ^= 1;
              if (codingLine[this.codingPos] < columns) {
                ++refPos;
                while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                  refPos += 2;
                }
              }
              break;
            case twoDimVertL3:
              this._addPixelsNeg(refLine[refPos] - 3, blackPixels);
              blackPixels ^= 1;
              if (codingLine[this.codingPos] < columns) {
                if (refPos > 0) {
                  --refPos;
                } else {
                  ++refPos;
                }
                while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                  refPos += 2;
                }
              }
              break;
            case twoDimVertL2:
              this._addPixelsNeg(refLine[refPos] - 2, blackPixels);
              blackPixels ^= 1;
              if (codingLine[this.codingPos] < columns) {
                if (refPos > 0) {
                  --refPos;
                } else {
                  ++refPos;
                }
                while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                  refPos += 2;
                }
              }
              break;
            case twoDimVertL1:
              this._addPixelsNeg(refLine[refPos] - 1, blackPixels);
              blackPixels ^= 1;
              if (codingLine[this.codingPos] < columns) {
                if (refPos > 0) {
                  --refPos;
                } else {
                  ++refPos;
                }
                while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                  refPos += 2;
                }
              }
              break;
            case ccittEOF:
              this._addPixels(columns, 0);
              this.eof = true;
              break;
            default:
              info("bad 2d code");
              this._addPixels(columns, 0);
              this.err = true;
          }
        }
      } else {
        codingLine[0] = 0;
        this.codingPos = 0;
        blackPixels = 0;
        while (codingLine[this.codingPos] < columns) {
          code1 = 0;
          if (blackPixels) {
            do {
              code1 += code3 = this._getBlackCode();
            } while (code3 >= 64);
          } else {
            do {
              code1 += code3 = this._getWhiteCode();
            } while (code3 >= 64);
          }
          this._addPixels(codingLine[this.codingPos] + code1, blackPixels);
          blackPixels ^= 1;
        }
      }
      let gotEOL = false;
      if (this.byteAlign) {
        this.inputBits &= ~7;
      }
      if (!this.eoblock && this.row === this.rows - 1) {
        this.rowsDone = true;
      } else {
        code1 = this._lookBits(12);
        if (this.eoline) {
          while (code1 !== ccittEOF && code1 !== 1) {
            this._eatBits(1);
            code1 = this._lookBits(12);
          }
        } else {
          while (code1 === 0) {
            this._eatBits(1);
            code1 = this._lookBits(12);
          }
        }
        if (code1 === 1) {
          this._eatBits(12);
          gotEOL = true;
        } else if (code1 === ccittEOF) {
          this.eof = true;
        }
      }
      if (!this.eof && this.encoding > 0 && !this.rowsDone) {
        this.nextLine2D = !this._lookBits(1);
        this._eatBits(1);
      }
      if (this.eoblock && gotEOL && this.byteAlign) {
        code1 = this._lookBits(12);
        if (code1 === 1) {
          this._eatBits(12);
          if (this.encoding > 0) {
            this._lookBits(1);
            this._eatBits(1);
          }
          if (this.encoding >= 0) {
            for (i = 0; i < 4; ++i) {
              code1 = this._lookBits(12);
              if (code1 !== 1) {
                info("bad rtc code: " + code1);
              }
              this._eatBits(12);
              if (this.encoding > 0) {
                this._lookBits(1);
                this._eatBits(1);
              }
            }
          }
          this.eof = true;
        }
      } else if (this.err && this.eoline) {
        while (true) {
          code1 = this._lookBits(13);
          if (code1 === ccittEOF) {
            this.eof = true;
            return -1;
          }
          if (code1 >> 1 === 1) {
            break;
          }
          this._eatBits(1);
        }
        this._eatBits(12);
        if (this.encoding > 0) {
          this._eatBits(1);
          this.nextLine2D = !(code1 & 1);
        }
      }
      this.outputBits = codingLine[0] > 0 ? codingLine[this.codingPos = 0] : codingLine[this.codingPos = 1];
      this.row++;
    }
    let c;
    if (this.outputBits >= 8) {
      c = this.codingPos & 1 ? 0 : 0xff;
      this.outputBits -= 8;
      if (this.outputBits === 0 && codingLine[this.codingPos] < columns) {
        this.codingPos++;
        this.outputBits = codingLine[this.codingPos] - codingLine[this.codingPos - 1];
      }
    } else {
      bits = 8;
      c = 0;
      do {
        if (typeof this.outputBits !== "number") {
          throw new FormatError('Invalid /CCITTFaxDecode data, "outputBits" must be a number.');
        }
        if (this.outputBits > bits) {
          c <<= bits;
          if (!(this.codingPos & 1)) {
            c |= 0xff >> 8 - bits;
          }
          this.outputBits -= bits;
          bits = 0;
        } else {
          c <<= this.outputBits;
          if (!(this.codingPos & 1)) {
            c |= 0xff >> 8 - this.outputBits;
          }
          bits -= this.outputBits;
          this.outputBits = 0;
          if (codingLine[this.codingPos] < columns) {
            this.codingPos++;
            this.outputBits = codingLine[this.codingPos] - codingLine[this.codingPos - 1];
          } else if (bits > 0) {
            c <<= bits;
            bits = 0;
          }
        }
      } while (bits);
    }
    if (this.black) {
      c ^= 0xff;
    }
    return c;
  }
  _addPixels(a1, blackPixels) {
    const codingLine = this.codingLine;
    let codingPos = this.codingPos;
    if (a1 > codingLine[codingPos]) {
      if (a1 > this.columns) {
        info("row is wrong length");
        this.err = true;
        a1 = this.columns;
      }
      if (codingPos & 1 ^ blackPixels) {
        ++codingPos;
      }
      codingLine[codingPos] = a1;
    }
    this.codingPos = codingPos;
  }
  _addPixelsNeg(a1, blackPixels) {
    const codingLine = this.codingLine;
    let codingPos = this.codingPos;
    if (a1 > codingLine[codingPos]) {
      if (a1 > this.columns) {
        info("row is wrong length");
        this.err = true;
        a1 = this.columns;
      }
      if (codingPos & 1 ^ blackPixels) {
        ++codingPos;
      }
      codingLine[codingPos] = a1;
    } else if (a1 < codingLine[codingPos]) {
      if (a1 < 0) {
        info("invalid code");
        this.err = true;
        a1 = 0;
      }
      while (codingPos > 0 && a1 < codingLine[codingPos - 1]) {
        --codingPos;
      }
      codingLine[codingPos] = a1;
    }
    this.codingPos = codingPos;
  }
  _findTableCode(start, end, table, limit) {
    const limitValue = limit || 0;
    for (let i = start; i <= end; ++i) {
      let code = this._lookBits(i);
      if (code === ccittEOF) {
        return [true, 1, false];
      }
      if (i < end) {
        code <<= end - i;
      }
      if (!limitValue || code >= limitValue) {
        const p = table[code - limitValue];
        if (p[0] === i) {
          this._eatBits(i);
          return [true, p[1], true];
        }
      }
    }
    return [false, 0, false];
  }
  _getTwoDimCode() {
    let code = 0;
    let p;
    if (this.eoblock) {
      code = this._lookBits(7);
      p = twoDimTable[code];
      if (p?.[0] > 0) {
        this._eatBits(p[0]);
        return p[1];
      }
    } else {
      const result = this._findTableCode(1, 7, twoDimTable);
      if (result[0] && result[2]) {
        return result[1];
      }
    }
    info("Bad two dim code");
    return ccittEOF;
  }
  _getWhiteCode() {
    let code = 0;
    let p;
    if (this.eoblock) {
      code = this._lookBits(12);
      if (code === ccittEOF) {
        return 1;
      }
      p = code >> 5 === 0 ? whiteTable1[code] : whiteTable2[code >> 3];
      if (p[0] > 0) {
        this._eatBits(p[0]);
        return p[1];
      }
    } else {
      let result = this._findTableCode(1, 9, whiteTable2);
      if (result[0]) {
        return result[1];
      }
      result = this._findTableCode(11, 12, whiteTable1);
      if (result[0]) {
        return result[1];
      }
    }
    info("bad white code");
    this._eatBits(1);
    return 1;
  }
  _getBlackCode() {
    let code, p;
    if (this.eoblock) {
      code = this._lookBits(13);
      if (code === ccittEOF) {
        return 1;
      }
      if (code >> 7 === 0) {
        p = blackTable1[code];
      } else if (code >> 9 === 0 && code >> 7 !== 0) {
        p = blackTable2[(code >> 1) - 64];
      } else {
        p = blackTable3[code >> 7];
      }
      if (p[0] > 0) {
        this._eatBits(p[0]);
        return p[1];
      }
    } else {
      let result = this._findTableCode(2, 6, blackTable3);
      if (result[0]) {
        return result[1];
      }
      result = this._findTableCode(7, 12, blackTable2, 64);
      if (result[0]) {
        return result[1];
      }
      result = this._findTableCode(10, 13, blackTable1);
      if (result[0]) {
        return result[1];
      }
    }
    info("bad black code");
    this._eatBits(1);
    return 1;
  }
  _lookBits(n) {
    let c;
    while (this.inputBits < n) {
      if ((c = this.source.next()) === -1) {
        if (this.inputBits === 0) {
          return ccittEOF;
        }
        return this.inputBuf << n - this.inputBits & 0xffff >> 16 - n;
      }
      this.inputBuf = this.inputBuf << 8 | c;
      this.inputBits += 8;
    }
    return this.inputBuf >> this.inputBits - n & 0xffff >> 16 - n;
  }
  _eatBits(n) {
    if ((this.inputBits -= n) < 0) {
      this.inputBits = 0;
    }
  }
}

;// ./src/core/jbig2.js




class Jbig2Error extends BaseException {
  constructor(msg) {
    super(msg, "Jbig2Error");
  }
}
class ContextCache {
  getContexts(id) {
    if (id in this) {
      return this[id];
    }
    return this[id] = new Int8Array(1 << 16);
  }
}
class DecodingContext {
  constructor(data, start, end) {
    this.data = data;
    this.start = start;
    this.end = end;
  }
  get decoder() {
    const decoder = new ArithmeticDecoder(this.data, this.start, this.end);
    return shadow(this, "decoder", decoder);
  }
  get contextCache() {
    const cache = new ContextCache();
    return shadow(this, "contextCache", cache);
  }
}
function decodeInteger(contextCache, procedure, decoder) {
  const contexts = contextCache.getContexts(procedure);
  let prev = 1;
  function readBits(length) {
    let v = 0;
    for (let i = 0; i < length; i++) {
      const bit = decoder.readBit(contexts, prev);
      prev = prev < 256 ? prev << 1 | bit : (prev << 1 | bit) & 511 | 256;
      v = v << 1 | bit;
    }
    return v >>> 0;
  }
  const sign = readBits(1);
  const value = readBits(1) ? readBits(1) ? readBits(1) ? readBits(1) ? readBits(1) ? readBits(32) + 4436 : readBits(12) + 340 : readBits(8) + 84 : readBits(6) + 20 : readBits(4) + 4 : readBits(2);
  let signedValue;
  if (sign === 0) {
    signedValue = value;
  } else if (value > 0) {
    signedValue = -value;
  }
  if (signedValue >= MIN_INT_32 && signedValue <= MAX_INT_32) {
    return signedValue;
  }
  return null;
}
function decodeIAID(contextCache, decoder, codeLength) {
  const contexts = contextCache.getContexts("IAID");
  let prev = 1;
  for (let i = 0; i < codeLength; i++) {
    const bit = decoder.readBit(contexts, prev);
    prev = prev << 1 | bit;
  }
  if (codeLength < 31) {
    return prev & (1 << codeLength) - 1;
  }
  return prev & 0x7fffffff;
}
const SegmentTypes = ["SymbolDictionary", null, null, null, "IntermediateTextRegion", null, "ImmediateTextRegion", "ImmediateLosslessTextRegion", null, null, null, null, null, null, null, null, "PatternDictionary", null, null, null, "IntermediateHalftoneRegion", null, "ImmediateHalftoneRegion", "ImmediateLosslessHalftoneRegion", null, null, null, null, null, null, null, null, null, null, null, null, "IntermediateGenericRegion", null, "ImmediateGenericRegion", "ImmediateLosslessGenericRegion", "IntermediateGenericRefinementRegion", null, "ImmediateGenericRefinementRegion", "ImmediateLosslessGenericRefinementRegion", null, null, null, null, "PageInformation", "EndOfPage", "EndOfStripe", "EndOfFile", "Profiles", "Tables", null, null, null, null, null, null, null, null, "Extension"];
const CodingTemplates = [[{
  x: -1,
  y: -2
}, {
  x: 0,
  y: -2
}, {
  x: 1,
  y: -2
}, {
  x: -2,
  y: -1
}, {
  x: -1,
  y: -1
}, {
  x: 0,
  y: -1
}, {
  x: 1,
  y: -1
}, {
  x: 2,
  y: -1
}, {
  x: -4,
  y: 0
}, {
  x: -3,
  y: 0
}, {
  x: -2,
  y: 0
}, {
  x: -1,
  y: 0
}], [{
  x: -1,
  y: -2
}, {
  x: 0,
  y: -2
}, {
  x: 1,
  y: -2
}, {
  x: 2,
  y: -2
}, {
  x: -2,
  y: -1
}, {
  x: -1,
  y: -1
}, {
  x: 0,
  y: -1
}, {
  x: 1,
  y: -1
}, {
  x: 2,
  y: -1
}, {
  x: -3,
  y: 0
}, {
  x: -2,
  y: 0
}, {
  x: -1,
  y: 0
}], [{
  x: -1,
  y: -2
}, {
  x: 0,
  y: -2
}, {
  x: 1,
  y: -2
}, {
  x: -2,
  y: -1
}, {
  x: -1,
  y: -1
}, {
  x: 0,
  y: -1
}, {
  x: 1,
  y: -1
}, {
  x: -2,
  y: 0
}, {
  x: -1,
  y: 0
}], [{
  x: -3,
  y: -1
}, {
  x: -2,
  y: -1
}, {
  x: -1,
  y: -1
}, {
  x: 0,
  y: -1
}, {
  x: 1,
  y: -1
}, {
  x: -4,
  y: 0
}, {
  x: -3,
  y: 0
}, {
  x: -2,
  y: 0
}, {
  x: -1,
  y: 0
}]];
const RefinementTemplates = [{
  coding: [{
    x: 0,
    y: -1
  }, {
    x: 1,
    y: -1
  }, {
    x: -1,
    y: 0
  }],
  reference: [{
    x: 0,
    y: -1
  }, {
    x: 1,
    y: -1
  }, {
    x: -1,
    y: 0
  }, {
    x: 0,
    y: 0
  }, {
    x: 1,
    y: 0
  }, {
    x: -1,
    y: 1
  }, {
    x: 0,
    y: 1
  }, {
    x: 1,
    y: 1
  }]
}, {
  coding: [{
    x: -1,
    y: -1
  }, {
    x: 0,
    y: -1
  }, {
    x: 1,
    y: -1
  }, {
    x: -1,
    y: 0
  }],
  reference: [{
    x: 0,
    y: -1
  }, {
    x: -1,
    y: 0
  }, {
    x: 0,
    y: 0
  }, {
    x: 1,
    y: 0
  }, {
    x: 0,
    y: 1
  }, {
    x: 1,
    y: 1
  }]
}];
const ReusedContexts = [0x9b25, 0x0795, 0x00e5, 0x0195];
const RefinementReusedContexts = [0x0020, 0x0008];
function decodeBitmapTemplate0(width, height, decodingContext) {
  const decoder = decodingContext.decoder;
  const contexts = decodingContext.contextCache.getContexts("GB");
  const bitmap = [];
  let contextLabel, i, j, pixel, row, row1, row2;
  const OLD_PIXEL_MASK = 0x7bf7;
  for (i = 0; i < height; i++) {
    row = bitmap[i] = new Uint8Array(width);
    row1 = i < 1 ? row : bitmap[i - 1];
    row2 = i < 2 ? row : bitmap[i - 2];
    contextLabel = row2[0] << 13 | row2[1] << 12 | row2[2] << 11 | row1[0] << 7 | row1[1] << 6 | row1[2] << 5 | row1[3] << 4;
    for (j = 0; j < width; j++) {
      row[j] = pixel = decoder.readBit(contexts, contextLabel);
      contextLabel = (contextLabel & OLD_PIXEL_MASK) << 1 | (j + 3 < width ? row2[j + 3] << 11 : 0) | (j + 4 < width ? row1[j + 4] << 4 : 0) | pixel;
    }
  }
  return bitmap;
}
function decodeBitmap(mmr, width, height, templateIndex, prediction, skip, at, decodingContext) {
  if (mmr) {
    const input = new Reader(decodingContext.data, decodingContext.start, decodingContext.end);
    return decodeMMRBitmap(input, width, height, false);
  }
  if (templateIndex === 0 && !skip && !prediction && at.length === 4 && at[0].x === 3 && at[0].y === -1 && at[1].x === -3 && at[1].y === -1 && at[2].x === 2 && at[2].y === -2 && at[3].x === -2 && at[3].y === -2) {
    return decodeBitmapTemplate0(width, height, decodingContext);
  }
  const useskip = !!skip;
  const template = CodingTemplates[templateIndex].concat(at);
  template.sort((a, b) => a.y - b.y || a.x - b.x);
  const templateLength = template.length;
  const templateX = new Int8Array(templateLength);
  const templateY = new Int8Array(templateLength);
  const changingTemplateEntries = [];
  let reuseMask = 0,
    minX = 0,
    maxX = 0,
    minY = 0;
  let c, k;
  for (k = 0; k < templateLength; k++) {
    templateX[k] = template[k].x;
    templateY[k] = template[k].y;
    minX = Math.min(minX, template[k].x);
    maxX = Math.max(maxX, template[k].x);
    minY = Math.min(minY, template[k].y);
    if (k < templateLength - 1 && template[k].y === template[k + 1].y && template[k].x === template[k + 1].x - 1) {
      reuseMask |= 1 << templateLength - 1 - k;
    } else {
      changingTemplateEntries.push(k);
    }
  }
  const changingEntriesLength = changingTemplateEntries.length;
  const changingTemplateX = new Int8Array(changingEntriesLength);
  const changingTemplateY = new Int8Array(changingEntriesLength);
  const changingTemplateBit = new Uint16Array(changingEntriesLength);
  for (c = 0; c < changingEntriesLength; c++) {
    k = changingTemplateEntries[c];
    changingTemplateX[c] = template[k].x;
    changingTemplateY[c] = template[k].y;
    changingTemplateBit[c] = 1 << templateLength - 1 - k;
  }
  const sbb_left = -minX;
  const sbb_top = -minY;
  const sbb_right = width - maxX;
  const pseudoPixelContext = ReusedContexts[templateIndex];
  let row = new Uint8Array(width);
  const bitmap = [];
  const decoder = decodingContext.decoder;
  const contexts = decodingContext.contextCache.getContexts("GB");
  let ltp = 0,
    j,
    i0,
    j0,
    contextLabel = 0,
    bit,
    shift;
  for (let i = 0; i < height; i++) {
    if (prediction) {
      const sltp = decoder.readBit(contexts, pseudoPixelContext);
      ltp ^= sltp;
      if (ltp) {
        bitmap.push(row);
        continue;
      }
    }
    row = new Uint8Array(row);
    bitmap.push(row);
    for (j = 0; j < width; j++) {
      if (useskip && skip[i][j]) {
        row[j] = 0;
        continue;
      }
      if (j >= sbb_left && j < sbb_right && i >= sbb_top) {
        contextLabel = contextLabel << 1 & reuseMask;
        for (k = 0; k < changingEntriesLength; k++) {
          i0 = i + changingTemplateY[k];
          j0 = j + changingTemplateX[k];
          bit = bitmap[i0][j0];
          if (bit) {
            bit = changingTemplateBit[k];
            contextLabel |= bit;
          }
        }
      } else {
        contextLabel = 0;
        shift = templateLength - 1;
        for (k = 0; k < templateLength; k++, shift--) {
          j0 = j + templateX[k];
          if (j0 >= 0 && j0 < width) {
            i0 = i + templateY[k];
            if (i0 >= 0) {
              bit = bitmap[i0][j0];
              if (bit) {
                contextLabel |= bit << shift;
              }
            }
          }
        }
      }
      const pixel = decoder.readBit(contexts, contextLabel);
      row[j] = pixel;
    }
  }
  return bitmap;
}
function decodeRefinement(width, height, templateIndex, referenceBitmap, offsetX, offsetY, prediction, at, decodingContext) {
  let codingTemplate = RefinementTemplates[templateIndex].coding;
  if (templateIndex === 0) {
    codingTemplate = codingTemplate.concat([at[0]]);
  }
  const codingTemplateLength = codingTemplate.length;
  const codingTemplateX = new Int32Array(codingTemplateLength);
  const codingTemplateY = new Int32Array(codingTemplateLength);
  let k;
  for (k = 0; k < codingTemplateLength; k++) {
    codingTemplateX[k] = codingTemplate[k].x;
    codingTemplateY[k] = codingTemplate[k].y;
  }
  let referenceTemplate = RefinementTemplates[templateIndex].reference;
  if (templateIndex === 0) {
    referenceTemplate = referenceTemplate.concat([at[1]]);
  }
  const referenceTemplateLength = referenceTemplate.length;
  const referenceTemplateX = new Int32Array(referenceTemplateLength);
  const referenceTemplateY = new Int32Array(referenceTemplateLength);
  for (k = 0; k < referenceTemplateLength; k++) {
    referenceTemplateX[k] = referenceTemplate[k].x;
    referenceTemplateY[k] = referenceTemplate[k].y;
  }
  const referenceWidth = referenceBitmap[0].length;
  const referenceHeight = referenceBitmap.length;
  const pseudoPixelContext = RefinementReusedContexts[templateIndex];
  const bitmap = [];
  const decoder = decodingContext.decoder;
  const contexts = decodingContext.contextCache.getContexts("GR");
  let ltp = 0;
  for (let i = 0; i < height; i++) {
    if (prediction) {
      const sltp = decoder.readBit(contexts, pseudoPixelContext);
      ltp ^= sltp;
      if (ltp) {
        throw new Jbig2Error("prediction is not supported");
      }
    }
    const row = new Uint8Array(width);
    bitmap.push(row);
    for (let j = 0; j < width; j++) {
      let i0, j0;
      let contextLabel = 0;
      for (k = 0; k < codingTemplateLength; k++) {
        i0 = i + codingTemplateY[k];
        j0 = j + codingTemplateX[k];
        if (i0 < 0 || j0 < 0 || j0 >= width) {
          contextLabel <<= 1;
        } else {
          contextLabel = contextLabel << 1 | bitmap[i0][j0];
        }
      }
      for (k = 0; k < referenceTemplateLength; k++) {
        i0 = i + referenceTemplateY[k] - offsetY;
        j0 = j + referenceTemplateX[k] - offsetX;
        if (i0 < 0 || i0 >= referenceHeight || j0 < 0 || j0 >= referenceWidth) {
          contextLabel <<= 1;
        } else {
          contextLabel = contextLabel << 1 | referenceBitmap[i0][j0];
        }
      }
      const pixel = decoder.readBit(contexts, contextLabel);
      row[j] = pixel;
    }
  }
  return bitmap;
}
function decodeSymbolDictionary(huffman, refinement, symbols, numberOfNewSymbols, numberOfExportedSymbols, huffmanTables, templateIndex, at, refinementTemplateIndex, refinementAt, decodingContext, huffmanInput) {
  if (huffman && refinement) {
    throw new Jbig2Error("symbol refinement with Huffman is not supported");
  }
  const newSymbols = [];
  let currentHeight = 0;
  let symbolCodeLength = log2(symbols.length + numberOfNewSymbols);
  const decoder = decodingContext.decoder;
  const contextCache = decodingContext.contextCache;
  let tableB1, symbolWidths;
  if (huffman) {
    tableB1 = getStandardTable(1);
    symbolWidths = [];
    symbolCodeLength = Math.max(symbolCodeLength, 1);
  }
  while (newSymbols.length < numberOfNewSymbols) {
    const deltaHeight = huffman ? huffmanTables.tableDeltaHeight.decode(huffmanInput) : decodeInteger(contextCache, "IADH", decoder);
    currentHeight += deltaHeight;
    let currentWidth = 0,
      totalWidth = 0;
    const firstSymbol = huffman ? symbolWidths.length : 0;
    while (true) {
      const deltaWidth = huffman ? huffmanTables.tableDeltaWidth.decode(huffmanInput) : decodeInteger(contextCache, "IADW", decoder);
      if (deltaWidth === null) {
        break;
      }
      currentWidth += deltaWidth;
      totalWidth += currentWidth;
      let bitmap;
      if (refinement) {
        const numberOfInstances = decodeInteger(contextCache, "IAAI", decoder);
        if (numberOfInstances > 1) {
          bitmap = decodeTextRegion(huffman, refinement, currentWidth, currentHeight, 0, numberOfInstances, 1, symbols.concat(newSymbols), symbolCodeLength, 0, 0, 1, 0, huffmanTables, refinementTemplateIndex, refinementAt, decodingContext, 0, huffmanInput);
        } else {
          const symbolId = decodeIAID(contextCache, decoder, symbolCodeLength);
          const rdx = decodeInteger(contextCache, "IARDX", decoder);
          const rdy = decodeInteger(contextCache, "IARDY", decoder);
          const symbol = symbolId < symbols.length ? symbols[symbolId] : newSymbols[symbolId - symbols.length];
          bitmap = decodeRefinement(currentWidth, currentHeight, refinementTemplateIndex, symbol, rdx, rdy, false, refinementAt, decodingContext);
        }
        newSymbols.push(bitmap);
      } else if (huffman) {
        symbolWidths.push(currentWidth);
      } else {
        bitmap = decodeBitmap(false, currentWidth, currentHeight, templateIndex, false, null, at, decodingContext);
        newSymbols.push(bitmap);
      }
    }
    if (huffman && !refinement) {
      const bitmapSize = huffmanTables.tableBitmapSize.decode(huffmanInput);
      huffmanInput.byteAlign();
      let collectiveBitmap;
      if (bitmapSize === 0) {
        collectiveBitmap = readUncompressedBitmap(huffmanInput, totalWidth, currentHeight);
      } else {
        const originalEnd = huffmanInput.end;
        const bitmapEnd = huffmanInput.position + bitmapSize;
        huffmanInput.end = bitmapEnd;
        collectiveBitmap = decodeMMRBitmap(huffmanInput, totalWidth, currentHeight, false);
        huffmanInput.end = originalEnd;
        huffmanInput.position = bitmapEnd;
      }
      const numberOfSymbolsDecoded = symbolWidths.length;
      if (firstSymbol === numberOfSymbolsDecoded - 1) {
        newSymbols.push(collectiveBitmap);
      } else {
        let i,
          y,
          xMin = 0,
          xMax,
          bitmapWidth,
          symbolBitmap;
        for (i = firstSymbol; i < numberOfSymbolsDecoded; i++) {
          bitmapWidth = symbolWidths[i];
          xMax = xMin + bitmapWidth;
          symbolBitmap = [];
          for (y = 0; y < currentHeight; y++) {
            symbolBitmap.push(collectiveBitmap[y].subarray(xMin, xMax));
          }
          newSymbols.push(symbolBitmap);
          xMin = xMax;
        }
      }
    }
  }
  const exportedSymbols = [],
    flags = [];
  let currentFlag = false,
    i,
    ii;
  const totalSymbolsLength = symbols.length + numberOfNewSymbols;
  while (flags.length < totalSymbolsLength) {
    let runLength = huffman ? tableB1.decode(huffmanInput) : decodeInteger(contextCache, "IAEX", decoder);
    while (runLength--) {
      flags.push(currentFlag);
    }
    currentFlag = !currentFlag;
  }
  for (i = 0, ii = symbols.length; i < ii; i++) {
    if (flags[i]) {
      exportedSymbols.push(symbols[i]);
    }
  }
  for (let j = 0; j < numberOfNewSymbols; i++, j++) {
    if (flags[i]) {
      exportedSymbols.push(newSymbols[j]);
    }
  }
  return exportedSymbols;
}
function decodeTextRegion(huffman, refinement, width, height, defaultPixelValue, numberOfSymbolInstances, stripSize, inputSymbols, symbolCodeLength, transposed, dsOffset, referenceCorner, combinationOperator, huffmanTables, refinementTemplateIndex, refinementAt, decodingContext, logStripSize, huffmanInput) {
  if (huffman && refinement) {
    throw new Jbig2Error("refinement with Huffman is not supported");
  }
  const bitmap = [];
  let i, row;
  for (i = 0; i < height; i++) {
    row = new Uint8Array(width);
    if (defaultPixelValue) {
      row.fill(defaultPixelValue);
    }
    bitmap.push(row);
  }
  const decoder = decodingContext.decoder;
  const contextCache = decodingContext.contextCache;
  let stripT = huffman ? -huffmanTables.tableDeltaT.decode(huffmanInput) : -decodeInteger(contextCache, "IADT", decoder);
  let firstS = 0;
  i = 0;
  while (i < numberOfSymbolInstances) {
    const deltaT = huffman ? huffmanTables.tableDeltaT.decode(huffmanInput) : decodeInteger(contextCache, "IADT", decoder);
    stripT += deltaT;
    const deltaFirstS = huffman ? huffmanTables.tableFirstS.decode(huffmanInput) : decodeInteger(contextCache, "IAFS", decoder);
    firstS += deltaFirstS;
    let currentS = firstS;
    do {
      let currentT = 0;
      if (stripSize > 1) {
        currentT = huffman ? huffmanInput.readBits(logStripSize) : decodeInteger(contextCache, "IAIT", decoder);
      }
      const t = stripSize * stripT + currentT;
      const symbolId = huffman ? huffmanTables.symbolIDTable.decode(huffmanInput) : decodeIAID(contextCache, decoder, symbolCodeLength);
      const applyRefinement = refinement && (huffman ? huffmanInput.readBit() : decodeInteger(contextCache, "IARI", decoder));
      let symbolBitmap = inputSymbols[symbolId];
      let symbolWidth = symbolBitmap[0].length;
      let symbolHeight = symbolBitmap.length;
      if (applyRefinement) {
        const rdw = decodeInteger(contextCache, "IARDW", decoder);
        const rdh = decodeInteger(contextCache, "IARDH", decoder);
        const rdx = decodeInteger(contextCache, "IARDX", decoder);
        const rdy = decodeInteger(contextCache, "IARDY", decoder);
        symbolWidth += rdw;
        symbolHeight += rdh;
        symbolBitmap = decodeRefinement(symbolWidth, symbolHeight, refinementTemplateIndex, symbolBitmap, (rdw >> 1) + rdx, (rdh >> 1) + rdy, false, refinementAt, decodingContext);
      }
      let increment = 0;
      if (!transposed) {
        if (referenceCorner > 1) {
          currentS += symbolWidth - 1;
        } else {
          increment = symbolWidth - 1;
        }
      } else if (!(referenceCorner & 1)) {
        currentS += symbolHeight - 1;
      } else {
        increment = symbolHeight - 1;
      }
      const offsetT = t - (referenceCorner & 1 ? 0 : symbolHeight - 1);
      const offsetS = currentS - (referenceCorner & 2 ? symbolWidth - 1 : 0);
      let s2, t2, symbolRow;
      if (transposed) {
        for (s2 = 0; s2 < symbolHeight; s2++) {
          row = bitmap[offsetS + s2];
          if (!row) {
            continue;
          }
          symbolRow = symbolBitmap[s2];
          const maxWidth = Math.min(width - offsetT, symbolWidth);
          switch (combinationOperator) {
            case 0:
              for (t2 = 0; t2 < maxWidth; t2++) {
                row[offsetT + t2] |= symbolRow[t2];
              }
              break;
            case 2:
              for (t2 = 0; t2 < maxWidth; t2++) {
                row[offsetT + t2] ^= symbolRow[t2];
              }
              break;
            default:
              throw new Jbig2Error(`operator ${combinationOperator} is not supported`);
          }
        }
      } else {
        for (t2 = 0; t2 < symbolHeight; t2++) {
          row = bitmap[offsetT + t2];
          if (!row) {
            continue;
          }
          symbolRow = symbolBitmap[t2];
          switch (combinationOperator) {
            case 0:
              for (s2 = 0; s2 < symbolWidth; s2++) {
                row[offsetS + s2] |= symbolRow[s2];
              }
              break;
            case 2:
              for (s2 = 0; s2 < symbolWidth; s2++) {
                row[offsetS + s2] ^= symbolRow[s2];
              }
              break;
            default:
              throw new Jbig2Error(`operator ${combinationOperator} is not supported`);
          }
        }
      }
      i++;
      const deltaS = huffman ? huffmanTables.tableDeltaS.decode(huffmanInput) : decodeInteger(contextCache, "IADS", decoder);
      if (deltaS === null) {
        break;
      }
      currentS += increment + deltaS + dsOffset;
    } while (true);
  }
  return bitmap;
}
function decodePatternDictionary(mmr, patternWidth, patternHeight, maxPatternIndex, template, decodingContext) {
  const at = [];
  if (!mmr) {
    at.push({
      x: -patternWidth,
      y: 0
    });
    if (template === 0) {
      at.push({
        x: -3,
        y: -1
      }, {
        x: 2,
        y: -2
      }, {
        x: -2,
        y: -2
      });
    }
  }
  const collectiveWidth = (maxPatternIndex + 1) * patternWidth;
  const collectiveBitmap = decodeBitmap(mmr, collectiveWidth, patternHeight, template, false, null, at, decodingContext);
  const patterns = [];
  for (let i = 0; i <= maxPatternIndex; i++) {
    const patternBitmap = [];
    const xMin = patternWidth * i;
    const xMax = xMin + patternWidth;
    for (let y = 0; y < patternHeight; y++) {
      patternBitmap.push(collectiveBitmap[y].subarray(xMin, xMax));
    }
    patterns.push(patternBitmap);
  }
  return patterns;
}
function decodeHalftoneRegion(mmr, patterns, template, regionWidth, regionHeight, defaultPixelValue, enableSkip, combinationOperator, gridWidth, gridHeight, gridOffsetX, gridOffsetY, gridVectorX, gridVectorY, decodingContext) {
  const skip = null;
  if (enableSkip) {
    throw new Jbig2Error("skip is not supported");
  }
  if (combinationOperator !== 0) {
    throw new Jbig2Error(`operator "${combinationOperator}" is not supported in halftone region`);
  }
  const regionBitmap = [];
  let i, j, row;
  for (i = 0; i < regionHeight; i++) {
    row = new Uint8Array(regionWidth);
    if (defaultPixelValue) {
      row.fill(defaultPixelValue);
    }
    regionBitmap.push(row);
  }
  const numberOfPatterns = patterns.length;
  const pattern0 = patterns[0];
  const patternWidth = pattern0[0].length,
    patternHeight = pattern0.length;
  const bitsPerValue = log2(numberOfPatterns);
  const at = [];
  if (!mmr) {
    at.push({
      x: template <= 1 ? 3 : 2,
      y: -1
    });
    if (template === 0) {
      at.push({
        x: -3,
        y: -1
      }, {
        x: 2,
        y: -2
      }, {
        x: -2,
        y: -2
      });
    }
  }
  const grayScaleBitPlanes = [];
  let mmrInput, bitmap;
  if (mmr) {
    mmrInput = new Reader(decodingContext.data, decodingContext.start, decodingContext.end);
  }
  for (i = bitsPerValue - 1; i >= 0; i--) {
    if (mmr) {
      bitmap = decodeMMRBitmap(mmrInput, gridWidth, gridHeight, true);
    } else {
      bitmap = decodeBitmap(false, gridWidth, gridHeight, template, false, skip, at, decodingContext);
    }
    grayScaleBitPlanes[i] = bitmap;
  }
  let mg, ng, bit, patternIndex, patternBitmap, x, y, patternRow, regionRow;
  for (mg = 0; mg < gridHeight; mg++) {
    for (ng = 0; ng < gridWidth; ng++) {
      bit = 0;
      patternIndex = 0;
      for (j = bitsPerValue - 1; j >= 0; j--) {
        bit ^= grayScaleBitPlanes[j][mg][ng];
        patternIndex |= bit << j;
      }
      patternBitmap = patterns[patternIndex];
      x = gridOffsetX + mg * gridVectorY + ng * gridVectorX >> 8;
      y = gridOffsetY + mg * gridVectorX - ng * gridVectorY >> 8;
      if (x >= 0 && x + patternWidth <= regionWidth && y >= 0 && y + patternHeight <= regionHeight) {
        for (i = 0; i < patternHeight; i++) {
          regionRow = regionBitmap[y + i];
          patternRow = patternBitmap[i];
          for (j = 0; j < patternWidth; j++) {
            regionRow[x + j] |= patternRow[j];
          }
        }
      } else {
        let regionX, regionY;
        for (i = 0; i < patternHeight; i++) {
          regionY = y + i;
          if (regionY < 0 || regionY >= regionHeight) {
            continue;
          }
          regionRow = regionBitmap[regionY];
          patternRow = patternBitmap[i];
          for (j = 0; j < patternWidth; j++) {
            regionX = x + j;
            if (regionX >= 0 && regionX < regionWidth) {
              regionRow[regionX] |= patternRow[j];
            }
          }
        }
      }
    }
  }
  return regionBitmap;
}
function readSegmentHeader(data, start) {
  const segmentHeader = {};
  segmentHeader.number = readUint32(data, start);
  const flags = data[start + 4];
  const segmentType = flags & 0x3f;
  if (!SegmentTypes[segmentType]) {
    throw new Jbig2Error("invalid segment type: " + segmentType);
  }
  segmentHeader.type = segmentType;
  segmentHeader.typeName = SegmentTypes[segmentType];
  segmentHeader.deferredNonRetain = !!(flags & 0x80);
  const pageAssociationFieldSize = !!(flags & 0x40);
  const referredFlags = data[start + 5];
  let referredToCount = referredFlags >> 5 & 7;
  const retainBits = [referredFlags & 31];
  let position = start + 6;
  if (referredToCount === 7) {
    referredToCount = readUint32(data, position - 1) & 0x1fffffff;
    position += 3;
    let bytes = referredToCount + 8 >> 3;
    retainBits[0] = data[position++];
    while (--bytes > 0) {
      retainBits.push(data[position++]);
    }
  } else if (referredToCount === 5 || referredToCount === 6) {
    throw new Jbig2Error("invalid referred-to flags");
  }
  segmentHeader.retainBits = retainBits;
  let referredToSegmentNumberSize = 4;
  if (segmentHeader.number <= 256) {
    referredToSegmentNumberSize = 1;
  } else if (segmentHeader.number <= 65536) {
    referredToSegmentNumberSize = 2;
  }
  const referredTo = [];
  let i, ii;
  for (i = 0; i < referredToCount; i++) {
    let number;
    if (referredToSegmentNumberSize === 1) {
      number = data[position];
    } else if (referredToSegmentNumberSize === 2) {
      number = readUint16(data, position);
    } else {
      number = readUint32(data, position);
    }
    referredTo.push(number);
    position += referredToSegmentNumberSize;
  }
  segmentHeader.referredTo = referredTo;
  if (!pageAssociationFieldSize) {
    segmentHeader.pageAssociation = data[position++];
  } else {
    segmentHeader.pageAssociation = readUint32(data, position);
    position += 4;
  }
  segmentHeader.length = readUint32(data, position);
  position += 4;
  if (segmentHeader.length === 0xffffffff) {
    if (segmentType === 38) {
      const genericRegionInfo = readRegionSegmentInformation(data, position);
      const genericRegionSegmentFlags = data[position + RegionSegmentInformationFieldLength];
      const genericRegionMmr = !!(genericRegionSegmentFlags & 1);
      const searchPatternLength = 6;
      const searchPattern = new Uint8Array(searchPatternLength);
      if (!genericRegionMmr) {
        searchPattern[0] = 0xff;
        searchPattern[1] = 0xac;
      }
      searchPattern[2] = genericRegionInfo.height >>> 24 & 0xff;
      searchPattern[3] = genericRegionInfo.height >> 16 & 0xff;
      searchPattern[4] = genericRegionInfo.height >> 8 & 0xff;
      searchPattern[5] = genericRegionInfo.height & 0xff;
      for (i = position, ii = data.length; i < ii; i++) {
        let j = 0;
        while (j < searchPatternLength && searchPattern[j] === data[i + j]) {
          j++;
        }
        if (j === searchPatternLength) {
          segmentHeader.length = i + searchPatternLength;
          break;
        }
      }
      if (segmentHeader.length === 0xffffffff) {
        throw new Jbig2Error("segment end was not found");
      }
    } else {
      throw new Jbig2Error("invalid unknown segment length");
    }
  }
  segmentHeader.headerEnd = position;
  return segmentHeader;
}
function readSegments(header, data, start, end) {
  const segments = [];
  let position = start;
  while (position < end) {
    const segmentHeader = readSegmentHeader(data, position);
    position = segmentHeader.headerEnd;
    const segment = {
      header: segmentHeader,
      data
    };
    if (!header.randomAccess) {
      segment.start = position;
      position += segmentHeader.length;
      segment.end = position;
    }
    segments.push(segment);
    if (segmentHeader.type === 51) {
      break;
    }
  }
  if (header.randomAccess) {
    for (let i = 0, ii = segments.length; i < ii; i++) {
      segments[i].start = position;
      position += segments[i].header.length;
      segments[i].end = position;
    }
  }
  return segments;
}
function readRegionSegmentInformation(data, start) {
  return {
    width: readUint32(data, start),
    height: readUint32(data, start + 4),
    x: readUint32(data, start + 8),
    y: readUint32(data, start + 12),
    combinationOperator: data[start + 16] & 7
  };
}
const RegionSegmentInformationFieldLength = 17;
function processSegment(segment, visitor) {
  const header = segment.header;
  const data = segment.data,
    end = segment.end;
  let position = segment.start;
  let args, at, i, atLength;
  switch (header.type) {
    case 0:
      const dictionary = {};
      const dictionaryFlags = readUint16(data, position);
      dictionary.huffman = !!(dictionaryFlags & 1);
      dictionary.refinement = !!(dictionaryFlags & 2);
      dictionary.huffmanDHSelector = dictionaryFlags >> 2 & 3;
      dictionary.huffmanDWSelector = dictionaryFlags >> 4 & 3;
      dictionary.bitmapSizeSelector = dictionaryFlags >> 6 & 1;
      dictionary.aggregationInstancesSelector = dictionaryFlags >> 7 & 1;
      dictionary.bitmapCodingContextUsed = !!(dictionaryFlags & 256);
      dictionary.bitmapCodingContextRetained = !!(dictionaryFlags & 512);
      dictionary.template = dictionaryFlags >> 10 & 3;
      dictionary.refinementTemplate = dictionaryFlags >> 12 & 1;
      position += 2;
      if (!dictionary.huffman) {
        atLength = dictionary.template === 0 ? 4 : 1;
        at = [];
        for (i = 0; i < atLength; i++) {
          at.push({
            x: readInt8(data, position),
            y: readInt8(data, position + 1)
          });
          position += 2;
        }
        dictionary.at = at;
      }
      if (dictionary.refinement && !dictionary.refinementTemplate) {
        at = [];
        for (i = 0; i < 2; i++) {
          at.push({
            x: readInt8(data, position),
            y: readInt8(data, position + 1)
          });
          position += 2;
        }
        dictionary.refinementAt = at;
      }
      dictionary.numberOfExportedSymbols = readUint32(data, position);
      position += 4;
      dictionary.numberOfNewSymbols = readUint32(data, position);
      position += 4;
      args = [dictionary, header.number, header.referredTo, data, position, end];
      break;
    case 6:
    case 7:
      const textRegion = {};
      textRegion.info = readRegionSegmentInformation(data, position);
      position += RegionSegmentInformationFieldLength;
      const textRegionSegmentFlags = readUint16(data, position);
      position += 2;
      textRegion.huffman = !!(textRegionSegmentFlags & 1);
      textRegion.refinement = !!(textRegionSegmentFlags & 2);
      textRegion.logStripSize = textRegionSegmentFlags >> 2 & 3;
      textRegion.stripSize = 1 << textRegion.logStripSize;
      textRegion.referenceCorner = textRegionSegmentFlags >> 4 & 3;
      textRegion.transposed = !!(textRegionSegmentFlags & 64);
      textRegion.combinationOperator = textRegionSegmentFlags >> 7 & 3;
      textRegion.defaultPixelValue = textRegionSegmentFlags >> 9 & 1;
      textRegion.dsOffset = textRegionSegmentFlags << 17 >> 27;
      textRegion.refinementTemplate = textRegionSegmentFlags >> 15 & 1;
      if (textRegion.huffman) {
        const textRegionHuffmanFlags = readUint16(data, position);
        position += 2;
        textRegion.huffmanFS = textRegionHuffmanFlags & 3;
        textRegion.huffmanDS = textRegionHuffmanFlags >> 2 & 3;
        textRegion.huffmanDT = textRegionHuffmanFlags >> 4 & 3;
        textRegion.huffmanRefinementDW = textRegionHuffmanFlags >> 6 & 3;
        textRegion.huffmanRefinementDH = textRegionHuffmanFlags >> 8 & 3;
        textRegion.huffmanRefinementDX = textRegionHuffmanFlags >> 10 & 3;
        textRegion.huffmanRefinementDY = textRegionHuffmanFlags >> 12 & 3;
        textRegion.huffmanRefinementSizeSelector = !!(textRegionHuffmanFlags & 0x4000);
      }
      if (textRegion.refinement && !textRegion.refinementTemplate) {
        at = [];
        for (i = 0; i < 2; i++) {
          at.push({
            x: readInt8(data, position),
            y: readInt8(data, position + 1)
          });
          position += 2;
        }
        textRegion.refinementAt = at;
      }
      textRegion.numberOfSymbolInstances = readUint32(data, position);
      position += 4;
      args = [textRegion, header.referredTo, data, position, end];
      break;
    case 16:
      const patternDictionary = {};
      const patternDictionaryFlags = data[position++];
      patternDictionary.mmr = !!(patternDictionaryFlags & 1);
      patternDictionary.template = patternDictionaryFlags >> 1 & 3;
      patternDictionary.patternWidth = data[position++];
      patternDictionary.patternHeight = data[position++];
      patternDictionary.maxPatternIndex = readUint32(data, position);
      position += 4;
      args = [patternDictionary, header.number, data, position, end];
      break;
    case 22:
    case 23:
      const halftoneRegion = {};
      halftoneRegion.info = readRegionSegmentInformation(data, position);
      position += RegionSegmentInformationFieldLength;
      const halftoneRegionFlags = data[position++];
      halftoneRegion.mmr = !!(halftoneRegionFlags & 1);
      halftoneRegion.template = halftoneRegionFlags >> 1 & 3;
      halftoneRegion.enableSkip = !!(halftoneRegionFlags & 8);
      halftoneRegion.combinationOperator = halftoneRegionFlags >> 4 & 7;
      halftoneRegion.defaultPixelValue = halftoneRegionFlags >> 7 & 1;
      halftoneRegion.gridWidth = readUint32(data, position);
      position += 4;
      halftoneRegion.gridHeight = readUint32(data, position);
      position += 4;
      halftoneRegion.gridOffsetX = readUint32(data, position) & 0xffffffff;
      position += 4;
      halftoneRegion.gridOffsetY = readUint32(data, position) & 0xffffffff;
      position += 4;
      halftoneRegion.gridVectorX = readUint16(data, position);
      position += 2;
      halftoneRegion.gridVectorY = readUint16(data, position);
      position += 2;
      args = [halftoneRegion, header.referredTo, data, position, end];
      break;
    case 38:
    case 39:
      const genericRegion = {};
      genericRegion.info = readRegionSegmentInformation(data, position);
      position += RegionSegmentInformationFieldLength;
      const genericRegionSegmentFlags = data[position++];
      genericRegion.mmr = !!(genericRegionSegmentFlags & 1);
      genericRegion.template = genericRegionSegmentFlags >> 1 & 3;
      genericRegion.prediction = !!(genericRegionSegmentFlags & 8);
      if (!genericRegion.mmr) {
        atLength = genericRegion.template === 0 ? 4 : 1;
        at = [];
        for (i = 0; i < atLength; i++) {
          at.push({
            x: readInt8(data, position),
            y: readInt8(data, position + 1)
          });
          position += 2;
        }
        genericRegion.at = at;
      }
      args = [genericRegion, data, position, end];
      break;
    case 48:
      const pageInfo = {
        width: readUint32(data, position),
        height: readUint32(data, position + 4),
        resolutionX: readUint32(data, position + 8),
        resolutionY: readUint32(data, position + 12)
      };
      if (pageInfo.height === 0xffffffff) {
        delete pageInfo.height;
      }
      const pageSegmentFlags = data[position + 16];
      readUint16(data, position + 17);
      pageInfo.lossless = !!(pageSegmentFlags & 1);
      pageInfo.refinement = !!(pageSegmentFlags & 2);
      pageInfo.defaultPixelValue = pageSegmentFlags >> 2 & 1;
      pageInfo.combinationOperator = pageSegmentFlags >> 3 & 3;
      pageInfo.requiresBuffer = !!(pageSegmentFlags & 32);
      pageInfo.combinationOperatorOverride = !!(pageSegmentFlags & 64);
      args = [pageInfo];
      break;
    case 49:
      break;
    case 50:
      break;
    case 51:
      break;
    case 53:
      args = [header.number, data, position, end];
      break;
    case 62:
      break;
    default:
      throw new Jbig2Error(`segment type ${header.typeName}(${header.type}) is not implemented`);
  }
  const callbackName = "on" + header.typeName;
  if (callbackName in visitor) {
    visitor[callbackName].apply(visitor, args);
  }
}
function processSegments(segments, visitor) {
  for (let i = 0, ii = segments.length; i < ii; i++) {
    processSegment(segments[i], visitor);
  }
}
function parseJbig2Chunks(chunks) {
  const visitor = new SimpleSegmentVisitor();
  for (let i = 0, ii = chunks.length; i < ii; i++) {
    const chunk = chunks[i];
    const segments = readSegments({}, chunk.data, chunk.start, chunk.end);
    processSegments(segments, visitor);
  }
  return visitor.buffer;
}
class SimpleSegmentVisitor {
  onPageInformation(info) {
    this.currentPageInfo = info;
    const rowSize = info.width + 7 >> 3;
    const buffer = new Uint8ClampedArray(rowSize * info.height);
    if (info.defaultPixelValue) {
      buffer.fill(0xff);
    }
    this.buffer = buffer;
  }
  drawBitmap(regionInfo, bitmap) {
    const pageInfo = this.currentPageInfo;
    const width = regionInfo.width,
      height = regionInfo.height;
    const rowSize = pageInfo.width + 7 >> 3;
    const combinationOperator = pageInfo.combinationOperatorOverride ? regionInfo.combinationOperator : pageInfo.combinationOperator;
    const buffer = this.buffer;
    const mask0 = 128 >> (regionInfo.x & 7);
    let offset0 = regionInfo.y * rowSize + (regionInfo.x >> 3);
    let i, j, mask, offset;
    switch (combinationOperator) {
      case 0:
        for (i = 0; i < height; i++) {
          mask = mask0;
          offset = offset0;
          for (j = 0; j < width; j++) {
            if (bitmap[i][j]) {
              buffer[offset] |= mask;
            }
            mask >>= 1;
            if (!mask) {
              mask = 128;
              offset++;
            }
          }
          offset0 += rowSize;
        }
        break;
      case 2:
        for (i = 0; i < height; i++) {
          mask = mask0;
          offset = offset0;
          for (j = 0; j < width; j++) {
            if (bitmap[i][j]) {
              buffer[offset] ^= mask;
            }
            mask >>= 1;
            if (!mask) {
              mask = 128;
              offset++;
            }
          }
          offset0 += rowSize;
        }
        break;
      default:
        throw new Jbig2Error(`operator ${combinationOperator} is not supported`);
    }
  }
  onImmediateGenericRegion(region, data, start, end) {
    const regionInfo = region.info;
    const decodingContext = new DecodingContext(data, start, end);
    const bitmap = decodeBitmap(region.mmr, regionInfo.width, regionInfo.height, region.template, region.prediction, null, region.at, decodingContext);
    this.drawBitmap(regionInfo, bitmap);
  }
  onImmediateLosslessGenericRegion() {
    this.onImmediateGenericRegion(...arguments);
  }
  onSymbolDictionary(dictionary, currentSegment, referredSegments, data, start, end) {
    let huffmanTables, huffmanInput;
    if (dictionary.huffman) {
      huffmanTables = getSymbolDictionaryHuffmanTables(dictionary, referredSegments, this.customTables);
      huffmanInput = new Reader(data, start, end);
    }
    const symbols = this.symbols ||= {};
    const inputSymbols = [];
    for (const referredSegment of referredSegments) {
      const referredSymbols = symbols[referredSegment];
      if (referredSymbols) {
        inputSymbols.push(...referredSymbols);
      }
    }
    const decodingContext = new DecodingContext(data, start, end);
    symbols[currentSegment] = decodeSymbolDictionary(dictionary.huffman, dictionary.refinement, inputSymbols, dictionary.numberOfNewSymbols, dictionary.numberOfExportedSymbols, huffmanTables, dictionary.template, dictionary.at, dictionary.refinementTemplate, dictionary.refinementAt, decodingContext, huffmanInput);
  }
  onImmediateTextRegion(region, referredSegments, data, start, end) {
    const regionInfo = region.info;
    let huffmanTables, huffmanInput;
    const symbols = this.symbols;
    const inputSymbols = [];
    for (const referredSegment of referredSegments) {
      const referredSymbols = symbols[referredSegment];
      if (referredSymbols) {
        inputSymbols.push(...referredSymbols);
      }
    }
    const symbolCodeLength = log2(inputSymbols.length);
    if (region.huffman) {
      huffmanInput = new Reader(data, start, end);
      huffmanTables = getTextRegionHuffmanTables(region, referredSegments, this.customTables, inputSymbols.length, huffmanInput);
    }
    const decodingContext = new DecodingContext(data, start, end);
    const bitmap = decodeTextRegion(region.huffman, region.refinement, regionInfo.width, regionInfo.height, region.defaultPixelValue, region.numberOfSymbolInstances, region.stripSize, inputSymbols, symbolCodeLength, region.transposed, region.dsOffset, region.referenceCorner, region.combinationOperator, huffmanTables, region.refinementTemplate, region.refinementAt, decodingContext, region.logStripSize, huffmanInput);
    this.drawBitmap(regionInfo, bitmap);
  }
  onImmediateLosslessTextRegion() {
    this.onImmediateTextRegion(...arguments);
  }
  onPatternDictionary(dictionary, currentSegment, data, start, end) {
    const patterns = this.patterns ||= {};
    const decodingContext = new DecodingContext(data, start, end);
    patterns[currentSegment] = decodePatternDictionary(dictionary.mmr, dictionary.patternWidth, dictionary.patternHeight, dictionary.maxPatternIndex, dictionary.template, decodingContext);
  }
  onImmediateHalftoneRegion(region, referredSegments, data, start, end) {
    const patterns = this.patterns[referredSegments[0]];
    const regionInfo = region.info;
    const decodingContext = new DecodingContext(data, start, end);
    const bitmap = decodeHalftoneRegion(region.mmr, patterns, region.template, regionInfo.width, regionInfo.height, region.defaultPixelValue, region.enableSkip, region.combinationOperator, region.gridWidth, region.gridHeight, region.gridOffsetX, region.gridOffsetY, region.gridVectorX, region.gridVectorY, decodingContext);
    this.drawBitmap(regionInfo, bitmap);
  }
  onImmediateLosslessHalftoneRegion() {
    this.onImmediateHalftoneRegion(...arguments);
  }
  onTables(currentSegment, data, start, end) {
    const customTables = this.customTables ||= {};
    customTables[currentSegment] = decodeTablesSegment(data, start, end);
  }
}
class HuffmanLine {
  constructor(lineData) {
    if (lineData.length === 2) {
      this.isOOB = true;
      this.rangeLow = 0;
      this.prefixLength = lineData[0];
      this.rangeLength = 0;
      this.prefixCode = lineData[1];
      this.isLowerRange = false;
    } else {
      this.isOOB = false;
      this.rangeLow = lineData[0];
      this.prefixLength = lineData[1];
      this.rangeLength = lineData[2];
      this.prefixCode = lineData[3];
      this.isLowerRange = lineData[4] === "lower";
    }
  }
}
class HuffmanTreeNode {
  constructor(line) {
    this.children = [];
    if (line) {
      this.isLeaf = true;
      this.rangeLength = line.rangeLength;
      this.rangeLow = line.rangeLow;
      this.isLowerRange = line.isLowerRange;
      this.isOOB = line.isOOB;
    } else {
      this.isLeaf = false;
    }
  }
  buildTree(line, shift) {
    const bit = line.prefixCode >> shift & 1;
    if (shift <= 0) {
      this.children[bit] = new HuffmanTreeNode(line);
    } else {
      const node = this.children[bit] ||= new HuffmanTreeNode(null);
      node.buildTree(line, shift - 1);
    }
  }
  decodeNode(reader) {
    if (this.isLeaf) {
      if (this.isOOB) {
        return null;
      }
      const htOffset = reader.readBits(this.rangeLength);
      return this.rangeLow + (this.isLowerRange ? -htOffset : htOffset);
    }
    const node = this.children[reader.readBit()];
    if (!node) {
      throw new Jbig2Error("invalid Huffman data");
    }
    return node.decodeNode(reader);
  }
}
class HuffmanTable {
  constructor(lines, prefixCodesDone) {
    if (!prefixCodesDone) {
      this.assignPrefixCodes(lines);
    }
    this.rootNode = new HuffmanTreeNode(null);
    for (let i = 0, ii = lines.length; i < ii; i++) {
      const line = lines[i];
      if (line.prefixLength > 0) {
        this.rootNode.buildTree(line, line.prefixLength - 1);
      }
    }
  }
  decode(reader) {
    return this.rootNode.decodeNode(reader);
  }
  assignPrefixCodes(lines) {
    const linesLength = lines.length;
    let prefixLengthMax = 0;
    for (let i = 0; i < linesLength; i++) {
      prefixLengthMax = Math.max(prefixLengthMax, lines[i].prefixLength);
    }
    const histogram = new Uint32Array(prefixLengthMax + 1);
    for (let i = 0; i < linesLength; i++) {
      histogram[lines[i].prefixLength]++;
    }
    let currentLength = 1,
      firstCode = 0,
      currentCode,
      currentTemp,
      line;
    histogram[0] = 0;
    while (currentLength <= prefixLengthMax) {
      firstCode = firstCode + histogram[currentLength - 1] << 1;
      currentCode = firstCode;
      currentTemp = 0;
      while (currentTemp < linesLength) {
        line = lines[currentTemp];
        if (line.prefixLength === currentLength) {
          line.prefixCode = currentCode;
          currentCode++;
        }
        currentTemp++;
      }
      currentLength++;
    }
  }
}
function decodeTablesSegment(data, start, end) {
  const flags = data[start];
  const lowestValue = readUint32(data, start + 1) & 0xffffffff;
  const highestValue = readUint32(data, start + 5) & 0xffffffff;
  const reader = new Reader(data, start + 9, end);
  const prefixSizeBits = (flags >> 1 & 7) + 1;
  const rangeSizeBits = (flags >> 4 & 7) + 1;
  const lines = [];
  let prefixLength,
    rangeLength,
    currentRangeLow = lowestValue;
  do {
    prefixLength = reader.readBits(prefixSizeBits);
    rangeLength = reader.readBits(rangeSizeBits);
    lines.push(new HuffmanLine([currentRangeLow, prefixLength, rangeLength, 0]));
    currentRangeLow += 1 << rangeLength;
  } while (currentRangeLow < highestValue);
  prefixLength = reader.readBits(prefixSizeBits);
  lines.push(new HuffmanLine([lowestValue - 1, prefixLength, 32, 0, "lower"]));
  prefixLength = reader.readBits(prefixSizeBits);
  lines.push(new HuffmanLine([highestValue, prefixLength, 32, 0]));
  if (flags & 1) {
    prefixLength = reader.readBits(prefixSizeBits);
    lines.push(new HuffmanLine([prefixLength, 0]));
  }
  return new HuffmanTable(lines, false);
}
const standardTablesCache = {};
function getStandardTable(number) {
  let table = standardTablesCache[number];
  if (table) {
    return table;
  }
  let lines;
  switch (number) {
    case 1:
      lines = [[0, 1, 4, 0x0], [16, 2, 8, 0x2], [272, 3, 16, 0x6], [65808, 3, 32, 0x7]];
      break;
    case 2:
      lines = [[0, 1, 0, 0x0], [1, 2, 0, 0x2], [2, 3, 0, 0x6], [3, 4, 3, 0xe], [11, 5, 6, 0x1e], [75, 6, 32, 0x3e], [6, 0x3f]];
      break;
    case 3:
      lines = [[-256, 8, 8, 0xfe], [0, 1, 0, 0x0], [1, 2, 0, 0x2], [2, 3, 0, 0x6], [3, 4, 3, 0xe], [11, 5, 6, 0x1e], [-257, 8, 32, 0xff, "lower"], [75, 7, 32, 0x7e], [6, 0x3e]];
      break;
    case 4:
      lines = [[1, 1, 0, 0x0], [2, 2, 0, 0x2], [3, 3, 0, 0x6], [4, 4, 3, 0xe], [12, 5, 6, 0x1e], [76, 5, 32, 0x1f]];
      break;
    case 5:
      lines = [[-255, 7, 8, 0x7e], [1, 1, 0, 0x0], [2, 2, 0, 0x2], [3, 3, 0, 0x6], [4, 4, 3, 0xe], [12, 5, 6, 0x1e], [-256, 7, 32, 0x7f, "lower"], [76, 6, 32, 0x3e]];
      break;
    case 6:
      lines = [[-2048, 5, 10, 0x1c], [-1024, 4, 9, 0x8], [-512, 4, 8, 0x9], [-256, 4, 7, 0xa], [-128, 5, 6, 0x1d], [-64, 5, 5, 0x1e], [-32, 4, 5, 0xb], [0, 2, 7, 0x0], [128, 3, 7, 0x2], [256, 3, 8, 0x3], [512, 4, 9, 0xc], [1024, 4, 10, 0xd], [-2049, 6, 32, 0x3e, "lower"], [2048, 6, 32, 0x3f]];
      break;
    case 7:
      lines = [[-1024, 4, 9, 0x8], [-512, 3, 8, 0x0], [-256, 4, 7, 0x9], [-128, 5, 6, 0x1a], [-64, 5, 5, 0x1b], [-32, 4, 5, 0xa], [0, 4, 5, 0xb], [32, 5, 5, 0x1c], [64, 5, 6, 0x1d], [128, 4, 7, 0xc], [256, 3, 8, 0x1], [512, 3, 9, 0x2], [1024, 3, 10, 0x3], [-1025, 5, 32, 0x1e, "lower"], [2048, 5, 32, 0x1f]];
      break;
    case 8:
      lines = [[-15, 8, 3, 0xfc], [-7, 9, 1, 0x1fc], [-5, 8, 1, 0xfd], [-3, 9, 0, 0x1fd], [-2, 7, 0, 0x7c], [-1, 4, 0, 0xa], [0, 2, 1, 0x0], [2, 5, 0, 0x1a], [3, 6, 0, 0x3a], [4, 3, 4, 0x4], [20, 6, 1, 0x3b], [22, 4, 4, 0xb], [38, 4, 5, 0xc], [70, 5, 6, 0x1b], [134, 5, 7, 0x1c], [262, 6, 7, 0x3c], [390, 7, 8, 0x7d], [646, 6, 10, 0x3d], [-16, 9, 32, 0x1fe, "lower"], [1670, 9, 32, 0x1ff], [2, 0x1]];
      break;
    case 9:
      lines = [[-31, 8, 4, 0xfc], [-15, 9, 2, 0x1fc], [-11, 8, 2, 0xfd], [-7, 9, 1, 0x1fd], [-5, 7, 1, 0x7c], [-3, 4, 1, 0xa], [-1, 3, 1, 0x2], [1, 3, 1, 0x3], [3, 5, 1, 0x1a], [5, 6, 1, 0x3a], [7, 3, 5, 0x4], [39, 6, 2, 0x3b], [43, 4, 5, 0xb], [75, 4, 6, 0xc], [139, 5, 7, 0x1b], [267, 5, 8, 0x1c], [523, 6, 8, 0x3c], [779, 7, 9, 0x7d], [1291, 6, 11, 0x3d], [-32, 9, 32, 0x1fe, "lower"], [3339, 9, 32, 0x1ff], [2, 0x0]];
      break;
    case 10:
      lines = [[-21, 7, 4, 0x7a], [-5, 8, 0, 0xfc], [-4, 7, 0, 0x7b], [-3, 5, 0, 0x18], [-2, 2, 2, 0x0], [2, 5, 0, 0x19], [3, 6, 0, 0x36], [4, 7, 0, 0x7c], [5, 8, 0, 0xfd], [6, 2, 6, 0x1], [70, 5, 5, 0x1a], [102, 6, 5, 0x37], [134, 6, 6, 0x38], [198, 6, 7, 0x39], [326, 6, 8, 0x3a], [582, 6, 9, 0x3b], [1094, 6, 10, 0x3c], [2118, 7, 11, 0x7d], [-22, 8, 32, 0xfe, "lower"], [4166, 8, 32, 0xff], [2, 0x2]];
      break;
    case 11:
      lines = [[1, 1, 0, 0x0], [2, 2, 1, 0x2], [4, 4, 0, 0xc], [5, 4, 1, 0xd], [7, 5, 1, 0x1c], [9, 5, 2, 0x1d], [13, 6, 2, 0x3c], [17, 7, 2, 0x7a], [21, 7, 3, 0x7b], [29, 7, 4, 0x7c], [45, 7, 5, 0x7d], [77, 7, 6, 0x7e], [141, 7, 32, 0x7f]];
      break;
    case 12:
      lines = [[1, 1, 0, 0x0], [2, 2, 0, 0x2], [3, 3, 1, 0x6], [5, 5, 0, 0x1c], [6, 5, 1, 0x1d], [8, 6, 1, 0x3c], [10, 7, 0, 0x7a], [11, 7, 1, 0x7b], [13, 7, 2, 0x7c], [17, 7, 3, 0x7d], [25, 7, 4, 0x7e], [41, 8, 5, 0xfe], [73, 8, 32, 0xff]];
      break;
    case 13:
      lines = [[1, 1, 0, 0x0], [2, 3, 0, 0x4], [3, 4, 0, 0xc], [4, 5, 0, 0x1c], [5, 4, 1, 0xd], [7, 3, 3, 0x5], [15, 6, 1, 0x3a], [17, 6, 2, 0x3b], [21, 6, 3, 0x3c], [29, 6, 4, 0x3d], [45, 6, 5, 0x3e], [77, 7, 6, 0x7e], [141, 7, 32, 0x7f]];
      break;
    case 14:
      lines = [[-2, 3, 0, 0x4], [-1, 3, 0, 0x5], [0, 1, 0, 0x0], [1, 3, 0, 0x6], [2, 3, 0, 0x7]];
      break;
    case 15:
      lines = [[-24, 7, 4, 0x7c], [-8, 6, 2, 0x3c], [-4, 5, 1, 0x1c], [-2, 4, 0, 0xc], [-1, 3, 0, 0x4], [0, 1, 0, 0x0], [1, 3, 0, 0x5], [2, 4, 0, 0xd], [3, 5, 1, 0x1d], [5, 6, 2, 0x3d], [9, 7, 4, 0x7d], [-25, 7, 32, 0x7e, "lower"], [25, 7, 32, 0x7f]];
      break;
    default:
      throw new Jbig2Error(`standard table B.${number} does not exist`);
  }
  for (let i = 0, ii = lines.length; i < ii; i++) {
    lines[i] = new HuffmanLine(lines[i]);
  }
  table = new HuffmanTable(lines, true);
  standardTablesCache[number] = table;
  return table;
}
class Reader {
  constructor(data, start, end) {
    this.data = data;
    this.start = start;
    this.end = end;
    this.position = start;
    this.shift = -1;
    this.currentByte = 0;
  }
  readBit() {
    if (this.shift < 0) {
      if (this.position >= this.end) {
        throw new Jbig2Error("end of data while reading bit");
      }
      this.currentByte = this.data[this.position++];
      this.shift = 7;
    }
    const bit = this.currentByte >> this.shift & 1;
    this.shift--;
    return bit;
  }
  readBits(numBits) {
    let result = 0,
      i;
    for (i = numBits - 1; i >= 0; i--) {
      result |= this.readBit() << i;
    }
    return result;
  }
  byteAlign() {
    this.shift = -1;
  }
  next() {
    if (this.position >= this.end) {
      return -1;
    }
    return this.data[this.position++];
  }
}
function getCustomHuffmanTable(index, referredTo, customTables) {
  let currentIndex = 0;
  for (let i = 0, ii = referredTo.length; i < ii; i++) {
    const table = customTables[referredTo[i]];
    if (table) {
      if (index === currentIndex) {
        return table;
      }
      currentIndex++;
    }
  }
  throw new Jbig2Error("can't find custom Huffman table");
}
function getTextRegionHuffmanTables(textRegion, referredTo, customTables, numberOfSymbols, reader) {
  const codes = [];
  for (let i = 0; i <= 34; i++) {
    const codeLength = reader.readBits(4);
    codes.push(new HuffmanLine([i, codeLength, 0, 0]));
  }
  const runCodesTable = new HuffmanTable(codes, false);
  codes.length = 0;
  for (let i = 0; i < numberOfSymbols;) {
    const codeLength = runCodesTable.decode(reader);
    if (codeLength >= 32) {
      let repeatedLength, numberOfRepeats, j;
      switch (codeLength) {
        case 32:
          if (i === 0) {
            throw new Jbig2Error("no previous value in symbol ID table");
          }
          numberOfRepeats = reader.readBits(2) + 3;
          repeatedLength = codes[i - 1].prefixLength;
          break;
        case 33:
          numberOfRepeats = reader.readBits(3) + 3;
          repeatedLength = 0;
          break;
        case 34:
          numberOfRepeats = reader.readBits(7) + 11;
          repeatedLength = 0;
          break;
        default:
          throw new Jbig2Error("invalid code length in symbol ID table");
      }
      for (j = 0; j < numberOfRepeats; j++) {
        codes.push(new HuffmanLine([i, repeatedLength, 0, 0]));
        i++;
      }
    } else {
      codes.push(new HuffmanLine([i, codeLength, 0, 0]));
      i++;
    }
  }
  reader.byteAlign();
  const symbolIDTable = new HuffmanTable(codes, false);
  let customIndex = 0,
    tableFirstS,
    tableDeltaS,
    tableDeltaT;
  switch (textRegion.huffmanFS) {
    case 0:
    case 1:
      tableFirstS = getStandardTable(textRegion.huffmanFS + 6);
      break;
    case 3:
      tableFirstS = getCustomHuffmanTable(customIndex, referredTo, customTables);
      customIndex++;
      break;
    default:
      throw new Jbig2Error("invalid Huffman FS selector");
  }
  switch (textRegion.huffmanDS) {
    case 0:
    case 1:
    case 2:
      tableDeltaS = getStandardTable(textRegion.huffmanDS + 8);
      break;
    case 3:
      tableDeltaS = getCustomHuffmanTable(customIndex, referredTo, customTables);
      customIndex++;
      break;
    default:
      throw new Jbig2Error("invalid Huffman DS selector");
  }
  switch (textRegion.huffmanDT) {
    case 0:
    case 1:
    case 2:
      tableDeltaT = getStandardTable(textRegion.huffmanDT + 11);
      break;
    case 3:
      tableDeltaT = getCustomHuffmanTable(customIndex, referredTo, customTables);
      customIndex++;
      break;
    default:
      throw new Jbig2Error("invalid Huffman DT selector");
  }
  if (textRegion.refinement) {
    throw new Jbig2Error("refinement with Huffman is not supported");
  }
  return {
    symbolIDTable,
    tableFirstS,
    tableDeltaS,
    tableDeltaT
  };
}
function getSymbolDictionaryHuffmanTables(dictionary, referredTo, customTables) {
  let customIndex = 0,
    tableDeltaHeight,
    tableDeltaWidth;
  switch (dictionary.huffmanDHSelector) {
    case 0:
    case 1:
      tableDeltaHeight = getStandardTable(dictionary.huffmanDHSelector + 4);
      break;
    case 3:
      tableDeltaHeight = getCustomHuffmanTable(customIndex, referredTo, customTables);
      customIndex++;
      break;
    default:
      throw new Jbig2Error("invalid Huffman DH selector");
  }
  switch (dictionary.huffmanDWSelector) {
    case 0:
    case 1:
      tableDeltaWidth = getStandardTable(dictionary.huffmanDWSelector + 2);
      break;
    case 3:
      tableDeltaWidth = getCustomHuffmanTable(customIndex, referredTo, customTables);
      customIndex++;
      break;
    default:
      throw new Jbig2Error("invalid Huffman DW selector");
  }
  let tableBitmapSize, tableAggregateInstances;
  if (dictionary.bitmapSizeSelector) {
    tableBitmapSize = getCustomHuffmanTable(customIndex, referredTo, customTables);
    customIndex++;
  } else {
    tableBitmapSize = getStandardTable(1);
  }
  if (dictionary.aggregationInstancesSelector) {
    tableAggregateInstances = getCustomHuffmanTable(customIndex, referredTo, customTables);
  } else {
    tableAggregateInstances = getStandardTable(1);
  }
  return {
    tableDeltaHeight,
    tableDeltaWidth,
    tableBitmapSize,
    tableAggregateInstances
  };
}
function readUncompressedBitmap(reader, width, height) {
  const bitmap = [];
  for (let y = 0; y < height; y++) {
    const row = new Uint8Array(width);
    bitmap.push(row);
    for (let x = 0; x < width; x++) {
      row[x] = reader.readBit();
    }
    reader.byteAlign();
  }
  return bitmap;
}
function decodeMMRBitmap(input, width, height, endOfBlock) {
  const params = {
    K: -1,
    Columns: width,
    Rows: height,
    BlackIs1: true,
    EndOfBlock: endOfBlock
  };
  const decoder = new CCITTFaxDecoder(input, params);
  const bitmap = [];
  let currentByte,
    eof = false;
  for (let y = 0; y < height; y++) {
    const row = new Uint8Array(width);
    bitmap.push(row);
    let shift = -1;
    for (let x = 0; x < width; x++) {
      if (shift < 0) {
        currentByte = decoder.readNextChar();
        if (currentByte === -1) {
          currentByte = 0;
          eof = true;
        }
        shift = 7;
      }
      row[x] = currentByte >> shift & 1;
      shift--;
    }
  }
  if (endOfBlock && !eof) {
    const lookForEOFLimit = 5;
    for (let i = 0; i < lookForEOFLimit; i++) {
      if (decoder.readNextChar() === -1) {
        break;
      }
    }
  }
  return bitmap;
}
class Jbig2Image {
  parseChunks(chunks) {
    return parseJbig2Chunks(chunks);
  }
  parse(data) {
    throw new Error("Not implemented: Jbig2Image.parse");
  }
}

;// ./src/core/jbig2_ccittFax_wasm.js




class JBig2CCITTFaxWasmImage {
  static #buffer = null;
  static #handler = null;
  static #modulePromise = null;
  static #useWasm = true;
  static #useWorkerFetch = true;
  static #wasmUrl = null;
  static setOptions({
    handler,
    useWasm,
    useWorkerFetch,
    wasmUrl
  }) {
    this.#useWasm = useWasm;
    this.#useWorkerFetch = useWorkerFetch;
    this.#wasmUrl = wasmUrl;
    if (!useWorkerFetch) {
      this.#handler = handler;
    }
  }
  static async #instantiateWasm(fallbackCallback, imports, successCallback) {
    const filename = "jbig2.wasm";
    try {
      if (!this.#buffer) {
        if (this.#useWorkerFetch) {
          this.#buffer = await fetchBinaryData(`${this.#wasmUrl}${filename}`);
        } else {
          this.#buffer = await this.#handler.sendWithPromise("FetchBinaryData", {
            kind: "wasmUrl",
            filename
          });
        }
      }
      const results = await WebAssembly.instantiate(this.#buffer, imports);
      return successCallback(results.instance);
    } catch (reason) {
      warn(`JBig2Image#instantiateWasm: ${reason}`);
      return fallbackCallback(null);
    } finally {
      this.#handler = null;
    }
  }
  static async decode(bytes, width, height, globals, CCITTOptions) {
    if (!this.#modulePromise) {
      const {
        promise,
        resolve
      } = Promise.withResolvers();
      const promises = [promise];
      if (this.#useWasm) {
        promises.push(jbig2({
          warn: warn,
          instantiateWasm: this.#instantiateWasm.bind(this, resolve)
        }));
      } else {
        resolve(null);
      }
      this.#modulePromise = Promise.race(promises);
    }
    const module = await this.#modulePromise;
    if (!module) {
      throw new Jbig2Error("JBig2 failed to initialize");
    }
    let ptr, globalsPtr;
    try {
      const size = bytes.length;
      ptr = module._malloc(size);
      module.writeArrayToMemory(bytes, ptr);
      if (CCITTOptions) {
        module._ccitt_decode(ptr, size, width, height, CCITTOptions.K, CCITTOptions.EndOfLine ? 1 : 0, CCITTOptions.EncodedByteAlign ? 1 : 0, CCITTOptions.BlackIs1 ? 1 : 0, CCITTOptions.Columns, CCITTOptions.Rows);
      } else {
        const globalsSize = globals ? globals.length : 0;
        if (globalsSize > 0) {
          globalsPtr = module._malloc(globalsSize);
          module.writeArrayToMemory(globals, globalsPtr);
        }
        module._jbig2_decode(ptr, size, width, height, globalsPtr, globalsSize);
      }
      if (!module.imageData) {
        throw new Jbig2Error("Unknown error");
      }
      const {
        imageData
      } = module;
      module.imageData = null;
      return imageData;
    } finally {
      if (ptr) {
        module._free(ptr);
      }
      if (globalsPtr) {
        module._free(globalsPtr);
      }
    }
  }
  static cleanup() {
    this.#modulePromise = null;
  }
}

;// ./src/core/decode_stream.js


const emptyBuffer = new Uint8Array(0);
class DecodeStream extends BaseStream {
  constructor(maybeMinBufferLength) {
    super();
    this._rawMinBufferLength = maybeMinBufferLength || 0;
    this.pos = 0;
    this.bufferLength = 0;
    this.eof = false;
    this.buffer = emptyBuffer;
    this.minBufferLength = 512;
    if (maybeMinBufferLength) {
      while (this.minBufferLength < maybeMinBufferLength) {
        this.minBufferLength *= 2;
      }
    }
  }
  get isEmpty() {
    while (!this.eof && this.bufferLength === 0) {
      this.readBlock();
    }
    return this.bufferLength === 0;
  }
  ensureBuffer(requested) {
    const buffer = this.buffer;
    if (requested <= buffer.byteLength) {
      return buffer;
    }
    let size = this.minBufferLength;
    while (size < requested) {
      size *= 2;
    }
    const buffer2 = new Uint8Array(size);
    buffer2.set(buffer);
    return this.buffer = buffer2;
  }
  getByte() {
    const pos = this.pos;
    while (this.bufferLength <= pos) {
      if (this.eof) {
        return -1;
      }
      this.readBlock();
    }
    return this.buffer[this.pos++];
  }
  getBytes(length, decoderOptions = null) {
    const pos = this.pos;
    let end;
    if (length) {
      this.ensureBuffer(pos + length);
      end = pos + length;
      while (!this.eof && this.bufferLength < end) {
        this.readBlock(decoderOptions);
      }
      const bufEnd = this.bufferLength;
      if (end > bufEnd) {
        end = bufEnd;
      }
    } else {
      while (!this.eof) {
        this.readBlock(decoderOptions);
      }
      end = this.bufferLength;
    }
    this.pos = end;
    return this.buffer.subarray(pos, end);
  }
  async getImageData(length, decoderOptions) {
    if (!this.canAsyncDecodeImageFromBuffer) {
      if (this.isAsyncDecoder) {
        return this.decodeImage(null, length, decoderOptions);
      }
      return this.getBytes(length, decoderOptions);
    }
    const data = await this.stream.asyncGetBytes();
    return this.decodeImage(data, length, decoderOptions);
  }
  async asyncGetBytesFromDecompressionStream(name) {
    this.stream.reset();
    const bytes = this.stream.isAsync ? await this.stream.asyncGetBytes() : this.stream.getBytes();
    try {
      const {
        readable,
        writable
      } = new DecompressionStream(name);
      const writer = writable.getWriter();
      await writer.ready;
      writer.write(bytes).then(async () => {
        await writer.ready;
        await writer.close();
      }).catch(() => {});
      const chunks = [];
      let totalLength = 0;
      for await (const chunk of readable) {
        chunks.push(chunk);
        totalLength += chunk.byteLength;
      }
      const data = new Uint8Array(totalLength);
      let offset = 0;
      for (const chunk of chunks) {
        data.set(chunk, offset);
        offset += chunk.byteLength;
      }
      return {
        decompressed: data,
        compressed: bytes
      };
    } catch {
      return {
        decompressed: null,
        compressed: bytes
      };
    }
  }
  reset() {
    this.pos = 0;
  }
  makeSubStream(start, length, dict = null) {
    if (length === undefined) {
      while (!this.eof) {
        this.readBlock();
      }
    } else {
      const end = start + length;
      while (this.bufferLength <= end && !this.eof) {
        this.readBlock();
      }
    }
    return new Stream(this.buffer, start, length, dict);
  }
  getBaseStreams() {
    return this.stream ? this.stream.getBaseStreams() : null;
  }
  clone() {
    while (!this.eof) {
      this.readBlock();
    }
    return new Stream(this.buffer, this.start, this.end - this.start, this.dict.clone());
  }
}
class StreamsSequenceStream extends DecodeStream {
  constructor(streams, onError = null) {
    streams = streams.filter(s => s instanceof BaseStream && !s.isImageStream);
    let maybeLength = 0;
    for (const stream of streams) {
      maybeLength += stream instanceof DecodeStream ? stream._rawMinBufferLength : stream.length;
    }
    super(maybeLength);
    this.streams = streams;
    this._onError = onError;
  }
  readBlock() {
    const streams = this.streams;
    if (streams.length === 0) {
      this.eof = true;
      return;
    }
    const stream = streams.shift();
    let chunk;
    try {
      chunk = stream.getBytes();
    } catch (reason) {
      if (this._onError) {
        this._onError(reason, stream.dict?.objId);
        return;
      }
      throw reason;
    }
    const bufferLength = this.bufferLength;
    const newLength = bufferLength + chunk.length;
    const buffer = this.ensureBuffer(newLength);
    buffer.set(chunk, bufferLength);
    this.bufferLength = newLength;
  }
  getBaseStreams() {
    const baseStreamsBuf = [];
    for (const stream of this.streams) {
      const baseStreams = stream.getBaseStreams();
      if (baseStreams) {
        baseStreamsBuf.push(...baseStreams);
      }
    }
    return baseStreamsBuf.length > 0 ? baseStreamsBuf : null;
  }
}

;// ./src/core/colorspace_utils.js





class ColorSpaceUtils {
  static parse({
    cs,
    xref,
    resources = null,
    pdfFunctionFactory,
    globalColorSpaceCache,
    localColorSpaceCache,
    asyncIfNotCached = false
  }) {
    const options = {
      xref,
      resources,
      pdfFunctionFactory,
      globalColorSpaceCache,
      localColorSpaceCache
    };
    let csName, csRef, parsedCS;
    if (cs instanceof Ref) {
      csRef = cs;
      const cachedCS = globalColorSpaceCache.getByRef(csRef) || localColorSpaceCache.getByRef(csRef);
      if (cachedCS) {
        return cachedCS;
      }
      cs = xref.fetch(cs);
    }
    if (cs instanceof Name) {
      csName = cs.name;
      const cachedCS = localColorSpaceCache.getByName(csName);
      if (cachedCS) {
        return cachedCS;
      }
    }
    try {
      parsedCS = this.#parse(cs, options);
    } catch (ex) {
      if (asyncIfNotCached && !(ex instanceof MissingDataException)) {
        return Promise.reject(ex);
      }
      throw ex;
    }
    if (csName || csRef) {
      localColorSpaceCache.set(csName, csRef, parsedCS);
      if (csRef) {
        globalColorSpaceCache.set(null, csRef, parsedCS);
      }
    }
    return asyncIfNotCached ? Promise.resolve(parsedCS) : parsedCS;
  }
  static #subParse(cs, options) {
    const {
      globalColorSpaceCache
    } = options;
    let csRef;
    if (cs instanceof Ref) {
      csRef = cs;
      const cachedCS = globalColorSpaceCache.getByRef(csRef);
      if (cachedCS) {
        return cachedCS;
      }
    }
    const parsedCS = this.#parse(cs, options);
    if (csRef) {
      globalColorSpaceCache.set(null, csRef, parsedCS);
    }
    return parsedCS;
  }
  static #parse(cs, options) {
    const {
      xref,
      resources,
      pdfFunctionFactory,
      globalColorSpaceCache
    } = options;
    cs = xref.fetchIfRef(cs);
    if (cs instanceof Name) {
      switch (cs.name) {
        case "G":
        case "DeviceGray":
          return this.gray;
        case "RGB":
        case "DeviceRGB":
          return this.rgb;
        case "DeviceRGBA":
          return this.rgba;
        case "CMYK":
        case "DeviceCMYK":
          return this.cmyk;
        case "Pattern":
          return new PatternCS(null);
        default:
          if (resources instanceof Dict) {
            const colorSpaces = resources.get("ColorSpace");
            if (colorSpaces instanceof Dict) {
              const resourcesCS = colorSpaces.get(cs.name);
              if (resourcesCS) {
                if (resourcesCS instanceof Name) {
                  return this.#parse(resourcesCS, options);
                }
                cs = resourcesCS;
                break;
              }
            }
          }
          warn(`Unrecognized ColorSpace: ${cs.name}`);
          return this.gray;
      }
    }
    if (Array.isArray(cs)) {
      const mode = xref.fetchIfRef(cs[0]).name;
      let params, numComps, baseCS, whitePoint, blackPoint, gamma;
      switch (mode) {
        case "G":
        case "DeviceGray":
          return this.gray;
        case "RGB":
        case "DeviceRGB":
          return this.rgb;
        case "CMYK":
        case "DeviceCMYK":
          return this.cmyk;
        case "CalGray":
          params = xref.fetchIfRef(cs[1]);
          whitePoint = params.getArray("WhitePoint");
          blackPoint = params.getArray("BlackPoint");
          gamma = params.get("Gamma");
          return new CalGrayCS(whitePoint, blackPoint, gamma);
        case "CalRGB":
          params = xref.fetchIfRef(cs[1]);
          whitePoint = params.getArray("WhitePoint");
          blackPoint = params.getArray("BlackPoint");
          gamma = params.getArray("Gamma");
          const matrix = params.getArray("Matrix");
          return new CalRGBCS(whitePoint, blackPoint, gamma, matrix);
        case "ICCBased":
          const isRef = cs[1] instanceof Ref;
          if (isRef) {
            const cachedCS = globalColorSpaceCache.getByRef(cs[1]);
            if (cachedCS) {
              return cachedCS;
            }
          }
          const stream = xref.fetchIfRef(cs[1]);
          const dict = stream.dict;
          numComps = dict.get("N");
          if (IccColorSpace.isUsable) {
            try {
              const iccCS = new IccColorSpace(stream.getBytes(), "ICCBased", numComps);
              if (isRef) {
                globalColorSpaceCache.set(null, cs[1], iccCS);
              }
              return iccCS;
            } catch (ex) {
              if (ex instanceof MissingDataException) {
                throw ex;
              }
              warn(`ICCBased color space (${cs[1]}): "${ex}".`);
            }
          }
          const altRaw = dict.getRaw("Alternate");
          if (altRaw) {
            const altCS = this.#subParse(altRaw, options);
            if (altCS.numComps === numComps) {
              return altCS;
            }
            warn("ICCBased color space: Ignoring incorrect /Alternate entry.");
          }
          if (numComps === 1) {
            return this.gray;
          } else if (numComps === 3) {
            return this.rgb;
          } else if (numComps === 4) {
            return this.cmyk;
          }
          break;
        case "Pattern":
          baseCS = cs[1] || null;
          if (baseCS) {
            baseCS = this.#subParse(baseCS, options);
          }
          return new PatternCS(baseCS);
        case "I":
        case "Indexed":
          baseCS = this.#subParse(cs[1], options);
          const hiVal = MathClamp(xref.fetchIfRef(cs[2]), 0, 255);
          const lookup = xref.fetchIfRef(cs[3]);
          return new IndexedCS(baseCS, hiVal, lookup);
        case "Separation":
        case "DeviceN":
          const name = xref.fetchIfRef(cs[1]);
          numComps = Array.isArray(name) ? name.length : 1;
          baseCS = this.#subParse(cs[2], options);
          const tintFn = pdfFunctionFactory.create(cs[3]);
          return new AlternateCS(numComps, baseCS, tintFn);
        case "Lab":
          params = xref.fetchIfRef(cs[1]);
          whitePoint = params.getArray("WhitePoint");
          blackPoint = params.getArray("BlackPoint");
          const range = params.getArray("Range");
          return new LabCS(whitePoint, blackPoint, range);
        default:
          warn(`Unimplemented ColorSpace object: ${mode}`);
          return this.gray;
      }
    }
    warn(`Unrecognized ColorSpace object: ${cs}`);
    return this.gray;
  }
  static get gray() {
    return shadow(this, "gray", new DeviceGrayCS());
  }
  static get rgb() {
    return shadow(this, "rgb", new DeviceRgbCS());
  }
  static get rgba() {
    return shadow(this, "rgba", new DeviceRgbaCS());
  }
  static get cmyk() {
    if (CmykICCBasedCS.isUsable) {
      try {
        return shadow(this, "cmyk", new CmykICCBasedCS());
      } catch {
        warn("CMYK fallback: DeviceCMYK");
      }
    }
    return shadow(this, "cmyk", new DeviceCmykCS());
  }
}

;// ./src/core/jpg.js





class JpegError extends BaseException {
  constructor(msg) {
    super(msg, "JpegError");
  }
}
class DNLMarkerError extends BaseException {
  constructor(message, scanLines) {
    super(message, "DNLMarkerError");
    this.scanLines = scanLines;
  }
}
class EOIMarkerError extends BaseException {
  constructor(msg) {
    super(msg, "EOIMarkerError");
  }
}
const dctZigZag = new Uint8Array([0, 1, 8, 16, 9, 2, 3, 10, 17, 24, 32, 25, 18, 11, 4, 5, 12, 19, 26, 33, 40, 48, 41, 34, 27, 20, 13, 6, 7, 14, 21, 28, 35, 42, 49, 56, 57, 50, 43, 36, 29, 22, 15, 23, 30, 37, 44, 51, 58, 59, 52, 45, 38, 31, 39, 46, 53, 60, 61, 54, 47, 55, 62, 63]);
const dctCos1 = 4017;
const dctSin1 = 799;
const dctCos3 = 3406;
const dctSin3 = 2276;
const dctCos6 = 1567;
const dctSin6 = 3784;
const dctSqrt2 = 5793;
const dctSqrt1d2 = 2896;
function buildHuffmanTable(codeLengths, values) {
  let k = 0,
    i,
    j,
    length = 16;
  while (length > 0 && !codeLengths[length - 1]) {
    length--;
  }
  const code = [{
    children: [],
    index: 0
  }];
  let p = code[0],
    q;
  for (i = 0; i < length; i++) {
    for (j = 0; j < codeLengths[i]; j++) {
      p = code.pop();
      p.children[p.index] = values[k];
      while (p.index > 0) {
        p = code.pop();
      }
      p.index++;
      code.push(p);
      while (code.length <= i) {
        code.push(q = {
          children: [],
          index: 0
        });
        p.children[p.index] = q.children;
        p = q;
      }
      k++;
    }
    if (i + 1 < length) {
      code.push(q = {
        children: [],
        index: 0
      });
      p.children[p.index] = q.children;
      p = q;
    }
  }
  return code[0].children;
}
function getBlockBufferOffset(component, row, col) {
  return 64 * ((component.blocksPerLine + 1) * row + col);
}
function decodeScan(data, offset, frame, components, resetInterval, spectralStart, spectralEnd, successivePrev, successive, parseDNLMarker = false) {
  const mcusPerLine = frame.mcusPerLine;
  const progressive = frame.progressive;
  const startOffset = offset;
  let bitsData = 0,
    bitsCount = 0;
  function readBit() {
    if (bitsCount > 0) {
      bitsCount--;
      return bitsData >> bitsCount & 1;
    }
    bitsData = data[offset++];
    if (bitsData === 0xff) {
      const nextByte = data[offset++];
      if (nextByte) {
        if (nextByte === 0xdc && parseDNLMarker) {
          offset += 2;
          const scanLines = readUint16(data, offset);
          offset += 2;
          if (scanLines > 0 && scanLines !== frame.scanLines) {
            throw new DNLMarkerError("Found DNL marker (0xFFDC) while parsing scan data", scanLines);
          }
        } else if (nextByte === 0xd9) {
          if (parseDNLMarker) {
            const maybeScanLines = blockRow * (frame.precision === 8 ? 8 : 0);
            if (maybeScanLines > 0 && Math.round(frame.scanLines / maybeScanLines) >= 5) {
              throw new DNLMarkerError("Found EOI marker (0xFFD9) while parsing scan data, " + "possibly caused by incorrect `scanLines` parameter", maybeScanLines);
            }
          }
          throw new EOIMarkerError("Found EOI marker (0xFFD9) while parsing scan data");
        }
        throw new JpegError(`unexpected marker ${(bitsData << 8 | nextByte).toString(16)}`);
      }
    }
    bitsCount = 7;
    return bitsData >>> 7;
  }
  function decodeHuffman(tree) {
    let node = tree;
    while (true) {
      node = node[readBit()];
      switch (typeof node) {
        case "number":
          return node;
        case "object":
          continue;
      }
      throw new JpegError("invalid huffman sequence");
    }
  }
  function receive(length) {
    let n = 0;
    while (length > 0) {
      n = n << 1 | readBit();
      length--;
    }
    return n;
  }
  function receiveAndExtend(length) {
    if (length === 1) {
      return readBit() === 1 ? 1 : -1;
    }
    const n = receive(length);
    if (n >= 1 << length - 1) {
      return n;
    }
    return n + (-1 << length) + 1;
  }
  function decodeBaseline(component, blockOffset) {
    const t = decodeHuffman(component.huffmanTableDC);
    const diff = t === 0 ? 0 : receiveAndExtend(t);
    component.blockData[blockOffset] = component.pred += diff;
    let k = 1;
    while (k < 64) {
      const rs = decodeHuffman(component.huffmanTableAC);
      const s = rs & 15,
        r = rs >> 4;
      if (s === 0) {
        if (r < 15) {
          break;
        }
        k += 16;
        continue;
      }
      k += r;
      const z = dctZigZag[k];
      component.blockData[blockOffset + z] = receiveAndExtend(s);
      k++;
    }
  }
  function decodeDCFirst(component, blockOffset) {
    const t = decodeHuffman(component.huffmanTableDC);
    const diff = t === 0 ? 0 : receiveAndExtend(t) << successive;
    component.blockData[blockOffset] = component.pred += diff;
  }
  function decodeDCSuccessive(component, blockOffset) {
    component.blockData[blockOffset] |= readBit() << successive;
  }
  let eobrun = 0;
  function decodeACFirst(component, blockOffset) {
    if (eobrun > 0) {
      eobrun--;
      return;
    }
    let k = spectralStart;
    const e = spectralEnd;
    while (k <= e) {
      const rs = decodeHuffman(component.huffmanTableAC);
      const s = rs & 15,
        r = rs >> 4;
      if (s === 0) {
        if (r < 15) {
          eobrun = receive(r) + (1 << r) - 1;
          break;
        }
        k += 16;
        continue;
      }
      k += r;
      const z = dctZigZag[k];
      component.blockData[blockOffset + z] = receiveAndExtend(s) * (1 << successive);
      k++;
    }
  }
  let successiveACState = 0,
    successiveACNextValue;
  function decodeACSuccessive(component, blockOffset) {
    let k = spectralStart;
    const e = spectralEnd;
    let r = 0;
    let s;
    let rs;
    while (k <= e) {
      const offsetZ = blockOffset + dctZigZag[k];
      const sign = component.blockData[offsetZ] < 0 ? -1 : 1;
      switch (successiveACState) {
        case 0:
          rs = decodeHuffman(component.huffmanTableAC);
          s = rs & 15;
          r = rs >> 4;
          if (s === 0) {
            if (r < 15) {
              eobrun = receive(r) + (1 << r);
              successiveACState = 4;
            } else {
              r = 16;
              successiveACState = 1;
            }
          } else {
            if (s !== 1) {
              throw new JpegError("invalid ACn encoding");
            }
            successiveACNextValue = receiveAndExtend(s);
            successiveACState = r ? 2 : 3;
          }
          continue;
        case 1:
        case 2:
          if (component.blockData[offsetZ]) {
            component.blockData[offsetZ] += sign * (readBit() << successive);
          } else {
            r--;
            if (r === 0) {
              successiveACState = successiveACState === 2 ? 3 : 0;
            }
          }
          break;
        case 3:
          if (component.blockData[offsetZ]) {
            component.blockData[offsetZ] += sign * (readBit() << successive);
          } else {
            component.blockData[offsetZ] = successiveACNextValue << successive;
            successiveACState = 0;
          }
          break;
        case 4:
          if (component.blockData[offsetZ]) {
            component.blockData[offsetZ] += sign * (readBit() << successive);
          }
          break;
      }
      k++;
    }
    if (successiveACState === 4) {
      eobrun--;
      if (eobrun === 0) {
        successiveACState = 0;
      }
    }
  }
  let blockRow = 0;
  function decodeMcu(component, decode, mcu, row, col) {
    const mcuRow = mcu / mcusPerLine | 0;
    const mcuCol = mcu % mcusPerLine;
    blockRow = mcuRow * component.v + row;
    const blockCol = mcuCol * component.h + col;
    const blockOffset = getBlockBufferOffset(component, blockRow, blockCol);
    decode(component, blockOffset);
  }
  function decodeBlock(component, decode, mcu) {
    blockRow = mcu / component.blocksPerLine | 0;
    const blockCol = mcu % component.blocksPerLine;
    const blockOffset = getBlockBufferOffset(component, blockRow, blockCol);
    decode(component, blockOffset);
  }
  const componentsLength = components.length;
  let component, i, j, k, n;
  let decodeFn;
  if (progressive) {
    if (spectralStart === 0) {
      decodeFn = successivePrev === 0 ? decodeDCFirst : decodeDCSuccessive;
    } else {
      decodeFn = successivePrev === 0 ? decodeACFirst : decodeACSuccessive;
    }
  } else {
    decodeFn = decodeBaseline;
  }
  let mcu = 0,
    fileMarker;
  const mcuExpected = componentsLength === 1 ? components[0].blocksPerLine * components[0].blocksPerColumn : mcusPerLine * frame.mcusPerColumn;
  let h, v;
  while (mcu <= mcuExpected) {
    const mcuToRead = resetInterval ? Math.min(mcuExpected - mcu, resetInterval) : mcuExpected;
    if (mcuToRead > 0) {
      for (i = 0; i < componentsLength; i++) {
        components[i].pred = 0;
      }
      eobrun = 0;
      if (componentsLength === 1) {
        component = components[0];
        for (n = 0; n < mcuToRead; n++) {
          decodeBlock(component, decodeFn, mcu);
          mcu++;
        }
      } else {
        for (n = 0; n < mcuToRead; n++) {
          for (i = 0; i < componentsLength; i++) {
            component = components[i];
            h = component.h;
            v = component.v;
            for (j = 0; j < v; j++) {
              for (k = 0; k < h; k++) {
                decodeMcu(component, decodeFn, mcu, j, k);
              }
            }
          }
          mcu++;
        }
      }
    }
    bitsCount = 0;
    fileMarker = findNextFileMarker(data, offset);
    if (!fileMarker) {
      break;
    }
    if (fileMarker.invalid) {
      const partialMsg = mcuToRead > 0 ? "unexpected" : "excessive";
      warn(`decodeScan - ${partialMsg} MCU data, current marker is: ${fileMarker.invalid}`);
      offset = fileMarker.offset;
    }
    if (fileMarker.marker >= 0xffd0 && fileMarker.marker <= 0xffd7) {
      offset += 2;
    } else {
      break;
    }
  }
  return offset - startOffset;
}
function quantizeAndInverse(component, blockBufferOffset, p) {
  const qt = component.quantizationTable,
    blockData = component.blockData;
  let v0, v1, v2, v3, v4, v5, v6, v7;
  let p0, p1, p2, p3, p4, p5, p6, p7;
  let t;
  if (!qt) {
    throw new JpegError("missing required Quantization Table.");
  }
  for (let row = 0; row < 64; row += 8) {
    p0 = blockData[blockBufferOffset + row];
    p1 = blockData[blockBufferOffset + row + 1];
    p2 = blockData[blockBufferOffset + row + 2];
    p3 = blockData[blockBufferOffset + row + 3];
    p4 = blockData[blockBufferOffset + row + 4];
    p5 = blockData[blockBufferOffset + row + 5];
    p6 = blockData[blockBufferOffset + row + 6];
    p7 = blockData[blockBufferOffset + row + 7];
    p0 *= qt[row];
    if ((p1 | p2 | p3 | p4 | p5 | p6 | p7) === 0) {
      t = dctSqrt2 * p0 + 512 >> 10;
      p[row] = t;
      p[row + 1] = t;
      p[row + 2] = t;
      p[row + 3] = t;
      p[row + 4] = t;
      p[row + 5] = t;
      p[row + 6] = t;
      p[row + 7] = t;
      continue;
    }
    p1 *= qt[row + 1];
    p2 *= qt[row + 2];
    p3 *= qt[row + 3];
    p4 *= qt[row + 4];
    p5 *= qt[row + 5];
    p6 *= qt[row + 6];
    p7 *= qt[row + 7];
    v0 = dctSqrt2 * p0 + 128 >> 8;
    v1 = dctSqrt2 * p4 + 128 >> 8;
    v2 = p2;
    v3 = p6;
    v4 = dctSqrt1d2 * (p1 - p7) + 128 >> 8;
    v7 = dctSqrt1d2 * (p1 + p7) + 128 >> 8;
    v5 = p3 << 4;
    v6 = p5 << 4;
    v0 = v0 + v1 + 1 >> 1;
    v1 = v0 - v1;
    t = v2 * dctSin6 + v3 * dctCos6 + 128 >> 8;
    v2 = v2 * dctCos6 - v3 * dctSin6 + 128 >> 8;
    v3 = t;
    v4 = v4 + v6 + 1 >> 1;
    v6 = v4 - v6;
    v7 = v7 + v5 + 1 >> 1;
    v5 = v7 - v5;
    v0 = v0 + v3 + 1 >> 1;
    v3 = v0 - v3;
    v1 = v1 + v2 + 1 >> 1;
    v2 = v1 - v2;
    t = v4 * dctSin3 + v7 * dctCos3 + 2048 >> 12;
    v4 = v4 * dctCos3 - v7 * dctSin3 + 2048 >> 12;
    v7 = t;
    t = v5 * dctSin1 + v6 * dctCos1 + 2048 >> 12;
    v5 = v5 * dctCos1 - v6 * dctSin1 + 2048 >> 12;
    v6 = t;
    p[row] = v0 + v7;
    p[row + 7] = v0 - v7;
    p[row + 1] = v1 + v6;
    p[row + 6] = v1 - v6;
    p[row + 2] = v2 + v5;
    p[row + 5] = v2 - v5;
    p[row + 3] = v3 + v4;
    p[row + 4] = v3 - v4;
  }
  for (let col = 0; col < 8; ++col) {
    p0 = p[col];
    p1 = p[col + 8];
    p2 = p[col + 16];
    p3 = p[col + 24];
    p4 = p[col + 32];
    p5 = p[col + 40];
    p6 = p[col + 48];
    p7 = p[col + 56];
    if ((p1 | p2 | p3 | p4 | p5 | p6 | p7) === 0) {
      t = dctSqrt2 * p0 + 8192 >> 14;
      if (t < -2040) {
        t = 0;
      } else if (t >= 2024) {
        t = 255;
      } else {
        t = t + 2056 >> 4;
      }
      blockData[blockBufferOffset + col] = t;
      blockData[blockBufferOffset + col + 8] = t;
      blockData[blockBufferOffset + col + 16] = t;
      blockData[blockBufferOffset + col + 24] = t;
      blockData[blockBufferOffset + col + 32] = t;
      blockData[blockBufferOffset + col + 40] = t;
      blockData[blockBufferOffset + col + 48] = t;
      blockData[blockBufferOffset + col + 56] = t;
      continue;
    }
    v0 = dctSqrt2 * p0 + 2048 >> 12;
    v1 = dctSqrt2 * p4 + 2048 >> 12;
    v2 = p2;
    v3 = p6;
    v4 = dctSqrt1d2 * (p1 - p7) + 2048 >> 12;
    v7 = dctSqrt1d2 * (p1 + p7) + 2048 >> 12;
    v5 = p3;
    v6 = p5;
    v0 = (v0 + v1 + 1 >> 1) + 4112;
    v1 = v0 - v1;
    t = v2 * dctSin6 + v3 * dctCos6 + 2048 >> 12;
    v2 = v2 * dctCos6 - v3 * dctSin6 + 2048 >> 12;
    v3 = t;
    v4 = v4 + v6 + 1 >> 1;
    v6 = v4 - v6;
    v7 = v7 + v5 + 1 >> 1;
    v5 = v7 - v5;
    v0 = v0 + v3 + 1 >> 1;
    v3 = v0 - v3;
    v1 = v1 + v2 + 1 >> 1;
    v2 = v1 - v2;
    t = v4 * dctSin3 + v7 * dctCos3 + 2048 >> 12;
    v4 = v4 * dctCos3 - v7 * dctSin3 + 2048 >> 12;
    v7 = t;
    t = v5 * dctSin1 + v6 * dctCos1 + 2048 >> 12;
    v5 = v5 * dctCos1 - v6 * dctSin1 + 2048 >> 12;
    v6 = t;
    p0 = v0 + v7;
    p7 = v0 - v7;
    p1 = v1 + v6;
    p6 = v1 - v6;
    p2 = v2 + v5;
    p5 = v2 - v5;
    p3 = v3 + v4;
    p4 = v3 - v4;
    if (p0 < 16) {
      p0 = 0;
    } else if (p0 >= 4080) {
      p0 = 255;
    } else {
      p0 >>= 4;
    }
    if (p1 < 16) {
      p1 = 0;
    } else if (p1 >= 4080) {
      p1 = 255;
    } else {
      p1 >>= 4;
    }
    if (p2 < 16) {
      p2 = 0;
    } else if (p2 >= 4080) {
      p2 = 255;
    } else {
      p2 >>= 4;
    }
    if (p3 < 16) {
      p3 = 0;
    } else if (p3 >= 4080) {
      p3 = 255;
    } else {
      p3 >>= 4;
    }
    if (p4 < 16) {
      p4 = 0;
    } else if (p4 >= 4080) {
      p4 = 255;
    } else {
      p4 >>= 4;
    }
    if (p5 < 16) {
      p5 = 0;
    } else if (p5 >= 4080) {
      p5 = 255;
    } else {
      p5 >>= 4;
    }
    if (p6 < 16) {
      p6 = 0;
    } else if (p6 >= 4080) {
      p6 = 255;
    } else {
      p6 >>= 4;
    }
    if (p7 < 16) {
      p7 = 0;
    } else if (p7 >= 4080) {
      p7 = 255;
    } else {
      p7 >>= 4;
    }
    blockData[blockBufferOffset + col] = p0;
    blockData[blockBufferOffset + col + 8] = p1;
    blockData[blockBufferOffset + col + 16] = p2;
    blockData[blockBufferOffset + col + 24] = p3;
    blockData[blockBufferOffset + col + 32] = p4;
    blockData[blockBufferOffset + col + 40] = p5;
    blockData[blockBufferOffset + col + 48] = p6;
    blockData[blockBufferOffset + col + 56] = p7;
  }
}
function buildComponentData(frame, component) {
  const blocksPerLine = component.blocksPerLine;
  const blocksPerColumn = component.blocksPerColumn;
  const computationBuffer = new Int16Array(64);
  for (let blockRow = 0; blockRow < blocksPerColumn; blockRow++) {
    for (let blockCol = 0; blockCol < blocksPerLine; blockCol++) {
      const offset = getBlockBufferOffset(component, blockRow, blockCol);
      quantizeAndInverse(component, offset, computationBuffer);
    }
  }
  return component.blockData;
}
function findNextFileMarker(data, currentPos, startPos = currentPos) {
  const maxPos = data.length - 1;
  let newPos = startPos < currentPos ? startPos : currentPos;
  if (currentPos >= maxPos) {
    return null;
  }
  const currentMarker = readUint16(data, currentPos);
  if (currentMarker >= 0xffc0 && currentMarker <= 0xfffe) {
    return {
      invalid: null,
      marker: currentMarker,
      offset: currentPos
    };
  }
  let newMarker = readUint16(data, newPos);
  while (!(newMarker >= 0xffc0 && newMarker <= 0xfffe)) {
    if (++newPos >= maxPos) {
      return null;
    }
    newMarker = readUint16(data, newPos);
  }
  return {
    invalid: currentMarker.toString(16),
    marker: newMarker,
    offset: newPos
  };
}
function prepareComponents(frame) {
  const mcusPerLine = Math.ceil(frame.samplesPerLine / 8 / frame.maxH);
  const mcusPerColumn = Math.ceil(frame.scanLines / 8 / frame.maxV);
  for (const component of frame.components) {
    const blocksPerLine = Math.ceil(Math.ceil(frame.samplesPerLine / 8) * component.h / frame.maxH);
    const blocksPerColumn = Math.ceil(Math.ceil(frame.scanLines / 8) * component.v / frame.maxV);
    const blocksPerLineForMcu = mcusPerLine * component.h;
    const blocksPerColumnForMcu = mcusPerColumn * component.v;
    const blocksBufferSize = 64 * blocksPerColumnForMcu * (blocksPerLineForMcu + 1);
    component.blockData = new Int16Array(blocksBufferSize);
    component.blocksPerLine = blocksPerLine;
    component.blocksPerColumn = blocksPerColumn;
  }
  frame.mcusPerLine = mcusPerLine;
  frame.mcusPerColumn = mcusPerColumn;
}
function readDataBlock(data, offset) {
  const length = readUint16(data, offset);
  offset += 2;
  let endOffset = offset + length - 2;
  const fileMarker = findNextFileMarker(data, endOffset, offset);
  if (fileMarker?.invalid) {
    warn("readDataBlock - incorrect length, current marker is: " + fileMarker.invalid);
    endOffset = fileMarker.offset;
  }
  const array = data.subarray(offset, endOffset);
  return {
    appData: array,
    oldOffset: offset,
    newOffset: offset + array.length
  };
}
function skipData(data, offset) {
  const length = readUint16(data, offset);
  offset += 2;
  const endOffset = offset + length - 2;
  const fileMarker = findNextFileMarker(data, endOffset, offset);
  if (fileMarker?.invalid) {
    return fileMarker.offset;
  }
  return endOffset;
}
class JpegImage {
  constructor({
    decodeTransform = null,
    colorTransform = -1
  } = {}) {
    this._decodeTransform = decodeTransform;
    this._colorTransform = colorTransform;
  }
  static canUseImageDecoder(data, colorTransform = -1) {
    let exifOffsets = null;
    let offset = 0;
    let numComponents = null;
    let fileMarker = readUint16(data, offset);
    offset += 2;
    if (fileMarker !== 0xffd8) {
      throw new JpegError("SOI not found");
    }
    fileMarker = readUint16(data, offset);
    offset += 2;
    markerLoop: while (fileMarker !== 0xffd9) {
      switch (fileMarker) {
        case 0xffe1:
          const {
            appData,
            oldOffset,
            newOffset
          } = readDataBlock(data, offset);
          offset = newOffset;
          if (appData[0] === 0x45 && appData[1] === 0x78 && appData[2] === 0x69 && appData[3] === 0x66 && appData[4] === 0 && appData[5] === 0) {
            if (exifOffsets) {
              throw new JpegError("Duplicate EXIF-blocks found.");
            }
            exifOffsets = {
              exifStart: oldOffset + 6,
              exifEnd: newOffset
            };
          }
          fileMarker = readUint16(data, offset);
          offset += 2;
          continue;
        case 0xffc0:
        case 0xffc1:
        case 0xffc2:
          numComponents = data[offset + (2 + 1 + 2 + 2)];
          break markerLoop;
        case 0xffff:
          if (data[offset] !== 0xff) {
            offset--;
          }
          break;
      }
      offset = skipData(data, offset);
      fileMarker = readUint16(data, offset);
      offset += 2;
    }
    if (numComponents === 4) {
      return null;
    }
    if (numComponents === 3 && colorTransform === 0) {
      return null;
    }
    return exifOffsets || {};
  }
  parse(data, {
    dnlScanLines = null
  } = {}) {
    let offset = 0;
    let jfif = null;
    let adobe = null;
    let frame, resetInterval;
    let numSOSMarkers = 0;
    const quantizationTables = [];
    const huffmanTablesAC = [],
      huffmanTablesDC = [];
    let fileMarker = readUint16(data, offset);
    offset += 2;
    if (fileMarker !== 0xffd8) {
      throw new JpegError("SOI not found");
    }
    fileMarker = readUint16(data, offset);
    offset += 2;
    markerLoop: while (fileMarker !== 0xffd9) {
      let i, j, l;
      switch (fileMarker) {
        case 0xffe0:
        case 0xffe1:
        case 0xffe2:
        case 0xffe3:
        case 0xffe4:
        case 0xffe5:
        case 0xffe6:
        case 0xffe7:
        case 0xffe8:
        case 0xffe9:
        case 0xffea:
        case 0xffeb:
        case 0xffec:
        case 0xffed:
        case 0xffee:
        case 0xffef:
        case 0xfffe:
          const {
            appData,
            newOffset
          } = readDataBlock(data, offset);
          offset = newOffset;
          if (fileMarker === 0xffe0) {
            if (appData[0] === 0x4a && appData[1] === 0x46 && appData[2] === 0x49 && appData[3] === 0x46 && appData[4] === 0) {
              jfif = {
                version: {
                  major: appData[5],
                  minor: appData[6]
                },
                densityUnits: appData[7],
                xDensity: appData[8] << 8 | appData[9],
                yDensity: appData[10] << 8 | appData[11],
                thumbWidth: appData[12],
                thumbHeight: appData[13],
                thumbData: appData.subarray(14, 14 + 3 * appData[12] * appData[13])
              };
            }
          }
          if (fileMarker === 0xffee) {
            if (appData[0] === 0x41 && appData[1] === 0x64 && appData[2] === 0x6f && appData[3] === 0x62 && appData[4] === 0x65) {
              adobe = {
                version: appData[5] << 8 | appData[6],
                flags0: appData[7] << 8 | appData[8],
                flags1: appData[9] << 8 | appData[10],
                transformCode: appData[11]
              };
            }
          }
          break;
        case 0xffdb:
          const quantizationTablesLength = readUint16(data, offset);
          offset += 2;
          const quantizationTablesEnd = quantizationTablesLength + offset - 2;
          let z;
          while (offset < quantizationTablesEnd) {
            const quantizationTableSpec = data[offset++];
            const tableData = new Uint16Array(64);
            if (quantizationTableSpec >> 4 === 0) {
              for (j = 0; j < 64; j++) {
                z = dctZigZag[j];
                tableData[z] = data[offset++];
              }
            } else if (quantizationTableSpec >> 4 === 1) {
              for (j = 0; j < 64; j++) {
                z = dctZigZag[j];
                tableData[z] = readUint16(data, offset);
                offset += 2;
              }
            } else {
              throw new JpegError("DQT - invalid table spec");
            }
            quantizationTables[quantizationTableSpec & 15] = tableData;
          }
          break;
        case 0xffc0:
        case 0xffc1:
        case 0xffc2:
          if (frame) {
            throw new JpegError("Only single frame JPEGs supported");
          }
          offset += 2;
          frame = {};
          frame.extended = fileMarker === 0xffc1;
          frame.progressive = fileMarker === 0xffc2;
          frame.precision = data[offset++];
          const sofScanLines = readUint16(data, offset);
          offset += 2;
          frame.scanLines = dnlScanLines || sofScanLines;
          frame.samplesPerLine = readUint16(data, offset);
          offset += 2;
          frame.components = [];
          frame.componentIds = {};
          const componentsCount = data[offset++];
          let maxH = 0,
            maxV = 0;
          for (i = 0; i < componentsCount; i++) {
            const componentId = data[offset];
            const h = data[offset + 1] >> 4;
            const v = data[offset + 1] & 15;
            if (maxH < h) {
              maxH = h;
            }
            if (maxV < v) {
              maxV = v;
            }
            const qId = data[offset + 2];
            l = frame.components.push({
              h,
              v,
              quantizationId: qId,
              quantizationTable: null
            });
            frame.componentIds[componentId] = l - 1;
            offset += 3;
          }
          frame.maxH = maxH;
          frame.maxV = maxV;
          prepareComponents(frame);
          break;
        case 0xffc4:
          const huffmanLength = readUint16(data, offset);
          offset += 2;
          for (i = 2; i < huffmanLength;) {
            const huffmanTableSpec = data[offset++];
            const codeLengths = new Uint8Array(16);
            let codeLengthSum = 0;
            for (j = 0; j < 16; j++, offset++) {
              codeLengthSum += codeLengths[j] = data[offset];
            }
            const huffmanValues = new Uint8Array(codeLengthSum);
            for (j = 0; j < codeLengthSum; j++, offset++) {
              huffmanValues[j] = data[offset];
            }
            i += 17 + codeLengthSum;
            (huffmanTableSpec >> 4 === 0 ? huffmanTablesDC : huffmanTablesAC)[huffmanTableSpec & 15] = buildHuffmanTable(codeLengths, huffmanValues);
          }
          break;
        case 0xffdd:
          offset += 2;
          resetInterval = readUint16(data, offset);
          offset += 2;
          break;
        case 0xffda:
          const parseDNLMarker = ++numSOSMarkers === 1 && !dnlScanLines;
          offset += 2;
          const selectorsCount = data[offset++],
            components = [];
          for (i = 0; i < selectorsCount; i++) {
            const index = data[offset++];
            const componentIndex = frame.componentIds[index];
            const component = frame.components[componentIndex];
            component.index = index;
            const tableSpec = data[offset++];
            component.huffmanTableDC = huffmanTablesDC[tableSpec >> 4];
            component.huffmanTableAC = huffmanTablesAC[tableSpec & 15];
            components.push(component);
          }
          const spectralStart = data[offset++],
            spectralEnd = data[offset++],
            successiveApproximation = data[offset++];
          try {
            const processed = decodeScan(data, offset, frame, components, resetInterval, spectralStart, spectralEnd, successiveApproximation >> 4, successiveApproximation & 15, parseDNLMarker);
            offset += processed;
          } catch (ex) {
            if (ex instanceof DNLMarkerError) {
              warn(`${ex.message} -- attempting to re-parse the JPEG image.`);
              return this.parse(data, {
                dnlScanLines: ex.scanLines
              });
            } else if (ex instanceof EOIMarkerError) {
              warn(`${ex.message} -- ignoring the rest of the image data.`);
              break markerLoop;
            }
            throw ex;
          }
          break;
        case 0xffdc:
          offset += 4;
          break;
        case 0xffff:
          if (data[offset] !== 0xff) {
            offset--;
          }
          break;
        default:
          const nextFileMarker = findNextFileMarker(data, offset - 2, offset - 3);
          if (nextFileMarker?.invalid) {
            warn("JpegImage.parse - unexpected data, current marker is: " + nextFileMarker.invalid);
            offset = nextFileMarker.offset;
            break;
          }
          if (!nextFileMarker || offset >= data.length - 1) {
            warn("JpegImage.parse - reached the end of the image data " + "without finding an EOI marker (0xFFD9).");
            break markerLoop;
          }
          throw new JpegError("JpegImage.parse - unknown marker: " + fileMarker.toString(16));
      }
      fileMarker = readUint16(data, offset);
      offset += 2;
    }
    if (!frame) {
      throw new JpegError("JpegImage.parse - no frame data found.");
    }
    this.width = frame.samplesPerLine;
    this.height = frame.scanLines;
    this.jfif = jfif;
    this.adobe = adobe;
    this.components = [];
    for (const component of frame.components) {
      const quantizationTable = quantizationTables[component.quantizationId];
      if (quantizationTable) {
        component.quantizationTable = quantizationTable;
      }
      this.components.push({
        index: component.index,
        output: buildComponentData(frame, component),
        scaleX: component.h / frame.maxH,
        scaleY: component.v / frame.maxV,
        blocksPerLine: component.blocksPerLine,
        blocksPerColumn: component.blocksPerColumn
      });
    }
    this.numComponents = this.components.length;
    return undefined;
  }
  _getLinearizedBlockData(width, height, isSourcePDF = false) {
    const scaleX = this.width / width,
      scaleY = this.height / height;
    let component, componentScaleX, componentScaleY, blocksPerScanline;
    let x, y, i, j, k;
    let index;
    let offset = 0;
    let output;
    const numComponents = this.components.length;
    const dataLength = width * height * numComponents;
    const data = new Uint8ClampedArray(dataLength);
    const xScaleBlockOffset = new Uint32Array(width);
    const mask3LSB = 0xfffffff8;
    let lastComponentScaleX;
    for (i = 0; i < numComponents; i++) {
      component = this.components[i];
      componentScaleX = component.scaleX * scaleX;
      componentScaleY = component.scaleY * scaleY;
      offset = i;
      output = component.output;
      blocksPerScanline = component.blocksPerLine + 1 << 3;
      if (componentScaleX !== lastComponentScaleX) {
        for (x = 0; x < width; x++) {
          j = 0 | x * componentScaleX;
          xScaleBlockOffset[x] = (j & mask3LSB) << 3 | j & 7;
        }
        lastComponentScaleX = componentScaleX;
      }
      for (y = 0; y < height; y++) {
        j = 0 | y * componentScaleY;
        index = blocksPerScanline * (j & mask3LSB) | (j & 7) << 3;
        for (x = 0; x < width; x++) {
          data[offset] = output[index + xScaleBlockOffset[x]];
          offset += numComponents;
        }
      }
    }
    let transform = this._decodeTransform;
    if (!isSourcePDF && numComponents === 4 && !transform) {
      transform = new Int32Array([-256, 255, -256, 255, -256, 255, -256, 255]);
    }
    if (transform) {
      for (i = 0; i < dataLength;) {
        for (j = 0, k = 0; j < numComponents; j++, i++, k += 2) {
          data[i] = (data[i] * transform[k] >> 8) + transform[k + 1];
        }
      }
    }
    return data;
  }
  get _isColorConversionNeeded() {
    if (this.adobe) {
      return !!this.adobe.transformCode;
    }
    if (this.numComponents === 3) {
      if (this._colorTransform === 0) {
        return false;
      } else if (this.components[0].index === 0x52 && this.components[1].index === 0x47 && this.components[2].index === 0x42) {
        return false;
      }
      return true;
    }
    if (this._colorTransform === 1) {
      return true;
    }
    return false;
  }
  _convertYccToRgb(data) {
    let Y, Cb, Cr;
    for (let i = 0, length = data.length; i < length; i += 3) {
      Y = data[i];
      Cb = data[i + 1];
      Cr = data[i + 2];
      data[i] = Y - 179.456 + 1.402 * Cr;
      data[i + 1] = Y + 135.459 - 0.344 * Cb - 0.714 * Cr;
      data[i + 2] = Y - 226.816 + 1.772 * Cb;
    }
    return data;
  }
  _convertYccToRgba(data, out) {
    for (let i = 0, j = 0, length = data.length; i < length; i += 3, j += 4) {
      const Y = data[i];
      const Cb = data[i + 1];
      const Cr = data[i + 2];
      out[j] = Y - 179.456 + 1.402 * Cr;
      out[j + 1] = Y + 135.459 - 0.344 * Cb - 0.714 * Cr;
      out[j + 2] = Y - 226.816 + 1.772 * Cb;
      out[j + 3] = 255;
    }
    return out;
  }
  _convertYcckToRgb(data) {
    this._convertYcckToCmyk(data);
    return this._convertCmykToRgb(data);
  }
  _convertYcckToRgba(data) {
    this._convertYcckToCmyk(data);
    return this._convertCmykToRgba(data);
  }
  _convertYcckToCmyk(data) {
    let Y, Cb, Cr;
    for (let i = 0, length = data.length; i < length; i += 4) {
      Y = data[i];
      Cb = data[i + 1];
      Cr = data[i + 2];
      data[i] = 434.456 - Y - 1.402 * Cr;
      data[i + 1] = 119.541 - Y + 0.344 * Cb + 0.714 * Cr;
      data[i + 2] = 481.816 - Y - 1.772 * Cb;
    }
    return data;
  }
  _convertCmykToRgb(data) {
    const count = data.length / 4;
    ColorSpaceUtils.cmyk.getRgbBuffer(data, 0, count, data, 0, 8, 0);
    return data.subarray(0, count * 3);
  }
  _convertCmykToRgba(data) {
    ColorSpaceUtils.cmyk.getRgbBuffer(data, 0, data.length / 4, data, 0, 8, 1);
    if (ColorSpaceUtils.cmyk instanceof DeviceCmykCS) {
      for (let i = 3, ii = data.length; i < ii; i += 4) {
        data[i] = 255;
      }
    }
    return data;
  }
  getData({
    width,
    height,
    forceRGBA = false,
    forceRGB = false,
    isSourcePDF = false
  }) {
    if (this.numComponents > 4) {
      throw new JpegError("Unsupported color mode");
    }
    const data = this._getLinearizedBlockData(width, height, isSourcePDF);
    if (this.numComponents === 1 && (forceRGBA || forceRGB)) {
      const len = data.length * (forceRGBA ? 4 : 3);
      const rgbaData = new Uint8ClampedArray(len);
      let offset = 0;
      if (forceRGBA) {
        grayToRGBA(data, new Uint32Array(rgbaData.buffer));
      } else {
        for (const grayColor of data) {
          rgbaData[offset++] = grayColor;
          rgbaData[offset++] = grayColor;
          rgbaData[offset++] = grayColor;
        }
      }
      return rgbaData;
    } else if (this.numComponents === 3 && this._isColorConversionNeeded) {
      if (forceRGBA) {
        const rgbaData = new Uint8ClampedArray(data.length / 3 * 4);
        return this._convertYccToRgba(data, rgbaData);
      }
      return this._convertYccToRgb(data);
    } else if (this.numComponents === 4) {
      if (this._isColorConversionNeeded) {
        if (forceRGBA) {
          return this._convertYcckToRgba(data);
        }
        if (forceRGB) {
          return this._convertYcckToRgb(data);
        }
        return this._convertYcckToCmyk(data);
      } else if (forceRGBA) {
        return this._convertCmykToRgba(data);
      } else if (forceRGB) {
        return this._convertCmykToRgb(data);
      }
    }
    return data;
  }
}

;// ./src/core/jpeg_stream.js




class JpegStream extends DecodeStream {
  static #isImageDecoderSupported = FeatureTest.isImageDecoderSupported;
  constructor(stream, maybeLength, params) {
    super(maybeLength);
    this.stream = stream;
    this.dict = stream.dict;
    this.maybeLength = maybeLength;
    this.params = params;
  }
  static get canUseImageDecoder() {
    return shadow(this, "canUseImageDecoder", this.#isImageDecoderSupported ? ImageDecoder.isTypeSupported("image/jpeg") : Promise.resolve(false));
  }
  static setOptions({
    isImageDecoderSupported = false
  }) {
    this.#isImageDecoderSupported = isImageDecoderSupported;
  }
  get bytes() {
    return shadow(this, "bytes", this.stream.getBytes(this.maybeLength));
  }
  ensureBuffer(requested) {}
  readBlock() {
    this.decodeImage();
  }
  get jpegOptions() {
    const jpegOptions = {
      decodeTransform: undefined,
      colorTransform: undefined
    };
    const decodeArr = this.dict.getArray("D", "Decode");
    if ((this.forceRGBA || this.forceRGB) && Array.isArray(decodeArr)) {
      const bitsPerComponent = this.dict.get("BPC", "BitsPerComponent") || 8;
      const decodeArrLength = decodeArr.length;
      const transform = new Int32Array(decodeArrLength);
      let transformNeeded = false;
      const maxValue = (1 << bitsPerComponent) - 1;
      for (let i = 0; i < decodeArrLength; i += 2) {
        transform[i] = (decodeArr[i + 1] - decodeArr[i]) * 256 | 0;
        transform[i + 1] = decodeArr[i] * maxValue | 0;
        if (transform[i] !== 256 || transform[i + 1] !== 0) {
          transformNeeded = true;
        }
      }
      if (transformNeeded) {
        jpegOptions.decodeTransform = transform;
      }
    }
    if (this.params instanceof Dict) {
      const colorTransform = this.params.get("ColorTransform");
      if (Number.isInteger(colorTransform)) {
        jpegOptions.colorTransform = colorTransform;
      }
    }
    return shadow(this, "jpegOptions", jpegOptions);
  }
  #skipUselessBytes(data) {
    for (let i = 0, ii = data.length - 1; i < ii; i++) {
      if (data[i] === 0xff && data[i + 1] === 0xd8) {
        if (i > 0) {
          data = data.subarray(i);
        }
        break;
      }
    }
    return data;
  }
  decodeImage(bytes) {
    if (this.eof) {
      return this.buffer;
    }
    bytes = this.#skipUselessBytes(bytes || this.bytes);
    const jpegImage = new JpegImage(this.jpegOptions);
    jpegImage.parse(bytes);
    const data = jpegImage.getData({
      width: this.drawWidth,
      height: this.drawHeight,
      forceRGBA: this.forceRGBA,
      forceRGB: this.forceRGB,
      isSourcePDF: true
    });
    this.buffer = data;
    this.bufferLength = data.length;
    this.eof = true;
    return this.buffer;
  }
  get canAsyncDecodeImageFromBuffer() {
    return this.stream.isAsync;
  }
  async getTransferableImage() {
    if (!(await JpegStream.canUseImageDecoder)) {
      return null;
    }
    const jpegOptions = this.jpegOptions;
    if (jpegOptions.decodeTransform) {
      return null;
    }
    let decoder;
    try {
      const bytes = this.canAsyncDecodeImageFromBuffer && (await this.stream.asyncGetBytes()) || this.bytes;
      if (!bytes) {
        return null;
      }
      let data = this.#skipUselessBytes(bytes);
      const useImageDecoder = JpegImage.canUseImageDecoder(data, jpegOptions.colorTransform);
      if (!useImageDecoder) {
        return null;
      }
      if (useImageDecoder.exifStart) {
        data = data.slice();
        data.fill(0x00, useImageDecoder.exifStart, useImageDecoder.exifEnd);
      }
      decoder = new ImageDecoder({
        data,
        type: "image/jpeg",
        preferAnimation: false
      });
      return (await decoder.decode()).image;
    } catch (reason) {
      warn(`getTransferableImage - failed: "${reason}".`);
      return null;
    } finally {
      decoder?.close();
    }
  }
  get isImageStream() {
    return true;
  }
}

;// ./external/openjpeg/openjpeg.js
async function OpenJPEG(moduleArg = {}) {
  var moduleRtn;
  var Module = moduleArg;
  var ENVIRONMENT_IS_WEB = true;
  var ENVIRONMENT_IS_WORKER = false;
  var arguments_ = [];
  var thisProgram = "./this.program";
  var quit_ = (status, toThrow) => {
    throw toThrow;
  };
  var _scriptName = import.meta.url;
  var scriptDirectory = "";
  var readAsync, readBinary;
  if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
    try {
      scriptDirectory = new URL(".", _scriptName).href;
    } catch {}
    readAsync = async url => {
      var response = await fetch(url, {
        credentials: "same-origin"
      });
      if (response.ok) {
        return response.arrayBuffer();
      }
      throw new Error(response.status + " : " + response.url);
    };
  } else {}
  var out = console.log.bind(console);
  var err = console.error.bind(console);
  var wasmBinary;
  var ABORT = false;
  var EXITSTATUS;
  var readyPromiseResolve, readyPromiseReject;
  var wasmMemory;
  var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
  var HEAP64, HEAPU64;
  var runtimeInitialized = false;
  function updateMemoryViews() {
    var b = wasmMemory.buffer;
    HEAP8 = new Int8Array(b);
    HEAP16 = new Int16Array(b);
    HEAPU8 = new Uint8Array(b);
    HEAPU16 = new Uint16Array(b);
    HEAP32 = new Int32Array(b);
    HEAPU32 = new Uint32Array(b);
    HEAPF32 = new Float32Array(b);
    HEAPF64 = new Float64Array(b);
    HEAP64 = new BigInt64Array(b);
    HEAPU64 = new BigUint64Array(b);
  }
  function preRun() {
    if (Module["preRun"]) {
      if (typeof Module["preRun"] == "function") Module["preRun"] = [Module["preRun"]];
      while (Module["preRun"].length) {
        addOnPreRun(Module["preRun"].shift());
      }
    }
    callRuntimeCallbacks(onPreRuns);
  }
  function initRuntime() {
    runtimeInitialized = true;
    wasmExports["s"]();
  }
  function postRun() {
    if (Module["postRun"]) {
      if (typeof Module["postRun"] == "function") Module["postRun"] = [Module["postRun"]];
      while (Module["postRun"].length) {
        addOnPostRun(Module["postRun"].shift());
      }
    }
    callRuntimeCallbacks(onPostRuns);
  }
  function abort(what) {
    Module["onAbort"]?.(what);
    what = "Aborted(" + what + ")";
    err(what);
    ABORT = true;
    what += ". Build with -sASSERTIONS for more info.";
    var e = new WebAssembly.RuntimeError(what);
    readyPromiseReject?.(e);
    throw e;
  }
  var wasmBinaryFile;
  function getWasmImports() {
    return {
      a: wasmImports
    };
  }
  async function createWasm() {
    function receiveInstance(instance, module) {
      wasmExports = instance.exports;
      wasmMemory = wasmExports["r"];
      updateMemoryViews();
      assignWasmExports(wasmExports);
      return wasmExports;
    }
    var info = getWasmImports();
    return new Promise((resolve, reject) => {
      Module["instantiateWasm"](info, (mod, inst) => {
        resolve(receiveInstance(mod, inst));
      });
    });
  }
  class ExitStatus {
    name = "ExitStatus";
    constructor(status) {
      this.message = `Program terminated with exit(${status})`;
      this.status = status;
    }
  }
  var callRuntimeCallbacks = callbacks => {
    while (callbacks.length > 0) {
      callbacks.shift()(Module);
    }
  };
  var onPostRuns = [];
  var addOnPostRun = cb => onPostRuns.push(cb);
  var onPreRuns = [];
  var addOnPreRun = cb => onPreRuns.push(cb);
  var noExitRuntime = true;
  var __abort_js = () => abort("");
  var runtimeKeepaliveCounter = 0;
  var __emscripten_runtime_keepalive_clear = () => {
    noExitRuntime = false;
    runtimeKeepaliveCounter = 0;
  };
  var timers = {};
  var handleException = e => {
    if (e instanceof ExitStatus || e == "unwind") {
      return EXITSTATUS;
    }
    quit_(1, e);
  };
  var keepRuntimeAlive = () => noExitRuntime || runtimeKeepaliveCounter > 0;
  var _proc_exit = code => {
    EXITSTATUS = code;
    if (!keepRuntimeAlive()) {
      Module["onExit"]?.(code);
      ABORT = true;
    }
    quit_(code, new ExitStatus(code));
  };
  var exitJS = (status, implicit) => {
    EXITSTATUS = status;
    _proc_exit(status);
  };
  var _exit = exitJS;
  var maybeExit = () => {
    if (!keepRuntimeAlive()) {
      try {
        _exit(EXITSTATUS);
      } catch (e) {
        handleException(e);
      }
    }
  };
  var callUserCallback = func => {
    if (ABORT) {
      return;
    }
    try {
      func();
      maybeExit();
    } catch (e) {
      handleException(e);
    }
  };
  var _emscripten_get_now = () => performance.now();
  var __setitimer_js = (which, timeout_ms) => {
    if (timers[which]) {
      clearTimeout(timers[which].id);
      delete timers[which];
    }
    if (!timeout_ms) return 0;
    var id = setTimeout(() => {
      delete timers[which];
      callUserCallback(() => __emscripten_timeout(which, _emscripten_get_now()));
    }, timeout_ms);
    timers[which] = {
      id,
      timeout_ms
    };
    return 0;
  };
  function _copy_pixels_1(compG_ptr, nb_pixels) {
    compG_ptr >>= 2;
    const imageData = Module.imageData = new Uint8ClampedArray(nb_pixels);
    const compG = HEAP32.subarray(compG_ptr, compG_ptr + nb_pixels);
    imageData.set(compG);
  }
  function _copy_pixels_3(compR_ptr, compG_ptr, compB_ptr, nb_pixels) {
    compR_ptr >>= 2;
    compG_ptr >>= 2;
    compB_ptr >>= 2;
    const imageData = Module.imageData = new Uint8ClampedArray(nb_pixels * 3);
    const compR = HEAP32.subarray(compR_ptr, compR_ptr + nb_pixels);
    const compG = HEAP32.subarray(compG_ptr, compG_ptr + nb_pixels);
    const compB = HEAP32.subarray(compB_ptr, compB_ptr + nb_pixels);
    for (let i = 0; i < nb_pixels; i++) {
      imageData[3 * i] = compR[i];
      imageData[3 * i + 1] = compG[i];
      imageData[3 * i + 2] = compB[i];
    }
  }
  function _copy_pixels_4(compR_ptr, compG_ptr, compB_ptr, compA_ptr, nb_pixels) {
    compR_ptr >>= 2;
    compG_ptr >>= 2;
    compB_ptr >>= 2;
    compA_ptr >>= 2;
    const imageData = Module.imageData = new Uint8ClampedArray(nb_pixels * 4);
    const compR = HEAP32.subarray(compR_ptr, compR_ptr + nb_pixels);
    const compG = HEAP32.subarray(compG_ptr, compG_ptr + nb_pixels);
    const compB = HEAP32.subarray(compB_ptr, compB_ptr + nb_pixels);
    const compA = HEAP32.subarray(compA_ptr, compA_ptr + nb_pixels);
    for (let i = 0; i < nb_pixels; i++) {
      imageData[4 * i] = compR[i];
      imageData[4 * i + 1] = compG[i];
      imageData[4 * i + 2] = compB[i];
      imageData[4 * i + 3] = compA[i];
    }
  }
  var getHeapMax = () => 2147483648;
  var alignMemory = (size, alignment) => Math.ceil(size / alignment) * alignment;
  var growMemory = size => {
    var oldHeapSize = wasmMemory.buffer.byteLength;
    var pages = (size - oldHeapSize + 65535) / 65536 | 0;
    try {
      wasmMemory.grow(pages);
      updateMemoryViews();
      return 1;
    } catch (e) {}
  };
  var _emscripten_resize_heap = requestedSize => {
    var oldSize = HEAPU8.length;
    requestedSize >>>= 0;
    var maxHeapSize = getHeapMax();
    if (requestedSize > maxHeapSize) {
      return false;
    }
    for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
      var overGrownHeapSize = oldSize * (1 + .2 / cutDown);
      overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
      var newSize = Math.min(maxHeapSize, alignMemory(Math.max(requestedSize, overGrownHeapSize), 65536));
      var replacement = growMemory(newSize);
      if (replacement) {
        return true;
      }
    }
    return false;
  };
  var ENV = {};
  var getExecutableName = () => thisProgram || "./this.program";
  var getEnvStrings = () => {
    if (!getEnvStrings.strings) {
      var lang = (typeof navigator == "object" && navigator.language || "C").replace("-", "_") + ".UTF-8";
      var env = {
        USER: "web_user",
        LOGNAME: "web_user",
        PATH: "/",
        PWD: "/",
        HOME: "/home/web_user",
        LANG: lang,
        _: getExecutableName()
      };
      for (var x in ENV) {
        if (ENV[x] === undefined) delete env[x];else env[x] = ENV[x];
      }
      var strings = [];
      for (var x in env) {
        strings.push(`${x}=${env[x]}`);
      }
      getEnvStrings.strings = strings;
    }
    return getEnvStrings.strings;
  };
  var stringToUTF8Array = (str, heap, outIdx, maxBytesToWrite) => {
    if (!(maxBytesToWrite > 0)) return 0;
    var startIdx = outIdx;
    var endIdx = outIdx + maxBytesToWrite - 1;
    for (var i = 0; i < str.length; ++i) {
      var u = str.codePointAt(i);
      if (u <= 127) {
        if (outIdx >= endIdx) break;
        heap[outIdx++] = u;
      } else if (u <= 2047) {
        if (outIdx + 1 >= endIdx) break;
        heap[outIdx++] = 192 | u >> 6;
        heap[outIdx++] = 128 | u & 63;
      } else if (u <= 65535) {
        if (outIdx + 2 >= endIdx) break;
        heap[outIdx++] = 224 | u >> 12;
        heap[outIdx++] = 128 | u >> 6 & 63;
        heap[outIdx++] = 128 | u & 63;
      } else {
        if (outIdx + 3 >= endIdx) break;
        heap[outIdx++] = 240 | u >> 18;
        heap[outIdx++] = 128 | u >> 12 & 63;
        heap[outIdx++] = 128 | u >> 6 & 63;
        heap[outIdx++] = 128 | u & 63;
        i++;
      }
    }
    heap[outIdx] = 0;
    return outIdx - startIdx;
  };
  var stringToUTF8 = (str, outPtr, maxBytesToWrite) => stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
  var _environ_get = (__environ, environ_buf) => {
    var bufSize = 0;
    var envp = 0;
    for (var string of getEnvStrings()) {
      var ptr = environ_buf + bufSize;
      HEAPU32[__environ + envp >> 2] = ptr;
      bufSize += stringToUTF8(string, ptr, Infinity) + 1;
      envp += 4;
    }
    return 0;
  };
  var lengthBytesUTF8 = str => {
    var len = 0;
    for (var i = 0; i < str.length; ++i) {
      var c = str.charCodeAt(i);
      if (c <= 127) {
        len++;
      } else if (c <= 2047) {
        len += 2;
      } else if (c >= 55296 && c <= 57343) {
        len += 4;
        ++i;
      } else {
        len += 3;
      }
    }
    return len;
  };
  var _environ_sizes_get = (penviron_count, penviron_buf_size) => {
    var strings = getEnvStrings();
    HEAPU32[penviron_count >> 2] = strings.length;
    var bufSize = 0;
    for (var string of strings) {
      bufSize += lengthBytesUTF8(string) + 1;
    }
    HEAPU32[penviron_buf_size >> 2] = bufSize;
    return 0;
  };
  var INT53_MAX = 9007199254740992;
  var INT53_MIN = -9007199254740992;
  var bigintToI53Checked = num => num < INT53_MIN || num > INT53_MAX ? NaN : Number(num);
  function _fd_seek(fd, offset, whence, newOffset) {
    offset = bigintToI53Checked(offset);
    return 70;
  }
  var printCharBuffers = [null, [], []];
  var UTF8Decoder = typeof TextDecoder != "undefined" ? new TextDecoder() : undefined;
  var findStringEnd = (heapOrArray, idx, maxBytesToRead, ignoreNul) => {
    var maxIdx = idx + maxBytesToRead;
    if (ignoreNul) return maxIdx;
    while (heapOrArray[idx] && !(idx >= maxIdx)) ++idx;
    return idx;
  };
  var UTF8ArrayToString = (heapOrArray, idx = 0, maxBytesToRead, ignoreNul) => {
    var endPtr = findStringEnd(heapOrArray, idx, maxBytesToRead, ignoreNul);
    if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
      return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
    }
    var str = "";
    while (idx < endPtr) {
      var u0 = heapOrArray[idx++];
      if (!(u0 & 128)) {
        str += String.fromCharCode(u0);
        continue;
      }
      var u1 = heapOrArray[idx++] & 63;
      if ((u0 & 224) == 192) {
        str += String.fromCharCode((u0 & 31) << 6 | u1);
        continue;
      }
      var u2 = heapOrArray[idx++] & 63;
      if ((u0 & 240) == 224) {
        u0 = (u0 & 15) << 12 | u1 << 6 | u2;
      } else {
        u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63;
      }
      if (u0 < 65536) {
        str += String.fromCharCode(u0);
      } else {
        var ch = u0 - 65536;
        str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
      }
    }
    return str;
  };
  var printChar = (stream, curr) => {
    var buffer = printCharBuffers[stream];
    if (curr === 0 || curr === 10) {
      (stream === 1 ? out : err)(UTF8ArrayToString(buffer));
      buffer.length = 0;
    } else {
      buffer.push(curr);
    }
  };
  var UTF8ToString = (ptr, maxBytesToRead, ignoreNul) => ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead, ignoreNul) : "";
  var _fd_write = (fd, iov, iovcnt, pnum) => {
    var num = 0;
    for (var i = 0; i < iovcnt; i++) {
      var ptr = HEAPU32[iov >> 2];
      var len = HEAPU32[iov + 4 >> 2];
      iov += 8;
      for (var j = 0; j < len; j++) {
        printChar(fd, HEAPU8[ptr + j]);
      }
      num += len;
    }
    HEAPU32[pnum >> 2] = num;
    return 0;
  };
  function _gray_to_rgba(compG_ptr, nb_pixels) {
    compG_ptr >>= 2;
    const imageData = Module.imageData = new Uint8ClampedArray(nb_pixels * 4);
    const compG = HEAP32.subarray(compG_ptr, compG_ptr + nb_pixels);
    for (let i = 0; i < nb_pixels; i++) {
      imageData[4 * i] = imageData[4 * i + 1] = imageData[4 * i + 2] = compG[i];
      imageData[4 * i + 3] = 255;
    }
  }
  function _graya_to_rgba(compG_ptr, compA_ptr, nb_pixels) {
    compG_ptr >>= 2;
    compA_ptr >>= 2;
    const imageData = Module.imageData = new Uint8ClampedArray(nb_pixels * 4);
    const compG = HEAP32.subarray(compG_ptr, compG_ptr + nb_pixels);
    const compA = HEAP32.subarray(compA_ptr, compA_ptr + nb_pixels);
    for (let i = 0; i < nb_pixels; i++) {
      imageData[4 * i] = imageData[4 * i + 1] = imageData[4 * i + 2] = compG[i];
      imageData[4 * i + 3] = compA[i];
    }
  }
  function _jsPrintWarning(message_ptr) {
    const message = UTF8ToString(message_ptr);
    (Module.warn || console.warn)(`OpenJPEG: ${message}`);
  }
  function _rgb_to_rgba(compR_ptr, compG_ptr, compB_ptr, nb_pixels) {
    compR_ptr >>= 2;
    compG_ptr >>= 2;
    compB_ptr >>= 2;
    const imageData = Module.imageData = new Uint8ClampedArray(nb_pixels * 4);
    const compR = HEAP32.subarray(compR_ptr, compR_ptr + nb_pixels);
    const compG = HEAP32.subarray(compG_ptr, compG_ptr + nb_pixels);
    const compB = HEAP32.subarray(compB_ptr, compB_ptr + nb_pixels);
    for (let i = 0; i < nb_pixels; i++) {
      imageData[4 * i] = compR[i];
      imageData[4 * i + 1] = compG[i];
      imageData[4 * i + 2] = compB[i];
      imageData[4 * i + 3] = 255;
    }
  }
  function _storeErrorMessage(message_ptr) {
    const message = UTF8ToString(message_ptr);
    if (!Module.errorMessages) {
      Module.errorMessages = message;
    } else {
      Module.errorMessages += "\n" + message;
    }
  }
  var writeArrayToMemory = (array, buffer) => {
    HEAP8.set(array, buffer);
  };
  if (Module["noExitRuntime"]) noExitRuntime = Module["noExitRuntime"];
  if (Module["print"]) out = Module["print"];
  if (Module["printErr"]) err = Module["printErr"];
  if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];
  if (Module["arguments"]) arguments_ = Module["arguments"];
  if (Module["thisProgram"]) thisProgram = Module["thisProgram"];
  if (Module["preInit"]) {
    if (typeof Module["preInit"] == "function") Module["preInit"] = [Module["preInit"]];
    while (Module["preInit"].length > 0) {
      Module["preInit"].shift()();
    }
  }
  Module["writeArrayToMemory"] = writeArrayToMemory;
  var _malloc, _free, _jp2_decode, __emscripten_timeout;
  function assignWasmExports(wasmExports) {
    Module["_malloc"] = _malloc = wasmExports["t"];
    Module["_free"] = _free = wasmExports["u"];
    Module["_jp2_decode"] = _jp2_decode = wasmExports["v"];
    __emscripten_timeout = wasmExports["w"];
  }
  var wasmImports = {
    k: __abort_js,
    j: __emscripten_runtime_keepalive_clear,
    l: __setitimer_js,
    f: _copy_pixels_1,
    e: _copy_pixels_3,
    d: _copy_pixels_4,
    m: _emscripten_resize_heap,
    o: _environ_get,
    p: _environ_sizes_get,
    n: _fd_seek,
    b: _fd_write,
    q: _gray_to_rgba,
    h: _graya_to_rgba,
    c: _jsPrintWarning,
    i: _proc_exit,
    g: _rgb_to_rgba,
    a: _storeErrorMessage
  };
  function run() {
    preRun();
    function doRun() {
      Module["calledRun"] = true;
      if (ABORT) return;
      initRuntime();
      readyPromiseResolve?.(Module);
      Module["onRuntimeInitialized"]?.();
      postRun();
    }
    if (Module["setStatus"]) {
      Module["setStatus"]("Running...");
      setTimeout(() => {
        setTimeout(() => Module["setStatus"](""), 1);
        doRun();
      }, 1);
    } else {
      doRun();
    }
  }
  var wasmExports;
  wasmExports = await createWasm();
  run();
  if (runtimeInitialized) {
    moduleRtn = Module;
  } else {
    moduleRtn = new Promise((resolve, reject) => {
      readyPromiseResolve = resolve;
      readyPromiseReject = reject;
    });
  }
  return moduleRtn;
}
/* harmony default export */ const openjpeg = (OpenJPEG);
;// ./src/core/jpx.js




class JpxError extends BaseException {
  constructor(msg) {
    super(msg, "JpxError");
  }
}
class JpxImage {
  static #buffer = null;
  static #handler = null;
  static #modulePromise = null;
  static #useWasm = true;
  static #useWorkerFetch = true;
  static #wasmUrl = null;
  static setOptions({
    handler,
    useWasm,
    useWorkerFetch,
    wasmUrl
  }) {
    this.#useWasm = useWasm;
    this.#useWorkerFetch = useWorkerFetch;
    this.#wasmUrl = wasmUrl;
    if (!useWorkerFetch) {
      this.#handler = handler;
    }
  }
  static async #getJsModule(fallbackCallback) {
    const path = `${this.#wasmUrl}openjpeg_nowasm_fallback.js`;
    let instance = null;
    try {
      const mod = await import(
      /*webpackIgnore: true*/
      /*@vite-ignore*/
      path);
      instance = mod.default();
    } catch (e) {
      warn(`JpxImage#getJsModule: ${e}`);
    }
    fallbackCallback(instance);
  }
  static async #instantiateWasm(fallbackCallback, imports, successCallback) {
    const filename = "openjpeg.wasm";
    try {
      if (!this.#buffer) {
        if (this.#useWorkerFetch) {
          this.#buffer = await fetchBinaryData(`${this.#wasmUrl}${filename}`);
        } else {
          this.#buffer = await this.#handler.sendWithPromise("FetchBinaryData", {
            kind: "wasmUrl",
            filename
          });
        }
      }
      const results = await WebAssembly.instantiate(this.#buffer, imports);
      return successCallback(results.instance);
    } catch (reason) {
      warn(`JpxImage#instantiateWasm: ${reason}`);
      this.#getJsModule(fallbackCallback);
      return null;
    } finally {
      this.#handler = null;
    }
  }
  static async decode(bytes, {
    numComponents = 4,
    isIndexedColormap = false,
    smaskInData = false,
    reducePower = 0
  } = {}) {
    if (!this.#modulePromise) {
      const {
        promise,
        resolve
      } = Promise.withResolvers();
      const promises = [promise];
      if (!this.#useWasm) {
        this.#getJsModule(resolve);
      } else {
        promises.push(openjpeg({
          warn: warn,
          instantiateWasm: this.#instantiateWasm.bind(this, resolve)
        }));
      }
      this.#modulePromise = Promise.race(promises);
    }
    const module = await this.#modulePromise;
    if (!module) {
      throw new JpxError("OpenJPEG failed to initialize");
    }
    let ptr;
    try {
      const size = bytes.length;
      ptr = module._malloc(size);
      module.writeArrayToMemory(bytes, ptr);
      const ret = module._jp2_decode(ptr, size, numComponents > 0 ? numComponents : 0, !!isIndexedColormap, !!smaskInData, reducePower);
      if (ret) {
        const {
          errorMessages
        } = module;
        if (errorMessages) {
          delete module.errorMessages;
          throw new JpxError(errorMessages);
        }
        throw new JpxError("Unknown error");
      }
      const {
        imageData
      } = module;
      module.imageData = null;
      return imageData;
    } finally {
      if (ptr) {
        module._free(ptr);
      }
    }
  }
  static cleanup() {
    this.#modulePromise = null;
  }
  static parseImageProperties(stream) {
    let newByte = stream.getByte();
    while (newByte >= 0) {
      const oldByte = newByte;
      newByte = stream.getByte();
      const code = oldByte << 8 | newByte;
      if (code === 0xff51) {
        stream.skip(4);
        const Xsiz = stream.getInt32() >>> 0;
        const Ysiz = stream.getInt32() >>> 0;
        const XOsiz = stream.getInt32() >>> 0;
        const YOsiz = stream.getInt32() >>> 0;
        stream.skip(16);
        const Csiz = stream.getUint16();
        return {
          width: Xsiz - XOsiz,
          height: Ysiz - YOsiz,
          bitsPerComponent: 8,
          componentsCount: Csiz
        };
      }
    }
    throw new JpxError("No size marker found in JPX stream");
  }
}

;// ./src/core/operator_list.js

function addState(parentState, pattern, checkFn, iterateFn, processFn) {
  let state = parentState;
  for (let i = 0, ii = pattern.length - 1; i < ii; i++) {
    const item = pattern[i];
    state = state[item] ||= [];
  }
  state[pattern.at(-1)] = {
    checkFn,
    iterateFn,
    processFn
  };
}
const InitialState = [];
addState(InitialState, [OPS.save, OPS.transform, OPS.paintInlineImageXObject, OPS.restore], null, function iterateInlineImageGroup(context, i) {
  const fnArray = context.fnArray;
  const iFirstSave = context.iCurr - 3;
  const pos = (i - iFirstSave) % 4;
  switch (pos) {
    case 0:
      return fnArray[i] === OPS.save;
    case 1:
      return fnArray[i] === OPS.transform;
    case 2:
      return fnArray[i] === OPS.paintInlineImageXObject;
    case 3:
      return fnArray[i] === OPS.restore;
  }
  throw new Error(`iterateInlineImageGroup - invalid pos: ${pos}`);
}, function foundInlineImageGroup(context, i) {
  const MIN_IMAGES_IN_INLINE_IMAGES_BLOCK = 10;
  const MAX_IMAGES_IN_INLINE_IMAGES_BLOCK = 200;
  const MAX_WIDTH = 1000;
  const IMAGE_PADDING = 1;
  const fnArray = context.fnArray,
    argsArray = context.argsArray;
  const curr = context.iCurr;
  const iFirstSave = curr - 3;
  const iFirstTransform = curr - 2;
  const iFirstPIIXO = curr - 1;
  const count = Math.min(Math.floor((i - iFirstSave) / 4), MAX_IMAGES_IN_INLINE_IMAGES_BLOCK);
  if (count < MIN_IMAGES_IN_INLINE_IMAGES_BLOCK) {
    return i - (i - iFirstSave) % 4;
  }
  let maxX = 0;
  const map = [];
  let maxLineHeight = 0;
  let currentX = IMAGE_PADDING,
    currentY = IMAGE_PADDING;
  for (let q = 0; q < count; q++) {
    const transform = argsArray[iFirstTransform + (q << 2)];
    const img = argsArray[iFirstPIIXO + (q << 2)][0];
    if (currentX + img.width > MAX_WIDTH) {
      maxX = Math.max(maxX, currentX);
      currentY += maxLineHeight + 2 * IMAGE_PADDING;
      currentX = 0;
      maxLineHeight = 0;
    }
    map.push({
      transform,
      x: currentX,
      y: currentY,
      w: img.width,
      h: img.height
    });
    currentX += img.width + 2 * IMAGE_PADDING;
    maxLineHeight = Math.max(maxLineHeight, img.height);
  }
  const imgWidth = Math.max(maxX, currentX) + IMAGE_PADDING;
  const imgHeight = currentY + maxLineHeight + IMAGE_PADDING;
  const imgData = new Uint8Array(imgWidth * imgHeight * 4);
  const imgRowSize = imgWidth << 2;
  for (let q = 0; q < count; q++) {
    const data = argsArray[iFirstPIIXO + (q << 2)][0].data;
    const rowSize = map[q].w << 2;
    let dataOffset = 0;
    let offset = map[q].x + map[q].y * imgWidth << 2;
    imgData.set(data.subarray(0, rowSize), offset - imgRowSize);
    for (let k = 0, kk = map[q].h; k < kk; k++) {
      imgData.set(data.subarray(dataOffset, dataOffset + rowSize), offset);
      dataOffset += rowSize;
      offset += imgRowSize;
    }
    imgData.set(data.subarray(dataOffset - rowSize, dataOffset), offset);
    while (offset >= 0) {
      data[offset - 4] = data[offset];
      data[offset - 3] = data[offset + 1];
      data[offset - 2] = data[offset + 2];
      data[offset - 1] = data[offset + 3];
      data[offset + rowSize] = data[offset + rowSize - 4];
      data[offset + rowSize + 1] = data[offset + rowSize - 3];
      data[offset + rowSize + 2] = data[offset + rowSize - 2];
      data[offset + rowSize + 3] = data[offset + rowSize - 1];
      offset -= imgRowSize;
    }
  }
  const img = {
    width: imgWidth,
    height: imgHeight
  };
  if (context.isOffscreenCanvasSupported) {
    const canvas = new OffscreenCanvas(imgWidth, imgHeight);
    const ctx = canvas.getContext("2d");
    ctx.putImageData(new ImageData(new Uint8ClampedArray(imgData.buffer), imgWidth, imgHeight), 0, 0);
    img.bitmap = canvas.transferToImageBitmap();
    img.data = null;
  } else {
    img.kind = ImageKind.RGBA_32BPP;
    img.data = imgData;
  }
  fnArray.splice(iFirstSave, count * 4, OPS.paintInlineImageXObjectGroup);
  argsArray.splice(iFirstSave, count * 4, [img, map]);
  return iFirstSave + 1;
});
addState(InitialState, [OPS.save, OPS.transform, OPS.paintImageMaskXObject, OPS.restore], null, function iterateImageMaskGroup(context, i) {
  const fnArray = context.fnArray;
  const iFirstSave = context.iCurr - 3;
  const pos = (i - iFirstSave) % 4;
  switch (pos) {
    case 0:
      return fnArray[i] === OPS.save;
    case 1:
      return fnArray[i] === OPS.transform;
    case 2:
      return fnArray[i] === OPS.paintImageMaskXObject;
    case 3:
      return fnArray[i] === OPS.restore;
  }
  throw new Error(`iterateImageMaskGroup - invalid pos: ${pos}`);
}, function foundImageMaskGroup(context, i) {
  const MIN_IMAGES_IN_MASKS_BLOCK = 10;
  const MAX_IMAGES_IN_MASKS_BLOCK = 100;
  const MAX_SAME_IMAGES_IN_MASKS_BLOCK = 1000;
  const fnArray = context.fnArray,
    argsArray = context.argsArray;
  const curr = context.iCurr;
  const iFirstSave = curr - 3;
  const iFirstTransform = curr - 2;
  const iFirstPIMXO = curr - 1;
  let count = Math.floor((i - iFirstSave) / 4);
  if (count < MIN_IMAGES_IN_MASKS_BLOCK) {
    return i - (i - iFirstSave) % 4;
  }
  let isSameImage = false;
  let iTransform, transformArgs;
  const firstPIMXOArg0 = argsArray[iFirstPIMXO][0];
  const firstTransformArg0 = argsArray[iFirstTransform][0],
    firstTransformArg1 = argsArray[iFirstTransform][1],
    firstTransformArg2 = argsArray[iFirstTransform][2],
    firstTransformArg3 = argsArray[iFirstTransform][3];
  if (firstTransformArg1 === firstTransformArg2) {
    isSameImage = true;
    iTransform = iFirstTransform + 4;
    let iPIMXO = iFirstPIMXO + 4;
    for (let q = 1; q < count; q++, iTransform += 4, iPIMXO += 4) {
      transformArgs = argsArray[iTransform];
      if (argsArray[iPIMXO][0] !== firstPIMXOArg0 || transformArgs[0] !== firstTransformArg0 || transformArgs[1] !== firstTransformArg1 || transformArgs[2] !== firstTransformArg2 || transformArgs[3] !== firstTransformArg3) {
        if (q < MIN_IMAGES_IN_MASKS_BLOCK) {
          isSameImage = false;
        } else {
          count = q;
        }
        break;
      }
    }
  }
  if (isSameImage) {
    count = Math.min(count, MAX_SAME_IMAGES_IN_MASKS_BLOCK);
    const positions = new Float32Array(count * 2);
    iTransform = iFirstTransform;
    for (let q = 0; q < count; q++, iTransform += 4) {
      transformArgs = argsArray[iTransform];
      positions[q << 1] = transformArgs[4];
      positions[(q << 1) + 1] = transformArgs[5];
    }
    fnArray.splice(iFirstSave, count * 4, OPS.paintImageMaskXObjectRepeat);
    argsArray.splice(iFirstSave, count * 4, [firstPIMXOArg0, firstTransformArg0, firstTransformArg1, firstTransformArg2, firstTransformArg3, positions]);
  } else {
    count = Math.min(count, MAX_IMAGES_IN_MASKS_BLOCK);
    const images = [];
    for (let q = 0; q < count; q++) {
      transformArgs = argsArray[iFirstTransform + (q << 2)];
      const maskParams = argsArray[iFirstPIMXO + (q << 2)][0];
      images.push({
        data: maskParams.data,
        width: maskParams.width,
        height: maskParams.height,
        interpolate: maskParams.interpolate,
        count: maskParams.count,
        transform: transformArgs
      });
    }
    fnArray.splice(iFirstSave, count * 4, OPS.paintImageMaskXObjectGroup);
    argsArray.splice(iFirstSave, count * 4, [images]);
  }
  return iFirstSave + 1;
});
addState(InitialState, [OPS.save, OPS.transform, OPS.paintImageXObject, OPS.restore], function (context) {
  const argsArray = context.argsArray;
  const iFirstTransform = context.iCurr - 2;
  return argsArray[iFirstTransform][1] === 0 && argsArray[iFirstTransform][2] === 0;
}, function iterateImageGroup(context, i) {
  const fnArray = context.fnArray,
    argsArray = context.argsArray;
  const iFirstSave = context.iCurr - 3;
  const pos = (i - iFirstSave) % 4;
  switch (pos) {
    case 0:
      return fnArray[i] === OPS.save;
    case 1:
      if (fnArray[i] !== OPS.transform) {
        return false;
      }
      const iFirstTransform = context.iCurr - 2;
      const firstTransformArg0 = argsArray[iFirstTransform][0];
      const firstTransformArg3 = argsArray[iFirstTransform][3];
      if (argsArray[i][0] !== firstTransformArg0 || argsArray[i][1] !== 0 || argsArray[i][2] !== 0 || argsArray[i][3] !== firstTransformArg3) {
        return false;
      }
      return true;
    case 2:
      if (fnArray[i] !== OPS.paintImageXObject) {
        return false;
      }
      const iFirstPIXO = context.iCurr - 1;
      const firstPIXOArg0 = argsArray[iFirstPIXO][0];
      if (argsArray[i][0] !== firstPIXOArg0) {
        return false;
      }
      return true;
    case 3:
      return fnArray[i] === OPS.restore;
  }
  throw new Error(`iterateImageGroup - invalid pos: ${pos}`);
}, function (context, i) {
  const MIN_IMAGES_IN_BLOCK = 3;
  const MAX_IMAGES_IN_BLOCK = 1000;
  const fnArray = context.fnArray,
    argsArray = context.argsArray;
  const curr = context.iCurr;
  const iFirstSave = curr - 3;
  const iFirstTransform = curr - 2;
  const iFirstPIXO = curr - 1;
  const firstPIXOArg0 = argsArray[iFirstPIXO][0];
  const firstTransformArg0 = argsArray[iFirstTransform][0];
  const firstTransformArg3 = argsArray[iFirstTransform][3];
  const count = Math.min(Math.floor((i - iFirstSave) / 4), MAX_IMAGES_IN_BLOCK);
  if (count < MIN_IMAGES_IN_BLOCK) {
    return i - (i - iFirstSave) % 4;
  }
  const positions = new Float32Array(count * 2);
  let iTransform = iFirstTransform;
  for (let q = 0; q < count; q++, iTransform += 4) {
    const transformArgs = argsArray[iTransform];
    positions[q << 1] = transformArgs[4];
    positions[(q << 1) + 1] = transformArgs[5];
  }
  const args = [firstPIXOArg0, firstTransformArg0, firstTransformArg3, positions];
  fnArray.splice(iFirstSave, count * 4, OPS.paintImageXObjectRepeat);
  argsArray.splice(iFirstSave, count * 4, args);
  return iFirstSave + 1;
});
addState(InitialState, [OPS.beginText, OPS.setFont, OPS.setTextMatrix, OPS.showText, OPS.endText], null, function iterateShowTextGroup(context, i) {
  const fnArray = context.fnArray,
    argsArray = context.argsArray;
  const iFirstSave = context.iCurr - 4;
  const pos = (i - iFirstSave) % 5;
  switch (pos) {
    case 0:
      return fnArray[i] === OPS.beginText;
    case 1:
      return fnArray[i] === OPS.setFont;
    case 2:
      return fnArray[i] === OPS.setTextMatrix;
    case 3:
      if (fnArray[i] !== OPS.showText) {
        return false;
      }
      const iFirstSetFont = context.iCurr - 3;
      const firstSetFontArg0 = argsArray[iFirstSetFont][0];
      const firstSetFontArg1 = argsArray[iFirstSetFont][1];
      if (argsArray[i][0] !== firstSetFontArg0 || argsArray[i][1] !== firstSetFontArg1) {
        return false;
      }
      return true;
    case 4:
      return fnArray[i] === OPS.endText;
  }
  throw new Error(`iterateShowTextGroup - invalid pos: ${pos}`);
}, function (context, i) {
  const MIN_CHARS_IN_BLOCK = 3;
  const MAX_CHARS_IN_BLOCK = 1000;
  const fnArray = context.fnArray,
    argsArray = context.argsArray;
  const curr = context.iCurr;
  const iFirstBeginText = curr - 4;
  const iFirstSetFont = curr - 3;
  const iFirstSetTextMatrix = curr - 2;
  const iFirstShowText = curr - 1;
  const iFirstEndText = curr;
  const firstSetFontArg0 = argsArray[iFirstSetFont][0];
  const firstSetFontArg1 = argsArray[iFirstSetFont][1];
  let count = Math.min(Math.floor((i - iFirstBeginText) / 5), MAX_CHARS_IN_BLOCK);
  if (count < MIN_CHARS_IN_BLOCK) {
    return i - (i - iFirstBeginText) % 5;
  }
  let iFirst = iFirstBeginText;
  if (iFirstBeginText >= 4 && fnArray[iFirstBeginText - 4] === fnArray[iFirstSetFont] && fnArray[iFirstBeginText - 3] === fnArray[iFirstSetTextMatrix] && fnArray[iFirstBeginText - 2] === fnArray[iFirstShowText] && fnArray[iFirstBeginText - 1] === fnArray[iFirstEndText] && argsArray[iFirstBeginText - 4][0] === firstSetFontArg0 && argsArray[iFirstBeginText - 4][1] === firstSetFontArg1) {
    count++;
    iFirst -= 5;
  }
  let iEndText = iFirst + 4;
  for (let q = 1; q < count; q++) {
    fnArray.splice(iEndText, 3);
    argsArray.splice(iEndText, 3);
    iEndText += 2;
  }
  return iEndText + 1;
});
addState(InitialState, [OPS.save, OPS.transform, OPS.constructPath, OPS.restore], context => {
  const argsArray = context.argsArray;
  const iFirstConstructPath = context.iCurr - 1;
  const op = argsArray[iFirstConstructPath][0];
  if (op !== OPS.stroke && op !== OPS.closeStroke && op !== OPS.fillStroke && op !== OPS.eoFillStroke && op !== OPS.closeFillStroke && op !== OPS.closeEOFillStroke) {
    return true;
  }
  const iFirstTransform = context.iCurr - 2;
  const transform = argsArray[iFirstTransform];
  return transform[0] === 1 && transform[1] === 0 && transform[2] === 0 && transform[3] === 1;
}, () => false, (context, i) => {
  const {
    fnArray,
    argsArray
  } = context;
  const curr = context.iCurr;
  const iFirstSave = curr - 3;
  const iFirstTransform = curr - 2;
  const iFirstConstructPath = curr - 1;
  const args = argsArray[iFirstConstructPath];
  const transform = argsArray[iFirstTransform];
  const [, [buffer], minMax] = args;
  if (minMax) {
    Util.scaleMinMax(transform, minMax);
    for (let k = 0, kk = buffer.length; k < kk;) {
      switch (buffer[k++]) {
        case DrawOPS.moveTo:
        case DrawOPS.lineTo:
          Util.applyTransform(buffer, transform, k);
          k += 2;
          break;
        case DrawOPS.curveTo:
          Util.applyTransformToBezier(buffer, transform, k);
          k += 6;
          break;
      }
    }
  }
  fnArray.splice(iFirstSave, 4, OPS.constructPath);
  argsArray.splice(iFirstSave, 4, args);
  return iFirstSave + 1;
});
class NullOptimizer {
  constructor(queue) {
    this.queue = queue;
  }
  _optimize() {}
  push(fn, args) {
    this.queue.fnArray.push(fn);
    this.queue.argsArray.push(args);
    this._optimize();
  }
  flush() {}
  reset() {}
}
class QueueOptimizer extends NullOptimizer {
  constructor(queue) {
    super(queue);
    this.state = null;
    this.context = {
      iCurr: 0,
      fnArray: queue.fnArray,
      argsArray: queue.argsArray,
      isOffscreenCanvasSupported: OperatorList.isOffscreenCanvasSupported
    };
    this.match = null;
    this.lastProcessed = 0;
  }
  _optimize() {
    const fnArray = this.queue.fnArray;
    let i = this.lastProcessed,
      ii = fnArray.length;
    let state = this.state;
    let match = this.match;
    if (!state && !match && i + 1 === ii && !InitialState[fnArray[i]]) {
      this.lastProcessed = ii;
      return;
    }
    const context = this.context;
    while (i < ii) {
      if (match) {
        const iterate = (0, match.iterateFn)(context, i);
        if (iterate) {
          i++;
          continue;
        }
        i = (0, match.processFn)(context, i + 1);
        ii = fnArray.length;
        match = null;
        state = null;
        if (i >= ii) {
          break;
        }
      }
      state = (state || InitialState)[fnArray[i]];
      if (!state || Array.isArray(state)) {
        i++;
        continue;
      }
      context.iCurr = i;
      i++;
      if (state.checkFn && !(0, state.checkFn)(context)) {
        state = null;
        continue;
      }
      match = state;
      state = null;
    }
    this.state = state;
    this.match = match;
    this.lastProcessed = i;
  }
  flush() {
    while (this.match) {
      const length = this.queue.fnArray.length;
      this.lastProcessed = (0, this.match.processFn)(this.context, length);
      this.match = null;
      this.state = null;
      this._optimize();
    }
  }
  reset() {
    this.state = null;
    this.match = null;
    this.lastProcessed = 0;
  }
}
class OperatorList {
  static CHUNK_SIZE = 1000;
  static CHUNK_SIZE_ABOUT = this.CHUNK_SIZE - 5;
  static isOffscreenCanvasSupported = false;
  constructor(intent = 0, streamSink) {
    this._streamSink = streamSink;
    this.fnArray = [];
    this.argsArray = [];
    this.optimizer = streamSink && !(intent & RenderingIntentFlag.OPLIST) ? new QueueOptimizer(this) : new NullOptimizer(this);
    this.dependencies = new Set();
    this._totalLength = 0;
    this.weight = 0;
    this._resolved = streamSink ? null : Promise.resolve();
  }
  static setOptions({
    isOffscreenCanvasSupported
  }) {
    this.isOffscreenCanvasSupported = isOffscreenCanvasSupported;
  }
  get length() {
    return this.argsArray.length;
  }
  get ready() {
    return this._resolved || this._streamSink.ready;
  }
  get totalLength() {
    return this._totalLength + this.length;
  }
  addOp(fn, args) {
    this.optimizer.push(fn, args);
    this.weight++;
    if (this._streamSink) {
      if (this.weight >= OperatorList.CHUNK_SIZE) {
        this.flush();
      } else if (this.weight >= OperatorList.CHUNK_SIZE_ABOUT && (fn === OPS.restore || fn === OPS.endText)) {
        this.flush();
      }
    }
  }
  addImageOps(fn, args, optionalContent, hasMask = false) {
    if (hasMask) {
      this.addOp(OPS.save);
      this.addOp(OPS.setGState, [[["SMask", false]]]);
    }
    if (optionalContent !== undefined) {
      this.addOp(OPS.beginMarkedContentProps, ["OC", optionalContent]);
    }
    this.addOp(fn, args);
    if (optionalContent !== undefined) {
      this.addOp(OPS.endMarkedContent, []);
    }
    if (hasMask) {
      this.addOp(OPS.restore);
    }
  }
  addDependency(dependency) {
    if (this.dependencies.has(dependency)) {
      return;
    }
    this.dependencies.add(dependency);
    this.addOp(OPS.dependency, [dependency]);
  }
  addDependencies(dependencies) {
    for (const dependency of dependencies) {
      this.addDependency(dependency);
    }
  }
  addOpList(opList) {
    if (!(opList instanceof OperatorList)) {
      warn('addOpList - ignoring invalid "opList" parameter.');
      return;
    }
    for (const dependency of opList.dependencies) {
      this.dependencies.add(dependency);
    }
    for (let i = 0, ii = opList.length; i < ii; i++) {
      this.addOp(opList.fnArray[i], opList.argsArray[i]);
    }
  }
  getIR() {
    return {
      fnArray: this.fnArray,
      argsArray: this.argsArray,
      length: this.length
    };
  }
  get _transfers() {
    const transfers = [];
    const {
      fnArray,
      argsArray,
      length
    } = this;
    for (let i = 0; i < length; i++) {
      switch (fnArray[i]) {
        case OPS.paintInlineImageXObject:
        case OPS.paintInlineImageXObjectGroup:
        case OPS.paintImageMaskXObject:
          {
            const {
              bitmap,
              data
            } = argsArray[i][0];
            if (bitmap || data?.buffer) {
              transfers.push(bitmap || data.buffer);
            }
            break;
          }
        case OPS.constructPath:
          {
            const [, [data], minMax] = argsArray[i];
            if (data) {
              transfers.push(data.buffer, minMax.buffer);
            }
            break;
          }
        case OPS.paintFormXObjectBegin:
          const [matrix, bbox] = argsArray[i];
          if (matrix) {
            transfers.push(matrix.buffer);
          }
          if (bbox) {
            transfers.push(bbox.buffer);
          }
          break;
        case OPS.setTextMatrix:
          transfers.push(argsArray[i][0].buffer);
          break;
      }
    }
    return transfers;
  }
  flush(lastChunk = false, separateAnnots = null) {
    this.optimizer.flush();
    const length = this.length;
    this._totalLength += length;
    this._streamSink.enqueue({
      fnArray: this.fnArray,
      argsArray: this.argsArray,
      lastChunk,
      separateAnnots,
      length
    }, 1, this._transfers);
    this.dependencies.clear();
    this.fnArray.length = 0;
    this.argsArray.length = 0;
    this.weight = 0;
    this.optimizer.reset();
  }
}

;// ./src/core/binary_cmap.js


function hexToInt(a, size) {
  let n = 0;
  for (let i = 0; i <= size; i++) {
    n = n << 8 | a[i];
  }
  return n >>> 0;
}
function hexToStr(a, size) {
  if (size === 1) {
    return String.fromCharCode(a[0], a[1]);
  }
  if (size === 3) {
    return String.fromCharCode(a[0], a[1], a[2], a[3]);
  }
  return String.fromCharCode(...a.subarray(0, size + 1));
}
function addHex(a, b, size) {
  let c = 0;
  for (let i = size; i >= 0; i--) {
    c += a[i] + b[i];
    a[i] = c & 255;
    c >>= 8;
  }
}
function incHex(a, size) {
  let c = 1;
  for (let i = size; i >= 0 && c > 0; i--) {
    c += a[i];
    a[i] = c & 255;
    c >>= 8;
  }
}
const MAX_NUM_SIZE = 16;
const MAX_ENCODED_NUM_SIZE = 19;
class BinaryCMapStream extends Stream {
  tmpBuf = new Uint8Array(MAX_ENCODED_NUM_SIZE);
  constructor(data) {
    super(data, 0, data.length, null);
  }
  readNumber() {
    let n = 0;
    let last;
    do {
      const b = this.getByte();
      if (b < 0) {
        throw new FormatError("unexpected EOF in bcmap");
      }
      last = !(b & 0x80);
      n = n << 7 | b & 0x7f;
    } while (!last);
    return n;
  }
  readSigned() {
    const n = this.readNumber();
    return n & 1 ? ~(n >>> 1) : n >>> 1;
  }
  readHex(num, size) {
    num.set(this.getBytes(size + 1));
  }
  readHexNumber(num, size) {
    let last;
    const stack = this.tmpBuf;
    let sp = 0;
    do {
      const b = this.getByte();
      if (b < 0) {
        throw new FormatError("unexpected EOF in bcmap");
      }
      last = !(b & 0x80);
      stack[sp++] = b & 0x7f;
    } while (!last);
    let i = size,
      buffer = 0,
      bufferSize = 0;
    while (i >= 0) {
      while (bufferSize < 8 && stack.length > 0) {
        buffer |= stack[--sp] << bufferSize;
        bufferSize += 7;
      }
      num[i] = buffer & 255;
      i--;
      buffer >>= 8;
      bufferSize -= 8;
    }
  }
  readHexSigned(num, size) {
    this.readHexNumber(num, size);
    const sign = num[size] & 1 ? 255 : 0;
    let c = 0;
    for (let i = 0; i <= size; i++) {
      c = (c & 1) << 8 | num[i];
      num[i] = c >> 1 ^ sign;
    }
  }
  readString() {
    const len = this.readNumber(),
      buf = new Array(len);
    for (let i = 0; i < len; i++) {
      buf[i] = this.readNumber();
    }
    return String.fromCharCode(...buf);
  }
}
class BinaryCMapReader {
  async process(data, cMap, extend) {
    const stream = new BinaryCMapStream(data);
    const header = stream.getByte();
    cMap.vertical = !!(header & 1);
    let useCMap = null;
    const start = new Uint8Array(MAX_NUM_SIZE);
    const end = new Uint8Array(MAX_NUM_SIZE);
    const char = new Uint8Array(MAX_NUM_SIZE);
    const charCode = new Uint8Array(MAX_NUM_SIZE);
    const tmp = new Uint8Array(MAX_NUM_SIZE);
    let code;
    let b;
    while ((b = stream.getByte()) >= 0) {
      const type = b >> 5;
      if (type === 7) {
        switch (b & 0x1f) {
          case 0:
            stream.readString();
            break;
          case 1:
            useCMap = stream.readString();
            break;
        }
        continue;
      }
      const sequence = !!(b & 0x10);
      const dataSize = b & 15;
      if (dataSize + 1 > MAX_NUM_SIZE) {
        throw new Error("BinaryCMapReader.process: Invalid dataSize.");
      }
      const ucs2DataSize = 1;
      const subitemsCount = stream.readNumber();
      switch (type) {
        case 0:
          stream.readHex(start, dataSize);
          stream.readHexNumber(end, dataSize);
          addHex(end, start, dataSize);
          cMap.addCodespaceRange(dataSize + 1, hexToInt(start, dataSize), hexToInt(end, dataSize));
          for (let i = 1; i < subitemsCount; i++) {
            incHex(end, dataSize);
            stream.readHexNumber(start, dataSize);
            addHex(start, end, dataSize);
            stream.readHexNumber(end, dataSize);
            addHex(end, start, dataSize);
            cMap.addCodespaceRange(dataSize + 1, hexToInt(start, dataSize), hexToInt(end, dataSize));
          }
          break;
        case 1:
          stream.readHex(start, dataSize);
          stream.readHexNumber(end, dataSize);
          addHex(end, start, dataSize);
          stream.readNumber();
          for (let i = 1; i < subitemsCount; i++) {
            incHex(end, dataSize);
            stream.readHexNumber(start, dataSize);
            addHex(start, end, dataSize);
            stream.readHexNumber(end, dataSize);
            addHex(end, start, dataSize);
            stream.readNumber();
          }
          break;
        case 2:
          stream.readHex(char, dataSize);
          code = stream.readNumber();
          cMap.mapOne(hexToInt(char, dataSize), code);
          for (let i = 1; i < subitemsCount; i++) {
            incHex(char, dataSize);
            if (!sequence) {
              stream.readHexNumber(tmp, dataSize);
              addHex(char, tmp, dataSize);
            }
            code = stream.readSigned() + (code + 1);
            cMap.mapOne(hexToInt(char, dataSize), code);
          }
          break;
        case 3:
          stream.readHex(start, dataSize);
          stream.readHexNumber(end, dataSize);
          addHex(end, start, dataSize);
          code = stream.readNumber();
          cMap.mapCidRange(hexToInt(start, dataSize), hexToInt(end, dataSize), code);
          for (let i = 1; i < subitemsCount; i++) {
            incHex(end, dataSize);
            if (!sequence) {
              stream.readHexNumber(start, dataSize);
              addHex(start, end, dataSize);
            } else {
              start.set(end);
            }
            stream.readHexNumber(end, dataSize);
            addHex(end, start, dataSize);
            code = stream.readNumber();
            cMap.mapCidRange(hexToInt(start, dataSize), hexToInt(end, dataSize), code);
          }
          break;
        case 4:
          stream.readHex(char, ucs2DataSize);
          stream.readHex(charCode, dataSize);
          cMap.mapOne(hexToInt(char, ucs2DataSize), hexToStr(charCode, dataSize));
          for (let i = 1; i < subitemsCount; i++) {
            incHex(char, ucs2DataSize);
            if (!sequence) {
              stream.readHexNumber(tmp, ucs2DataSize);
              addHex(char, tmp, ucs2DataSize);
            }
            incHex(charCode, dataSize);
            stream.readHexSigned(tmp, dataSize);
            addHex(charCode, tmp, dataSize);
            cMap.mapOne(hexToInt(char, ucs2DataSize), hexToStr(charCode, dataSize));
          }
          break;
        case 5:
          stream.readHex(start, ucs2DataSize);
          stream.readHexNumber(end, ucs2DataSize);
          addHex(end, start, ucs2DataSize);
          stream.readHex(charCode, dataSize);
          cMap.mapBfRange(hexToInt(start, ucs2DataSize), hexToInt(end, ucs2DataSize), hexToStr(charCode, dataSize));
          for (let i = 1; i < subitemsCount; i++) {
            incHex(end, ucs2DataSize);
            if (!sequence) {
              stream.readHexNumber(start, ucs2DataSize);
              addHex(start, end, ucs2DataSize);
            } else {
              start.set(end);
            }
            stream.readHexNumber(end, ucs2DataSize);
            addHex(end, start, ucs2DataSize);
            stream.readHex(charCode, dataSize);
            cMap.mapBfRange(hexToInt(start, ucs2DataSize), hexToInt(end, ucs2DataSize), hexToStr(charCode, dataSize));
          }
          break;
        default:
          throw new Error(`BinaryCMapReader.process - unknown type: ${type}`);
      }
    }
    if (useCMap) {
      return extend(useCMap);
    }
    return cMap;
  }
}

;// ./src/core/ascii_85_stream.js


class Ascii85Stream extends DecodeStream {
  constructor(str, maybeLength) {
    if (maybeLength) {
      maybeLength *= 0.8;
    }
    super(maybeLength);
    this.stream = str;
    this.dict = str.dict;
    this.input = new Uint8Array(5);
  }
  readBlock() {
    const TILDA_CHAR = 0x7e;
    const Z_LOWER_CHAR = 0x7a;
    const EOF = -1;
    const str = this.stream;
    let c = str.getByte();
    while (isWhiteSpace(c)) {
      c = str.getByte();
    }
    if (c === EOF || c === TILDA_CHAR) {
      this.eof = true;
      return;
    }
    const bufferLength = this.bufferLength;
    let buffer, i;
    if (c === Z_LOWER_CHAR) {
      buffer = this.ensureBuffer(bufferLength + 4);
      for (i = 0; i < 4; ++i) {
        buffer[bufferLength + i] = 0;
      }
      this.bufferLength += 4;
    } else {
      const input = this.input;
      input[0] = c;
      for (i = 1; i < 5; ++i) {
        c = str.getByte();
        while (isWhiteSpace(c)) {
          c = str.getByte();
        }
        input[i] = c;
        if (c === EOF || c === TILDA_CHAR) {
          break;
        }
      }
      buffer = this.ensureBuffer(bufferLength + i - 1);
      this.bufferLength += i - 1;
      if (i < 5) {
        for (; i < 5; ++i) {
          input[i] = 0x21 + 84;
        }
        this.eof = true;
      }
      let t = 0;
      for (i = 0; i < 5; ++i) {
        t = t * 85 + (input[i] - 0x21);
      }
      for (i = 3; i >= 0; --i) {
        buffer[bufferLength + i] = t & 0xff;
        t >>= 8;
      }
    }
  }
}

;// ./src/core/ascii_hex_stream.js

class AsciiHexStream extends DecodeStream {
  constructor(str, maybeLength) {
    if (maybeLength) {
      maybeLength *= 0.5;
    }
    super(maybeLength);
    this.stream = str;
    this.dict = str.dict;
    this.firstDigit = -1;
  }
  readBlock() {
    const UPSTREAM_BLOCK_SIZE = 8000;
    const bytes = this.stream.getBytes(UPSTREAM_BLOCK_SIZE);
    if (!bytes.length) {
      this.eof = true;
      return;
    }
    const maxDecodeLength = bytes.length + 1 >> 1;
    const buffer = this.ensureBuffer(this.bufferLength + maxDecodeLength);
    let bufferLength = this.bufferLength;
    let firstDigit = this.firstDigit;
    for (const ch of bytes) {
      let digit;
      if (ch >= 0x30 && ch <= 0x39) {
        digit = ch & 0x0f;
      } else if (ch >= 0x41 && ch <= 0x46 || ch >= 0x61 && ch <= 0x66) {
        digit = (ch & 0x0f) + 9;
      } else if (ch === 0x3e) {
        this.eof = true;
        break;
      } else {
        continue;
      }
      if (firstDigit < 0) {
        firstDigit = digit;
      } else {
        buffer[bufferLength++] = firstDigit << 4 | digit;
        firstDigit = -1;
      }
    }
    if (firstDigit >= 0 && this.eof) {
      buffer[bufferLength++] = firstDigit << 4;
      firstDigit = -1;
    }
    this.firstDigit = firstDigit;
    this.bufferLength = bufferLength;
  }
}

;// ./external/brotli/decode.js
let Options;
let makeBrotliDecode = () => {
  const MAX_HUFFMAN_TABLE_SIZE = Int32Array.from([256, 402, 436, 468, 500, 534, 566, 598, 630, 662, 694, 726, 758, 790, 822, 854, 886, 920, 952, 984, 1016, 1048, 1080]);
  const CODE_LENGTH_CODE_ORDER = Int32Array.from([1, 2, 3, 4, 0, 5, 17, 6, 16, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
  const DISTANCE_SHORT_CODE_INDEX_OFFSET = Int32Array.from([0, 3, 2, 1, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3]);
  const DISTANCE_SHORT_CODE_VALUE_OFFSET = Int32Array.from([0, 0, 0, 0, -1, 1, -2, 2, -3, 3, -1, 1, -2, 2, -3, 3]);
  const FIXED_TABLE = Int32Array.from([0x020000, 0x020004, 0x020003, 0x030002, 0x020000, 0x020004, 0x020003, 0x040001, 0x020000, 0x020004, 0x020003, 0x030002, 0x020000, 0x020004, 0x020003, 0x040005]);
  const BLOCK_LENGTH_OFFSET = Int32Array.from([1, 5, 9, 13, 17, 25, 33, 41, 49, 65, 81, 97, 113, 145, 177, 209, 241, 305, 369, 497, 753, 1265, 2289, 4337, 8433, 16625]);
  const BLOCK_LENGTH_N_BITS = Int32Array.from([2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 8, 9, 10, 11, 12, 13, 24]);
  const INSERT_LENGTH_N_BITS = Int16Array.from([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x01, 0x02, 0x02, 0x03, 0x03, 0x04, 0x04, 0x05, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0A, 0x0C, 0x0E, 0x18]);
  const COPY_LENGTH_N_BITS = Int16Array.from([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x01, 0x02, 0x02, 0x03, 0x03, 0x04, 0x04, 0x05, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0A, 0x18]);
  const CMD_LOOKUP = new Int16Array(2816);
  unpackCommandLookupTable(CMD_LOOKUP);
  function log2floor(i) {
    let result = -1;
    let step = 16;
    let v = i;
    while (step > 0) {
      let next = v >> step;
      if (next !== 0) {
        result += step;
        v = next;
      }
      step = step >> 1;
    }
    return result + v;
  }
  function calculateDistanceAlphabetSize(npostfix, ndirect, maxndistbits) {
    return 16 + ndirect + 2 * (maxndistbits << npostfix);
  }
  function calculateDistanceAlphabetLimit(s, maxDistance, npostfix, ndirect) {
    if (maxDistance < ndirect + (2 << npostfix)) {
      return makeError(s, -23);
    }
    const offset = (maxDistance - ndirect >> npostfix) + 4;
    const ndistbits = log2floor(offset) - 1;
    const group = ndistbits - 1 << 1 | offset >> ndistbits & 1;
    return (group - 1 << npostfix) + (1 << npostfix) + ndirect + 16;
  }
  function unpackCommandLookupTable(cmdLookup) {
    const insertLengthOffsets = new Int32Array(24);
    const copyLengthOffsets = new Int32Array(24);
    copyLengthOffsets[0] = 2;
    for (let i = 0; i < 23; ++i) {
      insertLengthOffsets[i + 1] = insertLengthOffsets[i] + (1 << INSERT_LENGTH_N_BITS[i]);
      copyLengthOffsets[i + 1] = copyLengthOffsets[i] + (1 << COPY_LENGTH_N_BITS[i]);
    }
    for (let cmdCode = 0; cmdCode < 704; ++cmdCode) {
      let rangeIdx = cmdCode >> 6;
      let distanceContextOffset = -4;
      if (rangeIdx >= 2) {
        rangeIdx -= 2;
        distanceContextOffset = 0;
      }
      const insertCode = (0x29850 >> rangeIdx * 2 & 0x3) << 3 | cmdCode >> 3 & 7;
      const copyCode = (0x26244 >> rangeIdx * 2 & 0x3) << 3 | cmdCode & 7;
      const copyLengthOffset = copyLengthOffsets[copyCode];
      const distanceContext = distanceContextOffset + Math.min(copyLengthOffset, 5) - 2;
      const index = cmdCode * 4;
      cmdLookup[index] = INSERT_LENGTH_N_BITS[insertCode] | COPY_LENGTH_N_BITS[copyCode] << 8;
      cmdLookup[index + 1] = insertLengthOffsets[insertCode];
      cmdLookup[index + 2] = copyLengthOffsets[copyCode];
      cmdLookup[index + 3] = distanceContext;
    }
  }
  function decodeWindowBits(s) {
    const largeWindowEnabled = s.isLargeWindow;
    s.isLargeWindow = 0;
    if (s.bitOffset >= 16) {
      s.accumulator32 = s.shortBuffer[s.halfOffset++] << 16 | s.accumulator32 >>> 16;
      s.bitOffset -= 16;
    }
    if (readFewBits(s, 1) === 0) {
      return 16;
    }
    let n = readFewBits(s, 3);
    if (n !== 0) {
      return 17 + n;
    }
    n = readFewBits(s, 3);
    if (n !== 0) {
      if (n === 1) {
        if (largeWindowEnabled === 0) {
          return -1;
        }
        s.isLargeWindow = 1;
        if (readFewBits(s, 1) === 1) {
          return -1;
        }
        n = readFewBits(s, 6);
        if (n < 10 || n > 30) {
          return -1;
        }
        return n;
      }
      return 8 + n;
    }
    return 17;
  }
  function attachDictionaryChunk(s, data) {
    if (s.runningState !== 1) {
      return makeError(s, -24);
    }
    if (s.cdNumChunks === 0) {
      s.cdChunks = new Array(16);
      s.cdChunkOffsets = new Int32Array(16);
      s.cdBlockBits = -1;
    }
    if (s.cdNumChunks === 15) {
      return makeError(s, -27);
    }
    s.cdChunks[s.cdNumChunks] = data;
    s.cdNumChunks++;
    s.cdTotalSize += data.length;
    s.cdChunkOffsets[s.cdNumChunks] = s.cdTotalSize;
    return 0;
  }
  function initState(s) {
    if (s.runningState !== 0) {
      return makeError(s, -26);
    }
    s.blockTrees = new Int32Array(3091);
    s.blockTrees[0] = 7;
    s.distRbIdx = 3;
    let result = calculateDistanceAlphabetLimit(s, 0x7FFFFFFC, 3, 120);
    if (result < 0) {
      return result;
    }
    const maxDistanceAlphabetLimit = result;
    s.distExtraBits = new Int8Array(maxDistanceAlphabetLimit);
    s.distOffset = new Int32Array(maxDistanceAlphabetLimit);
    result = initBitReader(s);
    if (result < 0) {
      return result;
    }
    s.runningState = 1;
    return 0;
  }
  function close(s) {
    if (s.runningState === 0) {
      return makeError(s, -25);
    }
    if (s.runningState > 0) {
      s.runningState = 11;
    }
    return 0;
  }
  function decodeVarLenUnsignedByte(s) {
    if (s.bitOffset >= 16) {
      s.accumulator32 = s.shortBuffer[s.halfOffset++] << 16 | s.accumulator32 >>> 16;
      s.bitOffset -= 16;
    }
    if (readFewBits(s, 1) !== 0) {
      const n = readFewBits(s, 3);
      if (n === 0) {
        return 1;
      }
      return readFewBits(s, n) + (1 << n);
    }
    return 0;
  }
  function decodeMetaBlockLength(s) {
    if (s.bitOffset >= 16) {
      s.accumulator32 = s.shortBuffer[s.halfOffset++] << 16 | s.accumulator32 >>> 16;
      s.bitOffset -= 16;
    }
    s.inputEnd = readFewBits(s, 1);
    s.metaBlockLength = 0;
    s.isUncompressed = 0;
    s.isMetadata = 0;
    if (s.inputEnd !== 0 && readFewBits(s, 1) !== 0) {
      return 0;
    }
    const sizeNibbles = readFewBits(s, 2) + 4;
    if (sizeNibbles === 7) {
      s.isMetadata = 1;
      if (readFewBits(s, 1) !== 0) {
        return makeError(s, -6);
      }
      const sizeBytes = readFewBits(s, 2);
      if (sizeBytes === 0) {
        return 0;
      }
      for (let i = 0; i < sizeBytes; ++i) {
        if (s.bitOffset >= 16) {
          s.accumulator32 = s.shortBuffer[s.halfOffset++] << 16 | s.accumulator32 >>> 16;
          s.bitOffset -= 16;
        }
        const bits = readFewBits(s, 8);
        if (bits === 0 && i + 1 === sizeBytes && sizeBytes > 1) {
          return makeError(s, -8);
        }
        s.metaBlockLength += bits << i * 8;
      }
    } else {
      for (let i = 0; i < sizeNibbles; ++i) {
        if (s.bitOffset >= 16) {
          s.accumulator32 = s.shortBuffer[s.halfOffset++] << 16 | s.accumulator32 >>> 16;
          s.bitOffset -= 16;
        }
        const bits = readFewBits(s, 4);
        if (bits === 0 && i + 1 === sizeNibbles && sizeNibbles > 4) {
          return makeError(s, -8);
        }
        s.metaBlockLength += bits << i * 4;
      }
    }
    s.metaBlockLength++;
    if (s.inputEnd === 0) {
      s.isUncompressed = readFewBits(s, 1);
    }
    return 0;
  }
  function readSymbol(tableGroup, tableIdx, s) {
    let offset = tableGroup[tableIdx];
    const v = s.accumulator32 >>> s.bitOffset;
    offset += v & 0xFF;
    const bits = tableGroup[offset] >> 16;
    const sym = tableGroup[offset] & 0xFFFF;
    if (bits <= 8) {
      s.bitOffset += bits;
      return sym;
    }
    offset += sym;
    const mask = (1 << bits) - 1;
    offset += (v & mask) >>> 8;
    s.bitOffset += (tableGroup[offset] >> 16) + 8;
    return tableGroup[offset] & 0xFFFF;
  }
  function readBlockLength(tableGroup, tableIdx, s) {
    if (s.bitOffset >= 16) {
      s.accumulator32 = s.shortBuffer[s.halfOffset++] << 16 | s.accumulator32 >>> 16;
      s.bitOffset -= 16;
    }
    const code = readSymbol(tableGroup, tableIdx, s);
    const n = BLOCK_LENGTH_N_BITS[code];
    if (s.bitOffset >= 16) {
      s.accumulator32 = s.shortBuffer[s.halfOffset++] << 16 | s.accumulator32 >>> 16;
      s.bitOffset -= 16;
    }
    return BLOCK_LENGTH_OFFSET[code] + (n <= 16 ? readFewBits(s, n) : readManyBits(s, n));
  }
  function moveToFront(v, index) {
    let i = index;
    const value = v[i];
    while (i > 0) {
      v[i] = v[i - 1];
      i--;
    }
    v[0] = value;
  }
  function inverseMoveToFrontTransform(v, vLen) {
    const mtf = new Int32Array(256);
    for (let i = 0; i < 256; ++i) {
      mtf[i] = i;
    }
    for (let i = 0; i < vLen; ++i) {
      const index = v[i] & 0xFF;
      v[i] = mtf[index];
      if (index !== 0) {
        moveToFront(mtf, index);
      }
    }
  }
  function readHuffmanCodeLengths(codeLengthCodeLengths, numSymbols, codeLengths, s) {
    let symbol = 0;
    let prevCodeLen = 8;
    let repeat = 0;
    let repeatCodeLen = 0;
    let space = 32768;
    const table = new Int32Array(33);
    const tableIdx = table.length - 1;
    buildHuffmanTable(table, tableIdx, 5, codeLengthCodeLengths, 18);
    while (symbol < numSymbols && space > 0) {
      if (s.halfOffset > 2030) {
        const result = readMoreInput(s);
        if (result < 0) {
          return result;
        }
      }
      if (s.bitOffset >= 16) {
        s.accumulator32 = s.shortBuffer[s.halfOffset++] << 16 | s.accumulator32 >>> 16;
        s.bitOffset -= 16;
      }
      const p = s.accumulator32 >>> s.bitOffset & 31;
      s.bitOffset += table[p] >> 16;
      const codeLen = table[p] & 0xFFFF;
      if (codeLen < 16) {
        repeat = 0;
        codeLengths[symbol++] = codeLen;
        if (codeLen !== 0) {
          prevCodeLen = codeLen;
          space -= 32768 >> codeLen;
        }
      } else {
        const extraBits = codeLen - 14;
        let newLen = 0;
        if (codeLen === 16) {
          newLen = prevCodeLen;
        }
        if (repeatCodeLen !== newLen) {
          repeat = 0;
          repeatCodeLen = newLen;
        }
        const oldRepeat = repeat;
        if (repeat > 0) {
          repeat -= 2;
          repeat = repeat << extraBits;
        }
        if (s.bitOffset >= 16) {
          s.accumulator32 = s.shortBuffer[s.halfOffset++] << 16 | s.accumulator32 >>> 16;
          s.bitOffset -= 16;
        }
        repeat += readFewBits(s, extraBits) + 3;
        const repeatDelta = repeat - oldRepeat;
        if (symbol + repeatDelta > numSymbols) {
          return makeError(s, -2);
        }
        for (let i = 0; i < repeatDelta; ++i) {
          codeLengths[symbol++] = repeatCodeLen;
        }
        if (repeatCodeLen !== 0) {
          space -= repeatDelta << 15 - repeatCodeLen;
        }
      }
    }
    if (space !== 0) {
      return makeError(s, -18);
    }
    codeLengths.fill(0, symbol, numSymbols);
    return 0;
  }
  function checkDupes(s, symbols, length) {
    for (let i = 0; i < length - 1; ++i) {
      for (let j = i + 1; j < length; ++j) {
        if (symbols[i] === symbols[j]) {
          return makeError(s, -7);
        }
      }
    }
    return 0;
  }
  function readSimpleHuffmanCode(alphabetSizeMax, alphabetSizeLimit, tableGroup, tableIdx, s) {
    const codeLengths = new Int32Array(alphabetSizeLimit);
    const symbols = new Int32Array(4);
    const maxBits = 1 + log2floor(alphabetSizeMax - 1);
    const numSymbols = readFewBits(s, 2) + 1;
    for (let i = 0; i < numSymbols; ++i) {
      if (s.bitOffset >= 16) {
        s.accumulator32 = s.shortBuffer[s.halfOffset++] << 16 | s.accumulator32 >>> 16;
        s.bitOffset -= 16;
      }
      const symbol = readFewBits(s, maxBits);
      if (symbol >= alphabetSizeLimit) {
        return makeError(s, -15);
      }
      symbols[i] = symbol;
    }
    const result = checkDupes(s, symbols, numSymbols);
    if (result < 0) {
      return result;
    }
    let histogramId = numSymbols;
    if (numSymbols === 4) {
      histogramId += readFewBits(s, 1);
    }
    switch (histogramId) {
      case 1:
        codeLengths[symbols[0]] = 1;
        break;
      case 2:
        codeLengths[symbols[0]] = 1;
        codeLengths[symbols[1]] = 1;
        break;
      case 3:
        codeLengths[symbols[0]] = 1;
        codeLengths[symbols[1]] = 2;
        codeLengths[symbols[2]] = 2;
        break;
      case 4:
        codeLengths[symbols[0]] = 2;
        codeLengths[symbols[1]] = 2;
        codeLengths[symbols[2]] = 2;
        codeLengths[symbols[3]] = 2;
        break;
      case 5:
        codeLengths[symbols[0]] = 1;
        codeLengths[symbols[1]] = 2;
        codeLengths[symbols[2]] = 3;
        codeLengths[symbols[3]] = 3;
        break;
      default:
        break;
    }
    return buildHuffmanTable(tableGroup, tableIdx, 8, codeLengths, alphabetSizeLimit);
  }
  function readComplexHuffmanCode(alphabetSizeLimit, skip, tableGroup, tableIdx, s) {
    const codeLengths = new Int32Array(alphabetSizeLimit);
    const codeLengthCodeLengths = new Int32Array(18);
    let space = 32;
    let numCodes = 0;
    for (let i = skip; i < 18; ++i) {
      const codeLenIdx = CODE_LENGTH_CODE_ORDER[i];
      if (s.bitOffset >= 16) {
        s.accumulator32 = s.shortBuffer[s.halfOffset++] << 16 | s.accumulator32 >>> 16;
        s.bitOffset -= 16;
      }
      const p = s.accumulator32 >>> s.bitOffset & 15;
      s.bitOffset += FIXED_TABLE[p] >> 16;
      const v = FIXED_TABLE[p] & 0xFFFF;
      codeLengthCodeLengths[codeLenIdx] = v;
      if (v !== 0) {
        space -= 32 >> v;
        numCodes++;
        if (space <= 0) {
          break;
        }
      }
    }
    if (space !== 0 && numCodes !== 1) {
      return makeError(s, -4);
    }
    const result = readHuffmanCodeLengths(codeLengthCodeLengths, alphabetSizeLimit, codeLengths, s);
    if (result < 0) {
      return result;
    }
    return buildHuffmanTable(tableGroup, tableIdx, 8, codeLengths, alphabetSizeLimit);
  }
  function readHuffmanCode(alphabetSizeMax, alphabetSizeLimit, tableGroup, tableIdx, s) {
    if (s.halfOffset > 2030) {
      const result = readMoreInput(s);
      if (result < 0) {
        return result;
      }
    }
    if (s.bitOffset >= 16) {
      s.accumulator32 = s.shortBuffer[s.halfOffset++] << 16 | s.accumulator32 >>> 16;
      s.bitOffset -= 16;
    }
    const simpleCodeOrSkip = readFewBits(s, 2);
    if (simpleCodeOrSkip === 1) {
      return readSimpleHuffmanCode(alphabetSizeMax, alphabetSizeLimit, tableGroup, tableIdx, s);
    }
    return readComplexHuffmanCode(alphabetSizeLimit, simpleCodeOrSkip, tableGroup, tableIdx, s);
  }
  function decodeContextMap(contextMapSize, contextMap, s) {
    let result;
    if (s.halfOffset > 2030) {
      result = readMoreInput(s);
      if (result < 0) {
        return result;
      }
    }
    const numTrees = decodeVarLenUnsignedByte(s) + 1;
    if (numTrees === 1) {
      contextMap.fill(0, 0, contextMapSize);
      return numTrees;
    }
    if (s.bitOffset >= 16) {
      s.accumulator32 = s.shortBuffer[s.halfOffset++] << 16 | s.accumulator32 >>> 16;
      s.bitOffset -= 16;
    }
    const useRleForZeros = readFewBits(s, 1);
    let maxRunLengthPrefix = 0;
    if (useRleForZeros !== 0) {
      maxRunLengthPrefix = readFewBits(s, 4) + 1;
    }
    const alphabetSize = numTrees + maxRunLengthPrefix;
    const tableSize = MAX_HUFFMAN_TABLE_SIZE[alphabetSize + 31 >> 5];
    const table = new Int32Array(tableSize + 1);
    const tableIdx = table.length - 1;
    result = readHuffmanCode(alphabetSize, alphabetSize, table, tableIdx, s);
    if (result < 0) {
      return result;
    }
    let i = 0;
    while (i < contextMapSize) {
      if (s.halfOffset > 2030) {
        result = readMoreInput(s);
        if (result < 0) {
          return result;
        }
      }
      if (s.bitOffset >= 16) {
        s.accumulator32 = s.shortBuffer[s.halfOffset++] << 16 | s.accumulator32 >>> 16;
        s.bitOffset -= 16;
      }
      const code = readSymbol(table, tableIdx, s);
      if (code === 0) {
        contextMap[i] = 0;
        i++;
      } else if (code <= maxRunLengthPrefix) {
        if (s.bitOffset >= 16) {
          s.accumulator32 = s.shortBuffer[s.halfOffset++] << 16 | s.accumulator32 >>> 16;
          s.bitOffset -= 16;
        }
        let reps = (1 << code) + readFewBits(s, code);
        while (reps !== 0) {
          if (i >= contextMapSize) {
            return makeError(s, -3);
          }
          contextMap[i] = 0;
          i++;
          reps--;
        }
      } else {
        contextMap[i] = code - maxRunLengthPrefix;
        i++;
      }
    }
    if (s.bitOffset >= 16) {
      s.accumulator32 = s.shortBuffer[s.halfOffset++] << 16 | s.accumulator32 >>> 16;
      s.bitOffset -= 16;
    }
    if (readFewBits(s, 1) === 1) {
      inverseMoveToFrontTransform(contextMap, contextMapSize);
    }
    return numTrees;
  }
  function decodeBlockTypeAndLength(s, treeType, numBlockTypes) {
    const ringBuffers = s.rings;
    const offset = 4 + treeType * 2;
    if (s.bitOffset >= 16) {
      s.accumulator32 = s.shortBuffer[s.halfOffset++] << 16 | s.accumulator32 >>> 16;
      s.bitOffset -= 16;
    }
    let blockType = readSymbol(s.blockTrees, 2 * treeType, s);
    const result = readBlockLength(s.blockTrees, 2 * treeType + 1, s);
    if (blockType === 1) {
      blockType = ringBuffers[offset + 1] + 1;
    } else if (blockType === 0) {
      blockType = ringBuffers[offset];
    } else {
      blockType -= 2;
    }
    if (blockType >= numBlockTypes) {
      blockType -= numBlockTypes;
    }
    ringBuffers[offset] = ringBuffers[offset + 1];
    ringBuffers[offset + 1] = blockType;
    return result;
  }
  function decodeLiteralBlockSwitch(s) {
    s.literalBlockLength = decodeBlockTypeAndLength(s, 0, s.numLiteralBlockTypes);
    const literalBlockType = s.rings[5];
    s.contextMapSlice = literalBlockType << 6;
    s.literalTreeIdx = s.contextMap[s.contextMapSlice] & 0xFF;
    const contextMode = s.contextModes[literalBlockType];
    s.contextLookupOffset1 = contextMode << 9;
    s.contextLookupOffset2 = s.contextLookupOffset1 + 256;
  }
  function decodeCommandBlockSwitch(s) {
    s.commandBlockLength = decodeBlockTypeAndLength(s, 1, s.numCommandBlockTypes);
    s.commandTreeIdx = s.rings[7];
  }
  function decodeDistanceBlockSwitch(s) {
    s.distanceBlockLength = decodeBlockTypeAndLength(s, 2, s.numDistanceBlockTypes);
    s.distContextMapSlice = s.rings[9] << 2;
  }
  function maybeReallocateRingBuffer(s) {
    let newSize = s.maxRingBufferSize;
    if (newSize > s.expectedTotalSize) {
      const minimalNewSize = s.expectedTotalSize;
      while (newSize >> 1 > minimalNewSize) {
        newSize = newSize >> 1;
      }
      if (s.inputEnd === 0 && newSize < 16384 && s.maxRingBufferSize >= 16384) {
        newSize = 16384;
      }
    }
    if (newSize <= s.ringBufferSize) {
      return;
    }
    const ringBufferSizeWithSlack = newSize + 37;
    const newBuffer = new Int8Array(ringBufferSizeWithSlack);
    const oldBuffer = s.ringBuffer;
    if (oldBuffer.length !== 0) {
      newBuffer.set(oldBuffer.subarray(0, s.ringBufferSize), 0);
    }
    s.ringBuffer = newBuffer;
    s.ringBufferSize = newSize;
  }
  function readNextMetablockHeader(s) {
    if (s.inputEnd !== 0) {
      s.nextRunningState = 10;
      s.runningState = 12;
      return 0;
    }
    s.literalTreeGroup = new Int32Array(0);
    s.commandTreeGroup = new Int32Array(0);
    s.distanceTreeGroup = new Int32Array(0);
    let result;
    if (s.halfOffset > 2030) {
      result = readMoreInput(s);
      if (result < 0) {
        return result;
      }
    }
    result = decodeMetaBlockLength(s);
    if (result < 0) {
      return result;
    }
    if (s.metaBlockLength === 0 && s.isMetadata === 0) {
      return 0;
    }
    if (s.isUncompressed !== 0 || s.isMetadata !== 0) {
      result = jumpToByteBoundary(s);
      if (result < 0) {
        return result;
      }
      if (s.isMetadata === 0) {
        s.runningState = 6;
      } else {
        s.runningState = 5;
      }
    } else {
      s.runningState = 3;
    }
    if (s.isMetadata !== 0) {
      return 0;
    }
    s.expectedTotalSize += s.metaBlockLength;
    if (s.expectedTotalSize > 1 << 30) {
      s.expectedTotalSize = 1 << 30;
    }
    if (s.ringBufferSize < s.maxRingBufferSize) {
      maybeReallocateRingBuffer(s);
    }
    return 0;
  }
  function readMetablockPartition(s, treeType, numBlockTypes) {
    let offset = s.blockTrees[2 * treeType];
    if (numBlockTypes <= 1) {
      s.blockTrees[2 * treeType + 1] = offset;
      s.blockTrees[2 * treeType + 2] = offset;
      return 1 << 28;
    }
    const blockTypeAlphabetSize = numBlockTypes + 2;
    let result = readHuffmanCode(blockTypeAlphabetSize, blockTypeAlphabetSize, s.blockTrees, 2 * treeType, s);
    if (result < 0) {
      return result;
    }
    offset += result;
    s.blockTrees[2 * treeType + 1] = offset;
    const blockLengthAlphabetSize = 26;
    result = readHuffmanCode(blockLengthAlphabetSize, blockLengthAlphabetSize, s.blockTrees, 2 * treeType + 1, s);
    if (result < 0) {
      return result;
    }
    offset += result;
    s.blockTrees[2 * treeType + 2] = offset;
    return readBlockLength(s.blockTrees, 2 * treeType + 1, s);
  }
  function calculateDistanceLut(s, alphabetSizeLimit) {
    const distExtraBits = s.distExtraBits;
    const distOffset = s.distOffset;
    const npostfix = s.distancePostfixBits;
    const ndirect = s.numDirectDistanceCodes;
    const postfix = 1 << npostfix;
    let bits = 1;
    let half = 0;
    let i = 16;
    for (let j = 0; j < ndirect; ++j) {
      distExtraBits[i] = 0;
      distOffset[i] = j + 1;
      ++i;
    }
    while (i < alphabetSizeLimit) {
      const base = ndirect + ((2 + half << bits) - 4 << npostfix) + 1;
      for (let j = 0; j < postfix; ++j) {
        distExtraBits[i] = bits;
        distOffset[i] = base + j;
        ++i;
      }
      bits = bits + half;
      half = half ^ 1;
    }
  }
  function readMetablockHuffmanCodesAndContextMaps(s) {
    s.numLiteralBlockTypes = decodeVarLenUnsignedByte(s) + 1;
    let result = readMetablockPartition(s, 0, s.numLiteralBlockTypes);
    if (result < 0) {
      return result;
    }
    s.literalBlockLength = result;
    s.numCommandBlockTypes = decodeVarLenUnsignedByte(s) + 1;
    result = readMetablockPartition(s, 1, s.numCommandBlockTypes);
    if (result < 0) {
      return result;
    }
    s.commandBlockLength = result;
    s.numDistanceBlockTypes = decodeVarLenUnsignedByte(s) + 1;
    result = readMetablockPartition(s, 2, s.numDistanceBlockTypes);
    if (result < 0) {
      return result;
    }
    s.distanceBlockLength = result;
    if (s.halfOffset > 2030) {
      result = readMoreInput(s);
      if (result < 0) {
        return result;
      }
    }
    if (s.bitOffset >= 16) {
      s.accumulator32 = s.shortBuffer[s.halfOffset++] << 16 | s.accumulator32 >>> 16;
      s.bitOffset -= 16;
    }
    s.distancePostfixBits = readFewBits(s, 2);
    s.numDirectDistanceCodes = readFewBits(s, 4) << s.distancePostfixBits;
    s.contextModes = new Int8Array(s.numLiteralBlockTypes);
    let i = 0;
    while (i < s.numLiteralBlockTypes) {
      const limit = Math.min(i + 96, s.numLiteralBlockTypes);
      while (i < limit) {
        if (s.bitOffset >= 16) {
          s.accumulator32 = s.shortBuffer[s.halfOffset++] << 16 | s.accumulator32 >>> 16;
          s.bitOffset -= 16;
        }
        s.contextModes[i] = readFewBits(s, 2);
        i++;
      }
      if (s.halfOffset > 2030) {
        result = readMoreInput(s);
        if (result < 0) {
          return result;
        }
      }
    }
    const contextMapLength = s.numLiteralBlockTypes << 6;
    s.contextMap = new Int8Array(contextMapLength);
    result = decodeContextMap(contextMapLength, s.contextMap, s);
    if (result < 0) {
      return result;
    }
    const numLiteralTrees = result;
    s.trivialLiteralContext = 1;
    for (let j = 0; j < contextMapLength; ++j) {
      if (s.contextMap[j] !== j >> 6) {
        s.trivialLiteralContext = 0;
        break;
      }
    }
    s.distContextMap = new Int8Array(s.numDistanceBlockTypes << 2);
    result = decodeContextMap(s.numDistanceBlockTypes << 2, s.distContextMap, s);
    if (result < 0) {
      return result;
    }
    const numDistTrees = result;
    s.literalTreeGroup = new Int32Array(huffmanTreeGroupAllocSize(256, numLiteralTrees));
    result = decodeHuffmanTreeGroup(256, 256, numLiteralTrees, s, s.literalTreeGroup);
    if (result < 0) {
      return result;
    }
    s.commandTreeGroup = new Int32Array(huffmanTreeGroupAllocSize(704, s.numCommandBlockTypes));
    result = decodeHuffmanTreeGroup(704, 704, s.numCommandBlockTypes, s, s.commandTreeGroup);
    if (result < 0) {
      return result;
    }
    let distanceAlphabetSizeMax = calculateDistanceAlphabetSize(s.distancePostfixBits, s.numDirectDistanceCodes, 24);
    let distanceAlphabetSizeLimit = distanceAlphabetSizeMax;
    if (s.isLargeWindow === 1) {
      distanceAlphabetSizeMax = calculateDistanceAlphabetSize(s.distancePostfixBits, s.numDirectDistanceCodes, 62);
      result = calculateDistanceAlphabetLimit(s, 0x7FFFFFFC, s.distancePostfixBits, s.numDirectDistanceCodes);
      if (result < 0) {
        return result;
      }
      distanceAlphabetSizeLimit = result;
    }
    s.distanceTreeGroup = new Int32Array(huffmanTreeGroupAllocSize(distanceAlphabetSizeLimit, numDistTrees));
    result = decodeHuffmanTreeGroup(distanceAlphabetSizeMax, distanceAlphabetSizeLimit, numDistTrees, s, s.distanceTreeGroup);
    if (result < 0) {
      return result;
    }
    calculateDistanceLut(s, distanceAlphabetSizeLimit);
    s.contextMapSlice = 0;
    s.distContextMapSlice = 0;
    s.contextLookupOffset1 = s.contextModes[0] * 512;
    s.contextLookupOffset2 = s.contextLookupOffset1 + 256;
    s.literalTreeIdx = 0;
    s.commandTreeIdx = 0;
    s.rings[4] = 1;
    s.rings[5] = 0;
    s.rings[6] = 1;
    s.rings[7] = 0;
    s.rings[8] = 1;
    s.rings[9] = 0;
    return 0;
  }
  function copyUncompressedData(s) {
    const ringBuffer = s.ringBuffer;
    let result;
    if (s.metaBlockLength <= 0) {
      result = reload(s);
      if (result < 0) {
        return result;
      }
      s.runningState = 2;
      return 0;
    }
    const chunkLength = Math.min(s.ringBufferSize - s.pos, s.metaBlockLength);
    result = copyRawBytes(s, ringBuffer, s.pos, chunkLength);
    if (result < 0) {
      return result;
    }
    s.metaBlockLength -= chunkLength;
    s.pos += chunkLength;
    if (s.pos === s.ringBufferSize) {
      s.nextRunningState = 6;
      s.runningState = 12;
      return 0;
    }
    result = reload(s);
    if (result < 0) {
      return result;
    }
    s.runningState = 2;
    return 0;
  }
  function writeRingBuffer(s) {
    const toWrite = Math.min(s.outputLength - s.outputUsed, s.ringBufferBytesReady - s.ringBufferBytesWritten);
    if (toWrite !== 0) {
      s.output.set(s.ringBuffer.subarray(s.ringBufferBytesWritten, s.ringBufferBytesWritten + toWrite), s.outputOffset + s.outputUsed);
      s.outputUsed += toWrite;
      s.ringBufferBytesWritten += toWrite;
    }
    if (s.outputUsed < s.outputLength) {
      return 0;
    }
    return 2;
  }
  function huffmanTreeGroupAllocSize(alphabetSizeLimit, n) {
    const maxTableSize = MAX_HUFFMAN_TABLE_SIZE[alphabetSizeLimit + 31 >> 5];
    return n + n * maxTableSize;
  }
  function decodeHuffmanTreeGroup(alphabetSizeMax, alphabetSizeLimit, n, s, group) {
    let next = n;
    for (let i = 0; i < n; ++i) {
      group[i] = next;
      const result = readHuffmanCode(alphabetSizeMax, alphabetSizeLimit, group, i, s);
      if (result < 0) {
        return result;
      }
      next += result;
    }
    return 0;
  }
  function calculateFence(s) {
    let result = s.ringBufferSize;
    if (s.isEager !== 0) {
      result = Math.min(result, s.ringBufferBytesWritten + s.outputLength - s.outputUsed);
    }
    return result;
  }
  function doUseDictionary(s, fence) {
    if (s.distance > 0x7FFFFFFC) {
      return makeError(s, -9);
    }
    const address = s.distance - s.maxDistance - 1 - s.cdTotalSize;
    if (address < 0) {
      const result = initializeCompoundDictionaryCopy(s, -address - 1, s.copyLength);
      if (result < 0) {
        return result;
      }
      s.runningState = 14;
    } else {
      const dictionaryData = data;
      const wordLength = s.copyLength;
      if (wordLength > 31) {
        return makeError(s, -9);
      }
      const shift = sizeBits[wordLength];
      if (shift === 0) {
        return makeError(s, -9);
      }
      let offset = offsets[wordLength];
      const mask = (1 << shift) - 1;
      const wordIdx = address & mask;
      const transformIdx = address >> shift;
      offset += wordIdx * wordLength;
      const transforms = RFC_TRANSFORMS;
      if (transformIdx >= transforms.numTransforms) {
        return makeError(s, -9);
      }
      const len = transformDictionaryWord(s.ringBuffer, s.pos, dictionaryData, offset, wordLength, transforms, transformIdx);
      s.pos += len;
      s.metaBlockLength -= len;
      if (s.pos >= fence) {
        s.nextRunningState = 4;
        s.runningState = 12;
        return 0;
      }
      s.runningState = 4;
    }
    return 0;
  }
  function initializeCompoundDictionary(s) {
    s.cdBlockMap = new Int8Array(256);
    let blockBits = 8;
    while (s.cdTotalSize - 1 >> blockBits !== 0) {
      blockBits++;
    }
    blockBits -= 8;
    s.cdBlockBits = blockBits;
    let cursor = 0;
    let index = 0;
    while (cursor < s.cdTotalSize) {
      while (s.cdChunkOffsets[index + 1] < cursor) {
        index++;
      }
      s.cdBlockMap[cursor >> blockBits] = index;
      cursor += 1 << blockBits;
    }
  }
  function initializeCompoundDictionaryCopy(s, address, length) {
    if (s.cdBlockBits === -1) {
      initializeCompoundDictionary(s);
    }
    let index = s.cdBlockMap[address >> s.cdBlockBits];
    while (address >= s.cdChunkOffsets[index + 1]) {
      index++;
    }
    if (s.cdTotalSize > address + length) {
      return makeError(s, -9);
    }
    s.distRbIdx = s.distRbIdx + 1 & 0x3;
    s.rings[s.distRbIdx] = s.distance;
    s.metaBlockLength -= length;
    s.cdBrIndex = index;
    s.cdBrOffset = address - s.cdChunkOffsets[index];
    s.cdBrLength = length;
    s.cdBrCopied = 0;
    return 0;
  }
  function copyFromCompoundDictionary(s, fence) {
    let pos = s.pos;
    const origPos = pos;
    while (s.cdBrLength !== s.cdBrCopied) {
      const space = fence - pos;
      const chunkLength = s.cdChunkOffsets[s.cdBrIndex + 1] - s.cdChunkOffsets[s.cdBrIndex];
      const remChunkLength = chunkLength - s.cdBrOffset;
      let length = s.cdBrLength - s.cdBrCopied;
      if (length > remChunkLength) {
        length = remChunkLength;
      }
      if (length > space) {
        length = space;
      }
      s.ringBuffer.set(s.cdChunks[s.cdBrIndex].subarray(s.cdBrOffset, s.cdBrOffset + length), pos);
      pos += length;
      s.cdBrOffset += length;
      s.cdBrCopied += length;
      if (length === remChunkLength) {
        s.cdBrIndex++;
        s.cdBrOffset = 0;
      }
      if (pos >= fence) {
        break;
      }
    }
    return pos - origPos;
  }
  function decompress(s) {
    let result;
    if (s.runningState === 0) {
      return makeError(s, -25);
    }
    if (s.runningState < 0) {
      return makeError(s, -28);
    }
    if (s.runningState === 11) {
      return makeError(s, -22);
    }
    if (s.runningState === 1) {
      const windowBits = decodeWindowBits(s);
      if (windowBits === -1) {
        return makeError(s, -11);
      }
      s.maxRingBufferSize = 1 << windowBits;
      s.maxBackwardDistance = s.maxRingBufferSize - 16;
      s.runningState = 2;
    }
    let fence = calculateFence(s);
    let ringBufferMask = s.ringBufferSize - 1;
    let ringBuffer = s.ringBuffer;
    while (s.runningState !== 10) {
      switch (s.runningState) {
        case 2:
          if (s.metaBlockLength < 0) {
            return makeError(s, -10);
          }
          result = readNextMetablockHeader(s);
          if (result < 0) {
            return result;
          }
          fence = calculateFence(s);
          ringBufferMask = s.ringBufferSize - 1;
          ringBuffer = s.ringBuffer;
          continue;
        case 3:
          result = readMetablockHuffmanCodesAndContextMaps(s);
          if (result < 0) {
            return result;
          }
          s.runningState = 4;
          continue;
        case 4:
          if (s.metaBlockLength <= 0) {
            s.runningState = 2;
            continue;
          }
          if (s.halfOffset > 2030) {
            result = readMoreInput(s);
            if (result < 0) {
              return result;
            }
          }
          if (s.commandBlockLength === 0) {
            decodeCommandBlockSwitch(s);
          }
          s.commandBlockLength--;
          if (s.bitOffset >= 16) {
            s.accumulator32 = s.shortBuffer[s.halfOffset++] << 16 | s.accumulator32 >>> 16;
            s.bitOffset -= 16;
          }
          const cmdCode = readSymbol(s.commandTreeGroup, s.commandTreeIdx, s) << 2;
          const insertAndCopyExtraBits = CMD_LOOKUP[cmdCode];
          const insertLengthOffset = CMD_LOOKUP[cmdCode + 1];
          const copyLengthOffset = CMD_LOOKUP[cmdCode + 2];
          s.distanceCode = CMD_LOOKUP[cmdCode + 3];
          if (s.bitOffset >= 16) {
            s.accumulator32 = s.shortBuffer[s.halfOffset++] << 16 | s.accumulator32 >>> 16;
            s.bitOffset -= 16;
          }
          const insertLengthExtraBits = insertAndCopyExtraBits & 0xFF;
          s.insertLength = insertLengthOffset + (insertLengthExtraBits <= 16 ? readFewBits(s, insertLengthExtraBits) : readManyBits(s, insertLengthExtraBits));
          if (s.bitOffset >= 16) {
            s.accumulator32 = s.shortBuffer[s.halfOffset++] << 16 | s.accumulator32 >>> 16;
            s.bitOffset -= 16;
          }
          const copyLengthExtraBits = insertAndCopyExtraBits >> 8;
          s.copyLength = copyLengthOffset + (copyLengthExtraBits <= 16 ? readFewBits(s, copyLengthExtraBits) : readManyBits(s, copyLengthExtraBits));
          s.j = 0;
          s.runningState = 7;
          continue;
        case 7:
          if (s.trivialLiteralContext !== 0) {
            while (s.j < s.insertLength) {
              if (s.halfOffset > 2030) {
                result = readMoreInput(s);
                if (result < 0) {
                  return result;
                }
              }
              if (s.literalBlockLength === 0) {
                decodeLiteralBlockSwitch(s);
              }
              s.literalBlockLength--;
              if (s.bitOffset >= 16) {
                s.accumulator32 = s.shortBuffer[s.halfOffset++] << 16 | s.accumulator32 >>> 16;
                s.bitOffset -= 16;
              }
              ringBuffer[s.pos] = readSymbol(s.literalTreeGroup, s.literalTreeIdx, s);
              s.pos++;
              s.j++;
              if (s.pos >= fence) {
                s.nextRunningState = 7;
                s.runningState = 12;
                break;
              }
            }
          } else {
            let prevByte1 = ringBuffer[s.pos - 1 & ringBufferMask] & 0xFF;
            let prevByte2 = ringBuffer[s.pos - 2 & ringBufferMask] & 0xFF;
            while (s.j < s.insertLength) {
              if (s.halfOffset > 2030) {
                result = readMoreInput(s);
                if (result < 0) {
                  return result;
                }
              }
              if (s.literalBlockLength === 0) {
                decodeLiteralBlockSwitch(s);
              }
              const literalContext = LOOKUP[s.contextLookupOffset1 + prevByte1] | LOOKUP[s.contextLookupOffset2 + prevByte2];
              const literalTreeIdx = s.contextMap[s.contextMapSlice + literalContext] & 0xFF;
              s.literalBlockLength--;
              prevByte2 = prevByte1;
              if (s.bitOffset >= 16) {
                s.accumulator32 = s.shortBuffer[s.halfOffset++] << 16 | s.accumulator32 >>> 16;
                s.bitOffset -= 16;
              }
              prevByte1 = readSymbol(s.literalTreeGroup, literalTreeIdx, s);
              ringBuffer[s.pos] = prevByte1;
              s.pos++;
              s.j++;
              if (s.pos >= fence) {
                s.nextRunningState = 7;
                s.runningState = 12;
                break;
              }
            }
          }
          if (s.runningState !== 7) {
            continue;
          }
          s.metaBlockLength -= s.insertLength;
          if (s.metaBlockLength <= 0) {
            s.runningState = 4;
            continue;
          }
          let distanceCode = s.distanceCode;
          if (distanceCode < 0) {
            s.distance = s.rings[s.distRbIdx];
          } else {
            if (s.halfOffset > 2030) {
              result = readMoreInput(s);
              if (result < 0) {
                return result;
              }
            }
            if (s.distanceBlockLength === 0) {
              decodeDistanceBlockSwitch(s);
            }
            s.distanceBlockLength--;
            if (s.bitOffset >= 16) {
              s.accumulator32 = s.shortBuffer[s.halfOffset++] << 16 | s.accumulator32 >>> 16;
              s.bitOffset -= 16;
            }
            const distTreeIdx = s.distContextMap[s.distContextMapSlice + distanceCode] & 0xFF;
            distanceCode = readSymbol(s.distanceTreeGroup, distTreeIdx, s);
            if (distanceCode < 16) {
              const index = s.distRbIdx + DISTANCE_SHORT_CODE_INDEX_OFFSET[distanceCode] & 0x3;
              s.distance = s.rings[index] + DISTANCE_SHORT_CODE_VALUE_OFFSET[distanceCode];
              if (s.distance < 0) {
                return makeError(s, -12);
              }
            } else {
              const extraBits = s.distExtraBits[distanceCode];
              let bits;
              if (s.bitOffset + extraBits <= 32) {
                bits = readFewBits(s, extraBits);
              } else {
                if (s.bitOffset >= 16) {
                  s.accumulator32 = s.shortBuffer[s.halfOffset++] << 16 | s.accumulator32 >>> 16;
                  s.bitOffset -= 16;
                }
                bits = extraBits <= 16 ? readFewBits(s, extraBits) : readManyBits(s, extraBits);
              }
              s.distance = s.distOffset[distanceCode] + (bits << s.distancePostfixBits);
            }
          }
          if (s.maxDistance !== s.maxBackwardDistance && s.pos < s.maxBackwardDistance) {
            s.maxDistance = s.pos;
          } else {
            s.maxDistance = s.maxBackwardDistance;
          }
          if (s.distance > s.maxDistance) {
            s.runningState = 9;
            continue;
          }
          if (distanceCode > 0) {
            s.distRbIdx = s.distRbIdx + 1 & 0x3;
            s.rings[s.distRbIdx] = s.distance;
          }
          if (s.copyLength > s.metaBlockLength) {
            return makeError(s, -9);
          }
          s.j = 0;
          s.runningState = 8;
          continue;
        case 8:
          let src = s.pos - s.distance & ringBufferMask;
          let dst = s.pos;
          const copyLength = s.copyLength - s.j;
          const srcEnd = src + copyLength;
          const dstEnd = dst + copyLength;
          if (srcEnd < ringBufferMask && dstEnd < ringBufferMask) {
            if (copyLength < 12 || srcEnd > dst && dstEnd > src) {
              const numQuads = copyLength + 3 >> 2;
              for (let k = 0; k < numQuads; ++k) {
                ringBuffer[dst++] = ringBuffer[src++];
                ringBuffer[dst++] = ringBuffer[src++];
                ringBuffer[dst++] = ringBuffer[src++];
                ringBuffer[dst++] = ringBuffer[src++];
              }
            } else {
              ringBuffer.copyWithin(dst, src, srcEnd);
            }
            s.j += copyLength;
            s.metaBlockLength -= copyLength;
            s.pos += copyLength;
          } else {
            while (s.j < s.copyLength) {
              ringBuffer[s.pos] = ringBuffer[s.pos - s.distance & ringBufferMask];
              s.metaBlockLength--;
              s.pos++;
              s.j++;
              if (s.pos >= fence) {
                s.nextRunningState = 8;
                s.runningState = 12;
                break;
              }
            }
          }
          if (s.runningState === 8) {
            s.runningState = 4;
          }
          continue;
        case 9:
          result = doUseDictionary(s, fence);
          if (result < 0) {
            return result;
          }
          continue;
        case 14:
          s.pos += copyFromCompoundDictionary(s, fence);
          if (s.pos >= fence) {
            s.nextRunningState = 14;
            s.runningState = 12;
            return 2;
          }
          s.runningState = 4;
          continue;
        case 5:
          while (s.metaBlockLength > 0) {
            if (s.halfOffset > 2030) {
              result = readMoreInput(s);
              if (result < 0) {
                return result;
              }
            }
            if (s.bitOffset >= 16) {
              s.accumulator32 = s.shortBuffer[s.halfOffset++] << 16 | s.accumulator32 >>> 16;
              s.bitOffset -= 16;
            }
            readFewBits(s, 8);
            s.metaBlockLength--;
          }
          s.runningState = 2;
          continue;
        case 6:
          result = copyUncompressedData(s);
          if (result < 0) {
            return result;
          }
          continue;
        case 12:
          s.ringBufferBytesReady = Math.min(s.pos, s.ringBufferSize);
          s.runningState = 13;
          continue;
        case 13:
          result = writeRingBuffer(s);
          if (result !== 0) {
            return result;
          }
          if (s.pos >= s.maxBackwardDistance) {
            s.maxDistance = s.maxBackwardDistance;
          }
          if (s.pos >= s.ringBufferSize) {
            if (s.pos > s.ringBufferSize) {
              ringBuffer.copyWithin(0, s.ringBufferSize, s.pos);
            }
            s.pos = s.pos & ringBufferMask;
            s.ringBufferBytesWritten = 0;
          }
          s.runningState = s.nextRunningState;
          continue;
        default:
          return makeError(s, -28);
      }
    }
    if (s.runningState !== 10) {
      return makeError(s, -29);
    }
    if (s.metaBlockLength < 0) {
      return makeError(s, -10);
    }
    result = jumpToByteBoundary(s);
    if (result !== 0) {
      return result;
    }
    result = checkHealth(s, 1);
    if (result !== 0) {
      return result;
    }
    return 1;
  }
  function Transforms(numTransforms, prefixSuffixLen, prefixSuffixCount) {
    this.numTransforms = 0;
    this.triplets = new Int32Array(0);
    this.prefixSuffixStorage = new Int8Array(0);
    this.prefixSuffixHeads = new Int32Array(0);
    this.params = new Int16Array(0);
    this.numTransforms = numTransforms;
    this.triplets = new Int32Array(numTransforms * 3);
    this.params = new Int16Array(numTransforms);
    this.prefixSuffixStorage = new Int8Array(prefixSuffixLen);
    this.prefixSuffixHeads = new Int32Array(prefixSuffixCount + 1);
  }
  const RFC_TRANSFORMS = new Transforms(121, 167, 50);
  function unpackTransforms(prefixSuffix, prefixSuffixHeads, transforms, prefixSuffixSrc, transformsSrc) {
    const prefixSuffixBytes = toUtf8Runes(prefixSuffixSrc);
    const n = prefixSuffixBytes.length;
    let index = 1;
    let j = 0;
    for (let i = 0; i < n; ++i) {
      const c = prefixSuffixBytes[i];
      if (c === 35) {
        prefixSuffixHeads[index++] = j;
      } else {
        prefixSuffix[j++] = c;
      }
    }
    for (let i = 0; i < 363; ++i) {
      transforms[i] = transformsSrc.charCodeAt(i) - 32;
    }
  }
  unpackTransforms(RFC_TRANSFORMS.prefixSuffixStorage, RFC_TRANSFORMS.prefixSuffixHeads, RFC_TRANSFORMS.triplets, "# #s #, #e #.# the #.com/#\xC2\xA0# of # and # in # to #\"#\">#\n#]# for # a # that #. # with #'# from # by #. The # on # as # is #ing #\n\t#:#ed #(# at #ly #=\"# of the #. This #,# not #er #al #='#ful #ive #less #est #ize #ous #", "     !! ! ,  *!  &!  \" !  ) *   * -  ! # !  #!*!  +  ,$ !  -  %  .  / #   0  1 .  \"   2  3!*   4%  ! # /   5  6  7  8 0  1 &   $   9 +   :  ;  < '  !=  >  ?! 4  @ 4  2  &   A *# (   B  C& ) %  ) !*# *-% A +! *.  D! %'  & E *6  F  G% ! *A *%  H! D  I!+!  J!+   K +- *4! A  L!*4  M  N +6  O!*% +.! K *G  P +%(  ! G *D +D  Q +# *K!*G!+D!+# +G +A +4!+% +K!+4!*D!+K!*K");
  function transformDictionaryWord(dst, dstOffset, src, srcOffset, wordLen, transforms, transformIndex) {
    let offset = dstOffset;
    const triplets = transforms.triplets;
    const prefixSuffixStorage = transforms.prefixSuffixStorage;
    const prefixSuffixHeads = transforms.prefixSuffixHeads;
    const transformOffset = 3 * transformIndex;
    const prefixIdx = triplets[transformOffset];
    const transformType = triplets[transformOffset + 1];
    const suffixIdx = triplets[transformOffset + 2];
    let prefix = prefixSuffixHeads[prefixIdx];
    const prefixEnd = prefixSuffixHeads[prefixIdx + 1];
    let suffix = prefixSuffixHeads[suffixIdx];
    const suffixEnd = prefixSuffixHeads[suffixIdx + 1];
    let omitFirst = transformType - 11;
    let omitLast = transformType;
    if (omitFirst < 1 || omitFirst > 9) {
      omitFirst = 0;
    }
    if (omitLast < 1 || omitLast > 9) {
      omitLast = 0;
    }
    while (prefix !== prefixEnd) {
      dst[offset++] = prefixSuffixStorage[prefix++];
    }
    let len = wordLen;
    if (omitFirst > len) {
      omitFirst = len;
    }
    let dictOffset = srcOffset + omitFirst;
    len -= omitFirst;
    len -= omitLast;
    let i = len;
    while (i > 0) {
      dst[offset++] = src[dictOffset++];
      i--;
    }
    if (transformType === 10 || transformType === 11) {
      let uppercaseOffset = offset - len;
      if (transformType === 10) {
        len = 1;
      }
      while (len > 0) {
        const c0 = dst[uppercaseOffset] & 0xFF;
        if (c0 < 0xC0) {
          if (c0 >= 97 && c0 <= 122) {
            dst[uppercaseOffset] = dst[uppercaseOffset] ^ 32;
          }
          uppercaseOffset += 1;
          len -= 1;
        } else if (c0 < 0xE0) {
          dst[uppercaseOffset + 1] = dst[uppercaseOffset + 1] ^ 32;
          uppercaseOffset += 2;
          len -= 2;
        } else {
          dst[uppercaseOffset + 2] = dst[uppercaseOffset + 2] ^ 5;
          uppercaseOffset += 3;
          len -= 3;
        }
      }
    } else if (transformType === 21 || transformType === 22) {
      let shiftOffset = offset - len;
      const param = transforms.params[transformIndex];
      let scalar = (param & 0x7FFF) + (0x1000000 - (param & 0x8000));
      while (len > 0) {
        let step = 1;
        const c0 = dst[shiftOffset] & 0xFF;
        if (c0 < 0x80) {
          scalar += c0;
          dst[shiftOffset] = scalar & 0x7F;
        } else if (c0 < 0xC0) {} else if (c0 < 0xE0) {
          if (len >= 2) {
            const c1 = dst[shiftOffset + 1];
            scalar += c1 & 0x3F | (c0 & 0x1F) << 6;
            dst[shiftOffset] = 0xC0 | scalar >> 6 & 0x1F;
            dst[shiftOffset + 1] = c1 & 0xC0 | scalar & 0x3F;
            step = 2;
          } else {
            step = len;
          }
        } else if (c0 < 0xF0) {
          if (len >= 3) {
            const c1 = dst[shiftOffset + 1];
            const c2 = dst[shiftOffset + 2];
            scalar += c2 & 0x3F | (c1 & 0x3F) << 6 | (c0 & 0x0F) << 12;
            dst[shiftOffset] = 0xE0 | scalar >> 12 & 0x0F;
            dst[shiftOffset + 1] = c1 & 0xC0 | scalar >> 6 & 0x3F;
            dst[shiftOffset + 2] = c2 & 0xC0 | scalar & 0x3F;
            step = 3;
          } else {
            step = len;
          }
        } else if (c0 < 0xF8) {
          if (len >= 4) {
            const c1 = dst[shiftOffset + 1];
            const c2 = dst[shiftOffset + 2];
            const c3 = dst[shiftOffset + 3];
            scalar += c3 & 0x3F | (c2 & 0x3F) << 6 | (c1 & 0x3F) << 12 | (c0 & 0x07) << 18;
            dst[shiftOffset] = 0xF0 | scalar >> 18 & 0x07;
            dst[shiftOffset + 1] = c1 & 0xC0 | scalar >> 12 & 0x3F;
            dst[shiftOffset + 2] = c2 & 0xC0 | scalar >> 6 & 0x3F;
            dst[shiftOffset + 3] = c3 & 0xC0 | scalar & 0x3F;
            step = 4;
          } else {
            step = len;
          }
        }
        shiftOffset += step;
        len -= step;
        if (transformType === 21) {
          len = 0;
        }
      }
    }
    while (suffix !== suffixEnd) {
      dst[offset++] = prefixSuffixStorage[suffix++];
    }
    return offset - dstOffset;
  }
  function getNextKey(key, len) {
    let step = 1 << len - 1;
    while ((key & step) !== 0) {
      step = step >> 1;
    }
    return (key & step - 1) + step;
  }
  function replicateValue(table, offset, step, end, item) {
    let pos = end;
    while (pos > 0) {
      pos -= step;
      table[offset + pos] = item;
    }
  }
  function nextTableBitSize(count, len, rootBits) {
    let bits = len;
    let left = 1 << bits - rootBits;
    while (bits < 15) {
      left -= count[bits];
      if (left <= 0) {
        break;
      }
      bits++;
      left = left << 1;
    }
    return bits - rootBits;
  }
  function buildHuffmanTable(tableGroup, tableIdx, rootBits, codeLengths, codeLengthsSize) {
    const tableOffset = tableGroup[tableIdx];
    const sorted = new Int32Array(codeLengthsSize);
    const count = new Int32Array(16);
    const offset = new Int32Array(16);
    for (let sym = 0; sym < codeLengthsSize; ++sym) {
      count[codeLengths[sym]]++;
    }
    offset[1] = 0;
    for (let len = 1; len < 15; ++len) {
      offset[len + 1] = offset[len] + count[len];
    }
    for (let sym = 0; sym < codeLengthsSize; ++sym) {
      if (codeLengths[sym] !== 0) {
        sorted[offset[codeLengths[sym]]++] = sym;
      }
    }
    let tableBits = rootBits;
    let tableSize = 1 << tableBits;
    let totalSize = tableSize;
    if (offset[15] === 1) {
      for (let k = 0; k < totalSize; ++k) {
        tableGroup[tableOffset + k] = sorted[0];
      }
      return totalSize;
    }
    let key = 0;
    let symbol = 0;
    let step = 1;
    for (let len = 1; len <= rootBits; ++len) {
      step = step << 1;
      while (count[len] > 0) {
        replicateValue(tableGroup, tableOffset + key, step, tableSize, len << 16 | sorted[symbol++]);
        key = getNextKey(key, len);
        count[len]--;
      }
    }
    const mask = totalSize - 1;
    let low = -1;
    let currentOffset = tableOffset;
    step = 1;
    for (let len = rootBits + 1; len <= 15; ++len) {
      step = step << 1;
      while (count[len] > 0) {
        if ((key & mask) !== low) {
          currentOffset += tableSize;
          tableBits = nextTableBitSize(count, len, rootBits);
          tableSize = 1 << tableBits;
          totalSize += tableSize;
          low = key & mask;
          tableGroup[tableOffset + low] = tableBits + rootBits << 16 | currentOffset - tableOffset - low;
        }
        replicateValue(tableGroup, currentOffset + (key >> rootBits), step, tableSize, len - rootBits << 16 | sorted[symbol++]);
        key = getNextKey(key, len);
        count[len]--;
      }
    }
    return totalSize;
  }
  function readMoreInput(s) {
    if (s.endOfStreamReached !== 0) {
      if (halfAvailable(s) >= -2) {
        return 0;
      }
      return makeError(s, -16);
    }
    const readOffset = s.halfOffset << 1;
    let bytesInBuffer = 4096 - readOffset;
    s.byteBuffer.copyWithin(0, readOffset, 4096);
    s.halfOffset = 0;
    while (bytesInBuffer < 4096) {
      const spaceLeft = 4096 - bytesInBuffer;
      const len = readInput(s, s.byteBuffer, bytesInBuffer, spaceLeft);
      if (len < -1) {
        return len;
      }
      if (len <= 0) {
        s.endOfStreamReached = 1;
        s.tailBytes = bytesInBuffer;
        bytesInBuffer += 1;
        break;
      }
      bytesInBuffer += len;
    }
    bytesToNibbles(s, bytesInBuffer);
    return 0;
  }
  function checkHealth(s, endOfStream) {
    if (s.endOfStreamReached === 0) {
      return 0;
    }
    const byteOffset = (s.halfOffset << 1) + (s.bitOffset + 7 >> 3) - 4;
    if (byteOffset > s.tailBytes) {
      return makeError(s, -13);
    }
    if (endOfStream !== 0 && byteOffset !== s.tailBytes) {
      return makeError(s, -17);
    }
    return 0;
  }
  function readFewBits(s, n) {
    const v = s.accumulator32 >>> s.bitOffset & (1 << n) - 1;
    s.bitOffset += n;
    return v;
  }
  function readManyBits(s, n) {
    const low = readFewBits(s, 16);
    s.accumulator32 = s.shortBuffer[s.halfOffset++] << 16 | s.accumulator32 >>> 16;
    s.bitOffset -= 16;
    return low | readFewBits(s, n - 16) << 16;
  }
  function initBitReader(s) {
    s.byteBuffer = new Int8Array(4160);
    s.accumulator32 = 0;
    s.shortBuffer = new Int16Array(2080);
    s.bitOffset = 32;
    s.halfOffset = 2048;
    s.endOfStreamReached = 0;
    return prepare(s);
  }
  function prepare(s) {
    if (s.halfOffset > 2030) {
      const result = readMoreInput(s);
      if (result !== 0) {
        return result;
      }
    }
    let health = checkHealth(s, 0);
    if (health !== 0) {
      return health;
    }
    s.accumulator32 = s.shortBuffer[s.halfOffset++] << 16 | s.accumulator32 >>> 16;
    s.bitOffset -= 16;
    s.accumulator32 = s.shortBuffer[s.halfOffset++] << 16 | s.accumulator32 >>> 16;
    s.bitOffset -= 16;
    return 0;
  }
  function reload(s) {
    if (s.bitOffset === 32) {
      return prepare(s);
    }
    return 0;
  }
  function jumpToByteBoundary(s) {
    const padding = 32 - s.bitOffset & 7;
    if (padding !== 0) {
      const paddingBits = readFewBits(s, padding);
      if (paddingBits !== 0) {
        return makeError(s, -5);
      }
    }
    return 0;
  }
  function halfAvailable(s) {
    let limit = 2048;
    if (s.endOfStreamReached !== 0) {
      limit = s.tailBytes + 1 >> 1;
    }
    return limit - s.halfOffset;
  }
  function copyRawBytes(s, data, offset, length) {
    let pos = offset;
    let len = length;
    if ((s.bitOffset & 7) !== 0) {
      return makeError(s, -30);
    }
    while (s.bitOffset !== 32 && len !== 0) {
      data[pos++] = s.accumulator32 >>> s.bitOffset;
      s.bitOffset += 8;
      len--;
    }
    if (len === 0) {
      return 0;
    }
    const copyNibbles = Math.min(halfAvailable(s), len >> 1);
    if (copyNibbles > 0) {
      const readOffset = s.halfOffset << 1;
      const delta = copyNibbles << 1;
      data.set(s.byteBuffer.subarray(readOffset, readOffset + delta), pos);
      pos += delta;
      len -= delta;
      s.halfOffset += copyNibbles;
    }
    if (len === 0) {
      return 0;
    }
    if (halfAvailable(s) > 0) {
      if (s.bitOffset >= 16) {
        s.accumulator32 = s.shortBuffer[s.halfOffset++] << 16 | s.accumulator32 >>> 16;
        s.bitOffset -= 16;
      }
      while (len !== 0) {
        data[pos++] = s.accumulator32 >>> s.bitOffset;
        s.bitOffset += 8;
        len--;
      }
      return checkHealth(s, 0);
    }
    while (len > 0) {
      const chunkLen = readInput(s, data, pos, len);
      if (chunkLen < -1) {
        return chunkLen;
      }
      if (chunkLen <= 0) {
        return makeError(s, -16);
      }
      pos += chunkLen;
      len -= chunkLen;
    }
    return 0;
  }
  function bytesToNibbles(s, byteLen) {
    const byteBuffer = s.byteBuffer;
    const halfLen = byteLen >> 1;
    const shortBuffer = s.shortBuffer;
    for (let i = 0; i < halfLen; ++i) {
      shortBuffer[i] = byteBuffer[i * 2] & 0xFF | (byteBuffer[i * 2 + 1] & 0xFF) << 8;
    }
  }
  const LOOKUP = new Int32Array(2048);
  function unpackLookupTable(lookup, utfMap, utfRle) {
    for (let i = 0; i < 256; ++i) {
      lookup[i] = i & 0x3F;
      lookup[512 + i] = i >> 2;
      lookup[1792 + i] = 2 + (i >> 6);
    }
    for (let i = 0; i < 128; ++i) {
      lookup[1024 + i] = 4 * (utfMap.charCodeAt(i) - 32);
    }
    for (let i = 0; i < 64; ++i) {
      lookup[1152 + i] = i & 1;
      lookup[1216 + i] = 2 + (i & 1);
    }
    let offset = 1280;
    for (let k = 0; k < 19; ++k) {
      const value = k & 3;
      const rep = utfRle.charCodeAt(k) - 32;
      for (let i = 0; i < rep; ++i) {
        lookup[offset++] = value;
      }
    }
    for (let i = 0; i < 16; ++i) {
      lookup[1792 + i] = 1;
      lookup[2032 + i] = 6;
    }
    lookup[1792] = 0;
    lookup[2047] = 7;
    for (let i = 0; i < 256; ++i) {
      lookup[1536 + i] = lookup[1792 + i] << 3;
    }
  }
  unpackLookupTable(LOOKUP, "         !!  !                  \"#$##%#$&'##(#)#++++++++++((&*'##,---,---,-----,-----,-----&#'###.///.///./////./////./////&#'# ", "A/*  ':  & : $  \x81 @");
  function State() {
    this.ringBuffer = new Int8Array(0);
    this.contextModes = new Int8Array(0);
    this.contextMap = new Int8Array(0);
    this.distContextMap = new Int8Array(0);
    this.distExtraBits = new Int8Array(0);
    this.output = new Int8Array(0);
    this.byteBuffer = new Int8Array(0);
    this.shortBuffer = new Int16Array(0);
    this.intBuffer = new Int32Array(0);
    this.rings = new Int32Array(0);
    this.blockTrees = new Int32Array(0);
    this.literalTreeGroup = new Int32Array(0);
    this.commandTreeGroup = new Int32Array(0);
    this.distanceTreeGroup = new Int32Array(0);
    this.distOffset = new Int32Array(0);
    this.accumulator64 = 0;
    this.runningState = 0;
    this.nextRunningState = 0;
    this.accumulator32 = 0;
    this.bitOffset = 0;
    this.halfOffset = 0;
    this.tailBytes = 0;
    this.endOfStreamReached = 0;
    this.metaBlockLength = 0;
    this.inputEnd = 0;
    this.isUncompressed = 0;
    this.isMetadata = 0;
    this.literalBlockLength = 0;
    this.numLiteralBlockTypes = 0;
    this.commandBlockLength = 0;
    this.numCommandBlockTypes = 0;
    this.distanceBlockLength = 0;
    this.numDistanceBlockTypes = 0;
    this.pos = 0;
    this.maxDistance = 0;
    this.distRbIdx = 0;
    this.trivialLiteralContext = 0;
    this.literalTreeIdx = 0;
    this.commandTreeIdx = 0;
    this.j = 0;
    this.insertLength = 0;
    this.contextMapSlice = 0;
    this.distContextMapSlice = 0;
    this.contextLookupOffset1 = 0;
    this.contextLookupOffset2 = 0;
    this.distanceCode = 0;
    this.numDirectDistanceCodes = 0;
    this.distancePostfixBits = 0;
    this.distance = 0;
    this.copyLength = 0;
    this.maxBackwardDistance = 0;
    this.maxRingBufferSize = 0;
    this.ringBufferSize = 0;
    this.expectedTotalSize = 0;
    this.outputOffset = 0;
    this.outputLength = 0;
    this.outputUsed = 0;
    this.ringBufferBytesWritten = 0;
    this.ringBufferBytesReady = 0;
    this.isEager = 0;
    this.isLargeWindow = 0;
    this.cdNumChunks = 0;
    this.cdTotalSize = 0;
    this.cdBrIndex = 0;
    this.cdBrOffset = 0;
    this.cdBrLength = 0;
    this.cdBrCopied = 0;
    this.cdChunks = new Array(0);
    this.cdChunkOffsets = new Int32Array(0);
    this.cdBlockBits = 0;
    this.cdBlockMap = new Int8Array(0);
    this.input = new InputStream(new Int8Array(0));
    this.ringBuffer = new Int8Array(0);
    this.rings = new Int32Array(10);
    this.rings[0] = 16;
    this.rings[1] = 15;
    this.rings[2] = 11;
    this.rings[3] = 4;
  }
  let data = new Int8Array(0);
  const offsets = new Int32Array(32);
  const sizeBits = new Int32Array(32);
  function setData(newData, newSizeBits) {
    const dictionaryOffsets = offsets;
    const dictionarySizeBits = sizeBits;
    for (let i = 0; i < newSizeBits.length; ++i) {
      dictionarySizeBits[i] = newSizeBits[i];
    }
    let pos = 0;
    for (let i = 0; i < newSizeBits.length; ++i) {
      dictionaryOffsets[i] = pos;
      const bits = dictionarySizeBits[i];
      if (bits !== 0) {
        pos += i << (bits & 31);
      }
    }
    for (let i = newSizeBits.length; i < 32; ++i) {
      dictionaryOffsets[i] = pos;
    }
    data = newData;
  }
  function unpackDictionaryData(dictionary, data0, data1, skipFlip, sizeBits, sizeBitsData) {
    const dict = toUsAsciiBytes(data0 + data1);
    const skipFlipRunes = toUtf8Runes(skipFlip);
    let offset = 0;
    const n = skipFlipRunes.length >> 1;
    for (let i = 0; i < n; ++i) {
      const skip = skipFlipRunes[2 * i] - 36;
      const flip = skipFlipRunes[2 * i + 1] - 36;
      for (let j = 0; j < skip; ++j) {
        dict[offset] = dict[offset] ^ 3;
        offset++;
      }
      for (let j = 0; j < flip; ++j) {
        dict[offset] = dict[offset] ^ 236;
        offset++;
      }
    }
    for (let i = 0; i < sizeBitsData.length; ++i) {
      sizeBits[i] = sizeBitsData.charCodeAt(i) - 65;
    }
    dictionary.set(dict);
  }
  const dictionaryData = new Int8Array(122784);
  const dictionarySizeBits = new Int32Array(25);
  unpackDictionaryData(dictionaryData, "wjnfgltmojefofewab`h`lgfgbwbpkltlmozpjwf`jwzlsfmivpwojhfeqfftlqhwf{wzfbqlufqalgzolufelqnallhsobzojufojmfkfosklnfpjgfnlqftlqgolmdwkfnujftejmgsbdfgbzpevookfbgwfqnfb`kbqfbeqlnwqvfnbqhbaofvslmkjdkgbwfobmgmftpfufmmf{w`bpfalwkslpwvpfgnbgfkbmgkfqftkbwmbnfOjmhaoldpjyfabpfkfognbhfnbjmvpfq$*#(klogfmgptjwkMftpqfbgtfqfpjdmwbhfkbufdbnfpffm`boosbwktfoosovpnfmvejonsbqwiljmwkjpojpwdllgmffgtbzptfpwilapnjmgboploldlqj`kvpfpobpwwfbnbqnzellghjmdtjoofbpwtbqgafpwejqfSbdfhmltbtbz-smdnlufwkbmolbgdjufpfoemlwfnv`keffgnbmzql`hj`lmlm`follhkjgfgjfgKlnfqvofklpwbib{jmel`ovaobtpofppkboeplnfpv`kylmf233&lmfp`bqfWjnfqb`faovfelvqtffheb`fklsfdbufkbqgolpwtkfmsbqhhfswsbpppkjsqllnKWNOsobmWzsfglmfpbufhffseobdojmhplogejufwllhqbwfwltmivnswkvpgbqh`bqgejofefbqpwbzhjoowkbweboobvwlfufq-`lnwbohpklsulwfgffsnlgfqfpwwvqmalqmabmgefooqlpfvqo+phjmqlof`lnfb`wpbdfpnffwdlog-isdjwfnubqzefowwkfmpfmggqlsUjft`lsz2-3!?,b=pwlsfopfojfpwlvqsb`h-djesbpw`pp<dqbznfbm%dw8qjgfpklwobwfpbjgqlbgubq#effoilkmqj`hslqwebpw$VB.gfbg?,a=sllqajoowzsfV-P-tllgnvpw1s{8JmelqbmhtjgftbmwtbooofbgX3^8sbvotbufpvqf'+$ tbjwnbppbqnpdlfpdbjmobmdsbjg\"..#ol`hvmjwqllwtbohejqntjef{no!plmdwfpw13s{hjmgqltpwlloelmwnbjopbefpwbqnbsp`lqfqbjmeoltabazpsbmpbzp7s{85s{8bqwpellwqfbotjhjkfbwpwfswqjslqd,obhftfbhwlogElqn`bpwebmpabmhufqzqvmpivozwbph2s{8dlbodqftpoltfgdfjg>!pfwp6s{8-ip<73s{je#+pllmpfbwmlmfwvafyfqlpfmwqffgeb`wjmwldjewkbqn2;s{`bnfkjooalogyllnuljgfbpzqjmdejoosfbhjmjw`lpw0s{8ib`hwbdpajwpqloofgjwhmftmfbq?\"..dqltIPLMgvwzMbnfpbofzlv#olwpsbjmibyy`logfzfpejpkttt-qjphwbapsqfu23s{qjpf16s{Aovfgjmd033/abooelqgfbqmtjogal{-ebjqob`hufqpsbjqivmfwf`kje+\"sj`hfujo'+! tbqnolqgglfpsvoo/333jgfbgqbtkvdfpslwevmgavqmkqfe`foohfzpwj`hklvqolppevfo21s{pvjwgfboQPP!bdfgdqfzDFW!fbpfbjnpdjqobjgp;s{8mbuzdqjgwjsp :::tbqpobgz`bqp*8#~sks<kfoowbootklnyk9\t),\x0E\t#233kboo-\t\tB4s{8svpk`kbw3s{8`qft),?,kbpk46s{eobwqbqf#%%#wfoo`bnslmwlobjgnjppphjswfmwejmfnbofdfwpsolw733/\x0E\t\x0E\t`lloeffw-sks?aq=fqj`nlpwdvjgafoogfp`kbjqnbwkbwln,jnd% ;1ov`h`fmw3338wjmzdlmfkwnopfoogqvdEQFFmlgfmj`h<jg>olpfmvooubpwtjmgQPP#tfbqqfozaffmpbnfgvhfmbpb`bsftjpkdvoeW109kjwppolwdbwfhj`haovqwkfz26s{$$*8*8!=npjftjmpajqgplqwafwbpffhW2;9lqgpwqffnboo53s{ebqn\x0ElupalzpX3^-$*8!SLPWafbqhjgp*8~~nbqzwfmg+VH*rvbgyk9\n.pjy....sqls$*8\x0EojewW2:9uj`fbmgzgfaw=QPPsllomf`haoltW259gllqfuboW249ofwpebjolqbosloomlub`lopdfmf#\x0Elxplewqlnfwjooqlpp?k0=slvqebgfsjmh?wq=njmj*\x7F\"+njmfyk9\x04abqpkfbq33*8njoh#..=jqlmeqfggjphtfmwpljosvwp,ip,klozW119JPAMW139bgbnpffp?k1=iplm$/#$`lmwW129#QPPollsbpjbnllm?,s=plvoOJMFelqw`bqwW279?k2=;3s{\"..?:s{8W379njhf975Ymj`fjm`kZlqhqj`fyk9\b$**8svqfnbdfsbqbwlmfalmg904Y\\le\\$^*8333/yk9\x0Bwbmhzbqgaltoavpk965YIbub03s{\t\x7F~\t&@0&907YifeeF[SJ`bpkujpbdloepmltyk9\x05rvfq-`pppj`hnfbwnjm-ajmggfookjqfsj`pqfmw905YKWWS.132elwltloeFMG#{al{967YALGZgj`h8\t~\tf{jw906Yubqpafbw$~*8gjfw:::8bmmf~~?,Xj^-Obmdhn.^tjqfwlzpbggppfbobof{8\t\n~f`klmjmf-lqd336*wlmziftppbmgofdpqlle333*#133tjmfdfbqgldpallwdbqz`vwpwzofwfnswjlm-{no`l`hdbmd'+$-63s{Sk-Gnjp`bobmolbmgfphnjofqzbmvmj{gjp`*8~\tgvpw`ojs*-\t\t43s{.133GUGp4^=?wbsfgfnlj((*tbdffvqlskjolswpklofEBRpbpjm.15WobapsfwpVQO#avoh`llh8~\x0E\tKFBGX3^*baaqivbm+2:;ofpkwtjm?,j=plmzdvzpev`hsjsf\x7F.\t\"331*mgltX2^8X^8\tOld#pbow\x0E\t\n\nabmdwqjnabwk*x\x0E\t33s{\t~*8hl9\0effpbg=\x0Ep9,,#X^8wloosovd+*x\tx\x0E\t#-ip$133sgvboalbw-ISD*8\t~rvlw*8\t\t$*8\t\x0E\t~\x0E1327132613251324132;132:13131312131113101317131613151314131;131:130313021301130013071306130513041320132113221323133:133;133413351336133713301331133213332:::2::;2::42::52::62::72::02::12::22::32:;:2:;;2:;42:;52:;62:;72:;02:;12:;22:;32:4:2:4;2:442:452:462:472:402:412:422:432:5:2:5;2:542:552:562:572:502:512:522:532:6:2:6;2:642:652:662:672:602:612:622:632333231720:73333::::`lnln/Mpfpwffpwbsfqlwlglkb`f`bgbb/]lajfmg/Abbp/Aujgb`bpllwqlelqlplollwqb`vbogjilpjgldqbmwjslwfnbgfafbodlrv/Efpwlmbgbwqfpsl`l`bpbabilwlgbpjmlbdvbsvfpvmlpbmwfgj`fovjpfoobnbzlylmbbnlqsjpllaqb`oj`foolgjlpklqb`bpj<[<\\<Q<\\<R<P=l<\\=l=o=n<\\<Q<Y<S<R<R=n<T<[<Q<R<X<R=n<R<Z<Y<R<Q<T=i<q<\\<Y<Y<]=g<P=g<~=g=m<R<^=g<^<R<q<R<R<]<s<R<W<T<Q<T<L<H<q<Y<p=g=n=g<r<Q<T<P<X<\\<{<\\<x<\\<q=o<r<]=n<Y<t<[<Y<U<Q=o<P<P<N=g=o<Z5m5f4O5j5i4K5i4U5o5h4O5d4]4C5f4K5m5e5k5d5h5i5h5o4K5d5h5k4D4_4K5h4I5j5k5f4O5f5n4C5k5h4G5i4D5k5h5d5h5f4D5h4K5f4D5o4X5f4K5i4O5i5j4F4D5f5h5j4A4D5k5i5i4X5d4Xejqpwujgflojdkwtlqognfgjbtkjwf`olpfaob`hqjdkwpnbooallhpsob`fnvpj`ejfoglqgfqsljmwubovfofufowbaofalbqgklvpfdqlvstlqhpzfbqppwbwfwlgbztbwfqpwbqwpwzofgfbwksltfqsklmfmjdkwfqqlqjmsvwbalvwwfqnpwjwofwllopfufmwol`bowjnfpobqdftlqgpdbnfppklqwpsb`fel`vp`ofbqnlgfoaol`hdvjgfqbgjlpkbqftlnfmbdbjmnlmfzjnbdfmbnfpzlvmdojmfpobwfq`lolqdqffmeqlmw%bns8tbw`kelq`fsqj`fqvofpafdjmbewfqujpjwjppvfbqfbpafoltjmgf{wlwboklvqpobafosqjmwsqfppavjowojmhppsffgpwvgzwqbgfelvmgpfmpfvmgfqpkltmelqnpqbmdfbggfgpwjoonlufgwbhfmbalufeobpkej{fglewfmlwkfqujftp`kf`hofdboqjufqjwfnprvj`hpkbsfkvnbmf{jpwdljmdnlujfwkjqgabpj`sfb`fpwbdftjgwkoldjmjgfbptqlwfsbdfpvpfqpgqjufpwlqfaqfbhplvwkulj`fpjwfpnlmwktkfqfavjogtkj`kfbqwkelqvnwkqffpslqwsbqwz@oj`holtfqojufp`obppobzfqfmwqzpwlqzvpbdfplvmg`lvqwzlvq#ajqwkslsvswzsfpbssozJnbdfafjmdvssfqmlwfpfufqzpkltpnfbmpf{wqbnbw`kwqb`hhmltmfbqozafdbmpvsfqsbsfqmlqwkofbqmdjufmmbnfgfmgfgWfqnpsbqwpDqlvsaqbmgvpjmdtlnbmebopfqfbgzbvgjlwbhfptkjof-`ln,ojufg`bpfpgbjoz`kjogdqfbwivgdfwklpfvmjwpmfufqaqlbg`lbpw`lufqbssofejofp`z`ofp`fmfsobmp`oj`htqjwfrvffmsjf`ffnbjoeqbnflogfqsklwlojnjw`b`kf`jujop`boffmwfqwkfnfwkfqfwlv`kalvmgqlzbobphfgtklofpjm`fpwl`h#mbnfebjwkkfbqwfnswzleefqp`lsfltmfgnjdkwboavnwkjmhaollgbqqbznbilqwqvpw`bmlmvmjlm`lvmwubojgpwlmfPwzofOldjmkbsszl``vqofew9eqfpkrvjwfejonpdqbgfmffgpvqabmejdkwabpjpklufqbvwl8qlvwf-kwnonj{fgejmboZlvq#pojgfwlsj`aqltmbolmfgqbtmpsojwqfb`kQjdkwgbwfpnbq`krvlwfdllgpOjmhpglvawbpzm`wkvnaboolt`kjfezlvwkmlufo23s{8pfqufvmwjokbmgp@kf`hPsb`frvfqzibnfpfrvbowtj`f3/333Pwbqwsbmfoplmdpqlvmgfjdkwpkjewtlqwkslpwpofbgptffhpbuljgwkfpfnjofpsobmfpnbqwboskbsobmwnbqhpqbwfpsobzp`objnpbofpwf{wppwbqptqlmd?,k0=wkjmd-lqd,nvowjkfbqgSltfqpwbmgwlhfmplojg+wkjpaqjmdpkjsppwbeewqjfg`boopevoozeb`wpbdfmwWkjp#,,..=bgnjmfdzswFufmw26s{8Fnbjowqvf!`qlpppsfmwaoldpal{!=mlwfgofbuf`kjmbpjyfpdvfpw?,k7=qlalwkfbuzwqvf/pfufmdqbmg`qjnfpjdmpbtbqfgbm`fskbpf=?\"..fm\\VP% 0:8133s{\\mbnfobwjmfmilzbib{-bwjlmpnjwkV-P-#klogpsfwfqjmgjbmbu!=`kbjmp`lqf`lnfpgljmdsqjlqPkbqf2::3pqlnbmojpwpibsbmeboopwqjboltmfqbdqff?,k1=bavpfbofqwlsfqb!.,,T`bqgpkjoopwfbnpSklwlwqvwk`ofbm-sks<pbjmwnfwboolvjpnfbmwsqlleaqjfeqlt!=dfmqfwqv`hollhpUbovfEqbnf-mfw,..=\t?wqz#x\tubq#nbhfp`lpwpsobjmbgvowrvfpwwqbjmobalqkfosp`bvpfnbdj`nlwlqwkfjq163s{ofbpwpwfsp@lvmw`lvogdobpppjgfpevmgpklwfobtbqgnlvwknlufpsbqjpdjufpgvw`kwf{bpeqvjwmvoo/\x7F\x7FX^8wls!=\t?\"..SLPW!l`fbm?aq,=eollqpsfbhgfswk#pjyfabmhp`bw`k`kbqw13s{8bojdmgfboptlvog63s{8vqo>!sbqhpnlvpfNlpw#---?,bnlmdaqbjmalgz#mlmf8abpfg`bqqzgqbewqfefqsbdf\\klnf-nfwfqgfobzgqfbnsqlufiljmw?,wq=gqvdp?\"..#bsqjojgfboboofmf{b`welqwk`lgfpoldj`Ujft#pffnpaobmhslqwp#+133pbufg\\ojmhdlbopdqbmwdqffhklnfpqjmdpqbwfg03s{8tklpfsbqpf+*8!#Aol`hojmv{ilmfpsj{fo$*8!=*8je+.ofewgbujgklqpfEl`vpqbjpfal{fpWqb`hfnfmw?,fn=abq!=-pq`>wltfqbow>!`baofkfmqz17s{8pfwvsjwbozpkbqsnjmlqwbpwftbmwpwkjp-qfpfwtkffodjqop,`pp,233&8`ovappwveeajaofulwfp#2333hlqfb~*8\x0E\tabmgprvfvf>#x~8;3s{8`hjmdx\x0E\t\n\nbkfbg`ol`hjqjpkojhf#qbwjlpwbwpElqn!zbkll*X3^8Balvwejmgp?,k2=gfavdwbphpVQO#>`foop~*+*821s{8sqjnfwfoopwvqmp3{533-isd!psbjmafb`kwb{fpnj`qlbmdfo..=?,djewppwfuf.ojmhalgz-~*8\t\nnlvmw#+2::EBR?,qldfqeqbmh@obpp1;s{8effgp?k2=?p`lwwwfpwp11s{8gqjmh*#\x7F\x7F#oftjppkboo 30:8#elq#olufgtbpwf33s{8ib9\x0Fnpjnlm?elmwqfsoznffwpvmwfq`kfbswjdkwAqbmg*#\">#gqfpp`ojspqllnplmhfznlajonbjm-Mbnf#sobwfevmmzwqffp`ln,!2-isdtnlgfsbqbnPWBQWofew#jggfm/#132*8\t~\telqn-ujqvp`kbjqwqbmptlqpwSbdfpjwjlmsbw`k?\"..\tl.`b`ejqnpwlvqp/333#bpjbmj((*xbglaf$*X3^jg>23alwk8nfmv#-1-nj-smd!hfujm`lb`k@kjogaqv`f1-isdVQO*(-isd\x7Fpvjwfpoj`fkbqqz213!#ptffwwq=\x0E\tmbnf>gjfdlsbdf#ptjpp..=\t\t eee8!=Old-`ln!wqfbwpkffw*#%%#27s{8poffsmwfmwejofgib9\x0Fojg>!`Mbnf!tlqpfpklwp.al{.gfowb\t%ow8afbqp97;Y?gbwb.qvqbo?,b=#psfmgabhfqpklsp>#!!8sks!=`wjlm20s{8aqjbmkfoolpjyf>l>&1E#iljmnbzaf?jnd#jnd!=/#eipjnd!#!*X3^NWlsAWzsf!mftozGbmph`yf`kwqbjohmltp?,k6=ebr!=yk.`m23*8\t.2!*8wzsf>aovfpwqvozgbujp-ip$8=\x0E\t?\"pwffo#zlv#k1=\x0E\telqn#ifpvp233&#nfmv-\x0E\t\n\x0E\ttbofpqjphpvnfmwggjmda.ojhwfb`kdje!#ufdbpgbmphffpwjpkrjspvlnjplaqfgfpgffmwqfwlglpsvfgfb/]lpfpw/Mwjfmfkbpwblwqlpsbqwfglmgfmvfulkb`fqelqnbnjpnlnfilqnvmglbrv/Ag/Abpp/_olbzvgbef`kbwlgbpwbmwlnfmlpgbwlplwqbppjwjlnv`klbklqbovdbqnbzlqfpwlpklqbpwfmfqbmwfpelwlpfpwbpsb/Apmvfubpbovgelqlpnfgjlrvjfmnfpfpslgfq`kjofpfq/Muf`fpgf`jqilp/Efpwbqufmwbdqvslkf`klfoolpwfmdlbnjdl`lpbpmjufodfmwfnjpnbbjqfpivojlwfnbpkb`jbebulqivmjlojaqfsvmwlavfmlbvwlqbaqjoavfmbwf{wlnbqylpbafqojpwbovfdl`/_nlfmfqlivfdlsfq/Vkbafqfpwlzmvm`bnvifqubolqevfqbojaqldvpwbjdvboulwlp`bplpdv/Absvfglplnlpbujplvpwfggfafmml`kfavp`bebowbfvqlppfqjfgj`kl`vqpl`obuf`bpbpof/_msobylobqdllaqbpujpwbbslzlivmwlwqbwbujpwl`qfbq`bnslkfnlp`jm`l`bqdlsjplplqgfmkb`fm/Mqfbgjp`lsfgql`fq`bsvfgbsbsfonfmlq/Vwjo`obqlilqdf`boofslmfqwbqgfmbgjfnbq`bpjdvffoobppjdol`l`kfnlwlpnbgqf`obpfqfpwlmj/]lrvfgbsbpbqabm`lkjilpujbifsbaol/Epwfujfmfqfjmlgfibqelmgl`bmbomlqwfofwqb`bvpbwlnbqnbmlpovmfpbvwlpujoobufmglsfpbqwjslpwfmdbnbq`loofubsbgqfvmjglubnlpylmbpbnalpabmgbnbqjbbavplnv`kbpvajqqjlibujujqdqbgl`kj`bboo/Ailufmgj`kbfpwbmwbofppbojqpvfolsfplpejmfpoobnbavp`l/Epwboofdbmfdqlsobybkvnlqsbdbqivmwbglaofjpobpalopbab/]lkbaobov`kb/mqfbgj`fmivdbqmlwbpuboofboo/M`bqdbglolqbabilfpw/Edvpwlnfmwfnbqjlejqnb`lpwlej`kbsobwbkldbqbqwfpofzfpbrvfonvpflabpfpsl`lpnjwbg`jfol`kj`lnjfgldbmbqpbmwlfwbsbgfafpsobzbqfgfppjfwf`lqwf`lqfbgvgbpgfpflujfilgfpfbbdvbp%rvlw8glnbjm`lnnlmpwbwvpfufmwpnbpwfqpzpwfnb`wjlmabmmfqqfnlufp`qloovsgbwfdolabonfgjvnejowfqmvnafq`kbmdfqfpvowsvaoj`p`qffm`kllpfmlqnbowqbufojppvfpplvq`fwbqdfwpsqjmdnlgvofnlajofptjw`ksklwlpalqgfqqfdjlmjwpfoepl`jbob`wjuf`lovnmqf`lqgelooltwjwof=fjwkfqofmdwkebnjozeqjfmgobzlvwbvwklq`qfbwfqfujftpvnnfqpfqufqsobzfgsobzfqf{sbmgsloj`zelqnbwglvaofsljmwppfqjfpsfqplmojujmdgfpjdmnlmwkpelq`fpvmjrvftfjdkwsflsoffmfqdzmbwvqfpfbq`kejdvqfkbujmd`vpwlnleepfwofwwfqtjmgltpvanjwqfmgfqdqlvspvsolbgkfbowknfwklgujgflpp`klloevwvqfpkbgltgfabwfubovfpLaif`wlwkfqpqjdkwpofbdvf`kqlnfpjnsofmlwj`fpkbqfgfmgjmdpfbplmqfslqwlmojmfprvbqfavwwlmjnbdfpfmbaofnlujmdobwfpwtjmwfqEqbm`fsfqjlgpwqlmdqfsfbwOlmglmgfwbjoelqnfggfnbmgpf`vqfsbppfgwlddofsob`fpgfuj`fpwbwj``jwjfppwqfbnzfooltbwwb`hpwqffweojdkwkjggfmjmel!=lsfmfgvpfevouboofz`bvpfpofbgfqpf`qfwpf`lmggbnbdfpslqwpf{`fswqbwjmdpjdmfgwkjmdpfeef`wejfogppwbwfpleej`fujpvbofgjwlqulovnfQfslqwnvpfvnnlujfpsbqfmwb``fppnlpwoznlwkfq!#jg>!nbqhfwdqlvmg`kbm`fpvqufzafelqfpznalonlnfmwpsff`knlwjlmjmpjgfnbwwfq@fmwfqlaif`wf{jpwpnjggofFvqlsfdqltwkofdb`znbmmfqfmlvdk`bqffqbmptfqlqjdjmslqwbo`ojfmwpfof`wqbmgln`olpfgwlsj`p`lnjmdebwkfqlswjlmpjnsozqbjpfgfp`bsf`klpfm`kvq`kgfejmfqfbplm`lqmfqlvwsvwnfnlqzjeqbnfsloj`fnlgfopMvnafqgvqjmdleefqppwzofphjoofgojpwfg`boofgpjoufqnbqdjmgfofwfafwwfqaqltpfojnjwpDolabopjmdoftjgdfw`fmwfqavgdfwmltqbs`qfgjw`objnpfmdjmfpbefwz`klj`fpsjqjw.pwzofpsqfbgnbhjmdmffgfgqvppjbsofbpff{wfmwP`qjswaqlhfmbooltp`kbqdfgjujgfeb`wlqnfnafq.abpfgwkflqz`lmejdbqlvmgtlqhfgkfosfg@kvq`kjnsb`wpklvogbotbzpoldl!#alwwlnojpw!=*xubq#sqfej{lqbmdfKfbgfq-svpk+`lvsofdbqgfmaqjgdfobvm`kQfujftwbhjmdujpjlmojwwofgbwjmdAvwwlmafbvwzwkfnfpelqdlwPfbq`kbm`klqbonlpwolbgfg@kbmdfqfwvqmpwqjmdqfolbgNlajofjm`lnfpvssozPlvq`flqgfqpujftfg%maps8`lvqpfBalvw#jpobmg?kwno#`llhjfmbnf>!bnbylmnlgfqmbguj`fjm?,b=9#Wkf#gjboldklvpfpAFDJM#Nf{j`lpwbqwp`fmwqfkfjdkwbggjmdJpobmgbppfwpFnsjqfP`kllofeelqwgjqf`wmfbqoznbmvboPfof`w-\t\tLmfiljmfgnfmv!=SkjojsbtbqgpkbmgofjnslqwLeej`fqfdbqgphjoopmbwjlmPslqwpgfdqfftffhoz#+f-d-afkjmggl`wlqolddfgvmjwfg?,a=?,afdjmpsobmwpbppjpwbqwjpwjppvfg033s{\x7F`bmbgbbdfm`zp`kfnfqfnbjmAqbyjopbnsofoldl!=afzlmg.p`bofb``fswpfqufgnbqjmfEllwfq`bnfqb?,k2=\t\\elqn!ofbufppwqfpp!#,=\x0E\t-dje!#lmolbgolbgfqL{elqgpjpwfqpvqujuojpwfmefnbofGfpjdmpjyf>!bssfbowf{w!=ofufopwkbmhpkjdkfqelq`fgbmjnbobmzlmfBeqj`bbdqffgqf`fmwSflsof?aq#,=tlmgfqsqj`fpwvqmfg\x7F\x7F#x~8nbjm!=jmojmfpvmgbztqbs!=ebjofg`fmpvpnjmvwfafb`lmrvlwfp263s{\x7Ffpwbwfqfnlwffnbjo!ojmhfgqjdkw8pjdmboelqnbo2-kwnopjdmvssqjm`feolbw9-smd!#elqvn-B``fppsbsfqpplvmgpf{wfmgKfjdkwpojgfqVWE.;!%bns8#Afelqf-#TjwkpwvgjlltmfqpnbmbdfsqlejwiRvfqzbmmvbosbqbnpalvdkwebnlvpdlldofolmdfqj((*#xjpqbfopbzjmdgf`jgfklnf!=kfbgfqfmpvqfaqbm`ksjf`fpaol`h8pwbwfgwls!=?qb`jmdqfpjyf..%dw8sb`jwzpf{vboavqfbv-isd!#23/333lawbjmwjwofpbnlvmw/#Jm`-`lnfgznfmv!#ozqj`pwlgbz-jmgffg`lvmwz\\oldl-EbnjozollhfgNbqhfwopf#jeSobzfqwvqhfz*8ubq#elqfpwdjujmdfqqlqpGlnbjm~fopfxjmpfqwAold?,ellwfqoldjm-ebpwfqbdfmwp?algz#23s{#3sqbdnbeqjgbzivmjlqgloobqsob`fg`lufqpsovdjm6/333#sbdf!=alpwlm-wfpw+bubwbqwfpwfg\\`lvmwelqvnpp`kfnbjmgf{/ejoofgpkbqfpqfbgfqbofqw+bssfbqPvanjwojmf!=algz!=\t)#WkfWklvdkpffjmdifqpfzMftp?,ufqjezf{sfqwjmivqztjgwk>@llhjfPWBQW#b`qlpp\\jnbdfwkqfbgmbwjufsl`hfwal{!=\tPzpwfn#Gbujg`bm`fqwbaofpsqlufgBsqjo#qfboozgqjufqjwfn!=nlqf!=albqgp`lolqp`bnsvpejqpw#\x7F\x7F#X^8nfgjb-dvjwbqejmjpktjgwk9pkltfgLwkfq#-sks!#bppvnfobzfqptjoplmpwlqfpqfojfeptfgfm@vpwlnfbpjoz#zlvq#Pwqjmd\t\tTkjowbzolq`ofbq9qfplqweqfm`kwklvdk!*#(#!?algz=avzjmdaqbmgpNfnafqmbnf!=lssjmdpf`wlq6s{8!=upsb`fslpwfqnbilq#`leeffnbqwjmnbwvqfkbssfm?,mbu=hbmpbpojmh!=Jnbdfp>ebopftkjof#kpsb`f3%bns8#\t\tJm##sltfqSlophj.`lolqilqgbmAlwwlnPwbqw#.`lvmw1-kwnomftp!=32-isdLmojmf.qjdkwnjoofqpfmjlqJPAM#33/333#dvjgfpubovf*f`wjlmqfsbjq-{no!##qjdkwp-kwno.aol`hqfdF{s9klufqtjwkjmujqdjmsklmfp?,wq=\x0Evpjmd#\t\nubq#=$*8\t\n?,wg=\t?,wq=\tabkbpbaqbpjodbofdlnbdzbqslophjpqsphj4]4C5d\bTA\nzk\x0BBl\bQ\x7F\x0BUm\x05Gx\bSM\nmC\bTA\twQ\nd}\bW@\bTl\bTF\ti@\tcT\x0BBM\x0B|j\x04BV\tqw\tcC\bWI\npa\tfM\n{Z\x05{X\bTF\bVV\bVK\t\x7Fm\x04kF\t[]\bPm\bTv\nsI\x0Bpg\t[I\bQp\x04mx\x0B_W\n^M\npe\x0BQ}\x0BGu\nel\npe\x04Ch\x04BV\bTA\tSo\nzk\x0BGL\x0BxD\nd[\x05Jz\x05MY\bQp\x04li\nfl\npC\x05{B\x05Nt\x0BwT\ti_\bTg\x04QQ\n|p\x0BXN\bQS\x0BxD\x04QC\bWZ\tpD\x0BVS\bTW\x05Nt\x04Yh\nzu\x04Kj\x05N}\twr\tHa\n_D\tj`\x0BQ}\x0BWp\nxZ\x04{c\tji\tBU\nbD\x04a|\tTn\tpV\nZd\nmC\x0BEV\x05{X\tc}\tTo\bWl\bUd\tIQ\tcg\x0Bxs\nXW\twR\x0Bek\tc}\t]y\tJn\nrp\neg\npV\nz\\\x05{W\npl\nz\\\nzU\tPc\t`{\bV@\nc|\bRw\ti_\bVb\nwX\tHv\x04Su\bTF\x0B_W\x0BWs\x0BsI\x05m\x7F\nTT\ndc\tUS\t}f\tiZ\bWz\tc}\x04MD\tBe\tiD\x0B@@\bTl\bPv\t}t\x04Sw\x04M`\x0BnU\tkW\x0Bed\nqo\x0BxY\tA|\bTz\x0By`\x04BR\x04BM\tia\x04XU\nyu\x04n^\tfL\tiI\nXW\tfD\bWz\bW@\tyj\t\x7Fm\tav\tBN\x0Bb\\\tpD\bTf\nY[\tJn\bQy\t[^\x0BWc\x0Byu\x04Dl\x04CJ\x0BWj\x0BHR\t`V\x0BuW\tQy\np@\x0BGu\x05pl\x04Jm\bW[\nLP\nxC\n`m\twQ\x05ui\x05\x7FR\nbI\twQ\tBZ\tWV\x04BR\npg\tcg\x05ti\x04CW\n_y\tRg\bQa\x0BQB\x0BWc\nYb\x05le\ngE\x04Su\nL[\tQ\x7F\tea\tdj\x0B]W\nb~\x04M`\twL\bTV\bVH\nt\x7F\npl\t|b\x05s_\bU|\bTa\x04oQ\x05lv\x04Sk\x04M`\bTv\x0BK}\nfl\tcC\x04oQ\x04BR\tHk\t|d\bQp\tHK\tBZ\x0BHR\bPv\x0BLx\x0BEZ\bT\x7F\bTv\tiD\x05oD\x05MU\x0BwB\x04Su\x05k`\x04St\ntC\tPl\tKg\noi\tjY\x0BxY\x04h}\nzk\bWZ\t\x7Fm\x0Be`\tTB\tfE\nzk\t`z\x04Yh\nV|\tHK\tAJ\tAJ\bUL\tp\\\tql\nYc\x04Kd\nfy\x04Yh\t[I\x0BDg\x04Jm\n]n\nlb\bUd\n{Z\tlu\tfs\x04oQ\bTW\x04Jm\x0BwB\tea\x04Yh\x04BC\tsb\tTn\nzU\n_y\x0BxY\tQ]\ngw\x04mt\tO\\\ntb\bWW\bQy\tmI\tV[\ny\\\naB\x0BRb\twQ\n]Q\x04QJ\bWg\x0BWa\bQj\ntC\bVH\nYm\x0Bxs\bVK\nel\bWI\x0BxY\x04Cq\ntR\x0BHV\bTl\bVw\tay\bQa\bVV\t}t\tdj\nr|\tp\\\twR\n{i\nTT\t[I\ti[\tAJ\x0Bxs\x0B_W\td{\x0BQ}\tcg\tTz\tA|\tCj\x0BLm\x05N}\x05m\x7F\nbK\tdZ\tp\\\t`V\tsV\np@\tiD\twQ\x0BQ}\bTf\x05ka\x04Jm\x0B@@\bV`\tzp\n@N\x04Sw\tiI\tcg\noi\x04Su\bVw\x04lo\x04Cy\tc}\x0Bb\\\tsU\x04BA\bWI\bTf\nxS\tVp\nd|\bTV\x0BbC\tNo\x05Ju\nTC\t|`\n{Z\tD]\bU|\tc}\x05lm\bTl\tBv\tPl\tc}\bQp\t\x7Fm\nLk\tkj\n@N\x04Sb\x04KO\tj_\tp\\\nzU\bTl\bTg\bWI\tcf\x04XO\bWW\ndz\x04li\tBN\nd[\bWO\x04MD\x0BKC\tdj\tI_\bVV\ny\\\x0BLm\x05xl\txB\tkV\x0Bb\\\x0BJW\x0BVS\tVx\x0BxD\td{\x04MD\bTa\t|`\x0BPz\x04R}\x0BWs\x04BM\nsI\x04CN\bTa\x04Jm\npe\ti_\npV\nrh\tRd\tHv\n~A\nxR\x0BWh\x0BWk\nxS\x0BAz\x0BwX\nbI\x04oQ\tfw\nqI\nV|\nun\x05z\x7F\x0Bpg\td\\\x0BoA\x05{D\ti_\x05xB\bT\x7F\t`V\x05qr\tTT\x04g]\x04CA\x0BuR\tVJ\tT`\npw\x0BRb\tI_\nCx\x04Ro\x0BsI\x04Cj\x04Kh\tBv\tWV\x04BB\x05oD\x05{D\nhc\x04Km\x0B^R\tQE\n{I\np@\nc|\x05Gt\tc}\x04Dl\nzU\x05qN\tsV\x05k}\tHh\x0B|j\nqo\x05u|\tQ]\x0Bek\x05\x7FZ\x04M`\x04St\npe\tdj\bVG\x0BeE\t\x7Fm\x0BWc\x04|I\n[W\tfL\bT\x7F\tBZ\x04Su\x0BKa\x04Cq\x05Nt\x04Y[\nqI\bTv\tfM\ti@\t}f\x04B\\\tQy\x0BBl\bWg\x04XD\x05kc\x0Bx[\bVV\tQ]\t\x7Fa\tPy\x0BxD\nfI\t}f\x05oD\tdj\tSG\x05ls\t~D\x04CN\n{Z\t\\v\n_D\nhc\x0Bx_\x04C[\tAJ\nLM\tVx\x04CI\tbj\tc^\tcF\ntC\x04Sx\twr\x04XA\bU\\\t|a\x0BK\\\bTV\bVj\nd|\tfs\x04CX\ntb\bRw\tVx\tAE\tA|\bT\x7F\x05Nt\x0BDg\tVc\bTl\x04d@\npo\t\x7FM\tcF\npe\tiZ\tBo\bSq\nfH\x04l`\bTx\bWf\tHE\x0BF{\tcO\tfD\nlm\x0BfZ\nlm\x0BeU\tdG\x04BH\bTV\tSi\x05MW\nwX\nz\\\t\\c\x04CX\nd}\tl}\bQp\bTV\tF~\bQ\x7F\t`i\ng@\x05nO\bUd\bTl\nL[\twQ\tji\ntC\t|J\nLU\naB\x0BxY\x04Kj\tAJ\x05uN\ti[\npe\x04Sk\x0BDg\x0Bx]\bVb\bVV\nea\tkV\nqI\bTa\x04Sk\nAO\tpD\ntb\nts\nyi\bVg\ti_\x0B_W\nLk\x05Nt\tyj\tfM\x04R\x7F\tiI\bTl\x0BwX\tsV\x0BMl\nyu\tAJ\bVj\x04KO\tWV\x0BA}\x0BW\x7F\nrp\tiD\x0B|o\x05lv\x0BsI\x04BM\td~\tCU\bVb\x04eV\npC\x0BwT\tj`\tc}\x0Bxs\x0Bps\x0Bvh\tWV\x0BGg\x0BAe\x0BVK\x0B]W\trg\x0BWc\x05F`\tBr\x0Bb\\\tdZ\bQp\nqI\x04kF\nLk\x0BAR\bWI\bTg\tbs\tdw\n{L\n_y\tiZ\bTA\tlg\bVV\bTl\tdk\n`k\ta{\ti_\x05{A\x05wj\twN\x0B@@\bTe\ti_\n_D\twL\nAH\x0BiK\x0Bek\n[]\tp_\tyj\bTv\tUS\t[r\n{I\nps\x05Gt\x0BVK\npl\x04S}\x0BWP\t|d\x04MD\x0BHV\bT\x7F\x04R}\x04M`\bTV\bVH\x05lv\x04Ch\bW[\x04Ke\tR{\x0B^R\tab\tBZ\tVA\tB`\nd|\nhs\x04Ke\tBe\x04Oi\tR{\td\\\x05nB\bWZ\tdZ\tVJ\x05Os\t\x7Fm\x04uQ\x0BhZ\x04Q@\x04QQ\nfI\bW[\x04B\\\x04li\nzU\nMd\x04M`\nxS\bVV\n\\}\x0BxD\t\x7Fm\bTp\x04IS\nc|\tkV\x05i~\tV{\x0BhZ\t|b\bWt\n@R\x0BoA\x0BnU\bWI\tea\tB`\tiD\tc}\tTz\x04BR\x0BQB\x05Nj\tCP\t[I\bTv\t`W\x05uN\x0Bpg\x0Bpg\x0BWc\tiT\tbs\twL\tU_\tc\\\t|h\x0BKa\tNr\tfL\nq|\nzu\nz\\\tNr\bUg\t|b\x04m`\bTv\nyd\nrp\bWf\tUX\x04BV\nzk\nd}\twQ\t}f\x04Ce\x0Bed\bTW\bSB\nxU\tcn\bTb\ne\x7F\ta\\\tSG\bU|\npV\nN\\\x04Kn\x0BnU\tAt\tpD\x0B^R\x0BIr\x04b[\tR{\tdE\x0BxD\x0BWK\x0BWA\bQL\bW@\x04Su\bUd\nDM\tPc\x04CA\x04Dl\x04oQ\tHs\x05wi\x04ub\n\x7Fa\bQp\x05Ob\nLP\bTl\x04Y[\x0BK}\tAJ\bQ\x7F\x04n^\x0BsA\bSM\nqM\bWZ\n^W\x0Bz{\x04S|\tfD\bVK\bTv\bPv\x04BB\tCP\x04dF\tid\x0Bxs\x04mx\x0Bws\tcC\ntC\tyc\x05M`\x0BW\x7F\nrh\bQp\x0BxD\x04\\o\nsI\x04_k\nzu\x04kF\tfD\x04Xs\x04XO\tjp\bTv\x04BS\x05{B\tBr\nzQ\nbI\tc{\x04BD\x04BV\x05nO\bTF\tca\x05Jd\tfL\tPV\tI_\nlK\x04`o\twX\npa\tgu\bP}\x05{^\bWf\n{I\tBN\npa\x04Kl\x0Bpg\tcn\tfL\x0Bvh\x04Cq\bTl\x0BnU\bSq\x04Cm\twR\bUJ\npe\nyd\nYg\x04Cy\x0BKW\tfD\nea\x04oQ\tj_\tBv\x04nM\x0BID\bTa\nzA\x05pl\n]n\bTa\tR{\tfr\n_y\bUg\x05{X\x05kk\x0BxD\x04|I\x05xl\nfy\x04Ce\x0BwB\nLk\x0Bd]\noi\n}h\tQ]\npe\bVw\x04Hk\x04OQ\nzk\tAJ\npV\bPv\ny\\\tA{\x04Oi\bSB\x04XA\x0BeE\tjp\nq}\tiD\x05qN\x0B^R\t\x7Fm\tiZ\tBr\bVg\noi\n\\X\tU_\nc|\x0BHV\bTf\tTn\x04\\N\x04\\N\nuB\x05lv\nyu\tTd\bTf\bPL\x0B]W\tdG\nA`\nw^\ngI\npe\tdw\nz\\\x05ia\bWZ\tcF\x04Jm\n{Z\bWO\x04_k\x04Df\x04RR\td\\\bVV\x0Bxs\x04BN\x05ti\x04lm\tTd\t]y\x0BHV\tSo\x0B|j\x04XX\tA|\x0BZ^\x0BGu\bTW\x05M`\x04kF\x0BhZ\x0BVK\tdG\x0BBl\tay\nxU\x05qE\x05nO\bVw\nqI\x04CX\ne\x7F\tPl\bWO\x0BLm\tdL\x05uH\x04Cm\tdT\x04fn\x0BwB\x05ka\x0BnU\n@M\nyT\tHv\t\\}\x04Kh\td~\x04Yh\x05k}\neR\td\\\bWI\t|b\tHK\tiD\bTW\x05MY\npl\bQ_\twr\x0BAx\tHE\bTg\bSq\x05vp\x0Bb\\\bWO\nOl\nsI\nfy\x0BID\t\\c\n{Z\n^~\npe\nAO\tTT\x0Bxv\x04k_\bWO\x0B|j\x0BwB\tQy\ti@\tPl\tHa\tdZ\x05k}\x04ra\tUT\x0BJc\x0Bed\np@\tQN\nd|\tkj\tHk\x04M`\noi\twr\td\\\nlq\no_\nlb\nL[\tac\x04BB\x04BH\x04Cm\npl\tIQ\bVK\x0Bxs\n`e\x0BiK\npa\x04Oi\tUS\bTp\tfD\nPG\x05kk\x04XA\nz\\\neg\x0BWh\twR\x05qN\nqS\tcn\x04lo\nxS\n^W\tBU\nt\x7F\tHE\tp\\\tfF\tfw\bVV\bW@\tak\x0BVK\x05ls\tVJ\bVV\x0BeE\x04\\o\nyX\nYm\x04M`\x05lL\nd|\nzk\tA{\x05sE\twQ\x04XT\nt\x7F\tPl\t]y\x0BwT\x05{p\x04MD\x0Bb\\\tQ]\x04Kj\tJn\nAH\x0BRb\tBU\tHK\t\\c\nfI\x05m\x7F\nqM\n@R\tSo\noi\x04BT\tHv\n_y\x04Kh\tBZ\t]i\bUJ\tV{\x04Sr\nbI\x0BGg\ta_\bTR\nfI\nfl\t[K\tII\x04S|\x0BuW\tiI\bWI\nqI\x0B|j\x04BV\bVg\bWZ\x04kF\x0Bx]\bTA\tab\tfr\ti@\tJd\tJd\x0Bps\nAO\bTa\x05xu\tiD\nzk\t|d\t|`\bW[\tlP\tdG\bVV\x0Bw}\x0BqO\ti[\bQ\x7F\bTz\x0BVF\twN\x05ts\tdw\bTv\neS\ngi\tNr\x05yS\npe\bVV\bSq\n`m\tyj\tBZ\x0BWX\bSB\tc\\\nUR\t[J\tc_\x04nM\bWQ\x0BAx\nMd\tBr\x05ui\x0BxY\bSM\x0BWc\x0B|j\x0Bxs\t}Q\tBO\bPL\bWW\tfM\nAO\tPc\x0BeU\x04e^\bTg\nqI\tac\bPv\tcF\x04oQ\tQ\x7F\x0BhZ\x05ka\nz\\\tiK\tBU\n`k\tCP\x04S|\x04M`\n{I\tS{\x04_O\tBZ\x04Zi\x04Sk\tps\tp\\\nYu\n]s\nxC\bWt\nbD\tkV\x0BGu\x05yS\nqA\t[r\neK\x04M`\tdZ\x05lL\bUg\bTl\nbD\tUS\x0Bb\\\tpV\ncc\x04S\\\tct\t`z\bPL\x0BWs\nA`\neg\bSq\x05uE\x04CR\x0BDg\t`W\x0Bz{\x0BWc\x04Sk\x04Sk\tbW\bUg\tea\nxZ\tiI\tUX\tVJ\nqn\tS{\x0BRb\bTQ\npl\x05Gt\x0BuW\x05uj\npF\nqI\tfL\t[I\tia\x04XO\nyu\x0BDg\x0Bed\tq{\x04VG\bQ\x7F\x05ka\tVj\tkV\txB\nd|\np@\tQN\tPc\tps\x04]j\tkV\toU\bTp\nzU\x05nB\x0BB]\ta{\bV@\n]n\x04m`\tcz\tR{\x04m`\bQa\x0BwT\bSM\x05MY\x05qN\tdj\x05~s\x0BQ}\x05MY\x0BMB\tBv\twR\bRg\x0BQ}\tql\x0BKC\nrm\x05xu\x04CC\x0BwB\x0Bvh\tBq\x04Xq\npV\ti_\x05Ob\x05uE\nbd\nqo\x0B{i\nC~\tBL\x0BeE\x05uH\bVj\x04Ey\x04Gz\x0BzR\x0B{i\tcf\n{Z\n]n\x04XA\x0BGu\x0BnU\thS\x0BGI\nCc\tHE\bTA\tHB\x04BH\x04Cj\nCc\bTF\tHE\nXI\tA{\bQ\x7F\tc\\\x0BmO\x0BWX\nfH\np@\x05MY\bTF\nlK\tBt\nzU\tTT\x04Km\x0BwT\npV\ndt\x0ByI\tVx\tQ\x7F\tRg\tTd\nzU\bRS\nLM\twA\x04nM\tTn\ndS\t]g\nLc\x0BwB\t}t\t[I\tCP\x04kX\x0BFm\x0BhZ\x05m\x7F\ti[\np@\x0BQ}\x0BW\x7F\t|d\nMO\nMd\tf_\tfD\tcJ\tHz\x0BRb\tio\tPy\x04Y[\nxU\tct\x0B@@\tww\bPv\x04BM\x04FF\ntb\x05v|\x0BKm\tBq\tBq\x04Kh\x04`o\nZd\x04XU\ti]\t|`\tSt\x04B\\\bQ\x7F\x0B_W\tTJ\nqI\t|a\tA{\x0BuP\x04MD\tPl\nxR\tfL\x0Bws\tc{\td\\\bV`\neg\tHK\x05kc\nd|\bVV\ny\\\x05kc\ti]\bVG\t`V\tss\tI_\tAE\tbs\tdu\nel\tpD\x0BW\x7F\nqs\x05lv\bSM\x04Zi\x0BVK\x05ia\x0BQB\tQ\x7F\n{Z\bPt\x0BKl\nlK\nhs\ndS\bVK\x05mf\nd^\tkV\tcO\nc|\bVH\t\\]\bTv\bSq\tmI\x0BDg\tVJ\tcn\ny\\\bVg\bTv\nyX\bTF\t]]\bTp\noi\nhs\x0BeU\nBf\tdj\x05Mr\n|p\t\\g\t]r\bVb\x05{D\nd[\x04XN\tfM\tO\\\x05s_\tcf\tiZ\x04XN\x0BWc\tqv\n`m\tU^\x05oD\nd|\x0BGg\tdE\x0Bwf\x04lo\x04u}\nd|\x05oQ\t`i\x04Oi\x0BxD\ndZ\nCx\x04Yw\nzk\ntb\ngw\tyj\tB`\nyX\x0Bps\ntC\x0BpP\x0Bqw\bPu\bPX\tDm\npw\x05Nj\tss\taG\x0Bxs\bPt\noL\x04Gz\tOk\ti@\ti]\x04eC\tIQ\tii\tdj\x0B@J\t|d\x05uh\bWZ\x0BeU\x0BnU\bTa\tcC\x04g]\nzk\x04Yh\bVK\nLU\np@\ntb\ntR\tCj\x0BNP\ti@\bP{\n\\}\n{c\nwX\tfL\bVG\tc{\t|`\tAJ\t|C\tfD\x05ln\t|d\tbs\nqI\x05{B\x0BAx\np@\nzk\x0BRb\x05Os\x0BWS\x04e^\x0BD_\tBv\x0BWd\bVb\x0Bxs\x0BeE\bRw\n]n\n|p\x0Bg|\tfw\x05kc\bTI\x05ka\n\\T\x04Sp\tju\x0Bps\npe\x05u|\x0BGr\bVe\tCU\x04]M\x04XU\x0BxD\bTa\tIQ\x0BWq\tCU\tam\tdj\bSo\x04Sw\x0BnU\x04Ch\tQ]\x05s_\bPt\tfS\bTa\t\\}\n@O\x04Yc\tUZ\bTx\npe\x0BnU\nzU\t|}\tiD\nz\\\bSM\x0BxD\x04BR\nzQ\tQN\x04]M\x04Yh\nLP\x0BFm\x0BLX\x05vc\x0Bql\x05ka\tHK\bVb\ntC\nCy\bTv\nuV\x04oQ\t`z\t[I\tB`\x0BRb\tyj\tsb\x0BWs\bTl\tkV\x0Bed\ne\x7F\x05lL\x0BxN\t\x7Fm\nJn\tjY\x0BxD\bVb\bSq\x0Byu\twL\x0BXL\bTA\tpg\tAt\tnD\x04XX\twR\npl\nhw\x05yS\nps\tcO\bW[\x0B|j\x04XN\tsV\tp\\\tBe\nb~\nAJ\n]e\x05k`\x05qN\tdw\tWV\tHE\x0BEV\x05Jz\tid\tB`\tzh\x05E]\tfD\bTg\x05qN\bTa\tja\x04Cv\bSM\nhc\bUe\x05t_\tie\x04g]\twQ\nPn\bVB\tjw\bVg\x0BbE\tBZ\x0BRH\bP{\tjp\n\\}\ta_\tcC\t|a\x0BD]\tBZ\ti[\tfD\x0BxW\no_\td\\\n_D\ntb\t\\c\tAJ\nlK\x04oQ\x04lo\x0BLx\x0BM@\bWZ\x04Kn\x0Bpg\nTi\nIv\n|r\x0B@}\x05Jz\x05Lm\x05Wh\x05k}\x05ln\x0BxD\n]s\x04gc\x0Bps\tBr\bTW\x0BBM\x05tZ\nBY\x04DW\tjf\x0BSW\x04C}\nqo\tdE\tmv\tIQ\bPP\bUb\x05lv\x04BC\nzQ\t[I\x0Bgl\nig\bUs\x04BT\x0BbC\bSq\tsU\tiW\nJn\tSY\tHK\trg\npV\x0BID\x0B|j\x04KO\t`S\t|a`vbmglfmujbqnbgqjgavp`bqjmj`jlwjfnslslqrvf`vfmwbfpwbglsvfgfmivfdlp`lmwqbfpw/Mmmlnaqfwjfmfmsfqejonbmfqbbnjdlp`jvgbg`fmwqlbvmrvfsvfgfpgfmwqlsqjnfqsqf`jlpfd/Vmavfmlpuloufqsvmwlppfnbmbkba/Abbdlpwlmvfulpvmjglp`bqolpfrvjslmj/]lpnv`klpbodvmb`lqqfljnbdfmsbqwjqbqqjabnbq/Abklnaqffnsoflufqgbg`bnajlnv`kbpevfqlmsbpbglo/Amfbsbqf`fmvfubp`vqplpfpwbabrvjfqlojaqlp`vbmwlb``fplnjdvfoubqjlp`vbwqlwjfmfpdqvslppfq/Mmfvqlsbnfgjlpeqfmwfb`fq`bgfn/Mplefqwb`l`kfpnlgfoljwbojbofwqbpbod/Vm`lnsqb`vbofpf{jpwf`vfqslpjfmglsqfmpboofdbqujbifpgjmfqlnvq`jbslgq/Msvfpwlgjbqjlsvfaolrvjfqfnbmvfosqlsjl`qjpjp`jfqwlpfdvqlnvfqwfevfmwf`fqqbqdqbmgffef`wlsbqwfpnfgjgbsqlsjbleqf`fwjfqqbf.nbjoubqjbpelqnbpevwvqllaifwlpfdvjqqjfpdlmlqnbpnjpnlp/Vmj`l`bnjmlpjwjlpqby/_mgfajglsqvfabwlofglwfm/Abifp/Vpfpsfql`l`jmblqjdfmwjfmgb`jfmwl`/Mgjykbaobqpfq/Abobwjmbevfqybfpwjoldvfqqbfmwqbq/E{jwlo/_sfybdfmgbu/Agflfujwbqsbdjmbnfwqlpibujfqsbgqfpe/M`jo`bafyb/Mqfbppbojgbfmu/Alibs/_mbavplpajfmfpwf{wlpoofubqsvfgbmevfqwf`ln/Vm`obpfpkvnbmlwfmjglajoablvmjgbgfpw/Mpfgjwbq`qfbgl<X<W=c=k=n<R<V<\\<V<T<W<T=a=n<R<^=m<Y<Y<_<R<S=l<T=n<\\<V<Y=e<Y=o<Z<Y<v<\\<V<]<Y<[<]=g<W<R<Q<T<~=m<Y<S<R<X<A=n<R=n<R<P=k<Y<P<Q<Y=n<W<Y=n=l<\\<[<R<Q<\\<_<X<Y<P<Q<Y<x<W=c<s=l<T<Q<\\=m<Q<T=i=n<Y<P<V=n<R<_<R<X<^<R=n=n<\\<P<M<D<|<P<\\=c<K=n<R<^<\\=m<^<\\<P<Y<P=o<N<\\<V<X<^<\\<Q<\\<P=a=n<T=a=n=o<~<\\<P=n<Y=i<S=l<R=n=o=n<Q<\\<X<X<Q=c<~<R=n=n=l<T<Q<Y<U<~<\\=m<Q<T<P=m<\\<P=n<R=n=l=o<]<r<Q<T<P<T=l<Q<Y<Y<r<r<r<W<T=j=a=n<\\<r<Q<\\<Q<Y<P<X<R<P<P<R<U<X<^<Y<R<Q<R=m=o<X\fHy\fIk\fHU\fId\fHy\fIl\fHT\fIk\fHy\fHR\fHy\fIg\fHx\fH\\\fHF\fH\\\fHD\fIk\fHc\fHy\fHy\fHS\fHA\fIl\fHk\fHT\fHy\fH\\\fHH\fIg\fHU\fIg\fHj\fHF\fHU\fIl\fHC\fHU\fHC\fHR\fHH\fHy\fHI\fHRibdqbm\fHj\fHp\fHp\fIg\fHi\fH@\fHJ\fIg\fH{\fHd\fHp\fHR\fH{\fHc\fHU\fHB\fHk\fHD\fHY\fHU\fHC\fIk\fHI\fIk\fHI\fIl\fHt\fH\\\fHp\fH@\fHJ\fIl\fHy\fHd\fHp\fIl\fHY\fIk\fHD\fHd\fHD\fHc\fHU\fH\\\fHe\fHT\fHB\fIk\fHy\fHB\fHY\fIg\fH^\fIk\fHT\fH@\fHB\fHd\fHJ\fIk\fH\x7F\fH\\\fHj\fHB\fH@\fHT\fHA\fH\\\fH@\fHD\fHv\fH^\fHB\fHD\fHj\fH{\fHT\fIl\fH^\fIl4U5h5e4I5h5e5k4\\4K4N4B4]4U4C4C4K5h5e5k4\\5k4Y5d4]4V5f4]5o4K5j5d5h4K4D5f5j4U4]4Z4\\5h5o5k5j4K5f5d5i5n4K5h4U5h5f4K5j4K5h5o5j4A4F5e5n4D5h5d4A4E4K4B4]5m5n4[4U4D4C4]5o5j4I4\\4K5o5i4K4K4A4C4I5h4K5m5f5k4D4U4Z5o5f5m4D4A4G5d5i5j5d5k5d4O5j4K4@4C4K5h5k4K4_5h5i4U5j4C5h5f4_4U4D4]4Y5h5e5i5j4\\4D5k4K4O5j5k5i4G5h5o5j4F4K5h4K4A5f4G5i4Y4]4X4]4A4A5d5h5d5m5f4K4\\4K5h5o5h5i4]4E4K5j4F4K5h5m4O4D5d4B4K4Y4O5j4F4K5j5k4K5h5f4U4Z5d5d5n4C4K4D5j4B5f4]4D5j4F5h5o5i4X4K4M5d5k5f4K4D5d5n4Y4Y5d5i4K4]5n5i4O4A4C5j4A5j4U4C5i4]4O5f4K4A4E5o4F4D4C5d5j5f4@4D5i5j5k4F4A4F4@5k4E4_5j4E5f4F5i5o4]4E4V4^4E5j5m4_4D5f4F5h5h5k5h5j4K4F5h5o5n5h4D5h5i4K4U5j5k4O5d5h4X5f4M5j5d4]4O5i4K5m5f5o4D5o5h4\\4K4F4]4F4D4D4O5j5k5i4_4K5j5o4D5f4U5m5n4C4A4_5j5h5k5i4X4U4]4O5k5h4X5k4]5n4[4]4[5h4Dsqlejofpfquj`fgfebvowkjnpfoegfwbjop`lmwfmwpvsslqwpwbqwfgnfppbdfpv``fppebpkjlm?wjwof=`lvmwqzb``lvmw`qfbwfgpwlqjfpqfpvowpqvmmjmdsql`fpptqjwjmdlaif`wpujpjaoftfo`lnfbqwj`ofvmhmltmmfwtlqh`lnsbmzgzmbnj`aqltpfqsqjub`zsqlaofnPfquj`fqfpsf`wgjpsobzqfrvfpwqfpfquftfapjwfkjpwlqzeqjfmgplswjlmptlqhjmdufqpjlmnjoojlm`kbmmfotjmglt-bggqfppujpjwfgtfbwkfq`lqqf`wsqlgv`wfgjqf`welqtbqgzlv#`bmqfnlufgpvaif`w`lmwqlobq`kjuf`vqqfmwqfbgjmdojaqbqzojnjwfgnbmbdfqevqwkfqpvnnbqznb`kjmfnjmvwfpsqjubwf`lmwf{wsqldqbnpl`jfwzmvnafqptqjwwfmfmbaofgwqjddfqplvq`fpolbgjmdfofnfmwsbqwmfqejmboozsfqef`wnfbmjmdpzpwfnphffsjmd`vowvqf%rvlw8/ilvqmbosqlif`wpvqeb`fp%rvlw8f{sjqfpqfujftpabobm`fFmdojpk@lmwfmwwkqlvdkSofbpf#lsjmjlm`lmwb`wbufqbdfsqjnbqzujoobdfPsbmjpkdboofqzgf`ojmfnffwjmdnjppjlmslsvobqrvbojwznfbpvqfdfmfqbopsf`jfppfppjlmpf`wjlmtqjwfqp`lvmwfqjmjwjboqfslqwpejdvqfpnfnafqpklogjmdgjpsvwffbqojfqf{sqfppgjdjwbosj`wvqfBmlwkfqnbqqjfgwqbeej`ofbgjmd`kbmdfg`fmwqbouj`wlqzjnbdfp,qfbplmppwvgjfpefbwvqfojpwjmdnvpw#afp`kllopUfqpjlmvpvboozfsjplgfsobzjmddqltjmdlaujlvplufqobzsqfpfmwb`wjlmp?,vo=\x0E\ttqbssfqboqfbgz`fqwbjmqfbojwzpwlqbdfbmlwkfqgfphwlsleefqfgsbwwfqmvmvpvboGjdjwbo`bsjwboTfapjwfebjovqf`lmmf`wqfgv`fgBmgqljggf`bgfpqfdvobq#%bns8#bmjnbopqfofbpfBvwlnbwdfwwjmdnfwklgpmlwkjmdSlsvobq`bswjlmofwwfqp`bswvqfp`jfm`foj`fmpf`kbmdfpFmdobmg>2%bns8Kjpwlqz#>#mft#@fmwqbovsgbwfgPsf`jboMfwtlqhqfrvjqf`lnnfmwtbqmjmd@loofdfwlloabqqfnbjmpaf`bvpffof`wfgGfvwp`kejmbm`ftlqhfqprvj`hozafwtffmf{b`wozpfwwjmdgjpfbpfPl`jfwztfbslmpf{kjajw%ow8\"..@lmwqlo`obppfp`lufqfglvwojmfbwwb`hpgfuj`fp+tjmgltsvqslpfwjwof>!Nlajof#hjoojmdpkltjmdJwbojbmgqlssfgkfbujozfeef`wp.2$^*8\t`lmejqn@vqqfmwbgubm`fpkbqjmdlsfmjmdgqbtjmdajoojlmlqgfqfgDfqnbmzqfobwfg?,elqn=jm`ovgftkfwkfqgfejmfgP`jfm`f`bwboldBqwj`ofavwwlmpobqdfpwvmjelqnilvqmfzpjgfabq@kj`bdlklojgbzDfmfqbosbppbdf/%rvlw8bmjnbwfeffojmdbqqjufgsbppjmdmbwvqboqlvdkoz-\t\tWkf#avw#mlwgfmpjwzAqjwbjm@kjmfpfob`h#lewqjavwfJqfobmg!#gbwb.eb`wlqpqf`fjufwkbw#jpOjaqbqzkvpabmgjm#eb`wbeebjqp@kbqofpqbgj`boaqlvdkwejmgjmdobmgjmd9obmd>!qfwvqm#ofbgfqpsobmmfgsqfnjvnsb`hbdfBnfqj`bFgjwjlm^%rvlw8Nfppbdfmffg#wlubovf>!`lnsof{ollhjmdpwbwjlmafojfufpnboofq.nlajofqf`lqgptbmw#wlhjmg#leEjqfel{zlv#bqfpjnjobqpwvgjfgnb{jnvnkfbgjmdqbsjgoz`ojnbwfhjmdglnfnfqdfgbnlvmwpelvmgfgsjlmffqelqnvobgzmbpwzklt#wl#Pvsslqwqfufmvff`lmlnzQfpvowpaqlwkfqplogjfqobqdfoz`boojmd-%rvlw8B``lvmwFgtbqg#pfdnfmwQlafqw#feelqwpSb`jej`ofbqmfgvs#tjwkkfjdkw9tf#kbufBmdfofpmbwjlmp\\pfbq`kbssojfgb`rvjqfnbppjufdqbmwfg9#ebopfwqfbwfgajddfpwafmfejwgqjujmdPwvgjfpnjmjnvnsfqkbspnlqmjmdpfoojmdjp#vpfgqfufqpfubqjbmw#qlof>!njppjmdb`kjfufsqlnlwfpwvgfmwplnflmff{wqfnfqfpwlqfalwwln9fuloufgboo#wkfpjwfnbsfmdojpktbz#wl##Bvdvpwpznalop@lnsbmznbwwfqpnvpj`bobdbjmpwpfqujmd~*+*8\x0E\tsbznfmwwqlvaof`lm`fsw`lnsbqfsbqfmwpsobzfqpqfdjlmpnlmjwlq#$$Wkf#tjmmjmdf{solqfbgbswfgDboofqzsqlgv`fbajojwzfmkbm`f`bqffqp*-#Wkf#`loof`wPfbq`k#bm`jfmwf{jpwfgellwfq#kbmgofqsqjmwfg`lmplofFbpwfqmf{slqwptjmgltp@kbmmfojoofdbomfvwqbopvddfpw\\kfbgfqpjdmjmd-kwno!=pfwwofgtfpwfqm`bvpjmd.tfahjw`objnfgIvpwj`f`kbswfquj`wjnpWklnbp#nlyjoobsqlnjpfsbqwjfpfgjwjlmlvwpjgf9ebopf/kvmgqfgLoznsj`\\avwwlmbvwklqpqfb`kfg`kqlmj`gfnbmgppf`lmgpsqlwf`wbglswfgsqfsbqfmfjwkfqdqfbwozdqfbwfqlufqboojnsqluf`lnnbmgpsf`jbopfbq`k-tlqpkjsevmgjmdwklvdkwkjdkfpwjmpwfbgvwjojwzrvbqwfq@vowvqfwfpwjmd`ofbqozf{slpfgAqltpfqojafqbo~#`bw`kSqlif`wf{bnsofkjgf+*8EolqjgbbmptfqpbooltfgFnsfqlqgfefmpfpfqjlvpeqffglnPfufqbo.avwwlmEvqwkfqlvw#le#\">#mvoowqbjmfgGfmnbqhuljg+3*,boo-ipsqfufmwQfrvfpwPwfskfm\t\tTkfm#lapfquf?,k1=\x0E\tNlgfqm#sqlujgf!#bow>!alqgfqp-\t\tElq#\t\tNbmz#bqwjpwpsltfqfgsfqelqnej`wjlmwzsf#lenfgj`bowj`hfwplsslpfg@lvm`jotjwmfppivpwj`fDflqdf#Afodjvn---?,b=wtjwwfqmlwbaoztbjwjmdtbqebqf#Lwkfq#qbmhjmdskqbpfpnfmwjlmpvqujufp`klobq?,s=\x0E\t#@lvmwqzjdmlqfgolpp#leivpw#bpDflqdjbpwqbmdf?kfbg=?pwlssfg2$^*8\x0E\tjpobmgpmlwbaofalqgfq9ojpw#le`bqqjfg233/333?,k0=\t#pfufqboaf`lnfppfof`w#tfggjmd33-kwnonlmbq`klee#wkfwfb`kfqkjdkoz#ajloldzojef#lelq#fufmqjpf#le%qbrvl8sovplmfkvmwjmd+wklvdkGlvdobpiljmjmd`jq`ofpElq#wkfBm`jfmwUjfwmbnufkj`ofpv`k#bp`qzpwboubovf#>Tjmgltpfmilzfgb#pnboobppvnfg?b#jg>!elqfjdm#Boo#qjklt#wkfGjpsobzqfwjqfgkltfufqkjggfm8abwwofppffhjmd`bajmfwtbp#mlwollh#bw`lmgv`wdfw#wkfIbmvbqzkbssfmpwvqmjmdb9klufqLmojmf#Eqfm`k#ob`hjmdwzsj`bof{wqb`wfmfnjfpfufm#jedfmfqbwgf`jgfgbqf#mlw,pfbq`kafojfep.jnbdf9ol`bwfgpwbwj`-oldjm!=`lmufqwujlofmwfmwfqfgejqpw!=`jq`vjwEjmobmg`kfnjpwpkf#tbp23s{8!=bp#pv`kgjujgfg?,psbm=tjoo#afojmf#leb#dqfbwnzpwfqz,jmgf{-eboojmdgvf#wl#qbjotbz`loofdfnlmpwfqgfp`fmwjw#tjwkmv`ofbqIftjpk#sqlwfpwAqjwjpkeoltfqpsqfgj`wqfelqnpavwwlm#tkl#tbpof`wvqfjmpwbmwpvj`jgfdfmfqj`sfqjlgpnbqhfwpPl`jbo#ejpkjmd`lnajmfdqbskj`tjmmfqp?aq#,=?az#wkf#MbwvqboSqjub`z`llhjfplvw`lnfqfploufPtfgjpkaqjfeozSfqpjbmpl#nv`k@fmwvqzgfsj`wp`lovnmpklvpjmdp`qjswpmf{w#wlafbqjmdnbssjmdqfujpfgiRvfqz+.tjgwk9wjwof!=wllowjsPf`wjlmgfpjdmpWvqhjpkzlvmdfq-nbw`k+~*+*8\t\tavqmjmdlsfqbwfgfdqffpplvq`f>Qj`kbqg`olpfozsobpwj`fmwqjfp?,wq=\x0E\t`lolq9 vo#jg>!slppfppqloojmdskzpj`pebjojmdf{f`vwf`lmwfpwojmh#wlGfebvow?aq#,=\t9#wqvf/`kbqwfqwlvqjpn`obppj`sql`ffgf{sobjm?,k2=\x0E\tlmojmf-<{no#ufkfosjmdgjbnlmgvpf#wkfbjqojmffmg#..=*-bwwq+qfbgfqpklpwjmd eeeeeeqfbojyfUjm`fmwpjdmbop#pq`>!,Sqlgv`wgfpsjwfgjufqpfwfoojmdSvaoj`#kfog#jmIlpfsk#wkfbwqfbeef`wp?pwzof=b#obqdfglfpm$wobwfq/#Fofnfmwebuj`lm`qfbwlqKvmdbqzBjqslqwpff#wkfpl#wkbwNj`kbfoPzpwfnpSqldqbnp/#bmg##tjgwk>f%rvlw8wqbgjmdofew!=\tsfqplmpDlogfm#Beebjqpdqbnnbqelqnjmdgfpwqlzjgfb#le`bpf#lelogfpw#wkjp#jp-pq`#>#`bqwllmqfdjpwq@lnnlmpNvpojnpTkbw#jpjm#nbmznbqhjmdqfufbopJmgffg/frvbooz,pklt\\blvwgllqfp`bsf+Bvpwqjbdfmfwj`pzpwfn/Jm#wkf#pjwwjmdKf#boplJpobmgpB`bgfnz\t\n\n?\"..Gbmjfo#ajmgjmdaol`h!=jnslpfgvwjojyfBaqbkbn+f{`fswxtjgwk9svwwjmd*-kwno+\x7F\x7F#X^8\tGBWBX#)hjw`kfmnlvmwfgb`wvbo#gjbof`wnbjmoz#\\aobmh$jmpwboof{sfqwpje+wzsfJw#bopl%`lsz8#!=Wfqnpalqm#jmLswjlmpfbpwfqmwbohjmd`lm`fqmdbjmfg#lmdljmdivpwjez`qjwj`peb`wlqzjwp#ltmbppbvowjmujwfgobpwjmdkjp#ltmkqfe>!,!#qfo>!gfufols`lm`fqwgjbdqbngloobqp`ovpwfqsks<jg>bo`lklo*8~*+*8vpjmd#b=?psbm=ufppfopqfujuboBggqfppbnbwfvqbmgqljgboofdfgjoomfpptbohjmd`fmwfqprvbojeznbw`kfpvmjejfgf{wjm`wGfefmpfgjfg#jm\t\n?\"..#`vpwlnpojmhjmdOjwwof#Allh#lefufmjmdnjm-ip<bqf#wkfhlmwbhwwlgbz$p-kwno!#wbqdfw>tfbqjmdBoo#Qjd8\t~*+*8qbjpjmd#Bopl/#`qv`jbobalvw!=gf`obqf..=\t?p`ejqfel{bp#nv`kbssojfpjmgf{/#p/#avw#wzsf#>#\t\x0E\t?\"..wltbqgpQf`lqgpSqjubwfElqfjdmSqfnjfq`klj`fpUjqwvboqfwvqmp@lnnfmwSltfqfgjmojmf8slufqwz`kbnafqOjujmd#ulovnfpBmwklmzoldjm!#QfobwfgF`lmlnzqfb`kfp`vwwjmddqbujwzojef#jm@kbswfq.pkbgltMlwbaof?,wg=\x0E\t#qfwvqmpwbgjvntjgdfwpubqzjmdwqbufopkfog#aztkl#bqftlqh#jmeb`vowzbmdvobqtkl#kbgbjqslqwwltm#le\t\tPlnf#$`oj`h$`kbqdfphfztlqgjw#tjoo`jwz#le+wkjp*8Bmgqft#vmjrvf#`kf`hfglq#nlqf033s{8#qfwvqm8qpjlm>!sovdjmptjwkjm#kfqpfoePwbwjlmEfgfqboufmwvqfsvaojpkpfmw#wlwfmpjlmb`wqfpp`lnf#wlejmdfqpGvhf#lesflsof/f{soljwtkbw#jpkbqnlmzb#nbilq!9!kwwsjm#kjp#nfmv!=\tnlmwkozleej`fq`lvm`jodbjmjmdfufm#jmPvnnbqzgbwf#leolzbowzejwmfppbmg#tbpfnsfqlqpvsqfnfPf`lmg#kfbqjmdQvppjbmolmdfpwBoafqwbobwfqbopfw#le#pnboo!=-bssfmggl#tjwkefgfqboabmh#leafmfbwkGfpsjwf@bsjwbodqlvmgp*/#bmg#sfq`fmwjw#eqln`olpjmd`lmwbjmJmpwfbgejewffmbp#tfoo-zbkll-qfpslmgejdkwfqlap`vqfqfeof`wlqdbmj`>#Nbwk-fgjwjmdlmojmf#sbggjmdb#tkloflmfqqlqzfbq#lefmg#le#abqqjfqtkfm#jwkfbgfq#klnf#leqfpvnfgqfmbnfgpwqlmd=kfbwjmdqfwbjmp`olvgeqtbz#le#Nbq`k#2hmltjmdjm#sbqwAfwtffmofpplmp`olpfpwujqwvboojmhp!=`qlppfgFMG#..=ebnlvp#btbqgfgOj`fmpfKfbowk#ebjqoz#tfbowkznjmjnboBeqj`bm`lnsfwfobafo!=pjmdjmdebqnfqpAqbpjo*gjp`vppqfsob`fDqfdlqzelmw#`lsvqpvfgbssfbqpnbhf#vsqlvmgfgalwk#leaol`hfgpbt#wkfleej`fp`lolvqpje+gl`vtkfm#kffmelq`fsvpk+evBvdvpw#VWE.;!=Ebmwbpzjm#nlpwjmivqfgVpvboozebqnjmd`olpvqflaif`w#gfefm`fvpf#le#Nfgj`bo?algz=\tfujgfmwaf#vpfghfz@lgfpj{wffmJpobnj` 333333fmwjqf#tjgfoz#b`wjuf#+wzsflelmf#`bm`lolq#>psfbhfqf{wfmgpSkzpj`pwfqqbjm?walgz=evmfqboujftjmdnjggof#`qj`hfwsqlskfwpkjewfggl`wlqpQvppfoo#wbqdfw`lnsb`wbodfaqbpl`jbo.avoh#lenbm#bmg?,wg=\t#kf#ofew*-ubo+*ebopf*8oldj`boabmhjmdklnf#wlmbnjmd#Bqjylmb`qfgjwp*8\t~*8\telvmgfqjm#wvqm@loojmpafelqf#Avw#wkf`kbqdfgWjwof!=@bswbjmpsfoofgdlggfppWbd#..=Bggjmd9avw#tbpQf`fmw#sbwjfmwab`h#jm>ebopf%Ojm`lomtf#hmlt@lvmwfqIvgbjpnp`qjsw#bowfqfg$^*8\t##kbp#wkfvm`ofbqFufmw$/alwk#jmmlw#boo\t\t?\"..#sob`jmdkbqg#wl#`fmwfqplqw#le`ojfmwppwqffwpAfqmbqgbppfqwpwfmg#wlebmwbpzgltm#jmkbqalvqEqffglniftfoqz,balvw--pfbq`kofdfmgpjp#nbgfnlgfqm#lmoz#lmlmoz#wljnbdf!#ojmfbq#sbjmwfqbmg#mlwqbqfoz#b`qlmzngfojufqpklqwfq33%bns8bp#nbmztjgwk>!,)#?\"X@wjwof#>le#wkf#oltfpw#sj`hfg#fp`bsfgvpfp#lesflsofp#Svaoj`Nbwwkftwb`wj`pgbnbdfgtbz#elqobtp#lefbpz#wl#tjmgltpwqlmd##pjnsof~`bw`k+pfufmwkjmelal{tfmw#wlsbjmwfg`jwjyfmJ#glm$wqfwqfbw-#Plnf#tt-!*8\talnajmdnbjowl9nbgf#jm-#Nbmz#`bqqjfp\x7F\x7Fx~8tjtlqh#lepzmlmzngfefbwpebulqfglswj`bosbdfWqbvmofpp#pfmgjmdofew!=?`lnP`lqBoo#wkfiRvfqz-wlvqjpw@obppj`ebopf!#Tjokfonpvavqapdfmvjmfajpklsp-psojw+dolabo#elooltpalgz#lemlnjmbo@lmwb`wpf`vobqofew#wl`kjfeoz.kjggfm.abmmfq?,oj=\t\t-#Tkfm#jm#alwkgjpnjppF{solqfbotbzp#ujb#wkfpsb/]lotfoebqfqvojmd#bqqbmdf`bswbjmkjp#plmqvof#lekf#wllhjwpfoe/>3%bns8+`boofgpbnsofpwl#nbhf`ln,sbdNbqwjm#Hfmmfgzb``fswpevoo#lekbmgofgAfpjgfp,,..=?,baof#wlwbqdfwpfppfm`fkjn#wl#jwp#az#`lnnlm-njmfqbowl#wbhftbzp#wlp-lqd,obgujpfgsfmbowzpjnsof9je#wkfzOfwwfqpb#pklqwKfqafqwpwqjhfp#dqlvsp-ofmdwkeojdkwplufqobspoltoz#ofppfq#pl`jbo#?,s=\t\n\njw#jmwlqbmhfg#qbwf#levo=\x0E\t##bwwfnswsbjq#lenbhf#jwHlmwbhwBmwlmjlkbujmd#qbwjmdp#b`wjufpwqfbnpwqbssfg!*-`pp+klpwjofofbg#wlojwwof#dqlvsp/Sj`wvqf..=\x0E\t\x0E\t#qltp>!#laif`wjmufqpf?ellwfq@vpwlnU=?_,p`qploujmd@kbnafqpobufqztlvmgfgtkfqfbp\">#$vmgelq#boosbqwoz#.qjdkw9Bqbajbmab`hfg#`fmwvqzvmjw#lenlajof.Fvqlsf/jp#klnfqjph#legfpjqfg@ojmwlm`lpw#lebdf#le#af`lnf#mlmf#les%rvlw8Njggof#fbg$*X3@qjwj`ppwvgjlp=%`lsz8dqlvs!=bppfnaonbhjmd#sqfppfgtjgdfw-sp9!#<#qfavjowaz#plnfElqnfq#fgjwlqpgfobzfg@bmlmj`kbg#wkfsvpkjmd`obpp>!avw#bqfsbqwjboAbazolmalwwln#`bqqjfq@lnnbmgjwp#vpfBp#tjwk`lvqpfpb#wkjqggfmlwfpbopl#jmKlvpwlm13s{8!=b``vpfgglvaof#dlbo#leEbnlvp#*-ajmg+sqjfpwp#Lmojmfjm#Ivozpw#(#!d`lmpvowgf`jnbokfosevoqfujufgjp#ufqzq$($jswolpjmd#efnbofpjp#boplpwqjmdpgbzp#lebqqjuboevwvqf#?laif`welq`jmdPwqjmd+!#,=\t\n\nkfqf#jpfm`lgfg-##Wkf#aboollmglmf#az,`lnnlmad`lolqobt#le#Jmgjbmbbuljgfgavw#wkf1s{#0s{irvfqz-bewfq#bsloj`z-nfm#bmgellwfq.>#wqvf8elq#vpfp`qffm-Jmgjbm#jnbdf#>ebnjoz/kwws9,,#%maps8gqjufqpfwfqmbopbnf#bpmlwj`fgujftfqp~*+*8\t#jp#nlqfpfbplmpelqnfq#wkf#mftjp#ivpw`lmpfmw#Pfbq`ktbp#wkftkz#wkfpkjssfgaq=?aq=tjgwk9#kfjdkw>nbgf#le`vjpjmfjp#wkbwb#ufqz#Bgnjqbo#ej{fg8mlqnbo#NjppjlmSqfpp/#lmwbqjl`kbqpfwwqz#wl#jmubgfg>!wqvf!psb`jmdjp#nlpwb#nlqf#wlwboozeboo#le~*8\x0E\t##jnnfmpfwjnf#jmpfw#lvwpbwjpezwl#ejmggltm#wlolw#le#Sobzfqpjm#Ivmfrvbmwvnmlw#wkfwjnf#wlgjpwbmwEjmmjpkpq`#>#+pjmdof#kfos#leDfqnbm#obt#bmgobafofgelqfpwp`llhjmdpsb`f!=kfbgfq.tfoo#bpPwbmofzaqjgdfp,dolabo@qlbwjb#Balvw#X3^8\t##jw/#bmgdqlvsfgafjmd#b*xwkqltkf#nbgfojdkwfqfwkj`boEEEEEE!alwwln!ojhf#b#fnsolzpojuf#jmbp#pffmsqjmwfqnlpw#leva.ojmhqfif`wpbmg#vpfjnbdf!=pv``ffgeffgjmdMv`ofbqjmelqnbwl#kfosTlnfm$pMfjwkfqNf{j`bmsqlwfjm?wbaof#az#nbmzkfbowkzobtpvjwgfujpfg-svpk+xpfoofqppjnsoz#Wkqlvdk-`llhjf#Jnbdf+logfq!=vp-ip!=#Pjm`f#vmjufqpobqdfq#lsfm#wl\"..#fmgojfp#jm$^*8\x0E\t##nbqhfwtkl#jp#+!GLN@lnbmbdfglmf#elqwzsfle#Hjmdglnsqlejwpsqlslpfwl#pklt`fmwfq8nbgf#jwgqfppfgtfqf#jmnj{wvqfsqf`jpfbqjpjmdpq`#>#$nbhf#b#pf`vqfgAbswjpwulwjmd#\t\n\nubq#Nbq`k#1dqft#vs@ojnbwf-qfnlufphjoofgtbz#wkf?,kfbg=eb`f#leb`wjmd#qjdkw!=wl#tlqhqfgv`fpkbp#kbgfqf`wfgpklt+*8b`wjlm>allh#lebm#bqfb>>#!kww?kfbgfq\t?kwno=`lmelqneb`jmd#`llhjf-qfoz#lmklpwfg#-`vpwlnkf#tfmwavw#elqpsqfbg#Ebnjoz#b#nfbmplvw#wkfelqvnp-ellwbdf!=Nlajo@ofnfmwp!#jg>!bp#kjdkjmwfmpf..=?\"..efnbof#jp#pffmjnsojfgpfw#wkfb#pwbwfbmg#kjpebpwfpwafpjgfpavwwlm\\alvmgfg!=?jnd#Jmelal{fufmwp/b#zlvmdbmg#bqfMbwjuf#`kfbsfqWjnflvwbmg#kbpfmdjmfptlm#wkf+nlpwozqjdkw9#ejmg#b#.alwwlnSqjm`f#bqfb#lenlqf#lepfbq`k\\mbwvqf/ofdboozsfqjlg/obmg#lelq#tjwkjmgv`fgsqlujmdnjppjofol`boozBdbjmpwwkf#tbzh%rvlw8s{8!=\x0E\tsvpkfg#babmglmmvnfqbo@fqwbjmJm#wkjpnlqf#jmlq#plnfmbnf#jpbmg/#jm`qltmfgJPAM#3.`qfbwfpL`wlafqnbz#mlw`fmwfq#obwf#jmGfefm`ffmb`wfgtjpk#wlaqlbgoz`llojmdlmolbg>jw-#Wkfqf`lufqNfnafqpkfjdkw#bppvnfp?kwno=\tsflsof-jm#lmf#>tjmgltellwfq\\b#dllg#qfhobnblwkfqp/wl#wkjp\\`llhjfsbmfo!=Olmglm/gfejmfp`qvpkfgabswjpn`lbpwbopwbwvp#wjwof!#nluf#wlolpw#jmafwwfq#jnsojfpqjuboqzpfqufqp#PzpwfnSfqkbspfp#bmg#`lmwfmgeoltjmdobpwfg#qjpf#jmDfmfpjpujft#leqjpjmd#pffn#wlavw#jm#ab`hjmdkf#tjoodjufm#bdjujmd#`jwjfp-eolt#le#Obwfq#boo#avwKjdktbzlmoz#azpjdm#lekf#glfpgjeefqpabwwfqz%bns8obpjmdofpwkqfbwpjmwfdfqwbhf#lmqfevpfg`boofg#>VP%bnsPff#wkfmbwjufpaz#wkjppzpwfn-kfbg#le9klufq/ofpajbmpvqmbnfbmg#boo`lnnlm,kfbgfq\\\\sbqbnpKbqubqg,sj{fo-qfnlubopl#olmdqlof#leiljmwozphzp`qbVmj`lgfaq#,=\x0E\tBwobmwbmv`ofvp@lvmwz/svqfoz#`lvmw!=fbpjoz#avjog#blm`oj`hb#djufmsljmwfqk%rvlw8fufmwp#fopf#x\tgjwjlmpmlt#wkf/#tjwk#nbm#tkllqd,Tfalmf#bmg`buboqzKf#gjfgpfbwwof33/333#xtjmgltkbuf#wlje+tjmgbmg#jwpplofoz#n%rvlw8qfmftfgGfwqljwbnlmdpwfjwkfq#wkfn#jmPfmbwlqVp?,b=?Hjmd#leEqbm`jp.sqlgv`kf#vpfgbqw#bmgkjn#bmgvpfg#azp`lqjmdbw#klnfwl#kbufqfobwfpjajojwzeb`wjlmAveebolojmh!=?tkbw#kfeqff#wl@jwz#le`lnf#jmpf`wlqp`lvmwfglmf#gbzmfqulvpprvbqf#~8je+dljm#tkbwjnd!#bojp#lmozpfbq`k,wvfpgbzollpfozPlolnlmpf{vbo#.#?b#kqnfgjvn!GL#MLW#Eqbm`f/tjwk#b#tbq#bmgpf`lmg#wbhf#b#=\x0E\t\x0E\t\x0E\tnbqhfw-kjdktbzglmf#jm`wjujwz!obpw!=laojdfgqjpf#wl!vmgfejnbgf#wl#Fbqoz#sqbjpfgjm#jwp#elq#kjpbwkofwfIvsjwfqZbkll\"#wfqnfg#pl#nbmzqfbooz#p-#Wkf#b#tlnbm<ubovf>gjqf`w#qjdkw!#aj`z`ofb`jmd>!gbz#bmgpwbwjmdQbwkfq/kjdkfq#Leej`f#bqf#mltwjnfp/#tkfm#b#sbz#elqlm#wkjp.ojmh!=8alqgfqbqlvmg#bmmvbo#wkf#Mftsvw#wkf-`ln!#wbhjm#wlb#aqjfe+jm#wkfdqlvsp-8#tjgwkfmyznfppjnsof#jm#obwfxqfwvqmwkfqbszb#sljmwabmmjmdjmhp!=\t+*8!#qfb#sob`f_v330@bbalvw#bwq=\x0E\t\n\n``lvmw#djufp#b?P@QJSWQbjotbzwkfnfp,wlloal{AzJg+!{kvnbmp/tbw`kfpjm#plnf#je#+tj`lnjmd#elqnbwp#Vmgfq#avw#kbpkbmgfg#nbgf#azwkbm#jmefbq#legfmlwfg,jeqbnfofew#jmulowbdfjm#fb`kb%rvlw8abpf#leJm#nbmzvmgfqdlqfdjnfpb`wjlm#?,s=\x0E\t?vpwlnUb8%dw8?,jnslqwplq#wkbwnlpwoz#%bns8qf#pjyf>!?,b=?,kb#`obppsbppjufKlpw#>#TkfwkfqefqwjofUbqjlvp>X^8+ev`bnfqbp,=?,wg=b`wp#bpJm#plnf=\x0E\t\x0E\t?\"lqdbmjp#?aq#,=Afjijmd`bwbo/Lgfvwp`kfvqlsfvfvphbqbdbfjodfpufmphbfpsb/]bnfmpbifvpvbqjlwqbabiln/E{j`ls/Mdjmbpjfnsqfpjpwfnbl`wvaqfgvqbmwfb/]bgjqfnsqfpbnlnfmwlmvfpwqlsqjnfqbwqbu/Epdqb`jbpmvfpwqbsql`fplfpwbglp`bojgbgsfqplmbm/Vnfqlb`vfqgln/Vpj`bnjfnaqllefqwbpbodvmlpsb/Apfpfifnsolgfqf`klbgfn/Mpsqjubglbdqfdbqfmob`fpslpjaofklwfofppfujoobsqjnfql/Vowjnlfufmwlpbq`kjul`vowvqbnvifqfpfmwqbgbbmvm`jlfnabqdlnfq`bgldqbmgfpfpwvgjlnfilqfpefaqfqlgjpf/]lwvqjpnl`/_gjdlslqwbgbfpsb`jlebnjojbbmwlmjlsfqnjwfdvbqgbqbodvmbpsqf`jlpbodvjfmpfmwjglujpjwbpw/Awvol`lml`fqpfdvmgl`lmpfileqbm`jbnjmvwlppfdvmgbwfmfnlpfef`wlpn/Mobdbpfpj/_mqfujpwbdqbmbgb`lnsqbqjmdqfpldbq`/Abb``j/_mf`vbglqrvjfmfpjm`ovplgfafq/Mnbwfqjbklnaqfpnvfpwqbslgq/Abnb/]bmb/Vowjnbfpwbnlplej`jbowbnajfmmjmd/Vmpbovglpslgfnlpnfilqbqslpjwjlmavpjmfppklnfsbdfpf`vqjwzobmdvbdfpwbmgbqg`bnsbjdmefbwvqfp`bwfdlqzf{wfqmbo`kjogqfmqfpfqufgqfpfbq`kf{`kbmdfebulqjwfwfnsobwfnjojwbqzjmgvpwqzpfquj`fpnbwfqjbosqlgv`wpy.jmgf{9`lnnfmwpplewtbqf`lnsofwf`bofmgbqsobwelqnbqwj`ofpqfrvjqfgnlufnfmwrvfpwjlmavjogjmdslojwj`pslppjaofqfojdjlmskzpj`boeffgab`hqfdjpwfqsj`wvqfpgjpbaofgsqlwl`lobvgjfm`fpfwwjmdpb`wjujwzfofnfmwpofbqmjmdbmzwkjmdbapwqb`wsqldqfpplufqujftnbdbyjmff`lmlnj`wqbjmjmdsqfppvqfubqjlvp#?pwqlmd=sqlsfqwzpklssjmdwldfwkfqbgubm`fgafkbujlqgltmolbgefbwvqfgellwaboopfof`wfgObmdvbdfgjpwbm`fqfnfnafqwqb`hjmdsbpptlqgnlgjejfgpwvgfmwpgjqf`wozejdkwjmdmlqwkfqmgbwbabpfefpwjuboaqfbhjmdol`bwjlmjmwfqmfwgqlsgltmsqb`wj`ffujgfm`fevm`wjlmnbqqjbdfqfpslmpfsqlaofnpmfdbwjufsqldqbnpbmbozpjpqfofbpfgabmmfq!=svq`kbpfsloj`jfpqfdjlmbo`qfbwjufbqdvnfmwallhnbqhqfefqqfq`kfnj`bogjujpjlm`booab`hpfsbqbwfsqlif`wp`lmeoj`wkbqgtbqfjmwfqfpwgfojufqznlvmwbjmlawbjmfg>#ebopf8elq+ubq#b``fswfg`bsb`jwz`lnsvwfqjgfmwjwzbjq`qbewfnsolzfgsqlslpfgglnfpwj`jm`ovgfpsqlujgfgklpsjwboufqwj`bo`loobspfbssqlb`ksbqwmfqpoldl!=?bgbvdkwfqbvwklq!#`vowvqboebnjojfp,jnbdfp,bppfnaozsltfqevowfb`kjmdejmjpkfggjpwqj`w`qjwj`bo`dj.ajm,svqslpfpqfrvjqfpfof`wjlmaf`lnjmdsqlujgfpb`bgfnj`f{fq`jpfb`wvbooznfgj`jmf`lmpwbmwb``jgfmwNbdbyjmfgl`vnfmwpwbqwjmdalwwln!=lapfqufg9#%rvlw8f{wfmgfgsqfujlvpPlewtbqf`vpwlnfqgf`jpjlmpwqfmdwkgfwbjofgpojdkwozsobmmjmdwf{wbqfb`vqqfm`zfufqzlmfpwqbjdkwwqbmpefqslpjwjufsqlgv`fgkfqjwbdfpkjssjmdbaplovwfqf`fjufgqfofubmwavwwlm!#ujlofm`fbmztkfqfafmfejwpobvm`kfgqf`fmwozboojbm`felooltfgnvowjsofavoofwjmjm`ovgfgl``vqqfgjmwfqmbo'+wkjp*-qfsvaoj`=?wq=?wg`lmdqfppqf`lqgfgvowjnbwfplovwjlm?vo#jg>!gjp`lufqKlnf?,b=tfapjwfpmfwtlqhpbowklvdkfmwjqfoznfnlqjbonfppbdfp`lmwjmvfb`wjuf!=plnftkbwuj`wlqjbTfpwfqm##wjwof>!Ol`bwjlm`lmwqb`wujpjwlqpGltmolbgtjwklvw#qjdkw!=\tnfbpvqfptjgwk#>#ubqjbaofjmuloufgujqdjmjbmlqnboozkbssfmfgb``lvmwppwbmgjmdmbwjlmboQfdjpwfqsqfsbqfg`lmwqlopb``vqbwfajqwkgbzpwqbwfdzleej`jbodqbskj`p`qjnjmboslppjaoz`lmpvnfqSfqplmbopsfbhjmdubojgbwfb`kjfufg-isd!#,=nb`kjmfp?,k1=\t##hfztlqgpeqjfmgozaqlwkfqp`lnajmfglqjdjmbo`lnslpfgf{sf`wfgbgfrvbwfsbhjpwbmeloolt!#ubovbaof?,obafo=qfobwjufaqjmdjmdjm`qfbpfdlufqmlqsovdjmp,Ojpw#le#Kfbgfq!=!#mbnf>!#+%rvlw8dqbgvbwf?,kfbg=\t`lnnfq`fnbobzpjbgjqf`wlqnbjmwbjm8kfjdkw9p`kfgvof`kbmdjmdab`h#wl#`bwkloj`sbwwfqmp`lolq9# dqfbwfpwpvssojfpqfojbaof?,vo=\t\n\n?pfof`w#`jwjyfmp`olwkjmdtbw`kjmd?oj#jg>!psf`jej``bqqzjmdpfmwfm`f?`fmwfq=`lmwqbpwwkjmhjmd`bw`k+f*plvwkfqmNj`kbfo#nfq`kbmw`bqlvpfosbggjmd9jmwfqjlq-psojw+!ojybwjlmL`wlafq#*xqfwvqmjnsqlufg..%dw8\t\t`lufqbdf`kbjqnbm-smd!#,=pvaif`wpQj`kbqg#tkbwfufqsqlabaozqf`lufqzabpfabooivgdnfmw`lmmf`w--`pp!#,=#tfapjwfqfslqwfggfebvow!,=?,b=\x0E\tfof`wqj`p`lwobmg`qfbwjlmrvbmwjwz-#JPAM#3gjg#mlw#jmpwbm`f.pfbq`k.!#obmd>!psfbhfqp@lnsvwfq`lmwbjmpbq`kjufpnjmjpwfqqfb`wjlmgjp`lvmwJwbojbml`qjwfqjbpwqlmdoz9#$kwws9$p`qjsw$`lufqjmdleefqjmdbssfbqfgAqjwjpk#jgfmwjezEb`fallhmvnfqlvpufkj`ofp`lm`fqmpBnfqj`bmkbmgojmdgju#jg>!Tjoojbn#sqlujgfq\\`lmwfmwb``vqb`zpf`wjlm#bmgfqplmeof{jaof@bwfdlqzobtqfm`f?p`qjsw=obzlvw>!bssqlufg#nb{jnvnkfbgfq!=?,wbaof=Pfquj`fpkbnjowlm`vqqfmw#`bmbgjbm`kbmmfop,wkfnfp,,bqwj`oflswjlmboslqwvdboubovf>!!jmwfqubotjqfofppfmwjwofgbdfm`jfpPfbq`k!#nfbpvqfgwklvpbmgpsfmgjmd%kfoojs8mft#Gbwf!#pjyf>!sbdfMbnfnjggof!#!#,=?,b=kjggfm!=pfrvfm`fsfqplmbolufqeoltlsjmjlmpjoojmljpojmhp!=\t\n?wjwof=ufqpjlmppbwvqgbzwfqnjmbojwfnsqlsfmdjmffqpf`wjlmpgfpjdmfqsqlslpbo>!ebopf!Fpsb/]loqfofbpfppvanjw!#fq%rvlw8bggjwjlmpznswlnplqjfmwfgqfplvq`fqjdkw!=?sofbpvqfpwbwjlmpkjpwlqz-ofbujmd##alqgfq>`lmwfmwp`fmwfq!=-\t\tPlnf#gjqf`wfgpvjwbaofavodbqjb-pklt+*8gfpjdmfgDfmfqbo#`lm`fswpF{bnsofptjoojbnpLqjdjmbo!=?psbm=pfbq`k!=lsfqbwlqqfrvfpwpb#%rvlw8booltjmdGl`vnfmwqfujpjlm-#\t\tWkf#zlvqpfoe@lmwb`w#nj`kjdbmFmdojpk#`lovnajbsqjlqjwzsqjmwjmdgqjmhjmdeb`jojwzqfwvqmfg@lmwfmw#leej`fqpQvppjbm#dfmfqbwf.;;6:.2!jmgj`bwfebnjojbq#rvbojwznbqdjm93#`lmwfmwujftslqw`lmwb`wp.wjwof!=slqwbaof-ofmdwk#fojdjaofjmuloufpbwobmwj`lmolbg>!gfebvow-pvssojfgsbznfmwpdolppbqz\t\tBewfq#dvjgbm`f?,wg=?wgfm`lgjmdnjggof!=`bnf#wl#gjpsobzpp`lwwjpkilmbwkbmnbilqjwztjgdfwp-`ojmj`bowkbjobmgwfb`kfqp?kfbg=\t\nbeef`wfgpvsslqwpsljmwfq8wlPwqjmd?,pnboo=lhobklnbtjoo#af#jmufpwlq3!#bow>!klojgbzpQfplvq`foj`fmpfg#+tkj`k#-#Bewfq#`lmpjgfqujpjwjmdf{solqfqsqjnbqz#pfbq`k!#bmgqljg!rvj`hoz#nffwjmdpfpwjnbwf8qfwvqm#8`lolq9 #kfjdkw>bssqlubo/#%rvlw8#`kf`hfg-njm-ip!nbdmfwj`=?,b=?,kelqf`bpw-#Tkjof#wkvqpgbzgufqwjpf%fb`vwf8kbp@obppfubovbwflqgfqjmdf{jpwjmdsbwjfmwp#Lmojmf#`lolqbglLswjlmp!`bnsafoo?\"..#fmg?,psbm=??aq#,=\x0E\t\\slsvsp\x7Fp`jfm`fp/%rvlw8#rvbojwz#Tjmgltp#bppjdmfgkfjdkw9#?a#`obppof%rvlw8#ubovf>!#@lnsbmzf{bnsofp?jeqbnf#afojfufpsqfpfmwpnbqpkboosbqw#le#sqlsfqoz*-\t\tWkf#wb{lmlnznv`k#le#?,psbm=\t!#gbwb.pqwvdv/Fpp`qlooWl#sqlif`w?kfbg=\x0E\tbwwlqmfzfnskbpjppslmplqpebm`zal{tlqog$p#tjogojef`kf`hfg>pfppjlmpsqldqbnns{8elmw.#Sqlif`wilvqmbopafojfufgub`bwjlmwklnsplmojdkwjmdbmg#wkf#psf`jbo#alqgfq>3`kf`hjmd?,walgz=?avwwlm#@lnsofwf`ofbqej{\t?kfbg=\tbqwj`of#?pf`wjlmejmgjmdpqlof#jm#slsvobq##L`wlafqtfapjwf#f{slpvqfvpfg#wl##`kbmdfplsfqbwfg`oj`hjmdfmwfqjmd`lnnbmgpjmelqnfg#mvnafqp##?,gju=`qfbwjmdlmPvanjwnbqzobmg`loofdfpbmbozwj`ojpwjmdp`lmwb`w-olddfgJmbgujplqzpjaojmdp`lmwfmw!p%rvlw8*p-#Wkjp#sb`hbdfp`kf`hal{pvddfpwpsqfdmbmwwlnlqqltpsb`jmd>j`lm-smdibsbmfpf`lgfabpfavwwlm!=dbnaojmdpv`k#bp#/#tkjof#?,psbm=#njpplvqjpslqwjmdwls92s{#-?,psbm=wfmpjlmptjgwk>!1obyzolbgmlufnafqvpfg#jm#kfjdkw>!`qjsw!=\t%maps8?,?wq=?wg#kfjdkw91,sqlgv`w`lvmwqz#jm`ovgf#ellwfq!#%ow8\"..#wjwof!=?,irvfqz-?,elqn=\t+\x0BBl\bQ\x7F*+\x0BUm\x05Gx*kqubwphjjwbojbmlqln/Nm(ow/Pqh/Kf4K4]4C5dwbnaj/Emmlwj`jbpnfmpbifpsfqplmbpgfqf`klpmb`jlmbopfquj`jl`lmwb`wlvpvbqjlpsqldqbnbdlajfqmlfnsqfpbpbmvm`jlpubofm`jb`lolnajbgfpsv/Epgfslqwfpsqlzf`wlsqlgv`wls/Vaoj`lmlplwqlpkjpwlqjbsqfpfmwfnjoolmfpnfgjbmwfsqfdvmwbbmwfqjlqqf`vqplpsqlaofnbpbmwjbdlmvfpwqlplsjmj/_mjnsqjnjqnjfmwqbpbn/Eqj`bufmgfglqpl`jfgbgqfpsf`wlqfbojybqqfdjpwqlsbobaqbpjmwfq/Epfmwlm`fpfpsf`jbonjfnaqlpqfbojgbg`/_qglabybqbdlybs/Mdjmbppl`jbofpaolrvfbqdfpwj/_mborvjofqpjpwfnbp`jfm`jbp`lnsofwlufqpj/_m`lnsofwbfpwvgjlps/Vaoj`blaifwjulboj`bmwfavp`bglq`bmwjgbgfmwqbgbpb``jlmfpbq`kjulppvsfqjlqnbzlq/Abbofnbmjbevm`j/_m/Vowjnlpkb`jfmglbrvfoolpfgj`j/_mefqmbmglbnajfmwfeb`fallhmvfpwqbp`ojfmwfpsql`fplpabpwbmwfsqfpfmwbqfslqwbq`lmdqfplsvaoj`bq`lnfq`jl`lmwqbwli/_ufmfpgjpwqjwlw/E`mj`b`lmivmwlfmfqd/Abwqbabibqbpwvqjbpqf`jfmwfvwjojybqalofw/Ampboubglq`lqqf`wbwqbabilpsqjnfqlpmfdl`jlpojafqwbggfwboofpsbmwboobsq/_{jnlbonfq/Abbmjnbofprvj/Emfp`lqby/_mpf``j/_mavp`bmglls`jlmfpf{wfqjlq`lm`fswlwlgbu/Abdbofq/Abfp`qjajqnfgj`jmboj`fm`jb`lmpvowbbpsf`wlp`q/Awj`bg/_obqfpivpwj`jbgfafq/Mmsfq/Alglmf`fpjwbnbmwfmfqsfrvf/]lqf`jajgbwqjavmbowfmfqjef`bm`j/_m`bmbqjbpgfp`bqdbgjufqplpnboolq`bqfrvjfqfw/E`mj`lgfafq/Abujujfmgbejmbmybpbgfobmwfevm`jlmb`lmpfilpgje/A`jo`jvgbgfpbmwjdvbpbubmybgbw/Eqnjmlvmjgbgfpp/Mm`kfy`bnsb/]bplewlmj`qfujpwbp`lmwjfmfpf`wlqfpnlnfmwlpeb`vowbg`q/Egjwlgjufqpbppvsvfpwleb`wlqfppfdvmglpsfrvf/]b<_<R<X<\\<Y=m<W<T<Y=m=n=`<]=g<W<R<]=g=n=`=a=n<R<P<y=m<W<T=n<R<_<R<P<Y<Q=c<^=m<Y=i=a=n<R<U<X<\\<Z<Y<]=g<W<T<_<R<X=o<X<Y<Q=`=a=n<R=n<]=g<W<\\=m<Y<]=c<R<X<T<Q=m<Y<]<Y<Q<\\<X<R=m<\\<U=n=h<R=n<R<Q<Y<_<R=m<^<R<T=m<^<R<U<T<_=l=g=n<R<Z<Y<^=m<Y<P=m<^<R=b<W<T=d=`=a=n<T=i<S<R<V<\\<X<Q<Y<U<X<R<P<\\<P<T=l<\\<W<T<]<R=n<Y<P=o=i<R=n=c<X<^=o=i=m<Y=n<T<W=b<X<T<X<Y<W<R<P<T=l<Y=n<Y<]=c=m<^<R<Y<^<T<X<Y=k<Y<_<R=a=n<T<P=m=k<Y=n=n<Y<P=g=j<Y<Q=g=m=n<\\<W<^<Y<X=`=n<Y<P<Y<^<R<X=g=n<Y<]<Y<^=g=d<Y<Q<\\<P<T=n<T<S<\\=n<R<P=o<S=l<\\<^<W<T=j<\\<R<X<Q<\\<_<R<X=g<[<Q<\\=b<P<R<_=o<X=l=o<_<^=m<Y<U<T<X<Y=n<V<T<Q<R<R<X<Q<R<X<Y<W<\\<X<Y<W<Y=m=l<R<V<T=b<Q=c<^<Y=m=`<y=m=n=`=l<\\<[<\\<Q<\\=d<T4K5h5h5k4K5h4F5f4@5i5f4U4B4K4Y4E4K5h4\\5f4U5h5f5k4@4C5f4C4K5h4N5j4K5h4]4C4F4A5o5i4Y5m4A4E5o4K5j4F4K5h5h5f5f5o5d5j4X4D5o4E5m5f5k4K4D5j4K4F4A5d4K4M4O5o4G4]4B5h4K5h4K5h4A4D4C5h5f5h4C4]5d4_4K4Z4V4[4F5o5d5j5k5j4K5o4_4K4A4E5j4K4C5f4K5h4[4D4U5h5f5o4X5o4]4K5f5i5o5j5i5j5k4K4X4]5o4E4]4J5f4_5j4X5f4[5i4K4\\4K4K5h5m5j4X4D4K4D4F4U4D4]4]4A5i4E5o4K5m4E5f5n5d5h5i4]5o4^5o5h5i4E4O4A5i4C5n5h4D5f5f4U5j5f4Y5d4]4E4[4]5f5n4X4K4]5o4@5d4K5h4O4B4]5e5i4U5j4K4K4D4A4G4U4]5d4Z4D4X5o5h5i4_4@5h4D5j4K5j4B4K5h4C5o4F4K4D5o5h5f4E4D4C5d5j4O5f4Z4K5f5d4@4C5m4]5f5n5o4F4D4F4O5m4Z5h5i4[4D4B4K5o4G4]4D4K4]5o4K5m4Z5h4K4A5h5e5j5m4_5k4O5f4K5i4]4C5d4C4O5j5k4K4C5f5j4K4K5h4K5j5i4U4]4Z4F4U5h5i4C4K4B5h5i5i5o5j\x03\x03\x03\x03\x03\x03\x03\x03\x02\x03\x02\x03\x02\x03\x02\x03\x01\x03\x01\x03\x01\x03\x01\x03\x07\x03\x07\x03\x07\x03\x07\x03\x03\x02\x01\0\x07\x06\x05\x04\x04\x05\x06\x07\0\x01\x02\x03\x0B\n\t\b\x0F\x0E\r\f\f\r\x0E\x0F\b\t\n\x0B\x13\x12\x11\x10\x17\x16\x15\x14\x14\x15\x16\x17\x10\x11\x12\x13\x1B\x1A\x19\x18\x1F\x1E\x1D\x1C\x1C\x1D\x1E\x1F\x18\x19\x1A\x1B\x13\x13\x13\x13\x03\x03\x03\x03\x03\x03\x03\x03\x13\x13\x13\x13\x02\x03\x03\x03\x01\x03\x03\x03\x01\x03\x03\x03\x02\x03\x03\x03\x02\x03\x03\x03\0\x03\x03\x03\x13\x13\x03\x02\x03\x03\x03\x02\x03\x03\x13\x13\x03\x02\x03\x03\x03\x0B\x03\x0B\x03\x0B\x03\x0B\x03\x03\x03\x02\x03\x01\x03\0\x03\x07\x03\x06\x03\x05\x03\x04qfplvq`fp`lvmwqjfprvfpwjlmpfrvjsnfmw`lnnvmjwzbubjobaofkjdkojdkwGWG,{kwnonbqhfwjmdhmltofgdfplnfwkjmd`lmwbjmfqgjqf`wjlmpvap`qjafbgufqwjpf`kbqb`wfq!#ubovf>!?,pfof`w=Bvpwqbojb!#`obpp>!pjwvbwjlmbvwklqjwzelooltjmdsqjnbqjozlsfqbwjlm`kboofmdfgfufolsfgbmlmznlvpevm`wjlm#evm`wjlmp`lnsbmjfppwqv`wvqfbdqffnfmw!#wjwof>!slwfmwjbofgv`bwjlmbqdvnfmwppf`lmgbqz`lszqjdkwobmdvbdfpf{`ovpjuf`lmgjwjlm?,elqn=\x0E\tpwbwfnfmwbwwfmwjlmAjldqbskz~#fopf#x\tplovwjlmptkfm#wkf#Bmbozwj`pwfnsobwfpgbmdfqlvppbwfoojwfgl`vnfmwpsvaojpkfqjnslqwbmwsqlwlwzsfjmeovfm`f%qbrvl8?,feef`wjufdfmfqboozwqbmpelqnafbvwjevowqbmpslqwlqdbmjyfgsvaojpkfgsqlnjmfmwvmwjo#wkfwkvnambjoMbwjlmbo#-el`vp+*8lufq#wkf#njdqbwjlmbmmlvm`fgellwfq!=\tf{`fswjlmofpp#wkbmf{sfmpjufelqnbwjlmeqbnftlqhwfqqjwlqzmgj`bwjlm`vqqfmwoz`obppMbnf`qjwj`jpnwqbgjwjlmfopftkfqfBof{bmgfqbssljmwfgnbwfqjbopaqlbg`bpwnfmwjlmfgbeejojbwf?,lswjlm=wqfbwnfmwgjeefqfmw,gfebvow-Sqfpjgfmwlm`oj`h>!ajldqbskzlwkfqtjpfsfqnbmfmwEqbm/KbjpKlooztllgf{sbmpjlmpwbmgbqgp?,pwzof=\tqfgv`wjlmGf`fnafq#sqfefqqfg@bnaqjgdflsslmfmwpAvpjmfpp#`lmevpjlm=\t?wjwof=sqfpfmwfgf{sobjmfgglfp#mlw#tlqogtjgfjmwfqeb`fslpjwjlmpmftpsbsfq?,wbaof=\tnlvmwbjmpojhf#wkf#fppfmwjboejmbm`jbopfof`wjlmb`wjlm>!,babmglmfgFgv`bwjlmsbqpfJmw+pwbajojwzvmbaof#wl?,wjwof=\tqfobwjlmpMlwf#wkbwfeej`jfmwsfqelqnfgwtl#zfbqpPjm`f#wkfwkfqfelqftqbssfq!=bowfqmbwfjm`qfbpfgAbwwof#lesfq`fjufgwqzjmd#wlmf`fppbqzslqwqbzfgfof`wjlmpFojybafwk?,jeqbnf=gjp`lufqzjmpvqbm`fp-ofmdwk8ofdfmgbqzDfldqbskz`bmgjgbwf`lqslqbwfplnfwjnfppfquj`fp-jmkfqjwfg?,pwqlmd=@lnnvmjwzqfojdjlvpol`bwjlmp@lnnjwwffavjogjmdpwkf#tlqogml#olmdfqafdjmmjmdqfefqfm`f`bmmlw#afeqfrvfm`zwzsj`boozjmwl#wkf#qfobwjuf8qf`lqgjmdsqfpjgfmwjmjwjboozwf`kmjrvfwkf#lwkfqjw#`bm#aff{jpwfm`fvmgfqojmfwkjp#wjnfwfofsklmfjwfnp`lsfsqb`wj`fpbgubmwbdf*8qfwvqm#Elq#lwkfqsqlujgjmdgfnl`qb`zalwk#wkf#f{wfmpjufpveefqjmdpvsslqwfg`lnsvwfqp#evm`wjlmsqb`wj`bopbjg#wkbwjw#nbz#afFmdojpk?,eqln#wkf#p`kfgvofggltmolbgp?,obafo=\tpvpsf`wfgnbqdjm9#3psjqjwvbo?,kfbg=\t\tnj`qlplewdqbgvboozgjp`vppfgkf#af`bnff{f`vwjufirvfqz-ipklvpfklog`lmejqnfgsvq`kbpfgojwfqboozgfpwqlzfgvs#wl#wkfubqjbwjlmqfnbjmjmdjw#jp#mlw`fmwvqjfpIbsbmfpf#bnlmd#wkf`lnsofwfgbodlqjwknjmwfqfpwpqfafoojlmvmgfejmfgfm`lvqbdfqfpjybaofjmuloujmdpfmpjwjufvmjufqpbosqlujpjlm+bowklvdkefbwvqjmd`lmgv`wfg*/#tkj`k#`lmwjmvfg.kfbgfq!=Efaqvbqz#mvnfqlvp#lufqeolt9`lnslmfmweqbdnfmwpf{`foofmw`lopsbm>!wf`kmj`bomfbq#wkf#Bgubm`fg#plvq`f#lef{sqfppfgKlmd#Hlmd#Eb`fallhnvowjsof#nf`kbmjpnfofubwjlmleefmpjuf?,elqn=\t\npslmplqfggl`vnfmw-lq#%rvlw8wkfqf#bqfwklpf#tklnlufnfmwpsql`fppfpgjeej`vowpvanjwwfgqf`lnnfmg`lmujm`fgsqlnlwjmd!#tjgwk>!-qfsob`f+`obppj`bo`lbojwjlmkjp#ejqpwgf`jpjlmpbppjpwbmwjmgj`bwfgfulovwjlm.tqbssfq!fmlvdk#wlbolmd#wkfgfojufqfg..=\x0E\t?\"..Bnfqj`bm#sqlwf`wfgMlufnafq#?,pwzof=?evqmjwvqfJmwfqmfw##lmaovq>!pvpsfmgfgqf`jsjfmwabpfg#lm#Nlqflufq/balojpkfg`loof`wfgtfqf#nbgffnlwjlmbofnfqdfm`zmbqqbwjufbgul`bwfps{8alqgfq`lnnjwwfggjq>!owq!fnsolzffpqfpfbq`k-#pfof`wfgpv``fpplq`vpwlnfqpgjpsobzfgPfswfnafqbgg@obpp+Eb`fallh#pvddfpwfgbmg#obwfqlsfqbwjmdfobalqbwfPlnfwjnfpJmpwjwvwf`fqwbjmozjmpwboofgelooltfqpIfqvpbofnwkfz#kbuf`lnsvwjmddfmfqbwfgsqlujm`fpdvbqbmwffbqajwqbqzqf`ldmjyftbmwfg#wls{8tjgwk9wkflqz#leafkbujlvqTkjof#wkffpwjnbwfgafdbm#wl#jw#af`bnfnbdmjwvgfnvpw#kbufnlqf#wkbmGjqf`wlqzf{wfmpjlmpf`qfwbqzmbwvqboozl``vqqjmdubqjbaofpdjufm#wkfsobwelqn-?,obafo=?ebjofg#wl`lnslvmgphjmgp#le#pl`jfwjfpbolmdpjgf#..%dw8\t\tplvwktfpwwkf#qjdkwqbgjbwjlmnbz#kbuf#vmfp`bsf+pslhfm#jm!#kqfe>!,sqldqbnnflmoz#wkf#`lnf#eqlngjqf`wlqzavqjfg#jmb#pjnjobqwkfz#tfqf?,elmw=?,Mlqtfdjbmpsf`jejfgsqlgv`jmdsbppfmdfq+mft#Gbwfwfnslqbqzej`wjlmboBewfq#wkffrvbwjlmpgltmolbg-qfdvobqozgfufolsfqbaluf#wkfojmhfg#wlskfmlnfmbsfqjlg#lewllowjs!=pvapwbm`fbvwlnbwj`bpsf`w#leBnlmd#wkf`lmmf`wfgfpwjnbwfpBjq#Elq`fpzpwfn#lelaif`wjufjnnfgjbwfnbhjmd#jwsbjmwjmdp`lmrvfqfgbqf#pwjoosql`fgvqfdqltwk#lekfbgfg#azFvqlsfbm#gjujpjlmpnlof`vofpeqbm`kjpfjmwfmwjlmbwwqb`wfg`kjogkllgbopl#vpfggfgj`bwfgpjmdbslqfgfdqff#leebwkfq#le`lmeoj`wp?,b=?,s=\t`bnf#eqlntfqf#vpfgmlwf#wkbwqf`fjujmdF{f`vwjuffufm#nlqfb``fpp#wl`lnnbmgfqSlojwj`bonvpj`jbmpgfoj`jlvpsqjplmfqpbgufmw#leVWE.;!#,=?\"X@GBWBX!=@lmwb`wPlvwkfqm#ad`lolq>!pfqjfp#le-#Jw#tbp#jm#Fvqlsfsfqnjwwfgubojgbwf-bssfbqjmdleej`jboppfqjlvpoz.obmdvbdfjmjwjbwfgf{wfmgjmdolmd.wfqnjmeobwjlmpv`k#wkbwdfw@llhjfnbqhfg#az?,avwwlm=jnsofnfmwavw#jw#jpjm`qfbpfpgltm#wkf#qfrvjqjmdgfsfmgfmw..=\t?\"..#jmwfqujftTjwk#wkf#`lsjfp#le`lmpfmpvptbp#avjowUfmfyvfob+elqnfqozwkf#pwbwfsfqplmmfopwqbwfdj`ebulvq#lejmufmwjlmTjhjsfgjb`lmwjmfmwujqwvbooztkj`k#tbpsqjm`jsof@lnsofwf#jgfmwj`bopklt#wkbwsqjnjwjufbtbz#eqlnnlof`vobqsqf`jpfozgjpploufgVmgfq#wkfufqpjlm>!=%maps8?,Jw#jp#wkf#Wkjp#jp#tjoo#kbuflqdbmjpnpplnf#wjnfEqjfgqj`ktbp#ejqpwwkf#lmoz#eb`w#wkbwelqn#jg>!sqf`fgjmdWf`kmj`boskzpj`jpwl``vqp#jmmbujdbwlqpf`wjlm!=psbm#jg>!plvdkw#wlafolt#wkfpvqujujmd~?,pwzof=kjp#gfbwkbp#jm#wkf`bvpfg#azsbqwjboozf{jpwjmd#vpjmd#wkftbp#djufmb#ojpw#leofufop#lemlwjlm#leLeej`jbo#gjpnjppfgp`jfmwjpwqfpfnaofpgvsoj`bwff{solpjufqf`lufqfgboo#lwkfqdboofqjfpxsbggjmd9sflsof#leqfdjlm#lebggqfppfpbppl`jbwfjnd#bow>!jm#nlgfqmpklvog#afnfwklg#leqfslqwjmdwjnfpwbnsmffgfg#wlwkf#Dqfbwqfdbqgjmdpffnfg#wlujftfg#bpjnsb`w#lmjgfb#wkbwwkf#Tlqogkfjdkw#lef{sbmgjmdWkfpf#bqf`vqqfmw!=`bqfevooznbjmwbjmp`kbqdf#le@obppj`bobggqfppfgsqfgj`wfgltmfqpkjs?gju#jg>!qjdkw!=\x0E\tqfpjgfm`fofbuf#wkf`lmwfmw!=bqf#lewfm##~*+*8\x0E\tsqlabaoz#Sqlefpplq.avwwlm!#qfpslmgfgpbzp#wkbwkbg#wl#afsob`fg#jmKvmdbqjbmpwbwvp#lepfqufp#bpVmjufqpbof{f`vwjlmbddqfdbwfelq#tkj`kjmef`wjlmbdqffg#wlkltfufq/#slsvobq!=sob`fg#lm`lmpwqv`wfof`wlqbopznalo#lejm`ovgjmdqfwvqm#wlbq`kjwf`w@kqjpwjbmsqfujlvp#ojujmd#jmfbpjfq#wlsqlefpplq\t%ow8\"..#feef`w#lebmbozwj`ptbp#wbhfmtkfqf#wkfwllh#lufqafojfe#jmBeqjhbbmpbp#ebq#bpsqfufmwfgtlqh#tjwkb#psf`jbo?ejfogpfw@kqjpwnbpQfwqjfufg\t\tJm#wkf#ab`h#jmwlmlqwkfbpwnbdbyjmfp=?pwqlmd=`lnnjwwffdlufqmjmddqlvsp#lepwlqfg#jmfpwbaojpkb#dfmfqbojwp#ejqpwwkfjq#ltmslsvobwfgbm#laif`w@bqjaafbmboolt#wkfgjpwqj`wptjp`lmpjmol`bwjlm-8#tjgwk9#jmkbajwfgPl`jbojpwIbmvbqz#2?,ellwfq=pjnjobqoz`klj`f#lewkf#pbnf#psf`jej`#avpjmfpp#Wkf#ejqpw-ofmdwk8#gfpjqf#wlgfbo#tjwkpjm`f#wkfvpfqBdfmw`lm`fjufgjmgf{-sksbp#%rvlw8fmdbdf#jmqf`fmwoz/eft#zfbqptfqf#bopl\t?kfbg=\t?fgjwfg#azbqf#hmltm`jwjfp#jmb``fpphfz`lmgfnmfgbopl#kbufpfquj`fp/ebnjoz#leP`kllo#le`lmufqwfgmbwvqf#le#obmdvbdfnjmjpwfqp?,laif`w=wkfqf#jp#b#slsvobqpfrvfm`fpbgul`bwfgWkfz#tfqfbmz#lwkfqol`bwjlm>fmwfq#wkfnv`k#nlqfqfeof`wfgtbp#mbnfglqjdjmbo#b#wzsj`botkfm#wkfzfmdjmffqp`lvog#mlwqfpjgfmwptfgmfpgbzwkf#wkjqg#sqlgv`wpIbmvbqz#1tkbw#wkfzb#`fqwbjmqfb`wjlmpsql`fpplqbewfq#kjpwkf#obpw#`lmwbjmfg!=?,gju=\t?,b=?,wg=gfsfmg#lmpfbq`k!=\tsjf`fp#le`lnsfwjmdQfefqfm`fwfmmfppfftkj`k#kbp#ufqpjlm>?,psbm=#??,kfbgfq=djufp#wkfkjpwlqjbmubovf>!!=sbggjmd93ujft#wkbwwldfwkfq/wkf#nlpw#tbp#elvmgpvapfw#lebwwb`h#lm`kjogqfm/sljmwp#lesfqplmbo#slpjwjlm9boofdfgoz@ofufobmgtbp#obwfqbmg#bewfqbqf#djufmtbp#pwjoop`qloojmdgfpjdm#lenbhfp#wkfnv`k#ofppBnfqj`bmp-\t\tBewfq#/#avw#wkfNvpfvn#leolvjpjbmb+eqln#wkfnjmmfplwbsbqwj`ofpb#sql`fppGlnjmj`bmulovnf#leqfwvqmjmdgfefmpjuf33s{\x7Fqjdknbgf#eqlnnlvpflufq!#pwzof>!pwbwfp#le+tkj`k#jp`lmwjmvfpEqbm`jp`lavjogjmd#tjwklvw#btjwk#plnftkl#tlvogb#elqn#leb#sbqw#leafelqf#jwhmltm#bp##Pfquj`fpol`bwjlm#bmg#lewfmnfbpvqjmdbmg#jw#jpsbsfqab`hubovfp#le\x0E\t?wjwof=>#tjmglt-gfwfqnjmffq%rvlw8#sobzfg#azbmg#fbqoz?,`fmwfq=eqln#wkjpwkf#wkqffsltfq#bmgle#%rvlw8jmmfqKWNO?b#kqfe>!z9jmojmf8@kvq`k#lewkf#fufmwufqz#kjdkleej`jbo#.kfjdkw9#`lmwfmw>!,`dj.ajm,wl#`qfbwfbeqjhbbmpfpsfqbmwleqbm/Kbjpobwujf)Mvojfwvuj)_(`f)Mwjmb(af)Mwjmb\fUh\fT{\fTN\n{I\np@\x04Fr\x0BBl\bQ\x7F\tA{\x0BUm\x05Gx\tA{\x01yp\x06YA\0zX\bTV\bWl\bUd\x04BM\x0BB{\npV\x0B@x\x04B\\\np@\x04Db\x04Gz\tal\npa\tfM\tuD\bV~\x04mx\x0BQ}\ndS\tp\\\bVK\bS]\bU|\x05oD\tkV\x0Bed\x0BHR\nb~\x04M`\nJp\x05oD\x04|Q\nLP\x04Sw\bTl\nAI\nxC\bWt\tBq\x05F`\x04Cm\x0BLm\tKx\t}t\bPv\ny\\\naB\tV\x7F\nZd\x04XU\x04li\tfr\ti@\tBH\x04BD\x04BV\t`V\n[]\tp_\tTn\n~A\nxR\tuD\t`{\bV@\tTn\tHK\tAJ\x0Bxs\x04Zf\nqI\x04Zf\x0BBM\x0B|j\t}t\bSM\nmC\x0BQ}pfquj`jlpbqw/A`volbqdfmwjmbabq`folmb`vborvjfqsvaoj`bglsqlgv`wlpslo/Awj`bqfpsvfpwbtjhjsfgjbpjdvjfmwfa/Vprvfgb`lnvmjgbgpfdvqjgbgsqjm`jsbosqfdvmwbp`lmwfmjglqfpslmgfqufmfyvfobsqlaofnbpgj`jfnaqfqfob`j/_mmlujfnaqfpjnjobqfpsqlzf`wlpsqldqbnbpjmpwjwvwlb`wjujgbgfm`vfmwqbf`lmln/Abjn/Mdfmfp`lmwb`wbqgfp`bqdbqmf`fpbqjlbwfm`j/_mwfo/Eelml`lnjpj/_m`bm`jlmfp`bsb`jgbgfm`lmwqbqbm/Mojpjpebulqjwlpw/Eqnjmlpsqlujm`jbfwjrvfwbpfofnfmwlpevm`jlmfpqfpvowbgl`bq/M`wfqsqlsjfgbgsqjm`jsjlmf`fpjgbgnvmj`jsbo`qfb`j/_mgfp`bqdbpsqfpfm`jb`lnfq`jbolsjmjlmfpfifq`j`jlfgjwlqjbopbobnbm`bdlmy/Mofygl`vnfmwlsfo/A`vobqf`jfmwfpdfmfqbofpwbqqbdlmbsq/M`wj`bmlufgbgfpsqlsvfpwbsb`jfmwfpw/E`mj`bplaifwjulp`lmwb`wlp\fHB\fIk\fHn\fH^\fHS\fHc\fHU\fId\fHn\fH{\fHC\fHR\fHT\fHR\fHI\fHc\fHY\fHn\fH\\\fHU\fIk\fHy\fIg\fHd\fHy\fIm\fHw\fH\\\fHU\fHR\fH@\fHR\fHJ\fHy\fHU\fHR\fHT\fHA\fIl\fHU\fIm\fHc\fH\\\fHU\fIl\fHB\fId\fHn\fHJ\fHS\fHD\fH@\fHR\fHHgjsolgl`p\fHT\fHB\fHC\fH\\\fIn\fHF\fHD\fHR\fHB\fHF\fHH\fHR\fHG\fHS\fH\\\fHx\fHT\fHH\fHH\fH\\\fHU\fH^\fIg\fH{\fHU\fIm\fHj\fH@\fHR\fH\\\fHJ\fIk\fHZ\fHU\fIm\fHd\fHz\fIk\fH^\fHC\fHJ\fHS\fHy\fHR\fHB\fHY\fIk\fH@\fHH\fIl\fHD\fH@\fIl\fHv\fHB\fI`\fHH\fHT\fHR\fH^\fH^\fIk\fHz\fHp\fIe\fH@\fHB\fHJ\fHJ\fHH\fHI\fHR\fHD\fHU\fIl\fHZ\fHU\fH\\\fHi\fH^\fH{\fHy\fHA\fIl\fHD\fH{\fH\\\fHF\fHR\fHT\fH\\\fHR\fHH\fHy\fHS\fHc\fHe\fHT\fIk\fH{\fHC\fIl\fHU\fIn\fHm\fHj\fH{\fIk\fHs\fIl\fHB\fHz\fIg\fHp\fHy\fHR\fH\\\fHi\fHA\fIl\fH{\fHC\fIk\fHH\fIm\fHB\fHY\fIg\fHs\fHJ\fIk\fHn\fHi\fH{\fH\\\fH|\fHT\fIk\fHB\fIk\fH^\fH^\fH{\fHR\fHU\fHR\fH^\fHf\fHF\fH\\\fHv\fHR\fH\\\fH|\fHT\fHR\fHJ\fIk\fH\\\fHp\fHS\fHT\fHJ\fHS\fH^\fH@\fHn\fHJ\fH@\fHD\fHR\fHU\fIn\fHn\fH^\fHR\fHz\fHp\fIl\fHH\fH@\fHs\fHD\fHB\fHS\fH^\fHk\fHT\fIk\fHj\fHD\fIk\fHD\fHC\fHR\fHy\fIm\fH^\fH^\fIe\fH{\fHA\fHR\fH{\fH\\\fIk\fH^\fHp\fH{\fHU\fH\\\fHR\fHB\fH^\fH{\fIk\fHF\fIk\fHp\fHU\fHR\fHI\fHk\fHT\fIl\fHT\fHU\fIl\fHy\fH^\fHR\fHL\fIl\fHy\fHU\fHR\fHm\fHJ\fIn\fH\\\fHH\fHU\fHH\fHT\fHR\fHH\fHC\fHR\fHJ\fHj\fHC\fHR\fHF\fHR\fHy\fHy\fI`\fHD\fHZ\fHR\fHB\fHJ\fIk\fHz\fHC\fHU\fIl\fH\\\fHR\fHC\fHz\fIm\fHJ\fH^\fH{\fIl`bwfdlqjfpf{sfqjfm`f?,wjwof=\x0E\t@lszqjdkw#ibubp`qjsw`lmgjwjlmpfufqzwkjmd?s#`obpp>!wf`kmloldzab`hdqlvmg?b#`obpp>!nbmbdfnfmw%`lsz8#132ibubP`qjsw`kbqb`wfqpaqfbg`qvnawkfnpfoufpklqjylmwbodlufqmnfmw@bojelqmjbb`wjujwjfpgjp`lufqfgMbujdbwjlmwqbmpjwjlm`lmmf`wjlmmbujdbwjlmbssfbqbm`f?,wjwof=?n`kf`hal{!#wf`kmjrvfpsqlwf`wjlmbssbqfmwozbp#tfoo#bpvmw$/#$VB.qfplovwjlmlsfqbwjlmpwfofujpjlmwqbmpobwfgTbpkjmdwlmmbujdbwlq-#>#tjmglt-jnsqfppjlm%ow8aq%dw8ojwfqbwvqfslsvobwjlmad`lolq>! fpsf`jbooz#`lmwfmw>!sqlgv`wjlmmftpofwwfqsqlsfqwjfpgfejmjwjlmofbgfqpkjsWf`kmloldzSbqojbnfmw`lnsbqjplmvo#`obpp>!-jmgf{Le+!`lm`ovpjlmgjp`vppjlm`lnslmfmwpajloldj`boQfulovwjlm\\`lmwbjmfqvmgfqpwllgmlp`qjsw=?sfqnjppjlmfb`k#lwkfqbwnlpskfqf#lmel`vp>!?elqn#jg>!sql`fppjmdwkjp-ubovfdfmfqbwjlm@lmefqfm`fpvapfrvfmwtfoo.hmltmubqjbwjlmpqfsvwbwjlmskfmlnfmlmgjp`jsojmfoldl-smd!#+gl`vnfmw/alvmgbqjfpf{sqfppjlmpfwwofnfmwAb`hdqlvmglvw#le#wkffmwfqsqjpf+!kwwsp9!#vmfp`bsf+!sbpptlqg!#gfnl`qbwj`?b#kqfe>!,tqbssfq!=\tnfnafqpkjsojmdvjpwj`s{8sbggjmdskjolplskzbppjpwbm`fvmjufqpjwzeb`jojwjfpqf`ldmjyfgsqfefqfm`fje#+wzsflenbjmwbjmfgul`bavobqzkzslwkfpjp-pvanjw+*8%bns8maps8bmmlwbwjlmafkjmg#wkfElvmgbwjlmsvaojpkfq!bppvnswjlmjmwqlgv`fg`lqqvswjlmp`jfmwjpwpf{soj`jwozjmpwfbg#legjnfmpjlmp#lm@oj`h>!`lmpjgfqfggfsbqwnfmwl``vsbwjlmpllm#bewfqjmufpwnfmwsqlmlvm`fgjgfmwjejfgf{sfqjnfmwNbmbdfnfmwdfldqbskj`!#kfjdkw>!ojmh#qfo>!-qfsob`f+,gfsqfppjlm`lmefqfm`fsvmjpknfmwfojnjmbwfgqfpjpwbm`fbgbswbwjlmlsslpjwjlmtfoo#hmltmpvssofnfmwgfwfqnjmfgk2#`obpp>!3s{8nbqdjmnf`kbmj`bopwbwjpwj`p`fofaqbwfgDlufqmnfmw\t\tGvqjmd#wgfufolsfqpbqwjej`jbofrvjubofmwlqjdjmbwfg@lnnjppjlmbwwb`knfmw?psbm#jg>!wkfqf#tfqfMfgfqobmgpafzlmg#wkfqfdjpwfqfgilvqmbojpweqfrvfmwozboo#le#wkfobmd>!fm!#?,pwzof=\x0E\tbaplovwf8#pvsslqwjmdf{wqfnfoz#nbjmpwqfbn?,pwqlmd=#slsvobqjwzfnsolznfmw?,wbaof=\x0E\t#`lopsbm>!?,elqn=\t##`lmufqpjlmbalvw#wkf#?,s=?,gju=jmwfdqbwfg!#obmd>!fmSlqwvdvfpfpvapwjwvwfjmgjujgvbojnslppjaofnvowjnfgjbbonlpw#boos{#plojg# bsbqw#eqlnpvaif`w#wljm#Fmdojpk`qjwj`jyfgf{`fsw#elqdvjgfojmfplqjdjmboozqfnbqhbaofwkf#pf`lmgk1#`obpp>!?b#wjwof>!+jm`ovgjmdsbqbnfwfqpsqlkjajwfg>#!kwws9,,gj`wjlmbqzsfq`fswjlmqfulovwjlmelvmgbwjlms{8kfjdkw9pv``fppevopvsslqwfqpnjoofmmjvnkjp#ebwkfqwkf#%rvlw8ml.qfsfbw8`lnnfq`jbojmgvpwqjbofm`lvqbdfgbnlvmw#le#vmleej`jbofeej`jfm`zQfefqfm`fp`llqgjmbwfgjp`objnfqf{sfgjwjlmgfufolsjmd`bo`vobwfgpjnsojejfgofdjwjnbwfpvapwqjmd+3!#`obpp>!`lnsofwfozjoovpwqbwfejuf#zfbqpjmpwqvnfmwSvaojpkjmd2!#`obpp>!spz`kloldz`lmejgfm`fmvnafq#le#bapfm`f#leel`vpfg#lmiljmfg#wkfpwqv`wvqfpsqfujlvpoz=?,jeqbnf=lm`f#bdbjmavw#qbwkfqjnnjdqbmwple#`lvqpf/b#dqlvs#leOjwfqbwvqfVmojhf#wkf?,b=%maps8\tevm`wjlm#jw#tbp#wkf@lmufmwjlmbvwlnlajofSqlwfpwbmwbddqfppjufbewfq#wkf#Pjnjobqoz/!#,=?,gju=`loof`wjlm\x0E\tevm`wjlmujpjajojwzwkf#vpf#leulovmwffqpbwwqb`wjlmvmgfq#wkf#wkqfbwfmfg)?\"X@GBWBXjnslqwbm`fjm#dfmfqbowkf#obwwfq?,elqn=\t?,-jmgf{Le+$j#>#38#j#?gjeefqfm`fgfulwfg#wlwqbgjwjlmppfbq`k#elqvowjnbwfozwlvqmbnfmwbwwqjavwfppl.`boofg#~\t?,pwzof=fubovbwjlmfnskbpjyfgb``fppjaof?,pf`wjlm=pv``fppjlmbolmd#tjwkNfbmtkjof/jmgvpwqjfp?,b=?aq#,=kbp#af`lnfbpsf`wp#leWfofujpjlmpveej`jfmwabphfwabooalwk#pjgfp`lmwjmvjmdbm#bqwj`of?jnd#bow>!bgufmwvqfpkjp#nlwkfqnbm`kfpwfqsqjm`jsofpsbqwj`vobq`lnnfmwbqzfeef`wp#legf`jgfg#wl!=?pwqlmd=svaojpkfqpIlvqmbo#legjeej`vowzeb`jojwbwfb``fswbaofpwzof-`pp!\nevm`wjlm#jmmlubwjlm=@lszqjdkwpjwvbwjlmptlvog#kbufavpjmfppfpGj`wjlmbqzpwbwfnfmwplewfm#vpfgsfqpjpwfmwjm#Ibmvbqz`lnsqjpjmd?,wjwof=\t\ngjsolnbwj``lmwbjmjmdsfqelqnjmdf{wfmpjlmpnbz#mlw#af`lm`fsw#le#lm`oj`h>!Jw#jp#boplejmbm`jbo#nbhjmd#wkfOv{fnalvqdbggjwjlmbobqf#`boofgfmdbdfg#jm!p`qjsw!*8avw#jw#tbpfof`wqlmj`lmpvanjw>!\t?\"..#Fmg#fof`wqj`boleej`jboozpvddfpwjlmwls#le#wkfvmojhf#wkfBvpwqbojbmLqjdjmboozqfefqfm`fp\t?,kfbg=\x0E\tqf`ldmjpfgjmjwjbojyfojnjwfg#wlBof{bmgqjbqfwjqfnfmwBgufmwvqfpelvq#zfbqp\t\t%ow8\"..#jm`qfbpjmdgf`lqbwjlmk0#`obpp>!lqjdjmp#lelaojdbwjlmqfdvobwjlm`obppjejfg+evm`wjlm+bgubmwbdfpafjmd#wkf#kjpwlqjbmp?abpf#kqfeqfsfbwfgoztjoojmd#wl`lnsbqbaofgfpjdmbwfgmlnjmbwjlmevm`wjlmbojmpjgf#wkfqfufobwjlmfmg#le#wkfp#elq#wkf#bvwklqjyfgqfevpfg#wlwbhf#sob`fbvwlmlnlvp`lnsqlnjpfslojwj`bo#qfpwbvqbmwwtl#le#wkfEfaqvbqz#1rvbojwz#leptelaif`w-vmgfqpwbmgmfbqoz#bootqjwwfm#azjmwfqujftp!#tjgwk>!2tjwkgqbtboeolbw9ofewjp#vpvbooz`bmgjgbwfpmftpsbsfqpnzpwfqjlvpGfsbqwnfmwafpw#hmltmsbqojbnfmwpvssqfppfg`lmufmjfmwqfnfnafqfggjeefqfmw#pzpwfnbwj`kbp#ofg#wlsqlsbdbmgb`lmwqloofgjmeovfm`fp`fqfnlmjbosql`objnfgSqlwf`wjlmoj#`obpp>!P`jfmwjej``obpp>!ml.wqbgfnbqhpnlqf#wkbm#tjgfpsqfbgOjafqbwjlmwllh#sob`fgbz#le#wkfbp#olmd#bpjnsqjplmfgBggjwjlmbo\t?kfbg=\t?nObalqbwlqzMlufnafq#1f{`fswjlmpJmgvpwqjboubqjfwz#leeolbw9#ofeGvqjmd#wkfbppfppnfmwkbuf#affm#gfbop#tjwkPwbwjpwj`pl``vqqfm`f,vo=?,gju=`ofbqej{!=wkf#svaoj`nbmz#zfbqptkj`k#tfqflufq#wjnf/pzmlmznlvp`lmwfmw!=\tsqfpvnbaozkjp#ebnjozvpfqBdfmw-vmf{sf`wfgjm`ovgjmd#`kboofmdfgb#njmlqjwzvmgfejmfg!afolmdp#wlwbhfm#eqlnjm#L`wlafqslpjwjlm9#pbjg#wl#afqfojdjlvp#Efgfqbwjlm#qltpsbm>!lmoz#b#eftnfbmw#wkbwofg#wl#wkf..=\x0E\t?gju#?ejfogpfw=Bq`kajpkls#`obpp>!mlafjmd#vpfgbssqlb`kfpsqjujofdfpmlp`qjsw=\tqfpvowp#jmnbz#af#wkfFbpwfq#fddnf`kbmjpnpqfbplmbaofSlsvobwjlm@loof`wjlmpfof`wfg!=mlp`qjsw=\x0E,jmgf{-sksbqqjubo#le.ippgh$**8nbmbdfg#wljm`lnsofwf`bpvbowjfp`lnsofwjlm@kqjpwjbmpPfswfnafq#bqjwknfwj`sql`fgvqfpnjdkw#kbufSqlgv`wjlmjw#bssfbqpSkjolplskzeqjfmgpkjsofbgjmd#wldjujmd#wkfwltbqg#wkfdvbqbmwffggl`vnfmwfg`lolq9 333ujgfl#dbnf`lnnjppjlmqfeof`wjmd`kbmdf#wkfbppl`jbwfgpbmp.pfqjelmhfzsqfpp8#sbggjmd9Kf#tbp#wkfvmgfqozjmdwzsj`booz#/#bmg#wkf#pq`Fofnfmwpv``fppjufpjm`f#wkf#pklvog#af#mfwtlqhjmdb``lvmwjmdvpf#le#wkfoltfq#wkbmpkltp#wkbw?,psbm=\t\n\n`lnsobjmwp`lmwjmvlvprvbmwjwjfpbpwqlmlnfqkf#gjg#mlwgvf#wl#jwpbssojfg#wlbm#bufqbdffeelqwp#wlwkf#evwvqfbwwfnsw#wlWkfqfelqf/`bsbajojwzQfsvaoj`bmtbp#elqnfgFof`wqlmj`hjolnfwfqp`kboofmdfpsvaojpkjmdwkf#elqnfqjmgjdfmlvpgjqf`wjlmppvapjgjbqz`lmpsjqb`zgfwbjop#lebmg#jm#wkfbeelqgbaofpvapwbm`fpqfbplm#elq`lmufmwjlmjwfnwzsf>!baplovwfozpvsslpfgozqfnbjmfg#bbwwqb`wjufwqbufoojmdpfsbqbwfozel`vpfp#lmfofnfmwbqzbssoj`baofelvmg#wkbwpwzofpkffwnbmvp`qjswpwbmgp#elq#ml.qfsfbw+plnfwjnfp@lnnfq`jbojm#Bnfqj`bvmgfqwbhfmrvbqwfq#lebm#f{bnsofsfqplmboozjmgf{-sks<?,avwwlm=\tsfq`fmwbdfafpw.hmltm`qfbwjmd#b!#gjq>!owqOjfvwfmbmw\t?gju#jg>!wkfz#tlvogbajojwz#lenbgf#vs#lemlwfg#wkbw`ofbq#wkbwbqdvf#wkbwwl#bmlwkfq`kjogqfm$psvqslpf#leelqnvobwfgabpfg#vslmwkf#qfdjlmpvaif`w#lesbppfmdfqpslppfppjlm-\t\tJm#wkf#Afelqf#wkfbewfqtbqgp`vqqfmwoz#b`qlpp#wkfp`jfmwjej``lnnvmjwz-`bsjwbojpnjm#Dfqnbmzqjdkw.tjmdwkf#pzpwfnPl`jfwz#leslojwj`jbmgjqf`wjlm9tfmw#lm#wlqfnlubo#le#Mft#Zlqh#bsbqwnfmwpjmgj`bwjlmgvqjmd#wkfvmofpp#wkfkjpwlqj`bokbg#affm#bgfejmjwjufjmdqfgjfmwbwwfmgbm`f@fmwfq#elqsqlnjmfm`fqfbgzPwbwfpwqbwfdjfpavw#jm#wkfbp#sbqw#le`lmpwjwvwf`objn#wkbwobalqbwlqz`lnsbwjaofebjovqf#le/#pv`k#bp#afdbm#tjwkvpjmd#wkf#wl#sqlujgfefbwvqf#leeqln#tkj`k,!#`obpp>!dfloldj`bopfufqbo#legfojafqbwfjnslqwbmw#klogp#wkbwjmd%rvlw8#ubojdm>wlswkf#Dfqnbmlvwpjgf#lemfdlwjbwfgkjp#`bqffqpfsbqbwjlmjg>!pfbq`ktbp#`boofgwkf#elvqwkqf`qfbwjlmlwkfq#wkbmsqfufmwjlmtkjof#wkf#fgv`bwjlm/`lmmf`wjmdb``vqbwfoztfqf#avjowtbp#hjoofgbdqffnfmwpnv`k#nlqf#Gvf#wl#wkftjgwk9#233plnf#lwkfqHjmdgln#lewkf#fmwjqfebnlvp#elqwl#`lmmf`wlaif`wjufpwkf#Eqfm`ksflsof#bmgefbwvqfg!=jp#pbjg#wlpwqv`wvqboqfefqfmgvnnlpw#lewfmb#pfsbqbwf.=\t?gju#jg#Leej`jbo#tlqogtjgf-bqjb.obafowkf#sobmfwbmg#jw#tbpg!#ubovf>!ollhjmd#bwafmfej`jbobqf#jm#wkfnlmjwlqjmdqfslqwfgozwkf#nlgfqmtlqhjmd#lmbooltfg#wltkfqf#wkf#jmmlubwjuf?,b=?,gju=plvmgwqb`hpfbq`kElqnwfmg#wl#afjmsvw#jg>!lsfmjmd#leqfpwqj`wfgbglswfg#azbggqfppjmdwkfloldjbmnfwklgp#leubqjbmw#le@kqjpwjbm#ufqz#obqdfbvwlnlwjufaz#ebq#wkfqbmdf#eqlnsvqpvjw#leeloolt#wkfaqlvdkw#wljm#Fmdobmgbdqff#wkbwb``vpfg#le`lnfp#eqlnsqfufmwjmdgju#pwzof>kjp#lq#kfqwqfnfmglvpeqffgln#le`lm`fqmjmd3#2fn#2fn8Abphfwaboo,pwzof-`ppbm#fbqojfqfufm#bewfq,!#wjwof>!-`ln,jmgf{wbhjmd#wkfsjwwpavqdk`lmwfmw!=\x0E?p`qjsw=+ewvqmfg#lvwkbujmd#wkf?,psbm=\x0E\t#l``bpjlmboaf`bvpf#jwpwbqwfg#wlskzpj`booz=?,gju=\t##`qfbwfg#az@vqqfmwoz/#ad`lolq>!wbajmgf{>!gjpbpwqlvpBmbozwj`p#bopl#kbp#b=?gju#jg>!?,pwzof=\t?`boofg#elqpjmdfq#bmg-pq`#>#!,,ujlobwjlmpwkjp#sljmw`lmpwbmwozjp#ol`bwfgqf`lqgjmdpg#eqln#wkfmfgfqobmgpslqwvdv/Fp;N;};D;u;F5m4K4]4_7`gfpbqqlool`lnfmwbqjlfgv`b`j/_mpfswjfnaqfqfdjpwqbglgjqf``j/_mvaj`b`j/_msvaoj`jgbgqfpsvfpwbpqfpvowbglpjnslqwbmwfqfpfqubglpbqw/A`volpgjefqfmwfppjdvjfmwfpqfs/Vaoj`bpjwvb`j/_mnjmjpwfqjlsqjub`jgbggjqf`wlqjlelqnb`j/_mslaob`j/_msqfpjgfmwf`lmw", "fmjglpb``fplqjlpwf`kmlqbwjsfqplmbofp`bwfdlq/Abfpsf`jbofpgjpslmjaofb`wvbojgbgqfefqfm`jbuboobglojgajaojlwf`bqfob`jlmfp`bofmgbqjlslo/Awj`bpbmwfqjlqfpgl`vnfmwlpmbwvqbofybnbwfqjbofpgjefqfm`jbf`lm/_nj`bwqbmpslqwfqlgq/Advfysbqwj`jsbqfm`vfmwqbmgjp`vpj/_mfpwqv`wvqbevmgb`j/_meqf`vfmwfpsfqnbmfmwfwlwbonfmwf<P<R<Z<Q<R<]=o<X<Y=n<P<R<Z<Y=n<^=l<Y<P=c=n<\\<V<Z<Y=k=n<R<]=g<]<R<W<Y<Y<R=k<Y<Q=`=a=n<R<_<R<V<R<_<X<\\<S<R=m<W<Y<^=m<Y<_<R=m<\\<U=n<Y=k<Y=l<Y<[<P<R<_=o=n=m<\\<U=n<\\<Z<T<[<Q<T<P<Y<Z<X=o<]=o<X=o=n<s<R<T=m<V<[<X<Y=m=`<^<T<X<Y<R=m<^=c<[<T<Q=o<Z<Q<R=m<^<R<Y<U<W=b<X<Y<U<S<R=l<Q<R<P<Q<R<_<R<X<Y=n<Y<U=m<^<R<T=i<S=l<\\<^<\\=n<\\<V<R<U<P<Y=m=n<R<T<P<Y<Y=n<Z<T<[<Q=`<R<X<Q<R<U<W=o=k=d<Y<S<Y=l<Y<X=k<\\=m=n<T=k<\\=m=n=`=l<\\<]<R=n<Q<R<^=g=i<S=l<\\<^<R=m<R<]<R<U<S<R=n<R<P<P<Y<Q<Y<Y=k<T=m<W<Y<Q<R<^=g<Y=o=m<W=o<_<R<V<R<W<R<Q<\\<[<\\<X=n<\\<V<R<Y=n<R<_<X<\\<S<R=k=n<T<s<R=m<W<Y=n<\\<V<T<Y<Q<R<^=g<U=m=n<R<T=n=n<\\<V<T=i=m=l<\\<[=o<M<\\<Q<V=n=h<R=l=o<P<v<R<_<X<\\<V<Q<T<_<T=m<W<R<^<\\<Q<\\=d<Y<U<Q<\\<U=n<T=m<^<R<T<P=m<^=c<[=`<W=b<]<R<U=k<\\=m=n<R=m=l<Y<X<T<v=l<R<P<Y<H<R=l=o<P=l=g<Q<V<Y=m=n<\\<W<T<S<R<T=m<V=n=g=m=c=k<P<Y=m=c=j=j<Y<Q=n=l=n=l=o<X<\\=m<\\<P=g=i=l=g<Q<V<\\<q<R<^=g<U=k<\\=m<R<^<P<Y=m=n<\\=h<T<W=`<P<P<\\=l=n<\\=m=n=l<\\<Q<P<Y=m=n<Y=n<Y<V=m=n<Q<\\=d<T=i<P<T<Q=o=n<T<P<Y<Q<T<T<P<Y=b=n<Q<R<P<Y=l<_<R=l<R<X=m<\\<P<R<P=a=n<R<P=o<V<R<Q=j<Y=m<^<R<Y<P<V<\\<V<R<U<|=l=i<T<^5i5j4F4C5e4I4]4_4K5h4]4_4K5h4E4K5h4U4K5i5o4F4D5k4K4D4]4K5i4@4K5h5f5d5i4K5h4Y5d4]4@4C5f4C4E4K5h4U4Z5d4I4Z4K5m4E4K5h5n4_5i4K5h4U4K4D4F4A5i5f5h5i5h5m4K4F5i5h4F5n5e4F4U4C5f5h4K5h4X4U4]4O4B4D4K4]4F4[5d5f4]4U5h5f5o5i4I4]5m4K5n4[5h4D4K4F4K5h5h4V4E4F4]4F5f4D4K5h5j4K4_4K5h4X5f4B5i5j4F4C5f4K5h4U4]4D4K5h5n4Y4Y4K5m5h4K5i4U5h5f5k4K4F4A4C5f4G4K5h5h5k5i4K5h4U5i5h5i5o4F4D4E5f5i5o5j5o4K5h4[5m5h5m5f4C5f5d4I4C4K4]4E4F4K4]5f4B4K5h4Y4A4E4F4_4@5f5h4K5h5d5n4F4U5j4C5i4K5i4C5f5j4E4F4Y5i5f5i4O4]4X5f5m4K5h4\\5f5j4U4]4D5f4E4D5d4K4D4E4O5h4U4K4D4K5h4_5m4]5i4X4K5o5h4F4U4K5h5e4K5h4O5d5h4K5h4_5j4E4@4K5i4U4E4K5h4Y4A5m4K5h4C5f5j5o5h5i4K4F4K5h4B4K4Y4K5h5i5h5m4O4U4Z4K4M5o4F4K4D4E4K5h4B5f4]4]4_4K4J5h4K5h5n5h4D4K5h4O4C4D5i5n4K4[4U5i4]4K4_5h5i5j4[5n4E4K5h5o4F4D4K5h4]4@5h4K4X4F4]5o4K5h5n4C5i5f4U4[5f5opAzWbdMbnf+-isd!#bow>!2s{#plojg# -dje!#bow>!wqbmpsbqfmwjmelqnbwjlmbssoj`bwjlm!#lm`oj`h>!fpwbaojpkfgbgufqwjpjmd-smd!#bow>!fmujqlmnfmwsfqelqnbm`fbssqlsqjbwf%bns8ngbpk8jnnfgjbwfoz?,pwqlmd=?,qbwkfq#wkbmwfnsfqbwvqfgfufolsnfmw`lnsfwjwjlmsob`fklogfqujpjajojwz9`lszqjdkw!=3!#kfjdkw>!fufm#wklvdkqfsob`fnfmwgfpwjmbwjlm@lqslqbwjlm?vo#`obpp>!Bppl`jbwjlmjmgjujgvbopsfqpsf`wjufpfwWjnflvw+vqo+kwws9,,nbwkfnbwj`pnbqdjm.wls9fufmwvbooz#gfp`qjswjlm*#ml.qfsfbw`loof`wjlmp-ISD\x7Fwkvna\x7Fsbqwj`jsbwf,kfbg=?algzeolbw9ofew8?oj#`obpp>!kvmgqfgp#le\t\tKltfufq/#`lnslpjwjlm`ofbq9alwk8`llsfqbwjlmtjwkjm#wkf#obafo#elq>!alqgfq.wls9Mft#Yfbobmgqf`lnnfmgfgsklwldqbskzjmwfqfpwjmd%ow8pvs%dw8`lmwqlufqpzMfwkfqobmgpbowfqmbwjufnb{ofmdwk>!ptjwyfqobmgGfufolsnfmwfppfmwjbooz\t\tBowklvdk#?,wf{wbqfb=wkvmgfqajqgqfsqfpfmwfg%bns8mgbpk8psf`vobwjlm`lnnvmjwjfpofdjpobwjlmfof`wqlmj`p\t\n?gju#jg>!joovpwqbwfgfmdjmffqjmdwfqqjwlqjfpbvwklqjwjfpgjpwqjavwfg5!#kfjdkw>!pbmp.pfqje8`bsbaof#le#gjpbssfbqfgjmwfqb`wjufollhjmd#elqjw#tlvog#afBedkbmjpwbmtbp#`qfbwfgNbwk-eollq+pvqqlvmgjmd`bm#bopl#aflapfqubwjlmnbjmwfmbm`ffm`lvmwfqfg?k1#`obpp>!nlqf#qf`fmwjw#kbp#affmjmubpjlm#le*-dfwWjnf+*evmgbnfmwboGfpsjwf#wkf!=?gju#jg>!jmpsjqbwjlmf{bnjmbwjlmsqfsbqbwjlmf{sobmbwjlm?jmsvw#jg>!?,b=?,psbm=ufqpjlmp#lejmpwqvnfmwpafelqf#wkf##>#$kwws9,,Gfp`qjswjlmqfobwjufoz#-pvapwqjmd+fb`k#le#wkff{sfqjnfmwpjmeovfmwjbojmwfdqbwjlmnbmz#sflsofgvf#wl#wkf#`lnajmbwjlmgl#mlw#kbufNjggof#Fbpw?mlp`qjsw=?`lszqjdkw!#sfqkbsp#wkfjmpwjwvwjlmjm#Gf`fnafqbqqbmdfnfmwnlpw#ebnlvpsfqplmbojwz`qfbwjlm#leojnjwbwjlmpf{`ovpjufozplufqfjdmwz.`lmwfmw!=\t?wg#`obpp>!vmgfqdqlvmgsbqboofo#wlgl`wqjmf#lel``vsjfg#azwfqnjmloldzQfmbjppbm`fb#mvnafq#lepvsslqw#elqf{solqbwjlmqf`ldmjwjlmsqfgf`fpplq?jnd#pq`>!,?k2#`obpp>!svaoj`bwjlmnbz#bopl#afpsf`jbojyfg?,ejfogpfw=sqldqfppjufnjoojlmp#lepwbwfp#wkbwfmelq`fnfmwbqlvmg#wkf#lmf#bmlwkfq-sbqfmwMlgfbdqj`vowvqfBowfqmbwjufqfpfbq`kfqpwltbqgp#wkfNlpw#le#wkfnbmz#lwkfq#+fpsf`jbooz?wg#tjgwk>!8tjgwk9233&jmgfsfmgfmw?k0#`obpp>!#lm`kbmdf>!*-bgg@obpp+jmwfqb`wjlmLmf#le#wkf#gbvdkwfq#leb``fpplqjfpaqbm`kfp#le\x0E\t?gju#jg>!wkf#obqdfpwgf`obqbwjlmqfdvobwjlmpJmelqnbwjlmwqbmpobwjlmgl`vnfmwbqzjm#lqgfq#wl!=\t?kfbg=\t?!#kfjdkw>!2b`qlpp#wkf#lqjfmwbwjlm*8?,p`qjsw=jnsofnfmwfg`bm#af#pffmwkfqf#tbp#bgfnlmpwqbwf`lmwbjmfq!=`lmmf`wjlmpwkf#Aqjwjpktbp#tqjwwfm\"jnslqwbmw8s{8#nbqdjm.elooltfg#azbajojwz#wl#`lnsoj`bwfggvqjmd#wkf#jnnjdqbwjlmbopl#`boofg?k7#`obpp>!gjpwjm`wjlmqfsob`fg#azdlufqmnfmwpol`bwjlm#lejm#Mlufnafqtkfwkfq#wkf?,s=\t?,gju=b`rvjpjwjlm`boofg#wkf#sfqpf`vwjlmgfpjdmbwjlmxelmw.pjyf9bssfbqfg#jmjmufpwjdbwff{sfqjfm`fgnlpw#ojhfoztjgfoz#vpfggjp`vppjlmpsqfpfm`f#le#+gl`vnfmw-f{wfmpjufozJw#kbp#affmjw#glfp#mlw`lmwqbqz#wljmkbajwbmwpjnsqlufnfmwp`klobqpkjs`lmpvnswjlmjmpwqv`wjlmelq#f{bnsoflmf#lq#nlqfs{8#sbggjmdwkf#`vqqfmwb#pfqjfp#lebqf#vpvboozqlof#jm#wkfsqfujlvpoz#gfqjubwjufpfujgfm`f#lef{sfqjfm`fp`lolqp`kfnfpwbwfg#wkbw`fqwjej`bwf?,b=?,gju=\t#pfof`wfg>!kjdk#p`klloqfpslmpf#wl`lnelqwbaofbglswjlm#lewkqff#zfbqpwkf#`lvmwqzjm#Efaqvbqzpl#wkbw#wkfsflsof#tkl#sqlujgfg#az?sbqbn#mbnfbeef`wfg#azjm#wfqnp#lebssljmwnfmwJPL.;;6:.2!tbp#alqm#jmkjpwlqj`bo#qfdbqgfg#bpnfbpvqfnfmwjp#abpfg#lm#bmg#lwkfq#9#evm`wjlm+pjdmjej`bmw`fofaqbwjlmwqbmpnjwwfg,ip,irvfqz-jp#hmltm#bpwkflqfwj`bo#wbajmgf{>!jw#`lvog#af?mlp`qjsw=\tkbujmd#affm\x0E\t?kfbg=\x0E\t?#%rvlw8Wkf#`lnsjobwjlmkf#kbg#affmsqlgv`fg#azskjolplskfq`lmpwqv`wfgjmwfmgfg#wlbnlmd#lwkfq`lnsbqfg#wlwl#pbz#wkbwFmdjmffqjmdb#gjeefqfmwqfefqqfg#wlgjeefqfm`fpafojfe#wkbwsklwldqbskpjgfmwjezjmdKjpwlqz#le#Qfsvaoj`#lemf`fppbqjozsqlabajojwzwf`kmj`boozofbujmd#wkfpsf`wb`vobqeqb`wjlm#lefof`wqj`jwzkfbg#le#wkfqfpwbvqbmwpsbqwmfqpkjsfnskbpjp#lmnlpw#qf`fmwpkbqf#tjwk#pbzjmd#wkbwejoofg#tjwkgfpjdmfg#wljw#jp#lewfm!=?,jeqbnf=bp#elooltp9nfqdfg#tjwkwkqlvdk#wkf`lnnfq`jbo#sljmwfg#lvwlsslqwvmjwzujft#le#wkfqfrvjqfnfmwgjujpjlm#lesqldqbnnjmdkf#qf`fjufgpfwJmwfqubo!=?,psbm=?,jm#Mft#Zlqhbggjwjlmbo#`lnsqfppjlm\t\t?gju#jg>!jm`lqslqbwf8?,p`qjsw=?bwwb`kFufmwaf`bnf#wkf#!#wbqdfw>!\\`bqqjfg#lvwPlnf#le#wkfp`jfm`f#bmgwkf#wjnf#le@lmwbjmfq!=nbjmwbjmjmd@kqjpwlskfqNv`k#le#wkftqjwjmdp#le!#kfjdkw>!1pjyf#le#wkfufqpjlm#le#nj{wvqf#le#afwtffm#wkfF{bnsofp#lefgv`bwjlmbo`lnsfwjwjuf#lmpvanjw>!gjqf`wlq#legjpwjm`wjuf,GWG#[KWNO#qfobwjmd#wlwfmgfm`z#wlsqlujm`f#letkj`k#tlvoggfpsjwf#wkfp`jfmwjej`#ofdjpobwvqf-jmmfqKWNO#boofdbwjlmpBdqj`vowvqftbp#vpfg#jmbssqlb`k#wljmwfoojdfmwzfbqp#obwfq/pbmp.pfqjegfwfqnjmjmdSfqelqnbm`fbssfbqbm`fp/#tkj`k#jp#elvmgbwjlmpbaaqfujbwfgkjdkfq#wkbmp#eqln#wkf#jmgjujgvbo#`lnslpfg#lepvsslpfg#wl`objnp#wkbwbwwqjavwjlmelmw.pjyf92fofnfmwp#leKjpwlqj`bo#kjp#aqlwkfqbw#wkf#wjnfbmmjufqpbqzdlufqmfg#azqfobwfg#wl#vowjnbwfoz#jmmlubwjlmpjw#jp#pwjoo`bm#lmoz#afgfejmjwjlmpwlDNWPwqjmdB#mvnafq#lejnd#`obpp>!Fufmwvbooz/tbp#`kbmdfgl``vqqfg#jmmfjdkalqjmdgjpwjmdvjpktkfm#kf#tbpjmwqlgv`jmdwfqqfpwqjboNbmz#le#wkfbqdvfp#wkbwbm#Bnfqj`bm`lmrvfpw#letjgfpsqfbg#tfqf#hjoofgp`qffm#bmg#Jm#lqgfq#wlf{sf`wfg#wlgfp`fmgbmwpbqf#ol`bwfgofdjpobwjufdfmfqbwjlmp#ab`hdqlvmgnlpw#sflsofzfbqp#bewfqwkfqf#jp#mlwkf#kjdkfpweqfrvfmwoz#wkfz#gl#mlwbqdvfg#wkbwpkltfg#wkbwsqfglnjmbmwwkfloldj`boaz#wkf#wjnf`lmpjgfqjmdpklqw.ojufg?,psbm=?,b=`bm#af#vpfgufqz#ojwwoflmf#le#wkf#kbg#boqfbgzjmwfqsqfwfg`lnnvmj`bwfefbwvqfp#ledlufqmnfmw/?,mlp`qjsw=fmwfqfg#wkf!#kfjdkw>!0Jmgfsfmgfmwslsvobwjlmpobqdf.p`bof-#Bowklvdk#vpfg#jm#wkfgfpwqv`wjlmslppjajojwzpwbqwjmd#jmwtl#lq#nlqff{sqfppjlmppvalqgjmbwfobqdfq#wkbmkjpwlqz#bmg?,lswjlm=\x0E\t@lmwjmfmwbofojnjmbwjmdtjoo#mlw#afsqb`wj`f#lejm#eqlmw#lepjwf#le#wkffmpvqf#wkbwwl#`qfbwf#bnjppjppjssjslwfmwjboozlvwpwbmgjmdafwwfq#wkbmtkbw#jp#mltpjwvbwfg#jmnfwb#mbnf>!WqbgjwjlmbopvddfpwjlmpWqbmpobwjlmwkf#elqn#lebwnlpskfqj`jgfloldj`bofmwfqsqjpfp`bo`vobwjmdfbpw#le#wkfqfnmbmwp#lesovdjmpsbdf,jmgf{-sks<qfnbjmfg#jmwqbmpelqnfgKf#tbp#bopltbp#boqfbgzpwbwjpwj`bojm#ebulq#leNjmjpwqz#lenlufnfmw#leelqnvobwjlmjp#qfrvjqfg?ojmh#qfo>!Wkjp#jp#wkf#?b#kqfe>!,slsvobqjyfgjmuloufg#jmbqf#vpfg#wlbmg#pfufqbonbgf#az#wkfpffnp#wl#afojhfoz#wkbwSbofpwjmjbmmbnfg#bewfqjw#kbg#affmnlpw#`lnnlmwl#qfefq#wlavw#wkjp#jp`lmpf`vwjufwfnslqbqjozJm#dfmfqbo/`lmufmwjlmpwbhfp#sob`fpvagjujpjlmwfqqjwlqjbolsfqbwjlmbosfqnbmfmwoztbp#obqdfozlvwaqfbh#lejm#wkf#sbpwelooltjmd#b#{nomp9ld>!=?b#`obpp>!`obpp>!wf{w@lmufqpjlm#nbz#af#vpfgnbmveb`wvqfbewfq#afjmd`ofbqej{!=\trvfpwjlm#letbp#fof`wfgwl#af`lnf#baf`bvpf#le#plnf#sflsofjmpsjqfg#azpv``fppevo#b#wjnf#tkfmnlqf#`lnnlmbnlmdpw#wkfbm#leej`jbotjgwk9233&8wf`kmloldz/tbp#bglswfgwl#hffs#wkfpfwwofnfmwpojuf#ajqwkpjmgf{-kwno!@lmmf`wj`vwbppjdmfg#wl%bns8wjnfp8b``lvmw#elqbojdm>qjdkwwkf#`lnsbmzbotbzp#affmqfwvqmfg#wljmuloufnfmwAf`bvpf#wkfwkjp#sfqjlg!#mbnf>!r!#`lmejmfg#wlb#qfpvow#leubovf>!!#,=jp#b`wvboozFmujqlmnfmw\x0E\t?,kfbg=\x0E\t@lmufqpfoz/=\t?gju#jg>!3!#tjgwk>!2jp#sqlabaozkbuf#af`lnf`lmwqloojmdwkf#sqlaofn`jwjyfmp#leslojwj`jbmpqfb`kfg#wkfbp#fbqoz#bp9mlmf8#lufq?wbaof#`fooubojgjwz#legjqf`woz#wllmnlvpfgltmtkfqf#jw#jptkfm#jw#tbpnfnafqp#le#qfobwjlm#wlb``lnnlgbwfbolmd#tjwk#Jm#wkf#obwfwkf#Fmdojpkgfoj`jlvp!=wkjp#jp#mlwwkf#sqfpfmwje#wkfz#bqfbmg#ejmboozb#nbwwfq#le\x0E\t\n?,gju=\x0E\t\x0E\t?,p`qjsw=ebpwfq#wkbmnbilqjwz#lebewfq#tkj`k`lnsbqbwjufwl#nbjmwbjmjnsqluf#wkfbtbqgfg#wkffq!#`obpp>!eqbnfalqgfqqfpwlqbwjlmjm#wkf#pbnfbmbozpjp#lewkfjq#ejqpwGvqjmd#wkf#`lmwjmfmwbopfrvfm`f#leevm`wjlm+*xelmw.pjyf9#tlqh#lm#wkf?,p`qjsw=\t?afdjmp#tjwkibubp`qjsw9`lmpwjwvfmwtbp#elvmgfgfrvjojaqjvnbppvnf#wkbwjp#djufm#azmffgp#wl#af`llqgjmbwfpwkf#ubqjlvpbqf#sbqw#lelmoz#jm#wkfpf`wjlmp#lejp#b#`lnnlmwkflqjfp#legjp`lufqjfpbppl`jbwjlmfgdf#le#wkfpwqfmdwk#leslpjwjlm#jmsqfpfmw.gbzvmjufqpboozwl#elqn#wkfavw#jmpwfbg`lqslqbwjlmbwwb`kfg#wljp#`lnnlmozqfbplmp#elq#%rvlw8wkf#`bm#af#nbgftbp#baof#wltkj`k#nfbmpavw#gjg#mlwlmNlvpfLufqbp#slppjaoflsfqbwfg#az`lnjmd#eqlnwkf#sqjnbqzbggjwjlm#leelq#pfufqbowqbmpefqqfgb#sfqjlg#lebqf#baof#wlkltfufq/#jwpklvog#kbufnv`k#obqdfq\t\n?,p`qjsw=bglswfg#wkfsqlsfqwz#legjqf`wfg#azfeef`wjufoztbp#aqlvdkw`kjogqfm#leSqldqbnnjmdolmdfq#wkbmnbmvp`qjswptbq#bdbjmpwaz#nfbmp#lebmg#nlpw#lepjnjobq#wl#sqlsqjfwbqzlqjdjmbwjmdsqfpwjdjlvpdqbnnbwj`bof{sfqjfm`f-wl#nbhf#wkfJw#tbp#bopljp#elvmg#jm`lnsfwjwlqpjm#wkf#V-P-qfsob`f#wkfaqlvdkw#wkf`bo`vobwjlmeboo#le#wkfwkf#dfmfqbosqb`wj`boozjm#klmlq#leqfofbpfg#jmqfpjgfmwjbobmg#plnf#lehjmd#le#wkfqfb`wjlm#wl2pw#Fbqo#le`vowvqf#bmgsqjm`jsbooz?,wjwof=\t##wkfz#`bm#afab`h#wl#wkfplnf#le#kjpf{slpvqf#wlbqf#pjnjobqelqn#le#wkfbggEbulqjwf`jwjyfmpkjssbqw#jm#wkfsflsof#tjwkjm#sqb`wj`fwl#`lmwjmvf%bns8njmvp8bssqlufg#az#wkf#ejqpw#booltfg#wkfbmg#elq#wkfevm`wjlmjmdsobzjmd#wkfplovwjlm#wlkfjdkw>!3!#jm#kjp#allhnlqf#wkbm#belooltp#wkf`qfbwfg#wkfsqfpfm`f#jm%maps8?,wg=mbwjlmbojpwwkf#jgfb#leb#`kbqb`wfqtfqf#elq`fg#`obpp>!awmgbzp#le#wkfefbwvqfg#jmpkltjmd#wkfjmwfqfpw#jmjm#sob`f#lewvqm#le#wkfwkf#kfbg#leOlqg#le#wkfslojwj`boozkbp#jwp#ltmFgv`bwjlmbobssqlubo#leplnf#le#wkffb`k#lwkfq/afkbujlq#lebmg#af`bvpfbmg#bmlwkfqbssfbqfg#lmqf`lqgfg#jmaob`h%rvlw8nbz#jm`ovgfwkf#tlqog$p`bm#ofbg#wlqfefqp#wl#balqgfq>!3!#dlufqmnfmw#tjmmjmd#wkfqfpvowfg#jm#tkjof#wkf#Tbpkjmdwlm/wkf#pvaif`w`jwz#jm#wkf=?,gju=\x0E\t\n\nqfeof`w#wkfwl#`lnsofwfaf`bnf#nlqfqbgjlb`wjufqfif`wfg#aztjwklvw#bmzkjp#ebwkfq/tkj`k#`lvog`lsz#le#wkfwl#jmgj`bwfb#slojwj`bob``lvmwp#le`lmpwjwvwfptlqhfg#tjwkfq?,b=?,oj=le#kjp#ojefb``lnsbmjfg`ojfmwTjgwksqfufmw#wkfOfdjpobwjufgjeefqfmwozwldfwkfq#jmkbp#pfufqboelq#bmlwkfqwf{w#le#wkfelvmgfg#wkff#tjwk#wkf#jp#vpfg#elq`kbmdfg#wkfvpvbooz#wkfsob`f#tkfqftkfqfbp#wkf=#?b#kqfe>!!=?b#kqfe>!wkfnpfoufp/bowklvdk#kfwkbw#`bm#afwqbgjwjlmboqlof#le#wkfbp#b#qfpvowqfnluf@kjoggfpjdmfg#aztfpw#le#wkfPlnf#sflsofsqlgv`wjlm/pjgf#le#wkfmftpofwwfqpvpfg#az#wkfgltm#wl#wkfb``fswfg#azojuf#jm#wkfbwwfnswp#wllvwpjgf#wkfeqfrvfm`jfpKltfufq/#jmsqldqbnnfqpbw#ofbpw#jmbssql{jnbwfbowklvdk#jwtbp#sbqw#lebmg#ubqjlvpDlufqmlq#lewkf#bqwj`ofwvqmfg#jmwl=?b#kqfe>!,wkf#f`lmlnzjp#wkf#nlpwnlpw#tjgfoztlvog#obwfqbmg#sfqkbspqjpf#wl#wkfl``vqp#tkfmvmgfq#tkj`k`lmgjwjlmp-wkf#tfpwfqmwkflqz#wkbwjp#sqlgv`fgwkf#`jwz#lejm#tkj`k#kfpffm#jm#wkfwkf#`fmwqboavjogjmd#lenbmz#le#kjpbqfb#le#wkfjp#wkf#lmoznlpw#le#wkfnbmz#le#wkfwkf#TfpwfqmWkfqf#jp#mlf{wfmgfg#wlPwbwjpwj`bo`lopsbm>1#\x7Fpklqw#pwlqzslppjaof#wlwlsloldj`bo`qjwj`bo#leqfslqwfg#wlb#@kqjpwjbmgf`jpjlm#wljp#frvbo#wlsqlaofnp#leWkjp#`bm#afnfq`kbmgjpfelq#nlpw#leml#fujgfm`ffgjwjlmp#lefofnfmwp#jm%rvlw8-#Wkf`ln,jnbdfp,tkj`k#nbhfpwkf#sql`fppqfnbjmp#wkfojwfqbwvqf/jp#b#nfnafqwkf#slsvobqwkf#bm`jfmwsqlaofnp#jmwjnf#le#wkfgfefbwfg#azalgz#le#wkfb#eft#zfbqpnv`k#le#wkfwkf#tlqh#le@bojelqmjb/pfqufg#bp#bdlufqmnfmw-`lm`fswp#lenlufnfmw#jm\n\n?gju#jg>!jw!#ubovf>!obmdvbdf#lebp#wkfz#bqfsqlgv`fg#jmjp#wkbw#wkff{sobjm#wkfgju=?,gju=\tKltfufq#wkfofbg#wl#wkf\n?b#kqfe>!,tbp#dqbmwfgsflsof#kbuf`lmwjmvbooztbp#pffm#bpbmg#qfobwfgwkf#qlof#lesqlslpfg#azle#wkf#afpwfb`k#lwkfq-@lmpwbmwjmfsflsof#eqlngjbof`wp#lewl#qfujpjlmtbp#qfmbnfgb#plvq`f#lewkf#jmjwjboobvm`kfg#jmsqlujgf#wkfwl#wkf#tfpwtkfqf#wkfqfbmg#pjnjobqafwtffm#wtljp#bopl#wkfFmdojpk#bmg`lmgjwjlmp/wkbw#jw#tbpfmwjwofg#wlwkfnpfoufp-rvbmwjwz#leqbmpsbqfm`zwkf#pbnf#bpwl#iljm#wkf`lvmwqz#bmgwkjp#jp#wkfWkjp#ofg#wlb#pwbwfnfmw`lmwqbpw#wlobpwJmgf{Lewkqlvdk#kjpjp#gfpjdmfgwkf#wfqn#jpjp#sqlujgfgsqlwf`w#wkfmd?,b=?,oj=Wkf#`vqqfmwwkf#pjwf#lepvapwbmwjbof{sfqjfm`f/jm#wkf#Tfpwwkfz#pklvogpolufm(ajmb`lnfmwbqjlpvmjufqpjgbg`lmgj`jlmfpb`wjujgbgfpf{sfqjfm`jbwf`mlold/Absqlgv``j/_msvmwvb`j/_mbsoj`b`j/_m`lmwqbpf/]b`bwfdlq/Abpqfdjpwqbqpfsqlefpjlmbowqbwbnjfmwlqfd/Apwqbwfpf`qfwbq/Absqjm`jsbofpsqlwf``j/_mjnslqwbmwfpjnslqwbm`jbslpjajojgbgjmwfqfpbmwf`qf`jnjfmwlmf`fpjgbgfppvp`qjajqpfbpl`jb`j/_mgjpslmjaofpfubovb`j/_mfpwvgjbmwfpqfpslmpbaofqfplov`j/_mdvbgbobibqbqfdjpwqbglplslqwvmjgbg`lnfq`jbofpelwldqbe/Abbvwlqjgbgfpjmdfmjfq/Abwfofujpj/_m`lnsfwfm`jblsfqb`jlmfpfpwbaof`jglpjnsofnfmwfb`wvbonfmwfmbufdb`j/_m`lmelqnjgbgojmf.kfjdkw9elmw.ebnjoz9!#9#!kwws9,,bssoj`bwjlmpojmh!#kqfe>!psf`jej`booz,,?\"X@GBWBX\tLqdbmjybwjlmgjpwqjavwjlm3s{8#kfjdkw9qfobwjlmpkjsgfuj`f.tjgwk?gju#`obpp>!?obafo#elq>!qfdjpwqbwjlm?,mlp`qjsw=\t,jmgf{-kwno!tjmglt-lsfm+#\"jnslqwbmw8bssoj`bwjlm,jmgfsfmgfm`f,,ttt-dlldoflqdbmjybwjlmbvwl`lnsofwfqfrvjqfnfmwp`lmpfqubwjuf?elqn#mbnf>!jmwfoof`wvbonbqdjm.ofew92;wk#`fmwvqzbm#jnslqwbmwjmpwjwvwjlmpbaaqfujbwjlm?jnd#`obpp>!lqdbmjpbwjlm`jujojybwjlm2:wk#`fmwvqzbq`kjwf`wvqfjm`lqslqbwfg13wk#`fmwvqz.`lmwbjmfq!=nlpw#mlwbaoz,=?,b=?,gju=mlwjej`bwjlm$vmgfejmfg$*Evqwkfqnlqf/afojfuf#wkbwjmmfqKWNO#>#sqjlq#wl#wkfgqbnbwj`boozqfefqqjmd#wlmfdlwjbwjlmpkfbgrvbqwfqpPlvwk#Beqj`bvmpv``fppevoSfmmpzoubmjbBp#b#qfpvow/?kwno#obmd>!%ow8,pvs%dw8gfbojmd#tjwkskjobgfoskjbkjpwlqj`booz*8?,p`qjsw=\tsbggjmd.wls9f{sfqjnfmwbodfwBwwqjavwfjmpwqv`wjlmpwf`kmloldjfpsbqw#le#wkf#>evm`wjlm+*xpvap`qjswjlmo-gwg!=\x0E\t?kwdfldqbskj`bo@lmpwjwvwjlm$/#evm`wjlm+pvsslqwfg#azbdqj`vowvqbo`lmpwqv`wjlmsvaoj`bwjlmpelmw.pjyf9#2b#ubqjfwz#le?gju#pwzof>!Fm`z`olsfgjbjeqbnf#pq`>!gfnlmpwqbwfgb``lnsojpkfgvmjufqpjwjfpGfnldqbskj`p*8?,p`qjsw=?gfgj`bwfg#wlhmltofgdf#lepbwjpeb`wjlmsbqwj`vobqoz?,gju=?,gju=Fmdojpk#+VP*bssfmg@kjog+wqbmpnjppjlmp-#Kltfufq/#jmwfoojdfm`f!#wbajmgf{>!eolbw9qjdkw8@lnnlmtfbowkqbmdjmd#eqlnjm#tkj`k#wkfbw#ofbpw#lmfqfsqlgv`wjlmfm`z`olsfgjb8elmw.pjyf92ivqjpgj`wjlmbw#wkbw#wjnf!=?b#`obpp>!Jm#bggjwjlm/gfp`qjswjlm(`lmufqpbwjlm`lmwb`w#tjwkjp#dfmfqboozq!#`lmwfmw>!qfsqfpfmwjmd%ow8nbwk%dw8sqfpfmwbwjlml``bpjlmbooz?jnd#tjgwk>!mbujdbwjlm!=`lnsfmpbwjlm`kbnsjlmpkjsnfgjb>!boo!#ujlobwjlm#leqfefqfm`f#wlqfwvqm#wqvf8Pwqj`w,,FM!#wqbmpb`wjlmpjmwfqufmwjlmufqjej`bwjlmJmelqnbwjlm#gjeej`vowjfp@kbnsjlmpkjs`bsbajojwjfp?\"Xfmgje^..=~\t?,p`qjsw=\t@kqjpwjbmjwzelq#f{bnsof/Sqlefppjlmboqfpwqj`wjlmppvddfpw#wkbwtbp#qfofbpfg+pv`k#bp#wkfqfnluf@obpp+vmfnsolznfmwwkf#Bnfqj`bmpwqv`wvqf#le,jmgf{-kwno#svaojpkfg#jmpsbm#`obpp>!!=?b#kqfe>!,jmwqlgv`wjlmafolmdjmd#wl`objnfg#wkbw`lmpfrvfm`fp?nfwb#mbnf>!Dvjgf#wl#wkflufqtkfonjmdbdbjmpw#wkf#`lm`fmwqbwfg/\t-mlmwlv`k#lapfqubwjlmp?,b=\t?,gju=\te#+gl`vnfmw-alqgfq9#2s{#xelmw.pjyf92wqfbwnfmw#le3!#kfjdkw>!2nlgjej`bwjlmJmgfsfmgfm`fgjujgfg#jmwldqfbwfq#wkbmb`kjfufnfmwpfpwbaojpkjmdIbubP`qjsw!#mfufqwkfofpppjdmjej`bm`fAqlbg`bpwjmd=%maps8?,wg=`lmwbjmfq!=\tpv`k#bp#wkf#jmeovfm`f#leb#sbqwj`vobqpq`>$kwws9,,mbujdbwjlm!#kboe#le#wkf#pvapwbmwjbo#%maps8?,gju=bgubmwbdf#legjp`lufqz#leevmgbnfmwbo#nfwqlslojwbmwkf#lsslpjwf!#{no9obmd>!gfojafqbwfozbojdm>`fmwfqfulovwjlm#lesqfpfqubwjlmjnsqlufnfmwpafdjmmjmd#jmIfpvp#@kqjpwSvaoj`bwjlmpgjpbdqffnfmwwf{w.bojdm9q/#evm`wjlm+*pjnjobqjwjfpalgz=?,kwno=jp#`vqqfmwozboskbafwj`bojp#plnfwjnfpwzsf>!jnbdf,nbmz#le#wkf#eolt9kjggfm8bubjobaof#jmgfp`qjaf#wkff{jpwfm`f#leboo#lufq#wkfwkf#Jmwfqmfw\n?vo#`obpp>!jmpwboobwjlmmfjdkalqkllgbqnfg#elq`fpqfgv`jmd#wkf`lmwjmvfp#wlMlmfwkfofpp/wfnsfqbwvqfp\t\n\n?b#kqfe>!`olpf#wl#wkff{bnsofp#le#jp#balvw#wkf+pff#afolt*-!#jg>!pfbq`ksqlefppjlmbojp#bubjobaofwkf#leej`jbo\n\n?,p`qjsw=\t\t\n\n?gju#jg>!b``fofqbwjlmwkqlvdk#wkf#Kboo#le#Ebnfgfp`qjswjlmpwqbmpobwjlmpjmwfqefqfm`f#wzsf>$wf{w,qf`fmw#zfbqpjm#wkf#tlqogufqz#slsvobqxab`hdqlvmg9wqbgjwjlmbo#plnf#le#wkf#`lmmf`wfg#wlf{soljwbwjlmfnfqdfm`f#le`lmpwjwvwjlmB#Kjpwlqz#lepjdmjej`bmw#nbmveb`wvqfgf{sf`wbwjlmp=?mlp`qjsw=?`bm#af#elvmgaf`bvpf#wkf#kbp#mlw#affmmfjdkalvqjmdtjwklvw#wkf#bggfg#wl#wkf\n?oj#`obpp>!jmpwqvnfmwboPlujfw#Vmjlmb`hmltofgdfgtkj`k#`bm#afmbnf#elq#wkfbwwfmwjlm#wlbwwfnswp#wl#gfufolsnfmwpJm#eb`w/#wkf?oj#`obpp>!bjnsoj`bwjlmppvjwbaof#elqnv`k#le#wkf#`lolmjybwjlmsqfpjgfmwjbo`bm`foAvaaof#Jmelqnbwjlmnlpw#le#wkf#jp#gfp`qjafgqfpw#le#wkf#nlqf#lq#ofppjm#PfswfnafqJmwfoojdfm`fpq`>!kwws9,,s{8#kfjdkw9#bubjobaof#wlnbmveb`wvqfqkvnbm#qjdkwpojmh#kqfe>!,bubjobajojwzsqlslqwjlmbolvwpjgf#wkf#bpwqlmlnj`bokvnbm#afjmdpmbnf#le#wkf#bqf#elvmg#jmbqf#abpfg#lmpnboofq#wkbmb#sfqplm#tklf{sbmpjlm#lebqdvjmd#wkbwmlt#hmltm#bpJm#wkf#fbqozjmwfqnfgjbwfgfqjufg#eqlnP`bmgjmbujbm?,b=?,gju=\x0E\t`lmpjgfq#wkfbm#fpwjnbwfgwkf#Mbwjlmbo?gju#jg>!sbdqfpvowjmd#jm`lnnjppjlmfgbmboldlvp#wlbqf#qfrvjqfg,vo=\t?,gju=\ttbp#abpfg#lmbmg#af`bnf#b%maps8%maps8w!#ubovf>!!#tbp#`bswvqfgml#nlqf#wkbmqfpsf`wjufoz`lmwjmvf#wl#=\x0E\t?kfbg=\x0E\t?tfqf#`qfbwfgnlqf#dfmfqbojmelqnbwjlm#vpfg#elq#wkfjmgfsfmgfmw#wkf#Jnsfqjbo`lnslmfmw#lewl#wkf#mlqwkjm`ovgf#wkf#@lmpwqv`wjlmpjgf#le#wkf#tlvog#mlw#afelq#jmpwbm`fjmufmwjlm#lenlqf#`lnsof{`loof`wjufozab`hdqlvmg9#wf{w.bojdm9#jwp#lqjdjmbojmwl#b``lvmwwkjp#sql`fppbm#f{wfmpjufkltfufq/#wkfwkfz#bqf#mlwqfif`wfg#wkf`qjwj`jpn#legvqjmd#tkj`ksqlabaoz#wkfwkjp#bqwj`of+evm`wjlm+*xJw#pklvog#afbm#bdqffnfmwb``jgfmwboozgjeefqp#eqlnBq`kjwf`wvqfafwwfq#hmltmbqqbmdfnfmwpjmeovfm`f#lmbwwfmgfg#wkfjgfmwj`bo#wlplvwk#le#wkfsbpp#wkqlvdk{no!#wjwof>!tfjdkw9alog8`qfbwjmd#wkfgjpsobz9mlmfqfsob`fg#wkf?jnd#pq`>!,jkwwsp9,,ttt-Tlqog#Tbq#JJwfpwjnlmjbopelvmg#jm#wkfqfrvjqfg#wl#bmg#wkbw#wkfafwtffm#wkf#tbp#gfpjdmfg`lmpjpwp#le#`lmpjgfqbaozsvaojpkfg#azwkf#obmdvbdf@lmpfqubwjlm`lmpjpwfg#leqfefq#wl#wkfab`h#wl#wkf#`pp!#nfgjb>!Sflsof#eqln#bubjobaof#lmsqlufg#wl#afpvddfpwjlmp!tbp#hmltm#bpubqjfwjfp#leojhfoz#wl#af`lnsqjpfg#lepvsslqw#wkf#kbmgp#le#wkf`lvsofg#tjwk`lmmf`w#bmg#alqgfq9mlmf8sfqelqnbm`fpafelqf#afjmdobwfq#af`bnf`bo`vobwjlmplewfm#`boofgqfpjgfmwp#lenfbmjmd#wkbw=?oj#`obpp>!fujgfm`f#elqf{sobmbwjlmpfmujqlmnfmwp!=?,b=?,gju=tkj`k#booltpJmwqlgv`wjlmgfufolsfg#azb#tjgf#qbmdflm#afkboe#leubojdm>!wls!sqjm`jsof#lebw#wkf#wjnf/?,mlp`qjsw=\x0Epbjg#wl#kbufjm#wkf#ejqpwtkjof#lwkfqpkzslwkfwj`boskjolplskfqpsltfq#le#wkf`lmwbjmfg#jmsfqelqnfg#azjmbajojwz#wltfqf#tqjwwfmpsbm#pwzof>!jmsvw#mbnf>!wkf#rvfpwjlmjmwfmgfg#elqqfif`wjlm#lejnsojfp#wkbwjmufmwfg#wkfwkf#pwbmgbqgtbp#sqlabaozojmh#afwtffmsqlefpplq#lejmwfqb`wjlmp`kbmdjmd#wkfJmgjbm#L`fbm#`obpp>!obpwtlqhjmd#tjwk$kwws9,,ttt-zfbqp#afelqfWkjp#tbp#wkfqf`qfbwjlmbofmwfqjmd#wkfnfbpvqfnfmwpbm#f{wqfnfozubovf#le#wkfpwbqw#le#wkf\t?,p`qjsw=\t\tbm#feelqw#wljm`qfbpf#wkfwl#wkf#plvwkpsb`jmd>!3!=pveej`jfmwozwkf#Fvqlsfbm`lmufqwfg#wl`ofbqWjnflvwgjg#mlw#kbuf`lmpfrvfmwozelq#wkf#mf{wf{wfmpjlm#lef`lmlnj`#bmgbowklvdk#wkfbqf#sqlgv`fgbmg#tjwk#wkfjmpveej`jfmwdjufm#az#wkfpwbwjmd#wkbwf{sfmgjwvqfp?,psbm=?,b=\twklvdkw#wkbwlm#wkf#abpjp`foosbggjmd>jnbdf#le#wkfqfwvqmjmd#wljmelqnbwjlm/pfsbqbwfg#azbppbppjmbwfgp!#`lmwfmw>!bvwklqjwz#lemlqwktfpwfqm?,gju=\t?gju#!=?,gju=\x0E\t##`lmpvowbwjlm`lnnvmjwz#lewkf#mbwjlmbojw#pklvog#afsbqwj`jsbmwp#bojdm>!ofewwkf#dqfbwfpwpfof`wjlm#lepvsfqmbwvqbogfsfmgfmw#lmjp#nfmwjlmfgbooltjmd#wkftbp#jmufmwfgb``lnsbmzjmdkjp#sfqplmbobubjobaof#bwpwvgz#le#wkflm#wkf#lwkfqf{f`vwjlm#leKvnbm#Qjdkwpwfqnp#le#wkfbppl`jbwjlmpqfpfbq`k#bmgpv``ffgfg#azgfefbwfg#wkfbmg#eqln#wkfavw#wkfz#bqf`lnnbmgfq#lepwbwf#le#wkfzfbqp#le#bdfwkf#pwvgz#le?vo#`obpp>!psob`f#jm#wkftkfqf#kf#tbp?oj#`obpp>!ewkfqf#bqf#mltkj`k#af`bnfkf#svaojpkfgf{sqfppfg#jmwl#tkj`k#wkf`lnnjppjlmfqelmw.tfjdkw9wfqqjwlqz#lef{wfmpjlmp!=Qlnbm#Fnsjqffrvbo#wl#wkfJm#`lmwqbpw/kltfufq/#bmgjp#wzsj`boozbmg#kjp#tjef+bopl#`boofg=?vo#`obpp>!feef`wjufoz#fuloufg#jmwlpffn#wl#kbuftkj`k#jp#wkfwkfqf#tbp#mlbm#f{`foofmwboo#le#wkfpfgfp`qjafg#azJm#sqb`wj`f/aqlbg`bpwjmd`kbqdfg#tjwkqfeof`wfg#jmpvaif`wfg#wlnjojwbqz#bmgwl#wkf#sljmwf`lmlnj`boozpfwWbqdfwjmdbqf#b`wvboozuj`wlqz#lufq+*8?,p`qjsw=`lmwjmvlvpozqfrvjqfg#elqfulovwjlmbqzbm#feef`wjufmlqwk#le#wkf/#tkj`k#tbp#eqlmw#le#wkflq#lwkfqtjpfplnf#elqn#lekbg#mlw#affmdfmfqbwfg#azjmelqnbwjlm-sfqnjwwfg#wljm`ovgfp#wkfgfufolsnfmw/fmwfqfg#jmwlwkf#sqfujlvp`lmpjpwfmwozbqf#hmltm#bpwkf#ejfog#lewkjp#wzsf#ledjufm#wl#wkfwkf#wjwof#le`lmwbjmp#wkfjmpwbm`fp#lejm#wkf#mlqwkgvf#wl#wkfjqbqf#gfpjdmfg`lqslqbwjlmptbp#wkbw#wkflmf#le#wkfpfnlqf#slsvobqpv``ffgfg#jmpvsslqw#eqlnjm#gjeefqfmwglnjmbwfg#azgfpjdmfg#elqltmfqpkjs#lebmg#slppjaozpwbmgbqgjyfgqfpslmpfWf{wtbp#jmwfmgfgqf`fjufg#wkfbppvnfg#wkbwbqfbp#le#wkfsqjnbqjoz#jmwkf#abpjp#lejm#wkf#pfmpfb``lvmwp#elqgfpwqlzfg#azbw#ofbpw#wtltbp#gf`obqfg`lvog#mlw#afPf`qfwbqz#lebssfbq#wl#afnbqdjm.wls92,]_p(\x7F_p(',df*xwkqlt#f~8wkf#pwbqw#lewtl#pfsbqbwfobmdvbdf#bmgtkl#kbg#affmlsfqbwjlm#legfbwk#le#wkfqfbo#mvnafqp\n?ojmh#qfo>!sqlujgfg#wkfwkf#pwlqz#le`lnsfwjwjlmpfmdojpk#+VH*fmdojpk#+VP*<p<R<Q<_<R<W<M=l<S=m<V<T=m=l<S=m<V<T=m=l<S=m<V<R5h4U4]4D5f4E\nAO\x05Gx\bTA\nzk\x0BBl\bQ\x7F\bTA\nzk\x0BUm\bQ\x7F\bTA\nzk\npe\x05u|\ti@\tcT\bVV\n\\}\nxS\tVp\x05tS\x05k`\t[X\t[X\x0BHR\bPv\bTW\bUe\n\x7Fa\bQp\x0B_W\x0BWs\nxS\x0BAz\n_y\x04Khjmelqnb`j/_mkfqqbnjfmwbpfof`wq/_mj`lgfp`qjs`j/_m`obpjej`bglp`lml`jnjfmwlsvaoj`b`j/_mqfob`jlmbgbpjmelqn/Mwj`bqfob`jlmbglpgfsbqwbnfmwlwqbabibglqfpgjqf`wbnfmwfbzvmwbnjfmwlnfq`bglOjaqf`lmw/M`wfmlpkbajwb`jlmfp`vnsojnjfmwlqfpwbvqbmwfpgjpslpj`j/_m`lmpf`vfm`jbfof`wq/_mj`bbsoj`b`jlmfpgfp`lmf`wbgljmpwbob`j/_mqfbojyb`j/_mvwjojyb`j/_mfm`j`olsfgjbfmefqnfgbgfpjmpwqvnfmwlpf{sfqjfm`jbpjmpwjwv`j/_msbqwj`vobqfppva`bwfdlqjb=n<R<W=`<V<R<L<R=m=m<T<T=l<\\<]<R=n=g<]<R<W=`=d<Y<S=l<R=m=n<R<P<R<Z<Y=n<Y<X=l=o<_<T=i=m<W=o=k<\\<Y=m<Y<U=k<\\=m<^=m<Y<_<X<\\<L<R=m=m<T=c<p<R=m<V<^<Y<X=l=o<_<T<Y<_<R=l<R<X<\\<^<R<S=l<R=m<X<\\<Q<Q=g=i<X<R<W<Z<Q=g<T<P<Y<Q<Q<R<p<R=m<V<^=g=l=o<]<W<Y<U<p<R=m<V<^<\\=m=n=l<\\<Q=g<Q<T=k<Y<_<R=l<\\<]<R=n<Y<X<R<W<Z<Y<Q=o=m<W=o<_<T=n<Y<S<Y=l=`<r<X<Q<\\<V<R<S<R=n<R<P=o=l<\\<]<R=n=o<\\<S=l<Y<W=c<^<R<R<]=e<Y<R<X<Q<R<_<R=m<^<R<Y<_<R=m=n<\\=n=`<T<X=l=o<_<R<U=h<R=l=o<P<Y=i<R=l<R=d<R<S=l<R=n<T<^=m=m=g<W<V<\\<V<\\<Z<X=g<U<^<W<\\=m=n<T<_=l=o<S<S=g<^<P<Y=m=n<Y=l<\\<]<R=n<\\=m<V<\\<[<\\<W<S<Y=l<^=g<U<X<Y<W<\\=n=`<X<Y<Q=`<_<T<S<Y=l<T<R<X<]<T<[<Q<Y=m<R=m<Q<R<^<Y<P<R<P<Y<Q=n<V=o<S<T=n=`<X<R<W<Z<Q<\\=l<\\<P<V<\\=i<Q<\\=k<\\<W<R<L<\\<]<R=n<\\<N<R<W=`<V<R=m<R<^=m<Y<P<^=n<R=l<R<U<Q<\\=k<\\<W<\\=m<S<T=m<R<V=m<W=o<Z<]=g=m<T=m=n<Y<P<S<Y=k<\\=n<T<Q<R<^<R<_<R<S<R<P<R=e<T=m<\\<U=n<R<^<S<R=k<Y<P=o<S<R<P<R=e=`<X<R<W<Z<Q<R=m=m=g<W<V<T<]=g=m=n=l<R<X<\\<Q<Q=g<Y<P<Q<R<_<T<Y<S=l<R<Y<V=n<M<Y<U=k<\\=m<P<R<X<Y<W<T=n<\\<V<R<_<R<R<Q<W<\\<U<Q<_<R=l<R<X<Y<^<Y=l=m<T=c=m=n=l<\\<Q<Y=h<T<W=`<P=g=o=l<R<^<Q=c=l<\\<[<Q=g=i<T=m<V<\\=n=`<Q<Y<X<Y<W=b=c<Q<^<\\=l=c<P<Y<Q=`=d<Y<P<Q<R<_<T=i<X<\\<Q<Q<R<U<[<Q<\\=k<T=n<Q<Y<W=`<[=c=h<R=l=o<P<\\<N<Y<S<Y=l=`<P<Y=m=c=j<\\<[<\\=e<T=n=g<w=o=k=d<T<Y\fHD\fHU\fIl\fHn\fHy\fH\\\fHD\fIk\fHi\fHF\fHD\fIk\fHy\fHS\fHC\fHR\fHy\fH\\\fIk\fHn\fHi\fHD\fIa\fHC\fHy\fIa\fHC\fHR\fH{\fHR\fHk\fHM\fH@\fHR\fH\\\fIk\fHy\fHS\fHT\fIl\fHJ\fHS\fHC\fHR\fHF\fHU\fH^\fIk\fHT\fHS\fHn\fHU\fHA\fHR\fH\\\fHH\fHi\fHF\fHD\fIl\fHY\fHR\fH^\fIk\fHT\fIk\fHY\fHR\fHy\fH\\\fHH\fIk\fHB\fIk\fH\\\fIk\fHU\fIg\fHD\fIk\fHT\fHy\fHH\fIk\fH@\fHU\fIm\fHH\fHT\fHR\fHk\fHs\fHU\fIg\fH{\fHR\fHp\fHR\fHD\fIk\fHB\fHS\fHD\fHs\fHy\fH\\\fHH\fHR\fHy\fH\\\fHD\fHR\fHe\fHD\fHy\fIk\fHC\fHU\fHR\fHm\fHT\fH@\fHT\fIk\fHA\fHR\fH[\fHR\fHj\fHF\fHy\fIk\fH^\fHS\fHC\fIk\fHZ\fIm\fH\\\fIn\fHk\fHT\fHy\fIk\fHt\fHn\fHs\fIk\fHB\fIk\fH\\\fIl\fHT\fHy\fHH\fHR\fHB\fIk\fH\\\fHR\fH^\fIk\fHy\fH\\\fHi\fHK\fHS\fHy\fHi\fHF\fHD\fHR\fHT\fHB\fHR\fHp\fHB\fIm\fHq\fIk\fHy\fHR\fH\\\fHO\fHU\fIg\fHH\fHR\fHy\fHM\fHP\fIl\fHC\fHU\fHR\fHn\fHU\fIg\fHs\fH^\fHZ\fH@\fIa\fHJ\fH^\fHS\fHC\fHR\fHp\fIl\fHY\fHD\fHp\fHR\fHH\fHR\fHy\fId\fHT\fIk\fHj\fHF\fHy\fHR\fHY\fHR\fH^\fIl\fHJ\fIk\fHD\fIk\fHF\fIn\fH\\\fIl\fHF\fHR\fHD\fIl\fHe\fHT\fHy\fIk\fHU\fIg\fH{\fIl\fH@\fId\fHL\fHy\fHj\fHF\fHy\fIl\fHY\fH\\\fIa\fH[\fH{\fHR\fHn\fHY\fHj\fHF\fHy\fIg\fHp\fHS\fH^\fHR\fHp\fHR\fHD\fHR\fHT\fHU\fHB\fHH\fHU\fHB\fIk\fHn\fHe\fHD\fHy\fIl\fHC\fHR\fHU\fIn\fHJ\fH\\\fIa\fHp\fHT\fIn\fHv\fIl\fHF\fHT\fHn\fHJ\fHT\fHY\fHR\fH^\fHU\fIg\fHD\fHR\fHU\fIg\fHH\fIl\fHp\fId\fHT\fIk\fHY\fHR\fHF\fHT\fHp\fHD\fHH\fHR\fHD\fIk\fHH\fHR\fHp\fHR\fH\\\fIl\fHt\fHR\fHC\fH^\fHp\fHS\fH^\fIk\fHD\fIl\fHv\fIk\fHp\fHR\fHn\fHv\fHF\fHH\fIa\fH\\\fH{\fIn\fH{\fH^\fHp\fHR\fHH\fIk\fH@\fHR\fHU\fH\\\fHj\fHF\fHD\fIk\fHY\fHR\fHU\fHD\fHk\fHT\fHy\fHR\fHT\fIm\fH@\fHU\fH\\\fHU\fHD\fIk\fHk\fHT\fHT\fIk\fHT\fHU\fHS\fHH\fH@\fHM\fHP\fIk\fHt\fHs\fHD\fHR\fHH\fH^\fHR\fHZ\fHF\fHR\fHn\fHv\fHZ\fIa\fH\\\fIl\fH@\fHM\fHP\fIl\fHU\fIg\fHH\fIk\fHT\fHR\fHd\fHs\fHZ\fHR\fHC\fHJ\fHT\fHy\fHH\fIl\fHp\fHR\fHH\fIl\fHY\fHR\fH^\fHR\fHU\fHp\fHR\fH\\\fHF\fHs\fHD\fHR\fH\\\fHz\fHD\fIk\fHT\fHM\fHP\fHy\fHB\fHS\fH^\fHR\fHe\fHT\fHy\fIl\fHy\fIk\fHY\fH^\fH^\fH{\fHH\fHR\fHz\fHR\fHD\fHR\fHi\fH\\\fIa\fHI\fHp\fHU\fHR\fHn\fHJ\fIk\fHz\fHR\fHF\fHU\fH^\fIl\fHD\fHS\fHC\fHB\fH@\fHS\fHD\fHR\fH@\fId\fHn\fHy\fHy\fHU\fIl\fHn\fHy\fHU\fHD\fHR\fHJ\fIk\fHH\fHR\fHU\fHB\fH^\fIk\fHy\fHR\fHG\fIl\fHp\fH@\fHy\fHS\fHH\fIm\fH\\\fHH\fHB\fHR\fHn\fH{\fHY\fHU\fIl\fHn\fH\\\fIg\fHp\fHP\fHB\fHS\fH^\fIl\fHj\fH\\\fIg\fHF\fHT\fIk\fHD\fHR\fHC\fHR\fHJ\fHY\fH^\fIk\fHD\fIk\fHz\fHR\fHH\fHR\fHy\fH\\\fIl\fH@\fHe\fHD\fHy\fHR\fHp\fHY\fHR\fH@\fHF\fIn\fH\\\fHR\fH@\fHM\fHP\fHR\fHT\fI`\fHJ\fHR\fHZ\fIk\fHC\fH\\\fHy\fHS\fHC\fIk\fHy\fHU\fHR\fHn\fHi\fHy\fHT\fH\\\fH@\fHD\fHR\fHc\fHY\fHU\fHR\fHn\fHT\fIa\fHI\fH^\fHB\fHS\fH^\fIk\fH^\fIk\fHz\fHy\fHY\fHS\fH[\fHC\fHy\fIa\fH\\\fHn\fHT\fHB\fIn\fHU\fHI\fHR\fHD\fHR4F4_4F4[5f4U5i4X4K4]5o4E4D5d4K4_4[4E4K5h4Y5m4A4E5i5d4K4Z5f4U4K5h4B4K4Y4E4K5h5i4^5f4C4K5h4U4K5i4E4K5h5o4K4F4D4K5h4]4C5d4C4D4]5j4K5i4@4K5h4C5d5h4E4K5h4U4K5h5i4K5h5i5d5n4U4K5h4U4]4D5f4K5h4_4]5f4U4K5h4@5d4K5h4K5h4\\5k4K4D4K5h4A5f4K4E4K5h4A5n5d5n4K5h5o4]5f5i4K5h4U4]4K5n5i4A5m5d4T4E4K5h4G4K5j5f5i4X4K5k4C4E4K5h5i4]4O4E4K5h5n4]4N5j4K5h4X4D4K4D4K5h4A5d4K4]4K5h4@4C5f4C4K5h4O4_4]4E4K5h4U5h5d5i5i4@5i5d4U4E4K5h4]4A5i5j4K5h5j5n4K4[5m5h4_4[5f5j4K5h5o5d5f4F4K5h4C5j5f4K4D4]5o4K4F5k4K5h4]5f4K4Z4F4A5f4K4F5f4D4F5d5n5f4F4K5h4O5d5h5e4K5h4D4]5f4C4K5h5o5h4K5i4K5h4]4K4D4[4K5h4X4B4Y5f4_5f4K4]4K4F4K5h4G4K5h4G4K5h4Y5h4K4E4K5h4A4C5f4G4K5h4^5d4K4]4K5h4B5h5f4@4K5h4@5i5f4U4K5h4U4K5i5k4K5h4@5i4K5h4K5h4_4K4U4E5i4X4K5k4C5k4K5h4]4J5f4_4K5h4C4B5d5h4K5h5m5j5f4E4K5h5o4F4K4D4K5h4C5d4]5f4K5h4C4]5d4_4K4_4F4V4]5n4F4Y4K5i5f5i4K5h4D5j4K4F4K5h4U4T5f5ifmwfqwbjmnfmwvmgfqpwbmgjmd#>#evm`wjlm+*-isd!#tjgwk>!`lmejdvqbwjlm-smd!#tjgwk>!?algz#`obpp>!Nbwk-qbmgln+*`lmwfnslqbqz#Vmjwfg#Pwbwfp`jq`vnpwbm`fp-bssfmg@kjog+lqdbmjybwjlmp?psbm#`obpp>!!=?jnd#pq`>!,gjpwjmdvjpkfgwklvpbmgp#le#`lnnvmj`bwjlm`ofbq!=?,gju=jmufpwjdbwjlmebuj`lm-j`l!#nbqdjm.qjdkw9abpfg#lm#wkf#Nbppb`kvpfwwpwbaof#alqgfq>jmwfqmbwjlmbobopl#hmltm#bpsqlmvm`jbwjlmab`hdqlvmg9 esbggjmd.ofew9Elq#f{bnsof/#njp`foobmflvp%ow8,nbwk%dw8spz`kloldj`bojm#sbqwj`vobqfbq`k!#wzsf>!elqn#nfwklg>!bp#lsslpfg#wlPvsqfnf#@lvqwl``bpjlmbooz#Bggjwjlmbooz/Mlqwk#Bnfqj`bs{8ab`hdqlvmglsslqwvmjwjfpFmwfqwbjmnfmw-wlOltfq@bpf+nbmveb`wvqjmdsqlefppjlmbo#`lnajmfg#tjwkElq#jmpwbm`f/`lmpjpwjmd#le!#nb{ofmdwk>!qfwvqm#ebopf8`lmp`jlvpmfppNfgjwfqqbmfbmf{wqblqgjmbqzbppbppjmbwjlmpvapfrvfmwoz#avwwlm#wzsf>!wkf#mvnafq#lewkf#lqjdjmbo#`lnsqfkfmpjufqfefqp#wl#wkf?,vo=\t?,gju=\tskjolplskj`bool`bwjlm-kqfetbp#svaojpkfgPbm#Eqbm`jp`l+evm`wjlm+*x\t?gju#jg>!nbjmplskjpwj`bwfgnbwkfnbwj`bo#,kfbg=\x0E\t?algzpvddfpwp#wkbwgl`vnfmwbwjlm`lm`fmwqbwjlmqfobwjlmpkjspnbz#kbuf#affm+elq#f{bnsof/Wkjp#bqwj`of#jm#plnf#`bpfpsbqwp#le#wkf#gfejmjwjlm#leDqfbw#Aqjwbjm#`foosbggjmd>frvjubofmw#wlsob`fklogfq>!8#elmw.pjyf9#ivpwjej`bwjlmafojfufg#wkbwpveefqfg#eqlnbwwfnswfg#wl#ofbgfq#le#wkf`qjsw!#pq`>!,+evm`wjlm+*#xbqf#bubjobaof\t\n?ojmh#qfo>!#pq`>$kwws9,,jmwfqfpwfg#jm`lmufmwjlmbo#!#bow>!!#,=?,bqf#dfmfqboozkbp#bopl#affmnlpw#slsvobq#`lqqfpslmgjmd`qfgjwfg#tjwkwzof>!alqgfq9?,b=?,psbm=?,-dje!#tjgwk>!?jeqbnf#pq`>!wbaof#`obpp>!jmojmf.aol`h8b``lqgjmd#wl#wldfwkfq#tjwkbssql{jnbwfozsbqojbnfmwbqznlqf#bmg#nlqfgjpsobz9mlmf8wqbgjwjlmboozsqfglnjmbmwoz%maps8\x7F%maps8%maps8?,psbm=#`foopsb`jmd>?jmsvw#mbnf>!lq!#`lmwfmw>!`lmwqlufqpjbosqlsfqwz>!ld9,{.pkl`htbuf.gfnlmpwqbwjlmpvqqlvmgfg#azMfufqwkfofpp/tbp#wkf#ejqpw`lmpjgfqbaof#Bowklvdk#wkf#`loobalqbwjlmpklvog#mlw#afsqlslqwjlm#le?psbm#pwzof>!hmltm#bp#wkf#pklqwoz#bewfqelq#jmpwbm`f/gfp`qjafg#bp#,kfbg=\t?algz#pwbqwjmd#tjwkjm`qfbpjmdoz#wkf#eb`w#wkbwgjp`vppjlm#lenjggof#le#wkfbm#jmgjujgvbogjeej`vow#wl#sljmw#le#ujftklnlpf{vbojwzb``fswbm`f#le?,psbm=?,gju=nbmveb`wvqfqplqjdjm#le#wkf`lnnlmoz#vpfgjnslqwbm`f#legfmlnjmbwjlmpab`hdqlvmg9# ofmdwk#le#wkfgfwfqnjmbwjlmb#pjdmjej`bmw!#alqgfq>!3!=qfulovwjlmbqzsqjm`jsofp#lejp#`lmpjgfqfgtbp#gfufolsfgJmgl.Fvqlsfbmuvomfqbaof#wlsqlslmfmwp#lebqf#plnfwjnfp`olpfq#wl#wkfMft#Zlqh#@jwz#mbnf>!pfbq`kbwwqjavwfg#wl`lvqpf#le#wkfnbwkfnbwj`jbmaz#wkf#fmg#lebw#wkf#fmg#le!#alqgfq>!3!#wf`kmloldj`bo-qfnluf@obpp+aqbm`k#le#wkffujgfm`f#wkbw\"Xfmgje^..=\x0E\tJmpwjwvwf#le#jmwl#b#pjmdofqfpsf`wjufoz-bmg#wkfqfelqfsqlsfqwjfp#lejp#ol`bwfg#jmplnf#le#tkj`kWkfqf#jp#bopl`lmwjmvfg#wl#bssfbqbm`f#le#%bns8mgbpk8#gfp`qjafp#wkf`lmpjgfqbwjlmbvwklq#le#wkfjmgfsfmgfmwozfrvjssfg#tjwkglfp#mlw#kbuf?,b=?b#kqfe>!`lmevpfg#tjwk?ojmh#kqfe>!,bw#wkf#bdf#lebssfbq#jm#wkfWkfpf#jm`ovgfqfdbqgofpp#le`lvog#af#vpfg#pwzof>%rvlw8pfufqbo#wjnfpqfsqfpfmw#wkfalgz=\t?,kwno=wklvdkw#wl#afslsvobwjlm#leslppjajojwjfpsfq`fmwbdf#leb``fpp#wl#wkfbm#bwwfnsw#wlsqlgv`wjlm#leirvfqz,irvfqzwtl#gjeefqfmwafolmd#wl#wkffpwbaojpknfmwqfsob`jmd#wkfgfp`qjswjlm!#gfwfqnjmf#wkfbubjobaof#elqB``lqgjmd#wl#tjgf#qbmdf#le\n?gju#`obpp>!nlqf#`lnnlmozlqdbmjpbwjlmpevm`wjlmbojwztbp#`lnsofwfg#%bns8ngbpk8#sbqwj`jsbwjlmwkf#`kbqb`wfqbm#bggjwjlmbobssfbqp#wl#afeb`w#wkbw#wkfbm#f{bnsof#lepjdmjej`bmwozlmnlvpflufq>!af`bvpf#wkfz#bpzm`#>#wqvf8sqlaofnp#tjwkpffnp#wl#kbufwkf#qfpvow#le#pq`>!kwws9,,ebnjojbq#tjwkslppfppjlm#leevm`wjlm#+*#xwllh#sob`f#jmbmg#plnfwjnfppvapwbmwjbooz?psbm=?,psbm=jp#lewfm#vpfgjm#bm#bwwfnswdqfbw#gfbo#leFmujqlmnfmwbopv``fppevooz#ujqwvbooz#boo13wk#`fmwvqz/sqlefppjlmbopmf`fppbqz#wl#gfwfqnjmfg#az`lnsbwjajojwzaf`bvpf#jw#jpGj`wjlmbqz#lenlgjej`bwjlmpWkf#elooltjmdnbz#qfefq#wl9@lmpfrvfmwoz/Jmwfqmbwjlmbobowklvdk#plnfwkbw#tlvog#aftlqog$p#ejqpw`obppjejfg#bpalwwln#le#wkf+sbqwj`vobqozbojdm>!ofew!#nlpw#`lnnlmozabpjp#elq#wkfelvmgbwjlm#le`lmwqjavwjlmpslsvobqjwz#le`fmwfq#le#wkfwl#qfgv`f#wkfivqjpgj`wjlmpbssql{jnbwjlm#lmnlvpflvw>!Mft#Wfpwbnfmw`loof`wjlm#le?,psbm=?,b=?,jm#wkf#Vmjwfgejon#gjqf`wlq.pwqj`w-gwg!=kbp#affm#vpfgqfwvqm#wl#wkfbowklvdk#wkjp`kbmdf#jm#wkfpfufqbo#lwkfqavw#wkfqf#bqfvmsqf`fgfmwfgjp#pjnjobq#wlfpsf`jbooz#jmtfjdkw9#alog8jp#`boofg#wkf`lnsvwbwjlmbojmgj`bwf#wkbwqfpwqj`wfg#wl\n?nfwb#mbnf>!bqf#wzsj`booz`lmeoj`w#tjwkKltfufq/#wkf#Bm#f{bnsof#le`lnsbqfg#tjwkrvbmwjwjfp#leqbwkfq#wkbm#b`lmpwfoobwjlmmf`fppbqz#elqqfslqwfg#wkbwpsf`jej`bwjlmslojwj`bo#bmg%maps8%maps8?qfefqfm`fp#wlwkf#pbnf#zfbqDlufqmnfmw#ledfmfqbwjlm#lekbuf#mlw#affmpfufqbo#zfbqp`lnnjwnfmw#wl\n\n?vo#`obpp>!ujpvbojybwjlm2:wk#`fmwvqz/sqb`wjwjlmfqpwkbw#kf#tlvogbmg#`lmwjmvfgl``vsbwjlm#lejp#gfejmfg#bp`fmwqf#le#wkfwkf#bnlvmw#le=?gju#pwzof>!frvjubofmw#legjeefqfmwjbwfaqlvdkw#balvwnbqdjm.ofew9#bvwlnbwj`boozwklvdkw#le#bpPlnf#le#wkfpf\t?gju#`obpp>!jmsvw#`obpp>!qfsob`fg#tjwkjp#lmf#le#wkffgv`bwjlm#bmgjmeovfm`fg#azqfsvwbwjlm#bp\t?nfwb#mbnf>!b``lnnlgbwjlm?,gju=\t?,gju=obqdf#sbqw#leJmpwjwvwf#elqwkf#pl.`boofg#bdbjmpw#wkf#Jm#wkjp#`bpf/tbp#bssljmwfg`objnfg#wl#afKltfufq/#wkjpGfsbqwnfmw#lewkf#qfnbjmjmdfeef`w#lm#wkfsbqwj`vobqoz#gfbo#tjwk#wkf\t?gju#pwzof>!bonlpw#botbzpbqf#`vqqfmwozf{sqfppjlm#leskjolplskz#leelq#nlqf#wkbm`jujojybwjlmplm#wkf#jpobmgpfof`wfgJmgf{`bm#qfpvow#jm!#ubovf>!!#,=wkf#pwqv`wvqf#,=?,b=?,gju=Nbmz#le#wkfpf`bvpfg#az#wkfle#wkf#Vmjwfgpsbm#`obpp>!n`bm#af#wqb`fgjp#qfobwfg#wlaf`bnf#lmf#lejp#eqfrvfmwozojujmd#jm#wkfwkflqfwj`boozElooltjmd#wkfQfulovwjlmbqzdlufqmnfmw#jmjp#gfwfqnjmfgwkf#slojwj`bojmwqlgv`fg#jmpveej`jfmw#wlgfp`qjswjlm!=pklqw#pwlqjfppfsbqbwjlm#lebp#wl#tkfwkfqhmltm#elq#jwptbp#jmjwjboozgjpsobz9aol`hjp#bm#f{bnsofwkf#sqjm`jsbo`lmpjpwp#le#bqf`ldmjyfg#bp,algz=?,kwno=b#pvapwbmwjboqf`lmpwqv`wfgkfbg#le#pwbwfqfpjpwbm`f#wlvmgfqdqbgvbwfWkfqf#bqf#wtldqbujwbwjlmbobqf#gfp`qjafgjmwfmwjlmboozpfqufg#bp#wkf`obpp>!kfbgfqlsslpjwjlm#wlevmgbnfmwboozglnjmbwfg#wkfbmg#wkf#lwkfqboojbm`f#tjwktbp#elq`fg#wlqfpsf`wjufoz/bmg#slojwj`bojm#pvsslqw#lesflsof#jm#wkf13wk#`fmwvqz-bmg#svaojpkfgolbg@kbqwafbwwl#vmgfqpwbmgnfnafq#pwbwfpfmujqlmnfmwboejqpw#kboe#le`lvmwqjfp#bmgbq`kjwf`wvqboaf#`lmpjgfqfg`kbqb`wfqjyfg`ofbqJmwfqubobvwklqjwbwjufEfgfqbwjlm#letbp#pv``ffgfgbmg#wkfqf#bqfb#`lmpfrvfm`fwkf#Sqfpjgfmwbopl#jm`ovgfgeqff#plewtbqfpv``fppjlm#legfufolsfg#wkftbp#gfpwqlzfgbtbz#eqln#wkf8\t?,p`qjsw=\t?bowklvdk#wkfzelooltfg#az#bnlqf#sltfqevoqfpvowfg#jm#bVmjufqpjwz#leKltfufq/#nbmzwkf#sqfpjgfmwKltfufq/#plnfjp#wklvdkw#wlvmwjo#wkf#fmgtbp#bmmlvm`fgbqf#jnslqwbmwbopl#jm`ovgfp=?jmsvw#wzsf>wkf#`fmwfq#le#GL#MLW#BOWFQvpfg#wl#qfefqwkfnfp,<plqw>wkbw#kbg#affmwkf#abpjp#elqkbp#gfufolsfgjm#wkf#pvnnfq`lnsbqbwjufozgfp`qjafg#wkfpv`k#bp#wklpfwkf#qfpvowjmdjp#jnslppjaofubqjlvp#lwkfqPlvwk#Beqj`bmkbuf#wkf#pbnffeef`wjufmfppjm#tkj`k#`bpf8#wf{w.bojdm9pwqv`wvqf#bmg8#ab`hdqlvmg9qfdbqgjmd#wkfpvsslqwfg#wkfjp#bopl#hmltmpwzof>!nbqdjmjm`ovgjmd#wkfabkbpb#Nfobzvmlqph#alhn/Iomlqph#mzmlqphpolufm)M(ajmbjmwfqmb`jlmbo`bojej`b`j/_m`lnvmj`b`j/_m`lmpwqv``j/_m!=?gju#`obpp>!gjpbnajdvbwjlmGlnbjmMbnf$/#$bgnjmjpwqbwjlmpjnvowbmflvpozwqbmpslqwbwjlmJmwfqmbwjlmbo#nbqdjm.alwwln9qfpslmpjajojwz?\"Xfmgje^..=\t?,=?nfwb#mbnf>!jnsofnfmwbwjlmjmeqbpwqv`wvqfqfsqfpfmwbwjlmalqgfq.alwwln9?,kfbg=\t?algz=>kwws&0B&1E&1E?elqn#nfwklg>!nfwklg>!slpw!#,ebuj`lm-j`l!#~*8\t?,p`qjsw=\t-pfwBwwqjavwf+Bgnjmjpwqbwjlm>#mft#Bqqbz+*8?\"Xfmgje^..=\x0E\tgjpsobz9aol`h8Vmelqwvmbwfoz/!=%maps8?,gju=,ebuj`lm-j`l!=>$pwzofpkffw$#jgfmwjej`bwjlm/#elq#f{bnsof/?oj=?b#kqfe>!,bm#bowfqmbwjufbp#b#qfpvow#lesw!=?,p`qjsw=\twzsf>!pvanjw!#\t+evm`wjlm+*#xqf`lnnfmgbwjlmelqn#b`wjlm>!,wqbmpelqnbwjlmqf`lmpwqv`wjlm-pwzof-gjpsobz#B``lqgjmd#wl#kjggfm!#mbnf>!bolmd#tjwk#wkfgl`vnfmw-algz-bssql{jnbwfoz#@lnnvmj`bwjlmpslpw!#b`wjlm>!nfbmjmd#%rvlw8..?\"Xfmgje^..=Sqjnf#Njmjpwfq`kbqb`wfqjpwj`?,b=#?b#`obpp>wkf#kjpwlqz#le#lmnlvpflufq>!wkf#dlufqmnfmwkqfe>!kwwsp9,,tbp#lqjdjmbooztbp#jmwqlgv`fg`obppjej`bwjlmqfsqfpfmwbwjufbqf#`lmpjgfqfg?\"Xfmgje^..=\t\tgfsfmgp#lm#wkfVmjufqpjwz#le#jm#`lmwqbpw#wl#sob`fklogfq>!jm#wkf#`bpf#lejmwfqmbwjlmbo#`lmpwjwvwjlmbopwzof>!alqgfq.9#evm`wjlm+*#xAf`bvpf#le#wkf.pwqj`w-gwg!=\t?wbaof#`obpp>!b``lnsbmjfg#azb``lvmw#le#wkf?p`qjsw#pq`>!,mbwvqf#le#wkf#wkf#sflsof#jm#jm#bggjwjlm#wlp*8#ip-jg#>#jg!#tjgwk>!233&!qfdbqgjmd#wkf#Qlnbm#@bwkloj`bm#jmgfsfmgfmwelooltjmd#wkf#-dje!#tjgwk>!2wkf#elooltjmd#gjp`qjnjmbwjlmbq`kbfloldj`bosqjnf#njmjpwfq-ip!=?,p`qjsw=`lnajmbwjlm#le#nbqdjmtjgwk>!`qfbwfFofnfmw+t-bwwb`kFufmw+?,b=?,wg=?,wq=pq`>!kwwsp9,,bJm#sbqwj`vobq/#bojdm>!ofew!#@yf`k#Qfsvaoj`Vmjwfg#Hjmdgln`lqqfpslmgfm`f`lm`ovgfg#wkbw-kwno!#wjwof>!+evm`wjlm#+*#x`lnfp#eqln#wkfbssoj`bwjlm#le?psbm#`obpp>!pafojfufg#wl#affnfmw+$p`qjsw$?,b=\t?,oj=\t?ojufqz#gjeefqfmw=?psbm#`obpp>!lswjlm#ubovf>!+bopl#hmltm#bp\n?oj=?b#kqfe>!=?jmsvw#mbnf>!pfsbqbwfg#eqlnqfefqqfg#wl#bp#ubojdm>!wls!=elvmgfq#le#wkfbwwfnswjmd#wl#`bqalm#gjl{jgf\t\t?gju#`obpp>!`obpp>!pfbq`k.,algz=\t?,kwno=lsslqwvmjwz#wl`lnnvmj`bwjlmp?,kfbg=\x0E\t?algz#pwzof>!tjgwk9Wj\rVSmd#Uj\rWkw`kbmdfp#jm#wkfalqgfq.`lolq9 3!#alqgfq>!3!#?,psbm=?,gju=?tbp#gjp`lufqfg!#wzsf>!wf{w!#*8\t?,p`qjsw=\t\tGfsbqwnfmw#le#f``ofpjbpwj`bowkfqf#kbp#affmqfpvowjmd#eqln?,algz=?,kwno=kbp#mfufq#affmwkf#ejqpw#wjnfjm#qfpslmpf#wlbvwlnbwj`booz#?,gju=\t\t?gju#jtbp#`lmpjgfqfgsfq`fmw#le#wkf!#,=?,b=?,gju=`loof`wjlm#le#gfp`fmgfg#eqlnpf`wjlm#le#wkfb``fsw.`kbqpfwwl#af#`lmevpfgnfnafq#le#wkf#sbggjmd.qjdkw9wqbmpobwjlm#lejmwfqsqfwbwjlm#kqfe>$kwws9,,tkfwkfq#lq#mlwWkfqf#bqf#boplwkfqf#bqf#nbmzb#pnboo#mvnafqlwkfq#sbqwp#lejnslppjaof#wl##`obpp>!avwwlmol`bwfg#jm#wkf-#Kltfufq/#wkfbmg#fufmwvboozBw#wkf#fmg#le#af`bvpf#le#jwpqfsqfpfmwp#wkf?elqn#b`wjlm>!#nfwklg>!slpw!jw#jp#slppjaofnlqf#ojhfoz#wlbm#jm`qfbpf#jmkbuf#bopl#affm`lqqfpslmgp#wlbmmlvm`fg#wkbwbojdm>!qjdkw!=nbmz#`lvmwqjfpelq#nbmz#zfbqpfbqojfpw#hmltmaf`bvpf#jw#tbpsw!=?,p`qjsw=\x0E#ubojdm>!wls!#jmkbajwbmwp#leelooltjmd#zfbq\x0E\t?gju#`obpp>!njoojlm#sflsof`lmwqlufqpjbo#`lm`fqmjmd#wkfbqdvf#wkbw#wkfdlufqmnfmw#bmgb#qfefqfm`f#wlwqbmpefqqfg#wlgfp`qjajmd#wkf#pwzof>!`lolq9bowklvdk#wkfqfafpw#hmltm#elqpvanjw!#mbnf>!nvowjsoj`bwjlmnlqf#wkbm#lmf#qf`ldmjwjlm#le@lvm`jo#le#wkffgjwjlm#le#wkf##?nfwb#mbnf>!Fmwfqwbjmnfmw#btbz#eqln#wkf#8nbqdjm.qjdkw9bw#wkf#wjnf#lejmufpwjdbwjlmp`lmmf`wfg#tjwkbmg#nbmz#lwkfqbowklvdk#jw#jpafdjmmjmd#tjwk#?psbm#`obpp>!gfp`fmgbmwp#le?psbm#`obpp>!j#bojdm>!qjdkw!?,kfbg=\t?algz#bpsf`wp#le#wkfkbp#pjm`f#affmFvqlsfbm#Vmjlmqfnjmjp`fmw#lenlqf#gjeej`vowUj`f#Sqfpjgfmw`lnslpjwjlm#lesbppfg#wkqlvdknlqf#jnslqwbmwelmw.pjyf922s{f{sobmbwjlm#lewkf#`lm`fsw#letqjwwfm#jm#wkf\n?psbm#`obpp>!jp#lmf#le#wkf#qfpfnaobm`f#wllm#wkf#dqlvmgptkj`k#`lmwbjmpjm`ovgjmd#wkf#gfejmfg#az#wkfsvaoj`bwjlm#lenfbmp#wkbw#wkflvwpjgf#le#wkfpvsslqw#le#wkf?jmsvw#`obpp>!?psbm#`obpp>!w+Nbwk-qbmgln+*nlpw#sqlnjmfmwgfp`qjswjlm#le@lmpwbmwjmlsoftfqf#svaojpkfg?gju#`obpp>!pfbssfbqp#jm#wkf2!#kfjdkw>!2!#nlpw#jnslqwbmwtkj`k#jm`ovgfptkj`k#kbg#affmgfpwqv`wjlm#lewkf#slsvobwjlm\t\n?gju#`obpp>!slppjajojwz#leplnfwjnfp#vpfgbssfbq#wl#kbufpv``fpp#le#wkfjmwfmgfg#wl#afsqfpfmw#jm#wkfpwzof>!`ofbq9a\x0E\t?,p`qjsw=\x0E\t?tbp#elvmgfg#jmjmwfqujft#tjwk\\jg!#`lmwfmw>!`bsjwbo#le#wkf\x0E\t?ojmh#qfo>!pqfofbpf#le#wkfsljmw#lvw#wkbw{NOKwwsQfrvfpwbmg#pvapfrvfmwpf`lmg#obqdfpwufqz#jnslqwbmwpsf`jej`bwjlmppvqeb`f#le#wkfbssojfg#wl#wkfelqfjdm#sloj`z\\pfwGlnbjmMbnffpwbaojpkfg#jmjp#afojfufg#wlJm#bggjwjlm#wlnfbmjmd#le#wkfjp#mbnfg#bewfqwl#sqlwf`w#wkfjp#qfsqfpfmwfgGf`obqbwjlm#lenlqf#feej`jfmw@obppjej`bwjlmlwkfq#elqnp#lekf#qfwvqmfg#wl?psbm#`obpp>!`sfqelqnbm`f#le+evm`wjlm+*#x\x0Eje#bmg#lmoz#jeqfdjlmp#le#wkfofbgjmd#wl#wkfqfobwjlmp#tjwkVmjwfg#Mbwjlmppwzof>!kfjdkw9lwkfq#wkbm#wkfzsf!#`lmwfmw>!Bppl`jbwjlm#le\t?,kfbg=\t?algzol`bwfg#lm#wkfjp#qfefqqfg#wl+jm`ovgjmd#wkf`lm`fmwqbwjlmpwkf#jmgjujgvbobnlmd#wkf#nlpwwkbm#bmz#lwkfq,=\t?ojmh#qfo>!#qfwvqm#ebopf8wkf#svqslpf#lewkf#bajojwz#wl8`lolq9 eee~\t-\t?psbm#`obpp>!wkf#pvaif`w#legfejmjwjlmp#le=\x0E\t?ojmh#qfo>!`objn#wkbw#wkfkbuf#gfufolsfg?wbaof#tjgwk>!`fofaqbwjlm#leElooltjmd#wkf#wl#gjpwjmdvjpk?psbm#`obpp>!awbhfp#sob`f#jmvmgfq#wkf#mbnfmlwfg#wkbw#wkf=?\"Xfmgje^..=\tpwzof>!nbqdjm.jmpwfbg#le#wkfjmwqlgv`fg#wkfwkf#sql`fpp#lejm`qfbpjmd#wkfgjeefqfm`fp#jmfpwjnbwfg#wkbwfpsf`jbooz#wkf,gju=?gju#jg>!tbp#fufmwvboozwkqlvdklvw#kjpwkf#gjeefqfm`fplnfwkjmd#wkbwpsbm=?,psbm=?,pjdmjej`bmwoz#=?,p`qjsw=\x0E\t\x0E\tfmujqlmnfmwbo#wl#sqfufmw#wkfkbuf#affm#vpfgfpsf`jbooz#elqvmgfqpwbmg#wkfjp#fppfmwjbooztfqf#wkf#ejqpwjp#wkf#obqdfpwkbuf#affm#nbgf!#pq`>!kwws9,,jmwfqsqfwfg#bppf`lmg#kboe#le`qloojmd>!ml!#jp#`lnslpfg#leJJ/#Kloz#Qlnbmjp#f{sf`wfg#wlkbuf#wkfjq#ltmgfejmfg#bp#wkfwqbgjwjlmbooz#kbuf#gjeefqfmwbqf#lewfm#vpfgwl#fmpvqf#wkbwbdqffnfmw#tjwk`lmwbjmjmd#wkfbqf#eqfrvfmwozjmelqnbwjlm#lmf{bnsof#jp#wkfqfpvowjmd#jm#b?,b=?,oj=?,vo=#`obpp>!ellwfqbmg#fpsf`jboozwzsf>!avwwlm!#?,psbm=?,psbm=tkj`k#jm`ovgfg=\t?nfwb#mbnf>!`lmpjgfqfg#wkf`bqqjfg#lvw#azKltfufq/#jw#jpaf`bnf#sbqw#lejm#qfobwjlm#wlslsvobq#jm#wkfwkf#`bsjwbo#letbp#leej`jbooztkj`k#kbp#affmwkf#Kjpwlqz#lebowfqmbwjuf#wlgjeefqfmw#eqlnwl#pvsslqw#wkfpvddfpwfg#wkbwjm#wkf#sql`fpp##?gju#`obpp>!wkf#elvmgbwjlmaf`bvpf#le#kjp`lm`fqmfg#tjwkwkf#vmjufqpjwzlsslpfg#wl#wkfwkf#`lmwf{w#le?psbm#`obpp>!swf{w!#mbnf>!r!\n\n?gju#`obpp>!wkf#p`jfmwjej`qfsqfpfmwfg#aznbwkfnbwj`jbmpfof`wfg#az#wkfwkbw#kbuf#affm=?gju#`obpp>!`gju#jg>!kfbgfqjm#sbqwj`vobq/`lmufqwfg#jmwl*8\t?,p`qjsw=\t?skjolplskj`bo#pqsphlkqubwphjwj\rVSmd#Uj\rWkw<L=o=m=m<V<T<U=l=o=m=m<V<T<Ujmufpwjdb`j/_msbqwj`jsb`j/_m<V<R=n<R=l=g<Y<R<]<W<\\=m=n<T<V<R=n<R=l=g<U=k<Y<W<R<^<Y<V=m<T=m=n<Y<P=g<q<R<^<R=m=n<T<V<R=n<R=l=g=i<R<]<W<\\=m=n=`<^=l<Y<P<Y<Q<T<V<R=n<R=l<\\=c=m<Y<_<R<X<Q=c=m<V<\\=k<\\=n=`<Q<R<^<R=m=n<T<O<V=l<\\<T<Q=g<^<R<S=l<R=m=g<V<R=n<R=l<R<U=m<X<Y<W<\\=n=`<S<R<P<R=e=`=b=m=l<Y<X=m=n<^<R<]=l<\\<[<R<P=m=n<R=l<R<Q=g=o=k<\\=m=n<T<Y=n<Y=k<Y<Q<T<Y<\x7F<W<\\<^<Q<\\=c<T=m=n<R=l<T<T=m<T=m=n<Y<P<\\=l<Y=d<Y<Q<T=c<M<V<\\=k<\\=n=`<S<R=a=n<R<P=o=m<W<Y<X=o<Y=n=m<V<\\<[<\\=n=`=n<R<^<\\=l<R<^<V<R<Q<Y=k<Q<R=l<Y=d<Y<Q<T<Y<V<R=n<R=l<R<Y<R=l<_<\\<Q<R<^<V<R=n<R=l<R<P<L<Y<V<W<\\<P<\\4K5h5i5j4F4C5e5i5j4F4C5f4K4F4K5h5i5d4Z5d4U4K5h4D4]4K5i4@4K5h5i5d4K5n4U4K5h4]4_4K4J5h5i4X4K4]5o4K4F4K5h4O4U4Z4K4M4K5h4]5f4K4Z4E4K5h4F4Y5i5f5i4K5h4K4U4Z4K4M4K5h5j4F4K4J4@4K5h4O5h4U4K4D4K5h4F4_4@5f5h4K5h4O5n4_4K5i4K5h4Z4V4[4K4F4K5h5m5f4C5f5d4K5h4F4]4A5f4D4K5h4@4C5f4C4E4K5h4F4U5h5f5i4K5h4O4B4D4K4]4K5h4K5m5h4K5i4K5h4O5m5h4K5i4K5h4F4K4]5f4B4K5h4F5n5j5f4E4K5h4K5h4U4K4D4K5h4B5d4K4[4]4K5h5i4@4F5i4U4K5h4C5f5o5d4]4K5h4_5f4K4A4E4U4D4C4K5h5h5k4K5h4F4]4D5f4E4K5h4]5d4K4D4[4K5h4O4C4D5f4E4K5h4K4B4D4K4]4K5h5i4F4A4C4E4K5h4K4V4K5j5f`vqplq9sljmwfq8?,wjwof=\t?nfwb#!#kqfe>!kwws9,,!=?psbm#`obpp>!nfnafqp#le#wkf#tjmglt-ol`bwjlmufqwj`bo.bojdm9,b=#\x7F#?b#kqfe>!?\"gl`wzsf#kwno=nfgjb>!p`qffm!#?lswjlm#ubovf>!ebuj`lm-j`l!#,=\t\n\n?gju#`obpp>!`kbqb`wfqjpwj`p!#nfwklg>!dfw!#,algz=\t?,kwno=\tpklqw`vw#j`lm!#gl`vnfmw-tqjwf+sbggjmd.alwwln9qfsqfpfmwbwjufppvanjw!#ubovf>!bojdm>!`fmwfq!#wkqlvdklvw#wkf#p`jfm`f#ej`wjlm\t##?gju#`obpp>!pvanjw!#`obpp>!lmf#le#wkf#nlpw#ubojdm>!wls!=?tbp#fpwbaojpkfg*8\x0E\t?,p`qjsw=\x0E\tqfwvqm#ebopf8!=*-pwzof-gjpsobzaf`bvpf#le#wkf#gl`vnfmw-`llhjf?elqn#b`wjlm>!,~algzxnbqdjm938Fm`z`olsfgjb#leufqpjlm#le#wkf#-`qfbwfFofnfmw+mbnf!#`lmwfmw>!?,gju=\t?,gju=\t\tbgnjmjpwqbwjuf#?,algz=\t?,kwno=kjpwlqz#le#wkf#!=?jmsvw#wzsf>!slqwjlm#le#wkf#bp#sbqw#le#wkf#%maps8?b#kqfe>!lwkfq#`lvmwqjfp!=\t?gju#`obpp>!?,psbm=?,psbm=?Jm#lwkfq#tlqgp/gjpsobz9#aol`h8`lmwqlo#le#wkf#jmwqlgv`wjlm#le,=\t?nfwb#mbnf>!bp#tfoo#bp#wkf#jm#qf`fmw#zfbqp\x0E\t\n?gju#`obpp>!?,gju=\t\n?,gju=\tjmpsjqfg#az#wkfwkf#fmg#le#wkf#`lnsbwjaof#tjwkaf`bnf#hmltm#bp#pwzof>!nbqdjm9-ip!=?,p`qjsw=?#Jmwfqmbwjlmbo#wkfqf#kbuf#affmDfqnbm#obmdvbdf#pwzof>!`lolq9 @lnnvmjpw#Sbqwz`lmpjpwfmw#tjwkalqgfq>!3!#`foo#nbqdjmkfjdkw>!wkf#nbilqjwz#le!#bojdm>!`fmwfqqfobwfg#wl#wkf#nbmz#gjeefqfmw#Lqwklgl{#@kvq`kpjnjobq#wl#wkf#,=\t?ojmh#qfo>!ptbp#lmf#le#wkf#vmwjo#kjp#gfbwk~*+*8\t?,p`qjsw=lwkfq#obmdvbdfp`lnsbqfg#wl#wkfslqwjlmp#le#wkfwkf#Mfwkfqobmgpwkf#nlpw#`lnnlmab`hdqlvmg9vqo+bqdvfg#wkbw#wkfp`qloojmd>!ml!#jm`ovgfg#jm#wkfMlqwk#Bnfqj`bm#wkf#mbnf#le#wkfjmwfqsqfwbwjlmpwkf#wqbgjwjlmbogfufolsnfmw#le#eqfrvfmwoz#vpfgb#`loof`wjlm#leufqz#pjnjobq#wlpvqqlvmgjmd#wkff{bnsof#le#wkjpbojdm>!`fmwfq!=tlvog#kbuf#affmjnbdf\\`bswjlm#>bwwb`kfg#wl#wkfpvddfpwjmd#wkbwjm#wkf#elqn#le#jmuloufg#jm#wkfjp#gfqjufg#eqlnmbnfg#bewfq#wkfJmwqlgv`wjlm#wlqfpwqj`wjlmp#lm#pwzof>!tjgwk9#`bm#af#vpfg#wl#wkf#`qfbwjlm#lenlpw#jnslqwbmw#jmelqnbwjlm#bmgqfpvowfg#jm#wkf`loobspf#le#wkfWkjp#nfbmp#wkbwfofnfmwp#le#wkftbp#qfsob`fg#azbmbozpjp#le#wkfjmpsjqbwjlm#elqqfdbqgfg#bp#wkfnlpw#pv``fppevohmltm#bp#%rvlw8b#`lnsqfkfmpjufKjpwlqz#le#wkf#tfqf#`lmpjgfqfgqfwvqmfg#wl#wkfbqf#qfefqqfg#wlVmplvq`fg#jnbdf=\t\n?gju#`obpp>!`lmpjpwp#le#wkfpwlsSqlsbdbwjlmjmwfqfpw#jm#wkfbubjobajojwz#lebssfbqp#wl#kbuffof`wqlnbdmfwj`fmbaofPfquj`fp+evm`wjlm#le#wkfJw#jp#jnslqwbmw?,p`qjsw=?,gju=evm`wjlm+*xubq#qfobwjuf#wl#wkfbp#b#qfpvow#le#wkf#slpjwjlm#leElq#f{bnsof/#jm#nfwklg>!slpw!#tbp#elooltfg#az%bns8ngbpk8#wkfwkf#bssoj`bwjlmip!=?,p`qjsw=\x0E\tvo=?,gju=?,gju=bewfq#wkf#gfbwktjwk#qfpsf`w#wlpwzof>!sbggjmd9jp#sbqwj`vobqozgjpsobz9jmojmf8#wzsf>!pvanjw!#jp#gjujgfg#jmwl\bTA\nzk#+\x0BBl\bQ\x7F*qfpslmpbajojgbgbgnjmjpwqb`j/_mjmwfqmb`jlmbofp`lqqfpslmgjfmwf\fHe\fHF\fHC\fIg\fH{\fHF\fIn\fH\\\fIa\fHY\fHU\fHB\fHR\fH\\\fIk\fH^\fIg\fH{\fIg\fHn\fHv\fIm\fHD\fHR\fHY\fH^\fIk\fHy\fHS\fHD\fHT\fH\\\fHy\fHR\fH\\\fHF\fIm\fH^\fHS\fHT\fHz\fIg\fHp\fIk\fHn\fHv\fHR\fHU\fHS\fHc\fHA\fIk\fHp\fIk\fHn\fHZ\fHR\fHB\fHS\fH^\fHU\fHB\fHR\fH\\\fIl\fHp\fHR\fH{\fH\\\fHO\fH@\fHD\fHR\fHD\fIk\fHy\fIm\fHB\fHR\fH\\\fH@\fIa\fH^\fIe\fH{\fHB\fHR\fH^\fHS\fHy\fHB\fHU\fHS\fH^\fHR\fHF\fIo\fH[\fIa\fHL\fH@\fHN\fHP\fHH\fIk\fHA\fHR\fHp\fHF\fHR\fHy\fIa\fH^\fHS\fHy\fHs\fIa\fH\\\fIk\fHD\fHz\fHS\fH^\fHR\fHG\fHJ\fI`\fH\\\fHR\fHD\fHB\fHR\fHB\fH^\fIk\fHB\fHH\fHJ\fHR\fHD\fH@\fHR\fHp\fHR\fH\\\fHY\fHS\fHy\fHR\fHT\fHy\fIa\fHC\fIg\fHn\fHv\fHR\fHU\fHH\fIk\fHF\fHU\fIm\fHm\fHv\fH@\fHH\fHR\fHC\fHR\fHT\fHn\fHY\fHR\fHJ\fHJ\fIk\fHz\fHD\fIk\fHF\fHS\fHw\fH^\fIk\fHY\fHS\fHZ\fIk\fH[\fH\\\fHR\fHp\fIa\fHC\fHe\fHH\fIa\fHH\fH\\\fHB\fIm\fHn\fH@\fHd\fHJ\fIg\fHD\fIg\fHn\fHe\fHF\fHy\fH\\\fHO\fHF\fHN\fHP\fIk\fHn\fHT\fIa\fHI\fHS\fHH\fHG\fHS\fH^\fIa\fHB\fHB\fIm\fHz\fIa\fHC\fHi\fHv\fIa\fHw\fHR\fHw\fIn\fHs\fHH\fIl\fHT\fHn\fH{\fIl\fHH\fHp\fHR\fHc\fH{\fHR\fHY\fHS\fHA\fHR\fH{\fHt\fHO\fIa\fHs\fIk\fHJ\fIn\fHT\fH\\\fIk\fHJ\fHS\fHD\fIg\fHn\fHU\fHH\fIa\fHC\fHR\fHT\fIk\fHy\fIa\fHT\fH{\fHR\fHn\fHK\fIl\fHY\fHS\fHZ\fIa\fHY\fH\\\fHR\fHH\fIk\fHn\fHJ\fId\fHs\fIa\fHT\fHD\fHy\fIa\fHZ\fHR\fHT\fHR\fHB\fHD\fIk\fHi\fHJ\fHR\fH^\fHH\fH@\fHS\fHp\fH^\fIl\fHF\fIm\fH\\\fIn\fH[\fHU\fHS\fHn\fHJ\fIl\fHB\fHS\fHH\fIa\fH\\\fHy\fHY\fHS\fHH\fHR\fH\\\fIm\fHF\fHC\fIk\fHT\fIa\fHI\fHR\fHD\fHy\fH\\\fIg\fHM\fHP\fHB\fIm\fHy\fIa\fHH\fHC\fIg\fHp\fHD\fHR\fHy\fIo\fHF\fHC\fHR\fHF\fIg\fHT\fIa\fHs\fHt\fH\\\fIk\fH^\fIn\fHy\fHR\fH\\\fIa\fHC\fHY\fHS\fHv\fHR\fH\\\fHT\fIn\fHv\fHD\fHR\fHB\fIn\fH^\fIa\fHC\fHJ\fIk\fHz\fIk\fHn\fHU\fHB\fIk\fHZ\fHR\fHT\fIa\fHy\fIn\fH^\fHB\fId\fHn\fHD\fIk\fHH\fId\fHC\fHR\fH\\\fHp\fHS\fHT\fHy\fIkqpp({no!#wjwof>!.wzsf!#`lmwfmw>!wjwof!#`lmwfmw>!bw#wkf#pbnf#wjnf-ip!=?,p`qjsw=\t?!#nfwklg>!slpw!#?,psbm=?,b=?,oj=ufqwj`bo.bojdm9w,irvfqz-njm-ip!=-`oj`h+evm`wjlm+#pwzof>!sbggjmd.~*+*8\t?,p`qjsw=\t?,psbm=?b#kqfe>!?b#kqfe>!kwws9,,*8#qfwvqm#ebopf8wf{w.gf`lqbwjlm9#p`qloojmd>!ml!#alqgfq.`loobspf9bppl`jbwfg#tjwk#Abkbpb#JmglmfpjbFmdojpk#obmdvbdf?wf{w#{no9psb`f>-dje!#alqgfq>!3!?,algz=\t?,kwno=\tlufqeolt9kjggfm8jnd#pq`>!kwws9,,bggFufmwOjpwfmfqqfpslmpjaof#elq#p-ip!=?,p`qjsw=\t,ebuj`lm-j`l!#,=lsfqbwjmd#pzpwfn!#pwzof>!tjgwk92wbqdfw>!\\aobmh!=Pwbwf#Vmjufqpjwzwf{w.bojdm9ofew8\tgl`vnfmw-tqjwf+/#jm`ovgjmd#wkf#bqlvmg#wkf#tlqog*8\x0E\t?,p`qjsw=\x0E\t?!#pwzof>!kfjdkw98lufqeolt9kjggfmnlqf#jmelqnbwjlmbm#jmwfqmbwjlmbob#nfnafq#le#wkf#lmf#le#wkf#ejqpw`bm#af#elvmg#jm#?,gju=\t\n\n?,gju=\tgjpsobz9#mlmf8!=!#,=\t?ojmh#qfo>!\t##+evm`wjlm+*#xwkf#26wk#`fmwvqz-sqfufmwGfebvow+obqdf#mvnafq#le#Azybmwjmf#Fnsjqf-isd\x7Fwkvna\x7Fofew\x7Fubpw#nbilqjwz#lenbilqjwz#le#wkf##bojdm>!`fmwfq!=Vmjufqpjwz#Sqfppglnjmbwfg#az#wkfPf`lmg#Tlqog#Tbqgjpwqjavwjlm#le#pwzof>!slpjwjlm9wkf#qfpw#le#wkf#`kbqb`wfqjyfg#az#qfo>!mleloolt!=gfqjufp#eqln#wkfqbwkfq#wkbm#wkf#b#`lnajmbwjlm#lepwzof>!tjgwk9233Fmdojpk.psfbhjmd`lnsvwfq#p`jfm`falqgfq>!3!#bow>!wkf#f{jpwfm`f#leGfnl`qbwj`#Sbqwz!#pwzof>!nbqdjm.Elq#wkjp#qfbplm/-ip!=?,p`qjsw=\t\npAzWbdMbnf+p*X3^ip!=?,p`qjsw=\x0E\t?-ip!=?,p`qjsw=\x0E\tojmh#qfo>!j`lm!#$#bow>$$#`obpp>$elqnbwjlm#le#wkfufqpjlmp#le#wkf#?,b=?,gju=?,gju=,sbdf=\t##?sbdf=\t?gju#`obpp>!`lmwaf`bnf#wkf#ejqpwabkbpb#Jmglmfpjbfmdojpk#+pjnsof*\"y\"W\"W\"[\"Q\"U\"V\"@=i=l<^<\\=n=m<V<T<V<R<P<S<\\<Q<T<T=c<^<W=c<Y=n=m=c<x<R<]<\\<^<T=n=`=k<Y<W<R<^<Y<V<\\=l<\\<[<^<T=n<T=c<t<Q=n<Y=l<Q<Y=n<r=n<^<Y=n<T=n=`<Q<\\<S=l<T<P<Y=l<T<Q=n<Y=l<Q<Y=n<V<R=n<R=l<R<_<R=m=n=l<\\<Q<T=j=g<V<\\=k<Y=m=n<^<Y=o=m<W<R<^<T=c=i<S=l<R<]<W<Y<P=g<S<R<W=o=k<T=n=`=c<^<W=c=b=n=m=c<Q<\\<T<]<R<W<Y<Y<V<R<P<S<\\<Q<T=c<^<Q<T<P<\\<Q<T<Y=m=l<Y<X=m=n<^<\\4K5h5i5d4K4Z5f4U4K5h4]4J5f4_5f4E4K5h4K5j4F5n4K5h5i4X4K4]5o4K4F5o4K5h4_5f4K4]4K4F4K5h5i5o4F5d4D4E4K5h4_4U5d4C5f4E4K4A4Y4K4J5f4K4F4K5h4U4K5h5i5f4E4K5h4Y5d4F5f4K4F4K5h4K5j4F4]5j4F4K5h4F4Y4K5i5f5i4K5h4I4_5h4K5i5f4K5h5i4X4K4]5o4E4K5h5i4]4J5f4K4Fqlalwp!#`lmwfmw>!?gju#jg>!ellwfq!=wkf#Vmjwfg#Pwbwfp?jnd#pq`>!kwws9,,-isd\x7Fqjdkw\x7Fwkvna\x7F-ip!=?,p`qjsw=\x0E\t?ol`bwjlm-sqlwl`loeqbnfalqgfq>!3!#p!#,=\t?nfwb#mbnf>!?,b=?,gju=?,gju=?elmw.tfjdkw9alog8%rvlw8#bmg#%rvlw8gfsfmgjmd#lm#wkf#nbqdjm938sbggjmd9!#qfo>!mleloolt!#Sqfpjgfmw#le#wkf#wtfmwjfwk#`fmwvqzfujpjlm=\t##?,sbdfJmwfqmfw#F{solqfqb-bpzm`#>#wqvf8\x0E\tjmelqnbwjlm#balvw?gju#jg>!kfbgfq!=!#b`wjlm>!kwws9,,?b#kqfe>!kwwsp9,,?gju#jg>!`lmwfmw!?,gju=\x0E\t?,gju=\x0E\t?gfqjufg#eqln#wkf#?jnd#pq`>$kwws9,,b``lqgjmd#wl#wkf#\t?,algz=\t?,kwno=\tpwzof>!elmw.pjyf9p`qjsw#obmdvbdf>!Bqjbo/#Kfoufwj`b/?,b=?psbm#`obpp>!?,p`qjsw=?p`qjsw#slojwj`bo#sbqwjfpwg=?,wq=?,wbaof=?kqfe>!kwws9,,ttt-jmwfqsqfwbwjlm#leqfo>!pwzofpkffw!#gl`vnfmw-tqjwf+$?`kbqpfw>!vwe.;!=\tafdjmmjmd#le#wkf#qfufbofg#wkbw#wkfwfofujpjlm#pfqjfp!#qfo>!mleloolt!=#wbqdfw>!\\aobmh!=`objnjmd#wkbw#wkfkwws&0B&1E&1Ettt-nbmjefpwbwjlmp#leSqjnf#Njmjpwfq#lejmeovfm`fg#az#wkf`obpp>!`ofbqej{!=,gju=\x0E\t?,gju=\x0E\t\x0E\twkqff.gjnfmpjlmbo@kvq`k#le#Fmdobmgle#Mlqwk#@bqlojmbprvbqf#hjolnfwqfp-bggFufmwOjpwfmfqgjpwjm`w#eqln#wkf`lnnlmoz#hmltm#bpSklmfwj`#Boskbafwgf`obqfg#wkbw#wkf`lmwqloofg#az#wkfAfmibnjm#Eqbmhojmqlof.sobzjmd#dbnfwkf#Vmjufqpjwz#lejm#Tfpwfqm#Fvqlsfsfqplmbo#`lnsvwfqSqlif`w#Dvwfmafqdqfdbqgofpp#le#wkfkbp#affm#sqlslpfgwldfwkfq#tjwk#wkf=?,oj=?oj#`obpp>!jm#plnf#`lvmwqjfpnjm-ip!=?,p`qjsw=le#wkf#slsvobwjlmleej`jbo#obmdvbdf?jnd#pq`>!jnbdfp,jgfmwjejfg#az#wkfmbwvqbo#qfplvq`fp`obppjej`bwjlm#le`bm#af#`lmpjgfqfgrvbmwvn#nf`kbmj`pMfufqwkfofpp/#wkfnjoojlm#zfbqp#bdl?,algz=\x0E\t?,kwno=\x0E\"y\"W\"W\"[\"Q\"U\"V\"@\twbhf#bgubmwbdf#lebmg/#b``lqgjmd#wlbwwqjavwfg#wl#wkfNj`qlplew#Tjmgltpwkf#ejqpw#`fmwvqzvmgfq#wkf#`lmwqlogju#`obpp>!kfbgfqpklqwoz#bewfq#wkfmlwbaof#f{`fswjlmwfmp#le#wklvpbmgppfufqbo#gjeefqfmwbqlvmg#wkf#tlqog-qfb`kjmd#njojwbqzjplobwfg#eqln#wkflsslpjwjlm#wl#wkfwkf#Log#WfpwbnfmwBeqj`bm#Bnfqj`bmpjmpfqwfg#jmwl#wkfpfsbqbwf#eqln#wkfnfwqlslojwbm#bqfbnbhfp#jw#slppjaofb`hmltofgdfg#wkbwbqdvbaoz#wkf#nlpwwzsf>!wf{w,`pp!=\twkf#JmwfqmbwjlmboB``lqgjmd#wl#wkf#sf>!wf{w,`pp!#,=\t`ljm`jgf#tjwk#wkfwtl.wkjqgp#le#wkfGvqjmd#wkjp#wjnf/gvqjmd#wkf#sfqjlgbmmlvm`fg#wkbw#kfwkf#jmwfqmbwjlmbobmg#nlqf#qf`fmwozafojfufg#wkbw#wkf`lmp`jlvpmfpp#bmgelqnfqoz#hmltm#bppvqqlvmgfg#az#wkfejqpw#bssfbqfg#jml``bpjlmbooz#vpfgslpjwjlm9baplovwf8!#wbqdfw>!\\aobmh!#slpjwjlm9qfobwjuf8wf{w.bojdm9`fmwfq8ib{,ojap,irvfqz,2-ab`hdqlvmg.`lolq9 wzsf>!bssoj`bwjlm,bmdvbdf!#`lmwfmw>!?nfwb#kwws.frvju>!Sqjub`z#Sloj`z?,b=f+!&0@p`qjsw#pq`>$!#wbqdfw>!\\aobmh!=Lm#wkf#lwkfq#kbmg/-isd\x7Fwkvna\x7Fqjdkw\x7F1?,gju=?gju#`obpp>!?gju#pwzof>!eolbw9mjmfwffmwk#`fmwvqz?,algz=\x0E\t?,kwno=\x0E\t?jnd#pq`>!kwws9,,p8wf{w.bojdm9`fmwfqelmw.tfjdkw9#alog8#B``lqgjmd#wl#wkf#gjeefqfm`f#afwtffm!#eqbnfalqgfq>!3!#!#pwzof>!slpjwjlm9ojmh#kqfe>!kwws9,,kwno7,ollpf-gwg!=\tgvqjmd#wkjp#sfqjlg?,wg=?,wq=?,wbaof=`olpfoz#qfobwfg#wlelq#wkf#ejqpw#wjnf8elmw.tfjdkw9alog8jmsvw#wzsf>!wf{w!#?psbm#pwzof>!elmw.lmqfbgzpwbwf`kbmdf\n?gju#`obpp>!`ofbqgl`vnfmw-ol`bwjlm-#Elq#f{bnsof/#wkf#b#tjgf#ubqjfwz#le#?\"GL@WZSF#kwno=\x0E\t?%maps8%maps8%maps8!=?b#kqfe>!kwws9,,pwzof>!eolbw9ofew8`lm`fqmfg#tjwk#wkf>kwws&0B&1E&1Ettt-jm#slsvobq#`vowvqfwzsf>!wf{w,`pp!#,=jw#jp#slppjaof#wl#Kbqubqg#Vmjufqpjwzwzofpkffw!#kqfe>!,wkf#nbjm#`kbqb`wfqL{elqg#Vmjufqpjwz##mbnf>!hfztlqgp!#`pwzof>!wf{w.bojdm9wkf#Vmjwfg#Hjmdglnefgfqbo#dlufqmnfmw?gju#pwzof>!nbqdjm#gfsfmgjmd#lm#wkf#gfp`qjswjlm#le#wkf?gju#`obpp>!kfbgfq-njm-ip!=?,p`qjsw=gfpwqv`wjlm#le#wkfpojdkwoz#gjeefqfmwjm#b``lqgbm`f#tjwkwfof`lnnvmj`bwjlmpjmgj`bwfp#wkbw#wkfpklqwoz#wkfqfbewfqfpsf`jbooz#jm#wkf#Fvqlsfbm#`lvmwqjfpKltfufq/#wkfqf#bqfpq`>!kwws9,,pwbwj`pvddfpwfg#wkbw#wkf!#pq`>!kwws9,,ttt-b#obqdf#mvnafq#le#Wfof`lnnvmj`bwjlmp!#qfo>!mleloolt!#wKloz#Qlnbm#Fnsfqlqbonlpw#f{`ovpjufoz!#alqgfq>!3!#bow>!Pf`qfwbqz#le#Pwbwf`vonjmbwjmd#jm#wkf@JB#Tlqog#Eb`wallhwkf#nlpw#jnslqwbmwbmmjufqpbqz#le#wkfpwzof>!ab`hdqlvmg.?oj=?fn=?b#kqfe>!,wkf#Bwobmwj`#L`fbmpwqj`woz#psfbhjmd/pklqwoz#afelqf#wkfgjeefqfmw#wzsfp#lewkf#Lwwlnbm#Fnsjqf=?jnd#pq`>!kwws9,,Bm#Jmwqlgv`wjlm#wl`lmpfrvfm`f#le#wkfgfsbqwvqf#eqln#wkf@lmefgfqbwf#Pwbwfpjmgjdfmlvp#sflsofpSql`ffgjmdp#le#wkfjmelqnbwjlm#lm#wkfwkflqjfp#kbuf#affmjmuloufnfmw#jm#wkfgjujgfg#jmwl#wkqffbgib`fmw#`lvmwqjfpjp#qfpslmpjaof#elqgjpplovwjlm#le#wkf`loobalqbwjlm#tjwktjgfoz#qfdbqgfg#bpkjp#`lmwfnslqbqjfpelvmgjmd#nfnafq#leGlnjmj`bm#Qfsvaoj`dfmfqbooz#b``fswfgwkf#slppjajojwz#lebqf#bopl#bubjobaofvmgfq#`lmpwqv`wjlmqfpwlqbwjlm#le#wkfwkf#dfmfqbo#svaoj`jp#bonlpw#fmwjqfozsbppfp#wkqlvdk#wkfkbp#affm#pvddfpwfg`lnsvwfq#bmg#ujgflDfqnbmj`#obmdvbdfp#b``lqgjmd#wl#wkf#gjeefqfmw#eqln#wkfpklqwoz#bewfqtbqgpkqfe>!kwwsp9,,ttt-qf`fmw#gfufolsnfmwAlbqg#le#Gjqf`wlqp?gju#`obpp>!pfbq`k\x7F#?b#kqfe>!kwws9,,Jm#sbqwj`vobq/#wkfNvowjsof#ellwmlwfplq#lwkfq#pvapwbm`fwklvpbmgp#le#zfbqpwqbmpobwjlm#le#wkf?,gju=\x0E\t?,gju=\x0E\t\x0E\t?b#kqfe>!jmgf{-skstbp#fpwbaojpkfg#jmnjm-ip!=?,p`qjsw=\tsbqwj`jsbwf#jm#wkfb#pwqlmd#jmeovfm`fpwzof>!nbqdjm.wls9qfsqfpfmwfg#az#wkfdqbgvbwfg#eqln#wkfWqbgjwjlmbooz/#wkfFofnfmw+!p`qjsw!*8Kltfufq/#pjm`f#wkf,gju=\t?,gju=\t?gju#ofew8#nbqdjm.ofew9sqlwf`wjlm#bdbjmpw38#ufqwj`bo.bojdm9Vmelqwvmbwfoz/#wkfwzsf>!jnbdf,{.j`lm,gju=\t?gju#`obpp>!#`obpp>!`ofbqej{!=?gju#`obpp>!ellwfq\n\n?,gju=\t\n\n?,gju=\twkf#nlwjlm#sj`wvqf<}=f<W<_<\\=l=m<V<T<]=f<W<_<\\=l=m<V<T<H<Y<X<Y=l<\\=j<T<T<Q<Y=m<V<R<W=`<V<R=m<R<R<]=e<Y<Q<T<Y=m<R<R<]=e<Y<Q<T=c<S=l<R<_=l<\\<P<P=g<r=n<S=l<\\<^<T=n=`<]<Y=m<S<W<\\=n<Q<R<P<\\=n<Y=l<T<\\<W=g<S<R<[<^<R<W=c<Y=n<S<R=m<W<Y<X<Q<T<Y=l<\\<[<W<T=k<Q=g=i<S=l<R<X=o<V=j<T<T<S=l<R<_=l<\\<P<P<\\<S<R<W<Q<R=m=n=`=b<Q<\\=i<R<X<T=n=m=c<T<[<]=l<\\<Q<Q<R<Y<Q<\\=m<Y<W<Y<Q<T=c<T<[<P<Y<Q<Y<Q<T=c<V<\\=n<Y<_<R=l<T<T<|<W<Y<V=m<\\<Q<X=l\fHJ\fIa\fHY\fHR\fH\\\fHR\fHB\fId\fHD\fIm\fHi\fH^\fHF\fIa\fH\\\fHJ\fHR\fHD\fHA\fHR\fH\\\fHH\fIl\fHC\fHi\fHD\fIm\fHJ\fIk\fHZ\fHU\fHS\fHD\fIa\fHJ\fIl\fHk\fHn\fHM\fHS\fHC\fHR\fHJ\fHS\fH^\fIa\fH^\fIl\fHi\fHK\fHS\fHy\fHR\fH\\\fHY\fIl\fHM\fHS\fHC\fIg\fHv\fHS\fHs\fIa\fHL\fIk\fHT\fHB\fHR\fHv\fHR\fH\\\fHp\fHn\fHy\fIa\fHZ\fHD\fHJ\fIm\fHD\fHS\fHC\fHR\fHF\fIa\fH\\\fHC\fIg\fH{\fHi\fHD\fIm\fHT\fHR\fH\\\fH}\fHD\fH^\fHR\fHk\fHD\fHF\fHR\fH\\\fIa\fHs\fIl\fHZ\fH\\\fIa\fHH\fIg\fHn\fH^\fIg\fHy\fHT\fHA\fHR\fHG\fHP\fIa\fH^\fId\fHZ\fHZ\fH\\\fIa\fHH\fIk\fHn\fHF\fIa\fH\\\fHJ\fIk\fHZ\fHF\fIa\fH^\fIk\fHC\fH\\\fHy\fIk\fHn\fHJ\fIa\fH\\\fHT\fIa\fHI\fHS\fHH\fHS\fHe\fHH\fIa\fHF\fHR\fHJ\fHe\fHD\fIa\fHU\fIk\fHn\fHv\fHS\fHs\fIa\fHL\fHR\fHC\fHR\fHH\fIa\fH\\\fHR\fHp\fIa\fHC\fHR\fHJ\fHR\fHF\fIm\fH\\\fHR\fHD\fIk\fHp\fIg\fHM\fHP\fIk\fHn\fHi\fHD\fIm\fHY\fHR\fHJ\fHZ\fIa\fH\\\fIk\fHO\fIl\fHZ\fHS\fHy\fIa\fH[\fHR\fHT\fH\\\fHy\fHR\fH\\\fIl\fHT\fHn\fH{\fIa\fH\\\fHU\fHF\fH\\\fHS\fHO\fHR\fHB\fH@\fIa\fH\\\fHR\fHn\fHM\fH@\fHv\fIa\fHv\fIg\fHn\fHe\fHF\fH^\fH@\fIa\fHK\fHB\fHn\fHH\fIa\fH\\\fIl\fHT\fHn\fHF\fH\\\fIa\fHy\fHe\fHB\fIa\fHB\fIl\fHJ\fHB\fHR\fHK\fIa\fHC\fHB\fHT\fHU\fHR\fHC\fHH\fHR\fHZ\fH@\fIa\fHJ\fIg\fHn\fHB\fIl\fHM\fHS\fHC\fHR\fHj\fHd\fHF\fIl\fHc\fH^\fHB\fIg\fH@\fHR\fHk\fH^\fHT\fHn\fHz\fIa\fHC\fHR\fHj\fHF\fH\\\fIk\fHZ\fHD\fHi\fHD\fIm\fH@\fHn\fHK\fH@\fHR\fHp\fHP\fHR\fH\\\fHD\fHY\fIl\fHD\fHH\fHB\fHF\fIa\fH\\\fHB\fIm\fHz\fHF\fIa\fH\\\fHZ\fIa\fHD\fHF\fH\\\fHS\fHY\fHR\fH\\\fHD\fIm\fHy\fHT\fHR\fHD\fHT\fHB\fH\\\fIa\fHI\fHD\fHj\fHC\fIg\fHp\fHS\fHH\fHT\fIg\fHB\fHY\fHR\fH\\4K5h5i4X4K4]5o4K4F4K5h5i5j4F4C5f4K4F4K5h5o5i4D5f5d4F4]4K5h5i4X4K5k4C4K4F4U4C4C4K5h4^5d4K4]4U4C4C4K5h4]4C5d4C4K5h4I4_5h4K5i5f4E4K5h5m5d4F5d4X5d4D4K5h5i4_4K4D5n4K4F4K5h5i4U5h5d5i4K4F4K5h5i4_5h4_5h4K4F4K5h4@4]4K5m5f5o4_4K5h4K4_5h4K5i5f4E4K5h4K4F4Y4K5h4K4Fhfztlqgp!#`lmwfmw>!t0-lqd,2:::,{kwno!=?b#wbqdfw>!\\aobmh!#wf{w,kwno8#`kbqpfw>!#wbqdfw>!\\aobmh!=?wbaof#`foosbggjmd>!bvwl`lnsofwf>!lee!#wf{w.bojdm9#`fmwfq8wl#obpw#ufqpjlm#az#ab`hdqlvmg.`lolq9# !#kqfe>!kwws9,,ttt-,gju=?,gju=?gju#jg>?b#kqfe>! !#`obpp>!!=?jnd#pq`>!kwws9,,`qjsw!#pq`>!kwws9,,\t?p`qjsw#obmdvbdf>!,,FM!#!kwws9,,ttt-tfm`lgfVQJ@lnslmfmw+!#kqfe>!ibubp`qjsw9?gju#`obpp>!`lmwfmwgl`vnfmw-tqjwf+$?p`slpjwjlm9#baplovwf8p`qjsw#pq`>!kwws9,,#pwzof>!nbqdjm.wls9-njm-ip!=?,p`qjsw=\t?,gju=\t?gju#`obpp>!t0-lqd,2:::,{kwno!#\t\x0E\t?,algz=\x0E\t?,kwno=gjpwjm`wjlm#afwtffm,!#wbqdfw>!\\aobmh!=?ojmh#kqfe>!kwws9,,fm`lgjmd>!vwe.;!<=\tt-bggFufmwOjpwfmfq<b`wjlm>!kwws9,,ttt-j`lm!#kqfe>!kwws9,,#pwzof>!ab`hdqlvmg9wzsf>!wf{w,`pp!#,=\tnfwb#sqlsfqwz>!ld9w?jmsvw#wzsf>!wf{w!##pwzof>!wf{w.bojdm9wkf#gfufolsnfmw#le#wzofpkffw!#wzsf>!wfkwno8#`kbqpfw>vwe.;jp#`lmpjgfqfg#wl#afwbaof#tjgwk>!233&!#Jm#bggjwjlm#wl#wkf#`lmwqjavwfg#wl#wkf#gjeefqfm`fp#afwtffmgfufolsnfmw#le#wkf#Jw#jp#jnslqwbmw#wl#?,p`qjsw=\t\t?p`qjsw##pwzof>!elmw.pjyf92=?,psbm=?psbm#jg>daOjaqbqz#le#@lmdqfpp?jnd#pq`>!kwws9,,jnFmdojpk#wqbmpobwjlmB`bgfnz#le#P`jfm`fpgju#pwzof>!gjpsobz9`lmpwqv`wjlm#le#wkf-dfwFofnfmwAzJg+jg*jm#`lmivm`wjlm#tjwkFofnfmw+$p`qjsw$*8#?nfwb#sqlsfqwz>!ld9<}=f<W<_<\\=l=m<V<T\t#wzsf>!wf{w!#mbnf>!=Sqjub`z#Sloj`z?,b=bgnjmjpwfqfg#az#wkffmbaofPjmdofQfrvfpwpwzof>%rvlw8nbqdjm9?,gju=?,gju=?,gju=?=?jnd#pq`>!kwws9,,j#pwzof>%rvlw8eolbw9qfefqqfg#wl#bp#wkf#wlwbo#slsvobwjlm#lejm#Tbpkjmdwlm/#G-@-#pwzof>!ab`hdqlvmg.bnlmd#lwkfq#wkjmdp/lqdbmjybwjlm#le#wkfsbqwj`jsbwfg#jm#wkfwkf#jmwqlgv`wjlm#lejgfmwjejfg#tjwk#wkfej`wjlmbo#`kbqb`wfq#L{elqg#Vmjufqpjwz#njpvmgfqpwbmgjmd#leWkfqf#bqf/#kltfufq/pwzofpkffw!#kqfe>!,@lovnajb#Vmjufqpjwzf{sbmgfg#wl#jm`ovgfvpvbooz#qfefqqfg#wljmgj`bwjmd#wkbw#wkfkbuf#pvddfpwfg#wkbwbeejojbwfg#tjwk#wkf`lqqfobwjlm#afwtffmmvnafq#le#gjeefqfmw=?,wg=?,wq=?,wbaof=Qfsvaoj`#le#Jqfobmg\t?,p`qjsw=\t?p`qjsw#vmgfq#wkf#jmeovfm`f`lmwqjavwjlm#wl#wkfLeej`jbo#tfapjwf#lekfbgrvbqwfqp#le#wkf`fmwfqfg#bqlvmg#wkfjnsoj`bwjlmp#le#wkfkbuf#affm#gfufolsfgEfgfqbo#Qfsvaoj`#leaf`bnf#jm`qfbpjmdoz`lmwjmvbwjlm#le#wkfMlwf/#kltfufq/#wkbwpjnjobq#wl#wkbw#le#`bsbajojwjfp#le#wkfb``lqgbm`f#tjwk#wkfsbqwj`jsbmwp#jm#wkfevqwkfq#gfufolsnfmwvmgfq#wkf#gjqf`wjlmjp#lewfm#`lmpjgfqfgkjp#zlvmdfq#aqlwkfq?,wg=?,wq=?,wbaof=?b#kwws.frvju>![.VB.skzpj`bo#sqlsfqwjfple#Aqjwjpk#@lovnajbkbp#affm#`qjwj`jyfg+tjwk#wkf#f{`fswjlmrvfpwjlmp#balvw#wkfsbppjmd#wkqlvdk#wkf3!#`foosbggjmd>!3!#wklvpbmgp#le#sflsofqfgjqf`wp#kfqf-#Elqkbuf#`kjogqfm#vmgfq&0F&0@,p`qjsw&0F!**8?b#kqfe>!kwws9,,ttt-?oj=?b#kqfe>!kwws9,,pjwf\\mbnf!#`lmwfmw>!wf{w.gf`lqbwjlm9mlmfpwzof>!gjpsobz9#mlmf?nfwb#kwws.frvju>![.mft#Gbwf+*-dfwWjnf+*#wzsf>!jnbdf,{.j`lm!?,psbm=?psbm#`obpp>!obmdvbdf>!ibubp`qjswtjmglt-ol`bwjlm-kqfe?b#kqfe>!ibubp`qjsw9..=\x0E\t?p`qjsw#wzsf>!w?b#kqfe>$kwws9,,ttt-klqw`vw#j`lm!#kqfe>!?,gju=\x0E\t?gju#`obpp>!?p`qjsw#pq`>!kwws9,,!#qfo>!pwzofpkffw!#w?,gju=\t?p`qjsw#wzsf>,b=#?b#kqfe>!kwws9,,#booltWqbmpsbqfm`z>![.VB.@lnsbwjaof!#`lmqfobwjlmpkjs#afwtffm\t?,p`qjsw=\x0E\t?p`qjsw#?,b=?,oj=?,vo=?,gju=bppl`jbwfg#tjwk#wkf#sqldqbnnjmd#obmdvbdf?,b=?b#kqfe>!kwws9,,?,b=?,oj=?oj#`obpp>!elqn#b`wjlm>!kwws9,,?gju#pwzof>!gjpsobz9wzsf>!wf{w!#mbnf>!r!?wbaof#tjgwk>!233&!#ab`hdqlvmg.slpjwjlm9!#alqgfq>!3!#tjgwk>!qfo>!pklqw`vw#j`lm!#k5=?vo=?oj=?b#kqfe>!##?nfwb#kwws.frvju>!`pp!#nfgjb>!p`qffm!#qfpslmpjaof#elq#wkf#!#wzsf>!bssoj`bwjlm,!#pwzof>!ab`hdqlvmg.kwno8#`kbqpfw>vwe.;!#booltwqbmpsbqfm`z>!pwzofpkffw!#wzsf>!wf\x0E\t?nfwb#kwws.frvju>!=?,psbm=?psbm#`obpp>!3!#`foopsb`jmd>!3!=8\t?,p`qjsw=\t?p`qjsw#plnfwjnfp#`boofg#wkfglfp#mlw#mf`fppbqjozElq#nlqf#jmelqnbwjlmbw#wkf#afdjmmjmd#le#?\"GL@WZSF#kwno=?kwnosbqwj`vobqoz#jm#wkf#wzsf>!kjggfm!#mbnf>!ibubp`qjsw9uljg+3*8!feef`wjufmfpp#le#wkf#bvwl`lnsofwf>!lee!#dfmfqbooz#`lmpjgfqfg=?jmsvw#wzsf>!wf{w!#!=?,p`qjsw=\x0E\t?p`qjswwkqlvdklvw#wkf#tlqog`lnnlm#njp`lm`fswjlmbppl`jbwjlm#tjwk#wkf?,gju=\t?,gju=\t?gju#`gvqjmd#kjp#ojefwjnf/`lqqfpslmgjmd#wl#wkfwzsf>!jnbdf,{.j`lm!#bm#jm`qfbpjmd#mvnafqgjsolnbwj`#qfobwjlmpbqf#lewfm#`lmpjgfqfgnfwb#`kbqpfw>!vwe.;!#?jmsvw#wzsf>!wf{w!#f{bnsofp#jm`ovgf#wkf!=?jnd#pq`>!kwws9,,jsbqwj`jsbwjlm#jm#wkfwkf#fpwbaojpknfmw#le\t?,gju=\t?gju#`obpp>!%bns8maps8%bns8maps8wl#gfwfqnjmf#tkfwkfqrvjwf#gjeefqfmw#eqlnnbqhfg#wkf#afdjmmjmdgjpwbm`f#afwtffm#wkf`lmwqjavwjlmp#wl#wkf`lmeoj`w#afwtffm#wkftjgfoz#`lmpjgfqfg#wltbp#lmf#le#wkf#ejqpwtjwk#ubqzjmd#gfdqffpkbuf#psf`vobwfg#wkbw+gl`vnfmw-dfwFofnfmwsbqwj`jsbwjmd#jm#wkflqjdjmbooz#gfufolsfgfwb#`kbqpfw>!vwe.;!=#wzsf>!wf{w,`pp!#,=\tjmwfq`kbmdfbaoz#tjwknlqf#`olpfoz#qfobwfgpl`jbo#bmg#slojwj`bowkbw#tlvog#lwkfqtjpfsfqsfmgj`vobq#wl#wkfpwzof#wzsf>!wf{w,`ppwzsf>!pvanjw!#mbnf>!ebnjojfp#qfpjgjmd#jmgfufolsjmd#`lvmwqjfp`lnsvwfq#sqldqbnnjmdf`lmlnj`#gfufolsnfmwgfwfqnjmbwjlm#le#wkfelq#nlqf#jmelqnbwjlmlm#pfufqbo#l``bpjlmpslqwvdv/Fp#+Fvqlsfv*<O<V=l<\\={<Q=m=`<V<\\=o<V=l<\\={<Q=m=`<V<\\<L<R=m=m<T<U=m<V<R<U<P<\\=n<Y=l<T<\\<W<R<^<T<Q=h<R=l<P<\\=j<T<T=o<S=l<\\<^<W<Y<Q<T=c<Q<Y<R<]=i<R<X<T<P<R<T<Q=h<R=l<P<\\=j<T=c<t<Q=h<R=l<P<\\=j<T=c<L<Y=m<S=o<]<W<T<V<T<V<R<W<T=k<Y=m=n<^<R<T<Q=h<R=l<P<\\=j<T=b=n<Y=l=l<T=n<R=l<T<T<X<R=m=n<\\=n<R=k<Q<R4K5h5i4F5d4K4@4C5d5j4K5h4K4X4F4]4K5o4K4F4K5h4K5n4F4]4K4A4K4Fkwno8#`kbqpfw>VWE.;!#pfwWjnflvw+evm`wjlm+*gjpsobz9jmojmf.aol`h8?jmsvw#wzsf>!pvanjw!#wzsf#>#$wf{w,ibubp`qj?jnd#pq`>!kwws9,,ttt-!#!kwws9,,ttt-t0-lqd,pklqw`vw#j`lm!#kqfe>!!#bvwl`lnsofwf>!lee!#?,b=?,gju=?gju#`obpp>?,b=?,oj=\t?oj#`obpp>!`pp!#wzsf>!wf{w,`pp!#?elqn#b`wjlm>!kwws9,,{w,`pp!#kqfe>!kwws9,,ojmh#qfo>!bowfqmbwf!#\x0E\t?p`qjsw#wzsf>!wf{w,#lm`oj`h>!ibubp`qjsw9+mft#Gbwf*-dfwWjnf+*~kfjdkw>!2!#tjgwk>!2!#Sflsof$p#Qfsvaoj`#le##?b#kqfe>!kwws9,,ttt-wf{w.gf`lqbwjlm9vmgfqwkf#afdjmmjmd#le#wkf#?,gju=\t?,gju=\t?,gju=\tfpwbaojpknfmw#le#wkf#?,gju=?,gju=?,gju=?,g ujftslqwxnjm.kfjdkw9\t?p`qjsw#pq`>!kwws9,,lswjlm=?lswjlm#ubovf>lewfm#qfefqqfg#wl#bp#,lswjlm=\t?lswjlm#ubov?\"GL@WZSF#kwno=\t?\"..XJmwfqmbwjlmbo#Bjqslqw=\t?b#kqfe>!kwws9,,ttt?,b=?b#kqfe>!kwws9,,t\fTL\fT^\fTE\fT^\fUh\fT{\fTN\roI\ro|\roL\ro{\roO\rov\rot\nAO\x05Gx\bTA\nzk#+\x0BUm\x05Gx*\fHD\fHS\fH\\\fIa\fHJ\fIk\fHZ\fHM\fHR\fHe\fHD\fH^\fIg\fHM\fHy\fIa\fH[\fIk\fHH\fIa\fH\\\fHp\fHR\fHD\fHy\fHR\fH\\\fIl\fHT\fHn\fH@\fHn\fHK\fHS\fHH\fHT\fIa\fHI\fHR\fHF\fHD\fHR\fHT\fIa\fHY\fIl\fHy\fHR\fH\\\fHT\fHn\fHT\fIa\fHy\fH\\\fHO\fHT\fHR\fHB\fH{\fIa\fH\\\fIl\fHv\fHS\fHs\fIa\fHL\fIg\fHn\fHY\fHS\fHp\fIa\fHr\fHR\fHD\fHi\fHB\fIk\fH\\\fHS\fHy\fHR\fHY\fHS\fHA\fHS\fHD\fIa\fHD\fH{\fHR\fHM\fHS\fHC\fHR\fHm\fHy\fIa\fHC\fIg\fHn\fHy\fHS\fHT\fIm\fH\\\fHy\fIa\fH[\fHR\fHF\fHU\fIm\fHm\fHv\fHH\fIl\fHF\fIa\fH\\\fH@\fHn\fHK\fHD\fHs\fHS\fHF\fIa\fHF\fHO\fIl\fHy\fIa\fH\\\fHS\fHy\fIk\fHs\fHF\fIa\fH\\\fHR\fH\\\fHn\fHA\fHF\fIa\fH\\\fHR\fHF\fIa\fHH\fHB\fHR\fH^\fHS\fHy\fIg\fHn\fH\\\fHG\fHP\fIa\fHH\fHR\fH\\\fHD\fHS\fH\\\fIa\fHB\fHR\fHO\fH^\fHS\fHB\fHS\fHs\fIk\fHMgfp`qjswjlm!#`lmwfmw>!gl`vnfmw-ol`bwjlm-sqlw-dfwFofnfmwpAzWbdMbnf+?\"GL@WZSF#kwno=\t?kwno#?nfwb#`kbqpfw>!vwe.;!=9vqo!#`lmwfmw>!kwws9,,-`pp!#qfo>!pwzofpkffw!pwzof#wzsf>!wf{w,`pp!=wzsf>!wf{w,`pp!#kqfe>!t0-lqd,2:::,{kwno!#{nowzsf>!wf{w,ibubp`qjsw!#nfwklg>!dfw!#b`wjlm>!ojmh#qfo>!pwzofpkffw!##>#gl`vnfmw-dfwFofnfmwwzsf>!jnbdf,{.j`lm!#,=`foosbggjmd>!3!#`foops-`pp!#wzsf>!wf{w,`pp!#?,b=?,oj=?oj=?b#kqfe>!!#tjgwk>!2!#kfjdkw>!2!!=?b#kqfe>!kwws9,,ttt-pwzof>!gjpsobz9mlmf8!=bowfqmbwf!#wzsf>!bssoj.,,T0@,,GWG#[KWNO#2-3#foopsb`jmd>!3!#`foosbg#wzsf>!kjggfm!#ubovf>!,b=%maps8?psbm#qlof>!p\t?jmsvw#wzsf>!kjggfm!#obmdvbdf>!IbubP`qjsw!##gl`vnfmw-dfwFofnfmwpAd>!3!#`foopsb`jmd>!3!#zsf>!wf{w,`pp!#nfgjb>!wzsf>$wf{w,ibubp`qjsw$tjwk#wkf#f{`fswjlm#le#zsf>!wf{w,`pp!#qfo>!pw#kfjdkw>!2!#tjgwk>!2!#>$(fm`lgfVQJ@lnslmfmw+?ojmh#qfo>!bowfqmbwf!#\talgz/#wq/#jmsvw/#wf{wnfwb#mbnf>!qlalwp!#`lmnfwklg>!slpw!#b`wjlm>!=\t?b#kqfe>!kwws9,,ttt-`pp!#qfo>!pwzofpkffw!#?,gju=?,gju=?gju#`obppobmdvbdf>!ibubp`qjsw!=bqjb.kjggfm>!wqvf!=.[?qjsw!#wzsf>!wf{w,ibubpo>38~*+*8\t+evm`wjlm+*xab`hdqlvmg.jnbdf9#vqo+,b=?,oj=?oj=?b#kqfe>!k\n\n?oj=?b#kqfe>!kwws9,,bwlq!#bqjb.kjggfm>!wqv=#?b#kqfe>!kwws9,,ttt-obmdvbdf>!ibubp`qjsw!#,lswjlm=\t?lswjlm#ubovf,gju=?,gju=?gju#`obpp>qbwlq!#bqjb.kjggfm>!wqf>+mft#Gbwf*-dfwWjnf+*slqwvdv/Fp#+gl#Aqbpjo*<R=l<_<\\<Q<T<[<\\=j<T<T<^<R<[<P<R<Z<Q<R=m=n=`<R<]=l<\\<[<R<^<\\<Q<T=c=l<Y<_<T=m=n=l<\\=j<T<T<^<R<[<P<R<Z<Q<R=m=n<T<R<]=c<[<\\=n<Y<W=`<Q<\\?\"GL@WZSF#kwno#SVAOJ@#!mw.Wzsf!#`lmwfmw>!wf{w,?nfwb#kwws.frvju>!@lmwfqbmpjwjlmbo,,FM!#!kwws9?kwno#{nomp>!kwws9,,ttt.,,T0@,,GWG#[KWNO#2-3#WGWG,{kwno2.wqbmpjwjlmbo,,ttt-t0-lqd,WQ,{kwno2,sf#>#$wf{w,ibubp`qjsw$8?nfwb#mbnf>!gfp`qjswjlmsbqfmwMlgf-jmpfqwAfelqf?jmsvw#wzsf>!kjggfm!#mbip!#wzsf>!wf{w,ibubp`qj+gl`vnfmw*-qfbgz+evm`wjp`qjsw#wzsf>!wf{w,ibubpjnbdf!#`lmwfmw>!kwws9,,VB.@lnsbwjaof!#`lmwfmw>wno8#`kbqpfw>vwe.;!#,=\tojmh#qfo>!pklqw`vw#j`lm?ojmh#qfo>!pwzofpkffw!#?,p`qjsw=\t?p`qjsw#wzsf>>#gl`vnfmw-`qfbwfFofnfm?b#wbqdfw>!\\aobmh!#kqfe>#gl`vnfmw-dfwFofnfmwpAjmsvw#wzsf>!wf{w!#mbnf>b-wzsf#>#$wf{w,ibubp`qjmsvw#wzsf>!kjggfm!#mbnfkwno8#`kbqpfw>vwe.;!#,=gwg!=\t?kwno#{nomp>!kwws.,,T0@,,GWG#KWNO#7-32#WfmwpAzWbdMbnf+$p`qjsw$*jmsvw#wzsf>!kjggfm!#mbn?p`qjsw#wzsf>!wf{w,ibubp!#pwzof>!gjpsobz9mlmf8!=gl`vnfmw-dfwFofnfmwAzJg+>gl`vnfmw-`qfbwfFofnfmw+$#wzsf>$wf{w,ibubp`qjsw$jmsvw#wzsf>!wf{w!#mbnf>!g-dfwFofnfmwpAzWbdMbnf+pmj`bo!#kqfe>!kwws9,,ttt-@,,GWG#KWNO#7-32#Wqbmpjw?pwzof#wzsf>!wf{w,`pp!=\t\t?pwzof#wzsf>!wf{w,`pp!=jlmbo-gwg!=\t?kwno#{nomp>kwws.frvju>!@lmwfmw.Wzsfgjmd>!3!#`foopsb`jmd>!3!kwno8#`kbqpfw>vwe.;!#,=\t#pwzof>!gjpsobz9mlmf8!=??oj=?b#kqfe>!kwws9,,ttt-#wzsf>$wf{w,ibubp`qjsw$=<X<Y=c=n<Y<W=`<Q<R=m=n<T=m<R<R=n<^<Y=n=m=n<^<T<T<S=l<R<T<[<^<R<X=m=n<^<\\<]<Y<[<R<S<\\=m<Q<R=m=n<T\fHF\fIm\fHT\fIa\fHH\fHS\fHy\fHR\fHy\fHR\fHn\fH{\fIa\fH\\\fIk\fHT\fHe\fHD\fIa\fHU\fIg\fHn\fHD\fIk\fHY\fHS\fHK\fHR\fHD\fHT\fHA\fHR\fHG\fHS\fHy\fIa\fHT\fHS\fHn\fH{\fHT\fIm\fH\\\fHy\fIa\fH[\fHS\fHH\fHy\fIe\fHF\fIl\fH\\\fHR\fHk\fHs\fHY\fHS\fHp\fIa\fHr\fHR\fHF\fHD\fHy\fHR\fH\\\fIa\fH\\\fHY\fHR\fHd\fHT\fHy\fIa\fH\\\fHS\fHC\fHH\fHR", "\u06F7%\u018C'T%\x85'W%\xD7%O%g%\xA6&\u0193%\u01E5&>&*&'&^&\x88\u0178\u0C3E&\u01AD&\u0192&)&^&%&'&\x82&P&1&\xB1&3&]&m&u&E&t&C&\xCF&V&V&/&>&6&\u0F76\u177Co&p&@&E&M&P&x&@&F&e&\xCC&7&:&(&D&0&C&)&.&F&-&1&(&L&F&1\u025E*\u03EA\u21F3&\u1372&K&;&)&E&H&P&0&?&9&V&\x81&-&v&a&,&E&)&?&=&'&'&B&\u0D2E&\u0503&\u0316*&*8&%&%&&&%,)&\x9A&>&\x86&7&]&F&2&>&J&6&n&2&%&?&\x8E&2&6&J&g&-&0&,&*&J&*&O&)&6&(&<&B&N&.&P&@&2&.&W&M&%\u053C\x84(,(<&,&\u03DA&\u18C7&-&,(%&(&%&(\u013B0&X&D&\x81&j&'&J&(&.&B&3&Z&R&h&3&E&E&<\xC6-\u0360\u1EF3&%8?&@&,&Z&@&0&J&,&^&x&_&6&C&6&C\u072C\u2A25&f&-&-&-&-&,&J&2&8&z&8&C&Y&8&-&d&\u1E78\xCC-&7&1&F&7&t&W&7&I&.&.&^&=\u0F9C\u19D3&8(>&/&/&\u077B')'\u1065')'%@/&0&%\u043E\u09C0*&*@&C\u053D\u05D4\u0274\u05EB4\u0DD7\u071A\u04D16\u0D84&/\u0178\u0303Z&*%\u0246\u03FF&\u0134&1\xA8\u04B4\u0174", dictionarySizeBits, "AAAAKKLLKKKKKJJIHHIHHGGFF");
  setData(dictionaryData, dictionarySizeBits);
  function InputStream(data) {
    this.data = new Int8Array(0);
    this.offset = 0;
    this.data = data;
  }
  function readInput(s, dst, offset, length) {
    if (s.input === null) {
      return -1;
    }
    const src = s.input;
    const end = Math.min(src.offset + length, src.data.length);
    const bytesRead = end - src.offset;
    dst.set(src.data.subarray(src.offset, end), offset);
    src.offset += bytesRead;
    return bytesRead;
  }
  function closeInput(s) {
    s.input = new InputStream(new Int8Array(0));
  }
  function toUsAsciiBytes(src) {
    const n = src.length;
    const result = new Int8Array(n);
    for (let i = 0; i < n; ++i) {
      result[i] = src.charCodeAt(i);
    }
    return result;
  }
  function toUtf8Runes(src) {
    const n = src.length;
    const result = new Int32Array(n);
    for (let i = 0; i < n; ++i) {
      result[i] = src.charCodeAt(i);
    }
    return result;
  }
  function makeError(s, code) {
    if (code >= 0) {
      return code;
    }
    if (s.runningState >= 0) {
      s.runningState = code;
    }
    throw new Error("Brotli error code: " + code);
  }
  let ByteBuffer;
  function decode(bytes, options) {
    let s = new State();
    s.input = new InputStream(bytes);
    initState(s);
    if (options) {
      let customDictionary = options["customDictionary"];
      if (customDictionary) attachDictionaryChunk(s, customDictionary);
    }
    let totalOutput = 0;
    let chunks = [];
    while (true) {
      let chunk = new Int8Array(16384);
      chunks.push(chunk);
      s.output = chunk;
      s.outputOffset = 0;
      s.outputLength = 16384;
      s.outputUsed = 0;
      decompress(s);
      totalOutput += s.outputUsed;
      if (s.outputUsed < 16384) break;
    }
    close(s);
    closeInput(s);
    let result = new Int8Array(totalOutput);
    let offset = 0;
    for (let i = 0; i < chunks.length; ++i) {
      let chunk = chunks[i];
      let end = Math.min(totalOutput, offset + 16384);
      let len = end - offset;
      if (len < 16384) {
        result.set(chunk.subarray(0, len), offset);
      } else {
        result.set(chunk, offset);
      }
      offset += len;
    }
    return result;
  }
  return decode;
};
let BrotliDecode = makeBrotliDecode();
;// ./src/core/brotli_stream.js



class BrotliStream extends DecodeStream {
  #isAsync = true;
  constructor(stream, maybeLength) {
    super(maybeLength);
    this.stream = stream;
    this.dict = stream.dict;
  }
  readBlock() {
    const bytes = this.stream.getBytes();
    const decodedData = BrotliDecode(new Int8Array(bytes.buffer, bytes.byteOffset, bytes.length));
    this.buffer = new Uint8Array(decodedData.buffer, decodedData.byteOffset, decodedData.length);
    this.bufferLength = this.buffer.length;
    this.eof = true;
  }
  async getImageData(length, _decoderOptions) {
    const data = await this.asyncGetBytes();
    if (!data) {
      return this.getBytes(length);
    }
    if (data.length <= length) {
      return data;
    }
    return data.subarray(0, length);
  }
  async asyncGetBytes() {
    const {
      decompressed,
      compressed
    } = await this.asyncGetBytesFromDecompressionStream("brotli");
    if (decompressed) {
      return decompressed;
    }
    this.#isAsync = false;
    this.stream = new Stream(compressed, 0, compressed.length, this.stream.dict);
    this.reset();
    return null;
  }
  get isAsync() {
    return this.#isAsync;
  }
}

;// ./src/core/ccitt_stream.js





class CCITTFaxStream extends DecodeStream {
  constructor(str, maybeLength, params) {
    super(maybeLength);
    this.stream = str;
    this.maybeLength = maybeLength;
    this.dict = str.dict;
    if (!(params instanceof Dict)) {
      params = Dict.empty;
    }
    this.params = {
      K: params.get("K") || 0,
      EndOfLine: !!params.get("EndOfLine"),
      EncodedByteAlign: !!params.get("EncodedByteAlign"),
      Columns: params.get("Columns") || 1728,
      Rows: params.get("Rows") || 0,
      EndOfBlock: !!(params.get("EndOfBlock") ?? true),
      BlackIs1: !!params.get("BlackIs1")
    };
  }
  get bytes() {
    return shadow(this, "bytes", this.stream.getBytes(this.maybeLength));
  }
  readBlock() {
    this.decodeImageFallback();
  }
  get isImageStream() {
    return true;
  }
  get isAsyncDecoder() {
    return true;
  }
  async decodeImage(bytes, length, _decoderOptions) {
    if (this.eof) {
      return this.buffer;
    }
    if (!bytes) {
      bytes = this.stream.isAsync ? (await this.stream.asyncGetBytes()) || this.bytes : this.bytes;
    }
    try {
      this.buffer = await JBig2CCITTFaxWasmImage.decode(bytes, this.dict.get("W", "Width"), this.dict.get("H", "Height"), null, this.params);
    } catch {
      warn("CCITTFaxStream: Falling back to JS CCITTFax decoder.");
      return this.decodeImageFallback(bytes, length);
    }
    this.bufferLength = this.buffer.length;
    this.eof = true;
    return this.buffer;
  }
  decodeImageFallback(bytes, length) {
    if (this.eof) {
      return this.buffer;
    }
    const {
      params
    } = this;
    if (!bytes) {
      this.stream.reset();
      bytes = this.bytes;
    }
    let pos = 0;
    const source = {
      next() {
        return bytes[pos++] ?? -1;
      }
    };
    if (length && this.buffer.byteLength < length) {
      this.buffer = new Uint8Array(length);
    }
    this.ccittFaxDecoder = new CCITTFaxDecoder(source, params);
    let outPos = 0;
    while (!this.eof) {
      const c = this.ccittFaxDecoder.readNextChar();
      if (c === -1) {
        this.eof = true;
        break;
      }
      if (!length) {
        this.ensureBuffer(outPos + 1);
      }
      this.buffer[outPos++] = c;
    }
    this.bufferLength = this.buffer.length;
    return this.buffer.subarray(0, length || this.bufferLength);
  }
}

;// ./src/core/flate_stream.js



const codeLenCodeMap = new Int32Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
const lengthDecode = new Int32Array([0x00003, 0x00004, 0x00005, 0x00006, 0x00007, 0x00008, 0x00009, 0x0000a, 0x1000b, 0x1000d, 0x1000f, 0x10011, 0x20013, 0x20017, 0x2001b, 0x2001f, 0x30023, 0x3002b, 0x30033, 0x3003b, 0x40043, 0x40053, 0x40063, 0x40073, 0x50083, 0x500a3, 0x500c3, 0x500e3, 0x00102, 0x00102, 0x00102]);
const distDecode = new Int32Array([0x00001, 0x00002, 0x00003, 0x00004, 0x10005, 0x10007, 0x20009, 0x2000d, 0x30011, 0x30019, 0x40021, 0x40031, 0x50041, 0x50061, 0x60081, 0x600c1, 0x70101, 0x70181, 0x80201, 0x80301, 0x90401, 0x90601, 0xa0801, 0xa0c01, 0xb1001, 0xb1801, 0xc2001, 0xc3001, 0xd4001, 0xd6001]);
const fixedLitCodeTab = [new Int32Array([0x70100, 0x80050, 0x80010, 0x80118, 0x70110, 0x80070, 0x80030, 0x900c0, 0x70108, 0x80060, 0x80020, 0x900a0, 0x80000, 0x80080, 0x80040, 0x900e0, 0x70104, 0x80058, 0x80018, 0x90090, 0x70114, 0x80078, 0x80038, 0x900d0, 0x7010c, 0x80068, 0x80028, 0x900b0, 0x80008, 0x80088, 0x80048, 0x900f0, 0x70102, 0x80054, 0x80014, 0x8011c, 0x70112, 0x80074, 0x80034, 0x900c8, 0x7010a, 0x80064, 0x80024, 0x900a8, 0x80004, 0x80084, 0x80044, 0x900e8, 0x70106, 0x8005c, 0x8001c, 0x90098, 0x70116, 0x8007c, 0x8003c, 0x900d8, 0x7010e, 0x8006c, 0x8002c, 0x900b8, 0x8000c, 0x8008c, 0x8004c, 0x900f8, 0x70101, 0x80052, 0x80012, 0x8011a, 0x70111, 0x80072, 0x80032, 0x900c4, 0x70109, 0x80062, 0x80022, 0x900a4, 0x80002, 0x80082, 0x80042, 0x900e4, 0x70105, 0x8005a, 0x8001a, 0x90094, 0x70115, 0x8007a, 0x8003a, 0x900d4, 0x7010d, 0x8006a, 0x8002a, 0x900b4, 0x8000a, 0x8008a, 0x8004a, 0x900f4, 0x70103, 0x80056, 0x80016, 0x8011e, 0x70113, 0x80076, 0x80036, 0x900cc, 0x7010b, 0x80066, 0x80026, 0x900ac, 0x80006, 0x80086, 0x80046, 0x900ec, 0x70107, 0x8005e, 0x8001e, 0x9009c, 0x70117, 0x8007e, 0x8003e, 0x900dc, 0x7010f, 0x8006e, 0x8002e, 0x900bc, 0x8000e, 0x8008e, 0x8004e, 0x900fc, 0x70100, 0x80051, 0x80011, 0x80119, 0x70110, 0x80071, 0x80031, 0x900c2, 0x70108, 0x80061, 0x80021, 0x900a2, 0x80001, 0x80081, 0x80041, 0x900e2, 0x70104, 0x80059, 0x80019, 0x90092, 0x70114, 0x80079, 0x80039, 0x900d2, 0x7010c, 0x80069, 0x80029, 0x900b2, 0x80009, 0x80089, 0x80049, 0x900f2, 0x70102, 0x80055, 0x80015, 0x8011d, 0x70112, 0x80075, 0x80035, 0x900ca, 0x7010a, 0x80065, 0x80025, 0x900aa, 0x80005, 0x80085, 0x80045, 0x900ea, 0x70106, 0x8005d, 0x8001d, 0x9009a, 0x70116, 0x8007d, 0x8003d, 0x900da, 0x7010e, 0x8006d, 0x8002d, 0x900ba, 0x8000d, 0x8008d, 0x8004d, 0x900fa, 0x70101, 0x80053, 0x80013, 0x8011b, 0x70111, 0x80073, 0x80033, 0x900c6, 0x70109, 0x80063, 0x80023, 0x900a6, 0x80003, 0x80083, 0x80043, 0x900e6, 0x70105, 0x8005b, 0x8001b, 0x90096, 0x70115, 0x8007b, 0x8003b, 0x900d6, 0x7010d, 0x8006b, 0x8002b, 0x900b6, 0x8000b, 0x8008b, 0x8004b, 0x900f6, 0x70103, 0x80057, 0x80017, 0x8011f, 0x70113, 0x80077, 0x80037, 0x900ce, 0x7010b, 0x80067, 0x80027, 0x900ae, 0x80007, 0x80087, 0x80047, 0x900ee, 0x70107, 0x8005f, 0x8001f, 0x9009e, 0x70117, 0x8007f, 0x8003f, 0x900de, 0x7010f, 0x8006f, 0x8002f, 0x900be, 0x8000f, 0x8008f, 0x8004f, 0x900fe, 0x70100, 0x80050, 0x80010, 0x80118, 0x70110, 0x80070, 0x80030, 0x900c1, 0x70108, 0x80060, 0x80020, 0x900a1, 0x80000, 0x80080, 0x80040, 0x900e1, 0x70104, 0x80058, 0x80018, 0x90091, 0x70114, 0x80078, 0x80038, 0x900d1, 0x7010c, 0x80068, 0x80028, 0x900b1, 0x80008, 0x80088, 0x80048, 0x900f1, 0x70102, 0x80054, 0x80014, 0x8011c, 0x70112, 0x80074, 0x80034, 0x900c9, 0x7010a, 0x80064, 0x80024, 0x900a9, 0x80004, 0x80084, 0x80044, 0x900e9, 0x70106, 0x8005c, 0x8001c, 0x90099, 0x70116, 0x8007c, 0x8003c, 0x900d9, 0x7010e, 0x8006c, 0x8002c, 0x900b9, 0x8000c, 0x8008c, 0x8004c, 0x900f9, 0x70101, 0x80052, 0x80012, 0x8011a, 0x70111, 0x80072, 0x80032, 0x900c5, 0x70109, 0x80062, 0x80022, 0x900a5, 0x80002, 0x80082, 0x80042, 0x900e5, 0x70105, 0x8005a, 0x8001a, 0x90095, 0x70115, 0x8007a, 0x8003a, 0x900d5, 0x7010d, 0x8006a, 0x8002a, 0x900b5, 0x8000a, 0x8008a, 0x8004a, 0x900f5, 0x70103, 0x80056, 0x80016, 0x8011e, 0x70113, 0x80076, 0x80036, 0x900cd, 0x7010b, 0x80066, 0x80026, 0x900ad, 0x80006, 0x80086, 0x80046, 0x900ed, 0x70107, 0x8005e, 0x8001e, 0x9009d, 0x70117, 0x8007e, 0x8003e, 0x900dd, 0x7010f, 0x8006e, 0x8002e, 0x900bd, 0x8000e, 0x8008e, 0x8004e, 0x900fd, 0x70100, 0x80051, 0x80011, 0x80119, 0x70110, 0x80071, 0x80031, 0x900c3, 0x70108, 0x80061, 0x80021, 0x900a3, 0x80001, 0x80081, 0x80041, 0x900e3, 0x70104, 0x80059, 0x80019, 0x90093, 0x70114, 0x80079, 0x80039, 0x900d3, 0x7010c, 0x80069, 0x80029, 0x900b3, 0x80009, 0x80089, 0x80049, 0x900f3, 0x70102, 0x80055, 0x80015, 0x8011d, 0x70112, 0x80075, 0x80035, 0x900cb, 0x7010a, 0x80065, 0x80025, 0x900ab, 0x80005, 0x80085, 0x80045, 0x900eb, 0x70106, 0x8005d, 0x8001d, 0x9009b, 0x70116, 0x8007d, 0x8003d, 0x900db, 0x7010e, 0x8006d, 0x8002d, 0x900bb, 0x8000d, 0x8008d, 0x8004d, 0x900fb, 0x70101, 0x80053, 0x80013, 0x8011b, 0x70111, 0x80073, 0x80033, 0x900c7, 0x70109, 0x80063, 0x80023, 0x900a7, 0x80003, 0x80083, 0x80043, 0x900e7, 0x70105, 0x8005b, 0x8001b, 0x90097, 0x70115, 0x8007b, 0x8003b, 0x900d7, 0x7010d, 0x8006b, 0x8002b, 0x900b7, 0x8000b, 0x8008b, 0x8004b, 0x900f7, 0x70103, 0x80057, 0x80017, 0x8011f, 0x70113, 0x80077, 0x80037, 0x900cf, 0x7010b, 0x80067, 0x80027, 0x900af, 0x80007, 0x80087, 0x80047, 0x900ef, 0x70107, 0x8005f, 0x8001f, 0x9009f, 0x70117, 0x8007f, 0x8003f, 0x900df, 0x7010f, 0x8006f, 0x8002f, 0x900bf, 0x8000f, 0x8008f, 0x8004f, 0x900ff]), 9];
const fixedDistCodeTab = [new Int32Array([0x50000, 0x50010, 0x50008, 0x50018, 0x50004, 0x50014, 0x5000c, 0x5001c, 0x50002, 0x50012, 0x5000a, 0x5001a, 0x50006, 0x50016, 0x5000e, 0x00000, 0x50001, 0x50011, 0x50009, 0x50019, 0x50005, 0x50015, 0x5000d, 0x5001d, 0x50003, 0x50013, 0x5000b, 0x5001b, 0x50007, 0x50017, 0x5000f, 0x00000]), 5];
class FlateStream extends DecodeStream {
  #isAsync = true;
  constructor(str, maybeLength) {
    super(maybeLength);
    this.stream = str;
    this.dict = str.dict;
    const cmf = str.getByte();
    const flg = str.getByte();
    if (cmf === -1 || flg === -1) {
      throw new FormatError(`Invalid header in flate stream: ${cmf}, ${flg}`);
    }
    if ((cmf & 0x0f) !== 0x08) {
      throw new FormatError(`Unknown compression method in flate stream: ${cmf}, ${flg}`);
    }
    if (((cmf << 8) + flg) % 31 !== 0) {
      throw new FormatError(`Bad FCHECK in flate stream: ${cmf}, ${flg}`);
    }
    if (flg & 0x20) {
      throw new FormatError(`FDICT bit set in flate stream: ${cmf}, ${flg}`);
    }
    this.codeSize = 0;
    this.codeBuf = 0;
  }
  async getImageData(length, _decoderOptions) {
    const data = await this.asyncGetBytes();
    if (!data) {
      return this.getBytes(length);
    }
    if (data.length <= length) {
      return data;
    }
    return data.subarray(0, length);
  }
  async asyncGetBytes() {
    const {
      decompressed,
      compressed
    } = await this.asyncGetBytesFromDecompressionStream("deflate");
    if (decompressed) {
      return decompressed;
    }
    this.#isAsync = false;
    this.stream = new Stream(compressed, 2, compressed.length, this.stream.dict);
    this.reset();
    return null;
  }
  get isAsync() {
    return this.#isAsync;
  }
  getBits(bits) {
    const str = this.stream;
    let codeSize = this.codeSize;
    let codeBuf = this.codeBuf;
    let b;
    while (codeSize < bits) {
      if ((b = str.getByte()) === -1) {
        throw new FormatError("Bad encoding in flate stream");
      }
      codeBuf |= b << codeSize;
      codeSize += 8;
    }
    b = codeBuf & (1 << bits) - 1;
    this.codeBuf = codeBuf >> bits;
    this.codeSize = codeSize -= bits;
    return b;
  }
  getCode(table) {
    const str = this.stream;
    const codes = table[0];
    const maxLen = table[1];
    let codeSize = this.codeSize;
    let codeBuf = this.codeBuf;
    let b;
    while (codeSize < maxLen) {
      if ((b = str.getByte()) === -1) {
        break;
      }
      codeBuf |= b << codeSize;
      codeSize += 8;
    }
    const code = codes[codeBuf & (1 << maxLen) - 1];
    const codeLen = code >> 16;
    const codeVal = code & 0xffff;
    if (codeLen < 1 || codeSize < codeLen) {
      throw new FormatError("Bad encoding in flate stream");
    }
    this.codeBuf = codeBuf >> codeLen;
    this.codeSize = codeSize - codeLen;
    return codeVal;
  }
  generateHuffmanTable(lengths) {
    const n = lengths.length;
    let maxLen = 0;
    let i;
    for (i = 0; i < n; ++i) {
      if (lengths[i] > maxLen) {
        maxLen = lengths[i];
      }
    }
    const size = 1 << maxLen;
    const codes = new Int32Array(size);
    for (let len = 1, code = 0, skip = 2; len <= maxLen; ++len, code <<= 1, skip <<= 1) {
      for (let val = 0; val < n; ++val) {
        if (lengths[val] === len) {
          let code2 = 0;
          let t = code;
          for (i = 0; i < len; ++i) {
            code2 = code2 << 1 | t & 1;
            t >>= 1;
          }
          for (i = code2; i < size; i += skip) {
            codes[i] = len << 16 | val;
          }
          ++code;
        }
      }
    }
    return [codes, maxLen];
  }
  #endsStreamOnError(err) {
    info(err);
    this.eof = true;
  }
  readBlock() {
    let buffer, hdr, len;
    const str = this.stream;
    try {
      hdr = this.getBits(3);
    } catch (ex) {
      this.#endsStreamOnError(ex.message);
      return;
    }
    if (hdr & 1) {
      this.eof = true;
    }
    hdr >>= 1;
    if (hdr === 0) {
      let b;
      if ((b = str.getByte()) === -1) {
        this.#endsStreamOnError("Bad block header in flate stream");
        return;
      }
      let blockLen = b;
      if ((b = str.getByte()) === -1) {
        this.#endsStreamOnError("Bad block header in flate stream");
        return;
      }
      blockLen |= b << 8;
      if ((b = str.getByte()) === -1) {
        this.#endsStreamOnError("Bad block header in flate stream");
        return;
      }
      let check = b;
      if ((b = str.getByte()) === -1) {
        this.#endsStreamOnError("Bad block header in flate stream");
        return;
      }
      check |= b << 8;
      if (check !== (~blockLen & 0xffff) && (blockLen !== 0 || check !== 0)) {
        throw new FormatError("Bad uncompressed block length in flate stream");
      }
      this.codeBuf = 0;
      this.codeSize = 0;
      const bufferLength = this.bufferLength,
        end = bufferLength + blockLen;
      buffer = this.ensureBuffer(end);
      this.bufferLength = end;
      if (blockLen === 0) {
        if (str.peekByte() === -1) {
          this.eof = true;
        }
      } else {
        const block = str.getBytes(blockLen);
        buffer.set(block, bufferLength);
        if (block.length < blockLen) {
          this.eof = true;
        }
      }
      return;
    }
    let litCodeTable;
    let distCodeTable;
    if (hdr === 1) {
      litCodeTable = fixedLitCodeTab;
      distCodeTable = fixedDistCodeTab;
    } else if (hdr === 2) {
      const numLitCodes = this.getBits(5) + 257;
      const numDistCodes = this.getBits(5) + 1;
      const numCodeLenCodes = this.getBits(4) + 4;
      const codeLenCodeLengths = new Uint8Array(codeLenCodeMap.length);
      let i;
      for (i = 0; i < numCodeLenCodes; ++i) {
        codeLenCodeLengths[codeLenCodeMap[i]] = this.getBits(3);
      }
      const codeLenCodeTab = this.generateHuffmanTable(codeLenCodeLengths);
      len = 0;
      i = 0;
      const codes = numLitCodes + numDistCodes;
      const codeLengths = new Uint8Array(codes);
      let bitsLength, bitsOffset, what;
      while (i < codes) {
        const code = this.getCode(codeLenCodeTab);
        if (code === 16) {
          bitsLength = 2;
          bitsOffset = 3;
          what = len;
        } else if (code === 17) {
          bitsLength = 3;
          bitsOffset = 3;
          what = len = 0;
        } else if (code === 18) {
          bitsLength = 7;
          bitsOffset = 11;
          what = len = 0;
        } else {
          codeLengths[i++] = len = code;
          continue;
        }
        let repeatLength = this.getBits(bitsLength) + bitsOffset;
        while (repeatLength-- > 0) {
          codeLengths[i++] = what;
        }
      }
      litCodeTable = this.generateHuffmanTable(codeLengths.subarray(0, numLitCodes));
      distCodeTable = this.generateHuffmanTable(codeLengths.subarray(numLitCodes, codes));
    } else {
      throw new FormatError("Unknown block type in flate stream");
    }
    buffer = this.buffer;
    let limit = buffer ? buffer.length : 0;
    let pos = this.bufferLength;
    while (true) {
      let code1 = this.getCode(litCodeTable);
      if (code1 < 256) {
        if (pos + 1 >= limit) {
          buffer = this.ensureBuffer(pos + 1);
          limit = buffer.length;
        }
        buffer[pos++] = code1;
        continue;
      }
      if (code1 === 256) {
        this.bufferLength = pos;
        return;
      }
      code1 -= 257;
      code1 = lengthDecode[code1];
      let code2 = code1 >> 16;
      if (code2 > 0) {
        code2 = this.getBits(code2);
      }
      len = (code1 & 0xffff) + code2;
      code1 = this.getCode(distCodeTable);
      code1 = distDecode[code1];
      code2 = code1 >> 16;
      if (code2 > 0) {
        code2 = this.getBits(code2);
      }
      const dist = (code1 & 0xffff) + code2;
      if (pos + len >= limit) {
        buffer = this.ensureBuffer(pos + len);
        limit = buffer.length;
      }
      for (let k = 0; k < len; ++k, ++pos) {
        buffer[pos] = buffer[pos - dist];
      }
    }
  }
}

;// ./src/core/jbig2_stream.js






class Jbig2Stream extends DecodeStream {
  constructor(stream, maybeLength, params) {
    super(maybeLength);
    this.stream = stream;
    this.dict = stream.dict;
    this.maybeLength = maybeLength;
    this.params = params;
  }
  get bytes() {
    return shadow(this, "bytes", this.stream.getBytes(this.maybeLength));
  }
  ensureBuffer(requested) {}
  readBlock() {
    this.decodeImageFallback();
  }
  get isAsyncDecoder() {
    return true;
  }
  get isImageStream() {
    return true;
  }
  async decodeImage(bytes, length, _decoderOptions) {
    if (this.eof) {
      return this.buffer;
    }
    bytes ||= this.bytes;
    try {
      let globals = null;
      if (this.params instanceof Dict) {
        const globalsStream = this.params.get("JBIG2Globals");
        if (globalsStream instanceof BaseStream) {
          globals = globalsStream.getBytes();
        }
      }
      this.buffer = await JBig2CCITTFaxWasmImage.decode(bytes, this.dict.get("Width"), this.dict.get("Height"), globals);
    } catch {
      warn("Jbig2Stream: Falling back to JS JBIG2 decoder.");
      return this.decodeImageFallback(bytes, length);
    }
    this.bufferLength = this.buffer.length;
    this.eof = true;
    return this.buffer;
  }
  decodeImageFallback(bytes, _length) {
    if (this.eof) {
      return this.buffer;
    }
    bytes ||= this.bytes;
    const jbig2Image = new Jbig2Image();
    const chunks = [];
    if (this.params instanceof Dict) {
      const globalsStream = this.params.get("JBIG2Globals");
      if (globalsStream instanceof BaseStream) {
        const globals = globalsStream.getBytes();
        chunks.push({
          data: globals,
          start: 0,
          end: globals.length
        });
      }
    }
    chunks.push({
      data: bytes,
      start: 0,
      end: bytes.length
    });
    const data = jbig2Image.parseChunks(chunks);
    const dataLength = data.length;
    for (let i = 0; i < dataLength; i++) {
      data[i] ^= 0xff;
    }
    this.buffer = data;
    this.bufferLength = dataLength;
    this.eof = true;
    return this.buffer;
  }
  get canAsyncDecodeImageFromBuffer() {
    return this.stream.isAsync;
  }
}

;// ./src/core/jpx_stream.js



class JpxStream extends DecodeStream {
  constructor(stream, maybeLength, params) {
    super(maybeLength);
    this.stream = stream;
    this.dict = stream.dict;
    this.maybeLength = maybeLength;
    this.params = params;
  }
  get bytes() {
    return shadow(this, "bytes", this.stream.getBytes(this.maybeLength));
  }
  ensureBuffer(requested) {}
  readBlock(decoderOptions) {
    unreachable("JpxStream.readBlock");
  }
  get isAsyncDecoder() {
    return true;
  }
  async decodeImage(bytes, _length, decoderOptions) {
    if (this.eof) {
      return this.buffer;
    }
    bytes ||= this.bytes;
    this.buffer = await JpxImage.decode(bytes, decoderOptions);
    this.bufferLength = this.buffer.length;
    this.eof = true;
    return this.buffer;
  }
  get canAsyncDecodeImageFromBuffer() {
    return this.stream.isAsync;
  }
  get isImageStream() {
    return true;
  }
}

;// ./src/core/lzw_stream.js

class LZWStream extends DecodeStream {
  constructor(str, maybeLength, earlyChange) {
    super(maybeLength);
    this.stream = str;
    this.dict = str.dict;
    this.cachedData = 0;
    this.bitsCached = 0;
    const maxLzwDictionarySize = 4096;
    const lzwState = {
      earlyChange,
      codeLength: 9,
      nextCode: 258,
      dictionaryValues: new Uint8Array(maxLzwDictionarySize),
      dictionaryLengths: new Uint16Array(maxLzwDictionarySize),
      dictionaryPrevCodes: new Uint16Array(maxLzwDictionarySize),
      currentSequence: new Uint8Array(maxLzwDictionarySize),
      currentSequenceLength: 0
    };
    for (let i = 0; i < 256; ++i) {
      lzwState.dictionaryValues[i] = i;
      lzwState.dictionaryLengths[i] = 1;
    }
    this.lzwState = lzwState;
  }
  readBits(n) {
    let bitsCached = this.bitsCached;
    let cachedData = this.cachedData;
    while (bitsCached < n) {
      const c = this.stream.getByte();
      if (c === -1) {
        this.eof = true;
        return null;
      }
      cachedData = cachedData << 8 | c;
      bitsCached += 8;
    }
    this.bitsCached = bitsCached -= n;
    this.cachedData = cachedData;
    return cachedData >>> bitsCached & (1 << n) - 1;
  }
  readBlock() {
    const blockSize = 512,
      decodedSizeDelta = blockSize;
    let estimatedDecodedSize = blockSize * 2;
    let i, j, q;
    const lzwState = this.lzwState;
    if (!lzwState) {
      return;
    }
    const earlyChange = lzwState.earlyChange;
    let nextCode = lzwState.nextCode;
    const dictionaryValues = lzwState.dictionaryValues;
    const dictionaryLengths = lzwState.dictionaryLengths;
    const dictionaryPrevCodes = lzwState.dictionaryPrevCodes;
    let codeLength = lzwState.codeLength;
    let prevCode = lzwState.prevCode;
    const currentSequence = lzwState.currentSequence;
    let currentSequenceLength = lzwState.currentSequenceLength;
    let decodedLength = 0;
    let currentBufferLength = this.bufferLength;
    let buffer = this.ensureBuffer(this.bufferLength + estimatedDecodedSize);
    for (i = 0; i < blockSize; i++) {
      const code = this.readBits(codeLength);
      const hasPrev = currentSequenceLength > 0;
      if (code < 256) {
        currentSequence[0] = code;
        currentSequenceLength = 1;
      } else if (code >= 258) {
        if (code < nextCode) {
          currentSequenceLength = dictionaryLengths[code];
          for (j = currentSequenceLength - 1, q = code; j >= 0; j--) {
            currentSequence[j] = dictionaryValues[q];
            q = dictionaryPrevCodes[q];
          }
        } else {
          currentSequence[currentSequenceLength++] = currentSequence[0];
        }
      } else if (code === 256) {
        codeLength = 9;
        nextCode = 258;
        currentSequenceLength = 0;
        continue;
      } else {
        this.eof = true;
        delete this.lzwState;
        break;
      }
      if (hasPrev) {
        dictionaryPrevCodes[nextCode] = prevCode;
        dictionaryLengths[nextCode] = dictionaryLengths[prevCode] + 1;
        dictionaryValues[nextCode] = currentSequence[0];
        nextCode++;
        codeLength = nextCode + earlyChange & nextCode + earlyChange - 1 ? codeLength : Math.min(Math.log(nextCode + earlyChange) / 0.6931471805599453 + 1, 12) | 0;
      }
      prevCode = code;
      decodedLength += currentSequenceLength;
      if (estimatedDecodedSize < decodedLength) {
        do {
          estimatedDecodedSize += decodedSizeDelta;
        } while (estimatedDecodedSize < decodedLength);
        buffer = this.ensureBuffer(this.bufferLength + estimatedDecodedSize);
      }
      for (j = 0; j < currentSequenceLength; j++) {
        buffer[currentBufferLength++] = currentSequence[j];
      }
    }
    lzwState.nextCode = nextCode;
    lzwState.codeLength = codeLength;
    lzwState.prevCode = prevCode;
    lzwState.currentSequenceLength = currentSequenceLength;
    this.bufferLength = currentBufferLength;
  }
}

;// ./src/core/predictor_stream.js



class PredictorStream extends DecodeStream {
  constructor(str, maybeLength, params) {
    super(maybeLength);
    if (!(params instanceof Dict)) {
      return str;
    }
    const predictor = this.predictor = params.get("Predictor") || 1;
    if (predictor <= 1) {
      return str;
    }
    if (predictor !== 2 && (predictor < 10 || predictor > 15)) {
      throw new FormatError(`Unsupported predictor: ${predictor}`);
    }
    this.readBlock = predictor === 2 ? this.readBlockTiff : this.readBlockPng;
    this.stream = str;
    this.dict = str.dict;
    const colors = this.colors = params.get("Colors") || 1;
    const bits = this.bits = params.get("BPC", "BitsPerComponent") || 8;
    const columns = this.columns = params.get("Columns") || 1;
    this.pixBytes = colors * bits + 7 >> 3;
    this.rowBytes = columns * colors * bits + 7 >> 3;
    return this;
  }
  readBlockTiff() {
    const rowBytes = this.rowBytes;
    const bufferLength = this.bufferLength;
    const buffer = this.ensureBuffer(bufferLength + rowBytes);
    const bits = this.bits;
    const colors = this.colors;
    const rawBytes = this.stream.getBytes(rowBytes);
    this.eof = !rawBytes.length;
    if (this.eof) {
      return;
    }
    let inbuf = 0,
      outbuf = 0;
    let inbits = 0,
      outbits = 0;
    let pos = bufferLength;
    let i;
    if (bits === 1 && colors === 1) {
      for (i = 0; i < rowBytes; ++i) {
        let c = rawBytes[i] ^ inbuf;
        c ^= c >> 1;
        c ^= c >> 2;
        c ^= c >> 4;
        inbuf = (c & 1) << 7;
        buffer[pos++] = c;
      }
    } else if (bits === 8) {
      for (i = 0; i < colors; ++i) {
        buffer[pos++] = rawBytes[i];
      }
      for (; i < rowBytes; ++i) {
        buffer[pos] = buffer[pos - colors] + rawBytes[i];
        pos++;
      }
    } else if (bits === 16) {
      const bytesPerPixel = colors * 2;
      for (i = 0; i < bytesPerPixel; ++i) {
        buffer[pos++] = rawBytes[i];
      }
      for (; i < rowBytes; i += 2) {
        const sum = ((rawBytes[i] & 0xff) << 8) + (rawBytes[i + 1] & 0xff) + ((buffer[pos - bytesPerPixel] & 0xff) << 8) + (buffer[pos - bytesPerPixel + 1] & 0xff);
        buffer[pos++] = sum >> 8 & 0xff;
        buffer[pos++] = sum & 0xff;
      }
    } else {
      const compArray = new Uint8Array(colors + 1);
      const bitMask = (1 << bits) - 1;
      let j = 0,
        k = bufferLength;
      const columns = this.columns;
      for (i = 0; i < columns; ++i) {
        for (let kk = 0; kk < colors; ++kk) {
          if (inbits < bits) {
            inbuf = inbuf << 8 | rawBytes[j++] & 0xff;
            inbits += 8;
          }
          compArray[kk] = compArray[kk] + (inbuf >> inbits - bits) & bitMask;
          inbits -= bits;
          outbuf = outbuf << bits | compArray[kk];
          outbits += bits;
          if (outbits >= 8) {
            buffer[k++] = outbuf >> outbits - 8 & 0xff;
            outbits -= 8;
          }
        }
      }
      if (outbits > 0) {
        buffer[k++] = (outbuf << 8 - outbits) + (inbuf & (1 << 8 - outbits) - 1);
      }
    }
    this.bufferLength += rowBytes;
  }
  readBlockPng() {
    const rowBytes = this.rowBytes;
    const pixBytes = this.pixBytes;
    const predictor = this.stream.getByte();
    const rawBytes = this.stream.getBytes(rowBytes);
    this.eof = !rawBytes.length;
    if (this.eof) {
      return;
    }
    const bufferLength = this.bufferLength;
    const buffer = this.ensureBuffer(bufferLength + rowBytes);
    let prevRow = buffer.subarray(bufferLength - rowBytes, bufferLength);
    if (prevRow.length === 0) {
      prevRow = new Uint8Array(rowBytes);
    }
    let i,
      j = bufferLength,
      up,
      c;
    switch (predictor) {
      case 0:
        for (i = 0; i < rowBytes; ++i) {
          buffer[j++] = rawBytes[i];
        }
        break;
      case 1:
        for (i = 0; i < pixBytes; ++i) {
          buffer[j++] = rawBytes[i];
        }
        for (; i < rowBytes; ++i) {
          buffer[j] = buffer[j - pixBytes] + rawBytes[i] & 0xff;
          j++;
        }
        break;
      case 2:
        for (i = 0; i < rowBytes; ++i) {
          buffer[j++] = prevRow[i] + rawBytes[i] & 0xff;
        }
        break;
      case 3:
        for (i = 0; i < pixBytes; ++i) {
          buffer[j++] = (prevRow[i] >> 1) + rawBytes[i];
        }
        for (; i < rowBytes; ++i) {
          buffer[j] = (prevRow[i] + buffer[j - pixBytes] >> 1) + rawBytes[i] & 0xff;
          j++;
        }
        break;
      case 4:
        for (i = 0; i < pixBytes; ++i) {
          up = prevRow[i];
          c = rawBytes[i];
          buffer[j++] = up + c;
        }
        for (; i < rowBytes; ++i) {
          up = prevRow[i];
          const upLeft = prevRow[i - pixBytes];
          const left = buffer[j - pixBytes];
          const p = left + up - upLeft;
          let pa = p - left;
          if (pa < 0) {
            pa = -pa;
          }
          let pb = p - up;
          if (pb < 0) {
            pb = -pb;
          }
          let pc = p - upLeft;
          if (pc < 0) {
            pc = -pc;
          }
          c = rawBytes[i];
          if (pa <= pb && pa <= pc) {
            buffer[j++] = left + c;
          } else if (pb <= pc) {
            buffer[j++] = up + c;
          } else {
            buffer[j++] = upLeft + c;
          }
        }
        break;
      default:
        throw new FormatError(`Unsupported predictor: ${predictor}`);
    }
    this.bufferLength += rowBytes;
  }
}

;// ./src/core/run_length_stream.js

class RunLengthStream extends DecodeStream {
  constructor(str, maybeLength) {
    super(maybeLength);
    this.stream = str;
    this.dict = str.dict;
  }
  readBlock() {
    const repeatHeader = this.stream.getBytes(2);
    if (!repeatHeader || repeatHeader.length < 2 || repeatHeader[0] === 128) {
      this.eof = true;
      return;
    }
    let buffer;
    let bufferLength = this.bufferLength;
    let n = repeatHeader[0];
    if (n < 128) {
      buffer = this.ensureBuffer(bufferLength + n + 1);
      buffer[bufferLength++] = repeatHeader[1];
      if (n > 0) {
        const source = this.stream.getBytes(n);
        buffer.set(source, bufferLength);
        bufferLength += n;
      }
    } else {
      n = 257 - n;
      buffer = this.ensureBuffer(bufferLength + n + 1);
      buffer.fill(repeatHeader[1], bufferLength, bufferLength + n);
      bufferLength += n;
    }
    this.bufferLength = bufferLength;
  }
}

;// ./src/core/parser.js















const MAX_LENGTH_TO_CACHE = 1000;
function getInlineImageCacheKey(bytes) {
  const strBuf = [],
    ii = bytes.length;
  let i = 0;
  while (i < ii - 1) {
    strBuf.push(bytes[i++] << 8 | bytes[i++]);
  }
  if (i < ii) {
    strBuf.push(bytes[i]);
  }
  return ii + "_" + String.fromCharCode.apply(null, strBuf);
}
class Parser {
  constructor({
    lexer,
    xref,
    allowStreams = false,
    recoveryMode = false
  }) {
    this.lexer = lexer;
    this.xref = xref;
    this.allowStreams = allowStreams;
    this.recoveryMode = recoveryMode;
    this.imageCache = Object.create(null);
    this._imageId = 0;
    this.refill();
  }
  refill() {
    this.buf1 = this.lexer.getObj();
    this.buf2 = this.lexer.getObj();
  }
  shift() {
    if (this.buf2 instanceof Cmd && this.buf2.cmd === "ID") {
      this.buf1 = this.buf2;
      this.buf2 = null;
    } else {
      this.buf1 = this.buf2;
      this.buf2 = this.lexer.getObj();
    }
  }
  tryShift() {
    try {
      this.shift();
      return true;
    } catch (e) {
      if (e instanceof MissingDataException) {
        throw e;
      }
      return false;
    }
  }
  getObj(cipherTransform = null) {
    const buf1 = this.buf1;
    this.shift();
    if (buf1 instanceof Cmd) {
      switch (buf1.cmd) {
        case "BI":
          return this.makeInlineImage(cipherTransform);
        case "[":
          const array = [];
          while (!isCmd(this.buf1, "]") && this.buf1 !== EOF) {
            array.push(this.getObj(cipherTransform));
          }
          if (this.buf1 === EOF) {
            if (this.recoveryMode) {
              return array;
            }
            throw new ParserEOFException("End of file inside array.");
          }
          this.shift();
          return array;
        case "<<":
          const dict = new Dict(this.xref);
          while (!isCmd(this.buf1, ">>") && this.buf1 !== EOF) {
            if (!(this.buf1 instanceof Name)) {
              info("Malformed dictionary: key must be a name object");
              this.shift();
              continue;
            }
            const key = this.buf1.name;
            this.shift();
            if (this.buf1 === EOF) {
              break;
            }
            dict.set(key, this.getObj(cipherTransform));
          }
          if (this.buf1 === EOF) {
            if (this.recoveryMode) {
              return dict;
            }
            throw new ParserEOFException("End of file inside dictionary.");
          }
          if (isCmd(this.buf2, "stream")) {
            return this.allowStreams ? this.makeStream(dict, cipherTransform) : dict;
          }
          this.shift();
          return dict;
        default:
          return buf1;
      }
    }
    if (Number.isInteger(buf1)) {
      if (Number.isInteger(this.buf1) && isCmd(this.buf2, "R")) {
        const ref = Ref.get(buf1, this.buf1);
        this.shift();
        this.shift();
        return ref;
      }
      return buf1;
    }
    if (typeof buf1 === "string") {
      if (cipherTransform) {
        return cipherTransform.decryptString(buf1);
      }
      return buf1;
    }
    return buf1;
  }
  findDefaultInlineStreamEnd(stream) {
    const E = 0x45,
      I = 0x49,
      SPACE = 0x20,
      LF = 0xa,
      CR = 0xd,
      NUL = 0x0;
    const {
        knownCommands
      } = this.lexer,
      startPos = stream.pos,
      n = 15;
    let state = 0,
      ch,
      maybeEIPos;
    while ((ch = stream.getByte()) !== -1) {
      if (state === 0) {
        state = ch === E ? 1 : 0;
      } else if (state === 1) {
        state = ch === I ? 2 : 0;
      } else {
        if (ch === SPACE || ch === LF || ch === CR) {
          maybeEIPos = stream.pos;
          const followingBytes = stream.peekBytes(n);
          const ii = followingBytes.length;
          if (ii === 0) {
            break;
          }
          for (let i = 0; i < ii; i++) {
            ch = followingBytes[i];
            if (ch === NUL && followingBytes[i + 1] !== NUL) {
              continue;
            }
            if (ch !== LF && ch !== CR && (ch < SPACE || ch > 0x7f)) {
              state = 0;
              break;
            }
          }
          if (state !== 2) {
            continue;
          }
          if (!knownCommands) {
            warn("findDefaultInlineStreamEnd - `lexer.knownCommands` is undefined.");
            continue;
          }
          const tmpLexer = new Lexer(new Stream(stream.peekBytes(5 * n)), knownCommands);
          tmpLexer._hexStringWarn = () => {};
          let numArgs = 0;
          while (true) {
            const nextObj = tmpLexer.getObj();
            if (nextObj === EOF) {
              state = 0;
              break;
            }
            if (nextObj instanceof Cmd) {
              const knownCommand = knownCommands[nextObj.cmd];
              if (!knownCommand) {
                state = 0;
                break;
              } else if (knownCommand.variableArgs ? numArgs <= knownCommand.numArgs : numArgs === knownCommand.numArgs) {
                break;
              }
              numArgs = 0;
              continue;
            }
            numArgs++;
          }
          if (state === 2) {
            break;
          }
        } else {
          state = 0;
        }
      }
    }
    if (ch === -1) {
      warn("findDefaultInlineStreamEnd: " + "Reached the end of the stream without finding a valid EI marker");
      if (maybeEIPos) {
        warn('... trying to recover by using the last "EI" occurrence.');
        stream.skip(-(stream.pos - maybeEIPos));
      }
    }
    let endOffset = 4;
    stream.skip(-endOffset);
    ch = stream.peekByte();
    stream.skip(endOffset);
    if (!isWhiteSpace(ch)) {
      endOffset--;
    }
    return stream.pos - endOffset - startPos;
  }
  findDCTDecodeInlineStreamEnd(stream) {
    const startPos = stream.pos;
    let foundEOI = false,
      b,
      markerLength;
    while ((b = stream.getByte()) !== -1) {
      if (b !== 0xff) {
        continue;
      }
      switch (stream.getByte()) {
        case 0x00:
          break;
        case 0xff:
          stream.skip(-1);
          break;
        case 0xd9:
          foundEOI = true;
          break;
        case 0xc0:
        case 0xc1:
        case 0xc2:
        case 0xc3:
        case 0xc5:
        case 0xc6:
        case 0xc7:
        case 0xc9:
        case 0xca:
        case 0xcb:
        case 0xcd:
        case 0xce:
        case 0xcf:
        case 0xc4:
        case 0xcc:
        case 0xda:
        case 0xdb:
        case 0xdc:
        case 0xdd:
        case 0xde:
        case 0xdf:
        case 0xe0:
        case 0xe1:
        case 0xe2:
        case 0xe3:
        case 0xe4:
        case 0xe5:
        case 0xe6:
        case 0xe7:
        case 0xe8:
        case 0xe9:
        case 0xea:
        case 0xeb:
        case 0xec:
        case 0xed:
        case 0xee:
        case 0xef:
        case 0xfe:
          markerLength = stream.getUint16();
          if (markerLength > 2) {
            stream.skip(markerLength - 2);
          } else {
            stream.skip(-2);
          }
          break;
      }
      if (foundEOI) {
        break;
      }
    }
    const length = stream.pos - startPos;
    if (b === -1) {
      warn("Inline DCTDecode image stream: " + "EOI marker not found, searching for /EI/ instead.");
      stream.skip(-length);
      return this.findDefaultInlineStreamEnd(stream);
    }
    this.inlineStreamSkipEI(stream);
    return length;
  }
  findASCII85DecodeInlineStreamEnd(stream) {
    const TILDE = 0x7e,
      GT = 0x3e;
    const startPos = stream.pos;
    let ch;
    while ((ch = stream.getByte()) !== -1) {
      if (ch === TILDE) {
        const tildePos = stream.pos;
        ch = stream.peekByte();
        while (isWhiteSpace(ch)) {
          stream.skip();
          ch = stream.peekByte();
        }
        if (ch === GT) {
          stream.skip();
          break;
        }
        if (stream.pos > tildePos) {
          const maybeEI = stream.peekBytes(2);
          if (maybeEI[0] === 0x45 && maybeEI[1] === 0x49) {
            break;
          }
        }
      }
    }
    const length = stream.pos - startPos;
    if (ch === -1) {
      warn("Inline ASCII85Decode image stream: " + "EOD marker not found, searching for /EI/ instead.");
      stream.skip(-length);
      return this.findDefaultInlineStreamEnd(stream);
    }
    this.inlineStreamSkipEI(stream);
    return length;
  }
  findASCIIHexDecodeInlineStreamEnd(stream) {
    const GT = 0x3e;
    const startPos = stream.pos;
    let ch;
    while ((ch = stream.getByte()) !== -1) {
      if (ch === GT) {
        break;
      }
    }
    const length = stream.pos - startPos;
    if (ch === -1) {
      warn("Inline ASCIIHexDecode image stream: " + "EOD marker not found, searching for /EI/ instead.");
      stream.skip(-length);
      return this.findDefaultInlineStreamEnd(stream);
    }
    this.inlineStreamSkipEI(stream);
    return length;
  }
  inlineStreamSkipEI(stream) {
    const E = 0x45,
      I = 0x49;
    let state = 0,
      ch;
    while ((ch = stream.getByte()) !== -1) {
      if (state === 0) {
        state = ch === E ? 1 : 0;
      } else if (state === 1) {
        state = ch === I ? 2 : 0;
      } else if (state === 2) {
        break;
      }
    }
  }
  makeInlineImage(cipherTransform) {
    const lexer = this.lexer;
    const stream = lexer.stream;
    const dictMap = Object.create(null);
    let dictLength;
    while (!isCmd(this.buf1, "ID") && this.buf1 !== EOF) {
      if (!(this.buf1 instanceof Name)) {
        throw new FormatError("Dictionary key must be a name object");
      }
      const key = this.buf1.name;
      this.shift();
      if (this.buf1 === EOF) {
        break;
      }
      dictMap[key] = this.getObj(cipherTransform);
    }
    if (lexer.beginInlineImagePos !== -1) {
      dictLength = stream.pos - lexer.beginInlineImagePos;
    }
    const filter = this.xref.fetchIfRef(dictMap.F || dictMap.Filter);
    let filterName;
    if (filter instanceof Name) {
      filterName = filter.name;
    } else if (Array.isArray(filter)) {
      const filterZero = this.xref.fetchIfRef(filter[0]);
      if (filterZero instanceof Name) {
        filterName = filterZero.name;
      }
    }
    const startPos = stream.pos;
    let length;
    switch (filterName) {
      case "DCT":
      case "DCTDecode":
        length = this.findDCTDecodeInlineStreamEnd(stream);
        break;
      case "A85":
      case "ASCII85Decode":
        length = this.findASCII85DecodeInlineStreamEnd(stream);
        break;
      case "AHx":
      case "ASCIIHexDecode":
        length = this.findASCIIHexDecodeInlineStreamEnd(stream);
        break;
      default:
        length = this.findDefaultInlineStreamEnd(stream);
    }
    let cacheKey;
    if (length < MAX_LENGTH_TO_CACHE && dictLength > 0) {
      const initialStreamPos = stream.pos;
      stream.pos = lexer.beginInlineImagePos;
      cacheKey = getInlineImageCacheKey(stream.getBytes(dictLength + length));
      stream.pos = initialStreamPos;
      const cacheEntry = this.imageCache[cacheKey];
      if (cacheEntry !== undefined) {
        this.buf2 = Cmd.get("EI");
        this.shift();
        cacheEntry.reset();
        return cacheEntry;
      }
    }
    const dict = new Dict(this.xref);
    for (const key in dictMap) {
      dict.set(key, dictMap[key]);
    }
    let imageStream = stream.makeSubStream(startPos, length, dict);
    if (cipherTransform) {
      imageStream = cipherTransform.createStream(imageStream, length);
    }
    imageStream = this.filter(imageStream, dict, length);
    imageStream.dict = dict;
    if (cacheKey !== undefined) {
      imageStream.cacheKey = `inline_img_${++this._imageId}`;
      this.imageCache[cacheKey] = imageStream;
    }
    this.buf2 = Cmd.get("EI");
    this.shift();
    return imageStream;
  }
  #findStreamLength(startPos) {
    const {
      stream
    } = this.lexer;
    stream.pos = startPos;
    const SCAN_BLOCK_LENGTH = 2048;
    const signatureLength = "endstream".length;
    const END_SIGNATURE = new Uint8Array([0x65, 0x6e, 0x64]);
    const endLength = END_SIGNATURE.length;
    const PARTIAL_SIGNATURE = [new Uint8Array([0x73, 0x74, 0x72, 0x65, 0x61, 0x6d]), new Uint8Array([0x73, 0x74, 0x65, 0x61, 0x6d]), new Uint8Array([0x73, 0x74, 0x72, 0x65, 0x61])];
    const normalLength = signatureLength - endLength;
    while (stream.pos < stream.end) {
      const scanBytes = stream.peekBytes(SCAN_BLOCK_LENGTH);
      const scanLength = scanBytes.length - signatureLength;
      if (scanLength <= 0) {
        break;
      }
      let pos = 0;
      while (pos < scanLength) {
        let j = 0;
        while (j < endLength && scanBytes[pos + j] === END_SIGNATURE[j]) {
          j++;
        }
        if (j >= endLength) {
          let found = false;
          for (const part of PARTIAL_SIGNATURE) {
            const partLen = part.length;
            let k = 0;
            while (k < partLen && scanBytes[pos + j + k] === part[k]) {
              k++;
            }
            if (k >= normalLength) {
              found = true;
              break;
            }
            if (k >= partLen) {
              const lastByte = scanBytes[pos + j + k];
              if (isWhiteSpace(lastByte)) {
                info(`Found "${bytesToString([...END_SIGNATURE, ...part])}" when ` + "searching for endstream command.");
                found = true;
              }
              break;
            }
          }
          if (found) {
            stream.pos += pos;
            return stream.pos - startPos;
          }
        }
        pos++;
      }
      stream.pos += scanLength;
    }
    return -1;
  }
  makeStream(dict, cipherTransform) {
    const lexer = this.lexer;
    let stream = lexer.stream;
    lexer.skipToNextLine();
    const startPos = stream.pos - 1;
    let length = dict.get("Length");
    if (!Number.isInteger(length)) {
      info(`Bad length "${length && length.toString()}" in stream.`);
      length = 0;
    }
    stream.pos = startPos + length;
    lexer.nextChar();
    if (this.tryShift() && isCmd(this.buf2, "endstream")) {
      this.shift();
    } else {
      length = this.#findStreamLength(startPos);
      if (length < 0) {
        throw new FormatError("Missing endstream command.");
      }
      lexer.nextChar();
      this.shift();
      this.shift();
    }
    this.shift();
    stream = stream.makeSubStream(startPos, length, dict);
    if (cipherTransform) {
      stream = cipherTransform.createStream(stream, length);
    }
    stream = this.filter(stream, dict, length);
    stream.dict = dict;
    return stream;
  }
  filter(stream, dict, length) {
    let filter = dict.get("F", "Filter");
    let params = dict.get("DP", "DecodeParms");
    if (filter instanceof Name) {
      if (Array.isArray(params)) {
        warn("/DecodeParms should not be an Array, when /Filter is a Name.");
      }
      return this.makeFilter(stream, filter.name, length, params);
    }
    let maybeLength = length;
    if (Array.isArray(filter)) {
      const filterArray = filter;
      const paramsArray = params;
      for (let i = 0, ii = filterArray.length; i < ii; ++i) {
        filter = this.xref.fetchIfRef(filterArray[i]);
        if (!(filter instanceof Name)) {
          throw new FormatError(`Bad filter name "${filter}"`);
        }
        params = null;
        if (Array.isArray(paramsArray) && i in paramsArray) {
          params = this.xref.fetchIfRef(paramsArray[i]);
        }
        stream = this.makeFilter(stream, filter.name, maybeLength, params);
        maybeLength = null;
      }
    }
    return stream;
  }
  makeFilter(stream, name, maybeLength, params) {
    if (maybeLength === 0) {
      warn(`Empty "${name}" stream.`);
      return new NullStream();
    }
    try {
      switch (name) {
        case "Fl":
        case "FlateDecode":
          if (params) {
            return new PredictorStream(new FlateStream(stream, maybeLength), maybeLength, params);
          }
          return new FlateStream(stream, maybeLength);
        case "LZW":
        case "LZWDecode":
          let earlyChange = 1;
          if (params) {
            if (params.has("EarlyChange")) {
              earlyChange = params.get("EarlyChange");
            }
            return new PredictorStream(new LZWStream(stream, maybeLength, earlyChange), maybeLength, params);
          }
          return new LZWStream(stream, maybeLength, earlyChange);
        case "DCT":
        case "DCTDecode":
          return new JpegStream(stream, maybeLength, params);
        case "JPX":
        case "JPXDecode":
          return new JpxStream(stream, maybeLength, params);
        case "A85":
        case "ASCII85Decode":
          return new Ascii85Stream(stream, maybeLength);
        case "AHx":
        case "ASCIIHexDecode":
          return new AsciiHexStream(stream, maybeLength);
        case "CCF":
        case "CCITTFaxDecode":
          return new CCITTFaxStream(stream, maybeLength, params);
        case "RL":
        case "RunLengthDecode":
          return new RunLengthStream(stream, maybeLength);
        case "JBIG2Decode":
          return new Jbig2Stream(stream, maybeLength, params);
        case "BrotliDecode":
          return new BrotliStream(stream, maybeLength);
      }
      warn(`Filter "${name}" is not supported.`);
      return stream;
    } catch (ex) {
      if (ex instanceof MissingDataException) {
        throw ex;
      }
      warn(`Invalid stream: "${ex}"`);
      return new NullStream();
    }
  }
}
const specialChars = [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
function toHexDigit(ch) {
  if (ch >= 0x30 && ch <= 0x39) {
    return ch & 0x0f;
  }
  if (ch >= 0x41 && ch <= 0x46 || ch >= 0x61 && ch <= 0x66) {
    return (ch & 0x0f) + 9;
  }
  return -1;
}
class Lexer {
  constructor(stream, knownCommands = null) {
    this.stream = stream;
    this.nextChar();
    this.strBuf = [];
    this.knownCommands = knownCommands;
    this._hexStringNumWarn = 0;
    this.beginInlineImagePos = -1;
  }
  nextChar() {
    return this.currentChar = this.stream.getByte();
  }
  peekChar() {
    return this.stream.peekByte();
  }
  getNumber() {
    let ch = this.currentChar;
    let divideBy = 0;
    let sign = 1;
    if (ch === 0x2d) {
      sign = -1;
      ch = this.nextChar();
      if (ch === 0x2d) {
        ch = this.nextChar();
      }
    } else if (ch === 0x2b) {
      ch = this.nextChar();
    }
    if (ch === 0x0a || ch === 0x0d) {
      do {
        ch = this.nextChar();
      } while (ch === 0x0a || ch === 0x0d);
    }
    if (ch === 0x2e) {
      divideBy = 10;
      ch = this.nextChar();
    }
    if (ch < 0x30 || ch > 0x39) {
      const msg = `Invalid number: ${String.fromCharCode(ch)} (charCode ${ch})`;
      if (isWhiteSpace(ch) || ch === 0x28 || ch === 0x3c || ch === -1) {
        info(`Lexer.getNumber - "${msg}".`);
        return 0;
      }
      throw new FormatError(msg);
    }
    let baseValue = ch - 0x30;
    while ((ch = this.nextChar()) >= 0) {
      if (ch >= 0x30 && ch <= 0x39) {
        const currentDigit = ch - 0x30;
        if (divideBy !== 0) {
          divideBy *= 10;
        }
        baseValue = baseValue * 10 + currentDigit;
      } else if (ch === 0x2e) {
        if (divideBy === 0) {
          divideBy = 1;
        } else {
          break;
        }
      } else if (ch === 0x2d) {
        warn("Badly formatted number: minus sign in the middle");
      } else {
        break;
      }
    }
    if (divideBy !== 0) {
      baseValue /= divideBy;
    }
    return sign * baseValue;
  }
  getString() {
    let numParen = 1;
    let done = false;
    const strBuf = this.strBuf;
    strBuf.length = 0;
    let ch = this.nextChar();
    while (true) {
      let charBuffered = false;
      switch (ch | 0) {
        case -1:
          warn("Unterminated string");
          done = true;
          break;
        case 0x28:
          ++numParen;
          strBuf.push("(");
          break;
        case 0x29:
          if (--numParen === 0) {
            this.nextChar();
            done = true;
          } else {
            strBuf.push(")");
          }
          break;
        case 0x5c:
          ch = this.nextChar();
          switch (ch) {
            case -1:
              warn("Unterminated string");
              done = true;
              break;
            case 0x6e:
              strBuf.push("\n");
              break;
            case 0x72:
              strBuf.push("\r");
              break;
            case 0x74:
              strBuf.push("\t");
              break;
            case 0x62:
              strBuf.push("\b");
              break;
            case 0x66:
              strBuf.push("\f");
              break;
            case 0x5c:
            case 0x28:
            case 0x29:
              strBuf.push(String.fromCharCode(ch));
              break;
            case 0x30:
            case 0x31:
            case 0x32:
            case 0x33:
            case 0x34:
            case 0x35:
            case 0x36:
            case 0x37:
              let x = ch & 0x0f;
              ch = this.nextChar();
              charBuffered = true;
              if (ch >= 0x30 && ch <= 0x37) {
                x = (x << 3) + (ch & 0x0f);
                ch = this.nextChar();
                if (ch >= 0x30 && ch <= 0x37) {
                  charBuffered = false;
                  x = (x << 3) + (ch & 0x0f);
                }
              }
              strBuf.push(String.fromCharCode(x));
              break;
            case 0x0d:
              if (this.peekChar() === 0x0a) {
                this.nextChar();
              }
              break;
            case 0x0a:
              break;
            default:
              strBuf.push(String.fromCharCode(ch));
              break;
          }
          break;
        default:
          strBuf.push(String.fromCharCode(ch));
          break;
      }
      if (done) {
        break;
      }
      if (!charBuffered) {
        ch = this.nextChar();
      }
    }
    return strBuf.join("");
  }
  getName() {
    let ch, previousCh;
    const strBuf = this.strBuf;
    strBuf.length = 0;
    while ((ch = this.nextChar()) >= 0 && !specialChars[ch]) {
      if (ch === 0x23) {
        ch = this.nextChar();
        if (specialChars[ch]) {
          warn("Lexer_getName: " + "NUMBER SIGN (#) should be followed by a hexadecimal number.");
          strBuf.push("#");
          break;
        }
        const x = toHexDigit(ch);
        if (x !== -1) {
          previousCh = ch;
          ch = this.nextChar();
          const x2 = toHexDigit(ch);
          if (x2 === -1) {
            warn(`Lexer_getName: Illegal digit (${String.fromCharCode(ch)}) ` + "in hexadecimal number.");
            strBuf.push("#", String.fromCharCode(previousCh));
            if (specialChars[ch]) {
              break;
            }
            strBuf.push(String.fromCharCode(ch));
            continue;
          }
          strBuf.push(String.fromCharCode(x << 4 | x2));
        } else {
          strBuf.push("#", String.fromCharCode(ch));
        }
      } else {
        strBuf.push(String.fromCharCode(ch));
      }
    }
    if (strBuf.length > 127) {
      warn(`Name token is longer than allowed by the spec: ${strBuf.length}`);
    }
    return Name.get(strBuf.join(""));
  }
  _hexStringWarn(ch) {
    const MAX_HEX_STRING_NUM_WARN = 5;
    if (this._hexStringNumWarn++ === MAX_HEX_STRING_NUM_WARN) {
      warn("getHexString - ignoring additional invalid characters.");
      return;
    }
    if (this._hexStringNumWarn > MAX_HEX_STRING_NUM_WARN) {
      return;
    }
    warn(`getHexString - ignoring invalid character: ${ch}`);
  }
  getHexString() {
    const strBuf = this.strBuf;
    strBuf.length = 0;
    let ch = this.currentChar;
    let firstDigit = -1,
      digit = -1;
    this._hexStringNumWarn = 0;
    while (true) {
      if (ch < 0) {
        warn("Unterminated hex string");
        break;
      } else if (ch === 0x3e) {
        this.nextChar();
        break;
      } else if (specialChars[ch] === 1) {
        ch = this.nextChar();
        continue;
      } else {
        digit = toHexDigit(ch);
        if (digit === -1) {
          this._hexStringWarn(ch);
        } else if (firstDigit === -1) {
          firstDigit = digit;
        } else {
          strBuf.push(String.fromCharCode(firstDigit << 4 | digit));
          firstDigit = -1;
        }
        ch = this.nextChar();
      }
    }
    if (firstDigit !== -1) {
      strBuf.push(String.fromCharCode(firstDigit << 4));
    }
    return strBuf.join("");
  }
  getObj() {
    let comment = false;
    let ch = this.currentChar;
    while (true) {
      if (ch < 0) {
        return EOF;
      }
      if (comment) {
        if (ch === 0x0a || ch === 0x0d) {
          comment = false;
        }
      } else if (ch === 0x25) {
        comment = true;
      } else if (specialChars[ch] !== 1) {
        break;
      }
      ch = this.nextChar();
    }
    switch (ch | 0) {
      case 0x30:
      case 0x31:
      case 0x32:
      case 0x33:
      case 0x34:
      case 0x35:
      case 0x36:
      case 0x37:
      case 0x38:
      case 0x39:
      case 0x2b:
      case 0x2d:
      case 0x2e:
        return this.getNumber();
      case 0x28:
        return this.getString();
      case 0x2f:
        return this.getName();
      case 0x5b:
        this.nextChar();
        return Cmd.get("[");
      case 0x5d:
        this.nextChar();
        return Cmd.get("]");
      case 0x3c:
        ch = this.nextChar();
        if (ch === 0x3c) {
          this.nextChar();
          return Cmd.get("<<");
        }
        return this.getHexString();
      case 0x3e:
        ch = this.nextChar();
        if (ch === 0x3e) {
          this.nextChar();
          return Cmd.get(">>");
        }
        return Cmd.get(">");
      case 0x7b:
        this.nextChar();
        return Cmd.get("{");
      case 0x7d:
        this.nextChar();
        return Cmd.get("}");
      case 0x29:
        this.nextChar();
        throw new FormatError(`Illegal character: ${ch}`);
    }
    let str = String.fromCharCode(ch);
    if (ch < 0x20 || ch > 0x7f) {
      const nextCh = this.peekChar();
      if (nextCh >= 0x20 && nextCh <= 0x7f) {
        this.nextChar();
        return Cmd.get(str);
      }
    }
    const knownCommands = this.knownCommands;
    let knownCommandFound = knownCommands?.[str] !== undefined;
    while ((ch = this.nextChar()) >= 0 && !specialChars[ch]) {
      const possibleCommand = str + String.fromCharCode(ch);
      if (knownCommandFound && knownCommands[possibleCommand] === undefined) {
        break;
      }
      if (str.length === 128) {
        throw new FormatError(`Command token too long: ${str.length}`);
      }
      str = possibleCommand;
      knownCommandFound = knownCommands?.[str] !== undefined;
    }
    if (str === "true") {
      return true;
    }
    if (str === "false") {
      return false;
    }
    if (str === "null") {
      return null;
    }
    if (str === "BI") {
      this.beginInlineImagePos = this.stream.pos;
    }
    return Cmd.get(str);
  }
  skipToNextLine() {
    let ch = this.currentChar;
    while (ch >= 0) {
      if (ch === 0x0d) {
        ch = this.nextChar();
        if (ch === 0x0a) {
          this.nextChar();
        }
        break;
      } else if (ch === 0x0a) {
        this.nextChar();
        break;
      }
      ch = this.nextChar();
    }
  }
}
class Linearization {
  static create(stream) {
    function getInt(linDict, name, allowZeroValue = false) {
      const obj = linDict.get(name);
      if (Number.isInteger(obj) && (allowZeroValue ? obj >= 0 : obj > 0)) {
        return obj;
      }
      throw new Error(`The "${name}" parameter in the linearization ` + "dictionary is invalid.");
    }
    function getHints(linDict) {
      const hints = linDict.get("H");
      let hintsLength;
      if (Array.isArray(hints) && ((hintsLength = hints.length) === 2 || hintsLength === 4)) {
        for (let index = 0; index < hintsLength; index++) {
          const hint = hints[index];
          if (!(Number.isInteger(hint) && hint > 0)) {
            throw new Error(`Hint (${index}) in the linearization dictionary is invalid.`);
          }
        }
        return hints;
      }
      throw new Error("Hint array in the linearization dictionary is invalid.");
    }
    const parser = new Parser({
      lexer: new Lexer(stream),
      xref: null
    });
    const obj1 = parser.getObj();
    const obj2 = parser.getObj();
    const obj3 = parser.getObj();
    const linDict = parser.getObj();
    let obj, length;
    if (!(Number.isInteger(obj1) && Number.isInteger(obj2) && isCmd(obj3, "obj") && linDict instanceof Dict && typeof (obj = linDict.get("Linearized")) === "number" && obj > 0)) {
      return null;
    } else if ((length = getInt(linDict, "L")) !== stream.length) {
      throw new Error('The "L" parameter in the linearization dictionary ' + "does not equal the stream length.");
    }
    return {
      length,
      hints: getHints(linDict),
      objectNumberFirst: getInt(linDict, "O"),
      endFirst: getInt(linDict, "E"),
      numPages: getInt(linDict, "N"),
      mainXRefEntriesOffset: getInt(linDict, "T"),
      pageFirst: linDict.has("P") ? getInt(linDict, "P", true) : 0
    };
  }
}

;// ./src/core/cmap.js







const BUILT_IN_CMAPS = ["Adobe-GB1-UCS2", "Adobe-CNS1-UCS2", "Adobe-Japan1-UCS2", "Adobe-Korea1-UCS2", "78-EUC-H", "78-EUC-V", "78-H", "78-RKSJ-H", "78-RKSJ-V", "78-V", "78ms-RKSJ-H", "78ms-RKSJ-V", "83pv-RKSJ-H", "90ms-RKSJ-H", "90ms-RKSJ-V", "90msp-RKSJ-H", "90msp-RKSJ-V", "90pv-RKSJ-H", "90pv-RKSJ-V", "Add-H", "Add-RKSJ-H", "Add-RKSJ-V", "Add-V", "Adobe-CNS1-0", "Adobe-CNS1-1", "Adobe-CNS1-2", "Adobe-CNS1-3", "Adobe-CNS1-4", "Adobe-CNS1-5", "Adobe-CNS1-6", "Adobe-GB1-0", "Adobe-GB1-1", "Adobe-GB1-2", "Adobe-GB1-3", "Adobe-GB1-4", "Adobe-GB1-5", "Adobe-Japan1-0", "Adobe-Japan1-1", "Adobe-Japan1-2", "Adobe-Japan1-3", "Adobe-Japan1-4", "Adobe-Japan1-5", "Adobe-Japan1-6", "Adobe-Korea1-0", "Adobe-Korea1-1", "Adobe-Korea1-2", "B5-H", "B5-V", "B5pc-H", "B5pc-V", "CNS-EUC-H", "CNS-EUC-V", "CNS1-H", "CNS1-V", "CNS2-H", "CNS2-V", "ETHK-B5-H", "ETHK-B5-V", "ETen-B5-H", "ETen-B5-V", "ETenms-B5-H", "ETenms-B5-V", "EUC-H", "EUC-V", "Ext-H", "Ext-RKSJ-H", "Ext-RKSJ-V", "Ext-V", "GB-EUC-H", "GB-EUC-V", "GB-H", "GB-V", "GBK-EUC-H", "GBK-EUC-V", "GBK2K-H", "GBK2K-V", "GBKp-EUC-H", "GBKp-EUC-V", "GBT-EUC-H", "GBT-EUC-V", "GBT-H", "GBT-V", "GBTpc-EUC-H", "GBTpc-EUC-V", "GBpc-EUC-H", "GBpc-EUC-V", "H", "HKdla-B5-H", "HKdla-B5-V", "HKdlb-B5-H", "HKdlb-B5-V", "HKgccs-B5-H", "HKgccs-B5-V", "HKm314-B5-H", "HKm314-B5-V", "HKm471-B5-H", "HKm471-B5-V", "HKscs-B5-H", "HKscs-B5-V", "Hankaku", "Hiragana", "KSC-EUC-H", "KSC-EUC-V", "KSC-H", "KSC-Johab-H", "KSC-Johab-V", "KSC-V", "KSCms-UHC-H", "KSCms-UHC-HW-H", "KSCms-UHC-HW-V", "KSCms-UHC-V", "KSCpc-EUC-H", "KSCpc-EUC-V", "Katakana", "NWP-H", "NWP-V", "RKSJ-H", "RKSJ-V", "Roman", "UniCNS-UCS2-H", "UniCNS-UCS2-V", "UniCNS-UTF16-H", "UniCNS-UTF16-V", "UniCNS-UTF32-H", "UniCNS-UTF32-V", "UniCNS-UTF8-H", "UniCNS-UTF8-V", "UniGB-UCS2-H", "UniGB-UCS2-V", "UniGB-UTF16-H", "UniGB-UTF16-V", "UniGB-UTF32-H", "UniGB-UTF32-V", "UniGB-UTF8-H", "UniGB-UTF8-V", "UniJIS-UCS2-H", "UniJIS-UCS2-HW-H", "UniJIS-UCS2-HW-V", "UniJIS-UCS2-V", "UniJIS-UTF16-H", "UniJIS-UTF16-V", "UniJIS-UTF32-H", "UniJIS-UTF32-V", "UniJIS-UTF8-H", "UniJIS-UTF8-V", "UniJIS2004-UTF16-H", "UniJIS2004-UTF16-V", "UniJIS2004-UTF32-H", "UniJIS2004-UTF32-V", "UniJIS2004-UTF8-H", "UniJIS2004-UTF8-V", "UniJISPro-UCS2-HW-V", "UniJISPro-UCS2-V", "UniJISPro-UTF8-V", "UniJISX0213-UTF32-H", "UniJISX0213-UTF32-V", "UniJISX02132004-UTF32-H", "UniJISX02132004-UTF32-V", "UniKS-UCS2-H", "UniKS-UCS2-V", "UniKS-UTF16-H", "UniKS-UTF16-V", "UniKS-UTF32-H", "UniKS-UTF32-V", "UniKS-UTF8-H", "UniKS-UTF8-V", "V", "WP-Symbol"];
const MAX_MAP_RANGE = 2 ** 24 - 1;
class CMap {
  constructor(builtInCMap = false) {
    this.codespaceRanges = [[], [], [], []];
    this.numCodespaceRanges = 0;
    this._map = [];
    this.name = "";
    this.vertical = false;
    this.useCMap = null;
    this.builtInCMap = builtInCMap;
  }
  addCodespaceRange(n, low, high) {
    this.codespaceRanges[n - 1].push(low, high);
    this.numCodespaceRanges++;
  }
  mapCidRange(low, high, dstLow) {
    if (high - low > MAX_MAP_RANGE) {
      throw new Error("mapCidRange - ignoring data above MAX_MAP_RANGE.");
    }
    while (low <= high) {
      this._map[low++] = dstLow++;
    }
  }
  mapBfRange(low, high, dstLow) {
    if (high - low > MAX_MAP_RANGE) {
      throw new Error("mapBfRange - ignoring data above MAX_MAP_RANGE.");
    }
    const lastByte = dstLow.length - 1;
    while (low <= high) {
      this._map[low++] = dstLow;
      const nextCharCode = dstLow.charCodeAt(lastByte) + 1;
      if (nextCharCode > 0xff) {
        dstLow = dstLow.substring(0, lastByte - 1) + String.fromCharCode(dstLow.charCodeAt(lastByte - 1) + 1) + "\x00";
        continue;
      }
      dstLow = dstLow.substring(0, lastByte) + String.fromCharCode(nextCharCode);
    }
  }
  mapBfRangeToArray(low, high, array) {
    if (high - low > MAX_MAP_RANGE) {
      throw new Error("mapBfRangeToArray - ignoring data above MAX_MAP_RANGE.");
    }
    const ii = array.length;
    let i = 0;
    while (low <= high && i < ii) {
      this._map[low] = array[i++];
      ++low;
    }
  }
  mapOne(src, dst) {
    this._map[src] = dst;
  }
  lookup(code) {
    return this._map[code];
  }
  contains(code) {
    return this._map[code] !== undefined;
  }
  forEach(callback) {
    const map = this._map;
    const length = map.length;
    if (length <= 0x10000) {
      for (let i = 0; i < length; i++) {
        if (map[i] !== undefined) {
          callback(i, map[i]);
        }
      }
    } else {
      for (const i in map) {
        callback(i, map[i]);
      }
    }
  }
  charCodeOf(value) {
    const map = this._map;
    if (map.length <= 0x10000) {
      return map.indexOf(value);
    }
    for (const charCode in map) {
      if (map[charCode] === value) {
        return charCode | 0;
      }
    }
    return -1;
  }
  getMap() {
    return this._map;
  }
  readCharCode(str, offset, out) {
    let c = 0;
    const codespaceRanges = this.codespaceRanges;
    for (let n = 0, nn = codespaceRanges.length; n < nn; n++) {
      c = (c << 8 | str.charCodeAt(offset + n)) >>> 0;
      const codespaceRange = codespaceRanges[n];
      for (let k = 0, kk = codespaceRange.length; k < kk;) {
        const low = codespaceRange[k++];
        const high = codespaceRange[k++];
        if (c >= low && c <= high) {
          out.charcode = c;
          out.length = n + 1;
          return;
        }
      }
    }
    out.charcode = 0;
    out.length = 1;
  }
  getCharCodeLength(charCode) {
    const codespaceRanges = this.codespaceRanges;
    for (let n = 0, nn = codespaceRanges.length; n < nn; n++) {
      const codespaceRange = codespaceRanges[n];
      for (let k = 0, kk = codespaceRange.length; k < kk;) {
        const low = codespaceRange[k++];
        const high = codespaceRange[k++];
        if (charCode >= low && charCode <= high) {
          return n + 1;
        }
      }
    }
    return 1;
  }
  get length() {
    return this._map.length;
  }
  get isIdentityCMap() {
    if (!(this.name === "Identity-H" || this.name === "Identity-V")) {
      return false;
    }
    if (this._map.length !== 0x10000) {
      return false;
    }
    for (let i = 0; i < 0x10000; i++) {
      if (this._map[i] !== i) {
        return false;
      }
    }
    return true;
  }
}
class IdentityCMap extends CMap {
  constructor(vertical, n) {
    super();
    this.vertical = vertical;
    this.addCodespaceRange(n, 0, 0xffff);
  }
  mapCidRange(low, high, dstLow) {
    unreachable("should not call mapCidRange");
  }
  mapBfRange(low, high, dstLow) {
    unreachable("should not call mapBfRange");
  }
  mapBfRangeToArray(low, high, array) {
    unreachable("should not call mapBfRangeToArray");
  }
  mapOne(src, dst) {
    unreachable("should not call mapCidOne");
  }
  lookup(code) {
    return Number.isInteger(code) && code <= 0xffff ? code : undefined;
  }
  contains(code) {
    return Number.isInteger(code) && code <= 0xffff;
  }
  forEach(callback) {
    for (let i = 0; i <= 0xffff; i++) {
      callback(i, i);
    }
  }
  charCodeOf(value) {
    return Number.isInteger(value) && value <= 0xffff ? value : -1;
  }
  getMap() {
    const map = new Array(0x10000);
    for (let i = 0; i <= 0xffff; i++) {
      map[i] = i;
    }
    return map;
  }
  get length() {
    return 0x10000;
  }
  get isIdentityCMap() {
    unreachable("should not access .isIdentityCMap");
  }
}
function strToInt(str) {
  let a = 0;
  for (let i = 0; i < str.length; i++) {
    a = a << 8 | str.charCodeAt(i);
  }
  return a >>> 0;
}
function expectString(obj) {
  if (typeof obj !== "string") {
    throw new FormatError("Malformed CMap: expected string.");
  }
}
function expectInt(obj) {
  if (!Number.isInteger(obj)) {
    throw new FormatError("Malformed CMap: expected int.");
  }
}
function parseBfChar(cMap, lexer) {
  while (true) {
    let obj = lexer.getObj();
    if (obj === EOF) {
      break;
    }
    if (isCmd(obj, "endbfchar")) {
      return;
    }
    expectString(obj);
    const src = strToInt(obj);
    obj = lexer.getObj();
    expectString(obj);
    const dst = obj;
    cMap.mapOne(src, dst);
  }
}
function parseBfRange(cMap, lexer) {
  while (true) {
    let obj = lexer.getObj();
    if (obj === EOF) {
      break;
    }
    if (isCmd(obj, "endbfrange")) {
      return;
    }
    expectString(obj);
    const low = strToInt(obj);
    obj = lexer.getObj();
    expectString(obj);
    const high = strToInt(obj);
    obj = lexer.getObj();
    if (Number.isInteger(obj) || typeof obj === "string") {
      const dstLow = Number.isInteger(obj) ? String.fromCharCode(obj) : obj;
      cMap.mapBfRange(low, high, dstLow);
    } else if (isCmd(obj, "[")) {
      obj = lexer.getObj();
      const array = [];
      while (!isCmd(obj, "]") && obj !== EOF) {
        array.push(obj);
        obj = lexer.getObj();
      }
      cMap.mapBfRangeToArray(low, high, array);
    } else {
      break;
    }
  }
  throw new FormatError("Invalid bf range.");
}
function parseCidChar(cMap, lexer) {
  while (true) {
    let obj = lexer.getObj();
    if (obj === EOF) {
      break;
    }
    if (isCmd(obj, "endcidchar")) {
      return;
    }
    expectString(obj);
    const src = strToInt(obj);
    obj = lexer.getObj();
    expectInt(obj);
    const dst = obj;
    cMap.mapOne(src, dst);
  }
}
function parseCidRange(cMap, lexer) {
  while (true) {
    let obj = lexer.getObj();
    if (obj === EOF) {
      break;
    }
    if (isCmd(obj, "endcidrange")) {
      return;
    }
    expectString(obj);
    const low = strToInt(obj);
    obj = lexer.getObj();
    expectString(obj);
    const high = strToInt(obj);
    obj = lexer.getObj();
    expectInt(obj);
    const dstLow = obj;
    cMap.mapCidRange(low, high, dstLow);
  }
}
function parseCodespaceRange(cMap, lexer) {
  while (true) {
    let obj = lexer.getObj();
    if (obj === EOF) {
      break;
    }
    if (isCmd(obj, "endcodespacerange")) {
      return;
    }
    if (typeof obj !== "string") {
      break;
    }
    const low = strToInt(obj);
    obj = lexer.getObj();
    if (typeof obj !== "string") {
      break;
    }
    const high = strToInt(obj);
    cMap.addCodespaceRange(obj.length, low, high);
  }
  throw new FormatError("Invalid codespace range.");
}
function parseWMode(cMap, lexer) {
  const obj = lexer.getObj();
  if (Number.isInteger(obj)) {
    cMap.vertical = !!obj;
  }
}
function parseCMapName(cMap, lexer) {
  const obj = lexer.getObj();
  if (obj instanceof Name) {
    cMap.name = obj.name;
  }
}
async function parseCMap(cMap, lexer, fetchBuiltInCMap, useCMap) {
  let previous, embeddedUseCMap;
  objLoop: while (true) {
    try {
      const obj = lexer.getObj();
      if (obj === EOF) {
        break;
      } else if (obj instanceof Name) {
        if (obj.name === "WMode") {
          parseWMode(cMap, lexer);
        } else if (obj.name === "CMapName") {
          parseCMapName(cMap, lexer);
        }
        previous = obj;
      } else if (obj instanceof Cmd) {
        switch (obj.cmd) {
          case "endcmap":
            break objLoop;
          case "usecmap":
            if (previous instanceof Name) {
              embeddedUseCMap = previous.name;
            }
            break;
          case "begincodespacerange":
            parseCodespaceRange(cMap, lexer);
            break;
          case "beginbfchar":
            parseBfChar(cMap, lexer);
            break;
          case "begincidchar":
            parseCidChar(cMap, lexer);
            break;
          case "beginbfrange":
            parseBfRange(cMap, lexer);
            break;
          case "begincidrange":
            parseCidRange(cMap, lexer);
            break;
        }
      }
    } catch (ex) {
      if (ex instanceof MissingDataException) {
        throw ex;
      }
      warn("Invalid cMap data: " + ex);
      continue;
    }
  }
  if (!useCMap && embeddedUseCMap) {
    useCMap = embeddedUseCMap;
  }
  if (useCMap) {
    return extendCMap(cMap, fetchBuiltInCMap, useCMap);
  }
  return cMap;
}
async function extendCMap(cMap, fetchBuiltInCMap, useCMap) {
  cMap.useCMap = await createBuiltInCMap(useCMap, fetchBuiltInCMap);
  if (cMap.numCodespaceRanges === 0) {
    const useCodespaceRanges = cMap.useCMap.codespaceRanges;
    for (let i = 0; i < useCodespaceRanges.length; i++) {
      cMap.codespaceRanges[i] = useCodespaceRanges[i].slice();
    }
    cMap.numCodespaceRanges = cMap.useCMap.numCodespaceRanges;
  }
  cMap.useCMap.forEach(function (key, value) {
    if (!cMap.contains(key)) {
      cMap.mapOne(key, value);
    }
  });
  return cMap;
}
async function createBuiltInCMap(name, fetchBuiltInCMap) {
  if (name === "Identity-H") {
    return new IdentityCMap(false, 2);
  } else if (name === "Identity-V") {
    return new IdentityCMap(true, 2);
  }
  if (!BUILT_IN_CMAPS.includes(name)) {
    throw new Error("Unknown CMap name: " + name);
  }
  if (!fetchBuiltInCMap) {
    throw new Error("Built-in CMap parameters are not provided.");
  }
  const {
    cMapData,
    isCompressed
  } = await fetchBuiltInCMap(name);
  const cMap = new CMap(true);
  if (isCompressed) {
    return new BinaryCMapReader().process(cMapData, cMap, useCMap => extendCMap(cMap, fetchBuiltInCMap, useCMap));
  }
  const lexer = new Lexer(new Stream(cMapData));
  return parseCMap(cMap, lexer, fetchBuiltInCMap, null);
}
class CMapFactory {
  static async create({
    encoding,
    fetchBuiltInCMap,
    useCMap
  }) {
    if (encoding instanceof Name) {
      return createBuiltInCMap(encoding.name, fetchBuiltInCMap);
    } else if (encoding instanceof BaseStream) {
      if (encoding.isAsync) {
        const bytes = await encoding.asyncGetBytes();
        if (bytes) {
          encoding = new Stream(bytes, 0, bytes.length, encoding.dict);
        }
      }
      const parsedCMap = await parseCMap(new CMap(), new Lexer(encoding), fetchBuiltInCMap, useCMap);
      if (parsedCMap.isIdentityCMap) {
        return createBuiltInCMap(parsedCMap.name, fetchBuiltInCMap);
      }
      return parsedCMap;
    }
    throw new Error("Encoding required.");
  }
}

;// ./src/shared/obj_bin_transform_utils.js
class CSS_FONT_INFO {
  static strings = ["fontFamily", "fontWeight", "italicAngle"];
}
class SYSTEM_FONT_INFO {
  static strings = ["css", "loadedName", "baseFontName", "src"];
}
class FONT_INFO {
  static bools = ["black", "bold", "disableFontFace", "fontExtraProperties", "isInvalidPDFjsFont", "isType3Font", "italic", "missingFile", "remeasure", "vertical"];
  static numbers = ["ascent", "defaultWidth", "descent"];
  static strings = ["fallbackName", "loadedName", "mimetype", "name"];
  static OFFSET_NUMBERS = Math.ceil(this.bools.length * 2 / 8);
  static OFFSET_BBOX = this.OFFSET_NUMBERS + this.numbers.length * 8;
  static OFFSET_FONT_MATRIX = this.OFFSET_BBOX + 1 + 2 * 4;
  static OFFSET_DEFAULT_VMETRICS = this.OFFSET_FONT_MATRIX + 1 + 8 * 6;
  static OFFSET_STRINGS = this.OFFSET_DEFAULT_VMETRICS + 1 + 2 * 3;
}
class PATTERN_INFO {
  static KIND = 0;
  static HAS_BBOX = 1;
  static HAS_BACKGROUND = 2;
  static SHADING_TYPE = 3;
  static N_COORD = 4;
  static N_COLOR = 8;
  static N_STOP = 12;
  static N_FIGURES = 16;
}

;// ./src/core/obj_bin_transform_core.js


function compileCssFontInfo(info) {
  const encoder = new TextEncoder();
  const encodedStrings = {};
  let stringsLength = 0;
  for (const prop of CSS_FONT_INFO.strings) {
    const encoded = encoder.encode(info[prop]);
    encodedStrings[prop] = encoded;
    stringsLength += 4 + encoded.length;
  }
  const buffer = new ArrayBuffer(stringsLength);
  const data = new Uint8Array(buffer);
  const view = new DataView(buffer);
  let offset = 0;
  for (const prop of CSS_FONT_INFO.strings) {
    const encoded = encodedStrings[prop];
    const length = encoded.length;
    view.setUint32(offset, length);
    data.set(encoded, offset + 4);
    offset += 4 + length;
  }
  assert(offset === buffer.byteLength, "compileCssFontInfo: Buffer overflow");
  return buffer;
}
function compileSystemFontInfo(info) {
  const encoder = new TextEncoder();
  const encodedStrings = {};
  let stringsLength = 0;
  for (const prop of SYSTEM_FONT_INFO.strings) {
    const encoded = encoder.encode(info[prop]);
    encodedStrings[prop] = encoded;
    stringsLength += 4 + encoded.length;
  }
  stringsLength += 4;
  let encodedStyleStyle,
    encodedStyleWeight,
    lengthEstimate = 1 + stringsLength;
  if (info.style) {
    encodedStyleStyle = encoder.encode(info.style.style);
    encodedStyleWeight = encoder.encode(info.style.weight);
    lengthEstimate += 4 + encodedStyleStyle.length + 4 + encodedStyleWeight.length;
  }
  const buffer = new ArrayBuffer(lengthEstimate);
  const data = new Uint8Array(buffer);
  const view = new DataView(buffer);
  let offset = 0;
  view.setUint8(offset++, info.guessFallback ? 1 : 0);
  view.setUint32(offset, 0);
  offset += 4;
  stringsLength = 0;
  for (const prop of SYSTEM_FONT_INFO.strings) {
    const encoded = encodedStrings[prop];
    const length = encoded.length;
    stringsLength += 4 + length;
    view.setUint32(offset, length);
    data.set(encoded, offset + 4);
    offset += 4 + length;
  }
  view.setUint32(offset - stringsLength - 4, stringsLength);
  if (info.style) {
    view.setUint32(offset, encodedStyleStyle.length);
    data.set(encodedStyleStyle, offset + 4);
    offset += 4 + encodedStyleStyle.length;
    view.setUint32(offset, encodedStyleWeight.length);
    data.set(encodedStyleWeight, offset + 4);
    offset += 4 + encodedStyleWeight.length;
  }
  assert(offset <= buffer.byteLength, "compileSystemFontInfo: Buffer overflow");
  return buffer.transferToFixedLength(offset);
}
function compileFontInfo(font) {
  const systemFontInfoBuffer = font.systemFontInfo ? compileSystemFontInfo(font.systemFontInfo) : null;
  const cssFontInfoBuffer = font.cssFontInfo ? compileCssFontInfo(font.cssFontInfo) : null;
  const encoder = new TextEncoder();
  const encodedStrings = {};
  let stringsLength = 0;
  for (const prop of FONT_INFO.strings) {
    encodedStrings[prop] = encoder.encode(font[prop]);
    stringsLength += 4 + encodedStrings[prop].length;
  }
  const lengthEstimate = FONT_INFO.OFFSET_STRINGS + 4 + stringsLength + 4 + (systemFontInfoBuffer?.byteLength ?? 0) + 4 + (cssFontInfoBuffer?.byteLength ?? 0) + 4 + (font.data?.length ?? 0);
  const buffer = new ArrayBuffer(lengthEstimate);
  const data = new Uint8Array(buffer);
  const view = new DataView(buffer);
  let offset = 0;
  const numBools = FONT_INFO.bools.length;
  let boolByte = 0,
    boolBit = 0;
  for (let i = 0; i < numBools; i++) {
    const value = font[FONT_INFO.bools[i]];
    const bits = value === undefined ? 0x00 : value ? 0x02 : 0x01;
    boolByte |= bits << boolBit;
    boolBit += 2;
    if (boolBit === 8 || i === numBools - 1) {
      view.setUint8(offset++, boolByte);
      boolByte = 0;
      boolBit = 0;
    }
  }
  assert(offset === FONT_INFO.OFFSET_NUMBERS, "compileFontInfo: Boolean properties offset mismatch");
  for (const prop of FONT_INFO.numbers) {
    view.setFloat64(offset, font[prop]);
    offset += 8;
  }
  assert(offset === FONT_INFO.OFFSET_BBOX, "compileFontInfo: Number properties offset mismatch");
  if (font.bbox) {
    view.setUint8(offset++, 4);
    for (const coord of font.bbox) {
      view.setInt16(offset, coord, true);
      offset += 2;
    }
  } else {
    view.setUint8(offset++, 0);
    offset += 2 * 4;
  }
  assert(offset === FONT_INFO.OFFSET_FONT_MATRIX, "compileFontInfo: BBox properties offset mismatch");
  if (font.fontMatrix) {
    view.setUint8(offset++, 6);
    for (const point of font.fontMatrix) {
      view.setFloat64(offset, point, true);
      offset += 8;
    }
  } else {
    view.setUint8(offset++, 0);
    offset += 8 * 6;
  }
  assert(offset === FONT_INFO.OFFSET_DEFAULT_VMETRICS, "compileFontInfo: FontMatrix properties offset mismatch");
  if (font.defaultVMetrics) {
    view.setUint8(offset++, 3);
    for (const metric of font.defaultVMetrics) {
      view.setInt16(offset, metric, true);
      offset += 2;
    }
  } else {
    view.setUint8(offset++, 0);
    offset += 3 * 2;
  }
  assert(offset === FONT_INFO.OFFSET_STRINGS, "compileFontInfo: DefaultVMetrics properties offset mismatch");
  view.setUint32(FONT_INFO.OFFSET_STRINGS, 0);
  offset += 4;
  for (const prop of FONT_INFO.strings) {
    const encoded = encodedStrings[prop];
    const length = encoded.length;
    view.setUint32(offset, length);
    data.set(encoded, offset + 4);
    offset += 4 + length;
  }
  view.setUint32(FONT_INFO.OFFSET_STRINGS, offset - FONT_INFO.OFFSET_STRINGS - 4);
  if (!systemFontInfoBuffer) {
    view.setUint32(offset, 0);
    offset += 4;
  } else {
    const length = systemFontInfoBuffer.byteLength;
    view.setUint32(offset, length);
    assert(offset + 4 + length <= buffer.byteLength, "compileFontInfo: Buffer overflow at systemFontInfo");
    data.set(new Uint8Array(systemFontInfoBuffer), offset + 4);
    offset += 4 + length;
  }
  if (!cssFontInfoBuffer) {
    view.setUint32(offset, 0);
    offset += 4;
  } else {
    const length = cssFontInfoBuffer.byteLength;
    view.setUint32(offset, length);
    assert(offset + 4 + length <= buffer.byteLength, "compileFontInfo: Buffer overflow at cssFontInfo");
    data.set(new Uint8Array(cssFontInfoBuffer), offset + 4);
    offset += 4 + length;
  }
  if (font.data === undefined) {
    view.setUint32(offset, 0);
    offset += 4;
  } else {
    view.setUint32(offset, font.data.length);
    data.set(font.data, offset + 4);
    offset += 4 + font.data.length;
  }
  assert(offset <= buffer.byteLength, "compileFontInfo: Buffer overflow");
  return buffer.transferToFixedLength(offset);
}
function compilePatternInfo(ir) {
  let kind,
    bbox = null,
    coords = [],
    colors = [],
    colorStops = [],
    figures = [],
    shadingType = null,
    background = null;
  switch (ir[0]) {
    case "RadialAxial":
      kind = ir[1] === "axial" ? 1 : 2;
      bbox = ir[2];
      colorStops = ir[3];
      if (kind === 1) {
        coords.push(...ir[4], ...ir[5]);
      } else {
        coords.push(ir[4][0], ir[4][1], ir[6], ir[5][0], ir[5][1], ir[7]);
      }
      break;
    case "Mesh":
      kind = 3;
      shadingType = ir[1];
      coords = ir[2];
      colors = ir[3];
      figures = ir[4] || [];
      bbox = ir[6];
      background = ir[7];
      break;
    default:
      throw new Error(`Unsupported pattern type: ${ir[0]}`);
  }
  const nCoord = Math.floor(coords.length / 2);
  const nColor = Math.floor(colors.length / 3);
  const nStop = colorStops.length;
  const nFigures = figures.length;
  let figuresSize = 0;
  for (const figure of figures) {
    figuresSize += 1;
    figuresSize = Math.ceil(figuresSize / 4) * 4;
    figuresSize += 4 + figure.coords.length * 4;
    figuresSize += 4 + figure.colors.length * 4;
    if (figure.verticesPerRow !== undefined) {
      figuresSize += 4;
    }
  }
  const byteLen = 20 + nCoord * 8 + nColor * 3 + nStop * 8 + (bbox ? 16 : 0) + (background ? 3 : 0) + figuresSize;
  const buffer = new ArrayBuffer(byteLen);
  const dataView = new DataView(buffer);
  const u8data = new Uint8Array(buffer);
  dataView.setUint8(PATTERN_INFO.KIND, kind);
  dataView.setUint8(PATTERN_INFO.HAS_BBOX, bbox ? 1 : 0);
  dataView.setUint8(PATTERN_INFO.HAS_BACKGROUND, background ? 1 : 0);
  dataView.setUint8(PATTERN_INFO.SHADING_TYPE, shadingType);
  dataView.setUint32(PATTERN_INFO.N_COORD, nCoord, true);
  dataView.setUint32(PATTERN_INFO.N_COLOR, nColor, true);
  dataView.setUint32(PATTERN_INFO.N_STOP, nStop, true);
  dataView.setUint32(PATTERN_INFO.N_FIGURES, nFigures, true);
  let offset = 20;
  const coordsView = new Float32Array(buffer, offset, nCoord * 2);
  coordsView.set(coords);
  offset += nCoord * 8;
  u8data.set(colors, offset);
  offset += nColor * 3;
  for (const [pos, hex] of colorStops) {
    dataView.setFloat32(offset, pos, true);
    offset += 4;
    dataView.setUint32(offset, parseInt(hex.slice(1), 16), true);
    offset += 4;
  }
  if (bbox) {
    for (const v of bbox) {
      dataView.setFloat32(offset, v, true);
      offset += 4;
    }
  }
  if (background) {
    u8data.set(background, offset);
    offset += 3;
  }
  for (let i = 0; i < figures.length; i++) {
    const figure = figures[i];
    dataView.setUint8(offset, figure.type);
    offset += 1;
    offset = Math.ceil(offset / 4) * 4;
    dataView.setUint32(offset, figure.coords.length, true);
    offset += 4;
    const figureCoordsView = new Int32Array(buffer, offset, figure.coords.length);
    figureCoordsView.set(figure.coords);
    offset += figure.coords.length * 4;
    dataView.setUint32(offset, figure.colors.length, true);
    offset += 4;
    const colorsView = new Int32Array(buffer, offset, figure.colors.length);
    colorsView.set(figure.colors);
    offset += figure.colors.length * 4;
    if (figure.verticesPerRow !== undefined) {
      dataView.setUint32(offset, figure.verticesPerRow, true);
      offset += 4;
    }
  }
  return buffer;
}
function compileFontPathInfo(path) {
  return path.slice().buffer;
}

;// ./src/core/encodings.js
const ExpertEncoding = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "space", "exclamsmall", "Hungarumlautsmall", "", "dollaroldstyle", "dollarsuperior", "ampersandsmall", "Acutesmall", "parenleftsuperior", "parenrightsuperior", "twodotenleader", "onedotenleader", "comma", "hyphen", "period", "fraction", "zerooldstyle", "oneoldstyle", "twooldstyle", "threeoldstyle", "fouroldstyle", "fiveoldstyle", "sixoldstyle", "sevenoldstyle", "eightoldstyle", "nineoldstyle", "colon", "semicolon", "commasuperior", "threequartersemdash", "periodsuperior", "questionsmall", "", "asuperior", "bsuperior", "centsuperior", "dsuperior", "esuperior", "", "", "", "isuperior", "", "", "lsuperior", "msuperior", "nsuperior", "osuperior", "", "", "rsuperior", "ssuperior", "tsuperior", "", "ff", "fi", "fl", "ffi", "ffl", "parenleftinferior", "", "parenrightinferior", "Circumflexsmall", "hyphensuperior", "Gravesmall", "Asmall", "Bsmall", "Csmall", "Dsmall", "Esmall", "Fsmall", "Gsmall", "Hsmall", "Ismall", "Jsmall", "Ksmall", "Lsmall", "Msmall", "Nsmall", "Osmall", "Psmall", "Qsmall", "Rsmall", "Ssmall", "Tsmall", "Usmall", "Vsmall", "Wsmall", "Xsmall", "Ysmall", "Zsmall", "colonmonetary", "onefitted", "rupiah", "Tildesmall", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "exclamdownsmall", "centoldstyle", "Lslashsmall", "", "", "Scaronsmall", "Zcaronsmall", "Dieresissmall", "Brevesmall", "Caronsmall", "", "Dotaccentsmall", "", "", "Macronsmall", "", "", "figuredash", "hypheninferior", "", "", "Ogoneksmall", "Ringsmall", "Cedillasmall", "", "", "", "onequarter", "onehalf", "threequarters", "questiondownsmall", "oneeighth", "threeeighths", "fiveeighths", "seveneighths", "onethird", "twothirds", "", "", "zerosuperior", "onesuperior", "twosuperior", "threesuperior", "foursuperior", "fivesuperior", "sixsuperior", "sevensuperior", "eightsuperior", "ninesuperior", "zeroinferior", "oneinferior", "twoinferior", "threeinferior", "fourinferior", "fiveinferior", "sixinferior", "seveninferior", "eightinferior", "nineinferior", "centinferior", "dollarinferior", "periodinferior", "commainferior", "Agravesmall", "Aacutesmall", "Acircumflexsmall", "Atildesmall", "Adieresissmall", "Aringsmall", "AEsmall", "Ccedillasmall", "Egravesmall", "Eacutesmall", "Ecircumflexsmall", "Edieresissmall", "Igravesmall", "Iacutesmall", "Icircumflexsmall", "Idieresissmall", "Ethsmall", "Ntildesmall", "Ogravesmall", "Oacutesmall", "Ocircumflexsmall", "Otildesmall", "Odieresissmall", "OEsmall", "Oslashsmall", "Ugravesmall", "Uacutesmall", "Ucircumflexsmall", "Udieresissmall", "Yacutesmall", "Thornsmall", "Ydieresissmall"];
const MacExpertEncoding = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "space", "exclamsmall", "Hungarumlautsmall", "centoldstyle", "dollaroldstyle", "dollarsuperior", "ampersandsmall", "Acutesmall", "parenleftsuperior", "parenrightsuperior", "twodotenleader", "onedotenleader", "comma", "hyphen", "period", "fraction", "zerooldstyle", "oneoldstyle", "twooldstyle", "threeoldstyle", "fouroldstyle", "fiveoldstyle", "sixoldstyle", "sevenoldstyle", "eightoldstyle", "nineoldstyle", "colon", "semicolon", "", "threequartersemdash", "", "questionsmall", "", "", "", "", "Ethsmall", "", "", "onequarter", "onehalf", "threequarters", "oneeighth", "threeeighths", "fiveeighths", "seveneighths", "onethird", "twothirds", "", "", "", "", "", "", "ff", "fi", "fl", "ffi", "ffl", "parenleftinferior", "", "parenrightinferior", "Circumflexsmall", "hypheninferior", "Gravesmall", "Asmall", "Bsmall", "Csmall", "Dsmall", "Esmall", "Fsmall", "Gsmall", "Hsmall", "Ismall", "Jsmall", "Ksmall", "Lsmall", "Msmall", "Nsmall", "Osmall", "Psmall", "Qsmall", "Rsmall", "Ssmall", "Tsmall", "Usmall", "Vsmall", "Wsmall", "Xsmall", "Ysmall", "Zsmall", "colonmonetary", "onefitted", "rupiah", "Tildesmall", "", "", "asuperior", "centsuperior", "", "", "", "", "Aacutesmall", "Agravesmall", "Acircumflexsmall", "Adieresissmall", "Atildesmall", "Aringsmall", "Ccedillasmall", "Eacutesmall", "Egravesmall", "Ecircumflexsmall", "Edieresissmall", "Iacutesmall", "Igravesmall", "Icircumflexsmall", "Idieresissmall", "Ntildesmall", "Oacutesmall", "Ogravesmall", "Ocircumflexsmall", "Odieresissmall", "Otildesmall", "Uacutesmall", "Ugravesmall", "Ucircumflexsmall", "Udieresissmall", "", "eightsuperior", "fourinferior", "threeinferior", "sixinferior", "eightinferior", "seveninferior", "Scaronsmall", "", "centinferior", "twoinferior", "", "Dieresissmall", "", "Caronsmall", "osuperior", "fiveinferior", "", "commainferior", "periodinferior", "Yacutesmall", "", "dollarinferior", "", "", "Thornsmall", "", "nineinferior", "zeroinferior", "Zcaronsmall", "AEsmall", "Oslashsmall", "questiondownsmall", "oneinferior", "Lslashsmall", "", "", "", "", "", "", "Cedillasmall", "", "", "", "", "", "OEsmall", "figuredash", "hyphensuperior", "", "", "", "", "exclamdownsmall", "", "Ydieresissmall", "", "onesuperior", "twosuperior", "threesuperior", "foursuperior", "fivesuperior", "sixsuperior", "sevensuperior", "ninesuperior", "zerosuperior", "", "esuperior", "rsuperior", "tsuperior", "", "", "isuperior", "ssuperior", "dsuperior", "", "", "", "", "", "lsuperior", "Ogoneksmall", "Brevesmall", "Macronsmall", "bsuperior", "nsuperior", "msuperior", "commasuperior", "periodsuperior", "Dotaccentsmall", "Ringsmall", "", "", "", ""];
const MacRomanEncoding = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "space", "exclam", "quotedbl", "numbersign", "dollar", "percent", "ampersand", "quotesingle", "parenleft", "parenright", "asterisk", "plus", "comma", "hyphen", "period", "slash", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "at", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "bracketleft", "backslash", "bracketright", "asciicircum", "underscore", "grave", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "braceleft", "bar", "braceright", "asciitilde", "", "Adieresis", "Aring", "Ccedilla", "Eacute", "Ntilde", "Odieresis", "Udieresis", "aacute", "agrave", "acircumflex", "adieresis", "atilde", "aring", "ccedilla", "eacute", "egrave", "ecircumflex", "edieresis", "iacute", "igrave", "icircumflex", "idieresis", "ntilde", "oacute", "ograve", "ocircumflex", "odieresis", "otilde", "uacute", "ugrave", "ucircumflex", "udieresis", "dagger", "degree", "cent", "sterling", "section", "bullet", "paragraph", "germandbls", "registered", "copyright", "trademark", "acute", "dieresis", "notequal", "AE", "Oslash", "infinity", "plusminus", "lessequal", "greaterequal", "yen", "mu", "partialdiff", "summation", "product", "pi", "integral", "ordfeminine", "ordmasculine", "Omega", "ae", "oslash", "questiondown", "exclamdown", "logicalnot", "radical", "florin", "approxequal", "Delta", "guillemotleft", "guillemotright", "ellipsis", "space", "Agrave", "Atilde", "Otilde", "OE", "oe", "endash", "emdash", "quotedblleft", "quotedblright", "quoteleft", "quoteright", "divide", "lozenge", "ydieresis", "Ydieresis", "fraction", "currency", "guilsinglleft", "guilsinglright", "fi", "fl", "daggerdbl", "periodcentered", "quotesinglbase", "quotedblbase", "perthousand", "Acircumflex", "Ecircumflex", "Aacute", "Edieresis", "Egrave", "Iacute", "Icircumflex", "Idieresis", "Igrave", "Oacute", "Ocircumflex", "apple", "Ograve", "Uacute", "Ucircumflex", "Ugrave", "dotlessi", "circumflex", "tilde", "macron", "breve", "dotaccent", "ring", "cedilla", "hungarumlaut", "ogonek", "caron"];
const StandardEncoding = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "space", "exclam", "quotedbl", "numbersign", "dollar", "percent", "ampersand", "quoteright", "parenleft", "parenright", "asterisk", "plus", "comma", "hyphen", "period", "slash", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "at", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "bracketleft", "backslash", "bracketright", "asciicircum", "underscore", "quoteleft", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "braceleft", "bar", "braceright", "asciitilde", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "exclamdown", "cent", "sterling", "fraction", "yen", "florin", "section", "currency", "quotesingle", "quotedblleft", "guillemotleft", "guilsinglleft", "guilsinglright", "fi", "fl", "", "endash", "dagger", "daggerdbl", "periodcentered", "", "paragraph", "bullet", "quotesinglbase", "quotedblbase", "quotedblright", "guillemotright", "ellipsis", "perthousand", "", "questiondown", "", "grave", "acute", "circumflex", "tilde", "macron", "breve", "dotaccent", "dieresis", "", "ring", "cedilla", "", "hungarumlaut", "ogonek", "caron", "emdash", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "AE", "", "ordfeminine", "", "", "", "", "Lslash", "Oslash", "OE", "ordmasculine", "", "", "", "", "", "ae", "", "", "", "dotlessi", "", "", "lslash", "oslash", "oe", "germandbls", "", "", "", ""];
const WinAnsiEncoding = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "space", "exclam", "quotedbl", "numbersign", "dollar", "percent", "ampersand", "quotesingle", "parenleft", "parenright", "asterisk", "plus", "comma", "hyphen", "period", "slash", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "at", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "bracketleft", "backslash", "bracketright", "asciicircum", "underscore", "grave", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "braceleft", "bar", "braceright", "asciitilde", "bullet", "Euro", "bullet", "quotesinglbase", "florin", "quotedblbase", "ellipsis", "dagger", "daggerdbl", "circumflex", "perthousand", "Scaron", "guilsinglleft", "OE", "bullet", "Zcaron", "bullet", "bullet", "quoteleft", "quoteright", "quotedblleft", "quotedblright", "bullet", "endash", "emdash", "tilde", "trademark", "scaron", "guilsinglright", "oe", "bullet", "zcaron", "Ydieresis", "space", "exclamdown", "cent", "sterling", "currency", "yen", "brokenbar", "section", "dieresis", "copyright", "ordfeminine", "guillemotleft", "logicalnot", "hyphen", "registered", "macron", "degree", "plusminus", "twosuperior", "threesuperior", "acute", "mu", "paragraph", "periodcentered", "cedilla", "onesuperior", "ordmasculine", "guillemotright", "onequarter", "onehalf", "threequarters", "questiondown", "Agrave", "Aacute", "Acircumflex", "Atilde", "Adieresis", "Aring", "AE", "Ccedilla", "Egrave", "Eacute", "Ecircumflex", "Edieresis", "Igrave", "Iacute", "Icircumflex", "Idieresis", "Eth", "Ntilde", "Ograve", "Oacute", "Ocircumflex", "Otilde", "Odieresis", "multiply", "Oslash", "Ugrave", "Uacute", "Ucircumflex", "Udieresis", "Yacute", "Thorn", "germandbls", "agrave", "aacute", "acircumflex", "atilde", "adieresis", "aring", "ae", "ccedilla", "egrave", "eacute", "ecircumflex", "edieresis", "igrave", "iacute", "icircumflex", "idieresis", "eth", "ntilde", "ograve", "oacute", "ocircumflex", "otilde", "odieresis", "divide", "oslash", "ugrave", "uacute", "ucircumflex", "udieresis", "yacute", "thorn", "ydieresis"];
const SymbolSetEncoding = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "space", "exclam", "universal", "numbersign", "existential", "percent", "ampersand", "suchthat", "parenleft", "parenright", "asteriskmath", "plus", "comma", "minus", "period", "slash", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "congruent", "Alpha", "Beta", "Chi", "Delta", "Epsilon", "Phi", "Gamma", "Eta", "Iota", "theta1", "Kappa", "Lambda", "Mu", "Nu", "Omicron", "Pi", "Theta", "Rho", "Sigma", "Tau", "Upsilon", "sigma1", "Omega", "Xi", "Psi", "Zeta", "bracketleft", "therefore", "bracketright", "perpendicular", "underscore", "radicalex", "alpha", "beta", "chi", "delta", "epsilon", "phi", "gamma", "eta", "iota", "phi1", "kappa", "lambda", "mu", "nu", "omicron", "pi", "theta", "rho", "sigma", "tau", "upsilon", "omega1", "omega", "xi", "psi", "zeta", "braceleft", "bar", "braceright", "similar", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Euro", "Upsilon1", "minute", "lessequal", "fraction", "infinity", "florin", "club", "diamond", "heart", "spade", "arrowboth", "arrowleft", "arrowup", "arrowright", "arrowdown", "degree", "plusminus", "second", "greaterequal", "multiply", "proportional", "partialdiff", "bullet", "divide", "notequal", "equivalence", "approxequal", "ellipsis", "arrowvertex", "arrowhorizex", "carriagereturn", "aleph", "Ifraktur", "Rfraktur", "weierstrass", "circlemultiply", "circleplus", "emptyset", "intersection", "union", "propersuperset", "reflexsuperset", "notsubset", "propersubset", "reflexsubset", "element", "notelement", "angle", "gradient", "registerserif", "copyrightserif", "trademarkserif", "product", "radical", "dotmath", "logicalnot", "logicaland", "logicalor", "arrowdblboth", "arrowdblleft", "arrowdblup", "arrowdblright", "arrowdbldown", "lozenge", "angleleft", "registersans", "copyrightsans", "trademarksans", "summation", "parenlefttp", "parenleftex", "parenleftbt", "bracketlefttp", "bracketleftex", "bracketleftbt", "bracelefttp", "braceleftmid", "braceleftbt", "braceex", "", "angleright", "integral", "integraltp", "integralex", "integralbt", "parenrighttp", "parenrightex", "parenrightbt", "bracketrighttp", "bracketrightex", "bracketrightbt", "bracerighttp", "bracerightmid", "bracerightbt", ""];
const ZapfDingbatsEncoding = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "space", "a1", "a2", "a202", "a3", "a4", "a5", "a119", "a118", "a117", "a11", "a12", "a13", "a14", "a15", "a16", "a105", "a17", "a18", "a19", "a20", "a21", "a22", "a23", "a24", "a25", "a26", "a27", "a28", "a6", "a7", "a8", "a9", "a10", "a29", "a30", "a31", "a32", "a33", "a34", "a35", "a36", "a37", "a38", "a39", "a40", "a41", "a42", "a43", "a44", "a45", "a46", "a47", "a48", "a49", "a50", "a51", "a52", "a53", "a54", "a55", "a56", "a57", "a58", "a59", "a60", "a61", "a62", "a63", "a64", "a65", "a66", "a67", "a68", "a69", "a70", "a71", "a72", "a73", "a74", "a203", "a75", "a204", "a76", "a77", "a78", "a79", "a81", "a82", "a83", "a84", "a97", "a98", "a99", "a100", "", "a89", "a90", "a93", "a94", "a91", "a92", "a205", "a85", "a206", "a86", "a87", "a88", "a95", "a96", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "a101", "a102", "a103", "a104", "a106", "a107", "a108", "a112", "a111", "a110", "a109", "a120", "a121", "a122", "a123", "a124", "a125", "a126", "a127", "a128", "a129", "a130", "a131", "a132", "a133", "a134", "a135", "a136", "a137", "a138", "a139", "a140", "a141", "a142", "a143", "a144", "a145", "a146", "a147", "a148", "a149", "a150", "a151", "a152", "a153", "a154", "a155", "a156", "a157", "a158", "a159", "a160", "a161", "a163", "a164", "a196", "a165", "a192", "a166", "a167", "a168", "a169", "a170", "a171", "a172", "a173", "a162", "a174", "a175", "a176", "a177", "a178", "a179", "a193", "a180", "a199", "a181", "a200", "a182", "", "a201", "a183", "a184", "a197", "a185", "a194", "a198", "a186", "a195", "a187", "a188", "a189", "a190", "a191", ""];
function getEncoding(encodingName) {
  switch (encodingName) {
    case "WinAnsiEncoding":
      return WinAnsiEncoding;
    case "StandardEncoding":
      return StandardEncoding;
    case "MacRomanEncoding":
      return MacRomanEncoding;
    case "SymbolSetEncoding":
      return SymbolSetEncoding;
    case "ZapfDingbatsEncoding":
      return ZapfDingbatsEncoding;
    case "ExpertEncoding":
      return ExpertEncoding;
    case "MacExpertEncoding":
      return MacExpertEncoding;
    default:
      return null;
  }
}

;// ./src/core/glyphlist.js

const getGlyphsUnicode = getLookupTableFactory(function (t) {
  t.A = 0x0041;
  t.AE = 0x00c6;
  t.AEacute = 0x01fc;
  t.AEmacron = 0x01e2;
  t.AEsmall = 0xf7e6;
  t.Aacute = 0x00c1;
  t.Aacutesmall = 0xf7e1;
  t.Abreve = 0x0102;
  t.Abreveacute = 0x1eae;
  t.Abrevecyrillic = 0x04d0;
  t.Abrevedotbelow = 0x1eb6;
  t.Abrevegrave = 0x1eb0;
  t.Abrevehookabove = 0x1eb2;
  t.Abrevetilde = 0x1eb4;
  t.Acaron = 0x01cd;
  t.Acircle = 0x24b6;
  t.Acircumflex = 0x00c2;
  t.Acircumflexacute = 0x1ea4;
  t.Acircumflexdotbelow = 0x1eac;
  t.Acircumflexgrave = 0x1ea6;
  t.Acircumflexhookabove = 0x1ea8;
  t.Acircumflexsmall = 0xf7e2;
  t.Acircumflextilde = 0x1eaa;
  t.Acute = 0xf6c9;
  t.Acutesmall = 0xf7b4;
  t.Acyrillic = 0x0410;
  t.Adblgrave = 0x0200;
  t.Adieresis = 0x00c4;
  t.Adieresiscyrillic = 0x04d2;
  t.Adieresismacron = 0x01de;
  t.Adieresissmall = 0xf7e4;
  t.Adotbelow = 0x1ea0;
  t.Adotmacron = 0x01e0;
  t.Agrave = 0x00c0;
  t.Agravesmall = 0xf7e0;
  t.Ahookabove = 0x1ea2;
  t.Aiecyrillic = 0x04d4;
  t.Ainvertedbreve = 0x0202;
  t.Alpha = 0x0391;
  t.Alphatonos = 0x0386;
  t.Amacron = 0x0100;
  t.Amonospace = 0xff21;
  t.Aogonek = 0x0104;
  t.Aring = 0x00c5;
  t.Aringacute = 0x01fa;
  t.Aringbelow = 0x1e00;
  t.Aringsmall = 0xf7e5;
  t.Asmall = 0xf761;
  t.Atilde = 0x00c3;
  t.Atildesmall = 0xf7e3;
  t.Aybarmenian = 0x0531;
  t.B = 0x0042;
  t.Bcircle = 0x24b7;
  t.Bdotaccent = 0x1e02;
  t.Bdotbelow = 0x1e04;
  t.Becyrillic = 0x0411;
  t.Benarmenian = 0x0532;
  t.Beta = 0x0392;
  t.Bhook = 0x0181;
  t.Blinebelow = 0x1e06;
  t.Bmonospace = 0xff22;
  t.Brevesmall = 0xf6f4;
  t.Bsmall = 0xf762;
  t.Btopbar = 0x0182;
  t.C = 0x0043;
  t.Caarmenian = 0x053e;
  t.Cacute = 0x0106;
  t.Caron = 0xf6ca;
  t.Caronsmall = 0xf6f5;
  t.Ccaron = 0x010c;
  t.Ccedilla = 0x00c7;
  t.Ccedillaacute = 0x1e08;
  t.Ccedillasmall = 0xf7e7;
  t.Ccircle = 0x24b8;
  t.Ccircumflex = 0x0108;
  t.Cdot = 0x010a;
  t.Cdotaccent = 0x010a;
  t.Cedillasmall = 0xf7b8;
  t.Chaarmenian = 0x0549;
  t.Cheabkhasiancyrillic = 0x04bc;
  t.Checyrillic = 0x0427;
  t.Chedescenderabkhasiancyrillic = 0x04be;
  t.Chedescendercyrillic = 0x04b6;
  t.Chedieresiscyrillic = 0x04f4;
  t.Cheharmenian = 0x0543;
  t.Chekhakassiancyrillic = 0x04cb;
  t.Cheverticalstrokecyrillic = 0x04b8;
  t.Chi = 0x03a7;
  t.Chook = 0x0187;
  t.Circumflexsmall = 0xf6f6;
  t.Cmonospace = 0xff23;
  t.Coarmenian = 0x0551;
  t.Csmall = 0xf763;
  t.D = 0x0044;
  t.DZ = 0x01f1;
  t.DZcaron = 0x01c4;
  t.Daarmenian = 0x0534;
  t.Dafrican = 0x0189;
  t.Dcaron = 0x010e;
  t.Dcedilla = 0x1e10;
  t.Dcircle = 0x24b9;
  t.Dcircumflexbelow = 0x1e12;
  t.Dcroat = 0x0110;
  t.Ddotaccent = 0x1e0a;
  t.Ddotbelow = 0x1e0c;
  t.Decyrillic = 0x0414;
  t.Deicoptic = 0x03ee;
  t.Delta = 0x2206;
  t.Deltagreek = 0x0394;
  t.Dhook = 0x018a;
  t.Dieresis = 0xf6cb;
  t.DieresisAcute = 0xf6cc;
  t.DieresisGrave = 0xf6cd;
  t.Dieresissmall = 0xf7a8;
  t.Digammagreek = 0x03dc;
  t.Djecyrillic = 0x0402;
  t.Dlinebelow = 0x1e0e;
  t.Dmonospace = 0xff24;
  t.Dotaccentsmall = 0xf6f7;
  t.Dslash = 0x0110;
  t.Dsmall = 0xf764;
  t.Dtopbar = 0x018b;
  t.Dz = 0x01f2;
  t.Dzcaron = 0x01c5;
  t.Dzeabkhasiancyrillic = 0x04e0;
  t.Dzecyrillic = 0x0405;
  t.Dzhecyrillic = 0x040f;
  t.E = 0x0045;
  t.Eacute = 0x00c9;
  t.Eacutesmall = 0xf7e9;
  t.Ebreve = 0x0114;
  t.Ecaron = 0x011a;
  t.Ecedillabreve = 0x1e1c;
  t.Echarmenian = 0x0535;
  t.Ecircle = 0x24ba;
  t.Ecircumflex = 0x00ca;
  t.Ecircumflexacute = 0x1ebe;
  t.Ecircumflexbelow = 0x1e18;
  t.Ecircumflexdotbelow = 0x1ec6;
  t.Ecircumflexgrave = 0x1ec0;
  t.Ecircumflexhookabove = 0x1ec2;
  t.Ecircumflexsmall = 0xf7ea;
  t.Ecircumflextilde = 0x1ec4;
  t.Ecyrillic = 0x0404;
  t.Edblgrave = 0x0204;
  t.Edieresis = 0x00cb;
  t.Edieresissmall = 0xf7eb;
  t.Edot = 0x0116;
  t.Edotaccent = 0x0116;
  t.Edotbelow = 0x1eb8;
  t.Efcyrillic = 0x0424;
  t.Egrave = 0x00c8;
  t.Egravesmall = 0xf7e8;
  t.Eharmenian = 0x0537;
  t.Ehookabove = 0x1eba;
  t.Eightroman = 0x2167;
  t.Einvertedbreve = 0x0206;
  t.Eiotifiedcyrillic = 0x0464;
  t.Elcyrillic = 0x041b;
  t.Elevenroman = 0x216a;
  t.Emacron = 0x0112;
  t.Emacronacute = 0x1e16;
  t.Emacrongrave = 0x1e14;
  t.Emcyrillic = 0x041c;
  t.Emonospace = 0xff25;
  t.Encyrillic = 0x041d;
  t.Endescendercyrillic = 0x04a2;
  t.Eng = 0x014a;
  t.Enghecyrillic = 0x04a4;
  t.Enhookcyrillic = 0x04c7;
  t.Eogonek = 0x0118;
  t.Eopen = 0x0190;
  t.Epsilon = 0x0395;
  t.Epsilontonos = 0x0388;
  t.Ercyrillic = 0x0420;
  t.Ereversed = 0x018e;
  t.Ereversedcyrillic = 0x042d;
  t.Escyrillic = 0x0421;
  t.Esdescendercyrillic = 0x04aa;
  t.Esh = 0x01a9;
  t.Esmall = 0xf765;
  t.Eta = 0x0397;
  t.Etarmenian = 0x0538;
  t.Etatonos = 0x0389;
  t.Eth = 0x00d0;
  t.Ethsmall = 0xf7f0;
  t.Etilde = 0x1ebc;
  t.Etildebelow = 0x1e1a;
  t.Euro = 0x20ac;
  t.Ezh = 0x01b7;
  t.Ezhcaron = 0x01ee;
  t.Ezhreversed = 0x01b8;
  t.F = 0x0046;
  t.Fcircle = 0x24bb;
  t.Fdotaccent = 0x1e1e;
  t.Feharmenian = 0x0556;
  t.Feicoptic = 0x03e4;
  t.Fhook = 0x0191;
  t.Fitacyrillic = 0x0472;
  t.Fiveroman = 0x2164;
  t.Fmonospace = 0xff26;
  t.Fourroman = 0x2163;
  t.Fsmall = 0xf766;
  t.G = 0x0047;
  t.GBsquare = 0x3387;
  t.Gacute = 0x01f4;
  t.Gamma = 0x0393;
  t.Gammaafrican = 0x0194;
  t.Gangiacoptic = 0x03ea;
  t.Gbreve = 0x011e;
  t.Gcaron = 0x01e6;
  t.Gcedilla = 0x0122;
  t.Gcircle = 0x24bc;
  t.Gcircumflex = 0x011c;
  t.Gcommaaccent = 0x0122;
  t.Gdot = 0x0120;
  t.Gdotaccent = 0x0120;
  t.Gecyrillic = 0x0413;
  t.Ghadarmenian = 0x0542;
  t.Ghemiddlehookcyrillic = 0x0494;
  t.Ghestrokecyrillic = 0x0492;
  t.Gheupturncyrillic = 0x0490;
  t.Ghook = 0x0193;
  t.Gimarmenian = 0x0533;
  t.Gjecyrillic = 0x0403;
  t.Gmacron = 0x1e20;
  t.Gmonospace = 0xff27;
  t.Grave = 0xf6ce;
  t.Gravesmall = 0xf760;
  t.Gsmall = 0xf767;
  t.Gsmallhook = 0x029b;
  t.Gstroke = 0x01e4;
  t.H = 0x0048;
  t.H18533 = 0x25cf;
  t.H18543 = 0x25aa;
  t.H18551 = 0x25ab;
  t.H22073 = 0x25a1;
  t.HPsquare = 0x33cb;
  t.Haabkhasiancyrillic = 0x04a8;
  t.Hadescendercyrillic = 0x04b2;
  t.Hardsigncyrillic = 0x042a;
  t.Hbar = 0x0126;
  t.Hbrevebelow = 0x1e2a;
  t.Hcedilla = 0x1e28;
  t.Hcircle = 0x24bd;
  t.Hcircumflex = 0x0124;
  t.Hdieresis = 0x1e26;
  t.Hdotaccent = 0x1e22;
  t.Hdotbelow = 0x1e24;
  t.Hmonospace = 0xff28;
  t.Hoarmenian = 0x0540;
  t.Horicoptic = 0x03e8;
  t.Hsmall = 0xf768;
  t.Hungarumlaut = 0xf6cf;
  t.Hungarumlautsmall = 0xf6f8;
  t.Hzsquare = 0x3390;
  t.I = 0x0049;
  t.IAcyrillic = 0x042f;
  t.IJ = 0x0132;
  t.IUcyrillic = 0x042e;
  t.Iacute = 0x00cd;
  t.Iacutesmall = 0xf7ed;
  t.Ibreve = 0x012c;
  t.Icaron = 0x01cf;
  t.Icircle = 0x24be;
  t.Icircumflex = 0x00ce;
  t.Icircumflexsmall = 0xf7ee;
  t.Icyrillic = 0x0406;
  t.Idblgrave = 0x0208;
  t.Idieresis = 0x00cf;
  t.Idieresisacute = 0x1e2e;
  t.Idieresiscyrillic = 0x04e4;
  t.Idieresissmall = 0xf7ef;
  t.Idot = 0x0130;
  t.Idotaccent = 0x0130;
  t.Idotbelow = 0x1eca;
  t.Iebrevecyrillic = 0x04d6;
  t.Iecyrillic = 0x0415;
  t.Ifraktur = 0x2111;
  t.Igrave = 0x00cc;
  t.Igravesmall = 0xf7ec;
  t.Ihookabove = 0x1ec8;
  t.Iicyrillic = 0x0418;
  t.Iinvertedbreve = 0x020a;
  t.Iishortcyrillic = 0x0419;
  t.Imacron = 0x012a;
  t.Imacroncyrillic = 0x04e2;
  t.Imonospace = 0xff29;
  t.Iniarmenian = 0x053b;
  t.Iocyrillic = 0x0401;
  t.Iogonek = 0x012e;
  t.Iota = 0x0399;
  t.Iotaafrican = 0x0196;
  t.Iotadieresis = 0x03aa;
  t.Iotatonos = 0x038a;
  t.Ismall = 0xf769;
  t.Istroke = 0x0197;
  t.Itilde = 0x0128;
  t.Itildebelow = 0x1e2c;
  t.Izhitsacyrillic = 0x0474;
  t.Izhitsadblgravecyrillic = 0x0476;
  t.J = 0x004a;
  t.Jaarmenian = 0x0541;
  t.Jcircle = 0x24bf;
  t.Jcircumflex = 0x0134;
  t.Jecyrillic = 0x0408;
  t.Jheharmenian = 0x054b;
  t.Jmonospace = 0xff2a;
  t.Jsmall = 0xf76a;
  t.K = 0x004b;
  t.KBsquare = 0x3385;
  t.KKsquare = 0x33cd;
  t.Kabashkircyrillic = 0x04a0;
  t.Kacute = 0x1e30;
  t.Kacyrillic = 0x041a;
  t.Kadescendercyrillic = 0x049a;
  t.Kahookcyrillic = 0x04c3;
  t.Kappa = 0x039a;
  t.Kastrokecyrillic = 0x049e;
  t.Kaverticalstrokecyrillic = 0x049c;
  t.Kcaron = 0x01e8;
  t.Kcedilla = 0x0136;
  t.Kcircle = 0x24c0;
  t.Kcommaaccent = 0x0136;
  t.Kdotbelow = 0x1e32;
  t.Keharmenian = 0x0554;
  t.Kenarmenian = 0x053f;
  t.Khacyrillic = 0x0425;
  t.Kheicoptic = 0x03e6;
  t.Khook = 0x0198;
  t.Kjecyrillic = 0x040c;
  t.Klinebelow = 0x1e34;
  t.Kmonospace = 0xff2b;
  t.Koppacyrillic = 0x0480;
  t.Koppagreek = 0x03de;
  t.Ksicyrillic = 0x046e;
  t.Ksmall = 0xf76b;
  t.L = 0x004c;
  t.LJ = 0x01c7;
  t.LL = 0xf6bf;
  t.Lacute = 0x0139;
  t.Lambda = 0x039b;
  t.Lcaron = 0x013d;
  t.Lcedilla = 0x013b;
  t.Lcircle = 0x24c1;
  t.Lcircumflexbelow = 0x1e3c;
  t.Lcommaaccent = 0x013b;
  t.Ldot = 0x013f;
  t.Ldotaccent = 0x013f;
  t.Ldotbelow = 0x1e36;
  t.Ldotbelowmacron = 0x1e38;
  t.Liwnarmenian = 0x053c;
  t.Lj = 0x01c8;
  t.Ljecyrillic = 0x0409;
  t.Llinebelow = 0x1e3a;
  t.Lmonospace = 0xff2c;
  t.Lslash = 0x0141;
  t.Lslashsmall = 0xf6f9;
  t.Lsmall = 0xf76c;
  t.M = 0x004d;
  t.MBsquare = 0x3386;
  t.Macron = 0xf6d0;
  t.Macronsmall = 0xf7af;
  t.Macute = 0x1e3e;
  t.Mcircle = 0x24c2;
  t.Mdotaccent = 0x1e40;
  t.Mdotbelow = 0x1e42;
  t.Menarmenian = 0x0544;
  t.Mmonospace = 0xff2d;
  t.Msmall = 0xf76d;
  t.Mturned = 0x019c;
  t.Mu = 0x039c;
  t.N = 0x004e;
  t.NJ = 0x01ca;
  t.Nacute = 0x0143;
  t.Ncaron = 0x0147;
  t.Ncedilla = 0x0145;
  t.Ncircle = 0x24c3;
  t.Ncircumflexbelow = 0x1e4a;
  t.Ncommaaccent = 0x0145;
  t.Ndotaccent = 0x1e44;
  t.Ndotbelow = 0x1e46;
  t.Nhookleft = 0x019d;
  t.Nineroman = 0x2168;
  t.Nj = 0x01cb;
  t.Njecyrillic = 0x040a;
  t.Nlinebelow = 0x1e48;
  t.Nmonospace = 0xff2e;
  t.Nowarmenian = 0x0546;
  t.Nsmall = 0xf76e;
  t.Ntilde = 0x00d1;
  t.Ntildesmall = 0xf7f1;
  t.Nu = 0x039d;
  t.O = 0x004f;
  t.OE = 0x0152;
  t.OEsmall = 0xf6fa;
  t.Oacute = 0x00d3;
  t.Oacutesmall = 0xf7f3;
  t.Obarredcyrillic = 0x04e8;
  t.Obarreddieresiscyrillic = 0x04ea;
  t.Obreve = 0x014e;
  t.Ocaron = 0x01d1;
  t.Ocenteredtilde = 0x019f;
  t.Ocircle = 0x24c4;
  t.Ocircumflex = 0x00d4;
  t.Ocircumflexacute = 0x1ed0;
  t.Ocircumflexdotbelow = 0x1ed8;
  t.Ocircumflexgrave = 0x1ed2;
  t.Ocircumflexhookabove = 0x1ed4;
  t.Ocircumflexsmall = 0xf7f4;
  t.Ocircumflextilde = 0x1ed6;
  t.Ocyrillic = 0x041e;
  t.Odblacute = 0x0150;
  t.Odblgrave = 0x020c;
  t.Odieresis = 0x00d6;
  t.Odieresiscyrillic = 0x04e6;
  t.Odieresissmall = 0xf7f6;
  t.Odotbelow = 0x1ecc;
  t.Ogoneksmall = 0xf6fb;
  t.Ograve = 0x00d2;
  t.Ogravesmall = 0xf7f2;
  t.Oharmenian = 0x0555;
  t.Ohm = 0x2126;
  t.Ohookabove = 0x1ece;
  t.Ohorn = 0x01a0;
  t.Ohornacute = 0x1eda;
  t.Ohorndotbelow = 0x1ee2;
  t.Ohorngrave = 0x1edc;
  t.Ohornhookabove = 0x1ede;
  t.Ohorntilde = 0x1ee0;
  t.Ohungarumlaut = 0x0150;
  t.Oi = 0x01a2;
  t.Oinvertedbreve = 0x020e;
  t.Omacron = 0x014c;
  t.Omacronacute = 0x1e52;
  t.Omacrongrave = 0x1e50;
  t.Omega = 0x2126;
  t.Omegacyrillic = 0x0460;
  t.Omegagreek = 0x03a9;
  t.Omegaroundcyrillic = 0x047a;
  t.Omegatitlocyrillic = 0x047c;
  t.Omegatonos = 0x038f;
  t.Omicron = 0x039f;
  t.Omicrontonos = 0x038c;
  t.Omonospace = 0xff2f;
  t.Oneroman = 0x2160;
  t.Oogonek = 0x01ea;
  t.Oogonekmacron = 0x01ec;
  t.Oopen = 0x0186;
  t.Oslash = 0x00d8;
  t.Oslashacute = 0x01fe;
  t.Oslashsmall = 0xf7f8;
  t.Osmall = 0xf76f;
  t.Ostrokeacute = 0x01fe;
  t.Otcyrillic = 0x047e;
  t.Otilde = 0x00d5;
  t.Otildeacute = 0x1e4c;
  t.Otildedieresis = 0x1e4e;
  t.Otildesmall = 0xf7f5;
  t.P = 0x0050;
  t.Pacute = 0x1e54;
  t.Pcircle = 0x24c5;
  t.Pdotaccent = 0x1e56;
  t.Pecyrillic = 0x041f;
  t.Peharmenian = 0x054a;
  t.Pemiddlehookcyrillic = 0x04a6;
  t.Phi = 0x03a6;
  t.Phook = 0x01a4;
  t.Pi = 0x03a0;
  t.Piwrarmenian = 0x0553;
  t.Pmonospace = 0xff30;
  t.Psi = 0x03a8;
  t.Psicyrillic = 0x0470;
  t.Psmall = 0xf770;
  t.Q = 0x0051;
  t.Qcircle = 0x24c6;
  t.Qmonospace = 0xff31;
  t.Qsmall = 0xf771;
  t.R = 0x0052;
  t.Raarmenian = 0x054c;
  t.Racute = 0x0154;
  t.Rcaron = 0x0158;
  t.Rcedilla = 0x0156;
  t.Rcircle = 0x24c7;
  t.Rcommaaccent = 0x0156;
  t.Rdblgrave = 0x0210;
  t.Rdotaccent = 0x1e58;
  t.Rdotbelow = 0x1e5a;
  t.Rdotbelowmacron = 0x1e5c;
  t.Reharmenian = 0x0550;
  t.Rfraktur = 0x211c;
  t.Rho = 0x03a1;
  t.Ringsmall = 0xf6fc;
  t.Rinvertedbreve = 0x0212;
  t.Rlinebelow = 0x1e5e;
  t.Rmonospace = 0xff32;
  t.Rsmall = 0xf772;
  t.Rsmallinverted = 0x0281;
  t.Rsmallinvertedsuperior = 0x02b6;
  t.S = 0x0053;
  t.SF010000 = 0x250c;
  t.SF020000 = 0x2514;
  t.SF030000 = 0x2510;
  t.SF040000 = 0x2518;
  t.SF050000 = 0x253c;
  t.SF060000 = 0x252c;
  t.SF070000 = 0x2534;
  t.SF080000 = 0x251c;
  t.SF090000 = 0x2524;
  t.SF100000 = 0x2500;
  t.SF110000 = 0x2502;
  t.SF190000 = 0x2561;
  t.SF200000 = 0x2562;
  t.SF210000 = 0x2556;
  t.SF220000 = 0x2555;
  t.SF230000 = 0x2563;
  t.SF240000 = 0x2551;
  t.SF250000 = 0x2557;
  t.SF260000 = 0x255d;
  t.SF270000 = 0x255c;
  t.SF280000 = 0x255b;
  t.SF360000 = 0x255e;
  t.SF370000 = 0x255f;
  t.SF380000 = 0x255a;
  t.SF390000 = 0x2554;
  t.SF400000 = 0x2569;
  t.SF410000 = 0x2566;
  t.SF420000 = 0x2560;
  t.SF430000 = 0x2550;
  t.SF440000 = 0x256c;
  t.SF450000 = 0x2567;
  t.SF460000 = 0x2568;
  t.SF470000 = 0x2564;
  t.SF480000 = 0x2565;
  t.SF490000 = 0x2559;
  t.SF500000 = 0x2558;
  t.SF510000 = 0x2552;
  t.SF520000 = 0x2553;
  t.SF530000 = 0x256b;
  t.SF540000 = 0x256a;
  t.Sacute = 0x015a;
  t.Sacutedotaccent = 0x1e64;
  t.Sampigreek = 0x03e0;
  t.Scaron = 0x0160;
  t.Scarondotaccent = 0x1e66;
  t.Scaronsmall = 0xf6fd;
  t.Scedilla = 0x015e;
  t.Schwa = 0x018f;
  t.Schwacyrillic = 0x04d8;
  t.Schwadieresiscyrillic = 0x04da;
  t.Scircle = 0x24c8;
  t.Scircumflex = 0x015c;
  t.Scommaaccent = 0x0218;
  t.Sdotaccent = 0x1e60;
  t.Sdotbelow = 0x1e62;
  t.Sdotbelowdotaccent = 0x1e68;
  t.Seharmenian = 0x054d;
  t.Sevenroman = 0x2166;
  t.Shaarmenian = 0x0547;
  t.Shacyrillic = 0x0428;
  t.Shchacyrillic = 0x0429;
  t.Sheicoptic = 0x03e2;
  t.Shhacyrillic = 0x04ba;
  t.Shimacoptic = 0x03ec;
  t.Sigma = 0x03a3;
  t.Sixroman = 0x2165;
  t.Smonospace = 0xff33;
  t.Softsigncyrillic = 0x042c;
  t.Ssmall = 0xf773;
  t.Stigmagreek = 0x03da;
  t.T = 0x0054;
  t.Tau = 0x03a4;
  t.Tbar = 0x0166;
  t.Tcaron = 0x0164;
  t.Tcedilla = 0x0162;
  t.Tcircle = 0x24c9;
  t.Tcircumflexbelow = 0x1e70;
  t.Tcommaaccent = 0x0162;
  t.Tdotaccent = 0x1e6a;
  t.Tdotbelow = 0x1e6c;
  t.Tecyrillic = 0x0422;
  t.Tedescendercyrillic = 0x04ac;
  t.Tenroman = 0x2169;
  t.Tetsecyrillic = 0x04b4;
  t.Theta = 0x0398;
  t.Thook = 0x01ac;
  t.Thorn = 0x00de;
  t.Thornsmall = 0xf7fe;
  t.Threeroman = 0x2162;
  t.Tildesmall = 0xf6fe;
  t.Tiwnarmenian = 0x054f;
  t.Tlinebelow = 0x1e6e;
  t.Tmonospace = 0xff34;
  t.Toarmenian = 0x0539;
  t.Tonefive = 0x01bc;
  t.Tonesix = 0x0184;
  t.Tonetwo = 0x01a7;
  t.Tretroflexhook = 0x01ae;
  t.Tsecyrillic = 0x0426;
  t.Tshecyrillic = 0x040b;
  t.Tsmall = 0xf774;
  t.Twelveroman = 0x216b;
  t.Tworoman = 0x2161;
  t.U = 0x0055;
  t.Uacute = 0x00da;
  t.Uacutesmall = 0xf7fa;
  t.Ubreve = 0x016c;
  t.Ucaron = 0x01d3;
  t.Ucircle = 0x24ca;
  t.Ucircumflex = 0x00db;
  t.Ucircumflexbelow = 0x1e76;
  t.Ucircumflexsmall = 0xf7fb;
  t.Ucyrillic = 0x0423;
  t.Udblacute = 0x0170;
  t.Udblgrave = 0x0214;
  t.Udieresis = 0x00dc;
  t.Udieresisacute = 0x01d7;
  t.Udieresisbelow = 0x1e72;
  t.Udieresiscaron = 0x01d9;
  t.Udieresiscyrillic = 0x04f0;
  t.Udieresisgrave = 0x01db;
  t.Udieresismacron = 0x01d5;
  t.Udieresissmall = 0xf7fc;
  t.Udotbelow = 0x1ee4;
  t.Ugrave = 0x00d9;
  t.Ugravesmall = 0xf7f9;
  t.Uhookabove = 0x1ee6;
  t.Uhorn = 0x01af;
  t.Uhornacute = 0x1ee8;
  t.Uhorndotbelow = 0x1ef0;
  t.Uhorngrave = 0x1eea;
  t.Uhornhookabove = 0x1eec;
  t.Uhorntilde = 0x1eee;
  t.Uhungarumlaut = 0x0170;
  t.Uhungarumlautcyrillic = 0x04f2;
  t.Uinvertedbreve = 0x0216;
  t.Ukcyrillic = 0x0478;
  t.Umacron = 0x016a;
  t.Umacroncyrillic = 0x04ee;
  t.Umacrondieresis = 0x1e7a;
  t.Umonospace = 0xff35;
  t.Uogonek = 0x0172;
  t.Upsilon = 0x03a5;
  t.Upsilon1 = 0x03d2;
  t.Upsilonacutehooksymbolgreek = 0x03d3;
  t.Upsilonafrican = 0x01b1;
  t.Upsilondieresis = 0x03ab;
  t.Upsilondieresishooksymbolgreek = 0x03d4;
  t.Upsilonhooksymbol = 0x03d2;
  t.Upsilontonos = 0x038e;
  t.Uring = 0x016e;
  t.Ushortcyrillic = 0x040e;
  t.Usmall = 0xf775;
  t.Ustraightcyrillic = 0x04ae;
  t.Ustraightstrokecyrillic = 0x04b0;
  t.Utilde = 0x0168;
  t.Utildeacute = 0x1e78;
  t.Utildebelow = 0x1e74;
  t.V = 0x0056;
  t.Vcircle = 0x24cb;
  t.Vdotbelow = 0x1e7e;
  t.Vecyrillic = 0x0412;
  t.Vewarmenian = 0x054e;
  t.Vhook = 0x01b2;
  t.Vmonospace = 0xff36;
  t.Voarmenian = 0x0548;
  t.Vsmall = 0xf776;
  t.Vtilde = 0x1e7c;
  t.W = 0x0057;
  t.Wacute = 0x1e82;
  t.Wcircle = 0x24cc;
  t.Wcircumflex = 0x0174;
  t.Wdieresis = 0x1e84;
  t.Wdotaccent = 0x1e86;
  t.Wdotbelow = 0x1e88;
  t.Wgrave = 0x1e80;
  t.Wmonospace = 0xff37;
  t.Wsmall = 0xf777;
  t.X = 0x0058;
  t.Xcircle = 0x24cd;
  t.Xdieresis = 0x1e8c;
  t.Xdotaccent = 0x1e8a;
  t.Xeharmenian = 0x053d;
  t.Xi = 0x039e;
  t.Xmonospace = 0xff38;
  t.Xsmall = 0xf778;
  t.Y = 0x0059;
  t.Yacute = 0x00dd;
  t.Yacutesmall = 0xf7fd;
  t.Yatcyrillic = 0x0462;
  t.Ycircle = 0x24ce;
  t.Ycircumflex = 0x0176;
  t.Ydieresis = 0x0178;
  t.Ydieresissmall = 0xf7ff;
  t.Ydotaccent = 0x1e8e;
  t.Ydotbelow = 0x1ef4;
  t.Yericyrillic = 0x042b;
  t.Yerudieresiscyrillic = 0x04f8;
  t.Ygrave = 0x1ef2;
  t.Yhook = 0x01b3;
  t.Yhookabove = 0x1ef6;
  t.Yiarmenian = 0x0545;
  t.Yicyrillic = 0x0407;
  t.Yiwnarmenian = 0x0552;
  t.Ymonospace = 0xff39;
  t.Ysmall = 0xf779;
  t.Ytilde = 0x1ef8;
  t.Yusbigcyrillic = 0x046a;
  t.Yusbigiotifiedcyrillic = 0x046c;
  t.Yuslittlecyrillic = 0x0466;
  t.Yuslittleiotifiedcyrillic = 0x0468;
  t.Z = 0x005a;
  t.Zaarmenian = 0x0536;
  t.Zacute = 0x0179;
  t.Zcaron = 0x017d;
  t.Zcaronsmall = 0xf6ff;
  t.Zcircle = 0x24cf;
  t.Zcircumflex = 0x1e90;
  t.Zdot = 0x017b;
  t.Zdotaccent = 0x017b;
  t.Zdotbelow = 0x1e92;
  t.Zecyrillic = 0x0417;
  t.Zedescendercyrillic = 0x0498;
  t.Zedieresiscyrillic = 0x04de;
  t.Zeta = 0x0396;
  t.Zhearmenian = 0x053a;
  t.Zhebrevecyrillic = 0x04c1;
  t.Zhecyrillic = 0x0416;
  t.Zhedescendercyrillic = 0x0496;
  t.Zhedieresiscyrillic = 0x04dc;
  t.Zlinebelow = 0x1e94;
  t.Zmonospace = 0xff3a;
  t.Zsmall = 0xf77a;
  t.Zstroke = 0x01b5;
  t.a = 0x0061;
  t.aabengali = 0x0986;
  t.aacute = 0x00e1;
  t.aadeva = 0x0906;
  t.aagujarati = 0x0a86;
  t.aagurmukhi = 0x0a06;
  t.aamatragurmukhi = 0x0a3e;
  t.aarusquare = 0x3303;
  t.aavowelsignbengali = 0x09be;
  t.aavowelsigndeva = 0x093e;
  t.aavowelsigngujarati = 0x0abe;
  t.abbreviationmarkarmenian = 0x055f;
  t.abbreviationsigndeva = 0x0970;
  t.abengali = 0x0985;
  t.abopomofo = 0x311a;
  t.abreve = 0x0103;
  t.abreveacute = 0x1eaf;
  t.abrevecyrillic = 0x04d1;
  t.abrevedotbelow = 0x1eb7;
  t.abrevegrave = 0x1eb1;
  t.abrevehookabove = 0x1eb3;
  t.abrevetilde = 0x1eb5;
  t.acaron = 0x01ce;
  t.acircle = 0x24d0;
  t.acircumflex = 0x00e2;
  t.acircumflexacute = 0x1ea5;
  t.acircumflexdotbelow = 0x1ead;
  t.acircumflexgrave = 0x1ea7;
  t.acircumflexhookabove = 0x1ea9;
  t.acircumflextilde = 0x1eab;
  t.acute = 0x00b4;
  t.acutebelowcmb = 0x0317;
  t.acutecmb = 0x0301;
  t.acutecomb = 0x0301;
  t.acutedeva = 0x0954;
  t.acutelowmod = 0x02cf;
  t.acutetonecmb = 0x0341;
  t.acyrillic = 0x0430;
  t.adblgrave = 0x0201;
  t.addakgurmukhi = 0x0a71;
  t.adeva = 0x0905;
  t.adieresis = 0x00e4;
  t.adieresiscyrillic = 0x04d3;
  t.adieresismacron = 0x01df;
  t.adotbelow = 0x1ea1;
  t.adotmacron = 0x01e1;
  t.ae = 0x00e6;
  t.aeacute = 0x01fd;
  t.aekorean = 0x3150;
  t.aemacron = 0x01e3;
  t.afii00208 = 0x2015;
  t.afii08941 = 0x20a4;
  t.afii10017 = 0x0410;
  t.afii10018 = 0x0411;
  t.afii10019 = 0x0412;
  t.afii10020 = 0x0413;
  t.afii10021 = 0x0414;
  t.afii10022 = 0x0415;
  t.afii10023 = 0x0401;
  t.afii10024 = 0x0416;
  t.afii10025 = 0x0417;
  t.afii10026 = 0x0418;
  t.afii10027 = 0x0419;
  t.afii10028 = 0x041a;
  t.afii10029 = 0x041b;
  t.afii10030 = 0x041c;
  t.afii10031 = 0x041d;
  t.afii10032 = 0x041e;
  t.afii10033 = 0x041f;
  t.afii10034 = 0x0420;
  t.afii10035 = 0x0421;
  t.afii10036 = 0x0422;
  t.afii10037 = 0x0423;
  t.afii10038 = 0x0424;
  t.afii10039 = 0x0425;
  t.afii10040 = 0x0426;
  t.afii10041 = 0x0427;
  t.afii10042 = 0x0428;
  t.afii10043 = 0x0429;
  t.afii10044 = 0x042a;
  t.afii10045 = 0x042b;
  t.afii10046 = 0x042c;
  t.afii10047 = 0x042d;
  t.afii10048 = 0x042e;
  t.afii10049 = 0x042f;
  t.afii10050 = 0x0490;
  t.afii10051 = 0x0402;
  t.afii10052 = 0x0403;
  t.afii10053 = 0x0404;
  t.afii10054 = 0x0405;
  t.afii10055 = 0x0406;
  t.afii10056 = 0x0407;
  t.afii10057 = 0x0408;
  t.afii10058 = 0x0409;
  t.afii10059 = 0x040a;
  t.afii10060 = 0x040b;
  t.afii10061 = 0x040c;
  t.afii10062 = 0x040e;
  t.afii10063 = 0xf6c4;
  t.afii10064 = 0xf6c5;
  t.afii10065 = 0x0430;
  t.afii10066 = 0x0431;
  t.afii10067 = 0x0432;
  t.afii10068 = 0x0433;
  t.afii10069 = 0x0434;
  t.afii10070 = 0x0435;
  t.afii10071 = 0x0451;
  t.afii10072 = 0x0436;
  t.afii10073 = 0x0437;
  t.afii10074 = 0x0438;
  t.afii10075 = 0x0439;
  t.afii10076 = 0x043a;
  t.afii10077 = 0x043b;
  t.afii10078 = 0x043c;
  t.afii10079 = 0x043d;
  t.afii10080 = 0x043e;
  t.afii10081 = 0x043f;
  t.afii10082 = 0x0440;
  t.afii10083 = 0x0441;
  t.afii10084 = 0x0442;
  t.afii10085 = 0x0443;
  t.afii10086 = 0x0444;
  t.afii10087 = 0x0445;
  t.afii10088 = 0x0446;
  t.afii10089 = 0x0447;
  t.afii10090 = 0x0448;
  t.afii10091 = 0x0449;
  t.afii10092 = 0x044a;
  t.afii10093 = 0x044b;
  t.afii10094 = 0x044c;
  t.afii10095 = 0x044d;
  t.afii10096 = 0x044e;
  t.afii10097 = 0x044f;
  t.afii10098 = 0x0491;
  t.afii10099 = 0x0452;
  t.afii10100 = 0x0453;
  t.afii10101 = 0x0454;
  t.afii10102 = 0x0455;
  t.afii10103 = 0x0456;
  t.afii10104 = 0x0457;
  t.afii10105 = 0x0458;
  t.afii10106 = 0x0459;
  t.afii10107 = 0x045a;
  t.afii10108 = 0x045b;
  t.afii10109 = 0x045c;
  t.afii10110 = 0x045e;
  t.afii10145 = 0x040f;
  t.afii10146 = 0x0462;
  t.afii10147 = 0x0472;
  t.afii10148 = 0x0474;
  t.afii10192 = 0xf6c6;
  t.afii10193 = 0x045f;
  t.afii10194 = 0x0463;
  t.afii10195 = 0x0473;
  t.afii10196 = 0x0475;
  t.afii10831 = 0xf6c7;
  t.afii10832 = 0xf6c8;
  t.afii10846 = 0x04d9;
  t.afii299 = 0x200e;
  t.afii300 = 0x200f;
  t.afii301 = 0x200d;
  t.afii57381 = 0x066a;
  t.afii57388 = 0x060c;
  t.afii57392 = 0x0660;
  t.afii57393 = 0x0661;
  t.afii57394 = 0x0662;
  t.afii57395 = 0x0663;
  t.afii57396 = 0x0664;
  t.afii57397 = 0x0665;
  t.afii57398 = 0x0666;
  t.afii57399 = 0x0667;
  t.afii57400 = 0x0668;
  t.afii57401 = 0x0669;
  t.afii57403 = 0x061b;
  t.afii57407 = 0x061f;
  t.afii57409 = 0x0621;
  t.afii57410 = 0x0622;
  t.afii57411 = 0x0623;
  t.afii57412 = 0x0624;
  t.afii57413 = 0x0625;
  t.afii57414 = 0x0626;
  t.afii57415 = 0x0627;
  t.afii57416 = 0x0628;
  t.afii57417 = 0x0629;
  t.afii57418 = 0x062a;
  t.afii57419 = 0x062b;
  t.afii57420 = 0x062c;
  t.afii57421 = 0x062d;
  t.afii57422 = 0x062e;
  t.afii57423 = 0x062f;
  t.afii57424 = 0x0630;
  t.afii57425 = 0x0631;
  t.afii57426 = 0x0632;
  t.afii57427 = 0x0633;
  t.afii57428 = 0x0634;
  t.afii57429 = 0x0635;
  t.afii57430 = 0x0636;
  t.afii57431 = 0x0637;
  t.afii57432 = 0x0638;
  t.afii57433 = 0x0639;
  t.afii57434 = 0x063a;
  t.afii57440 = 0x0640;
  t.afii57441 = 0x0641;
  t.afii57442 = 0x0642;
  t.afii57443 = 0x0643;
  t.afii57444 = 0x0644;
  t.afii57445 = 0x0645;
  t.afii57446 = 0x0646;
  t.afii57448 = 0x0648;
  t.afii57449 = 0x0649;
  t.afii57450 = 0x064a;
  t.afii57451 = 0x064b;
  t.afii57452 = 0x064c;
  t.afii57453 = 0x064d;
  t.afii57454 = 0x064e;
  t.afii57455 = 0x064f;
  t.afii57456 = 0x0650;
  t.afii57457 = 0x0651;
  t.afii57458 = 0x0652;
  t.afii57470 = 0x0647;
  t.afii57505 = 0x06a4;
  t.afii57506 = 0x067e;
  t.afii57507 = 0x0686;
  t.afii57508 = 0x0698;
  t.afii57509 = 0x06af;
  t.afii57511 = 0x0679;
  t.afii57512 = 0x0688;
  t.afii57513 = 0x0691;
  t.afii57514 = 0x06ba;
  t.afii57519 = 0x06d2;
  t.afii57534 = 0x06d5;
  t.afii57636 = 0x20aa;
  t.afii57645 = 0x05be;
  t.afii57658 = 0x05c3;
  t.afii57664 = 0x05d0;
  t.afii57665 = 0x05d1;
  t.afii57666 = 0x05d2;
  t.afii57667 = 0x05d3;
  t.afii57668 = 0x05d4;
  t.afii57669 = 0x05d5;
  t.afii57670 = 0x05d6;
  t.afii57671 = 0x05d7;
  t.afii57672 = 0x05d8;
  t.afii57673 = 0x05d9;
  t.afii57674 = 0x05da;
  t.afii57675 = 0x05db;
  t.afii57676 = 0x05dc;
  t.afii57677 = 0x05dd;
  t.afii57678 = 0x05de;
  t.afii57679 = 0x05df;
  t.afii57680 = 0x05e0;
  t.afii57681 = 0x05e1;
  t.afii57682 = 0x05e2;
  t.afii57683 = 0x05e3;
  t.afii57684 = 0x05e4;
  t.afii57685 = 0x05e5;
  t.afii57686 = 0x05e6;
  t.afii57687 = 0x05e7;
  t.afii57688 = 0x05e8;
  t.afii57689 = 0x05e9;
  t.afii57690 = 0x05ea;
  t.afii57694 = 0xfb2a;
  t.afii57695 = 0xfb2b;
  t.afii57700 = 0xfb4b;
  t.afii57705 = 0xfb1f;
  t.afii57716 = 0x05f0;
  t.afii57717 = 0x05f1;
  t.afii57718 = 0x05f2;
  t.afii57723 = 0xfb35;
  t.afii57793 = 0x05b4;
  t.afii57794 = 0x05b5;
  t.afii57795 = 0x05b6;
  t.afii57796 = 0x05bb;
  t.afii57797 = 0x05b8;
  t.afii57798 = 0x05b7;
  t.afii57799 = 0x05b0;
  t.afii57800 = 0x05b2;
  t.afii57801 = 0x05b1;
  t.afii57802 = 0x05b3;
  t.afii57803 = 0x05c2;
  t.afii57804 = 0x05c1;
  t.afii57806 = 0x05b9;
  t.afii57807 = 0x05bc;
  t.afii57839 = 0x05bd;
  t.afii57841 = 0x05bf;
  t.afii57842 = 0x05c0;
  t.afii57929 = 0x02bc;
  t.afii61248 = 0x2105;
  t.afii61289 = 0x2113;
  t.afii61352 = 0x2116;
  t.afii61573 = 0x202c;
  t.afii61574 = 0x202d;
  t.afii61575 = 0x202e;
  t.afii61664 = 0x200c;
  t.afii63167 = 0x066d;
  t.afii64937 = 0x02bd;
  t.agrave = 0x00e0;
  t.agujarati = 0x0a85;
  t.agurmukhi = 0x0a05;
  t.ahiragana = 0x3042;
  t.ahookabove = 0x1ea3;
  t.aibengali = 0x0990;
  t.aibopomofo = 0x311e;
  t.aideva = 0x0910;
  t.aiecyrillic = 0x04d5;
  t.aigujarati = 0x0a90;
  t.aigurmukhi = 0x0a10;
  t.aimatragurmukhi = 0x0a48;
  t.ainarabic = 0x0639;
  t.ainfinalarabic = 0xfeca;
  t.aininitialarabic = 0xfecb;
  t.ainmedialarabic = 0xfecc;
  t.ainvertedbreve = 0x0203;
  t.aivowelsignbengali = 0x09c8;
  t.aivowelsigndeva = 0x0948;
  t.aivowelsigngujarati = 0x0ac8;
  t.akatakana = 0x30a2;
  t.akatakanahalfwidth = 0xff71;
  t.akorean = 0x314f;
  t.alef = 0x05d0;
  t.alefarabic = 0x0627;
  t.alefdageshhebrew = 0xfb30;
  t.aleffinalarabic = 0xfe8e;
  t.alefhamzaabovearabic = 0x0623;
  t.alefhamzaabovefinalarabic = 0xfe84;
  t.alefhamzabelowarabic = 0x0625;
  t.alefhamzabelowfinalarabic = 0xfe88;
  t.alefhebrew = 0x05d0;
  t.aleflamedhebrew = 0xfb4f;
  t.alefmaddaabovearabic = 0x0622;
  t.alefmaddaabovefinalarabic = 0xfe82;
  t.alefmaksuraarabic = 0x0649;
  t.alefmaksurafinalarabic = 0xfef0;
  t.alefmaksurainitialarabic = 0xfef3;
  t.alefmaksuramedialarabic = 0xfef4;
  t.alefpatahhebrew = 0xfb2e;
  t.alefqamatshebrew = 0xfb2f;
  t.aleph = 0x2135;
  t.allequal = 0x224c;
  t.alpha = 0x03b1;
  t.alphatonos = 0x03ac;
  t.amacron = 0x0101;
  t.amonospace = 0xff41;
  t.ampersand = 0x0026;
  t.ampersandmonospace = 0xff06;
  t.ampersandsmall = 0xf726;
  t.amsquare = 0x33c2;
  t.anbopomofo = 0x3122;
  t.angbopomofo = 0x3124;
  t.angbracketleft = 0x3008;
  t.angbracketright = 0x3009;
  t.angkhankhuthai = 0x0e5a;
  t.angle = 0x2220;
  t.anglebracketleft = 0x3008;
  t.anglebracketleftvertical = 0xfe3f;
  t.anglebracketright = 0x3009;
  t.anglebracketrightvertical = 0xfe40;
  t.angleleft = 0x2329;
  t.angleright = 0x232a;
  t.angstrom = 0x212b;
  t.anoteleia = 0x0387;
  t.anudattadeva = 0x0952;
  t.anusvarabengali = 0x0982;
  t.anusvaradeva = 0x0902;
  t.anusvaragujarati = 0x0a82;
  t.aogonek = 0x0105;
  t.apaatosquare = 0x3300;
  t.aparen = 0x249c;
  t.apostrophearmenian = 0x055a;
  t.apostrophemod = 0x02bc;
  t.apple = 0xf8ff;
  t.approaches = 0x2250;
  t.approxequal = 0x2248;
  t.approxequalorimage = 0x2252;
  t.approximatelyequal = 0x2245;
  t.araeaekorean = 0x318e;
  t.araeakorean = 0x318d;
  t.arc = 0x2312;
  t.arighthalfring = 0x1e9a;
  t.aring = 0x00e5;
  t.aringacute = 0x01fb;
  t.aringbelow = 0x1e01;
  t.arrowboth = 0x2194;
  t.arrowdashdown = 0x21e3;
  t.arrowdashleft = 0x21e0;
  t.arrowdashright = 0x21e2;
  t.arrowdashup = 0x21e1;
  t.arrowdblboth = 0x21d4;
  t.arrowdbldown = 0x21d3;
  t.arrowdblleft = 0x21d0;
  t.arrowdblright = 0x21d2;
  t.arrowdblup = 0x21d1;
  t.arrowdown = 0x2193;
  t.arrowdownleft = 0x2199;
  t.arrowdownright = 0x2198;
  t.arrowdownwhite = 0x21e9;
  t.arrowheaddownmod = 0x02c5;
  t.arrowheadleftmod = 0x02c2;
  t.arrowheadrightmod = 0x02c3;
  t.arrowheadupmod = 0x02c4;
  t.arrowhorizex = 0xf8e7;
  t.arrowleft = 0x2190;
  t.arrowleftdbl = 0x21d0;
  t.arrowleftdblstroke = 0x21cd;
  t.arrowleftoverright = 0x21c6;
  t.arrowleftwhite = 0x21e6;
  t.arrowright = 0x2192;
  t.arrowrightdblstroke = 0x21cf;
  t.arrowrightheavy = 0x279e;
  t.arrowrightoverleft = 0x21c4;
  t.arrowrightwhite = 0x21e8;
  t.arrowtableft = 0x21e4;
  t.arrowtabright = 0x21e5;
  t.arrowup = 0x2191;
  t.arrowupdn = 0x2195;
  t.arrowupdnbse = 0x21a8;
  t.arrowupdownbase = 0x21a8;
  t.arrowupleft = 0x2196;
  t.arrowupleftofdown = 0x21c5;
  t.arrowupright = 0x2197;
  t.arrowupwhite = 0x21e7;
  t.arrowvertex = 0xf8e6;
  t.asciicircum = 0x005e;
  t.asciicircummonospace = 0xff3e;
  t.asciitilde = 0x007e;
  t.asciitildemonospace = 0xff5e;
  t.ascript = 0x0251;
  t.ascriptturned = 0x0252;
  t.asmallhiragana = 0x3041;
  t.asmallkatakana = 0x30a1;
  t.asmallkatakanahalfwidth = 0xff67;
  t.asterisk = 0x002a;
  t.asteriskaltonearabic = 0x066d;
  t.asteriskarabic = 0x066d;
  t.asteriskmath = 0x2217;
  t.asteriskmonospace = 0xff0a;
  t.asterisksmall = 0xfe61;
  t.asterism = 0x2042;
  t.asuperior = 0xf6e9;
  t.asymptoticallyequal = 0x2243;
  t.at = 0x0040;
  t.atilde = 0x00e3;
  t.atmonospace = 0xff20;
  t.atsmall = 0xfe6b;
  t.aturned = 0x0250;
  t.aubengali = 0x0994;
  t.aubopomofo = 0x3120;
  t.audeva = 0x0914;
  t.augujarati = 0x0a94;
  t.augurmukhi = 0x0a14;
  t.aulengthmarkbengali = 0x09d7;
  t.aumatragurmukhi = 0x0a4c;
  t.auvowelsignbengali = 0x09cc;
  t.auvowelsigndeva = 0x094c;
  t.auvowelsigngujarati = 0x0acc;
  t.avagrahadeva = 0x093d;
  t.aybarmenian = 0x0561;
  t.ayin = 0x05e2;
  t.ayinaltonehebrew = 0xfb20;
  t.ayinhebrew = 0x05e2;
  t.b = 0x0062;
  t.babengali = 0x09ac;
  t.backslash = 0x005c;
  t.backslashmonospace = 0xff3c;
  t.badeva = 0x092c;
  t.bagujarati = 0x0aac;
  t.bagurmukhi = 0x0a2c;
  t.bahiragana = 0x3070;
  t.bahtthai = 0x0e3f;
  t.bakatakana = 0x30d0;
  t.bar = 0x007c;
  t.barmonospace = 0xff5c;
  t.bbopomofo = 0x3105;
  t.bcircle = 0x24d1;
  t.bdotaccent = 0x1e03;
  t.bdotbelow = 0x1e05;
  t.beamedsixteenthnotes = 0x266c;
  t.because = 0x2235;
  t.becyrillic = 0x0431;
  t.beharabic = 0x0628;
  t.behfinalarabic = 0xfe90;
  t.behinitialarabic = 0xfe91;
  t.behiragana = 0x3079;
  t.behmedialarabic = 0xfe92;
  t.behmeeminitialarabic = 0xfc9f;
  t.behmeemisolatedarabic = 0xfc08;
  t.behnoonfinalarabic = 0xfc6d;
  t.bekatakana = 0x30d9;
  t.benarmenian = 0x0562;
  t.bet = 0x05d1;
  t.beta = 0x03b2;
  t.betasymbolgreek = 0x03d0;
  t.betdagesh = 0xfb31;
  t.betdageshhebrew = 0xfb31;
  t.bethebrew = 0x05d1;
  t.betrafehebrew = 0xfb4c;
  t.bhabengali = 0x09ad;
  t.bhadeva = 0x092d;
  t.bhagujarati = 0x0aad;
  t.bhagurmukhi = 0x0a2d;
  t.bhook = 0x0253;
  t.bihiragana = 0x3073;
  t.bikatakana = 0x30d3;
  t.bilabialclick = 0x0298;
  t.bindigurmukhi = 0x0a02;
  t.birusquare = 0x3331;
  t.blackcircle = 0x25cf;
  t.blackdiamond = 0x25c6;
  t.blackdownpointingtriangle = 0x25bc;
  t.blackleftpointingpointer = 0x25c4;
  t.blackleftpointingtriangle = 0x25c0;
  t.blacklenticularbracketleft = 0x3010;
  t.blacklenticularbracketleftvertical = 0xfe3b;
  t.blacklenticularbracketright = 0x3011;
  t.blacklenticularbracketrightvertical = 0xfe3c;
  t.blacklowerlefttriangle = 0x25e3;
  t.blacklowerrighttriangle = 0x25e2;
  t.blackrectangle = 0x25ac;
  t.blackrightpointingpointer = 0x25ba;
  t.blackrightpointingtriangle = 0x25b6;
  t.blacksmallsquare = 0x25aa;
  t.blacksmilingface = 0x263b;
  t.blacksquare = 0x25a0;
  t.blackstar = 0x2605;
  t.blackupperlefttriangle = 0x25e4;
  t.blackupperrighttriangle = 0x25e5;
  t.blackuppointingsmalltriangle = 0x25b4;
  t.blackuppointingtriangle = 0x25b2;
  t.blank = 0x2423;
  t.blinebelow = 0x1e07;
  t.block = 0x2588;
  t.bmonospace = 0xff42;
  t.bobaimaithai = 0x0e1a;
  t.bohiragana = 0x307c;
  t.bokatakana = 0x30dc;
  t.bparen = 0x249d;
  t.bqsquare = 0x33c3;
  t.braceex = 0xf8f4;
  t.braceleft = 0x007b;
  t.braceleftbt = 0xf8f3;
  t.braceleftmid = 0xf8f2;
  t.braceleftmonospace = 0xff5b;
  t.braceleftsmall = 0xfe5b;
  t.bracelefttp = 0xf8f1;
  t.braceleftvertical = 0xfe37;
  t.braceright = 0x007d;
  t.bracerightbt = 0xf8fe;
  t.bracerightmid = 0xf8fd;
  t.bracerightmonospace = 0xff5d;
  t.bracerightsmall = 0xfe5c;
  t.bracerighttp = 0xf8fc;
  t.bracerightvertical = 0xfe38;
  t.bracketleft = 0x005b;
  t.bracketleftbt = 0xf8f0;
  t.bracketleftex = 0xf8ef;
  t.bracketleftmonospace = 0xff3b;
  t.bracketlefttp = 0xf8ee;
  t.bracketright = 0x005d;
  t.bracketrightbt = 0xf8fb;
  t.bracketrightex = 0xf8fa;
  t.bracketrightmonospace = 0xff3d;
  t.bracketrighttp = 0xf8f9;
  t.breve = 0x02d8;
  t.brevebelowcmb = 0x032e;
  t.brevecmb = 0x0306;
  t.breveinvertedbelowcmb = 0x032f;
  t.breveinvertedcmb = 0x0311;
  t.breveinverteddoublecmb = 0x0361;
  t.bridgebelowcmb = 0x032a;
  t.bridgeinvertedbelowcmb = 0x033a;
  t.brokenbar = 0x00a6;
  t.bstroke = 0x0180;
  t.bsuperior = 0xf6ea;
  t.btopbar = 0x0183;
  t.buhiragana = 0x3076;
  t.bukatakana = 0x30d6;
  t.bullet = 0x2022;
  t.bulletinverse = 0x25d8;
  t.bulletoperator = 0x2219;
  t.bullseye = 0x25ce;
  t.c = 0x0063;
  t.caarmenian = 0x056e;
  t.cabengali = 0x099a;
  t.cacute = 0x0107;
  t.cadeva = 0x091a;
  t.cagujarati = 0x0a9a;
  t.cagurmukhi = 0x0a1a;
  t.calsquare = 0x3388;
  t.candrabindubengali = 0x0981;
  t.candrabinducmb = 0x0310;
  t.candrabindudeva = 0x0901;
  t.candrabindugujarati = 0x0a81;
  t.capslock = 0x21ea;
  t.careof = 0x2105;
  t.caron = 0x02c7;
  t.caronbelowcmb = 0x032c;
  t.caroncmb = 0x030c;
  t.carriagereturn = 0x21b5;
  t.cbopomofo = 0x3118;
  t.ccaron = 0x010d;
  t.ccedilla = 0x00e7;
  t.ccedillaacute = 0x1e09;
  t.ccircle = 0x24d2;
  t.ccircumflex = 0x0109;
  t.ccurl = 0x0255;
  t.cdot = 0x010b;
  t.cdotaccent = 0x010b;
  t.cdsquare = 0x33c5;
  t.cedilla = 0x00b8;
  t.cedillacmb = 0x0327;
  t.cent = 0x00a2;
  t.centigrade = 0x2103;
  t.centinferior = 0xf6df;
  t.centmonospace = 0xffe0;
  t.centoldstyle = 0xf7a2;
  t.centsuperior = 0xf6e0;
  t.chaarmenian = 0x0579;
  t.chabengali = 0x099b;
  t.chadeva = 0x091b;
  t.chagujarati = 0x0a9b;
  t.chagurmukhi = 0x0a1b;
  t.chbopomofo = 0x3114;
  t.cheabkhasiancyrillic = 0x04bd;
  t.checkmark = 0x2713;
  t.checyrillic = 0x0447;
  t.chedescenderabkhasiancyrillic = 0x04bf;
  t.chedescendercyrillic = 0x04b7;
  t.chedieresiscyrillic = 0x04f5;
  t.cheharmenian = 0x0573;
  t.chekhakassiancyrillic = 0x04cc;
  t.cheverticalstrokecyrillic = 0x04b9;
  t.chi = 0x03c7;
  t.chieuchacirclekorean = 0x3277;
  t.chieuchaparenkorean = 0x3217;
  t.chieuchcirclekorean = 0x3269;
  t.chieuchkorean = 0x314a;
  t.chieuchparenkorean = 0x3209;
  t.chochangthai = 0x0e0a;
  t.chochanthai = 0x0e08;
  t.chochingthai = 0x0e09;
  t.chochoethai = 0x0e0c;
  t.chook = 0x0188;
  t.cieucacirclekorean = 0x3276;
  t.cieucaparenkorean = 0x3216;
  t.cieuccirclekorean = 0x3268;
  t.cieuckorean = 0x3148;
  t.cieucparenkorean = 0x3208;
  t.cieucuparenkorean = 0x321c;
  t.circle = 0x25cb;
  t.circlecopyrt = 0x00a9;
  t.circlemultiply = 0x2297;
  t.circleot = 0x2299;
  t.circleplus = 0x2295;
  t.circlepostalmark = 0x3036;
  t.circlewithlefthalfblack = 0x25d0;
  t.circlewithrighthalfblack = 0x25d1;
  t.circumflex = 0x02c6;
  t.circumflexbelowcmb = 0x032d;
  t.circumflexcmb = 0x0302;
  t.clear = 0x2327;
  t.clickalveolar = 0x01c2;
  t.clickdental = 0x01c0;
  t.clicklateral = 0x01c1;
  t.clickretroflex = 0x01c3;
  t.club = 0x2663;
  t.clubsuitblack = 0x2663;
  t.clubsuitwhite = 0x2667;
  t.cmcubedsquare = 0x33a4;
  t.cmonospace = 0xff43;
  t.cmsquaredsquare = 0x33a0;
  t.coarmenian = 0x0581;
  t.colon = 0x003a;
  t.colonmonetary = 0x20a1;
  t.colonmonospace = 0xff1a;
  t.colonsign = 0x20a1;
  t.colonsmall = 0xfe55;
  t.colontriangularhalfmod = 0x02d1;
  t.colontriangularmod = 0x02d0;
  t.comma = 0x002c;
  t.commaabovecmb = 0x0313;
  t.commaaboverightcmb = 0x0315;
  t.commaaccent = 0xf6c3;
  t.commaarabic = 0x060c;
  t.commaarmenian = 0x055d;
  t.commainferior = 0xf6e1;
  t.commamonospace = 0xff0c;
  t.commareversedabovecmb = 0x0314;
  t.commareversedmod = 0x02bd;
  t.commasmall = 0xfe50;
  t.commasuperior = 0xf6e2;
  t.commaturnedabovecmb = 0x0312;
  t.commaturnedmod = 0x02bb;
  t.compass = 0x263c;
  t.congruent = 0x2245;
  t.contourintegral = 0x222e;
  t.control = 0x2303;
  t.controlACK = 0x0006;
  t.controlBEL = 0x0007;
  t.controlBS = 0x0008;
  t.controlCAN = 0x0018;
  t.controlCR = 0x000d;
  t.controlDC1 = 0x0011;
  t.controlDC2 = 0x0012;
  t.controlDC3 = 0x0013;
  t.controlDC4 = 0x0014;
  t.controlDEL = 0x007f;
  t.controlDLE = 0x0010;
  t.controlEM = 0x0019;
  t.controlENQ = 0x0005;
  t.controlEOT = 0x0004;
  t.controlESC = 0x001b;
  t.controlETB = 0x0017;
  t.controlETX = 0x0003;
  t.controlFF = 0x000c;
  t.controlFS = 0x001c;
  t.controlGS = 0x001d;
  t.controlHT = 0x0009;
  t.controlLF = 0x000a;
  t.controlNAK = 0x0015;
  t.controlNULL = 0x0000;
  t.controlRS = 0x001e;
  t.controlSI = 0x000f;
  t.controlSO = 0x000e;
  t.controlSOT = 0x0002;
  t.controlSTX = 0x0001;
  t.controlSUB = 0x001a;
  t.controlSYN = 0x0016;
  t.controlUS = 0x001f;
  t.controlVT = 0x000b;
  t.copyright = 0x00a9;
  t.copyrightsans = 0xf8e9;
  t.copyrightserif = 0xf6d9;
  t.cornerbracketleft = 0x300c;
  t.cornerbracketlefthalfwidth = 0xff62;
  t.cornerbracketleftvertical = 0xfe41;
  t.cornerbracketright = 0x300d;
  t.cornerbracketrighthalfwidth = 0xff63;
  t.cornerbracketrightvertical = 0xfe42;
  t.corporationsquare = 0x337f;
  t.cosquare = 0x33c7;
  t.coverkgsquare = 0x33c6;
  t.cparen = 0x249e;
  t.cruzeiro = 0x20a2;
  t.cstretched = 0x0297;
  t.curlyand = 0x22cf;
  t.curlyor = 0x22ce;
  t.currency = 0x00a4;
  t.cyrBreve = 0xf6d1;
  t.cyrFlex = 0xf6d2;
  t.cyrbreve = 0xf6d4;
  t.cyrflex = 0xf6d5;
  t.d = 0x0064;
  t.daarmenian = 0x0564;
  t.dabengali = 0x09a6;
  t.dadarabic = 0x0636;
  t.dadeva = 0x0926;
  t.dadfinalarabic = 0xfebe;
  t.dadinitialarabic = 0xfebf;
  t.dadmedialarabic = 0xfec0;
  t.dagesh = 0x05bc;
  t.dageshhebrew = 0x05bc;
  t.dagger = 0x2020;
  t.daggerdbl = 0x2021;
  t.dagujarati = 0x0aa6;
  t.dagurmukhi = 0x0a26;
  t.dahiragana = 0x3060;
  t.dakatakana = 0x30c0;
  t.dalarabic = 0x062f;
  t.dalet = 0x05d3;
  t.daletdagesh = 0xfb33;
  t.daletdageshhebrew = 0xfb33;
  t.dalethebrew = 0x05d3;
  t.dalfinalarabic = 0xfeaa;
  t.dammaarabic = 0x064f;
  t.dammalowarabic = 0x064f;
  t.dammatanaltonearabic = 0x064c;
  t.dammatanarabic = 0x064c;
  t.danda = 0x0964;
  t.dargahebrew = 0x05a7;
  t.dargalefthebrew = 0x05a7;
  t.dasiapneumatacyrilliccmb = 0x0485;
  t.dblGrave = 0xf6d3;
  t.dblanglebracketleft = 0x300a;
  t.dblanglebracketleftvertical = 0xfe3d;
  t.dblanglebracketright = 0x300b;
  t.dblanglebracketrightvertical = 0xfe3e;
  t.dblarchinvertedbelowcmb = 0x032b;
  t.dblarrowleft = 0x21d4;
  t.dblarrowright = 0x21d2;
  t.dbldanda = 0x0965;
  t.dblgrave = 0xf6d6;
  t.dblgravecmb = 0x030f;
  t.dblintegral = 0x222c;
  t.dbllowline = 0x2017;
  t.dbllowlinecmb = 0x0333;
  t.dbloverlinecmb = 0x033f;
  t.dblprimemod = 0x02ba;
  t.dblverticalbar = 0x2016;
  t.dblverticallineabovecmb = 0x030e;
  t.dbopomofo = 0x3109;
  t.dbsquare = 0x33c8;
  t.dcaron = 0x010f;
  t.dcedilla = 0x1e11;
  t.dcircle = 0x24d3;
  t.dcircumflexbelow = 0x1e13;
  t.dcroat = 0x0111;
  t.ddabengali = 0x09a1;
  t.ddadeva = 0x0921;
  t.ddagujarati = 0x0aa1;
  t.ddagurmukhi = 0x0a21;
  t.ddalarabic = 0x0688;
  t.ddalfinalarabic = 0xfb89;
  t.dddhadeva = 0x095c;
  t.ddhabengali = 0x09a2;
  t.ddhadeva = 0x0922;
  t.ddhagujarati = 0x0aa2;
  t.ddhagurmukhi = 0x0a22;
  t.ddotaccent = 0x1e0b;
  t.ddotbelow = 0x1e0d;
  t.decimalseparatorarabic = 0x066b;
  t.decimalseparatorpersian = 0x066b;
  t.decyrillic = 0x0434;
  t.degree = 0x00b0;
  t.dehihebrew = 0x05ad;
  t.dehiragana = 0x3067;
  t.deicoptic = 0x03ef;
  t.dekatakana = 0x30c7;
  t.deleteleft = 0x232b;
  t.deleteright = 0x2326;
  t.delta = 0x03b4;
  t.deltaturned = 0x018d;
  t.denominatorminusonenumeratorbengali = 0x09f8;
  t.dezh = 0x02a4;
  t.dhabengali = 0x09a7;
  t.dhadeva = 0x0927;
  t.dhagujarati = 0x0aa7;
  t.dhagurmukhi = 0x0a27;
  t.dhook = 0x0257;
  t.dialytikatonos = 0x0385;
  t.dialytikatonoscmb = 0x0344;
  t.diamond = 0x2666;
  t.diamondsuitwhite = 0x2662;
  t.dieresis = 0x00a8;
  t.dieresisacute = 0xf6d7;
  t.dieresisbelowcmb = 0x0324;
  t.dieresiscmb = 0x0308;
  t.dieresisgrave = 0xf6d8;
  t.dieresistonos = 0x0385;
  t.dihiragana = 0x3062;
  t.dikatakana = 0x30c2;
  t.dittomark = 0x3003;
  t.divide = 0x00f7;
  t.divides = 0x2223;
  t.divisionslash = 0x2215;
  t.djecyrillic = 0x0452;
  t.dkshade = 0x2593;
  t.dlinebelow = 0x1e0f;
  t.dlsquare = 0x3397;
  t.dmacron = 0x0111;
  t.dmonospace = 0xff44;
  t.dnblock = 0x2584;
  t.dochadathai = 0x0e0e;
  t.dodekthai = 0x0e14;
  t.dohiragana = 0x3069;
  t.dokatakana = 0x30c9;
  t.dollar = 0x0024;
  t.dollarinferior = 0xf6e3;
  t.dollarmonospace = 0xff04;
  t.dollaroldstyle = 0xf724;
  t.dollarsmall = 0xfe69;
  t.dollarsuperior = 0xf6e4;
  t.dong = 0x20ab;
  t.dorusquare = 0x3326;
  t.dotaccent = 0x02d9;
  t.dotaccentcmb = 0x0307;
  t.dotbelowcmb = 0x0323;
  t.dotbelowcomb = 0x0323;
  t.dotkatakana = 0x30fb;
  t.dotlessi = 0x0131;
  t.dotlessj = 0xf6be;
  t.dotlessjstrokehook = 0x0284;
  t.dotmath = 0x22c5;
  t.dottedcircle = 0x25cc;
  t.doubleyodpatah = 0xfb1f;
  t.doubleyodpatahhebrew = 0xfb1f;
  t.downtackbelowcmb = 0x031e;
  t.downtackmod = 0x02d5;
  t.dparen = 0x249f;
  t.dsuperior = 0xf6eb;
  t.dtail = 0x0256;
  t.dtopbar = 0x018c;
  t.duhiragana = 0x3065;
  t.dukatakana = 0x30c5;
  t.dz = 0x01f3;
  t.dzaltone = 0x02a3;
  t.dzcaron = 0x01c6;
  t.dzcurl = 0x02a5;
  t.dzeabkhasiancyrillic = 0x04e1;
  t.dzecyrillic = 0x0455;
  t.dzhecyrillic = 0x045f;
  t.e = 0x0065;
  t.eacute = 0x00e9;
  t.earth = 0x2641;
  t.ebengali = 0x098f;
  t.ebopomofo = 0x311c;
  t.ebreve = 0x0115;
  t.ecandradeva = 0x090d;
  t.ecandragujarati = 0x0a8d;
  t.ecandravowelsigndeva = 0x0945;
  t.ecandravowelsigngujarati = 0x0ac5;
  t.ecaron = 0x011b;
  t.ecedillabreve = 0x1e1d;
  t.echarmenian = 0x0565;
  t.echyiwnarmenian = 0x0587;
  t.ecircle = 0x24d4;
  t.ecircumflex = 0x00ea;
  t.ecircumflexacute = 0x1ebf;
  t.ecircumflexbelow = 0x1e19;
  t.ecircumflexdotbelow = 0x1ec7;
  t.ecircumflexgrave = 0x1ec1;
  t.ecircumflexhookabove = 0x1ec3;
  t.ecircumflextilde = 0x1ec5;
  t.ecyrillic = 0x0454;
  t.edblgrave = 0x0205;
  t.edeva = 0x090f;
  t.edieresis = 0x00eb;
  t.edot = 0x0117;
  t.edotaccent = 0x0117;
  t.edotbelow = 0x1eb9;
  t.eegurmukhi = 0x0a0f;
  t.eematragurmukhi = 0x0a47;
  t.efcyrillic = 0x0444;
  t.egrave = 0x00e8;
  t.egujarati = 0x0a8f;
  t.eharmenian = 0x0567;
  t.ehbopomofo = 0x311d;
  t.ehiragana = 0x3048;
  t.ehookabove = 0x1ebb;
  t.eibopomofo = 0x311f;
  t.eight = 0x0038;
  t.eightarabic = 0x0668;
  t.eightbengali = 0x09ee;
  t.eightcircle = 0x2467;
  t.eightcircleinversesansserif = 0x2791;
  t.eightdeva = 0x096e;
  t.eighteencircle = 0x2471;
  t.eighteenparen = 0x2485;
  t.eighteenperiod = 0x2499;
  t.eightgujarati = 0x0aee;
  t.eightgurmukhi = 0x0a6e;
  t.eighthackarabic = 0x0668;
  t.eighthangzhou = 0x3028;
  t.eighthnotebeamed = 0x266b;
  t.eightideographicparen = 0x3227;
  t.eightinferior = 0x2088;
  t.eightmonospace = 0xff18;
  t.eightoldstyle = 0xf738;
  t.eightparen = 0x247b;
  t.eightperiod = 0x248f;
  t.eightpersian = 0x06f8;
  t.eightroman = 0x2177;
  t.eightsuperior = 0x2078;
  t.eightthai = 0x0e58;
  t.einvertedbreve = 0x0207;
  t.eiotifiedcyrillic = 0x0465;
  t.ekatakana = 0x30a8;
  t.ekatakanahalfwidth = 0xff74;
  t.ekonkargurmukhi = 0x0a74;
  t.ekorean = 0x3154;
  t.elcyrillic = 0x043b;
  t.element = 0x2208;
  t.elevencircle = 0x246a;
  t.elevenparen = 0x247e;
  t.elevenperiod = 0x2492;
  t.elevenroman = 0x217a;
  t.ellipsis = 0x2026;
  t.ellipsisvertical = 0x22ee;
  t.emacron = 0x0113;
  t.emacronacute = 0x1e17;
  t.emacrongrave = 0x1e15;
  t.emcyrillic = 0x043c;
  t.emdash = 0x2014;
  t.emdashvertical = 0xfe31;
  t.emonospace = 0xff45;
  t.emphasismarkarmenian = 0x055b;
  t.emptyset = 0x2205;
  t.enbopomofo = 0x3123;
  t.encyrillic = 0x043d;
  t.endash = 0x2013;
  t.endashvertical = 0xfe32;
  t.endescendercyrillic = 0x04a3;
  t.eng = 0x014b;
  t.engbopomofo = 0x3125;
  t.enghecyrillic = 0x04a5;
  t.enhookcyrillic = 0x04c8;
  t.enspace = 0x2002;
  t.eogonek = 0x0119;
  t.eokorean = 0x3153;
  t.eopen = 0x025b;
  t.eopenclosed = 0x029a;
  t.eopenreversed = 0x025c;
  t.eopenreversedclosed = 0x025e;
  t.eopenreversedhook = 0x025d;
  t.eparen = 0x24a0;
  t.epsilon = 0x03b5;
  t.epsilontonos = 0x03ad;
  t.equal = 0x003d;
  t.equalmonospace = 0xff1d;
  t.equalsmall = 0xfe66;
  t.equalsuperior = 0x207c;
  t.equivalence = 0x2261;
  t.erbopomofo = 0x3126;
  t.ercyrillic = 0x0440;
  t.ereversed = 0x0258;
  t.ereversedcyrillic = 0x044d;
  t.escyrillic = 0x0441;
  t.esdescendercyrillic = 0x04ab;
  t.esh = 0x0283;
  t.eshcurl = 0x0286;
  t.eshortdeva = 0x090e;
  t.eshortvowelsigndeva = 0x0946;
  t.eshreversedloop = 0x01aa;
  t.eshsquatreversed = 0x0285;
  t.esmallhiragana = 0x3047;
  t.esmallkatakana = 0x30a7;
  t.esmallkatakanahalfwidth = 0xff6a;
  t.estimated = 0x212e;
  t.esuperior = 0xf6ec;
  t.eta = 0x03b7;
  t.etarmenian = 0x0568;
  t.etatonos = 0x03ae;
  t.eth = 0x00f0;
  t.etilde = 0x1ebd;
  t.etildebelow = 0x1e1b;
  t.etnahtafoukhhebrew = 0x0591;
  t.etnahtafoukhlefthebrew = 0x0591;
  t.etnahtahebrew = 0x0591;
  t.etnahtalefthebrew = 0x0591;
  t.eturned = 0x01dd;
  t.eukorean = 0x3161;
  t.euro = 0x20ac;
  t.evowelsignbengali = 0x09c7;
  t.evowelsigndeva = 0x0947;
  t.evowelsigngujarati = 0x0ac7;
  t.exclam = 0x0021;
  t.exclamarmenian = 0x055c;
  t.exclamdbl = 0x203c;
  t.exclamdown = 0x00a1;
  t.exclamdownsmall = 0xf7a1;
  t.exclammonospace = 0xff01;
  t.exclamsmall = 0xf721;
  t.existential = 0x2203;
  t.ezh = 0x0292;
  t.ezhcaron = 0x01ef;
  t.ezhcurl = 0x0293;
  t.ezhreversed = 0x01b9;
  t.ezhtail = 0x01ba;
  t.f = 0x0066;
  t.fadeva = 0x095e;
  t.fagurmukhi = 0x0a5e;
  t.fahrenheit = 0x2109;
  t.fathaarabic = 0x064e;
  t.fathalowarabic = 0x064e;
  t.fathatanarabic = 0x064b;
  t.fbopomofo = 0x3108;
  t.fcircle = 0x24d5;
  t.fdotaccent = 0x1e1f;
  t.feharabic = 0x0641;
  t.feharmenian = 0x0586;
  t.fehfinalarabic = 0xfed2;
  t.fehinitialarabic = 0xfed3;
  t.fehmedialarabic = 0xfed4;
  t.feicoptic = 0x03e5;
  t.female = 0x2640;
  t.ff = 0xfb00;
  t.f_f = 0xfb00;
  t.ffi = 0xfb03;
  t.f_f_i = 0xfb03;
  t.ffl = 0xfb04;
  t.f_f_l = 0xfb04;
  t.fi = 0xfb01;
  t.f_i = 0xfb01;
  t.fifteencircle = 0x246e;
  t.fifteenparen = 0x2482;
  t.fifteenperiod = 0x2496;
  t.figuredash = 0x2012;
  t.filledbox = 0x25a0;
  t.filledrect = 0x25ac;
  t.finalkaf = 0x05da;
  t.finalkafdagesh = 0xfb3a;
  t.finalkafdageshhebrew = 0xfb3a;
  t.finalkafhebrew = 0x05da;
  t.finalmem = 0x05dd;
  t.finalmemhebrew = 0x05dd;
  t.finalnun = 0x05df;
  t.finalnunhebrew = 0x05df;
  t.finalpe = 0x05e3;
  t.finalpehebrew = 0x05e3;
  t.finaltsadi = 0x05e5;
  t.finaltsadihebrew = 0x05e5;
  t.firsttonechinese = 0x02c9;
  t.fisheye = 0x25c9;
  t.fitacyrillic = 0x0473;
  t.five = 0x0035;
  t.fivearabic = 0x0665;
  t.fivebengali = 0x09eb;
  t.fivecircle = 0x2464;
  t.fivecircleinversesansserif = 0x278e;
  t.fivedeva = 0x096b;
  t.fiveeighths = 0x215d;
  t.fivegujarati = 0x0aeb;
  t.fivegurmukhi = 0x0a6b;
  t.fivehackarabic = 0x0665;
  t.fivehangzhou = 0x3025;
  t.fiveideographicparen = 0x3224;
  t.fiveinferior = 0x2085;
  t.fivemonospace = 0xff15;
  t.fiveoldstyle = 0xf735;
  t.fiveparen = 0x2478;
  t.fiveperiod = 0x248c;
  t.fivepersian = 0x06f5;
  t.fiveroman = 0x2174;
  t.fivesuperior = 0x2075;
  t.fivethai = 0x0e55;
  t.fl = 0xfb02;
  t.f_l = 0xfb02;
  t.florin = 0x0192;
  t.fmonospace = 0xff46;
  t.fmsquare = 0x3399;
  t.fofanthai = 0x0e1f;
  t.fofathai = 0x0e1d;
  t.fongmanthai = 0x0e4f;
  t.forall = 0x2200;
  t.four = 0x0034;
  t.fourarabic = 0x0664;
  t.fourbengali = 0x09ea;
  t.fourcircle = 0x2463;
  t.fourcircleinversesansserif = 0x278d;
  t.fourdeva = 0x096a;
  t.fourgujarati = 0x0aea;
  t.fourgurmukhi = 0x0a6a;
  t.fourhackarabic = 0x0664;
  t.fourhangzhou = 0x3024;
  t.fourideographicparen = 0x3223;
  t.fourinferior = 0x2084;
  t.fourmonospace = 0xff14;
  t.fournumeratorbengali = 0x09f7;
  t.fouroldstyle = 0xf734;
  t.fourparen = 0x2477;
  t.fourperiod = 0x248b;
  t.fourpersian = 0x06f4;
  t.fourroman = 0x2173;
  t.foursuperior = 0x2074;
  t.fourteencircle = 0x246d;
  t.fourteenparen = 0x2481;
  t.fourteenperiod = 0x2495;
  t.fourthai = 0x0e54;
  t.fourthtonechinese = 0x02cb;
  t.fparen = 0x24a1;
  t.fraction = 0x2044;
  t.franc = 0x20a3;
  t.g = 0x0067;
  t.gabengali = 0x0997;
  t.gacute = 0x01f5;
  t.gadeva = 0x0917;
  t.gafarabic = 0x06af;
  t.gaffinalarabic = 0xfb93;
  t.gafinitialarabic = 0xfb94;
  t.gafmedialarabic = 0xfb95;
  t.gagujarati = 0x0a97;
  t.gagurmukhi = 0x0a17;
  t.gahiragana = 0x304c;
  t.gakatakana = 0x30ac;
  t.gamma = 0x03b3;
  t.gammalatinsmall = 0x0263;
  t.gammasuperior = 0x02e0;
  t.gangiacoptic = 0x03eb;
  t.gbopomofo = 0x310d;
  t.gbreve = 0x011f;
  t.gcaron = 0x01e7;
  t.gcedilla = 0x0123;
  t.gcircle = 0x24d6;
  t.gcircumflex = 0x011d;
  t.gcommaaccent = 0x0123;
  t.gdot = 0x0121;
  t.gdotaccent = 0x0121;
  t.gecyrillic = 0x0433;
  t.gehiragana = 0x3052;
  t.gekatakana = 0x30b2;
  t.geometricallyequal = 0x2251;
  t.gereshaccenthebrew = 0x059c;
  t.gereshhebrew = 0x05f3;
  t.gereshmuqdamhebrew = 0x059d;
  t.germandbls = 0x00df;
  t.gershayimaccenthebrew = 0x059e;
  t.gershayimhebrew = 0x05f4;
  t.getamark = 0x3013;
  t.ghabengali = 0x0998;
  t.ghadarmenian = 0x0572;
  t.ghadeva = 0x0918;
  t.ghagujarati = 0x0a98;
  t.ghagurmukhi = 0x0a18;
  t.ghainarabic = 0x063a;
  t.ghainfinalarabic = 0xfece;
  t.ghaininitialarabic = 0xfecf;
  t.ghainmedialarabic = 0xfed0;
  t.ghemiddlehookcyrillic = 0x0495;
  t.ghestrokecyrillic = 0x0493;
  t.gheupturncyrillic = 0x0491;
  t.ghhadeva = 0x095a;
  t.ghhagurmukhi = 0x0a5a;
  t.ghook = 0x0260;
  t.ghzsquare = 0x3393;
  t.gihiragana = 0x304e;
  t.gikatakana = 0x30ae;
  t.gimarmenian = 0x0563;
  t.gimel = 0x05d2;
  t.gimeldagesh = 0xfb32;
  t.gimeldageshhebrew = 0xfb32;
  t.gimelhebrew = 0x05d2;
  t.gjecyrillic = 0x0453;
  t.glottalinvertedstroke = 0x01be;
  t.glottalstop = 0x0294;
  t.glottalstopinverted = 0x0296;
  t.glottalstopmod = 0x02c0;
  t.glottalstopreversed = 0x0295;
  t.glottalstopreversedmod = 0x02c1;
  t.glottalstopreversedsuperior = 0x02e4;
  t.glottalstopstroke = 0x02a1;
  t.glottalstopstrokereversed = 0x02a2;
  t.gmacron = 0x1e21;
  t.gmonospace = 0xff47;
  t.gohiragana = 0x3054;
  t.gokatakana = 0x30b4;
  t.gparen = 0x24a2;
  t.gpasquare = 0x33ac;
  t.gradient = 0x2207;
  t.grave = 0x0060;
  t.gravebelowcmb = 0x0316;
  t.gravecmb = 0x0300;
  t.gravecomb = 0x0300;
  t.gravedeva = 0x0953;
  t.gravelowmod = 0x02ce;
  t.gravemonospace = 0xff40;
  t.gravetonecmb = 0x0340;
  t.greater = 0x003e;
  t.greaterequal = 0x2265;
  t.greaterequalorless = 0x22db;
  t.greatermonospace = 0xff1e;
  t.greaterorequivalent = 0x2273;
  t.greaterorless = 0x2277;
  t.greateroverequal = 0x2267;
  t.greatersmall = 0xfe65;
  t.gscript = 0x0261;
  t.gstroke = 0x01e5;
  t.guhiragana = 0x3050;
  t.guillemotleft = 0x00ab;
  t.guillemotright = 0x00bb;
  t.guilsinglleft = 0x2039;
  t.guilsinglright = 0x203a;
  t.gukatakana = 0x30b0;
  t.guramusquare = 0x3318;
  t.gysquare = 0x33c9;
  t.h = 0x0068;
  t.haabkhasiancyrillic = 0x04a9;
  t.haaltonearabic = 0x06c1;
  t.habengali = 0x09b9;
  t.hadescendercyrillic = 0x04b3;
  t.hadeva = 0x0939;
  t.hagujarati = 0x0ab9;
  t.hagurmukhi = 0x0a39;
  t.haharabic = 0x062d;
  t.hahfinalarabic = 0xfea2;
  t.hahinitialarabic = 0xfea3;
  t.hahiragana = 0x306f;
  t.hahmedialarabic = 0xfea4;
  t.haitusquare = 0x332a;
  t.hakatakana = 0x30cf;
  t.hakatakanahalfwidth = 0xff8a;
  t.halantgurmukhi = 0x0a4d;
  t.hamzaarabic = 0x0621;
  t.hamzalowarabic = 0x0621;
  t.hangulfiller = 0x3164;
  t.hardsigncyrillic = 0x044a;
  t.harpoonleftbarbup = 0x21bc;
  t.harpoonrightbarbup = 0x21c0;
  t.hasquare = 0x33ca;
  t.hatafpatah = 0x05b2;
  t.hatafpatah16 = 0x05b2;
  t.hatafpatah23 = 0x05b2;
  t.hatafpatah2f = 0x05b2;
  t.hatafpatahhebrew = 0x05b2;
  t.hatafpatahnarrowhebrew = 0x05b2;
  t.hatafpatahquarterhebrew = 0x05b2;
  t.hatafpatahwidehebrew = 0x05b2;
  t.hatafqamats = 0x05b3;
  t.hatafqamats1b = 0x05b3;
  t.hatafqamats28 = 0x05b3;
  t.hatafqamats34 = 0x05b3;
  t.hatafqamatshebrew = 0x05b3;
  t.hatafqamatsnarrowhebrew = 0x05b3;
  t.hatafqamatsquarterhebrew = 0x05b3;
  t.hatafqamatswidehebrew = 0x05b3;
  t.hatafsegol = 0x05b1;
  t.hatafsegol17 = 0x05b1;
  t.hatafsegol24 = 0x05b1;
  t.hatafsegol30 = 0x05b1;
  t.hatafsegolhebrew = 0x05b1;
  t.hatafsegolnarrowhebrew = 0x05b1;
  t.hatafsegolquarterhebrew = 0x05b1;
  t.hatafsegolwidehebrew = 0x05b1;
  t.hbar = 0x0127;
  t.hbopomofo = 0x310f;
  t.hbrevebelow = 0x1e2b;
  t.hcedilla = 0x1e29;
  t.hcircle = 0x24d7;
  t.hcircumflex = 0x0125;
  t.hdieresis = 0x1e27;
  t.hdotaccent = 0x1e23;
  t.hdotbelow = 0x1e25;
  t.he = 0x05d4;
  t.heart = 0x2665;
  t.heartsuitblack = 0x2665;
  t.heartsuitwhite = 0x2661;
  t.hedagesh = 0xfb34;
  t.hedageshhebrew = 0xfb34;
  t.hehaltonearabic = 0x06c1;
  t.heharabic = 0x0647;
  t.hehebrew = 0x05d4;
  t.hehfinalaltonearabic = 0xfba7;
  t.hehfinalalttwoarabic = 0xfeea;
  t.hehfinalarabic = 0xfeea;
  t.hehhamzaabovefinalarabic = 0xfba5;
  t.hehhamzaaboveisolatedarabic = 0xfba4;
  t.hehinitialaltonearabic = 0xfba8;
  t.hehinitialarabic = 0xfeeb;
  t.hehiragana = 0x3078;
  t.hehmedialaltonearabic = 0xfba9;
  t.hehmedialarabic = 0xfeec;
  t.heiseierasquare = 0x337b;
  t.hekatakana = 0x30d8;
  t.hekatakanahalfwidth = 0xff8d;
  t.hekutaarusquare = 0x3336;
  t.henghook = 0x0267;
  t.herutusquare = 0x3339;
  t.het = 0x05d7;
  t.hethebrew = 0x05d7;
  t.hhook = 0x0266;
  t.hhooksuperior = 0x02b1;
  t.hieuhacirclekorean = 0x327b;
  t.hieuhaparenkorean = 0x321b;
  t.hieuhcirclekorean = 0x326d;
  t.hieuhkorean = 0x314e;
  t.hieuhparenkorean = 0x320d;
  t.hihiragana = 0x3072;
  t.hikatakana = 0x30d2;
  t.hikatakanahalfwidth = 0xff8b;
  t.hiriq = 0x05b4;
  t.hiriq14 = 0x05b4;
  t.hiriq21 = 0x05b4;
  t.hiriq2d = 0x05b4;
  t.hiriqhebrew = 0x05b4;
  t.hiriqnarrowhebrew = 0x05b4;
  t.hiriqquarterhebrew = 0x05b4;
  t.hiriqwidehebrew = 0x05b4;
  t.hlinebelow = 0x1e96;
  t.hmonospace = 0xff48;
  t.hoarmenian = 0x0570;
  t.hohipthai = 0x0e2b;
  t.hohiragana = 0x307b;
  t.hokatakana = 0x30db;
  t.hokatakanahalfwidth = 0xff8e;
  t.holam = 0x05b9;
  t.holam19 = 0x05b9;
  t.holam26 = 0x05b9;
  t.holam32 = 0x05b9;
  t.holamhebrew = 0x05b9;
  t.holamnarrowhebrew = 0x05b9;
  t.holamquarterhebrew = 0x05b9;
  t.holamwidehebrew = 0x05b9;
  t.honokhukthai = 0x0e2e;
  t.hookabovecomb = 0x0309;
  t.hookcmb = 0x0309;
  t.hookpalatalizedbelowcmb = 0x0321;
  t.hookretroflexbelowcmb = 0x0322;
  t.hoonsquare = 0x3342;
  t.horicoptic = 0x03e9;
  t.horizontalbar = 0x2015;
  t.horncmb = 0x031b;
  t.hotsprings = 0x2668;
  t.house = 0x2302;
  t.hparen = 0x24a3;
  t.hsuperior = 0x02b0;
  t.hturned = 0x0265;
  t.huhiragana = 0x3075;
  t.huiitosquare = 0x3333;
  t.hukatakana = 0x30d5;
  t.hukatakanahalfwidth = 0xff8c;
  t.hungarumlaut = 0x02dd;
  t.hungarumlautcmb = 0x030b;
  t.hv = 0x0195;
  t.hyphen = 0x002d;
  t.hypheninferior = 0xf6e5;
  t.hyphenmonospace = 0xff0d;
  t.hyphensmall = 0xfe63;
  t.hyphensuperior = 0xf6e6;
  t.hyphentwo = 0x2010;
  t.i = 0x0069;
  t.iacute = 0x00ed;
  t.iacyrillic = 0x044f;
  t.ibengali = 0x0987;
  t.ibopomofo = 0x3127;
  t.ibreve = 0x012d;
  t.icaron = 0x01d0;
  t.icircle = 0x24d8;
  t.icircumflex = 0x00ee;
  t.icyrillic = 0x0456;
  t.idblgrave = 0x0209;
  t.ideographearthcircle = 0x328f;
  t.ideographfirecircle = 0x328b;
  t.ideographicallianceparen = 0x323f;
  t.ideographiccallparen = 0x323a;
  t.ideographiccentrecircle = 0x32a5;
  t.ideographicclose = 0x3006;
  t.ideographiccomma = 0x3001;
  t.ideographiccommaleft = 0xff64;
  t.ideographiccongratulationparen = 0x3237;
  t.ideographiccorrectcircle = 0x32a3;
  t.ideographicearthparen = 0x322f;
  t.ideographicenterpriseparen = 0x323d;
  t.ideographicexcellentcircle = 0x329d;
  t.ideographicfestivalparen = 0x3240;
  t.ideographicfinancialcircle = 0x3296;
  t.ideographicfinancialparen = 0x3236;
  t.ideographicfireparen = 0x322b;
  t.ideographichaveparen = 0x3232;
  t.ideographichighcircle = 0x32a4;
  t.ideographiciterationmark = 0x3005;
  t.ideographiclaborcircle = 0x3298;
  t.ideographiclaborparen = 0x3238;
  t.ideographicleftcircle = 0x32a7;
  t.ideographiclowcircle = 0x32a6;
  t.ideographicmedicinecircle = 0x32a9;
  t.ideographicmetalparen = 0x322e;
  t.ideographicmoonparen = 0x322a;
  t.ideographicnameparen = 0x3234;
  t.ideographicperiod = 0x3002;
  t.ideographicprintcircle = 0x329e;
  t.ideographicreachparen = 0x3243;
  t.ideographicrepresentparen = 0x3239;
  t.ideographicresourceparen = 0x323e;
  t.ideographicrightcircle = 0x32a8;
  t.ideographicsecretcircle = 0x3299;
  t.ideographicselfparen = 0x3242;
  t.ideographicsocietyparen = 0x3233;
  t.ideo