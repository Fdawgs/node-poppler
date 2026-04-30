"use strict";

/**
 * @typedef PdfUniteOptions
 * @property {boolean} [printVersionInfo] Print copyright and version information.
 */

/** @type {Record<keyof PdfUniteOptions, import("../index").OptionDetails>} */
module.exports = {
	printVersionInfo: { arg: "-v", type: "boolean" },
};
