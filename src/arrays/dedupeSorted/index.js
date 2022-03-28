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

const nums4 = [1, 1];
const expected4 = [1];

/**
 * De-dupes the given sorted array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array deduped.
 */
function dedupeSorted(nums) {}

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
    // This only works because it's sorted.
    if (sortedNums[i] !== dedupedArr[dedupedArr.length - 1]) {
      dedupedArr.push(sortedNums[i]);
    }
  }
  return dedupedArr;
}

/**
 * Time: O(2n) -> O(n) linear.
 * Space: O(n) linear.
 */
function dedupeSortedInPlace(sortedNums) {
  const deduped = [];

  for (const n of sortedNums) {
    if (deduped[deduped.length - 1] !== n) {
      deduped.push(n);
    }
  }

  // Overwrite so the given array instead of returning a new array.
  for (let i = 0; i < deduped.length; i++) {
    sortedNums[i] = deduped[i];
  }

  sortedNums.length = deduped.length;
  return sortedNums;
}

/**
 * - Time: O(n) linear.
 * - Space: O(2n) -> O(n) linear.
 */
function dedupeUnordered(nums) {
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
 * - Time: O(2n) linear. One loop for the new set to iterate over the given
 *    arr, then a second loop for the set to be spread back into an arr.
 * - Space: O(n) linear.
 */
const dedupeSortedUsingSet = (sortedArr) => [...new Set(sortedArr)];

/**
 * - Time: O(2n) -> O(n) linear. The first loop is from the new Set having to
 *    loop over the given array to create the Set.
 * - Space: O(2n) -> O(n) linear. The has Set stores every num again at most in
 *    the case of there being no dupes.
 */
function dedupeInPlace(nums) {
  const numsSet = new Set(nums);

  let i = 0;

  for (const n of numsSet) {
    // Overwrite the array in place.
    nums[i++] = n;
  }

  // If there were dupes the size will be smaller, cut dupes off the end.
  nums.length = numsSet.size;
  return nums;
}

/**
 * Without using a Set.
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

    if (isAddedTable[n]) {
      // 'guard clause' to skip the dupe.
      continue;
    }

    nums[idxToOverwrite] = n;
    isAddedTable[n] = true;
    idxToOverwrite++;

    /* Or this. */
    // if (isAddedTable[n] === false) {
    //   nums[idxToOverwrite] = n;
    //   isAddedTable[n] = true;
    //   idxToOverwrite++;
    // }
  }

  // If there were dupes the array will be shorter, cut off dupes from the end.
  nums.length = idxToOverwrite;
  return nums;
}

module.exports = {
  dedupeSorted,
  dedupeSortedInPlace,
  dedupeUnordered,
  dedupeSortedUsingSet,
  dedupeInPlace,
  dedupeUnorderedInPlace,
};
