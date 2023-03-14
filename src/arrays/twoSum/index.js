// Asked in "Python interview with a LinkedIn engineer: Matching pairs": https://youtu.be/wBXZD436JAg

/*
  Given an array of integers, return indices of the two numbers such that they add up to a specific target.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.

  Bonus: Make it O(n) time
*/

const numbers1 = [2, 11, 7, 15];
const targetSum1 = 9;
const expected1 = [0, 2];
// Explanation: numbers[0] + numbers[2] = 2 + 7 = 9. Return order doesn't matter.

const numbers2 = [10, 3, 2, 5, 4, -1];
const targetSum2 = 6;
const expected2 = [2, 4];

const numbers3 = [3, 8, 4, 1, 9, 0, -2];
const targetSum3 = 6;
const expected3 = [1, 6];

/**
 * Finds the indexes of the numbers that add up to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} numbers Unordered numbers.
 * @param {number} targetSum
 * @returns {Array<number>} The two indexes of the numbers in the given numbers
 *    that add up to the targetSum.
 */
function twoSum(numbers, targetSum) {}

/*****************************************************************************/

/**
 * Finds the indexes of the numbers that add up to the given target sum.
 * - Time: O(n) linear.
 * - Space: O(n) linear.
 * @param {Array<number>} numbers Unordered numbers.
 * @param {number} targetSum
 * @returns {Array<number>} The two indexes of the numbers in the given numbers
 *    that add up to the targetSum.
 */
function twoSum(numbers, targetSum) {
  const numbersToIndex = {};

  for (let i = 0; i < numbers.length; i++) {
    const numA = numbers[i];
    const numB = targetSum - numA;

    if (numbersToIndex.hasOwnProperty(numB)) {
      const idxB = numbersToIndex[numB];
      return [idxB, i];
    }
    numbersToIndex[numA] = i;
  }
  return [];
}

/**
 * NOTE: The `Map` object is often preferred over the plain object when
 * dynamically adding keys and in many other circumstances that you can
 * read more about.
 *
 * Finds the indexes of the numbers that add up to the given target sum.
 * - Time: O(n) linear.
 * - Space: O(n) linear.
 * @param {Array<number>} numbers Unordered numbers.
 * @param {number} targetSum
 * @returns {Array<number>} The two indexes of the numbers in the given numbers
 *    that add up to the targetSum.
 */
function twoSumMap(numbers, targetSum) {
  const numbersToIndex = new Map();

  for (let i = 0; i < numbers.length; i++) {
    const numA = numbers[i];
    const numB = targetSum - numA;

    if (numbersToIndex.has(numB)) {
      const idxB = numbersToIndex.get(numB);
      return [idxB, i];
    }
    numbersToIndex.set(numA, i);
  }
  return [];
}

/**
 * - Time: O(n^2) quadratic.
 * - Space: O(1) constant.
 */
function twoSumSpaceOptimized(numbers, targetSum) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; ++j) {
      if (numbers[i] + numbers[j] === targetSum) {
        return [i, j];
      }
    }
  }
  return [];
}

module.exports = { twoSum, twoSumMap, twoSumSpaceOptimized };
