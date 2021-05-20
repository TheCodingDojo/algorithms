/* 
Given an array of unordered ints, determine whether or not there are 3 ints
that add up to 0.

Bonus: Time: O(n^2)
Bonus: Time: O(n^2) Space: O(1).
*/

const nums1 = [0, -1, 2, -3, 1];
const expected1 = true;

const nums2 = [1, 2, 3];
const expected2 = false;

/**
 * Determines whether or not there are 3 integers that add up to 0.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered.
 * @returns {Boolean}
 */
function findTriplets(nums) {}

module.exports = { findTriplets };

/*****************************************************************************/

/**
 * Determines whether or not there are 3 integers that add up to 0.
 * - Time: O(n^3) cubed.
 * - Space: O(1) constant.
 * @param {Array<number>} nums Unordered.
 * @returns {Boolean}
 */
function findTripletsBruteForce(nums) {
  for (let i = 0; i < nums.length; i++) {
    const n1 = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      const n2 = nums[j];

      for (let k = j + 1; k < nums.length; k++) {
        const n3 = nums[k];

        if (n1 + n2 + n3 === 0) {
          return true;
        }
      }
    }
  }
  return false;
}

/**
 * Determines whether or not there are 3 integers that add up to 0.
 * - Time: O(n^2) quadratic.
 * - Space: O(n) linear.
 * @param {Array<number>} nums Unordered.
 * @returns {Boolean}
 */
function findTriplets(nums) {
  const set = new Set(nums);

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      const twoSum = nums[i] + nums[j];
      const additiveInverse = -1 * twoSum;

      if (set.has(additiveInverse)) {
        return true;
      }
    }
  }
  return false;
}

/** https://afteracademy.com/blog/triplet-with-zero-sum
 * Determines whether or not there are 3 integers that add up to 0.
 * - Time: O(n^2) quadratic.
 * - Space: O(1) constant.
 * @param {Array<number>} nums Unordered.
 * @returns {Boolean}
 */
function findTripletsOptimal(nums) {}
