/**
 * A class to represents a single item of a SinglyLinkedList that can be
 * linked to other Node instances to form a list of linked nodes.
 */
class ListNode {
  /**
   * Constructs a new Node instance. Executed when the 'new' keyword is used.
   * @param {any} data The data to be added into this new instance of a Node.
   *    The data can be anything, just like an array can contain strings,
   *    numbers, objects, etc.
   * @returns {ListNode} This new Node instance is returned automatically without
   *    having to be explicitly written (implicit return).
   */
  constructor(data) {
    this.data = data;
    /**
     * This property is used to link this node to whichever node is next
     * in the list. By default, this new node is not linked to any other
     * nodes, so the setting / updating of this property will happen sometime
     * after this node is created.
     *
     * @type {ListNode|null}
     */
    this.next = null;
  }
}

/**
 * This class keeps track of the start (head) of the list and to store all the
 * functionality (methods) that each list should have.
 */
class SinglyLinkedList {
  /**
   * Constructs a new instance of an empty linked list that inherits all the
   * methods.
   * @returns {SinglyLinkedList} The new list that is instantiated is implicitly
   *    returned without having to explicitly write "return".
   */
  constructor() {
    /** @type {ListNode|null} */
    this.head = null;
  }

  /**
   * Determines if this list is empty.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean}
   */
  isEmpty() {
    return this.head === null;
  }

  /**
   * Creates a new node with the given data and inserts it at the back of
   * this list.
   * - Time: O(n) linear, n = length of list.
   * - Space: O(1) constant.
   * @param {any} data The data to be added to the new node.
   * @returns {SinglyLinkedList} This list.
   */
  insertAtBack(data) {
    const newBack = new ListNode(data);

    if (this.isEmpty()) {
      this.head = newBack;
      return this;
    }

    let runner = this.head;

    while (runner.next !== null) {
      runner = runner.next;
    }

    runner.next = newBack;
    return this;
  }

  /**
   * Creates a new node with the given data and inserts it at the back of
   * this list.
   * - Time: O(n) linear, n = length of list.
   * - Space: O(n) linear due to the call stack.
   * @param {any} data The data to be added to the new node.
   * @param {?ListNode} runner The current node during the traversal of this list
   *    or null when the end of the list has been reached.
   * @returns {SinglyLinkedList} This list.
   */
  insertAtBackRecursive(data, runner = this.head) {
    if (this.isEmpty()) {
      this.head = new ListNode(data);
      return this;
    }

    if (runner.next === null) {
      runner.next = new ListNode(data);
      return this;
    }
    return this.insertAtBackRecursive(data, runner.next);
  }

  /**
   * Calls insertAtBack on each item of the given array.
   * - Time: O(n * m) n = list length, m = arr.length.
   * - Space: O(1) constant.
   * @param {Array<any>} vals The data for each new node.
   * @returns {SinglyLinkedList} This list.
   */
  insertAtBackMany(vals) {
    for (const item of vals) {
      this.insertAtBack(item);
    }
    return this;
  }

  /**
   * Converts this list into an array containing the data of each node.
   * - Time: O(n) linear.
   * - Space: O(n).
   * @returns {Array<any>} An array of each node's data.
   */
  toArr() {
    const arr = [];
    let runner = this.head;

    while (runner) {
      arr.push(runner.data);
      runner = runner.next;
    }
    return arr;
  }

  /**
   * Determines the length of this list.
   * - Time: O(n) linear, n = length of list
   * - Space: O(1) constant
   * @returns {number} The length.
   */
  length() {
    let len = 0;
    let runner = this.head;

    while (runner) {
      len += 1;
      runner = runner.next;
    }
    return len;
  }

  /**
   * Creates a new node with the given data and inserts that node at the front
   * of the list.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {any} data The data for the new node.
   * @returns {SinglyLinkedList} This list.
   */
  insertAtFront(data) {
    const newHead = new ListNode(data);
    newHead.next = this.head;
    this.head = newHead;
    return this;
  }

  /**
   * Removes the first node of this list.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The data from the removed node.
   */
  removeHead() {
    if (this.isEmpty()) {
      return null;
    }

    const oldHead = this.head;
    this.head = oldHead.next;
    return oldHead.data;
  }

