const fs = require('fs');
const glob = require('glob');
const path = require('path');
const { Poppler } = require('./index');

const testDirectory = `${__dirname}/../test_docs/`;
const file = `${testDirectory}pdf_1.3_NHS_Constitution.pdf`;

function clean() {
	return new Promise((resolve) => {
		const files = glob.GlobSync(
			`${testDirectory}!(test.txt|pdf_1.3_NHS_Constitution.pdf|pdf_1.3_NHS_Constitution_attached_detach.pdf|pdf_1.7_NHS_Constitution_Handbook.pdf)`
		).found;
		files.forEach((foundFile) => {
			fs.unlinkSync(foundFile);
		});
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
			'poppler-0.84.0',
			'bin'
		);
		const poppler = new Poppler(testPath);
		const options = {
			svgFile: true
		};
		const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution.svg`;

		await poppler.pdfToCairo(options, file, outputFile).then((res) => {
			expect(typeof res).toBe('string');
			expect(
				fs.existsSync(`${testDirectory}pdf_1.3_NHS_Constitution.svg`)
			).toBe(true);
		});
	});
});

describe('pdfAttach function', () => {
	afterAll(async () => {
		await clean();
	});

	test('Should attach file to PDF file', async () => {
		const poppler = new Poppler();
		const attachmentFile = `${testDirectory}test.txt`;
		const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution_attached.pdf`;

		await poppler
			.pdfAttach(undefined, file, attachmentFile, outputFile)
			.then((res) => {
				expect(typeof res).toBe('string');
				expect(
					fs.existsSync(
						`${testDirectory}pdf_1.3_NHS_Constitution_attached.pdf`
					)
				).toBe(true);
			});
	});

	test('Should return an Error object if file passed not PDF format', async () => {
		const poppler = new Poppler();
		const testTxtFile = `${testDirectory}test.txt`;

		expect.assertions(1);
		await poppler.pdfAttach(undefined, testTxtFile).catch((err) => {
			expect(err.message.substring(0, 15)).toBe('Command failed:');
		});
	});

	test('Should return an Error object if invalid value types provided for an option are passed to function', async () => {
		const poppler = new Poppler();
		const options = {
			replace: 'test'
		};

		expect.assertions(1);
		await poppler.pdfAttach(options, file).catch((err) => {
			expect(err.message).toEqual(
				"Invalid value type provided for option 'replace', expected boolean but recieved string"
			);
		});
	});

	test('Should return an Error object if invalid option is passed to function', async () => {
		const poppler = new Poppler();
		const options = {
			wordFile: 'test'
		};

		expect.assertions(1);
		await poppler.pdfAttach(options, file).catch((err) => {
			expect(err.message).toEqual("Invalid option provided 'wordFile'");
		});
	});
});

describe('pdfDetach function', () => {
	afterAll(async () => {
		await clean();
	});

	test('Should list embedded files', async () => {
		const poppler = new Poppler();
		const options = {
			listEmbedded: true
		};
		const attachmentFile = `${testDirectory}pdf_1.3_NHS_Constitution_attached_detach.pdf`;

		await poppler.pdfDetach(options, attachmentFile).then((res) => {
			expect(typeof res).toBe('string');
		});
	});

	test('Should return an Error object if file passed not PDF format', async () => {
		const poppler = new Poppler();
		const testTxtFile = `${testDirectory}test.txt`;

		expect.assertions(1);
		await poppler.pdfDetach(undefined, testTxtFile).catch((err) => {
			expect(err.message.substring(0, 15)).toBe('Command failed:');
		});
	});

	test('Should return an Error object if invalid value types provided for an option are passed to function', async () => {
		const poppler = new Poppler();
		const options = {
			listEmbedded: 'test'
		};

		expect.assertions(1);
		await poppler.pdfDetach(options, file).catch((err) => {
			expect(err.message).toEqual(
				"Invalid value type provided for option 'listEmbedded', expected boolean but recieved string"
			);
		});
	});

	test('Should return an Error object if invalid option is passed to function', async () => {
		const poppler = new Poppler();
		const options = {
			wordFile: 'test'
		};

		expect.assertions(1);
		await poppler.pdfDetach(options, file).catch((err) => {
			expect(err.message).toEqual("Invalid option provided 'wordFile'");
		});
	});
});

