/**
 * @flow
 */

/**
 * DataService Class for Storing
 */
export default class LocalStorageService {

  /**
   * Saves the value at the key provided in the Browser local storage
   *
   * @returns {string} key
   */
  static save({ key, val } : { key: string, val: any }) {

    localStorage.setItem(key, val);
  }

  static get({ key } : { key: string }) {
    console.log(key + 3);
    return key;
  }
}
