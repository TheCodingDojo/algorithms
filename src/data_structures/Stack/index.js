/**
 * Class to represent a stack using an array to store the stacked items.
 * Follows a LIFO (Last In First Out) order where new items are stacked on
 * top (back of array) and removed items are removed from the top / back.
 */
class Stack {
  /**
   * The constructor is executed when instantiating a new Stack() to construct
   * a new instance.
   * @returns {Stack} This new Stack instance is returned without having to
   *    explicitly write 'return' (implicit return).
   */
  constructor(items = []) {
    this.items = items;
  }

  /**
   * Adds a new given item to the top / back of this stack.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {any} item The new item to be added to the top / back.
   * @returns {number} The new length of this stack.
   */
  push(item) {
    this.items.push(item);
    return this.size();
  }

  /**
   * Removes the top / last item from this stack.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The removed item or undefined if this stack was empty.
   */
  pop() {
    return this.items.pop();
  }

  /**
   * Retrieves the top / last item from this stack without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The top / last item of this stack.
   */
  peek() {
    return this.items[this.items.length - 1];
  }

  /**
   * Returns whether or not this stack is empty.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean}
   */
  isEmpty() {
    return this.items.length === 0;
  }

  /**
   * Returns the size of this stack.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {number} The length.
   */
  size() {
    return this.items.length;
  }

  /**
   * Logs the items as a space separated string.
   * - Time: O(n) linear.
   * - Space: O(n) linear.
   * @returns {string} The same string that is logged.
   */
  print() {
    const str = this.items.join(" ");
    console.log(str);
    return str;
  }
}

class StackNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedListStack {
  constructor() {
    this.head = null;
  }

  /**
   * Adds a new item to the top of the stack (the head).
   * - Time: O(1) constant.
   * - Space: O(1).
   * @param {any} val The val to add.
   * @returns {void}
   */
  push(val) {
    const newNode = new StackNode(val);

    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  /**
   * Removes the top item (the head).
   * - Time: O(1) constant.
   * - Space: O(1).
   * @returns {any} The top item of the stack.
   */
  pop() {
    if (this.head === null) {
      return null;
    }

    const removed = this.head;
    this.head = this.head.next;

    return removed.data;
  }

  /**
   * Returns the top item of the stack without removing it.
   * - Time: O(1) constant.
   * - Space: O(1).
   * @returns {any} The top item.
   */
  peek() {
    return this.head ? this.head.data : null;
  }

  /**
   * Determines if the stack is empty.
   * - Time: O(1) constant.
   * - Space: O(1).
   * @returns {boolean}
   */
  isEmpty() {
    return this.head === null;
  }

  /**
   * Gets the count of items in the stack.
   * - Time: O(n) linear, n = list length.
   * - Space: O(1).
   * @returns {number} The total number of items.
   */
  size() {
    let len = 0;
    let runner = this.head;

    while (runner) {
      len += 1;
      runner = runner.next;
    }
    return len;
  }

  contains(val) {
    let runner = this.head;

    while (runner) {
      if (runner.data === val) {
        return true;
      }
      runner = runner.next;
    }
    return false;
  }

  // Time: O(n) linear, n = list length
  // Space: O(n)
  print() {
    let runner = this.head;
    let vals = "";

    while (runner) {
      vals += `${runner.data}${runner.next ? ", " : ""}`;
      runner = runner.next;
    }
    console.log(vals);
    return vals;
  }
}

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

    if (this.minStack.length === 0 || n <= minStack[this.minStack.length - 1]) {
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

module.exports = { Stack, LinkedListStack, MinStack };
