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

/** @type {import("../index").PopplerAcceptedOptions} */
module.exports = {
	antialias: { arg: "-antialias", type: "string" },
	cropBox: { arg: "-cropbox", type: "boolean" },
	cropHeight: { arg: "-H", type: "number" },
	cropSize: { arg: "-sz", type: "number" },
	cropWidth: { arg: "-W", type: "number" },
	cropXAxis: { arg: "-x", type: "number" },
	cropYAxis: { arg: "-y", type: "number" },
	duplex: { arg: "-duplex", type: "boolean" },
	epsFile: { arg: "-eps", type: "boolean" },
	evenPagesOnly: { arg: "-e", type: "boolean" },
	fillPage: { arg: "-expand", type: "boolean" },
	firstPageToConvert: { arg: "-f", type: "number" },
	grayscaleFile: { arg: "-gray", type: "boolean" },
	iccFile: { arg: "-icc", type: "string" },
	jpegFile: { arg: "-jpeg", type: "boolean" },
	jpegOptions: { arg: "-jpegopt", type: "string" },
	lastPageToConvert: { arg: "-l", type: "number" },
	monochromeFile: { arg: "-mono", type: "boolean" },
	noCenter: { arg: "-nocenter", type: "boolean" },
	noCrop: { arg: "-nocrop", type: "boolean" },
	noShrink: { arg: "-noshrink", type: "boolean" },
	oddPagesOnly: { arg: "-o", type: "boolean" },
	originalPageSizes: {
		arg: "-origpagesizes",
		type: "boolean",
	},
	ownerPassword: { arg: "-opw", type: "string" },
	paperHeight: { arg: "-paperh", type: "number" },
	paperSize: { arg: "-paper", type: "string" },
	paperWidth: { arg: "-paperw", type: "number" },
	pdfFile: { arg: "-pdf", type: "boolean" },
	pngFile: { arg: "-png", type: "boolean" },
	printDocStruct: {
		arg: "-struct",
		type: "boolean",
		minVersion: "23.11.0",
	},
	printVersionInfo: { arg: "-v", type: "boolean" },
	psFile: { arg: "-ps", type: "boolean" },
	psLevel2: { arg: "-level2", type: "boolean" },
	psLevel3: { arg: "-level3", type: "boolean" },
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
	singleFile: { arg: "-singlefile", type: "boolean" },
	svgFile: { arg: "-svg", type: "boolean" },
	tiffCompression: {
		arg: "-tiffcompression",
		type: "string",
	},
	tiffFile: { arg: "-tiff", type: "boolean" },
	transparentPageColor: {
		arg: "-transp",
		type: "boolean",
	},
	userPassword: { arg: "-upw", type: "string" },
};
