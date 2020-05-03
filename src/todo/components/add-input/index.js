/**
 * @flow
 */
import template from './partial.html';

/**
 * Add Input Component Type
 * @type {AddInputComponent}
 */
export type AddInputComponent = {
  getValue: Function;
  focusClear: Function
};

/**
 * AddInput Component Factory that creates DOM element and binds handlers
 * @param {Function} addHandler handler when 'add' button is pressed
 * @return {AddInputComponent} Add input component
 */
function addInputComponentFactory(addHandler: Function): AddInputComponent {
  const temp = document.createElement('div');
  temp.innerHTML = template();

  const input = (temp.querySelector('.add-input'): any);
  input.onkeypress = (event) => {
    if (event.keyCode === 13) {
      addHandler();
    }
  };
  (temp.querySelector('.add-button'): any).onclick = addHandler;

  const ret: any = temp.firstChild;
  ret.getValue = () => {
    return input.value;
  };

  ret.focusClear = () => {
    input.value = '';
    input.focus();
  };

  return ret;
};


export default addInputComponentFactory;
