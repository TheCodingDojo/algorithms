/* 
  Array: Second-Largest

  Return the second-largest element of an array, or null if there is none.

  Bonus: do it with one loop and no nested loops
*/

// 2nd largest is 2nd
const nums1 = [2, 3, 1, 4];
const expected1 = 3;

// largest is first
const nums2 = [4, 1, 3, 2];
const expected2 = 3;

// largest duplicated first
const nums3 = [4, 4, 4, 1, 3, 2];
const expected3 = 3;

// 2nd largest is first
const nums4 = [3, 1, 4, 2];
const expected4 = 3;

// largest is 2nd
const nums5 = [3, 4, 2, 1];
const expected5 = 3;

const nums6 = [3, 3];
const expected6 = null;

const nums7 = [2];
const expected7 = null;

const nums8 = [];
const expected8 = null;

/**
 * Finds the second largest int from the given array and returns it or null.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {?number} The second largest int from the given array or null.
 *    The ? in front means it's nullable.
 */
function secondLargest(nums) {
  // code here
}

// Tests
const result1 = secondLargest2(nums1);
console.log(result1, "should equal", expected1);

const result2 = secondLargest2(nums2);
console.log(result2, "should equal", expected2);

const result3 = secondLargest2(nums3);
console.log(result3, "should equal", expected3);

const result4 = secondLargest2(nums4);
console.log(result4, "should equal", expected4);

const result5 = secondLargest2(nums5);
console.log(result5, "should equal", expected5);

const result6 = secondLargest2(nums6);
console.log(result6, "should equal", expected6);

const result7 = secondLargest2(nums7);
console.log(result7, "should equal", expected7);

const result8 = secondLargest2(nums8);
console.log(result8, "should equal", expected8);

/*****************************************************************************/

/**
 * Finds the second largest int from the given array and returns it or null.
 * - Time: O(2n) -> O(n) linear n = nums.length. This solution loops through
 *    nums twice.
 * - Space: O(1) constant because this algo doesn't create a new array or
 *    object that grows in size as the input array grows in size.
 * @param {Array<number>} nums
 * @returns {?number} The second largest int from the given array or null.
 *    The ? in front means it's nullable.
 */
function secondLargest(nums = []) {
  if (nums.length < 2) {
    return null;
  }

  let largest = nums[0];
  let secondLargest = nums[1];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      largest = nums[i];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (secondLargest === largest && nums[i] < largest) {
      secondLargest = nums[i];
    }

    if (nums[i] < largest && nums[i] > secondLargest) {
      secondLargest = nums[i];
    }
  }

  // all dupes
  if (largest === secondLargest) {
    return null;
  }
  return secondLargest;
}

/**
 * - Time: O(n) linear, because worst case have to loop through whole array.
 * - Space: O(1) constant, algo doesn't need to use up any extra memory as the
 *    size of input grows.
 * @param {Array<number>} nums
 * @returns {?number}
 */
function secondLargest2(nums = []) {
  if (nums.length < 2) {
    return null;
  }

  let max = nums[0];
  let secondLargest = nums[1];

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];

    if (secondLargest === max && num < max) {
      secondLargest = nums[i];
    } else if (num > max) {
      secondLargest = max; // second largest equals old max
      max = num;
    } else if (num > secondLargest && num < max) {
      secondLargest = num;
    }
  }

  // all dupes
  if (max === secondLargest) {
    return null;
  }
  return secondLargest;
}

module.exports = {
  secondLargest,
  secondLargest2,
};
