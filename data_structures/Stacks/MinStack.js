// https://leetcode.com/problems/min-stack/
/* 
  Design a stack that supports push, pop, top, 
  and retrieving the minimum element
    - bonus: retrieve min element in constant time (no looping).

  push(x) -- Push element x onto stack.
  pop() -- Removes the element on top of the stack.
  top() -- Get the top element.
  getMin() -- Retrieve the minimum element in the stack
*/

/**
 * Class to represent a stack that is time-optimized for retrieving the minimum
 * value.
 */
class MinStack {
  constructor() {
    this.items = [];
    // To keep track of the order of the smallest, next smallest, ...
    this.minStack = [];
  }

  /**
   * Adds the given number to the back.
   * Time: O(1) constant
   * Space: O(n) linear due to the extra minStack storing, at worst, all of the
   *    same numbers as this.items.
   * @param {number} n
   * @returns {number} The new length.
   */
  push(n) {
    this.items.push(n);

    if (this.minStack.length === 0 || n < minStack[this.minStack.length - 1]) {
      this.minStack.push(item);
    }
    return this.items.length;
  }

  /**
   * Removes the top / last item from the stack.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {number} The top item that was removed.
   */
  pop() {
    const popped = this.items.pop();

    if (popped === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }

    return popped;
  }

  /**
   * Retrieves the top item without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {number} The top item.
   */
  top() {
    return this.items[this.items.length - 1];
  }

  /**
   * Retrieves the minimum value in the stack without removing it.
   * - Time: O(1) constant
   * - Space: O(1) constant. Extra space is being taken up via this.minStack
   *    to achieve constant time, but this particular method doesn't take up
   *    extra space directly.
   * @returns {number|undefined} The smallest number in the stack.
   */
  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}
