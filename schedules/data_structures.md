# [Data Structures](../src/data_structures) Algo Schedule

- For Full Time C# / Java stacks.
- [Pair Programming](../pair-programming.md)
- [recursion review](../src/recursion/intro-notes/intro.md)

---

## [Week 1 - Singly Linked Lists](../src/data_structures/SinglyLinkedList/index.js)

### Mon - SLL

- [intro](../src/data_structures/SinglyLinkedList/intro.md)
- Today's empty methods are already added in the below snippet under the `constructor`.

```js
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
   * @returns {ListNode} A new Node instance is returned automatically without
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
   * - Time: O(?).
   * - Space: O(?).
   * @returns {boolean}
   */
  isEmpty() {}

  /**
   * Creates a new node with the given data and inserts it at the back of
   * this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} data The data to be added to the new node.
   * @returns {SinglyLinkedList} This list.
   */
  insertAtBack(data) {}

  /**
   * Creates a new node with the given data and inserts it at the back of
   * this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} data The data to be added to the new node.
   * @param {?ListNode} runner The current node during the traversal of this list
   *    or null when the end of the list has been reached.
   * @returns {SinglyLinkedList} This list.
   */
  insertAtBackRecursive(data, runner = this.head) {}

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
}

/******************************************************************* 
Multiple test lists already constructed to test your methods on.
Below commented code depends on insertAtBack method to be completed,
after completing it, uncomment the code.
*/
const emptyList = new SinglyLinkedList();

// const singleNodeList = new SinglyLinkedList().insertAtBackMany([1]);
// const biNodeList = new SinglyLinkedList().insertAtBackMany([1, 2]);
// const firstThreeList = new SinglyLinkedList().insertAtBackMany([1, 2, 3]);
// const secondThreeList = new SinglyLinkedList().insertAtBackMany([4, 5, 6]);
// const unorderedList = new SinglyLinkedList().insertAtBackMany([
//   -5, -10, 4, -3, 6, 1, -7, -2,
// ]);

/* node 4 connects to node 1, back to head */
// const perfectLoopList = new SinglyLinkedList().insertAtBackMany([1, 2, 3, 4]);
// perfectLoopList.head.next.next.next = perfectLoopList.head;

/* node 4 connects to node 2 */
// const loopList = new SinglyLinkedList().insertAtBackMany([1, 2, 3, 4]);
// loopList.head.next.next.next = loopList.head.next;

// const sortedDupeList = new SinglyLinkedList().insertAtBackMany([
//   1, 1, 1, 2, 3, 3, 4, 5, 5,
// ]);

// Print your list like so:
// console.log(firstThreeList.toArr());
```

- isEmpty
  - Returns whether or not this list is empty.
- insertAtBack
  - Creates a new node with the given data and inserts it at the back of this list.
- insertAtBackMany
  - adds all the items from a given array to the back of this list.

### Tue - SLL

```js
/**
 * Creates a new node with the given data and inserts that node at the front
 * of this list.
 * - Time: (?).
 * - Space: (?).
 * @param {any} data The data for the new node.
 * @returns {SinglyLinkedList} This list.
 */
insertAtFront(data) {}

/**
 * Removes the first node of this list.
 * - Time: (?).
 * - Space: (?).
 * @returns {any} The data from the removed node.
 */
removeHead() {}

// EXTRA
/**
 * Calculates the average of this list.
 * - Time: (?).
 * - Space: (?).
 * @returns {number|NaN} The average of the node's data.
 */
average() {}
```

- insertAtFront
  - Creates a new node with the given data and inserts that node at the front of this list.
- removeHead
  - Removes the first node of this list and returns the data of the removed node.
- EXTRA: average
  - Calculates the average of this list based on the integer data of each node.

### Wed - SLL

