# LocalStorage DB App

Example application for practicing webpack builds and adding plugins or other build tools.

Simple web interface for storing values in the Browser Local Storage.


## Dependencies
Node v6+ and npm

See [package.json]() for full list of current dependencies
 - Webpack + Loaders
 - Babel
 - FlowJS
 - ESLint
 - Webpack Dev Server
 - Mocha, Chai, Sinon
 - Karma
 - EsDoc


### Dev/Tests/Running


`npm run start-watch` to run Karma + Mocha and watch for changes while also opening the Webpack dev server that will recompile the project and reload the webpage on file changes on http://localhost:3000

`npm run test-watch` to run Karma + Mocha and all of the tests associated with the project and watch for changes on the files to re-run the tests

`npm run dev-watch` to run the only webpack development server and watch for changes on the files to reload

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
 - [ ] (^) karma/mocha unit test debugging (with atom?)
 - [ ] (-) production configuration for webpack
 - [ ] (-) Basic UI Framework (Bootstrap? Foundation?)
    - Minimize?
    - No Warnings? No output in tests?
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

**Questions**
 - PostCSS vs CSS-Loader?
