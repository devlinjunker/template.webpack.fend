/**
 * @flow
 */
import LocalStorageService from './localStorage.service';

/**
 * [AppController description]
 */
class AppController {
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
  }

  /**
   * saves the value at the provided key
   * @return {void}
   */
  save() {
    // Get key and value from ui
    const key = this.keyInput.value;
    const val = this.valInput.innerText;

    // save with local storage
    LocalStorageService.save({ key, val });

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
    const val = LocalStorageService.get({ key });

    // display value to user
    this.valInput.innerText = val;
  }
}

export default AppController;
