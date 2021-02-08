# node-poppler

[![GitHub Release](https://img.shields.io/github/release/Fdawgs/node-poppler.svg)](https://github.com/Fdawgs/node-poppler/releases/latest/)
[![npm version](https://img.shields.io/npm/v/node-poppler)](https://www.npmjs.com/package/node-poppler)
![Build Status](https://github.com/Fdawgs/node-poppler/workflows/CI/badge.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/Fdawgs/node-poppler/badge.svg?branch=master)](https://coveralls.io/github/Fdawgs/node-poppler?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/Fdawgs/node-poppler/badge.svg)](https://snyk.io/test/github/Fdawgs/node-poppler)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)

> Asynchronous node.js wrapper for the Poppler PDF rendering library

## Intro

The node-poppler module was created out of a need for a PDF-to-HTML conversion module at [Yeovil District Hospital NHS Foundation Trust](https://yeovilhospital.co.uk/) to convert clinical documents in PDF format to HTML.

## Installation

Install using [`npm`](https://www.npmjs.com/package/node-poppler):

```bash
npm install node-poppler
```

Or [`yarn`](https://yarnpkg.com/en/package/node-poppler):

```bash
yarn add node-poppler
```

node-poppler's test scripts use npm commands.

### Linux and macOS/Darwin Support

Windows and macOS/Darwin binaries are provided with this repository.
For Linux users, you will need to download the `poppler-data` and `poppler-utils` binaries separately.

An example of downloading the binaries on a Debian system:

```
sudo apt-get install poppler-data
sudo apt-get install poppler-utils
```

If you do not wish to use the included macOS binaries, you can download the latest versions with [Homebrew](https://brew.sh/):

```
brew install poppler
```

Once they have been installed, you will need to pass the `poppler-utils` installation directory in as parameters to an instance of the Poppler class:

```js
const { Poppler } = require("node-poppler");
const poppler = new Poppler("./usr/bin");
```

## API

```js
const { Poppler } = require("node-poppler");
```

[**API Documentation can be found here**](https://github.com/Fdawgs/node-poppler/blob/master/API.md)

## Examples

### poppler.pdfToCairo

Example of an `async` `await` call to poppler.pdfToCairo, to convert only the first and second page of a PDF file to PNG:

```js
const { Poppler } = require("node-poppler");

const file = "test_document.pdf";
const poppler = new Poppler();
const options = {
	firstPageToConvert: 1,
	lastPageToConvert: 2,
	pngFile: true,
};
const outputFile = `test_document.png`;

const res = await poppler.pdfToCairo(file, outputFile, options);
console.log(res);
```

### poppler.pdfToHtml

Example of calling poppler.pdfToHtml with a promise chain:

```js
const { Poppler } = require("node-poppler");

const file = "test_document.pdf";
const poppler = new Poppler();
const options = {
	firstPageToConvert: 1,
	lastPageToConvert: 2,
};

poppler.pdfToHtml(file, options).then((res) => {
	console.log(res);
});
```

### poppler.pdfToText

Example of calling poppler.pdfToText with a promise chain:

```js
const { Poppler } = require("node-poppler");

const file = "test_document.pdf";
const poppler = new Poppler();
const options = {
	firstPageToConvert: 1,
	lastPageToConvert: 2,
};

poppler.pdfToText(file, options).then((res) => {
	console.log(res);
});
```

## Contributing

Please see [CONTRIBUTING.md](https://github.com/Fdawgs/node-poppler/blob/master/CONTRIBUTING.md) for more details regarding contributing to this project.

## Acknowledgements

-   [**Albert Astals Cid**](https://github.com/albert-astals-cid-kdab) - [Poppler](https://poppler.freedesktop.org/) developer
-   [**Filipe Fernandes**](https://github.com/ocefpaf/) - [poppler-feedstock](https://github.com/conda-forge/poppler-feedstock) maintainer
-   [**Peter Williams**](https://github.com/pkgw/) - [poppler-feedstock](https://github.com/conda-forge/poppler-feedstock) maintainer
-   [**Owen Schwartz**](https://github.com/oschwartz10612) - [poppler-windows](https://github.com/oschwartz10612/poppler-windows) developer

## License

`node-poppler` is licensed under the [MIT](https://github.com/Fdawgs/node-poppler/blob/master/LICENSE) license.
