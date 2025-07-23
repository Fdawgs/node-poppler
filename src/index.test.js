/* eslint-disable n/global-require, security/detect-child-process -- Mocking child_process */
/* eslint-disable jest/no-conditional-expect -- Depends on the version of the binary */
/* eslint-disable security/detect-non-literal-fs-filename -- Test files are not user-provided */

"use strict";

const { execFile, spawnSync } = require("node:child_process");
const { access, readFile, unlink } = require("node:fs/promises");
const { join, normalize, sep } = require("node:path");
const { platform } = require("node:process");
const { promisify } = require("node:util");
const {
	afterEach,
	beforeAll,
	beforeEach,
	describe,
	expect,
	it,
	jest,
} = require("@jest/globals");
const { glob } = require("glob");
const { lt } = require("semver");

const execFileAsync = promisify(execFile);
const { Poppler } = require("./index");

// Cache immutable regex as they are expensive to create and garbage collect
const CMD_FAILED_REG = /^Command failed:/u;
const SYNTAX_WARNING_REG = /^Syntax Warning:/u;
const IO_ERROR_REG = /^I\/O Error:/u;

const testDirectory =
	join(__dirname, "..", "test_resources", "test_files") + sep;
const file = `${testDirectory}pdf_1.3_NHS_Constitution.pdf`;
const whitespaceFile = `${testDirectory}pdf_1.7_whitespace_example.pdf`;

/**
 * @description Returns the path to the poppler-util binaries based on the OS.
 * @returns {string} The path to the poppler-util binaries.
 */
function getTestBinaryPath() {
	const which = spawnSync(platform === "win32" ? "where" : "which", [
		"pdfinfo",
	]).stdout.toString();
	let popplerPath = /(.+)pdfinfo/u.exec(which)?.[1];

	if (platform === "win32" && !popplerPath) {
		popplerPath = join(
			__dirname,
			"lib",
			"win32",
			"poppler-24.07.0",
			"Library",
			"bin"
		);
	}

	return normalize(popplerPath);
}

const testBinaryPath = getTestBinaryPath();

