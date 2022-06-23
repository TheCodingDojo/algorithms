const { Stack } = require("../Stack");

/**
 * Class to represent a queue using an array which follows a FIFO
 * (First In First Out) order. New items are added to the back and items are
 * removed from the front.
 */
class Queue {
  /**
   *
   * @param {Array<any>} items The starting items, useful for if you already
   *    have an array of items in the right order and want to convert it to a
   *    queue instance to get access to the queue methods.
   */
  constructor(items = []) {
    this.items = items;
  }

  /**
   * Adds a new given item to the back of this queue.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {any} item The new item to add to the back.
   * @returns {number} The new size of this queue.
   */
  enqueue(item) {
    this.items.push(item);
    return this.size();
  }

  /**
   * Removes and returns the first item of this queue.
   * - Time: O(n) linear, due to having to shift all the remaining items to
   *    the left after removing first elem.
   * - Space: O(1) constant.
   * @returns {any} The first item or undefined if empty.
   */
  dequeue() {
    return this.items.shift();
  }

  /**
   * Retrieves the first item without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The first item or undefined if empty.
   */
  front() {
    return this.items[0];
  }

  /**
   * Returns whether or not this queue is empty.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean}
   */
  isEmpty() {
    return this.items.length === 0;
  }

  /**
   * Retrieves the size of this queue.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {number} The length.
   */
  size() {
    return this.items.length;
  }

  /**
   * Logs the items of this queue.
   * - Time: O(n) linear.
   * - Space: O(n) linear.
   * @returns {string} The same string that is logged.
   */
  print() {
    const str = this.items.join(" ");
    console.log(str);
    return str;
  }

  /**
   * Compares this queue to another given queue to see if they are equal.
   * Avoid indexing the queue items directly via bracket notation, use the
   * queue methods instead for practice.
   * Use no extra array or objects.
   * The queues should be returned to their original order when done.
   * - Time: O(n^2) quadratic, n = queue length. Quadratic due to dequeue on an
   *     array queue being O(n).
   * - Space: O(1) constant.
   * @param {Queue} q2 The queue to be compared against this queue.
   * @returns {boolean} Whether all the items of the two queues are equal and
   *    in the same order.
   */
  compareQueues(q2) {
    if (this.size() !== q2.size()) {
      return false;
    }
    let count = 0;
    let isEqual = true;
    const len = this.size();

    while (count < len) {
      const dequeued1 = this.dequeue();
      const dequeued2 = q2.dequeue();

      if (dequeued1 !== dequeued2) {
        isEqual = false;
      }

      this.enqueue(dequeued1);
      q2.enqueue(dequeued2);
      count++;
    }
    return isEqual;
  }

  /**
   * Determines if the queue is a palindrome (same items forward and backwards).
   * Avoid indexing queue items directly via bracket notation, instead use the
   * queue methods for practice.
   * Use only 1 stack as additional storage, no other arrays or objects.
   * The queue should be returned to its original order when done.
   * - Time: O(n^2) quadratic, n = queue length. Quadratic due to dequeue on an
   *     array queue being O(n).
   * - Space: O(n) from the stack being used to store the items again.
   * @returns {boolean}
   */
  isPalindrome() {
    let isPalin = true;
    const stack = new Stack(),
      len = this.size();

    for (let i = 0; i < len; i++) {
      let dequeued = this.dequeue();
      stack.push(dequeued);
      // add it back so the queue items and order is restored at the end
      this.enqueue(dequeued);
    }

    for (let i = 0; i < len; i++) {
      let dequeued = this.dequeue();
      let popped = stack.pop();

      if (popped !== dequeued) {
        isPalin = false;
      }

      // add it back so the queue items and order is restored at the end
      this.enqueue(dequeued);
    }
    return isPalin;
  }

  /**
   * Determines whether the sum of the left half of the queue items is equal to
   * the sum of the right half. Avoid indexing the queue items directly via
   * bracket notation, use the queue methods instead for practice.
   * Use no extra array or objects.
   * The queue should be returned to it's original order when done.
   * - Time: O(n^2) quadratic, n = queue length. Quadratic due to dequeue on an
   *     array queue being O(n).
   * - Space: O(1) constant.
   * @returns {boolean} Whether the sum of the left and right halves is equal.
   */
  isSumOfHalvesEqual() {
    const len = this.size();

    if (len % 2 !== 0) {
      return false;
    }

    const halfLen = len / 2;
    let leftSum = 0;
    let rightSum = 0;
    let count = 0;

    while (count < len) {
      const dequeued = this.dequeue();

      if (count < halfLen) {
        leftSum += dequeued;
      } else {
        rightSum += dequeued;
      }

      count++;
      this.enqueue(dequeued);
    }
    return leftSum === rightSum;
  }
}

/* 
  In order to maintain an O(1) enqueue time complexity like .push with an array
  We add a tail to our linked list so we can go directly to the last node
*/

class QueueNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedListQueue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /**
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean} Indicates if the list is empty.
   */
  isEmpty() {
    return this.head === null;
  }

  /**
   * Adds a given val to the back of the queue.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {any} val
   * @returns {number} The new size of the queue.
   */
  enqueue(val) {
    const newTail = new QueueNode(val);

    if (this.isEmpty()) {
      this.head = newTail;
      this.tail = newTail;
    } else {
      this.tail.next = newTail;
      this.tail = newTail;
    }
    // pre-increment so the new size is returned otherwise old size is returned
    return ++this.size;
  }

  /**
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The removed item.
   */
  dequeue() {
    // remove head
    if (!this.head) {
      return null;
    }

    const dequeued = this.head;
    this.head = this.head.next;

    if (this.head === null) {
      this.tail = null;
    }

    this.size--;
    return dequeued.data;
  }

  /**
   * Retrieves the first item without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The first item.
   */
  front() {
    return this.head ? this.head.data : null;
  }

  /**
   * Determines if the given item is in the queue.
   * - Time: O(n) linear.
   * - Space: O(1) constant.
   * @param {any} searchVal
   * @returns {boolean}
   */
  contains(searchVal) {
    let runner = this.head;

    while (runner) {
      if (runner.searchVal === searchVal) return true;
      runner = runner.next;
    }
    return false;
  }

  /**
   * Enqueues each of the given items.
   * - Time: O(n) linear since enqueue is O(1), n = vals.length.
   * - Space: O(1) constant.
   * @param {Array<any>} vals
   */
  seed(vals) {
    vals.forEach((val) => this.enqueue(val));
  }
}

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

module.exports = { Queue, LinkedListQueue, TwoStackQueue };
