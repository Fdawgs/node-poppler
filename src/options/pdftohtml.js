"use strict";

/**
 * @typedef PdfToHtmlOptions
 * @property {boolean} [complexOutput] Generate complex output.
 * @property {boolean} [dataUrls] Use data URLs instead of external images in HTML.
 * @property {boolean} [exchangePdfLinks] Exchange .pdf links with .html.
 * @property {boolean} [extractHidden] Force hidden text extraction.
 * @property {number} [firstPageToConvert] First page to print.
 * @property {boolean} [fontFullName] Outputs the font name without any substitutions.
 * @property {boolean} [ignoreImages] Ignore images.
 * @property {('JPG'|'PNG')} [imageFormat] Image file format for Splash output (JPG or PNG).
 * If complexOutput is selected, but imageFormat is not specified, PNG will be assumed.
 * @property {number} [lastPageToConvert] Last page to print.
 * @property {boolean} [noDrm] Override document DRM settings.
 * @property {boolean} [noFrames] Generate no frames. Not supported in complex output mode.
 * @property {boolean} [noMergeParagraph] Do not merge paragraphs.
 * @property {boolean} [noRoundedCoordinates] Do not round coordinates
 * (with XML output only).
 * @property {string} [outputEncoding] Sets the encoding to use for text output.
 * This defaults to `UTF-8`.
 * @property {string} [ownerPassword] Owner password (for encrypted files).
 * @property {boolean} [printVersionInfo] Print copyright and version info.
 * @property {boolean} [quiet] Do not print any messages or errors.
 * @property {boolean} [singlePage] Generate single HTML that includes all pages.
 * @property {boolean} [stdout] Use standard output.
 * @property {string} [userPassword] User password (for encrypted files).
 * @property {number} [wordBreakThreshold] Adjust the word break threshold percent.
 * Default is 10. Word break occurs when distance between two adjacent characters is greater
 * than this percent of character height.
 * @property {boolean} [xmlOutput] Output for XML post-processing.
 * @property {number} [zoom] Zoom the PDF document (default 1.5).
 */

/** @type {Record<keyof PdfToHtmlOptions, import("../index").OptionDetails>} */
module.exports = {
	complexOutput: { arg: "-c", type: "boolean", minVersion: "0.1.0" },
	dataUrls: { arg: "-dataurls", type: "boolean", minVersion: "0.75.0" },
	exchangePdfLinks: { arg: "-p", type: "boolean", minVersion: "0.1.0" },
	extractHidden: { arg: "-hidden", type: "boolean", minVersion: "0.1.0" },
	firstPageToConvert: { arg: "-f", type: "number", minVersion: "0.1.0" },
	fontFullName: {
		arg: "-fontfullname",
		type: "boolean",
		minVersion: "0.21.0",
	},
	ignoreImages: { arg: "-i", type: "boolean", minVersion: "0.1.0" },
	imageFormat: { arg: "-fmt", type: "string", minVersion: "0.1.0" },
	lastPageToConvert: { arg: "-l", type: "number", minVersion: "0.1.0" },
	noDrm: { arg: "-nodrm", type: "boolean", minVersion: "0.1.0" },
	noFrames: { arg: "-noframes", type: "boolean", minVersion: "0.1.0" },
	noMergeParagraph: { arg: "-nomerge", type: "boolean", minVersion: "0.1.0" },
	noRoundedCoordinates: {
		arg: "-noroundcoord",
		type: "boolean",
		minVersion: "0.68.0",
	},
	outputEncoding: { arg: "-enc", type: "string", minVersion: "0.1.0" },
	ownerPassword: { arg: "-opw", type: "string", minVersion: "0.1.0" },
	printVersionInfo: { arg: "-v", type: "boolean", minVersion: "0.1.0" },
	quiet: { arg: "-q", type: "boolean", minVersion: "0.1.0" },
	singlePage: { arg: "-s", type: "boolean", minVersion: "0.15.1" },
	stdout: { arg: "-stdout", type: "boolean", minVersion: "0.1.0" },
	userPassword: { arg: "-upw", type: "string", minVersion: "0.1.0" },
	wordBreakThreshold: { arg: "-wbt", type: "number", minVersion: "0.1.0" },
	xmlOutput: { arg: "-xml", type: "boolean", minVersion: "0.1.0" },
	zoom: { arg: "-zoom", type: "number", minVersion: "0.1.0" },
};
