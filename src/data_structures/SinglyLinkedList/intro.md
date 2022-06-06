# [Singly Linked List Intro](./index.js)

- [Visual Algo](https://visualgo.net/en)
- [Applications of linked list data structure](https://www.geeksforgeeks.org/applications-of-linked-list-data-structure/)

---

## Description / Intro

- A linked list is a data structure to represent a sequence of items, but without using an array. It uses objects that are linked together in a particular order.
- used widely in backends, frameworks, runtimes and operating systems
- How does your operating system keeps track of the files in a directory? Modern systems do not do this with an array. They use a data structure called a linked list . Linked lists are easily reordered and well-suited for large data collections because (unlike arrays) they store data in small pieces of memory that “fit in the holes” between variables, rather than requiring a large chunk of contiguous memory. Linked lists are the first data structure we discuss as an object ; they use references .
- Linked lists provide a way to store a large amount of information without forcing the runtime to find a large contiguous chunk of memory (as arrays do). Indeed, a linked list of 1000 pieces of information could use 1000 small spaces in memory. Like an array, they keep information in a certain order . However, unlike arrays, you need not relocate everything in order to add a value to the middle! Linked lists introduce the reference concept – essentially, storing the location of the variable, instead of its value . This reference is ‘just another’ attribute in the node object that can be compared, set, etc.
- Linked lists are preferable to arrays if frequently adding/removing values mid-sequence. Unlike arrays, singly linked lists directly access only the first node – to reach later ones, we traverse from one node to the next one by following the sequence of .next pointers. Singly linked lists have the ability to traverse only forward through the list, because they contain only a single link between nodes. A doubly linked list is comprised of nodes containing both .next and .prev pointers, and for this reason they are useful when we need to traverse back and forth in our sequence; that said, doubly linked lists are slightly more complicated to build and maintain (as we will see in a future chapter).

---

### runner

So how do we work with linked lists? A common pattern is to declare a local variable called runner, set it to reference the first node, use it to access that node, then update it to point to the second node, use it to access that node, and so on until runner reaches the end of the list. To update runner to point to the next node, we would execute `runner = runner.next;`

---

### Refresher on references

- ```js
  const myNode = new Node(1);
  myNode.next = new Node(2);
  myNode.next.next = new Node(3);

  // x now refers to the same object that the myNode var
  let x = myNode;

  // since x refers to the same object as myNode, this is updating the same object by "reference"
  x.data = 10;

  // this simply reassigns the variable x, from refering to the myNode object to now being a string
  // this does nothing to the myNode object, we just overwrote the value of the x variable
  x = "reassigned x";

  // similarly, runner now refers to the same myNode object
  let runner = myNode;

  // runner var is simply reassigned to the next node object, no object was updated because it is just reassigning a var
  runner = runner.next;

  // the runner var is NOT being reassigned, the object that the runner var refers to is having it's next key UPDATED by reference
  // instead of the next node being what it used to be, it is now the next next node (old next is skipped now)
  runner.next = runner.next.next;
  ```

---

## Compared To Array

```js
// head means it's the start.
const head = { data: 1, next: null };
const node2 = { data: 2, next: null };
const node3 = { data: 3, next: null };

// Link the nodes together to form a list.
head.next = node2;
node2.next = node3;

// Notice head contains all the other nodes. It's easier to see in chrome.
console.log(head);

// Keep track of the current node so we can iterate from node to next node.
let runner = head;

while (runner !== null) {
  console.log(runner.data);
  runner = runner.next;
}

function recursiveTraversal(curr) {
  if (curr === null) {
    return;
  }

  console.log(curr.data);
  // This function calls itself, that's what makes it recursive.
  recursiveTraversal(curr.next);
}

recursiveTraversal(head);

// You can iterate an array in a similar way as well.
const arr = [0, 1, 2];
let currentIdx = 0;

let currentNode = head;
let currentItem = arr[currentIdx];

/**
 * moving to next node:
 * currentNode.next is evaluated first, returning the next node (or null if no next)
 * to be assigned into the currentNode variable,
 * which is overwriting the variable's previous contents
 */
currentNode = currentNode.next;

/**
 * moving to next item in arr (in a similar way, not the usual way)
 * currentIdx + 1 is evaluated first, returning the next idx (incremented by 1)
 * to be assigned into the currentIdx variable,
 * which is overwriting the variable's previous contents
 */
currentIdx = currentIdx + 1;
currentItem = arr[currentIdx];

// looping programmatically, reset starting points to beginning first
currentIdx = 0;

currentNode = sList.head;
currentItem = arr[currentIdx];

while (currentNode !== null) {
  console.log("current node data:", currentNode.data);
  currentNode = currentNode.next;
}

// when idx goes out of bounds, undefined is returned
while (currentItem !== undefined) {
  console.log("current arr item:", currentItem);
  currentIdx = currentIdx + 1;
  currentItem = arr[currentIdx];
}
```

---

## Things to Reinforce

- Reinforce the nested object structure and log it to remind students of the structure and how it is just like accessing a deeply nested key, except the the key is always called `next`, they will forget this
