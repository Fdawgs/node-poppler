"use strict";

/**
 * @typedef PdfToCairoOptions
 * @property {('best'|'default'|'fast'|'good'|'gray'|'none'|'subpixel')} [antialias] Set the cairo
 * antialias option used for text and drawing in image files (or rasterized regions in vector output).
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
 * @property {boolean} [duplex] Adds the %%IncludeFeature: *Duplex DuplexNoTumble DSC
 * comment to the PostScript file (PS only). This tells the print manager to enable duplexing.
 * @property {boolean} [epsFile] Generate an EPS file. An EPS file contains a single image,
 * so if you use this option with a multi-page PDF file, you must use `options.firstPageToConvert` and
 * `options.lastPageToConvert` to specify a single page.
 * The page size options (originalPageSizes, paperSize, paperWidth, paperHeight) can not be used
 * with this option.
 * @property {boolean} [evenPagesOnly] Generates only the even numbered pages.
 * @property {boolean} [fillPage] Expand PDF pages smaller than the paper to fill the
 * paper (PS,PDF,SVG only). By default, these pages are not scaled.
 * @property {number} [firstPageToConvert] Specifies the first page to convert.
 * @property {boolean} [grayscaleFile] Generate grayscale file (PNG, JPEG, and TIFF only).
 * @property {string} [iccFile] Use the specified ICC file as the output profile
 * (PNG only). The profile will be embedded in the PNG file.
 * @property {boolean} [jpegFile] Generate JPEG file(s).
 * @property {string} [jpegOptions] When used with `options.jpegFile`, this option can
 * be used to control the JPEG compression parameters. It takes a string of the form
 * `"<opt>=<val>[,<opt>=<val>]"`. Currently available options are:
 * - `quality` Selects the JPEG quality value. The value must be an integer between 0 and 100.
 * - `progressive` Select progressive JPEG output. The possible values are "y", "n", indicating
 * progressive (yes) or non-progressive (no), respectively.
 * - `optimize` Sets whether to compute optimal Huffman coding tables for the JPEG output, which
 * will create smaller files but make an extra pass over the data. The value must be "y" or "n",
 * with "y" performing optimization, otherwise the default Huffman tables are used.
 *
 * Example: `"quality=95,optimize=y"`.
 * @property {number} [lastPageToConvert] Specifies the last page to convert.
 * @property {boolean} [monochromeFile] Generate monochrome file (PNG and TIFF only).
 * @property {boolean} [noCenter] By default, PDF pages smaller than the paper
 * (after any scaling) are centered on the paper. This option causes them to be aligned to
 * the lower-left corner of the paper instead (PS,PDF,SVG only).
 * @property {boolean} [noCrop] By default, printing output is cropped to the CropBox
 * specified in the PDF file. This option disables cropping (PS, PDF, SVG only).
 * @property {boolean} [noShrink] Do not scale PDF pages which are larger than the paper
 * (PS,PDF,SVG only). By default, pages larger than the paper are shrunk to fit.
 * @property {boolean} [oddPagesOnly] Generates only the odd numbered pages.
 * @property {boolean} [originalPageSizes] Set the paper size of each page to match
 * the size specified in the PDF file.
 * @property {string} [ownerPassword] Specify the owner password for the PDF file.
 * Providing this will bypass all security restrictions.
 * @property {number} [paperHeight] Set the paper height, in points (PS, PDF, SVG only).
 * @property {('A3'|'A4'|'legal'|'letter'|'match')} [paperSize] Set the paper size to one of `A3`, `A4`,
 * `legal`, or `letter` (PS,PDF,SVG only). This can also be set to `match`, which will set the paper size
 * of each page to match the size specified in the PDF file. If none of the paperSize,
 * paperWidth, or paperHeight options are specified the default is to match the paper size.
 * @property {number} [paperWidth] Set the paper width, in points (PS,PDF,SVG only).
 * @property {boolean} [pdfFile] Generate PDF file.
 * @property {boolean} [pngFile] Generate PNG file(s).
 * @property {boolean} [printVersionInfo] Print copyright and version information.
 * @property {boolean} [printDocStruct] If the input file contains structural information
 * about the document's content, write this information to the output file (PDF only).
 * @property {boolean} [psFile] Generate PS file.
 * @property {boolean} [psLevel2] Generate Level 2 PostScript (PS only).
 * @property {boolean} [psLevel3] Generate Level 3 PostScript (PS only). This enables all
 * Level 2 features plus shading patterns and masked images. This is the default setting.
 * @property {boolean} [quiet] Do not print any messages or errors.
 * @property {number} [resolutionXAxis] Specifies the X resolution, in pixels per inch of
 * image files (or rasterized regions in vector output). The default is 150 PPI.
 * @property {number} [resolutionXYAxis] Specifies the X and Y resolution, in pixels per
 * inch of image files (or rasterized regions in vector output). The default is 150 PPI.
 * @property {number} [resolutionYAxis] Specifies the Y resolution, in pixels per inch of
 * image files (or rasterized regions in vector output). The default is 150 PPI.
 * @property {number} [scalePageTo] Scales the long side of each page (width for landscape
 * pages, height for portrait pages) to fit in scale-to pixels. The size of the short side will
 * be determined by the aspect ratio of the page (PNG/JPEG/TIFF only).
 * @property {number} [scalePageToXAxis] Scales each page horizontally to fit in scale-to-x
 * pixels. If scale-to-y is set to -1, the vertical size will determined by the aspect ratio of
 * the page (PNG/JPEG/TIFF only).
 * @property {number} [scalePageToYAxis] Scales each page vertically to fit in scale-to-y
 * pixels. If scale-to-x is set to -1, the horizontal size will determined by the aspect ratio of
 * the page (PNG/JPEG/TIFF only).
 * @property {boolean} [singleFile] Writes only the first page and does not add digits.
 * Can only be used with `options.jpegFile`, `options.pngFile`, and `options.tiffFile`.
 * @property {boolean} [svgFile] Generate SVG (Scalable Vector Graphics) file.
 * @property {('deflate'|'jpeg'|'lzw'|'none'|'packbits')} [tiffCompression] Set TIFF compression.
 * @property {boolean} [tiffFile] Generate TIFF file(s).
 * @property {boolean} [transparentPageColor] Use a transparent page color
 * instead of white (PNG and TIFF only).
 * @property {string} [userPassword] Specify the user password for the PDF file.
 */

