# Testing
We can run a single run of all unit tests in the application with `npm run test`. This starts [Karma](https://karma-runner.github.io/latest/index.html)
using the `karma.conf.js` file([github](https://github.com/devlinjunker/template.webpack.fend/blob/master/karma.conf.js))

This file defines:
 - the testing framework we use ([mocha](https://mochajs.org/))
 - the test bootstrap entry point([github](https://github.com/devlinjunker/template.webpack.fend/blob/master/test/test.bootstrap.js))
 - The browser launchers that we use to run the Unit Tests (chrome)
 - The log level to display
 - Imports webpack config so we can also run the test and dev server if we use `npm run start-watch`

.  
The testing bootstrap file finds all of the test files and imports global objects that can be used in all tests to simplify each test file. It also creates a sinon Sandbox that is reset before each test for mocking/stubbing services and non-tested functions in the test context.

Global Imports (available in all `.spec` files):
 - `sinonSandbox` from [Sinon](https://sinonjs.org/)
 - `expect` from [Chai](https://www.chaijs.com/)
 - TODO: `describe`/`it`/`beforeEach` from [Mocha](https://mochajs.org/)


## Notes/Ideas
 - [ ] Cypress UI
 - [ ] Mock API requests?
