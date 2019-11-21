node-poppler
============
[![GitHub Release](https://img.shields.io/github/release/Fdawgs/node-poppler.svg)](https://github.com/Fdawgs/node-poppler/releases/latest/) [![Build Status](https://travis-ci.org/Fdawgs/node-poppler.svg?branch=master)](https://travis-ci.org/Fdawgs/node-poppler) [![Coverage Status](https://coveralls.io/repos/github/Fdawgs/node-poppler/badge.svg?branch=master)](https://coveralls.io/github/Fdawgs/node-poppler?branch=master) [![Greenkeeper badge](https://badges.greenkeeper.io/Fdawgs/node-poppler.svg)](https://greenkeeper.io/)

# Intro
The node-poppler module was created out of a need for a PDF-to-HTML conversion tool at Yeovil District Hospital NHSFT to convert clinical documents to HTML.
This allows the documents to be dispatched electronically via the NHS MESH system to other NHS bodies.

There are a number of other Poppler wrapped modules available but the majority are no longer maintained or did not provide full interfacing with the Poppler binaries (i.e. only provided an interface to the PDF-to-Cairo binary but not to HTML).

## What is Poppler?
Poppler is an open-source software utility library for rendering PDF documents; poppler-utils, are a collection of binaries built on Poppler for manipulating, extracting from, and converting PDF documents to a variety of formats including HTML/PNG/JPEG/TIFF/PDF/PS/EPS/SVG/BMP and plain text.

# Install

`npm install node-poppler`

# API

## constructor

## poppler.pdfToHtml
`Poppler.pdfToHtml(options?: any, file: string): Promise<any>`

Every field of the `options` object is entirely optional.

Example of calling poppler.pdfToHtml with a promise:

```js
const { Poppler } = require('node-poppler');

const file = 'test_document.pdf';
const poppler = new Poppler();
const options = {
	firstPageToPrint: 1,
	lastPageToPrint: 2
};

await poppler.pdfToHtml(options, file)
	.then((res) => {
		console.log(res);
	});
```

## poppler.pdfToCairo
`Poppler.pdfToCairo(options: any, file: string, outputFile?: string): Promise<any>`

`options` object requires any of the following to be set: `jpegFile`; `pdfFile`; `pngFile`; `psFile`; `svgFile`; `tiffFile`.


Example of calling poppler.pdfToHtml with a promise:

```js
const { Poppler } = require('node-poppler');

const file = 'test_document.pdf';
const poppler = new Poppler();
const options = {
	firstPageToPrint: 1,
	lastPageToPrint: 2
};

await poppler.pdfToHtml(options, file)
	.then((res) => {
		console.log(res);
	});
```


# License
`node-poppler` is licensed under the [MIT](https://github.com/Fdawgs/node-poppler/blob/master/LICENSE) license.