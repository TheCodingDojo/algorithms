/**
 * Class to represent a MinHeap which is a Priority Queue optimized for fast
 * retrieval of the minimum value. It is implemented using an array but it is
 * best visualized as a tree structure where each 'node' has left and right
 * children except the 'node' may only have a left child.
 * - parent is located at: Math.floor(i / 2);
 * - left child is located at: i * 2
 * - right child is located at: i * 2 + 1
 */
class MinHeapBasic {
  constructor() {
    /**
     * 0th index not used, so null is a placeholder. Not using 0th index makes
     * calculating the left and right children's index cleaner.
     * This also effectively makes our array start at index 1.
     */
    this.heap = [null];
  }

  /**
   * @param {number} i
   */
  idxOfParent(i) {
    return Math.floor(i / 2);
  }

  /**
   * @param {number} i
   */
  idxOfLeftChild(i) {
    return i * 2;
  }

  /**
   * @param {number} i
   */
  idxOfRightChild(i) {
    return i * 2 + 1;
  }

  /**
   * Swaps two nodes.
   * @param {number} i
   * @param {number} j
   */
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  /**
   * Retrieves the size of the heap, ignoring the null placeholder.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {number}
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
    let idxOfNodeToShiftUp = this.heap.length - 1;

    while (idxOfNodeToShiftUp > 1) {
      const idxOfParent = this.idxOfParent(idxOfNodeToShiftUp);

      const isParentSmallerOrEqual =
        this.heap[idxOfParent] <= this.heap[idxOfNodeToShiftUp];

      // Parent is supposed to be smaller so ordering is complete.
      if (isParentSmallerOrEqual) {
        break;
      }

      this.swap(idxOfNodeToShiftUp, idxOfParent);
      // after swapping the node is at idxOfParent now.
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
    let idxOfNodeToShiftDown = 1;
    let idxOfLeftChild = this.idxOfLeftChild(idxOfNodeToShiftDown);

    // while there is at least 1 child
    while (idxOfLeftChild < this.heap.length) {
      const idxOfRightChild = this.idxOfRightChild(idxOfNodeToShiftDown);
      let idxOfSmallestChild = idxOfLeftChild;
      const isRightChildInBounds = idxOfRightChild < this.heap.length;

      // Don't compare right child if it's out of bounds.
      // less than or greater than undefined has weird behavior (always false).
      const isRightChildSmaller =
        isRightChildInBounds &&
        this.heap[idxOfRightChild] < this.heap[idxOfLeftChild];

      if (isRightChildSmaller) {
        idxOfSmallestChild = idxOfRightChild;
      }

      const isParentSmallerOrEqual =
        this.heap[idxOfNodeToShiftDown] <= this.heap[idxOfSmallestChild];

      // Parent is supposed to be smaller, so ordering is complete.
      if (isParentSmallerOrEqual) {
        break;
      }

      this.swap(idxOfNodeToShiftDown, idxOfSmallestChild);

      // after swapping the node is now at the idxOfSmallestChild.
      idxOfNodeToShiftDown = idxOfSmallestChild;
      idxOfLeftChild = this.idxOfLeftChild(idxOfNodeToShiftDown);
    }
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

// const testMinHeap = new MinHeapBasic();
// testMinHeap.insert(5);
// testMinHeap.insert(4);
// testMinHeap.insert(7);
// testMinHeap.insert(3);
// testMinHeap.insert(6);
// console.log(testMinHeap.extract());
// testMinHeap.insert(2);

// console.log(testMinHeap.extract());
// console.log(testMinHeap.extract());
// console.log(testMinHeap.extract());
// console.log(testMinHeap.extract());
// console.log(testMinHeap.extract());
// console.log(testMinHeap.extract());

module.exports = { MinHeapBasic };
