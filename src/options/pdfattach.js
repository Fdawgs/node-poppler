"use strict";

/**
 * @typedef PdfAttachOptions
 * @property {boolean} [printVersionInfo] Print copyright and version info.
 * @property {boolean} [replace] Replace embedded file with same name (if it exists).
 */

/** @type {Record<keyof PdfAttachOptions, import("../index").OptionDetails>} */
module.exports = {
	printVersionInfo: { arg: "-v", type: "boolean" },
	replace: { arg: "-replace", type: "boolean" },
};
