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
 * @property {boolean} [jpegFile] Generate JPEG file instead of a PPM file.
 * @property {string} [jpegOptions] When used with `options.jpegFile`, this option can
 * be used to control the JPEG compression parameters. It takes a string of the form
 * `"<opt>=<val>[,<opt>=<val>]"`. Currently available options are:
 * - `quality` Selects the JPEG quality value. The value must be an integer between 0 and 100.
 * - `progressive` Select progressive JPEG output. The possible values are "y", "n", indicating
 * progressive (yes) or non-progressive (no), respectively.
 * @property {number} [lastPageToConvert] Specifies the last page to convert.
 * @property {boolean} [monochromeFile] Generate monochrome PBM file (instead of a color PPM file).
 * @property {boolean} [oddPagesOnly] Generates only the odd numbered pages.
 * @property {string} [ownerPassword] Specify the owner password for the PDF file.
 * Providing this will bypass all security restrictions.
 * @property {boolean} [pngFile] Generate PNG file instead of a PPM file.
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
 * @property {boolean} [scaleDimensionBeforeRotation] Swaps horizontal and vertical size for
 * a rotated (landscape) PDF before scaling instead of after.
 * @property {number} [scalePageTo] Scales the long side of each page (width for landscape
 * pages, height for portrait pages) to fit in scale-to pixels. The size of the short side will
 * be determined by the aspect ratio of the page.
 * @property {number} [scalePageToXAxis] Scales each page horizontally to fit in scale-to-x
 * pixels. If scale-to-y is set to -1, the vertical size will be determined by the aspect ratio of
 * the page.
 * @property {number} [scalePageToYAxis] Scales each page vertically to fit in scale-to-y
 * pixels. If scale-to-x is set to -1, the horizontal size will be determined by the aspect ratio of
 * the page.
 * @property {string} [separator] Specify single character separator between name and page number.
 * @property {boolean} [singleFile] Writes only the first page and does not add digits.
 * @property {('none'|'shape'|'solid')} [thinLineMode] Specifies the thin line mode. This defaults to `none`.
 * @property {('deflate'|'jpeg'|'lzw'|'none'|'packbits')} [tiffCompression] Set TIFF compression.
 * @property {boolean} [tiffFile] Generate TIFF file instead of a PPM file.
 * @property {string} [userPassword] Specify the user password for the PDF file.
 */

/** @type {Record<keyof PdfToPpmOptions, import("../index").OptionDetails>} */
module.exports = {
	antialiasFonts: { arg: "-aa", type: "string", minVersion: "0.1.0" },
	antialiasVectors: { arg: "-aaVector", type: "string", minVersion: "0.1.0" },
	cropBox: { arg: "-cropbox", type: "boolean", minVersion: "0.11.0" },
	cropHeight: { arg: "-H", type: "number", minVersion: "0.1.0" },
	cropSize: { arg: "-sz", type: "number", minVersion: "0.1.0" },
	cropWidth: { arg: "-W", type: "number", minVersion: "0.1.0" },
	cropXAxis: { arg: "-x", type: "number", minVersion: "0.1.0" },
	cropYAxis: { arg: "-y", type: "number", minVersion: "0.1.0" },
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
	evenPagesOnly: { arg: "-e", type: "boolean", minVersion: "0.13.3" },
	firstPageToConvert: { arg: "-f", type: "number", minVersion: "0.1.0" },
	forcePageNumber: {
		arg: "-forcenum",
		type: "boolean",
		minVersion: "0.75.0",
	},
	freetype: { arg: "-freetype", type: "string", minVersion: "0.1.0" },
	grayscaleFile: { arg: "-gray", type: "boolean", minVersion: "0.1.0" },
	hideAnnotations: {
		arg: "-hide-annotations",
		type: "boolean",
		minVersion: "0.84.0",
	},
	jpegFile: { arg: "-jpeg", type: "boolean", minVersion: "0.13.0" },
	jpegOptions: { arg: "-jpegopt", type: "string", minVersion: "0.58.0" },
	lastPageToConvert: { arg: "-l", type: "number", minVersion: "0.1.0" },
	monochromeFile: { arg: "-mono", type: "boolean", minVersion: "0.1.0" },
	oddPagesOnly: { arg: "-o", type: "boolean", minVersion: "0.13.3" },
	ownerPassword: { arg: "-opw", type: "string", minVersion: "0.1.0" },
	pngFile: { arg: "-png", type: "boolean", minVersion: "0.11.3" },
	printProgress: { arg: "-progress", type: "boolean", minVersion: "21.03.0" },
	printVersionInfo: { arg: "-v", type: "boolean", minVersion: "0.1.0" },
	quiet: { arg: "-q", type: "boolean", minVersion: "0.1.0" },
	resolutionXAxis: { arg: "-rx", type: "number", minVersion: "0.1.0" },
	resolutionXYAxis: { arg: "-r", type: "number", minVersion: "0.1.0" },
	resolutionYAxis: { arg: "-ry", type: "number", minVersion: "0.1.0" },
	scaleDimensionBeforeRotation: {
		arg: "-scale-dimension-before-rotation",
		type: "boolean",
		minVersion: "0.84.0",
	},
	scalePageTo: { arg: "-scale-to", type: "number", minVersion: "0.1.0" },
	scalePageToXAxis: {
		arg: "-scale-to-x",
		type: "number",
		minVersion: "0.1.0",
	},
	scalePageToYAxis: {
		arg: "-scale-to-y",
		type: "number",
		minVersion: "0.1.0",
	},
	separator: { arg: "-sep", type: "string", minVersion: "0.75.0" },
	singleFile: { arg: "-singlefile", type: "boolean", minVersion: "0.17.0" },
	thinLineMode: {
		arg: "-thinlinemode",
		type: "string",
		minVersion: "0.25.0",
	},
	tiffCompression: {
		arg: "-tiffcompression",
		type: "string",
		minVersion: "0.17.0",
	},
	tiffFile: { arg: "-tiff", type: "boolean", minVersion: "0.17.0" },
	userPassword: { arg: "-upw", type: "string", minVersion: "0.1.0" },
};