```js
/**
 * Removes the last node of this list.
 * - Time: O(?).
 * - Space: O(?).
 * @returns {any} The data from the node that was removed.
 */
removeBack() {}

/**
 * Determines whether or not the given search value exists in this list.
 * - Time: O(?).
 * - Space: O(?).
 * @param {any} val The data to search for in the nodes of this list.
 * @returns {boolean}
 */
contains(val) {}

/**
 * Determines whether or not the given search value exists in this list.
 * - Time: O(?).
 * - Space: O(?).
 * @param {any} val The data to search for in the nodes of this list.
 * @param {?ListNode} current The current node during the traversal of this list
 *    or null when the end of the list has been reached.
 * @returns {boolean}
 */
containsRecursive(val, current = this.head) {}

// EXTRA
/**
 * Recursively finds the maximum integer data of the nodes in this list.
 * - Time: O(?).
 * - Space: O(?).
 * @param {ListNode} runner The start or current node during traversal, or null
 *    when the end of the list is reached.
 * @param {ListNode} maxNode Keeps track of the node that contains the current
 *    max integer as it's data.
 * @returns {?number} The max int or null if none.
 */
recursiveMax(runner = this.head, maxNode = this.head) {}
```

- contains
  - Returns whether or not the given search value exists in this list.
- containsRecursive
- removeBack
  - Removes the last node and returns the data of the removed node.
- EXTRA: recursiveMax
  - Recursively finds the maximum integer data of the nodes in this list.

### Thur - SLL

```js
/**
 * Retrieves the data of the second to last node in this list.
 * - Time: O(?).
 * - Space: O(?).
 * @returns {any} The data of the second to last node or null if there is no
 *    second to last node.
 */
secondToLast() {}

/**
 * Removes the node that has the matching given val as it's data.
 * - Time: O(?).
 * - Space: O(?).
 * @param {any} val The value to compare to the node's data to find the
 *    node to be removed.
 * @returns {boolean} Indicates if a node was removed or not.
 */
removeVal(val) {}

// EXTRA
/**
 * Inserts a new node before a node that has the given value as its data.
 * - Time: O(?).
 * - Space: O(?).
 * @param {any} newVal The value to use for the new node that is being added.
 * @param {any} targetVal The value to use to find the node that the newVal
 *    should be inserted in front of.
 * @returns {boolean} To indicate whether the node was pre-pended or not.
 */
prepend(newVal, targetVal) {}
```

- secondToLast
  - Retrieves the data of the second to last node in this list.
- removeVal
  - Removes the node that has the matching given val as it's data.
- EXTRA: prepend
  - Inserts a new node before a node that has the given value as its data.

### Fri - SLL

```js
/**
 * Concatenates the nodes of a given list onto the back of this list.
 * - Time: O(?).
 * - Space: O(?).
 * @param {SinglyLinkedList} addList An instance of a different list whose
 *    whose nodes will be added to the back of this list.
 * @returns {SinglyLinkedList} This list with the added nodes.
 */
concat(addList) {}

/**
 * Finds the node with the smallest data and moves that node to the front of
 * this list.
 * - Time: O(?).
 * - Space: O(?).
 * @returns {SinglyLinkedList} This list.
 */
moveMinToFront() {}

// EXTRA
/**
 * Splits this list into two lists where the 2nd list starts with the node
 * that has the given value.
 * splitOnVal(5) for the list (1=>3=>5=>2=>4) will change list to (1=>3)
 * and the return value will be a new list containing (5=>2=>4)
 * - Time: O(?).
 * - Space: O(?).
 * @param {any} val The value in the node that the list should be split on.
 * @returns {SinglyLinkedList} The split list containing the nodes that are
 *    no longer in this list.
 */
splitOnVal(val) {}
```

- concat
  - Concatenates the nodes of a given list onto the back of this list.
- moveMinToFront
  - Finds the node with the smallest number as data and moves it to the front of this list.
- EXTRA: splitOnVal
  - Splits this list into two lists where the 2nd list starts with the node that has the given value. splitOnVal(5) for the list (1=>3=>5=>2=>4) will change list to (1=>3) and the return value will be a new list containing (5=>2=>4).

---

## [Week 2 - Binary Search Tree](../src/data_structures/BinarySearchTree/index.js)

- `insert` is not done first because of it being harder than `isEmpty`, `min`, `max`.
- You can remove the given parameters for recursion if you want students to practice coming up with them on their own after reinforcing the reason more params are often needed for recursion.

