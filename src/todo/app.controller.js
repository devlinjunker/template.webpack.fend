/**
 * @flow
 */
import Todo from './models/todo.model.js';
import todoComponent from './components/todo';
import addInputComponent from './components/add-input';
import LocalStorageHelper from '../helpers/local-storage.helper.js';

/**
 * Todo App Controller
 */
export default class TodoAppController {
  addInput: any;
  list: Array<Todo>;

  /**
   * Sets up the Todo App
   * @param {string} domSelector DOM Selector for app container element
   */
  constructor() {

    this.list = [];
    try {
      this.loadList();
    } catch {
      console.error('Error Loading List');
    }

    this.addInput = addInputComponent(this.handleAddTodo.bind(this));
    (document.getElementById('add-container'): any).appendChild(this.addInput);

    // this.addInput = (document.getElementById('add-input'): any);
    // this.addInput.onkeypress = (event) => {
    //   if (event.keyCode === 13) {
    //     this.handleAddTodo();
    //   }
    // };
    // (document.getElementById('add-button'): any).onclick = this.handleAddTodo.bind(this);
    this.renderList();
  }

  /**
   * Adds a New Todo Item to the list with the description provided
   * @param {string} description of new todo to add
   * @returns {void}
   */
  add(description: string) {
    this.list.push(new Todo(description));

    this.renderList();
    this.saveList();
  }

  /**
   * Removes a Todo Item from the list at a given index
   * @param  {number} index to remove todo at
   * @return {void}
   */
  remove(index: number) {
    this.list.splice(index, 1);
  }

  /**
   * Handler method for adding Todo to list and rerendering
   * @return {void}
   */
  handleAddTodo() {
    this.add(this.addInput.getValue());
    this.renderList();
    this.addInput.focusClear();
  }

  /**
   * Handler method for removing a Todo from the list and rerendering
   * @param  {number} index of the todo to remove from the list
   * @return {void}
   */
  handleRemoveTodo(index: number) {
    this.remove(index);
    this.renderList();
    this.saveList();
  }

  /**
   * Handler when todo completion toggle is checked
   * @param  {Todo} todo todo object that has been completed
   * @return {void}
   */
  handleToggleTodo(todo: Todo) {
    const idx = this.list.indexOf(todo);
    this.list[idx].toggleComplete.call(this.list[idx]);
    this.saveList();
  }

  /**
   * Method to Load the List from LocalStorage on App setup
   * @return {void}
   */
  loadList() {
    const saved: Array<Todo> = (LocalStorageHelper.get({ key: 'todos' }): any);

    saved.forEach((todo: Todo) => {
      this.list.push(new Todo(todo));
    });
  }

  /**
   * Method to Save the List to LocalStorage during any changes
   * @return {void}
   */
  saveList() {
    LocalStorageHelper.save({
      key: 'todos',
      val: this.list
    });
  }

  /**
   * Renders the HTML of the Todo App
   * @return {void}
   */
  renderList() {
    const listContainer: any = document.getElementById('list-container');
    listContainer.innerHTML = '';

    this.list.forEach((todo: Todo, index: number) => {
      listContainer.appendChild(
        todoComponent(todo, this.handleRemoveTodo.bind(this, index), this.handleToggleTodo.bind(this))
      );
    });
  }
};
