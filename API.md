## Classes

<dl>
<dt><a href="#Poppler">Poppler</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#OptionDetails">OptionDetails</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#PopplerAcceptedOptions">PopplerAcceptedOptions</a> : <code>Record.&lt;string, OptionDetails&gt;</code></dt>
<dd></dd>
<dt><a href="#PdfAttachOptions">PdfAttachOptions</a></dt>
<dd></dd>
<dt><a href="#PdfDetachOptions">PdfDetachOptions</a></dt>
<dd></dd>
<dt><a href="#PdfFontsOptions">PdfFontsOptions</a></dt>
<dd></dd>
<dt><a href="#PdfImagesOptions">PdfImagesOptions</a></dt>
<dd></dd>
<dt><a href="#PdfInfoOptions">PdfInfoOptions</a></dt>
<dd></dd>
<dt><a href="#PdfSeparateOptions">PdfSeparateOptions</a></dt>
<dd></dd>
<dt><a href="#PdfToCairoOptions">PdfToCairoOptions</a></dt>
<dd></dd>
<dt><a href="#PdfToHtmlOptions">PdfToHtmlOptions</a></dt>
<dd></dd>
<dt><a href="#PdfToPpmOptions">PdfToPpmOptions</a></dt>
<dd></dd>
<dt><a href="#PdfToPsOptions">PdfToPsOptions</a></dt>
<dd></dd>
<dt><a href="#PdfToTextOptions">PdfToTextOptions</a></dt>
<dd></dd>
<dt><a href="#PdfUniteOptions">PdfUniteOptions</a></dt>
<dd></dd>
</dl>

<a name="Poppler"></a>

## Poppler
**Kind**: global class  

