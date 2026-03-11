"use strict";

/**
 * @typedef PdfToTextOptions
 * @property {boolean} [boundingBoxXhtml] Generate an XHTML file containing bounding
 * box information for each word in the file.
 * @property {boolean} [boundingBoxXhtmlLayout] Generate an XHTML file containing
 * bounding box information for each block, line, and word in the file.
 * @property {boolean} [cropBox] Use the crop box rather than the media box with
 * `options.boundingBoxXhtml` and `options.boundingBoxXhtmlLayout`.
 * @property {number} [cropHeight] Specifies the height of crop area in pixels
 * (image output) or points (vector output).
 * @property {number} [cropWidth] Specifies the width of crop area in pixels
 * (image output) or points (vector output).
 * @property {number} [cropXAxis] Specifies the x-coordinate of the crop area top left
 * corner in pixels (image output) or points (vector output).
 * @property {number} [cropYAxis] Specifies the y-coordinate of the crop area top left
 * corner in pixels (image output) or points (vector output).
 * @property {('dos'|'mac'|'unix')} [eolConvention] Sets the end-of-line convention to use for
 * text output: dos; mac; unix.
 * @property {number} [firstPageToConvert] Specifies the first page to convert.
 * @property {number} [fixedWidthLayout] Assume fixed-pitch (or tabular) text, with the
 * specified character width (in points). This forces physical layout mode.
 * @property {boolean} [generateHtmlMetaFile] Generate simple HTML file, including the
 * meta information. This simply wraps the text in `<pre>` and `</pre>` and prepends the meta headers.
 * @property {boolean} [generateTsvFile] Generate a TSV file containing the bounding box
 * information for each block, line, and word in the file.
 * @property {number} [lastPageToConvert] Specifies the last page to convert.
 * @property {boolean} [listEncodingOptions] List the available encodings.
 * @property {boolean} [maintainLayout] Maintain (as best as possible) the original physical
 * layout of the text. The default is to undo physical layout (columns, hyphenation, etc.) and
 * output the text in reading order.
 * @property {boolean} [noDiagonalText] Discard diagonal text.
 * @property {boolean} [noPageBreaks] Do not insert page breaks (form feed characters)
 * between pages.
 * @property {string} [outputEncoding] Sets the encoding to use for text output.
 * This defaults to `UTF-8`.
 * @property {string} [ownerPassword] Owner password (for encrypted files).
 * @property {boolean} [printVersionInfo] Print copyright and version information.
 * @property {boolean} [quiet] Do not print any messages or errors.
 * @property {boolean} [rawLayout] Keep the text in content stream order. This is a
 * hack which often undoes column formatting, etc. Use of raw mode is no longer recommended.
 * @property {string} [userPassword] User password (for encrypted files).
 */

/** @type {import("../index").PopplerAcceptedOptions} */
module.exports = {
	boundingBoxXhtml: { arg: "-bbox", type: "boolean" },
	boundingBoxXhtmlLayout: {
		arg: "-bbox-layout",
		type: "boolean",
	},
	cropBox: {
		arg: "-cropbox",
		type: "boolean",
		minVersion: "21.03.0",
	},
	cropHeight: { arg: "-H", type: "number" },
	cropWidth: { arg: "-W", type: "number" },
	cropXAxis: { arg: "-x", type: "number" },
	cropYAxis: { arg: "-y", type: "number" },
	eolConvention: { arg: "-eol", type: "string" },
	firstPageToConvert: { arg: "-f", type: "number" },
	fixedWidthLayout: { arg: "-fixed", type: "number" },
	generateHtmlMetaFile: {
		arg: "-htmlmeta",
		type: "boolean",
	},
	generateTsvFile: { arg: "-tsv", type: "boolean" },
	lastPageToConvert: { arg: "-l", type: "number" },
	listEncodingOptions: {
		arg: "-listenc",
		type: "boolean",
	},
	maintainLayout: { arg: "-layout", type: "boolean" },
	noDiagonalText: {
		arg: "-nodiag",
		type: "boolean",
		minVersion: "0.80.0",
	},
	noPageBreaks: { arg: "-nopgbrk", type: "boolean" },
	outputEncoding: { arg: "-enc", type: "string" },
	ownerPassword: { arg: "-opw", type: "string" },
	printVersionInfo: { arg: "-v", type: "boolean" },
	quiet: { arg: "-q", type: "boolean" },
	rawLayout: { arg: "-raw", type: "boolean" },
	resolution: { arg: "-r", type: "number" },
	userPassword: { arg: "-upw", type: "string" },
};
