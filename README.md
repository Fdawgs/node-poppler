node-poppler
============
[![GitHub Release](https://img.shields.io/github/release/Fdawgs/node-poppler.svg)](https://github.com/Fdawgs/node-poppler/releases/latest/) [![Build Status](https://travis-ci.org/Fdawgs/node-poppler.svg?branch=master)](https://travis-ci.org/Fdawgs/node-poppler) [![Coverage Status](https://coveralls.io/repos/github/Fdawgs/node-poppler/badge.svg?branch=master)](https://coveralls.io/github/Fdawgs/node-poppler?branch=master) [![Greenkeeper badge](https://badges.greenkeeper.io/Fdawgs/node-poppler.svg)](https://greenkeeper.io/)

# What is Poppler?
Poppler is an open-source software utility library for rendering PDF documents; poppler-utils, are a collection of binaries built on Poppler for manipulating, extracting from, and converting PDF documents to a variety of formats including HTML/PNG/JPEG/TIFF/PDF/PS/EPS/SVG/BMP and plain text.

# Usage
``
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
``

# License
`node-poppler` is licensed under the [MIT](https://github.com/Fdawgs/node-poppler/blob/master/LICENSE) license.