### Mon - BST

- [intro](../src/data_structures/BinarySearchTree/intro.md)
- Today's empty algos are included below the `constructor`.

```js
/**
 * Class to represent a Node in a Binary Search Tree (BST).
 */
class BSTNode {
  /**
   * Constructs a new instance of a BST node.
   * @param {number} data The integer to store in the node.
   */
  constructor(data) {
    this.data = data;
    /**
     * These properties are how this node is connected to other nodes to form
     * the tree. Similar to .next in a SinglyLinkedList except a BST node can
     * be connected to two other nodes. To start, new nodes will not be
     * connected to any other nodes, these properties will be set after
     * the new node is instantiated.
     *
     * @type {BSTNode|null}
     */
    this.left = null;
    /** @type {BSTNode|null} */
    this.right = null;
  }
}

/**
 * Represents an ordered tree of nodes where the data of left nodes are <= to
 * their parent and the data of nodes to the right are > their parent's data.
 */
class BinarySearchTree {
  constructor() {
    /**
     * Just like the head of a linked list, this is the start of our tree which
     * branches downward from here.
     *
     * @type {BSTNode|null}
     */
    this.root = null;
  }

  /**
   * Determines if this tree is empty.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {boolean} Indicates if this tree is empty.
   */
  isEmpty() {}

  /**
   * Retrieves the smallest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The smallest integer from this tree.
   */
  min(current = this.root) {}

  /**
   * Retrieves the smallest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The smallest integer from this tree.
   */
  minRecursive(current = this.root) {}

  /**
   * Retrieves the largest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The largest integer from this tree.
   */
  max(current = this.root) {}

  /**
   * Retrieves the largest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The largest integer from this tree.
   */
  maxRecursive(current = this.root) {}

  // Logs this tree horizontally with the root on the left.
  print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
    if (!node) {
      return;
    }

    spaceCnt += spaceIncr;
    this.print(node.right, spaceCnt);

    console.log(
      " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
        `${node.data}`
    );

    this.print(node.left, spaceCnt);
  }
}

const emptyTree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new BSTNode(10);

/* twoLevelTree
        root
        10
      /   \
    5     15
*/
const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new BSTNode(10);
twoLevelTree.root.left = new BSTNode(5);
twoLevelTree.root.right = new BSTNode(15);

/* threeLevelTree 
        root
        10
      /   \
    5     15
  / \    / \
2   6  13  
*/
const threeLevelTree = new BinarySearchTree();
threeLevelTree.root = new BSTNode(10);
threeLevelTree.root.left = new BSTNode(5);
threeLevelTree.root.left.left = new BSTNode(2);
threeLevelTree.root.left.right = new BSTNode(6);
threeLevelTree.root.right = new BSTNode(15);
threeLevelTree.root.right.left = new BSTNode(13);

/* fullTree
                    root
                <-- 25 -->
              /            \
            15             50
          /    \         /    \
        10     22      35     70
      /   \   /  \    /  \   /  \
    4    12  18  24  31  44 66  90
*/
/***************** Uncomment after insert method is created. ****************/
// const fullTree = new BinarySearchTree();
// fullTree
//   .insert(25)
//   .insert(15)
//   .insert(10)
//   .insert(22)
//   .insert(4)
//   .insert(12)
//   .insert(18)
//   .insert(24)
//   .insert(50)
//   .insert(35)
//   .insert(70)
//   .insert(31)
//   .insert(44)
//   .insert(66)
//   .insert(90);
```

1. isEmpty
2. min & minRecursive (find min)
3. max & maxRecursive (find max)

### Tue - BST

```js
/**
 * Determines if this tree contains the given searchVal.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} searchVal The number to search for in the node's data.
 * @returns {boolean} Indicates if the searchVal was found.
 */
contains(searchVal) {}

/**
 * Determines if this tree contains the given searchVal.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} searchVal The number to search for in the node's data.
 * @returns {boolean} Indicates if the searchVal was found.
 */
containsRecursive(searchVal, current = this.root) {}

/**
 * Calculates the range (max - min) from the given startNode.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Node} startNode The node to start from to calculate the range.
 * @returns {number|null} The range of this tree or a sub tree depending on if the
 *    startNode is the root or not.
 */
range(startNode = this.root) {}
```

