## Classes

<dl>
<dt><a href="#Poppler">Poppler</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#parseOptions">parseOptions(options, acceptedOptions, args)</a></dt>
<dd></dd>
</dl>

<a name="Poppler"></a>

## Poppler
**Kind**: global class

* [Poppler](#Poppler)
    * [new Poppler([binPath])](#new_Poppler_new)
    * [.pdfDetach([options], file)](#Poppler+pdfDetach) ⇒ <code>Promise</code>
    * [.pdfSeparate([options], file, outputPattern)](#Poppler+pdfSeparate) ⇒ <code>Promise</code>
    * [.pdfToHtml([options], file)](#Poppler+pdfToHtml) ⇒ <code>Promise</code>
    * [.pdfToCairo(options, file, [outputFile])](#Poppler+pdfToCairo) ⇒ <code>Promise</code>
    * [.pdfToText([options], file, [outputFile])](#Poppler+pdfToText) ⇒ <code>Promise</code>

<a name="new_Poppler_new"></a>

### new Poppler([binPath])

| Param | Type | Description |
| --- | --- | --- |
| [binPath] | <code>String</code> | Path of poppler-utils binaries. Useful for Linux users who have poppler-utils binaries already installed. |

<a name="Poppler+pdfDetach"></a>

### poppler.pdfDetach([options], file) ⇒ <code>Promise</code>
Lists or extracts embedded files (attachments) from a PDF.

**Kind**: instance method of [<code>Poppler</code>](#Poppler)
**Author**: Frazer Smith

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> |  |
| [options.listEmbedded] | <code>Boolean</code> | List all of the embedded files in the PDF file. File names are converted to the text encoding specified by the 'outputEncoding' option. |
| [options.ownerPassword] | <code>String</code> | Owner password (for encrypted files). |
| [options.outputEncoding] | <code>String</code> | Sets the encoding to use for text output. This defaults to "UTF-8". |
| [options.outputPath] | <code>String</code> | Set the file name used when saving an embedded file with the save option enabled, or the directory if the 'saveall' option is used. |
| [options.printVersionInfo] | <code>Boolean</code> | Print copyright and version info. |
| [options.saveAllFiles] | <code>Boolean</code> | Save all of the embedded files. This uses the file names associated with the embedded files (as printed by the 'listEmbedded' option). By default, the files are saved in the current directory; this can be changed with the 'outputPath' option. |
| [options.saveSpecificFile] | <code>Number</code> | Save the specified embedded file. By default, this uses the file name associated with the embedded file (as printed by the 'listEmbedded' option); the file name can be changed with the 'outputPath' option. |
| [options.userPassword] | <code>String</code> | User password (for encrypted files). |
| file | <code>String</code> | Filepath of the PDF file to read. |

<a name="Poppler+pdfSeparate"></a>

### poppler.pdfSeparate([options], file, outputPattern) ⇒ <code>Promise</code>
Extract single pages from a Portable Document Format (PDF),
and writes one PDF file for each page to outputPattern.
This will not work if the file is encrypted.

**Kind**: instance method of [<code>Poppler</code>](#Poppler)
**Author**: Frazer Smith

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> |  |
| [options.firstPageToExtract] | <code>Number</code> | Specifies the first page to extract. This defaults to page 1. |
| [options.lastPageToExtract] | <code>Number</code> | Specifies the last page to extract. This defaults to the last page of the PDF. |
| [options.printVersionInfo] | <code>Boolean</code> | Print copyright and version info. |
| file | <code>String</code> | Filepath of the PDF file to read. |
| outputPattern | <code>String</code> | Should contain %d (or any variant respecting printf format), since %d is replaced by the page number. As an example, 'sample-%d.pdf' will produce 'sample-1.pdf' for a single page document. |

<a name="Poppler+pdfToHtml"></a>

### poppler.pdfToHtml([options], file) ⇒ <code>Promise</code>
Converts PDF to HTML.
Poppler will use the directory and name of the original file
and append '-html' to the end of the filename.

**Kind**: instance method of [<code>Poppler</code>](#Poppler)
**Author**: Frazer Smith

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> |  |
| [options.complexOutput] | <code>Boolean</code> | Generate complex output. |
| [options.exchangePdfLinks] | <code>Boolean</code> | Exchange .pdf links with .html. |
| [options.extractHidden] | <code>Boolean</code> | Force hidden text extraction. |
| [options.firstPageToConvert] | <code>Number</code> | First page to print. |
| [options.fontFullName] | <code>Boolean</code> | Outputs the font name without any substitutions. |
| [options.ignoreImages] | <code>Boolean</code> | Ignore images. |
| [options.imageFormat] | <code>String</code> | Image file format for Splash output (PNG or JPG). If complexOutput is selected, but imageFormat is not specified, PNG will be assumed. |
| [options.lastPageToConvert] | <code>Number</code> | Last page to print. |
| [options.noDrm] | <code>Boolean</code> | Override document DRM settings. |
| [options.noFrames] | <code>Boolean</code> | Generate no frames. Not supported in complex output mode. |
| [options.noMergeParagraph] | <code>Boolean</code> | Do not merge paragraphs. |
| [options.noRoundedCoordinates] | <code>Boolean</code> | Do not round coordinates (with XML output only). |
| [options.outputEncoding] | <code>String</code> | Sets the encoding to use for text output. This defaults to "UTF-8". |
| [options.ownerPassword] | <code>String</code> | Owner password (for encrypted files). |
| [options.printVersionInfo] | <code>Boolean</code> | Print copyright and version info. |
| [options.quiet] | <code>Boolean</code> | Do not print any messages or errors. |
| [options.singlePage] | <code>Boolean</code> | generate single HTML that includes all pages. |
| [options.stdout] | <code>Boolean</code> | Use standard output. |
| [options.userPassword] | <code>String</code> | User password (for encrypted files). |
| [options.wordBreakThreshold] | <code>Number</code> | Adjust the word break threshold percent. Default is 10. Word break occurs when distance between two adjacent characters is greater than this percent of character height. |
| [options.xmlOutput] | <code>Boolean</code> | Output for XML post-processing. |
| [options.zoom] | <code>Number</code> | Zoom the PDF document (default 1.5). |
| file | <code>String</code> | Filepath of the PDF file to read. |

<a name="Poppler+pdfToCairo"></a>

### poppler.pdfToCairo(options, file, [outputFile]) ⇒ <code>Promise</code>
Converts PDF to PNG/JPEG/TIFF/PDF/PS/EPS/SVG.

**Kind**: instance method of [<code>Poppler</code>](#Poppler)
**Author**: Frazer Smith

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| [options.antialias] | <code>String</code> | Set the cairo antialias option used for text and drawing in image files (or rasterized regions in vector output). Options are: default; none; gray; subpixel; fast; good; best |
| [options.cropBox] | <code>Boolean</code> | Uses the crop box rather than media box when generating the files (PNG/JPEG/TIFF only). |
| [options.cropHeight] | <code>Number</code> | Specifies the height of crop area in pixels (image output) or points (vector output). |
| [options.cropSize] | <code>Number</code> | Specifies the size of crop square in pixels (image output) or points (vector output). |
| [options.cropWidth] | <code>Number</code> | Specifies the width of crop area in pixels (image output) or points (vector output). |
| [options.cropXAxis] | <code>Number</code> | Specifies the x-coordinate of the crop area top left corner in pixels (image output) or points (vector output). |
| [options.cropYAxis] | <code>Number</code> | Specifies the y-coordinate of the crop area top left corner in pixels (image output) or points (vector output). |
| [options.duplex] | <code>Boolean</code> | Adds the %%IncludeFeature: *Duplex DuplexNoTumble DSC comment to the PostScript file (PS only). This tells the print manager to enable duplexing. |
| [options.epsFile] | <code>Boolean</code> | Generate an EPS file. An EPS file contains a single image, so if you use this option with a multi-page PDF file, you must use -f and -l to specify a single page. The page size options (originalPageSize, paperSize, paperWidth, paperHeight) can not be used with this option. |
| [options.evenPagesOnly] | <code>Boolean</code> | Generates only the even numbered pages. |
| [options.fillPage] | <code>Boolean</code> | Expand PDF pages smaller than the paper to fill the paper (PS,PDF,SVG only). By default, these pages are not scaled. |
| [options.firstPageToConvert] | <code>Number</code> | Specifies the first page to convert. |
| [options.grayscaleFile] | <code>Boolean</code> | Generate a grayscale file (PNG, JPEG, and TIFF only). |
| [options.iccFile] | <code>Boolean</code> | Use the specified ICC file as the output profile (PNG only). The profile will be embedded in the PNG file. |
| [options.jpegFile] | <code>Boolean</code> | Generates a JPEG file(s). |
| [options.lastPageToConvert] | <code>Number</code> | Specifies the last page to convert. |
| [options.monochromeFile] | <code>Boolean</code> | Generate a monochrome file (PNG and TIFF only). |
| [options.noCenter] | <code>Boolean</code> | By default, PDF pages smaller than the paper (after any scaling) are centered on the paper. This option causes them to be aligned to the lower-left corner of the paper instead (PS,PDF,SVG only). |
| [options.noCrop] | <code>Boolean</code> | By default, printing output is cropped to the CropBox specified in the PDF file. This option disables cropping (PS, PDF, SVG only). |
| [options.noShrink] | <code>Boolean</code> | Don't scale PDF pages which are larger than the paper (PS,PDF,SVG only). By default, pages larger than the paper are shrunk to fit. |
| [options.oddPagesOnly] | <code>Boolean</code> | Generates only the odd numbered pages. |
| [options.originalPageSizes] | <code>Boolean</code> | Set the paper size of each page to match the size specified in the PDF file. |
| [options.ownerPassword] | <code>String</code> | Specify the owner password for the PDF file. Providing this will bypass all security restrictions. |
| [options.paperHeight] | <code>Number</code> | Set the paper height, in points (PS, PDF, SVG only). |
| [options.paperSize] | <code>String</code> | Set the paper size to one of "letter", "legal", "A4", or "A3" (PS,PDF,SVG only). This can also be set to "match", which will set the paper size of each page to match the size specified in the PDF file. If none of the paperSize, paperWidth, or paperHeight options are specified the default is to match the paper size. |
| [options.paperWidth] | <code>Number</code> | Set the paper width, in points (PS,PDF,SVG only). |
| [options.pdfFile] | <code>Boolean</code> | Generates a PDF file. |
| [options.pngFile] | <code>Boolean</code> | Generates a PNG file(s). |
| [options.printVersionInfo] | <code>Boolean</code> | Print copyright and version information. |
| [options.psFile] | <code>Boolean</code> | Generate a PS file. |
| [options.psLevel2] | <code>Boolean</code> | Generate Level 2 PostScript (PS only). |
| [options.psLevel3] | <code>Boolean</code> | Generate Level 3 PostScript (PS only). This enables all Level 2 features plus shading patterns and masked images. This is the default setting. |
| [options.quiet] | <code>Boolean</code> | Don't print any messages or errors. |
| [options.resolutionXAxis] | <code>Number</code> | Specifies the X resolution, in pixels per inch of image files (or rasterized regions in vector output). The default is 150 PPI. |
| [options.resolutionXYAxis] | <code>Number</code> | Specifies the X and Y resolution, in pixels per inch of image files (or rasterized regions in vector output). The default is 150 PPI. |
| [options.resolutionYAxis] | <code>Number</code> | Specifies the Y resolution, in pixels per inch of image files (or rasterized regions in vector output). The default is 150 PPI. |
| [options.scalePageTo] | <code>Number</code> | Scales the long side of each page (width for landscape pages, height for portrait pages) to fit in scale-to pixels. The size of the short side will be determined by the aspect ratio of the page (PNG/JPEG/TIFF only). |
| [options.scalePageToXAxis] | <code>Number</code> | Scales each page horizontally to fit in scale-to-x pixels. If scale-to-y is set to -1, the vertical size will determined by the aspect ratio of the page (PNG/JPEG/TIFF only). |
| [options.scalePageToYAxis] | <code>Number</code> | Scales each page vertically to fit in scale-to-y pixels. If scale-to-x is set to -1, the horizontal size will determined by the aspect ratio of the page (PNG/JPEG/TIFF only). |
| [options.singleFile] | <code>Boolean</code> | Writes only the first page and does not add digits. |
| [options.svgFile] | <code>Boolean</code> | Generate a SVG (Scalable Vector Graphics) file. |
| [options.tiffCompression] | <code>String</code> | Set TIFF compression to one of "none", "packbits", "jpeg", "lzw", or "deflate". |
| [options.tiffFile] | <code>Boolean</code> | Generates a TIFF file(s). |
| [options.transparentPageColor] | <code>Boolean</code> | Use a transparent page color instead of white (PNG and TIFF only). |
| [options.userPassword] | <code>String</code> | Specify the user password for the PDF file. |
| file | <code>String</code> | Filepath of the PDF file to read. |
| [outputFile] | <code>String</code> | Filepath of the file to output the results to. |

<a name="Poppler+pdfToText"></a>

### poppler.pdfToText([options], file, [outputFile]) ⇒ <code>Promise</code>
Converts PDF to TXT.

**Kind**: instance method of [<code>Poppler</code>](#Poppler)
**Author**: Frazer Smith

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> |  |
| [options.boundingBoxXhtml] | <code>Boolean</code> | Generate an XHTML file containing bounding box information for each word in the file. |
| [options.boundingBoxXhtmlLayout] | <code>Boolean</code> | Generate an XHTML file containing bounding box information for each block, line, and word in the file. |
| [options.cropHeight] | <code>Number</code> | Specifies the height of crop area in pixels (image output) or points (vector output). |
| [options.cropWidth] | <code>Number</code> | Specifies the width of crop area in pixels (image output) or points (vector output). |
| [options.cropXAxis] | <code>Number</code> | Specifies the x-coordinate of the crop area top left corner in pixels (image output) or points (vector output). |
| [options.cropYAxis] | <code>Number</code> | Specifies the y-coordinate of the crop area top left corner in pixels (image output) or points (vector output). |
| [options.eolConvention] | <code>String</code> | Sets the end-of-line convention to use for text output: unix | dos | mac. |
| [options.firstPageToConvert] | <code>Number</code> | Specifies the first page to convert. |
| [options.fixedWidthLayout] | <code>Number</code> | Assume fixed-pitch (or tabular) text, with the specified character width (in points). This forces physical layout mode. |
| [options.generateHtmlMetaFile] | <code>Boolean</code> | Generate a simple HTML file, including the meta information. This simply wraps the text in <pre> and </pre> and prepends the meta headers. |
| [options.lastPageToConvert] | <code>Number</code> | Specifies the last page to convert. |
| [options.listEncodingOptions] | <code>Boolean</code> | List the available encodings. |
| [options.maintainLayout] | <code>Boolean</code> | Maintain (as best as possible) the original physical layout of the text. The default is to ´undo' physical layout (columns, hyphenation, etc.) and output the text in reading order. |
| [options.noPageBreaks] | <code>Boolean</code> | Don't insert page breaks (form feed characters) between pages. |
| [options.outputEncoding] | <code>String</code> | Sets the encoding to use for text output. This defaults to "UTF-8". |
| [options.ownerPassword] | <code>String</code> | Owner password (for encrypted files). |
| [options.printVersionInfo] | <code>Boolean</code> | Print copyright and version information. |
| [options.quiet] | <code>Boolean</code> | Don't print any messages or errors. |
| [options.rawLayout] | <code>Boolean</code> | Keep the text in content stream order. This is a hack which often "undoes" column formatting, etc. Use of raw mode is no longer recommended. |
| [options.userPassword] | <code>String</code> | User password (for encrypted files). |
| file | <code>String</code> | Filepath of the PDF file to read. |
| [outputFile] | <code>String</code> | Filepath of the file to output the results to. |

<a name="parseOptions"></a>

## parseOptions(options, acceptedOptions, args)
**Kind**: global function

| Param | Type |
| --- | --- |
| options | <code>Object</code> |
| acceptedOptions | <code>Object</code> |
| args | <code>Array</code> |

