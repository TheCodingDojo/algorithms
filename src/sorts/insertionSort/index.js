/* 
  - Visualization with playing cards (scroll down):
      https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort
  - Array / bar visualization:
      https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/

  - Stable sort, efficient for small data sets or mostly sorted data sets.

  Time Complexity
    - Best: O(n) linear when array is already sorted.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic when the array is reverse sorted.

  Space: O(1) constant.

  - this sort splits the array into two portions (conceptually, not literally).
  - the left portion will become sorted, the right portion
      (that hasn't been iterated over yet) is unsorted.

  can shift OR swap target element until it reaches desired position
  shifting steps:
  1. consider the first item as sorted
  2. move to the next item
  3. store current item in a temp var (to make this position available to shift items)
  4. if item to the left of current is greater than current item, shift the
      left item to the right.
  5. repeat step 4 as many times as needed
  6. insert current item
  7. move to the next item and repeat

  swap steps:
  1. consider the first item as sorted
  2. move to the next item
  4. if item to left of current item is less than current, swap
  5. repeat step 4 until item to left is less than current item
  6. move to next item and repeat
*/

const numbersOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numbersReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts the given array in-place.
 * Best: O(n) linear when array is already sorted.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<number>} numbers
 * @returns {Array<number>} The given array after being sorted.
 */
function insertionSort(numbers = []) {}

/*****************************************************************************/

/**
 * Sorts the given array in-place.
 * - Best: O(n) linear when array is already sorted.
 * - Average: O(n^2) quadratic.
 * - Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<number>} numbers
 * @returns {Array<number>} The given array after being sorted.
 */
function insertionSort(numbers = []) {
  for (let i = 1; i < numbers.length; i++) {
    // save the current 'target' so this space is available to use for shifting
    let numToInsert = numbers[i];
    let leftIdx = i - 1;

    while (leftIdx >= 0 && numbers[leftIdx] > numToInsert) {
      // shift to the right because it's greater than the item we are going to insert
      numbers[leftIdx + 1] = numbers[leftIdx];
      leftIdx--;
    }
    // shifting complete, insert position located
    numbers[leftIdx + 1] = numToInsert;
  }
  return numbers;
}

function insertionSortSwap(numbers = []) {
  for (let i = 1; i < numbers.length; i++) {
    let currIdx = i; // to avoid altering i directly
    let leftIdx = currIdx - 1; // compare to the left

    while (leftIdx >= 0 && numbers[leftIdx] > numbers[currIdx]) {
      // destructure swap notation
      [numbers[leftIdx], numbers[currIdx]] = [
        numbers[currIdx],
        numbers[leftIdx],
      ];

      // curr got swapped to the left, so currIdx is now 1 to the left
      currIdx--;
      leftIdx = currIdx - 1;
    }
  }
  return numbers;
}

module.exports = { insertionSort, insertionSortSwap };
