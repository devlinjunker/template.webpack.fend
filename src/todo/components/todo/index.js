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
 * @return {html}      html rendered with data from todo item
 */
export default function(todo: Todo, removeHandler: Function) {
  const temp = document.createElement('div');
  temp.innerHTML = template(todo);

  (temp.querySelector('input[type=checkbox]'): any).onclick = todo.toggleComplete.bind(todo);
  (temp.querySelector('.remove-icon'): any).onclick = removeHandler;

  return temp.firstChild;
}
