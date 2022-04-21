/**
 * Class to represent a Node for a DoublyLinkedList.
 */
class DLLNode {
  /**
   * Executed when the new keyword is used to construct a new node instance.
   * @param {any} data The data the new node will store.
   */
  constructor(data) {
    this.data = data;
    /**
     * By default a new node instance will not be connected to any other nodes,
     * these properties will be set after instantiation to connect the node to
     * a list. However, the head prev should remain null.
     *
     * @type {DLLNode|null}
     */
    this.prev = null;
    /** @type {DLLNode|null} */
    this.next = null;
  }
}

/**
 * A class to represent a doubly linked list and contain all of it's methods.
 * A doubly linked list is a singly linked list that can be traversed in both
 * directions.
 */
class DoublyLinkedList {
  /**
   * Executed when the new keyword is used to construct a new DoublyLInkedList
   * instance that inherits these methods and properties.
   */
  constructor() {
    // The list is empty to start.
    /** @type {DLLNode|null} */
    this.head = null;
    /** @type {DLLNode|null} */
    this.tail = null;
  }

  /**
   * Converts this list to an array of the node's data.
   * - Time: O(n) linear, n = list length.
   * - Space: O(n) linear, array grows as list length increases.
   * @returns {Array<any>} All the data of the nodes.
   */
  toArray() {
    const vals = [];
    let runner = this.head;

    while (runner) {
      vals.push(runner.data);
      runner = runner.next;
    }
    return vals;
  }

  /**
   * Adds all the given items to the back of this list.
   * @param {Array<any>} items Items to be added to the back of this list.
   * @returns {DoublyLinkedList} This list.
   */
  insertAtBackMany(items = []) {
    items.forEach((item) => this.insertAtBack(item));
    return this;
  }

  /**
   * Determines if this list is empty.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean} Indicates if this list is empty.
   */
  isEmpty() {
    return this.head === null;
  }

