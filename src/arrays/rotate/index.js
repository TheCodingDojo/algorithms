/* 
https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/

Given an array, rotate the array in place to the right by "k" steps, where "k" is
non-negative.

The given array must be mutated, do not return a new array.
*/

const nums1 = [1, 2, 3, 4, 5, 6, 7];
const k1 = 3;
const expected1 = [5, 6, 7, 1, 2, 3, 4];
/* Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
*/

const nums2 = [-1, -100, 3, 99];
const k2 = 2;
const expected2 = [3, 99, -1, -100];
/* Explanation:
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
*/

const nums3 = [1, 2, 3, 4];
const k3 = 4;
const expected3 = [1, 2, 3, 4];
/* Explanation: 
After 4 rotations it is back to it's starting point.
*/

const nums4 = [1, 2];
const k4 = 5;
const expected4 = [2, 1];
/* 
Explanation: After 2 rotations the array is back to it's original order.
After 4 rotations it is back to it's original order again.
1 more rotation makes 5.
*/

/**
 * Rotates the array items to the right "k" times.
 * @param {Array<number>} nums The numbers to be rotated.
 * @param {number} k The amount of times to rotate the last item to the front.
 * @returns {Array<number>} The given array after being rotated.
 */
function rotate(nums, k) {}

/*****************************************************************************/

/* 
Because an rotating an array as many times as it's length returns it back to
it's original position, we use modulus to get the remainder of k / length so
we can ignore all full cycles that rotate it back to it's original position
and only rotate the remainder.
*/

/**
 * Rotates the array items to the right "k" times.
 * @param {Array<number>} nums The numbers to be rotated.
 * @param {number} k The amount of times to rotate the last item to the front.
 * @returns {Array<number>} The given array after being rotated.
 */
function rotate(nums, k) {
  const rotateAmnt = k % nums.length;
  const numsToRotate = nums.splice(nums.length - rotateAmnt, rotateAmnt);
  nums.splice(0, 0, ...numsToRotate);
  return nums;
}

function rotate2(nums, k) {
  const rotateAmnt = k % nums.length;
  const temp = nums.slice(nums.length - rotateAmnt);

  for (let i = 0; i < nums.length; i++) {
    if (temp.length < nums.length) {
      // this num is being overwritten and needs to be saved.
      temp.push(nums[i]);
    }
    nums[i] = temp[i];
  }
  return nums;
}

function rotateByReversing(nums, k) {
  const rotateAmnt = k % nums.length;
  if (rotateAmnt > 0) {
    reverse(nums, 0, nums.length);
    reverse(nums, 0, rotateAmnt);
    reverse(nums, rotateAmnt);
  }
  return nums;
}

function reverse(arr, start = 0, end = arr.length) {
  while (start < end) {
    [arr[start], arr[end - 1]] = [arr[end - 1], arr[start]];
    start++;
    end--;
  }
  return arr;
}

module.exports = {
  rotate,
  rotate2,
  rotateByReversing,
};
