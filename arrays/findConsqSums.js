// Interview Algo given to alumni

/* 
  You are given a list of integers. Find all the consecutive sets of 
  integers that adds up to the sum passed in as one of the inputs.
*/

const nums1 = [2, 5, 3, 6, 7, 23, 12];
const sum1 = 16;
const expected1 = [
  [2, 5, 3, 6],
  [3, 6, 7],
];

// Bonus:
const nums2 = [2, 5, 3, 6, 7, 0, 0, 23, 12];
const sum2 = 16;
const expected2 = [
  [2, 5, 3, 6],
  [3, 6, 7],
  [3, 6, 7, 0],
  [3, 6, 7, 0, 0],
];

/**
 * Finds all the sets of consecutive numbers that sum to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered nums.
 * @param {number} targetSum
 * @return {Array<Array<number>>} 2d array where each nested array is a set of
 *    consecutive numbers that add up to the given targetSum. Consecutive in
 *    this context means the numbers whose indexes are one after the other
 *    only.
 */
function findConsqSums(nums, targetSum) {}

module.exports = { findConsqSums };

/*****************************************************************************/

/**
 * Finds all the sets of consecutive numbers that sum to the given target sum.
 * - Time: O(n^2) quadratic.
 * - Space: O(n^2) quadratic.
 * @param {Array<number>} nums Unordered nums.
 * @param {number} targetSum
 * @return {Array<Array<number>>} 2d array where each nested array is a set of
 *    consecutive numbers that add up to the given targetSum. Consecutive in
 *    this context means the numbers whose indexes are one after the other
 *    only.
 */
function findConsqSums(nums, targetSum) {
  const sums = [];

  for (let i = 0; i < nums.length; i++) {
    const consecNums = [];
    let sum = 0;
    let j = i;

    while (sum <= targetSum && j < nums.length - 1) {
      if (sum + nums[j] <= targetSum) {
        sum += nums[j];
        consecNums.push(nums[j++]);

        if (sum === targetSum) {
          // without slice, future additions to consecNums
          // will be added to the already pushed consecNums via reference
          sums.push(consecNums.slice());
        }
      } else {
        break;
      }
    }
  }
  return sums;
}
