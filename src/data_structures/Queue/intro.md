# [Stacks](../Stack//index.js) & [Queues](./index.js)

---

## Description

A stack and a queue are two data structures that are just an
array or linked list contained within a class. The purpose
of wrapping a class around it, is to enforce a standardized
way of interacting with the array via the class' methods.
This standardized way of interacting with the array is what
makes it either a stack or a queue.

Rather than mutating the array directly, or looping over it from the outside of the class,
all of that should be done by methods in the class to keep the way
the data structure is interacted with consistent.

If everyone uses the provided methods to interact with the data structure,
there will be consistency.

---

## Stack (Last In First Out (LIFO))

Imagine a stack of heavy blocks. You would only add new blocks
to the top of the stack and remove blocks from the top of the stack because they are too heavy to remove from the middle or the bottom.

So, to remove the block at the bottom of the stack, you would first remove
blocks at the top one-by-one until you got to the bottom

- new items are added to the 'top' of the 'stack'
  - added to the back of the array
- items are only removed from the 'top' of the 'stack'
  - removed from the back of the array

---

## Queue (First in First Out (FIFO))

Imagine a line of people at a grocery store.
The first person in line is the next person to be serviced.
You wouldn't service the last person in line first.

- new items are added to the back of the queue (end of array)
- items are only removed from the front of the queue (front of array)

---

## Starter Code

- ```js
  class Queue {
    constructor(items = []) {
      this.items = items;
    }
    // add methods here, outside constructor
    newMethod(params) {
      // 'this' keyword will refer to the class instance
      // that newMethod was called on
    }
  }

  class Stack {
    constructor(items = []) {
      this.items = items;
    }
    // add methods here, outside constructor
    newMethod(params) {
      // 'this' keyword will refer to the class instance
      // that newMethod was called on
    }
  }

  // Alternate way to add method to class
  NameOfClass.prototype.newMethodsName = function (params) {
    // 'this' keyword inside method
    // will refer to the class instance that
    // the newMethod was called on
  };
  ```
