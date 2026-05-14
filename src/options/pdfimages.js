"use strict";

/**
 * @typedef PdfImagesOptions
 * @property {boolean} [allFiles] Write JPEG, JPEG2000, JBIG2, and CCITT images in their native format.
 * CMYK files are written as TIFF files. All other images are written as PNG files.
 * @property {boolean} [ccittFile] Generate CCITT images as CCITT files.
 * @property {number} [firstPageToConvert] Specifies the first page to convert.
 * @property {number} [lastPageToConvert] Specifies the last page to convert.
 * @property {boolean} [jbig2File] Generate JBIG2 images as JBIG2 files.
 * @property {boolean} [jpeg2000File] Generate JPEG2000 images as JP2 files.
 * @property {boolean} [jpegFile] Generate JPEG images as JPEG files.
 * @property {boolean} [list] Instead of writing the images, list the
 * images along with various information for each image.
 * NOTE: Do not specify the `outputPrefix` with this option.
 * @property {boolean} [outputPageNumbers] Include page numbers in output file names.
 * @property {string} [ownerPassword] Owner password (for encrypted files).
 * @property {boolean} [pngFile] Change the default output format to PNG.
 * @property {boolean} [printFilenames] Print image filenames to stdout.
 * @property {boolean} [printVersionInfo] Print copyright and version info.
 * @property {boolean} [quiet] Do not print any messages or errors.
 * @property {boolean} [tiffFile] Change the default output format to TIFF.
 * @property {string} [userPassword] Specify the user password for the PDF file.
 */

/** @type {Record<keyof PdfImagesOptions, import("../index").OptionDetails>} */
module.exports = {
	allFiles: { arg: "-all", type: "boolean" },
	ccittFile: { arg: "-ccitt", type: "boolean" },
	firstPageToConvert: { arg: "-f", type: "number" },
	lastPageToConvert: { arg: "-l", type: "number" },
	jbig2File: { arg: "-jbig2", type: "boolean" },
	jpeg2000File: { arg: "-jp2", type: "boolean" },
	jpegFile: { arg: "-j", type: "boolean" },
	list: { arg: "-list", type: "boolean", minVersion: "0.19.0" },
	outputPageNumbers: { arg: "-p", type: "boolean", minVersion: "0.15.2" },
	ownerPassword: { arg: "-opw", type: "string" },
	pngFile: { arg: "-png", type: "boolean" },
	printFilenames: {
		arg: "-print-filenames",
		type: "boolean",
		minVersion: "24.03.0",
	},
	printVersionInfo: { arg: "-v", type: "boolean" },
	quiet: { arg: "-q", type: "boolean" },
	tiffFile: { arg: "-tiff", type: "boolean", minVersion: "0.53.0" },
	userPassword: { arg: "-upw", type: "string" },
};