  /**
   * Creates a new node and adds it at the front of this list.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {any} data The data for the new node.
   * @returns {DoublyLinkedList} This list.
   */
  insertAtFront(data) {
    const newHead = new DLLNode(data);

    if (this.isEmpty()) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      const oldHead = this.head;
      oldHead.prev = newHead;
      newHead.next = oldHead;
      this.head = newHead;
    }
    return this;
  }

  insertAtFront2(data) {
    const newHead = new DLLNode(data);

    if (this.isEmpty()) {
      this.head = newHead;
      this.tail = newHead;
      return this;
    }

    this.head.prev = newHead;
    newHead.next = this.head;
    this.head = newHead;
    return this;
  }

  /**
   * Creates a new node and adds it at the back of this list.
   * - Time: O(1) constant. No loop is needed since we have direct access to
   *    the tail.
   * - Space: O(1) constant.
   * @param {any} data The data for the new node.
   * @returns {DoublyLinkedList} This list.
   */
  insertAtBack(data) {
    const newTail = new DLLNode(data);

    if (this.isEmpty()) {
      // if no head set the newTail to be both the head and the tail
      this.head = newTail;
      this.tail = newTail;
    } else {
      this.tail.next = newTail;
      newTail.prev = this.tail;

      this.tail = newTail;
    }
    return this;
  }

  /**
   * Removes the middle node in this list.
   * - Time: O(0.5n) -> O(n) linear, n = list length.
   *    Since it's not constant we simplify it to O(n). Without the early
   *    exists, it would not be 0.5n.
   * - Space: O(1) constant.
   * @returns {any} The data of the removed node.
   */
  removeMiddleNode() {
    // when there is only 1 node, it is the middle, remove it.
    if (!this.isEmpty() && this.head === this.tail) {
      const removedData = this.head.data;
      this.head = null;
      this.tail = null;
      return removedData;
    }

    let forwardRunner = this.head;
    let backwardsRunner = this.tail;

    while (forwardRunner && backwardsRunner) {
      if (forwardRunner === backwardsRunner) {
        const midNode = forwardRunner;
        midNode.prev.next = midNode.next;
        midNode.next.prev = midNode.prev;
        return midNode.data;
      }

      // runners passed each other without stopping on the same node, even length, we can exit early
      if (forwardRunner.prev === backwardsRunner) {
        return null;
      }

      forwardRunner = forwardRunner.next;
      backwardsRunner = backwardsRunner.prev;
    }
    return null;
  }

  /**
   * Inserts a new node with the given newVal after the node that has the
   * given targetVal as it's data.
   * - Time: O(n) linear, n = list length. targetVal could be at opposite of
   *    starting side.
   * - Space: O(1) constant.
   * @param {any} targetVal The node data to find.
   * @param {any} newVal Data for the new node.
   * @returns {boolean} Indicates if the new node was added.
   */
  insertAfter(targetVal, newVal) {
    if (this.isEmpty()) {
      return false;
    }

    let runner = this.head;

    // runner && is in case runner becomes null so we don't check null.data
    while (runner && runner.data !== targetVal) {
      runner = runner.next;
    }

    if (runner === null) {
      return false;
    }

    const newNode = new DLLNode(newVal);
    newNode.prev = runner;
    newNode.next = runner.next;

    if (runner === this.tail) {
      this.tail = newNode;
    } else {
      // if runner was tail then next would be null.
      runner.next.prev = newNode;
    }

    runner.next = newNode;
    return true;
  }

  /**
   * Inserts a new node with the given newVal before the node that has the
   * given targetVal as it's data.
   * - Time: O(n) linear, n = list length. targetVal could be at opposite of
   *    starting side.
   * - Space: O(1) constant.
   * @param {any} targetVal The node data to find.
   * @param {any} newVal Data for the new node.
   * @returns {boolean} Indicates if the new node was added.
   */
  insertBefore(targetVal, newVal) {
    if (this.isEmpty()) {
      return false;
    }

    let runner = this.head;

    // This was written with a different structure than insertAfter to
    // for comparison purposes but the logic is almost the same.
    while (runner) {
      if (runner.data === targetVal) {
        const newNode = new DLLNode(newVal);
        newNode.next = runner;
        newNode.prev = runner.prev;

        if (runner === this.head) {
          this.head = newNode;
        } else {
          // if runner was head then prev would be null.
          runner.prev.next = newNode;
        }

        runner.prev = newNode;
        return true;
      }

      runner = runner.next;
    }
    return false;
  }

  /**
   * Retrieves the data from the nthLast node in this list.
   * - Time: O(n) linear, n = list length. nthLast could be so far from last
   *    that it's at the beginning.
   * - Space: O(1).
   * @param {number} nthLast Indicates the position from the back of the list.
   * @returns {any}
   */
  nthToLast(nthLast) {
    if (nthLast < 1 || this.isEmpty()) {
      return null;
    }

    let backwardsRunner = this.tail;

    // start at 1 because backwardsRunner starts at tail and if 1 is given, tail should be returned
    for (let i = 1; i < nthLast; i++) {
      backwardsRunner = backwardsRunner.prev;

      if (backwardsRunner === null) {
        return null;
      }
    }
    return backwardsRunner.data;
  }

  /**
   * Determines if the node's data of this list forms a palindrome.
   * - Time: O(n) linear, n = list length. Worst case is nxtRunner and
   *    prevRunner loop past each other to opposite ends.
   * - Space: O(1) constant.
   * @returns {boolean} Indicates if this list is a palindrome.
   */
  isPalindrome() {
    if (this.isEmpty()) {
      return false;
    }

    let nxtRunner = this.head,
      prevRunner = this.tail;

    while (nxtRunner && prevRunner) {
      if (nxtRunner.data !== prevRunner.data) {
        return false;
      }
      nxtRunner = nxtRunner.next;
      prevRunner = prevRunner.prev;
    }
    // runners passed each other and hit the ends without returning false
    return true;
  }

  /**
   * Determines if the node's data of this list forms a palindrome.
   * - Time: O(n / 2) -> O(n) linear, n = list length.
   * - Space: O(1) constant.
   * @returns {boolean} Indicates if this list is a palindrome.
   */
  isPalindrome2() {
    if (this.isEmpty()) {
      return false;
    }

    let nxtRunner = this.head,
      prevRunner = this.tail;

    while (nxtRunner && prevRunner) {
      if (nxtRunner.data !== prevRunner.data) {
        return false;
      }

      // early exits if runners pass or about to pass each other

      // happens when list is odd length so both runners are on middle node
      if (nxtRunner === prevRunner) {
        // return false above did not run, so we know it's a palindrome
        return true;
      }

      // even length list, no middle node, runners pass each other
      if (nxtRunner.prev === prevRunner) {
        return true;
      }

      nxtRunner = nxtRunner.next;
      prevRunner = prevRunner.prev;
    }
  }

  /**
   * Determines if a given node in this list is in the left half of this list.
   * - Time: O(n) linear, n = list length.
   * - Space: O(1) constant.
   * @param {DLLNode} node
   * @returns {boolean}
   */
  isNodeInLeftHalf(node) {
    let amntToLeft = 0,
      amntToRight = 0;

    let leftRunner = node,
      rightRunner = node;

    while (leftRunner) {
      amntToLeft++;
      leftRunner = leftRunner.prev;
    }

    while (rightRunner) {
      amntToRight++;
      rightRunner = rightRunner.next;
    }

    return amntToLeft < amntToRight;
  }

  /**
   * Finds the given node in this list and removes it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {DLLNode} node A node in this list.
   * @returns {DoublyLinkedList} This list.
   */
  removeNode(node) {
    if (this.isEmpty() || !node) {
      return this;
    }

    if (node === this.head) {
      this.head = this.head.next;

      // head and tail were same
      if (this.head === null) {
        this.tail = null;
      }
    } else if (node === this.tail) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      node.prev.next = node.next;
    }

    /**
     * A node can be removed from a list by being skipped over but the node can
     * still have pointers to other nodes in the list, so we make sure they are
     * cleared.
     */
    node.prev = null;
    node.next = null;
    return this;
  }

  /**
   * Removes the head node from this list.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {DLLNode} node A node in this list.
   * @returns {DoublyLinkedList} This list.
   */
  removeHead() {
    return this.removeNode(this.head);
  }

  /**
   * Removes the tail node from this list.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {DLLNode} node A node in this list.
   * @returns {DoublyLinkedList} This list.
   */
  removeTail() {
    return this.removeNode(this.tail);
  }
}

const emptyList = new DoublyLinkedList();
const singleNodeList = new DoublyLinkedList().insertAtFront(1);
const biNodeList = new DoublyLinkedList().insertAtBack(1).insertAtBack(2);
const firstThreeList = new DoublyLinkedList().insertAtBackMany([1, 2, 3]);
const secondThreeList = new DoublyLinkedList().insertAtBackMany([4, 5, 6]);
const unorderedList = new DoublyLinkedList().insertAtBackMany([
  -5, -10, 4, -3, 6, 1, -7, -2,
]);

module.exports = { DoublyLinkedList, DLLNode };
