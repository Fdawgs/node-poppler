"use strict";

/**
 * @typedef PdfFontsOptions
 * @property {number} [firstPageToExamine] Specifies the first page to examine.
 * @property {number} [lastPageToExamine] Specifies the last page to examine.
 * @property {boolean} [listSubstitutes] List the substitute fonts that Poppler
 * will use for non-embedded fonts.
 * @property {string} [ownerPassword] Owner password (for encrypted files).
 * @property {boolean} [printVersionInfo] Print copyright and version info.
 * @property {string} [userPassword] User password (for encrypted files).
 */

/** @type {Record<keyof PdfFontsOptions, import("../index").OptionDetails>} */
module.exports = {
	firstPageToExamine: { arg: "-f", type: "number", minVersion: undefined },
	lastPageToExamine: { arg: "-l", type: "number", minVersion: undefined },
	listSubstitutes: { arg: "-subst", type: "boolean", minVersion: "0.19.0" },
	ownerPassword: { arg: "-opw", type: "string", minVersion: undefined },
	printVersionInfo: { arg: "-v", type: "boolean", minVersion: undefined },
	userPassword: { arg: "-upw", type: "string", minVersion: undefined },
};