1. contains & containsRecursive (does val exist)
2. range (range is max minus min)

### Wed - BST

```js
/**
 * Inserts a new node with the given newVal in the right place to preserver
 * the order of this tree.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} newVal The data to be added to a new node.
 * @returns {BinarySearchTree} This tree.
 */
insert(newVal) {}

/**
 * Inserts a new node with the given newVal in the right place to preserver
 * the order of this tree.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} newVal The data to be added to a new node.
 * @param {Node} curr The node that is currently accessed from the tree as
 *    the tree is being traversed.
 * @returns {BinarySearchTree} This tree.
 */
insertRecursive(newVal, curr = this.root) {}
```

1. insert & insertRecursive
   - insert the new value in the appropriate place in the tree

### Thur - BST

```js
/**
 * DFS Preorder: (CurrNode, Left, Right)
 * Converts this BST into an array following Depth First Search preorder.
 * Example on the fullTree var:
 * [25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90]
 * @param {Node} node The current node during the traversal of this tree.
 * @param {Array<number>} vals The data that has been visited so far.
 * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
 */
toArrPreorder(node = this.root, vals = []) {}

/**
 * DFS Inorder: (Left, CurrNode, Right)
 * Converts this BST into an array following Depth First Search inorder.
 * See debugger call stack to help understand the recursion.
 * Example on the fullTree var:
 * [4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90]
 * @param {Node} node The current node during the traversal of this tree.
 * @param {Array<number>} vals The data that has been visited so far.
 * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
 */
toArrInorder(node = this.root, vals = []) {}

/**
 * DFS Postorder (Left, Right, CurrNode)
 * Converts this BST into an array following Depth First Search postorder.
 * Example on the fullTree var:
 * [4, 12, 10, 18, 24, 22, 15, 31, 44, 35, 66, 90, 70, 50, 25]
 * @param {Node} node The current node during the traversal of this tree.
 * @param {Array<number>} vals The data that has been visited so far.
 * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
 */
toArrPostorder(node = this.root, vals = []) {}
```

1. toArrPreorder
   - Preorder (Parent, Left, Right): on the provided fullTree var, it should be in this order: [25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90]
2. toArrInorder
   - Inorder (Left, Parent, Right): on the provided fullTree var, it should be in this order: [4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90]
3. toArrPostorder
   - Postorder (Left, Right, Parent): on the provided fullTree var, it should be in this order: [4, 12, 10, 18, 24, 22, 15, 31, 44, 35, 66, 90, 70, 50, 25]

### Fri - BST

```js
/**
 * BFS order: horizontal rows top-down left-to-right.
 * Converts this BST into an array following Breadth First Search order.
 * Example on the fullTree var:
 * [25, 15, 50, 10, 22, 35, 70, 4, 12, 18, 24, 31, 44, 66, 90]
 * @param {Node} current The current node during the traversal of this tree.
 * @returns {Array<number>} The data of all nodes in BFS order.
 */
toArrLevelorder(current = this.root) {}

/**
 * Recursively counts the total number of nodes in this tree.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Node} node The current node during the traversal of this tree.
 * @returns {number} The total number of nodes.
 */
size(node = this.root) {}

/**
 * Calculates the height of the tree which is based on how many nodes from
 * top to bottom (whichever side is taller).
 * - Time: O(?).
 * - Space: O(?).
 * @param {Node} node The current node during traversal of this tree.
 * @returns {number} The height of the tree.
 */
height(node = this.root) {}

/**
 * Determines if this tree is a full tree. A full tree is a tree where every
 * node has both a left and a right except for the leaf nodes (last nodes)
 * - Time: O(?).
 * - Space: O(?).
 * @param {Node} node The current node during traversal of this tree.
 * @returns {boolean} Indicates if this tree is full.
 */
isFull(node = this.root) {}
```

