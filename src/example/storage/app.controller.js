/**
 * @flow
 */
import LocalStorageHelper from '../../helpers/local-storage.helper';
import './app.scss';
/**
 * Controller for the application
 */
class StorageAppController {
  keyInput: any;
  valInput: any;

  /**
   * Set up the app, generate html and set up event handlers
   */
  constructor() {
    // TODO: Set up HTML from Template?
    this.keyInput = document.getElementById('key-input');
    this.valInput = document.getElementById('value-input');

    document.getElementsByClassName('save-btn')[0].onclick = this.save.bind(this);
    document.getElementsByClassName('get-btn')[0].onclick = this.view.bind(this);

    document.getElementsByClassName('clear-value-btn')[0].onclick = this.clearValue.bind(this);
  }

  /**
   * saves the value at the provided key
   * @return {void}
   */
  save() {
    // Get key and value from ui
    const key = this.keyInput.value;
    const val = this.valInput.value;

    // save with local storage
    LocalStorageHelper.save({ key, val });

    // TODO: display message to user
  }

  /**
   * retrieves a value using the provided key
   * @return {String} value retrieved from local storage with key
   */
  view() {
    // get key from ui
    const key = this.keyInput.value;

    // get from local storage
    const val = LocalStorageHelper.get({ key });

    // display value to user
    this.valInput.value = val;
  }

  /**
   * Clear the value input element of text
   * @return {void}
   */
  clearValue() {
    this.valInput.value = '';
  }
}

export default StorageAppController;
