# node-poppler

[![GitHub Release](https://img.shields.io/github/release/Fdawgs/node-poppler.svg)](https://github.com/Fdawgs/node-poppler/releases/latest/) [![npm version](https://img.shields.io/npm/v/node-poppler)](https://www.npmjs.com/package/node-poppler)
[![Build Status](https://travis-ci.org/Fdawgs/node-poppler.svg?branch=master)](https://travis-ci.org/Fdawgs/node-poppler) [![Coverage Status](https://coveralls.io/repos/github/Fdawgs/node-poppler/badge.svg?branch=master)](https://coveralls.io/github/Fdawgs/node-poppler?branch=master) [![Dependabot Status](https://api.dependabot.com/badges/status?host=github&identifier=214626138)](https://dependabot.com) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# Intro

The node-poppler module was created out of a need for a PDF-to-HTML conversion tool at [Yeovil District Hospital NHSFT](https://yeovilhospital.co.uk/) to convert clinical documents to HTML.
This allows the documents to be dispatched electronically via the [NHS MESH system](https://digital.nhs.uk/services/message-exchange-for-social-care-and-health-mesh) to other NHS bodies.

There are a number of other Poppler wrapper modules available but the majority are no longer maintained or did not provide full interfacing with the Poppler binaries (i.e. only provided an interface to the PDF-to-Cairo binary but not to HTML).

## What is Poppler?

[Poppler](https://poppler.freedesktop.org/) is an open-source software utility library for rendering PDF documents; poppler-utils are a collection of binaries built on Poppler for manipulating, extracting from, and converting PDF documents to a variety of formats including HTML, PNG, JPEG, TIFF, PDF, PS, EPS, SVG, BMP, and TXT.

# Installation

Install using [`yarn`](https://yarnpkg.com/en/package/node-poppler):

```bash
yarn add node-poppler
```

Or [`npm`](https://www.npmjs.com/package/node-poppler):

```bash
npm install node-poppler
```

node-poppler's test scripts use yarn commands.

# API

[API Documentation can be found here](https://github.com/Fdawgs/node-poppler/blob/master/API.md)

# Example uses

## poppler.pdfToCairo

`options` object requires atleast one of the following to be set: `jpegFile`; `pdfFile`; `pngFile`; `psFile`; `svgFile`; `tiffFile`.

Example of calling poppler.pdfToCairo with a promise:

```js
const { Poppler } = require('node-poppler');

const file = 'test_document.pdf';
const poppler = new Poppler();
const options = {
  firstPageToConvert: 1,
  lastPageToConvert: 2,
  pngFile: true
};

await poppler.pdfToCairo(options, file).then((res) => {
  console.log(res);
});
```

## poppler.pdfToHtml

Every field of the `options` object is entirely optional.

Example of calling poppler.pdfToHtml with a promise:

```js
const { Poppler } = require('node-poppler');

const file = 'test_document.pdf';
const poppler = new Poppler();
const options = {
  firstPageToConvert: 1,
  lastPageToConvert: 2
};

await poppler.pdfToHtml(options, file).then((res) => {
  console.log(res);
});
```

## poppler.pdfToText

Every field of the `options` object is entirely optional.

Example of calling poppler.pdfToText with a promise:

```js
const { Poppler } = require('node-poppler');

const file = 'test_document.pdf';
const poppler = new Poppler();
const options = {
  firstPageToConvert: 1,
  lastPageToConvert: 2
};

await poppler.pdfToText(options, file).then((res) => {
  console.log(res);
});
```

# License

`node-poppler` is licensed under the [MIT](https://github.com/Fdawgs/node-poppler/blob/master/LICENSE) license.
