const fs = require('fs');
const glob = require('glob');
const os = require('os');
const path = require('path');
const { Poppler } = require('./index');

const testDirectory = `${__dirname}/../test_docs/`;
const file = `${testDirectory}pdf_1.3_NHS_Constitution.pdf`;

/**
 * @description Removes leftover test files.
 * @returns {Promise<string>} 'done' on resolve.
 */
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
		const platform = os.platform();
		let testPath;

		switch (platform) {
			// Windows OS
			case 'win32':
			default:
				testPath = path.join(
					__dirname,
					'lib',
					'win32',
					'poppler-0.89.0',
					'bin'
				);
				break;

			// macOS
			case 'darwin':
				testPath = path.join(
					__dirname,
					'lib',
					'darwin',
					'poppler-0.89.0',
					'bin'
				);
				break;
		}

		const poppler = new Poppler(testPath);
		const options = {
			svgFile: true
		};
		const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution.svg`;

		const res = await poppler.pdfToCairo(options, file, outputFile);

		expect(typeof res).toBe('string');
		expect(
			fs.existsSync(`${testDirectory}pdf_1.3_NHS_Constitution.svg`)
		).toBe(true);
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

		const res = await poppler.pdfAttach(
			undefined,
			file,
			attachmentFile,
			outputFile
		);

		expect(typeof res).toBe('string');
		expect(
			fs.existsSync(
				`${testDirectory}pdf_1.3_NHS_Constitution_attached.pdf`
			)
		).toBe(true);
	});

	test('Should return an Error object if file passed not PDF format', async () => {
		const poppler = new Poppler();
		const testTxtFile = `${testDirectory}test.txt`;

		await poppler.pdfAttach(undefined, testTxtFile).catch((err) => {
			expect(err.message.substring(0, 15)).toBe('Command failed:');
		});
	});

	test('Should return an Error object if invalid value types provided for an option are passed to function', async () => {
		const poppler = new Poppler();
		const options = {
			replace: 'test'
		};

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

		const res = await poppler.pdfDetach(options, attachmentFile);

		expect(typeof res).toBe('string');
	});

	test('Should return an Error object if file passed not PDF format', async () => {
		const poppler = new Poppler();
		const testTxtFile = `${testDirectory}test.txt`;

		await poppler.pdfDetach(undefined, testTxtFile).catch((err) => {
			expect(err.message.substring(0, 15)).toBe('Command failed:');
		});
	});

	test('Should return an Error object if invalid value types provided for an option are passed to function', async () => {
		const poppler = new Poppler();
		const options = {
			listEmbedded: 'test'
		};

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
		const res = await poppler.pdfFonts(options, file);

		expect(typeof res).toBe('string');
	});

	test('Should return an Error object if file passed not PDF format', async () => {
		const poppler = new Poppler();
		const testTxtFile = `${testDirectory}test.txt`;

		await poppler.pdfFonts(undefined, testTxtFile).catch((err) => {
			expect(err.message.substring(0, 15)).toBe('Command failed:');
		});
	});

	test('Should return an Error object if invalid value types provided for an option are passed to function', async () => {
		const poppler = new Poppler();
		const options = {
			firstPageToExamine: 'test'
		};

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

		const res = await poppler.pdfImages(options, file, `file_prefix`);

		expect(typeof res).toBe('string');
	});

	test('Should return an Error object if file passed not PDF format', async () => {
		const poppler = new Poppler();
		const testTxtFile = `${testDirectory}test.txt`;

		await poppler.pdfImages(undefined, testTxtFile).catch((err) => {
			expect(err.message.substring(0, 15)).toBe('Command failed:');
		});
	});

	test('Should return an Error object if PDF file missing', async () => {
		const poppler = new Poppler();

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

		const res = await poppler.pdfInfo(undefined, attachmentFile);

		expect(typeof res).toBe('string');
	});

	test('Should return an Error object if file passed not PDF format', async () => {
		const poppler = new Poppler();
		const testTxtFile = `${testDirectory}test.txt`;

		await poppler.pdfInfo(undefined, testTxtFile).catch((err) => {
			expect(err.message.substring(0, 15)).toBe('Command failed:');
		});
	});

	test('Should return an Error object if invalid value types provided for an option are passed to function', async () => {
		const poppler = new Poppler();
		const options = {
			firstPageToConvert: 'test'
		};

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

		const res = await poppler.pdfSeparate(options, file, outputPattern);

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

	test('Should return an Error object if file passed not PDF format', async () => {
		const poppler = new Poppler();
		const testTxtFile = `${testDirectory}test.txt`;

		await poppler.pdfSeparate(undefined, testTxtFile).catch((err) => {
			expect(err.message.substring(0, 15)).toBe('Command failed:');
		});
	});

	test('Should return an Error object if invalid value types provided for an option are passed to function', async () => {
		const poppler = new Poppler();
		const options = {
			firstPageToExtract: 'test'
		};

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

		const res = await poppler.pdfToCairo(options, file, outputFile);

		expect(typeof res).toBe('string');
		expect(
			fs.existsSync(`${testDirectory}pdf_1.3_NHS_Constitution.svg`)
		).toBe(true);
	});

	test('Should accept options and only process 2 pages of PDF file', async () => {
		const poppler = new Poppler();
		const options = {
			firstPageToConvert: 1,
			lastPageToConvert: 2,
			svgFile: true
		};
		const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution.svg`;

		const res = await poppler.pdfToCairo(options, file, outputFile);

		expect(typeof res).toBe('string');
		expect(
			fs.existsSync(`${testDirectory}pdf_1.3_NHS_Constitution.svg`)
		).toBe(true);
	});

	test('Should return an Error object if file passed not PDF format', async () => {
		const poppler = new Poppler();
		const testTxtFile = `${testDirectory}test.txt`;

		await poppler.pdfToCairo(undefined, testTxtFile).catch((err) => {
			expect(err.message.substring(0, 15)).toBe('Command failed:');
		});
	});

	test('Should return an Error object if no format option is passed to function', async () => {
		const poppler = new Poppler();

		await poppler.pdfToCairo(undefined, file).catch((err) => {
			expect(err.message.substring(0, 15)).toBe('Command failed:');
		});
	});

	test('Should return an Error object if invalid value types provided for an option are passed to function', async () => {
		const poppler = new Poppler();
		const options = {
			pdfFile: 'test'
		};

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

		const res = await poppler.pdfToHtml(undefined, file);

		expect(typeof res).toBe('string');
		expect(
			fs.existsSync(`${testDirectory}pdf_1.3_NHS_Constitution.html`)
		).toBe(true);
	});

	test('Should accept options and only process 2 pages of PDF file', async () => {
		const poppler = new Poppler();
		const options = {
			firstPageToConvert: 1,
			lastPageToConvert: 2
		};

		const res = await poppler.pdfToHtml(options, file);

		expect(typeof res).toBe('string');
		expect(
			fs.existsSync(`${testDirectory}pdf_1.3_NHS_Constitution.html`)
		).toBe(true);
	});

	test('Should return an Error object if file passed not PDF format', async () => {
		const poppler = new Poppler();
		const testTxtFile = `${testDirectory}test.txt`;

		await poppler.pdfToHtml(undefined, testTxtFile).catch((err) => {
			expect(err.message.substring(0, 15)).toBe('Command failed:');
		});
	});

	test('Should return an Error object if PDF file missing', async () => {
		const poppler = new Poppler();

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

		const res = await poppler.pdfToPpm(
			options,
			file,
			`${testDirectory}pdf_1.3_NHS_Constitution`
		);

		expect(typeof res).toBe('string');
		expect(
			fs.existsSync(`${testDirectory}pdf_1.3_NHS_Constitution-01.ppm`)
		).toBe(true);
	});

	test('Should return an Error object if file passed not PDF format', async () => {
		const poppler = new Poppler();
		const testTxtFile = `${testDirectory}test.txt`;

		await poppler.pdfToPpm(undefined, testTxtFile).catch((err) => {
			expect(err.message.substring(0, 15)).toBe('Command failed:');
		});
	});

	test('Should return an Error object if PDF file missing', async () => {
		const poppler = new Poppler();

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

		const res = await poppler.pdfToPs(undefined, file, outputFile);

		expect(typeof res).toBe('string');
		expect(
			fs.existsSync(`${testDirectory}pdf_1.3_NHS_Constitution.ps`)
		).toBe(true);
	});

	test('Should accept options and only process 2 pages of PDF file', async () => {
		const poppler = new Poppler();
		const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution.ps`;
		const options = {
			firstPageToConvert: 1,
			lastPageToConvert: 2
		};

		const res = await poppler.pdfToPs(options, file, outputFile);

		expect(typeof res).toBe('string');
		expect(
			fs.existsSync(`${testDirectory}pdf_1.3_NHS_Constitution.ps`)
		).toBe(true);
	});

	test('Should return an Error object if file passed not PDF format', async () => {
		const poppler = new Poppler();
		const testTxtFile = `${testDirectory}test.txt`;

		await poppler.pdfToPs(undefined, testTxtFile).catch((err) => {
			expect(err.message.substring(0, 15)).toBe('Command failed:');
		});
	});

	test('Should return an Error object if PDF file missing', async () => {
		const poppler = new Poppler();

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

		const res = await poppler.pdfToText(undefined, file, outputFile);

		expect(typeof res).toBe('string');
		expect(
			fs.existsSync(`${testDirectory}pdf_1.3_NHS_Constitution.txt`)
		).toBe(true);
	});

	test('Should accept options and only process 2 pages of PDF file', async () => {
		const poppler = new Poppler();
		const options = {
			firstPageToConvert: 1,
			lastPageToConvert: 2
		};

		const res = await poppler.pdfToText(options, file);

		expect(typeof res).toBe('string');
		expect(
			fs.existsSync(`${testDirectory}pdf_1.3_NHS_Constitution.txt`)
		).toBe(true);
	});

	test('Should return an Error object if file passed not PDF format', async () => {
		const poppler = new Poppler();
		const testTxtFile = `${testDirectory}test.txt`;

		await poppler.pdfToText(undefined, testTxtFile).catch((err) => {
			expect(err.message.substring(0, 15)).toBe('Command failed:');
		});
	});

	test('Should return an Error object if PDF file missing', async () => {
		const poppler = new Poppler();

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

		const res = await poppler.pdfUnite(undefined, files, outputFile);

		expect(typeof res).toBe('string');
		expect(fs.existsSync(`${testDirectory}united.pdf`)).toBe(true);
	});

	test('Should return an Error object if a PDF file and non-PDF file are attempted to be merged', async () => {
		const poppler = new Poppler();
		const files = [
			`${testDirectory}test.txt`,
			`${testDirectory}pdf_1.7_NHS_Constitution_Handbook.pdf`
		];

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

		await poppler.pdfUnite(options, files).catch((err) => {
			expect(err.message).toEqual("Invalid option provided 'wordFile'");
		});
	});
});
