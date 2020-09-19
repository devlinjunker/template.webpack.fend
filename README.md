---
version: 0.8.0-SNAPSHOT
---

[![GitHub License](https://img.shields.io/github/license/devlinjunker/template.webpack.fend)](https://github.com/devlinjunker/template.webpack.fend/blob/master/LICENSE)
[![GitHub last commit](https://img.shields.io/github/last-commit/devlinjunker/template.webpack.fend)](https://github.com/devlinjunker/template.webpack.fend/commits/master)

![![CII Best Practices Summary](https://img.shields.io/cii/summary/4287?label=core-infrastructure)](https://bestpractices.coreinfrastructure.org/en/projects/4287)


# Template Webpack FEND App

## Intro

Template and Example using Webpack to build a FEND Browser App (with HTML/CSS/JS and Image files).

**Demo:**
 - Simple web interface for storing values in the Browser Local Storage.


## Dependencies/Frameworks
Node v12+ and npm

See package.json([github](https://github.com/devlinjunker/template.webpack.fend/blob/master/package.json))
for full list of current dependencies
 - [Webpack](https://webpack.js.org/) + [Loaders ](https://webpack.js.org/concepts/loaders/)-- managing the build process
 - [Babel](https://babeljs.io/) -- compiling newer ECMA2016+ into browser-capable javascript
 - [FlowJS](https://flow.org/) -- adding types to javascript
 - [ESLint](http://eslint.org/) -- enforcing javascript code style
 - [Webpack Dev Server](https://github.com/webpack/webpack-dev-server)-- rapid development with hot reloading
 - [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/), and [Sinon](https://sinonjs.org/) -- unit testing
 - [Karma](https://karma-runner.github.io/) -- managing tests in different browsers
 - [EsDoc](https://esdoc.org/) -- creating easy javascript documentation
 - [PostCSS](https://postcss.org/) -- parsing and compiling css files
 - [HTMLHint](https://github.com/htmlhint/HTMLHint) -- parsing and enforcing HTML standards
 - [Tailwind](https://tailwindcss.com/) - Utility-first CSS Framework
 - [Zondicons](http://www.zondicons.com) - Free SVG Icon Library
 - [Handlebars](http://handlebarsjs.com/) - HTML Templating Engine


## Quick Setup/Run

How to use this template to create a basic Frontend Application:

1. Download template and update dependencies
2. Create HTML files in `src/`
    - add HtmlWebpackPlugin instances for each new output page in webpack.config.js
    - add svg icons with `@svg()` using custom svg-pre-loader
3. Add javascript files and reference in `src/entry.js`  (for up your application
    - add additional javascript entry points in webpack.config.js
    - create handlebars partials and import then add to DOM
4. Add CSS files to `src` and import in javascript
   - or install CSS libraries with npm and import
5. Use `npm run start-watch` to compile and run dev server + tests in watch mode
   - or `npm run start-dev` to run the dev server and reload on changes
6. Navigate http://localhost:3030/ to see a development version of your web app with Hot reloading
   - or http://localhost:3030/docs/ to see the documentation


### Tests/Running

`npm run start-watch` to run Karma + Mocha and watch for changes while also opening the Webpack dev server that will recompile the project and reload the webpage on file changes on http://localhost:3030

`npm run test-watch` to run Karma + Mocha and all of the tests associated with the project and watch for changes on the files to re-run the tests

`npm run dev-watch` to run the only webpack development server and watch for changes on the files to reload

`npm run test-dev` to start the unit test runner for debugging unit tests in the browser

`npm run test` to run all of the unit tests for the application one time

`npm run lint` to run the linter on src directory

`npm run build` compile application to public directory

`npm run doc` to generate static documentation in the doc folder

`npm run doc-image` to update sourcemap image and static documentation in the doc folder

**TODO**

`npm run build-prod` ... TODO: create prod config

`npm run clean` ... TODO: clean the workspace

## Links

- [Code of Conduct](CODE_OF_CONDUCT.md)
- [Contribute](CONTRIBUTING.md)
- [Doc Site](https://devlinjunker.github.io/template.webpack.fend/)
- [Wiki](https://github.com/devlinjunker/template.webpack.fend/wiki)
- [Notes]()

## Contributors

- [Devlin Junker (Me!)](mailto:devlinjunker@gmail.com)


 - [ ] Update README and Links with project specific details
   - Badges
   - Fix LInks
 - [ ] Update Contributing Info File