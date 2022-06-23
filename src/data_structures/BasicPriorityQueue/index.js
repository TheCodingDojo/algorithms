// See BinaryHeap folder for a more efficient & robust type of priority queue.

/*
  Draw a to do list or urgent care list with two columns: item, and importance
    - the to do, is your queue item

  Have students give you a to do and it's importance with 1 being most important
  When the list is empty, where does it go?

  Once first item is added, have students give more to dos,
  explain the process for how you decide where to add the new to do,
  based on it's importance, is essentially a loop. You visually loop
  through the list until you find the first item that is not as
  important, then you put the new item in that position.
*/

/**
 * Class to represent a priority queue element. This is so that the priority
 * property does not need to be stored on the given item itself.
 */
class QElement {
  constructor(element, priority) {
    // element is the given item to be added to the queue.
    this.element = element;
    this.priority = priority;
  }
}

/**
 * Class to represent a basic priority queue with methods that enforce the
 * correct order of queue items.
 */
class BasicPriorityQueue {
  // An array is used to implement priority
  constructor() {
    this.items = [];
  }

  /**
   * Adds the new item in the correct location in the queue based on priority.
   * - Time: O(n) linear, since we have to loop over potentially whole list.
   * - Space: O(1) constant.
   * @param {any} element The item to add.
   * @param {number} priority The importance, low is more important.
   * @returns {number} The new length.
   */
  enqueue(element, priority) {
    // creating object from queue element
    const qElement = new QElement(element, priority);
    let queued = false;

    // iterating through the entire
    // item array to add element at the
    // correct location of the Queue
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > qElement.priority) {
        // Insert new item before the first item whose priority number is larger
        // smaller priority numbers are first
        this.items.splice(i, 0, qElement);
        queued = true;
        break;
      }
    }

    // if the element has the lowest priority (lower number is higher priority)
    // it is added at the end of the queue
    if (!queued) {
      this.items.push(qElement);
    }
    this.items.length;
  }

  /**
   * Removes and returns the most prioritized item.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {QElement|undefined}.
   */
  dequeue() {
    return this.items.shift();
  }

  /**
   * Retrieves the most prioritized item without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {QElement|undefined}
   */
  front() {
    return this.items[0];
  }

  /**
   * Retrieves the least prioritized item.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {QElement|undefined}
   */
  rear() {
    return this.items[this.items.length - 1];
  }

  /**
   * Checks if this BasicPriorityQueue is empty.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean}
   */
  isEmpty() {
    return this.items.length == 0;
  }
}

class PriQNode {
  constructor(val, pri) {
    this.val = val;
    this.next = null;
    this.pri = pri;
  }
}

class LinkedListBasicPriorityQueue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(val, pri) {
    const node = new PriQNode(val, pri);
    if (!this.head) {
      return (this.head = this.tail = node);
    }
    if (pri < this.head.pri) {
      node.next = this.head;
      return (this.head = node);
    }

    let current = this.head;
    while (current.next && pri > current.next.pri) {
      current = current.next;
    }
    node.next = current.next;
    current.next = node;

    if (!node.next) {
      this.tail = node;
    }
  }
}

module.exports = { BasicPriorityQueue, LinkedListBasicPriorityQueue };
