"use strict";

/**
 * @typedef PdfUniteOptions
 * @property {boolean} [printVersionInfo] Print copyright and version information.
 */

/** @type {import("../index").PopplerAcceptedOptions} */
module.exports = {
	printVersionInfo: { arg: "-v", type: "boolean" },
};