* [Poppler](#Poppler)
    * [new Poppler([binPath])](#new_Poppler_new)
    * _instance_
        * [.path](#Poppler+path) ⇒ <code>string</code>
        * [.pdfAttach(file, fileToAttach, outputFile, [options])](#Poppler+pdfAttach) ⇒ <code>Promise.&lt;string&gt;</code>
        * [.pdfDetach(file, [options])](#Poppler+pdfDetach) ⇒ <code>Promise.&lt;string&gt;</code>
        * [.pdfFonts(file, [options])](#Poppler+pdfFonts) ⇒ <code>Promise.&lt;string&gt;</code>
        * [.pdfImages(file, [outputPrefix], [options])](#Poppler+pdfImages) ⇒ <code>Promise.&lt;string&gt;</code>
        * [.pdfInfo(file, [options])](#Poppler+pdfInfo) ⇒ <code>Promise.&lt;(object\|string)&gt;</code>
        * [.pdfSeparate(file, outputPattern, [options])](#Poppler+pdfSeparate) ⇒ <code>Promise.&lt;string&gt;</code>
        * [.pdfToCairo(file, [outputFile], [options])](#Poppler+pdfToCairo) ⇒ <code>Promise.&lt;string&gt;</code>
        * [.pdfToHtml(file, [outputFile], [options])](#Poppler+pdfToHtml) ⇒ <code>Promise.&lt;string&gt;</code>
        * [.pdfToPpm(file, outputPath, [options])](#Poppler+pdfToPpm) ⇒ <code>Promise.&lt;string&gt;</code>
        * [.pdfToPs(file, [outputFile], [options])](#Poppler+pdfToPs) ⇒ <code>Promise.&lt;string&gt;</code>
        * [.pdfToText(file, [outputFile], [options])](#Poppler+pdfToText) ⇒ <code>Promise.&lt;string&gt;</code>
        * [.pdfUnite(files, outputFile, [options])](#Poppler+pdfUnite) ⇒ <code>Promise.&lt;string&gt;</code>
    * _static_
        * [.Poppler](#Poppler.Poppler) : <code>string</code> \| <code>undefined</code>

<a name="new_Poppler_new"></a>

### new Poppler([binPath])
**Throws**:

- <code>Error</code> If the Poppler binaries cannot be found.


| Param | Type | Description |
| --- | --- | --- |
| [binPath] | <code>string</code> | Path of poppler-utils binaries. If not provided, the constructor will attempt to find the Poppler `pdfinfo` binary in the PATH environment variable and use that as the path for all binaries. For `win32` the binaries are bundled with the package and will be used if a local installation is not found. |

<a name="Poppler+path"></a>

### poppler.path ⇒ <code>string</code>
Returns the path of the Poppler binaries.

**Kind**: instance property of [<code>Poppler</code>](#Poppler)  
**Returns**: <code>string</code> - Path of Poppler binaries.  
<a name="Poppler+pdfAttach"></a>

### poppler.pdfAttach(file, fileToAttach, outputFile, [options]) ⇒ <code>Promise.&lt;string&gt;</code>
Embeds files (attachments) into a PDF file.

**Kind**: instance method of [<code>Poppler</code>](#Poppler)  
**Returns**: <code>Promise.&lt;string&gt;</code> - A promise that resolves with a stdout string, or rejects with an `Error` object.  
**Author**: Frazer Smith  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>string</code> | Filepath of the PDF file to read. |
| fileToAttach | <code>string</code> | Filepath of the attachment to be embedded into the PDF file. |
| outputFile | <code>string</code> | Filepath of the file to output the results to. |
| [options] | [<code>PdfAttachOptions</code>](#PdfAttachOptions) | Options to pass to pdfattach binary. |

<a name="Poppler+pdfDetach"></a>

### poppler.pdfDetach(file, [options]) ⇒ <code>Promise.&lt;string&gt;</code>
Lists or extracts embedded files (attachments) from a PDF file.

**Kind**: instance method of [<code>Poppler</code>](#Poppler)  
**Returns**: <code>Promise.&lt;string&gt;</code> - A promise that resolves with a stdout string, or rejects with an `Error` object.  
**Author**: Frazer Smith  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>string</code> | Filepath of the PDF file to read. |
| [options] | [<code>PdfDetachOptions</code>](#PdfDetachOptions) | Options to pass to pdfdetach binary. |

<a name="Poppler+pdfFonts"></a>

### poppler.pdfFonts(file, [options]) ⇒ <code>Promise.&lt;string&gt;</code>
Lists the fonts used in a PDF file along with various information for each font.

**Kind**: instance method of [<code>Poppler</code>](#Poppler)  
**Returns**: <code>Promise.&lt;string&gt;</code> - A promise that resolves with a stdout string, or rejects with an `Error` object.  
**Author**: Frazer Smith  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>Buffer</code> \| <code>string</code> | PDF file as Buffer, or filepath of the PDF file to read. |
| [options] | [<code>PdfFontsOptions</code>](#PdfFontsOptions) | Options to pass to pdffonts binary. |

<a name="Poppler+pdfImages"></a>

### poppler.pdfImages(file, [outputPrefix], [options]) ⇒ <code>Promise.&lt;string&gt;</code>
Saves images from a PDF file as PPM, PBM, PNG, TIFF, JPEG, JPEG2000, or JBIG2 files.

**Kind**: instance method of [<code>Poppler</code>](#Poppler)  
**Returns**: <code>Promise.&lt;string&gt;</code> - A promise that resolves with a stdout string, or rejects with an `Error` object.  
**Author**: Frazer Smith  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>Buffer</code> \| <code>string</code> | PDF file as Buffer, or filepath of the PDF file to read. |
| [outputPrefix] | <code>string</code> | Filename prefix of output files. |
| [options] | [<code>PdfImagesOptions</code>](#PdfImagesOptions) | Options to pass to pdfimages binary. |

<a name="Poppler+pdfInfo"></a>

### poppler.pdfInfo(file, [options]) ⇒ <code>Promise.&lt;(object\|string)&gt;</code>
Prints the contents of the `Info` dictionary from a PDF file.

**Kind**: instance method of [<code>Poppler</code>](#Poppler)  
**Returns**: <code>Promise.&lt;(object\|string)&gt;</code> - A promise that resolves with a stdout string or JSON object if
`options.printAsJson` is `true`, or rejects with an `Error` object.  
**Author**: Frazer Smith  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>Buffer</code> \| <code>string</code> | PDF file as Buffer, or filepath of the PDF file to read. |
| [options] | [<code>PdfInfoOptions</code>](#PdfInfoOptions) | Options to pass to pdfinfo binary. |

<a name="Poppler+pdfSeparate"></a>

### poppler.pdfSeparate(file, outputPattern, [options]) ⇒ <code>Promise.&lt;string&gt;</code>
Extracts single pages from a PDF file,
and writes one PDF file for each page to outputPattern.
This will not work if the file is encrypted.

**Kind**: instance method of [<code>Poppler</code>](#Poppler)  
**Returns**: <code>Promise.&lt;string&gt;</code> - A promise that resolves with a stdout string, or rejects with an `Error` object.  
**Author**: Frazer Smith  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>string</code> | Filepath of the PDF file to read. |
| outputPattern | <code>string</code> | Should contain %d (or any variant respecting printf format), since %d is replaced by the page number. As an example, `sample-%d.pdf` will produce `sample-1.pdf` for a single page document. |
| [options] | [<code>PdfSeparateOptions</code>](#PdfSeparateOptions) | Options to pass to pdfseparate binary. |

<a name="Poppler+pdfToCairo"></a>

### poppler.pdfToCairo(file, [outputFile], [options]) ⇒ <code>Promise.&lt;string&gt;</code>
Converts a PDF file to EPS/JPEG/PDF/PNG/PS/SVG/TIFF.

**Kind**: instance method of [<code>Poppler</code>](#Poppler)  
**Returns**: <code>Promise.&lt;string&gt;</code> - A promise that resolves with a stdout string, or rejects with an `Error` object.  
**Author**: Frazer Smith  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>Buffer</code> \| <code>string</code> | PDF file as Buffer, or filepath of the PDF file to read. |
| [outputFile] | <code>string</code> | Filepath of the file to output the results to. If `undefined` then will write output to stdout. Using stdout is not valid with image formats (jpeg, png, and tiff) unless `options.singleFile` is set to `true`. Encoding is set to `binary` if used with `options.singleFile` or `options.pdfFile`. If not set then the output filename will be derived from the PDF file name. |
| [options] | [<code>PdfToCairoOptions</code>](#PdfToCairoOptions) | Options to pass to pdftocairo binary. |

<a name="Poppler+pdfToHtml"></a>

### poppler.pdfToHtml(file, [outputFile], [options]) ⇒ <code>Promise.&lt;string&gt;</code>
Converts a PDF file to HTML.

**Kind**: instance method of [<code>Poppler</code>](#Poppler)  
**Returns**: <code>Promise.&lt;string&gt;</code> - A promise that resolves with a stdout string, or rejects with an `Error` object.  
**Author**: Frazer Smith  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>Buffer</code> \| <code>string</code> | PDF file as Buffer, or filepath of the PDF file to read. |
| [outputFile] | <code>string</code> | Filepath of the file to output the results to. If `undefined` then Poppler will use the directory and name of the original file and create a new file, with `-html` appended to the end of the filename. Required if `file` is a Buffer. |
| [options] | [<code>PdfToHtmlOptions</code>](#PdfToHtmlOptions) | Options to pass to pdftohtml binary. |

<a name="Poppler+pdfToPpm"></a>

### poppler.pdfToPpm(file, outputPath, [options]) ⇒ <code>Promise.&lt;string&gt;</code>
Converts a PDF file to colour image files in Portable Pixmap (PPM) format,
grayscale image files in Portable Graymap (PGM) format, or monochrome image files
in Portable Bitmap (PBM) format.

**Kind**: instance method of [<code>Poppler</code>](#Poppler)  
**Returns**: <code>Promise.&lt;string&gt;</code> - A promise that resolves with a stdout string, or rejects with an `Error` object.  
**Author**: Frazer Smith  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>Buffer</code> \| <code>string</code> | PDF file as Buffer, or filepath of the PDF file to read. |
| outputPath | <code>string</code> | Filepath to output the results to. |
| [options] | [<code>PdfToPpmOptions</code>](#PdfToPpmOptions) | Options to pass to pdftoppm binary. |

<a name="Poppler+pdfToPs"></a>

### poppler.pdfToPs(file, [outputFile], [options]) ⇒ <code>Promise.&lt;string&gt;</code>
Converts a PDF file to PostScript (PS).

**Kind**: instance method of [<code>Poppler</code>](#Poppler)  
**Returns**: <code>Promise.&lt;string&gt;</code> - A promise that resolves with a stdout string, or rejects with an `Error` object.  
**Author**: Frazer Smith  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>Buffer</code> \| <code>string</code> | PDF file as Buffer, or filepath of the PDF file to read. |
| [outputFile] | <code>string</code> | Filepath of the file to output the results to. If `undefined` then will write output to stdout. |
| [options] | [<code>PdfToPsOptions</code>](#PdfToPsOptions) | Options to pass to pdftops binary. |

<a name="Poppler+pdfToText"></a>

### poppler.pdfToText(file, [outputFile], [options]) ⇒ <code>Promise.&lt;string&gt;</code>
Converts a PDF file to TXT.

**Kind**: instance method of [<code>Poppler</code>](#Poppler)  
**Returns**: <code>Promise.&lt;string&gt;</code> - A promise that resolves with a stdout string, or rejects with an `Error` object.  
**Author**: Frazer Smith  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>Buffer</code> \| <code>string</code> | PDF file as Buffer, or filepath of the PDF file to read. |
| [outputFile] | <code>string</code> | Filepath of the file to output the results to. If `undefined` then will write output to stdout. |
| [options] | [<code>PdfToTextOptions</code>](#PdfToTextOptions) | Options to pass to pdftotext binary. |

<a name="Poppler+pdfUnite"></a>

### poppler.pdfUnite(files, outputFile, [options]) ⇒ <code>Promise.&lt;string&gt;</code>
Merges several PDF files in order of their occurrence in the files array to
one PDF result file.

**Kind**: instance method of [<code>Poppler</code>](#Poppler)  
**Returns**: <code>Promise.&lt;string&gt;</code> - A promise that resolves with a stdout string, or rejects with an `Error` object.  
**Author**: Frazer Smith  

| Param | Type | Description |
| --- | --- | --- |
| files | <code>Array.&lt;string&gt;</code> | Filepaths of the PDF files to merge. An entire directory of PDF files can be merged like so: `path/to/directory/*.pdf`. |
| outputFile | <code>string</code> | Filepath of the file to output the resulting merged PDF to. |
| [options] | [<code>PdfUniteOptions</code>](#PdfUniteOptions) | Options to pass to pdfunite binary. |

<a name="Poppler.Poppler"></a>

### Poppler.Poppler : <code>string</code> \| <code>undefined</code>
**Kind**: static property of [<code>Poppler</code>](#Poppler)  
<a name="OptionDetails"></a>

## OptionDetails : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| arg | <code>string</code> | The argument to pass to the binary. |
| type | <code>&#x27;boolean&#x27;</code> \| <code>&#x27;number&#x27;</code> \| <code>&#x27;string&#x27;</code> | The type of the option. |
| [minVersion] | <code>string</code> | The minimum version of the binary that supports this option. |
| [maxVersion] | <code>string</code> | The maximum version of the binary that supports this option (optional). |

<a name="PopplerAcceptedOptions"></a>

## PopplerAcceptedOptions : <code>Record.&lt;string, OptionDetails&gt;</code>
**Kind**: global typedef  
<a name="PdfAttachOptions"></a>

## PdfAttachOptions
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [printVersionInfo] | <code>boolean</code> | Print copyright and version info. |
| [replace] | <code>boolean</code> | Replace embedded file with same name (if it exists). |

<a name="PdfDetachOptions"></a>

## PdfDetachOptions
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [listEmbedded] | <code>boolean</code> | List all of the embedded files in the PDF file. File names are converted to the text encoding specified by `options.outputEncoding`. |
| [outputEncoding] | <code>string</code> | Sets the encoding to use for text output. This defaults to `UTF-8`. |
| [ownerPassword] | <code>string</code> | Owner password (for encrypted files). |
| [outputPath] | <code>string</code> | Set the file name used when saving an embedded file with the save option enabled, or the directory if `options.saveall` is used. |
| [printVersionInfo] | <code>boolean</code> | Print copyright and version info. |
| [saveAllFiles] | <code>boolean</code> | Save all of the embedded files. This uses the file names associated with the embedded files (as printed by `options.listEmbedded`). By default, the files are saved in the current directory; this can be changed with `options.outputPath`. |
| [saveFile] | <code>string</code> | Save the specified embedded file. By default, this uses the file name associated with the embedded file (as printed by `options.listEmbedded`); the file name can be changed with `options.outputPath`. |
| [saveSpecificFile] | <code>number</code> | Save the specified embedded file. By default, this uses the file name associated with the embedded file (as printed by `options.listEmbedded`); the file name can be changed with `options.outputPath`. |
| [userPassword] | <code>string</code> | User password (for encrypted files). |

<a name="PdfFontsOptions"></a>

## PdfFontsOptions
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [firstPageToExamine] | <code>number</code> | Specifies the first page to examine. |
| [lastPageToExamine] | <code>number</code> | Specifies the last page to examine. |
| [listSubstitutes] | <code>boolean</code> | List the substitute fonts that poppler will use for non-embedded fonts. |
| [ownerPassword] | <code>string</code> | Owner password (for encrypted files). |
| [printVersionInfo] | <code>boolean</code> | Print copyright and version info. |
| [userPassword] | <code>string</code> | User password (for encrypted files). |

<a name="PdfImagesOptions"></a>

## PdfImagesOptions
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [allFiles] | <code>boolean</code> | Write JPEG, JPEG2000, JBIG2, and CCITT images in their native format. CMYK files are written as TIFF files. All other images are written as PNG files. |
| [ccittFile] | <code>boolean</code> | Generate CCITT images as CCITT files. |
| [firstPageToConvert] | <code>number</code> | Specifies the first page to convert. |
| [lastPageToConvert] | <code>number</code> | Specifies the last page to convert. |
| [jbig2File] | <code>boolean</code> | Generate JBIG2 images as JBIG2 files. |
| [jpeg2000File] | <code>boolean</code> | Generate JPEG2000 images at JP2 files. |
| [jpegFile] | <code>boolean</code> | Generate JPEG images as JPEG files. |
| [list] | <code>boolean</code> | Instead of writing the images, list the images along with various information for each image. NOTE: Do not specify the outputPrefix with this option. |
| [ownerPassword] | <code>string</code> | Owner password (for encrypted files). |
| [pngFile] | <code>boolean</code> | Change the default output format to PNG. |
| [printVersionInfo] | <code>boolean</code> | Print copyright and version info. |
| [tiffFile] | <code>boolean</code> | Change the default output format to TIFF. |
| [userPassword] | <code>string</code> | Specify the user password for the PDF file. |

<a name="PdfInfoOptions"></a>

## PdfInfoOptions
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [firstPageToConvert] | <code>number</code> | First page to print. |
| [lastPageToConvert] | <code>number</code> | Last page to print. |
| [listEncodingOptions] | <code>boolean</code> | List the available encodings. |
| [outputEncoding] | <code>string</code> | Sets the encoding to use for text output. This defaults to `UTF-8`. |
| [ownerPassword] | <code>string</code> | Owner password (for encrypted files). |
| [printAsJson] | <code>boolean</code> | Print result as a JSON object. |
| [printBoundingBoxes] | <code>boolean</code> | Prints the page box bounding boxes: MediaBox, CropBox, BleedBox, TrimBox, and ArtBox. |
| [printDocStruct] | <code>boolean</code> | Prints the logical document structure of a Tagged-PDF file. |
| [printDocStructText] | <code>boolean</code> | Print the textual content along with the document structure of a Tagged-PDF file. Note that extracting text this way might be slow for big PDF files. |
| [printIsoDates] | <code>boolean</code> | Prints dates in ISO-8601 format (including the time zone). |
| [printJS] | <code>boolean</code> | Prints all JavaScript in the PDF file. |
| [printMetadata] | <code>boolean</code> | Prints document-level metadata. (This is the `Metadata` stream from the PDF file's Catalog object). |
| [printNamedDests] | <code>boolean</code> | Print a list of all named destinations. If a page range is specified using the `options.firstPageToConvert` and `options.lastPageToConvert` options, only destinations in the page range are listed. |
| [printRawDates] | <code>boolean</code> | Prints the raw (undecoded) date strings, directly from the PDF file. |
| [printUrls] | <code>boolean</code> | Print all URLs in the PDF; only URLs referenced by PDF objects such as Link Annotations are listed, not URL strings in the text content. |
| [printVersionInfo] | <code>boolean</code> | Print copyright and version info. |
| [userPassword] | <code>string</code> | User password (for encrypted files). |

<a name="PdfSeparateOptions"></a>

## PdfSeparateOptions
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [firstPageToExtract] | <code>number</code> | Specifies the first page to extract. This defaults to page 1. |
| [lastPageToExtract] | <code>number</code> | Specifies the last page to extract. This defaults to the last page of the PDF file. |
| [printVersionInfo] | <code>boolean</code> | Print copyright and version info. |

<a name="PdfToCairoOptions"></a>

## PdfToCairoOptions
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [antialias] | <code>&#x27;best&#x27;</code> \| <code>&#x27;default&#x27;</code> \| <code>&#x27;fast&#x27;</code> \| <code>&#x27;good&#x27;</code> \| <code>&#x27;gray&#x27;</code> \| <code>&#x27;none&#x27;</code> \| <code>&#x27;subpixel&#x27;</code> | Set the cairo antialias option used for text and drawing in image files (or rasterized regions in vector output). |
| [cropBox] | <code>boolean</code> | Uses the crop box rather than media box when generating the files (PNG/JPEG/TIFF only). |
| [cropHeight] | <code>number</code> | Specifies the height of crop area in pixels (image output) or points (vector output). |
| [cropSize] | <code>number</code> | Specifies the size of crop square in pixels (image output) or points (vector output). |
| [cropWidth] | <code>number</code> | Specifies the width of crop area in pixels (image output) or points (vector output). |
| [cropXAxis] | <code>number</code> | Specifies the x-coordinate of the crop area top left corner in pixels (image output) or points (vector output). |
| [cropYAxis] | <code>number</code> | Specifies the y-coordinate of the crop area top left corner in pixels (image output) or points (vector output). |
| [duplex] | <code>boolean</code> | Adds the %%IncludeFeature: *Duplex DuplexNoTumble DSC comment to the PostScript file (PS only). This tells the print manager to enable duplexing. |
| [epsFile] | <code>boolean</code> | Generate an EPS file. An EPS file contains a single image, so if you use this option with a multi-page PDF file, you must use `options.firstPageToConvert` and `options.lastPageToConvert` to specify a single page. The page size options (originalPageSizes, paperSize, paperWidth, paperHeight) can not be used with this option. |
| [evenPagesOnly] | <code>boolean</code> | Generates only the even numbered pages. |
| [fillPage] | <code>boolean</code> | Expand PDF pages smaller than the paper to fill the paper (PS,PDF,SVG only). By default, these pages are not scaled. |
| [firstPageToConvert] | <code>number</code> | Specifies the first page to convert. |
| [grayscaleFile] | <code>boolean</code> | Generate grayscale file (PNG, JPEG, and TIFF only). |
| [iccFile] | <code>string</code> | Use the specified ICC file as the output profile (PNG only). The profile will be embedded in the PNG file. |
| [jpegFile] | <code>boolean</code> | Generate JPEG file(s). |
| [jpegOptions] | <code>string</code> | When used with `options.jpegFile`, this option can be used to control the JPEG compression parameters. It takes a string of the form `"<opt>=<val>[,<opt>=<val>]"`. Currently available options are: - `quality` Selects the JPEG quality value. The value must be an integer between 0 and 100. - `progressive` Select progressive JPEG output. The possible values are "y", "n", indicating progressive (yes) or non-progressive (no), respectively. - `optimize` Sets whether to compute optimal Huffman coding tables for the JPEG output, which will create smaller files but make an extra pass over the data. The value must be "y" or "n", with "y" performing optimization, otherwise the default Huffman tables are used. Example: `"quality=95,optimize=y"`. |
| [lastPageToConvert] | <code>number</code> | Specifies the last page to convert. |
| [monochromeFile] | <code>boolean</code> | Generate monochrome file (PNG and TIFF only). |
| [noCenter] | <code>boolean</code> | By default, PDF pages smaller than the paper (after any scaling) are centered on the paper. This option causes them to be aligned to the lower-left corner of the paper instead (PS,PDF,SVG only). |
| [noCrop] | <code>boolean</code> | By default, printing output is cropped to the CropBox specified in the PDF file. This option disables cropping (PS, PDF, SVG only). |
| [noShrink] | <code>boolean</code> | Do not scale PDF pages which are larger than the paper (PS,PDF,SVG only). By default, pages larger than the paper are shrunk to fit. |
| [oddPagesOnly] | <code>boolean</code> | Generates only the odd numbered pages. |
| [originalPageSizes] | <code>boolean</code> | Set the paper size of each page to match the size specified in the PDF file. |
| [ownerPassword] | <code>string</code> | Specify the owner password for the PDF file. Providing this will bypass all security restrictions. |
| [paperHeight] | <code>number</code> | Set the paper height, in points (PS, PDF, SVG only). |
| [paperSize] | <code>&#x27;A3&#x27;</code> \| <code>&#x27;A4&#x27;</code> \| <code>&#x27;legal&#x27;</code> \| <code>&#x27;letter&#x27;</code> \| <code>&#x27;match&#x27;</code> | Set the paper size to one of `A3`, `A4`, `legal`, or `letter` (PS,PDF,SVG only). This can also be set to `match`, which will set the paper size of each page to match the size specified in the PDF file. If none of the paperSize, paperWidth, or paperHeight options are specified the default is to match the paper size. |
| [paperWidth] | <code>number</code> | Set the paper width, in points (PS,PDF,SVG only). |
| [pdfFile] | <code>boolean</code> | Generate PDF file. |
| [pngFile] | <code>boolean</code> | Generate PNG file(s). |
| [printVersionInfo] | <code>boolean</code> | Print copyright and version information. |
| [printDocStruct] | <code>boolean</code> | If the input file contains structural information about the document's content, write this information to the output file (PDF only). |
| [psFile] | <code>boolean</code> | Generate PS file. |
| [psLevel2] | <code>boolean</code> | Generate Level 2 PostScript (PS only). |
| [psLevel3] | <code>boolean</code> | Generate Level 3 PostScript (PS only). This enables all Level 2 features plus shading patterns and masked images. This is the default setting. |
| [quiet] | <code>boolean</code> | Do not print any messages or errors. |
| [resolutionXAxis] | <code>number</code> | Specifies the X resolution, in pixels per inch of image files (or rasterized regions in vector output). The default is 150 PPI. |
| [resolutionXYAxis] | <code>number</code> | Specifies the X and Y resolution, in pixels per inch of image files (or rasterized regions in vector output). The default is 150 PPI. |
| [resolutionYAxis] | <code>number</code> | Specifies the Y resolution, in pixels per inch of image files (or rasterized regions in vector output). The default is 150 PPI. |
| [scalePageTo] | <code>number</code> | Scales the long side of each page (width for landscape pages, height for portrait pages) to fit in scale-to pixels. The size of the short side will be determined by the aspect ratio of the page (PNG/JPEG/TIFF only). |
| [scalePageToXAxis] | <code>number</code> | Scales each page horizontally to fit in scale-to-x pixels. If scale-to-y is set to -1, the vertical size will determined by the aspect ratio of the page (PNG/JPEG/TIFF only). |
| [scalePageToYAxis] | <code>number</code> | Scales each page vertically to fit in scale-to-y pixels. If scale-to-x is set to -1, the horizontal size will determined by the aspect ratio of the page (PNG/JPEG/TIFF only). |
| [singleFile] | <code>boolean</code> | Writes only the first page and does not add digits. Can only be used with `options.jpegFile`, `options.pngFile`, and `options.tiffFile`. |
| [svgFile] | <code>boolean</code> | Generate SVG (Scalable Vector Graphics) file. |
| [tiffCompression] | <code>&#x27;deflate&#x27;</code> \| <code>&#x27;jpeg&#x27;</code> \| <code>&#x27;lzw&#x27;</code> \| <code>&#x27;none&#x27;</code> \| <code>&#x27;packbits&#x27;</code> | Set TIFF compression. |
| [tiffFile] | <code>boolean</code> | Generate TIFF file(s). |
| [transparentPageColor] | <code>boolean</code> | Use a transparent page color instead of white (PNG and TIFF only). |
| [userPassword] | <code>string</code> | Specify the user password for the PDF file. |

<a name="PdfToHtmlOptions"></a>

## PdfToHtmlOptions
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [complexOutput] | <code>boolean</code> | Generate complex output. |
| [dataUrls] | <code>boolean</code> | Use data URLs instead of external images in HTML. |
| [exchangePdfLinks] | <code>boolean</code> | Exchange .pdf links with .html. |
| [extractHidden] | <code>boolean</code> | Force hidden text extraction. |
| [firstPageToConvert] | <code>number</code> | First page to print. |
| [fontFullName] | <code>boolean</code> | Outputs the font name without any substitutions. |
| [ignoreImages] | <code>boolean</code> | Ignore images. |
| [imageFormat] | <code>&#x27;JPG&#x27;</code> \| <code>&#x27;PNG&#x27;</code> | Image file format for Splash output (JPG or PNG). If complexOutput is selected, but imageFormat is not specified, PNG will be assumed. |
| [lastPageToConvert] | <code>number</code> | Last page to print. |
| [noDrm] | <code>boolean</code> | Override document DRM settings. |
| [noFrames] | <code>boolean</code> | Generate no frames. Not supported in complex output mode. |
| [noMergeParagraph] | <code>boolean</code> | Do not merge paragraphs. |
| [noRoundedCoordinates] | <code>boolean</code> | Do not round coordinates (with XML output only). |
| [outputEncoding] | <code>string</code> | Sets the encoding to use for text output. This defaults to `UTF-8`. |
| [ownerPassword] | <code>string</code> | Owner password (for encrypted files). |
| [printVersionInfo] | <code>boolean</code> | Print copyright and version info. |
| [quiet] | <code>boolean</code> | Do not print any messages or errors. |
| [singlePage] | <code>boolean</code> | Generate single HTML that includes all pages. |
| [stdout] | <code>boolean</code> | Use standard output. |
| [userPassword] | <code>string</code> | User password (for encrypted files). |
| [wordBreakThreshold] | <code>number</code> | Adjust the word break threshold percent. Default is 10. Word break occurs when distance between two adjacent characters is greater than this percent of character height. |
| [xmlOutput] | <code>boolean</code> | Output for XML post-processing. |
| [zoom] | <code>number</code> | Zoom the PDF document (default 1.5). |

<a name="PdfToPpmOptions"></a>

## PdfToPpmOptions
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [antialiasFonts] | <code>&#x27;no&#x27;</code> \| <code>&#x27;yes&#x27;</code> | Enable or disable font anti-aliasing. This defaults to `yes`. |
| [antialiasVectors] | <code>&#x27;no&#x27;</code> \| <code>&#x27;yes&#x27;</code> | Enable or disable vector anti-aliasing. This defaults to `yes`. |
| [cropBox] | <code>boolean</code> | Uses the crop box rather than media box when generating the files (PNG/JPEG/TIFF only). |
| [cropHeight] | <code>number</code> | Specifies the height of crop area in pixels (image output) or points (vector output). |
| [cropSize] | <code>number</code> | Specifies the size of crop square in pixels (image output) or points (vector output). |
| [cropWidth] | <code>number</code> | Specifies the width of crop area in pixels (image output) or points (vector output). |
| [cropXAxis] | <code>number</code> | Specifies the x-coordinate of the crop area top left corner in pixels (image output) or points (vector output). |
| [cropYAxis] | <code>number</code> | Specifies the y-coordinate of the crop area top left corner in pixels (image output) or points (vector output). |
| [defaultCmykProfile] | <code>string</code> | If Poppler is compiled with colour management support, this option sets the DefaultCMYK color space to the ICC profile stored in the display profile file passed. |
| [defaultGrayProfile] | <code>string</code> | If Poppler is compiled with colour management support, this option sets the DefaultGray color space to the ICC profile stored in the display profile file passed. |
| [defaultRgbProfile] | <code>string</code> | If Poppler is compiled with colour management support, this option sets the DefaultRGB color space to the ICC profile stored in the display profile file passed. |
| [displayProfile] | <code>string</code> | If Poppler is compiled with colour management support, this option sets the display profile to the ICC profile stored in the display profile file passed. |
| [evenPagesOnly] | <code>boolean</code> | Generates only the even numbered pages. |
| [firstPageToConvert] | <code>number</code> | Specifies the first page to convert. |
| [freetype] | <code>&#x27;no&#x27;</code> \| <code>&#x27;yes&#x27;</code> | Enable or disable FreeType (a TrueType / Type 1 font rasterizer). This defaults to `yes`. |
| [forcePageNumber] | <code>boolean</code> | Force page number even if there is only one page. |
| [grayscaleFile] | <code>boolean</code> | Generate grayscale PGM file (instead of a color PPM file). |
| [hideAnnotations] | <code>boolean</code> | Hide annotations. |
| [jpegFile] | <code>boolean</code> | Generate JPEG file instead a PPM file. |
| [lastPageToConvert] | <code>number</code> | Specifies the last page to convert. |
| [monochromeFile] | <code>boolean</code> | Generate monochrome PBM file (instead of a color PPM file). |
| [oddPagesOnly] | <code>boolean</code> | Generates only the odd numbered pages. |
| [ownerPassword] | <code>string</code> | Specify the owner password for the PDF file. Providing this will bypass all security restrictions. |
| [pngFile] | <code>boolean</code> | Generate PNG file instead a PPM file. |
| [printProgress] | <code>boolean</code> | Print progress info as each page is generated. Three space-separated fields are printed to STDERR: the number of the current page, the number of the last page that will be generated, and the path to the file written to. |
| [printVersionInfo] | <code>boolean</code> | Print copyright and version information. |
| [quiet] | <code>boolean</code> | Do not print any messages or errors. |
| [resolutionXAxis] | <code>number</code> | Specifies the X resolution, in pixels per inch of image files (or rasterized regions in vector output). The default is 150 PPI. |
| [resolutionXYAxis] | <code>number</code> | Specifies the X and Y resolution, in pixels per inch of image files (or rasterized regions in vector output). The default is 150 PPI. |
| [resolutionYAxis] | <code>number</code> | Specifies the Y resolution, in pixels per inch of image files (or rasterized regions in vector output). The default is 150 PPI. |
| [scalePageTo] | <code>number</code> | Scales the long side of each page (width for landscape pages, height for portrait pages) to fit in scale-to pixels. The size of the short side will be determined by the aspect ratio of the page. |
| [scalePageToXAxis] | <code>number</code> | Scales each page horizontally to fit in scale-to-x pixels. If scale-to-y is set to -1, the vertical size will determined by the aspect ratio of the page. |
| [scalePageToYAxis] | <code>number</code> | Scales each page vertically to fit in scale-to-y pixels. If scale-to-x is set to -1, the horizontal size will determined by the aspect ratio of the page. |
| [separator] | <code>string</code> | Specify single character separator between name and page number. |
| [singleFile] | <code>boolean</code> | Writes only the first page and does not add digits. |
| [thinLineMode] | <code>&#x27;none&#x27;</code> \| <code>&#x27;shape&#x27;</code> \| <code>&#x27;solid&#x27;</code> | Specifies the thin line mode. This defaults to `none`. |
| [tiffCompression] | <code>&#x27;deflate&#x27;</code> \| <code>&#x27;jpeg&#x27;</code> \| <code>&#x27;lzw&#x27;</code> \| <code>&#x27;none&#x27;</code> \| <code>&#x27;packbits&#x27;</code> | Set TIFF compression. |
| [tiffFile] | <code>boolean</code> | Generate TIFF file instead a PPM file. |
| [userPassword] | <code>string</code> | Specify the user password for the PDF file. |

<a name="PdfToPsOptions"></a>

## PdfToPsOptions
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [antialias] | <code>&#x27;no&#x27;</code> \| <code>&#x27;yes&#x27;</code> | Enable anti-aliasing on rasterization, accepts `no` or `yes`. |
| [binary] | <code>boolean</code> | Write binary data in Level 1 PostScript. By default, pdftops writes hex-encoded data in Level 1 PostScript. Binary data is non-standard in Level 1 PostScript but reduces the file size and can be useful when Level 1 PostScript is required only for its restricted use of PostScript operators. |
| [defaultCmykProfile] | <code>string</code> | If Poppler is compiled with colour management support, this option sets the DefaultCMYK color space to the ICC profile stored in the display profile file passed. |
| [defaultGrayProfile] | <code>string</code> | If Poppler is compiled with colour management support, this option sets the DefaultGray color space to the ICC profile stored in the display profile file passed. |
| [defaultRgbProfile] | <code>string</code> | If Poppler is compiled with colour management support, this option sets the DefaultRGB color space to the ICC profile stored in the display profile file passed. |
| [duplex] | <code>boolean</code> | Set the Duplex pagedevice entry in the PostScript file. This tells duplex-capable printers to enable duplexing. |
| [epsFile] | <code>boolean</code> | Generate an EPS file. An EPS file contains a single image, so if you use this option with a multi-page PDF file, you must use `options.firstPageToConvert` and `options.lastPageToConvert` to specify a single page. The page size options (originalPageSizes, paperSize, paperWidth, paperHeight) can not be used with this option. |
| [fillPage] | <code>boolean</code> | Expand PDF pages smaller than the paper to fill the paper. By default, these pages are not scaled. |
| [firstPageToConvert] | <code>number</code> | Specifies the first page to convert. |
| [form] | <code>number</code> | Generate PostScript form which can be imported by software that understands forms. A form contains a single page, so if you use this option with a multi-page PDF file, you must use `options.firstPageToConvert` and `options.lastPageToConvert` to specify a single page. The `options.level1` option cannot be used with `options.form`. No more than one of the mode options (`options.epsFile`, `options.form`) may be given. |
| [lastPageToConvert] | <code>number</code> | Specifies the last page to convert. |
| [level1] | <code>boolean</code> | Generate Level 1 PostScript. The resulting PostScript files will be significantly larger (if they contain images), but will print on Level 1 printers. This also converts all images to black and white. |
| [level1Sep] | <code>boolean</code> | Generate Level 1 separable PostScript. All colors are converted to CMYK. Images are written with separate stream data for the four components. |
| [level2] | <code>boolean</code> | Generate Level 2 PostScript. Level 2 supports color images and image compression. This is the default setting. |
| [level2Sep] | <code>boolean</code> | Generate Level 2 separable PostScript. All colors are converted to CMYK. The PostScript separation convention operators are used to handle custom (spot) colors. |
| [level3] | <code>boolean</code> | Generate Level 3 PostScript. This enables all Level 2 features plus CID font embedding. |
| [level3Sep] | <code>boolean</code> | Generate Level 3 separable PostScript. The separation handling is the same as for `options.level2Sep`. |
| [noCenter] | <code>boolean</code> | By default, PDF pages smaller than the paper (after any scaling) are centered on the paper. This option causes them to be aligned to the lower-left corner of the paper instead. |
| [noCrop] | <code>boolean</code> | By default, printing output is cropped to the CropBox specified in the PDF file. This option disables cropping. |
| [noEmbedCIDFonts] | <code>boolean</code> | By default, any CID PostScript fonts which are embedded in the PDF file are copied into the PostScript file. This option disables that embedding. No attempt is made to substitute for non-embedded CID PostScript fonts. |
| [noEmbedCIDTrueTypeFonts] | <code>boolean</code> | By default, any CID TrueType fonts which are embedded in the PDF file are copied into the PostScript file. This option disables that embedding. No attempt is made to substitute for non-embedded CID TrueType fonts. |
| [noEmbedTrueTypeFonts] | <code>boolean</code> | By default, any TrueType fonts which are embedded in the PDF file are copied into the PostScript file. This option causes pdfToPs to substitute base fonts instead. Embedded fonts make PostScript files larger, but may be necessary for readable output. Also, some PostScript interpreters do not have TrueType rasterizers. |
| [noEmbedType1Fonts] | <code>boolean</code> | By default, any Type 1 fonts which are embedded in the PDF file are copied into the PostScript file. This option causes pdfToPs to substitute base fonts instead. Embedded fonts make PostScript files larger, but may be necessary for readable output. |
| [noShrink] | <code>boolean</code> | Do not scale PDF pages which are larger than the paper. By default, pages larger than the paper are shrunk to fit. |
| [opi] | <code>boolean</code> | Generate OPI comments for all images and forms which have OPI information. |
| [optimizecolorspace] | <code>boolean</code> | By default, bitmap images in the PDF pass through to the output PostScript in their original color space, which produces predictable results. This option converts RGB and CMYK images into Gray images if every pixel of the image has equal components. This can fix problems when doing color separations of PDFs that contain embedded black and white images encoded as RGB. |
| [originalPageSizes] | <code>boolean</code> | Set the paper size of each page to match the size specified in the PDF file. |
| [overprint] | <code>boolean</code> | Enable overprinting. |
| [ownerPassword] | <code>string</code> | Owner password (for encrypted files). |
| [paperHeight] | <code>number</code> | Set the paper height, in points. |
| [paperSize] | <code>&#x27;A3&#x27;</code> \| <code>&#x27;A4&#x27;</code> \| <code>&#x27;legal&#x27;</code> \| <code>&#x27;letter&#x27;</code> \| <code>&#x27;match&#x27;</code> | Set the paper size to one of `A3`, `A4`, `legal`, or `letter`. This can also be set to `match`, which will set the paper size of each page to match the size specified in the PDF file. If none of the paperSize, paperWidth, or paperHeight options are specified the default is to match the paper size. |
| [paperWidth] | <code>number</code> | Set the paper width, in points. |
| [passfonts] | <code>boolean</code> | By default, references to non-embedded 8-bit fonts in the PDF file are substituted with the closest `Helvetica`, `Times-Roman`, or `Courier` font. This option passes references to non-embedded fonts through to the PostScript file. |
| [preload] | <code>boolean</code> | Preload images and forms. |
| [printVersionInfo] | <code>boolean</code> | Print copyright and version information. |
| [processColorFormat] | <code>&#x27;CMYK8&#x27;</code> \| <code>&#x27;MONO8&#x27;</code> \| <code>&#x27;RGB8&#x27;</code> | Sets the process color format as it is used during rasterization and transparency reduction. The default depends on the other settings: For `options.level1` the default is MONO8; for `options.level1Sep`, `options.level2Sep`, `options.level3Sep`, or `options.overprint` the default is CMYK8; in all other cases RGB8 is the default. If `option.processColorProfile` is set then `options.processColorFormat` is inferred from the specified ICC profile. |
| [processColorProfile] | <code>string</code> | Sets the ICC profile that is assumed during rasterization and transparency reduction. |
| [quiet] | <code>boolean</code> | Do not print any messages or errors. |
| [rasterize] | <code>&#x27;always&#x27;</code> \| <code>&#x27;never&#x27;</code> \| <code>&#x27;whenneeded&#x27;</code> | By default, pdfToPs rasterizes pages as needed, for example, if they contain transparencies. To force rasterization, set `rasterize` to `always`. Use this to eliminate fonts. To prevent rasterization, set `rasterize` to `never`. This may produce files that display incorrectly. |
| [resolutionXYAxis] | <code>number</code> | Specifies the X and Y resolution, in pixels per inch of image files (or rasterized regions in vector output). The default is 300 PPI. |
| [userPassword] | <code>string</code> | User password (for encrypted files). |

<a name="PdfToTextOptions"></a>

## PdfToTextOptions
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [boundingBoxXhtml] | <code>boolean</code> | Generate an XHTML file containing bounding box information for each word in the file. |
| [boundingBoxXhtmlLayout] | <code>boolean</code> | Generate an XHTML file containing bounding box information for each block, line, and word in the file. |
| [cropBox] | <code>boolean</code> | Use the crop box rather than the media box with `options.boundingBoxXhtml` and `options.boundingBoxXhtmlLayout`. |
| [cropHeight] | <code>number</code> | Specifies the height of crop area in pixels (image output) or points (vector output). |
| [cropWidth] | <code>number</code> | Specifies the width of crop area in pixels (image output) or points (vector output). |
| [cropXAxis] | <code>number</code> | Specifies the x-coordinate of the crop area top left corner in pixels (image output) or points (vector output). |
| [cropYAxis] | <code>number</code> | Specifies the y-coordinate of the crop area top left corner in pixels (image output) or points (vector output). |
| [eolConvention] | <code>&#x27;dos&#x27;</code> \| <code>&#x27;mac&#x27;</code> \| <code>&#x27;unix&#x27;</code> | Sets the end-of-line convention to use for text output: dos; mac; unix. |
| [firstPageToConvert] | <code>number</code> | Specifies the first page to convert. |
| [fixedWidthLayout] | <code>number</code> | Assume fixed-pitch (or tabular) text, with the specified character width (in points). This forces physical layout mode. |
| [generateHtmlMetaFile] | <code>boolean</code> | Generate simple HTML file, including the meta information. This simply wraps the text in `<pre>` and `</pre>` and prepends the meta headers. |
| [generateTsvFile] | <code>boolean</code> | Generate a TSV file containing the bounding box information for each block, line, and word in the file. |
| [lastPageToConvert] | <code>number</code> | Specifies the last page to convert. |
| [listEncodingOptions] | <code>boolean</code> | List the available encodings. |
| [maintainLayout] | <code>boolean</code> | Maintain (as best as possible) the original physical layout of the text. The default is to undo physical layout (columns, hyphenation, etc.) and output the text in reading order. |
| [noDiagonalText] | <code>boolean</code> | Discard diagonal text. |
| [noPageBreaks] | <code>boolean</code> | Do not insert page breaks (form feed characters) between pages. |
| [outputEncoding] | <code>string</code> | Sets the encoding to use for text output. This defaults to `UTF-8`. |
| [ownerPassword] | <code>string</code> | Owner password (for encrypted files). |
| [printVersionInfo] | <code>boolean</code> | Print copyright and version information. |
| [quiet] | <code>boolean</code> | Do not print any messages or errors. |
| [rawLayout] | <code>boolean</code> | Keep the text in content stream order. This is a hack which often undoes column formatting, etc. Use of raw mode is no longer recommended. |
| [userPassword] | <code>string</code> | User password (for encrypted files). |

<a name="PdfUniteOptions"></a>

## PdfUniteOptions
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [printVersionInfo] | <code>boolean</code> | Print copyright and version information. |

