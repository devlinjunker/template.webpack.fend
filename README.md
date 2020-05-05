# Template Webpack FEND App

Template and Example using Webpack to build a FEND Browser App (with HTML/CSS/JS and Image files).

**Demo:**
 - Simple web interface for storing values in the Browser Local Storage.


## Dependencies
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


## Development

How to use this template to create a basic Frontend Application:

1. Download template and update dependencies
2. Create HTML files in `src/`
    - add HtmlWebpackPlugin instances for each new output page in webpack.config.js
3. Add javascript files and reference in `src/entry.js`  (for up your application
    - add additional javascript entry points in webpack.config.js
4. Add CSS files to `src` and import in javascript
   - or install CSS libraries with npm and import
   - or reference in HTML template?
5. Use `npm run start-watch` to compile and run dev server + tests in watch mode
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
 - [x] (^) HTML Page with important stuff
   - header/tags
 - [x] (^) Github Actions ----->> Build doc on commit to master <<-----
 - [x] (^) HTML Linting?
   - https://github.com/htmlhint/HTMLHint
   - Took some finagling to get this to work during watch process
 - [x] Clearing/standardizing browser css
   - Normalize CSS http://nicolasgallagher.com/about-normalize-css/
 - [..] PostCSS?
   - ecosystem of parsing css files
   - [..] (^) CSS Linting
      - stylelint
      - bem linting? https://github.com/postcss/postcss-bem-linter#stylelint-plugin
   - [x] css variables/hierarchy?
      - https://github.com/jonathantneal/precss
    - autoprefixer for making css look cleaner (browser prefixes don't need to be added)
    - list all selectors used: https://github.com/davidtheclark/list-selectors
 - [x] (^) Madge?
 - [x] (^) Manual in Docs
 - [..] (^) HTML template example
   - webpack/lodash style? https://github.com/emaphp/underscore-template-loader
   - handlebars?
      - seems like this isn't the best for javascript components, although it will work for this basic repo
      - problems with handlebar-webpack-plugin and webpack-dev-server
   - [..] Components (javascript methods that return compiled html, has params for template variables)
 - [x] (^) Base CSS Style for all apps
 - [x] (^) CSS Framework
   - [x] Tailwind - integrates with javascript
 - [ ] (^) Styleguide
    - Page in docsite
    - Examples: http://styleguides.io/examples.html
      - http://codeforamerica.clearleft.com/#
    - Fractal? https://github.com/adamlindqvist/fractal-webpack-plugin
 - [ ] (^) Githooks
 - [ ] (^) Configuration File
 - [ ] (^) If running in development -> console errors/warnings appear in UI bubble
 - [..] Helpers
   - ~~Localstorage~~
   - Performance Loggers (start/end/post to api? file?)
   - Internal API Helper
   - External API Helper?
 - [ ] Accessibility Linting
    - https://github.com/pa11y/pa11y
    - ASLint
    - https://www.24a11y.com/2017/reacts-accessibility-code-linter/
 - [ ] Basic UI Framework (other repos?)
    - [ ] Backbone?
    - [ ] Vue?
    - [ ] React?
    - [ ] Aurelia
  - [ ] Fork of this Repo with different directories for each css framework?
    - [ ] bulma https://bulma.io/documentation/overview/start/
    - [ ] Bootstrap?
    - [ ] Foundation?
    - [ ] Material Design?
 - [ ] (-) Mock API requests on localhost
    - Contract testing? https://docs.pact.io/
    - OpenAPI validation of mocks? https://bitbucket.org/atlassian/swagger-mock-validator/src/master/
 - [ ] (-) production configuration for webpack
    - Improve build speed in develop https://webpack.js.org/guides/build-performance/
    - Build caching https://webpack.js.org/guides/caching/
    - Minimize?
    - No Warnings? No output in tests?
    - CSS Generated to File and included at top of HTML
    - Accessibility validation?
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
