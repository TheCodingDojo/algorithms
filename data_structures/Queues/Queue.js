// https://www.geeksforgeeks.org/implementation-queue-javascript/

/*
  Create a Queue class with the following methods and an array to implement a FIFO (First In First Out) data structure:

  enQueue
    - add item to back of queue
  deQueue
  -  remove and return first item in queue
  front
    - return first item without removing
  isEmpty
  size
 */

const Stack = require("./Stack");
const PriorityQueue = require("./PriorityQueue");

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

  /* 
    Bonus:
    Visualize a pallet of products, it is a 
    grid (rows and columns, like a chess board) where each grid space has a
    products stacked on top of each other.

    Your task is to unload a shipment of pallets that arrived, process them in
    the order they were received (FIFO):

    Given a queue of pallets (this queue) write a processPallets method,
    a pallet is a 2d grid (2d array)
    where the nested arrays contain stacks of product objects containing a name and price key.

    Work through the queue of pallets to unload all the products on each pallet.
    Unloading simply means removing all the items from the queues and stacks
    via the appropriate class methods.

    return a bill of goods containing all the names of products received and the total value of the merchandise

    Bonus: unload the products into a priority queue based on a
    daysUntilExpiration key on the product
    return the priority queue along with the bill of goods report.
  */
  processPallets() {
    const billOfGoods = {
      productsReceived: [],
      totalValue: 0,
    };

    const priorityQueue = new PriorityQueue();

    while (!this.isEmpty()) {
      const pallet = this.dequeue();

      for (const row of pallet) {
        for (const stackOfProducts of row) {
          while (!stackOfProducts.isEmpty()) {
            const product = stackOfProducts.pop();
            billOfGoods.productsReceived.push(product.name);
            billOfGoods.totalValue += product.price;

            priorityQueue.enqueue(product, product.daysUntilExpiration);
          }
        }
      }
    }
    return { billOfGoods, priorityQueue };
  }
}

// a 2d grid array
const palletA = [
  // first row in grid
  [
    new Stack([
      { name: "1", price: 1, daysUntilExpiration: 10 },
      { name: "2", price: 1, daysUntilExpiration: 10 },
      { name: "3", price: 1, daysUntilExpiration: 1 },
    ]),
    new Stack([
      { name: "4", price: 1, daysUntilExpiration: 10 },
      { name: "5", price: 1, daysUntilExpiration: 2 },
      { name: "6", price: 1, daysUntilExpiration: 8 },
    ]),
  ],
  // 2nd row in grid
  [
    new Stack([
      { name: "7", price: 1, daysUntilExpiration: 9 },
      { name: "8", price: 1, daysUntilExpiration: 2 },
      { name: "9", price: 1, daysUntilExpiration: 5 },
    ]),
    new Stack([
      { name: "10", price: 1, daysUntilExpiration: 3 },
      { name: "11", price: 1, daysUntilExpiration: 1 },
      { name: "12", price: 1, daysUntilExpiration: 6 },
    ]),
  ],
];

const palletB = [
  [
    new Stack([
      { name: "13", price: 1, daysUntilExpiration: 7 },
      { name: "14", price: 1, daysUntilExpiration: 9 },
      { name: "15", price: 1, daysUntilExpiration: 3 },
    ]),
    new Stack([
      { name: "16", price: 1, daysUntilExpiration: 8 },
      { name: "17", price: 1, daysUntilExpiration: 10 },
      { name: "18", price: 1, daysUntilExpiration: 4 },
    ]),
  ],
  [
    new Stack([
      { name: "19", price: 1, daysUntilExpiration: 6 },
      { name: "20", price: 1, daysUntilExpiration: 10 },
      { name: "21", price: 1, daysUntilExpiration: 5 },
    ]),
    new Stack([
      { name: "22", price: 1, daysUntilExpiration: 8 },
      { name: "23", price: 1, daysUntilExpiration: 4 },
      { name: "24", price: 1, daysUntilExpiration: 9 },
    ]),
  ],
];

// const palletQueue = new Queue();
// palletQueue.enqueue(palletA);
// palletQueue.enqueue(palletB);

// const report = palletQueue.processPallets();
// console.log(report);

module.exports = Queue;
