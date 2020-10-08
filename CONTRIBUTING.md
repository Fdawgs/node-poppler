# Contributing

Contributions are welcome and any help that can be offered is greatly appreciated.
Please take a moment to read the entire contributing guide.

This repository uses the [Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow),
meaning that development should take place in `feat/` branches, with the `master` branch kept in a stable state.
When you submit pull requests, please make sure to fork from and submit back to `master`.

Other processes and specifications that are in use in this repository are:

-   [Semantic versioning](https://semver.org/)
-   [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) following the @commitlint/config-conventional config
-   [Prettier](https://prettier.io/) style guide

## Getting Started

This repository requires that you have [Node.js](https://nodejs.org) and [Yarn](https://yarnpkg.com) installed.

With those in place, you can fork the repository, clone it, and then run `yarn install` to install all development dependencies.

### Development Workflow

After cloning and installing all the dependencies, there are several commands available for local development:

-   `yarn lint` - Lints everything in src directory
-   `yarn test-only` - Runs Jest over all tests in src directory
-   `yarn test` - Runs `yarn lint` and `yarn test-only` together

### Production Workflow

-   `yarn start` - Runs a production version. No live reload.

## Pull Request Checklist

Prior to submitting a pull request back to the main repository, please make sure you have completed the following steps:

1. Pull request base branch is set to `master`. All pull requests should be forked from and merged back to `master`
2. Run `yarn test-only` to check the code adheres to the defined style and that it passes the Jest tests
3. Run `yarn prettier` to run the Prettier code formatter over the code

## Release process

When cutting a release, the following steps need to be performed:

1. Create a release branch with the convention `release/x.x.x`
2. `package.json` needs to have a version update based on the content being released, remembering to adhere to semantic versioning
3. Generate the API docs if any changes have been made with `yarn doc`
4. Generate the changelog with `yarn changelog`
5. Create a tag for the version; the naming convention is the version (vx.x.x)
6. Push the tag to the repository
7. Draft a release in the release tab with release notes, copying the notes from the changelog

## Issues

Please file your issues [here](https://github.com/Fdawgs/node-poppler/issues) and try to provide as much information in the template as possible/relevant.
