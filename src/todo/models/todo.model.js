/**
 * @flow
 */

/**
 * Todo Model that stores the fields related to a Todo
 */
export default class Todo {
  description: string;
  complete: boolean;

  /**
   * Creates the Todo Model
   * @param {string} description of the todo to be completed
   * @param {boolean} complete completion status of todo
   */
  constructor(description: string, complete: ?boolean = false) {
    this.description = description;
    this.complete = complete;
  }

  /**
   * Toggles the completion status of the Todo
   * @return {void}
   */
  toggleComplete() {
    this.complete = !this.complete;
  }
}
