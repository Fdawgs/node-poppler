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

-   [Poppler](#Poppler)
    -   [new Poppler([binPath])](#new_Poppler_new)
    -   [.pdfAttach([options], file, fileToAttach, outputFile)](#Poppler+pdfAttach) ⇒ <code>Promise</code>
    -   [.pdfDetach([options], file)](#Poppler+pdfDetach) ⇒ <code>Promise</code>
    -   [.pdfFonts([options], file)](#Poppler+pdfFonts) ⇒ <code>Promise</code>
    -   [.pdfImages([options], file, outputPath)](#Poppler+pdfImages)
    -   [.pdfInfo([options], file)](#Poppler+pdfInfo) ⇒ <code>Promise</code>
    -   [.pdfSeparate([options], file, outputPattern)](#Poppler+pdfSeparate) ⇒ <code>Promise</code>
    -   [.pdfToCairo(options, file, [outputFile])](#Poppler+pdfToCairo) ⇒ <code>Promise</code>
    -   [.pdfToHtml([options], file)](#Poppler+pdfToHtml) ⇒ <code>Promise</code>
    -   [.pdfToPpm(options, file, outputPath)](#Poppler+pdfToPpm) ⇒ <code>Promise</code>
    -   [.pdfToPs([options], file, outputFile)](#Poppler+pdfToPs) ⇒ <code>Promise</code>
    -   [.pdfToText([options], file, [outputFile])](#Poppler+pdfToText) ⇒ <code>Promise</code>
    -   [.pdfUnite([options], files, [outputFile])](#Poppler+pdfUnite) ⇒ <code>Promise</code>

<a name="new_Poppler_new"></a>

### new Poppler([binPath])

| Param     | Type                | Description                                                                                               |
| --------- | ------------------- | --------------------------------------------------------------------------------------------------------- |
| [binPath] | <code>String</code> | Path of poppler-utils binaries. Useful for Linux users who have poppler-utils binaries already installed. |

<a name="Poppler+pdfAttach"></a>

### poppler.pdfAttach([options], file, fileToAttach, outputFile) ⇒ <code>Promise</code>

Embeds files (attachments) into a PDF file.

**Kind**: instance method of [<code>Poppler</code>](#Poppler)  
**Author**: Frazer Smith

| Param                      | Type                 | Description                                                  |
| -------------------------- | -------------------- | ------------------------------------------------------------ |
| [options]                  | <code>Object</code>  |                                                              |
| [options.printVersionInfo] | <code>Boolean</code> | Print copyright and version info.                            |
| [options.replace]          | <code>Boolean</code> | Replace embedded file with same name (if it exists).         |
| file                       | <code>String</code>  | Filepath of the PDF file to read.                            |
| fileToAttach               | <code>String</code>  | Filepath of the attachment to be embedded into the PDF file. |
| outputFile                 | <code>String</code>  | Filepath of the file to output the results to.               |

<a name="Poppler+pdfDetach"></a>

### poppler.pdfDetach([options], file) ⇒ <code>Promise</code>

Lists or extracts embedded files (attachments) from a PDF file.

**Kind**: instance method of [<code>Poppler</code>](#Poppler)  
**Author**: Frazer Smith

| Param                      | Type                 | Description                                                                                                                                                                                                                                        |
| -------------------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [options]                  | <code>Object</code>  |                                                                                                                                                                                                                                                    |
| [options.listEmbedded]     | <code>Boolean</code> | List all of the embedded files in the PDF file. File names are converted to the text encoding specified by the 'outputEncoding' option.                                                                                                            |
| [options.ownerPassword]    | <code>String</code>  | Owner password (for encrypted files).                                                                                                                                                                                                              |
| [options.outputEncoding]   | <code>String</code>  | Sets the encoding to use for text output. This defaults to "UTF-8".                                                                                                                                                                                |
| [options.outputPath]       | <code>String</code>  | Set the file name used when saving an embedded file with the save option enabled, or the directory if the 'saveall' option is used.                                                                                                                |
| [options.printVersionInfo] | <code>Boolean</code> | Print copyright and version info.                                                                                                                                                                                                                  |
| [options.saveAllFiles]     | <code>Boolean</code> | Save all of the embedded files. This uses the file names associated with the embedded files (as printed by the 'listEmbedded' option). By default, the files are saved in the current directory; this can be changed with the 'outputPath' option. |
| [options.saveSpecificFile] | <code>Number</code>  | Save the specified embedded file. By default, this uses the file name associated with the embedded file (as printed by the 'listEmbedded' option); the file name can be changed with the 'outputPath' option.                                      |
| [options.userPassword]     | <code>String</code>  | User password (for encrypted files).                                                                                                                                                                                                               |
| file                       | <code>String</code>  | Filepath of the PDF file to read.                                                                                                                                                                                                                  |

<a name="Poppler+pdfFonts"></a>

### poppler.pdfFonts([options], file) ⇒ <code>Promise</code>

Lists the fonts used in a PDF file along with various information for each font.

**Kind**: instance method of [<code>Poppler</code>](#Poppler)  
**Author**: Frazer Smith

| Param                        | Type                 | Description                                                             |
| ---------------------------- | -------------------- | ----------------------------------------------------------------------- |
| [options]                    | <code>Object</code>  |                                                                         |
| [options.firstPageToExamine] | <code>Number</code>  | Specifies the first page to examine.                                    |
| [options.lastPageToExamine]  | <code>Number</code>  | Specifies the last page to examine.                                     |
| [options.listSubstitutes]    | <code>Boolean</code> | List the substitute fonts that poppler will use for non-embedded fonts. |
| [options.ownerPassword]      | <code>String</code>  | Owner password (for encrypted files).                                   |
| [options.printVersionInfo]   | <code>Boolean</code> | Print copyright and version info.                                       |
| [options.userPassword]       | <code>String</code>  | User password (for encrypted files).                                    |
| file                         | <code>String</code>  | Filepath of the PDF file to read.                                       |

<a name="Poppler+pdfImages"></a>

### poppler.pdfImages([options], file, outputPath)

Saves images from a PDF file as PPM, PBM, PNG, TIFF, JPEG, JPEG2000, or JBIG2 files.

**Kind**: instance method of [<code>Poppler</code>](#Poppler)  
**Author**: Frazer Smith

| Param                        | Type                 | Description                                                                                                                                            |
| ---------------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [options]                    | <code>Object</code>  |                                                                                                                                                        |
| [options.allFiles]           | <code>Boolean</code> | Write JPEG, JPEG2000, JBIG2, and CCITT images in their native format. CMYK files are written as TIFF files. All other images are written as PNG files. |
| [options.ccittFile]          | <code>Boolean</code> | Generate CCITT images as CCITT files.                                                                                                                  |
| [options.firstPageToConvert] | <code>Number</code>  | Specifies the first page to convert.                                                                                                                   |
| [options.lastPageToConvert]  | <code>Number</code>  | Specifies the last page to convert.                                                                                                                    |
| [options.list]               | <code>Boolean</code> | Instead of writing the images, list the images along with various information for each image. NOTE: Do not specify the outputPath with this option.    |
| [options.jbig2File]          | <code>Boolean</code> | Generate JBIG2 images as JBIG2 files.                                                                                                                  |
| [options.jpeg2000File]       | <code>Boolean</code> | Generate JPEG2000 images at JP2 files.                                                                                                                 |
| [options.jpegFile]           | <code>Boolean</code> | Generate JPEG images as JPEG files.                                                                                                                    |
| [options.ownerPassword]      | <code>String</code>  | Owner password (for encrypted files).                                                                                                                  |
| [options.pngFile]            | <code>Boolean</code> | Change the default output format to PNG.                                                                                                               |
| [options.printVersionInfo]   | <code>Boolean</code> | Print copyright and version info.                                                                                                                      |
| [options.tiffFile]           | <code>Boolean</code> | Change the default output format to TIFF.                                                                                                              |
| [options.userPassword]       | <code>String</code>  | Specify the user password for the PDF file.                                                                                                            |
| file                         | <code>String</code>  | Filepath of the PDF file to read.                                                                                                                      |
| outputPath                   | <code>String</code>  | Filepath to output the results to.                                                                                                                     |

<a name="Poppler+pdfInfo"></a>

### poppler.pdfInfo([options], file) ⇒ <code>Promise</code>

Prints the contents of the ´Info' dictionary from a PDF file.

**Kind**: instance method of [<code>Poppler</code>](#Poppler)  
**Author**: Frazer Smith

| Param                         | Type                 | Description                                                                                                                                                                          |
| ----------------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [options]                     | <code>Object</code>  |                                                                                                                                                                                      |
| [options.firstPageToConvert]  | <code>Number</code>  | First page to print.                                                                                                                                                                 |
| [options.lastPageToConvert]   | <code>Number</code>  | Last page to print.                                                                                                                                                                  |
| [options.listEncodingOptions] | <code>Boolean</code> | List the available encodings.                                                                                                                                                        |
| [options.outputEncoding]      | <code>String</code>  | Sets the encoding to use for text output. This defaults to "UTF-8".                                                                                                                  |
| [options.ownerPassword]       | <code>String</code>  | Owner password (for encrypted files).                                                                                                                                                |
| [options.printBoundingBoxes]  | <code>Boolean</code> | Prints the page box bounding boxes: MediaBox, CropBox, BleedBox, TrimBox, and ArtBox.                                                                                                |
| [options.printDocStruct]      | <code>Boolean</code> | Prints the logical document structure of a Tagged-PDF file.                                                                                                                          |
| [options.printDocStructText]  | <code>Boolean</code> | Print the textual content along with the document structure of a Tagged-PDF file. Note that extracting text this way might be slow for big PDF files.                                |
| [options.printIsoDates]       | <code>Boolean</code> | Prints dates in ISO-8601 format (including the time zone).                                                                                                                           |
| [options.printJS]             | <code>Boolean</code> | Prints all JavaScript in the PDF file.                                                                                                                                               |
| [options.printMetadata]       | <code>Boolean</code> | Prints document-level metadata. (This is the "Metadata" stream from the PDF file's Catalog object).                                                                                  |
| [options.printNamedDests]     | <code>Boolean</code> | Print a list of all named destinations. If a page range is specified using the 'firstPageToConvert' and 'lastPageToConvert' options, only destinations in the page range are listed. |
| [options.printRawDates]       | <code>Boolean</code> | Prints the raw (undecoded) date strings, directly from the PDF file.                                                                                                                 |
| [options.printVersionInfo]    | <code>Boolean</code> | Print copyright and version info.                                                                                                                                                    |
| [options.userPassword]        | <code>String</code>  | User password (for encrypted files).                                                                                                                                                 |
| file                          | <code>String</code>  | Filepath of the PDF file to read.                                                                                                                                                    |

<a name="Poppler+pdfSeparate"></a>

### poppler.pdfSeparate([options], file, outputPattern) ⇒ <code>Promise</code>

Extract single pages from a PDF file,
and writes one PDF file for each page to outputPattern.
This will not work if the file is encrypted.

**Kind**: instance method of [<code>Poppler</code>](#Poppler)  
**Author**: Frazer Smith

| Param                        | Type                 | Description                                                                                                                                                                                  |
| ---------------------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [options]                    | <code>Object</code>  |                                                                                                                                                                                              |
| [options.firstPageToExtract] | <code>Number</code>  | Specifies the first page to extract. This defaults to page 1.                                                                                                                                |
| [options.lastPageToExtract]  | <code>Number</code>  | Specifies the last page to extract. This defaults to the last page of the PDF file.                                                                                                          |
| [options.printVersionInfo]   | <code>Boolean</code> | Print copyright and version info.                                                                                                                                                            |
| file                         | <code>String</code>  | Filepath of the PDF file to read.                                                                                                                                                            |
| outputPattern                | <code>String</code>  | Should contain %d (or any variant respecting printf format), since %d is replaced by the page number. As an example, 'sample-%d.pdf' will produce 'sample-1.pdf' for a single page document. |

<a name="Poppler+pdfToCairo"></a>

### poppler.pdfToCairo(options, file, [outputFile]) ⇒ <code>Promise</code>

Converts PDF to PNG/JPEG/TIFF/PDF/PS/EPS/SVG.

**Kind**: instance method of [<code>Poppler</code>](#Poppler)  
**Author**: Frazer Smith

| Param                          | Type                 | Description                                                                                                                                                                                                                                                                                                                  |
| ------------------------------ | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| options                        | <code>Object</code>  |                                                                                                                                                                                                                                                                                                                              |
| [options.antialias]            | <code>String</code>  | Set the cairo antialias option used for text and drawing in image files (or rasterized regions in vector output). Options are: default; none; gray; subpixel; fast; good; best.                                                                                                                                              |
| [options.cropBox]              | <code>Boolean</code> | Uses the crop box rather than media box when generating the files (PNG/JPEG/TIFF only).                                                                                                                                                                                                                                      |
| [options.cropHeight]           | <code>Number</code>  | Specifies the height of crop area in pixels (image output) or points (vector output).                                                                                                                                                                                                                                        |
| [options.cropSize]             | <code>Number</code>  | Specifies the size of crop square in pixels (image output) or points (vector output).                                                                                                                                                                                                                                        |
| [options.cropWidth]            | <code>Number</code>  | Specifies the width of crop area in pixels (image output) or points (vector output).                                                                                                                                                                                                                                         |
| [options.cropXAxis]            | <code>Number</code>  | Specifies the x-coordinate of the crop area top left corner in pixels (image output) or points (vector output).                                                                                                                                                                                                              |
| [options.cropYAxis]            | <code>Number</code>  | Specifies the y-coordinate of the crop area top left corner in pixels (image output) or points (vector output).                                                                                                                                                                                                              |
| [options.duplex]               | <code>Boolean</code> | Adds the %%IncludeFeature: \*Duplex DuplexNoTumble DSC comment to the PostScript file (PS only). This tells the print manager to enable duplexing.                                                                                                                                                                           |
| [options.epsFile]              | <code>Boolean</code> | Generate an EPS file. An EPS file contains a single image, so if you use this option with a multi-page PDF file, you must use 'firstPageToConvert' and 'lastPageToConvert' to specify a single page. The page size options (originalPageSizes, paperSize, paperWidth, paperHeight) can not be used with this option.         |
| [options.evenPagesOnly]        | <code>Boolean</code> | Generates only the even numbered pages.                                                                                                                                                                                                                                                                                      |
| [options.fillPage]             | <code>Boolean</code> | Expand PDF pages smaller than the paper to fill the paper (PS,PDF,SVG only). By default, these pages are not scaled.                                                                                                                                                                                                         |
| [options.firstPageToConvert]   | <code>Number</code>  | Specifies the first page to convert.                                                                                                                                                                                                                                                                                         |
| [options.grayscaleFile]        | <code>Boolean</code> | Generate grayscale file (PNG, JPEG, and TIFF only).                                                                                                                                                                                                                                                                          |
| [options.iccFile]              | <code>Boolean</code> | Use the specified ICC file as the output profile (PNG only). The profile will be embedded in the PNG file.                                                                                                                                                                                                                   |
| [options.jpegFile]             | <code>Boolean</code> | Generate JPEG file(s).                                                                                                                                                                                                                                                                                                       |
| [options.lastPageToConvert]    | <code>Number</code>  | Specifies the last page to convert.                                                                                                                                                                                                                                                                                          |
| [options.monochromeFile]       | <code>Boolean</code> | Generate monochrome file (PNG and TIFF only).                                                                                                                                                                                                                                                                                |
| [options.noCenter]             | <code>Boolean</code> | By default, PDF pages smaller than the paper (after any scaling) are centered on the paper. This option causes them to be aligned to the lower-left corner of the paper instead (PS,PDF,SVG only).                                                                                                                           |
| [options.noCrop]               | <code>Boolean</code> | By default, printing output is cropped to the CropBox specified in the PDF file. This option disables cropping (PS, PDF, SVG only).                                                                                                                                                                                          |
| [options.noShrink]             | <code>Boolean</code> | Don't scale PDF pages which are larger than the paper (PS,PDF,SVG only). By default, pages larger than the paper are shrunk to fit.                                                                                                                                                                                          |
| [options.oddPagesOnly]         | <code>Boolean</code> | Generates only the odd numbered pages.                                                                                                                                                                                                                                                                                       |
| [options.originalPageSizes]    | <code>Boolean</code> | Set the paper size of each page to match the size specified in the PDF file.                                                                                                                                                                                                                                                 |
| [options.ownerPassword]        | <code>String</code>  | Specify the owner password for the PDF file. Providing this will bypass all security restrictions.                                                                                                                                                                                                                           |
| [options.paperHeight]          | <code>Number</code>  | Set the paper height, in points (PS, PDF, SVG only).                                                                                                                                                                                                                                                                         |
| [options.paperSize]            | <code>String</code>  | Set the paper size to one of "letter", "legal", "A4", or "A3" (PS,PDF,SVG only). This can also be set to "match", which will set the paper size of each page to match the size specified in the PDF file. If none of the paperSize, paperWidth, or paperHeight options are specified the default is to match the paper size. |
| [options.paperWidth]           | <code>Number</code>  | Set the paper width, in points (PS,PDF,SVG only).                                                                                                                                                                                                                                                                            |
| [options.pdfFile]              | <code>Boolean</code> | Generate PDF file.                                                                                                                                                                                                                                                                                                           |
| [options.pngFile]              | <code>Boolean</code> | Generate PNG file(s).                                                                                                                                                                                                                                                                                                        |
| [options.printVersionInfo]     | <code>Boolean</code> | Print copyright and version information.                                                                                                                                                                                                                                                                                     |
| [options.psFile]               | <code>Boolean</code> | Generate PS file.                                                                                                                                                                                                                                                                                                            |
| [options.psLevel2]             | <code>Boolean</code> | Generate Level 2 PostScript (PS only).                                                                                                                                                                                                                                                                                       |
| [options.psLevel3]             | <code>Boolean</code> | Generate Level 3 PostScript (PS only). This enables all Level 2 features plus shading patterns and masked images. This is the default setting.                                                                                                                                                                               |
| [options.quiet]                | <code>Boolean</code> | Don't print any messages or errors.                                                                                                                                                                                                                                                                                          |
| [options.resolutionXAxis]      | <code>Number</code>  | Specifies the X resolution, in pixels per inch of image files (or rasterized regions in vector output). The default is 150 PPI.                                                                                                                                                                                              |
| [options.resolutionXYAxis]     | <code>Number</code>  | Specifies the X and Y resolution, in pixels per inch of image files (or rasterized regions in vector output). The default is 150 PPI.                                                                                                                                                                                        |
| [options.resolutionYAxis]      | <code>Number</code>  | Specifies the Y resolution, in pixels per inch of image files (or rasterized regions in vector output). The default is 150 PPI.                                                                                                                                                                                              |
| [options.scalePageTo]          | <code>Number</code>  | Scales the long side of each page (width for landscape pages, height for portrait pages) to fit in scale-to pixels. The size of the short side will be determined by the aspect ratio of the page (PNG/JPEG/TIFF only).                                                                                                      |
| [options.scalePageToXAxis]     | <code>Number</code>  | Scales each page horizontally to fit in scale-to-x pixels. If scale-to-y is set to -1, the vertical size will determined by the aspect ratio of the page (PNG/JPEG/TIFF only).                                                                                                                                               |
| [options.scalePageToYAxis]     | <code>Number</code>  | Scales each page vertically to fit in scale-to-y pixels. If scale-to-x is set to -1, the horizontal size will determined by the aspect ratio of the page (PNG/JPEG/TIFF only).                                                                                                                                               |
| [options.singleFile]           | <code>Boolean</code> | Writes only the first page and does not add digits.                                                                                                                                                                                                                                                                          |
| [options.svgFile]              | <code>Boolean</code> | Generate SVG (Scalable Vector Graphics) file.                                                                                                                                                                                                                                                                                |
| [options.tiffCompression]      | <code>String</code>  | Set TIFF compression to one of "none", "packbits", "jpeg", "lzw", or "deflate".                                                                                                                                                                                                                                              |
| [options.tiffFile]             | <code>Boolean</code> | Generate TIFF file(s).                                                                                                                                                                                                                                                                                                       |
| [options.transparentPageColor] | <code>Boolean</code> | Use a transparent page color instead of white (PNG and TIFF only).                                                                                                                                                                                                                                                           |
| [options.userPassword]         | <code>String</code>  | Specify the user password for the PDF file.                                                                                                                                                                                                                                                                                  |
| file                           | <code>String</code>  | Filepath of the PDF file to read.                                                                                                                                                                                                                                                                                            |
| [outputFile]                   | <code>String</code>  | Filepath of the file to output the results to.                                                                                                                                                                                                                                                                               |

<a name="Poppler+pdfToHtml"></a>

### poppler.pdfToHtml([options], file) ⇒ <code>Promise</code>

Converts PDF file to HTML.
Poppler will use the directory and name of the original file
and append '-html' to the end of the filename.

**Kind**: instance method of [<code>Poppler</code>](#Poppler)  
**Author**: Frazer Smith

| Param                          | Type                 | Description                                                                                                                                                               |
| ------------------------------ | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [options]                      | <code>Object</code>  |                                                                                                                                                                           |
| [options.complexOutput]        | <code>Boolean</code> | Generate complex output.                                                                                                                                                  |
| [options.exchangePdfLinks]     | <code>Boolean</code> | Exchange .pdf links with .html.                                                                                                                                           |
| [options.extractHidden]        | <code>Boolean</code> | Force hidden text extraction.                                                                                                                                             |
| [options.firstPageToConvert]   | <code>Number</code>  | First page to print.                                                                                                                                                      |
| [options.fontFullName]         | <code>Boolean</code> | Outputs the font name without any substitutions.                                                                                                                          |
| [options.ignoreImages]         | <code>Boolean</code> | Ignore images.                                                                                                                                                            |
| [options.imageFormat]          | <code>String</code>  | Image file format for Splash output (PNG or JPG). If complexOutput is selected, but imageFormat is not specified, PNG will be assumed.                                    |
| [options.lastPageToConvert]    | <code>Number</code>  | Last page to print.                                                                                                                                                       |
| [options.noDrm]                | <code>Boolean</code> | Override document DRM settings.                                                                                                                                           |
| [options.noFrames]             | <code>Boolean</code> | Generate no frames. Not supported in complex output mode.                                                                                                                 |
| [options.noMergeParagraph]     | <code>Boolean</code> | Do not merge paragraphs.                                                                                                                                                  |
| [options.noRoundedCoordinates] | <code>Boolean</code> | Do not round coordinates (with XML output only).                                                                                                                          |
| [options.outputEncoding]       | <code>String</code>  | Sets the encoding to use for text output. This defaults to "UTF-8".                                                                                                       |
| [options.ownerPassword]        | <code>String</code>  | Owner password (for encrypted files).                                                                                                                                     |
| [options.printVersionInfo]     | <code>Boolean</code> | Print copyright and version info.                                                                                                                                         |
| [options.quiet]                | <code>Boolean</code> | Do not print any messages or errors.                                                                                                                                      |
| [options.singlePage]           | <code>Boolean</code> | generate single HTML that includes all pages.                                                                                                                             |
| [options.stdout]               | <code>Boolean</code> | Use standard output.                                                                                                                                                      |
| [options.userPassword]         | <code>String</code>  | User password (for encrypted files).                                                                                                                                      |
| [options.wordBreakThreshold]   | <code>Number</code>  | Adjust the word break threshold percent. Default is 10. Word break occurs when distance between two adjacent characters is greater than this percent of character height. |
| [options.xmlOutput]            | <code>Boolean</code> | Output for XML post-processing.                                                                                                                                           |
| [options.zoom]                 | <code>Number</code>  | Zoom the PDF document (default 1.5).                                                                                                                                      |
| file                           | <code>String</code>  | Filepath of the PDF file to read.                                                                                                                                         |

<a name="Poppler+pdfToPpm"></a>

### poppler.pdfToPpm(options, file, outputPath) ⇒ <code>Promise</code>

Converts PDF to to colour image files in Portable Pixmap (PPM) format,
grayscale image files in Portable Graymap (PGM) format, or monochrome image files
in Portable Bitmap (PBM) format.

**Kind**: instance method of [<code>Poppler</code>](#Poppler)  
**Author**: Frazer Smith

| Param                        | Type                 | Description                                                                                                                                                                                        |
| ---------------------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| options                      | <code>Object</code>  |                                                                                                                                                                                                    |
| [options.antialiasFonts]     | <code>String</code>  | Enable or disable font anti-aliasing. This defaults to "yes".                                                                                                                                      |
| [options.antialiasVectors]   | <code>String</code>  | Enable or disable vector anti-aliasing. This defaults to "yes".                                                                                                                                    |
| [options.cropBox]            | <code>Boolean</code> | Uses the crop box rather than media box when generating the files (PNG/JPEG/TIFF only).                                                                                                            |
| [options.cropHeight]         | <code>Number</code>  | Specifies the height of crop area in pixels (image output) or points (vector output).                                                                                                              |
| [options.cropSize]           | <code>Number</code>  | Specifies the size of crop square in pixels (image output) or points (vector output).                                                                                                              |
| [options.cropWidth]          | <code>Number</code>  | Specifies the width of crop area in pixels (image output) or points (vector output).                                                                                                               |
| [options.cropXAxis]          | <code>Number</code>  | Specifies the x-coordinate of the crop area top left corner in pixels (image output) or points (vector output).                                                                                    |
| [options.cropYAxis]          | <code>Number</code>  | Specifies the y-coordinate of the crop area top left corner in pixels (image output) or points (vector output).                                                                                    |
| [options.evenPagesOnly]      | <code>Boolean</code> | Generates only the even numbered pages.                                                                                                                                                            |
| [options.firstPageToConvert] | <code>Number</code>  | Specifies the first page to convert.                                                                                                                                                               |
| [options.freetype]           | <code>String</code>  | Enable or disable FreeType (a TrueType / Type 1 font rasterizer). This defaults to "yes".                                                                                                          |
| [options.grayscaleFile]      | <code>Boolean</code> | Generate grayscale PGM file (instead of a color PPM file).                                                                                                                                         |
| [options.jpegFile]           | <code>Boolean</code> | Generate JPEG file instead a PPM file.                                                                                                                                                             |
| [options.lastPageToConvert]  | <code>Number</code>  | Specifies the last page to convert.                                                                                                                                                                |
| [options.monochromeFile]     | <code>Boolean</code> | Generate monochrome PBM file (instead of a color PPM file).                                                                                                                                        |
| [options.oddPagesOnly]       | <code>Boolean</code> | Generates only the odd numbered pages.                                                                                                                                                             |
| [options.ownerPassword]      | <code>String</code>  | Specify the owner password for the PDF file. Providing this will bypass all security restrictions.                                                                                                 |
| [options.pngFile]            | <code>Boolean</code> | Generate PNG file instead a PPM file.                                                                                                                                                              |
| [options.printVersionInfo]   | <code>Boolean</code> | Print copyright and version information.                                                                                                                                                           |
| [options.quiet]              | <code>Boolean</code> | Don't print any messages or errors.                                                                                                                                                                |
| [options.resolutionXAxis]    | <code>Number</code>  | Specifies the X resolution, in pixels per inch of image files (or rasterized regions in vector output). The default is 150 PPI.                                                                    |
| [options.resolutionXYAxis]   | <code>Number</code>  | Specifies the X and Y resolution, in pixels per inch of image files (or rasterized regions in vector output). The default is 150 PPI.                                                              |
| [options.resolutionYAxis]    | <code>Number</code>  | Specifies the Y resolution, in pixels per inch of image files (or rasterized regions in vector output). The default is 150 PPI.                                                                    |
| [options.scalePageTo]        | <code>Number</code>  | Scales the long side of each page (width for landscape pages, height for portrait pages) to fit in scale-to pixels. The size of the short side will be determined by the aspect ratio of the page. |
| [options.scalePageToXAxis]   | <code>Number</code>  | Scales each page horizontally to fit in scale-to-x pixels. If scale-to-y is set to -1, the vertical size will determined by the aspect ratio of the page.                                          |
| [options.scalePageToYAxis]   | <code>Number</code>  | Scales each page vertically to fit in scale-to-y pixels. If scale-to-x is set to -1, the horizontal size will determined by the aspect ratio of the page.                                          |
| [options.singleFile]         | <code>Boolean</code> | Writes only the first page and does not add digits.                                                                                                                                                |
| [options.thinLineMode]       | <code>String</code>  | Specifies the thin line mode. This defaults to "none". Options are: none; solid; shape.                                                                                                            |
| [options.tiffCompression]    | <code>String</code>  | Set TIFF compression to one of "none", "packbits", "jpeg", "lzw", or "deflate".                                                                                                                    |
| [options.tiffFile]           | <code>Boolean</code> | Generate TIFF file instead a PPM file.                                                                                                                                                             |
| [options.userPassword]       | <code>String</code>  | Specify the user password for the PDF file.                                                                                                                                                        |
| file                         | <code>String</code>  | Filepath of the PDF file to read.                                                                                                                                                                  |
| outputPath                   | <code>String</code>  | Filepath to output the results to.                                                                                                                                                                 |

<a name="Poppler+pdfToPs"></a>

### poppler.pdfToPs([options], file, outputFile) ⇒ <code>Promise</code>

Converts PDF to PostScript (PS).

**Kind**: instance method of [<code>Poppler</code>](#Poppler)  
**Author**: Frazer Smith

| Param                             | Type                 | Description                                                                                                                                                                                                                                                                                                                                                                       |
| --------------------------------- | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [options]                         | <code>Object</code>  |                                                                                                                                                                                                                                                                                                                                                                                   |
| [options.antialias]               | <code>String</code>  | Enable anti-aliasing on rasterization, accepts "yes" or "no".                                                                                                                                                                                                                                                                                                                     |
| [options.binary]                  | <code>Boolean</code> | Write binary data in Level 1 PostScript. By default, pdftops writes hex-encoded data in Level 1 PostScript. Binary data is non-standard in Level 1 PostScript but reduces the file size and can be useful when Level 1 PostScript is required only for its restricted use of PostScript operators.                                                                                |
| [options.duplex]                  | <code>Boolean</code> | Set the Duplex pagedevice entry in the PostScript file. This tells duplex-capable printers to enable duplexing.                                                                                                                                                                                                                                                                   |
| [options.epsFile]                 | <code>Boolean</code> | Generate an EPS file. An EPS file contains a single image, so if you use this option with a multi-page PDF file, you must use 'firstPageToConvert' and 'lastPageToConvert' to specify a single page. The page size options (originalPageSizes, paperSize, paperWidth, paperHeight) can not be used with this option.                                                              |
| [options.fillPage]                | <code>Boolean</code> | Expand PDF pages smaller than the paper to fill the paper. By default, these pages are not scaled.                                                                                                                                                                                                                                                                                |
| [options.firstPageToConvert]      | <code>Number</code>  | Specifies the first page to convert.                                                                                                                                                                                                                                                                                                                                              |
| [options.form]                    | <code>Number</code>  | Generate PostScript form which can be imported by software that understands forms. A form contains a single page, so if you use this option with a multi-page PDF file, you must use 'firstPageToConvert' and 'lastPageToConvert to specify a single page. The 'level1' option cannot be used with -form. No more than one of the mode options ('epsFile', 'form') may be given.  |
| [options.lastPageToConvert]       | <code>Number</code>  | Specifies the last page to convert.                                                                                                                                                                                                                                                                                                                                               |
| [options.level1]                  | <code>Boolean</code> | Generate Level 1 PostScript. The resulting PostScript files will be significantly larger (if they contain images), but will print on Level 1 printers. This also converts all images to black and white.                                                                                                                                                                          |
| [options.level1Sep]               | <code>Boolean</code> | Generate Level 1 separable PostScript. All colors are converted to CMYK. Images are written with separate stream data for the four components.                                                                                                                                                                                                                                    |
| [options.level2]                  | <code>Boolean</code> | Generate Level 2 PostScript. Level 2 supports color images and image compression. This is the default setting.                                                                                                                                                                                                                                                                    |
| [options.level2Sep]               | <code>Boolean</code> | Generate Level 2 separable PostScript. All colors are converted to CMYK. The PostScript separation convention operators are used to handle custom (spot) colors.                                                                                                                                                                                                                  |
| [options.level3]                  | <code>Boolean</code> | Generate Level 3 PostScript. This enables all Level 2 featuresplus CID font embedding.                                                                                                                                                                                                                                                                                            |
| [options.level3Sep]               | <code>Boolean</code> | Generate Level 3 separable PostScript. The separation handling is the same as for 'level2Sep'.                                                                                                                                                                                                                                                                                    |
| [options.noEmbedCIDFonts]         | <code>Boolean</code> | By default, any CID PostScript fonts which are embedded in the PDF file are copied into the PostScript file. This option disables that embedding. No attempt is made to substitute for non-embedded CID PostScript fonts.                                                                                                                                                         |
| [options.noEmbedCIDTrueTypeFonts] | <code>Boolean</code> | By default, any CID TrueType fonts which are embedded in the PDF file are copied into the PostScript file. This option disables that embedding. No attempt is made to substitute for non-embedded CID TrueType fonts.                                                                                                                                                             |
| [options.noEmbedTrueTypeFonts]    | <code>Boolean</code> | By default, any TrueType fonts which are embedded in the PDF file are copied into the PostScript file. This option causes pdftops to substitute base fonts instead. Embedded fonts make PostScript files larger, but may be necessary for readable output. Also, some PostScript interpreters do not have TrueType rasterizers.                                                   |
| [options.noEmbedType1Fonts]       | <code>Boolean</code> | By default, any Type 1 fonts which are embedded in the PDF file are copied into the PostScript file. This option causes pdftops to substitute base fonts instead. Embedded fonts make PostScript files larger, but may be necessary for readable output.                                                                                                                          |
| [options.noCenter]                | <code>Boolean</code> | By default, PDF pages smaller than the paper (after any scaling) are centered on the paper. This option causes them to be aligned to the lower-left corner of the paper instead.                                                                                                                                                                                                  |
| [options.noCrop]                  | <code>Boolean</code> | By default, printing output is cropped to the CropBox specified in the PDF file. This option disables cropping.                                                                                                                                                                                                                                                                   |
| [options.noShrink]                | <code>Boolean</code> | Don't scale PDF pages which are larger than the paper. By default, pages larger than the paper are shrunk to fit.                                                                                                                                                                                                                                                                 |
| [options.opi]                     | <code>Boolean</code> | Generate OPI comments for all images and forms which have OPI information.                                                                                                                                                                                                                                                                                                        |
| [options.optimizecolorspace]      | <code>Boolean</code> | By default, bitmap images in the PDF pass through to the output PostScript in their original color space, which produces predictable results. This option converts RGB and CMYK images into Gray images if every pixel of the image has equal components. This can fix problems when doing color separations of PDFs that contain embedded black and white images encoded as RGB. |
| [options.originalPageSizes]       | <code>Boolean</code> | Set the paper size of each page to match the size specified in the PDF file.                                                                                                                                                                                                                                                                                                      |
| [options.overprint]               | <code>Boolean</code> | Enable overprinting.                                                                                                                                                                                                                                                                                                                                                              |
| [options.ownerPassword]           | <code>String</code>  | Owner password (for encrypted files).                                                                                                                                                                                                                                                                                                                                             |
| [options.paperHeight]             | <code>Number</code>  | Set the paper height, in points.                                                                                                                                                                                                                                                                                                                                                  |
| [options.paperSize]               | <code>String</code>  | Set the paper size to one of "letter", "legal", "A4", or "A3". This can also be set to "match", which will set the paper size of each page to match the size specified in the PDF file. If none of the paperSize, paperWidth, or paperHeight options are specified the default is to match the paper size.                                                                        |
| [options.paperWidth]              | <code>Number</code>  | Set the paper width, in points.                                                                                                                                                                                                                                                                                                                                                   |
| [options.passfonts]               | <code>Boolean</code> | By default, references to non-embedded 8-bit fonts in the PDF file are substituted with the closest "Helvetica", "Times-Roman", or "Courier" font. This option passes references to non-embedded fonts through to the PostScript file.                                                                                                                                            |
| [options.preload]                 | <code>Boolean</code> | Preload images and forms.                                                                                                                                                                                                                                                                                                                                                         |
| [options.printVersionInfo]        | <code>Boolean</code> | Print copyright and version information.                                                                                                                                                                                                                                                                                                                                          |
| [options.quiet]                   | <code>Boolean</code> | Don't print any messages or errors.                                                                                                                                                                                                                                                                                                                                               |
| [options.resolutionXYAxis]        | <code>Number</code>  | Specifies the X and Y resolution, in pixels per inch of image files (or rasterized regions in vector output). The default is 300 PPI.                                                                                                                                                                                                                                             |
| [options.userPassword]            | <code>String</code>  | User password (for encrypted files).                                                                                                                                                                                                                                                                                                                                              |
| file                              | <code>String</code>  | Filepath of the PDF file to read.                                                                                                                                                                                                                                                                                                                                                 |
| outputFile                        | <code>String</code>  | Filepath of the file to output the results to.                                                                                                                                                                                                                                                                                                                                    |

<a name="Poppler+pdfToText"></a>

### poppler.pdfToText([options], file, [outputFile]) ⇒ <code>Promise</code>

Converts PDF to TXT.

**Kind**: instance method of [<code>Poppler</code>](#Poppler)  
**Author**: Frazer Smith

| Param                            | Type                 | Description                                                                                                                                                                        |
| -------------------------------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [options]                        | <code>Object</code>  |                                                                                                                                                                                    |
| [options.boundingBoxXhtml]       | <code>Boolean</code> | Generate an XHTML file containing bounding box information for each word in the file.                                                                                              |
| [options.boundingBoxXhtmlLayout] | <code>Boolean</code> | Generate an XHTML file containing bounding box information for each block, line, and word in the file.                                                                             |
| [options.cropHeight]             | <code>Number</code>  | Specifies the height of crop area in pixels (image output) or points (vector output).                                                                                              |
| [options.cropWidth]              | <code>Number</code>  | Specifies the width of crop area in pixels (image output) or points (vector output).                                                                                               |
| [options.cropXAxis]              | <code>Number</code>  | Specifies the x-coordinate of the crop area top left corner in pixels (image output) or points (vector output).                                                                    |
| [options.cropYAxis]              | <code>Number</code>  | Specifies the y-coordinate of the crop area top left corner in pixels (image output) or points (vector output).                                                                    |
| [options.eolConvention]          | <code>String</code>  | Sets the end-of-line convention to use for text output: unix; dos; mac.                                                                                                            |
| [options.firstPageToConvert]     | <code>Number</code>  | Specifies the first page to convert.                                                                                                                                               |
| [options.fixedWidthLayout]       | <code>Number</code>  | Assume fixed-pitch (or tabular) text, with the specified character width (in points). This forces physical layout mode.                                                            |
| [options.generateHtmlMetaFile]   | <code>Boolean</code> | Generate simple HTML file, including the meta information. This simply wraps the text in <pre> and </pre> and prepends the meta headers.                                           |
| [options.lastPageToConvert]      | <code>Number</code>  | Specifies the last page to convert.                                                                                                                                                |
| [options.listEncodingOptions]    | <code>Boolean</code> | List the available encodings.                                                                                                                                                      |
| [options.maintainLayout]         | <code>Boolean</code> | Maintain (as best as possible) the original physical layout of the text. The default is to undo physical layout (columns, hyphenation, etc.) and output the text in reading order. |
| [options.noDiagonalText]         | <code>Boolean</code> | Discard diagonal text.                                                                                                                                                             |
| [options.noPageBreaks]           | <code>Boolean</code> | Don't insert page breaks (form feed characters) between pages.                                                                                                                     |
| [options.outputEncoding]         | <code>String</code>  | Sets the encoding to use for text output. This defaults to "UTF-8".                                                                                                                |
| [options.ownerPassword]          | <code>String</code>  | Owner password (for encrypted files).                                                                                                                                              |
| [options.printVersionInfo]       | <code>Boolean</code> | Print copyright and version information.                                                                                                                                           |
| [options.quiet]                  | <code>Boolean</code> | Don't print any messages or errors.                                                                                                                                                |
| [options.rawLayout]              | <code>Boolean</code> | Keep the text in content stream order. This is a hack which often "undoes" column formatting, etc. Use of raw mode is no longer recommended.                                       |
| [options.userPassword]           | <code>String</code>  | User password (for encrypted files).                                                                                                                                               |
| file                             | <code>String</code>  | Filepath of the PDF file to read.                                                                                                                                                  |
| [outputFile]                     | <code>String</code>  | Filepath of the file to output the results to.                                                                                                                                     |

<a name="Poppler+pdfUnite"></a>

### poppler.pdfUnite([options], files, [outputFile]) ⇒ <code>Promise</code>

Merges several PDF files in order of their occurrence in the files array to
one PDF result file.

**Kind**: instance method of [<code>Poppler</code>](#Poppler)  
**Author**: Frazer Smith

| Param                      | Type                 | Description                                                                                                              |
| -------------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| [options]                  | <code>Object</code>  |                                                                                                                          |
| [options.printVersionInfo] | <code>Boolean</code> | Print copyright and version information.                                                                                 |
| files                      | <code>Array</code>   | Filepaths of the PDF files to merge. An entire directory of PDF files can be merged like so: 'path/to/directory/\*.pdf'. |
| [outputFile]               | <code>String</code>  | Filepath of the file to output the resulting merged PDF to.                                                              |

<a name="parseOptions"></a>

## parseOptions(options, acceptedOptions, args)

**Kind**: global function

| Param           | Type                |
| --------------- | ------------------- |
| options         | <code>Object</code> |
| acceptedOptions | <code>Object</code> |
| args            | <code>Array</code>  |
