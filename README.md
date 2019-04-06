# LocalStorage DB App

Example application for practicing webpack builds and adding plugins or other build tools


## Dependencies
Node v6+ and npm

See [package.json]() for full list of current dependencies
 - Webpack + Loaders
 - Babel
 - ESLint
 - Webpack Dev Server
 - Mocha, Chai, Sinon
 - Karma


### Dev/Tests/Running

`npm run dev-watch` to run the webpack development server and watch for changes on the files to reload

`npm run dev` to run a development version of the application

`npm run test` to run all of the unit tests for the application

`npm run test-watch` to run Karma + Mocha and all of the tests associated with the project and watch for changes on the files to re-run the tests

`npm run watch` to run Mocha and watch for changes while also starting the Webpack dev server that will recompile the project and reload the webpage on file changes

`npm run build` ... TO DO: compile application to production version

`npm run clean` ... TO DO: clean the workspace

### TODO
 - [x] Install Dev Dependencies
 - [x] (^) Webpack config
 - [x] (^) Karma
 - [x] (^) Include eslint in test-watch?
 - [x] (^) Combined build and test watch
 - [..] (^) Setup Mocha
 - [ ] (-) package.json main script (install/run application and open browser)
 - [ ] (-) clean output from watch script
 - [ ] (v) parameterize directories in package.json scripts?
  - [ ] better npm script?

**Application**
 - [..] Local Storage DataService
 - [ ] Controller/Component for saving/retrieving stored vals
 - [ ] Interface for displaying vals
