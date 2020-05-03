/**
 * @flow
 */
import LocalStorageHelper from './local-storage.helper';

describe('local-storage.helper', function() {

  describe('#save', function() {

    it('should use local storage to save value with key', function() {
      sandbox.spy(localStorage, 'setItem');
      const key = 'test';
      const val = 'val';

      LocalStorageHelper.save({
        key: 'test',
        val: 'val',
      });

      expect(localStorage.setItem).to.be.called;
      expect(localStorage.setItem.args[0][0]).to.equal(key);
      expect(localStorage.setItem.args[0][1]).to.equal(val);
    });

    it('should stringify objects before saving them', function() {
      sandbox.spy(localStorage, 'setItem');

      const val = {
        test: 123
      };
      LocalStorageHelper.save({
        key: 'abc',
        val
      });

      const stringified = JSON.stringify(val);
      expect(localStorage.setItem.args[0]).to.include(stringified);
    });

    it('should be able to retrieve value using key with #get', function() {
      const val = 'test';
      const key = 'abc';

      LocalStorageHelper.save({
        key,
        val
      });

      const saved = LocalStorageHelper.get({
        key
      });

      expect(saved).to.equal(val);
    });
  });

  describe('#get', function() {

    it('should retrieve value from local storage using key', function() {
      sandbox.stub(localStorage, 'getItem').returns('abc');
      const key = 'test';

      LocalStorageHelper.get({
        key
      });

      expect(localStorage.getItem).to.be.called;
      expect(localStorage.getItem.args[0][0]).to.equal(key);
    });

    it('should return object if object stored', function() {
      const key = 'abc';
      const val = {
        test: 123
      };
      LocalStorageHelper.save({
        key,
        val
      });

      const returned = LocalStorageHelper.get({ key });
      expect(returned).to.deep.equal(val);
    });

    it('should throw error if requesting key with no value assigned', function() {
      const key = 'unused_123_abc';

      expect(() => {
        LocalStorageHelper.get({ key });
      }).to.throw();
    });
  });
});
