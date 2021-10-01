/* 
  SList: Priority Queue
*/

class PriQNode {
  constructor(val, pri) {
    this.val = val;
    this.next = null;
    this.pri = pri;
  }
}

class LinkedListPriorityQueue {
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
