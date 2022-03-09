// https://www.hackerrank.com/challenges/diagonal-difference/problem
/* 
  Given a square matrix (2d array) of integers
  Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

const squareMatrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];
const expected1 = 2;
/* 
  left to right diagonal: 1 + 5 + 9 = 15
  right to left diagonal: 3 + 5 + 9 = 17
  absolute difference = 2
*/

const squareMatrix2 = [
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
];
const expected2 = 0;
/* 
  left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
  right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
  absolute difference = 0
*/

/**
 * Calculates the absolute diagonal difference of a square matrix.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Array<number>>} sqrMatrix A 2d array of numbers representing
 *    a square matrix (rows and columns).
 * @returns {number} Represents the absolute difference between the top left to
 *    bottom right diagonal and the top right to bottom left diagonal.
 */
function diagonalDifference(sqrMatrix) {}

/*****************************************************************************/

/**
 * Calculates the absolute diagonal difference of a square matrix.
 * - Time: O(n) linear. The nested arrays are not looped over, if they were,
 *    the time complexity would be O(n^2) since this is a square matrix,
 *    meaning the nested arrays are the same length as the outer array.
 * - Space: O(1) constant.
 * @param {Array<Array<number>>} sqrMatrix A 2d array of numbers representing
 *    a square matrix (rows and columns).
 * @returns {number} Represents the absolute difference between the top left to
 *    bottom right diagonal and the top right to bottom left diagonal.
 */
function diagonalDifference(sqrMatrix) {
  let ltrSum = 0;
  let rtlSum = 0;

  for (let i = 0; i < sqrMatrix.length; i++) {
    const row = sqrMatrix[i];
    ltrSum += row[i];
    rtlSum += row[row.length - i - 1];
  }
  return Math.abs(ltrSum - rtlSum);
}

/**
 * - Time: O(n) linear.
 * - Space: O(1) constant.
 */
const functionalDiagonalDifference = (sqrMatrix) =>
  Math.abs(
    sqrMatrix.reduce(
      (diff, row, i) => diff + row[i] - row[row.length - i - 1],
      0
    )
  );

module.exports = { diagonalDifference, functionalDiagonalDifference };
