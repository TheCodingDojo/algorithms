/* 
Instead of creating a MinHeap and a MaxHeap that share almost all the same code
but have different comparison logic, a more abstract heap can be designed to
allow providing a comparison function like `.sort` so that the order each new
heap uses can be chosen.
*/

// Sorting examples:
const ascending = [20, 10, 50, 30, 0, 40].sort((a, b) => a - b);
const descending = [20, 10, 50, 30, 0, 40].sort((a, b) => b - a);

const ascendingAgePeople = [
  { name: "three", age: 30 },
  { name: "one", age: 10 },
  { name: "two", age: 20 },
].sort((a, b) => a.age - b.age);

/* 
JSDoc note:
This has some advanced JSDoc syntax that you don't need to know or use. It just
makes it possibly to specify the types and get type detection / autocomplete,
but that's what TypeScript is designed to do better than JSDoc.
*/

/**
 * @template HeapItem
 */
class BinaryHeap {
  /**
   * Given two items, returns three possible values to determine the order.
   * @callback CompareFn
   * @param {HeapItem} a An item from the heap.
   * @param {HeapItem} b The other item being compared.
   * @returns {number} Return less than 0 if smaller, greater than 0 if larger,
   *    0 if the same / don't change order.
   */

  /**
   * @param {CompareFn} compareFn
   * @example
   * Smallest numbers first:
   * ```
   * new BinaryHeap((a, b) => a - b);
   *
   * ```
   * Largest numbers first:
   * ```
   * new BinaryHeap((a, b) => b - a);
   * ```
   *
   * Youngest people first:
   * ```
   * new BinaryHeap((personA, personB) => personA.age - personB.age);
   * ```
   *
   * Oldest people first:
   * ```
   * new BinaryHeap((personA, personB) => personB.age - personA.age);
   * ```
   */
  constructor(compareFn = BinaryHeap.defaultCompareFn) {
    /** @type {?HeapItem[]} */
    this.heap = [null];
    this.compareFn = compareFn;
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
    return this.heap.length - 1;
  }

  /**
   * Retrieves the top in the heap without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {?HeapItem}
   */
  top() {
    return this.heap.length > 1 ? this.heap[1] : null;
  }

  /**
   * Inserts a new item into the heap and reorders heap to maintain order.
   * - Time: O(log n) logarithmic due to shiftUp.
   * - Space: O(1) constant.
   * @param {HeapItem} item The item to add.
   */
  insert(item) {
    this.heap.push(item);
    this.shiftUp();
    return this.size();
  }

  shiftUp() {
    const heap = this.heap;
    let idxOfNodeToShiftUp = heap.length - 1;

    while (idxOfNodeToShiftUp > 1) {
      const idxOfParent = this.idxOfParent(idxOfNodeToShiftUp);
      const isParentSmallerOrEqual =
        this.compareFn(heap[idxOfParent], heap[idxOfNodeToShiftUp]) <= 0;

      if (isParentSmallerOrEqual) {
        break;
      }

      this.swap(idxOfNodeToShiftUp, idxOfParent);
      // after swapping, the node is not at idxOfParent.
      idxOfNodeToShiftUp = idxOfParent;
    }
  }

  /**
   * Extracts the first item from the heap and then re-orders the heap to
   * maintain order so the next item is ready to be extracted.
   * - Time: O(log n) logarithmic due to shiftDown.
   * - Space: O(1) constant.
   * @returns {?HeapItem} The min item or null if empty.
   */
  extract() {
    if (this.heap.length === 1) {
      return null;
    }

    const heap = this.heap;
    const firstNode = heap[1];
    // .pop to avoid .shift loop.
    const lastNode = heap.pop();

    // last item is being removed, no more work required
    if (heap.length === 1) {
      return firstNode;
    }

    // last node is overwriting the idx 1 to "remove" idx 1
    heap[1] = lastNode;
    // since we put the lastNode at the start, it needs to be swapped down to it's correct position to restore the order
    this.shiftDown();
    return firstNode;
  }

  /**
   * Runs extract `amount` times to return an array of the extracted items.
   * - Time: O(amount * log(n)).
   * - Space: O(amount).
   * @param {number} amount The amount to extract.
   * @returns {HeapItem[]}
   */
  extractMany(amount = 1) {
    /** @type {HeapItem[]} */
    const extractedItems = [];

    for (let i = 0; i < amount; i++) {
      if (this.top() === null) {
        return extractedItems;
      }

      extractedItems.push(this.extract());
    }
    return extractedItems;
  }