  /**
   * Calculates the average of this list.
   * - Time: O(n) linear, n = length of list.
   * - Space: O(1) constant.
   * @returns {number|NaN} The average of the node's data.
   */
  average() {
    let runner = this.head;
    let sum = 0;
    let cnt = 0;

    while (runner) {
      cnt++;
      sum += runner.data;
      runner = runner.next;
    }

    /**
     * Dividing by 0 will give you NaN (Not a Number), so an empty list
     * will return NaN in this case, it may make sense to allow NaN to be
     * returned, because the average of an empty list doesn't make sense and
     * it could be misleading to return 0 since 0 is the average of any
     * list with a sum of 0 (due to negatives or all zeros).
     */
    return sum / cnt;
  }

  /**
   * Removes the last node of this list.
   * - Time: O(n) linear, n = length of list.
   * - Space: O(1) constant.
   * @returns {any} The data from the node that was removed.
   */
  removeBack() {
    if (this.isEmpty()) {
      return null;
    }

    // Only 1 node.
    if (this.head.next === null) {
      return this.removeHead();
    }

    // More than 1 node.
    let runner = this.head;

    while (runner.next.next) {
      runner = runner.next;
    }

    // after while loop finishes, runner is now at 2nd to last node
    const removedData = runner.next.data;
    runner.next = null; // remove it from list
    return removedData;
  }

  /**
   * This version uses more conditions instead of more returns. It is a good
   * example of how more returns can make the code easier to read and cleaner.
   * Removes the last node of this list.
   * - Time: O(n) linear, n = length of list.
   * - Space: O(1) constant.
   * @returns {any} The data from the node that was removed.
   */
  removeBack2() {
    let removedData = null;

    if (!this.isEmpty()) {
      if (this.head.next === null) {
        // head only node
        removedData = this.removeHead();
      } else {
        let runner = this.head;
        // right of && will only be checked if left is true
        while (runner.next && runner.next.next) {
          runner = runner.next;
        }

        // after while loop finishes, runner is now at 2nd to last node
        removedData = runner.next.data;
        runner.next = null; // remove it from list
      }
    }
    return removedData;
  }

  /**
   * Determines whether or not the given search value exists in this list.
   * - Time: O(n) linear, n = length of list.
   * - Space: O(1) constant.
   * @param {any} val The data to search for in the nodes of this list.
   * @returns {boolean}
   */
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

  /**
   * Determines whether or not the given search value exists in this list.
   * - Time: O(n) linear, n = length of list.
   * - Space: O(n) linear due to the call stack.
   * @param {any} val The data to search for in the nodes of this list.
   * @param {?node} current The current node during the traversal of this list
   *    or null when the end of the list has been reached.
   * @returns {boolean}
   */
  containsRecursive(val, current = this.head) {
    if (current === null) {
      return false;
    }
    if (current.data === val) {
      return true;
    }
    return this.containsRecursive(val, current.next);
  }

  /**
   * Recursively finds the maximum integer data of the nodes in this list.
   * - Time: O(n) linear, n = list length. Max could be at end.
   * - Space: O(n) linear due to the call stack.
   * @param {ListNode} runner The start or current node during traversal, or null
   *    when the end of the list is reached.
   * @param {ListNode} maxNode Keeps track of the node that contains the current
   *    max integer as it's data.
   * @returns {?number} The max int or null if none.
   */
  recursiveMax(runner = this.head, maxNode = this.head) {
    if (this.head === null) {
      return null;
    }

    if (runner === null) {
      return maxNode.data;
    }

    if (runner.data > maxNode.data) {
      maxNode = runner;
    }

    return this.recursiveMax(runner.next, maxNode);
  }

  /**
   * Retrieves the data of the second to last node in this list.
   * - Time: O(n - 1) n = list length -> O(n) linear.
   * - Space: O(1) constant.
   * @returns {any} The data of the second to last node or null if there is no
   *    second to last node.
   */
  secondToLast() {
    if (!this.head || !this.head.next) {
      return null;
    }

    // There are at least 2 nodes since the above return hasn't happened.
    let runner = this.head;

    while (runner.next.next) {
      runner = runner.next;
    }
    return runner.data;
  }

  /**
   * Removes the node that has the given val.
   * - Time: O(n) linear, n = list length since the last node could be the one
   *    that is removed.
   * - Space: O(1) constant.
   * @param {any} val The value to compare to the node's data to find the
   *    node to be removed.
   * @returns {boolean} Indicates if a node was removed or not.
   */
  removeVal(val) {
    if (this.isEmpty()) {
      return false;
    }

    if (this.head.data === val) {
      this.removeHead();
      return true;
    }

    let runner = this.head;

    while (runner.next) {
      if (runner.next.data === val) {
        runner.next = runner.next.next;
        return true;
      }
      runner = runner.next;
    }
    return false;
  }

