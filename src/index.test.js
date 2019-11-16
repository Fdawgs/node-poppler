const fs = require('fs');
const { Poppler } = require('./index');

const file = `${__dirname}/../test_pdfs/pdf_1.3_NHS_Constitution.pdf`;

describe('pdfToHtml function', () => {
	afterEach(async () => {
		if (fs.existsSync(`${__dirname}/../test_pdfs/pdf_1.3_NHS_Constitution.html`)) {
			fs.unlinkSync(`${__dirname}/../test_pdfs/pdf_1.3_NHS_Constitution.html`);
		}
		if (fs.existsSync(`${__dirname}/../test_pdfs/pdf_1.3_NHS_Constitution_ind.html`)) {
			fs.unlinkSync(`${__dirname}/../test_pdfs/pdf_1.3_NHS_Constitution_ind.html`);
		}
		if (fs.existsSync(`${__dirname}/../test_pdfs/pdf_1.3_NHS_Constitutions.html`)) {
			fs.unlinkSync(`${__dirname}/../test_pdfs/pdf_1.3_NHS_Constitutions.html`);
		}
	});

	test('Should convert PDF file to HTML file', async () => {
		const poppler = new Poppler();

		await poppler.pdfToHtml(undefined, file)
			.then((res) => {
				expect(typeof res).toBe('string');
				expect(fs.existsSync(`${__dirname}/../test_pdfs/pdf_1.3_NHS_Constitution.html`)).toBe(true);
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
				expect(fs.existsSync(`${__dirname}/../test_pdfs/pdf_1.3_NHS_Constitution.html`)).toBe(true);
			});
	});

	test('Should return an Error object if file passed not PDF format', async () => {
		const poppler = new Poppler();
		const testTxtFile = `${__dirname}/../test_pdfs/test.txt`;

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
