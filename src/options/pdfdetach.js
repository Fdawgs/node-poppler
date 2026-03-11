"use strict";

/**
 * @typedef PdfDetachOptions
 * @property {boolean} [listEmbedded] List all of the embedded files in the PDF file.
 * File names are converted to the text encoding specified by `options.outputEncoding`.
 * @property {string} [outputEncoding] Sets the encoding to use for text output.
 * This defaults to `UTF-8`.
 * @property {string} [ownerPassword] Owner password (for encrypted files).
 * @property {string} [outputPath] Set the file name used when saving an embedded file with
 * the save option enabled, or the directory if `options.saveall` is used.
 * @property {boolean} [printVersionInfo] Print copyright and version info.
 * @property {boolean} [saveAllFiles] Save all of the embedded files. This uses the file
 * names associated with the embedded files (as printed by `options.listEmbedded`).
 * By default, the files are saved in the current directory; this can be changed
 * with `options.outputPath`.
 * @property {string} [saveFile] Save the specified embedded file.
 * By default, this uses the file name associated with the embedded file (as printed by
 * `options.listEmbedded`); the file name can be changed with `options.outputPath`.
 * @property {number} [saveSpecificFile] Save the specified embedded file.
 * By default, this uses the file name associated with the embedded file (as printed by
 * `options.listEmbedded`); the file name can be changed with `options.outputPath`.
 * @property {string} [userPassword] User password (for encrypted files).
 */

/** @type {Record<keyof PdfDetachOptions, import("../index").OptionDetails>} */
module.exports = {
	listEmbedded: { arg: "-list", type: "boolean" },
	outputEncoding: { arg: "-enc", type: "string" },
	outputPath: { arg: "-o", type: "string" },
	ownerPassword: { arg: "-opw", type: "string" },
	printVersionInfo: { arg: "-v", type: "boolean" },
	saveAllFiles: { arg: "-saveall", type: "boolean" },
	saveFile: {
		arg: "-savefile",
		type: "string",
		minVersion: "0.86.0",
	},
	saveSpecificFile: { arg: "-save", type: "number" },
	userPassword: { arg: "-upw", type: "string" },
};