  /**
   * Inserts a new node before a node with that has a specified value.
   * - Time: O(n) linear, n = list length, because we could end up pre-pending
   *    to the last node.
   * - Space: O(1) constant.
   * @param {any} newVal The value to use for the new node that is being added.
   * @param {any} targetVal The value to use to find the node that the newVal
   *    should be inserted in front of.
   * @returns {ListNode|null} The added node, or null.
   */
  prepend(newVal, targetVal) {
    if (this.isEmpty()) {
      return null;
    }

    if (this.head.data === targetVal) {
      this.insertAtFront(newVal);
      return this.head;
    }

    // we already know we're not going to need to prepend before the head
    let runner = this.head;

    while (runner) {
      // End of list and not found.
      if (runner.next === null) {
        return null;
      }

      if (runner.next.data === targetVal) {
        const prependNode = new ListNode(newVal);
        prependNode.next = runner.next;
        runner.next = prependNode;
        return prependNode;
      }
      runner = runner.next;
    }
  }

  /**
   * Concatenates the nodes of a given list onto the back of this list.
   * - Time: O(n) n = "this" list length -> O(n) linear.
   *    addList does not need to be looped over.
   * - Space: O(1) constant, although this list grows by addList's length,
   *    our algo doesn't create extra objects or arrays to take up more space.
   * @param {SinglyLinkedList} addList An instance of a different list whose
   *    whose nodes will be added to the back of this list.
   * @returns {SinglyLinkedList} This list with the added nodes.
   */
  concat(addList) {
    let runner = this.head;

    if (runner === null) {
      this.head = addList.head;
    } else {
      while (runner.next) {
        runner = runner.next;
      }
      runner.next = addList.head;
    }
    return this;
  }

  /**
   * Finds the node with the smallest number as data and moves it to the front
   * of this list.
   * - Time: O(2n) n = list length -> O(n) linear,
   *    2nd loop could go to end if min is at end.
   * - Space: O(1) constant.
   * @returns {SinglyLinkedList} This list.
   */
  moveMinFront() {
    /* 
      Alternatively, we could swap the data only in min node and head,
      but it's better to swap the nodes themselves in case anyone has variables
      pointing to these nodes already so that we don't unexpectedly change the
      the data in those nodes potentially causing unwanted side-effects.
    */
    if (this.isEmpty()) {
      return this;
    }

    let minNode = this.head;
    let runner = this.head;
    let prev = this.head;

    while (runner) {
      if (runner.data < minNode.data) {
        minNode = runner;
      }

      runner = runner.next;
    }
    // now that we know the min, if it is already the head, nothing needs to be done
    if (minNode === this.head) {
      return this;
    }

    runner = this.head;

    while (runner !== minNode) {
      prev = runner;
      runner = runner.next;
    }

    prev.next = minNode.next; // remove the minNode
    minNode.next = this.head;
    this.head = minNode;
    return this;
  }

  /**
   * Finds the node with the smallest data and moves that node to the front of
   * this list.
   * - Time: O(n) linear, n = list length. This avoids the extra loop in
   *    the above sln.
   * - Space: O(n) linear.
   * @returns {SinglyLinkedList} This list.
   */
  moveMinToFront() {
    if (this.isEmpty()) {
      return this;
    }

    let minNode = this.head;
    let runner = this.head;
    let prev = this.head;

    while (runner.next) {
      if (runner.next.data < minNode.data) {
        prev = runner;
        minNode = runner.next;
      }

      runner = runner.next;
    }

    if (minNode === this.head) {
      return this;
    }

    prev.next = minNode.next;
    minNode.next = this.head;
    this.head = minNode;
    return this;
  }