1. toArrLevelorder: Non-recursive Breadth First Search (BFS), aka LevelOrder:
   - on the provided fullTree var, it should be in this order (horizontal level-by-level top->down left->right): [25, 15, 50, 10, 22, 35, 70, 4, 12, 18, 24, 31, 44, 66, 90]
2. size (recursive: total number of nodes)
3. height (recursive: longest path from root to leaf)
4. isFull (recursive: isFull if every node other than the leaves has two children)

---

## Week 3 - Min Heap & Linked Lists Part 2

### Mon - [Min Heap](../src/data_structures/MinHeap/index.js)

- [intro](../src/data_structures/MinHeap/intro.md)
  - contains pseudo-code

```js
/**
 * Class to represent a MinHeap which is a Priority Queue optimized for fast
 * retrieval of the minimum value. It is implemented using an array but it is
 * best visualized as a tree structure where each 'node' has left and right
 * children except the 'node' may only have a left child.
 * - parent is located at: Math.floor(i / 2);
 * - left child is located at: i * 2
 * - right child is located at: i * 2 + 1
 */
class MinHeap {
  constructor() {
    /**
     * 0th index not used, so null is a placeholder. Not using 0th index makes
     * calculating the left and right children's index cleaner.
     * This also effectively makes our array start at index 1.
     */
    this.heap = [null];
  }

  /**
   * Retrieves the top (minimum number) in the heap without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {?number} Null if empty.
   */
  top() {}

  /**
   * Inserts a new number into the heap and maintains the heaps order.
   * 1. Push new num to back then.
   * 2. Iteratively swap the new num with it's parent while it is smaller than
   *    it's parent.
   * - Time: O(log n) logarithmic due to shiftUp / iterative swapping.
   * - Space: O(1) constant.
   * @param {number} num The num to add.
   */
  insert(num) {}

  /**
   * Logs the tree horizontally with the root on the left and the index in
   * parenthesis using reverse inorder traversal.
   */
  printHorizontalTree(parentIdx = 1, spaceCnt = 0, spaceIncr = 10) {
    if (parentIdx > this.heap.length - 1) {
      return;
    }

    spaceCnt += spaceIncr;
    this.printHorizontalTree(parentIdx * 2 + 1, spaceCnt);

    console.log(
      " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
        `${this.heap[parentIdx]} (${parentIdx})`
    );

    this.printHorizontalTree(parentIdx * 2, spaceCnt);
  }
}
```

- insert method
  - see insert section in Heaps.md for details
- top method
  - return the first node

### Tue - Min Heap

```js
  /**
   * Extracts the min num from the heap and then re-orders the heap to
   * maintain order so the next min is ready to be extracted.
   * 1. Save the first node to a temp var.
   * 2. Pop last node off and set idx1 equal to the popped value.
   * 3. Iteratively swap the old last node that is now at idx1 with it's
   *    smallest child IF the smallest child is smaller than it.
   * - Time: O(log n) logarithmic due to shiftDown.
   * - Space: O(1) constant.
   * @returns {?number} The min number or null if empty.
   */
  extract() {}
```

- Implement extract, see pseudo-code in [heap intro](../src/data_structures/MinHeap/intro.md)

### Wed - [SinglyLinkedList](../src/data_structures/SinglyLinkedList/index.js)

```js
/**
 * Reverses this list in-place without using any extra lists.
 * - Time: (?).
 * - Space: (?).
 * @returns {SinglyLinkedList} This list.
 */
reverse() {}

/**
 * Determines whether the list has a loop in it which would result in
 * infinitely traversing unless otherwise avoided. A loop is when a node's
 * next points to a node that is behind it.
 * - Time: (?).
 * - Space: (?).
 * @returns {boolean} Whether the list has a loop or not.
 */
hasLoop() {}

/**
 * Removes all the nodes that have a negative integer as their data.
 * - Time: (?).
 * - Space: (?).
 * @returns {SinglyLinkedList} This list after the negatives are removed.
 */
removeNegatives() {}
```

- reverse
  - Reverse an sList in place (do not create a new sList)
- hasLoop
  - Return whether or not the linked list connects back to itself. If it connects to itself, what does that mean will happen when you loop through it?
