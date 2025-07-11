# Changelog

All notable changes to this project will be documented in this file.

## [8.0.3](https://github.com/Fdawgs/node-poppler/compare/v8.0.2...v8.0.3) (2025-07-08)


### Improvements

* **index:** cache pdfinfo path regex ([#660](https://github.com/Fdawgs/node-poppler/issues/660)) ([0c81b11](https://github.com/Fdawgs/node-poppler/commit/0c81b11492a1af8c4820180718193ab814df514f))
* **index:** import `node:process` explicitly ([#662](https://github.com/Fdawgs/node-poppler/issues/662)) ([ebd0b72](https://github.com/Fdawgs/node-poppler/commit/ebd0b72d3a221be8efdd8382c783c252f9cd00dc))


### Miscellaneous

* **index:** use upper snakecase for cached values ([#658](https://github.com/Fdawgs/node-poppler/issues/658)) ([55613b3](https://github.com/Fdawgs/node-poppler/commit/55613b3a97b90604dca1423c9b16eba25bd9f6de))

## [8.0.2](https://github.com/Fdawgs/node-poppler/compare/v8.0.1...v8.0.2) (2025-07-07)


### Continuous integration

* **cd:** grant issue write permissions for tags ([#651](https://github.com/Fdawgs/node-poppler/issues/651)) ([99612d9](https://github.com/Fdawgs/node-poppler/commit/99612d9c68318da84fd82581dacb6712a6e0801c))
* **ci:** add node 24 to test matrix ([#643](https://github.com/Fdawgs/node-poppler/issues/643)) ([738db46](https://github.com/Fdawgs/node-poppler/commit/738db46b524913b8882e0f114c51bd2465cae64c))
* **deps:** bump actions/dependency-review-action from 4.6.0 to 4.7.1 ([#646](https://github.com/Fdawgs/node-poppler/issues/646)) ([ab8c9fa](https://github.com/Fdawgs/node-poppler/commit/ab8c9fa85ae139467954fdf18e0b25711e6cb1d8))
* **deps:** bump github/codeql-action from 3.28.16 to 3.28.18 ([#647](https://github.com/Fdawgs/node-poppler/issues/647)) ([c6c5f2e](https://github.com/Fdawgs/node-poppler/commit/c6c5f2ed37d1625182c9fd5577ff55b2dfbc0e73))
* use tags for immutable github actions ([#648](https://github.com/Fdawgs/node-poppler/issues/648)) ([93285f2](https://github.com/Fdawgs/node-poppler/commit/93285f2ea200cbe2065f775638e88f14182ca3a0))


### Dependencies

* **deps-dev:** bump @types/jest from 29.5.14 to 30.0.0 ([#657](https://github.com/Fdawgs/node-poppler/issues/657)) ([c224031](https://github.com/Fdawgs/node-poppler/commit/c224031cfee7a3f65cfbf62ff5d826c4557fac59))
* **deps-dev:** bump jest from 29.7.0 to 30.0.3 ([#656](https://github.com/Fdawgs/node-poppler/issues/656)) ([2380acc](https://github.com/Fdawgs/node-poppler/commit/2380acc3f1d06ed5e72e03fb234e2d709cc2dd15))
* **deps-dev:** migrate to eslint flat config ([#654](https://github.com/Fdawgs/node-poppler/issues/654)) ([7c2a18d](https://github.com/Fdawgs/node-poppler/commit/7c2a18dd30d909432167bf760e8311bd7e3af160))
* **deps-dev:** replace license-checker with licensee ([#653](https://github.com/Fdawgs/node-poppler/issues/653)) ([cddbc55](https://github.com/Fdawgs/node-poppler/commit/cddbc558210465b5993d1d00c47806920b96f616))


### Improvements

* **index:** stop rethrowing errors ([#645](https://github.com/Fdawgs/node-poppler/issues/645)) ([f9e3c4d](https://github.com/Fdawgs/node-poppler/commit/f9e3c4d8a6eabfb25f9d2eedde6da304b61f0203))


### Miscellaneous

* **license:** replace date range with `-present` ([#652](https://github.com/Fdawgs/node-poppler/issues/652)) ([7b77412](https://github.com/Fdawgs/node-poppler/commit/7b77412fcc868f44adf70cd8700f3da53d981e47))
* remove redundant jsdoc comments ([#650](https://github.com/Fdawgs/node-poppler/issues/650)) ([aca19a2](https://github.com/Fdawgs/node-poppler/commit/aca19a2ab0cc5df781cd217d578a227ff50797f5))

## [8.0.1](https://github.com/Fdawgs/node-poppler/compare/v8.0.0...v8.0.1) (2025-05-06)


### Improvements

* **index:** replace `Object.keys` with `Object.entries` ([#641](https://github.com/Fdawgs/node-poppler/issues/641)) ([388df87](https://github.com/Fdawgs/node-poppler/commit/388df87eb2f25c4c0784d3ecf3c13bd537421a2d))

## [8.0.0](https://github.com/Fdawgs/node-poppler/compare/v7.2.4...v8.0.0) (2025-05-05)


### ⚠ BREAKING CHANGES

* dropped support for node 18
* **index:** `popplerPath` field can no longer be changed after class has been initialised

### Continuous integration

* **.github:** pin actions to commit-hash; set permissions at job level ([4a2cab8](https://github.com/Fdawgs/node-poppler/commit/4a2cab86c3789047cbfc0057e4e95f4c93307a79))
* add top-level workflow permissions ([#632](https://github.com/Fdawgs/node-poppler/issues/632)) ([da1f8c4](https://github.com/Fdawgs/node-poppler/commit/da1f8c4ba51afd4a6279a64ceabf72b605fbe589))
* **codeql:** analyse github actions ([2b753b5](https://github.com/Fdawgs/node-poppler/commit/2b753b5cfdc854d9054fd59117ae64e29fff88d8))
* **deps:** bump actions/dependency-review-action from 4.5.0 to 4.6.0 ([#633](https://github.com/Fdawgs/node-poppler/issues/633)) ([79fb42e](https://github.com/Fdawgs/node-poppler/commit/79fb42ecc2d440defddef5c4b11101885169cd78))
* **deps:** bump actions/setup-node from 4.3.0 to 4.4.0 ([#636](https://github.com/Fdawgs/node-poppler/issues/636)) ([910e092](https://github.com/Fdawgs/node-poppler/commit/910e092fe6529171e906c7a6f095e745b13851bb))
* **deps:** bump github/codeql-action from 3.28.12 to 3.28.13 ([#634](https://github.com/Fdawgs/node-poppler/issues/634)) ([45c71c8](https://github.com/Fdawgs/node-poppler/commit/45c71c8ba102328a70766aa19d58b9c246e59e6e))
* **deps:** bump github/codeql-action from 3.28.13 to 3.28.16 ([#637](https://github.com/Fdawgs/node-poppler/issues/637)) ([385f9d4](https://github.com/Fdawgs/node-poppler/commit/385f9d46d8c95b1d104f9d4eb0f8e9711f5635e7))
* use latest node lts version for unit tests ([#635](https://github.com/Fdawgs/node-poppler/issues/635)) ([0785a61](https://github.com/Fdawgs/node-poppler/commit/0785a6181ca330b259eb72429f38ab10f81c7c15))


### Dependencies

* **deps-dev:** bump glob from 10.4.5 to 11.0.2 ([#638](https://github.com/Fdawgs/node-poppler/issues/638)) ([ff73305](https://github.com/Fdawgs/node-poppler/commit/ff73305e2bd544c89a12d2360ff1dbdfcae67aaa))
* **deps-dev:** bump typescript from 5.7.3 to 5.8.2 ([#629](https://github.com/Fdawgs/node-poppler/issues/629)) ([6698255](https://github.com/Fdawgs/node-poppler/commit/669825599eb70b551acb8419636052cef0f66818))


### Documentation

* correctly capitalise node.js ([055fd1d](https://github.com/Fdawgs/node-poppler/commit/055fd1d1cd31975827ff663aa597ec43f74fc88b))


### Improvements

* **index:** destruct push in `pdfUnite`; replace `forEach` in `pdfInfo` ([#640](https://github.com/Fdawgs/node-poppler/issues/640)) ([9149dcc](https://github.com/Fdawgs/node-poppler/commit/9149dccf24ef154ac657f1a4ccbe58f77ea11e27))
* **index:** make `popplerPath` field private ([#625](https://github.com/Fdawgs/node-poppler/issues/625)) ([4b242fc](https://github.com/Fdawgs/node-poppler/commit/4b242fc443e06055c00a6a21f53e8706a0929461))
* **index:** use `for` loop over `for...of` loop ([#639](https://github.com/Fdawgs/node-poppler/issues/639)) ([ff419cf](https://github.com/Fdawgs/node-poppler/commit/ff419cfeb15571922e3a24858f6ea53971f89cfa))


### Miscellaneous

* drop support for node 18 ([18f09de](https://github.com/Fdawgs/node-poppler/commit/18f09de8f16e9848558af6b7517243951884493b))
* **index:** correct syntax for union types ([7e15571](https://github.com/Fdawgs/node-poppler/commit/7e155718c5cf9cc53adefc330f9e66f4f53322c1))
* **package:** standardise test script naming ([160d126](https://github.com/Fdawgs/node-poppler/commit/160d1266f575a91ad9156f2465dda26d1421a914))

## [7.2.4](https://github.com/Fdawgs/node-poppler/compare/v7.2.3...v7.2.4) (2025-02-06)


### Continuous integration

* **automerge:** flush buffer to disk ([884a9e3](https://github.com/Fdawgs/node-poppler/commit/884a9e3d33f689c780302c95f02dc1d96cb0fd4d))
* **release-please:** declare schema ([19d3ef7](https://github.com/Fdawgs/node-poppler/commit/19d3ef7b42ebc048021b3a5cfab4bbb0bdc9bc36))


### Dependencies

* **deps:** remove upath ([4a15022](https://github.com/Fdawgs/node-poppler/commit/4a150221edd3231383e349eb6e30d1714d871005))


### Documentation

* **api:** add api documentation ([98a10a3](https://github.com/Fdawgs/node-poppler/commit/98a10a33b76d5ea8d5286c09c443bf6dc96a8fee))


### Improvements

* **index:** optimise `parseOptions` ([#624](https://github.com/Fdawgs/node-poppler/issues/624)) ([604ad25](https://github.com/Fdawgs/node-poppler/commit/604ad25ff9d824c9a09f7f0beae920e92bd087d8))


### Miscellaneous

* **tsconfig:** set schema ([8898da8](https://github.com/Fdawgs/node-poppler/commit/8898da88e6990419d32c84b2c6fbc2706b944eb9))
* use impersonal language ([5ee481d](https://github.com/Fdawgs/node-poppler/commit/5ee481df3dc8e17016c24dd43ac6d95f8936caf4))

## [7.2.3](https://github.com/Fdawgs/node-poppler/compare/v7.2.2...v7.2.3) (2025-01-13)


### Bug fixes

* **index:** do not trim output if `options.maintainLayout` set ([#615](https://github.com/Fdawgs/node-poppler/issues/615)) ([ebc3fd0](https://github.com/Fdawgs/node-poppler/commit/ebc3fd0e3a5cf332ca273f567f907b6ed2f6965e))


### Continuous integration

* **cd:** migrate to manifest config ([428a865](https://github.com/Fdawgs/node-poppler/commit/428a865d7831c3d4a02d0749e7f4fb0e2a06fd27))
* **ci:** use major tag for coverallsapp/github-action ([15f5792](https://github.com/Fdawgs/node-poppler/commit/15f579253ac8c13bd73b12317bd0decae3ab3203))
* **deps:** bump coverallsapp/github-action from 2.3.0 to 2.3.1 ([#603](https://github.com/Fdawgs/node-poppler/issues/603)) ([ea759e3](https://github.com/Fdawgs/node-poppler/commit/ea759e310cf6bf6167178e2d07d34b3e1085db58))
* **deps:** bump coverallsapp/github-action from 2.3.1 to 2.3.4 ([#608](https://github.com/Fdawgs/node-poppler/issues/608)) ([dae765f](https://github.com/Fdawgs/node-poppler/commit/dae765ff08ae1e80ba646ee6c1d903134c2ee1d5))


### Dependencies

* **deps-dev:** bump dev dependencies ([e0d7ca6](https://github.com/Fdawgs/node-poppler/commit/e0d7ca6b999ea000899aaf4872724ba18a79b129))
* **deps-dev:** bump typescript from 5.5.4 to 5.6.3 ([#607](https://github.com/Fdawgs/node-poppler/issues/607)) ([10d0d29](https://github.com/Fdawgs/node-poppler/commit/10d0d294c6f6d058418e644538d1285f6e221cb8))
* **deps-dev:** lock typescript minor version ([#605](https://github.com/Fdawgs/node-poppler/issues/605)) ([8da91ef](https://github.com/Fdawgs/node-poppler/commit/8da91ef09db2145e105e100d383d80129968b22d))


### Documentation

* **readme:** rename ci badge to reflect workflow ([37abda0](https://github.com/Fdawgs/node-poppler/commit/37abda00b5c2b2899f35d95d044e2db5d0322da4))
* update README.md ([#599](https://github.com/Fdawgs/node-poppler/issues/599)) ([2e5a780](https://github.com/Fdawgs/node-poppler/commit/2e5a78033bd32aa81ade48ffd34a774edfadf593))


### Miscellaneous

* **license:** update license year ([9cb30f1](https://github.com/Fdawgs/node-poppler/commit/9cb30f106ec9a29af5c9775067300f3b8c8590a4))

## [7.2.2](https://github.com/Fdawgs/node-poppler/compare/v7.2.1...v7.2.2) (2024-08-15)


### Bug fixes

* **lib:** update poppler win32 binaries from 24.02.0 to 24.07.0 ([#596](https://github.com/Fdawgs/node-poppler/issues/596)) ([a788e1a](https://github.com/Fdawgs/node-poppler/commit/a788e1a06c6592d8b286492752700af24698bffa))


### Dependencies

* **deps-dev:** bump dev dependencies ([0318cf1](https://github.com/Fdawgs/node-poppler/commit/0318cf13097eee17c701a424beea9c0635b8e3d6))


### Miscellaneous

* **.npmrc:** enforce strict engine checks ([#593](https://github.com/Fdawgs/node-poppler/issues/593)) ([d933f29](https://github.com/Fdawgs/node-poppler/commit/d933f295bc8dd32666be1e1c83ea2a6217bec8b4))
* **.npmrc:** remove excess whitespace ([602c889](https://github.com/Fdawgs/node-poppler/commit/602c889761db564528ac2bc3edd9b202078ed3fe))

## [7.2.1](https://github.com/Fdawgs/node-poppler/compare/v7.2.0...v7.2.1) (2024-07-30)


### Continuous integration

* **cd:** sort release note sections alphabetically ([c7f8d31](https://github.com/Fdawgs/node-poppler/commit/c7f8d31a86c5859815e481c2b480c142913b95ce))
* **ci:** add node 22 to test matrix ([1739c55](https://github.com/Fdawgs/node-poppler/commit/1739c551daa474fe498722d6057f76c183b837c9))
* **ci:** audit package signatures and provenance attestations ([6d4e25c](https://github.com/Fdawgs/node-poppler/commit/6d4e25c4d98f80455f55fa28f2453b2d5d4441c6))
* **ci:** ignore recommended packages ([4fff485](https://github.com/Fdawgs/node-poppler/commit/4fff485531991505e93a1473b6d9344b12f5a36c))
* **ci:** run `apt-get update` for ubuntu tests ([35e548a](https://github.com/Fdawgs/node-poppler/commit/35e548a0cfda91c505a37a14d96ff48c81e53f7e))
* **deps:** bump coverallsapp/github-action from 2.2.3 to 2.3.0 ([#583](https://github.com/Fdawgs/node-poppler/issues/583)) ([894f7ca](https://github.com/Fdawgs/node-poppler/commit/894f7cafc5389e303e49937322787cb15fe2fbbc))
* **deps:** bump wagoid/commitlint-github-action from 5 to 6 ([#574](https://github.com/Fdawgs/node-poppler/issues/574)) ([0369669](https://github.com/Fdawgs/node-poppler/commit/03696693a68885ffe6fb2eea2f58dfdcde2218d4))
* use latest node lts version ([dc9d91d](https://github.com/Fdawgs/node-poppler/commit/dc9d91d753caefdb9ada3462960b4d3a4fe66368))


### Dependencies

* **deps-dev:** bump dev dependencies ([e189c9d](https://github.com/Fdawgs/node-poppler/commit/e189c9d30eab690aca40a88cce60b08d73b8f337))
* **deps-dev:** bump glob from 10.4.5 to 11.0.0 ([#587](https://github.com/Fdawgs/node-poppler/issues/587)) ([9480652](https://github.com/Fdawgs/node-poppler/commit/9480652be754be6f2b23bc55b608a89db0efa9e0))
* **deps:** bump semver from 7.6.0 to 7.6.3 ([b3ccf43](https://github.com/Fdawgs/node-poppler/commit/b3ccf43f14c0e8c9840f44a26460ad66c6478d96))


### Documentation

* **readme:** add parameter for `pdfToText` function ([#573](https://github.com/Fdawgs/node-poppler/issues/573)) ([ba77074](https://github.com/Fdawgs/node-poppler/commit/ba77074279de4adfaa6ba0d8ab2b09d281229e19))
* **readme:** update sudo commands ([8866344](https://github.com/Fdawgs/node-poppler/commit/886634441f1f3d8ed4b6cead5d34c5e8db95a1b6))


### Miscellaneous

* **.husky/commit-msg:** remove `npx` usage ([65cad62](https://github.com/Fdawgs/node-poppler/commit/65cad62c92deea80f421aefc3af3f82ba3f0f2f7))
* **package:** change author email ([b221d6d](https://github.com/Fdawgs/node-poppler/commit/b221d6d30db58dc0bda262e6ae5a5474802e676d))
* **package:** use shorter semver syntax ([e074e99](https://github.com/Fdawgs/node-poppler/commit/e074e99ce3941ba6b47a74607ae94494f63da24e))
* **tsconfig:** update target to `ES2023` ([a6ce29d](https://github.com/Fdawgs/node-poppler/commit/a6ce29d2561df759cc8f9a0c35e2bb2a1832c306))


### Tests

* **index:** account for arm macs ([4422d9d](https://github.com/Fdawgs/node-poppler/commit/4422d9dbebaf26e6dee3929851bf31ae69804c76))
* **index:** fix skipped test ([6a1f35d](https://github.com/Fdawgs/node-poppler/commit/6a1f35dc2e7e5048651da75d69cecc6ab31a2f4c))

## [7.2.0](https://github.com/Fdawgs/node-poppler/compare/v7.1.1...v7.2.0) (2024-03-12)


### Features

* **index:** use binary from path env variable if not passed as param ([a7319f6](https://github.com/Fdawgs/node-poppler/commit/a7319f69689ada7f712bb42874f0ea15d7812bb4))


### Dependencies

* **deps-dev:** bump dev dependencies ([9253774](https://github.com/Fdawgs/node-poppler/commit/9253774d388a9ff066ebd032cbdfa18a1d06c1e5))
* **deps-dev:** bump the commitlint group with 2 updates ([#567](https://github.com/Fdawgs/node-poppler/issues/567)) ([fd91827](https://github.com/Fdawgs/node-poppler/commit/fd918277f1cbf76d4640eb33a87961496f9955f4))


### Miscellaneous

* **index:** correct constructor description ([0119864](https://github.com/Fdawgs/node-poppler/commit/01198648a0f4cd1198b1b41f7e89fc746a5cbeee))
* **index:** inline comment re export types ([3c21793](https://github.com/Fdawgs/node-poppler/commit/3c217936690786c11ac48091dd63700f611c89dd))
* stop types being committed ([1e82060](https://github.com/Fdawgs/node-poppler/commit/1e82060079de72d9a551b29beee8fdab09451030))


### Continuous integration

* **cd:** standardise [@fdawgs](https://github.com/fdawgs) cd workflows ([2b0a000](https://github.com/Fdawgs/node-poppler/commit/2b0a000213814ef169bcc27150e4b9c3567e69a5))
* **ci:** standardise [@fdawgs](https://github.com/fdawgs) ci workflows ([84c2444](https://github.com/Fdawgs/node-poppler/commit/84c244445914dacc679f318e3eed188e4f388f13))
* **dependabot:** add `[@eslint-community](https://github.com/eslint-community)` scoped deps to eslint group ([5d4072d](https://github.com/Fdawgs/node-poppler/commit/5d4072de4d2eb42190320bff718653e49e66d643))


### Documentation

* **readme:** remove section re passing bin path for unix installs ([69a6fa1](https://github.com/Fdawgs/node-poppler/commit/69a6fa15529c3c2d1818788afde4de14710eb693))
* remove outdated api docs; refer to type defs instead ([a687ea3](https://github.com/Fdawgs/node-poppler/commit/a687ea309b6fc76ca5c5901213f95158f5a585b4))

## [7.1.1](https://github.com/Fdawgs/node-poppler/compare/v7.1.0...v7.1.1) (2024-02-23)


### Bug fixes

* **lib:** update poppler win32 binaries from 23.11.0 to 24.02.0 ([07fc431](https://github.com/Fdawgs/node-poppler/commit/07fc431b819f9802ac750cb8294c7ad3ff7580d6))


### Dependencies

* **deps-dev:** bump dev dependencies ([66cd910](https://github.com/Fdawgs/node-poppler/commit/66cd910b7109d2f2b97bfdac1d4a2b5c4d8e65a9))
* **deps-dev:** bump dev dependencies ([9b25cf4](https://github.com/Fdawgs/node-poppler/commit/9b25cf4dfc4132c7614492ba32a45e7cd19ac259))
* **deps-dev:** bump dev dependencies ([5d49f0b](https://github.com/Fdawgs/node-poppler/commit/5d49f0bea9a5127b87513deb46a4bb6fe0aab4bf))
* **deps-dev:** bump husky from 8.0.3 to 9.0.6 ([#565](https://github.com/Fdawgs/node-poppler/issues/565)) ([1ce715d](https://github.com/Fdawgs/node-poppler/commit/1ce715d79fdb0dacc989464baa80a7e77b69466a))
* **deps-dev:** remove broken eslint-plugin-security-node ([7ed59ba](https://github.com/Fdawgs/node-poppler/commit/7ed59ba79e9fbc43182c4d9bc21d70f54a4a6ca4))
* **deps:** bump semver from 7.5.4 to 7.6.0 ([f561a84](https://github.com/Fdawgs/node-poppler/commit/f561a8426a53ecdfe0a102642731cee9e6eb049a))


### Miscellaneous

* **.husky:** migrate hooks to v9 style ([31d8729](https://github.com/Fdawgs/node-poppler/commit/31d872937fb64397db187caff8aab0f0d730114f))
* **.prettierignore:** ignore auto-generate types ([3e52e27](https://github.com/Fdawgs/node-poppler/commit/3e52e27895970f83f4c89f677ea0020d1d65f4b4))
* **.vscode:** fix `prettier.prettierPath` setting ([7108895](https://github.com/Fdawgs/node-poppler/commit/7108895d16da656058d178fc38e746e61bf2757d))
* **.vscode:** use local prettier version ([0ec4bdf](https://github.com/Fdawgs/node-poppler/commit/0ec4bdf3934e74536bf5e8f70f39ef694fe654f3))
* **index:** fix whitespace ([3cf93e0](https://github.com/Fdawgs/node-poppler/commit/3cf93e0d6754beb2eca43697b6725361139bf880))
* jsdoc comments must be complete sentences ([d91f466](https://github.com/Fdawgs/node-poppler/commit/d91f4669f82da696e11bda9fb3aa85236af148cd))
* **package:** add `lint:fix` script ([deeb062](https://github.com/Fdawgs/node-poppler/commit/deeb0626c13e9a32824008542dcf59a1b6180a4d))
* **package:** fix `repository` structure ([0d7baf1](https://github.com/Fdawgs/node-poppler/commit/0d7baf16403677701e6a1c078c28ca7cae71af7a))
* **package:** run `lint:prettier` in `test` script ([02cac7f](https://github.com/Fdawgs/node-poppler/commit/02cac7f07b3ddd052c77b3b8a84ce519c2c1627c))
* **scripts/license-checker:** handle old license arrays or missing ([3e651b6](https://github.com/Fdawgs/node-poppler/commit/3e651b636f2a217585e242a13098f9efe3320661))
* sort options in ascending order ([f0dc8b8](https://github.com/Fdawgs/node-poppler/commit/f0dc8b8a21157b01cd85eb2f88dc6b932dc37f2d))
* **tsconfig:** remove `lib`; `target` will be used in absence ([1c8da1c](https://github.com/Fdawgs/node-poppler/commit/1c8da1c48bf7349104f13f813b6449f2d3dcf1a6))
* use shared files from `fdawgs/.github` ([79fd2c2](https://github.com/Fdawgs/node-poppler/commit/79fd2c2d57290894631f164d4a1579ba27c96424))


### Continuous integration

* **automerge:** optimise inline js scripts ([33412c5](https://github.com/Fdawgs/node-poppler/commit/33412c5bc1162ec8e77e264eea826ba60e620c30))
* **cd:** add github packages publish job ([809a726](https://github.com/Fdawgs/node-poppler/commit/809a726df5c9e684df0c025984be41dfb02b6c7f))
* **cd:** set github package to public ([498bb2f](https://github.com/Fdawgs/node-poppler/commit/498bb2f8876cf25b6c0490974c05d2daeaf07600))
* **cd:** use `main` environment for publish-npm job ([613546c](https://github.com/Fdawgs/node-poppler/commit/613546c6454293223975c0c6a67b20f241cd2884))
* **dependabot:** ignore release-please-action major updates ([c6e565d](https://github.com/Fdawgs/node-poppler/commit/c6e565da3c9eae39368458ab897a7de0026d4629))
* **deps:** bump actions/dependency-review-action from 3 to 4 ([#564](https://github.com/Fdawgs/node-poppler/issues/564)) ([6536741](https://github.com/Fdawgs/node-poppler/commit/6536741826e2628f51afbd72edd88e09e86656b4))
* **deps:** bump actions/github-script from 6 to 7 ([#553](https://github.com/Fdawgs/node-poppler/issues/553)) ([36afe67](https://github.com/Fdawgs/node-poppler/commit/36afe67ea58dff35fc3038201ea597916f4254bc))
* **deps:** bump actions/upload-artifact from 3 to 4 ([#557](https://github.com/Fdawgs/node-poppler/issues/557)) ([6a67b7c](https://github.com/Fdawgs/node-poppler/commit/6a67b7c452e13bdc26ac8518258370f3153f0386))
* **deps:** bump github/codeql-action from 2 to 3 ([#558](https://github.com/Fdawgs/node-poppler/issues/558)) ([d724604](https://github.com/Fdawgs/node-poppler/commit/d724604d2c1df259edcac8c44329506b0f80a587))


### Improvements

* **index:** combine chained array pushes ([ee37124](https://github.com/Fdawgs/node-poppler/commit/ee371249c80f57b12e0836366c3e748a74b35a6c))
* **index:** use constant comparison order ([71720b7](https://github.com/Fdawgs/node-poppler/commit/71720b794c29b7f9abd2e3d2b010f6cd17dadae8))


### Documentation

* **readme:** update links ([1f6d17f](https://github.com/Fdawgs/node-poppler/commit/1f6d17f9a8b8123c951b3ac30396ebb6139c66b5))

## [7.1.0](https://github.com/Fdawgs/node-poppler/compare/v7.0.2...v7.1.0) (2023-11-03)


### Features

* **index:** add `printDocStruct` option to `pdfToCairo` ([f6d2e2a](https://github.com/Fdawgs/node-poppler/commit/f6d2e2a1ed69280702ecf94ba51f88e824086826))


### Bug fixes

* **lib:** update poppler win32 binaries from 23.07.0 to 23.11.0 ([c02f9aa](https://github.com/Fdawgs/node-poppler/commit/c02f9aa8e0526512f3c1fce974cdc3d753d5098a))


### Documentation

* **readme:** fix broken ci badge link ([0f77a7f](https://github.com/Fdawgs/node-poppler/commit/0f77a7f827f12812680cfde9fed5b08740251559))
* **readme:** fix npm badge ([ce9fcdf](https://github.com/Fdawgs/node-poppler/commit/ce9fcdff815e51d22da912e06a76258cc23bde64))

## [7.0.2](https://github.com/Fdawgs/node-poppler/compare/v7.0.1...v7.0.2) (2023-10-29)


### Dependencies

* **deps-dev:** add eslint-community/eslint-plugin-eslint-comments ([07641df](https://github.com/Fdawgs/node-poppler/commit/07641df23e0ef79bdf5fa99c4180611cfb1c8415))
* **deps-dev:** bump the commitlint group with 2 updates ([#549](https://github.com/Fdawgs/node-poppler/issues/549)) ([5f50bd5](https://github.com/Fdawgs/node-poppler/commit/5f50bd539c94ea7c92bb9fb238af913bbe059349))
* **deps-dev:** bump the eslint group with 1 update ([#550](https://github.com/Fdawgs/node-poppler/issues/550)) ([76f5187](https://github.com/Fdawgs/node-poppler/commit/76f51871e1a4d8e8bd63f49d83be2fa8b0ee4417))


### Miscellaneous

* **.vscode:** add github-markdown-preview to recommended extension ([21842b9](https://github.com/Fdawgs/node-poppler/commit/21842b9158277924d7efc9ddc57629dedd161f9b))
* **.vscode:** add gitlens to recommended extensions ([19a5838](https://github.com/Fdawgs/node-poppler/commit/19a5838d976720d3ec21156cff984364af7ee4a8))
* **scripts/license-checker:** update link to deprecated list ([4f7a1a3](https://github.com/Fdawgs/node-poppler/commit/4f7a1a33986a6626a615420f2e1646dbcbafae6f))
* **tsconfig:** use es2022 lib ([f52b92b](https://github.com/Fdawgs/node-poppler/commit/f52b92bcea47416bb389953614472cb141826975))


### Continuous integration

* **deps:** bump actions/setup-node from 3 to 4 ([#548](https://github.com/Fdawgs/node-poppler/issues/548)) ([0f4cf99](https://github.com/Fdawgs/node-poppler/commit/0f4cf993126a2af10d0f0c61e2f3f6fa6572ac88))


### Improvements

* **index:** cache regex literals ([7c1296e](https://github.com/Fdawgs/node-poppler/commit/7c1296e676b8f190194b89ac8c858a2e144c6276))

## [7.0.1](https://github.com/Fdawgs/node-poppler/compare/v7.0.0...v7.0.1) (2023-09-26)


### Bug fixes

* **index:** do not mask error code if unknown ([dc524a7](https://github.com/Fdawgs/node-poppler/commit/dc524a728588d0342f6bed5853c99d3aac9ac6fd))
* **index:** expose error codes for pdffonts and pdfinfo ([c2f277b](https://github.com/Fdawgs/node-poppler/commit/c2f277b6cb3bd2eeb22993cb6d52f96e9b0d6037))

## [7.0.0](https://github.com/Fdawgs/node-poppler/compare/v6.2.7...v7.0.0) (2023-09-23)


### ⚠ BREAKING CHANGES

* dropped support for EOL node 14 and 16

### Bug fixes

* **index:** `pdfInfo()` use `spawn` over `execFile` to stop truncation ([c725ff9](https://github.com/Fdawgs/node-poppler/commit/c725ff9bfadeac1bfda896d651162c11c2d9a43c))
* **index:** `pdfToPs()` rasterize option misspelt key ([d578e78](https://github.com/Fdawgs/node-poppler/commit/d578e7879ad900a0e02496fd18551126fc8b6677))
* **index:** handle null error codes ([77aeb24](https://github.com/Fdawgs/node-poppler/commit/77aeb24b3c6b5445d72f79d129304c7cf4136937))
* **index:** promise resolve type for `pdfInfo()` ([85c4c36](https://github.com/Fdawgs/node-poppler/commit/85c4c360b9b50441eafe91d70d87d56b7ae92097))
* **index:** type build ([84abe85](https://github.com/Fdawgs/node-poppler/commit/84abe855bc68aa037fc1b78ad2f458f492f7e898))


### Dependencies

* **deps-dev:** add @types/jest ([1c1dbcc](https://github.com/Fdawgs/node-poppler/commit/1c1dbccb17e7319ab8e220993d2b9155dcdef2a7))
* **deps-dev:** bump dev dependencies ([ef28215](https://github.com/Fdawgs/node-poppler/commit/ef28215411ee635b6cf06ddb3475f5c86e31e89a))


### Miscellaneous

* **.eslintrc:** bump ecmaversion to 2023 ([67dba5e](https://github.com/Fdawgs/node-poppler/commit/67dba5e249775aae2f0f224dcd5d819e765db8bb))
* **.gitattributes:** auto lf eol all files ([d3c339d](https://github.com/Fdawgs/node-poppler/commit/d3c339d56232083e86202cccefbd7b4aa5c62c3d))
* add missing `.gitattributes` file ([8084971](https://github.com/Fdawgs/node-poppler/commit/80849712d33221e831cbe613aea99661ff8d0378))
* change comment blocks with one line into single block ([16e7bbe](https://github.com/Fdawgs/node-poppler/commit/16e7bbe5bdc25f87d8b998dab55717d6ddc021e5))
* destruct upath module import ([#532](https://github.com/Fdawgs/node-poppler/issues/532)) ([e60b2ab](https://github.com/Fdawgs/node-poppler/commit/e60b2abcc700eeed01b4d2cfaa8899304503e8d1))
* drop support for node 14 and 16 ([#534](https://github.com/Fdawgs/node-poppler/issues/534)) ([92ce251](https://github.com/Fdawgs/node-poppler/commit/92ce251097d737b6cd5ba5ef8346ea5b9c1d17cd))
* **package:** explicitly declare js module type ([1716b4d](https://github.com/Fdawgs/node-poppler/commit/1716b4d958e046d68a165964b472544b851f2738))
* **scripts/license-checker:** declare `copyLeftLicenses` type ([ed51441](https://github.com/Fdawgs/node-poppler/commit/ed5144126eecb089e4c8346ec065405891fd1a54))
* **scripts/license-checker:** ignore invalid ts error ([7fbaf0a](https://github.com/Fdawgs/node-poppler/commit/7fbaf0a71006e55cd885df9dd3fdcc72662b5aff))
* **tsconfig:** disable strict mode ([91a11f5](https://github.com/Fdawgs/node-poppler/commit/91a11f53a5592f7c584a36c3dfbcf2fa602d6f5b))
* **tsconfig:** enable checkJs compiler option ([bb385fa](https://github.com/Fdawgs/node-poppler/commit/bb385fa144272fbbe3ec4e7543ac6668b7459173))
* **tsconfig:** set module to nodenext ([e451110](https://github.com/Fdawgs/node-poppler/commit/e451110391de0acd66839554c4967238032bc2ff))
* **tsconfig:** target es2022 ([c3f5d10](https://github.com/Fdawgs/node-poppler/commit/c3f5d102ac560885e5d4e415203b900b7139023a))
* use `[@see](https://github.com/see)` jsdoc tag for inline comment links ([f44ad78](https://github.com/Fdawgs/node-poppler/commit/f44ad78d94f03ef5ee48a5fe68e18f634597e2cf))


### Continuous integration

* **dependabot:** group dependabot updates ([a230488](https://github.com/Fdawgs/node-poppler/commit/a23048805d0a9405a2ee6b84bd4f969c5111d036))
* **deps:** bump actions/checkout from 3 to 4 ([#541](https://github.com/Fdawgs/node-poppler/issues/541)) ([21f39e9](https://github.com/Fdawgs/node-poppler/commit/21f39e9be7109a3ed344c4906ddaee4ae0b8a703))
* **deps:** bump coverallsapp/github-action from 2.2.1 to 2.2.3 ([#542](https://github.com/Fdawgs/node-poppler/issues/542)) ([ef261e5](https://github.com/Fdawgs/node-poppler/commit/ef261e58f6c5b4a42399f039bc95515ef0274362))


### Improvements

* **index:** consolidate error code handling branches ([2411723](https://github.com/Fdawgs/node-poppler/commit/24117230ece3580b69ed5a5c698c25d156aa1d6f))
* **index:** consolidate error codes ([#540](https://github.com/Fdawgs/node-poppler/issues/540)) ([f899904](https://github.com/Fdawgs/node-poppler/commit/f899904cfcf0a1aa7a2e09d1ff53b23929af5762))
* **index:** replace `hasOwnProperty.call()` with `hasOwn()` ([db091b8](https://github.com/Fdawgs/node-poppler/commit/db091b8e311890ab7732894d6116d9a99a2bbb8d))
* use `node:` prefix to bypass require.cache call for builtins ([c45e7da](https://github.com/Fdawgs/node-poppler/commit/c45e7da325e0c200bca84f026133906077cfb0ff))


### Documentation

* **readme:** update chaining examples with `.catch()` ([56980d2](https://github.com/Fdawgs/node-poppler/commit/56980d23b3bb155c6e4cbd8cbc61b2c0cca85c65))

## [6.2.7](https://github.com/Fdawgs/node-poppler/compare/v6.2.6...v6.2.7) (2023-08-16)


### Dependencies

* **deps-dev:** bump dev dependencies ([#528](https://github.com/Fdawgs/node-poppler/issues/528)) ([f734981](https://github.com/Fdawgs/node-poppler/commit/f734981124f666340c4753645251a31732743fbc))
* **deps-dev:** bump eslint-config-prettier from 8.10.0 to 9.0.0 ([#527](https://github.com/Fdawgs/node-poppler/issues/527)) ([fcde459](https://github.com/Fdawgs/node-poppler/commit/fcde459beabac31e44e318f856f56d928b60adcb))
* **deps:** add semver dependency ([003f09a](https://github.com/Fdawgs/node-poppler/commit/003f09a4bceea8adae8929a0f793e05351062f22))


### Miscellaneous

* **.eslintrc:** error on google closure jsdoc syntax ([3180ab5](https://github.com/Fdawgs/node-poppler/commit/3180ab5a5f6d5a453cab01913f8ea67a63f820c6))
* **index:** use jsdoc syntax for arrays over interfaces ([5e07b37](https://github.com/Fdawgs/node-poppler/commit/5e07b37c149732b0118efcafa202958359c47328))
* rename `lint:prettier` scripts to reflect their function ([#520](https://github.com/Fdawgs/node-poppler/issues/520)) ([b6d14c1](https://github.com/Fdawgs/node-poppler/commit/b6d14c1a7a96f22eb9aac247a7d1debc5a98eace))
* **scripts/license-checker:** use `console.error()` to log failures ([c641af8](https://github.com/Fdawgs/node-poppler/commit/c641af8b840bcbaa710b12fa5257eff6f202e1c9))
* sort param types alphabetically ([f0945c9](https://github.com/Fdawgs/node-poppler/commit/f0945c9cfb040115824680dc906f62d6fcf3d5ee))
* **test-resources:** move test_files into new dir ([4816d46](https://github.com/Fdawgs/node-poppler/commit/4816d46808528724003f02c79b5d06c04b8cc7ad))
* **tsconfig:** sort options ([2e25274](https://github.com/Fdawgs/node-poppler/commit/2e25274c8847cee60c6371c23c63ee5a9b1bba92))
* use jsdoc syntax for opt params over google closure syntax ([972d222](https://github.com/Fdawgs/node-poppler/commit/972d2223d60d31339a383d065f750147cd7fe6b4))


### Continuous integration

* **ci:** error on new jest snapshot ([c4c55ed](https://github.com/Fdawgs/node-poppler/commit/c4c55ed24da90fbc97c6b3378940decef252af96))
* **ci:** revert jest snapshot cli arg addition ([6368e92](https://github.com/Fdawgs/node-poppler/commit/6368e92fce2bedf2d667f8a909fbb3a31008b6e5))
* **deps:** bump coverallsapp/github-action from 2.2.0 to 2.2.1 ([#523](https://github.com/Fdawgs/node-poppler/issues/523)) ([f229049](https://github.com/Fdawgs/node-poppler/commit/f2290491c347e337187837b2945501713d30fac3))


### Improvements

* deconstruct imports ([28de503](https://github.com/Fdawgs/node-poppler/commit/28de50353373c176cebdf797de840e3e216a82a5))

## [6.2.6](https://github.com/Fdawgs/node-poppler/compare/v6.2.5...v6.2.6) (2023-07-08)


### Miscellaneous

* **.eslintrc:** sort `extends` array ([6a4e5fa](https://github.com/Fdawgs/node-poppler/commit/6a4e5fad13a6875c86eea769d4a27014fe31d22e))


### Dependencies

* **deps-dev:** add eslint-plugin-regexp ([4fbae66](https://github.com/Fdawgs/node-poppler/commit/4fbae661ae80508e68d4fb70161d788f9b08403d))
* **deps-dev:** bump dev dependencies ([fa353db](https://github.com/Fdawgs/node-poppler/commit/fa353db76210a4c9dbcaf37c30965545ee0206f0))


### Improvements

* **index:** add strict `u` flag to all regex patterns ([06ac742](https://github.com/Fdawgs/node-poppler/commit/06ac7423950cbd8136b7665465c562e849bc1b29))
* **index:** remove useless `i` regex flag ([72eea36](https://github.com/Fdawgs/node-poppler/commit/72eea3679c6cb9bb91cea50f35ce6af429160ff4))


### Bug fixes

* add missing strict mode directives ([7f25364](https://github.com/Fdawgs/node-poppler/commit/7f25364784711f2cfeae71a34d1045589e964e1f))
* **lib:** update poppler win32 binaries from 23.05.0 to 23.07.0 ([#517](https://github.com/Fdawgs/node-poppler/issues/517)) ([9a3cb32](https://github.com/Fdawgs/node-poppler/commit/9a3cb32dd4afbdf4666dc275b3833cdc570c833c))

## [6.2.5](https://github.com/Fdawgs/node-poppler/compare/v6.2.4...v6.2.5) (2023-06-24)


### Continuous integration

* **deps:** bump coverallsapp/github-action from 2.1.2 to 2.2.0 ([#509](https://github.com/Fdawgs/node-poppler/issues/509)) ([4f46dbd](https://github.com/Fdawgs/node-poppler/commit/4f46dbd1f4c0c1b0fe2dac59f20131201894a772))


### Miscellaneous

* **.eslintrc:** enable additional jest plugin rules ([564555a](https://github.com/Fdawgs/node-poppler/commit/564555a4ad0f591b95298ef5da066dfe7b75f286))
* **.eslintrc:** enable additional jsdoc plugin rules ([36d333f](https://github.com/Fdawgs/node-poppler/commit/36d333fefc455a852799f0eba9e9fa14f2a8b650))
* **.eslintrc:** only use jest plugin to lint test-related files ([2f515ea](https://github.com/Fdawgs/node-poppler/commit/2f515eaa27981d23a6c58499a5bd5bdca2bdbd63))
* **.eslintrc:** update ecmascript version ([8b4662e](https://github.com/Fdawgs/node-poppler/commit/8b4662eaf12076dcbae26b53ede7d651a45a7bb4))
* **index:** fix jsdoc params ([f162260](https://github.com/Fdawgs/node-poppler/commit/f16226018ecf5b76befdd55097c53a1ff99e86ba))
* **package:** remove global jest mock config values ([#507](https://github.com/Fdawgs/node-poppler/issues/507)) ([a75b83d](https://github.com/Fdawgs/node-poppler/commit/a75b83d4f3cbbfb7e477edb9d3a9606d3b2affa2))
* **package:** set jest coverage threshold ([b21db44](https://github.com/Fdawgs/node-poppler/commit/b21db44ceb8d17dd556bc9f3762cbe938bcae62b))


### Dependencies

* **deps-dev:** bump dev dependencies ([#512](https://github.com/Fdawgs/node-poppler/issues/512)) ([bbb1b68](https://github.com/Fdawgs/node-poppler/commit/bbb1b68cfe3424d73330eeda8e1178abc1c14530))

## [6.2.4](https://github.com/Fdawgs/node-poppler/compare/v6.2.3...v6.2.4) (2023-06-02)


### Miscellaneous

* **scripts:** fix inline comment style ([#503](https://github.com/Fdawgs/node-poppler/issues/503)) ([20c6145](https://github.com/Fdawgs/node-poppler/commit/20c6145d215fa2b14fc303948899c22fca82fce8))
* use nouns for leading word in function description tags ([#501](https://github.com/Fdawgs/node-poppler/issues/501)) ([f0e9aee](https://github.com/Fdawgs/node-poppler/commit/f0e9aee3e3d0f664e5bf8994baac686ae518d713))


### Dependencies

* **deps-dev:** bump dev dependencies ([#504](https://github.com/Fdawgs/node-poppler/issues/504)) ([f5c13f8](https://github.com/Fdawgs/node-poppler/commit/f5c13f81963834b4e63ca415e57e382c676e99e0))
* **deps-dev:** bump eslint-plugin-jsdoc from 44.2.7 to 46.1.0 ([#505](https://github.com/Fdawgs/node-poppler/issues/505)) ([867bb8b](https://github.com/Fdawgs/node-poppler/commit/867bb8bbacda6bd3399b1cf3afb70a8986b2afa2))


### Bug fixes

* **index:** return types don't support promise rejection values ([#506](https://github.com/Fdawgs/node-poppler/issues/506)) ([00a78d8](https://github.com/Fdawgs/node-poppler/commit/00a78d8213a8576da96c903e75064da66bf46c87))

## [6.2.3](https://github.com/Fdawgs/node-poppler/compare/v6.2.2...v6.2.3) (2023-05-13)


### Miscellaneous

* **scripts/license-checker:** resolve eslint jsdoc warning ([#496](https://github.com/Fdawgs/node-poppler/issues/496)) ([cba1622](https://github.com/Fdawgs/node-poppler/commit/cba1622587d35f2d9ad88a590c90810433da8917))


### Dependencies

* **deps-dev:** bump eslint-plugin-jsdoc from 43.2.0 to 44.2.3 ([#500](https://github.com/Fdawgs/node-poppler/issues/500)) ([2fa53af](https://github.com/Fdawgs/node-poppler/commit/2fa53afbcfed08dc66dde3bf3bb24b9de5f983f2))


### Bug fixes

* **index:** respect the value of boolean options ([#498](https://github.com/Fdawgs/node-poppler/issues/498)) ([e736e3e](https://github.com/Fdawgs/node-poppler/commit/e736e3e5a4e728233167516491925bb07fa79c19))
* **lib:** update poppler win32 binaries from 23.01.0 to 23.05.0 ([#499](https://github.com/Fdawgs/node-poppler/issues/499)) ([b0836ea](https://github.com/Fdawgs/node-poppler/commit/b0836eac727904ffbb41d59e5bcdae710317bc12))

## [6.2.2](https://github.com/Fdawgs/node-poppler/compare/v6.2.1...v6.2.2) (2023-04-24)


### Dependencies

* **deps-dev:** bump eslint-plugin-jsdoc from 40.3.0 to 43.0.7 ([#492](https://github.com/Fdawgs/node-poppler/issues/492)) ([93b7b57](https://github.com/Fdawgs/node-poppler/commit/93b7b578798013357828b6bccf11b1ae00f8aad6))
* **deps-dev:** bump glob from 9.3.5 to 10.2.2 ([#491](https://github.com/Fdawgs/node-poppler/issues/491)) ([4af7652](https://github.com/Fdawgs/node-poppler/commit/4af7652401c44c3d453407cdfa9caa28be18cbc8))


### Continuous integration

* **cd:** publish to npm with provenance ([#495](https://github.com/Fdawgs/node-poppler/issues/495)) ([7571e97](https://github.com/Fdawgs/node-poppler/commit/7571e97ce2726eb6acd593af724ece55a2acc7b2))
* **ci:** add node 20 to test matrix ([#493](https://github.com/Fdawgs/node-poppler/issues/493)) ([b9c7a5d](https://github.com/Fdawgs/node-poppler/commit/b9c7a5db478d992e46dcd0e7f98f4f3f22050b7a))
* **deps:** bump coverallsapp/github-action from 2.0.0 to 2.1.2 ([#490](https://github.com/Fdawgs/node-poppler/issues/490)) ([9df3af0](https://github.com/Fdawgs/node-poppler/commit/9df3af00f7dbbfab19349f4c27f3386f0f066ca2))

## [6.2.1](https://github.com/Fdawgs/node-poppler/compare/v6.2.0...v6.2.1) (2023-04-03)


### Documentation

* **contributing:** add link to conventional config ([#483](https://github.com/Fdawgs/node-poppler/issues/483)) ([349b8fd](https://github.com/Fdawgs/node-poppler/commit/349b8fd54daf54afea244e478a08b73ad29f06fc))


### Continuous integration

* **dependabot:** change commit message prefix for gh actions to `ci` ([#482](https://github.com/Fdawgs/node-poppler/issues/482)) ([0833174](https://github.com/Fdawgs/node-poppler/commit/0833174c9ed6377c145a19748f61086012fade7e))
* **dependabot:** ignore esm major versions ([#481](https://github.com/Fdawgs/node-poppler/issues/481)) ([b536bbd](https://github.com/Fdawgs/node-poppler/commit/b536bbde5d88243ab9865e4b9755f91d7cc17ae9))
* **deps:** bump coverallsapp/github-action from 1.2.4 to 2.0.0 ([#484](https://github.com/Fdawgs/node-poppler/issues/484)) ([9a98bf1](https://github.com/Fdawgs/node-poppler/commit/9a98bf1cf40bf8866b0ed50576e1b775401bb2a0))


### Miscellaneous

* **.prettierrc:** enable `arrowParens` option ([#489](https://github.com/Fdawgs/node-poppler/issues/489)) ([df6bafa](https://github.com/Fdawgs/node-poppler/commit/df6bafad32b5787f58232efbb2a62130c49708aa))
* ignore bun lockfile ([#478](https://github.com/Fdawgs/node-poppler/issues/478)) ([f6a9549](https://github.com/Fdawgs/node-poppler/commit/f6a9549b793c8d8916616434786cc0a3582ed5f4))
* **index:** remove redundant `async` keywords ([#480](https://github.com/Fdawgs/node-poppler/issues/480)) ([d9fe6cd](https://github.com/Fdawgs/node-poppler/commit/d9fe6cda27651613a98a55f85979bea17bf81e15))
* **index:** remove redundant eslint comments ([#487](https://github.com/Fdawgs/node-poppler/issues/487)) ([058d2a6](https://github.com/Fdawgs/node-poppler/commit/058d2a6e7d2024379d35eaf1a3dc241b6033266c))
* **package:** add funding url ([442f6f6](https://github.com/Fdawgs/node-poppler/commit/442f6f63a88a63108ba8e52bf6da34b71ff4ca82))
* **scripts:** add eslint rule file ([a06adae](https://github.com/Fdawgs/node-poppler/commit/a06adaeb94cf23af7346a2df57b0e42129820f29))
* **scripts:** remove redundant export ([2a14904](https://github.com/Fdawgs/node-poppler/commit/2a149040e260c7150f8359a3e1b527a7d398006b))
* **scripts:** use js script to check licenses ([#479](https://github.com/Fdawgs/node-poppler/issues/479)) ([c79dea7](https://github.com/Fdawgs/node-poppler/commit/c79dea7ab3732be4d602c63ccc08ccf01f881766))


### Dependencies

* **deps-dev:** bump dev dependencies ([3277e49](https://github.com/Fdawgs/node-poppler/commit/3277e49aa50996eed6dc8ed995a5ea2f7b0159c1))
* **deps-dev:** bump glob from 8.1.0 to 9.1.0 ([#475](https://github.com/Fdawgs/node-poppler/issues/475)) ([899020d](https://github.com/Fdawgs/node-poppler/commit/899020da66f81518020da063f78dd1c11bf08728))
* **deps-dev:** bump typescript from 4.9.5 to 5.0.2 ([#485](https://github.com/Fdawgs/node-poppler/issues/485)) ([174da42](https://github.com/Fdawgs/node-poppler/commit/174da42980eb09c13de72be4acda07d2357bce9b))
* **deps:** bump coverallsapp/github-action from 1.1.3 to 1.2.3 ([#474](https://github.com/Fdawgs/node-poppler/issues/474)) ([6b8976b](https://github.com/Fdawgs/node-poppler/commit/6b8976ba28552169112e09b3651087ec4739b8aa))
* **deps:** bump coverallsapp/github-action from 1.2.3 to 1.2.4 ([#477](https://github.com/Fdawgs/node-poppler/issues/477)) ([e57e73f](https://github.com/Fdawgs/node-poppler/commit/e57e73f8322179aeff07901fc4cea8135289f191))

## [6.2.0](https://github.com/Fdawgs/node-poppler/compare/v6.1.2...v6.2.0) (2023-02-20)


### Features

* add nodenext compatibility ([#470](https://github.com/Fdawgs/node-poppler/issues/470)) ([4590aa7](https://github.com/Fdawgs/node-poppler/commit/4590aa794e05d4da6a3bbbef437f5c958c8af551))


### Documentation

* **api:** remove `parseOptions()` private method ([#471](https://github.com/Fdawgs/node-poppler/issues/471)) ([7637c71](https://github.com/Fdawgs/node-poppler/commit/7637c71c3e60543a8b77a6f94893c24d3051add6))


### Bug fixes

* **index:** add error code for icc profiles ([0d2f61d](https://github.com/Fdawgs/node-poppler/commit/0d2f61ddd7a720bf043b58a8a12c272ddffd21da))


### Miscellaneous

* **index:** remove jsdoc type from `parseOptions()` ([4a47c93](https://github.com/Fdawgs/node-poppler/commit/4a47c930996f90785c5305c46b80a47dc3dd7cba))


### Improvements

* **index:** `pdfToHtml()` does not have exit codes ([4176746](https://github.com/Fdawgs/node-poppler/commit/417674660af0be53d5f73bd13e95b6d76318612e))
* **index:** do not return empty error messages on rejection ([c020a12](https://github.com/Fdawgs/node-poppler/commit/c020a12d29ff5a7ed366873f42becd6e335efd74))

## [6.1.2](https://github.com/Fdawgs/node-poppler/compare/v6.1.1...v6.1.2) (2023-02-13)


### Documentation

* **readme:** remove fluff ([bf8fb9f](https://github.com/Fdawgs/node-poppler/commit/bf8fb9fdd170247e8d467e86961c172bd7a33a87))
* **readme:** rename intro to overview ([b1d2284](https://github.com/Fdawgs/node-poppler/commit/b1d228495fc36cdbd43ad47d756f16cc6c480c23))


### Continuous integration

* **cd:** use sentence case for changelog headings ([f80107e](https://github.com/Fdawgs/node-poppler/commit/f80107e008d02ee66a0760d276465367a6078f6e))


### Dependencies

* **deps-dev:** bump dev dependencies ([8826727](https://github.com/Fdawgs/node-poppler/commit/8826727ae945d0f4ef8d1bad0aeee6a245c57988))


### Miscellaneous

* **package:** remove `doc` script ([#465](https://github.com/Fdawgs/node-poppler/issues/465)) ([4837c01](https://github.com/Fdawgs/node-poppler/commit/4837c01fc2ed0e6f82c39a3732d9ddbdcff4e9bb))
* rename master branch to main ([#468](https://github.com/Fdawgs/node-poppler/issues/468)) ([6b380b4](https://github.com/Fdawgs/node-poppler/commit/6b380b466413f49bcc41bd2f0e3c00e6986b95ce))
* use sentence case over ap style for titles and headings ([0de5b85](https://github.com/Fdawgs/node-poppler/commit/0de5b85c3464dc4e927f7d119477abf5904d37d0))

## [6.1.1](https://github.com/Fdawgs/node-poppler/compare/v6.1.0...v6.1.1) (2023-01-20)


### Bug fixes

* **lib:** update poppler win32 binaries from 22.11.0 to 23.01.0 ([#464](https://github.com/Fdawgs/node-poppler/issues/464)) ([b0db479](https://github.com/Fdawgs/node-poppler/commit/b0db479a658b2d5111e51a7dd8c14447f74140ae))


### Miscellaneous

* **license:** update license year ([19a971b](https://github.com/Fdawgs/node-poppler/commit/19a971b89ee6ac95d75fdcb5c69ab0acd13db875))


### Improvements

* **index:** convert `parseOptions()` internal func to sync ([02b9566](https://github.com/Fdawgs/node-poppler/commit/02b9566a499c40edce80c0ee89ffb8b06bef52b2))


### Dependencies

* **deps-dev:** bump dev dependencies ([3fd8f17](https://github.com/Fdawgs/node-poppler/commit/3fd8f1743978b1a45c8cd05b85b2b41fc88fe422))
* **deps-dev:** bump jsdoc-to-markdown from 7.1.1 to 8.0.0 ([#457](https://github.com/Fdawgs/node-poppler/issues/457)) ([ad8f7ec](https://github.com/Fdawgs/node-poppler/commit/ad8f7ec74ca05342132ec1f924b765ea77f98498))


### Documentation

* **contributing:** update min node version ([d94f44b](https://github.com/Fdawgs/node-poppler/commit/d94f44ba1c3b99fb0d79cd721029a1ccc44bf306))
* grammar and clarity fixes ([4ae6a06](https://github.com/Fdawgs/node-poppler/commit/4ae6a060876db7ffced9e991652f1cc0c044e426))
* **readme:** fix linux path example ([#463](https://github.com/Fdawgs/node-poppler/issues/463)) ([18382e9](https://github.com/Fdawgs/node-poppler/commit/18382e992fd07ac066bfa625a7f5f9d0b1c1f72c))

## [6.1.0](https://github.com/Fdawgs/node-poppler/compare/v6.0.3...v6.1.0) (2022-11-22)


### Features

* **index:** add `generateTsvFile` arg to `pdfToText()` options ([108785d](https://github.com/Fdawgs/node-poppler/commit/108785d8dfdc5eb1724c17f4ad9810e1f9c3e9cb))


### Bug fixes

* **lib:** update poppler win32 binaries from 22.04.0 to 22.11.0 ([5bd66c3](https://github.com/Fdawgs/node-poppler/commit/5bd66c3016255f5613301b73eaa2142bf0a4e765))


### Dependencies

* **deps-dev:** bump dev dependencies ([519b84e](https://github.com/Fdawgs/node-poppler/commit/519b84eb53d2f68c599c530cc21ab4ab5e712b2d))
* **deps:** bump actions/dependency-review-action from 2 to 3 ([#453](https://github.com/Fdawgs/node-poppler/issues/453)) ([bcf8727](https://github.com/Fdawgs/node-poppler/commit/bcf8727d9dcdc1db2d1ec367504ebd9ac33902a9))

## [6.0.3](https://github.com/Fdawgs/node-poppler/compare/v6.0.2...v6.0.3) (2022-10-25)


### Continuous integration

* **cd:** fix typescript def gen ([64eb724](https://github.com/Fdawgs/node-poppler/commit/64eb724f77d7b2af139f822510177a56a3ebe73e))

## [6.0.2](https://github.com/Fdawgs/node-poppler/compare/v6.0.1...v6.0.2) (2022-10-25)


### Miscellaneous

* **lib/win32:** compress binaries ([#449](https://github.com/Fdawgs/node-poppler/issues/449)) ([c5728de](https://github.com/Fdawgs/node-poppler/commit/c5728de1710080d5713730ed01238d5f41a0569c))


### Continuous integration

* **cd:** gen typescript definitions before publishing ([e655c6a](https://github.com/Fdawgs/node-poppler/commit/e655c6aa05d2ddcc19623a27b5cbaaf8f420f140))
* **cd:** remove dev values from `package.json` ([692480e](https://github.com/Fdawgs/node-poppler/commit/692480e6cad327f4646cd1e80c8974d059541fe2))


### Dependencies

* **deps-dev:** bump dev dependencies ([c8c0de7](https://github.com/Fdawgs/node-poppler/commit/c8c0de7aa0e19197b37dee8b355f13eb458e6e19))

## [6.0.1](https://github.com/Fdawgs/node-poppler/compare/v6.0.0...v6.0.1) (2022-10-03)


### Documentation

* **readme:** remove redundant statement ([d96a75c](https://github.com/Fdawgs/node-poppler/commit/d96a75c70a2c2967407a085cb8f0070cbab0c5f4))
* use shorter urls; remove yarn install guidance ([f06e113](https://github.com/Fdawgs/node-poppler/commit/f06e113887f36ca985222a98ae0ab0b210413179))


### Miscellaneous

* **.husky:** shell path and arg updates ([#440](https://github.com/Fdawgs/node-poppler/issues/440)) ([ce43cdf](https://github.com/Fdawgs/node-poppler/commit/ce43cdf13938f88c7c9d0b3ec656538bbaeee692))
* **.npmignore:** reduce entries ([d297f0f](https://github.com/Fdawgs/node-poppler/commit/d297f0f69b967cc3f191da9d95b828105abe6235))
* **.vscode/extensions:** remove unmaintained extension ([a5e1bdf](https://github.com/Fdawgs/node-poppler/commit/a5e1bdff3771513c2652c2eb643eee7d45c9760b))
* ***.ignore:** add clinicjs directory ([b9d984e](https://github.com/Fdawgs/node-poppler/commit/b9d984ec8229ca4880fff44a2beb362d7419ecb3))
* import destructuring ([#446](https://github.com/Fdawgs/node-poppler/issues/446)) ([5cc8089](https://github.com/Fdawgs/node-poppler/commit/5cc8089d644cbf63c37d423e2c24a599d87c08db))
* **index:** remove empty jsdoc tag lines ([e1ef6aa](https://github.com/Fdawgs/node-poppler/commit/e1ef6aa70862e529c1398ff931656cbcc472b126))
* **LICENSE:** remove trailing whitespace ([adb48c2](https://github.com/Fdawgs/node-poppler/commit/adb48c2f3d9d22db471838e75d2221fb787c5aa1))
* prefer object destructuring ([b7efc38](https://github.com/Fdawgs/node-poppler/commit/b7efc3865d2ba1a8710effa0f37548ce89761675))
* **test_resources:** compress test documents ([#444](https://github.com/Fdawgs/node-poppler/issues/444)) ([ce5e446](https://github.com/Fdawgs/node-poppler/commit/ce5e446f0c94fde62d8662807be005c32b00b3af))


### Dependencies

* **deps-dev:** bump dev dependencies ([ff4118b](https://github.com/Fdawgs/node-poppler/commit/ff4118b45e7633acc2b1aa38ef5e3b2a8da26f83))
* **deps-dev:** bump eslint-plugin-jest from 26.9.0 to 27.0.1 ([#443](https://github.com/Fdawgs/node-poppler/issues/443)) ([2e74377](https://github.com/Fdawgs/node-poppler/commit/2e743771bd786a7adb621833a0303c1a609ef96b))
* **deps-dev:** bump jest from 28.1.3 to 29.0.1 ([#442](https://github.com/Fdawgs/node-poppler/issues/442)) ([88caf42](https://github.com/Fdawgs/node-poppler/commit/88caf4285d2983bc6d26dbf2af8dd9f466bc0e03))

## [6.0.0](https://github.com/Fdawgs/node-poppler/compare/v5.1.6...v6.0.0) (2022-08-09)


### ⚠ BREAKING CHANGES

* drop support for EOL node 12

### Documentation

* **readme:** update acknowledgements section ([6d95ff5](https://github.com/Fdawgs/node-poppler/commit/6d95ff5377d4bf66b84ac30054757d2fe3f1a15e))


### Miscellaneous

* **.gitignore:** use latest github ignore template ([ff64a1d](https://github.com/Fdawgs/node-poppler/commit/ff64a1d32b4f5e7fbf6f853188ac7cbd7cc49de6))
* **.npmrc:** disable package-lock generation ([#434](https://github.com/Fdawgs/node-poppler/issues/434)) ([09dbfdb](https://github.com/Fdawgs/node-poppler/commit/09dbfdbb9df5c2ee58b43e1864061fbb2ab5172d))
* **.prettierignore:** add new paths from `.gitignore` ([47e886a](https://github.com/Fdawgs/node-poppler/commit/47e886a7ccd33ff122004d8ad9d2ed6cf1e75234))
* drop support for node 12 ([#437](https://github.com/Fdawgs/node-poppler/issues/437)) ([c32b5b0](https://github.com/Fdawgs/node-poppler/commit/c32b5b0d2bf11d77f67ff3cb2dd67be2d6ed86a8))
* ignore pnpm lock file ([311f8a6](https://github.com/Fdawgs/node-poppler/commit/311f8a6e4cb68c53ba6bbf4203f347df2164369e))


### Dependencies

* **.npmignore:** add documentation; reduce package size by ~0.3% ([#435](https://github.com/Fdawgs/node-poppler/issues/435)) ([fc45b10](https://github.com/Fdawgs/node-poppler/commit/fc45b10bd0633f4f58982688d9ef34d624bfd5d6))
* **dependabot:** increase `open-pull-requests-limit` from 5 to 20 ([7939b69](https://github.com/Fdawgs/node-poppler/commit/7939b69efa5c001dd959e64fcee477c3633587fd))
* **deps:** bump actions/dependency-review-action from 1 to 2 ([#432](https://github.com/Fdawgs/node-poppler/issues/432)) ([78cbbc6](https://github.com/Fdawgs/node-poppler/commit/78cbbc695c23540bdb90a86adf72137b858b337d))
* **deps:** bump dependencies ([#438](https://github.com/Fdawgs/node-poppler/issues/438)) ([adaf16e](https://github.com/Fdawgs/node-poppler/commit/adaf16e27031500fb7ff85a0ebf0da157998fa58))
* **deps:** bump wagoid/commitlint-github-action from 4 to 5 ([#431](https://github.com/Fdawgs/node-poppler/issues/431)) ([0cfd01c](https://github.com/Fdawgs/node-poppler/commit/0cfd01c2b3b58e0610370b4c428acc3a8ff0f9a8))

## [5.1.6](https://github.com/Fdawgs/node-poppler/compare/v5.1.5...v5.1.6) (2022-06-04)


### Bug fixes

* **index:** set correct "file size" if `pdfInfo()` passed a buffer ([#427](https://github.com/Fdawgs/node-poppler/issues/427)) ([8d30764](https://github.com/Fdawgs/node-poppler/commit/8d3076482d13e1d31a54a5d7147cb1a3390b59bc))


### Improvements

* **index:** use `forEach` over `map` as returned array not used ([#426](https://github.com/Fdawgs/node-poppler/issues/426)) ([ef89aa6](https://github.com/Fdawgs/node-poppler/commit/ef89aa6333edcd875596ee133775ad887e43dcb5))


### Dependencies

* **.npmignore:** ignore `tsconfig.json` ([a35757d](https://github.com/Fdawgs/node-poppler/commit/a35757d6c51f6ef0386c59b6e5657530c25f6726))


### Miscellaneous

* **.github/funding:** remove unused keys ([66a8f36](https://github.com/Fdawgs/node-poppler/commit/66a8f366c9150730718bfa37ed0a056f09b925ce))
* **.github:** add `FUNDING.yml` ([f73407d](https://github.com/Fdawgs/node-poppler/commit/f73407df0c9561eb69c17732dc40dfd8d6a3517c))

### [5.1.5](https://github.com/Fdawgs/node-poppler/compare/v5.1.4...v5.1.5) (2022-06-01)


### Continuous integration

* **automerge:** fix context ([a77891b](https://github.com/Fdawgs/node-poppler/commit/a77891b87f020be9f631bb01941dba67ae599650))
* **cd:** use `lts/*` for node setup in release job ([1aefdf2](https://github.com/Fdawgs/node-poppler/commit/1aefdf2daf1952468e60b197b1b3064f2a7f04e4))
* check `user.login` is dependabot instead of `actor` ([#413](https://github.com/Fdawgs/node-poppler/issues/413)) ([a92ace7](https://github.com/Fdawgs/node-poppler/commit/a92ace7d35fce8ad53f19680b28e676a66bd7333))
* **ci:** add node 18 to test matrix ([#412](https://github.com/Fdawgs/node-poppler/issues/412)) ([8a109b0](https://github.com/Fdawgs/node-poppler/commit/8a109b0fadf8ad23b4927dc04ad28c02d91f6a6f))
* **ci:** require `unit-tests` job to pass for `save-pr-number` job to run ([5cb3a96](https://github.com/Fdawgs/node-poppler/commit/5cb3a969e052f3f0b360b4f4c2cc7294fa575c83))
* **ci:** use `lts/*` for node setup in lint job ([65b7665](https://github.com/Fdawgs/node-poppler/commit/65b76654846ed75b534416f997feedfe61378390))
* **ci:** use `node-version` for node matrix key ([d294a0e](https://github.com/Fdawgs/node-poppler/commit/d294a0e44d568d806b734fe4d66c41cd871729c3))
* **codeql:** only run on pr changes to `.html`, `.js`, and `.yml` files ([bc130e3](https://github.com/Fdawgs/node-poppler/commit/bc130e3784cd312db47e290bd56f0dccf24f09fa))
* **codeql:** resolve missing analyses ([83c2acf](https://github.com/Fdawgs/node-poppler/commit/83c2acf5c30d1fef7a9387ba38a2428bc9ea062c))
* **codeql:** specify which files to scan during analysis ([0ec3679](https://github.com/Fdawgs/node-poppler/commit/0ec367918ea37fb8f3bab86a664e4cf3db383eb8))
* remove git credentials after checkout ([#417](https://github.com/Fdawgs/node-poppler/issues/417)) ([e4d7893](https://github.com/Fdawgs/node-poppler/commit/e4d7893a6936f75bba79fee01bf09819a6a0cf21))


### Miscellaneous

* **.eslintrc:** enable `plugin:jest/style` rules ([#411](https://github.com/Fdawgs/node-poppler/issues/411)) ([caee804](https://github.com/Fdawgs/node-poppler/commit/caee804360025db416a42449e85b795bb27a22cd))
* **.github/codeql-config:** remove quotation marks ([0aa9e7f](https://github.com/Fdawgs/node-poppler/commit/0aa9e7f52bf45afdc12b7a4a793185fd856f0c5d))
* **bug_report:** use node 18 as placeholder for `node-version` ([a28d5ad](https://github.com/Fdawgs/node-poppler/commit/a28d5ad03c3e19eb409e9426bd65e6a03c8ebebc))
* **lib:** remove source and make files; reduce package size by ~26% ([#418](https://github.com/Fdawgs/node-poppler/issues/418)) ([51b41f8](https://github.com/Fdawgs/node-poppler/commit/51b41f803d601a05be6b7ae9c8ef6ed0373f6a38))


### Dependencies

* **deps-dev:** bump @commitlint/cli from 16.3.0 to 17.0.2 ([#422](https://github.com/Fdawgs/node-poppler/issues/422)) ([715be48](https://github.com/Fdawgs/node-poppler/commit/715be48d05cb34e49b9b7d1c1c303cd35a552da2))
* **deps-dev:** bump @commitlint/config-conventional ([#420](https://github.com/Fdawgs/node-poppler/issues/420)) ([f8700db](https://github.com/Fdawgs/node-poppler/commit/f8700dbfe991b7e6b6f2f0daec1cc412ef291518))
* **deps-dev:** bump husky from 7.0.4 to 8.0.1 ([#421](https://github.com/Fdawgs/node-poppler/issues/421)) ([b819753](https://github.com/Fdawgs/node-poppler/commit/b8197539a4a56afae8b74078f839a3b8acc20995))
* **deps:** bump minor and hotfix versions ([#423](https://github.com/Fdawgs/node-poppler/issues/423)) ([4375c56](https://github.com/Fdawgs/node-poppler/commit/4375c56bdc22ba1e5a3529ab6f4e5d3b52d47074))

### [5.1.4](https://github.com/Fdawgs/node-poppler/compare/v5.1.3...v5.1.4) (2022-05-01)


### Bug fixes

* **lib:** update poppler win32 binaries from 22.01.0 to 22.04.0 ([6e74afe](https://github.com/Fdawgs/node-poppler/commit/6e74afe9ee73511a71a14942cd14648b33ec7e2e))


### Documentation

* improve readability ([05fcda6](https://github.com/Fdawgs/node-poppler/commit/05fcda639482b687ad3ef01455dc28523ac1b4ea))
* **readme:** remove snyk badge ([e0a743e](https://github.com/Fdawgs/node-poppler/commit/e0a743ee8462dfa7d39ac2c316cf73b8d4aa0c05))


### Dependencies

* **deps-dev:** bump dev dependencies ([3c688e4](https://github.com/Fdawgs/node-poppler/commit/3c688e44885998bfcd7af2e16007f6b6545a4d06))
* **deps-dev:** bump eslint-plugin-jsdoc from 37.9.7 to 38.0.6 ([49b8cfc](https://github.com/Fdawgs/node-poppler/commit/49b8cfc13fac695c66898a74f939e8f1f8e646cd))
* **deps-dev:** bump eslint-plugin-jsdoc from 38.1.6 to 39.2.9 ([#405](https://github.com/Fdawgs/node-poppler/issues/405)) ([91d5d11](https://github.com/Fdawgs/node-poppler/commit/91d5d1137463ce3cf94045cb9dfbe36ff51f3191))
* **deps-dev:** bump glob from 7.2.0 to 8.0.1 ([#406](https://github.com/Fdawgs/node-poppler/issues/406)) ([2a9beef](https://github.com/Fdawgs/node-poppler/commit/2a9beef2531a6e10051fbad6272833f7e30aa729))
* **deps-dev:** bump jest from 27.5.1 to 28.0.3 ([#407](https://github.com/Fdawgs/node-poppler/issues/407)) ([1894c0d](https://github.com/Fdawgs/node-poppler/commit/1894c0d3efba1595b435f20e3bc8d64e4bfc6690))
* **deps:** bump actions/checkout from 2 to 3 ([96754d1](https://github.com/Fdawgs/node-poppler/commit/96754d1a07fce63cc2bfa5c8c388f5da4a92eaa9))
* **deps:** bump actions/checkout from 2 to 3 ([efab6f2](https://github.com/Fdawgs/node-poppler/commit/efab6f21ca40ecd84bcc3e3e292c30cc6e785071))
* **deps:** bump actions/upload-artifact from 2 to 3 ([#403](https://github.com/Fdawgs/node-poppler/issues/403)) ([e9c8796](https://github.com/Fdawgs/node-poppler/commit/e9c879699ac9e61223ddeee69af97d2f14c7f7d6))
* **deps:** bump github/codeql-action from 1 to 2 ([#404](https://github.com/Fdawgs/node-poppler/issues/404)) ([073cc6b](https://github.com/Fdawgs/node-poppler/commit/073cc6bd618331604ae6000522c0cf418315da44))


### Miscellaneous

* **ci:** remove quotation marks from step name ([81d9943](https://github.com/Fdawgs/node-poppler/commit/81d994381ff75c94f0db831911354259fec28909))
* **index:** update constructor jsdoc param tag ([#397](https://github.com/Fdawgs/node-poppler/issues/397)) ([cdc61ba](https://github.com/Fdawgs/node-poppler/commit/cdc61ba8b41777ac3132aa72d1644a46b352788e))
* **scripts:** remove redundant gitkraken fix from prepare script ([be8b489](https://github.com/Fdawgs/node-poppler/commit/be8b4896c6dd1bf19ffc6abac406f1d6838e0742))
* **scripts:** use shorter arg aliases; remove debugging args from jest ([eefa9cf](https://github.com/Fdawgs/node-poppler/commit/eefa9cf3272fc8f41bf106601ce9c63be17172ca))
* use npm install alias ([8de1b7c](https://github.com/Fdawgs/node-poppler/commit/8de1b7c8b4a4d4f0fa0c3fd0053028cd48345efd))


### Continuous integration

* add dependency-review job ([dd75f36](https://github.com/Fdawgs/node-poppler/commit/dd75f3695e4a7983d86827dc45ba1229fee07b59))
* add job step names, workflow comments, and whitespace ([0bdd954](https://github.com/Fdawgs/node-poppler/commit/0bdd95488f6786424e7b4eab7aea20192642ad69))
* **automerge:** squash automerge prs ([#398](https://github.com/Fdawgs/node-poppler/issues/398)) ([1390729](https://github.com/Fdawgs/node-poppler/commit/1390729aa6dff19e6ad1897884e79b80446994c9))
* **cd:** update org name for release-please-action ([d5a5257](https://github.com/Fdawgs/node-poppler/commit/d5a5257efcbccb24824004713c7642e946fd0701))
* **codeql-analysis:** remove unused autobuild step ([de272df](https://github.com/Fdawgs/node-poppler/commit/de272dfc59731f4870164b3633c0402f5d6e1b37))
* **codeql:** grant minimum permissions to run; rename file ([#394](https://github.com/Fdawgs/node-poppler/issues/394)) ([d3e80e2](https://github.com/Fdawgs/node-poppler/commit/d3e80e2dcf2fd4e0855bdc645cd3bca29dec9116))
* **link-check:** fix skip regex ([23602df](https://github.com/Fdawgs/node-poppler/commit/23602df07dd51725b89e8244b213a62bb6789e12))
* **link-check:** replace `npx linkinator` call with github action ([8f626a7](https://github.com/Fdawgs/node-poppler/commit/8f626a79fec0858f52920b3b4d16d01a9dc66c3f))
* only save pr number artifact for dependabot ([c5c6a7c](https://github.com/Fdawgs/node-poppler/commit/c5c6a7c8f4a04100b59867b35e3ae3509b61ac0f))
* only trigger dependency-review on pr ([e6e7f71](https://github.com/Fdawgs/node-poppler/commit/e6e7f71f9c2007236737358d110d6752da9bbbff))
* reduce workflow permissions to minimum ([86e7668](https://github.com/Fdawgs/node-poppler/commit/86e7668d28305454023b9b7c466e8f8764858dcf))
* replace workflow-run-cleanup-action with github concurrency ([ac13ada](https://github.com/Fdawgs/node-poppler/commit/ac13adab01eb50b80ccd8224adbeb8f453b7c12a))

### [5.1.3](https://github.com/Fdawgs/node-poppler/compare/v5.1.2...v5.1.3) (2022-02-25)


### Bug fixes

* **index:** use `spawn` for larger stream results ([#386](https://github.com/Fdawgs/node-poppler/issues/386)) ([e437f3e](https://github.com/Fdawgs/node-poppler/commit/e437f3e9e9fa73a8e36d64a01283388e3a879e10))


### Miscellaneous

* **.github:** remove trailing whitespace ([aee8872](https://github.com/Fdawgs/node-poppler/commit/aee8872c62b5f66e83d75915a325be6bfd32ee76))


### Dependencies

* **dependabot:** ignore minor and patch commit-lint updates ([#380](https://github.com/Fdawgs/node-poppler/issues/380)) ([b5ff45f](https://github.com/Fdawgs/node-poppler/commit/b5ff45f603697b66155d488579c47dee34ad5f2f))
* **dependabot:** major tags no longer need ignore support ([579cea2](https://github.com/Fdawgs/node-poppler/commit/579cea2c0e36d200fb5981529b0fb092e99d6c67))
* **dependabot:** use default open-pull-requests-limit value ([eebb453](https://github.com/Fdawgs/node-poppler/commit/eebb4537a299fa6d2a01c2621db619d298c933cc))
* **deps-dev:** bump dev dependencies ([#388](https://github.com/Fdawgs/node-poppler/issues/388)) ([06f8957](https://github.com/Fdawgs/node-poppler/commit/06f895771c639ea06f2dbeb0a61c180a3ec650b3))
* **deps-dev:** bump eslint-plugin-jest from 25.7.0 to 26.0.0 ([321e7d0](https://github.com/Fdawgs/node-poppler/commit/321e7d0221d67be7ccf2ab12bbbb95d20c96a7a3))
* **deps:** bump actions/github-script from 5 to 6 ([deb69a6](https://github.com/Fdawgs/node-poppler/commit/deb69a6ac7244ece7c87e3f5f02965f7d33e2c08))
* **deps:** bump actions/setup-node from 2 to 3 ([81f52ca](https://github.com/Fdawgs/node-poppler/commit/81f52ca1f885b332e2f12be6d445418e148d9051))

### [5.1.2](https://github.com/Fdawgs/node-poppler/compare/v5.1.1...v5.1.2) (2022-01-19)


### Bug fixes

* **lib:** update poppler win32 binaries from 21.11.0 to 22.01.0 ([e76a813](https://github.com/Fdawgs/node-poppler/commit/e76a813b3ad12bb15a808ccd4d1a163016d36eec))


### Miscellaneous

* **package:** add `tif` to keywords array ([#369](https://github.com/Fdawgs/node-poppler/issues/369)) ([2929483](https://github.com/Fdawgs/node-poppler/commit/29294830056f6e8f53c82822560b840d2031f3b6))


### Documentation

* **contributing:** add mention of husky pre-commit hook ([8eb63e8](https://github.com/Fdawgs/node-poppler/commit/8eb63e8d0dac69bce76fda5032506a5171abf3e4))
* **contributing:** add step for `lint:licenses` script ([#371](https://github.com/Fdawgs/node-poppler/issues/371)) ([5e9f7a5](https://github.com/Fdawgs/node-poppler/commit/5e9f7a510f6aa407d39a17ad24d83ade59c98f41))


### Continuous integration

* remove spellcheck workflow ([#376](https://github.com/Fdawgs/node-poppler/issues/376)) ([56fb637](https://github.com/Fdawgs/node-poppler/commit/56fb63713171c4aed9458d48b4d2cf66a5b91419))


### Dependencies

* **deps-dev:** bump @commitlint/cli from 15.0.0 to 16.0.1 ([8ab463a](https://github.com/Fdawgs/node-poppler/commit/8ab463aa30b8bc1fd36ed40c4595f2d274d90674))
* **deps-dev:** bump @commitlint/config-conventional ([6cda233](https://github.com/Fdawgs/node-poppler/commit/6cda233e5a29e44961c2e52d2a19d01b008e9ddc))
* **deps-dev:** bump eslint from 7.32.0 to 8.7.0 ([73a77a5](https://github.com/Fdawgs/node-poppler/commit/73a77a5bdd250e19086ef9bd838f74b5fec2ef81))
* **deps-dev:** bump eslint-plugin-promise from 5.2.0 to 6.0.0 ([535feb0](https://github.com/Fdawgs/node-poppler/commit/535feb08ba673a0a6812e5a3d8a4bf0e2af518f3))
* **deps:** bump GoogleCloudPlatform/release-please-action from 2 to 3 ([e3c9d8e](https://github.com/Fdawgs/node-poppler/commit/e3c9d8e76c34d949f6d98e60a57f19dcff90a766))
* update dependencies ([db8a76d](https://github.com/Fdawgs/node-poppler/commit/db8a76d498760e808544026183e9aade29b4c4d8))

### [5.1.1](https://github.com/Fdawgs/node-poppler/compare/v5.1.0...v5.1.1) (2021-12-11)


### Bug fixes

* **index:** correct message thrown for missing binaries ([#363](https://github.com/Fdawgs/node-poppler/issues/363)) ([5249d61](https://github.com/Fdawgs/node-poppler/commit/5249d6183b11f6c9eded643359e05d4f3ecf9f01))


### Continuous integration

* trigger workflows when drafts marked as "ready to review" ([#354](https://github.com/Fdawgs/node-poppler/issues/354)) ([de922a2](https://github.com/Fdawgs/node-poppler/commit/de922a20494d8bc87333da156248342805e37a15))


### Documentation

* **coc:** reduce verbosity ([b38d954](https://github.com/Fdawgs/node-poppler/commit/b38d9549a890e434868cc26a59867a26a49b8167))


### Improvements

* **index:** remove unused `if` conditional ([d56589d](https://github.com/Fdawgs/node-poppler/commit/d56589d41caa60533718bee24eb5797aec0f40eb))


### Miscellaneous

* ignore `.yarnclean` ([#360](https://github.com/Fdawgs/node-poppler/issues/360)) ([196b528](https://github.com/Fdawgs/node-poppler/commit/196b528c860bd0bd191e1dbc53c1dfc2867aa334))
* **package/scripts:** add `lint:licenses` ([#361](https://github.com/Fdawgs/node-poppler/issues/361)) ([a010434](https://github.com/Fdawgs/node-poppler/commit/a0104344c0569887e3af82263aa091cde0027afc))
* turn off `security/detect-object-injection` eslint rule ([1d6dc35](https://github.com/Fdawgs/node-poppler/commit/1d6dc35bfe4c0e54391745a3ff45485b0c76fac0))


### Dependencies

* **dependabot:** ignore minor and patch github-actions updates ([#356](https://github.com/Fdawgs/node-poppler/issues/356)) ([56d1a86](https://github.com/Fdawgs/node-poppler/commit/56d1a86e20681a8b747da0713176522be7de258e))
* **dependabot:** ignore minor and patch release-please-action updates ([#367](https://github.com/Fdawgs/node-poppler/issues/367)) ([b77729f](https://github.com/Fdawgs/node-poppler/commit/b77729f4764f7536fda9ead8cac0b08dc75b269a))
* **deps-dev:** bump @commitlint/cli from 14.1.0 to 15.0.0 ([08d87b5](https://github.com/Fdawgs/node-poppler/commit/08d87b55891b56d81fe73db9db1a0b0eb98b9d17))
* **deps-dev:** bump @commitlint/config-conventional ([c5452ee](https://github.com/Fdawgs/node-poppler/commit/c5452eef69ef09503ee7a357f09595c8526a2e0a))
* **deps-dev:** bump prettier from 2.4.1 to 2.5.0 ([74f9e90](https://github.com/Fdawgs/node-poppler/commit/74f9e907ef9cdabb039463845055316d42a21ad5))
* **deps-dev:** bump prettier from 2.5.0 to 2.5.1 ([d51ca9b](https://github.com/Fdawgs/node-poppler/commit/d51ca9b64884715b47eed2db64229b84c9dd9f4a))

## [5.1.0](https://github.com/Fdawgs/node-poppler/compare/v5.0.3...v5.1.0) (2021-11-10)


### Features

* **index:** add `printUrls` arg to `pdfInfo()` options ([d58da5f](https://github.com/Fdawgs/node-poppler/commit/d58da5fc0d6fe6b1eeef8a660701052dd11a17fa))


### Bug fixes

* **lib:** update poppler win32 binaries from 21.10.0 to 21.11.0 ([1838bee](https://github.com/Fdawgs/node-poppler/commit/1838bee3c21dc6d467db3246b5e5da0802216cf2))


### Continuous integration

* **ci:** do not run clean-up on draft prs ([088722d](https://github.com/Fdawgs/node-poppler/commit/088722dde16c7cc9176c90797386d33b56b92056))
* **spell-check:** do not run on draft prs ([6a48913](https://github.com/Fdawgs/node-poppler/commit/6a48913d01f63ec34c30230fe82bb34ad5d3b49e))


### Dependencies

* **deps-dev:** bump eslint-config-airbnb-base from 14.2.1 to 15.0.0 ([063e5b4](https://github.com/Fdawgs/node-poppler/commit/063e5b4338f7a311aebcb3b75c264c4cfd9a8ed5))
* **deps-dev:** bump eslint-plugin-import from 2.25.2 to 2.25.3 ([5962621](https://github.com/Fdawgs/node-poppler/commit/59626219099901f73cd30ab720f07f1f50fa33e6))
* **deps-dev:** bump eslint-plugin-jest from 25.2.2 to 25.2.4 ([77423a1](https://github.com/Fdawgs/node-poppler/commit/77423a1f88976182404ccabe498e7d26f22f40a4))


### Documentation

* **readme:** add stdout example ([#353](https://github.com/Fdawgs/node-poppler/issues/353)) ([f1ed3c2](https://github.com/Fdawgs/node-poppler/commit/f1ed3c27eff6a4bfc3a3d273c5137e7a184c4096))

### [5.0.3](https://github.com/Fdawgs/node-poppler/compare/v5.0.2...v5.0.3) (2021-11-04)


### Bug fixes

* **index:** normalize `binPath` constructor param ([#345](https://github.com/Fdawgs/node-poppler/issues/345)) ([3ec8cae](https://github.com/Fdawgs/node-poppler/commit/3ec8cae42432a49fcd467467d7a1c2cd5d9be1d8))
* **index:** pdftocairo `singleFile` option ([31bbe79](https://github.com/Fdawgs/node-poppler/commit/31bbe79d22a68b751ee060a682b7bdcfa44ce6a7))
* **index:** pdftocairo stdout encoding for `pdfFile` option ([8ddcbba](https://github.com/Fdawgs/node-poppler/commit/8ddcbba76c2ed650b6c56f63ecb8621fdc66ff45))


### Documentation

* bump coc from v2.0.0 to v2.1.0 ([#334](https://github.com/Fdawgs/node-poppler/issues/334)) ([7754959](https://github.com/Fdawgs/node-poppler/commit/775495963ef5011754e734f63dca1a04c5d3cb25))


### Miscellaneous

* **.eslintrc:** remove redundant `impliedStrict` option ([#332](https://github.com/Fdawgs/node-poppler/issues/332)) ([417380e](https://github.com/Fdawgs/node-poppler/commit/417380ec732352e2aa7040accac1333d02588e88))
* **.prettierrc:** only enable `bracketSameLine` for html ([#341](https://github.com/Fdawgs/node-poppler/issues/341)) ([30dfe71](https://github.com/Fdawgs/node-poppler/commit/30dfe719fa84be290406240c054cf142a7e41824))


### Continuous integration

* **cd:** stop `prepare` script running ([#342](https://github.com/Fdawgs/node-poppler/issues/342)) ([5d22a76](https://github.com/Fdawgs/node-poppler/commit/5d22a76e8b331630e6a65a9061a1fe57d3785e3a))


### Dependencies

* **deps-dev:** bump @commitlint/cli from 13.2.1 to 14.1.0 ([ffb9ccb](https://github.com/Fdawgs/node-poppler/commit/ffb9ccbd93b58d8f6a3571f8a8036187ccf63a49))
* **deps-dev:** bump @commitlint/config-conventional ([fa491ea](https://github.com/Fdawgs/node-poppler/commit/fa491eaf0a8c8d8a35c3039b9054aa81e770ff06))
* **deps-dev:** bump dev dependencies ([#335](https://github.com/Fdawgs/node-poppler/issues/335)) ([ac2e119](https://github.com/Fdawgs/node-poppler/commit/ac2e11955b8b00d74666262ee68bed1f6f3ab346))
* **deps:** bump actions/checkout from 2.3.4 to 2.3.5 ([d3d838c](https://github.com/Fdawgs/node-poppler/commit/d3d838caf16a47af3841ec5bce45fa98f01b7c21))
* **deps:** bump actions/checkout from 2.3.5 to 2.4.0 ([de7aad4](https://github.com/Fdawgs/node-poppler/commit/de7aad4ab48198f065df6044b4c897c23b831829))

### [5.0.2](https://github.com/Fdawgs/node-poppler/compare/v5.0.1...v5.0.2) (2021-10-12)


### Bug fixes

* **lib:** update poppler win32 binaries from 21.09.0 to 21.10.0 ([c8e1e77](https://github.com/Fdawgs/node-poppler/commit/c8e1e770cb4afa77008c82d56c3fbf3cb5609670))


### Continuous integration

* **automerge:** update location of octokit rest methods ([c2d6959](https://github.com/Fdawgs/node-poppler/commit/c2d6959f71355fd7a8e274c19e59010ef4bff958))


### Miscellaneous

* **.eslintrc:** remove inaccurate sourcetype ([#323](https://github.com/Fdawgs/node-poppler/issues/323)) ([db65fb6](https://github.com/Fdawgs/node-poppler/commit/db65fb62386596fb327c8fbd1d7a6e5fd8f16003))
* **.prettierrc:** enable `bracketsameline` option ([ccd86c9](https://github.com/Fdawgs/node-poppler/commit/ccd86c92087c0df02ceab41251a6cbc653ce3d85))
* **.vscode:** remove deprecated settings ([#324](https://github.com/Fdawgs/node-poppler/issues/324)) ([0638d8e](https://github.com/Fdawgs/node-poppler/commit/0638d8e776de7d7570f2578250c7f8651c6c3ad4))
* **index:** resolve `jsdoc/no-multi-asterisks` warning ([#325](https://github.com/Fdawgs/node-poppler/issues/325)) ([e54c041](https://github.com/Fdawgs/node-poppler/commit/e54c04199df9e8e49535f0e0499d908ab6ab9531))


### Dependencies

* **deps-dev:** add eslint-plugin-security-node ([#316](https://github.com/Fdawgs/node-poppler/issues/316)) ([5f7d6ad](https://github.com/Fdawgs/node-poppler/commit/5f7d6ad6d3bae444b05fdeb735f38d392fdd360c))
* **deps-dev:** bump eslint-plugin-jest from 24.7.0 to 25.0.5 ([5924cc7](https://github.com/Fdawgs/node-poppler/commit/5924cc700bb5ad47dd76ec9bfced9013af69c733))
* **deps-dev:** bump prettier from 2.4.0 to 2.4.1 ([ae71ec2](https://github.com/Fdawgs/node-poppler/commit/ae71ec26996cb1b6eb90d84265eda27e4efa6499))
* **deps:** bump actions/setup-node from 2.4.0 to 2.4.1 ([18e8f62](https://github.com/Fdawgs/node-poppler/commit/18e8f62d479a632e04eae37de7745f07ef81d3aa))
* **deps:** bump GoogleCloudPlatform/release-please-action ([e27671b](https://github.com/Fdawgs/node-poppler/commit/e27671b95a0241168bd5a367aa2940f2bee278ff))
* **deps:** bump GoogleCloudPlatform/release-please-action ([84e74cf](https://github.com/Fdawgs/node-poppler/commit/84e74cf100dcd7f6fc97438910d78d7cd54bcffa))
* **deps:** bump wagoid/commitlint-github-action from 4.1.4 to 4.1.5 ([2f8052b](https://github.com/Fdawgs/node-poppler/commit/2f8052b7884dd55505d571acb5cefd53f3edb08a))
* **deps:** bump wagoid/commitlint-github-action from 4.1.5 to 4.1.9 ([bf11955](https://github.com/Fdawgs/node-poppler/commit/bf11955894fc0a4100533f1e744a5a4d956d1fd3))

### [5.0.1](https://github.com/Fdawgs/node-poppler/compare/v5.0.0...v5.0.1) (2021-09-13)


### Bug fixes

* **lib:** update poppler win32 binaries from 21.08.0 to 21.09.0 ([#313](https://github.com/Fdawgs/node-poppler/issues/313)) ([6cd1a3c](https://github.com/Fdawgs/node-poppler/commit/6cd1a3c2e5d6f2f5d81f4b2c1c76317ccd97abbd))


### Continuous integration

* **ci:** revert to workflow-run-clean-action from github concurrency ([4b85707](https://github.com/Fdawgs/node-poppler/commit/4b857076e02aad23799127ad8f54c1b1229afc7d))


### Miscellaneous

* **.eslintrc:** set correct ecmascript version ([#308](https://github.com/Fdawgs/node-poppler/issues/308)) ([055e44e](https://github.com/Fdawgs/node-poppler/commit/055e44ed58982e6d9658187beb1f7f280c244b57))
* **.husky/.gitignore:** remove now redundant file ([d8891bc](https://github.com/Fdawgs/node-poppler/commit/d8891bc6b3eb99564d661aeacd097b80e4588194))
* **.prettierrc:** override defaults for html, css, and scss files ([#309](https://github.com/Fdawgs/node-poppler/issues/309)) ([73f9044](https://github.com/Fdawgs/node-poppler/commit/73f9044050709188290902a360f1a705e9f3b0c9))
* **.vscode:** add `mhutchie.git-graph` extension ([6d86a88](https://github.com/Fdawgs/node-poppler/commit/6d86a885bd7354dc00dbf6da5ff95bfa6b032e74))


### Dependencies

* **deps-dev:** bump prettier from 2.3.2 to 2.4.0 ([5f61282](https://github.com/Fdawgs/node-poppler/commit/5f61282a4a7d5a0d5ae972a8c3d7c3dac3495d71))
* **deps:** bump GoogleCloudPlatform/release-please-action ([5694596](https://github.com/Fdawgs/node-poppler/commit/5694596c506fc6c954c99cb93762f9381815da6d))
* **deps:** bump wagoid/commitlint-github-action from 4.1.1 to 4.1.4 ([f20e9c7](https://github.com/Fdawgs/node-poppler/commit/f20e9c7e7a7cb0a18f044fffe691f591669937d3))

## [5.0.0](https://github.com/Fdawgs/node-poppler/compare/v4.1.2...v5.0.0) (2021-09-06)


### ⚠ BREAKING CHANGES

* **index:** macOS/Darwin binaries have been removed due to persistent issues with them. Please download macOS binaries separately through Homebrew.

### Bug fixes

* **index:** remove included macos/darwin binaries ([1bfa703](https://github.com/Fdawgs/node-poppler/commit/1bfa70332d0f2c5d49cf10e2d750fade332f50b0))
* **index:** throw new error not return it as returning leads to silent failures ([#299](https://github.com/Fdawgs/node-poppler/issues/299)) ([e22d02d](https://github.com/Fdawgs/node-poppler/commit/e22d02d8f16c635e4a54a46a7e6e1dba97618a2d))


### Miscellaneous

* **.github:** use new YAML configured GitHub issue forms ([#303](https://github.com/Fdawgs/node-poppler/issues/303)) ([4760072](https://github.com/Fdawgs/node-poppler/commit/4760072385521b2546d1b4b7cc672d84584afc54))


### Continuous integration

* **ci:** replace workflow-run-cleanup-action with github concurrency ([#304](https://github.com/Fdawgs/node-poppler/issues/304)) ([0f08d1f](https://github.com/Fdawgs/node-poppler/commit/0f08d1f05dc55aec6381c44731dd1220c7f87599))


### Dependencies

* add .npmignore; reduce package size from 15.6MB to 13.7MB ([#306](https://github.com/Fdawgs/node-poppler/issues/306)) ([3f0fbe6](https://github.com/Fdawgs/node-poppler/commit/3f0fbe6b150c68b97c93ea7e3002097715fa090a))

### [4.1.2](https://github.com/Fdawgs/node-poppler/compare/v4.1.1...v4.1.2) (2021-08-30)


### Bug fixes

* **lib:** update poppler win32 binaries from 21.03.0 to 21.08.0 ([#296](https://github.com/Fdawgs/node-poppler/issues/296)) ([34f9e37](https://github.com/Fdawgs/node-poppler/commit/34f9e3758a0825cb7f1178cdbf6285e8b93fdb8b))


### Documentation

* **readme:** grammar fix ([7503c62](https://github.com/Fdawgs/node-poppler/commit/7503c62f4a48f89c7201a0bc5fe007ff3c6091ad))


### Dependencies

* **deps-dev:** bump @commitlint/cli from 12.1.4 to 13.1.0 ([b15218e](https://github.com/Fdawgs/node-poppler/commit/b15218ee56847a4d03eac125fd10c57d6804424e))
* **deps-dev:** bump @commitlint/config-conventional ([bfac706](https://github.com/Fdawgs/node-poppler/commit/bfac7066d0bf326d6ec21562b8d588434824249a))
* **deps-dev:** bump dependencies ([#297](https://github.com/Fdawgs/node-poppler/issues/297)) ([f922709](https://github.com/Fdawgs/node-poppler/commit/f922709bedef53ad604448618731849ceab412d7))
* **deps-dev:** bump eslint-plugin-jsdoc from 35.5.1 to 36.0.6 ([38e7554](https://github.com/Fdawgs/node-poppler/commit/38e75543fb91c478486f8c514d53988dfd56abd5))
* **deps:** bump actions/github-script from 4.0.2 to 4.1 ([f90cfbd](https://github.com/Fdawgs/node-poppler/commit/f90cfbdf2e69bf5cb017025226ab0c430aed5336))
* **deps:** bump actions/setup-node from 2.3.0 to 2.4.0 ([9180bca](https://github.com/Fdawgs/node-poppler/commit/9180bca0fcfd59bec5b8e192bcbba79d62ac6bdd))
* **deps:** bump GoogleCloudPlatform/release-please-action ([d46efc8](https://github.com/Fdawgs/node-poppler/commit/d46efc8d0e8651331ea195fa224c7d3c3a38fbe4))

### [4.1.1](https://github.com/Fdawgs/node-poppler/compare/v4.1.0...v4.1.1) (2021-07-23)


### Bug fixes

* **index:** add "3221226505" error code mapping ([5017df6](https://github.com/Fdawgs/node-poppler/commit/5017df6f4a32abcdb15425d8ef8ba7545a7308d6))


### Continuous integration

* **ci:** disable homebrew analytics for macos builds ([#278](https://github.com/Fdawgs/node-poppler/issues/278)) ([92ad4fa](https://github.com/Fdawgs/node-poppler/commit/92ad4fa2ba60a0fb6054da386b7bfdd9504dd476))
* **link-check:** reduce frequency from daily to monthly ([#272](https://github.com/Fdawgs/node-poppler/issues/272)) ([5e91c2a](https://github.com/Fdawgs/node-poppler/commit/5e91c2aa2cf3b807ce1e2f6b6317b1e5e2f58c3f))


### Improvements

* **index:** consolidate child process `close` event handling ([db89bd6](https://github.com/Fdawgs/node-poppler/commit/db89bd6a849f5d93c0651f915e2310e6a9708a47))


### Dependencies

* **deps-dev:** bump husky from 6.0.0 to 7.0.0 ([e9f9c97](https://github.com/Fdawgs/node-poppler/commit/e9f9c97c38f849f596723616d89a90d70fa371d8))
* **deps-dev:** bump prettier from 2.3.0 to 2.3.2 ([9eeed40](https://github.com/Fdawgs/node-poppler/commit/9eeed40785c45d4251490cb7c3dc982ea0f1e36b))
* **deps:** bump actions/setup-node from 2.1.5 to 2.2.0 ([dba9b38](https://github.com/Fdawgs/node-poppler/commit/dba9b38b1de6d7a69ff4243e7e959dc956cbf645))
* **deps:** bump actions/setup-node from 2.2.0 to 2.3.0 ([c41ef56](https://github.com/Fdawgs/node-poppler/commit/c41ef569eb590dec54375063939f8338587174a3))
* **deps:** bump actions/upload-artifact from 2.2.3 to 2.2.4 ([2461ce1](https://github.com/Fdawgs/node-poppler/commit/2461ce1461468d76b9a067088f86e941467ae0e3))
* **deps:** bump coverallsapp/github-action from 1.1.2 to 1.1.3 ([a6cecca](https://github.com/Fdawgs/node-poppler/commit/a6ceccac9470be00a9dd0e15f8fb1d3690fb78c4))
* **deps:** bump wagoid/commitlint-github-action from 3.1.4 to 4.1.1 ([b29337c](https://github.com/Fdawgs/node-poppler/commit/b29337c52b9a7d8ca878ff659737473f53813d06))


### Miscellaneous

* **gitignore:** add test generated pdfs ([c70638c](https://github.com/Fdawgs/node-poppler/commit/c70638c9bf3dc29a7245683f7f0604db86c17012))
* **index/pdftocairo:** sort file ext list alphabetically ascending ([8912fc1](https://github.com/Fdawgs/node-poppler/commit/8912fc12ba1f022a2a4b24973ce5c491dcbebe36))
* **package:** update keywords ([5169f74](https://github.com/Fdawgs/node-poppler/commit/5169f7473ac0c35f76a6685835f456e9a87570f8))
* **prettierignore:** ignore all test folder content ([d69dccd](https://github.com/Fdawgs/node-poppler/commit/d69dccdf684be316cb35535a53877add76763024))
* **vscode:** disable red hat telemetry ([d0084b5](https://github.com/Fdawgs/node-poppler/commit/d0084b550fa7d2b9ba81da798ca7387ce3155c28))
* **vscode:** remove user space config setting ([c899f9f](https://github.com/Fdawgs/node-poppler/commit/c899f9fc3ad05af2611efe0b5a4d4e3de64136f1))

## [4.1.0](https://github.com/Fdawgs/node-poppler/compare/v4.0.0...v4.1.0) (2021-06-02)


### Features

* **index:** add `printAsJson` arg to `pdfInfo()` options ([56a2ffb](https://github.com/Fdawgs/node-poppler/commit/56a2ffbac898209057fdc87f6fec23b18af5404f)), thanks to @sainf


### Bug fixes

* **index:** normalize binary paths ([15cb1a1](https://github.com/Fdawgs/node-poppler/commit/15cb1a16bb2fc98b702f52977e824eef412ad937))


### Miscellaneous

* **workflows:** remove `stale.yml` ([167484a](https://github.com/Fdawgs/node-poppler/commit/167484ab9b84871b62925636a028ad47a975ee5e))


### Continuous integration

* **cd:** move perf optimizations and refactoring into same section ([842d3f5](https://github.com/Fdawgs/node-poppler/commit/842d3f588219bd9611021eee6da89731cbbf8a0f))


### Dependencies

* **deps-dev:** bump eslint-plugin-jsdoc from 34.8.2 to 35.1.2 ([277f31f](https://github.com/Fdawgs/node-poppler/commit/277f31f8352f6254d253d164acb86973fac83eb1))
* **deps-dev:** bump jest from 26.6.3 to 27.0.3 ([e28c345](https://github.com/Fdawgs/node-poppler/commit/e28c345ba69f0211131411cc98446288dfb75ff9))


### Documentation

* **readme:** grammar and wordiness fixes ([4a02092](https://github.com/Fdawgs/node-poppler/commit/4a0209271df7eb7cd110f324a19e77f14d2fb8d9))
* **readme:** update `pdfToHtml()` examples ([e10a821](https://github.com/Fdawgs/node-poppler/commit/e10a821beb34dad8b4eea90e70353ed3d8ed8349))
* **readme:** update contributing section ([99f4cd6](https://github.com/Fdawgs/node-poppler/commit/99f4cd63eb566975296d697c5788edde8e52ff06))

## [4.0.0](https://github.com/Fdawgs/node-poppler/compare/v3.0.1...v4.0.0) (2021-05-21)


### ⚠ BREAKING CHANGES

* **index:** optional `outputFile`string parameter for `pdfToHtml()` function has been added after `file`. `Poppler.pdfToHtml(file, options)` is now `Poppler.pdfToHtml(file, outputFile, options)`.

### Features

* **index:** add `outputFile` param to `pdfToHtml()` function ([cabdf58](https://github.com/Fdawgs/node-poppler/commit/cabdf58c1831ecf85eec984b473552f73f516230))


### Miscellaneous

* **eslintrc:** ignore empty lines in jsdoc comments ([6ae7b61](https://github.com/Fdawgs/node-poppler/commit/6ae7b617676e85d76affd6d5a77bd6878690f50f))

### [3.0.1](https://github.com/Fdawgs/node-poppler/compare/v3.0.0...v3.0.1) (2021-05-20)


### Bug fixes

* **index:** remove setting default encoding of received buffer ([baa3d43](https://github.com/Fdawgs/node-poppler/commit/baa3d43fac0e7080328efa3bb45aa0c3658a63e5))


### Documentation

* **readme:** remove repetition ([8a36c2d](https://github.com/Fdawgs/node-poppler/commit/8a36c2d02030c28af0c0c571a302c190e8eacd86))


### Miscellaneous

* **ci:** replace `node-version` key with shorter `node` ([#255](https://github.com/Fdawgs/node-poppler/issues/255)) ([4a6cfa9](https://github.com/Fdawgs/node-poppler/commit/4a6cfa99d79605df51d9ca9af683d8c43809501c))


### Dependencies

* **deps-dev:** bump dev dependencies ([7c6ef15](https://github.com/Fdawgs/node-poppler/commit/7c6ef1518c0a4b6d281476590e2db56e5eafc6c2))
* **deps:** bump actions/stale from 3.0.18 to 3.0.19 ([2479e6a](https://github.com/Fdawgs/node-poppler/commit/2479e6af27d1077020f56ee0a444a8a539ff78d0))
* **deps:** bump GoogleCloudPlatform/release-please-action ([ce14fcf](https://github.com/Fdawgs/node-poppler/commit/ce14fcfc4ed03f7ad01b388c9ca455a3463ec525))
* **deps:** bump wagoid/commitlint-github-action from 3.1.0 to 3.1.4 ([697c43c](https://github.com/Fdawgs/node-poppler/commit/697c43cb4f0858a6ce3eb4b9025e53acd3035fbf))


### Continuous integration

* **ci:** replace `ubuntu-20.04` with `ubuntu-latest`; both same version ([aaf1e5f](https://github.com/Fdawgs/node-poppler/commit/aaf1e5fab099734f6ff8ca0585e276ed7572f8a6))
* fix key usage in `action/setup-node` ([3cfb17b](https://github.com/Fdawgs/node-poppler/commit/3cfb17b16c369462f2bff239d23e374fb0cc4fa0))

## [3.0.0](https://github.com/Fdawgs/node-poppler/compare/v2.5.0...v3.0.0) (2021-04-29)


### ⚠ BREAKING CHANGES

* remove support for nodejs v10, as it is EOL as of 2021-04-30

### Miscellaneous

* remove support for node v10 ([fa1a8c1](https://github.com/Fdawgs/node-poppler/commit/fa1a8c178757498da3b847c99f3de6da3b17740f))


### Documentation

* grammar and readability fixes ([4637e3e](https://github.com/Fdawgs/node-poppler/commit/4637e3ef3b06eed0d56646bec54a2982d1907e07))


### Continuous integration

* add nodejs v16 to unit test matrix ([52ead20](https://github.com/Fdawgs/node-poppler/commit/52ead20deeafe8b80afd5c77d26c924c71afab32))
* **link-check:** ignore links to lib binaries ([f71f67b](https://github.com/Fdawgs/node-poppler/commit/f71f67b6ccfe316575c5c588b05dc938dd08d98c))

## [2.5.0](https://github.com/Fdawgs/node-poppler/compare/v2.4.1...v2.5.0) (2021-04-21)


### Features

* support buffer input for functions ([#238](https://github.com/Fdawgs/node-poppler/issues/238)) ([a9a88cd](https://github.com/Fdawgs/node-poppler/commit/a9a88cd4d79a13332090fd3c0f3be2ed00124537))


### Continuous integration

* add cleanup-run job ([b826a9e](https://github.com/Fdawgs/node-poppler/commit/b826a9e8b01dae1575b43d51eba4e3a534c775da))
* **automerge:** move automerge job into new workflow ([9b06c43](https://github.com/Fdawgs/node-poppler/commit/9b06c4355f671ab0e63472e2697f5393838eb247))
* **ci:** ignore dependabot prs for commit message linting ([4802519](https://github.com/Fdawgs/node-poppler/commit/4802519a783de692288e439f669e4f855f7f28f2))
* do not run coveralls steps/jobs on forks ([82bbdf3](https://github.com/Fdawgs/node-poppler/commit/82bbdf381abe5cbcb3b1cba5062d69be75389d43))
* **link-check:** fix skip regex ([1803802](https://github.com/Fdawgs/node-poppler/commit/18038021f9c644cb427193446035ff50830d5748))
* **stale:** shorten workflow name ([a93b619](https://github.com/Fdawgs/node-poppler/commit/a93b619bbde22b0fc110cb2c84bad2e3c5375312))
* **workflows:** run only on push and pulls to main branch ([a97b3b3](https://github.com/Fdawgs/node-poppler/commit/a97b3b37b4795f4e2d176376a52021b70ce17560))


### Dependencies

* **deps-dev:** bump eslint-plugin-promise from 4.3.1 to 5.1.0 ([2af245b](https://github.com/Fdawgs/node-poppler/commit/2af245b195f859103e9cc11bf49666379297583e))
* **deps-dev:** bump husky from 4.3.8 to 6.0.0 ([53a38b9](https://github.com/Fdawgs/node-poppler/commit/53a38b9836e8fcc981d06207169a96bb931a0bce))
* **deps:** bump actions/github-script from v3.1.0 to v3.1.1 ([918a23a](https://github.com/Fdawgs/node-poppler/commit/918a23a36e23c307059aa9013ff44ca81d77a1d9))
* **deps:** bump actions/upload-artifact from v2.2.2 to v2.2.3 ([93e1cc5](https://github.com/Fdawgs/node-poppler/commit/93e1cc5bd53e1840110fd626ae68505dafe0d4b5))
* **deps:** bump GoogleCloudPlatform/release-please-action ([9c06911](https://github.com/Fdawgs/node-poppler/commit/9c0691105cdc73db6e8c5d76ae5180c11f4b5b79))
* **deps:** bump GoogleCloudPlatform/release-please-action ([c602243](https://github.com/Fdawgs/node-poppler/commit/c602243285b59326fd7727ceb4e83524d763f3e1))
* **deps:** bump typoci/spellcheck-action from v0.3.0 to v0.4.0 ([ceab8ee](https://github.com/Fdawgs/node-poppler/commit/ceab8ee0f8108401ebbf9bcab72cc884360110dd))
* **deps:** bump typoci/spellcheck-action from v0.4.0 to v1.0.0 ([c8ea234](https://github.com/Fdawgs/node-poppler/commit/c8ea234fa48d7bfa08d46b4041aad291cdf3e033))
* **deps:** bump wagoid/commitlint-github-action from v3.0.6 to v3.1.0 ([bcd1cc6](https://github.com/Fdawgs/node-poppler/commit/bcd1cc606142b3b450d6de1eed75b4791fd4dab3))


### Miscellaneous

* prep release ([3f62b5a](https://github.com/Fdawgs/node-poppler/commit/3f62b5a565d137cc1a6ca52a971824d14735080a))


### Documentation

* **readme:** add example of buffer usage ([f3dbfff](https://github.com/Fdawgs/node-poppler/commit/f3dbffff7957fedb6adbb56d195879793db91fdc))

### [2.4.1](https://github.com/Fdawgs/node-poppler/compare/v2.4.0...v2.4.1) (2021-03-18)


### Bug fixes

* **index:** add missing  option to pdftocairo ([#222](https://github.com/Fdawgs/node-poppler/issues/222)) ([631583f](https://github.com/Fdawgs/node-poppler/commit/631583f7a5f98267057e299d357e67ce5190db1f))


### Dependencies

* **deps-dev:** bump dev dependencies ([c062248](https://github.com/Fdawgs/node-poppler/commit/c0622482c3a37d533870050e438a060edcccde45))
* **deps:** bump fastify/github-action-merge-dependabot ([9111211](https://github.com/Fdawgs/node-poppler/commit/911121163658950b702dfa570fa1dc6864fd6e33))
* **deps:** bump GoogleCloudPlatform/release-please-action ([74bae38](https://github.com/Fdawgs/node-poppler/commit/74bae38b51f57bc3597eefa730c650bc77aaefb0))


### Miscellaneous

* **api:** lint with prettier ([7b224b3](https://github.com/Fdawgs/node-poppler/commit/7b224b32f4ce94e9e8877660d40a5b61971922fe))
* **husky:** move doc step to pre-commit hook ([6dc466c](https://github.com/Fdawgs/node-poppler/commit/6dc466ccd952f5289c12e5c0a339bc06e36d4f8d))
* **husky:** reorder pre-push hook ([cd3bf8e](https://github.com/Fdawgs/node-poppler/commit/cd3bf8e1e35e03d3e9c251cb89488ece95ab7597))
* **prettierignore:** add `api.md` ([c226f81](https://github.com/Fdawgs/node-poppler/commit/c226f812f8f62911a96612c080468ecace20d0d6))

## [2.4.0](https://github.com/Fdawgs/node-poppler/compare/v2.3.0...v2.4.0) (2021-03-09)


### Features

* **index:** add binary version checking for options ([13febb5](https://github.com/Fdawgs/node-poppler/commit/13febb5fdb7d9d7fa77670a93bee1e11020fc1b5))


### Bug fixes

* **index:** add missing `dataurls` option to pdftohtml ([ec45b5b](https://github.com/Fdawgs/node-poppler/commit/ec45b5bb1882a73e2a46b87ce906b6a366295487))
* **index:** add missing `forcepagenumber` option to pdftoppm ([533f424](https://github.com/Fdawgs/node-poppler/commit/533f4249069aa08d8ec928f8f0d588786327bea9))
* **index:** add missing `hideannotations` option to pdftoppm ([ffbe119](https://github.com/Fdawgs/node-poppler/commit/ffbe119c8ce069801a43cfaa2a1faa3f051bcf8e))
* **index:** add missing `separator` option to pdftoppm ([7744abd](https://github.com/Fdawgs/node-poppler/commit/7744abd8deec299a043230e38b70825e9d6728a9))
* **index:** correct misspelling of `received` in error string ([f6b7fcb](https://github.com/Fdawgs/node-poppler/commit/f6b7fcb7ca1b941eccdcc0c8688fdba8dd3cfb99))


### Miscellaneous

* **workflows:** rename ci and perf sections ([54caeda](https://github.com/Fdawgs/node-poppler/commit/54caeda0c2f1df947c9b5d717a65d049fbb5c3d5))


### Dependencies

* **deps:** bump actions/stale from v3.0.17 to v3.0.18 ([b449c7e](https://github.com/Fdawgs/node-poppler/commit/b449c7e6d8e4facc3fd8e3bfb76d549d3a3b7dc1))
* **deps:** bump fastify/github-action-merge-dependabot ([e0bf38d](https://github.com/Fdawgs/node-poppler/commit/e0bf38dd7d6f929d00a2caadae58ab8b1260087f))
* **deps:** bump GoogleCloudPlatform/release-please-action ([f563a41](https://github.com/Fdawgs/node-poppler/commit/f563a410fb526ec2182b5d8739d185e066024148))
* **deps:** bump wagoid/commitlint-github-action from v3.0.1 to v3.0.6 ([405aca1](https://github.com/Fdawgs/node-poppler/commit/405aca1d83fc7d19bbc76403e825801670f69b10))

## [2.3.0](https://github.com/Fdawgs/node-poppler/compare/v2.2.1...v2.3.0) (2021-03-04)


### Features

* **lib:** update poppler win32 binaries from 21.02.0 to 21.03.0 ([4648db5](https://github.com/Fdawgs/node-poppler/commit/4648db55f600bceb763fd7c342035ab3362a7ff1))


### Dependencies

* **dependabot:** set commit message prefix; lower pull limit ([25e3652](https://github.com/Fdawgs/node-poppler/commit/25e365256f0cfd958d36e8e8146f191bb64eeb40))
* **deps-dev:** bump @commitlint/cli from 11.0.0 to 12.0.1 ([#206](https://github.com/Fdawgs/node-poppler/issues/206)) ([78f92b6](https://github.com/Fdawgs/node-poppler/commit/78f92b6ba3cbc06c505371ee24aae3da5105a27a))
* **deps-dev:** bump @commitlint/config-conventional ([4708778](https://github.com/Fdawgs/node-poppler/commit/47087784c8afe2199faf9fb7fab07c4b204a2616))
* **deps-dev:** bump eslint-config-prettier from 7.2.0 to 8.1.0 ([ef0788a](https://github.com/Fdawgs/node-poppler/commit/ef0788accfcd8e0a0acdfc887478a77305e487dd))
* **deps-dev:** bump jsdoc-to-markdown from 6.0.1 to 7.0.0 ([#207](https://github.com/Fdawgs/node-poppler/issues/207)) ([b6f88ae](https://github.com/Fdawgs/node-poppler/commit/b6f88ae99e7c57ebd9b51052dfe48e45c45bc8d7))
* **deps:** bump wagoid/commitlint-github-action from v2.2.3 to v3.0.1 ([3674b7e](https://github.com/Fdawgs/node-poppler/commit/3674b7e7be1e503e59062f2bed0c79bf9bb0d454))
* **deps:** specify minor and hotfix versions ([aa1bb13](https://github.com/Fdawgs/node-poppler/commit/aa1bb13ecbe99c91c52824d9574562e9d5caaaa8))


### Miscellaneous

* add link check workflow ([39a83c0](https://github.com/Fdawgs/node-poppler/commit/39a83c0347a8af3286515669219577603756075e))
* automate release and changelog generation ([b294617](https://github.com/Fdawgs/node-poppler/commit/b294617db770c0165aaa8beda779f0634ecdd53d))
* **codeql:** remove autobuild action ([d20154c](https://github.com/Fdawgs/node-poppler/commit/d20154cd0c06dfe0055d8edcde9084a520063400))
* **link-check:** ignore if draft pull request event ([d3c7ad7](https://github.com/Fdawgs/node-poppler/commit/d3c7ad7bd80f5ad9118cee6cc825952091d62589))
* **linkcheck:** extend ignored urls ([8c0a238](https://github.com/Fdawgs/node-poppler/commit/8c0a238bf1471108ef5eddcef1d11d99cb7f628b))
* **lint-check:** compress patterns ([c9b7e09](https://github.com/Fdawgs/node-poppler/commit/c9b7e09f7cd34cdb6a281d741d244c61f4485bfd))
* **lint-check:** run on push and pull events for md files ([91cd1fc](https://github.com/Fdawgs/node-poppler/commit/91cd1fcc9e3e5b3f9ef77a1c1dff2287b37e72a7))
* **prettier:** create separate files to allow for CI/CD to use prettier config ([#212](https://github.com/Fdawgs/node-poppler/issues/212)) ([8319774](https://github.com/Fdawgs/node-poppler/commit/83197747b55609540518aae42b72a11d13ca8715))
* replace stalebot with github action ([237939d](https://github.com/Fdawgs/node-poppler/commit/237939d729df7d8e8f0387748a25fbbbb9be6ad4))
* **vscode:** remove conflicting prettier ext setting ([316e244](https://github.com/Fdawgs/node-poppler/commit/316e24473cb89f6c45ae5930d47b61d9da3d463c))
* **workflows:** fix release types to account for bots ([7ac80c5](https://github.com/Fdawgs/node-poppler/commit/7ac80c52115222e98a0381a4ee990777422b8c45))
* **workflows:** move release steps into `cd` workflow ([86a94e4](https://github.com/Fdawgs/node-poppler/commit/86a94e47766eb33216d1c570a191fbae23cc4989))
* **workflows:** rename spellcheck workflow ([8fdff21](https://github.com/Fdawgs/node-poppler/commit/8fdff210ba5fab00085ff072ced9b95476a63551))
* **workflows:** tidy node-version syntax ([8b69bc1](https://github.com/Fdawgs/node-poppler/commit/8b69bc1f52616e2924f80a7ccae365dbe5917017))


### Documentation

* **changelog:** fix h3 header style ([a0efe08](https://github.com/Fdawgs/node-poppler/commit/a0efe080bf2c48de4ac71c021b5733834ba1e56b))
* **readme:** fix broken link ([bc1031b](https://github.com/Fdawgs/node-poppler/commit/bc1031b02e33ccda42db80407e52a21698a3d2d5))
* **readme:** shorten links ([300f033](https://github.com/Fdawgs/node-poppler/commit/300f0333f4a4c934b3124eb46b5aa07e98dca5ef))

### 2.2.1 (2021-02-16)

* fix(lib): update poppler win32 binaries from 21.01.0 to 21.02.0 ([1d6a042](https://github.com/Fdawgs/node-poppler/commit/1d6a042))
* fix(script): add missing ignore-path arg ([ad9f42a](https://github.com/Fdawgs/node-poppler/commit/ad9f42a))
* ci: add commit-lint job ([33d67c7](https://github.com/Fdawgs/node-poppler/commit/33d67c7))
* ci: disable long running homebrew cleanup tasks ([693fa0b](https://github.com/Fdawgs/node-poppler/commit/693fa0b))
* ci: remove cache actions as they use lock file ([960dcbe](https://github.com/Fdawgs/node-poppler/commit/960dcbe))
* ci: replace typo ci app with action ([7d35422](https://github.com/Fdawgs/node-poppler/commit/7d35422))
* ci(dependabot): ignore husky updates ([6fc6187](https://github.com/Fdawgs/node-poppler/commit/6fc6187))
* build(deps-dev): bump eslint-plugin-jsdoc from 31.6.1 to 32.0.1 ([2e3bfec](https://github.com/Fdawgs/node-poppler/commit/2e3bfec))
* build(deps-dev): pin husky major version ([debb162](https://github.com/Fdawgs/node-poppler/commit/debb162))
* build(deps-dev): remove coveralls, replaced by github action ([84b5490](https://github.com/Fdawgs/node-poppler/commit/84b5490))
* build(deps-dev): remove jsinspect ([8fb486a](https://github.com/Fdawgs/node-poppler/commit/8fb486a))
* build(deps): bump wagoid/commitlint-github-action from v2.0.3 to v2.2.3 ([768532d](https://github.com/Fdawgs/node-poppler/commit/768532d))
* docs(contributing): add documentation style ([1267ec3](https://github.com/Fdawgs/node-poppler/commit/1267ec3))
* docs(readme): grammar ([0606995](https://github.com/Fdawgs/node-poppler/commit/0606995))
* docs(readme): remove stray comma ([c2ea407](https://github.com/Fdawgs/node-poppler/commit/c2ea407))
* docs(readme): revamp intro section ([729451c](https://github.com/Fdawgs/node-poppler/commit/729451c))
* style: capitalise headings correctly ([17a688b](https://github.com/Fdawgs/node-poppler/commit/17a688b))
* style: shorten husky pre-push script ([09da9eb](https://github.com/Fdawgs/node-poppler/commit/09da9eb))
* style(ci): capitalise jobs and job step names ([1a1e2d4](https://github.com/Fdawgs/node-poppler/commit/1a1e2d4))
* style(readme): add linebreaks between badges ([92b5d5e](https://github.com/Fdawgs/node-poppler/commit/92b5d5e))
* style(readme): capitalise headings correctly ([bf8819d](https://github.com/Fdawgs/node-poppler/commit/bf8819d))
* style(readme): prettier badge shape ([6e01859](https://github.com/Fdawgs/node-poppler/commit/6e01859))
* style(scripts): rename `jest-coverage` to `jest:coverage` ([5383798](https://github.com/Fdawgs/node-poppler/commit/5383798))
* style(tests): use apa header style for describe name params ([09df70e](https://github.com/Fdawgs/node-poppler/commit/09df70e))
* chore: add commitlint husky `commit-msg` hook ([92a3769](https://github.com/Fdawgs/node-poppler/commit/92a3769))
* chore: add pull request template ([2836701](https://github.com/Fdawgs/node-poppler/commit/2836701))
* chore: stop excess coverage files being generated ([d6b639b](https://github.com/Fdawgs/node-poppler/commit/d6b639b))
* chore(vscode): add `redhat.vscode-yaml` as recommended extension ([2270e91](https://github.com/Fdawgs/node-poppler/commit/2270e91))
* chore(vscode): add `updateImportsOnFileMove` setting ([811db2c](https://github.com/Fdawgs/node-poppler/commit/811db2c))
* chore(vscode): add workspace settings and extensions ([547243c](https://github.com/Fdawgs/node-poppler/commit/547243c))

## 2.2.0 (2021-01-25)

* feat(lib): update poppler win32 binaries from 20.12.1 to 21.01.0 ([a552f83](https://github.com/Fdawgs/node-poppler/commit/a552f83))
* chore(jest): enable resetmocks option ([0eff7af](https://github.com/Fdawgs/node-poppler/commit/0eff7af))
* build(deps-dev): add husky for git hook handling ([2a5b181](https://github.com/Fdawgs/node-poppler/commit/2a5b181))
* docs: bump coc from v1.4.0 to v2.0.0 ([ca582da](https://github.com/Fdawgs/node-poppler/commit/ca582da))
* ci(github-actions): set `flag-name` for parallel coverage tests ([e91f37d](https://github.com/Fdawgs/node-poppler/commit/e91f37d))
* ci(github-actions): set semver for coverallsapp ([b745a7f](https://github.com/Fdawgs/node-poppler/commit/b745a7f))

### 2.1.3 (2021-01-18)

* build: add typoci config file ([494cdfe](https://github.com/Fdawgs/node-poppler/commit/494cdfe))
* build: remove `yarn` as package manager, revert to `npm` ([536b7c2](https://github.com/Fdawgs/node-poppler/commit/536b7c2))
* build(deps-dev): bump eslint-plugin-jsdoc from 30.7.13 to 31.0.7 (#185) ([dd4aaab](https://github.com/Fdawgs/node-poppler/commit/dd4aaab)), closes [#185](https://github.com/Fdawgs/node-poppler/issues/185)
* build(deps-dev): remove cross-env ([610d75a](https://github.com/Fdawgs/node-poppler/commit/610d75a))
* fix: remove lockfile ([738ee92](https://github.com/Fdawgs/node-poppler/commit/738ee92))
* fix: script calls ([8bea518](https://github.com/Fdawgs/node-poppler/commit/8bea518))
* ci: ignore scripts on publish ([b53e22b](https://github.com/Fdawgs/node-poppler/commit/b53e22b))
* ci: refactor `codeql-analysis.yml` ([5094a02](https://github.com/Fdawgs/node-poppler/commit/5094a02))
* ci: remove redundant javascript dictionary ([93182cd](https://github.com/Fdawgs/node-poppler/commit/93182cd))
* ci: use yarn cache of node dependencies if present ([5d8f5f2](https://github.com/Fdawgs/node-poppler/commit/5d8f5f2))
* ci(codeql): specify more query suites ([fe60c65](https://github.com/Fdawgs/node-poppler/commit/fe60c65))
* ci(typo-ci): add `ydh` to list of excluded words ([b338a36](https://github.com/Fdawgs/node-poppler/commit/b338a36))
* chore: remove old .env files from gitignore ([235bef1](https://github.com/Fdawgs/node-poppler/commit/235bef1))
* chore(package): add homepage and bug urls ([ed4225e](https://github.com/Fdawgs/node-poppler/commit/ed4225e))
* docs: update contact email ([8328e9b](https://github.com/Fdawgs/node-poppler/commit/8328e9b))
* docs(contributing): update yarn link ([5a9154d](https://github.com/Fdawgs/node-poppler/commit/5a9154d))
* docs(readme): add acknowledgements section ([c544ace](https://github.com/Fdawgs/node-poppler/commit/c544ace))
* docs(readme): grammar fixe ([919d205](https://github.com/Fdawgs/node-poppler/commit/919d205))
* docs(readme): style changes ([4c8b519](https://github.com/Fdawgs/node-poppler/commit/4c8b519))
* style(ci): tidy job names ([4b736d7](https://github.com/Fdawgs/node-poppler/commit/4b736d7))

### 2.1.2 (2020-12-28)

* build: update github-actions with dependabot ([ec8bf01](https://github.com/Fdawgs/node-poppler/commit/ec8bf01))
* build(deps-dev): bump eslint from 7.15.0 to 7.16.0 ([de68d3d](https://github.com/Fdawgs/node-poppler/commit/de68d3d))
* build(deps-dev): bump eslint-config-prettier from 7.0.0 to 7.1.0 ([1840406](https://github.com/Fdawgs/node-poppler/commit/1840406))
* build(deps-dev): bump eslint-plugin-jsdoc from 30.7.8 to 30.7.9 ([763e676](https://github.com/Fdawgs/node-poppler/commit/763e676))
* build(deps-dev): remove eslint-plugin-json ([faccfa6](https://github.com/Fdawgs/node-poppler/commit/faccfa6))
* build(deps): bump fastify/github-action-merge-dependabot (#180) ([95de123](https://github.com/Fdawgs/node-poppler/commit/95de123)), closes [#180](https://github.com/Fdawgs/node-poppler/issues/180)
* build(deps): bump node-notifier from 8.0.0 to 8.0.1 ([25c3ffe](https://github.com/Fdawgs/node-poppler/commit/25c3ffe))
* build(typescript): enable strict option ([87c221e](https://github.com/Fdawgs/node-poppler/commit/87c221e))
* ci: add linting job; expand scope of jobs ([0b2412c](https://github.com/Fdawgs/node-poppler/commit/0b2412c))
* ci: add typescript compilation step ([94654e6](https://github.com/Fdawgs/node-poppler/commit/94654e6))
* ci: automatically merge dependabot pull requests on pass build stage ([105b2f3](https://github.com/Fdawgs/node-poppler/commit/105b2f3))
* ci: bump actions/setup-node from v1 to v2 ([f19f5b8](https://github.com/Fdawgs/node-poppler/commit/f19f5b8))
* ci: do not run github actions for draft prs ([c76d373](https://github.com/Fdawgs/node-poppler/commit/c76d373))
* ci: merge unit test jobs ([73f6ccc](https://github.com/Fdawgs/node-poppler/commit/73f6ccc))
* ci: move dependency installs to correct step ([bbdeb60](https://github.com/Fdawgs/node-poppler/commit/bbdeb60))
* ci: reorder lint steps ([b8aca23](https://github.com/Fdawgs/node-poppler/commit/b8aca23))
* ci: require lint job on automerge ([1fd4523](https://github.com/Fdawgs/node-poppler/commit/1fd4523))
* ci: use yarn `--frozen-lockfile` flag for repro deps ([dfc2c31](https://github.com/Fdawgs/node-poppler/commit/dfc2c31))
* style: use default prettier options for trailing commas and quotes ([b8e791d](https://github.com/Fdawgs/node-poppler/commit/b8e791d))
* style(ci): remove whitespace ([8b9150e](https://github.com/Fdawgs/node-poppler/commit/8b9150e))
* fix(scripts): test script ([cf4ccd2](https://github.com/Fdawgs/node-poppler/commit/cf4ccd2))
* chore(scripts): rename test scripts ([c8a2c69](https://github.com/Fdawgs/node-poppler/commit/c8a2c69))
* docs(readme): remove abbreviation ([715fc9d](https://github.com/Fdawgs/node-poppler/commit/715fc9d))

### 2.1.1 (2020-12-13)

* build(deps-dev): bump dev dependencies ([c8d76d9](https://github.com/Fdawgs/node-poppler/commit/c8d76d9))
* fix(lib): update poppler win32 binaries from 20.12.0 to 20.12.1 ([d196360](https://github.com/Fdawgs/node-poppler/commit/d196360))

## 2.1.0 (2020-12-12)

* ci: add cd action to publish to npm ([eb90059](https://github.com/Fdawgs/node-poppler/commit/eb90059))
* ci: change ubuntu image to 20.04 ([3bae517](https://github.com/Fdawgs/node-poppler/commit/3bae517))
* ci: fix builds ([a657e75](https://github.com/Fdawgs/node-poppler/commit/a657e75))
* ci: replace travis-ci with github actions ([2b2ac0e](https://github.com/Fdawgs/node-poppler/commit/2b2ac0e))
* chore: add security.md ([b02979f](https://github.com/Fdawgs/node-poppler/commit/b02979f))
* chore: add stale confg ([63005e2](https://github.com/Fdawgs/node-poppler/commit/63005e2))
* chore(lib): update poppler win32 binaries from 20.11.0 to 20.12.0 ([51b0a72](https://github.com/Fdawgs/node-poppler/commit/51b0a72))
* build(deps-dev): bump dev dependencies ([5c363bd](https://github.com/Fdawgs/node-poppler/commit/5c363bd))
* build(deps): bump ini from 1.3.5 to 1.3.8 ([123a9c0](https://github.com/Fdawgs/node-poppler/commit/123a9c0))
* docs(index): clarify on options usage in jsdoc tags ([577e8ce](https://github.com/Fdawgs/node-poppler/commit/577e8ce))
* docs(index): correct accepted type for iccfile option ([01499fa](https://github.com/Fdawgs/node-poppler/commit/01499fa))
* feat(index): add rasterization color space and ICC profile options ([86edf34](https://github.com/Fdawgs/node-poppler/commit/86edf34))
* style: format codeql.yml ([7931936](https://github.com/Fdawgs/node-poppler/commit/7931936))

### 2.0.1 (2020-11-10)

* build(deps-dev): bump dev dependencies ([d21e32f](https://github.com/Fdawgs/node-poppler/commit/d21e32f))
* fix(index): return promise objects ([81cddaa](https://github.com/Fdawgs/node-poppler/commit/81cddaa))
* docs(index): correct return jsdoc tag for parseoptions function ([104a3a2](https://github.com/Fdawgs/node-poppler/commit/104a3a2))
* chore(index): rename const to reflect functionality ([d7633d1](https://github.com/Fdawgs/node-poppler/commit/d7633d1))
* refactor(index): concat invalid args provided into error object ([12a5c04](https://github.com/Fdawgs/node-poppler/commit/12a5c04))

## 2.0.0 (2020-11-03)

* docs: enable TypeScript definition generation for all methods ([cceecc8](https://github.com/Fdawgs/node-poppler/commit/cceecc8)) , thanks to @arthurdenner
* docs(index): correct stdout usage ([be0bb49](https://github.com/Fdawgs/node-poppler/commit/be0bb49))
* docs(readme): add note about macos binaries ([41c7e1e](https://github.com/Fdawgs/node-poppler/commit/41c7e1e))
* test(index): correct param orders for function calls ([e075a7b](https://github.com/Fdawgs/node-poppler/commit/e075a7b))
* build(deps-dev): bump dev dependencies ([c450c04](https://github.com/Fdawgs/node-poppler/commit/c450c04))
* build(travis): update osx image ([0c043db](https://github.com/Fdawgs/node-poppler/commit/0c043db))
* feat(index): add typescript definition file ([d82df8b](https://github.com/Fdawgs/node-poppler/commit/d82df8b))
* feat(lib): update poppler win32 binaries from 20.10.0 to 20.11.0 ([bc5478e](https://github.com/Fdawgs/node-poppler/commit/bc5478e))
* refactor(index): reorder parameters for all functions ([ead466e](https://github.com/Fdawgs/node-poppler/commit/ead466e))
* chore: add TypeScript config to generate definition ([c5b4858](https://github.com/Fdawgs/node-poppler/commit/c5b4858)), thanks to @arthurdenner
* chore(scripts): do not lint ts and tsx files ([b1e8426](https://github.com/Fdawgs/node-poppler/commit/b1e8426))

### BREAKING CHANGE

* optional `options` object parameter for all functions has been moved to the end. i.e. `Poppler.pdfToText(options, file, outputFile)` is now `Poppler.pdfToText(file, outputFile, options)`.

This allows for easier use of the functions as users no longer have to place an undefined parameter if no options are provided. `Poppler.pdfToText(undefined, file, outputFile)` can now be called instead like `Poppler.pdfToText(file, outputFile)`.

### 1.8.5 (2020-10-14)

* build: create codeql-analysis.yml workflow file ([7346f8f](https://github.com/Fdawgs/node-poppler/commit/7346f8f))
* build(deps-dev): bump dev dependencies ([29da2a9](https://github.com/Fdawgs/node-poppler/commit/29da2a9))
* style(index): rename exec variable to better reflect usage ([528fd88](https://github.com/Fdawgs/node-poppler/commit/528fd88))
* docs: spelling and grammar fixes ([27ece49](https://github.com/Fdawgs/node-poppler/commit/27ece49))
* docs(api): add stdout usage for pdftotext, pdftocairo, and pdftops funcs ([bd05f63](https://github.com/Fdawgs/node-poppler/commit/bd05f63))
* docs(contributing): remove reference to replaced jest script ([874e368](https://github.com/Fdawgs/node-poppler/commit/874e368))
* chore: remove `jest` script; replaced by `test-only` script ([653cc22](https://github.com/Fdawgs/node-poppler/commit/653cc22))
* chore(lib): remove redundant win32 poppler files ([bfea135](https://github.com/Fdawgs/node-poppler/commit/bfea135))
* fix(lib): update poppler win32 binaries from 20.09.0 to 20.10.0 ([ab227f6](https://github.com/Fdawgs/node-poppler/commit/ab227f6))

### 1.8.4 (2020-10-01)

* build(dependabot): remove assignment of pull requests to user ([dd04661](https://github.com/Fdawgs/node-poppler/commit/dd04661))
* build(deps-dev): bump dev dependencies ([3157acd](https://github.com/Fdawgs/node-poppler/commit/3157acd))
* refactor(index): replace execa dependency with native execfile function ([2462b2f](https://github.com/Fdawgs/node-poppler/commit/2462b2f))
* fix(lib): update poppler win32 binaries from 0.90.1 to 20.09.0 ([9454db2](https://github.com/Fdawgs/node-poppler/commit/9454db2))
* docs(contributing): correct release step order ([9d8ed89](https://github.com/Fdawgs/node-poppler/commit/9d8ed89))
* docs(readme): add snyk badge ([32e74d3](https://github.com/Fdawgs/node-poppler/commit/32e74d3))
* docs(readme): repoint travis-ci badge from .org to .com ([750fe4c](https://github.com/Fdawgs/node-poppler/commit/750fe4c))
* chore(eslint): add missing plugin declaration ([562b85b](https://github.com/Fdawgs/node-poppler/commit/562b85b))
* chore(eslint): remove unnecessary eslint rules ([907806a](https://github.com/Fdawgs/node-poppler/commit/907806a))

### 1.8.3 (2020-08-28)

* build(deps-dev): add eslint-plugin-security dev dependency ([da49f54](https://github.com/Fdawgs/node-poppler/commit/da49f54))
* build(deps-dev): bump dev dependencies ([97f96a6](https://github.com/Fdawgs/node-poppler/commit/97f96a6))
* docs(readme): correct example pdftocairo call ([06ca169](https://github.com/Fdawgs/node-poppler/commit/06ca169)), thanks to @gabenunez for spotting

### 1.8.2 (2020-08-18)

* chore: reduce minimum nodejs engine version from 12.x to 10.x ([183400d](https://github.com/Fdawgs/node-poppler/commit/183400d))
* chore(github): add issue templates ([adbe5c9](https://github.com/Fdawgs/node-poppler/commit/adbe5c9))
* chore(index): spelling and grammar fixes to jsdoc tags ([e3cc16e](https://github.com/Fdawgs/node-poppler/commit/e3cc16e))
* build(deps-dev): bump dev dependencies to resolve security cve ([310a943](https://github.com/Fdawgs/node-poppler/commit/310a943))

### 1.8.1 (2020-07-26)

* build(deps-dev): bump dev dependencies ([27bb199](https://github.com/Fdawgs/node-poppler/commit/27bb199))
* build(travis): add linux test stage ([caa7513](https://github.com/Fdawgs/node-poppler/commit/caa7513))
* build(travis): make scripts multiline ([39856a6](https://github.com/Fdawgs/node-poppler/commit/39856a6))
* build(travis): update linux dist to latest lts ([b5c2427](https://github.com/Fdawgs/node-poppler/commit/b5c2427))
* fix(lib): update poppler win32 binaries from 0.90.0 to 0.90.1 ([cb8c013](https://github.com/Fdawgs/node-poppler/commit/cb8c013))
* chore(travis): sort os values alphabetically ascending order ([861ed43](https://github.com/Fdawgs/node-poppler/commit/861ed43))

## 1.8.0 (2020-07-20)

The pdftoCairo Poppler Windows binaries have also been updated to v0.90.0 from v0.68.0 in this release.

* build(deps-dev): bump eslint-plugin-jsdoc from 30.0.0 to 30.0.2 ([0a6bfdd](https://github.com/Fdawgs/node-poppler/commit/0a6bfdd))
* build(travis): fix misspelling of dist value ([0532060](https://github.com/Fdawgs/node-poppler/commit/0532060))
* feat(lib): update poppler win32 binaries from 0.89.0 to 0.90.0 ([0f301e2](https://github.com/Fdawgs/node-poppler/commit/0f301e2))
* style(index): add missing dashes to jsdoc tags ([fd3a360](https://github.com/Fdawgs/node-poppler/commit/fd3a360))
* style(index): use back ticks as opposed to quotation marks in jsdoc tags ([78bc6e8](https://github.com/Fdawgs/node-poppler/commit/78bc6e8))

### 1.7.6 (2020-07-20)

* build(deps-dev): bump dev dependencies ([54f0542](https://github.com/Fdawgs/node-poppler/commit/54f0542))
* build(travis): set osx image to latest version ([680aa14](https://github.com/Fdawgs/node-poppler/commit/680aa14))
* fix(index): optional outputfiles to send to stdout ([de50f06](https://github.com/Fdawgs/node-poppler/commit/de50f06))

### 1.7.5 (2020-07-16)

* build(deps-dev): bump dev dependencies ([dd07cde](https://github.com/Fdawgs/node-poppler/commit/dd07cde))
* build(deps-dev): remove typescript ([39a6f6e](https://github.com/Fdawgs/node-poppler/commit/39a6f6e))
* build(deps): bump execa from 4.0.2 to 4.0.3 ([9c39105](https://github.com/Fdawgs/node-poppler/commit/9c39105))
* build(travis): add test step ([3f1dbd0](https://github.com/Fdawgs/node-poppler/commit/3f1dbd0))
* build(travis): remove osx os from allowed failures ([dc6784e](https://github.com/Fdawgs/node-poppler/commit/dc6784e))
* build(travis): replace api_token alias to pass config validation ([ba5d231](https://github.com/Fdawgs/node-poppler/commit/ba5d231))
* build(travis): set linux dist ([183bf02](https://github.com/Fdawgs/node-poppler/commit/183bf02))
* build(travis): suppress git log; skip rerunning tests on deploy ([3fb542f](https://github.com/Fdawgs/node-poppler/commit/3fb542f))
* build(travis): use lts version of node for jobs ([48a9d38](https://github.com/Fdawgs/node-poppler/commit/48a9d38))
* chore(package): update description ([1d54b6a](https://github.com/Fdawgs/node-poppler/commit/1d54b6a))
* chore(scripts): use gitignore for ignore-path options ([cbfbb90](https://github.com/Fdawgs/node-poppler/commit/cbfbb90))
* tests(index): use os platform when testing constructor ([bb1112b](https://github.com/Fdawgs/node-poppler/commit/bb1112b))

### 1.7.4 (2020-06-29)

* chore: add missing jsdoc tags for test function ([770109e](https://github.com/Fdawgs/node-poppler/commit/770109e))
* chore: create code_of_conduct.md ([9a3a264](https://github.com/Fdawgs/node-poppler/commit/9a3a264))
* chore(eslint): convert from json to js file format ([a6e7f04](https://github.com/Fdawgs/node-poppler/commit/a6e7f04))
* chore(eslint): move inline eslint rules into config file ([99fe5be](https://github.com/Fdawgs/node-poppler/commit/99fe5be))
* chore(eslint): reorder rules ([96f561b](https://github.com/Fdawgs/node-poppler/commit/96f561b))
* chore(index): add jsdoc descriptions for params to parseoptions function ([3915895](https://github.com/Fdawgs/node-poppler/commit/3915895))
* chore(scripts): remove prettier ignore-path option ([e65419c](https://github.com/Fdawgs/node-poppler/commit/e65419c))
* build(deps-dev): bump @commitlint/config-conventional ([6821f42](https://github.com/Fdawgs/node-poppler/commit/6821f42))
* build(deps-dev): bump eslint from 7.2.0 to 7.3.1 ([cda023a](https://github.com/Fdawgs/node-poppler/commit/cda023a))
* build(deps-dev): bump eslint-plugin-jest from 23.13.2 to 23.17.1 ([c8ab3f7](https://github.com/Fdawgs/node-poppler/commit/c8ab3f7))
* build(deps-dev): bump eslint-plugin-jsdoc from 27.0.7 to 28.5.1 ([87ca360](https://github.com/Fdawgs/node-poppler/commit/87ca360))
* build(deps-dev): bump jest from 26.0.1 to 26.1.0 ([c7868dc](https://github.com/Fdawgs/node-poppler/commit/c7868dc))
* Create Dependabot config file ([0dff433](https://github.com/Fdawgs/node-poppler/commit/0dff433))
* refactor: replace promise syntax with async await ([5e6c1e4](https://github.com/Fdawgs/node-poppler/commit/5e6c1e4))
* refactor(index): move args array inside parseoptions function ([41c44ef](https://github.com/Fdawgs/node-poppler/commit/41c44ef))

### 1.7.3 (2020-06-15)

The MacOS/Darwin Poppler binaries included have been updated from 0.66.0 to 0.89.0 by @chetanism,
bringing this inline with the Windows binaries.

* build(deps-dev): bump eslint from 6.8.0 to 7.2.0 ([4c7309a](https://github.com/Fdawgs/node-poppler/commit/4c7309a))
* build(deps-dev): bump eslint-config-airbnb-base from 14.1.0 to 14.2.0 ([e7b8ffc](https://github.com/Fdawgs/node-poppler/commit/e7b8ffc))
* build(deps-dev): bump eslint-plugin-import from 2.21.1 to 2.21.2 ([506b29b](https://github.com/Fdawgs/node-poppler/commit/506b29b))
* build(deps-dev): bump eslint-plugin-jsdoc from 27.0.4 to 27.0.7 ([837111f](https://github.com/Fdawgs/node-poppler/commit/837111f))
* docs(readme): tidy example code ([8469292](https://github.com/Fdawgs/node-poppler/commit/8469292))
* feat(lib): update poppler darwin binaries from 0.66.0 to 0.89.0 ([9ed863d](https://github.com/Fdawgs/node-poppler/commit/9ed863d))

### 1.7.2 (2020-06-08)

* docs(api): regenerate api docs with new jsdoc-to-markdown version ([4a103a6](https://github.com/Fdawgs/node-poppler/commit/4a103a6))
* build(deps-dev): bump eslint-plugin-import from 2.20.2 to 2.21.1 ([a4b74c0](https://github.com/Fdawgs/node-poppler/commit/a4b74c0))
* build(deps-dev): bump eslint-plugin-jsdoc from 26.0.0 to 27.0.4 ([90d9e3f](https://github.com/Fdawgs/node-poppler/commit/90d9e3f))
* build(deps-dev): bump jsdoc-to-markdown from 5.0.3 to 6.0.1 ([5c76f5e](https://github.com/Fdawgs/node-poppler/commit/5c76f5e))
* build(deps-dev): bump typescript from 3.9.3 to 3.9.5 ([27f6e36](https://github.com/Fdawgs/node-poppler/commit/27f6e36))
* feat(lib): update poppler win32 binaries from 0.88.0 to 0.89.0 ([6c3084d](https://github.com/Fdawgs/node-poppler/commit/6c3084d))
* chore(scripts): expand coverage of eslint and prettier ([412c2e2](https://github.com/Fdawgs/node-poppler/commit/412c2e2))

### 1.7.1 (2020-05-29)

* chore: add missing @param descriptions ([483613b](https://github.com/Fdawgs/node-poppler/commit/483613b))
* chore: add missing @returns tag ([5ae795f](https://github.com/Fdawgs/node-poppler/commit/5ae795f))
* chore: correct @returns jsdoc tag for all functions ([42943ae](https://github.com/Fdawgs/node-poppler/commit/42943ae))
* chore: correct case of type for @param jsdoc tag ([104cd7f](https://github.com/Fdawgs/node-poppler/commit/104cd7f))
* chore: update gitignore with latest github version ([8c1806c](https://github.com/Fdawgs/node-poppler/commit/8c1806c))
* chore(deps-dev): bump conventional-changelog-cli from 2.0.31 to 2.0.34 ([96bed5d](https://github.com/Fdawgs/node-poppler/commit/96bed5d))
* chore(deps-dev): bump eslint-plugin-jest from 23.9.0 to 23.13.2 ([dca93c4](https://github.com/Fdawgs/node-poppler/commit/dca93c4))
* chore(deps-dev): bump eslint-plugin-jsdoc from 25.4.3 to 26.0.0 ([8b387b1](https://github.com/Fdawgs/node-poppler/commit/8b387b1))
* chore(deps-dev): bump jest from 25.5.4 to 26.0.1 ([a02735a](https://github.com/Fdawgs/node-poppler/commit/a02735a))
* chore(deps-dev): bump typescript from 3.8.3 to 3.9.3 ([35eead5](https://github.com/Fdawgs/node-poppler/commit/35eead5))
* chore(package): set minimum engine version ([5b14c99](https://github.com/Fdawgs/node-poppler/commit/5b14c99))
* tests(index): replace .then() method with async/await ([2fed54c](https://github.com/Fdawgs/node-poppler/commit/2fed54c))
* build(deps-dev): add promise and jsdoc eslint plugins; update config ([4cb22a1](https://github.com/Fdawgs/node-poppler/commit/4cb22a1))
* docs(contributing): update conventional commit link to latest version ([628be8d](https://github.com/Fdawgs/node-poppler/commit/628be8d))

## 1.7.0 (2020-05-04)

* chore(deps-dev): bump coveralls from 3.0.11 to 3.1.0 ([305a8ab](https://github.com/Fdawgs/node-poppler/commit/305a8ab))
* chore(deps-dev): bump eslint-config-prettier from 6.10.1 to 6.11.0 ([bfd980d](https://github.com/Fdawgs/node-poppler/commit/bfd980d))
* chore(deps-dev): bump jest from 25.3.0 to 25.5.1 ([1ca14cd](https://github.com/Fdawgs/node-poppler/commit/1ca14cd))
* chore(deps-dev): bump jest from 25.5.1 to 25.5.2 ([751ad6b](https://github.com/Fdawgs/node-poppler/commit/751ad6b))
* chore(deps-dev): bump jest from 25.5.2 to 25.5.3 ([903f52f](https://github.com/Fdawgs/node-poppler/commit/903f52f))
* chore(deps-dev): bump jest from 25.5.3 to 25.5.4 ([6f2c310](https://github.com/Fdawgs/node-poppler/commit/6f2c310))
* chore(deps-dev): bump prettier from 2.0.4 to 2.0.5 ([ed89abd](https://github.com/Fdawgs/node-poppler/commit/ed89abd))
* chore(package): add prettier call to api gen script ([80d1cf1](https://github.com/Fdawgs/node-poppler/commit/80d1cf1))
* feat(lib): update poppler win32 binaries from 0.87.0 to 0.88.0 ([fa8c79b](https://github.com/Fdawgs/node-poppler/commit/fa8c79b))
* tests(package): add runinband option for jest cli ([d2bc559](https://github.com/Fdawgs/node-poppler/commit/d2bc559))

## 1.6.0 (2020-04-14)

* feat(index): add new savefile option to pdfdetach function ([c6c7d9c](https://github.com/Fdawgs/node-poppler/commit/c6c7d9c))
* feat(lib): add poppler 0.87.0 win32 binaries ([78c6200](https://github.com/Fdawgs/node-poppler/commit/78c6200))
* chore(index): repoint to new binaries ([b1ef39d](https://github.com/Fdawgs/node-poppler/commit/b1ef39d))
* chore(lib): remove old 0.84.0 win32 binaries ([400bb80](https://github.com/Fdawgs/node-poppler/commit/400bb80))
* build(deps-dev): bump jest from 25.2.7 to 25.3.0 ([217ed93](https://github.com/Fdawgs/node-poppler/commit/217ed93))

### 1.5.4 (2020-04-10)

* tests(index): add missing outputfile variable ([a094c19](https://github.com/Fdawgs/node-poppler/commit/a094c19))
* tests(index): add test pdf file with attached txt file ([a6842a2](https://github.com/Fdawgs/node-poppler/commit/a6842a2))
* tests(index): add tests for uncovered branches ([720eab9](https://github.com/Fdawgs/node-poppler/commit/720eab9))
* tests(index): use glob for post-test directory cleanup ([5d16e5a](https://github.com/Fdawgs/node-poppler/commit/5d16e5a))
* ci(travis): remove dupe-check step ([db1fcd6](https://github.com/Fdawgs/node-poppler/commit/db1fcd6))
* ci(travis): use linux for npm deploy ([dd113c3](https://github.com/Fdawgs/node-poppler/commit/dd113c3))
* chore(deps-dev): bump jest from 25.2.7 to 25.3.0 ([68a2b6c](https://github.com/Fdawgs/node-poppler/commit/68a2b6c))
* chore(deps-dev): bump prettier from 2.0.2 to 2.0.4 ([b5f57ca](https://github.com/Fdawgs/node-poppler/commit/b5f57ca))
* chore(package): add keywords ([1a15363](https://github.com/Fdawgs/node-poppler/commit/1a15363))
* chore(package): add runinband cli jest option ([2721e8c](https://github.com/Fdawgs/node-poppler/commit/2721e8c))
* chore(package): update dupe-check script ([3e8333c](https://github.com/Fdawgs/node-poppler/commit/3e8333c))
* fix(index): replace catch with then; move code inside resolve function ([95e6c5b](https://github.com/Fdawgs/node-poppler/commit/95e6c5b))
* build(deps-dev): add missing cross-env ([3a17904](https://github.com/Fdawgs/node-poppler/commit/3a17904))

### 1.5.3 (2020-04-04)

* chore(deps-dev): bump coveralls from 3.0.9 to 3.0.11 ([149b7dd](https://github.com/Fdawgs/node-poppler/commit/149b7dd))
* chore(deps-dev): bump eslint-config-prettier from 6.10.0 to 6.10.1 ([0b4623e](https://github.com/Fdawgs/node-poppler/commit/0b4623e))
* chore(deps-dev): bump eslint-plugin-import from 2.20.1 to 2.20.2 ([e5a4b15](https://github.com/Fdawgs/node-poppler/commit/e5a4b15))
* chore(deps-dev): bump jest from 25.1.0 to 25.2.7 ([5114f36](https://github.com/Fdawgs/node-poppler/commit/5114f36))
* chore(deps-dev): bump prettier from 1.19.1 to 2.0.2 ([73108e8](https://github.com/Fdawgs/node-poppler/commit/73108e8))
* chore(index): move description of function to jsdoc tag ([07b34cc](https://github.com/Fdawgs/node-poppler/commit/07b34cc))
* chore(package): add prettier call to changelog gen script ([a6c306a](https://github.com/Fdawgs/node-poppler/commit/a6c306a))
* chore(package): use test-only script when testing ([a7b0e40](https://github.com/Fdawgs/node-poppler/commit/a7b0e40))
* docs(contributing): grammar and spelling fixes ([3049a69](https://github.com/Fdawgs/node-poppler/commit/3049a69))
* docs(readme): correct section sizes ([c2cbb70](https://github.com/Fdawgs/node-poppler/commit/c2cbb70))
* refactor(index): remove options if statement; make each option arg obj ([20a33f3](https://github.com/Fdawgs/node-poppler/commit/20a33f3))
* test(pdfImages): add test for outputprefix arg ([61899b0](https://github.com/Fdawgs/node-poppler/commit/61899b0))
* fix(pdfImages): correct arg name to reflect purpose ([8162b2f](https://github.com/Fdawgs/node-poppler/commit/8162b2f))
* ci(travis): add npm deploy job ([df55316](https://github.com/Fdawgs/node-poppler/commit/df55316))
* ci(travis): add release tags to branch safelist ([74fce47](https://github.com/Fdawgs/node-poppler/commit/74fce47))

### 1.5.2 (2020-03-16)

* chore: update dependencies ([57cb710](https://github.com/Fdawgs/node-poppler/commit/57cb710))
* chore: update lockfile ([7df0325](https://github.com/Fdawgs/node-poppler/commit/7df0325))
* chore(deps-dev): bump eslint-config-airbnb-base from 14.0.0 to 14.1.0 ([8aed27d](https://github.com/Fdawgs/node-poppler/commit/8aed27d))
* chore(deps-dev): bump eslint-plugin-jest from 23.7.0 to 23.8.0 ([7d26ccd](https://github.com/Fdawgs/node-poppler/commit/7d26ccd))
* chore(deps-dev): bump eslint-plugin-jest from 23.8.0 to 23.8.1 ([cc71eef](https://github.com/Fdawgs/node-poppler/commit/cc71eef))
* chore(deps-dev): bump eslint-plugin-jest from 23.8.1 to 23.8.2 ([cb7f469](https://github.com/Fdawgs/node-poppler/commit/cb7f469))
* chore(deps-dev): bump eslint-plugin-json from 2.1.0 to 2.1.1 ([741c8ea](https://github.com/Fdawgs/node-poppler/commit/741c8ea))
* chore(deps-dev): bump typescript from 3.8.2 to 3.8.3 ([4e43b1f](https://github.com/Fdawgs/node-poppler/commit/4e43b1f))

### 1.5.1 (2020-02-21)

* chore: add .prettierignore ([e2be8a6](https://github.com/Fdawgs/node-poppler/commit/e2be8a6))
* chore(deps-dev): bump eslint-config-prettier from 6.9.0 to 6.10.0 ([41042d4](https://github.com/Fdawgs/node-poppler/commit/41042d4))
* chore(deps-dev): bump eslint-plugin-import from 2.20.0 to 2.20.1 ([02d5b82](https://github.com/Fdawgs/node-poppler/commit/02d5b82))
* chore(deps-dev): bump eslint-plugin-jest from 23.6.0 to 23.7.0 ([d55f696](https://github.com/Fdawgs/node-poppler/commit/d55f696))
* chore(deps-dev): bump eslint-plugin-json from 2.0.1 to 2.1.0 ([11fc2f2](https://github.com/Fdawgs/node-poppler/commit/11fc2f2))
* chore(deps-dev): bump typescript from 3.7.5 to 3.8.2 ([3f495a0](https://github.com/Fdawgs/node-poppler/commit/3f495a0))
* chore(deps-dev): bump jest from 24.9.0 to 25.1.0 ([9919085](https://github.com/Fdawgs/node-poppler/commit/9919085))
* chore(package): remove redundant config values ([cd38d9b](https://github.com/Fdawgs/node-poppler/commit/cd38d9b))
* chore(package): update prettier script to also format json and md ([3a5d842](https://github.com/Fdawgs/node-poppler/commit/3a5d842))
* ci(travis): fix build config ([ce2189f](https://github.com/Fdawgs/node-poppler/commit/ce2189f))
* docs: change string JSDoc param tags to enum where possible ([0cc3434](https://github.com/Fdawgs/node-poppler/commit/0cc3434))
* docs: minor clarifications ([374b774](https://github.com/Fdawgs/node-poppler/commit/374b774))

## 1.5.0 (2020-01-19)

* chore: bump typescript from 3.7.4 to 3.7.5 ([6f5230a](https://github.com/Fdawgs/node-poppler/commit/6f5230a))
* chore: increment minor version number ([b38cf5a](https://github.com/Fdawgs/node-poppler/commit/b38cf5a))
* chore: upgrade dependencies ([f15b8dc](https://github.com/Fdawgs/node-poppler/commit/f15b8dc))
* style: tidy whitespace ([8f4bd44](https://github.com/Fdawgs/node-poppler/commit/8f4bd44))
* docs: add changelog ([43c85d0](https://github.com/Fdawgs/node-poppler/commit/43c85d0))
* docs: add contributing guide ([ea71f0a](https://github.com/Fdawgs/node-poppler/commit/ea71f0a))
* docs: add contributing section ([8667834](https://github.com/Fdawgs/node-poppler/commit/8667834))
* docs: add links to node.js and yarn ([4eda8ca](https://github.com/Fdawgs/node-poppler/commit/4eda8ca))
* docs: add Linux support section ([2c331db](https://github.com/Fdawgs/node-poppler/commit/2c331db))
* docs: add pdfImages function ([fba0644](https://github.com/Fdawgs/node-poppler/commit/fba0644))
* docs: fix link to issues path ([bb76b79](https://github.com/Fdawgs/node-poppler/commit/bb76b79))
* docs: tidy punctuation ([aa0c482](https://github.com/Fdawgs/node-poppler/commit/aa0c482))
* docs: update README.md ([9017e54](https://github.com/Fdawgs/node-poppler/commit/9017e54))
* docs(pdfImages): add note about outputPath param ([8a83820](https://github.com/Fdawgs/node-poppler/commit/8a83820))
* fix(pdfImages): add if statement for outputPath param ([acd0277](https://github.com/Fdawgs/node-poppler/commit/acd0277))
* test(pdfImages): add pdfImages function tests ([fea63cf](https://github.com/Fdawgs/node-poppler/commit/fea63cf))
* feat: add changelog generation ([b310b67](https://github.com/Fdawgs/node-poppler/commit/b310b67))
* feat(pdfImages): add pdfImages function ([48beb2d](https://github.com/Fdawgs/node-poppler/commit/48beb2d))
