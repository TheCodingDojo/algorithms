/* 
  Given an array of ints, find all the non-consecutive integers
  A number is non-consecutive if it is NOT exactly 1 larger than the previous element.

  The first element is never considered non-consecutive.

  Return an array of objects where each object contains the number itself
  and it's index.
*/

const nums1 = [1, 2, 3, 4, 6, 7, 8, 10];
const expected1 = [
  { i: 4, n: 6 },
  { i: 7, n: 10 },
];

/**
 * Finds all the non-consecutive (out of order) numbers from the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @typedef {Array<{i: number, n: number}>} NonConsecNums Array of objects.
 * @property {number} i The index of the non consecutive number.
 * @property {number} n The non consecutive number itself.
 * @return {NonConsecNums}
 */
function allNonConsecutive(sortedNums) {}

module.exports = { allNonConsecutive };

/*****************************************************************************/

/**
 * Finds all the non-consecutive (out of order) numbers from the given array.
 * - Time: O(n) linear.
 * - Space: O(n) linear, potentially all are saved in the new array.
 * @param {Array<number>} sortedNums
 * @typedef {Array<{i: number, n: number}>} NonConsecNums Array of objects.
 * @property {number} i The index of the non consecutive number.
 * @property {number} n The non consecutive number itself.
 * @return {NonConsecNums}
 */
function allNonConsecutive(sortedNums) {
  const output = [];

  for (let i = 1; i < sortedNums.length; i++) {
    const prevNum = sortedNums[i - 1];
    const currNum = sortedNums[i];

    if (prevNum + 1 !== currNum) {
      output.push({
        i: i,
        n: currNum,
      });
    }
  }
  return output;
}