- EXTRA: removeNegatives (in place, no new list)

### Thur - [DoublyLinkedList](../src/data_structures/DoublyLinkedList/index.js)

```js
/* 
TODO: Create the DLLNode class and implement the DoublyLinkedList constructor
and the empty methods below the constructor.
*/

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
    // TODO: implement the constructor.
  }

  /**
   * Creates a new node and adds it at the front of this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} data The data for the new node.
   * @returns {DoublyLinkedList} This list.
   */
  insertAtFront(data) {}

  /**
   * Creates a new node and adds it at the back of this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} data The data for the new node.
   * @returns {DoublyLinkedList} This list.
   */
  insertAtBack(data) {}

  // EXTRA
  /**
   * Removes the middle node in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {any} The data of the removed node.
   */
  removeMiddleNode() {}

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
}

const emptyList = new DoublyLinkedList();

/**************** Uncomment these test lists after insertAtBack is created. ****************/
// const singleNodeList = new DoublyLinkedList().insertAtBack(1);
// const biNodeList = new DoublyLinkedList().insertAtBack(1).insertAtBack(2);
// const firstThreeList = new DoublyLinkedList().insertAtBackMany([1, 2, 3]);
// const secondThreeList = new DoublyLinkedList().insertAtBackMany([4, 5, 6]);
// const unorderedList = new DoublyLinkedList().insertAtBackMany([
//   -5,
//   -10,
//   4,
//   -3,
//   6,
//   1,
//   -7,
//   -2,
// ]);
```

- A Doubly Linked List is a singly linked list with the added functionality of being able to traverse in both directions.
- Since you can traverse forwards or backwards, that means you should be able to start at the head or tail (end). After creating the necessary classes, then build the following methods:
- Create the node class that allows for forwards and backwards traversal.
- insertAtFront
  - Given some new data, add it as the new head
- insertAtBack
  - Given some new data, add it to the back of the DList
- removeMiddleNode

### Fri - [DoublyLinkedList](../src/data_structures/DoublyLinkedList/index.js)

```js
/**
 * Inserts a new node with the given newVal after the node that has the
 * given targetVal as it's data.
 * - Time: O(?).
 * - Space: O(?).
 * @param {any} targetVal The node data to find.
 * @param {any} newVal Data for the new node.
 * @returns {boolean} Indicates if the new node was added.
 */
insertAfter(targetVal, newVal) {}

/**
 * Inserts a new node with the given newVal before the node that has the
 * given targetVal as it's data.
 * - Time: O(?).
 * - Space: O(?).
 * @param {any} targetVal The node data to find.
 * @param {any} newVal Data for the new node.
 * @returns {boolean} Indicates if the new node was added.
 */
insertBefore(targetVal, newVal) {}
```

- insertAfter
  - Add new val after a target val
- insertBefore
  - Add new val before a target val

---

## Week 4 - Stacks and Queues

### Mon - [Stacks](../src/data_structures/Stack/index.js)

- [intro](../src/data_structures/Queue/intro.md)

```js
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
  constructor() {
    this.items = [];
  }

  /**
   * Adds a new given item to the top / back of this stack.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {any} item The new item to be added to the top / back.
   * @returns {number} The new length of this stack.
   */
  push(item) {}

  /**
   * Removes the top / last item from this stack.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The removed item or undefined if this stack was empty.
   */
  pop() {}

  /**
   * Retrieves the top / last item from this stack without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The top / last item of this stack.
   */
  peek() {}

  /**
   * Returns whether or not this stack is empty.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean}
   */
  isEmpty() {}

  /**
   * Returns the size of this stack.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {number} The length.
   */
  size() {}
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
}
```

- A Stack is a LIFO (Last in First Out) data structure
- Design a class to represent a stack using an array to store the items
- Create these methods for each of the Stack classes with O(1) time complexity:
  - push (adds new item and returns new size)
  - pop (returns removed item)
  - isEmpty
  - size
  - peek (return top item without removing)
- Recreate the stack class using a singly linked list to store the items instead of an array

### Tue - Queue

