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
   */
  constructor(description: string = 'Example Todo') {
    this.description = description;
    this.complete = false;
  }

  /**
   * Toggles the completion status of the Todo
   * @return {void}
   */
  toggleComplete() {
    this.complete = !this.complete;
  }
}
