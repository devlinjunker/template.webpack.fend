/**
 * @flow
 */
import sinon from 'sinon';
import chai from 'chai';
import sinonChai from 'sinon-chai';

import LocalStorageService from './localStorage.service';

chai.use(sinonChai);
const sandbox = sinon.createSandbox();
const expect = chai.expect;

describe('LocalStorage.service', () => {

  afterEach(() => {
    sandbox.restore();
  });

  describe('#save', () => {

    it('should use local storage to save value with key', () => {
      sandbox.spy(localStorage, 'setItem');

      LocalStorageService.save({
        key: 'test',
        val: 'val',
      });

      expect(localStorage.setItem).to.be.called;
      // TOOD: Check parameters
    });

    it('should stringify objects before saving them');

    it('should be able to retrieve value using key wtih #get');
  });

  describe('#get', () => {

    it('should retrieve value from local storage using key');

    it('should throw error if requesting key with no value assigned');

  });
});
