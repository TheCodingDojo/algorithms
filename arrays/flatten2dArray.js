/*
  Input: a 2 dimensional array of integers
  Output: A 1 dimensional array of all the same elements preserving original order
*/

// this given array has a length of 3 because it has 3 arrays as items
const twoDimArr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const expected1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const twoDimArr2 = [[1], [2], [3]];
const expected2 = [1, 2, 3];

const twoDimArr3 = [[], [], [10, 20]];
const expected3 = [10, 20];

/**
 * Flattens a two dimensional array into a new one dimensional array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Array<any>>} twoDimArr An array of arrays of any data type.
 * @return {Array<any>} The flattened array that should be one dimensional.
 */
function flatten2dArray(twoDimArr) {
  // code here
}

module.exports = { flatten2dArray };

/*****************************************************************************/

/**
 * Flattens a two dimensional array into a new one dimensional array.
 * - Time: O(n * m) n = twoDimArr.length, m = longest nested
 *    array length (to capture worst case) The inner loop is executed "n" times
 *    due to the outer loop, this is why the "m" operations are multiplied.
 *    If you have a task that requires 3 individual actions, and you perform
 *    this task 10 times, you do 10 * 3 actions. This would be
 *    O(n * n) -> O(n^2) if we knew the nested arrays were the same length as
 *    the outer array.
 * - Space: O(n * m) Because of the new array that is created grows in size in
 *    proportion to the sizes of "n" and "m".
 * @param {Array<Array<any>>} twoDimArr An array of arrays of any data type.
 * @return {Array<any>} The flattened array that should be one dimensional.
 */
function flatten2dArray(twoDimArr) {
  var flattened = [];

  for (let i = 0; i < twoDimArr.length; i++) {
    for (let j = 0; j < twoDimArr[i].length; ++j) {
      flattened.push(twoDimArr[i][j]);
    }
  }
  return flattened;
}

function flatten2dArr(twoDimArr) {
  var flattened = [];

  for (const subArr of twoDimArr) {
    for (const elem of subArr) {
      flattened.push(elem);
    }
  }
  return flattened;
}
