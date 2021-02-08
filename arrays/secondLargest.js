/* 
  Array: Second-Largest

  Return the second-largest element of an array, or null if there is none.

  Bonus: do it with one loop and no nested loops
*/

const nums1 = [2, 3, 1, 4];
const expected1 = 3;

const nums2 = [3, 3];
const expected2 = null;

const nums3 = [2];
const expected3 = null;

const nums4 = [];
const expected4 = null;

/**
 * Finds the second largest int from the given array and returns it or null.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @return {?number} The second largest int from the given array or null.
 *    The ? in front means it's nullable.
 */
function secondLargest(nums) {
  // code here
}

// Tests
const result1 = secondLargest(nums1);
console.log(result1, "should equal", expected1);

const result2 = secondLargest(nums2);
console.log(result2, "should equal", expected2);

const result3 = secondLargest(nums3);
console.log(result3, "should equal", expected3);

const result4 = secondLargest(nums4);
console.log(result4, "should equal", expected4);

module.exports = { secondLargest };

/*****************************************************************************/

/**
 * Finds the second largest int from the given array and returns it or null.
 * - Time: O(2n) -> O(n) linear n = nums.length. This solution loops through
 *    nums twice.
 * - Space: O(1) constant because this algo doesn't create a new array or
 *    object that grows in size as the input array grows in size.
 * @param {Array<number>} nums
 * @return {?number} The second largest int from the given array or null.
 *    The ? in front means it's nullable.
 */
function secondLargest(nums) {
  if (nums.length < 2) {
    return null;
  }

  let largest = nums[0];
  let secondLargest = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > largest) {
      largest = nums[i];
    }
  }

  for (let i = 0; i < nums.length; i++) {
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
 */
function secondLargest2(nums) {
  if (nums.length < 2) {
    return null;
  }

  let max = nums[0];
  let secondLargest = nums[1];

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];

    if (num > max) {
      secondLargest = max; // second largest equals old max
      max = num;
    } else if (num > secondLargest) {
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
