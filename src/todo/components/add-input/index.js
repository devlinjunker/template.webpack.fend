/**
 * @flow
 */
// $FlowFixMe  (Flow doesn't like importing html files)
import template from './partial.html';

const component = function(addHandler: Function) {
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


export default component;