describe('pdfFonts function', () => {
	afterAll(async () => {
		await clean();
	});

	test('Should examine 3 pages of PDF file', async () => {
		const poppler = new Poppler();
		const options = {
			firstPageToExamine: 1,
			lastPageToExamine: 3
		};
		await poppler.pdfFonts(options, file).then((res) => {
			expect(typeof res).toBe('string');
		});
	});

	test('Should return an Error object if file passed not PDF format', async () => {
		const poppler = new Poppler();
		const testTxtFile = `${testDirectory}test.txt`;

		expect.assertions(1);
		await poppler.pdfFonts(undefined, testTxtFile).catch((err) => {
			expect(err.message.substring(0, 15)).toBe('Command failed:');
		});
	});

	test('Should return an Error object if invalid value types provided for an option are passed to function', async () => {
		const poppler = new Poppler();
		const options = {
			firstPageToExamine: 'test'
		};

		expect.assertions(1);
		await poppler.pdfFonts(options, file).catch((err) => {
			expect(err.message).toEqual(
				"Invalid value type provided for option 'firstPageToExamine', expected number but recieved string"
			);
		});
	});

	test('Should return an Error object if invalid option is passed to function', async () => {
		const poppler = new Poppler();
		const options = {
			wordFile: 'test'
		};

		expect.assertions(1);
		await poppler.pdfFonts(options, file).catch((err) => {
			expect(err.message).toEqual("Invalid option provided 'wordFile'");
		});
	});
});

