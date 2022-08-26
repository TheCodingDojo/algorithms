/* 
  https://visualgo.net/en/sorting
    
  Selection sort works by iterating through the list, finding the minimum
  value, and moving it to the beginning of the list. Then, ignoring the first
  position, which is now sorted, iterate through the list again to find the
  next minimum value and move it to index 1. This continues until all values
  are sorted.

  Unstable sort.
  
  Time Complexity
    - Best: O(n^2) quadratic.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic.

  Space: O(1) constant.

  Selection sort is one of the slower sorts.
  - ideal for: pagination, where page 1 displays 10 records for example,
      you run selection sort for 10 iterations only to display the first 10
      sorted items.
*/

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts given array in-place.
 * Best: O(n^2) quadratic.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array after being sorted.
 */
function selectionSort(nums = []) {}

/*****************************************************************************/

/**
 * Sorts given array in-place.
 * Best: O(n^2) quadratic.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic.
 * @param   {Array<number>} nums
 * @return  {Array<number>} The given array after being sorted.
 */
function selectionSort(nums = []) {
  const len = nums.length;
  let selectedIdx = 0;
  let idxOfCurrMin = 0;

  while (selectedIdx < len) {
    for (let i = selectedIdx; i < len; i++) {
      if (nums[i] < nums[idxOfCurrMin]) {
        idxOfCurrMin = i;
      }
    }

    if (nums[selectedIdx] !== nums[idxOfCurrMin]) {
      // Swap.
      [nums[selectedIdx], nums[idxOfCurrMin]] = [
        nums[idxOfCurrMin],
        nums[selectedIdx],
      ];
    }
    selectedIdx += 1;
    // reset idxOfCurrMin to the next selected index we are going to work with to find the next min
    idxOfCurrMin = selectedIdx;
  }
  return nums;
}

module.exports = { selectionSort };
