/**
 * @flow
 */
import Todo from './models/todo.model.js';
import listObjectTemplate from '../../components/list/list-object.hbs';
import todoTemplate from './components/todo.hbs';
import addInputComponent, { AddInputComponent } from './components/add-input';
import LocalStorageHelper from '../../helpers/local-storage.helper.js';

/**
 * Todo App Controller
 * @type {TodoAppController}
 */
export default class TodoAppController {
  addInput: AddInputComponent;
  list: Array<Todo>;

  /**
   * Sets up the Todo App
   * @param {string} domSelector DOM Selector for app container element
   */
  constructor() {

    this.list = [];
    try {
      this.loadList();
    } catch (exc) {
      console.error(exc, 'Error Loading List');
    }

    // This is a function that wraps a handlebars template in a DOM element, with event handler parameters to
    // assign to the html elements created
    this.addInput = addInputComponent(this.handleAddTodo.bind(this));
    // Add element to page after creating it
    (document.getElementById('add-container'): any).appendChild(this.addInput);

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
   * @param  {number} index index of todo to toggle in list
   * @return {void}
   */
  handleToggleTodo(index) {
    this.list[index].toggleComplete.call(this.list[index]);
    this.saveList();
  }

  /**
   * Method to Load the List from LocalStorage on App setup
   * @return {void}
   */
  loadList() {
    const saved: Array<Todo> = (LocalStorageHelper.get({ key: 'todos' }): any);

    saved.forEach((todo: Todo) => {
      this.list.push(new Todo(todo.description, todo.complete));
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

    // Create list HTML with List Object Partial and local template file
    listContainer.innerHTML = listObjectTemplate({ items: this.list, template: 'todo-item-template' }, {
      partials: {
        'todo-item-template': todoTemplate
      }
    });

    // Add Handlers afterwards (because handlebars wont)
    listContainer.querySelectorAll('.todo-container input[type="checkbox"]').forEach((elm, index) => {
      elm.onchange = () => {
        this.handleToggleTodo(index);
      };
    });
    listContainer.querySelectorAll('.todo-container .trash-icon').forEach((elm, index) => {
      elm.onclick = () => {
        this.handleRemoveTodo(index);
      };
    });
  }
};
