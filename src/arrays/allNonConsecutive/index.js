/* 
  Given an array of ints, find all the non-consecutive integers
  A number is non-consecutive if it is NOT exactly 1 larger than the previous element.

  The first element is never considered non-consecutive.

  Return an array of objects where each object contains the number itself
  and it's index.
*/

const numbers1 = [1, 2, 3, 4, 6, 7, 8, 10];
const expected1 = [
  { i: 4, n: 6 },
  { i: 7, n: 10 },
];

const numbers2 = [];
const expected2 = [];

const numbers3 = [1, 3, 7, 9];
const expected3 = [
  { i: 1, n: 3 },
  { i: 2, n: 7 },
  { i: 3, n: 9 },
];
// Explanation: Index 0 has no number before it, so it is not included.

/**
 * Finds all the non-consecutive (out of order) numbers from the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNumbers
 * @typedef {Array<{i: number, n: number}>} NonConsecutiveNumbers Array of objects.
 * @property {number} i The index of the non consecutive number.
 * @property {number} n The non consecutive number itself.
 * @returns {NonConsecutiveNumbers}
 */
function allNonConsecutive(sortedNumbers) {}

/*****************************************************************************/

/**
 * Finds all the non-consecutive (out of order) numbers from the given array.
 * - Time: O(n) linear.
 * - Space: O(n) linear, potentially all are saved in the new array.
 * @param {Array<number>} sortedNumbers
 * @typedef {Array<{i: number, n: number}>} NonConsecutiveNumbers Array of objects.
 * @property {number} i The index of the non consecutive number.
 * @property {number} n The non consecutive number itself.
 * @returns {NonConsecutiveNumbers}
 */
function allNonConsecutive(sortedNumbers) {
  const nonConsecutiveNumbers = [];

  for (let i = 1; i < sortedNumbers.length; i++) {
    const prevNum = sortedNumbers[i - 1];
    const currNum = sortedNumbers[i];

    if (prevNum + 1 !== currNum) {
      nonConsecutiveNumbers.push({
        i: i,
        n: currNum,
      });
    }
  }
  return nonConsecutiveNumbers;
}

module.exports = { allNonConsecutive };
