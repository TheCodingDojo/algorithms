// https://www.geeksforgeeks.org/implement-a-stack-using-singly-linked-list/
// http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2115
// SLStack: Pop

/* 
  Starter Code:

  // SLStack
  class SLStack {
    constructor() {
      this.head = null;
    }

    push(newVal) {
      // push newVal to top of stack
    }

    pop() {
      // remove and return data at top of stack
    }

    peek() {
      // return data at top of stack without removing
    }

    contains(value) {
      // return true if SLStack contains value
      // return false if SLStack does not contain value
    }

    isEmpty() {
      // return true if SLStack is empty
      // return false if SLStack is not empty
    }

    size() {
      // return length of SLStack
    }

    print() {
      // print out the values of the SLStack
    }
  }
*/

/* 
  You can treat the back of the linked list as the top of the stack, adding to it
  and removing from the back to maintain LIFO

  But it's more efficient to add to the front and remove from the front,
  which is still LIFO
*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedListStack {
  constructor() {
    this.head = null;
  }

  // add to top (add new head)
  // Time: O(1) constant
  // Space: O(1)
  push(val) {
    const newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  // remove from top, (remove head)
  // Time: O(1) constant
  // Space: O(1)
  pop() {
    if (this.head === null) {
      return null;
    }

    const removed = this.head;
    this.head = this.head.next;

    return removed.data;
  }

  // aka top
  // Time: O(1) constant
  // Space: O(1)
  peek() {
    return this.head ? this.head.data : null;
  }

  // Time: O(n) linear, n = list length
  // Space: O(1)
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

  // Time: O(1) constant
  // Space: O(1)
  isEmpty() {
    return this.head === null;
  }

  // Time: O(n) linear, n = list length
  // Space: O(1)
  size() {
    let len = 0;
    let runner = this.head;

    while (runner) {
      len += 1;
      runner = runner.next;
    }
    return len;
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