- [Queue.js](../src/data_structures/Queue/index.js)

```js
/**
 * Class to represent a queue using an array to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class Queue {
  constructor() {
    this.items = [];
  }

  /**
   * Adds a new given item to the back of this queue.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {any} item The new item to add to the back.
   * @returns {number} The new size of this queue.
   */
  enqueue(item) {}

  /**
   * Removes and returns the first item of this queue.
   * - Time: O(n) linear, due to having to shift all the remaining items to
   *    the left after removing first elem.
   * - Space: O(1) constant.
   * @returns {any} The first item or undefined if empty.
   */
  dequeue() {}

  /**
   * Retrieves the first item without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The first item or undefined if empty.
   */
  front() {}

  /**
   * Returns whether or not this queue is empty.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean}
   */
  isEmpty() {}

  /**
   * Retrieves the size of this queue.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {number} The length.
   */
  size() {}
}

/* Rebuild the above class using a linked list instead of an array. */
```

- A Queue is a FIFO (First in First Out) data structure
- Design a class to represent a queue using an array to store the items.
- Recreate the queue class using a singly linked list to store the items.
- Create these methods for both classes:
  - enqueue (add item, return new size)
  - dequeue (remove and return item)
  - isEmpty
  - size
  - front (return first item without removing)
- Time complexities should be as follows:
  - Array Queue: enqueue: O(1), dequeue: O(n), size: O(1), front: O(1)
  - Linked List Queue: enqueue: O(1), dequeue: O(1), size: O(1), front: O(1)

### Wed - Queue

- [Queue.js](../src/data_structures/Queue/index.js)

- compareQueues
  - Write a method on the Queue class that, given another queue, will return whether they are equal (same items in same order).
  - Use ONLY the provided queue methods, do not manually index the queue items via bracket notation, use no extra array or objects.
  - Restore the queues to their original state
- queueIsPalindrome
  - Write a method on the Queue class that returns whether or not the queue is a palindrome
  - Use only 1 stack as additional storage (no additional arrays / objects).
  - Do not manually index the queue via bracket notation, use the provided queue methods and stack methods, restore the queue to original order when done.
- Extra: MinStack
  - Design a stack that supports push, pop, top, and min methods where the min method retrieves the minimum int in the stack
  - Bonus: retrieve min element in constant time (no looping).

```js
  /**
   * Compares this queue to another given queue to see if they are equal.
   * Avoid indexing the queue items directly via bracket notation, use the
   * queue methods instead for practice.
   * Use no extra array or objects.
   * The queues should be returned to their original order when done.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Queue} q2 The queue to be compared against this queue.
   * @returns {boolean} Whether all the items of the two queues are equal and
   *    in the same order.
   */
  compareQueues(q2) {}

  /**
   * Determines if the queue is a palindrome (same items forward and backwards).
   * Avoid indexing queue items directly via bracket notation, instead use the
   * queue methods for practice.
   * Use only 1 stack as additional storage, no other arrays or objects.
   * The queue should be returned to its original order when done.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {boolean}
   */
  isPalindrome() {}
```

### Thur - Queue

- [sumOfHalvesEqual](../src/data_structures/Queue/index.js)
  - Create a method on the array Queue class that returns whether or not the sum of the first half of the queue is equal to the sum of the second half
  - DO NOT manually index the queue items via bracket notation, only use the provided queue methods, use no additional arrays or objects for storage.
  - Restore the queue to it's original state before returning.
- [TwoStackQueue](../src/data_structures/Queue/index.js)

```js
  /**
   * Determines whether the sum of the left half of the queue items is equal to
   * the sum of the right half. Avoid indexing the queue items directly via
   * bracket notation, use the queue methods instead for practice.
   * Use no extra array or objects.
   * The queue should be returned to it's original order when done.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {boolean} Whether the sum of the left and right halves is equal.
   */
  isSumOfHalvesEqual() {}
```

```js
// Import our stack data structure to use in this file.
const Stack = require("./Stacks/Stack");

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
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} item To be added.
   * @returns {number} The new number of items in the queue.
   */
  enqueue(item) {}

  /**
   * Removes the next item in the line / queue.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {any} The removed item.
   */
  dequeue() {}
}
```

