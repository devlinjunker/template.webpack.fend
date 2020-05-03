/**
 * @flow
 */
// $FlowFixMe  (Flow doesn't like importing html files)
import template from './partial.html';
import './partial.css';
import Todo from '../../models/todo.model';

/**
 * Renders the Todo Item from the template file
 * @param  {Todo} todo todo item to be rendered
 * @param {Function} removeHandler handler method for when remove icon is clicked on todo
 * @param {Function} toggleCompleteHandler handler method for when completion toggle is clicked
 * @return {html}      html rendered with data from todo item
 */
export default function(todo: Todo, removeHandler: Function, toggleCompleteHandler: Function) {
  const temp = document.createElement('div');
  temp.innerHTML = template(todo);

  (temp.querySelector('input[type=checkbox]'): any).onclick = () => {
    toggleCompleteHandler(todo);
  };
  (temp.querySelector('.remove-icon'): any).onclick = removeHandler;

  return temp.firstChild;
}
