# Changelog

All notable changes to this project will be documented in this file.

### [5.1.1](https://www.github.com/Fdawgs/node-poppler/compare/v5.1.0...v5.1.1) (2021-12-11)


### Bug Fixes

* **index:** correct message thrown for missing binaries ([#363](https://www.github.com/Fdawgs/node-poppler/issues/363)) ([5249d61](https://www.github.com/Fdawgs/node-poppler/commit/5249d6183b11f6c9eded643359e05d4f3ecf9f01))


### Continuous Integration

* trigger workflows when drafts marked as "ready to review" ([#354](https://www.github.com/Fdawgs/node-poppler/issues/354)) ([de922a2](https://www.github.com/Fdawgs/node-poppler/commit/de922a20494d8bc87333da156248342805e37a15))


### Documentation

* **coc:** reduce verbosity ([b38d954](https://www.github.com/Fdawgs/node-poppler/commit/b38d9549a890e434868cc26a59867a26a49b8167))


### Improvements

* **index:** remove unused `if` conditional ([d56589d](https://www.github.com/Fdawgs/node-poppler/commit/d56589d41caa60533718bee24eb5797aec0f40eb))


### Miscellaneous

* ignore `.yarnclean` ([#360](https://www.github.com/Fdawgs/node-poppler/issues/360)) ([196b528](https://www.github.com/Fdawgs/node-poppler/commit/196b528c860bd0bd191e1dbc53c1dfc2867aa334))
* **package/scripts:** add `lint:licenses` ([#361](https://www.github.com/Fdawgs/node-poppler/issues/361)) ([a010434](https://www.github.com/Fdawgs/node-poppler/commit/a0104344c0569887e3af82263aa091cde0027afc))
* turn off `security/detect-object-injection` eslint rule ([1d6dc35](https://www.github.com/Fdawgs/node-poppler/commit/1d6dc35bfe4c0e54391745a3ff45485b0c76fac0))


### Dependencies

* **dependabot:** ignore minor and patch github-actions updates ([#356](https://www.github.com/Fdawgs/node-poppler/issues/356)) ([56d1a86](https://www.github.com/Fdawgs/node-poppler/commit/56d1a86e20681a8b747da0713176522be7de258e))
* **dependabot:** ignore minor and patch release-please-action updates ([#367](https://www.github.com/Fdawgs/node-poppler/issues/367)) ([b77729f](https://www.github.com/Fdawgs/node-poppler/commit/b77729f4764f7536fda9ead8cac0b08dc75b269a))
* **deps-dev:** bump @commitlint/cli from 14.1.0 to 15.0.0 ([08d87b5](https://www.github.com/Fdawgs/node-poppler/commit/08d87b55891b56d81fe73db9db1a0b0eb98b9d17))
* **deps-dev:** bump @commitlint/config-conventional ([c5452ee](https://www.github.com/Fdawgs/node-poppler/commit/c5452eef69ef09503ee7a357f09595c8526a2e0a))
* **deps-dev:** bump prettier from 2.4.1 to 2.5.0 ([74f9e90](https://www.github.com/Fdawgs/node-poppler/commit/74f9e907ef9cdabb039463845055316d42a21ad5))
* **deps-dev:** bump prettier from 2.5.0 to 2.5.1 ([d51ca9b](https://www.github.com/Fdawgs/node-poppler/commit/d51ca9b64884715b47eed2db64229b84c9dd9f4a))

## [5.1.0](https://www.github.com/Fdawgs/node-poppler/compare/v5.0.3...v5.1.0) (2021-11-10)


### Features

* **index:** add `printUrls` arg to `pdfInfo()` options ([d58da5f](https://www.github.com/Fdawgs/node-poppler/commit/d58da5fc0d6fe6b1eeef8a660701052dd11a17fa))


### Bug Fixes

* **lib:** update poppler win32 binaries from 21.10.0 to 21.11.0 ([1838bee](https://www.github.com/Fdawgs/node-poppler/commit/1838bee3c21dc6d467db3246b5e5da0802216cf2))


### Continuous Integration

* **ci:** do not run clean-up on draft prs ([088722d](https://www.github.com/Fdawgs/node-poppler/commit/088722dde16c7cc9176c90797386d33b56b92056))
* **spell-check:** do not run on draft prs ([6a48913](https://www.github.com/Fdawgs/node-poppler/commit/6a48913d01f63ec34c30230fe82bb34ad5d3b49e))


### Dependencies

* **deps-dev:** bump eslint-config-airbnb-base from 14.2.1 to 15.0.0 ([063e5b4](https://www.github.com/Fdawgs/node-poppler/commit/063e5b4338f7a311aebcb3b75c264c4cfd9a8ed5))
* **deps-dev:** bump eslint-plugin-import from 2.25.2 to 2.25.3 ([5962621](https://www.github.com/Fdawgs/node-poppler/commit/59626219099901f73cd30ab720f07f1f50fa33e6))
* **deps-dev:** bump eslint-plugin-jest from 25.2.2 to 25.2.4 ([77423a1](https://www.github.com/Fdawgs/node-poppler/commit/77423a1f88976182404ccabe498e7d26f22f40a4))


### Documentation

* **readme:** add stdout example ([#353](https://www.github.com/Fdawgs/node-poppler/issues/353)) ([f1ed3c2](https://www.github.com/Fdawgs/node-poppler/commit/f1ed3c27eff6a4bfc3a3d273c5137e7a184c4096))

### [5.0.3](https://www.github.com/Fdawgs/node-poppler/compare/v5.0.2...v5.0.3) (2021-11-04)


### Bug Fixes

* **index:** normalize `binPath` constructor param ([#345](https://www.github.com/Fdawgs/node-poppler/issues/345)) ([3ec8cae](https://www.github.com/Fdawgs/node-poppler/commit/3ec8cae42432a49fcd467467d7a1c2cd5d9be1d8))
* **index:** pdftocairo `singleFile` option ([31bbe79](https://www.github.com/Fdawgs/node-poppler/commit/31bbe79d22a68b751ee060a682b7bdcfa44ce6a7))
* **index:** pdftocairo stdout encoding for `pdfFile` option ([8ddcbba](https://www.github.com/Fdawgs/node-poppler/commit/8ddcbba76c2ed650b6c56f63ecb8621fdc66ff45))


### Documentation

* bump coc from v2.0.0 to v2.1.0 ([#334](https://www.github.com/Fdawgs/node-poppler/issues/334)) ([7754959](https://www.github.com/Fdawgs/node-poppler/commit/775495963ef5011754e734f63dca1a04c5d3cb25))


### Miscellaneous

* **.eslintrc:** remove redundant `impliedStrict` option ([#332](https://www.github.com/Fdawgs/node-poppler/issues/332)) ([417380e](https://www.github.com/Fdawgs/node-poppler/commit/417380ec732352e2aa7040accac1333d02588e88))
* **.prettierrc:** only enable `bracketSameLine` for html ([#341](https://www.github.com/Fdawgs/node-poppler/issues/341)) ([30dfe71](https://www.github.com/Fdawgs/node-poppler/commit/30dfe719fa84be290406240c054cf142a7e41824))


### Continuous Integration

* **cd:** stop `prepare` script running ([#342](https://www.github.com/Fdawgs/node-poppler/issues/342)) ([5d22a76](https://www.github.com/Fdawgs/node-poppler/commit/5d22a76e8b331630e6a65a9061a1fe57d3785e3a))


### Dependencies

* **deps-dev:** bump @commitlint/cli from 13.2.1 to 14.1.0 ([ffb9ccb](https://www.github.com/Fdawgs/node-poppler/commit/ffb9ccbd93b58d8f6a3571f8a8036187ccf63a49))
* **deps-dev:** bump @commitlint/config-conventional ([fa491ea](https://www.github.com/Fdawgs/node-poppler/commit/fa491eaf0a8c8d8a35c3039b9054aa81e770ff06))
* **deps-dev:** bump dev dependencies ([#335](https://www.github.com/Fdawgs/node-poppler/issues/335)) ([ac2e119](https://www.github.com/Fdawgs/node-poppler/commit/ac2e11955b8b00d74666262ee68bed1f6f3ab346))
* **deps:** bump actions/checkout from 2.3.4 to 2.3.5 ([d3d838c](https://www.github.com/Fdawgs/node-poppler/commit/d3d838caf16a47af3841ec5bce45fa98f01b7c21))
* **deps:** bump actions/checkout from 2.3.5 to 2.4.0 ([de7aad4](https://www.github.com/Fdawgs/node-poppler/commit/de7aad4ab48198f065df6044b4c897c23b831829))

### [5.0.2](https://www.github.com/Fdawgs/node-poppler/compare/v5.0.1...v5.0.2) (2021-10-12)


### Bug Fixes

* **lib:** update poppler win32 binaries from 21.09.0 to 21.10.0 ([c8e1e77](https://www.github.com/Fdawgs/node-poppler/commit/c8e1e770cb4afa77008c82d56c3fbf3cb5609670))


### Continuous Integration

* **automerge:** update location of octokit rest methods ([c2d6959](https://www.github.com/Fdawgs/node-poppler/commit/c2d6959f71355fd7a8e274c19e59010ef4bff958))


### Miscellaneous

* **.eslintrc:** remove inaccurate sourcetype ([#323](https://www.github.com/Fdawgs/node-poppler/issues/323)) ([db65fb6](https://www.github.com/Fdawgs/node-poppler/commit/db65fb62386596fb327c8fbd1d7a6e5fd8f16003))
* **.prettierrc:** enable `bracketsameline` option ([ccd86c9](https://www.github.com/Fdawgs/node-poppler/commit/ccd86c92087c0df02ceab41251a6cbc653ce3d85))
* **.vscode:** remove deprecated settings ([#324](https://www.github.com/Fdawgs/node-poppler/issues/324)) ([0638d8e](https://www.github.com/Fdawgs/node-poppler/commit/0638d8e776de7d7570f2578250c7f8651c6c3ad4))
* **index:** resolve `jsdoc/no-multi-asterisks` warning ([#325](https://www.github.com/Fdawgs/node-poppler/issues/325)) ([e54c041](https://www.github.com/Fdawgs/node-poppler/commit/e54c04199df9e8e49535f0e0499d908ab6ab9531))


### Dependencies

* **deps-dev:** add eslint-plugin-security-node ([#316](https://www.github.com/Fdawgs/node-poppler/issues/316)) ([5f7d6ad](https://www.github.com/Fdawgs/node-poppler/commit/5f7d6ad6d3bae444b05fdeb735f38d392fdd360c))
* **deps-dev:** bump eslint-plugin-jest from 24.7.0 to 25.0.5 ([5924cc7](https://www.github.com/Fdawgs/node-poppler/commit/5924cc700bb5ad47dd76ec9bfced9013af69c733))
* **deps-dev:** bump prettier from 2.4.0 to 2.4.1 ([ae71ec2](https://www.github.com/Fdawgs/node-poppler/commit/ae71ec26996cb1b6eb90d84265eda27e4efa6499))
* **deps:** bump actions/setup-node from 2.4.0 to 2.4.1 ([18e8f62](https://www.github.com/Fdawgs/node-poppler/commit/18e8f62d479a632e04eae37de7745f07ef81d3aa))
* **deps:** bump GoogleCloudPlatform/release-please-action ([e27671b](https://www.github.com/Fdawgs/node-poppler/commit/e27671b95a0241168bd5a367aa2940f2bee278ff))
* **deps:** bump GoogleCloudPlatform/release-please-action ([84e74cf](https://www.github.com/Fdawgs/node-poppler/commit/84e74cf100dcd7f6fc97438910d78d7cd54bcffa))
* **deps:** bump wagoid/commitlint-github-action from 4.1.4 to 4.1.5 ([2f8052b](https://www.github.com/Fdawgs/node-poppler/commit/2f8052b7884dd55505d571acb5cefd53f3edb08a))
* **deps:** bump wagoid/commitlint-github-action from 4.1.5 to 4.1.9 ([bf11955](https://www.github.com/Fdawgs/node-poppler/commit/bf11955894fc0a4100533f1e744a5a4d956d1fd3))

### [5.0.1](https://www.github.com/Fdawgs/node-poppler/compare/v5.0.0...v5.0.1) (2021-09-13)


### Bug Fixes

* **lib:** update poppler win32 binaries from 21.08.0 to 21.09.0 ([#313](https://www.github.com/Fdawgs/node-poppler/issues/313)) ([6cd1a3c](https://www.github.com/Fdawgs/node-poppler/commit/6cd1a3c2e5d6f2f5d81f4b2c1c76317ccd97abbd))


### Continuous Integration

* **ci:** revert to workflow-run-clean-action from github concurrency ([4b85707](https://www.github.com/Fdawgs/node-poppler/commit/4b857076e02aad23799127ad8f54c1b1229afc7d))


### Miscellaneous

* **.eslintrc:** set correct ecmascript version ([#308](https://www.github.com/Fdawgs/node-poppler/issues/308)) ([055e44e](https://www.github.com/Fdawgs/node-poppler/commit/055e44ed58982e6d9658187beb1f7f280c244b57))
* **.husky/.gitignore:** remove now redundant file ([d8891bc](https://www.github.com/Fdawgs/node-poppler/commit/d8891bc6b3eb99564d661aeacd097b80e4588194))
* **.prettierrc:** override defaults for html, css, and scss files ([#309](https://www.github.com/Fdawgs/node-poppler/issues/309)) ([73f9044](https://www.github.com/Fdawgs/node-poppler/commit/73f9044050709188290902a360f1a705e9f3b0c9))
* **.vscode:** add `mhutchie.git-graph` extension ([6d86a88](https://www.github.com/Fdawgs/node-poppler/commit/6d86a885bd7354dc00dbf6da5ff95bfa6b032e74))


### Dependencies

* **deps-dev:** bump prettier from 2.3.2 to 2.4.0 ([5f61282](https://www.github.com/Fdawgs/node-poppler/commit/5f61282a4a7d5a0d5ae972a8c3d7c3dac3495d71))
* **deps:** bump GoogleCloudPlatform/release-please-action ([5694596](https://www.github.com/Fdawgs/node-poppler/commit/5694596c506fc6c954c99cb93762f9381815da6d))
* **deps:** bump wagoid/commitlint-github-action from 4.1.1 to 4.1.4 ([f20e9c7](https://www.github.com/Fdawgs/node-poppler/commit/f20e9c7e7a7cb0a18f044fffe691f591669937d3))

## [5.0.0](https://www.github.com/Fdawgs/node-poppler/compare/v4.1.2...v5.0.0) (2021-09-06)


### ⚠ BREAKING CHANGES

* **index:** macOS/Darwin binaries have been removed due to persistent issues with them. Please download macOS binaries separately through Homebrew.

### Bug Fixes

* **index:** remove included macos/darwin binaries ([1bfa703](https://www.github.com/Fdawgs/node-poppler/commit/1bfa70332d0f2c5d49cf10e2d750fade332f50b0))
* **index:** throw new error not return it as returning leads to silent failures ([#299](https://www.github.com/Fdawgs/node-poppler/issues/299)) ([e22d02d](https://www.github.com/Fdawgs/node-poppler/commit/e22d02d8f16c635e4a54a46a7e6e1dba97618a2d))


### Miscellaneous

* **.github:** use new YAML configured GitHub issue forms ([#303](https://www.github.com/Fdawgs/node-poppler/issues/303)) ([4760072](https://www.github.com/Fdawgs/node-poppler/commit/4760072385521b2546d1b4b7cc672d84584afc54))


### Continuous Integration

* **ci:** replace workflow-run-cleanup-action with github concurrency ([#304](https://www.github.com/Fdawgs/node-poppler/issues/304)) ([0f08d1f](https://www.github.com/Fdawgs/node-poppler/commit/0f08d1f05dc55aec6381c44731dd1220c7f87599))


### Dependencies

* add .npmignore; reduce package size from 15.6MB to 13.7MB ([#306](https://www.github.com/Fdawgs/node-poppler/issues/306)) ([3f0fbe6](https://www.github.com/Fdawgs/node-poppler/commit/3f0fbe6b150c68b97c93ea7e3002097715fa090a))

### [4.1.2](https://www.github.com/Fdawgs/node-poppler/compare/v4.1.1...v4.1.2) (2021-08-30)


### Bug Fixes

* **lib:** update poppler win32 binaries from 21.03.0 to 21.08.0 ([#296](https://www.github.com/Fdawgs/node-poppler/issues/296)) ([34f9e37](https://www.github.com/Fdawgs/node-poppler/commit/34f9e3758a0825cb7f1178cdbf6285e8b93fdb8b))


### Documentation

* **readme:** grammar fix ([7503c62](https://www.github.com/Fdawgs/node-poppler/commit/7503c62f4a48f89c7201a0bc5fe007ff3c6091ad))


### Dependencies

* **deps-dev:** bump @commitlint/cli from 12.1.4 to 13.1.0 ([b15218e](https://www.github.com/Fdawgs/node-poppler/commit/b15218ee56847a4d03eac125fd10c57d6804424e))
* **deps-dev:** bump @commitlint/config-conventional ([bfac706](https://www.github.com/Fdawgs/node-poppler/commit/bfac7066d0bf326d6ec21562b8d588434824249a))
* **deps-dev:** bump dependencies ([#297](https://www.github.com/Fdawgs/node-poppler/issues/297)) ([f922709](https://www.github.com/Fdawgs/node-poppler/commit/f922709bedef53ad604448618731849ceab412d7))
* **deps-dev:** bump eslint-plugin-jsdoc from 35.5.1 to 36.0.6 ([38e7554](https://www.github.com/Fdawgs/node-poppler/commit/38e75543fb91c478486f8c514d53988dfd56abd5))
* **deps:** bump actions/github-script from 4.0.2 to 4.1 ([f90cfbd](https://www.github.com/Fdawgs/node-poppler/commit/f90cfbdf2e69bf5cb017025226ab0c430aed5336))
* **deps:** bump actions/setup-node from 2.3.0 to 2.4.0 ([9180bca](https://www.github.com/Fdawgs/node-poppler/commit/9180bca0fcfd59bec5b8e192bcbba79d62ac6bdd))
* **deps:** bump GoogleCloudPlatform/release-please-action ([d46efc8](https://www.github.com/Fdawgs/node-poppler/commit/d46efc8d0e8651331ea195fa224c7d3c3a38fbe4))

### [4.1.1](https://www.github.com/Fdawgs/node-poppler/compare/v4.1.0...v4.1.1) (2021-07-23)


### Bug Fixes

* **index:** add "3221226505" error code mapping ([5017df6](https://www.github.com/Fdawgs/node-poppler/commit/5017df6f4a32abcdb15425d8ef8ba7545a7308d6))


### Continuous Integration

* **ci:** disable homebrew analytics for macos builds ([#278](https://www.github.com/Fdawgs/node-poppler/issues/278)) ([92ad4fa](https://www.github.com/Fdawgs/node-poppler/commit/92ad4fa2ba60a0fb6054da386b7bfdd9504dd476))
* **link-check:** reduce frequency from daily to monthly ([#272](https://www.github.com/Fdawgs/node-poppler/issues/272)) ([5e91c2a](https://www.github.com/Fdawgs/node-poppler/commit/5e91c2aa2cf3b807ce1e2f6b6317b1e5e2f58c3f))


### Improvements

* **index:** consolidate child process `close` event handling ([db89bd6](https://www.github.com/Fdawgs/node-poppler/commit/db89bd6a849f5d93c0651f915e2310e6a9708a47))


### Dependencies

* **deps-dev:** bump husky from 6.0.0 to 7.0.0 ([e9f9c97](https://www.github.com/Fdawgs/node-poppler/commit/e9f9c97c38f849f596723616d89a90d70fa371d8))
* **deps-dev:** bump prettier from 2.3.0 to 2.3.2 ([9eeed40](https://www.github.com/Fdawgs/node-poppler/commit/9eeed40785c45d4251490cb7c3dc982ea0f1e36b))
* **deps:** bump actions/setup-node from 2.1.5 to 2.2.0 ([dba9b38](https://www.github.com/Fdawgs/node-poppler/commit/dba9b38b1de6d7a69ff4243e7e959dc956cbf645))
* **deps:** bump actions/setup-node from 2.2.0 to 2.3.0 ([c41ef56](https://www.github.com/Fdawgs/node-poppler/commit/c41ef569eb590dec54375063939f8338587174a3))
* **deps:** bump actions/upload-artifact from 2.2.3 to 2.2.4 ([2461ce1](https://www.github.com/Fdawgs/node-poppler/commit/2461ce1461468d76b9a067088f86e941467ae0e3))
* **deps:** bump coverallsapp/github-action from 1.1.2 to 1.1.3 ([a6cecca](https://www.github.com/Fdawgs/node-poppler/commit/a6ceccac9470be00a9dd0e15f8fb1d3690fb78c4))
* **deps:** bump wagoid/commitlint-github-action from 3.1.4 to 4.1.1 ([b29337c](https://www.github.com/Fdawgs/node-poppler/commit/b29337c52b9a7d8ca878ff659737473f53813d06))


### Miscellaneous

* **gitignore:** add test generated pdfs ([c70638c](https://www.github.com/Fdawgs/node-poppler/commit/c70638c9bf3dc29a7245683f7f0604db86c17012))
* **index/pdftocairo:** sort file ext list alphabetically ascending ([8912fc1](https://www.github.com/Fdawgs/node-poppler/commit/8912fc12ba1f022a2a4b24973ce5c491dcbebe36))
* **package:** update keywords ([5169f74](https://www.github.com/Fdawgs/node-poppler/commit/5169f7473ac0c35f76a6685835f456e9a87570f8))
* **prettierignore:** ignore all test folder content ([d69dccd](https://www.github.com/Fdawgs/node-poppler/commit/d69dccdf684be316cb35535a53877add76763024))
* **vscode:** disable red hat telemetry ([d0084b5](https://www.github.com/Fdawgs/node-poppler/commit/d0084b550fa7d2b9ba81da798ca7387ce3155c28))
* **vscode:** remove user space config setting ([c899f9f](https://www.github.com/Fdawgs/node-poppler/commit/c899f9fc3ad05af2611efe0b5a4d4e3de64136f1))

## [4.1.0](https://www.github.com/Fdawgs/node-poppler/compare/v4.0.0...v4.1.0) (2021-06-02)


### Features

* **index:** add `printAsJson` arg to `pdfInfo()` options ([56a2ffb](https://www.github.com/Fdawgs/node-poppler/commit/56a2ffbac898209057fdc87f6fec23b18af5404f)), thanks to @sainf


### Bug Fixes

* **index:** normalize binary paths ([15cb1a1](https://www.github.com/Fdawgs/node-poppler/commit/15cb1a16bb2fc98b702f52977e824eef412ad937))


### Miscellaneous

* **workflows:** remove `stale.yml` ([167484a](https://www.github.com/Fdawgs/node-poppler/commit/167484ab9b84871b62925636a028ad47a975ee5e))


### Continuous Integration

* **cd:** move perf optimizations and refactoring into same section ([842d3f5](https://www.github.com/Fdawgs/node-poppler/commit/842d3f588219bd9611021eee6da89731cbbf8a0f))


### Dependencies

* **deps-dev:** bump eslint-plugin-jsdoc from 34.8.2 to 35.1.2 ([277f31f](https://www.github.com/Fdawgs/node-poppler/commit/277f31f8352f6254d253d164acb86973fac83eb1))
* **deps-dev:** bump jest from 26.6.3 to 27.0.3 ([e28c345](https://www.github.com/Fdawgs/node-poppler/commit/e28c345ba69f0211131411cc98446288dfb75ff9))


### Documentation

* **readme:** grammar and wordiness fixes ([4a02092](https://www.github.com/Fdawgs/node-poppler/commit/4a0209271df7eb7cd110f324a19e77f14d2fb8d9))
* **readme:** update `pdfToHtml()` examples ([e10a821](https://www.github.com/Fdawgs/node-poppler/commit/e10a821beb34dad8b4eea90e70353ed3d8ed8349))
* **readme:** update contributing section ([99f4cd6](https://www.github.com/Fdawgs/node-poppler/commit/99f4cd63eb566975296d697c5788edde8e52ff06))

## [4.0.0](https://www.github.com/Fdawgs/node-poppler/compare/v3.0.1...v4.0.0) (2021-05-21)


### ⚠ BREAKING CHANGES

* **index:** optional `outputFile`string parameter for `pdfToHtml()` function has been added after `file`. `Poppler.pdfToHtml(file, options)` is now `Poppler.pdfToHtml(file, outputFile, options)`.

### Features

* **index:** add `outputFile` param to `pdfToHtml()` function ([cabdf58](https://www.github.com/Fdawgs/node-poppler/commit/cabdf58c1831ecf85eec984b473552f73f516230))


### Miscellaneous

* **eslintrc:** ignore empty lines in jsdoc comments ([6ae7b61](https://www.github.com/Fdawgs/node-poppler/commit/6ae7b617676e85d76affd6d5a77bd6878690f50f))

### [3.0.1](https://www.github.com/Fdawgs/node-poppler/compare/v3.0.0...v3.0.1) (2021-05-20)


### Bug Fixes

* **index:** remove setting default encoding of received buffer ([baa3d43](https://www.github.com/Fdawgs/node-poppler/commit/baa3d43fac0e7080328efa3bb45aa0c3658a63e5))


### Documentation

* **readme:** remove repetition ([8a36c2d](https://www.github.com/Fdawgs/node-poppler/commit/8a36c2d02030c28af0c0c571a302c190e8eacd86))


### Miscellaneous

* **ci:** replace `node-version` key with shorter `node` ([#255](https://www.github.com/Fdawgs/node-poppler/issues/255)) ([4a6cfa9](https://www.github.com/Fdawgs/node-poppler/commit/4a6cfa99d79605df51d9ca9af683d8c43809501c))


### Dependencies

* **deps-dev:** bump dev dependencies ([7c6ef15](https://www.github.com/Fdawgs/node-poppler/commit/7c6ef1518c0a4b6d281476590e2db56e5eafc6c2))
* **deps:** bump actions/stale from 3.0.18 to 3.0.19 ([2479e6a](https://www.github.com/Fdawgs/node-poppler/commit/2479e6af27d1077020f56ee0a444a8a539ff78d0))
* **deps:** bump GoogleCloudPlatform/release-please-action ([ce14fcf](https://www.github.com/Fdawgs/node-poppler/commit/ce14fcfc4ed03f7ad01b388c9ca455a3463ec525))
* **deps:** bump wagoid/commitlint-github-action from 3.1.0 to 3.1.4 ([697c43c](https://www.github.com/Fdawgs/node-poppler/commit/697c43cb4f0858a6ce3eb4b9025e53acd3035fbf))


### Continuous Integration

* **ci:** replace `ubuntu-20.04` with `ubuntu-latest`; both same version ([aaf1e5f](https://www.github.com/Fdawgs/node-poppler/commit/aaf1e5fab099734f6ff8ca0585e276ed7572f8a6))
* fix key usage in `action/setup-node` ([3cfb17b](https://www.github.com/Fdawgs/node-poppler/commit/3cfb17b16c369462f2bff239d23e374fb0cc4fa0))

## [3.0.0](https://www.github.com/Fdawgs/node-poppler/compare/v2.5.0...v3.0.0) (2021-04-29)


### ⚠ BREAKING CHANGES

* remove support for nodejs v10, as it is EOL as of 2021-04-30

### Miscellaneous

* remove support for node v10 ([fa1a8c1](https://www.github.com/Fdawgs/node-poppler/commit/fa1a8c178757498da3b847c99f3de6da3b17740f))


### Documentation

* grammar and readability fixes ([4637e3e](https://www.github.com/Fdawgs/node-poppler/commit/4637e3ef3b06eed0d56646bec54a2982d1907e07))


### Continuous Integration

* add nodejs v16 to unit test matrix ([52ead20](https://www.github.com/Fdawgs/node-poppler/commit/52ead20deeafe8b80afd5c77d26c924c71afab32))
* **link-check:** ignore links to lib binaries ([f71f67b](https://www.github.com/Fdawgs/node-poppler/commit/f71f67b6ccfe316575c5c588b05dc938dd08d98c))

## [2.5.0](https://www.github.com/Fdawgs/node-poppler/compare/v2.4.1...v2.5.0) (2021-04-21)


### Features

* support buffer input for functions ([#238](https://www.github.com/Fdawgs/node-poppler/issues/238)) ([a9a88cd](https://www.github.com/Fdawgs/node-poppler/commit/a9a88cd4d79a13332090fd3c0f3be2ed00124537))


### Continuous Integration

* add cleanup-run job ([b826a9e](https://www.github.com/Fdawgs/node-poppler/commit/b826a9e8b01dae1575b43d51eba4e3a534c775da))
* **automerge:** move automerge job into new workflow ([9b06c43](https://www.github.com/Fdawgs/node-poppler/commit/9b06c4355f671ab0e63472e2697f5393838eb247))
* **ci:** ignore dependabot prs for commit message linting ([4802519](https://www.github.com/Fdawgs/node-poppler/commit/4802519a783de692288e439f669e4f855f7f28f2))
* do not run coveralls steps/jobs on forks ([82bbdf3](https://www.github.com/Fdawgs/node-poppler/commit/82bbdf381abe5cbcb3b1cba5062d69be75389d43))
* **link-check:** fix skip regex ([1803802](https://www.github.com/Fdawgs/node-poppler/commit/18038021f9c644cb427193446035ff50830d5748))
* **stale:** shorten workflow name ([a93b619](https://www.github.com/Fdawgs/node-poppler/commit/a93b619bbde22b0fc110cb2c84bad2e3c5375312))
* **workflows:** run only on push and pulls to master branch ([a97b3b3](https://www.github.com/Fdawgs/node-poppler/commit/a97b3b37b4795f4e2d176376a52021b70ce17560))


### Dependencies

* **deps-dev:** bump eslint-plugin-promise from 4.3.1 to 5.1.0 ([2af245b](https://www.github.com/Fdawgs/node-poppler/commit/2af245b195f859103e9cc11bf49666379297583e))
* **deps-dev:** bump husky from 4.3.8 to 6.0.0 ([53a38b9](https://www.github.com/Fdawgs/node-poppler/commit/53a38b9836e8fcc981d06207169a96bb931a0bce))
* **deps:** bump actions/github-script from v3.1.0 to v3.1.1 ([918a23a](https://www.github.com/Fdawgs/node-poppler/commit/918a23a36e23c307059aa9013ff44ca81d77a1d9))
* **deps:** bump actions/upload-artifact from v2.2.2 to v2.2.3 ([93e1cc5](https://www.github.com/Fdawgs/node-poppler/commit/93e1cc5bd53e1840110fd626ae68505dafe0d4b5))
* **deps:** bump GoogleCloudPlatform/release-please-action ([9c06911](https://www.github.com/Fdawgs/node-poppler/commit/9c0691105cdc73db6e8c5d76ae5180c11f4b5b79))
* **deps:** bump GoogleCloudPlatform/release-please-action ([c602243](https://www.github.com/Fdawgs/node-poppler/commit/c602243285b59326fd7727ceb4e83524d763f3e1))
* **deps:** bump typoci/spellcheck-action from v0.3.0 to v0.4.0 ([ceab8ee](https://www.github.com/Fdawgs/node-poppler/commit/ceab8ee0f8108401ebbf9bcab72cc884360110dd))
* **deps:** bump typoci/spellcheck-action from v0.4.0 to v1.0.0 ([c8ea234](https://www.github.com/Fdawgs/node-poppler/commit/c8ea234fa48d7bfa08d46b4041aad291cdf3e033))
* **deps:** bump wagoid/commitlint-github-action from v3.0.6 to v3.1.0 ([bcd1cc6](https://www.github.com/Fdawgs/node-poppler/commit/bcd1cc606142b3b450d6de1eed75b4791fd4dab3))


### Miscellaneous

* prep release ([3f62b5a](https://www.github.com/Fdawgs/node-poppler/commit/3f62b5a565d137cc1a6ca52a971824d14735080a))


### Documentation

* **readme:** add example of buffer usage ([f3dbfff](https://www.github.com/Fdawgs/node-poppler/commit/f3dbffff7957fedb6adbb56d195879793db91fdc))

### [2.4.1](https://www.github.com/Fdawgs/node-poppler/compare/v2.4.0...v2.4.1) (2021-03-18)


### Bug Fixes

* **index:** add missing  option to pdftocairo ([#222](https://www.github.com/Fdawgs/node-poppler/issues/222)) ([631583f](https://www.github.com/Fdawgs/node-poppler/commit/631583f7a5f98267057e299d357e67ce5190db1f))


### Dependencies

* **deps-dev:** bump dev dependencies ([c062248](https://www.github.com/Fdawgs/node-poppler/commit/c0622482c3a37d533870050e438a060edcccde45))
* **deps:** bump fastify/github-action-merge-dependabot ([9111211](https://www.github.com/Fdawgs/node-poppler/commit/911121163658950b702dfa570fa1dc6864fd6e33))
* **deps:** bump GoogleCloudPlatform/release-please-action ([74bae38](https://www.github.com/Fdawgs/node-poppler/commit/74bae38b51f57bc3597eefa730c650bc77aaefb0))


### Miscellaneous

* **api:** lint with prettier ([7b224b3](https://www.github.com/Fdawgs/node-poppler/commit/7b224b32f4ce94e9e8877660d40a5b61971922fe))
* **husky:** move doc step to pre-commit hook ([6dc466c](https://www.github.com/Fdawgs/node-poppler/commit/6dc466ccd952f5289c12e5c0a339bc06e36d4f8d))
* **husky:** reorder pre-push hook ([cd3bf8e](https://www.github.com/Fdawgs/node-poppler/commit/cd3bf8e1e35e03d3e9c251cb89488ece95ab7597))
* **prettierignore:** add `api.md` ([c226f81](https://www.github.com/Fdawgs/node-poppler/commit/c226f812f8f62911a96612c080468ecace20d0d6))

## [2.4.0](https://www.github.com/Fdawgs/node-poppler/compare/v2.3.0...v2.4.0) (2021-03-09)


### Features

* **index:** add binary version checking for options ([13febb5](https://www.github.com/Fdawgs/node-poppler/commit/13febb5fdb7d9d7fa77670a93bee1e11020fc1b5))


### Bug Fixes

* **index:** add missing `dataurls` option to pdftohtml ([ec45b5b](https://www.github.com/Fdawgs/node-poppler/commit/ec45b5bb1882a73e2a46b87ce906b6a366295487))
* **index:** add missing `forcepagenumber` option to pdftoppm ([533f424](https://www.github.com/Fdawgs/node-poppler/commit/533f4249069aa08d8ec928f8f0d588786327bea9))
* **index:** add missing `hideannotations` option to pdftoppm ([ffbe119](https://www.github.com/Fdawgs/node-poppler/commit/ffbe119c8ce069801a43cfaa2a1faa3f051bcf8e))
* **index:** add missing `separator` option to pdftoppm ([7744abd](https://www.github.com/Fdawgs/node-poppler/commit/7744abd8deec299a043230e38b70825e9d6728a9))
* **index:** correct misspelling of `received` in error string ([f6b7fcb](https://www.github.com/Fdawgs/node-poppler/commit/f6b7fcb7ca1b941eccdcc0c8688fdba8dd3cfb99))


### Miscellaneous

* **workflows:** rename ci and perf sections ([54caeda](https://www.github.com/Fdawgs/node-poppler/commit/54caeda0c2f1df947c9b5d717a65d049fbb5c3d5))


### Dependencies

* **deps:** bump actions/stale from v3.0.17 to v3.0.18 ([b449c7e](https://www.github.com/Fdawgs/node-poppler/commit/b449c7e6d8e4facc3fd8e3bfb76d549d3a3b7dc1))
* **deps:** bump fastify/github-action-merge-dependabot ([e0bf38d](https://www.github.com/Fdawgs/node-poppler/commit/e0bf38dd7d6f929d00a2caadae58ab8b1260087f))
* **deps:** bump GoogleCloudPlatform/release-please-action ([f563a41](https://www.github.com/Fdawgs/node-poppler/commit/f563a410fb526ec2182b5d8739d185e066024148))
* **deps:** bump wagoid/commitlint-github-action from v3.0.1 to v3.0.6 ([405aca1](https://www.github.com/Fdawgs/node-poppler/commit/405aca1d83fc7d19bbc76403e825801670f69b10))

## [2.3.0](https://www.github.com/Fdawgs/node-poppler/compare/v2.2.1...v2.3.0) (2021-03-04)


### Features

* **lib:** update poppler win32 binaries from 21.02.0 to 21.03.0 ([4648db5](https://www.github.com/Fdawgs/node-poppler/commit/4648db55f600bceb763fd7c342035ab3362a7ff1))


### Dependencies

* **dependabot:** set commit message prefix; lower pull limit ([25e3652](https://www.github.com/Fdawgs/node-poppler/commit/25e365256f0cfd958d36e8e8146f191bb64eeb40))
* **deps-dev:** bump @commitlint/cli from 11.0.0 to 12.0.1 ([#206](https://www.github.com/Fdawgs/node-poppler/issues/206)) ([78f92b6](https://www.github.com/Fdawgs/node-poppler/commit/78f92b6ba3cbc06c505371ee24aae3da5105a27a))
* **deps-dev:** bump @commitlint/config-conventional ([4708778](https://www.github.com/Fdawgs/node-poppler/commit/47087784c8afe2199faf9fb7fab07c4b204a2616))
* **deps-dev:** bump eslint-config-prettier from 7.2.0 to 8.1.0 ([ef0788a](https://www.github.com/Fdawgs/node-poppler/commit/ef0788accfcd8e0a0acdfc887478a77305e487dd))
* **deps-dev:** bump jsdoc-to-markdown from 6.0.1 to 7.0.0 ([#207](https://www.github.com/Fdawgs/node-poppler/issues/207)) ([b6f88ae](https://www.github.com/Fdawgs/node-poppler/commit/b6f88ae99e7c57ebd9b51052dfe48e45c45bc8d7))
* **deps:** bump wagoid/commitlint-github-action from v2.2.3 to v3.0.1 ([3674b7e](https://www.github.com/Fdawgs/node-poppler/commit/3674b7e7be1e503e59062f2bed0c79bf9bb0d454))
* **deps:** specify minor and hotfix versions ([aa1bb13](https://www.github.com/Fdawgs/node-poppler/commit/aa1bb13ecbe99c91c52824d9574562e9d5caaaa8))


### Miscellaneous

* add link check workflow ([39a83c0](https://www.github.com/Fdawgs/node-poppler/commit/39a83c0347a8af3286515669219577603756075e))
* automate release and changelog generation ([b294617](https://www.github.com/Fdawgs/node-poppler/commit/b294617db770c0165aaa8beda779f0634ecdd53d))
* **codeql:** remove autobuild action ([d20154c](https://www.github.com/Fdawgs/node-poppler/commit/d20154cd0c06dfe0055d8edcde9084a520063400))
* **link-check:** ignore if draft pull request event ([d3c7ad7](https://www.github.com/Fdawgs/node-poppler/commit/d3c7ad7bd80f5ad9118cee6cc825952091d62589))
* **linkcheck:** extend ignored urls ([8c0a238](https://www.github.com/Fdawgs/node-poppler/commit/8c0a238bf1471108ef5eddcef1d11d99cb7f628b))
* **lint-check:** compress patterns ([c9b7e09](https://www.github.com/Fdawgs/node-poppler/commit/c9b7e09f7cd34cdb6a281d741d244c61f4485bfd))
* **lint-check:** run on push and pull events for md files ([91cd1fc](https://www.github.com/Fdawgs/node-poppler/commit/91cd1fcc9e3e5b3f9ef77a1c1dff2287b37e72a7))
* **prettier:** create separate files to allow for CI/CD to use prettier config ([#212](https://www.github.com/Fdawgs/node-poppler/issues/212)) ([8319774](https://www.github.com/Fdawgs/node-poppler/commit/83197747b55609540518aae42b72a11d13ca8715))
* replace stalebot with github action ([237939d](https://www.github.com/Fdawgs/node-poppler/commit/237939d729df7d8e8f0387748a25fbbbb9be6ad4))
* **vscode:** remove conflicting prettier ext setting ([316e244](https://www.github.com/Fdawgs/node-poppler/commit/316e24473cb89f6c45ae5930d47b61d9da3d463c))
* **workflows:** fix release types to account for bots ([7ac80c5](https://www.github.com/Fdawgs/node-poppler/commit/7ac80c52115222e98a0381a4ee990777422b8c45))
* **workflows:** move release steps into `cd` workflow ([86a94e4](https://www.github.com/Fdawgs/node-poppler/commit/86a94e47766eb33216d1c570a191fbae23cc4989))
* **workflows:** rename spellcheck workflow ([8fdff21](https://www.github.com/Fdawgs/node-poppler/commit/8fdff210ba5fab00085ff072ced9b95476a63551))
* **workflows:** tidy node-version syntax ([8b69bc1](https://www.github.com/Fdawgs/node-poppler/commit/8b69bc1f52616e2924f80a7ccae365dbe5917017))


### Documentation

* **changelog:** fix h3 header style ([a0efe08](https://www.github.com/Fdawgs/node-poppler/commit/a0efe080bf2c48de4ac71c021b5733834ba1e56b))
* **readme:** fix broken link ([bc1031b](https://www.github.com/Fdawgs/node-poppler/commit/bc1031b02e33ccda42db80407e52a21698a3d2d5))
* **readme:** shorten links ([300f033](https://www.github.com/Fdawgs/node-poppler/commit/300f0333f4a4c934b3124eb46b5aa07e98dca5ef))

### 2.2.1 (2021-02-16)

-   fix(lib): update poppler win32 binaries from 21.01.0 to 21.02.0 ([1d6a042](https://github.com/Fdawgs/node-poppler/commit/1d6a042))
-   fix(script): add missing ignore-path arg ([ad9f42a](https://github.com/Fdawgs/node-poppler/commit/ad9f42a))
-   ci: add commit-lint job ([33d67c7](https://github.com/Fdawgs/node-poppler/commit/33d67c7))
-   ci: disable long running homebrew cleanup tasks ([693fa0b](https://github.com/Fdawgs/node-poppler/commit/693fa0b))
-   ci: remove cache actions as they use lock file ([960dcbe](https://github.com/Fdawgs/node-poppler/commit/960dcbe))
-   ci: replace typo ci app with action ([7d35422](https://github.com/Fdawgs/node-poppler/commit/7d35422))
-   ci(dependabot): ignore husky updates ([6fc6187](https://github.com/Fdawgs/node-poppler/commit/6fc6187))
-   build(deps-dev): bump eslint-plugin-jsdoc from 31.6.1 to 32.0.1 ([2e3bfec](https://github.com/Fdawgs/node-poppler/commit/2e3bfec))
-   build(deps-dev): pin husky major version ([debb162](https://github.com/Fdawgs/node-poppler/commit/debb162))
-   build(deps-dev): remove coveralls, replaced by github action ([84b5490](https://github.com/Fdawgs/node-poppler/commit/84b5490))
-   build(deps-dev): remove jsinspect ([8fb486a](https://github.com/Fdawgs/node-poppler/commit/8fb486a))
-   build(deps): bump wagoid/commitlint-github-action from v2.0.3 to v2.2.3 ([768532d](https://github.com/Fdawgs/node-poppler/commit/768532d))
-   docs(contributing): add documentation style ([1267ec3](https://github.com/Fdawgs/node-poppler/commit/1267ec3))
-   docs(readme): grammar ([0606995](https://github.com/Fdawgs/node-poppler/commit/0606995))
-   docs(readme): remove stray comma ([c2ea407](https://github.com/Fdawgs/node-poppler/commit/c2ea407))
-   docs(readme): revamp intro section ([729451c](https://github.com/Fdawgs/node-poppler/commit/729451c))
-   style: capitalise headings correctly ([17a688b](https://github.com/Fdawgs/node-poppler/commit/17a688b))
-   style: shorten husky pre-push script ([09da9eb](https://github.com/Fdawgs/node-poppler/commit/09da9eb))
-   style(ci): capitalise jobs and job step names ([1a1e2d4](https://github.com/Fdawgs/node-poppler/commit/1a1e2d4))
-   style(readme): add linebreaks between badges ([92b5d5e](https://github.com/Fdawgs/node-poppler/commit/92b5d5e))
-   style(readme): capitalise headings correctly ([bf8819d](https://github.com/Fdawgs/node-poppler/commit/bf8819d))
-   style(readme): prettier badge shape ([6e01859](https://github.com/Fdawgs/node-poppler/commit/6e01859))
-   style(scripts): rename `jest-coverage` to `jest:coverage` ([5383798](https://github.com/Fdawgs/node-poppler/commit/5383798))
-   style(tests): use apa header style for describe name params ([09df70e](https://github.com/Fdawgs/node-poppler/commit/09df70e))
-   chore: add commitlint husky `commit-msg` hook ([92a3769](https://github.com/Fdawgs/node-poppler/commit/92a3769))
-   chore: add pull request template ([2836701](https://github.com/Fdawgs/node-poppler/commit/2836701))
-   chore: stop excess coverage files being generated ([d6b639b](https://github.com/Fdawgs/node-poppler/commit/d6b639b))
-   chore(vscode): add `redhat.vscode-yaml` as recommended extension ([2270e91](https://github.com/Fdawgs/node-poppler/commit/2270e91))
-   chore(vscode): add `updateImportsOnFileMove` setting ([811db2c](https://github.com/Fdawgs/node-poppler/commit/811db2c))
-   chore(vscode): add workspace settings and extensions ([547243c](https://github.com/Fdawgs/node-poppler/commit/547243c))

## 2.2.0 (2021-01-25)

-   feat(lib): update poppler win32 binaries from 20.12.1 to 21.01.0 ([a552f83](https://github.com/Fdawgs/node-poppler/commit/a552f83))
-   chore(jest): enable resetmocks option ([0eff7af](https://github.com/Fdawgs/node-poppler/commit/0eff7af))
-   build(deps-dev): add husky for git hook handling ([2a5b181](https://github.com/Fdawgs/node-poppler/commit/2a5b181))
-   docs: bump coc from v1.4.0 to v2.0.0 ([ca582da](https://github.com/Fdawgs/node-poppler/commit/ca582da))
-   ci(github-actions): set `flag-name` for parallel coverage tests ([e91f37d](https://github.com/Fdawgs/node-poppler/commit/e91f37d))
-   ci(github-actions): set semver for coverallsapp ([b745a7f](https://github.com/Fdawgs/node-poppler/commit/b745a7f))

### 2.1.3 (2021-01-18)

-   build: add typoci config file ([494cdfe](https://github.com/Fdawgs/node-poppler/commit/494cdfe))
-   build: remove `yarn` as package manager, revert to `npm` ([536b7c2](https://github.com/Fdawgs/node-poppler/commit/536b7c2))
-   build(deps-dev): bump eslint-plugin-jsdoc from 30.7.13 to 31.0.7 (#185) ([dd4aaab](https://github.com/Fdawgs/node-poppler/commit/dd4aaab)), closes [#185](https://github.com/Fdawgs/node-poppler/issues/185)
-   build(deps-dev): remove cross-env ([610d75a](https://github.com/Fdawgs/node-poppler/commit/610d75a))
-   fix: remove lockfile ([738ee92](https://github.com/Fdawgs/node-poppler/commit/738ee92))
-   fix: script calls ([8bea518](https://github.com/Fdawgs/node-poppler/commit/8bea518))
-   ci: ignore scripts on publish ([b53e22b](https://github.com/Fdawgs/node-poppler/commit/b53e22b))
-   ci: refactor `codeql-analysis.yml` ([5094a02](https://github.com/Fdawgs/node-poppler/commit/5094a02))
-   ci: remove redundant javascript dictionary ([93182cd](https://github.com/Fdawgs/node-poppler/commit/93182cd))
-   ci: use yarn cache of node dependencies if present ([5d8f5f2](https://github.com/Fdawgs/node-poppler/commit/5d8f5f2))
-   ci(codeql): specify more query suites ([fe60c65](https://github.com/Fdawgs/node-poppler/commit/fe60c65))
-   ci(typo-ci): add `ydh` to list of excluded words ([b338a36](https://github.com/Fdawgs/node-poppler/commit/b338a36))
-   chore: remove old .env files from gitignore ([235bef1](https://github.com/Fdawgs/node-poppler/commit/235bef1))
-   chore(package): add homepage and bug urls ([ed4225e](https://github.com/Fdawgs/node-poppler/commit/ed4225e))
-   docs: update contact email ([8328e9b](https://github.com/Fdawgs/node-poppler/commit/8328e9b))
-   docs(contributing): update yarn link ([5a9154d](https://github.com/Fdawgs/node-poppler/commit/5a9154d))
-   docs(readme): add acknowledgements section ([c544ace](https://github.com/Fdawgs/node-poppler/commit/c544ace))
-   docs(readme): grammar fixe ([919d205](https://github.com/Fdawgs/node-poppler/commit/919d205))
-   docs(readme): style changes ([4c8b519](https://github.com/Fdawgs/node-poppler/commit/4c8b519))
-   style(ci): tidy job names ([4b736d7](https://github.com/Fdawgs/node-poppler/commit/4b736d7))

### 2.1.2 (2020-12-28)

-   build: update github-actions with dependabot ([ec8bf01](https://github.com/Fdawgs/node-poppler/commit/ec8bf01))
-   build(deps-dev): bump eslint from 7.15.0 to 7.16.0 ([de68d3d](https://github.com/Fdawgs/node-poppler/commit/de68d3d))
-   build(deps-dev): bump eslint-config-prettier from 7.0.0 to 7.1.0 ([1840406](https://github.com/Fdawgs/node-poppler/commit/1840406))
-   build(deps-dev): bump eslint-plugin-jsdoc from 30.7.8 to 30.7.9 ([763e676](https://github.com/Fdawgs/node-poppler/commit/763e676))
-   build(deps-dev): remove eslint-plugin-json ([faccfa6](https://github.com/Fdawgs/node-poppler/commit/faccfa6))
-   build(deps): bump fastify/github-action-merge-dependabot (#180) ([95de123](https://github.com/Fdawgs/node-poppler/commit/95de123)), closes [#180](https://github.com/Fdawgs/node-poppler/issues/180)
-   build(deps): bump node-notifier from 8.0.0 to 8.0.1 ([25c3ffe](https://github.com/Fdawgs/node-poppler/commit/25c3ffe))
-   build(typescript): enable strict option ([87c221e](https://github.com/Fdawgs/node-poppler/commit/87c221e))
-   ci: add linting job; expand scope of jobs ([0b2412c](https://github.com/Fdawgs/node-poppler/commit/0b2412c))
-   ci: add typescript compilation step ([94654e6](https://github.com/Fdawgs/node-poppler/commit/94654e6))
-   ci: automatically merge dependabot pull requests on pass build stage ([105b2f3](https://github.com/Fdawgs/node-poppler/commit/105b2f3))
-   ci: bump actions/setup-node from v1 to v2 ([f19f5b8](https://github.com/Fdawgs/node-poppler/commit/f19f5b8))
-   ci: do not run github actions for draft prs ([c76d373](https://github.com/Fdawgs/node-poppler/commit/c76d373))
-   ci: merge unit test jobs ([73f6ccc](https://github.com/Fdawgs/node-poppler/commit/73f6ccc))
-   ci: move dependency installs to correct step ([bbdeb60](https://github.com/Fdawgs/node-poppler/commit/bbdeb60))
-   ci: reorder lint steps ([b8aca23](https://github.com/Fdawgs/node-poppler/commit/b8aca23))
-   ci: require lint job on automerge ([1fd4523](https://github.com/Fdawgs/node-poppler/commit/1fd4523))
-   ci: use yarn `--frozen-lockfile` flag for repro deps ([dfc2c31](https://github.com/Fdawgs/node-poppler/commit/dfc2c31))
-   style: use default prettier options for trailing commas and quotes ([b8e791d](https://github.com/Fdawgs/node-poppler/commit/b8e791d))
-   style(ci): remove whitespace ([8b9150e](https://github.com/Fdawgs/node-poppler/commit/8b9150e))
-   fix(scripts): test script ([cf4ccd2](https://github.com/Fdawgs/node-poppler/commit/cf4ccd2))
-   chore(scripts): rename test scripts ([c8a2c69](https://github.com/Fdawgs/node-poppler/commit/c8a2c69))
-   docs(readme): remove abbreviation ([715fc9d](https://github.com/Fdawgs/node-poppler/commit/715fc9d))

### 2.1.1 (2020-12-13)

-   build(deps-dev): bump dev dependencies ([c8d76d9](https://github.com/Fdawgs/node-poppler/commit/c8d76d9))
-   fix(lib): update poppler win32 binaries from 20.12.0 to 20.12.1 ([d196360](https://github.com/Fdawgs/node-poppler/commit/d196360))

## 2.1.0 (2020-12-12)

-   ci: add cd action to publish to npm ([eb90059](https://github.com/Fdawgs/node-poppler/commit/eb90059))
-   ci: change ubuntu image to 20.04 ([3bae517](https://github.com/Fdawgs/node-poppler/commit/3bae517))
-   ci: fix builds ([a657e75](https://github.com/Fdawgs/node-poppler/commit/a657e75))
-   ci: replace travis-ci with github actions ([2b2ac0e](https://github.com/Fdawgs/node-poppler/commit/2b2ac0e))
-   chore: add security.md ([b02979f](https://github.com/Fdawgs/node-poppler/commit/b02979f))
-   chore: add stale confg ([63005e2](https://github.com/Fdawgs/node-poppler/commit/63005e2))
-   chore(lib): update poppler win32 binaries from 20.11.0 to 20.12.0 ([51b0a72](https://github.com/Fdawgs/node-poppler/commit/51b0a72))
-   build(deps-dev): bump dev dependencies ([5c363bd](https://github.com/Fdawgs/node-poppler/commit/5c363bd))
-   build(deps): bump ini from 1.3.5 to 1.3.8 ([123a9c0](https://github.com/Fdawgs/node-poppler/commit/123a9c0))
-   docs(index): clarify on options usage in jsdoc tags ([577e8ce](https://github.com/Fdawgs/node-poppler/commit/577e8ce))
-   docs(index): correct accepted type for iccfile option ([01499fa](https://github.com/Fdawgs/node-poppler/commit/01499fa))
-   feat(index): add rasterization color space and ICC profile options ([86edf34](https://github.com/Fdawgs/node-poppler/commit/86edf34))
-   style: format codeql.yml ([7931936](https://github.com/Fdawgs/node-poppler/commit/7931936))

### 2.0.1 (2020-11-10)

-   build(deps-dev): bump dev dependencies ([d21e32f](https://github.com/Fdawgs/node-poppler/commit/d21e32f))
-   fix(index): return promise objects ([81cddaa](https://github.com/Fdawgs/node-poppler/commit/81cddaa))
-   docs(index): correct return jsdoc tag for parseoptions function ([104a3a2](https://github.com/Fdawgs/node-poppler/commit/104a3a2))
-   chore(index): rename const to reflect functionality ([d7633d1](https://github.com/Fdawgs/node-poppler/commit/d7633d1))
-   refactor(index): concat invalid args provided into error object ([12a5c04](https://github.com/Fdawgs/node-poppler/commit/12a5c04))

## 2.0.0 (2020-11-03)

-   docs: enable TypeScript definition generation for all methods ([cceecc8](https://github.com/Fdawgs/node-poppler/commit/cceecc8)) , thanks to @arthurdenner
-   docs(index): correct stdout usage ([be0bb49](https://github.com/Fdawgs/node-poppler/commit/be0bb49))
-   docs(readme): add note about macos binaries ([41c7e1e](https://github.com/Fdawgs/node-poppler/commit/41c7e1e))
-   test(index): correct param orders for function calls ([e075a7b](https://github.com/Fdawgs/node-poppler/commit/e075a7b))
-   build(deps-dev): bump dev dependencies ([c450c04](https://github.com/Fdawgs/node-poppler/commit/c450c04))
-   build(travis): update osx image ([0c043db](https://github.com/Fdawgs/node-poppler/commit/0c043db))
-   feat(index): add typescript definition file ([d82df8b](https://github.com/Fdawgs/node-poppler/commit/d82df8b))
-   feat(lib): update poppler win32 binaries from 20.10.0 to 20.11.0 ([bc5478e](https://github.com/Fdawgs/node-poppler/commit/bc5478e))
-   refactor(index): reorder parameters for all functions ([ead466e](https://github.com/Fdawgs/node-poppler/commit/ead466e))
-   chore: add TypeScript config to generate definition ([c5b4858](https://github.com/Fdawgs/node-poppler/commit/c5b4858)), thanks to @arthurdenner
-   chore(scripts): do not lint ts and tsx files ([b1e8426](https://github.com/Fdawgs/node-poppler/commit/b1e8426))

### BREAKING CHANGE

-   optional `options` object parameter for all functions has been moved to the end. i.e. `Poppler.pdfToText(options, file, outputFile)` is now `Poppler.pdfToText(file, outputFile, options)`.

This allows for easier use of the functions as users no longer have to place an undefined parameter if no options are provided. `Poppler.pdfToText(undefined, file, outputFile)` can now be called instead like `Poppler.pdfToText(file, outputFile)`.

### 1.8.5 (2020-10-14)

-   build: create codeql-analysis.yml workflow file ([7346f8f](https://github.com/Fdawgs/node-poppler/commit/7346f8f))
-   build(deps-dev): bump dev dependencies ([29da2a9](https://github.com/Fdawgs/node-poppler/commit/29da2a9))
-   style(index): rename exec variable to better reflect usage ([528fd88](https://github.com/Fdawgs/node-poppler/commit/528fd88))
-   docs: spelling and grammar fixes ([27ece49](https://github.com/Fdawgs/node-poppler/commit/27ece49))
-   docs(api): add stdout usage for pdftotext, pdftocairo, and pdftops funcs ([bd05f63](https://github.com/Fdawgs/node-poppler/commit/bd05f63))
-   docs(contributing): remove reference to replaced jest script ([874e368](https://github.com/Fdawgs/node-poppler/commit/874e368))
-   chore: remove `jest` script; replaced by `test-only` script ([653cc22](https://github.com/Fdawgs/node-poppler/commit/653cc22))
-   chore(lib): remove redundant win32 poppler files ([bfea135](https://github.com/Fdawgs/node-poppler/commit/bfea135))
-   fix(lib): update poppler win32 binaries from 20.09.0 to 20.10.0 ([ab227f6](https://github.com/Fdawgs/node-poppler/commit/ab227f6))

### 1.8.4 (2020-10-01)

-   build(dependabot): remove assignment of pull requests to user ([dd04661](https://github.com/Fdawgs/node-poppler/commit/dd04661))
-   build(deps-dev): bump dev dependencies ([3157acd](https://github.com/Fdawgs/node-poppler/commit/3157acd))
-   refactor(index): replace execa dependency with native execfile function ([2462b2f](https://github.com/Fdawgs/node-poppler/commit/2462b2f))
-   fix(lib): update poppler win32 binaries from 0.90.1 to 20.09.0 ([9454db2](https://github.com/Fdawgs/node-poppler/commit/9454db2))
-   docs(contributing): correct release step order ([9d8ed89](https://github.com/Fdawgs/node-poppler/commit/9d8ed89))
-   docs(readme): add snyk badge ([32e74d3](https://github.com/Fdawgs/node-poppler/commit/32e74d3))
-   docs(readme): repoint travis-ci badge from .org to .com ([750fe4c](https://github.com/Fdawgs/node-poppler/commit/750fe4c))
-   chore(eslint): add missing plugin declaration ([562b85b](https://github.com/Fdawgs/node-poppler/commit/562b85b))
-   chore(eslint): remove unnecessary eslint rules ([907806a](https://github.com/Fdawgs/node-poppler/commit/907806a))

### 1.8.3 (2020-08-28)

-   build(deps-dev): add eslint-plugin-security dev dependency ([da49f54](https://github.com/Fdawgs/node-poppler/commit/da49f54))
-   build(deps-dev): bump dev dependencies ([97f96a6](https://github.com/Fdawgs/node-poppler/commit/97f96a6))
-   docs(readme): correct example pdftocairo call ([06ca169](https://github.com/Fdawgs/node-poppler/commit/06ca169)), thanks to @gabenunez for spotting

### 1.8.2 (2020-08-18)

-   chore: reduce minimum nodejs engine version from 12.x to 10.x ([183400d](https://github.com/Fdawgs/node-poppler/commit/183400d))
-   chore(github): add issue templates ([adbe5c9](https://github.com/Fdawgs/node-poppler/commit/adbe5c9))
-   chore(index): spelling and grammar fixes to jsdoc tags ([e3cc16e](https://github.com/Fdawgs/node-poppler/commit/e3cc16e))
-   build(deps-dev): bump dev dependencies to resolve security cve ([310a943](https://github.com/Fdawgs/node-poppler/commit/310a943))

### 1.8.1 (2020-07-26)

-   build(deps-dev): bump dev dependencies ([27bb199](https://github.com/Fdawgs/node-poppler/commit/27bb199))
-   build(travis): add linux test stage ([caa7513](https://github.com/Fdawgs/node-poppler/commit/caa7513))
-   build(travis): make scripts multiline ([39856a6](https://github.com/Fdawgs/node-poppler/commit/39856a6))
-   build(travis): update linux dist to latest lts ([b5c2427](https://github.com/Fdawgs/node-poppler/commit/b5c2427))
-   fix(lib): update poppler win32 binaries from 0.90.0 to 0.90.1 ([cb8c013](https://github.com/Fdawgs/node-poppler/commit/cb8c013))
-   chore(travis): sort os values alphabetically ascending order ([861ed43](https://github.com/Fdawgs/node-poppler/commit/861ed43))

## 1.8.0 (2020-07-20)

The pdftoCairo Poppler Windows binaries have also been updated to v0.90.0 from v0.68.0 in this release.

-   build(deps-dev): bump eslint-plugin-jsdoc from 30.0.0 to 30.0.2 ([0a6bfdd](https://github.com/Fdawgs/node-poppler/commit/0a6bfdd))
-   build(travis): fix misspelling of dist value ([0532060](https://github.com/Fdawgs/node-poppler/commit/0532060))
-   feat(lib): update poppler win32 binaries from 0.89.0 to 0.90.0 ([0f301e2](https://github.com/Fdawgs/node-poppler/commit/0f301e2))
-   style(index): add missing dashes to jsdoc tags ([fd3a360](https://github.com/Fdawgs/node-poppler/commit/fd3a360))
-   style(index): use back ticks as opposed to quotation marks in jsdoc tags ([78bc6e8](https://github.com/Fdawgs/node-poppler/commit/78bc6e8))

### 1.7.6 (2020-07-20)

-   build(deps-dev): bump dev dependencies ([54f0542](https://github.com/Fdawgs/node-poppler/commit/54f0542))
-   build(travis): set osx image to latest version ([680aa14](https://github.com/Fdawgs/node-poppler/commit/680aa14))
-   fix(index): optional outputfiles to send to stdout ([de50f06](https://github.com/Fdawgs/node-poppler/commit/de50f06))

### 1.7.5 (2020-07-16)

-   build(deps-dev): bump dev dependencies ([dd07cde](https://github.com/Fdawgs/node-poppler/commit/dd07cde))
-   build(deps-dev): remove typescript ([39a6f6e](https://github.com/Fdawgs/node-poppler/commit/39a6f6e))
-   build(deps): bump execa from 4.0.2 to 4.0.3 ([9c39105](https://github.com/Fdawgs/node-poppler/commit/9c39105))
-   build(travis): add test step ([3f1dbd0](https://github.com/Fdawgs/node-poppler/commit/3f1dbd0))
-   build(travis): remove osx os from allowed failures ([dc6784e](https://github.com/Fdawgs/node-poppler/commit/dc6784e))
-   build(travis): replace api_token alias to pass config validation ([ba5d231](https://github.com/Fdawgs/node-poppler/commit/ba5d231))
-   build(travis): set linux dist ([183bf02](https://github.com/Fdawgs/node-poppler/commit/183bf02))
-   build(travis): suppress git log; skip rerunning tests on deploy ([3fb542f](https://github.com/Fdawgs/node-poppler/commit/3fb542f))
-   build(travis): use lts version of node for jobs ([48a9d38](https://github.com/Fdawgs/node-poppler/commit/48a9d38))
-   chore(package): update description ([1d54b6a](https://github.com/Fdawgs/node-poppler/commit/1d54b6a))
-   chore(scripts): use gitignore for ignore-path options ([cbfbb90](https://github.com/Fdawgs/node-poppler/commit/cbfbb90))
-   tests(index): use os platform when testing constructor ([bb1112b](https://github.com/Fdawgs/node-poppler/commit/bb1112b))

### 1.7.4 (2020-06-29)

-   chore: add missing jsdoc tags for test function ([770109e](https://github.com/Fdawgs/node-poppler/commit/770109e))
-   chore: create code_of_conduct.md ([9a3a264](https://github.com/Fdawgs/node-poppler/commit/9a3a264))
-   chore(eslint): convert from json to js file format ([a6e7f04](https://github.com/Fdawgs/node-poppler/commit/a6e7f04))
-   chore(eslint): move inline eslint rules into config file ([99fe5be](https://github.com/Fdawgs/node-poppler/commit/99fe5be))
-   chore(eslint): reorder rules ([96f561b](https://github.com/Fdawgs/node-poppler/commit/96f561b))
-   chore(index): add jsdoc descriptions for params to parseoptions function ([3915895](https://github.com/Fdawgs/node-poppler/commit/3915895))
-   chore(scripts): remove prettier ignore-path option ([e65419c](https://github.com/Fdawgs/node-poppler/commit/e65419c))
-   build(deps-dev): bump @commitlint/config-conventional ([6821f42](https://github.com/Fdawgs/node-poppler/commit/6821f42))
-   build(deps-dev): bump eslint from 7.2.0 to 7.3.1 ([cda023a](https://github.com/Fdawgs/node-poppler/commit/cda023a))
-   build(deps-dev): bump eslint-plugin-jest from 23.13.2 to 23.17.1 ([c8ab3f7](https://github.com/Fdawgs/node-poppler/commit/c8ab3f7))
-   build(deps-dev): bump eslint-plugin-jsdoc from 27.0.7 to 28.5.1 ([87ca360](https://github.com/Fdawgs/node-poppler/commit/87ca360))
-   build(deps-dev): bump jest from 26.0.1 to 26.1.0 ([c7868dc](https://github.com/Fdawgs/node-poppler/commit/c7868dc))
-   Create Dependabot config file ([0dff433](https://github.com/Fdawgs/node-poppler/commit/0dff433))
-   refactor: replace promise syntax with async await ([5e6c1e4](https://github.com/Fdawgs/node-poppler/commit/5e6c1e4))
-   refactor(index): move args array inside parseoptions function ([41c44ef](https://github.com/Fdawgs/node-poppler/commit/41c44ef))

### 1.7.3 (2020-06-15)

The MacOS/Darwin Poppler binaries included have been updated from 0.66.0 to 0.89.0 by @chetanism,
bringing this inline with the Windows binaries.

-   build(deps-dev): bump eslint from 6.8.0 to 7.2.0 ([4c7309a](https://github.com/Fdawgs/node-poppler/commit/4c7309a))
-   build(deps-dev): bump eslint-config-airbnb-base from 14.1.0 to 14.2.0 ([e7b8ffc](https://github.com/Fdawgs/node-poppler/commit/e7b8ffc))
-   build(deps-dev): bump eslint-plugin-import from 2.21.1 to 2.21.2 ([506b29b](https://github.com/Fdawgs/node-poppler/commit/506b29b))
-   build(deps-dev): bump eslint-plugin-jsdoc from 27.0.4 to 27.0.7 ([837111f](https://github.com/Fdawgs/node-poppler/commit/837111f))
-   docs(readme): tidy example code ([8469292](https://github.com/Fdawgs/node-poppler/commit/8469292))
-   feat(lib): update poppler darwin binaries from 0.66.0 to 0.89.0 ([9ed863d](https://github.com/Fdawgs/node-poppler/commit/9ed863d))

### 1.7.2 (2020-06-08)

-   docs(api): regenerate api docs with new jsdoc-to-markdown version ([4a103a6](https://github.com/Fdawgs/node-poppler/commit/4a103a6))
-   build(deps-dev): bump eslint-plugin-import from 2.20.2 to 2.21.1 ([a4b74c0](https://github.com/Fdawgs/node-poppler/commit/a4b74c0))
-   build(deps-dev): bump eslint-plugin-jsdoc from 26.0.0 to 27.0.4 ([90d9e3f](https://github.com/Fdawgs/node-poppler/commit/90d9e3f))
-   build(deps-dev): bump jsdoc-to-markdown from 5.0.3 to 6.0.1 ([5c76f5e](https://github.com/Fdawgs/node-poppler/commit/5c76f5e))
-   build(deps-dev): bump typescript from 3.9.3 to 3.9.5 ([27f6e36](https://github.com/Fdawgs/node-poppler/commit/27f6e36))
-   feat(lib): update poppler win32 binaries from 0.88.0 to 0.89.0 ([6c3084d](https://github.com/Fdawgs/node-poppler/commit/6c3084d))
-   chore(scripts): expand coverage of eslint and prettier ([412c2e2](https://github.com/Fdawgs/node-poppler/commit/412c2e2))

### 1.7.1 (2020-05-29)

-   chore: add missing @param descriptions ([483613b](https://github.com/Fdawgs/node-poppler/commit/483613b))
-   chore: add missing @returns tag ([5ae795f](https://github.com/Fdawgs/node-poppler/commit/5ae795f))
-   chore: correct @returns jsdoc tag for all functions ([42943ae](https://github.com/Fdawgs/node-poppler/commit/42943ae))
-   chore: correct case of type for @param jsdoc tag ([104cd7f](https://github.com/Fdawgs/node-poppler/commit/104cd7f))
-   chore: update gitignore with latest github version ([8c1806c](https://github.com/Fdawgs/node-poppler/commit/8c1806c))
-   chore(deps-dev): bump conventional-changelog-cli from 2.0.31 to 2.0.34 ([96bed5d](https://github.com/Fdawgs/node-poppler/commit/96bed5d))
-   chore(deps-dev): bump eslint-plugin-jest from 23.9.0 to 23.13.2 ([dca93c4](https://github.com/Fdawgs/node-poppler/commit/dca93c4))
-   chore(deps-dev): bump eslint-plugin-jsdoc from 25.4.3 to 26.0.0 ([8b387b1](https://github.com/Fdawgs/node-poppler/commit/8b387b1))
-   chore(deps-dev): bump jest from 25.5.4 to 26.0.1 ([a02735a](https://github.com/Fdawgs/node-poppler/commit/a02735a))
-   chore(deps-dev): bump typescript from 3.8.3 to 3.9.3 ([35eead5](https://github.com/Fdawgs/node-poppler/commit/35eead5))
-   chore(package): set minimum engine version ([5b14c99](https://github.com/Fdawgs/node-poppler/commit/5b14c99))
-   tests(index): replace .then() method with async/await ([2fed54c](https://github.com/Fdawgs/node-poppler/commit/2fed54c))
-   build(deps-dev): add promise and jsdoc eslint plugins; update config ([4cb22a1](https://github.com/Fdawgs/node-poppler/commit/4cb22a1))
-   docs(contributing): update conventional commit link to latest version ([628be8d](https://github.com/Fdawgs/node-poppler/commit/628be8d))

## 1.7.0 (2020-05-04)

-   chore(deps-dev): bump coveralls from 3.0.11 to 3.1.0 ([305a8ab](https://github.com/Fdawgs/node-poppler/commit/305a8ab))
-   chore(deps-dev): bump eslint-config-prettier from 6.10.1 to 6.11.0 ([bfd980d](https://github.com/Fdawgs/node-poppler/commit/bfd980d))
-   chore(deps-dev): bump jest from 25.3.0 to 25.5.1 ([1ca14cd](https://github.com/Fdawgs/node-poppler/commit/1ca14cd))
-   chore(deps-dev): bump jest from 25.5.1 to 25.5.2 ([751ad6b](https://github.com/Fdawgs/node-poppler/commit/751ad6b))
-   chore(deps-dev): bump jest from 25.5.2 to 25.5.3 ([903f52f](https://github.com/Fdawgs/node-poppler/commit/903f52f))
-   chore(deps-dev): bump jest from 25.5.3 to 25.5.4 ([6f2c310](https://github.com/Fdawgs/node-poppler/commit/6f2c310))
-   chore(deps-dev): bump prettier from 2.0.4 to 2.0.5 ([ed89abd](https://github.com/Fdawgs/node-poppler/commit/ed89abd))
-   chore(package): add prettier call to api gen script ([80d1cf1](https://github.com/Fdawgs/node-poppler/commit/80d1cf1))
-   feat(lib): update poppler win32 binaries from 0.87.0 to 0.88.0 ([fa8c79b](https://github.com/Fdawgs/node-poppler/commit/fa8c79b))
-   tests(package): add runinband option for jest cli ([d2bc559](https://github.com/Fdawgs/node-poppler/commit/d2bc559))

## 1.6.0 (2020-04-14)

-   feat(index): add new savefile option to pdfdetach function ([c6c7d9c](https://github.com/Fdawgs/node-poppler/commit/c6c7d9c))
-   feat(lib): add poppler 0.87.0 win32 binaries ([78c6200](https://github.com/Fdawgs/node-poppler/commit/78c6200))
-   chore(index): repoint to new binaries ([b1ef39d](https://github.com/Fdawgs/node-poppler/commit/b1ef39d))
-   chore(lib): remove old 0.84.0 win32 binaries ([400bb80](https://github.com/Fdawgs/node-poppler/commit/400bb80))
-   build(deps-dev): bump jest from 25.2.7 to 25.3.0 ([217ed93](https://github.com/Fdawgs/node-poppler/commit/217ed93))

### 1.5.4 (2020-04-10)

-   tests(index): add missing outputfile variable ([a094c19](https://github.com/Fdawgs/node-poppler/commit/a094c19))
-   tests(index): add test pdf file with attached txt file ([a6842a2](https://github.com/Fdawgs/node-poppler/commit/a6842a2))
-   tests(index): add tests for uncovered branches ([720eab9](https://github.com/Fdawgs/node-poppler/commit/720eab9))
-   tests(index): use glob for post-test directory cleanup ([5d16e5a](https://github.com/Fdawgs/node-poppler/commit/5d16e5a))
-   ci(travis): remove dupe-check step ([db1fcd6](https://github.com/Fdawgs/node-poppler/commit/db1fcd6))
-   ci(travis): use linux for npm deploy ([dd113c3](https://github.com/Fdawgs/node-poppler/commit/dd113c3))
-   chore(deps-dev): bump jest from 25.2.7 to 25.3.0 ([68a2b6c](https://github.com/Fdawgs/node-poppler/commit/68a2b6c))
-   chore(deps-dev): bump prettier from 2.0.2 to 2.0.4 ([b5f57ca](https://github.com/Fdawgs/node-poppler/commit/b5f57ca))
-   chore(package): add keywords ([1a15363](https://github.com/Fdawgs/node-poppler/commit/1a15363))
-   chore(package): add runinband cli jest option ([2721e8c](https://github.com/Fdawgs/node-poppler/commit/2721e8c))
-   chore(package): update dupe-check script ([3e8333c](https://github.com/Fdawgs/node-poppler/commit/3e8333c))
-   fix(index): replace catch with then; move code inside resolve function ([95e6c5b](https://github.com/Fdawgs/node-poppler/commit/95e6c5b))
-   build(deps-dev): add missing cross-env ([3a17904](https://github.com/Fdawgs/node-poppler/commit/3a17904))

### 1.5.3 (2020-04-04)

-   chore(deps-dev): bump coveralls from 3.0.9 to 3.0.11 ([149b7dd](https://github.com/Fdawgs/node-poppler/commit/149b7dd))
-   chore(deps-dev): bump eslint-config-prettier from 6.10.0 to 6.10.1 ([0b4623e](https://github.com/Fdawgs/node-poppler/commit/0b4623e))
-   chore(deps-dev): bump eslint-plugin-import from 2.20.1 to 2.20.2 ([e5a4b15](https://github.com/Fdawgs/node-poppler/commit/e5a4b15))
-   chore(deps-dev): bump jest from 25.1.0 to 25.2.7 ([5114f36](https://github.com/Fdawgs/node-poppler/commit/5114f36))
-   chore(deps-dev): bump prettier from 1.19.1 to 2.0.2 ([73108e8](https://github.com/Fdawgs/node-poppler/commit/73108e8))
-   chore(index): move description of function to jsdoc tag ([07b34cc](https://github.com/Fdawgs/node-poppler/commit/07b34cc))
-   chore(package): add prettier call to changelog gen script ([a6c306a](https://github.com/Fdawgs/node-poppler/commit/a6c306a))
-   chore(package): use test-only script when testing ([a7b0e40](https://github.com/Fdawgs/node-poppler/commit/a7b0e40))
-   docs(contributing): grammar and spelling fixes ([3049a69](https://github.com/Fdawgs/node-poppler/commit/3049a69))
-   docs(readme): correct section sizes ([c2cbb70](https://github.com/Fdawgs/node-poppler/commit/c2cbb70))
-   refactor(index): remove options if statement; make each option arg obj ([20a33f3](https://github.com/Fdawgs/node-poppler/commit/20a33f3))
-   test(pdfImages): add test for outputprefix arg ([61899b0](https://github.com/Fdawgs/node-poppler/commit/61899b0))
-   fix(pdfImages): correct arg name to reflect purpose ([8162b2f](https://github.com/Fdawgs/node-poppler/commit/8162b2f))
-   ci(travis): add npm deploy job ([df55316](https://github.com/Fdawgs/node-poppler/commit/df55316))
-   ci(travis): add release tags to branch safelist ([74fce47](https://github.com/Fdawgs/node-poppler/commit/74fce47))

### 1.5.2 (2020-03-16)

-   chore: update dependencies ([57cb710](https://github.com/Fdawgs/node-poppler/commit/57cb710))
-   chore: update lockfile ([7df0325](https://github.com/Fdawgs/node-poppler/commit/7df0325))
-   chore(deps-dev): bump eslint-config-airbnb-base from 14.0.0 to 14.1.0 ([8aed27d](https://github.com/Fdawgs/node-poppler/commit/8aed27d))
-   chore(deps-dev): bump eslint-plugin-jest from 23.7.0 to 23.8.0 ([7d26ccd](https://github.com/Fdawgs/node-poppler/commit/7d26ccd))
-   chore(deps-dev): bump eslint-plugin-jest from 23.8.0 to 23.8.1 ([cc71eef](https://github.com/Fdawgs/node-poppler/commit/cc71eef))
-   chore(deps-dev): bump eslint-plugin-jest from 23.8.1 to 23.8.2 ([cb7f469](https://github.com/Fdawgs/node-poppler/commit/cb7f469))
-   chore(deps-dev): bump eslint-plugin-json from 2.1.0 to 2.1.1 ([741c8ea](https://github.com/Fdawgs/node-poppler/commit/741c8ea))
-   chore(deps-dev): bump typescript from 3.8.2 to 3.8.3 ([4e43b1f](https://github.com/Fdawgs/node-poppler/commit/4e43b1f))

### 1.5.1 (2020-02-21)

-   chore: add .prettierignore ([e2be8a6](https://github.com/Fdawgs/node-poppler/commit/e2be8a6))
-   chore(deps-dev): bump eslint-config-prettier from 6.9.0 to 6.10.0 ([41042d4](https://github.com/Fdawgs/node-poppler/commit/41042d4))
-   chore(deps-dev): bump eslint-plugin-import from 2.20.0 to 2.20.1 ([02d5b82](https://github.com/Fdawgs/node-poppler/commit/02d5b82))
-   chore(deps-dev): bump eslint-plugin-jest from 23.6.0 to 23.7.0 ([d55f696](https://github.com/Fdawgs/node-poppler/commit/d55f696))
-   chore(deps-dev): bump eslint-plugin-json from 2.0.1 to 2.1.0 ([11fc2f2](https://github.com/Fdawgs/node-poppler/commit/11fc2f2))
-   chore(deps-dev): bump typescript from 3.7.5 to 3.8.2 ([3f495a0](https://github.com/Fdawgs/node-poppler/commit/3f495a0))
-   chore(deps-dev): bump jest from 24.9.0 to 25.1.0 ([9919085](https://github.com/Fdawgs/node-poppler/commit/9919085))
-   chore(package): remove redundant config values ([cd38d9b](https://github.com/Fdawgs/node-poppler/commit/cd38d9b))
-   chore(package): update prettier script to also format json and md ([3a5d842](https://github.com/Fdawgs/node-poppler/commit/3a5d842))
-   ci(travis): fix build config ([ce2189f](https://github.com/Fdawgs/node-poppler/commit/ce2189f))
-   docs: change string JSDoc param tags to enum where possible ([0cc3434](https://github.com/Fdawgs/node-poppler/commit/0cc3434))
-   docs: minor clarifications ([374b774](https://github.com/Fdawgs/node-poppler/commit/374b774))

## 1.5.0 (2020-01-19)

-   chore: bump typescript from 3.7.4 to 3.7.5 ([6f5230a](https://github.com/Fdawgs/node-poppler/commit/6f5230a))
-   chore: increment minor version number ([b38cf5a](https://github.com/Fdawgs/node-poppler/commit/b38cf5a))
-   chore: upgrade dependencies ([f15b8dc](https://github.com/Fdawgs/node-poppler/commit/f15b8dc))
-   style: tidy whitespace ([8f4bd44](https://github.com/Fdawgs/node-poppler/commit/8f4bd44))
-   docs: add changelog ([43c85d0](https://github.com/Fdawgs/node-poppler/commit/43c85d0))
-   docs: add contributing guide ([ea71f0a](https://github.com/Fdawgs/node-poppler/commit/ea71f0a))
-   docs: add contributing section ([8667834](https://github.com/Fdawgs/node-poppler/commit/8667834))
-   docs: add links to node.js and yarn ([4eda8ca](https://github.com/Fdawgs/node-poppler/commit/4eda8ca))
-   docs: add Linux support section ([2c331db](https://github.com/Fdawgs/node-poppler/commit/2c331db))
-   docs: add pdfImages function ([fba0644](https://github.com/Fdawgs/node-poppler/commit/fba0644))
-   docs: fix link to issues path ([bb76b79](https://github.com/Fdawgs/node-poppler/commit/bb76b79))
-   docs: tidy punctuation ([aa0c482](https://github.com/Fdawgs/node-poppler/commit/aa0c482))
-   docs: update README.md ([9017e54](https://github.com/Fdawgs/node-poppler/commit/9017e54))
-   docs(pdfImages): add note about outputPath param ([8a83820](https://github.com/Fdawgs/node-poppler/commit/8a83820))
-   fix(pdfImages): add if statement for outputPath param ([acd0277](https://github.com/Fdawgs/node-poppler/commit/acd0277))
-   test(pdfImages): add pdfImages function tests ([fea63cf](https://github.com/Fdawgs/node-poppler/commit/fea63cf))
-   feat: add changelog generation ([b310b67](https://github.com/Fdawgs/node-poppler/commit/b310b67))
-   feat(pdfImages): add pdfImages function ([48beb2d](https://github.com/Fdawgs/node-poppler/commit/48beb2d))
