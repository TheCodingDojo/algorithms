/* 
  Given an array of integers, return the first non-consecutive integer
    - a non-consecutive integer is one that is NOT exactly 1 larger
      than the previous number
  
  Input: [1,2,3,4,6,7,8]
  Output: 6

  Input: [1, 2, 3]
  Output: null
*/

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
