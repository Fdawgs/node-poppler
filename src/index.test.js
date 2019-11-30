const fs = require('fs');
const path = require('path');
const { Poppler } = require('./index');

const testDirectory = `${__dirname}/../test_docs/`;
const file = `${testDirectory}pdf_1.3_NHS_Constitution.pdf`;

function clean() {
	return new Promise((resolve) => {
		if (fs.existsSync(`${testDirectory}pdf_1.3_NHS_Constitution.html`)) {
			fs.unlinkSync(`${testDirectory}pdf_1.3_NHS_Constitution.html`);
		}
		if (fs.existsSync(`${testDirectory}pdf_1.3_NHS_Constitution_ind.html`)) {
			fs.unlinkSync(`${testDirectory}pdf_1.3_NHS_Constitution_ind.html`);
		}
		if (fs.existsSync(`${testDirectory}pdf_1.3_NHS_Constitutions.html`)) {
			fs.unlinkSync(`${testDirectory}pdf_1.3_NHS_Constitutions.html`);
		}
		if (fs.existsSync(`${testDirectory}pdf_1.3_NHS_Constitution.svg`)) {
			fs.unlinkSync(`${testDirectory}pdf_1.3_NHS_Constitution.svg`);
		}
		if (fs.existsSync(`${testDirectory}pdf_1.3_NHS_Constitution.txt`)) {
			fs.unlinkSync(`${testDirectory}pdf_1.3_NHS_Constitution.txt`);
		}

		resolve('done');
	});
}

describe('Constructor', () => {
	afterAll(async () => {
		await clean();
	});

	test('Should convert PDF file to SVG file with binary path set', async () => {
		const testPath = path.join(
			__dirname,
			'lib',
			'win32',
			'poppler-0.68.0',
			'bin'
		);
		const poppler = new Poppler(testPath);
		const options = {
			svgFile: true
		};
		const outPutFile = `${testDirectory}pdf_1.3_NHS_Constitution.svg`;

		await poppler.pdfToCairo(options, file, outPutFile)
			.then((res) => {
				expect(typeof res).toBe('string');
				expect(fs.existsSync(`${testDirectory}pdf_1.3_NHS_Constitution.svg`)).toBe(true);
			});
	});
});

describe('pdfToCairo function', () => {
	afterAll(async () => {
		await clean();
	});

	test('Should convert PDF file to SVG file', async () => {
		const poppler = new Poppler();
		const options = {
			svgFile: true
		};
		const outPutFile = `${testDirectory}pdf_1.3_NHS_Constitution.svg`;

		await poppler.pdfToCairo(options, file, outPutFile)
			.then((res) => {
				expect(typeof res).toBe('string');
				expect(fs.existsSync(`${testDirectory}pdf_1.3_NHS_Constitution.svg`)).toBe(true);
			});
	});

	test('Should accept options and only process 2 pages of PDF file', async () => {
		const poppler = new Poppler();
		const options = {
			firstPageToConvert: 1,
			lastPageToConvert: 2,
			svgFile: true
		};

		await poppler.pdfToCairo(options, file)
			.then((res) => {
				expect(typeof res).toBe('string');
				expect(fs.existsSync(`${testDirectory}pdf_1.3_NHS_Constitution.svg`)).toBe(true);
			});
	});

	test('Should return an Error object if file passed not PDF format', async () => {
		const poppler = new Poppler();
		const testTxtFile = `${testDirectory}test.txt`;

		expect.assertions(1);
		await poppler.pdfToCairo(undefined, testTxtFile)
			.catch((err) => {
				expect(err.message.substring(0, 15)).toBe('Command failed:');
			});
	});

	test('Should return an Error object if no format option is passed to function', async () => {
		const poppler = new Poppler();

		expect.assertions(1);
		await poppler.pdfToCairo(undefined, file)
			.catch((err) => {
				expect(err.message.substring(0, 15)).toBe('Command failed:');
			});
	});

	test('Should return an Error object if invalid value types provided for an option are passed to function', async () => {
		const poppler = new Poppler();
		const options = {
			pdfFile: 'test'
		};

		expect.assertions(1);
		await poppler.pdfToCairo(options, file)
			.catch((err) => {
				expect(err.message).toEqual('Invalid value type provided for option \'pdfFile\', expected boolean but recieved string');
			});
	});

	test('Should return an Error object if invalid option is passed to function', async () => {
		const poppler = new Poppler();
		const options = {
			wordFile: 'test'
		};

		expect.assertions(1);
		await poppler.pdfToCairo(options, file)
			.catch((err) => {
				expect(err.message).toEqual('Invalid option provided \'wordFile\'');
			});
	});
});

