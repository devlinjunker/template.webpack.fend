/* eslint-disable no-undef, import/no-named-as-default-member */
import sinon from 'sinon';
import chai from 'chai';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);
global.expect = chai.expect;
global.sandbox = sinon.createSandbox();


// TODO: update the require.context based on command line arg to specify file name(s?)

// require.context() is a webpack feature
// see https://webpack.js.org/guides/dependency-management/#requirecontext
// $FlowFixMe
const testsContext = require.context('../src', true, /.spec$/);

testsContext.keys().forEach(testsContext);

/* eslint-disable mocha/no-top-level-hooks,mocha/no-hooks-for-single-case */
afterEach(function() {
  sandbox.restore();
});
