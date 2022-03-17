/* 
Companies that have given this algo: Companies: Facebook, Amazon, Microsoft

Given an array of unordered ints, determine whether or not there are 3 ints
that add up to 0.

Bonus: Time: O(n^2)
Bonus: Time: O(n^2) Space: O(1).
*/

const nums1 = [0, -1, 2, -3, 1];
const expected1 = true;

const nums2 = [3, 1, 2, 6, 4];
const expected2 = false;

const nums3 = [5, -1, 3, 2, -4, 1, 6];
const expected3 = true;

/**
 * Determines whether or not there are 3 integers that add up to 0.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered.
 * @returns {Boolean}
 */
function findTriplets(nums) {}

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
      const additiveInverse = twoSum * -1;

      if (set.has(additiveInverse)) {
        return true;
      }
    }
  }
  return false;
}

/**
 * Determines whether or not there are 3 integers that add up to 0.
 * - Time: O(2n^2) -> O(n^2) quadratic. Sorting is usually n^2 at worst.
 * - Space: O(1) constant.
 * @param {Array<number>} nums Unordered.
 * @returns {Boolean}
 */
function findTriplets2(nums) {
  /* 
  This mutates the original given array which is often undesirable. Copying the
  array first then sorting the copy but copying will add another O(n) operation.
  */
  nums.sort();

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) {
      break;
    }

    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let total = nums[i] + nums[left] + nums[right];

      if (total === 0) {
        return true;
      }

      if (total < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return false;
}

module.exports = { findTriplets, findTripletsBruteForce, findTriplets2 };
