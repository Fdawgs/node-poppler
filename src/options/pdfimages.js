"use strict";

/**
 * @typedef PdfImagesOptions
 * @property {boolean} [allFiles] Write JPEG, JPEG2000, JBIG2, and CCITT images in their native format.
 * CMYK files are written as TIFF files. All other images are written as PNG files.
 * @property {boolean} [ccittFile] Generate CCITT images as CCITT files.
 * @property {number} [firstPageToConvert] Specifies the first page to convert.
 * @property {number} [lastPageToConvert] Specifies the last page to convert.
 * @property {boolean} [jbig2File] Generate JBIG2 images as JBIG2 files.
 * @property {boolean} [jpeg2000File] Generate JPEG2000 images at JP2 files.
 * @property {boolean} [jpegFile] Generate JPEG images as JPEG files.
 * @property {boolean} [list] Instead of writing the images, list the
 * images along with various information for each image.
 * NOTE: Do not specify the outputPrefix with this option.
 * @property {string} [ownerPassword] Owner password (for encrypted files).
 * @property {boolean} [pngFile] Change the default output format to PNG.
 * @property {boolean} [printVersionInfo] Print copyright and version info.
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
	list: { arg: "-list", type: "boolean" },
	ownerPassword: { arg: "-opw", type: "string" },
	pngFile: { arg: "-png", type: "boolean" },
	printVersionInfo: { arg: "-v", type: "boolean" },
	tiffFile: { arg: "-tiff", type: "boolean" },
	userPassword: { arg: "-upw", type: "string" },
};