  /**
   * Splits this list into two lists where the 2nd list starts with the node
   * that has the given value.
   * splitOnVal(5) for the list (1=>3=>5=>2=>4) will change list to (1=>3),
   * and the return value will be a new list containing (5=>2=>4)
   * - Time: O(n) linear, n = list length, could split on last node.
   * - Space: O(1) constant.
   * @param {any} val The value in the node that the list should be split on.
   * @returns {SinglyLinkedList} The split list containing the nodes that are
   *    no longer in this list.
   */
  splitOnVal(val) {
    const newList = new SinglyLinkedList();

    if (!this.head) {
      return newList;
    }

    if (this.head.data === val) {
      newList.head = this.head;
      this.head = null;
      return newList;
    }

    let runner = this.head;

    while (runner.next) {
      if (runner.next.data === val) {
        newList.head = runner.next;
        runner.next = null;
        return newList;
      }
      runner = runner.next;
    }
    return newList;
  }

  /**
   * Retrieves the data of the middle node of this list.
   * - Time: O(1.5n) -> O(n) linear, n = length of list.
   * - Space: O(1) constant.
   * @returns {any} The data of the middle node or null if there is no middle.
   */
  getMiddleData() {
    let runner = this.head;
    let len = 0;

    /**
     * This extra loop to get count can be avoided if a count prop is added to
     * the list and updated when adding and removing nodes.
     */
    while (runner) {
      len++;
      runner = runner.next;
    }

    // even length, no middle
    if (len % 2 === 0) {
      return null;
    }

    runner = this.head;
    let midPoint = Math.floor(len / 2);
    let idx = 0;

    while (idx !== midPoint) {
      idx++;
      runner = runner.next;
    }
    return runner.data;
  }

  /**
   * Partitions a list by finding the partition node which is the node whose
   * data matches the given val and then moves all nodes with smaller integers
   * as data to the left of it and all larger nodes to the right of it.
   * The list does NOT need to be perfectly sorted!
   * - Time: O(n) linear, multiple loops but not nested.
   * - Space: O(n) linear, n = list length. The two temp lists created combined
   *    will contain all the nodes of this list.
   * @param {number} val The val to use to partition the list around.
   */
  partition(val) {
    if (this.contains(val) === false) {
      return this;
    }

    const smallerList = new SinglyLinkedList();
    const largerList = new SinglyLinkedList();
    let valCount = 1;

    let runner = this.head;

    while (runner) {
      // insertAtFront for better performance than insertAtBack
      if (runner.data < val) {
        smallerList.insertAtFront(runner.data);
      } else if (runner.data > val) {
        largerList.insertAtFront(runner.data);
      } else if (runner.data === val) {
        valCount++;
      }
      runner = runner.next;
    }
    // ensure our given val is at the beginning of the larger list
    for (let i = 0; i < valCount; i++) {
      largerList.insertAtFront(val);
    }

    smallerList.concat(largerList);

    this.head = smallerList.head;
    return this;
  }

  /**
   * Inserts a new node in the right position of this list to preserver
   * ascending integer order.
   * - Time: O(n) linear, n = list length. Position to insert could be at end.
   * - Space: O(1).
   * @param {number} data The data for the new node being inserted.
   * @returns {SinglyLinkedList} This list.
   */
  insertAsc(data) {
    const newNode = new ListNode(data);

    if (!this.head) {
      this.head = newNode;
      return this;
    }

    if (newNode.data < this.head.data) {
      newNode.next = this.head;
      this.head = newNode;
      return this;
    }

    let prev = this.head;
    let current = this.head.next;

    while (current && current.data <= newNode.data) {
      prev = current;
      current = current.next;
    }

    prev.next = newNode;
    newNode.next = current;
    return this;
  }

  /**
   * Creates a comma separated string of the full names of person object
   * that is the data in each node.
   * @typedef {object} Person The value of each node's data property.
   * @property {string} Person.firstName
   * @property {string} Person.lastName
   * - Time: O(n) linear, n = list length.
   * - Space: O(n), the names var grows as list length increases.
   * @returns {string} A comma separated string of full names.
   */
  displayPeople() {
    let runner = this.head;
    let names = "";

    while (runner) {
      names += `${runner.data.firstName} ${runner.data.lastName}${
        runner.next ? ", " : ""
      }`;
      runner = runner.next;
    }
    console.log(names);
    return names;
  }

