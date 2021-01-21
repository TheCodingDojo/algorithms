/* 
  Given an array of integers
  return the index where the smallest integer is located

  return -1 if there is no smallest integer (array is empty) 
  since -1 is not a valid index, this indicates it couldn't be found

  If the smallest integer occurs more than once, return the index of the first one.
*/

const nums1 = [5, 2, 3];
const expected1 = 1;

const nums2 = [5, 2, 2, 3];
const expected2 = 1;

const nums3 = [];
const expected3 = -1;

/**
 * Returns the index of the smallest number from the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @return {number} Index of smallest number or -1 if empty given array.
 */
function indexOfMinVal(nums) {
  // code here
}

module.exports = { indexOfMinVal };

/*****************************************************************************/

/**
 * Returns the index of the smallest number from the given array.
 * - Time: O(n) linear, n = nums.length. Must loop through all nums to find
 *    the minimum.
 * - Space: O(1) constant. No new objects or arrays are created that grow in
 *    size as the input array grows in size.
 * @param {Array<number>} nums
 * @return {number} Index of smallest number or -1 if empty given array.
 */
function indexOfMinVal(nums) {
  let minIdx = -1;

  for (let i = 0; i < nums.length; i++) {
    if (minIdx === -1) {
      minIdx = i;
    } else if (nums[i] < nums[minIdx]) {
      minIdx = i;
    }
  }
  return minIdx;
}