describe('pdfToHtml function', () => {
	afterAll(async () => {
		await clean();
	});

	test('Should convert PDF file to HTML file', async () => {
		const poppler = new Poppler();

		await poppler.pdfToHtml(undefined, file)
			.then((res) => {
				expect(typeof res).toBe('string');
				expect(fs.existsSync(`${testDirectory}pdf_1.3_NHS_Constitution.html`)).toBe(true);
			});
	});

	test('Should accept options and only process 2 pages of PDF file', async () => {
		const poppler = new Poppler();
		const options = {
			firstPageToConvert: 1,
			lastPageToConvert: 2
		};

		await poppler.pdfToHtml(options, file)
			.then((res) => {
				expect(typeof res).toBe('string');
				expect(fs.existsSync(`${testDirectory}pdf_1.3_NHS_Constitution.html`)).toBe(true);
			});
	});

	test('Should return an Error object if file passed not PDF format', async () => {
		const poppler = new Poppler();
		const testTxtFile = `${testDirectory}test.txt`;

		expect.assertions(1);
		await poppler.pdfToHtml(undefined, testTxtFile)
			.catch((err) => {
				expect(err.message.substring(0, 15)).toBe('Command failed:');
			});
	});

	test('Should return an Error object if PDF file missing', async () => {
		const poppler = new Poppler();

		expect.assertions(1);
		await poppler.pdfToHtml(undefined, undefined)
			.catch((err) => {
				expect(err.message.substring(0, 15)).toBe('Command failed:');
			});
	});

	test('Should return an Error object if invalid value types provided for an option are passed to function', async () => {
		const poppler = new Poppler();
		const options = {
			firstPageToConvert: 'test',
			lastPageToConvert: 'test'
		};

		expect.assertions(1);
		await poppler.pdfToHtml(options, file)
			.catch((err) => {
				expect(err.message).toEqual('Invalid value type provided for option \'firstPageToConvert\', expected number but recieved string');
			});
	});

	test('Should return an Error object if invalid option is passed to function', async () => {
		const poppler = new Poppler();
		const options = {
			middlePageToConvert: 'test'
		};

		expect.assertions(1);
		await poppler.pdfToHtml(options, file)
			.catch((err) => {
				expect(err.message).toEqual('Invalid option provided \'middlePageToConvert\'');
			});
	});
});

describe('pdfToText function', () => {
	afterAll(async () => {
		await clean();
	});

	test('Should convert PDF file to Text file', async () => {
		const poppler = new Poppler();
		const outPutFile = `${testDirectory}pdf_1.3_NHS_Constitution.txt`;

		await poppler.pdfToText(undefined, file, outPutFile)
			.then((res) => {
				expect(typeof res).toBe('string');
				expect(fs.existsSync(`${testDirectory}pdf_1.3_NHS_Constitution.txt`)).toBe(true);
			});
	});

	test('Should accept options and only process 2 pages of PDF file', async () => {
		const poppler = new Poppler();
		const options = {
			firstPageToConvert: 1,
			lastPageToConvert: 2
		};

		await poppler.pdfToText(options, file)
			.then((res) => {
				expect(typeof res).toBe('string');
				expect(fs.existsSync(`${testDirectory}pdf_1.3_NHS_Constitution.txt`)).toBe(true);
			});
	});

	test('Should return an Error object if file passed not PDF format', async () => {
		const poppler = new Poppler();
		const testTxtFile = `${testDirectory}test.txt`;

		expect.assertions(1);
		await poppler.pdfToText(undefined, testTxtFile)
			.catch((err) => {
				expect(err.message.substring(0, 15)).toBe('Command failed:');
			});
	});

	test('Should return an Error object if PDF file missing', async () => {
		const poppler = new Poppler();

		expect.assertions(1);
		await poppler.pdfToText(undefined, undefined)
			.catch((err) => {
				expect(err.message.substring(0, 15)).toBe('Command failed:');
			});
	});

	test('Should return an Error object if invalid value types provided for an option are passed to function', async () => {
		const poppler = new Poppler();
		const options = {
			firstPageToConvert: 'test',
			lastPageToConvert: 'test'
		};

		expect.assertions(1);
		await poppler.pdfToText(options, file)
			.catch((err) => {
				expect(err.message).toEqual('Invalid value type provided for option \'firstPageToConvert\', expected number but recieved string');
			});
	});

	test('Should return an Error object if invalid option is passed to function', async () => {
		const poppler = new Poppler();
		const options = {
			middlePageToConvert: 'test'
		};

		expect.assertions(1);
		await poppler.pdfToText(options, file)
			.catch((err) => {
				expect(err.message).toEqual('Invalid option provided \'middlePageToConvert\'');
			});
	});
});
