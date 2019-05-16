import sinon from 'sinon';
import chai from 'chai';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);
global.expect = chai.expect;
global.sandbox = sinon.createSandbox();

// $FlowFixMe
const testsContext = require.context('../src', true, /.spec$/);

testsContext.keys().forEach(testsContext);