  shiftDown() {
    const heap = this.heap;

    let idxOfNodeToShiftDown = 1;
    let idxOfLeftChild = this.idxOfLeftChild(idxOfNodeToShiftDown);

    // while there is at least 1 child
    while (idxOfLeftChild < heap.length) {
      const idxOfRightChild = this.idxOfRightChild(idxOfNodeToShiftDown);
      let idxOfSmallestChild = idxOfLeftChild;

      const isRightChildSmaller =
        idxOfRightChild < heap.length &&
        this.compareFn(heap[idxOfRightChild], heap[idxOfLeftChild]) < 0;

      if (isRightChildSmaller) {
        idxOfSmallestChild = idxOfRightChild;
      }

      const isParentSmallerOrEqual =
        this.compareFn(heap[idxOfNodeToShiftDown], heap[idxOfSmallestChild]) <=
        0;

      if (isParentSmallerOrEqual) {
        break;
      }

      this.swap(idxOfNodeToShiftDown, idxOfSmallestChild);

      // follow this node since it was just swapped to see if it needs to be swapped again
      idxOfNodeToShiftDown = idxOfSmallestChild;
      idxOfLeftChild = this.idxOfLeftChild(idxOfNodeToShiftDown);
    }
  }

  /**
   * Converts an array into a MinHeap
   * - Time: O(n log(n)) linearithmic.
   * - Space: O(n) linear.
   * @param {HeapItem[]} items
   * @param {CompareFn} compareFn
   */
  static heapify(items = [], compareFn = BinaryHeap.defaultCompareFn) {
    const heap = new BinaryHeap(compareFn);
    items.forEach((val) => heap.insert(val));
    return heap;
  }

  /**
   * Sorts the given array into a new array.
   * - Time: O(n log(n)) linearithmic.
   * - Space: O(n) linear.
   * @param {HeapItem[]} items
   * @param {CompareFn} compareFn
   */
  static heapSort(items = [], compareFn = BinaryHeap.defaultCompareFn) {
    const minHeap = BinaryHeap.heapify(items, compareFn);
    const sorted = [];

    // if we had a max heap, we could loop backwards and instead of push assign by index
    for (let i = 0; i < items.length; i++) {
      sorted.push(minHeap.extract());
    }
    return sorted;
  }

  /**
   * Sorts the given array in place.
   * - Time: O(n log(n)) linearithmic.
   * - Space: O(n) linear.
   * @param {HeapItem[]} items
   * @param {CompareFn} compareFn
   */
  static heapSortInPlace(items = [], compareFn = BinaryHeap.defaultCompareFn) {
    const minHeap = BinaryHeap.heapify(items, compareFn);

    for (let i = 0; i < items.length; i++) {
      items[i] = minHeap.extract();
    }
    return items;
  }
}

BinaryHeap.defaultCompareFn = (a, b) => a - b;

class Person {
  /**
   * @param {string} name
   * @param {number} age
   */
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

/** @type {BinaryHeap<number>} */
/* smallest first: */
const heapOfScores = new BinaryHeap();
/* largest first: */
// const heapOfScores = new BinaryHeap((a, b) => b - a);

// heapOfScores.insert(40);
// heapOfScores.insert(30);
// heapOfScores.insert(30);
// heapOfScores.insert(50);
// heapOfScores.insert(-10);
// heapOfScores.insert(0);
// console.log(heapOfScores.extract());
// heapOfScores.insert(10);
// heapOfScores.insert(20);

// console.log(heapOfScores.extract());
// console.log(heapOfScores.extract());
// console.log(heapOfScores.extract());
// console.log(heapOfScores.extract());
// console.log(heapOfScores.extract());
// console.log(heapOfScores.extract());
// console.log(heapOfScores.extract());
// console.log(heapOfScores.extract());

/** @type {BinaryHeap<Person>} */
/* youngest first: */
const heapOfPeople = new BinaryHeap(
  (personA, personB) => personA.age - personB.age
);

/* oldest first: */
// const heapOfPeople = new BinaryHeap(
//   (personA, personB) => personB.age - personA.age
// );

// heapOfPeople.insert(new Person("one", 30));
// heapOfPeople.insert(new Person("two", 40));
// heapOfPeople.insert(new Person("three", 35));
// heapOfPeople.insert(new Person("four", 25));
// console.log(heapOfPeople.extract());
// heapOfPeople.insert(new Person("five", 32));

// console.log(heapOfPeople.extract());
// console.log(heapOfPeople.extract());
// console.log(heapOfPeople.extract());
// console.log(heapOfPeople.extract());
// console.log(heapOfPeople.extract());

module.exports = { BinaryHeap };
