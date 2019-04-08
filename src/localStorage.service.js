/**
 * @flow
 */
import _ from 'lodash';

/**
 * DataService Class for Storing Values in the LocalStorage in the browser
 */
export default class LocalStorageService {

  /**
   * Saves the value at the key provided in the browser localStorage
   *
   * @returns {undefined} undefined
   */
  static save({ key, val }: { key: string, val: any }) {
    if (!_.isString(val)) {
      val = JSON.stringify(val);
    }

    localStorage.setItem(key, val);
  }

  /**
   * Retrieves a value stored at the key in browser LocalStorage

   * @returns {string | object} the value stored at the key in the LocalStorage
   */
  static get({ key }: { key: string }): string | Object {
    const val = localStorage.getItem(key);

    if (val === undefined || val === null) {
      throw new Error();
    }

    try {
      const parsed = JSON.parse(val);
      return parsed;
    /* eslint-disable */
    } catch (e) {}

    return val;
  }
}
