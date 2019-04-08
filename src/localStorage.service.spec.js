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
      const key = 'test';
      const val = 'val';

      LocalStorageService.save({
        key: 'test',
        val: 'val',
      });

      expect(localStorage.setItem).to.be.called;
      expect(localStorage.setItem.args[0][0]).to.equal(key);
      expect(localStorage.setItem.args[0][1]).to.equal(val);
    });

    it('should stringify objects before saving them', () => {
      sandbox.spy(localStorage, 'setItem');

      const val = {
        test: 123
      };
      LocalStorageService.save({
        key: 'abc',
        val
      });

      const stringified = JSON.stringify(val);
      expect(localStorage.setItem.args[0]).to.include(stringified);
    });

    it('should be able to retrieve value using key with #get', () => {
      const val = 'test';
      const key = 'abc';

      LocalStorageService.save({
        key,
        val
      });

      const saved = LocalStorageService.get({
        key
      });

      expect(saved).to.equal(val);
    });
  });

  describe('#get', () => {

    it('should retrieve value from local storage using key', () => {
      sandbox.stub(localStorage, 'getItem').returns('abc');
      const key = 'test';

      LocalStorageService.get({
        key
      });

      expect(localStorage.getItem).to.be.called;
      expect(localStorage.getItem.args[0][0]).to.equal(key);
    });

    it('should return object if object stored', () => {
      const key = 'abc';
      const val = {
        test: 123
      };
      LocalStorageService.save({
        key,
        val
      });

      const returned = LocalStorageService.get({ key });
      expect(returned).to.deep.equal(val);
    });

    it('should throw error if requesting key with no value assigned', () => {
      const key = 'unused_123_abc';

      expect(() => {
        LocalStorageService.get({ key });
      }).to.throw();
    });
  });
});
