/* eslint-disable jest/no-conditional-expect */
/* eslint-disable security/detect-child-process */
/* eslint-disable security/detect-non-literal-fs-filename */
const fs = require("fs");
const glob = require("glob");
const os = require("os");
const path = require("upath");
const { execFile } = require("child_process");
const util = require("util");

const execFileAsync = util.promisify(execFile);
const { Poppler } = require("./index");

const testDirectory = `${__dirname}/../test_files/`;
const file = `${testDirectory}pdf_1.3_NHS_Constitution.pdf`;

let testBinaryPath;
const platform = os.platform();
switch (platform) {
	// macOS
	case "darwin":
		testBinaryPath = "/usr/local/bin";
		break;

	case "linux":
		testBinaryPath = "/usr/bin";
		break;

	// Windows OS
	case "win32":
	default:
		testBinaryPath = path.joinSafe(
			__dirname,
			"lib",
			"win32",
			"poppler-21.11.0",
			"Library",
			"bin"
		);
		break;
}

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
		resolve("done");
	});
}

describe("Node-Poppler Module", () => {
	afterEach(async () => {
		await clean();
	});

	if (platform === "win32") {
		describe("Constructor", () => {
			test("Should convert PDF file to SVG file without binary set, and use included binaries", async () => {
				const poppler = new Poppler();
				const options = {
					svgFile: true,
				};
				const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution.svg`;

				const res = await poppler.pdfToCairo(file, outputFile, options);

				expect(typeof res).toBe("string");
				expect(
					fs.existsSync(
						`${testDirectory}pdf_1.3_NHS_Constitution.svg`
					)
				).toBe(true);
			});
		});
	}

	describe("pdfAttach Function", () => {
		test("Should attach file to PDF file", async () => {
			const poppler = new Poppler(testBinaryPath);
			const attachmentFile = `${testDirectory}test.txt`;
			const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution_attached.pdf`;

			const res = await poppler.pdfAttach(
				file,
				attachmentFile,
				outputFile
			);

			expect(typeof res).toBe("string");
			expect(
				fs.existsSync(
					`${testDirectory}pdf_1.3_NHS_Constitution_attached.pdf`
				)
			).toBe(true);
		});

		test("Should return an Error object if file passed not PDF format", async () => {
			const poppler = new Poppler(testBinaryPath);
			const testTxtFile = `${testDirectory}test.txt`;

			expect.assertions(1);
			await poppler.pdfAttach(testTxtFile).catch((err) => {
				expect(err.message.substring(0, 15)).toBe("Command failed:");
			});
		});

		test("Should return an Error object if invalid value types provided for an option are passed to function", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				replace: "test",
			};

			expect.assertions(1);
			await poppler
				.pdfAttach(file, undefined, undefined, options)
				.catch((err) => {
					expect(err.message).toBe(
						"Invalid value type provided for option 'replace', expected boolean but received string"
					);
				});
		});

		test("Should return an Error object if invalid option is passed to function", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				wordFile: "test",
			};

			expect.assertions(1);
			await poppler
				.pdfAttach(file, undefined, undefined, options)
				.catch((err) => {
					expect(err.message).toBe(
						"Invalid option provided 'wordFile'"
					);
				});
		});
	});

	describe("pdfDetach Function", () => {
		test("Should list embedded files", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				listEmbedded: true,
			};
			const attachmentFile = `${testDirectory}pdf_1.3_NHS_Constitution_attached_detach.pdf`;

			const res = await poppler.pdfDetach(attachmentFile, options);

			expect(typeof res).toBe("string");
		});

		test("Should return an Error object if file passed not PDF format", async () => {
			const poppler = new Poppler(testBinaryPath);
			const testTxtFile = `${testDirectory}test.txt`;

			expect.assertions(1);
			await poppler.pdfDetach(testTxtFile).catch((err) => {
				expect(err.message.substring(0, 15)).toBe("Command failed:");
			});
		});

		test("Should return an Error object if invalid value types provided for an option are passed to function", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				listEmbedded: "test",
			};

			expect.assertions(1);
			await poppler.pdfDetach(file, options).catch((err) => {
				expect(err.message).toBe(
					"Invalid value type provided for option 'listEmbedded', expected boolean but received string"
				);
			});
		});

		test("Should return an Error object if invalid option is passed to function", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				wordFile: "test",
			};

			expect.assertions(1);
			await poppler.pdfDetach(file, options).catch((err) => {
				expect(err.message).toBe("Invalid option provided 'wordFile'");
			});
		});
	});

	describe("pdfFonts Function", () => {
		test("Should examine 3 pages of PDF file", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				firstPageToExamine: 1,
				lastPageToExamine: 3,
			};
			const res = await poppler.pdfFonts(file, options);

			expect(typeof res).toBe("string");
		});

		test("Should examine 3 pages of PDF file as Buffer", async () => {
			const poppler = new Poppler(testBinaryPath);
			const attachmentFile = fs.readFileSync(file);

			const options = {
				firstPageToExamine: 1,
				lastPageToExamine: 3,
			};
			const res = await poppler.pdfFonts(attachmentFile, options);

			expect(typeof res).toBe("string");
		});

		test("Should return an Error object if file passed not PDF format", async () => {
			const poppler = new Poppler(testBinaryPath);
			const testTxtFile = `${testDirectory}test.txt`;

			expect.assertions(1);
			await poppler.pdfFonts(testTxtFile).catch((err) => {
				expect(err.message.substring(0, 15)).toBe("Syntax Warning:");
			});
		});

		test("Should return an Error object if invalid value types provided for an option are passed to function", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				firstPageToExamine: "test",
			};

			expect.assertions(1);
			await poppler.pdfFonts(file, options).catch((err) => {
				expect(err.message).toBe(
					"Invalid value type provided for option 'firstPageToExamine', expected number but received string"
				);
			});
		});

		test("Should return an Error object if invalid option is passed to function", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				wordFile: "test",
			};

			expect.assertions(1);
			await poppler.pdfFonts(file, options).catch((err) => {
				expect(err.message).toBe("Invalid option provided 'wordFile'");
			});
		});
	});

	describe("pdfImages Function", () => {
		test("Should accept options and list all images in PDF file", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				list: true,
			};

			const res = await poppler.pdfImages(file, undefined, options);

			expect(typeof res).toBe("string");
		});

		test("Should accept options and save images from PDF file", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				pngFile: true,
			};

			const res = await poppler.pdfImages(file, "file_prefix", options);

			expect(typeof res).toBe("string");
		});

		test("Should accept options and list all images in PDF file as Buffer", async () => {
			const poppler = new Poppler(testBinaryPath);
			const attachmentFile = fs.readFileSync(file);
			const options = {
				list: true,
			};

			const res = await poppler.pdfImages(
				attachmentFile,
				undefined,
				options
			);

			expect(typeof res).toBe("string");
		});

		test("Should return an Error object if file passed not PDF format", async () => {
			const poppler = new Poppler(testBinaryPath);
			const testTxtFile = `${testDirectory}test.txt`;

			expect.assertions(1);
			await poppler.pdfImages(testTxtFile, `file_prefix`).catch((err) => {
				expect(err.message.substring(0, 15)).toBe("Syntax Warning:");
			});
		});

		test("Should return an Error object if PDF file missing", async () => {
			const poppler = new Poppler(testBinaryPath);

			expect.assertions(1);
			await poppler.pdfImages(undefined, `file_prefix`).catch((err) => {
				expect(err.message.substring(0, 41)).toBe(
					"I/O Error: Couldn't open file 'undefined'"
				);
			});
		});

		test("Should return an Error object if invalid value types provided for an option are passed to function", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				firstPageToConvert: "test",
				lastPageToConvert: "test",
			};

			expect.assertions(1);
			await poppler
				.pdfImages(undefined, undefined, options)
				.catch((err) => {
					expect(err.message).toBe(
						"Invalid value type provided for option 'firstPageToConvert', expected number but received string; Invalid value type provided for option 'lastPageToConvert', expected number but received string"
					);
				});
		});

		test("Should return an Error object if invalid option is passed to function", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				middlePageToConvert: "test",
			};

			expect.assertions(1);
			await poppler
				.pdfImages(undefined, undefined, options)
				.catch((err) => {
					expect(err.message).toBe(
						"Invalid option provided 'middlePageToConvert'"
					);
				});
		});
	});

	describe("pdfInfo Function", () => {
		test("Should list info of PDF file", async () => {
			const poppler = new Poppler(testBinaryPath);

			const res = await poppler.pdfInfo(file);

			expect(typeof res).toBe("string");
		});

		test("Should list info of PDF file as a JSON object", async () => {
			const poppler = new Poppler(testBinaryPath);

			const res = await poppler.pdfInfo(file, {
				printAsJson: true,
			});

			expect(typeof res).toBe("object");
		});

		test("Should list info of PDF file as Buffer", async () => {
			const poppler = new Poppler(testBinaryPath);
			const attachmentFile = fs.readFileSync(file);

			const res = await poppler.pdfInfo(attachmentFile);

			expect(typeof res).toBe("string");
		});

		test("Should return an Error object if file passed not PDF format", async () => {
			const poppler = new Poppler(testBinaryPath);
			const testTxtFile = `${testDirectory}test.txt`;

			expect.assertions(1);
			await poppler.pdfInfo(testTxtFile).catch((err) => {
				expect(err.message.substring(0, 15)).toBe("Syntax Warning:");
			});
		});

		test("Should return an Error object if PDF file missing", async () => {
			const poppler = new Poppler(testBinaryPath);

			expect.assertions(1);
			await poppler.pdfInfo().catch((err) => {
				expect(err.message.substring(0, 10)).toBe("I/O Error:");
			});
		});

		test("Should return an Error object if invalid value types provided for an option are passed to function", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				firstPageToConvert: "test",
			};

			expect.assertions(1);
			await poppler.pdfInfo(file, options).catch((err) => {
				expect(err.message).toBe(
					"Invalid value type provided for option 'firstPageToConvert', expected number but received string"
				);
			});
		});

		test("Should return an Error object if invalid option is passed to function", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				wordFile: "test",
			};

			expect.assertions(1);
			await poppler.pdfInfo(file, options).catch((err) => {
				expect(err.message).toBe("Invalid option provided 'wordFile'");
			});
		});
	});

	describe("pdfSeparate Function", () => {
		test("Should extract 3 pages from PDF file to new files", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				firstPageToExtract: 1,
				lastPageToExtract: 3,
			};
			const outputPattern = `${testDirectory}pdf_1.3_NHS_Constitution-extract-%d.pdf`;

			const res = await poppler.pdfSeparate(file, outputPattern, options);

			expect(typeof res).toBe("string");
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

		test("Should return an Error object if file passed not PDF format", async () => {
			const poppler = new Poppler(testBinaryPath);
			const testTxtFile = `${testDirectory}test.txt`;

			expect.assertions(1);
			await poppler.pdfSeparate(testTxtFile).catch((err) => {
				expect(err.message.substring(0, 15)).toBe("Command failed:");
			});
		});

		test("Should return an Error object if invalid value types provided for an option are passed to function", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				firstPageToExtract: "test",
			};

			expect.assertions(1);
			await poppler.pdfSeparate(file, undefined, options).catch((err) => {
				expect(err.message).toBe(
					"Invalid value type provided for option 'firstPageToExtract', expected number but received string"
				);
			});
		});

		test("Should return an Error object if invalid option is passed to function", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				wordFile: "test",
			};

			expect.assertions(1);
			await poppler.pdfSeparate(file, undefined, options).catch((err) => {
				expect(err.message).toBe("Invalid option provided 'wordFile'");
			});
		});
	});

	describe("pdfToCairo Function", () => {
		describe("PDF-to-EPS Option", () => {
			test("Should convert PDF file to EPS file", async () => {
				const poppler = new Poppler(testBinaryPath);
				const options = {
					epsFile: true,
					firstPageToConvert: 1,
					lastPageToConvert: 1,
				};
				const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution.eps`;

				const res = await poppler.pdfToCairo(file, outputFile, options);

				expect(typeof res).toBe("string");
				expect(
					fs.existsSync(
						`${testDirectory}pdf_1.3_NHS_Constitution.eps`
					)
				).toBe(true);
			});

			test("Should convert PDF file to EPS file and send to stdout", async () => {
				const poppler = new Poppler(testBinaryPath);
				const options = {
					epsFile: true,
					firstPageToConvert: 1,
					lastPageToConvert: 1,
				};

				const res = await poppler.pdfToCairo(file, undefined, options);

				expect(typeof res).toBe("string");
			});

			test("Should convert PDF file as Buffer to EPS file", async () => {
				const poppler = new Poppler(testBinaryPath);
				const attachmentFile = fs.readFileSync(file);
				const options = {
					epsFile: true,
					firstPageToConvert: 1,
					lastPageToConvert: 1,
				};
				const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution.eps`;

				const res = await poppler.pdfToCairo(
					attachmentFile,
					outputFile,
					options
				);

				expect(typeof res).toBe("string");
				expect(
					fs.existsSync(
						`${testDirectory}pdf_1.3_NHS_Constitution.eps`
					)
				).toBe(true);
			});
		});

		describe("PDF-to-JPG Option", () => {
			test("Should convert PDF file to JPG file", async () => {
				const poppler = new Poppler(testBinaryPath);
				const options = {
					jpegFile: true,
				};
				const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution`;

				const res = await poppler.pdfToCairo(file, outputFile, options);

				expect(typeof res).toBe("string");
				expect(
					fs.existsSync(
						`${testDirectory}pdf_1.3_NHS_Constitution-01.jpg`
					)
				).toBe(true);
			});

			test("Should convert PDF file to JPG file and send to stdout", async () => {
				const poppler = new Poppler(testBinaryPath);
				const options = {
					jpegFile: true,
					singleFile: true,
				};

				const res = await poppler.pdfToCairo(file, undefined, options);

				expect(typeof res).toBe("string");
			});

			test("Should convert PDF file as Buffer to JPG file", async () => {
				const poppler = new Poppler(testBinaryPath);
				const attachmentFile = fs.readFileSync(file);
				const options = {
					jpegFile: true,
				};
				const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution`;

				const res = await poppler.pdfToCairo(
					attachmentFile,
					outputFile,
					options
				);

				expect(typeof res).toBe("string");
				expect(
					fs.existsSync(
						`${testDirectory}pdf_1.3_NHS_Constitution-01.jpg`
					)
				).toBe(true);
			});
		});

		describe("PDF-to-PDF Option", () => {
			test("Should convert PDF file to PDF file", async () => {
				const poppler = new Poppler(testBinaryPath);
				const options = {
					pdfFile: true,
				};
				const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution_cairo.pdf`;

				const res = await poppler.pdfToCairo(file, outputFile, options);

				expect(typeof res).toBe("string");
				expect(
					fs.existsSync(
						`${testDirectory}pdf_1.3_NHS_Constitution_cairo.pdf`
					)
				).toBe(true);
			});

			test("Should convert PDF file to PDF file and send to stdout", async () => {
				const poppler = new Poppler(testBinaryPath);
				const options = {
					pdfFile: true,
				};

				const res = await poppler.pdfToCairo(file, undefined, options);

				expect(typeof res).toBe("string");
			});

			test("Should convert PDF file as Buffer to PDF file", async () => {
				const poppler = new Poppler(testBinaryPath);
				const attachmentFile = fs.readFileSync(file);
				const options = {
					pdfFile: true,
				};
				const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution_cairo.pdf`;

				const res = await poppler.pdfToCairo(
					attachmentFile,
					outputFile,
					options
				);

				expect(typeof res).toBe("string");
				expect(
					fs.existsSync(
						`${testDirectory}pdf_1.3_NHS_Constitution_cairo.pdf`
					)
				).toBe(true);
			});
		});

		describe("PDF-to-PNG Option", () => {
			test("Should convert PDF file to PNG file", async () => {
				const poppler = new Poppler(testBinaryPath);
				const options = {
					pngFile: true,
				};
				const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution`;

				const res = await poppler.pdfToCairo(file, outputFile, options);

				expect(typeof res).toBe("string");
				expect(
					fs.existsSync(
						`${testDirectory}pdf_1.3_NHS_Constitution-01.png`
					)
				).toBe(true);
			});

			test("Should convert PDF file to PNG file and send to stdout", async () => {
				const poppler = new Poppler(testBinaryPath);
				const options = {
					pngFile: true,
					singleFile: true,
				};

				const res = await poppler.pdfToCairo(file, undefined, options);

				expect(typeof res).toBe("string");
			});

			test("Should convert PDF file as Buffer to PNG file", async () => {
				const poppler = new Poppler(testBinaryPath);
				const attachmentFile = fs.readFileSync(file);
				const options = {
					pngFile: true,
				};
				const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution`;

				const res = await poppler.pdfToCairo(
					attachmentFile,
					outputFile,
					options
				);

				expect(typeof res).toBe("string");
				expect(
					fs.existsSync(
						`${testDirectory}pdf_1.3_NHS_Constitution-01.png`
					)
				).toBe(true);
			});
		});

		describe("PDF-to-PS Option", () => {
			test("Should convert PDF file to PS file", async () => {
				const poppler = new Poppler(testBinaryPath);
				const options = {
					psFile: true,
				};
				const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution.ps`;

				const res = await poppler.pdfToCairo(file, outputFile, options);

				expect(typeof res).toBe("string");
				expect(
					fs.existsSync(`${testDirectory}pdf_1.3_NHS_Constitution.ps`)
				).toBe(true);
			});

			test("Should convert PDF file to PS file and send to stdout", async () => {
				const poppler = new Poppler(testBinaryPath);
				const options = {
					psFile: true,
				};

				const res = await poppler.pdfToCairo(file, undefined, options);

				expect(typeof res).toBe("string");
			});

			test("Should convert PDF file as Buffer to PS file", async () => {
				const poppler = new Poppler(testBinaryPath);
				const attachmentFile = fs.readFileSync(file);
				const options = {
					psFile: true,
				};
				const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution.ps`;

				const res = await poppler.pdfToCairo(
					attachmentFile,
					outputFile,
					options
				);

				expect(typeof res).toBe("string");
				expect(
					fs.existsSync(`${testDirectory}pdf_1.3_NHS_Constitution.ps`)
				).toBe(true);
			});
		});

		describe("PDF-to-SVG Option", () => {
			test("Should convert PDF file to SVG file", async () => {
				const poppler = new Poppler(testBinaryPath);
				const options = {
					svgFile: true,
				};
				const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution.svg`;

				const res = await poppler.pdfToCairo(file, outputFile, options);

				expect(typeof res).toBe("string");
				expect(
					fs.existsSync(
						`${testDirectory}pdf_1.3_NHS_Constitution.svg`
					)
				).toBe(true);
			});

			test("Should convert PDF file to SVG file and send to stdout", async () => {
				const poppler = new Poppler(testBinaryPath);
				const options = {
					svgFile: true,
				};

				const res = await poppler.pdfToCairo(file, undefined, options);

				expect(typeof res).toBe("string");
			});

			test("Should convert PDF file as Buffer to SVG file", async () => {
				const poppler = new Poppler(testBinaryPath);
				const attachmentFile = fs.readFileSync(file);
				const options = {
					svgFile: true,
				};
				const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution.svg`;

				const res = await poppler.pdfToCairo(
					attachmentFile,
					outputFile,
					options
				);

				expect(typeof res).toBe("string");
				expect(
					fs.existsSync(
						`${testDirectory}pdf_1.3_NHS_Constitution.svg`
					)
				).toBe(true);
			});
		});

		describe("PDF-to-TIFF Option", () => {
			test("Should convert PDF file to TIFF file", async () => {
				const poppler = new Poppler(testBinaryPath);
				const options = {
					tiffFile: true,
				};
				const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution`;

				const res = await poppler.pdfToCairo(file, outputFile, options);

				expect(typeof res).toBe("string");
				expect(
					fs.existsSync(
						`${testDirectory}pdf_1.3_NHS_Constitution-01.tif`
					)
				).toBe(true);
			});

			test("Should convert PDF file to TIFF file and send to stdout", async () => {
				const poppler = new Poppler(testBinaryPath);
				const options = {
					singleFile: true,
					tiffFile: true,
				};

				const res = await poppler.pdfToCairo(file, undefined, options);

				expect(typeof res).toBe("string");
			});

			test("Should convert PDF file as Buffer to TIFF file", async () => {
				const poppler = new Poppler(testBinaryPath);
				const attachmentFile = fs.readFileSync(file);
				const options = {
					tiffFile: true,
				};
				const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution`;

				const res = await poppler.pdfToCairo(
					attachmentFile,
					outputFile,
					options
				);

				expect(typeof res).toBe("string");
				expect(
					fs.existsSync(
						`${testDirectory}pdf_1.3_NHS_Constitution-01.tif`
					)
				).toBe(true);
			});
		});

		test("Should accept options and only process 2 pages of PDF file", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				firstPageToConvert: 1,
				lastPageToConvert: 2,
				svgFile: true,
			};
			const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution.svg`;

			const res = await poppler.pdfToCairo(file, outputFile, options);

			expect(typeof res).toBe("string");
			expect(
				fs.existsSync(`${testDirectory}pdf_1.3_NHS_Constitution.svg`)
			).toBe(true);
		});

		test("Should return an Error object if file passed not PDF format", async () => {
			const poppler = new Poppler(testBinaryPath);
			const testTxtFile = `${testDirectory}test.txt`;

			expect.assertions(1);
			await poppler.pdfToCairo(testTxtFile).catch((err) => {
				expect(err.message.substring(0, 6)).toBe("Error:");
			});
		});

		test("Should return an Error object if no format option is passed to function", async () => {
			const poppler = new Poppler(testBinaryPath);

			expect.assertions(1);
			await poppler.pdfToCairo(file).catch((err) => {
				expect(err.message.substring(0, 6)).toBe("Error:");
			});
		});

		test("Should return an Error object if invalid value types provided for an option are passed to function", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				pdfFile: "test",
			};

			expect.assertions(1);
			await poppler.pdfToCairo(file, undefined, options).catch((err) => {
				expect(err.message).toBe(
					"Invalid value type provided for option 'pdfFile', expected boolean but received string"
				);
			});
		});

		test("Should return an Error object if invalid option is passed to function", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				wordFile: "test",
			};

			expect.assertions(1);
			await poppler.pdfToCairo(file, undefined, options).catch((err) => {
				expect(err.message).toBe("Invalid option provided 'wordFile'");
			});
		});
	});

	describe("pdfToHtml Function", () => {
		test("Should convert PDF file to HTML file", async () => {
			const poppler = new Poppler(testBinaryPath);

			const res = await poppler.pdfToHtml(file);

			expect(typeof res).toBe("string");
			expect(
				fs.existsSync(`${testDirectory}pdf_1.3_NHS_Constitution.html`)
			).toBe(true);
		});

		test("Should convert PDF file to HTML file as Buffer", async () => {
			const poppler = new Poppler(testBinaryPath);
			const attachmentFile = fs.readFileSync(file);

			const res = await poppler.pdfToHtml(
				attachmentFile,
				`${testDirectory}pdf_1.3_NHS_Constitution.html`
			);

			expect(typeof res).toBe("string");
			expect(
				fs.existsSync(`${testDirectory}pdf_1.3_NHS_Constitution.html`)
			).toBe(true);
		});

		test("Should accept options and only process 2 pages of PDF file", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				firstPageToConvert: 1,
				lastPageToConvert: 2,
			};

			const res = await poppler.pdfToHtml(file, undefined, options);

			expect(typeof res).toBe("string");
			expect(
				fs.existsSync(`${testDirectory}pdf_1.3_NHS_Constitution.html`)
			).toBe(true);
		});

		test("Should return an Error object if file passed not PDF format", async () => {
			const poppler = new Poppler(testBinaryPath);
			const testTxtFile = `${testDirectory}test.txt`;

			expect.assertions(1);
			await poppler.pdfToHtml(testTxtFile).catch((err) => {
				expect(err.message.substring(0, 15)).toBe("Syntax Warning:");
			});
		});

		test("Should return an Error object if PDF file missing", async () => {
			const poppler = new Poppler(testBinaryPath);

			expect.assertions(1);
			await poppler.pdfToHtml().catch((err) => {
				expect(err.message.substring(0, 10)).toBe("I/O Error:");
			});
		});

		test("Should return an Error object if invalid value types provided for an option are passed to function", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				firstPageToConvert: "test",
				lastPageToConvert: "test",
			};

			expect.assertions(1);
			await poppler.pdfToHtml(file, undefined, options).catch((err) => {
				expect(err.message).toBe(
					"Invalid value type provided for option 'firstPageToConvert', expected number but received string; Invalid value type provided for option 'lastPageToConvert', expected number but received string"
				);
			});
		});

		test("Should return an Error object if invalid option is passed to function", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				middlePageToConvert: "test",
			};

			expect.assertions(1);
			await poppler.pdfToHtml(file, undefined, options).catch((err) => {
				expect(err.message).toBe(
					"Invalid option provided 'middlePageToConvert'"
				);
			});
		});
	});

	describe("pdfToPpm Function", () => {
		let version;

		beforeAll(async () => {
			const { stderr } = await execFileAsync(
				path.joinSafe(testBinaryPath, "pdftoppm"),
				["-v"]
			);
			version = /(\d{1,2}\.\d{1,2}\.\d{1,2})/i.exec(stderr)[1];
		});

		test("Should accept options and only process 1 page of PDF file", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				firstPageToConvert: 1,
				lastPageToConvert: 1,
			};

			const res = await poppler.pdfToPpm(
				file,
				`${testDirectory}pdf_1.3_NHS_Constitution`,
				options
			);

			expect(typeof res).toBe("string");
			expect(
				fs.existsSync(`${testDirectory}pdf_1.3_NHS_Constitution-01.ppm`)
			).toBe(true);
		});

		test("Should accept options and only process 1 page of PDF file as Buffer", async () => {
			const poppler = new Poppler(testBinaryPath);
			const attachmentFile = fs.readFileSync(file);
			const options = {
				firstPageToConvert: 1,
				lastPageToConvert: 1,
			};

			const res = await poppler.pdfToPpm(
				attachmentFile,
				`${testDirectory}pdf_1.3_NHS_Constitution`,
				options
			);

			expect(typeof res).toBe("string");
			expect(
				fs.existsSync(`${testDirectory}pdf_1.3_NHS_Constitution-01.ppm`)
			).toBe(true);
		});

		test("Should return an Error object if file passed not PDF format", async () => {
			const poppler = new Poppler(testBinaryPath);
			const testTxtFile = `${testDirectory}test.txt`;

			expect.assertions(1);
			await poppler.pdfToPpm(testTxtFile).catch((err) => {
				expect(err.message.substring(0, 15)).toBe("Syntax Warning:");
			});
		});

		test("Should return an Error object if PDF file missing", async () => {
			const poppler = new Poppler(testBinaryPath);

			expect.assertions(1);
			await poppler.pdfToPpm().catch((err) => {
				expect(err.message.substring(0, 10)).toBe("I/O Error:");
			});
		});

		test("Should return an Error object if invalid value types provided for an option are passed to function", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				firstPageToConvert: "test",
				lastPageToConvert: "test",
			};

			expect.assertions(1);
			await poppler
				.pdfToPpm(undefined, undefined, options)
				.catch((err) => {
					expect(err.message).toBe(
						"Invalid value type provided for option 'firstPageToConvert', expected number but received string; Invalid value type provided for option 'lastPageToConvert', expected number but received string"
					);
				});
		});

		test("Should return an Error object if option provided is only available in a later version of the pdftoppm binary than what was provided", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				printProgress: true,
			};

			if (version < "21.03.0") {
				expect.assertions(1);
				await poppler
					.pdfToPpm(
						file,
						`${testDirectory}pdf_1.3_NHS_Constitution`,
						options
					)
					.catch((err) => {
						expect(err.message).toBe(
							`Invalid option provided for the current version of the binary used. 'printProgress' was introduced in v21.03.0, but received v${version}`
						);
					});
			}
		});

		test("Should return an Error object if invalid option is passed to function", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				middlePageToConvert: "test",
			};

			expect.assertions(1);
			await poppler
				.pdfToPpm(undefined, undefined, options)
				.catch((err) => {
					expect(err.message).toBe(
						"Invalid option provided 'middlePageToConvert'"
					);
				});
		});
	});

	describe("pdfToPs Function", () => {
		test("Should convert PDF file to PS file and write to output file", async () => {
			const poppler = new Poppler(testBinaryPath);
			const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution.ps`;

			const res = await poppler.pdfToPs(file, outputFile);

			expect(typeof res).toBe("string");
			expect(
				fs.existsSync(`${testDirectory}pdf_1.3_NHS_Constitution.ps`)
			).toBe(true);
		});

		test("Should convert PDF file as Buffer to PS file", async () => {
			const poppler = new Poppler(testBinaryPath);
			const attachmentFile = fs.readFileSync(file);

			const res = await poppler.pdfToPs(attachmentFile);

			expect(typeof res).toBe("string");
		});

		test("Should accept options and only process 2 pages of PDF file", async () => {
			const poppler = new Poppler(testBinaryPath);
			const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution.ps`;
			const options = {
				firstPageToConvert: 1,
				lastPageToConvert: 2,
			};

			const res = await poppler.pdfToPs(file, outputFile, options);

			expect(typeof res).toBe("string");
			expect(
				fs.existsSync(`${testDirectory}pdf_1.3_NHS_Constitution.ps`)
			).toBe(true);
		});

		test("Should return an Error object if file passed not PDF format", async () => {
			const poppler = new Poppler(testBinaryPath);
			const testTxtFile = `${testDirectory}test.txt`;

			expect.assertions(1);
			await poppler.pdfToPs(testTxtFile).catch((err) => {
				expect(err.message.substring(0, 15)).toBe("Syntax Warning:");
			});
		});

		test("Should return an Error object if PDF file missing", async () => {
			const poppler = new Poppler(testBinaryPath);

			expect.assertions(1);
			await poppler.pdfToPs().catch((err) => {
				expect(err.message.substring(0, 10)).toBe("I/O Error:");
			});
		});

		test("Should return an Error object if invalid value types provided for an option are passed to function", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				firstPageToConvert: "test",
				lastPageToConvert: "test",
			};

			expect.assertions(1);
			await poppler.pdfToPs(file, undefined, options).catch((err) => {
				expect(err.message).toBe(
					"Invalid value type provided for option 'firstPageToConvert', expected number but received string; Invalid value type provided for option 'lastPageToConvert', expected number but received string"
				);
			});
		});

		test("Should return an Error object if invalid option is passed to function", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				middlePageToConvert: "test",
			};

			expect.assertions(1);
			await poppler.pdfToPs(file, undefined, options).catch((err) => {
				expect(err.message).toBe(
					"Invalid option provided 'middlePageToConvert'"
				);
			});
		});
	});

	describe("pdfToText Function", () => {
		test("Should convert PDF file to Text file and write to output file", async () => {
			const poppler = new Poppler(testBinaryPath);
			const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution.txt`;

			const res = await poppler.pdfToText(file, outputFile);

			expect(typeof res).toBe("string");
			expect(
				fs.existsSync(`${testDirectory}pdf_1.3_NHS_Constitution.txt`)
			).toBe(true);
		});

		test("Should convert PDF file as Buffer to Text file", async () => {
			const poppler = new Poppler(testBinaryPath);
			const attachmentFile = fs.readFileSync(file);

			const res = await poppler.pdfToText(attachmentFile);

			expect(typeof res).toBe("string");
		});

		test("Should accept options and only process 2 pages of PDF file", async () => {
			const poppler = new Poppler(testBinaryPath);
			const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution.txt`;
			const options = {
				firstPageToConvert: 1,
				lastPageToConvert: 2,
			};

			const res = await poppler.pdfToText(file, outputFile, options);

			expect(typeof res).toBe("string");
			expect(
				fs.existsSync(`${testDirectory}pdf_1.3_NHS_Constitution.txt`)
			).toBe(true);
		});

		test("Should return an Error object if file passed not PDF format", async () => {
			const poppler = new Poppler(testBinaryPath);
			const testTxtFile = `${testDirectory}test.txt`;

			expect.assertions(1);
			await poppler.pdfToText(testTxtFile).catch((err) => {
				expect(err.message.substring(0, 15)).toBe("Syntax Warning:");
			});
		});

		test("Should return an Error object if PDF file missing", async () => {
			const poppler = new Poppler(testBinaryPath);

			expect.assertions(1);
			await poppler.pdfToText().catch((err) => {
				expect(err.message.substring(0, 10)).toBe("I/O Error:");
			});
		});

		test("Should return an Error object if invalid value types provided for an option are passed to function", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				firstPageToConvert: "test",
				lastPageToConvert: "test",
			};

			expect.assertions(1);
			await poppler.pdfToText(file, undefined, options).catch((err) => {
				expect(err.message).toBe(
					"Invalid value type provided for option 'firstPageToConvert', expected number but received string; Invalid value type provided for option 'lastPageToConvert', expected number but received string"
				);
			});
		});

		test("Should return an Error object if invalid option is passed to function", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				middlePageToConvert: "test",
			};

			expect.assertions(1);
			await poppler.pdfToText(file, undefined, options).catch((err) => {
				expect(err.message).toBe(
					"Invalid option provided 'middlePageToConvert'"
				);
			});
		});
	});

	describe("pdfUnite Function", () => {
		test("Should merge two separate PDF files into a new single PDF file", async () => {
			const poppler = new Poppler(testBinaryPath);
			const files = [
				file,
				`${testDirectory}pdf_1.7_NHS_Constitution_Handbook.pdf`,
			];
			const outputFile = `${testDirectory}united.pdf`;

			const res = await poppler.pdfUnite(files, outputFile);

			expect(typeof res).toBe("string");
			expect(fs.existsSync(`${testDirectory}united.pdf`)).toBe(true);
		});

		test("Should return an Error object if a PDF file and non-PDF file are attempted to be merged", async () => {
			const poppler = new Poppler(testBinaryPath);
			const files = [
				`${testDirectory}test.txt`,
				`${testDirectory}pdf_1.7_NHS_Constitution_Handbook.pdf`,
			];

			expect.assertions(1);
			await poppler.pdfUnite(files).catch((err) => {
				expect(err.message.substring(0, 15)).toBe("Command failed:");
			});
		});

		test("Should return an Error object if invalid value types provided for an option are passed to function", async () => {
			const poppler = new Poppler(testBinaryPath);
			const files = [
				file,
				`${testDirectory}pdf_1.7_NHS_Constitution_Handbook.pdf`,
			];
			const options = {
				printVersionInfo: "test",
			};

			expect.assertions(1);
			await poppler.pdfUnite(files, undefined, options).catch((err) => {
				expect(err.message).toBe(
					"Invalid value type provided for option 'printVersionInfo', expected boolean but received string"
				);
			});
		});

		test("Should return an Error object if invalid option is passed to function", async () => {
			const poppler = new Poppler(testBinaryPath);
			const files = [
				file,
				`${testDirectory}pdf_1.7_NHS_Constitution_Handbook.pdf`,
			];
			const options = {
				wordFile: "test",
			};

			expect.assertions(1);
			await poppler.pdfUnite(files, undefined, options).catch((err) => {
				expect(err.message).toBe("Invalid option provided 'wordFile'");
			});
		});
	});
});
