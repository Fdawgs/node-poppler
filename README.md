# node-poppler

[![GitHub release](https://img.shields.io/github/v/release/Fdawgs/node-poppler)](https://github.com/Fdawgs/node-poppler/releases/latest)
[![npm version](https://img.shields.io/npm/v/node-poppler)](https://www.npmjs.com/package/node-poppler)
[![CI](https://github.com/Fdawgs/node-poppler/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/Fdawgs/node-poppler/actions/workflows/ci.yml)
[![Coverage status](https://coveralls.io/repos/github/Fdawgs/node-poppler/badge.svg?branch=main)](https://coveralls.io/github/Fdawgs/node-poppler?branch=main)
[![code style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4?style=flat)](https://github.com/prettier/prettier)
[![OSSF Scorecard](https://api.scorecard.dev/projects/github.com/Fdawgs/node-poppler/badge)](https://scorecard.dev/viewer/?uri=github.com/Fdawgs/node-poppler)

> Asynchronous Node.js wrapper for the Poppler PDF rendering utilities

## Overview

[Poppler](https://poppler.freedesktop.org) is a PDF rendering library that also includes a collection of utilities, which provide functionality for manipulating PDF documents and extracting data from them, including converting PDF files to HTML, TXT, or PostScript.

The `node-poppler` module provides an asynchronous Node.js wrapper around these utilities for easier use.

## Installation

Install using `npm`:

```sh
npm i node-poppler
```

### Linux and macOS/Darwin support

64-bit Windows binaries are provided via an optional dependency on the [`node-poppler-win32`](https://www.npmjs.com/package/node-poppler-win32) package.
For Linux and macOS users, the `poppler-data` package and `poppler-utils` binaries will need to be installed separately.

An example of downloading the binaries on a Debian system:

```sh
sudo apt-get install poppler-data poppler-utils
```

For macOS users, the binaries can be installed with [Homebrew](https://brew.sh):

```sh
brew install poppler
```

## Example usage

Please refer to the [JSDoc comments in the source code](./src/index.js) or the [generated type definitions](https://www.npmjs.com/package/node-poppler?activeTab=code) for information on the available options.

### poppler.pdfToCairo

Example of an `async`/`await` call to `poppler.pdfToCairo()` to convert the first two pages of a PDF file to PNG using ESM syntax:

```js
import { Poppler } from "node-poppler";

const file = "test_document.pdf";
const poppler = new Poppler();
const options = {
	firstPageToConvert: 1,
	lastPageToConvert: 2,
	pngFile: true,
};
const outputFile = "test_document";

const res = await poppler.pdfToCairo(file, outputFile, options);
console.log(res);
```

Example of an `async`/`await` call to `poppler.pdfToCairo()` to convert the first page of a PDF file to a new PDF file via stdout using ESM syntax:

```js
import { writeFile } from "node:fs/promises";
import { Poppler } from "node-poppler";

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

Example of calling `poppler.pdfToHtml()` with a promise chain using CJS syntax:

```js
"use strict";

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

Example of calling `poppler.pdfToHtml()` with a promise chain using CJS syntax and a `Buffer` as input:

```js
"use strict";

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

Example of calling `poppler.pdfToText()` with a promise chain using CJS syntax:

```js
"use strict";

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

- [**Albert Astals Cid**](https://github.com/albert-astals-cid-kdab) - [Poppler](https://poppler.freedesktop.org) developer

## License

`node-poppler` is licensed under the [MIT](./LICENSE) license.