describe("Node-Poppler module", () => {
	afterEach(async () => {
		// Remove leftover test files
		const files = await glob(`${testDirectory}**/*`, {
			ignore: [
				`${testDirectory}pdf_1.3_NHS_Constitution_attached_detach.pdf`,
				`${testDirectory}pdf_1.3_NHS_Constitution.pdf`,
				`${testDirectory}pdf_1.7_NHS_Constitution_Handbook.pdf`,
				`${testDirectory}test.txt`,
				whitespaceFile,
			],
		});

		await Promise.all(files.map((filed) => unlink(filed)));
	});

	describe("Constructor", () => {
		beforeEach(() => {
			jest.resetModules();
		});

		it("Creates a new Poppler instance without the binary path set", () => {
			const poppler = new Poppler();
			expect(poppler.path).toBe(testBinaryPath);
		});

		it("Throws an Error if the binary path is not found", () => {
			jest.doMock("node:process", () => ({
				platform: "mockOS",
			}));
			const { platform: mockPlatform } = require("node:process");

			jest.doMock("node:child_process", () => ({
				...jest.requireActual("node:child_process"),
				spawnSync: jest.fn(() => ({
					stdout: {
						toString: () => "",
					},
				})),
			}));
			require("node:child_process");
			const { Poppler: PopplerMock } = require("./index");

			expect.assertions(1);
			try {
				// eslint-disable-next-line no-unused-vars -- This is intentional
				const poppler = new PopplerMock();
			} catch (err) {
				expect(err.message).toBe(
					`Unable to find ${mockPlatform} Poppler binaries, please pass the installation directory as a parameter to the Poppler instance.`
				);
			}
		});
	});

	describe("pdfAttach function", () => {
		it("Attachs file to PDF file", async () => {
			const poppler = new Poppler(testBinaryPath);
			const attachmentFile = `${testDirectory}test.txt`;
			const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution_attached.pdf`;

			const res = await poppler.pdfAttach(
				file,
				attachmentFile,
				outputFile
			);

			expect(typeof res).toBe("string");
			await expect(
				access(`${testDirectory}pdf_1.3_NHS_Constitution_attached.pdf`)
			).resolves.toBeUndefined();
		});

		it("Rejects with an Error object if file passed not PDF format", async () => {
			const poppler = new Poppler(testBinaryPath);
			const testTxtFile = `${testDirectory}test.txt`;

			expect.assertions(1);
			await poppler.pdfAttach(testTxtFile).catch((err) => {
				expect(err.message).toMatch(CMD_FAILED_REG);
			});
		});

		it("Rejects with an Error object if invalid value types provided for an option are passed to function", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				replace: "test",
			};

			await expect(
				poppler.pdfAttach(file, undefined, undefined, options)
			).rejects.toThrow(
				"Invalid value type provided for option 'replace', expected boolean but received string"
			);
		});

		it("Rejects with an Error object if invalid option is passed to function", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				wordFile: "test",
			};

			await expect(
				poppler.pdfAttach(file, undefined, undefined, options)
			).rejects.toThrow("Invalid option provided 'wordFile'");
		});
	});

	describe("pdfDetach function", () => {
		it("Lists embedded files", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				listEmbedded: true,
			};
			const attachmentFile = `${testDirectory}pdf_1.3_NHS_Constitution_attached_detach.pdf`;

			const res = await poppler.pdfDetach(attachmentFile, options);

			expect(res).toMatch("1 embedded files");
		});

		it("Rejects with an Error object if file passed not PDF format", async () => {
			const poppler = new Poppler(testBinaryPath);
			const testTxtFile = `${testDirectory}test.txt`;

			expect.assertions(1);
			await poppler.pdfDetach(testTxtFile).catch((err) => {
				expect(err.message).toMatch(CMD_FAILED_REG);
			});
		});

		it("Rejects with an Error object if invalid value types provided for an option are passed to function", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				listEmbedded: "test",
			};

			await expect(poppler.pdfDetach(file, options)).rejects.toThrow(
				"Invalid value type provided for option 'listEmbedded', expected boolean but received string"
			);
		});

		it("Rejects with an Error object if invalid option is passed to function", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				wordFile: "test",
			};

			await expect(poppler.pdfDetach(file, options)).rejects.toThrow(
				"Invalid option provided 'wordFile'"
			);
		});
	});

	describe("pdfFonts function", () => {
		it("Examines 3 pages of PDF file", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				firstPageToExamine: 1,
				lastPageToExamine: 3,
			};
			const res = await poppler.pdfFonts(file, options);

			expect(res).toMatch("+Frutiger-");
		});

		it("Examines 3 pages of PDF file as Buffer", async () => {
			const poppler = new Poppler(testBinaryPath);
			const attachmentFile = await readFile(file);

			const options = {
				firstPageToExamine: 1,
				lastPageToExamine: 3,
			};
			const res = await poppler.pdfFonts(attachmentFile, options);

			expect(res).toMatch("+Frutiger-");
		});

		it("Rejects with an Error object if file passed not PDF format", async () => {
			const poppler = new Poppler(testBinaryPath);
			const testTxtFile = `${testDirectory}test.txt`;

			expect.assertions(1);
			await poppler.pdfFonts(testTxtFile).catch((err) => {
				expect(err.message).toMatch(SYNTAX_WARNING_REG);
			});
		});

		it("Rejects with an Error object if invalid value types provided for an option are passed to function", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				firstPageToExamine: "test",
			};

			await expect(poppler.pdfFonts(file, options)).rejects.toThrow(
				"Invalid value type provided for option 'firstPageToExamine', expected number but received string"
			);
		});

		it("Rejects with an Error object if invalid option is passed to function", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				wordFile: "test",
			};

			await expect(poppler.pdfFonts(file, options)).rejects.toThrow(
				"Invalid option provided 'wordFile'"
			);
		});
	});

	describe("pdfImages function", () => {
		it("Accepts options and list all images in PDF file", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				list: true,
			};

			const res = await poppler.pdfImages(file, undefined, options);

			expect(res).toMatch("page");
		});

		it("Accepts options and save images from PDF file", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				pngFile: true,
			};

			const res = await poppler.pdfImages(file, "file_prefix", options);

			expect(res).toBe("No Error");
		});

		it("Accepts options and list all images in PDF file as Buffer", async () => {
			const poppler = new Poppler(testBinaryPath);
			const attachmentFile = await readFile(file);
			const options = {
				list: true,
			};

			const res = await poppler.pdfImages(
				attachmentFile,
				undefined,
				options
			);

			expect(res).toMatch("page");
		});

		it("Rejects with an Error object if file passed not PDF format", async () => {
			const poppler = new Poppler(testBinaryPath);
			const testTxtFile = `${testDirectory}test.txt`;

			expect.assertions(1);
			await poppler.pdfImages(testTxtFile, "file_prefix").catch((err) => {
				expect(err.message).toMatch(SYNTAX_WARNING_REG);
			});
		});

		it("Rejects with an Error object if PDF file missing", async () => {
			const poppler = new Poppler(testBinaryPath);

			expect.assertions(1);
			await poppler.pdfImages(undefined, "file_prefix").catch((err) => {
				expect(err.message).toMatch(
					/^I\/O Error: Couldn't open file 'undefined'/u
				);
			});
		});

		it("Rejects with an Error object if invalid value types provided for an option are passed to function", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				firstPageToConvert: "test",
				lastPageToConvert: "test",
			};

			await expect(
				poppler.pdfImages(undefined, undefined, options)
			).rejects.toThrow(
				"Invalid value type provided for option 'firstPageToConvert', expected number but received string; Invalid value type provided for option 'lastPageToConvert', expected number but received string"
			);
		});

		it("Rejects with an Error object if invalid option is passed to function", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				middlePageToConvert: "test",
			};

			await expect(
				poppler.pdfImages(undefined, undefined, options)
			).rejects.toThrow("Invalid option provided 'middlePageToConvert'");
		});
	});

	describe("pdfInfo function", () => {
		const pdfInfoObject = {
			encrypted: "no",
			fileSize: "583094 bytes",
			form: "AcroForm",
			javaScript: "no",
			optimized: "no",
			pageRot: "0",
			pageSize: "595.276 x 841.89 pts (A4)",
			pages: "16",
			pdfVersion: "1.3",
			suspects: "no",
			tagged: "yes",
			userProperties: "no",
		};

		it("Lists info of PDF file", async () => {
			const poppler = new Poppler(testBinaryPath);

			const res = await poppler.pdfInfo(file);

			expect(res).toMatch("Pages:");
		});

		it("Lists info of PDF file as a JSON object", async () => {
			const poppler = new Poppler(testBinaryPath);

			const res = await poppler.pdfInfo(file, {
				printAsJson: true,
			});

			expect(res).toMatchObject(pdfInfoObject);
		});

		it("Lists info of PDF file as Buffer", async () => {
			const poppler = new Poppler(testBinaryPath);
			const attachmentFile = await readFile(file);

			const res = await poppler.pdfInfo(attachmentFile);

			expect(res).toMatch("Pages:");
		});

		it("Lists info of PDF file as Buffer as a JSON object", async () => {
			const poppler = new Poppler(testBinaryPath);
			const attachmentFile = await readFile(file);

			const res = await poppler.pdfInfo(attachmentFile, {
				printAsJson: true,
			});

			expect(res).toMatchObject(pdfInfoObject);
		});

		it("Rejects with an Error object if file passed not PDF format", async () => {
			const poppler = new Poppler(testBinaryPath);
			const testTxtFile = `${testDirectory}test.txt`;

			expect.assertions(1);
			await poppler.pdfInfo(testTxtFile).catch((err) => {
				expect(err.message).toMatch(SYNTAX_WARNING_REG);
			});
		});

		it("Rejects with an Error object if PDF file missing", async () => {
			const poppler = new Poppler(testBinaryPath);

			expect.assertions(1);
			await poppler.pdfInfo().catch((err) => {
				expect(err.message).toMatch(IO_ERROR_REG);
			});
		});

		it("Rejects with an Error object if invalid value types provided for an option are passed to function", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				firstPageToConvert: "test",
			};

			await expect(poppler.pdfInfo(file, options)).rejects.toThrow(
				"Invalid value type provided for option 'firstPageToConvert', expected number but received string"
			);
		});

		it("Rejects with an Error object if invalid option is passed to function", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				wordFile: "test",
			};

			await expect(poppler.pdfInfo(file, options)).rejects.toThrow(
				"Invalid option provided 'wordFile'"
			);
		});
	});

	describe("pdfSeparate function", () => {
		it("Extracts 3 pages from PDF file to new files", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				firstPageToExtract: 1,
				lastPageToExtract: 3,
			};
			const outputPattern = `${testDirectory}pdf_1.3_NHS_Constitution-extract-%d.pdf`;

			const res = await poppler.pdfSeparate(file, outputPattern, options);

			expect(typeof res).toBe("string");

			await expect(
				access(`${testDirectory}pdf_1.3_NHS_Constitution-extract-1.pdf`)
			).resolves.toBeUndefined();
			await expect(
				access(`${testDirectory}pdf_1.3_NHS_Constitution-extract-2.pdf`)
			).resolves.toBeUndefined();
			await expect(
				access(`${testDirectory}pdf_1.3_NHS_Constitution-extract-3.pdf`)
			).resolves.toBeUndefined();
		});

		it("Rejects with an Error object if file passed not PDF format", async () => {
			const poppler = new Poppler(testBinaryPath);
			const testTxtFile = `${testDirectory}test.txt`;

			expect.assertions(1);
			await poppler.pdfSeparate(testTxtFile).catch((err) => {
				expect(err.message).toMatch(CMD_FAILED_REG);
			});
		});

		it("Rejects with an Error object if invalid value types provided for an option are passed to function", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				firstPageToExtract: "test",
			};

			await expect(
				poppler.pdfSeparate(file, undefined, options)
			).rejects.toThrow(
				"Invalid value type provided for option 'firstPageToExtract', expected number but received string"
			);
		});

		it("Rejects with an Error object if invalid option is passed to function", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				wordFile: "test",
			};

			await expect(
				poppler.pdfSeparate(file, undefined, options)
			).rejects.toThrow("Invalid option provided 'wordFile'");
		});
	});

	describe("pdfToCairo function", () => {
		describe("PDF-to-EPS option", () => {
			it("Converts PDF file to EPS file", async () => {
				const poppler = new Poppler(testBinaryPath);
				const options = {
					epsFile: true,
					firstPageToConvert: 1,
					lastPageToConvert: 1,
				};
				const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution.eps`;

				const res = await poppler.pdfToCairo(file, outputFile, options);

				expect(res).toBe("No Error");
				await expect(access(outputFile)).resolves.toBeUndefined();
			});

			it("Converts PDF file to EPS file and send to stdout", async () => {
				const poppler = new Poppler(testBinaryPath);
				const options = {
					epsFile: true,
					firstPageToConvert: 1,
					lastPageToConvert: 1,
				};

				const res = await poppler.pdfToCairo(file, undefined, options);

				expect(typeof res).toBe("string");
			});

			it("Converts PDF file as Buffer to EPS file", async () => {
				const poppler = new Poppler(testBinaryPath);
				const attachmentFile = await readFile(file);
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

				expect(res).toBe("No Error");
				await expect(access(outputFile)).resolves.toBeUndefined();
			});
		});

		describe("PDF-to-JPG option", () => {
			it("Converts PDF file to JPG file", async () => {
				const poppler = new Poppler(testBinaryPath);
				const options = {
					jpegFile: true,
				};
				const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution`;

				const res = await poppler.pdfToCairo(file, outputFile, options);

				expect(res).toBe("No Error");
				await expect(
					access(`${outputFile}-01.jpg`)
				).resolves.toBeUndefined();
			});

			it("Converts PDF file to JPG file and send to stdout", async () => {
				const poppler = new Poppler(testBinaryPath);
				const options = {
					jpegFile: true,
					singleFile: true,
				};

				const res = await poppler.pdfToCairo(file, undefined, options);

				expect(typeof res).toBe("string");
			});

			it("Converts PDF file as Buffer to JPG file", async () => {
				const poppler = new Poppler(testBinaryPath);
				const attachmentFile = await readFile(file);
				const options = {
					jpegFile: true,
				};
				const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution`;

				const res = await poppler.pdfToCairo(
					attachmentFile,
					outputFile,
					options
				);

				expect(res).toBe("No Error");
				await expect(
					access(`${outputFile}-01.jpg`)
				).resolves.toBeUndefined();
			});
		});

		describe("PDF-to-PDF option", () => {
			it("Converts PDF file to PDF file", async () => {
				const poppler = new Poppler(testBinaryPath);
				const options = {
					pdfFile: true,
				};
				const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution_cairo.pdf`;

				const res = await poppler.pdfToCairo(file, outputFile, options);

				expect(res).toBe("No Error");
				await expect(access(outputFile)).resolves.toBeUndefined();
			});

			it("Converts PDF file to PDF file and send to stdout", async () => {
				const poppler = new Poppler(testBinaryPath);
				const options = {
					pdfFile: true,
				};

				const res = await poppler.pdfToCairo(file, undefined, options);

				expect(typeof res).toBe("string");
			});

			it("Converts PDF file as Buffer to PDF file", async () => {
				const poppler = new Poppler(testBinaryPath);
				const attachmentFile = await readFile(file);
				const options = {
					pdfFile: true,
				};
				const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution_cairo.pdf`;

				const res = await poppler.pdfToCairo(
					attachmentFile,
					outputFile,
					options
				);

				expect(res).toBe("No Error");
				await expect(access(outputFile)).resolves.toBeUndefined();
			});
		});

		describe("PDF-to-PNG option", () => {
			it("Converts PDF file to PNG file", async () => {
				const poppler = new Poppler(testBinaryPath);
				const options = {
					pngFile: true,
				};
				const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution`;

				const res = await poppler.pdfToCairo(file, outputFile, options);

				expect(res).toBe("No Error");
				await expect(
					access(`${outputFile}-01.png`)
				).resolves.toBeUndefined();
			});

			it("Converts PDF file to PNG file and send to stdout", async () => {
				const poppler = new Poppler(testBinaryPath);
				const options = {
					pngFile: true,
					singleFile: true,
				};

				const res = await poppler.pdfToCairo(file, undefined, options);

				expect(typeof res).toBe("string");
			});

			it("Converts PDF file as Buffer to PNG file", async () => {
				const poppler = new Poppler(testBinaryPath);
				const attachmentFile = await readFile(file);
				const options = {
					pngFile: true,
				};
				const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution`;

				const res = await poppler.pdfToCairo(
					attachmentFile,
					outputFile,
					options
				);

				expect(res).toBe("No Error");
				await expect(
					access(`${outputFile}-01.png`)
				).resolves.toBeUndefined();
			});
		});

		describe("PDF-to-PS option", () => {
			it("Converts PDF file to PS file", async () => {
				const poppler = new Poppler(testBinaryPath);
				const options = {
					psFile: true,
				};
				const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution.ps`;

				const res = await poppler.pdfToCairo(file, outputFile, options);

				expect(res).toBe("No Error");
				await expect(access(outputFile)).resolves.toBeUndefined();
			});

			it("Converts PDF file to PS file and send to stdout", async () => {
				const poppler = new Poppler(testBinaryPath);
				const options = {
					psFile: true,
				};

				const res = await poppler.pdfToCairo(file, undefined, options);

				expect(typeof res).toBe("string");
			});

			it("Converts PDF file as Buffer to PS file", async () => {
				const poppler = new Poppler(testBinaryPath);
				const attachmentFile = await readFile(file);
				const options = {
					psFile: true,
				};
				const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution.ps`;

				const res = await poppler.pdfToCairo(
					attachmentFile,
					outputFile,
					options
				);

				expect(res).toBe("No Error");
				await expect(access(outputFile)).resolves.toBeUndefined();
			});
		});

		describe("PDF-to-SVG option", () => {
			it("Converts PDF file to SVG file", async () => {
				const poppler = new Poppler(testBinaryPath);
				const options = {
					svgFile: true,
				};
				const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution.svg`;

				const res = await poppler.pdfToCairo(file, outputFile, options);

				expect(res).toBe("No Error");
				await expect(access(outputFile)).resolves.toBeUndefined();
			});

			it("Converts PDF file to SVG file and send to stdout", async () => {
				const poppler = new Poppler(testBinaryPath);
				const options = {
					svgFile: true,
				};

				const res = await poppler.pdfToCairo(file, undefined, options);

				expect(typeof res).toBe("string");
			});

			it("Converts PDF file as Buffer to SVG file", async () => {
				const poppler = new Poppler(testBinaryPath);
				const attachmentFile = await readFile(file);
				const options = {
					svgFile: true,
				};
				const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution.svg`;

				const res = await poppler.pdfToCairo(
					attachmentFile,
					outputFile,
					options
				);

				expect(res).toBe("No Error");
				await expect(access(outputFile)).resolves.toBeUndefined();
			});
		});

		describe("PDF-to-TIFF option", () => {
			it("Converts PDF file to TIFF file", async () => {
				const poppler = new Poppler(testBinaryPath);
				const options = {
					tiffFile: true,
				};
				const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution`;

				const res = await poppler.pdfToCairo(file, outputFile, options);

				expect(res).toBe("No Error");
				await expect(
					access(`${outputFile}-01.tif`)
				).resolves.toBeUndefined();
			});

			it("Converts PDF file to TIFF file and send to stdout", async () => {
				const poppler = new Poppler(testBinaryPath);
				const options = {
					singleFile: true,
					tiffFile: true,
				};

				const res = await poppler.pdfToCairo(file, undefined, options);

				expect(typeof res).toBe("string");
			});

			it("Converts PDF file as Buffer to TIFF file", async () => {
				const poppler = new Poppler(testBinaryPath);
				const attachmentFile = await readFile(file);
				const options = {
					tiffFile: true,
				};
				const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution`;

				const res = await poppler.pdfToCairo(
					attachmentFile,
					outputFile,
					options
				);

				expect(res).toBe("No Error");
				await expect(
					access(`${outputFile}-01.tif`)
				).resolves.toBeUndefined();
			});
		});

		it("Accepts options and only process 2 pages of PDF file", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				firstPageToConvert: 1,
				lastPageToConvert: 2,
				svgFile: true,
			};
			const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution.svg`;

			const res = await poppler.pdfToCairo(file, outputFile, options);

			expect(res).toBe("No Error");
			await expect(access(outputFile)).resolves.toBeUndefined();
		});

		it("Rejects with an Error object if file passed not PDF format", async () => {
			const poppler = new Poppler(testBinaryPath);
			const testTxtFile = `${testDirectory}test.txt`;

			expect.assertions(1);
			await poppler.pdfToCairo(testTxtFile).catch((err) => {
				expect(err.message).toMatch("Error:");
			});
		});

		it("Rejects with an Error object if no format option is passed to function", async () => {
			const poppler = new Poppler(testBinaryPath);

			expect.assertions(1);
			await poppler.pdfToCairo(file).catch((err) => {
				expect(err.message).toMatch("Error:");
			});
		});

		it("Rejects with an Error object if invalid value types provided for an option are passed to function", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				pdfFile: "test",
			};

			await expect(
				poppler.pdfToCairo(file, undefined, options)
			).rejects.toThrow(
				"Invalid value type provided for option 'pdfFile', expected boolean but received string"
			);
		});

		it("Rejects with an Error object if invalid option is passed to function", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				wordFile: "test",
			};

			await expect(
				poppler.pdfToCairo(file, undefined, options)
			).rejects.toThrow("Invalid option provided 'wordFile'");
		});
	});

	describe("pdfToHtml function", () => {
		it("Converts PDF file to HTML file", async () => {
			const poppler = new Poppler(testBinaryPath);

			const res = await poppler.pdfToHtml(file);

			expect(res).toMatch("Page-16");
			await expect(
				access(`${testDirectory}pdf_1.3_NHS_Constitution.html`)
			).resolves.toBeUndefined();
		});

		it("Converts PDF file to HTML file as Buffer", async () => {
			const poppler = new Poppler(testBinaryPath);
			const attachmentFile = await readFile(file);

			const res = await poppler.pdfToHtml(
				attachmentFile,
				`${testDirectory}pdf_1.3_NHS_Constitution.html`
			);

			expect(res).toMatch("Page-16");
			await expect(
				access(`${testDirectory}pdf_1.3_NHS_Constitution.html`)
			).resolves.toBeUndefined();
		});

		it.each([true, false])(
			"Converts PDF file to HTML file with ignoreImages option set to %s",
			async (ignoreImages) => {
				const poppler = new Poppler(testBinaryPath);
				const options = {
					firstPageToConvert: 1,
					lastPageToConvert: 2,
					ignoreImages,
				};

				const res = await poppler.pdfToHtml(file, undefined, options);

				expect(res).toMatch("Page-2");
				await expect(
					access(`${testDirectory}pdf_1.3_NHS_Constitution.html`)
				).resolves.toBeUndefined();
			}
		);

		it("Accepts options and only process 2 pages of PDF file", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				firstPageToConvert: 1,
				lastPageToConvert: 2,
			};

			const res = await poppler.pdfToHtml(file, undefined, options);

			expect(res).toMatch("Page-2");
			await expect(
				access(`${testDirectory}pdf_1.3_NHS_Constitution.html`)
			).resolves.toBeUndefined();
		});

		it("Rejects with an Error object if file passed not PDF format", async () => {
			const poppler = new Poppler(testBinaryPath);
			const testTxtFile = `${testDirectory}test.txt`;

			expect.assertions(1);
			await poppler.pdfToHtml(testTxtFile).catch((err) => {
				expect(err.message).toMatch(SYNTAX_WARNING_REG);
			});
		});

		it("Rejects with an Error object if PDF file missing", async () => {
			const poppler = new Poppler(testBinaryPath);

			expect.assertions(1);
			await poppler.pdfToHtml().catch((err) => {
				expect(err.message).toMatch(IO_ERROR_REG);
			});
		});

		it("Rejects with an Error object if invalid value types provided for an option are passed to function", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				firstPageToConvert: "test",
				lastPageToConvert: "test",
			};

			await expect(
				poppler.pdfToHtml(file, undefined, options)
			).rejects.toThrow(
				"Invalid value type provided for option 'firstPageToConvert', expected number but received string; Invalid value type provided for option 'lastPageToConvert', expected number but received string"
			);
		});

		it("Rejects with an Error object if invalid option is passed to function", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				middlePageToConvert: "test",
			};

			await expect(
				poppler.pdfToHtml(file, undefined, options)
			).rejects.toThrow("Invalid option provided 'middlePageToConvert'");
		});
	});

	describe("pdfToPpm function", () => {
		let version;

		beforeAll(async () => {
			const { stderr } = await execFileAsync(
				join(testBinaryPath, "pdftoppm"),
				["-v"]
			);

			version = /(\d{1,2}\.\d{1,2}\.\d{1,2})/u.exec(stderr)[1];
		});

		it("Accepts options and only process 1 page of PDF file", async () => {
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

			expect(res).toBe("No Error");
			await expect(
				access(`${testDirectory}pdf_1.3_NHS_Constitution-01.ppm`)
			).resolves.toBeUndefined();
		});

		it("Accepts options and only process 1 page of PDF file as Buffer", async () => {
			const poppler = new Poppler(testBinaryPath);
			const attachmentFile = await readFile(file);
			const options = {
				firstPageToConvert: 1,
				lastPageToConvert: 1,
			};

			const res = await poppler.pdfToPpm(
				attachmentFile,
				`${testDirectory}pdf_1.3_NHS_Constitution`,
				options
			);

			expect(res).toBe("No Error");
			await expect(
				access(`${testDirectory}pdf_1.3_NHS_Constitution-01.ppm`)
			).resolves.toBeUndefined();
		});

		it("Rejects with an Error object if file passed not PDF format", async () => {
			const poppler = new Poppler(testBinaryPath);
			const testTxtFile = `${testDirectory}test.txt`;

			expect.assertions(1);
			await poppler.pdfToPpm(testTxtFile).catch((err) => {
				expect(err.message).toMatch(SYNTAX_WARNING_REG);
			});
		});

		it("Rejects with an Error object if PDF file missing", async () => {
			const poppler = new Poppler(testBinaryPath);

			expect.assertions(1);
			await poppler.pdfToPpm().catch((err) => {
				expect(err.message).toMatch(IO_ERROR_REG);
			});
		});

		it("Rejects with an Error object if invalid value types provided for an option are passed to function", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				firstPageToConvert: "test",
				lastPageToConvert: "test",
			};

			await expect(
				poppler.pdfToPpm(undefined, undefined, options)
			).rejects.toThrow(
				"Invalid value type provided for option 'firstPageToConvert', expected number but received string; Invalid value type provided for option 'lastPageToConvert', expected number but received string"
			);
		});

		it("Rejects with an Error object if option provided is only available in a later version of the pdftoppm binary than what was provided", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				printProgress: true,
			};

			if (lt(version, "21.03.0", { loose: true })) {
				await expect(
					poppler.pdfToPpm(
						file,
						`${testDirectory}pdf_1.3_NHS_Constitution`,
						options
					)
				).rejects.toThrow(
					`Invalid option provided for the current version of the binary used. 'printProgress' was introduced in v21.03.0, but received v${version}`
				);
			}
		});

		it("Rejects with an Error object if invalid option is passed to function", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				middlePageToConvert: "test",
			};

			await expect(
				poppler.pdfToPpm(undefined, undefined, options)
			).rejects.toThrow("Invalid option provided 'middlePageToConvert'");
		});
	});

	describe("pdfToPs function", () => {
		it("Converts PDF file to PS file and write to output file", async () => {
			const poppler = new Poppler(testBinaryPath);
			const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution.ps`;

			const res = await poppler.pdfToPs(file, outputFile);

			expect(res).toBe("No Error");
			await expect(access(outputFile)).resolves.toBeUndefined();
		});

		it("Converts PDF file as Buffer to PS file", async () => {
			const poppler = new Poppler(testBinaryPath);
			const attachmentFile = await readFile(file);

			const res = await poppler.pdfToPs(attachmentFile);

			expect(typeof res).toBe("string");
		});

		it("Accepts options and only process 2 pages of PDF file", async () => {
			const poppler = new Poppler(testBinaryPath);
			const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution.ps`;
			const options = {
				firstPageToConvert: 1,
				lastPageToConvert: 2,
			};

			const res = await poppler.pdfToPs(file, outputFile, options);

			expect(res).toBe("No Error");
			await expect(access(outputFile)).resolves.toBeUndefined();
		});

		it("Rejects with an Error object if file passed not PDF format", async () => {
			const poppler = new Poppler(testBinaryPath);
			const testTxtFile = `${testDirectory}test.txt`;

			expect.assertions(1);
			await poppler.pdfToPs(testTxtFile).catch((err) => {
				expect(err.message).toMatch(SYNTAX_WARNING_REG);
			});
		});

		it("Rejects with an Error object if PDF file missing", async () => {
			const poppler = new Poppler(testBinaryPath);

			expect.assertions(1);
			await poppler.pdfToPs().catch((err) => {
				expect(err.message).toMatch(IO_ERROR_REG);
			});
		});

		it("Rejects with an Error object if invalid value types provided for an option are passed to function", async () => {
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

		it("Rejects with an Error object if invalid option is passed to function", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				middlePageToConvert: "test",
			};

			await expect(
				poppler.pdfToPs(file, undefined, options)
			).rejects.toThrow("Invalid option provided 'middlePageToConvert'");
		});
	});

	describe("pdfToText function", () => {
		it("Converts PDF file to Text file and write to output file", async () => {
			const poppler = new Poppler(testBinaryPath);
			const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution.txt`;

			const res = await poppler.pdfToText(file, outputFile);

			expect(res).toBe("No Error");
			await expect(access(outputFile)).resolves.toBeUndefined();
		});

		it("Converts PDF file as Buffer to Text file", async () => {
			const poppler = new Poppler(testBinaryPath);
			const attachmentFile = await readFile(file);

			const res = await poppler.pdfToText(attachmentFile);

			expect(res).toMatch("The NHS Constitution");
		});

		it("Converts PDF file to Text file and retains the original layout, including whitespace", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				maintainLayout: true,
			};

			const res = await poppler.pdfToText(
				whitespaceFile,
				undefined,
				options
			);

			expect(res).toMatch(/^\s*/u);
			expect(res).toMatch(/\s*$/u);
		});

		it("Accepts options and only process 2 pages of PDF file", async () => {
			const poppler = new Poppler(testBinaryPath);
			const outputFile = `${testDirectory}pdf_1.3_NHS_Constitution.txt`;
			const options = {
				firstPageToConvert: 1,
				lastPageToConvert: 2,
			};

			const res = await poppler.pdfToText(file, outputFile, options);

			expect(res).toBe("No Error");
			await expect(access(outputFile)).resolves.toBeUndefined();
		});

		it("Rejects with an Error object if file passed not PDF format", async () => {
			const poppler = new Poppler(testBinaryPath);
			const testTxtFile = `${testDirectory}test.txt`;

			expect.assertions(1);
			await poppler.pdfToText(testTxtFile).catch((err) => {
				expect(err.message).toMatch(SYNTAX_WARNING_REG);
			});
		});

		it("Rejects with an Error object if PDF file missing", async () => {
			const poppler = new Poppler(testBinaryPath);

			expect.assertions(1);
			await poppler.pdfToText().catch((err) => {
				expect(err.message).toMatch(IO_ERROR_REG);
			});
		});

		it("Rejects with an Error object if invalid value types provided for an option are passed to function", async () => {
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

		it("Rejects with an Error object if invalid option is passed to function", async () => {
			const poppler = new Poppler(testBinaryPath);
			const options = {
				middlePageToConvert: "test",
			};

			await expect(
				poppler.pdfToText(file, undefined, options)
			).rejects.toThrow("Invalid option provided 'middlePageToConvert'");
		});
	});

	describe("pdfUnite function", () => {
		it("Merges two separate PDF files into a new single PDF file", async () => {
			const poppler = new Poppler(testBinaryPath);
			const files = [
				file,
				`${testDirectory}pdf_1.7_NHS_Constitution_Handbook.pdf`,
			];
			const outputFile = `${testDirectory}united.pdf`;

			const res = await poppler.pdfUnite(files, outputFile);

			expect(typeof res).toBe("string");
			await expect(access(outputFile)).resolves.toBeUndefined();
		});

		it("Rejects with an Error object if a PDF file and non-PDF file are attempted to be merged", async () => {
			const poppler = new Poppler(testBinaryPath);
			const files = [
				`${testDirectory}test.txt`,
				`${testDirectory}pdf_1.7_NHS_Constitution_Handbook.pdf`,
			];

			expect.assertions(1);
			await poppler.pdfUnite(files).catch((err) => {
				expect(err.message).toMatch(CMD_FAILED_REG);
			});
		});

		it("Rejects with an Error object if invalid value types provided for an option are passed to function", async () => {
			const poppler = new Poppler(testBinaryPath);
			const files = [
				file,
				`${testDirectory}pdf_1.7_NHS_Constitution_Handbook.pdf`,
			];
			const options = {
				printVersionInfo: "test",
			};

			await expect(
				poppler.pdfUnite(files, undefined, options)
			).rejects.toThrow(
				"Invalid value type provided for option 'printVersionInfo', expected boolean but received string"
			);
		});

		it("Rejects with an Error object if invalid option is passed to function", async () => {
			const poppler = new Poppler(testBinaryPath);
			const files = [
				file,
				`${testDirectory}pdf_1.7_NHS_Constitution_Handbook.pdf`,
			];
			const options = {
				wordFile: "test",
			};

			await expect(
				poppler.pdfUnite(files, undefined, options)
			).rejects.toThrow("Invalid option provided 'wordFile'");
		});
	});
});
