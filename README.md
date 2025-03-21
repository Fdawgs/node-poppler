# node-poppler

[![GitHub release](https://img.shields.io/github/release/Fdawgs/node-poppler.svg)](https://github.com/Fdawgs/node-poppler/releases/latest/)
[![npm version](https://img.shields.io/npm/v/node-poppler)](https://npmjs.com/package/node-poppler)
[![CI](https://github.com/Fdawgs/node-poppler/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/Fdawgs/node-poppler/actions/workflows/ci.yml)
[![Coverage status](https://coveralls.io/repos/github/Fdawgs/node-poppler/badge.svg?branch=main)](https://coveralls.io/github/Fdawgs/node-poppler?branch=main)
[![code style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)

> Asynchronous Node.js wrapper for the Poppler PDF rendering library

## Overview

[Poppler](https://poppler.freedesktop.org/) is a PDF rendering library that also includes a collection of utility binaries, which allows for the manipulation and extraction of data from PDF documents such as converting PDF files to HTML, TXT, or PostScript.

The `node-poppler` module provides an asynchronous Node.js wrapper around said utility binaries for easier use.

## Installation

Install using `npm`:

```bash
npm i node-poppler
```

### Linux and macOS/Darwin support

Windows binaries are provided with this repository.
For Linux and Mac users, the `poppler-data` and `poppler-utils` binaries binary will need to be installed separately.

An example of downloading the binaries on a Debian system:

```
sudo apt-get install poppler-data poppler-utils
```

For macOS users, the binaries can be installed with [Homebrew](https://brew.sh/):

```
brew install poppler
```

## API

API documentation can be found [here](https://github.com/Fdawgs/node-poppler/blob/main/API.md).

## Example usage

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

Example of an `async` `await` call to `poppler.pdfToCairo()`, to convert only the first page of a PDF file to a new
PDF file using stdout:

```js
const { writeFile } = require("node:fs/promises");
const { Poppler } = require("node-poppler");

const file = "test_document.pdf";
const poppler = new Poppler();
const options = {
	lastPageToConvert: 1,
	pdfFile: true,
};

const res = await poppler.pdfToCairo(file, undefined, options);
// pdfToCairo writes to stdout using binary encoding if pdfFile or singleFile options are used
await writeFile("new_file.pdf", res, { encoding: "binary", flush: true });
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

poppler
	.pdfToHtml(file, undefined, options)
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.error(err);
		throw err;
	});
```

Example of calling `poppler.pdfToHtml()` with a promise chain, providing a Buffer as an input:

```js
const { readFileSync } = require("node:fs");
const { Poppler } = require("node-poppler");

const file = readFileSync("test_document.pdf");
const poppler = new Poppler();
const options = {
	firstPageToConvert: 1,
	lastPageToConvert: 2,
};

poppler
	.pdfToHtml(file, "tester.html", options)
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.error(err);
		throw err;
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
const outputFile = "test_document.txt";

poppler
	.pdfToText(file, outputFile, options)
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.error(err);
		throw err;
	});
```

## Contributing

Contributions are welcome, and any help is greatly appreciated!

See [the contributing guide](https://github.com/Fdawgs/.github/blob/main/CONTRIBUTING.md) for details on how to get started.
Please adhere to this project's [Code of Conduct](https://github.com/Fdawgs/.github/blob/main/CODE_OF_CONDUCT.md) when contributing.

## Acknowledgements

- [**Albert Astals Cid**](https://github.com/albert-astals-cid-kdab) - [Poppler](https://poppler.freedesktop.org/) developer
- [**Filipe Fernandes**](https://github.com/ocefpaf/) - [poppler-feedstock](https://github.com/conda-forge/poppler-feedstock) maintainer
- [**Peter Williams**](https://github.com/pkgw/) - [poppler-feedstock](https://github.com/conda-forge/poppler-feedstock) maintainer
- [**Owen Schwartz**](https://github.com/oschwartz10612) - [poppler-windows](https://github.com/oschwartz10612/poppler-windows) developer
- [**Uwe Korn**](https://github.com/xhochy/) - [poppler-feedstock](https://github.com/conda-forge/poppler-feedstock) maintainer
- [**Xylar Asay-Davis**](https://github.com/xylar/) - [poppler-feedstock](https://github.com/conda-forge/poppler-feedstock) maintainer

## License

`node-poppler` is licensed under the [MIT](./LICENSE) license.
