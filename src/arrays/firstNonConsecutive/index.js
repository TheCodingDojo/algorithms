/* 
  Given an array of integers, return the first non-consecutive integer
    - a non-consecutive integer is one that is NOT exactly 1 larger
      than the previous number
*/

const nums1 = [];
const expected1 = null;

const nums2 = [1, 2, 3, 4, 6, 7, 8];
const expected2 = 6;

const nums3 = [1, 4, 5, 6];
const expected3 = 4;

function firstNonConsecutive(nums) {
  for (let i = 1; i < nums.length; i++) {
    const prevNum = nums[i - 1];
    const currNum = nums[i];

    if (prevNum + 1 !== currNum) {
      return currNum;
    }
  }
  return null;
}

module.exports = { firstNonConsecutive };
