# Basic Webpack Example LocalStorage DB App

Example application for practicing webpack builds and adding plugins or other build tools.

Simple web interface for storing values in the Browser Local Storage.


## Dependencies
Node v6 and npm

See [package.json](https://github.com/devlinjunker/basic.webpack/blob/master/package.json) for full list of current dependencies
 - Webpack + Loaders
 - Babel
 - FlowJS
 - ESLint
 - Webpack Dev Server
 - Mocha, Chai, Sinon
 - Karma
 - EsDoc


## Development

How to use this template to create a basic Frontend Application:

1. Download template and update dependencies
2. Create application in `src/`
3. Modify `src/entry.js` to start up your application
4. Update `src/index.html` with HTML structure


### Tests/Running

`npm run start-watch` to run Karma + Mocha and watch for changes while also opening the Webpack dev server that will recompile the project and reload the webpage on file changes on http://localhost:3000

`npm run test-watch` to run Karma + Mocha and all of the tests associated with the project and watch for changes on the files to re-run the tests

`npm run dev-watch` to run the only webpack development server and watch for changes on the files to reload

`npm run test-dev` to start the unit test runner for debugging unit tests in the browser

`npm run test` to run all of the unit tests for the application one time

`npm run dev` to run a development version of the application

`npm run doc` to generate static documentation in the doc folder

**TODO**

`npm run build` ... TODO: compile application to production version

`npm run clean` ... TODO: clean the workspace



### TODO
 - [x] Install Dev Dependencies
 - [x] (^) Webpack config
 - [x] (^) Karma
 - [x] (^) Include eslint in test-watch?
 - [x] (^) Combined build and test watch
 - [x] (^) Setup Mocha
    - [x] (-) Setup global test objects
 - [x] (^) Karma webpack integration (for tests in browser)
    - [x] (^) Use rebuilt bundle when running tests
 - [x] (^) Flowtype eslint plugin
 - [x] (-) Setup EsDoc
    - [ ] (v) run doc before commit?
 - [x] ~~(-) Prettier for autofix~~ (just use eslint atom plugin with fix)
 - [x] (^) karma/mocha unit test debugging ~~(with atom?)~~ in browser
 - [ ] (^) Demo app in docs
 - [ ] (^) Move js to `src/js`
 - [ ] (^) Update linting rules with descturing/filenames/naming conventions? https://github.com/devlinjunker/JS.Fun/tree/master/play/test.eslint#eslint-exploration
 - [ ] (^) Update Node Version to v10
 - [ ] (^) Update Dependencies
 - [ ] (-) production configuration for webpack
    - Minimize?
    - No Warnings? No output in tests?
 - [ ] (-) Basic UI Framework (Bootstrap? Foundation?)
 - [ ] (-) cleaner output from watch script?
 - [ ] (-) css variables?
 - [ ] (v) Cypress UI Testing?
 - [ ] (v) package.json main script
    - (install/run application and open browser? or just point to entry or AppController?)
 - [ ] (v) parameterize directories in package.json scripts?
    - better npm script?

**Application**
 - [x] Local Storage DataService
 - [x] Controller/Component for saving/retrieving stored vals
 - [x] Interface for displaying vals

## Notes/Ideas
 - PostCSS vs CSS-Loader?
 - Use LocalStorage to configure which demos are showing in application (if adding: login / task list / server integration)
 - Why hold much state/data in UI rather than display from server on page load?
    - Pros:
      - Speed for user (when results can be preloaded)
      - Saves money in server computation costs to create UI/remember state
    - Cons:
      - Lots of bandwidth to deliver Single Page App
      - Can be slower when building large UI after data call
    - Overall: Save state/preload data in client to improve user experience. Use server for speed
      - Use client when small objects can be stored/edited and returned
      - Use server for displayed only data
    - Redux for sharing state between client/server