/** @type {Record<keyof PdfToCairoOptions, import("../index").OptionDetails>} */
module.exports = {
	antialias: { arg: "-antialias", type: "string", minVersion: "0.44.0" },
	cropBox: { arg: "-cropbox", type: "boolean", minVersion: "0.17.3" },
	cropHeight: { arg: "-H", type: "number", minVersion: "0.17.3" },
	cropSize: { arg: "-sz", type: "number", minVersion: "0.17.3" },
	cropWidth: { arg: "-W", type: "number", minVersion: "0.17.3" },
	cropXAxis: { arg: "-x", type: "number", minVersion: "0.17.3" },
	cropYAxis: { arg: "-y", type: "number", minVersion: "0.17.3" },
	duplex: { arg: "-duplex", type: "boolean", minVersion: "0.17.3" },
	epsFile: { arg: "-eps", type: "boolean", minVersion: "0.17.3" },
	evenPagesOnly: { arg: "-e", type: "boolean", minVersion: "0.17.3" },
	fillPage: { arg: "-expand", type: "boolean", minVersion: "0.17.3" },
	firstPageToConvert: { arg: "-f", type: "number", minVersion: "0.17.3" },
	grayscaleFile: { arg: "-gray", type: "boolean", minVersion: "0.17.3" },
	iccFile: { arg: "-icc", type: "string", minVersion: "0.17.3" },
	jpegFile: { arg: "-jpeg", type: "boolean", minVersion: "0.17.3" },
	jpegOptions: { arg: "-jpegopt", type: "string", minVersion: "0.58.0" },
	lastPageToConvert: { arg: "-l", type: "number", minVersion: "0.17.3" },
	monochromeFile: { arg: "-mono", type: "boolean", minVersion: "0.17.3" },
	noCenter: { arg: "-nocenter", type: "boolean", minVersion: "0.17.3" },
	noCrop: { arg: "-nocrop", type: "boolean", minVersion: "0.17.3" },
	noShrink: { arg: "-noshrink", type: "boolean", minVersion: "0.17.3" },
	oddPagesOnly: { arg: "-o", type: "boolean", minVersion: "0.17.3" },
	originalPageSizes: {
		arg: "-origpagesizes",
		type: "boolean",
		minVersion: "0.17.3",
	},
	ownerPassword: { arg: "-opw", type: "string", minVersion: "0.17.3" },
	paperHeight: { arg: "-paperh", type: "number", minVersion: "0.17.3" },
	paperSize: { arg: "-paper", type: "string", minVersion: "0.17.3" },
	paperWidth: { arg: "-paperw", type: "number", minVersion: "0.17.3" },
	pdfFile: { arg: "-pdf", type: "boolean", minVersion: "0.17.3" },
	pngFile: { arg: "-png", type: "boolean", minVersion: "0.17.3" },
	printDocStruct: { arg: "-struct", type: "boolean", minVersion: "23.11.0" },
	printVersionInfo: { arg: "-v", type: "boolean", minVersion: "0.17.3" },
	psFile: { arg: "-ps", type: "boolean", minVersion: "0.17.3" },
	psLevel2: { arg: "-level2", type: "boolean", minVersion: "0.17.3" },
	psLevel3: { arg: "-level3", type: "boolean", minVersion: "0.17.3" },
	quiet: { arg: "-q", type: "boolean", minVersion: "0.17.3" },
	resolutionXAxis: { arg: "-rx", type: "number", minVersion: "0.17.3" },
	resolutionXYAxis: { arg: "-r", type: "number", minVersion: "0.17.3" },
	resolutionYAxis: { arg: "-ry", type: "number", minVersion: "0.17.3" },
	scalePageTo: { arg: "-scale-to", type: "number", minVersion: "0.17.3" },
	scalePageToXAxis: {
		arg: "-scale-to-x",
		type: "number",
		minVersion: "0.17.3",
	},
	scalePageToYAxis: {
		arg: "-scale-to-y",
		type: "number",
		minVersion: "0.17.3",
	},
	singleFile: { arg: "-singlefile", type: "boolean", minVersion: "0.17.3" },
	svgFile: { arg: "-svg", type: "boolean", minVersion: "0.17.3" },
	tiffCompression: {
		arg: "-tiffcompression",
		type: "string",
		minVersion: "0.21.2",
	},
	tiffFile: { arg: "-tiff", type: "boolean", minVersion: "0.21.2" },
	transparentPageColor: {
		arg: "-transp",
		type: "boolean",
		minVersion: "0.17.3",
	},
	userPassword: { arg: "-upw", type: "string", minVersion: "0.17.3" },
};
