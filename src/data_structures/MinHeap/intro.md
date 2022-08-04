# [Min Heap / Binary Heap](./index.js)

## Overview

- [visualize min heap](https://www.cs.usfca.edu/~galles/visualization/Heap.html)
- [visualgo max heap](https://visualgo.net/en/heap?slide=1)
- A Binary Heap is a type of priority queue that is **visualized as a binary tree but implemented using an array**.
  - Since it is visualized as a tree, the items of the array may be referred to as nodes even though they may simply be ints rather than an instance of some node class.
- It is a complete tree: a tree in which every level, except possibly the last, is completely filled and all nodes are as far left as possible.
  - Every parent node has a left and a right child except the last level may have only 1 child, in which case it would be a left child.
- Every child is also a parent if it has children too.

### When To Use

- A binary heap is useful for solving problems that require you to be able to retrieve the min or max and then to keep retrieving the next min or max while also having more items being added while maintaining the order so the min or max is always ready to be removed or accessed.
  - These are the conditions where a binary heap is more efficient than sorting because to add a new item to a sorted array is O(n) because you either have to loop to the end to insert or if you insert closer to the front you have to shift more items down to make space.
  - Removing from a sorted array can be more efficient if you sort it in reverse order so you can `.pop` from the back instead of removing from the front, but you can't speed up the inserting new items in the right location to keep it sorted without using a different data structure like the binary heap.

---

## Parent Child Relationship

- `let` `i` be the index of a node in the heap array

---

### When 0th index is _unused_

- Parent is located at `Math.floor(i / 2);`.
- Left child is located at `i * 2`.
- Right child is located at `(i * 2) + 1`.

### When 0th index is _used_

- Parent is located at `Math.floor((i - 1) / 2)`.
- Left child is located at `(i * 2) + 1`.
- Right child is located at `(i * 2) + 2`.

---

## Types

### Max Heap

- The parent node's value is always `>=` it's `left` & `right` children.
  - This doesn't mean it has to be perfectly sorted.

---

### Min Heap

- The parent node's value is always `<=` it's `left` & `right` children.
  - This doesn't mean it has to be perfectly sorted.

---

## Uses

- You should use a heap when you need to repeatedly retrieve the min or max while also having new items being added--in this scenario, a heap will be more efficient than sorting.
- Always have `O(1)` constant time access to the min (min heap) or max (max heap) value.
- `O(log n)` time for `insert` and `extract` instead of `O(n)` linear time required for a regular sorted array.
- Languages with a built in Priority Queue data structure likely are implemented via a heap.

---

### Real World Uses

[src](https://blog.bitsrc.io/implementing-heaps-in-javascript-c3fbf1cb2e65)

1. The Operating System uses heaps for scheduling jobs on a priority basis.
2. The producer-consumer model can be implemented using heaps to let consumer access the higher priority elements first. It is used in the implementation of Blocking Priority Queue.
3. Other applications include Order Statistics to find the kth-smallest/kth-largest element in an Array, in HeapSort Algorithm and Graph Algorithms such as Djiktra’s to find the **_shortest path_** between nodes and Prim’s minimal spanning tree algorithm. The problem of finding the shortest path between two intersections on a road map may be modeled as a special case of the shortest path problem in graphs, where the vertices (point / node) correspond to intersections and the edges (connections between nodes) correspond to road segments, each weighted by the length of the segment.

---

## Terms

### `heapify`

- Creates a heap out of a given array of elements.

---

### `insert`

- Push new item to back then shift it up the tree until order is restored, [see shiftUp](#shiftUp).
- Returns the new size of the heap.

---

### `extract`

- return and remove the max or min, [see shiftDown](#shiftDown)

---

### `shiftUp`

- AKA: `siftUp`, `heapifyUp`, `bubbleUp` (used after insertion)
- Used to restore the proper order after insertion (pushing to back of array).
- **Starting from the back** shift up the new last node until it reaches correct position by iteratively swapping.
- When pushing a new item to back of heap array, it then needs to be swapped with it's parent while it violates the ordering rule so parent will be larger / smaller.
  - Max Heap: swap newly added node with parent **while** it is larger so that parent will become the larger node.
  - Min Heap: swap newly added node with parent **while** it is smaller so that parent will become the smaller node.

---

### `shiftDown`

- AKA: `siftDown`, `heapifyDown`, `bubbleDown`, `sinkDown` (used after extract)
- Used to restore the proper order after deletion / `extract`.
- Save the first node to a temp var, then reassign the first index to be the item returned by `.pop()`.
  - This avoids `O(n)` time for array remove from front operations to maintain `O(log n)`. Extract is not `O(1)` but retrieving the first node is `O(1)`
- **Starting from the front**, "shift down" the old last node that is now at the front until it reaches correct position by iteratively swapping while the ordering rule is violated.
  - Max Heap: if the largest child is larger than parent, swap them so the parent will become the larger node.
  - Min Heap: if the smallest child is smaller than parent, swap them so the parent will become the smaller node.

---

## Advanced (for later reference)

- A more robust [Binary Heap](../BinaryHeap/index.js) can be created that takes a comparison callback function in the constructor so that it can be flexible like `.sort`. The callback passed to `.sort` let's you specify if you want to sort ascending or descending and allows you to choose what to sort by if your items are are not just numbers. For example, sorting people by age ascending `.sort((a, b) => a.age - b.age)`.
- This is how built in heaps that exist in many languages work.