  /**
   * Inserts a new node that has a person object as data and preserves the
   * ascending order of nodes based on the person's age.
   * - Time: O(n) linear, n = list length. Position to insert could be at end.
   * - Space: O(1) constant.
   * @typedef {object} Person The value of each node's data property.
   * @property {number} Person.age
   * @property {string} Person.firstName
   * @property {string} Person.lastName
   * @param {Person} data The data for the new node being inserted.
   * @returns {SinglyLinkedList} This list.
   */
  insertPersonAscAge(data) {
    const newNode = new ListNode(data);

    if (!this.head) {
      this.head = newNode;
      return this;
    }

    if (newNode.data.age < this.head.data.age) {
      newNode.next = this.head;
      this.head = newNode;
      return this;
    }

    let prev = this.head;
    let current = this.head.next;

    while (current && current.data.age <= newNode.data.age) {
      prev = current;
      current = current.next;
    }

    prev.next = newNode;
    newNode.next = current;
    return this;
  }

  /**
   * Reverses this list in-place without using any extra lists.
   * - Time: O(n) linear, n = list length.
   * - Space: O(1) constant.
   * @returns {SinglyLinkedList} This list.
   */
  reverse() {
    /*
      Each iteration we cut out current's next node to make it the new head
      iteration-by-iteration example:

      1234 -> initial list, 'current' is 1, next is 2.
      2134 -> 'current' is still 1, next is 3.
      3214
      4321
    */
    if (!this.head || !this.head.next) {
      return this;
    }

    let current = this.head;

    while (current.next) {
      const newHead = current.next;
      // cut the newHead out from where it currently is
      current.next = current.next.next;
      newHead.next = this.head;
      this.head = newHead;
    }
    return this;
  }

  // TODO: iteration by iteration comment example of swaps.
  reverse2() {
    let prev = null;
    let node = this.head;

    while (node) {
      const nextNode = node.next;
      node.next = prev;
      prev = node;
      node = nextNode;
    }
    this.head = prev;
    return this;
  }

  /**
   * Determines whether the list has a loop in it which would result in
   * infinitely traversing unless otherwise avoided. A loop is when a node's
   * next points to a node that is behind it.
   * - Time: O(n) linear, n = list length.
   * - Space: O(1) constant.
   * @returns {boolean} Whether the list has a loop or not.
   */
  hasLoop() {
    /**
      APPROACH:
      two runners are sent out and one runner goes faster so it will
      eventually 'lap' the slower runner if there is a loop, 
      at the moment faster runner laps slower runner, they are at the same
      place, aka same instance of a node.
    */
    if (!this.head) {
      return false;
    }

    let fasterRunner = this.head;
    let runner = this.head;

    while (fasterRunner && fasterRunner.next) {
      runner = runner.next;
      fasterRunner = fasterRunner.next.next;

      if (runner === fasterRunner) {
        return true;
      }
    }
    return false;
  }

  /**
   * Determines whether the list has a loop in it which would result in
   * infinitely traversing unless otherwise avoided.
   * In a normal object, the keys cannot be other objects, but in a Map object,
   * they can be. We can't use the .data as the keys in a normal object because
   * that would could cause hasLoop to return a false positive when there are
   * nodes with duplicate data but no loop.
   * - Time: O(n) linear, n = list length.
   * - Space: O(n) linear due to the Map.
   * @returns {boolean} Whether the list has a loop or not.
   */
  hasLoopMap() {
    if (this.isEmpty()) {
      return false;
    }

    const seenMap = new Map();
    let runner = this.head;

    while (runner) {
      if (seenMap.has(runner)) {
        return true;
      }
      seenMap.set(runner, true);
      runner = runner.next;
    }
    return false;
  }

  /**
   * Determines whether the list has a loop in it which would result in
   * infinitely traversing unless otherwise avoided.
   * This approaches adds a seen key to the nodes, then removes them when done.
   * - Time: O(2n) -> O(n) linear. The 2nd loop is to remove the extra seen key
   *    that was added.
   * - Space: O(n) because "seen" key is being stored n times.
   * @returns {boolean} Whether the list has a loop or not.
   */
  hasLoopSeen() {
    if (this.isEmpty()) {
      return false;
    }

    let runner = this.head;
    let hasLoop = false;

    while (runner) {
      if (runner.hasOwnProperty("seen")) {
        hasLoop = true;
        break;
      } else {
        runner.seen = true;
      }
      runner = runner.next;
    }

    runner = this.head;

    while (runner && runner.hasOwnProperty("seen")) {
      delete runner.seen;
      runner = runner.next;
    }
    return hasLoop;
  }

