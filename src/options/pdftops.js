"use strict";

/**
 * @typedef PdfToPsOptions
 * @property {('no'|'yes')} [antialias] Enable anti-aliasing on rasterization, accepts `no` or `yes`.
 * @property {boolean} [binary] Write binary data in Level 1 PostScript. By default,
 * pdftops writes hex-encoded data in Level 1 PostScript. Binary data is non-standard in Level 1
 * PostScript but reduces the file size and can be useful when Level 1 PostScript is required
 * only for its restricted use of PostScript operators.
 * @property {string} [defaultCmykProfile] If Poppler is compiled with colour management support, this option
 * sets the DefaultCMYK color space to the ICC profile stored in the display profile file passed.
 * @property {string} [defaultGrayProfile] If Poppler is compiled with colour management support, this option
 * sets the DefaultGray color space to the ICC profile stored in the display profile file passed.
 * @property {string} [defaultRgbProfile] If Poppler is compiled with colour management support, this option
 * sets the DefaultRGB color space to the ICC profile stored in the display profile file passed.
 * @property {boolean} [duplex] Set the Duplex pagedevice entry in the PostScript file.
 * This tells duplex-capable printers to enable duplexing.
 * @property {boolean} [epsFile] Generate an EPS file. An EPS file contains a single image,
 * so if you use this option with a multi-page PDF file, you must use `options.firstPageToConvert` and
 * `options.lastPageToConvert` to specify a single page.
 * The page size options (originalPageSizes, paperSize, paperWidth, paperHeight) can not be used
 * with this option.
 * @property {boolean} [fillPage] Expand PDF pages smaller than the paper to fill the
 * paper. By default, these pages are not scaled.
 * @property {number} [firstPageToConvert] Specifies the first page to convert.
 * @property {number} [form] Generate PostScript form which can be imported by software
 * that understands forms.
 * A form contains a single page, so if you use this option with a multi-page PDF file,
 * you must use `options.firstPageToConvert` and `options.lastPageToConvert` to specify a single page.
 * The `options.level1` option cannot be used with `options.form`.
 * No more than one of the mode options (`options.epsFile`, `options.form`) may be given.
 * @property {number} [lastPageToConvert] Specifies the last page to convert.
 * @property {boolean} [level1] Generate Level 1 PostScript. The resulting PostScript
 * files will be significantly larger (if they contain images), but will print on Level 1 printers.
 * This also converts all images to black and white.
 * @property {boolean} [level1Sep] Generate Level 1 separable PostScript.
 * All colors are converted to CMYK. Images are written with separate stream data for the four components.
 * @property {boolean} [level2] Generate Level 2 PostScript.
 * Level 2 supports color images and image compression. This is the default setting.
 * @property {boolean} [level2Sep] Generate Level 2 separable PostScript. All colors are
 * converted to CMYK. The PostScript separation convention operators are used to handle custom (spot) colors.
 * @property {boolean} [level3] Generate Level 3 PostScript.
 * This enables all Level 2 features plus CID font embedding.
 * @property {boolean} [level3Sep] Generate Level 3 separable PostScript.
 * The separation handling is the same as for `options.level2Sep`.
 * @property {boolean} [noCenter] By default, PDF pages smaller than the paper
 * (after any scaling) are centered on the paper. This option causes them to be aligned to
 * the lower-left corner of the paper instead.
 * @property {boolean} [noCrop] By default, printing output is cropped to the CropBox
 * specified in the PDF file. This option disables cropping.
 * @property {boolean} [noEmbedCIDFonts] By default, any CID PostScript fonts which are
 * embedded in the PDF file are copied into the PostScript file. This option disables that embedding.
 * No attempt is made to substitute for non-embedded CID PostScript fonts.
 * @property {boolean} [noEmbedCIDTrueTypeFonts] By default, any CID TrueType fonts which are
 * embedded in the PDF file are copied into the PostScript file. This option disables that embedding.
 * No attempt is made to substitute for non-embedded CID TrueType fonts.
 * @property {boolean} [noEmbedTrueTypeFonts] By default, any TrueType fonts which are embedded
 * in the PDF file are copied into the PostScript file. This option causes pdfToPs to substitute base fonts instead.
 * Embedded fonts make PostScript files larger, but may be necessary for readable output.
 * Also, some PostScript interpreters do not have TrueType rasterizers.
 * @property {boolean} [noEmbedType1Fonts] By default, any Type 1 fonts which are embedded in the PDF file
 * are copied into the PostScript file. This option causes pdfToPs to substitute base fonts instead.
 * Embedded fonts make PostScript files larger, but may be necessary for readable output.
 * @property {boolean} [noShrink] Do not scale PDF pages which are larger than the paper.
 * By default, pages larger than the paper are shrunk to fit.
 * @property {boolean} [opi] Generate OPI comments for all images and forms which have OPI information.
 * @property {boolean} [optimizecolorspace] By default, bitmap images in the PDF pass through to the
 * output PostScript in their original color space, which produces predictable results.
 * This option converts RGB and CMYK images into Gray images if every pixel of the image has equal components.
 * This can fix problems when doing color separations of PDFs that contain embedded black and
 * white images encoded as RGB.
 * @property {boolean} [originalPageSizes] Set the paper size of each page to match
 * the size specified in the PDF file.
 * @property {boolean} [overprint] Enable overprinting.
 * @property {string} [ownerPassword] Owner password (for encrypted files).
 * @property {number} [paperHeight] Set the paper height, in points.
 * @property {('A3'|'A4'|'legal'|'letter'|'match')} [paperSize] Set the paper size to one of `A3`, `A4`,
 * `legal`, or `letter`. This can also be set to `match`, which will set the paper size
 * of each page to match the size specified in the PDF file. If none of the paperSize,
 * paperWidth, or paperHeight options are specified the default is to match the paper size.
 * @property {number} [paperWidth] Set the paper width, in points.
 * @property {boolean} [passfonts] By default, references to non-embedded 8-bit fonts
 * in the PDF file are substituted with the closest `Helvetica`, `Times-Roman`, or `Courier` font.
 * This option passes references to non-embedded fonts through to the PostScript file.
 * @property {boolean} [preload] Preload images and forms.
 * @property {boolean} [printVersionInfo] Print copyright and version information.
 * @property {('CMYK8'|'MONO8'|'RGB8')} [processColorFormat] Sets the process color format as it is used
 * during rasterization and transparency reduction.
 *
 * The default depends on the other settings: For `options.level1` the default is MONO8; for `options.level1Sep`,
 * `options.level2Sep`, `options.level3Sep`, or `options.overprint` the default is CMYK8; in all other
 * cases RGB8 is the default.
 * If `option.processColorProfile` is set then `options.processColorFormat` is inferred from the specified ICC profile.
 * @property {string} [processColorProfile] Sets the ICC profile that is assumed during
 * rasterization and transparency reduction.
 * @property {boolean} [quiet] Do not print any messages or errors.
 * @property {('always'|'never'|'whenneeded')} [rasterize] By default, pdfToPs rasterizes pages as needed,
 * for example, if they contain transparencies. To force rasterization, set `rasterize` to `always`.
 * Use this to eliminate fonts.
 * To prevent rasterization, set `rasterize` to `never`.
 * This may produce files that display incorrectly.
 * @property {number} [resolutionXYAxis] Specifies the X and Y resolution, in pixels per
 * inch of image files (or rasterized regions in vector output). The default is 300 PPI.
 * @property {string} [userPassword] User password (for encrypted files).
 */

