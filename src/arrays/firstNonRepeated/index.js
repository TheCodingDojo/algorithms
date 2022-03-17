/* 
  Given an array of integers
  return the first integer from the array that is not repeated anywhere else

  If there are multiple non-repeated integers in the array,
  the "first" one will be the one with the lowest index.
*/

const nums1 = [3, 5, 4, 3, 4, 6, 5];
const expected1 = 6;

const nums2 = [3, 5, 5];
const expected2 = 3;

const nums3 = [3, 3, 5];
const expected3 = 5;

const nums4 = [5];
const expected4 = 5;

const nums5 = [];
const expected5 = null;

/**
 * Finds the first int from the given array that has no duplicates. I.e., the
 *    item at the lowest index that doesn't appear again in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number|null} The first int value from the given array that has no
 *    dupes or null if there is none.
 */
function firstNonRepeated(nums) {}

/*****************************************************************************/

/**
 * - Time: O(2n) -> O(n) linear.
 * - Space: O(n) linear.
 */
function firstNonRepeated(nums = []) {
  const freq = {};

  for (const num of nums) {
    if (freq.hasOwnProperty(num)) {
      freq[num]++;
    } else {
      freq[num] = 1;
    }
  }

  // obj key order is not guaranteed (unless using a Map instance)
  // so loop back thru nums for the proper order of elems
  for (const num of nums) {
    if (freq[num] === 1) {
      return num;
    }
  }
  return null; // all dupes
}

/**
 * - Time: O(n^2) quadratic.
 * - Space: O(1) constant.
 */
function firstUniq(nums = []) {
  for (let i = 0; i < nums.length; i++) {
    let isUnique = true;

    /**
     * If nested loops starts at i + 1, it could give a false positive b/c of
     * only looking for dupes in front and could miss a dupe that came before.
     */
    for (let j = 0; j < nums.length; ++j) {
      if (i !== j && nums[i] === nums[j]) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) {
      return nums[i];
    }
  }
  return null; // all dupes
}

module.exports = { firstNonRepeated, firstUniq };
