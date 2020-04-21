# Basic Webpack App

Example Browser application using webpack build.

**Demo:**
 - Simple web interface for storing values in the Browser Local Storage.


## Dependencies
Node v12+ and npm

See [package.json](https://github.com/devlinjunker/template.webpack.fend/blob/master/package.json) for full list of current dependencies
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
2. Create HTML files in `src/`
3. Add javascript files and reference in `src/entry.js` to run up your application
    - add additional javascript entry points in webpack.config.js
4. Add to `src/index.html` to define your html structure
   - add more html files and reference them in webpack.config.js
5. Use `npm run start-watch` to compile and run dev server + tests in watch mode
6. Navigate http://localhost:3030/ to see a development version of your web app
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

**TODO**

`npm run build-prod` ... TODO: create prod config

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
 - [x] (^) Demo app in docs
 - [x] (^) Move js to `src/app`
 - [x] (^) Fix single build process (args/if statement in webpack)
 - [x] (^) Update linting rules
      - with descturing/filenames/naming conventions? https://github.com/devlinjunker/JS.Fun/tree/master/play/test.eslint#eslint-exploration
      - testing rules
      - naming conventions?
 - [ ] ~~(^) Absolute Paths~~
 - [x] (^) Update Node Version to v10
 - [x] (^) Update Dependencies
 - [x] (^) Different Folders for examples
 - [..] (^) Base CSS Style for all apps:
      - ~~https://andybrewer.github.io/mvp/~~
        - just remember this one for the future if need a splash screen for company/product/webapp
        - want a more flexible framework for future
      - [ ] Clearing/standardizing browser css
 - [ ] (^) Github Actions ----->> Build doc on commit to master <<-----
 - [ ] (^) HTML Page with important stuff
   - header/tags
   - [ ] template for all pages?
 - [ ] (^) HTML Linting
 - [ ] (^) CSS Linting
 - [ ] (^) Madge?
 - [ ] (^) Manual in Docs
 - [ ] CSS Frameworks
   - [ ] PostCSS?
   - [ ] css variables?
   - [ ] Tailwind - integrates with javascript
   - [ ] bulma https://bulma.io/documentation/overview/start/
   - [ ] Bootstrap? Foundation? -- probably not
 - [ ] (^) Configuration File
 - [ ] (^) Githooks
 - [ ] (^) If running in development -> console errors/warnings appear in UI bubble
 - [..] Helpers
   - ~~Localstorage~~
   - Performance Loggers (start/end/post to api? file?)
   - Internal API Helper
   - External API Helper?
 - [ ] (^) Basic UI Framework
    - [ ] Backbone?
    - [ ] Vue?
    - [ ] React?
    - [ ] Aurelia
 - [ ] (-) Mock API requests on localhost
    - Contract testing? https://docs.pact.io/
    - OpenAPI validation of mocks? https://bitbucket.org/atlassian/swagger-mock-validator/src/master/
 - [ ] (-) production configuration for webpack
    - Minimize?
    - No Warnings? No output in tests?
 - [ ] (-) cleaner output from watch script?
 - [ ] (v) Cypress UI Testing?
 - [ ] (v) Serve docs with small script and `npm run doc-serve`
 - [ ] (v) package.json main script
    - (install/run application and open browser? or just point to entry or AppController?)
 - [ ] (v) parameterize directories in package.json scripts?
    - better npm script?

**Application**
 - [x] Local Storage DataService
 - [x] Controller/Component for saving/retrieving stored vals
 - [x] Interface for displaying vals
 - [ ] Weather/Other Free API
 - [ ] Redux Example (w/o React)
 - [ ] React Example
   - [ ] Notebook App
     - [ ] Daily Scratchpad
     - [ ] Save/Read Github Gists
       - https://developer.github.com/v3/gists/#list-gists-for-the-authenticated-user
     - [ ] Github Readmes in my repos and save with commit
     - [ ] Sorting Notes
       - A-Z
       - Date Created?
       - Date Modified
       - Custom (with dragging)
     - [ ] Font Size
     - [ ] Tagging
       - drag to tag
       - multiple tags per note
       - shift+click on tags section to filter notes
 - [ ] GraphQL Example
 - [ ] Websocket?

## Notes/Ideas
 - PostCSS vs CSS-Loader?
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
    - When should we vs static webpages? React/React Static?
 - Backbone for UI? Seems simpler than react? Doesn't rely/revolve around instant response to interaction
 - [ ] GraphQL
