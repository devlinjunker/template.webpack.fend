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


### Dev/Tests/Running

`npm run dev-watch` to run the webpack development server and watch for changes on the files to reload

`npm run dev` to run a development version of the application

`npm run test` to run all of the unit tests for the application

`npm run test-watch` ... TODO: fix

`npm run build` ... TO DO: compile application to production version


### TODO
 - [x] Install Dev Dependencies
 - [ ] (^) Webpack config
 - [ ] (^) Include eslint in test-watch?
 - [ ] (^) Combined build and test watch
 - [ ] (^) Setup Mocha
 - [ ] (-) package.json main script (install/run application and open browser)
 - [ ] (v) parameterize directories in package.json scripts?
  - [ ] better npm script?

**Application**
 - [ ] Local Storage DataService
 - [ ] Controller/Component for saving/retrieving stored vals
 - [ ] Interface for displaying vals
