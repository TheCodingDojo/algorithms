/* 
  Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3];
const expected1 = 6;

const nums2 = [1];
const expected2 = 1;

const nums3 = [];
const expected3 = 0;

/**
 * Add params if needed for recursion
 * Recursively sums the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The sum of the given nums.
 */
function sumArr(nums) {}

/*****************************************************************************/

/**
 * Recursively sums the given array.
 * - Time: O(n) linear.
 * - Space: O(n) linear due to the call stack.
 * @param {Array<number>} nums
 * @returns {number} The sum of the given nums.
 */
function sumArr(nums = [], i = 0) {
  if (i === nums.length) {
    return 0;
  }
  return nums[i] + sumArr(nums, i + 1);
}

function sumArr2(nums = [], sum = 0, i = 0) {
  if (i === nums.length) {
    return sum;
  }
  return sumArr2(nums, sum + nums[i], i + 1);
}

module.exports = { sumArr, sumArr2 };
