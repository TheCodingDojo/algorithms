/* 
  Array: Binary Search (non recursive)

  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .

  Bonus (alumni interview): 
    first complete it without the bonus, because they ask for additions
    after the initial algo is complete

    return how many times the given number occurs
*/

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

// bonus, how many times does the search num appear?
const nums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const searchNum4 = 2;
const expected4 = 4;

/**
 * Efficiently determines if the given num exists in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the given num exists in the given array.
 */
function binarySearch(sortedNums, searchNum) {}

/*****************************************************************************/

/**
 * - Time: O(n log(n)) logarithmic due to divide and conquer approach
 *    (continually splitting in half).
 * - Space: O(1) constant.
 */
function binarySearch(sortedNums, searchNum) {
  let leftIdx = 0;
  let rightIdx = sortedNums.length - 1;

  while (leftIdx <= rightIdx) {
    let midIdx = Math.floor(rightIdx - leftIdx / 2);

    if (sortedNums[midIdx] === searchNum) {
      return true;
      // Bonus:
      // return countAdjacentDupes(sortedNums, midIdx);
    }

    if (searchNum < sortedNums[midIdx]) {
      rightIdx = midIdx - 1;
    } else {
      leftIdx = midIdx + 1;
    }
  }
  return false;
  // Bonus:
  // return 0;
}

function countAdjacentDupes(arr, idx) {
  let count = 1;
  let elem = arr[idx];

  if (idx < 0 || idx >= arr.length) {
    return 0;
  }

  for (
    let leftIdx = idx - 1, rightIdx = idx + 1;
    leftIdx >= 0 || rightIdx <= arr.length - 1;
    leftIdx--, rightIdx++
  ) {
    const leftElem = arr[leftIdx];
    const rightElem = arr[rightIdx];

    if (leftElem === elem) {
      count++;
    }

    if (rightElem === elem) {
      count++;
    }
  }
  return count;
}

/**
 * Exponential search can out-perform binary search
 *    when the element being searched for is near the beginning of the array.
 *    Exponential search narrows down the array first, then calls binary search
 *    on the narrowed down array.
 * - Time: O(log2 i) where i is the location where searchNum is located.
 * - Space: O(1) constant.
 */
function exponentialSearch(sortedNums, searchNum) {
  if (sortedNums[0] === searchNum) {
    return true;
  }

  // repeatedly double i to quickly narrow down range
  let i = 1;
  while (i < sortedNums.length && sortedNums[i] <= searchNum) {
    i *= 2;
  }

  return binarySearch(
    sortedNums,
    searchNum,
    i / 2,
    Math.min(i, sortedNums.length)
  );
}

module.exports = { binarySearch };