### Fri - MinHeap Interview Algo Demo

- Briefly review the more robust [BinaryHeap](../src/data_structures/BinaryHeap/index.js) implementation--focus on high-level explanation ("focus on understanding the overall concept, you don't need to understand the specifics right now."). Draw attention to how it is 90% the same code they saw when doing `MinHeap`, but with the added compare function just like `.sort` uses to make it more flexible so you can choose if you want it to be a Min or a Max heap (since min and max heap are almost same code) and you can specify how to work with other kind's of data, like a heap of people based on age, or a heap of jobs based on salary instead of only working on numbers.
  - Then use most of the time to demo using it to solve [OrderSaleMaximizer interview algo](../src/design/OrderSaleMaximizer/index.js)
  - Other languages (e.g., Java) have a built in heap that uses a similar compare function, but JS doesn't have a built in heap. The interview may sometimes tell you to assume it exists in JS to save time if you already came up with the idea to use a heap to solve the algo.

---

### [SinglyLinkedList](../src/data_structures/SinglyLinkedList/index.js) Extra Algos

```js
/**
 * Partitions a list by finding the partition node which is the node whose
 * data matches the given val and then moves all nodes with smaller integers
 * as data to the left of it and all larger nodes to the right of it.
 * The list does NOT need to be perfectly sorted!
 * - Time: (?).
 * - Space: (?).
 *    will contain all the nodes of this list.
 * @param {number} val The val to use to partition the list around.
 */
partition(val) {}

/**
 * Inserts a new node in the right position of this list to preserver
 * ascending integer order.
 * - Time: (?).
 * - Space: (?).
 * @param {number} data The data for the new node being inserted.
 * @returns {SinglyLinkedList} This list.
 */
insertAsc(data) {}

/**
 * Creates a comma separated string of the full names of person object
 * that is the data in each node.
 * @typedef {object} Person The value of each node's data property.
 * @property {string} Person.firstName
 * @property {string} Person.lastName
 * - Time: (?).
 * - Space: (?).
 * @returns {string} A comma separated string of full names.
 */
displayPeople() {}

  /**
   * In a sorted list of nodes with integers as data, removes the nodes with
   * duplicate data so that only one node of each integer data remains.
   * Time: O(?).
   * Space: O(?).
   * @returns {SinglyLinkedList} This list after dupes are removed.
   */
  removeDupesSorted() {}

/**
 * Inserts a new node that has a person object as data and preserves the
 * ascending order of nodes based on the person's age.
 * - Time: (?).
 * - Space: (?).
 * @typedef {object} Person The value of each node's data property.
 * @property {number} Person.age
 * @property {string} Person.firstName
 * @property {string} Person.lastName
 * @param {Person} data The data for the new node being inserted.
 * @returns {SinglyLinkedList} This list.
 */
insertPersonAscAge(data) {}
```

- removeDupesSorted
- partition
  - partition a SList such that all values less than the given value are to the left of it, and all values greater than the given value are to the right (not perfectly sorted)
- displayPeople: in a linked list containing person objects, write a method to print a comma separated string of all the people's firstName lastName
- insertAsc: in a sorted linked list, insert a new value, maintaining ascending order
- insertPersonAscAge: build an add person method that adds a person object to linked list maintaining asc order by person's age key

### [DoublyLinkedList](../src/data_structures/DoublyLinkedList/index.js) Extra Algos

```js
  /**
   * Retrieves the data from the nthLast node in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} nthLast Indicates the position from the back of the list.
   * @returns {any}
   */
  nthToLast(nthLast) {}

  /**
   * Determines if the node's data of this list forms a palindrome.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {boolean} Indicates if this list is a palindrome.
   */
  isPalindrome() {}

  /**
   * Determines if a given node in this list is in the left half of this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} node
   * @returns {boolean}
   */
  isNodeInLeftHalf(node) {}
```

- nthToLast
- isPalindrome
- isNodeInLeftHalf: given a reference to a node, return whether it's in left half or not
