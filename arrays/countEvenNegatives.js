/* 
Given an array of numbers,
return a count of how many are both even and negative.
*/

const nums1 = [1, 5, -1, 2, -4, 9, -10, 0, -3, -2];
const expected1 = 3;

/**
 * Counts how many numbers are both even and negative.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} nums
 * @returns {number} The count.
 */
function countEvenNegatives(nums) {}

/*****************************************************************************/

/**
 * Counts how many numbers are both even and negative.
 * - Time: O(n) linear, n = nums.length. We have to loop over the whole array.
 * - Space: O(1) constant. The amount of extra space taken up by our algo
 *    remains constant even as the given array grows in length because we are
 *    not storing more items if the array is larger since we are just storing
 *    a single count.
 * @param {number} nums
 * @returns {number} The count.
 */
function countEvenNegatives(nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0 && nums[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}
