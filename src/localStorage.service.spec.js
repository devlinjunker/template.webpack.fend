/**
 * @flow
 */
import LocalStorageService from './localStorage.service';

describe('LocalStorage.service', () => {

  describe('#save', () => {

    it('should save value to local storage', () => {
      // spy Local storage

      LocalStorageService.save({
        key: '',
        val: '',
      });

      // expect spy called
    });

    it('should be able to retrieve value wtih #get');
  });

  describe('#get', () => {

    it('should throw error if requesting key with no value');

  });
});