describe('pdfImages function', () => {
	afterAll(async () => {
		await clean();
	});

	test('Should accept options and list all images in file', async () => {
		const poppler = new Poppler();
		const options = {
			pngFile: true
		};

		await poppler.pdfImages(options, file, `file_prefix`).then((res) => {
			expect(typeof res).toBe('string');
		});
	});

	test('Should return an Error object if file passed not PDF format', async () => {
		const poppler = new Poppler();
		const testTxtFile = `${testDirectory}test.txt`;

		expect.assertions(1);
		await poppler.pdfImages(undefined, testTxtFile).catch((err) => {
			expect(err.message.substring(0, 15)).toBe('Command failed:');
		});
	});

	test('Should return an Error object if PDF file missing', async () => {
		const poppler = new Poppler();

		expect.assertions(1);
		await poppler.pdfImages(undefined, undefined).catch((err) => {
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
		await poppler.pdfImages(options, undefined).catch((err) => {
			expect(err.message).toEqual(
				"Invalid value type provided for option 'firstPageToConvert', expected number but recieved string"
			);
		});
	});

	test('Should return an Error object if invalid option is passed to function', async () => {
		const poppler = new Poppler();
		const options = {
			middlePageToConvert: 'test'
		};

		expect.assertions(1);
		await poppler.pdfImages(options, undefined).catch((err) => {
			expect(err.message).toEqual(
				"Invalid option provided 'middlePageToConvert'"
			);
		});
	});
});

describe('pdfInfo function', () => {
	afterAll(async () => {
		await clean();
	});

	test('Should list info of PDF file', async () => {
		const poppler = new Poppler();
		const attachmentFile = `${testDirectory}pdf_1.3_NHS_Constitution_attached_detach.pdf`;

		await poppler.pdfInfo(undefined, attachmentFile).then((res) => {
			expect(typeof res).toBe('string');
		});
	});

	test('Should return an Error object if file passed not PDF format', async () => {
		const poppler = new Poppler();
		const testTxtFile = `${testDirectory}test.txt`;

		expect.assertions(1);
		await poppler.pdfInfo(undefined, testTxtFile).catch((err) => {
			expect(err.message.substring(0, 15)).toBe('Command failed:');
		});
	});

	test('Should return an Error object if invalid value types provided for an option are passed to function', async () => {
		const poppler = new Poppler();
		const options = {
			firstPageToConvert: 'test'
		};

		expect.assertions(1);
		await poppler.pdfInfo(options, file).catch((err) => {
			expect(err.message).toEqual(
				"Invalid value type provided for option 'firstPageToConvert', expected number but recieved string"
			);
		});
	});

	test('Should return an Error object if invalid option is passed to function', async () => {
		const poppler = new Poppler();
		const options = {
			wordFile: 'test'
		};

		expect.assertions(1);
		await poppler.pdfInfo(options, file).catch((err) => {
			expect(err.message).toEqual("Invalid option provided 'wordFile'");
		});
	});
});

describe('pdfSeparate function', () => {
	afterAll(async () => {
		await clean();
	});

	test('Should extract 3 pages from PDF file to new files', async () => {
		const poppler = new Poppler();
		const options = {
			firstPageToExtract: 1,
			lastPageToExtract: 3
		};
		const outputPattern = `${testDirectory}pdf_1.3_NHS_Constitution-extract-%d.pdf`;

		await poppler.pdfSeparate(options, file, outputPattern).then((res) => {
			expect(typeof res).toBe('string');
			expect(
				fs.existsSync(
					`${testDirectory}pdf_1.3_NHS_Constitution-extract-1.pdf`
				)
			).toBe(true);
			expect(
				fs.existsSync(
					`${testDirectory}pdf_1.3_NHS_Constitution-extract-2.pdf`
				)
			).toBe(true);
			expect(
				fs.existsSync(
					`${testDirectory}pdf_1.3_NHS_Constitution-extract-3.pdf`
				)
			).toBe(true);
		});
	});

	test('Should return an Error object if file passed not PDF format', async () => {
		const poppler = new Poppler();
		const testTxtFile = `${testDirectory}test.txt`;

		expect.assertions(1);
		await poppler.pdfSeparate(undefined, testTxtFile).catch((err) => {
			expect(err.message.substring(0, 15)).toBe('Command failed:');
		});
	});

	test('Should return an Error object if invalid value types provided for an option are passed to function', async () => {
		const poppler = new Poppler();
		const options = {
			firstPageToExtract: 'test'
		};

		expect.assertions(1);
		await poppler.pdfSeparate(options, file).catch((err) => {
			expect(err.message).toEqual(
				"Invalid value type provided for option 'firstPageToExtract', expected number but recieved string"
			);
		});
	});

	test('Should return an Error object if invalid option is passed to function', async () => {
		const poppler = new Poppler();
		const options = {
			wordFile: 'test'
		};

		expect.assertions(1);
		await poppler.pdfSeparate(options, file).catch((err) => {
			expect(err.message).toEqual("Invalid option provided 'wordFile'");
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
		const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution.svg`;

		await poppler.pdfToCairo(options, file, outputFile).then((res) => {
			expect(typeof res).toBe('string');
			expect(
				fs.existsSync(`${testDirectory}pdf_1.3_NHS_Constitution.svg`)
			).toBe(true);
		});
	});

	test('Should accept options and only process 2 pages of PDF file', async () => {
		const poppler = new Poppler();
		const options = {
			firstPageToConvert: 1,
			lastPageToConvert: 2,
			svgFile: true
		};
		const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution.svg`;

		await poppler.pdfToCairo(options, file, outputFile).then((res) => {
			expect(typeof res).toBe('string');
			expect(
				fs.existsSync(`${testDirectory}pdf_1.3_NHS_Constitution.svg`)
			).toBe(true);
		});
	});

	test('Should return an Error object if file passed not PDF format', async () => {
		const poppler = new Poppler();
		const testTxtFile = `${testDirectory}test.txt`;

		expect.assertions(1);
		await poppler.pdfToCairo(undefined, testTxtFile).catch((err) => {
			expect(err.message.substring(0, 15)).toBe('Command failed:');
		});
	});

	test('Should return an Error object if no format option is passed to function', async () => {
		const poppler = new Poppler();

		expect.assertions(1);
		await poppler.pdfToCairo(undefined, file).catch((err) => {
			expect(err.message.substring(0, 15)).toBe('Command failed:');
		});
	});

	test('Should return an Error object if invalid value types provided for an option are passed to function', async () => {
		const poppler = new Poppler();
		const options = {
			pdfFile: 'test'
		};

		expect.assertions(1);
		await poppler.pdfToCairo(options, file).catch((err) => {
			expect(err.message).toEqual(
				"Invalid value type provided for option 'pdfFile', expected boolean but recieved string"
			);
		});
	});

	test('Should return an Error object if invalid option is passed to function', async () => {
		const poppler = new Poppler();
		const options = {
			wordFile: 'test'
		};

		expect.assertions(1);
		await poppler.pdfToCairo(options, file).catch((err) => {
			expect(err.message).toEqual("Invalid option provided 'wordFile'");
		});
	});
});

describe('pdfToHtml function', () => {
	afterAll(async () => {
		await clean();
	});

	test('Should convert PDF file to HTML file', async () => {
		const poppler = new Poppler();

		await poppler.pdfToHtml(undefined, file).then((res) => {
			expect(typeof res).toBe('string');
			expect(
				fs.existsSync(`${testDirectory}pdf_1.3_NHS_Constitution.html`)
			).toBe(true);
		});
	});

	test('Should accept options and only process 2 pages of PDF file', async () => {
		const poppler = new Poppler();
		const options = {
			firstPageToConvert: 1,
			lastPageToConvert: 2
		};

		await poppler.pdfToHtml(options, file).then((res) => {
			expect(typeof res).toBe('string');
			expect(
				fs.existsSync(`${testDirectory}pdf_1.3_NHS_Constitution.html`)
			).toBe(true);
		});
	});

	test('Should return an Error object if file passed not PDF format', async () => {
		const poppler = new Poppler();
		const testTxtFile = `${testDirectory}test.txt`;

		expect.assertions(1);
		await poppler.pdfToHtml(undefined, testTxtFile).catch((err) => {
			expect(err.message.substring(0, 15)).toBe('Command failed:');
		});
	});

	test('Should return an Error object if PDF file missing', async () => {
		const poppler = new Poppler();

		expect.assertions(1);
		await poppler.pdfToHtml(undefined, undefined).catch((err) => {
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
		await poppler.pdfToHtml(options, file).catch((err) => {
			expect(err.message).toEqual(
				"Invalid value type provided for option 'firstPageToConvert', expected number but recieved string"
			);
		});
	});

	test('Should return an Error object if invalid option is passed to function', async () => {
		const poppler = new Poppler();
		const options = {
			middlePageToConvert: 'test'
		};

		expect.assertions(1);
		await poppler.pdfToHtml(options, file).catch((err) => {
			expect(err.message).toEqual(
				"Invalid option provided 'middlePageToConvert'"
			);
		});
	});
});

describe('pdfToPpm function', () => {
	afterAll(async () => {
		await clean();
	});

	test('Should accept options and only process 1 page of PDF file', async () => {
		const poppler = new Poppler();
		const options = {
			firstPageToConvert: 1,
			lastPageToConvert: 1
		};

		await poppler
			.pdfToPpm(options, file, `${testDirectory}pdf_1.3_NHS_Constitution`)
			.then((res) => {
				expect(typeof res).toBe('string');
				expect(
					fs.existsSync(
						`${testDirectory}pdf_1.3_NHS_Constitution-01.ppm`
					)
				).toBe(true);
			});
	});

	test('Should return an Error object if file passed not PDF format', async () => {
		const poppler = new Poppler();
		const testTxtFile = `${testDirectory}test.txt`;

		expect.assertions(1);
		await poppler.pdfToPpm(undefined, testTxtFile).catch((err) => {
			expect(err.message.substring(0, 15)).toBe('Command failed:');
		});
	});

	test('Should return an Error object if PDF file missing', async () => {
		const poppler = new Poppler();

		expect.assertions(1);
		await poppler.pdfToPpm(undefined, undefined).catch((err) => {
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
		await poppler.pdfToPpm(options, undefined).catch((err) => {
			expect(err.message).toEqual(
				"Invalid value type provided for option 'firstPageToConvert', expected number but recieved string"
			);
		});
	});

	test('Should return an Error object if invalid option is passed to function', async () => {
		const poppler = new Poppler();
		const options = {
			middlePageToConvert: 'test'
		};

		expect.assertions(1);
		await poppler.pdfToPpm(options, undefined).catch((err) => {
			expect(err.message).toEqual(
				"Invalid option provided 'middlePageToConvert'"
			);
		});
	});
});

describe('pdfToPs function', () => {
	afterAll(async () => {
		await clean();
	});

	test('Should convert PDF file to PS file', async () => {
		const poppler = new Poppler();
		const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution.ps`;

		await poppler.pdfToPs(undefined, file, outputFile).then((res) => {
			expect(typeof res).toBe('string');
			expect(
				fs.existsSync(`${testDirectory}pdf_1.3_NHS_Constitution.ps`)
			).toBe(true);
		});
	});

	test('Should accept options and only process 2 pages of PDF file', async () => {
		const poppler = new Poppler();
		const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution.ps`;
		const options = {
			firstPageToConvert: 1,
			lastPageToConvert: 2
		};

		await poppler.pdfToPs(options, file, outputFile).then((res) => {
			expect(typeof res).toBe('string');
			expect(
				fs.existsSync(`${testDirectory}pdf_1.3_NHS_Constitution.ps`)
			).toBe(true);
		});
	});

	test('Should return an Error object if file passed not PDF format', async () => {
		const poppler = new Poppler();
		const testTxtFile = `${testDirectory}test.txt`;

		expect.assertions(1);
		await poppler.pdfToPs(undefined, testTxtFile).catch((err) => {
			expect(err.message.substring(0, 15)).toBe('Command failed:');
		});
	});

	test('Should return an Error object if PDF file missing', async () => {
		const poppler = new Poppler();

		expect.assertions(1);
		await poppler.pdfToPs(undefined, undefined).catch((err) => {
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
		await poppler.pdfToPs(options, file).catch((err) => {
			expect(err.message).toEqual(
				"Invalid value type provided for option 'firstPageToConvert', expected number but recieved string"
			);
		});
	});

	test('Should return an Error object if invalid option is passed to function', async () => {
		const poppler = new Poppler();
		const options = {
			middlePageToConvert: 'test'
		};

		expect.assertions(1);
		await poppler.pdfToPs(options, file).catch((err) => {
			expect(err.message).toEqual(
				"Invalid option provided 'middlePageToConvert'"
			);
		});
	});
});

describe('pdfToText function', () => {
	afterAll(async () => {
		await clean();
	});

	test('Should convert PDF file to Text file', async () => {
		const poppler = new Poppler();
		const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution.txt`;

		await poppler.pdfToText(undefined, file, outputFile).then((res) => {
			expect(typeof res).toBe('string');
			expect(
				fs.existsSync(`${testDirectory}pdf_1.3_NHS_Constitution.txt`)
			).toBe(true);
		});
	});

	test('Should accept options and only process 2 pages of PDF file', async () => {
		const poppler = new Poppler();
		const options = {
			firstPageToConvert: 1,
			lastPageToConvert: 2
		};

		await poppler.pdfToText(options, file).then((res) => {
			expect(typeof res).toBe('string');
			expect(
				fs.existsSync(`${testDirectory}pdf_1.3_NHS_Constitution.txt`)
			).toBe(true);
		});
	});

	test('Should return an Error object if file passed not PDF format', async () => {
		const poppler = new Poppler();
		const testTxtFile = `${testDirectory}test.txt`;

		expect.assertions(1);
		await poppler.pdfToText(undefined, testTxtFile).catch((err) => {
			expect(err.message.substring(0, 15)).toBe('Command failed:');
		});
	});

	test('Should return an Error object if PDF file missing', async () => {
		const poppler = new Poppler();

		expect.assertions(1);
		await poppler.pdfToText(undefined, undefined).catch((err) => {
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
		await poppler.pdfToText(options, file).catch((err) => {
			expect(err.message).toEqual(
				"Invalid value type provided for option 'firstPageToConvert', expected number but recieved string"
			);
		});
	});

	test('Should return an Error object if invalid option is passed to function', async () => {
		const poppler = new Poppler();
		const options = {
			middlePageToConvert: 'test'
		};

		expect.assertions(1);
		await poppler.pdfToText(options, file).catch((err) => {
			expect(err.message).toEqual(
				"Invalid option provided 'middlePageToConvert'"
			);
		});
	});
});

describe('pdfUnite function', () => {
	afterAll(async () => {
		await clean();
	});

	test('Should merge two separate PDF files into a new single PDF file', async () => {
		const poppler = new Poppler();
		const files = [
			file,
			`${testDirectory}pdf_1.7_NHS_Constitution_Handbook.pdf`
		];
		const outputFile = `${testDirectory}united.pdf`;
		await poppler.pdfUnite(undefined, files, outputFile).then((res) => {
			expect(typeof res).toBe('string');
			expect(fs.existsSync(`${testDirectory}united.pdf`)).toBe(true);
		});
	});

	test('Should return an Error object if a PDF file and non-PDF file are attempted to be merged', async () => {
		const poppler = new Poppler();
		const files = [
			`${testDirectory}test.txt`,
			`${testDirectory}pdf_1.7_NHS_Constitution_Handbook.pdf`
		];

		expect.assertions(1);
		await poppler.pdfUnite(undefined, files).catch((err) => {
			expect(err.message.substring(0, 15)).toBe('Command failed:');
		});
	});

	test('Should return an Error object if invalid value types provided for an option are passed to function', async () => {
		const poppler = new Poppler();
		const files = [
			file,
			`${testDirectory}pdf_1.7_NHS_Constitution_Handbook.pdf`
		];
		const options = {
			printVersionInfo: 'test'
		};

		expect.assertions(1);
		await poppler.pdfUnite(options, files).catch((err) => {
			expect(err.message).toEqual(
				"Invalid value type provided for option 'printVersionInfo', expected boolean but recieved string"
			);
		});
	});

	test('Should return an Error object if invalid option is passed to function', async () => {
		const poppler = new Poppler();
		const files = [
			file,
			`${testDirectory}pdf_1.7_NHS_Constitution_Handbook.pdf`
		];
		const options = {
			wordFile: 'test'
		};

		expect.assertions(1);
		await poppler.pdfUnite(options, files).catch((err) => {
			expect(err.message).toEqual("Invalid option provided 'wordFile'");
		});
	});
});
