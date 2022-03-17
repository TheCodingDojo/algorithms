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
   * Retrieves the size of the heap, ignoring the null placeholder.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {?number} Null if empty.
   */
  size() {
    // - 1 since 0 index is unused
    return this.heap.length - 1;
  }

  /**
   * Retrieves the top (minimum number) in the heap without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {?number} Null if empty.
   */
  top() {
    return this.heap.length > 1 ? this.heap[1] : null;
  }

  /**
   * Inserts a new number into the heap and reorders heap to maintain order.
   * 1. Push new num to back.
   * 2. Iteratively swap the new num with it's parent while it is smaller than
   *    it's parent.
   * - Time: O(log n) logarithmic due to shiftUp.
   * - Space: O(1) constant.
   * @param {number} num The num to add.
   */
  insert(num) {
    this.heap.push(num);
    this.shiftUp();
    // .push on array returns the new length
    return this.size();
  }

  // AKA: siftUp, heapifyUp, bubbleUp to restore order after insert
  shiftUp() {
    // just to avoid repeatedly typing this.heap
    const heap = this.heap;
    let idxOfNodeToShiftUp = heap.length - 1;

    while (idxOfNodeToShiftUp > 1) {
      const idxOfParent = Math.floor(idxOfNodeToShiftUp / 2);

      // parent already smaller, no more swapping needed
      if (heap[idxOfParent] <= heap[idxOfNodeToShiftUp]) {
        break;
      }

      // while the parent is not smaller, swap it with it's child (array destructure syntax)
      // when the while loop is done, the new node is in it's correct place so all parents are smaller than children
      [heap[idxOfNodeToShiftUp], heap[idxOfParent]] = [
        heap[idxOfParent],
        heap[idxOfNodeToShiftUp],
      ];
      // since it was swapped with parent, it is now located at the idxOfParent
      idxOfNodeToShiftUp = idxOfParent;
    }
  }

  /**
   * Extracts the min num from the heap and then re-orders the heap to
   * maintain order so the next min is ready to be extracted.
   * 1. Save the first node to a temp var.
   * 2. Pop last node off and overwrite idx1 with it.
   * 3. Iteratively swap the old last node that is now at idx1 with it's
   *    smallest child IF the smallest child is smaller than it.
   * - Time: O(log n) logarithmic due to shiftDown.
   * - Space: O(1) constant.
   * @returns {?number} The min number or null if empty.
   */
  extract() {
    // nothing to remove
    if (this.heap.length === 1) {
      return null;
    }

    const heap = this.heap;
    const min = heap[1];
    const lastNode = heap.pop();

    // last item is being removed, no more work required
    if (heap.length === 1) {
      return min;
    }

    // last node is overwriting the idx 1 to "remove" idx 1
    heap[1] = lastNode;
    // since we put the lastNode at the start, it needs to be swapped down to it's correct position to restore the order
    this.shiftDown();
    return min;
  }

  // AKA: siftDown, heapifyDown, bubbleDown, sinkDown to restore order after extracting min
  shiftDown() {
    const heap = this.heap;

    let idxOfNodeToShiftDown = 1;
    let idxOfLeftChild = idxOfNodeToShiftDown * 2;

    // while there is at least 1 child
    while (idxOfLeftChild < heap.length) {
      const idxOfRightChild = idxOfLeftChild + 1;
      let idxOfSmallestChild = idxOfLeftChild;

      if (
        idxOfRightChild < heap.length &&
        heap[idxOfRightChild] < heap[idxOfLeftChild]
      ) {
        idxOfSmallestChild = idxOfRightChild;
      }

      // no more swapping needed, no children are smaller
      if (heap[idxOfNodeToShiftDown] <= heap[idxOfSmallestChild]) {
        break;
      }

      // swap the smallest child with the parent since the parent is not smaller
      [heap[idxOfNodeToShiftDown], heap[idxOfSmallestChild]] = [
        heap[idxOfSmallestChild],
        heap[idxOfNodeToShiftDown],
      ];

      // follow this node since it was just swapped to see if it needs to be swapped again
      idxOfNodeToShiftDown = idxOfSmallestChild;
      idxOfLeftChild = idxOfNodeToShiftDown * 2;
    }
  }

  // static allows this method to be executed directly on the class itself rather than needing to be executed on an instance or going through the .prototype
  // converts an array into a new heap
  static heapify(vals) {
    const heap = new MinHeap();
    vals.forEach((val) => heap.insert(val));
    return heap;
  }

  // prints tree with root on left and index in parens in reverse inorder traversal
  // https://www.geeksforgeeks.org/print-binary-tree-2-dimensions/
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

  printArr(...appendedMsgs) {
    const arrStr = `\n[${["null", ...this.heap.slice(1)].join(", ")}]`;
    const msgLen = arrStr.length + appendedMsgs.toString().length;
    console.log("-".repeat(msgLen), arrStr, ...appendedMsgs);
  }
}

// Time: O(n log n) linearithmic because .insert is O(log n) and .insert is being done n times
// unstable
function heapSort(nums) {
  const minHeap = MinHeap.heapify(nums);
  const sorted = [];

  // if we had a max heap, we could loop backwards and instead of push assign by index
  for (let i = 0; i < nums.length; i++) {
    sorted.push(minHeap.extract());
  }
  return sorted;
}

function heapSortInPlace(nums) {
  const minHeap = MinHeap.heapify(nums);

  for (let i = 0; i < nums.length; i++) {
    nums[i] = minHeap.extract();
  }
  return nums;
}

const minHeap = new MinHeap();
minHeap.insert(5);
minHeap.insert(4);
minHeap.insert(7);
minHeap.insert(3);
minHeap.insert(6);
minHeap.insert(2);
//   minHeap.insert(1)
//   minHeap.insert(0);
// console.log(`extracted ${minHeap.extract()}`);

minHeap.extract();
minHeap.extract();
minHeap.extract();
minHeap.extract();
minHeap.extract();
minHeap.extract();

module.exports = { MinHeap };
