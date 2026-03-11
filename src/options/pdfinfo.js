"use strict";

/**
 * @typedef PdfInfoOptions
 * @property {number} [firstPageToConvert] First page to print.
 * @property {number} [lastPageToConvert] Last page to print.
 * @property {boolean} [listEncodingOptions] List the available encodings.
 * @property {string} [outputEncoding] Sets the encoding to use for text output.
 * This defaults to `UTF-8`.
 * @property {string} [ownerPassword] Owner password (for encrypted files).
 * @property {boolean} [printAsJson] Print result as a JSON object.
 * @property {boolean} [printBoundingBoxes] Prints the page box bounding boxes:
 * MediaBox, CropBox, BleedBox, TrimBox, and ArtBox.
 * @property {boolean} [printDocStruct] Prints the logical document structure
 * of a Tagged-PDF file.
 * @property {boolean} [printDocStructText] Print the textual content along with the
 * document structure of a Tagged-PDF file. Note that extracting text this way might be slow
 * for big PDF files.
 * @property {boolean} [printIsoDates] Prints dates in ISO-8601 format (including the time zone).
 * @property {boolean} [printJS] Prints all JavaScript in the PDF file.
 * @property {boolean} [printMetadata] Prints document-level metadata. (This is the `Metadata`
 * stream from the PDF file's Catalog object).
 * @property {boolean} [printNamedDests] Print a list of all named destinations. If a page range
 * is specified using the `options.firstPageToConvert` and `options.lastPageToConvert` options, only destinations
 * in the page range are listed.
 * @property {boolean} [printRawDates] Prints the raw (undecoded) date strings, directly from the PDF file.
 * @property {boolean} [printUrls] Print all URLs in the PDF; only URLs referenced by PDF objects
 * such as Link Annotations are listed, not URL strings in the text content.
 * @property {boolean} [printVersionInfo] Print copyright and version info.
 * @property {string} [userPassword] User password (for encrypted files).
 */

/** @type {import("../index").PopplerAcceptedOptions} */
module.exports = {
	firstPageToConvert: { arg: "-f", type: "number" },
	lastPageToConvert: { arg: "-l", type: "number" },
	listEncodingOptions: {
		arg: "-listenc",
		type: "boolean",
	},
	outputEncoding: { arg: "-enc", type: "string" },
	ownerPassword: { arg: "-opw", type: "string" },
	printAsJson: { arg: "", type: "boolean" },
	printBoundingBoxes: {
		arg: "-box",
		type: "boolean",
	},
	printDocStruct: { arg: "-struct", type: "boolean" },
	printDocStructText: {
		arg: "-struct-text",
		type: "boolean",
	},
	printIsoDates: {
		arg: "-isodates",
		type: "boolean",
	},
	printJS: { arg: "-js", type: "boolean" },
	printMetadata: { arg: "-meta", type: "boolean" },
	printNamedDests: { arg: "-dests", type: "boolean" },
	printRawDates: {
		arg: "-rawdates",
		type: "boolean",
	},
	printUrls: {
		arg: "-url",
		type: "boolean",
		minVersion: "21.11.0",
	},
	printVersionInfo: { arg: "-v", type: "boolean" },
	userPassword: { arg: "-upw", type: "string" },
};
