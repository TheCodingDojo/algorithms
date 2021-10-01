// Import our stack data structure to use in this file.
const Stack = require("../Stacks/Stack");

/**
 * Class to represent a Queue but is implemented using two stacks to store the
 * queued items without using any other objects or arrays to store the items.
 * Retains the FIFO (First in First Out) ordering when adding / removing items.
 */
class TwoStackQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  /**
   * Adds a new item to the back of the queue.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {any} item To be added.
   * @returns {number} The new number of items in the queue.
   */
  enqueue(item) {
    this.stack1.push(item);
    return this.stack1.size();
  }

  /**
   * Removes the next item in the line / queue.
   * - Time: O(2n) -> O(n) linear.
   * - Space: O(1), no extra objects / arrays created within this method itself.
   * @returns {any} The removed item.
   */
  dequeue() {
    if (this.stack2.size() === 0) {
      this.alternateStacks(this.stack1, this.stack2);
    }

    return this.stack2.pop();
  }

  /**
   * Transfers the items from one stack to the other.
   * - Time: O(n) linear. Push and pop are constant but the loop is not.
   * - Space: O(1) The items are being moved from one stack to another
   *    not stored as duplicates.
   * @param {Stack} start The stack that currently contains the items.
   * @param {Stack} destination The stack that the items in start need to be
   *    moved into.
   * @returns {undefined}
   */
  alternateStacks(start, destination) {
    while (start.size()) {
      destination.push(start.pop());
    }
  }

  /**
   * Retrieves the first item in the queue without removing it.
   * - Time: O(n) linear, due to alternateStacks being linear time.
   * - Space: O(1) The items are being moved from one stack to another
   *    not stored as duplicates.
   * @returns {any} The first item in the queue.
   */
  peek() {
    if (this.stack2.size() === 0) {
      this.alternateStacks(this.stack1, this.stack2);
    }

    return this.stack2[this.stack2.size() - 1];
  }
}

module.exports = TwoStackQueue;
