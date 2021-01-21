# [Heaps / Binary Heap](./Heap.js)

- [visualgo max heap](https://visualgo.net/en/heap?slide=1)
- [visualize min heap](https://www.cs.usfca.edu/~galles/visualization/Heap.html)
- Is a type of priority queue that is **visualized as a binary tree but implemented using an array**
  - since it is visualized as a tree, the items of the array may be referred to as nodes even though they may simply be ints rather than an instance of some node class
  - a node class could be used though, which stores the data and a priority int value for that data
- Is a complete tree: a tree in which every level, except possibly the last, is completely filled and all nodes are as far left as possible.
  - every parent node has a left and a right child except the last level may have only 1 child, in which case it would be a left child
- every child is also a parent if it has children too

---

## Parent Child Relationship

- `let` `i` be the index of a node in the heap array

---

### When 0th index is _unused_

- parent is located at `Math.floor(i / 2);`
- left child is located at `i * 2`
- right child is located at `i * 2 + 1`

### When 0th index is _used_

- parent is located at `Math.floor((i - 1) / 2)`
- left child is located at `i * 2 + 1`
- right child is located at `i * 2 + 2`

---

## Types

### Max Heap

- the parent node's value is always `>=` it's `left` & `right` children
  - this doesn't mean it has to be perfectly sorted

---

### Min Heap

- the parent node's value is always `<=` it's `left` & `right` children
  - this doesn't mean it has to be perfectly sorted

---

## Uses

- to always have `O(1)` constant time access to the min (min heap) or max (max heap) value
- `O(log n)` time for `insert` and `extract` instead of `O(n)` linear time required for a regular sorted array
- Languages with a built in Priority Queue data structure likely are implemented via a heap

---

### Real World Uses

[src](https://blog.bitsrc.io/implementing-heaps-in-javascript-c3fbf1cb2e65)

1. The Operating System uses heaps for scheduling jobs on a priority basis.
2. The producer-consumer model can be implemented using heaps to let consumer access the higher priority elements first. It is used in the implementation of Blocking Priority Queue.
3. Other applications include Order Statistics to find the kth-smallest/kth-largest element in an Array, in HeapSort Algorithm and Graph Algorithms such as Djiktra’s to find the **_shortest path_** and Prim’s minimal spanning tree algorithm.

---

## Terms

### `heapify`

- create a heap out of a given array of elements

---

### `insert`

- push new item to back then shift it up the tree until order is restored, see `shiftUp`
- return the new size of the heap

---

### `extract`

- return and remove the max or min, see `shiftDown`

---

### `shiftUp` AKA: `siftUp`, `heapifyUp`, `bubbleUp` (used after insertion)

- used to restore the proper order after insertion (pushing to back of array)
- **starting from the back** shift up the new last node until it reaches correct position by iteratively swapping
- when pushing a new item to back of heap array, it then needs to be swaped with it's parent while it violates the ordering rule so parent will be larger / smaller
  - Max Heap: swap newly added node with parent **while** it is larger so that parent will become the larger node
  - Min Heap: swap newly added node with parent **while** it is smaller so that parent will become the smaller node

---

### `shiftDown` AKA: `siftDown`, `heapifyDown`, `bubbleDown`, `sinkDown` (used after extract)

- used to restore the proper order after deletion / `extract`
- save the first node to a temp var, then reassign the first index the last item returned by `.pop()`
  - this avoids `.splice()`'s `O(n)` time to maintain `O(log n)`. Extract is not `O(1)` but only retrieving the first node is `O(1)`
- **starting from the front**, "shift down" the old last node that is now at the front until it reaches correct position by iteratively swapping while the ordering rule is violated
  - Max Heap: if the largest child is larger than parent, swap them so the parent will become the larger node
  - Min Heap: if the smallest child is smaller than parent, swap them so the parent will become the smaller node

---

## Advanced (for later reference)

### Inheritance

- `MaxHeap` and `MinHeap` `extends Heap` class

---

### `selector` `constructor` Parameter Callback Pattern

- Alternative option: a node class could be used for uniformity, which stores the data and a priority int value for that data
- selector callback function passed in when instantiating a heap
- the selector function accepts a node and contains the logic to access and return where in the node the value is stored that the heap should use to order
- Now this selector callback is used whenever you write heap methods that depend on the value to use for ordering, so that the logic doesn't need to be re-written if the nodes of the heap are differently shaped objects where the value is stored under a different key name

#### Usage Examples

1. heap nodes are primitive integers: `new MaxHeap((node) => node)`
   - the selector callback doesn't need to do anything special, just return the node itself since the node IS the integer value that should be used for ordering, this could be set as the default `selector` param value
2. heap nodes are person objects that should be ordered by age key: `new MaxHeap((node) => node.age)`
3. heap nodes are person objects that should be ordered by a nested array's length: `new MaxHeap((node) => node.academicRecord.achievements.length)`

- Now in the heap class whenever needing to access the value of a node, such as to check which is greater:

  - ```js
    const parent = this.values[idx],
      leftChild = this.values[idx * 2],
      rightChild = this.values[idx * 2 + 1];

    if (this.selector(leftChild) > this.selector(parent)) {
      // code...
    }
    ```
