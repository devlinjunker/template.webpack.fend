/**
 * @flow
 */
// $FlowFixMe  (Flow doesn't like importing html files)
import template from './partial.html';
import './partial.css';
import Todo from '../../models/todo.model';

/**
 * Todo Component type
 * @type {TodoComponent}
 */
export type TodoComponent = {
};

/**
 * Todo Component Factory that creates DOM element and binds handlers
 * @param  {Todo} todo todo item to be rendered
 * @param {Function} removeHandler handler method for when remove icon is clicked on todo
 * @param {Function} toggleCompleteHandler handler method for when completion toggle is clicked
 * @return {TodoComponent}      DOM element with data rendered from todo item
 */
function todoComponentFactory(
  todo: Todo,
  removeHandler: Function,
  toggleCompleteHandler: Function
): TodoComponent
{
  const temp = document.createElement('div');
  temp.innerHTML = template(todo);

  (temp.querySelector('input[type=checkbox]'): any).onclick = () => {
    toggleCompleteHandler(todo);
  };
  (temp.querySelector('.remove-icon'): any).onclick = removeHandler;

  return temp.firstChild;
}

export default todoComponentFactory;
