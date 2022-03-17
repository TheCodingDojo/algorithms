/* 
  Balance Point

  Write a function that returns whether the given
  array has a balance point BETWEEN indices, 
  where one side’s sum is equal to the other’s. 
*/

const nums1 = [1, 2, 3, 4, 10];
const expected1 = true;
// Explanation: between indices 3 & 4

const nums2 = [1, 2, 4, 2, 1];
const expected2 = false;

/**
 * Determines if there is a balance point BETWEEN indexes where the sum of the
 *    left side is equal to the sum of the right side of the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {boolean} Indicates if a balance point exists.
 */
function balancePoint(nums) {}

/*****************************************************************************/

/**
 * - Time: O(2n) -> O(n) linear.
 * - Space: O(1) constant.
 */
function balancePoint(nums) {
  const length = nums.length;

  if (length < 2) {
    return false;
  }

  let left = nums[0];
  let right = 0;

  for (let i = 1; i < length; i++) {
    right += nums[i];
  }

  for (let i = 1; i < length; i++) {
    if (left === right) {
      return true;
    }

    right -= nums[i];
    left += nums[i];
  }
  return false;
}

/**
 * https://leetcode.com/problems/partition-equal-subset-sum/
 * Dynamic programming bonus: can any order of arr result in a balance point
 * start with 0, add and subtract first num to 0 and save results on every
 * subsequent num, add and subtract it to each previous result check at the
 * end if a 0 exists due to one of the sums or differences cancelling out.
 */
function isBalancePointPossible(nums) {
  const calcs = { "-1": new Set().add(0) };

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    calcs[i] = new Set();

    for (const prevCalc of calcs[i - 1]) {
      calcs[i].add(prevCalc + n);
      calcs[i].add(prevCalc - n);
    }
  }
  return calcs[nums.length - 1].has(0);
}

module.exports = { balancePoint };
