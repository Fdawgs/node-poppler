const fs = require('fs');
const { Poppler } = require('./index');

const testDirectory = `${__dirname}/../test_docs/`;
const file = `${testDirectory}pdf_1.3_NHS_Constitution.pdf`;

function clean() {
	if (fs.existsSync(`${testDirectory}pdf_1.3_NHS_Constitution.html`)) {
		fs.unlinkSync(`${testDirectory}pdf_1.3_NHS_Constitution.html`);
	}
	if (fs.existsSync(`${testDirectory}pdf_1.3_NHS_Constitution_ind.html`)) {
		fs.unlinkSync(`${testDirectory}pdf_1.3_NHS_Constitution_ind.html`);
	}
	if (fs.existsSync(`${testDirectory}pdf_1.3_NHS_Constitutions.html`)) {
		fs.unlinkSync(`${testDirectory}pdf_1.3_NHS_Constitutions.html`);
	}
	if (fs.existsSync(`${testDirectory}pdf_1.3_NHS_Constitutions.svg`)) {
		fs.unlinkSync(`${testDirectory}pdf_1.3_NHS_Constitutions.svg`);
	}
}

describe('pdfToHtml function', () => {
	afterAll(() => {
		clean();
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
			firstPageToPrint: 1,
			lastPageToPrint: 2
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
			firstPageToPrint: 'test',
			lastPageToPrint: 'test'
		};

		expect.assertions(1);
		await poppler.pdfToHtml(options, file)
			.catch((err) => {
				expect(err.message).toEqual('Invalid value type provided for option \'firstPageToPrint\', expected number but recieved string');
			});
	});

	test('Should return an Error object if invalid option is passed to function', async () => {
		const poppler = new Poppler();
		const options = {
			middlePageToPrint: 'test'
		};

		expect.assertions(1);
		await poppler.pdfToHtml(options, file)
			.catch((err) => {
				expect(err.message).toEqual('Invalid option provided \'middlePageToPrint\'');
			});
	});
});

describe('pdfToCairo function', () => {
	afterAll(() => {
		clean();
	});

	test('Should convert PDF file to SVG file', async () => {
		const poppler = new Poppler();
		const options = {
			svgFile: true
		};
		const outPutFile = `${__dirname}/../test_docs/pdf_1.3_NHS_Constitution.svg`;

		await poppler.pdfToCairo(options, file, outPutFile)
			.then((res) => {
				expect(typeof res).toBe('string');
				expect(fs.existsSync(`${__dirname}/../test_docs/pdf_1.3_NHS_Constitution.svg`)).toBe(true);
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
