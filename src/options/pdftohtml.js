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
	complexOutput: { arg: "-c", type: "boolean" },
	dataUrls: {
		arg: "-dataurls",
		type: "boolean",
		minVersion: "0.75.0",
	},
	exchangePdfLinks: { arg: "-p", type: "boolean" },
	extractHidden: { arg: "-hidden", type: "boolean" },
	firstPageToConvert: { arg: "-f", type: "number" },
	fontFullName: {
		arg: "-fontfullname",
		type: "boolean",
	},
	ignoreImages: { arg: "-i", type: "boolean" },
	imageFormat: { arg: "-fmt", type: "string" },
	lastPageToConvert: { arg: "-l", type: "number" },
	noDrm: { arg: "-nodrm", type: "boolean" },
	noFrames: { arg: "-noframes", type: "boolean" },
	noMergeParagraph: {
		arg: "-nomerge",
		type: "boolean",
	},
	noRoundedCoordinates: {
		arg: "-noroundcoord",
		type: "boolean",
	},
	outputEncoding: { arg: "-enc", type: "string" },
	ownerPassword: { arg: "-opw", type: "string" },
	printVersionInfo: { arg: "-v", type: "boolean" },
	quiet: { arg: "-q", type: "boolean" },
	singlePage: { arg: "-s", type: "boolean" },
	stdout: { arg: "-stdout", type: "boolean" },
	userPassword: { arg: "-upw", type: "string" },
	wordBreakThreshold: { arg: "-wbt", type: "number" },
	xmlOutput: { arg: "-xml", type: "boolean" },
	zoom: { arg: "-zoom", type: "number" },
};
