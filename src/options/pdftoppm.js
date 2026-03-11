"use strict";

/**
 * @typedef PdfToPpmOptions
 * @property {('no'|'yes')} [antialiasFonts] Enable or disable font anti-aliasing.
 * This defaults to `yes`.
 * @property {('no'|'yes')} [antialiasVectors] Enable or disable vector anti-aliasing.
 * This defaults to `yes`.
 * @property {boolean} [cropBox] Uses the crop box rather than media box when
 * generating the files (PNG/JPEG/TIFF only).
 * @property {number} [cropHeight] Specifies the height of crop area in pixels
 * (image output) or points (vector output).
 * @property {number} [cropSize] Specifies the size of crop square in pixels
 * (image output) or points (vector output).
 * @property {number} [cropWidth] Specifies the width of crop area in pixels
 * (image output) or points (vector output).
 * @property {number} [cropXAxis] Specifies the x-coordinate of the crop area top left
 * corner in pixels (image output) or points (vector output).
 * @property {number} [cropYAxis] Specifies the y-coordinate of the crop area top left
 * corner in pixels (image output) or points (vector output).
 * @property {string} [defaultCmykProfile] If Poppler is compiled with colour management support, this option
 * sets the DefaultCMYK color space to the ICC profile stored in the display profile file passed.
 * @property {string} [defaultGrayProfile] If Poppler is compiled with colour management support, this option
 * sets the DefaultGray color space to the ICC profile stored in the display profile file passed.
 * @property {string} [defaultRgbProfile] If Poppler is compiled with colour management support, this option
 * sets the DefaultRGB color space to the ICC profile stored in the display profile file passed.
 * @property {string} [displayProfile] If Poppler is compiled with colour management support, this option
 * sets the display profile to the ICC profile stored in the display profile file passed.
 * @property {boolean} [evenPagesOnly] Generates only the even numbered pages.
 * @property {number} [firstPageToConvert] Specifies the first page to convert.
 * @property {('no'|'yes')} [freetype] Enable or disable FreeType (a TrueType / Type 1 font rasterizer).
 * This defaults to `yes`.
 * @property {boolean} [forcePageNumber] Force page number even if there is only one page.
 * @property {boolean} [grayscaleFile] Generate grayscale PGM file (instead of a color PPM file).
 * @property {boolean} [hideAnnotations] Hide annotations.
 * @property {boolean} [jpegFile] Generate JPEG file instead a PPM file.
 * @property {number} [lastPageToConvert] Specifies the last page to convert.
 * @property {boolean} [monochromeFile] Generate monochrome PBM file (instead of a color PPM file).
 * @property {boolean} [oddPagesOnly] Generates only the odd numbered pages.
 * @property {string} [ownerPassword] Specify the owner password for the PDF file.
 * Providing this will bypass all security restrictions.
 * @property {boolean} [pngFile] Generate PNG file instead a PPM file.
 * @property {boolean} [printProgress] Print progress info as each page is generated.
 * Three space-separated fields are printed to STDERR: the number of the current page, the number
 * of the last page that will be generated, and the path to the file written to.
 * @property {boolean} [printVersionInfo] Print copyright and version information.
 * @property {boolean} [quiet] Do not print any messages or errors.
 * @property {number} [resolutionXAxis] Specifies the X resolution, in pixels per inch of
 * image files (or rasterized regions in vector output). The default is 150 PPI.
 * @property {number} [resolutionXYAxis] Specifies the X and Y resolution, in pixels per
 * inch of image files (or rasterized regions in vector output). The default is 150 PPI.
 * @property {number} [resolutionYAxis] Specifies the Y resolution, in pixels per inch of
 * image files (or rasterized regions in vector output). The default is 150 PPI.
 * @property {number} [scalePageTo] Scales the long side of each page (width for landscape
 * pages, height for portrait pages) to fit in scale-to pixels. The size of the short side will
 * be determined by the aspect ratio of the page.
 * @property {number} [scalePageToXAxis] Scales each page horizontally to fit in scale-to-x
 * pixels. If scale-to-y is set to -1, the vertical size will determined by the aspect ratio of
 * the page.
 * @property {number} [scalePageToYAxis] Scales each page vertically to fit in scale-to-y
 * pixels. If scale-to-x is set to -1, the horizontal size will determined by the aspect ratio of
 * the page.
 * @property {string} [separator] Specify single character separator between name and page number.
 * @property {boolean} [singleFile] Writes only the first page and does not add digits.
 * @property {('none'|'shape'|'solid')} [thinLineMode] Specifies the thin line mode. This defaults to `none`.
 * @property {('deflate'|'jpeg'|'lzw'|'none'|'packbits')} [tiffCompression] Set TIFF compression.
 * @property {boolean} [tiffFile] Generate TIFF file instead a PPM file.
 * @property {string} [userPassword] Specify the user password for the PDF file.
 */