module.exports = {
	antialias: { arg: "-aaRaster", type: "string" },
	binary: { arg: "-binary", type: "boolean" },
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
	duplex: { arg: "-duplex", type: "boolean" },
	epsFile: { arg: "-eps", type: "boolean" },
	fillPage: { arg: "-expand", type: "boolean" },
	firstPageToConvert: { arg: "-f", type: "number" },
	form: { arg: "-form", type: "boolean" },
	lastPageToConvert: { arg: "-l", type: "number" },
	level1: { arg: "-level1", type: "boolean" },
	level1Sep: { arg: "-level1sep", type: "boolean" },
	level2: { arg: "-level2", type: "boolean" },
	level2Sep: { arg: "-level2sep", type: "boolean" },
	level3: { arg: "-level3", type: "boolean" },
	level3Sep: { arg: "-level3sep", type: "boolean" },
	noCenter: { arg: "-nocenter", type: "boolean" },
	noCrop: { arg: "-nocrop", type: "boolean" },
	noEmbedCIDFonts: {
		arg: "-noembcidps",
		type: "boolean",
	},
	noEmbedCIDTrueTypeFonts: {
		arg: "-noembcidtt",
		type: "boolean",
	},
	noEmbedTrueTypeFonts: {
		arg: "-noembtt",
		type: "boolean",
	},
	noEmbedType1Fonts: {
		arg: "-noembt1",
		type: "boolean",
	},
	noShrink: { arg: "-noshrink", type: "boolean" },
	opi: { arg: "-opi", type: "boolean" },
	optimizecolorspace: {
		arg: "-optimizecolorspace",
		type: "boolean",
	},
	originalPageSizes: {
		arg: "-origpagesizes",
		type: "boolean",
	},
	overprint: { arg: "-overprint", type: "boolean" },
	ownerPassword: { arg: "-opw", type: "string" },
	paperHeight: { arg: "-paperh", type: "number" },
	paperSize: { arg: "-paper", type: "string" },
	paperWidth: { arg: "-paperw", type: "number" },
	passfonts: { arg: "-passfonts", type: "boolean" },
	preload: { arg: "-preload", type: "boolean" },
	printVersionInfo: { arg: "-v", type: "boolean" },
	processColorFormat: {
		arg: "-processcolorformat",
		type: "string",
	},
	processColorProfile: {
		arg: "-processcolorprofile",
		type: "string",
	},
	quiet: { arg: "-q", type: "boolean" },
	rasterize: {
		arg: "-rasterize",
		type: "string",
		minVersion: "0.90.0",
	},
	resolutionXYAxis: { arg: "-r", type: "number" },
	userPassword: { arg: "-upw", type: "string" },
};