  /**
   * Removes all the nodes that have a negative integer as their data.
   * - Time: O(n) linear, n = list length.
   * - Space: O(1) constant.
   * @returns {SinglyLinkedList} This list after the negatives are removed.
   */
  removeNegatives() {
    if (this.isEmpty()) {
      return this;
    }

    let runner = this.head;

    // get rid of all negatives at start so head will be positive, or null
    while (runner && runner.data < 0) {
      runner = runner.next;
    }

    this.head = runner;

    //  head may have become null, that's why we check runner && runner.next
    while (runner && runner.next) {
      if (runner.next.data < 0) {
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }
    return this;
  }

  /**
   * In a sorted list of nodes with integers as data, removes the nodes with
   * duplicate data so that only one node of each integer data remains.
   * Time: O(n) linear, n = list length.
   * Space: O(1) constant.
   * @returns {SinglyLinkedList} This list after dupes are removed.
   */
  removeDupesSorted() {
    /* Approach: while runner isn't null
        if runner.next is a dupe, update runner.next to .next.next
        111233455 initial list, iter by iter example
        11233455
        1233455
        123455
        12345
      */
    if (this.isEmpty()) {
      return this;
    }

    let runner = this.head;

    while (runner.next) {
      if (runner.data === runner.next.data) {
        const newNext = runner.next.next;
        runner.next = newNext;
      } else {
        runner = runner.next;
      }
    }
    return this;
  }

  /**
   * Recursively retrieves the data of the last node in this list.
   * - Time: O(n) linear, n = list length.
   * - Space: O(n) linear due to the call stack.
   * @param {ListNode} runner The start or current node during traversal, or null
   *    when the end of the list is reached.
   * @returns {any} The data of the last node.
   */
  recursiveLast(runner = this.head) {
    if (runner === null) {
      return null;
    }
    if (runner.next === null) {
      return runner.data;
    }
    return this.recursiveLast(runner.next);
  }

  /**
   * Breaks a loop in this linked list if there is one.
   * - Time: O(2n) -> O(n) linear, n = list length. The nested loop only
   *    runs 1 time through full list at most.
   * - Space: O(1) constant.
   * @returns {SinglyLinkedList} This list after any loop is broken.
   */
  breakLoopVisited() {
    if (!this.head) {
      return this;
    }

    let runner = this.head;

    while (runner && runner.next) {
      if (runner.next.visited === true) {
        // break the loop
        runner.next = null;

        // now remove the visited key we added
        // since it wasn't part of the node originally
        runner = this.head;

        while (runner) {
          delete runner.visited;
          runner = runner.next;
        }

        return this;
      } else {
        runner.visited = true;
        runner = runner.next;
      }
    }
  }

  /**
   * Breaks a loop in this linked list if there is one.
   * - Time: O(2n) -> O(n) linear, n = list length. The nested loop only
   *    runs 1 time through full list at most.
   * - Space: O(1) constant.
   * @returns {SinglyLinkedList} This list after any loop is broken.
   */
  breakLoopTortoiseHare() {
    if (this.isEmpty()) {
      return this;
    }

    let hare = this.head,
      tortoise = this.head,
      newTail;

    while (hare && hare.next) {
      newTail = tortoise;
      tortoise = tortoise.next;
      hare = hare.next.next; // hare goes faster

      // they are at the same node, hare is about to lap tortoise in the loop
      if (hare === tortoise) {
        if (tortoise !== this.head) {
          /**
           * non perfect loop (tail does not connect to head)
           * track shape can be visualized as the letter 'b'
           * arrogant hare collapses from not pacing himself
           * tortoiseFriend enters at start of track to meet
           * his friend to celebrate the victory, from this point,
           * tortoiseFriend and tortoise moving at same speed
           * will end up at the place where the loop connects
           */

          let tortoiseFriend = this.head;

          while (tortoiseFriend !== tortoise) {
            newTail = tortoise;
            tortoise = tortoise.next; // slow n steady wins the race
            tortoiseFriend = tortoiseFriend.next;
          }
        }
        // newTail is now at the right place, whether it is
        // a perfect loop or non-perfect loop
        newTail.next = null;
      }
    }
    return this;
  }

  /**
   * Creates a comma separated string of the node's data.
   * - Time: O(n) linear, n = list length.
   * - Space: O(n) linear, vals str grows as list grows.
   * @returns {string} The comma separate data of all the nodes.
   */
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

  // return data of last
  getLast() {
    let runner = this.head;

    while (runner.next) {
      runner = runner.next;
    }
    return runner.data;
  }

  max() {
    let runner = this.head;

    if (!runner) {
      return null;
    }

    let max = 0;

    while (runner) {
      if (runner.data > max) max = runner.data;
      runner = runner.next;
    }
    return max;
  }

  moveMaxToBack() {
    if (this.isEmpty() || this.head.next === null) {
      return this;
    }
    let runner = this.head,
      tail = this.head,
      maxNode = this.head,
      prevToMaxNode = this.head;
    /**
     * Look forward to runner.next so every time we find a new max it's easy to
     * have access to the node before it. This can be done without looking
     * forward and instead keeping a var equal to the old runner (prev) but
     * sometimes one way is easier than the other depending on the goal is.
     */
    while (runner.next) {
      if (runner.next.data > maxNode.data) {
        maxNode = runner.next;
        prevToMaxNode = runner;
      }
      if (runner.next.next === null) {
        tail = runner.next;
      }
      runner = runner.next;
    }
    if (maxNode === tail) {
      return this;
    }
    if (maxNode === this.head) {
      this.head = this.head.next;
    } else {
      /**
       * Cut max node out, this isn't needed when max node is the head b/c
       * in that case we cut it out by reassigning the head.
       */
      prevToMaxNode.next = prevToMaxNode.next.next;
    }
    tail.next = maxNode;
    maxNode.next = null;
    return this;
  }

  // Remove nodes with duplicate values. Following this call, all remaining nodes should have unique values. Retain only first instance of each
  dedupeSeen() {
    if (this.isEmpty()) {
      return this;
    }

    const seen = {};
    let runner = this.head;
    seen[this.head.data] = true;

    while (runner && runner.next) {
      if (seen.hasOwnProperty(runner.next.data)) {
        runner.next = runner.next.next;
      } else {
        seen[runner.next.data] = true;
        runner = runner.next;
      }
    }
    return this;
  }

  // dedupeListWithoutBuffer
  dedupe() {
    if (this.isEmpty()) {
      return this;
    }

    let runner = this.head;

    while (runner && runner.next) {
      let prev = runner;
      let curr = runner.next;

      if (prev.data === curr.data) {
        prev.next = curr.next;
        continue;
      }

      // when this loop is finished, current is a dupe of runner and needs to be removed, unless current gets to end
      while (curr && runner.data !== curr.data) {
        prev = prev.next;
        curr = curr.next;
      }

      if (curr !== null) {
        prev.next = curr.next;
      }

      runner = runner.next;
    }

    return this;
  }

  // without this arg param
  forEach(callback) {
    let runner = this.head;

    while (runner) {
      callback(runner, this);
      runner = runner.next;
    }
  }

  // insertAfter

  // SList: Delete Given Node

  // SList: Copy
  // Given a pointer to a singly linked list, return a copy of that list. Do not return the same list, but instead make a copy of each node in the list and connect them in the same order as the original.

  // SList: Filter
  // Given a headNode ,a lowVal and a highVal , remove from the list any nodes that have values less than lowVal or higher than highVal . Return the new list.

  // SList: Second Largest Value
  // Given a pointer to the first node in a singly linked list, return the second-largest value contained in the list.

  // Zip SLists
  // Provided two pointers to independent linked lists, ‘zip’ the two lists together by alternating nodes. Start with the first list, and return the new combined list.
}

const emptyList = new SinglyLinkedList();
const singleNodeList = new SinglyLinkedList().insertAtBackMany([1]);
const biNodeList = new SinglyLinkedList().insertAtBackMany([1, 2]);
const firstThreeList = new SinglyLinkedList().insertAtBackMany([1, 2, 3]);
const secondThreeList = new SinglyLinkedList().insertAtBackMany([4, 5, 6]);
const unorderedList = new SinglyLinkedList().insertAtBackMany([
  -5, -10, 4, -3, 6, 1, -7, -2,
]);

// node 4 connects to node 1, back to head
const perfectLoopList = new SinglyLinkedList().insertAtBackMany([1, 2, 3, 4]);
perfectLoopList.head.next.next.next = perfectLoopList.head;

// node 4 connects to node 2
const loopList = new SinglyLinkedList().insertAtBackMany([1, 2, 3, 4]);
loopList.head.next.next.next = loopList.head.next;

const sortedDupeList = new SinglyLinkedList().insertAtBackMany([
  1, 1, 1, 2, 3, 3, 4, 5, 5,
]);

module.exports = { ListNode, SinglyLinkedList };