/** @type {Record<keyof PdfToPpmOptions, import("../index").OptionDetails>} */
module.exports = {
	antialiasFonts: { arg: "-aa", type: "string" },
	antialiasVectors: {
		arg: "-aaVector",
		type: "string",
	},
	cropBox: { arg: "-cropbox", type: "boolean" },
	cropHeight: { arg: "-H", type: "number" },
	cropSize: { arg: "-sz", type: "number" },
	cropWidth: { arg: "-W", type: "number" },
	cropXAxis: { arg: "-x", type: "number" },
	cropYAxis: { arg: "-y", type: "number" },
	defaultCmykProfile: {
		arg: "-defaultcmykprofile",
		type: "string",
		minVersion: "21.01.0",
	},
	defaultGrayProfile: {
		arg: "-defaultgrayprofile",
		type: "string",
		minVersion: "21.01.0",
	},
	defaultRgbProfile: {
		arg: "-defaultrgbprofile",
		type: "string",
		minVersion: "21.01.0",
	},
	displayProfile: {
		arg: "-displayprofile",
		type: "string",
		minVersion: "0.90.0",
	},
	evenPagesOnly: { arg: "-e", type: "boolean" },
	firstPageToConvert: { arg: "-f", type: "number" },
	forcePageNumber: {
		arg: "-forcenum",
		type: "boolean",
		minVersion: "0.75.0",
	},
	freetype: { arg: "-freetype", type: "string" },
	grayscaleFile: { arg: "-gray", type: "boolean" },
	hideAnnotations: {
		arg: "-hide-annotations",
		type: "boolean",
		minVersion: "0.84.0",
	},
	jpegFile: { arg: "-jpeg", type: "boolean" },
	lastPageToConvert: { arg: "-l", type: "number" },
	monochromeFile: { arg: "-mono", type: "boolean" },
	oddPagesOnly: { arg: "-o", type: "boolean" },
	ownerPassword: { arg: "-opw", type: "string" },
	pngFile: { arg: "-png", type: "boolean" },
	printProgress: {
		arg: "-progress",
		type: "boolean",
		minVersion: "21.03.0",
	},
	printVersionInfo: { arg: "-v", type: "boolean" },
	quiet: { arg: "-q", type: "boolean" },
	resolutionXAxis: { arg: "-rx", type: "number" },
	resolutionXYAxis: { arg: "-r", type: "number" },
	resolutionYAxis: { arg: "-ry", type: "number" },
	scalePageTo: { arg: "-scale-to", type: "number" },
	scalePageToXAxis: {
		arg: "-scale-to-x",
		type: "number",
	},
	scalePageToYAxis: {
		arg: "-scale-to-y",
		type: "number",
	},
	separator: {
		arg: "-sep",
		type: "string",
		minVersion: "0.75.0",
	},
	singleFile: { arg: "-singlefile", type: "boolean" },
	thinLineMode: {
		arg: "-thinlinemode",
		type: "string",
	},
	tiffCompression: {
		arg: "-tiffcompression",
		type: "string",
	},
	tiffFile: { arg: "-tiff", type: "boolean" },
	userPassword: { arg: "-upw", type: "string" },
};
