/* 
  https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/

  Stable sort
  
  Time Complexity
    - Best: O(n) linear when array is already sorted.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic when the array is reverse sorted.

  Space: O(1) constant.

  For review, create a function that uses BubbleSort to sort an unsorted array in-place.

  For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
*/

const numbersOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numbersReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts the given numbers in-place by mutating the array.
 * Best: O(n) linear when array is already sorted.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<number>} numbers
 * @returns {Array<number>} The given numbers after being sorted.
 */
function bubbleSort(numbers = []) {}

/*****************************************************************************/

/**
 * Sorts the given numbers in-place by mutating the array.
 * Best: O(n) linear when array is already sorted.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<number>} numbers
 * @returns {Array<number>} The given numbers after being sorted.
 */
function bubbleSort(numbers = []) {
  let isSorted = false;

  while (isSorted === false) {
    isSorted = true;

    for (let i = 0; i < numbers.length - 1; i++) {
      const j = i + 1;

      if (numbers[i] > numbers[j]) {
        isSorted = false;
        const temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp;
      }
    }
  }
  return numbers;
}

/**
 * A comparison function to determines how to order based on the return value.
 *    - `=== 0`: keep original order of `a` and `b`
 *    - `< 0`: sort `a` before `b`
 *    - `> 0`: sort `a` after `b`
 * @callback CompareFn
 * @param {any} a The left item.
 * @param {any} b The right item.
 * @returns {number} Determines if `a` and `b` are swapped or not.
 */

/**
 * Sorts the given items in-place by mutating the array.
 * Best: O(n) linear when array is already sorted.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<any>} items
 * @param {CompareFn} compareFn
 * @example
 * ```
 * // By default this is sorted in ascending order.
 * bubbleSortFlexible([5, 3, 6, 1, 8]);
 *
 * // Descending sort.
 * bubbleSortFlexible([5, 3, 6, 1, 8], (a, b) => b - a);
 *
 * // Sort by person.age ascending.
 * bubbleSortFlexible(persons, (a, b) => a.age - b.age);
 * ```
 * @returns {Array<number>} The given items after being sorted.
 */
function bubbleSortFlexible(items = [], compareFn = (a, b) => a - b) {
  let isSorted = false;

  while (isSorted === false) {
    isSorted = true;

    for (let idxA = 0; idxA < items.length - 1; idxA++) {
      const idxB = idxA + 1;
      const comparisonResult = compareFn(items[idxA], items[idxB]);

      if (comparisonResult > 0) {
        isSorted = false;
        const temp = items[idxA];
        items[idxA] = items[idxB];
        items[idxB] = temp;
      }
    }
  }
  return items;
}

module.exports = { bubbleSort, bubbleSortFlexible };
