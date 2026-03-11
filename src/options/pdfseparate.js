"use strict";

/**
 * @typedef PdfSeparateOptions
 * @property {number} [firstPageToExtract] Specifies the first page to extract.
 * This defaults to page 1.
 * @property {number} [lastPageToExtract] Specifies the last page to extract.
 * This defaults to the last page of the PDF file.
 * @property {boolean} [printVersionInfo] Print copyright and version info.
 */

/** @type {import("../index").PopplerAcceptedOptions} */
module.exports = {
	firstPageToExtract: { arg: "-f", type: "number" },
	lastPageToExtract: { arg: "-l", type: "number" },
	printVersionInfo: { arg: "-v", type: "boolean" },
};
