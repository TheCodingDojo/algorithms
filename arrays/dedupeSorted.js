/* 
  Given a SORTED array of integers, dedupe the array 
  Because array elements are already in order, all duplicate values will be grouped together.

  Ok to use a new array

  Bonus: do it in O(n) time (no nested loops, new array ok)
  Bonus: Do it in-place (no new array)
  Bonus: Do it in-place in O(n) time and no new array
  Bonus: Keep it O(n) time even if it is not sorted
*/

const nums1 = [1, 1, 1, 1];
const expected1 = [1];

const nums2 = [1, 1, 2, 2, 3, 3];
const expected2 = [1, 2, 3];

const nums3 = [1, 1, 2, 3, 3, 4];
const expected3 = [1, 2, 3, 4];

/**
 * De-dupes the given sorted array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @return {Array<number>} The given array deduped.
 */
function dedupeSorted(nums) {}

module.exports = { dedupeSorted };

/*****************************************************************************/

/**
 * - Time: O(n) linear.
 * - Space: O(n) linear.
 */
function dedupeSorted(sortedNums) {
  if (sortedNums.length <= 1) {
    return sortedNums;
  }

  const dedupedArr = [];

  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] !== dedupedArr[dedupedArr.length - 1]) {
      dedupedArr.push(sortedNums[i]);
    }
  }
  return dedupedArr;
}

/**
 * - Time: O(n) linear.
 * - Space: O(2n) -> O(n) linear.
 */
function dedupeSortedHash(nums) {
  if (nums.length == 0 || nums.length == 1) {
    return nums;
  }

  const seen = {};
  const dedupedArr = [];

  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];

    if (seen.hasOwnProperty(item) === false) {
      seen[item] = true;
      dedupedArr.push(item);
    }
  }
  return dedupedArr;
}

/**
 * - Time: O(n) linear.
 * - Space: O(1) constant.
 */
function dedupeSortedInPlace(sortedNums) {
  if (sortedNums.length == 0 || sortedNums.length == 1) {
    return sortedNums;
  }

  let idxToOverwrite = 0;
  let newLen = sortedNums.length;

  for (let i = 0; i < sortedNums.length - 1; i++) {
    if (sortedNums[i] !== sortedNums[i + 1]) {
      /**
       * May overwrite with same value, but will only overwrite when the last
       * occurrence of this value is found so that only one of this value will
       * exist in the end.
       */
      sortedNums[idxToOverwrite++] = sortedNums[i];
      --newLen;
    }
  }
  sortedNums[idxToOverwrite] = sortedNums[sortedNums.length - 1];
  // Cut off any dupes at the end.
  sortedNums.length = newLen;
  return sortedNums;
}

/**
 * - Time: O(2n) linear. One loop for the new set to iterate over the given
 *    arr, then a second loop for the set to be spread back into an arr.
 * - Space: O(n) linear.
 */
const dedupeSortedUsingSet = (sortedArr) => [...new Set(sortedArr)];

/**
 * - Time: O(2n) -> O(n) linear. Two loops at same level.
 * - Space: O(2n) -> O(n) linear. The has table duplicates the nums stored.
 */
function dedupeUnorderedInPlace(nums) {
  const isAddedTable = {};

  for (let i = 0; i < nums.length; i++) {
    // Will convert to true when we add it while de-duping.
    isAddedTable[nums[i]] = false;
  }

  let idxToOverwrite = 0;

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];

    // If not added.
    if (!isAddedTable[n]) {
      nums[idxToOverwrite] = n;
      isAddedTable[n] = true;
      idxToOverwrite++;
    }
  }

  // If there were dupes the array will be shorter, cut off dupes from the end.
  nums.length = idxToOverwrite;
  return nums;
}
