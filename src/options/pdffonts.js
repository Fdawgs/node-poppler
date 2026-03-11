"use strict";

/**
 * @typedef PdfFontsOptions
 * @property {number} [firstPageToExamine] Specifies the first page to examine.
 * @property {number} [lastPageToExamine] Specifies the last page to examine.
 * @property {boolean} [listSubstitutes] List the substitute fonts that poppler
 * will use for non-embedded fonts.
 * @property {string} [ownerPassword] Owner password (for encrypted files).
 * @property {boolean} [printVersionInfo] Print copyright and version info.
 * @property {string} [userPassword] User password (for encrypted files).
 */

/** @type {Record<keyof PdfFontsOptions, import("../index").OptionDetails>} */
module.exports = {
	firstPageToExamine: { arg: "-f", type: "number" },
	lastPageToExamine: { arg: "-l", type: "number" },
	listSubstitutes: { arg: "-subst", type: "boolean" },
	ownerPassword: { arg: "-opw", type: "string" },
	printVersionInfo: { arg: "-v", type: "boolean" },
	userPassword: { arg: "-upw", type: "string" },
};
