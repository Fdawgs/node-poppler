const fs = require('fs');
const { Poppler } = require('./index');

const file = `${__dirname}/../test_pdfs/pdf_1.3_NHS_Constitution.pdf`;

describe('pdfToHtml function', () => {
	test('Should convert PDF file to HTML file', async () => {
		const poppler = new Poppler();

		await poppler.pdfToHtml(undefined, file)
			.then((res) => {
				expect(typeof res).toBe('string');
				expect(fs.existsSync(`${__dirname}/../test_pdfs/pdf_1.3_NHS_Constitution.html`)).toBe(true);
			});
	});
});
