/* 
  Visualization:
  https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/

  Create a function that uses yesterday’s partition to fully sort an array
  in-place.

  Unstable sort.
  
  Time Complexity
    - Best: O(n log(n)) linearithmic.
    - Average: O(n log(n)) linearithmic.
    - Worst: O(n^2) quadratic.
  
  Space: O(1) constant.

  Steps:
    - start by partitioning the full array
        (use the previously built partition algo).
    - then partition the left side of the array
        (left of the returned partition idx) and the right side
        (right of the returned partition idx), recursively.
*/

const { partition } = require("../partition");

const numbers1 = [11, 8, 14, 3, 6, 2, 7];
const expected1 = [2, 3, 6, 7, 8, 11, 14];

const numbers2 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const expected2 = [1, 3, 4, 9, 12, 13, 17, 21, 27];

const numbers3 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
const expected3 = [2, 3, 3, 3, 6, 7, 8, 11, 14];

const numbers4 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const expected4 = [1, 3, 4, 9, 12, 13, 17, 21, 27];

/**
 * Recursively sorts the given array in-place by mutating the array.
 * Best: O(n log(n)) linearithmic.
 * Average: O(n log(n)) linearithmic.
 * Worst: O(n^2) quadratic.
 * @see https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
 *    visualization.
 * @param {Array<number>} numbers
 * @param {number} left The index indicating the start of the slice of the
 *    given array being processed.
 * @param {number} right The index indicating the end of the slice of the
 *    given array being processed.
 * @returns {Array<number>} The given array after being sorted.
 */
function quickSort(numbers = [], left = 0, right = numbers.length - 1) {}

/*****************************************************************************/

/**
 * Recursively sorts the given array in-place by mutating the array.
 * Best: O(n log(n)) linearithmic.
 * Average: O(n log(n)) linearithmic.
 * Worst: O(n^2) quadratic.
 * @see https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
 *    visualization.
 * @param {Array<number>} numbers
 * @param {number} left The index indicating the start of the slice of the
 *    given array being processed.
 * @param {number} right The index indicating the end of the slice of the
 *    given array being processed.
 * @returns {Array<number>} The given array after being sorted.
 */
function quickSort(numbers = [], left = 0, right = numbers.length - 1) {
  if (left < right) {
    const pivotIndex = partition(numbers, left, right);
    quickSort(numbers, left, pivotIndex);
    quickSort(numbers, pivotIndex + 1, right);
  }
  return numbers;
}

/**
 * Iteratively sorts the given array in-place by mutating the array. This is
 * faster than recursion because it's the same iterations but fewer function
 * calls.
 * Best: O(n log(n)) linearithmic.
 * Average: O(n log(n)) linearithmic.
 * Worst: O(n^2) quadratic.
 * @see https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
 *    visualization.
 * @param {Array<number>} numbers
 * @param {number} left The index indicating the start of the slice of the
 *    given array being processed.
 * @param {number} right The index indicating the end of the slice of the
 *    given array being processed.
 * @returns {Array<number>} The given array after being sorted.
 */
function quickerSort(numbers = [], left = 0, right = numbers.length - 1) {
  const stack = [
    {
      leftIdx: left,
      rightIdx: right,
    },
  ];

  while (stack.length > 0) {
    const { leftIdx, rightIdx } = stack.pop();

    if (leftIdx < rightIdx) {
      const pivotIndex = partition(numbers, leftIdx, rightIdx);

      /* 
      Each item popped will result in 2 being pushed for the left and right
      side (and each left and right side has it's own left and right side)
      which mirrors how the two recursive function calls branch.
      */
      stack.push(
        {
          leftIdx,
          rightIdx: pivotIndex,
        },
        {
          leftIdx: pivotIndex + 1,
          rightIdx,
        }
      );
    }
  }

  return numbers;
}

module.exports = { quickSort, quickerSort };
