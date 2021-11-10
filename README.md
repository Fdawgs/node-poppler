# node-poppler

[![GitHub Release](https://img.shields.io/github/release/Fdawgs/node-poppler.svg)](https://github.com/Fdawgs/node-poppler/releases/latest/)
[![npm version](https://img.shields.io/npm/v/node-poppler)](https://www.npmjs.com/package/node-poppler)
![Build Status](https://github.com/Fdawgs/node-poppler/workflows/CI/badge.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/Fdawgs/node-poppler/badge.svg?branch=master)](https://coveralls.io/github/Fdawgs/node-poppler?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/Fdawgs/node-poppler/badge.svg)](https://snyk.io/test/github/Fdawgs/node-poppler)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)

> Asynchronous node.js wrapper for the Poppler PDF rendering library

## Intro

[Poppler](https://poppler.freedesktop.org/) is a PDF rendering library that also includes a collection of utility binaries, which allows for the manipulation and extraction of data from PDF documents such as converting PDF files to HTML, TXT, or PostScript.

The `node-poppler` module provides an asynchronous node.js wrapper around said utility binaries for easier use.
It was created out of a need for a PDF-to-HTML conversion module at [Yeovil District Hospital NHS Foundation Trust](https://yeovilhospital.co.uk/) to convert clinical documents.

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

Windows binaries are provided with this repository.
For Linux users, you will need to download the `poppler-data` and `poppler-utils` binaries separately.

An example of downloading the binaries on a Debian system:

```
sudo apt-get install poppler-data
sudo apt-get install poppler-utils
```

For macOS users, you can download the latest versions with [Homebrew](https://brew.sh/):

```
brew install poppler
```

Once they have been installed, you will need to pass the `poppler-utils` installation directory as a parameter to an instance of the Poppler class:

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

Example of an `async` `await` call to `poppler.pdfToCairo()`, to convert only the first and second page of a PDF file to PNG:

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

Example of an `async` `await` call to `poppler.pdfToCairo()`, to convert only the first of a PDF file to a new
PDF file using stdout:

```js
const fs = require("fs");
const { Poppler } = require("node-poppler");

const file = "test_document.pdf";
const poppler = new Poppler();
const options = {
	lastPageToConvert: 1,
	pdfFile: true,
};

const res = await poppler.pdfToCairo(file, undefined, options);
// pdfToCairo writes to stdout using binary encoding if pdfFile or singleFile options are used
await fs.writeFile("new_file.pdf", res, { encoding: "binary" });
```

### poppler.pdfToHtml

Example of calling `poppler.pdfToHtml()` with a promise chain:

```js
const { Poppler } = require("node-poppler");

const file = "test_document.pdf";
const poppler = new Poppler();
const options = {
	firstPageToConvert: 1,
	lastPageToConvert: 2,
};

poppler.pdfToHtml(file, undefined, options).then((res) => {
	console.log(res);
});
```

Example of calling `poppler.pdfToHtml()` with a promise chain, providing a Buffer as an input:

```js
const fs = require("fs");
const { Poppler } = require("node-poppler");

const file = fs.readFileSync("test_document.pdf");
const poppler = new Poppler();
const options = {
	firstPageToConvert: 1,
	lastPageToConvert: 2,
};

poppler.pdfToHtml(file, "tester.html", options).then((res) => {
	console.log(res);
});
```

### poppler.pdfToText

Example of calling `poppler.pdfToText()` with a promise chain:

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

Contributions are welcome, and any help is greatly appreciated!

See [CONTRIBUTING.md](./CONTRIBUTING.md) for details on how to get started.
Please adhere to this project's [Code of Conduct](./CODE_OF_CONDUCT.md) when contributing.

## Acknowledgements

-   [**Albert Astals Cid**](https://github.com/albert-astals-cid-kdab) - [Poppler](https://poppler.freedesktop.org/) developer
-   [**Filipe Fernandes**](https://github.com/ocefpaf/) - [poppler-feedstock](https://github.com/conda-forge/poppler-feedstock) maintainer
-   [**Peter Williams**](https://github.com/pkgw/) - [poppler-feedstock](https://github.com/conda-forge/poppler-feedstock) maintainer
-   [**Owen Schwartz**](https://github.com/oschwartz10612) - [poppler-windows](https://github.com/oschwartz10612/poppler-windows) developer

## License

`node-poppler` is licensed under the [MIT](./LICENSE) license.
