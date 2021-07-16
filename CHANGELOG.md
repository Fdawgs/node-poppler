# Changelog

All notable changes to this project will be documented in this file.

## [5.0.0](https://www.github.com/Fdawgs/node-poppler/compare/v4.1.0...v5.0.0) (2021-07-16)


### ⚠ BREAKING CHANGES

* **index:** optional `outputFile`string parameter for `pdfToHtml()` function has been added after `file`. `Poppler.pdfToHtml(file, options)` is now `Poppler.pdfToHtml(file, outputFile, options)`.
* remove support for nodejs v10, as it is EOL as of 2021-04-30
* **index:** optional `options` object parameter for all functions has been moved to the end. i.e. `Poppler.pdfToText(options, file, outputFile)` is now `Poppler.pdfToText(file, outputFile, options)`.
* **index:** pdftocairo function remove from poppler class

### Features

* add changelog generation ([af27a4c](https://www.github.com/Fdawgs/node-poppler/commit/af27a4c1d22b4ae444f96f12b6574f0d677a290f))
* add pdfImages function ([a5228f6](https://www.github.com/Fdawgs/node-poppler/commit/a5228f6714990173ed01558d150ba79489c1053e))
* **index:** add `outputFile` param to `pdfToHtml()` function ([da8e9ce](https://www.github.com/Fdawgs/node-poppler/commit/da8e9ced4d8fbc6bec1ba10aab6882b8fe85796d))
* **index:** add `printAsJson` arg to `pdfInfo()` options ([7b2e268](https://www.github.com/Fdawgs/node-poppler/commit/7b2e268f780b41f77b76f1af55813780953427c0))
* **index:** add binary version checking for options ([0205c9d](https://www.github.com/Fdawgs/node-poppler/commit/0205c9de9bb3673fb90bf6f032a3489d9d31e3ac))
* **index:** add new savefile option to pdfdetach function ([0fea51e](https://www.github.com/Fdawgs/node-poppler/commit/0fea51e746cc0a3b27f9e55b5e9105ed8ed13b2c))
* **index:** add rasterization color space and ICC profile options ([6bcc962](https://www.github.com/Fdawgs/node-poppler/commit/6bcc962c28e9530bd543b28ff9b99d1d4ecc797f))
* **index:** add typescript definition file ([743352e](https://www.github.com/Fdawgs/node-poppler/commit/743352ed213b7ce5b7b5aa09fff991ddc807733f))
* **index:** remove deprecated pdftocairo function ([51dcc79](https://www.github.com/Fdawgs/node-poppler/commit/51dcc79cf4b36b1d42aa85c5a7180268c34554a5))
* **lib:** add poppler 0.87.0 win32 binaries ([65270ac](https://www.github.com/Fdawgs/node-poppler/commit/65270ac04d78f747bfd72f0ce75b45c19dbd2441))
* **lib:** update poppler darwin binaries from 0.66.0 to 0.89.0 ([1a7d227](https://www.github.com/Fdawgs/node-poppler/commit/1a7d227ca5357e35aea9a92e3dbcff7979d55da9))
* **lib:** update poppler win32 binaries from 0.87.0 to 0.88.0 ([8a693e5](https://www.github.com/Fdawgs/node-poppler/commit/8a693e5c55e9a3c2c5a4c27d01b9874ee7b5c9e3))
* **lib:** update poppler win32 binaries from 0.88.0 to 0.89.0 ([4ea0d69](https://www.github.com/Fdawgs/node-poppler/commit/4ea0d697fc862fd9b020a62e3fb0abfaa6c3231e))
* **lib:** update poppler win32 binaries from 0.89.0 to 0.90.0 ([e96e066](https://www.github.com/Fdawgs/node-poppler/commit/e96e0666d8dffcf85a60b50cd01f56a620718030))
* **lib:** update poppler win32 binaries from 20.10.0 to 20.11.0 ([7ffbf6c](https://www.github.com/Fdawgs/node-poppler/commit/7ffbf6c365ec7ec8f086729a824d8de0f0658636))
* **lib:** update poppler win32 binaries from 20.12.1 to 21.01.0 ([e63d2da](https://www.github.com/Fdawgs/node-poppler/commit/e63d2daee4af9170913790fdf078074823c4e3a3))
* **lib:** update poppler win32 binaries from 21.02.0 to 21.03.0 ([74cc7df](https://www.github.com/Fdawgs/node-poppler/commit/74cc7df776cdd48585071268db8bb14764d1003b))
* support buffer input for functions ([#238](https://www.github.com/Fdawgs/node-poppler/issues/238)) ([55dfd5a](https://www.github.com/Fdawgs/node-poppler/commit/55dfd5a920bcb926247fe70161ce0b19489bbe7b))


### Bug Fixes

* **index:** add missing  option to pdftocairo ([#222](https://www.github.com/Fdawgs/node-poppler/issues/222)) ([d6d1608](https://www.github.com/Fdawgs/node-poppler/commit/d6d160864f54e1f920e2276afd6bc9d28c25a26f))
* **index:** add missing `dataurls` option to pdftohtml ([973b091](https://www.github.com/Fdawgs/node-poppler/commit/973b09147af01763ffcae118e57234f05d9998e4))
* **index:** add missing `forcepagenumber` option to pdftoppm ([5356693](https://www.github.com/Fdawgs/node-poppler/commit/535669307e1703113fe095c97bfea01e6a3bf56c))
* **index:** add missing `hideannotations` option to pdftoppm ([4e8e49b](https://www.github.com/Fdawgs/node-poppler/commit/4e8e49bfe98a762d31083f846a5e42e3377da7e7))
* **index:** add missing `separator` option to pdftoppm ([973c811](https://www.github.com/Fdawgs/node-poppler/commit/973c81161e8994ee8ba96e76bd94be551203669c))
* **index:** correct misspelling of `received` in error string ([29adc00](https://www.github.com/Fdawgs/node-poppler/commit/29adc004ac698149ac23afd3dc6fb423cc3340c1))
* **index:** normalize binary paths ([eff091b](https://www.github.com/Fdawgs/node-poppler/commit/eff091b818f101b47af0974475f0ad011fbe7518))
* **index:** optional outputfiles to send to stdout ([da4a6e8](https://www.github.com/Fdawgs/node-poppler/commit/da4a6e88ccc4a167e241a781af3322ba688d9e3b))
* **index:** remove setting default encoding of received buffer ([97c02fd](https://www.github.com/Fdawgs/node-poppler/commit/97c02fd80ffc0e7ea3d4d528b03a0d5869fa8fe3))
* **index:** replace catch with then; move code inside resolve function ([da48e2f](https://www.github.com/Fdawgs/node-poppler/commit/da48e2f59b735ee503a80685c3d4dd7f45c812b1))
* **index:** return promise objects ([8a983d0](https://www.github.com/Fdawgs/node-poppler/commit/8a983d026f2725416f1a68aacef9bf2cba79f139))
* **lib:** update poppler win32 binaries from 0.90.0 to 0.90.1 ([f1273d3](https://www.github.com/Fdawgs/node-poppler/commit/f1273d3988ae57af8f7f5c59ffc71f3f023294ce))
* **lib:** update poppler win32 binaries from 0.90.1 to 20.09.0 ([54e47cf](https://www.github.com/Fdawgs/node-poppler/commit/54e47cf67b48415f8c43e8bef58d48dce5a61408))
* **lib:** update poppler win32 binaries from 20.09.0 to 20.10.0 ([ff20d56](https://www.github.com/Fdawgs/node-poppler/commit/ff20d567b003c8e60b6db0cab069b1823f87b3b7))
* **lib:** update poppler win32 binaries from 20.12.0 to 20.12.1 ([da5f62d](https://www.github.com/Fdawgs/node-poppler/commit/da5f62d9ea83de3844224d8cd7bc430367795288))
* **lib:** update poppler win32 binaries from 21.01.0 to 21.02.0 ([9eb28ed](https://www.github.com/Fdawgs/node-poppler/commit/9eb28ed8c63533c9e1ce54e34aee0639ac6f3eb6))
* **pdfImages:** add if statement for outputPath param ([75ac9bf](https://www.github.com/Fdawgs/node-poppler/commit/75ac9bffc0119c0b047ed8efa6ad9ba67db8d718))
* **pdfImages:** correct arg name to reflect purpose ([56e3a7d](https://www.github.com/Fdawgs/node-poppler/commit/56e3a7d84ca03bda11fd701c8ce7f0016436c02d))
* remove lockfile ([b3e232a](https://www.github.com/Fdawgs/node-poppler/commit/b3e232a7a6af6d53e8bf7d8028689a7d9d90633a))
* script calls ([0fbda06](https://www.github.com/Fdawgs/node-poppler/commit/0fbda0689c561cacb8dbbf03c2871d8006316531))
* **script:** add missing ignore-path arg ([ab306b9](https://www.github.com/Fdawgs/node-poppler/commit/ab306b9f4e701611ec796ed8dee66f08b4fa3f33))
* **scripts:** test script ([2b50f72](https://www.github.com/Fdawgs/node-poppler/commit/2b50f728cd283004c434960c2d43c2810f148b60))


### Improvements

* **index:** concat invalid args provided into error object ([757d76f](https://www.github.com/Fdawgs/node-poppler/commit/757d76f5fff5bce5bdf9b8ebfc258ef62ffd2f66))
* **index:** move args array inside parseoptions function ([0dc03a0](https://www.github.com/Fdawgs/node-poppler/commit/0dc03a07021efa8dbc8e180ea82863e30e92aa5a))
* **index:** remove options if statement; make each option arg obj ([2ca6e9c](https://www.github.com/Fdawgs/node-poppler/commit/2ca6e9cead421ef3643a2b1e6d9e0c614b8a16b0))
* **index:** reorder parameters for all functions ([ea36805](https://www.github.com/Fdawgs/node-poppler/commit/ea3680503b531cfe1b907f49d2fc3f06d28cbf2b))
* **index:** replace execa dependency with native execfile function ([ccfe319](https://www.github.com/Fdawgs/node-poppler/commit/ccfe319b96e0158f7b0866bc1864d68380d4eccd))
* replace promise syntax with async await ([e331f2e](https://www.github.com/Fdawgs/node-poppler/commit/e331f2e4962484c128674d5f382bab5379350806))


### Documentation

* add changelog ([05722c9](https://www.github.com/Fdawgs/node-poppler/commit/05722c9e4bad9322cbb17b58d3bf9efb9490dd0b))
* add contributing guide ([ada5121](https://www.github.com/Fdawgs/node-poppler/commit/ada51212e40e2a7e04e6a295e62855ecea837eb1))
* add contributing section ([2399946](https://www.github.com/Fdawgs/node-poppler/commit/23999463ba1cbb2525e590c3365d57ad6d89e450))
* add links to node.js and yarn ([790ec7a](https://www.github.com/Fdawgs/node-poppler/commit/790ec7a9cbadfb3add2b63fc745331b7f780577c))
* add pdfImages function ([182ec9f](https://www.github.com/Fdawgs/node-poppler/commit/182ec9f33f1099bdbf23ccd788c7a5fff850a11b))
* **api:** add stdout usage for pdftotext, pdftocairo, and pdftops funcs ([e86d6f0](https://www.github.com/Fdawgs/node-poppler/commit/e86d6f0f5b2e32f695f153b1e68f77edb7390b37))
* **api:** regenerate api docs with new jsdoc-to-markdown version ([1802c03](https://www.github.com/Fdawgs/node-poppler/commit/1802c031a11daec77d559dbee004b8c7688a5e97))
* bump coc from v1.4.0 to v2.0.0 ([3dc5eaf](https://www.github.com/Fdawgs/node-poppler/commit/3dc5eaf0159829881fe4bc65301c0202637d49b5))
* change string JSDoc param tags to enum where possible ([04201d4](https://www.github.com/Fdawgs/node-poppler/commit/04201d42577da9000a27267991bc71f9d9a166e1))
* **changelog:** fix h3 header style ([f75b33e](https://www.github.com/Fdawgs/node-poppler/commit/f75b33e891ac5100112e9ec333406f70c5e69973))
* **contributing:** add documentation style ([1d20d26](https://www.github.com/Fdawgs/node-poppler/commit/1d20d2623cd4ea74ba800b13b95a162bdc1ce21c))
* **contributing:** correct release step order ([e48e71b](https://www.github.com/Fdawgs/node-poppler/commit/e48e71b6927fc013e757dd27c0267d0c635541c5))
* **contributing:** grammar and spelling fixes ([544a29d](https://www.github.com/Fdawgs/node-poppler/commit/544a29dd54f49480282751f198a8a2f9415aa36e))
* **contributing:** remove reference to replaced jest script ([a5456d5](https://www.github.com/Fdawgs/node-poppler/commit/a5456d5874ea587ddce1d473ee51f1ee01c912cb))
* **contributing:** update conventional commit link to latest version ([cdd3e9f](https://www.github.com/Fdawgs/node-poppler/commit/cdd3e9fd11f5e6d9d9aa4606e33b6c9f0486c93f))
* **contributing:** update yarn link ([5f258ba](https://www.github.com/Fdawgs/node-poppler/commit/5f258ba96fb519192f013eb8d8ae629d19df1a24))
* enable TypeScript definition generation for all methods ([88173e2](https://www.github.com/Fdawgs/node-poppler/commit/88173e23e9ae3c65d1442940615005668408e32f))
* fix link to issues path ([92fe237](https://www.github.com/Fdawgs/node-poppler/commit/92fe2374e4134d9c6f4d8d60ace917535cd582b1))
* grammar and readability fixes ([85b1de9](https://www.github.com/Fdawgs/node-poppler/commit/85b1de96728077a29488762d52cd2b4711787db0))
* **index:** clarify on options usage in jsdoc tags ([d30066b](https://www.github.com/Fdawgs/node-poppler/commit/d30066b0b52f36fa6a5233ac69a402dae357f7a7))
* **index:** correct accepted type for iccfile option ([f1a4786](https://www.github.com/Fdawgs/node-poppler/commit/f1a478640850bdcdf5e907e8ea4c6ec6ee309def))
* **index:** correct return jsdoc tag for parseoptions function ([71c54bc](https://www.github.com/Fdawgs/node-poppler/commit/71c54bcfdeb31a8d5344c56eb0bafbf837f5c20f))
* **index:** correct stdout usage ([302ed17](https://www.github.com/Fdawgs/node-poppler/commit/302ed17e7d1328413611f6b5f3ca4aa7bbd6a4b2))
* minor clarifications ([aa336b9](https://www.github.com/Fdawgs/node-poppler/commit/aa336b92d979662c86de85cabcc76596af84323e))
* **pdfImages:** add note about outputPath param ([bdddcab](https://www.github.com/Fdawgs/node-poppler/commit/bdddcabb610ff97747c81af13be89fb4c1db6f53))
* **readme:** add acknowledgements section ([90d2fa9](https://www.github.com/Fdawgs/node-poppler/commit/90d2fa9dd131fc5a180f57c029349c0251c153e5))
* **readme:** add example of buffer usage ([02d00a5](https://www.github.com/Fdawgs/node-poppler/commit/02d00a560b8d07fa0e63f666a8041650b7320718))
* **readme:** add Greenkeeper badge ([c2d0153](https://www.github.com/Fdawgs/node-poppler/commit/c2d015399bda1c237910839c7a151c707cdccff9))
* **readme:** add note about macos binaries ([b8700c6](https://www.github.com/Fdawgs/node-poppler/commit/b8700c6cd263bb0da12c6d199e7f4f71b0643514))
* **readme:** add snyk badge ([8442ab5](https://www.github.com/Fdawgs/node-poppler/commit/8442ab5bc8be2b4515cda8107f89256ba2fe2285))
* **readme:** correct example pdftocairo call ([c64583a](https://www.github.com/Fdawgs/node-poppler/commit/c64583a328a958984990a333387f2e7303dacb82))
* **readme:** correct section sizes ([79a126b](https://www.github.com/Fdawgs/node-poppler/commit/79a126b60d7629db2f9cc1fe38df0a51288b227f))
* **readme:** fix broken link ([6deba85](https://www.github.com/Fdawgs/node-poppler/commit/6deba85b6b74e118d6b8356c114ab3157f5babf7))
* **readme:** grammar ([506ff7c](https://www.github.com/Fdawgs/node-poppler/commit/506ff7c0f63e837cad16066885db1f9e8a85ce0b))
* **readme:** grammar and wordiness fixes ([9b049db](https://www.github.com/Fdawgs/node-poppler/commit/9b049db84225bdafb2cc3116fc546767893e6e72))
* **readme:** grammar fixe ([8107f46](https://www.github.com/Fdawgs/node-poppler/commit/8107f466bcbaa42b4bafd08cc885c825a139f757))
* **readme:** remove abbreviation ([db08341](https://www.github.com/Fdawgs/node-poppler/commit/db08341da14cabe1a7caff7feeacb86e81bee64f))
* **readme:** remove repetition ([0679429](https://www.github.com/Fdawgs/node-poppler/commit/0679429d8377dcb908b914466af90b13a7954f6d))
* **readme:** remove stray comma ([3a55d48](https://www.github.com/Fdawgs/node-poppler/commit/3a55d485138fb4de132b62f3be5d291a1b77cb50))
* **readme:** repoint travis-ci badge from .org to .com ([ccf7753](https://www.github.com/Fdawgs/node-poppler/commit/ccf77538e26c5c8a85e081b2cac3c3511090e0e3))
* **readme:** revamp intro section ([2328e29](https://www.github.com/Fdawgs/node-poppler/commit/2328e291f365bd604715d3f97964661ace111a70))
* **readme:** shorten links ([8a4d07c](https://www.github.com/Fdawgs/node-poppler/commit/8a4d07c91b787bd176ad2c452716d0ed34a021e4))
* **readme:** style changes ([d658910](https://www.github.com/Fdawgs/node-poppler/commit/d6589104227579538baad2a7779846ed5e0d69a8))
* **readme:** tidy example code ([ba8036c](https://www.github.com/Fdawgs/node-poppler/commit/ba8036c3eb4571e13e7e5551e0be3f5f9c599ee5))
* **readme:** update `pdfToHtml()` examples ([3720c93](https://www.github.com/Fdawgs/node-poppler/commit/3720c9336cc6023fb36025e54c7c4b8bbb47fb5d))
* **readme:** update contributing section ([708826a](https://www.github.com/Fdawgs/node-poppler/commit/708826acae65b5f65d0bf96b4c55dadc63095225))
* spelling and grammar fixes ([21566e3](https://www.github.com/Fdawgs/node-poppler/commit/21566e3be6404a69bea2fd455d6798a2497358af))
* tidy punctuation ([2e26477](https://www.github.com/Fdawgs/node-poppler/commit/2e26477bac37888b7ddecc2dcad2d7e77310b032))
* update contact email ([acd4599](https://www.github.com/Fdawgs/node-poppler/commit/acd45998ef0adc6f37569ff6d8f23ddeedf0d749))


### Dependencies

* add typoci config file ([86c632d](https://www.github.com/Fdawgs/node-poppler/commit/86c632ddb385636296094c00a145dc0aee801d90))
* create codeql-analysis.yml workflow file ([5ffc22d](https://www.github.com/Fdawgs/node-poppler/commit/5ffc22d8a1f88a27c05f0ce12eb3ead7efa73723))
* **dependabot:** remove assignment of pull requests to user ([82c66b8](https://www.github.com/Fdawgs/node-poppler/commit/82c66b83492f2174f6a62f344c98de9729184066))
* **dependabot:** set commit message prefix; lower pull limit ([ad2f5b2](https://www.github.com/Fdawgs/node-poppler/commit/ad2f5b26b66b435c0da45b9d0a55640b8dcac596))
* **deps-dev:** add eslint-plugin-security dev dependency ([6c7f519](https://www.github.com/Fdawgs/node-poppler/commit/6c7f519f4cfe2c9b6c8e8c5ed275c7c100202135))
* **deps-dev:** add husky for git hook handling ([737b639](https://www.github.com/Fdawgs/node-poppler/commit/737b639f2f516bf5dfc08542b4a2d939c397a9e2))
* **deps-dev:** add missing cross-env ([71314c8](https://www.github.com/Fdawgs/node-poppler/commit/71314c898e34e6a8825139eb2a295fcc1c8125f5))
* **deps-dev:** add promise and jsdoc eslint plugins; update config ([3765632](https://www.github.com/Fdawgs/node-poppler/commit/3765632cbbe62e7cf3441b0a409c506c220338cd))
* **deps-dev:** bump @commitlint/cli from 11.0.0 to 12.0.1 ([#206](https://www.github.com/Fdawgs/node-poppler/issues/206)) ([1d46eb0](https://www.github.com/Fdawgs/node-poppler/commit/1d46eb00d252ed1c70a26c86c5e201810529190d))
* **deps-dev:** bump @commitlint/config-conventional ([afdcd9b](https://www.github.com/Fdawgs/node-poppler/commit/afdcd9b782fde02d13f13bdff2b49c3917290398))
* **deps-dev:** bump @commitlint/config-conventional ([67c208e](https://www.github.com/Fdawgs/node-poppler/commit/67c208e6899cb40c64baf32c9ab03c8978ae6cec))
* **deps-dev:** bump dev dependencies ([d96726e](https://www.github.com/Fdawgs/node-poppler/commit/d96726e836a4fdec80e0c04eb9181f132084f8d7))
* **deps-dev:** bump dev dependencies ([a6ac9bc](https://www.github.com/Fdawgs/node-poppler/commit/a6ac9bc2ae4788bf5acd7adfc3378670d0361af2))
* **deps-dev:** bump dev dependencies ([5b16c7e](https://www.github.com/Fdawgs/node-poppler/commit/5b16c7e3f46e0517f81404621b88b78d1e966e9f))
* **deps-dev:** bump dev dependencies ([e2a1400](https://www.github.com/Fdawgs/node-poppler/commit/e2a1400e3c041bd1c09ca5f62fcf40554657eb44))
* **deps-dev:** bump dev dependencies ([10656ff](https://www.github.com/Fdawgs/node-poppler/commit/10656ff27317444903a3936659fe652831ef6224))
* **deps-dev:** bump dev dependencies ([e97b637](https://www.github.com/Fdawgs/node-poppler/commit/e97b637778c604d3e8df095092e1eca169e94425))
* **deps-dev:** bump dev dependencies ([32dd150](https://www.github.com/Fdawgs/node-poppler/commit/32dd1504c0bde5f45acb8147cc95d7aa22d58408))
* **deps-dev:** bump dev dependencies ([6a99b1e](https://www.github.com/Fdawgs/node-poppler/commit/6a99b1e064168cc8c3a7f6319a5f1a401dcba9ab))
* **deps-dev:** bump dev dependencies ([3a128c6](https://www.github.com/Fdawgs/node-poppler/commit/3a128c64c84d26215f2dce76619beadcc9ce4128))
* **deps-dev:** bump dev dependencies ([9350333](https://www.github.com/Fdawgs/node-poppler/commit/9350333d7930c0ec777c60c6e4ee734a18c83e98))
* **deps-dev:** bump dev dependencies ([af5faa2](https://www.github.com/Fdawgs/node-poppler/commit/af5faa23c0641c76d08f91007d54c301bbe203a9))
* **deps-dev:** bump dev dependencies ([25ac0ea](https://www.github.com/Fdawgs/node-poppler/commit/25ac0ea4439b896ca874a8161df6d73ad4bfeae5))
* **deps-dev:** bump dev dependencies to resolve security cve ([8115a19](https://www.github.com/Fdawgs/node-poppler/commit/8115a1909f038ab3333f20b575e9b64655b6c872))
* **deps-dev:** bump eslint from 6.8.0 to 7.2.0 ([e34dcf5](https://www.github.com/Fdawgs/node-poppler/commit/e34dcf58fe9aa7e952c777ce8974b185c8bfd72e))
* **deps-dev:** bump eslint from 7.15.0 to 7.16.0 ([b0d63cb](https://www.github.com/Fdawgs/node-poppler/commit/b0d63cb97ea55fab2f38952be04330aad90e6b84))
* **deps-dev:** bump eslint from 7.2.0 to 7.3.1 ([c5e0f44](https://www.github.com/Fdawgs/node-poppler/commit/c5e0f447b02e00acf4f0883b3f967d3d722b80d3))
* **deps-dev:** bump eslint-config-airbnb-base from 14.1.0 to 14.2.0 ([b9aee21](https://www.github.com/Fdawgs/node-poppler/commit/b9aee210cf0dacf4d1189560093be672c978ae9c))
* **deps-dev:** bump eslint-config-prettier from 7.0.0 to 7.1.0 ([b4ae964](https://www.github.com/Fdawgs/node-poppler/commit/b4ae964c6783a9d508133d7790dbccc9a0a8695a))
* **deps-dev:** bump eslint-config-prettier from 7.2.0 to 8.1.0 ([ab6d674](https://www.github.com/Fdawgs/node-poppler/commit/ab6d674d8c42138da2694b6d7faf01732d0eed13))
* **deps-dev:** bump eslint-plugin-import from 2.20.2 to 2.21.1 ([c020324](https://www.github.com/Fdawgs/node-poppler/commit/c0203247463c2ec14e199f438b924ba749f50820))
* **deps-dev:** bump eslint-plugin-import from 2.21.1 to 2.21.2 ([274013c](https://www.github.com/Fdawgs/node-poppler/commit/274013ce6f2ee1f18cc0a562e50d5bbbf743b5e3))
* **deps-dev:** bump eslint-plugin-jest from 23.13.2 to 23.17.1 ([04a4420](https://www.github.com/Fdawgs/node-poppler/commit/04a4420a4f77ef2e2a5313af0156b5477d28a527))
* **deps-dev:** bump eslint-plugin-jsdoc from 26.0.0 to 27.0.4 ([fb8e3c7](https://www.github.com/Fdawgs/node-poppler/commit/fb8e3c74191708bf01b500ba793b442aade4dfb2))
* **deps-dev:** bump eslint-plugin-jsdoc from 27.0.4 to 27.0.7 ([7142e64](https://www.github.com/Fdawgs/node-poppler/commit/7142e64643b7929ff8e7d3ac6693865cc930581a))
* **deps-dev:** bump eslint-plugin-jsdoc from 27.0.7 to 28.5.1 ([22281a3](https://www.github.com/Fdawgs/node-poppler/commit/22281a300ad78a55c049c34d9d0f8f697f562389))
* **deps-dev:** bump eslint-plugin-jsdoc from 30.0.0 to 30.0.2 ([f6759b5](https://www.github.com/Fdawgs/node-poppler/commit/f6759b53059cc79e7c15cdc87edde63c53f52071))
* **deps-dev:** bump eslint-plugin-jsdoc from 30.7.13 to 31.0.7 ([#185](https://www.github.com/Fdawgs/node-poppler/issues/185)) ([ed5626a](https://www.github.com/Fdawgs/node-poppler/commit/ed5626ac53079f9cb63ec6cdfd6f264f2f6410e6))
* **deps-dev:** bump eslint-plugin-jsdoc from 30.7.8 to 30.7.9 ([3a855a1](https://www.github.com/Fdawgs/node-poppler/commit/3a855a125630e5adb81b81a03f92dc70f02de650))
* **deps-dev:** bump eslint-plugin-jsdoc from 31.6.1 to 32.0.1 ([9e959aa](https://www.github.com/Fdawgs/node-poppler/commit/9e959aa0dc57d4a2957fe2f93fed469158d8333e))
* **deps-dev:** bump eslint-plugin-jsdoc from 32.3.4 to 33.0.0 ([745e86a](https://www.github.com/Fdawgs/node-poppler/commit/745e86ab3e1bec54c19be1fe994a751c9d231f6e))
* **deps-dev:** bump eslint-plugin-jsdoc from 34.8.2 to 35.1.2 ([a85e49a](https://www.github.com/Fdawgs/node-poppler/commit/a85e49a484d4f2e06eae4c8461f23039c1a89a20))
* **deps-dev:** bump eslint-plugin-promise from 4.3.1 to 5.1.0 ([eb1a13f](https://www.github.com/Fdawgs/node-poppler/commit/eb1a13f54ed61a58b09e0b8cfcab8bc760b2cf82))
* **deps-dev:** bump husky from 4.3.8 to 5.0.9 ([#198](https://www.github.com/Fdawgs/node-poppler/issues/198)) ([7ca032b](https://www.github.com/Fdawgs/node-poppler/commit/7ca032bcc69c20f1c0e0f971726ff1c31e09d9ca))
* **deps-dev:** bump husky from 4.3.8 to 6.0.0 ([ffd90fd](https://www.github.com/Fdawgs/node-poppler/commit/ffd90fdda0016b9dfd9fcb526e0cc1d264e1c9f5))
* **deps-dev:** bump husky from 6.0.0 to 7.0.0 ([e9f9c97](https://www.github.com/Fdawgs/node-poppler/commit/e9f9c97c38f849f596723616d89a90d70fa371d8))
* **deps-dev:** bump jest from 25.2.7 to 25.3.0 ([4a52d40](https://www.github.com/Fdawgs/node-poppler/commit/4a52d40af9d6bb72c831812e7097ebbd1e78d44a))
* **deps-dev:** bump jest from 26.0.1 to 26.1.0 ([a675fd7](https://www.github.com/Fdawgs/node-poppler/commit/a675fd74082da6b070f07db538d97246f23676c0))
* **deps-dev:** bump jest from 26.6.3 to 27.0.3 ([b57d8d8](https://www.github.com/Fdawgs/node-poppler/commit/b57d8d8a4a010a3d6c4925c22d5dd10ba5e2ed95))
* **deps-dev:** bump jsdoc-to-markdown from 5.0.3 to 6.0.1 ([c097e0f](https://www.github.com/Fdawgs/node-poppler/commit/c097e0fdcc496aa7022edf335864548978de7d62))
* **deps-dev:** bump jsdoc-to-markdown from 6.0.1 to 7.0.0 ([#207](https://www.github.com/Fdawgs/node-poppler/issues/207)) ([671ab18](https://www.github.com/Fdawgs/node-poppler/commit/671ab18b423a481ef5f2546c52080226dee2e722))
* **deps-dev:** bump prettier from 2.3.0 to 2.3.2 ([9eeed40](https://www.github.com/Fdawgs/node-poppler/commit/9eeed40785c45d4251490cb7c3dc982ea0f1e36b))
* **deps-dev:** bump typescript from 3.9.3 to 3.9.5 ([9aa4ace](https://www.github.com/Fdawgs/node-poppler/commit/9aa4aceb64419dfa41a22fb7b30b0cbd950d2024))
* **deps-dev:** pin husky major version ([208fa38](https://www.github.com/Fdawgs/node-poppler/commit/208fa385d3ef058f546034df4f5305bbf461be97))
* **deps-dev:** remove coveralls, replaced by github action ([26d1d6e](https://www.github.com/Fdawgs/node-poppler/commit/26d1d6e4d5ebd8adac6c6db8135ca529f963903f))
* **deps-dev:** remove cross-env ([28c9353](https://www.github.com/Fdawgs/node-poppler/commit/28c93532e57739a9076d44eb482278584a2a7f7f))
* **deps-dev:** remove eslint-plugin-json ([c1d6cb9](https://www.github.com/Fdawgs/node-poppler/commit/c1d6cb9dbb7d53fd1efe800715585ab17bf70902))
* **deps-dev:** remove jsinspect ([34bde4f](https://www.github.com/Fdawgs/node-poppler/commit/34bde4fe27ebd2b9ea560af337440846212e78ac))
* **deps-dev:** remove typescript ([99cb611](https://www.github.com/Fdawgs/node-poppler/commit/99cb611c16be494aa61c2ab03cc8d2e831514b08))
* **deps:** bump actions/github-script from v3.1.0 to v3.1.1 ([9201e5d](https://www.github.com/Fdawgs/node-poppler/commit/9201e5d427a9485f5767cbbbebe6d8828fd7453d))
* **deps:** bump actions/github-script from v3.1.1 to v4.0.2 ([fb4ef40](https://www.github.com/Fdawgs/node-poppler/commit/fb4ef40e713019abdc9aea9909bb767ab5c1c088))
* **deps:** bump actions/setup-node from 2.1.5 to 2.2.0 ([dba9b38](https://www.github.com/Fdawgs/node-poppler/commit/dba9b38b1de6d7a69ff4243e7e959dc956cbf645))
* **deps:** bump actions/stale from 3.0.18 to 3.0.19 ([ffba1ae](https://www.github.com/Fdawgs/node-poppler/commit/ffba1ae4c1c7fa13e2931be4b9b0fe8c33aba716))
* **deps:** bump actions/stale from v3.0.17 to v3.0.18 ([3db8a21](https://www.github.com/Fdawgs/node-poppler/commit/3db8a213fd808d6bf0fcd4bacb5a875e7a1cb284))
* **deps:** bump actions/upload-artifact from 2.2.3 to 2.2.4 ([2461ce1](https://www.github.com/Fdawgs/node-poppler/commit/2461ce1461468d76b9a067088f86e941467ae0e3))
* **deps:** bump actions/upload-artifact from v2.2.2 to v2.2.3 ([3e4697b](https://www.github.com/Fdawgs/node-poppler/commit/3e4697bd487ed13643271a3610df65389879176c))
* **deps:** bump execa from 4.0.2 to 4.0.3 ([accc610](https://www.github.com/Fdawgs/node-poppler/commit/accc610c0c62d18cf0841d14a0ece40cac6a234c))
* **deps:** bump fastify/github-action-merge-dependabot ([0f0af84](https://www.github.com/Fdawgs/node-poppler/commit/0f0af848916c2559a4ab7a27325dd397f6bd8e88))
* **deps:** bump fastify/github-action-merge-dependabot ([fade7d4](https://www.github.com/Fdawgs/node-poppler/commit/fade7d4aa9f52b9bd89473090e592bb339e06301))
* **deps:** bump fastify/github-action-merge-dependabot ([#180](https://www.github.com/Fdawgs/node-poppler/issues/180)) ([fad9f6f](https://www.github.com/Fdawgs/node-poppler/commit/fad9f6f95507080e49fc5640825f428a61037ef7))
* **deps:** bump GoogleCloudPlatform/release-please-action ([a624adc](https://www.github.com/Fdawgs/node-poppler/commit/a624adc9ff2b4a8e0011cbf9edc7a8c81b54f69b))
* **deps:** bump GoogleCloudPlatform/release-please-action ([4e3a930](https://www.github.com/Fdawgs/node-poppler/commit/4e3a93012d7625f836cce1fef87e93fc25a50450))
* **deps:** bump GoogleCloudPlatform/release-please-action ([3560bc5](https://www.github.com/Fdawgs/node-poppler/commit/3560bc599c3c73bfd065cced48f3fba9833d6df9))
* **deps:** bump GoogleCloudPlatform/release-please-action ([e5cd907](https://www.github.com/Fdawgs/node-poppler/commit/e5cd907d72f6046c41e860e659b54402e84cb975))
* **deps:** bump GoogleCloudPlatform/release-please-action ([a656da0](https://www.github.com/Fdawgs/node-poppler/commit/a656da062c231c6e2b4046e5a22218627eb77fa5))
* **deps:** bump GoogleCloudPlatform/release-please-action ([7ad1cb5](https://www.github.com/Fdawgs/node-poppler/commit/7ad1cb57c6bf1fa62154e8a051615984d4d1df26))
* **deps:** bump ini from 1.3.5 to 1.3.8 ([a61baee](https://www.github.com/Fdawgs/node-poppler/commit/a61baee37472d297e19016ec1b82426ca9b9a552))
* **deps:** bump node-notifier from 8.0.0 to 8.0.1 ([716ca86](https://www.github.com/Fdawgs/node-poppler/commit/716ca8623bb0d9b164bf6aa91ccac5ea4d151e0e))
* **deps:** bump typoci/spellcheck-action from v0.3.0 to v0.4.0 ([5e07144](https://www.github.com/Fdawgs/node-poppler/commit/5e0714480eafc56bb36ead2a1ae0047a1f93df7b))
* **deps:** bump typoci/spellcheck-action from v0.4.0 to v1.0.0 ([843f282](https://www.github.com/Fdawgs/node-poppler/commit/843f282d45ecfccae063c4a200c4c5706e0f273b))
* **deps:** bump typoci/spellcheck-action from v1.0.0 to v1.1.0 ([b408cf8](https://www.github.com/Fdawgs/node-poppler/commit/b408cf8a112fa3ce5a1173dd01dec63d63ccbca5))
* **deps:** bump wagoid/commitlint-github-action from 3.1.0 to 3.1.4 ([d8a3e65](https://www.github.com/Fdawgs/node-poppler/commit/d8a3e65650a2b55c8a067411dd03fc344a87c449))
* **deps:** bump wagoid/commitlint-github-action from v2.0.3 to v2.2.3 ([dde1340](https://www.github.com/Fdawgs/node-poppler/commit/dde134010b3b3a82b1dca1d027ca5e49e9fc1abd))
* **deps:** bump wagoid/commitlint-github-action from v2.2.3 to v3.0.1 ([37fcc1a](https://www.github.com/Fdawgs/node-poppler/commit/37fcc1a533836ba2e3df183185408b227892e7f4))
* **deps:** bump wagoid/commitlint-github-action from v3.0.1 to v3.0.6 ([9e04379](https://www.github.com/Fdawgs/node-poppler/commit/9e04379ae70af90581561d0006a88da4ef966c91))
* **deps:** bump wagoid/commitlint-github-action from v3.0.6 to v3.1.0 ([8ab7bad](https://www.github.com/Fdawgs/node-poppler/commit/8ab7badb4dc0ca9b0e17f8c39c18bd249e4888f8))
* **deps:** specify minor and hotfix versions ([4247efa](https://www.github.com/Fdawgs/node-poppler/commit/4247efa0445a409730209739ffede8a22d4e20e9))
* remove `yarn` as package manager, revert to `npm` ([1bdf3c9](https://www.github.com/Fdawgs/node-poppler/commit/1bdf3c95a1ba94cfce4f0123b60a4a13e8b080bc))
* **travis:** add linux test stage ([0167520](https://www.github.com/Fdawgs/node-poppler/commit/0167520525ccc65892e08f071460da5cd78c8a7a))
* **travis:** add test step ([5aa3495](https://www.github.com/Fdawgs/node-poppler/commit/5aa349578de6e264078e2a645783708ddb66c121))
* **travis:** fix misspelling of dist value ([b0408c4](https://www.github.com/Fdawgs/node-poppler/commit/b0408c4b827d9e59ad585b06dbd9428c20bb615b))
* **travis:** make scripts multiline ([09f77a7](https://www.github.com/Fdawgs/node-poppler/commit/09f77a74aa630d32d4abf87d1b3ccbabbf83879d))
* **travis:** remove osx os from allowed failures ([82a8c11](https://www.github.com/Fdawgs/node-poppler/commit/82a8c11d1dd8420c36cbac8b27dc178e39944383))
* **travis:** replace api_token alias to pass config validation ([659bb2a](https://www.github.com/Fdawgs/node-poppler/commit/659bb2a482bc742be7ee7ba4e9eb8d58e30a06aa))
* **travis:** set linux dist ([7745634](https://www.github.com/Fdawgs/node-poppler/commit/77456349cc0e452e8b6519656b151da0fd7c87fd))
* **travis:** set osx image to latest version ([bb8f3c6](https://www.github.com/Fdawgs/node-poppler/commit/bb8f3c612b522225fa12b9f98f3c70df69f6d43e))
* **travis:** suppress git log; skip rerunning tests on deploy ([96d4761](https://www.github.com/Fdawgs/node-poppler/commit/96d4761224496a516910ec24d57e86e3910f84da))
* **travis:** update linux dist to latest lts ([da2db5c](https://www.github.com/Fdawgs/node-poppler/commit/da2db5c66889dae20886436bcf579e952a670017))
* **travis:** update osx image ([7997e8e](https://www.github.com/Fdawgs/node-poppler/commit/7997e8ecb24d26546c42a9738d4dd00d0793d17c))
* **travis:** use lts version of node for jobs ([dcd8049](https://www.github.com/Fdawgs/node-poppler/commit/dcd8049e5c2ab4eaa786042a427408e0ac2a0bb9))
* **typescript:** enable strict option ([dddd1ce](https://www.github.com/Fdawgs/node-poppler/commit/dddd1ce1170b1b766ce19630aebcdba247d5a270))
* update github-actions with dependabot ([a58d3da](https://www.github.com/Fdawgs/node-poppler/commit/a58d3da8027c46d2f114c7e36435dbece526cc6f))


### Miscellaneous

* add .prettierignore ([4cd7f18](https://www.github.com/Fdawgs/node-poppler/commit/4cd7f18a7579e340eed44b839ebe3e4b73f7307d))
* add commitlint husky `commit-msg` hook ([bdc607d](https://www.github.com/Fdawgs/node-poppler/commit/bdc607d10904b82d50fab09c231b0692c6a8b74a))
* add missing [@param](https://www.github.com/param) descriptions ([7daa419](https://www.github.com/Fdawgs/node-poppler/commit/7daa419469e6cdfbc3a4b39c60a2f0d035147951))
* add missing [@returns](https://www.github.com/returns) tag ([2631b62](https://www.github.com/Fdawgs/node-poppler/commit/2631b6254c7459070fab5eb1cc438325658c6805))
* add missing jsdoc tags for test function ([34173bf](https://www.github.com/Fdawgs/node-poppler/commit/34173bf95958d88ec58bff6bf3ba29785093783b))
* add pull request template ([b255f9c](https://www.github.com/Fdawgs/node-poppler/commit/b255f9c1666f4a74cb59bff2a2555dd5fb73076e))
* add security.md ([75a5fe4](https://www.github.com/Fdawgs/node-poppler/commit/75a5fe4107f618deff996741775d1ca43f63a97e))
* add stale confg ([e9f3f79](https://www.github.com/Fdawgs/node-poppler/commit/e9f3f79d2ce4776fc04c74e837b33de67474a2b9))
* add TypeScript config to generate definition ([837d2da](https://www.github.com/Fdawgs/node-poppler/commit/837d2da0a0951bde9b733e63beab232cbd57a25b))
* **api:** lint with prettier ([7bffd41](https://www.github.com/Fdawgs/node-poppler/commit/7bffd4175cb8e1fb255fa70ff4c8c9c8b53bd9c0))
* capitalise headings correctly ([92ced94](https://www.github.com/Fdawgs/node-poppler/commit/92ced945be2c699707222cec53b2fa369b41aa6b))
* **ci:** capitalise jobs and job step names ([8e9d432](https://www.github.com/Fdawgs/node-poppler/commit/8e9d4323dd1cb451cb7a1cfdb6ed990b3f52d3fe))
* **ci:** remove whitespace ([8c47dc5](https://www.github.com/Fdawgs/node-poppler/commit/8c47dc56fd10a6731904c8f542326aa2dc70a0c2))
* **ci:** replace `node-version` key with shorter `node` ([#255](https://www.github.com/Fdawgs/node-poppler/issues/255)) ([cb7805a](https://www.github.com/Fdawgs/node-poppler/commit/cb7805ad95165fcef5b70f3edb6af5649093b1ae))
* **ci:** tidy job names ([bc2e08f](https://www.github.com/Fdawgs/node-poppler/commit/bc2e08f59666001443d36599e917b22ebc3b809a))
* correct [@returns](https://www.github.com/returns) jsdoc tag for all functions ([368c376](https://www.github.com/Fdawgs/node-poppler/commit/368c37695e948f9286d37d67194bb4c1081810fd))
* correct case of type for [@param](https://www.github.com/param) jsdoc tag ([a6ac7ff](https://www.github.com/Fdawgs/node-poppler/commit/a6ac7ffdab6e54b1729445649cc5ea730874286d))
* create code_of_conduct.md ([815eaef](https://www.github.com/Fdawgs/node-poppler/commit/815eaeff56b3bb90ffcdf6553023da107d0d5bb2))
* **deps-dev:** bump conventional-changelog-cli from 2.0.31 to 2.0.34 ([1ad60f2](https://www.github.com/Fdawgs/node-poppler/commit/1ad60f24211a4ac662d73ed29f6ca1d3038c7595))
* **deps-dev:** bump coveralls from 3.0.11 to 3.1.0 ([abe5928](https://www.github.com/Fdawgs/node-poppler/commit/abe5928b05b0209f8168bbd0a109d89083ff0371))
* **deps-dev:** bump coveralls from 3.0.9 to 3.0.11 ([dd8d30c](https://www.github.com/Fdawgs/node-poppler/commit/dd8d30caabe3a94c02831a5f4c172ee56623408a))
* **deps-dev:** bump eslint-config-airbnb-base from 14.0.0 to 14.1.0 ([6e2b3bc](https://www.github.com/Fdawgs/node-poppler/commit/6e2b3bca0bf5118512559ccc346f2b0fd8404ecd))
* **deps-dev:** bump eslint-config-prettier from 6.10.0 to 6.10.1 ([156d08e](https://www.github.com/Fdawgs/node-poppler/commit/156d08ed72119abdb847c3afa980265f7b1262cd))
* **deps-dev:** bump eslint-config-prettier from 6.10.1 to 6.11.0 ([a92cd76](https://www.github.com/Fdawgs/node-poppler/commit/a92cd760aa7b6b643a9f51be06a6149848060eaf))
* **deps-dev:** bump eslint-config-prettier from 6.9.0 to 6.10.0 ([385a8d0](https://www.github.com/Fdawgs/node-poppler/commit/385a8d0d6bd0c2ba67cfd13748a78fe18a4a94cc))
* **deps-dev:** bump eslint-plugin-import from 2.20.0 to 2.20.1 ([580e9fe](https://www.github.com/Fdawgs/node-poppler/commit/580e9fe18983275bd80f0e45b975a1a59fb0a77e))
* **deps-dev:** bump eslint-plugin-import from 2.20.1 to 2.20.2 ([40d53e1](https://www.github.com/Fdawgs/node-poppler/commit/40d53e188eb858974dbd576d9bf314bcef3bdb02))
* **deps-dev:** bump eslint-plugin-jest from 23.6.0 to 23.7.0 ([1dcf86f](https://www.github.com/Fdawgs/node-poppler/commit/1dcf86f5d4630cd170c1dd8ff1d3a1ed153582aa))
* **deps-dev:** bump eslint-plugin-jest from 23.7.0 to 23.8.0 ([602c508](https://www.github.com/Fdawgs/node-poppler/commit/602c50888fce1af40baf789437e6d951885c5f0d))
* **deps-dev:** bump eslint-plugin-jest from 23.8.0 to 23.8.1 ([d75fd84](https://www.github.com/Fdawgs/node-poppler/commit/d75fd8408d62cb855e3f0cce0c46dba240f78af3))
* **deps-dev:** bump eslint-plugin-jest from 23.8.1 to 23.8.2 ([3ebb349](https://www.github.com/Fdawgs/node-poppler/commit/3ebb34972bc3cd167ebe41a934da975309476825))
* **deps-dev:** bump eslint-plugin-jest from 23.9.0 to 23.13.2 ([e358dfa](https://www.github.com/Fdawgs/node-poppler/commit/e358dfa328f94dc95af4589b667395670b1d4ed3))
* **deps-dev:** bump eslint-plugin-jsdoc from 25.4.3 to 26.0.0 ([55413b4](https://www.github.com/Fdawgs/node-poppler/commit/55413b460a87130aa71cc8efdb9474ccd70991a0))
* **deps-dev:** bump eslint-plugin-json from 2.0.1 to 2.1.0 ([b4da50d](https://www.github.com/Fdawgs/node-poppler/commit/b4da50dc01a0455559f92097352f0af88fc4b546))
* **deps-dev:** bump eslint-plugin-json from 2.1.0 to 2.1.1 ([a290c9d](https://www.github.com/Fdawgs/node-poppler/commit/a290c9db6a8dc3ffe4045bf4cf309a427a962180))
* **deps-dev:** bump jest from 25.1.0 to 25.2.4 ([5323dfa](https://www.github.com/Fdawgs/node-poppler/commit/5323dfa47ce277e4d9ccc6217092efe46ce6c93f))
* **deps-dev:** bump jest from 25.2.4 to 25.2.7 ([6e04bd1](https://www.github.com/Fdawgs/node-poppler/commit/6e04bd19b495b752940dedc17d3b70a3e3f7581f))
* **deps-dev:** bump jest from 25.2.7 to 25.3.0 ([5bbbf27](https://www.github.com/Fdawgs/node-poppler/commit/5bbbf270838d951800d1c1825ca73ba6ba54b6cc))
* **deps-dev:** bump jest from 25.3.0 to 25.5.1 ([cfb9ddb](https://www.github.com/Fdawgs/node-poppler/commit/cfb9ddbfbe528febe0e5f6fb2056ceec2d6abecb))
* **deps-dev:** bump jest from 25.5.1 to 25.5.2 ([beb2f6d](https://www.github.com/Fdawgs/node-poppler/commit/beb2f6d793de4dee6585e05c5ab364746cdd4af1))
* **deps-dev:** bump jest from 25.5.2 to 25.5.3 ([b6fb327](https://www.github.com/Fdawgs/node-poppler/commit/b6fb327a70b1eefc5b88e88d7fe4403f40ac38b4))
* **deps-dev:** bump jest from 25.5.3 to 25.5.4 ([b2b6ee6](https://www.github.com/Fdawgs/node-poppler/commit/b2b6ee6b272d9bb17217bb9e13587ab0aa2d4c14))
* **deps-dev:** bump jest from 25.5.4 to 26.0.1 ([05b0f9e](https://www.github.com/Fdawgs/node-poppler/commit/05b0f9e061f696fcc08b3fd695be8180d50a095b))
* **deps-dev:** bump prettier from 1.19.1 to 2.0.1 ([56910c4](https://www.github.com/Fdawgs/node-poppler/commit/56910c498907ffb9f86ff46f6e25f18fc789aba9))
* **deps-dev:** bump prettier from 2.0.1 to 2.0.2 ([f4a1f2e](https://www.github.com/Fdawgs/node-poppler/commit/f4a1f2ec8610cb58df1c747613581af6e5049ebf))
* **deps-dev:** bump prettier from 2.0.2 to 2.0.4 ([84ada63](https://www.github.com/Fdawgs/node-poppler/commit/84ada63637bf3bbb96e22b824d16861415939e17))
* **deps-dev:** bump prettier from 2.0.4 to 2.0.5 ([8c99faa](https://www.github.com/Fdawgs/node-poppler/commit/8c99faa7812d66991b1e96a7fd458b4b8661aeb2))
* **deps-dev:** bump typescript from 3.7.5 to 3.8.2 ([749dc3d](https://www.github.com/Fdawgs/node-poppler/commit/749dc3d2ffc8d55ba68f4aa98fa55a5f970c554d))
* **deps-dev:** bump typescript from 3.8.2 to 3.8.3 ([883b8ed](https://www.github.com/Fdawgs/node-poppler/commit/883b8eddc7e533128a2e23e64e5739eb94ab0e6c))
* **deps-dev:** bump typescript from 3.8.3 to 3.9.3 ([ca934be](https://www.github.com/Fdawgs/node-poppler/commit/ca934beaff9deea760fc0f2294014a6aa1478609))
* **eslint:** add missing plugin declaration ([0818b33](https://www.github.com/Fdawgs/node-poppler/commit/0818b338882523f3a49e908cf53041d94cf8be19))
* **eslint:** convert from json to js file format ([8d54576](https://www.github.com/Fdawgs/node-poppler/commit/8d54576461834d25ce98792fba5c4b3ee0697db4))
* **eslint:** move inline eslint rules into config file ([d480f00](https://www.github.com/Fdawgs/node-poppler/commit/d480f00875742e39ad1ab6b8e4e4bbef04fb3265))
* **eslintrc:** ignore empty lines in jsdoc comments ([d9bc92b](https://www.github.com/Fdawgs/node-poppler/commit/d9bc92b0ec77e04fee3f5a4db076ae87feacf8f9))
* **eslint:** remove unnecessary eslint rules ([4b185ca](https://www.github.com/Fdawgs/node-poppler/commit/4b185caba746c492a7ba93e47be070dfa6b3360e))
* **eslint:** reorder rules ([0e74849](https://www.github.com/Fdawgs/node-poppler/commit/0e748496c759bb884954196e3f7ea954342006f6))
* format codeql.yml ([761d209](https://www.github.com/Fdawgs/node-poppler/commit/761d209cf8a9ecae13bb393fac7917e21617e174))
* generate changelog ([b75c70b](https://www.github.com/Fdawgs/node-poppler/commit/b75c70ba9c0a5f6348b7e351be0103c60735f40e))
* **github:** add issue templates ([5867e00](https://www.github.com/Fdawgs/node-poppler/commit/5867e004e0a2698a4b75271840133735d88f6053))
* **husky:** move doc step to pre-commit hook ([21522d1](https://www.github.com/Fdawgs/node-poppler/commit/21522d1156257b4f21c1dafb2c2396af13b7e8b6))
* **husky:** reorder pre-push hook ([a06ad37](https://www.github.com/Fdawgs/node-poppler/commit/a06ad375250b2b77007ba061720806034653dca5))
* increment minor version number ([a2eaa39](https://www.github.com/Fdawgs/node-poppler/commit/a2eaa395a971ca1dd296aa824725bdfe03d111cf))
* **index:** add jsdoc descriptions for params to parseoptions function ([1285125](https://www.github.com/Fdawgs/node-poppler/commit/1285125520ced912a6133fae32f8d9594e60f263))
* **index:** add missing dashes to jsdoc tags ([d854d00](https://www.github.com/Fdawgs/node-poppler/commit/d854d0083a98a3661e2863316aa1559ff2981a62))
* **index:** move description of function to jsdoc tag ([28dbfbe](https://www.github.com/Fdawgs/node-poppler/commit/28dbfbebb7205e3ab7c5739027f205ab75f2e36c))
* **index:** rename const to reflect functionality ([330957f](https://www.github.com/Fdawgs/node-poppler/commit/330957f2898206365742105320bf885a26ab9d89))
* **index:** rename exec variable to better reflect usage ([6b67637](https://www.github.com/Fdawgs/node-poppler/commit/6b676374ac852a08a9f90a8865948c511cfc18d3))
* **index:** repoint to new binaries ([2c58f7f](https://www.github.com/Fdawgs/node-poppler/commit/2c58f7f3f6be39685a01cc858481976b269da51f))
* **index:** spelling and grammar fixes to jsdoc tags ([7e2c2ef](https://www.github.com/Fdawgs/node-poppler/commit/7e2c2ef69724d81d761661933e31531e55ca3ec4))
* **index:** use back ticks as opposed to quotation marks in jsdoc tags ([018ee8d](https://www.github.com/Fdawgs/node-poppler/commit/018ee8d8594de82e76421afc1eceb4778aee370c))
* **jest:** enable resetmocks option ([8f6e235](https://www.github.com/Fdawgs/node-poppler/commit/8f6e235d5a1a9236d3c660ebf20b0dc56174c934))
* **lib:** remove old 0.84.0 win32 binaries ([66533a1](https://www.github.com/Fdawgs/node-poppler/commit/66533a13fb06752e9f558542dc83528176ae3343))
* **lib:** remove redundant win32 poppler files ([19c6578](https://www.github.com/Fdawgs/node-poppler/commit/19c657857263c996ed6a38be32fc3b098948da4e))
* **lib:** update poppler win32 binaries from 20.11.0 to 20.12.0 ([1c33325](https://www.github.com/Fdawgs/node-poppler/commit/1c33325bba2b316e707961955783d1d030aadc38))
* **package:** add homepage and bug urls ([d846307](https://www.github.com/Fdawgs/node-poppler/commit/d8463079714b5cc472979b7901ded2eb0892bc6c))
* **package:** add keywords ([de8e68f](https://www.github.com/Fdawgs/node-poppler/commit/de8e68f2e6a8fc9dc1d77323647ca0b24bcf9130))
* **package:** add prettier call to api gen script ([7cd8424](https://www.github.com/Fdawgs/node-poppler/commit/7cd842458feeb1a9acd1146f536038034ff256a8))
* **package:** add prettier call to changelog gen script ([95d38b9](https://www.github.com/Fdawgs/node-poppler/commit/95d38b9d65ecd74299b110a23946166073021426))
* **package:** add runinband cli jest option ([5ec5216](https://www.github.com/Fdawgs/node-poppler/commit/5ec521674d5d4052aa9f81663fadd496b5a65db9))
* **package:** remove redundant config values ([6eac459](https://www.github.com/Fdawgs/node-poppler/commit/6eac45934806f668a00f965897bc6a9e05869275))
* **package:** set minimum engine version ([737724b](https://www.github.com/Fdawgs/node-poppler/commit/737724b1b170b2c83a6440cda99f13bca2d53b04))
* **package:** update dependencies ([7697d53](https://www.github.com/Fdawgs/node-poppler/commit/7697d53973e28eb52b124fe1b4efbaf07f5c755a))
* **package:** update description ([feaabcc](https://www.github.com/Fdawgs/node-poppler/commit/feaabcc3496c5289dcc64a812763ca41fe1ef5f6))
* **package:** update dupe-check script ([6898d5c](https://www.github.com/Fdawgs/node-poppler/commit/6898d5c14af2b6667cc9421cf78da7aa7199e7eb))
* **package:** update lockfile package-lock.json ([889132d](https://www.github.com/Fdawgs/node-poppler/commit/889132dfd0181c8a24389c1619771bf65d964acc))
* **package:** update prettier script to also format json and md ([640c5df](https://www.github.com/Fdawgs/node-poppler/commit/640c5dfa4e1898d51c89ab9e378a00a298541a74))
* **package:** use test-only script when testing ([2f6f193](https://www.github.com/Fdawgs/node-poppler/commit/2f6f193b8b17aaeff2dc7f78326cc63eb64e6e3e))
* prep release ([5952e33](https://www.github.com/Fdawgs/node-poppler/commit/5952e33d9e13430f39b1414bc90c5871797bf152))
* prep release ([6841380](https://www.github.com/Fdawgs/node-poppler/commit/68413803f096cdf1ceb22e4e848ef1a968112e8c))
* prep release ([3f7ca33](https://www.github.com/Fdawgs/node-poppler/commit/3f7ca33d564f2ab238c07bea6bff0cbeaa0bf0ef))
* prep release ([2f02971](https://www.github.com/Fdawgs/node-poppler/commit/2f0297157336f02dde9caafa76c7e6b7be53a42a))
* prep release ([5fe0e08](https://www.github.com/Fdawgs/node-poppler/commit/5fe0e082bed5fa4d6194614151391aa577e0d378))
* prep release ([552c800](https://www.github.com/Fdawgs/node-poppler/commit/552c800cd558d7a2a307c60b2a4c5fe082d6de47))
* prep release ([3d57d77](https://www.github.com/Fdawgs/node-poppler/commit/3d57d77e0e4af45f4ed2473065fd193f9ae9089d))
* prep release ([be30ef1](https://www.github.com/Fdawgs/node-poppler/commit/be30ef1bb0b277310e59b6c29c8135351bb5c4ad))
* prep release ([a85885d](https://www.github.com/Fdawgs/node-poppler/commit/a85885d919ce09e115a71f8d804c7d6e708f413d))
* prep release ([7b7fdb5](https://www.github.com/Fdawgs/node-poppler/commit/7b7fdb56cf74fe061b6d9357166cb4b9d49fd2bd))
* prep release ([ba954c0](https://www.github.com/Fdawgs/node-poppler/commit/ba954c075241556790e02271570e4655ac93d185))
* prep release ([a62dc1a](https://www.github.com/Fdawgs/node-poppler/commit/a62dc1a042292465246faecd1690e94b0d1cbc58))
* prep release ([f13db30](https://www.github.com/Fdawgs/node-poppler/commit/f13db306a67651786219ecc7958a06b2d4f84f16))
* prep release ([175c18b](https://www.github.com/Fdawgs/node-poppler/commit/175c18b91d22b99f5045acef85b7f10f4e564e70))
* prep release ([d44ad40](https://www.github.com/Fdawgs/node-poppler/commit/d44ad40bd8550379be1e29dbdbf4c496eb8b99a7))
* prep release ([3c0da07](https://www.github.com/Fdawgs/node-poppler/commit/3c0da07e671ca762f218317a262fa0c6a33bb92a))
* prep release ([7764ae9](https://www.github.com/Fdawgs/node-poppler/commit/7764ae98e9ea7c1999dfd959644146aac3ac5e65))
* prep release ([454aacd](https://www.github.com/Fdawgs/node-poppler/commit/454aacdcbee6af03e7080fa258054b6ce75f6b46))
* prep release ([cf6de80](https://www.github.com/Fdawgs/node-poppler/commit/cf6de80f8a8035f67af3053c079a2b09d4c4882b))
* prep release ([1d68215](https://www.github.com/Fdawgs/node-poppler/commit/1d682157bddfddf168145d45a4c17a542b3b46e5))
* prep release ([6d150f6](https://www.github.com/Fdawgs/node-poppler/commit/6d150f692e288fe9dd8ed7478a02d6dfacad24c2))
* prep release ([80b1386](https://www.github.com/Fdawgs/node-poppler/commit/80b1386fda499f97c8519899d8d81c635c0696e7))
* prep release ([2a1b176](https://www.github.com/Fdawgs/node-poppler/commit/2a1b1760adcc90207c10a1006a58f0ada9d2457d))
* prep release ([414f0af](https://www.github.com/Fdawgs/node-poppler/commit/414f0af49d2fd512bdaf2e7d3ab2b38baa28d9a1))
* prep release ([805ccd3](https://www.github.com/Fdawgs/node-poppler/commit/805ccd315ba336fc800ecc530953c340b2fb52b3))
* prep release ([71f249f](https://www.github.com/Fdawgs/node-poppler/commit/71f249f0054f87443b70d6c34dcc349b64c60790))
* prep release ([8465714](https://www.github.com/Fdawgs/node-poppler/commit/846571468e467a4c990109394ee8ba8f05af52ff))
* **prettier:** create separate files to allow for CI/CD to use prettier config ([#212](https://www.github.com/Fdawgs/node-poppler/issues/212)) ([fb9220c](https://www.github.com/Fdawgs/node-poppler/commit/fb9220c4ba40ab9a0c2da37b391b53c2283b3498))
* **prettierignore:** add `api.md` ([2ac7ffe](https://www.github.com/Fdawgs/node-poppler/commit/2ac7ffe34f546171c98d4446798dad5a9f32bc54))
* **readme:** add linebreaks between badges ([8c75b6a](https://www.github.com/Fdawgs/node-poppler/commit/8c75b6afdb4b4a4535b0544ac611c6b14873ffc3))
* **readme:** capitalise headings correctly ([28edfb5](https://www.github.com/Fdawgs/node-poppler/commit/28edfb5f885b8e83c6f8f2061817d07c3830d2cb))
* **readme:** prettier badge shape ([b83ca9b](https://www.github.com/Fdawgs/node-poppler/commit/b83ca9ba6817c7dab04e03dbbdcd25ceecb91c00))
* reduce minimum nodejs engine version from 12.x to 10.x ([530ab83](https://www.github.com/Fdawgs/node-poppler/commit/530ab831baa0816b8500dc0c0c9b1248811d95bd))
* release 2.3.0 ([245c1d3](https://www.github.com/Fdawgs/node-poppler/commit/245c1d36cca72204f6c3f8e06b12a254682a0608))
* release 2.4.0 ([15b6db7](https://www.github.com/Fdawgs/node-poppler/commit/15b6db7aff3f26a91d80dd70afd6a848a2b620f3))
* release 2.4.1 ([9f89030](https://www.github.com/Fdawgs/node-poppler/commit/9f8903041dfe8b7e7c19073b1ffb0df1ec251dbf))
* release 2.5.0 ([21880c7](https://www.github.com/Fdawgs/node-poppler/commit/21880c75990a5a7cfaec16773adedaf4fd26542f))
* release 3.0.0 ([bdc0dec](https://www.github.com/Fdawgs/node-poppler/commit/bdc0dec3fddecbe100f4d2ec284622a5291f6b80))
* release 3.0.1 ([#254](https://www.github.com/Fdawgs/node-poppler/issues/254)) ([62dd7bd](https://www.github.com/Fdawgs/node-poppler/commit/62dd7bdc2cef8b1ff588f9504ac5f77bd587a8e6))
* release 4.0.0 ([#263](https://www.github.com/Fdawgs/node-poppler/issues/263)) ([47fe768](https://www.github.com/Fdawgs/node-poppler/commit/47fe7681f40943f4f68a4e2bf3f44d7c7902ab78))
* release 4.1.0 ([#270](https://www.github.com/Fdawgs/node-poppler/issues/270)) ([a9f9043](https://www.github.com/Fdawgs/node-poppler/commit/a9f90434a109b0dc733e1bcb47438552e77eb9f6))
* remove `jest` script; replaced by `test-only` script ([e7e3523](https://www.github.com/Fdawgs/node-poppler/commit/e7e3523f3cc735c40ef034e69b8d3aeaa449c0b4))
* remove old .env files from gitignore ([9317881](https://www.github.com/Fdawgs/node-poppler/commit/9317881733fa2133a8e675ae00a01abaa3545cef))
* remove support for node v10 ([b7d5379](https://www.github.com/Fdawgs/node-poppler/commit/b7d53799b8f8c697123cd211383550e8ec8de1b5))
* replace stalebot with github action ([50a7d05](https://www.github.com/Fdawgs/node-poppler/commit/50a7d052b15097709579b5c4cbd1c89cc30c36f8))
* **scripts:** do not lint ts and tsx files ([e5d2891](https://www.github.com/Fdawgs/node-poppler/commit/e5d2891b53b3f73f2f00dd9490f4d30ff2d87013))
* **scripts:** expand coverage of eslint and prettier ([01ee4a4](https://www.github.com/Fdawgs/node-poppler/commit/01ee4a45c2f8e419acd998066a5a635260c6af62))
* **scripts:** remove prettier ignore-path option ([50f41f9](https://www.github.com/Fdawgs/node-poppler/commit/50f41f988a5b75b193becb4b379976ced40b42ba))
* **scripts:** rename `jest-coverage` to `jest:coverage` ([654ce7c](https://www.github.com/Fdawgs/node-poppler/commit/654ce7c50e3a75f0c39664ec8af8b0929d71932d))
* **scripts:** rename test scripts ([ed0165c](https://www.github.com/Fdawgs/node-poppler/commit/ed0165c05287f82b09ac18bcd0d2c0e2497b9d78))
* **scripts:** use gitignore for ignore-path options ([1035e00](https://www.github.com/Fdawgs/node-poppler/commit/1035e0083fc993c09bdee7cf6da5d8f80bf9caa2))
* shorten husky pre-push script ([51e2401](https://www.github.com/Fdawgs/node-poppler/commit/51e24018b633f41c927cef9d570046f454ca11d1))
* stop excess coverage files being generated ([74efb35](https://www.github.com/Fdawgs/node-poppler/commit/74efb35faf819ee9cb46f071cdc1c182b9526fdf))
* **tests:** use apa header style for describe name params ([6f84a01](https://www.github.com/Fdawgs/node-poppler/commit/6f84a01f7a7fd41aa1f47c7b2965c301e5d9fb61))
* tidy whitespace ([57e6bfb](https://www.github.com/Fdawgs/node-poppler/commit/57e6bfb372aa94649e148a77943c87df14761648))
* **travis:** sort os values alphabetically ascending order ([12f0180](https://www.github.com/Fdawgs/node-poppler/commit/12f0180cb17a2bc82247474d61dbcb7c683f9b38))
* update dependencies ([cbc1e12](https://www.github.com/Fdawgs/node-poppler/commit/cbc1e12e77f3598a38d611ceb56bafdecac3314a))
* update gitignore with latest github version ([25eb917](https://www.github.com/Fdawgs/node-poppler/commit/25eb917b3e6543eb3a3366df59bc8ad9698f53eb))
* update lockfile ([e4bb929](https://www.github.com/Fdawgs/node-poppler/commit/e4bb9295a375a248db1d40ebfd440426b79ebe22))
* upgrade dependencies ([59e63eb](https://www.github.com/Fdawgs/node-poppler/commit/59e63eb553b1ea383190dc48815da51a424fff0b))
* use default prettier options for trailing commas and quotes ([1f2de30](https://www.github.com/Fdawgs/node-poppler/commit/1f2de303cecdd880571801687c58b78032553fad))
* **vscode:** add `redhat.vscode-yaml` as recommended extension ([ddb6784](https://www.github.com/Fdawgs/node-poppler/commit/ddb67843c606960f429eed3f2a2f2871a0d58583))
* **vscode:** add `updateImportsOnFileMove` setting ([3ccb019](https://www.github.com/Fdawgs/node-poppler/commit/3ccb0190ef6240b6498673d4eb86984bf7ff5ce7))
* **vscode:** add workspace settings and extensions ([626bd68](https://www.github.com/Fdawgs/node-poppler/commit/626bd6809a14f39dc9ef04164a70ad13e8ca14bd))
* **vscode:** disable red hat telemetry ([d0084b5](https://www.github.com/Fdawgs/node-poppler/commit/d0084b550fa7d2b9ba81da798ca7387ce3155c28))
* **vscode:** remove conflicting prettier ext setting ([9edb8b1](https://www.github.com/Fdawgs/node-poppler/commit/9edb8b12bbeeae49f3151479c1da59e7f134d5dd))
* **vscode:** remove user space config setting ([c899f9f](https://www.github.com/Fdawgs/node-poppler/commit/c899f9fc3ad05af2611efe0b5a4d4e3de64136f1))
* **workflows:** remove `stale.yml` ([d1ee764](https://www.github.com/Fdawgs/node-poppler/commit/d1ee7644bb372178c1561f2ae0ac1e59140b0c73))
* **workflows:** rename ci and perf sections ([e5ed264](https://www.github.com/Fdawgs/node-poppler/commit/e5ed2642985cd44f230d77ecf18240713ca9afd4))
* **workflows:** rename spellcheck workflow ([d96dfb8](https://www.github.com/Fdawgs/node-poppler/commit/d96dfb850bda84a3f1c4a39ddfb367ccb2ea8900))
* **workflows:** tidy node-version syntax ([4334bb0](https://www.github.com/Fdawgs/node-poppler/commit/4334bb086d3483a515098013afb6131cd6cbd11e))


### Continuous Integration

* add cd action to publish to npm ([fa9994d](https://www.github.com/Fdawgs/node-poppler/commit/fa9994df5ade0fb01972e4577c39f4939df233ac))
* add cleanup-run job ([750a606](https://www.github.com/Fdawgs/node-poppler/commit/750a606be8d9976e5bee2534baab341c62575a3d))
* add commit-lint job ([8115c49](https://www.github.com/Fdawgs/node-poppler/commit/8115c493d2ad02f790c8080c6f45eda8641493f8))
* add link check workflow ([10ae915](https://www.github.com/Fdawgs/node-poppler/commit/10ae9158c0de3558274b8608b5bd95e40c83c5ee))
* add linting job; expand scope of jobs ([9f6d67a](https://www.github.com/Fdawgs/node-poppler/commit/9f6d67a6154dc665c812e8cb038ed9d54b956ce4))
* add nodejs v16 to unit test matrix ([3b172fe](https://www.github.com/Fdawgs/node-poppler/commit/3b172fe8ea8e58f687b2b65fe59e9aae0702240f))
* add typescript compilation step ([5910c2d](https://www.github.com/Fdawgs/node-poppler/commit/5910c2d59edd13c9242242cf1a8c54fbf8fc695a))
* automate release and changelog generation ([84a5f8d](https://www.github.com/Fdawgs/node-poppler/commit/84a5f8d2f18a9cb1b7d6b6113e5d527081a28483))
* automatically merge dependabot pull requests on pass build stage ([665c958](https://www.github.com/Fdawgs/node-poppler/commit/665c958939382fc1467d06fe0d097a821ad0daa6))
* **automerge:** move automerge job into new workflow ([454a1e9](https://www.github.com/Fdawgs/node-poppler/commit/454a1e96938153b5ed4e4cd31d94bd265d98043d))
* bump actions/setup-node from v1 to v2 ([1470c9f](https://www.github.com/Fdawgs/node-poppler/commit/1470c9f82a2df7cc792b67f61f9bdace7f4d937c))
* **cd:** move perf optimizations and refactoring into same section ([f54001c](https://www.github.com/Fdawgs/node-poppler/commit/f54001cd8f7ae072f2cf5b0186414494384b80d1))
* change ubuntu image to 20.04 ([9664180](https://www.github.com/Fdawgs/node-poppler/commit/9664180e1dde48deedc39198563096b1694f8aee))
* **ci:** disable homebrew analytics for macos builds ([#278](https://www.github.com/Fdawgs/node-poppler/issues/278)) ([92ad4fa](https://www.github.com/Fdawgs/node-poppler/commit/92ad4fa2ba60a0fb6054da386b7bfdd9504dd476))
* **ci:** ignore dependabot prs for commit message linting ([0b38772](https://www.github.com/Fdawgs/node-poppler/commit/0b3877287e41d6a060032218d16c4ec8559959fe))
* **ci:** replace `ubuntu-20.04` with `ubuntu-latest`; both same version ([a5253d8](https://www.github.com/Fdawgs/node-poppler/commit/a5253d83b85086cdd8f30ee31b4f2518823872ba))
* **codeql:** remove autobuild action ([ee8808e](https://www.github.com/Fdawgs/node-poppler/commit/ee8808e42129ce9beb65f7ff953b2e9584c7cadb))
* **codeql:** specify more query suites ([081cd64](https://www.github.com/Fdawgs/node-poppler/commit/081cd640ba939b4b89f06a0754e93c9caa3f77dc))
* **dependabot:** ignore husky updates ([451dbfb](https://www.github.com/Fdawgs/node-poppler/commit/451dbfbcc71c40a004a35441e51f91bb7e299b09))
* disable long running homebrew cleanup tasks ([cf1cc63](https://www.github.com/Fdawgs/node-poppler/commit/cf1cc636cdc76cd466d8d6e7385aa48d083b0ac7))
* do not run coveralls steps/jobs on forks ([139dc55](https://www.github.com/Fdawgs/node-poppler/commit/139dc555250583dd8d2a5a891791e1d56c0a0b88))
* do not run github actions for draft prs ([7614af1](https://www.github.com/Fdawgs/node-poppler/commit/7614af163c1b6ae40e63b594d39ea281d8a97dd8))
* fix builds ([580f55e](https://www.github.com/Fdawgs/node-poppler/commit/580f55e6c5ac81fe8930aa5a37f2cc5096c60694))
* fix key usage in `action/setup-node` ([c227047](https://www.github.com/Fdawgs/node-poppler/commit/c227047b899935d75813e4bf39662fd1e97cec76))
* **github-actions:** set `flag-name` for parallel coverage tests ([82e2ca5](https://www.github.com/Fdawgs/node-poppler/commit/82e2ca50e01169f07595cf525bdd40c59b58996b))
* **github-actions:** set semver for coverallsapp ([88fd9f7](https://www.github.com/Fdawgs/node-poppler/commit/88fd9f71a35842b51cdde9185e7bc13f5aeb5409))
* ignore scripts on publish ([a8a1cc9](https://www.github.com/Fdawgs/node-poppler/commit/a8a1cc95ae6d1df206d5bac185d55d2fff537292))
* **link-check:** fix skip regex ([d99dfb9](https://www.github.com/Fdawgs/node-poppler/commit/d99dfb941695f3b1c99d09e70ebb2ef1742f6ba5))
* **link-check:** ignore if draft pull request event ([39b513e](https://www.github.com/Fdawgs/node-poppler/commit/39b513ef1e48f15ea6ba439f8bbfd00246cd3d28))
* **link-check:** ignore links to lib binaries ([0a0f7a3](https://www.github.com/Fdawgs/node-poppler/commit/0a0f7a3773bd6160be4a03181b26aecb3c7220a0))
* **link-check:** reduce frequency from daily to monthly ([#272](https://www.github.com/Fdawgs/node-poppler/issues/272)) ([5e91c2a](https://www.github.com/Fdawgs/node-poppler/commit/5e91c2aa2cf3b807ce1e2f6b6317b1e5e2f58c3f))
* **linkcheck:** extend ignored urls ([2ddea89](https://www.github.com/Fdawgs/node-poppler/commit/2ddea89979000d7e9d75a10cf54672ff326a1c06))
* **lint-check:** compress patterns ([e82deda](https://www.github.com/Fdawgs/node-poppler/commit/e82deda304b3e6f184d6a0a34fd63f1de69db41b))
* **lint-check:** run on push and pull events for md files ([ff0714c](https://www.github.com/Fdawgs/node-poppler/commit/ff0714c45ebf5a7d46b72c7fdd00775ec7e52af3))
* merge unit test jobs ([0dfa782](https://www.github.com/Fdawgs/node-poppler/commit/0dfa78241f565b604dfea24fed44d9bbdfb2fa53))
* move dependency installs to correct step ([7c240c4](https://www.github.com/Fdawgs/node-poppler/commit/7c240c427ccc73bacda96506405d0366fcdaa91a))
* refactor `codeql-analysis.yml` ([9eeeb62](https://www.github.com/Fdawgs/node-poppler/commit/9eeeb62bf166d945d0eadbdf0e85513a8c56a77c))
* remove cache actions as they use lock file ([77fe1b0](https://www.github.com/Fdawgs/node-poppler/commit/77fe1b0c10777cc60359345ad2cda2b62f6c64a9))
* remove redundant javascript dictionary ([d0b5a92](https://www.github.com/Fdawgs/node-poppler/commit/d0b5a92cdb91f9228b16970b4cdfebcfaa782db8))
* reorder lint steps ([71103eb](https://www.github.com/Fdawgs/node-poppler/commit/71103eb891e6333ebf5ef095f98b3eaea3dbf136))
* replace travis-ci with github actions ([41c0bb6](https://www.github.com/Fdawgs/node-poppler/commit/41c0bb6753a6777fb66226c211c823b483463fdb))
* replace typo ci app with action ([e7aa983](https://www.github.com/Fdawgs/node-poppler/commit/e7aa983c82ff4c06b7b7b6d2b80f64b895a201e7))
* require lint job on automerge ([026e51f](https://www.github.com/Fdawgs/node-poppler/commit/026e51fe53f94a2c1e9f6333a9541b4cc06748b0))
* **stale:** shorten workflow name ([5190a37](https://www.github.com/Fdawgs/node-poppler/commit/5190a37fb0c73cd675f28994984e2519d45196b9))
* **travis:** add npm deploy job ([45dc720](https://www.github.com/Fdawgs/node-poppler/commit/45dc72087993f86b80cb85d21f4446682ed4c9c5))
* **travis:** add release tags to branch safelist ([f319904](https://www.github.com/Fdawgs/node-poppler/commit/f31990442ae0d67c03419fe785776493e2f51e00))
* **travis:** fix build config ([3c6d189](https://www.github.com/Fdawgs/node-poppler/commit/3c6d189381b09fe8b29e391da123ca7729598fd4))
* **travis:** remove dupe-check step ([4d6aca6](https://www.github.com/Fdawgs/node-poppler/commit/4d6aca6014a9f1c1a7718c5af6aba2679a18f3c8))
* **travis:** rotate npm token ([d6fc265](https://www.github.com/Fdawgs/node-poppler/commit/d6fc265787cc81e508a4eb9369e61da9257717cf))
* **travis:** use linux for npm deploy ([f0c07d6](https://www.github.com/Fdawgs/node-poppler/commit/f0c07d673e18a0106506cec0d6b0329c2ee033e9))
* **typo-ci:** add `ydh` to list of excluded words ([8e56613](https://www.github.com/Fdawgs/node-poppler/commit/8e566136234908560d406e35c7cfcc2578ec279f))
* use yarn `--frozen-lockfile` flag for repro deps ([ea44bf7](https://www.github.com/Fdawgs/node-poppler/commit/ea44bf75186878d007025281f6cdc4be5bf08c2c))
* use yarn cache of node dependencies if present ([4ea5094](https://www.github.com/Fdawgs/node-poppler/commit/4ea5094112f68a5dd21220cdda7c06bdaf0b9c8e))
* **workflows:** fix release types to account for bots ([7b07c0b](https://www.github.com/Fdawgs/node-poppler/commit/7b07c0b28acbecac9a67cb5e650c86ed796a73a7))
* **workflows:** move release steps into `cd` workflow ([b6da3b1](https://www.github.com/Fdawgs/node-poppler/commit/b6da3b154cf40f786519b6a0aa610d421418fcd2))
* **workflows:** run only on push and pulls to master branch ([82655f5](https://www.github.com/Fdawgs/node-poppler/commit/82655f52c71f5257a33549d8f6041ddb58f11be2))

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
