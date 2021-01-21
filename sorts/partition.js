/* 
  Params: nums, left, right
    - left and right are indexes, for now, left will be 0, and right will be
        the last idx.
    - later these params will be used to specify a sub section of the array to
        partition.

  Steps:

  1. Pick an number out of the arr to be your pivot value
    - usually the middle idx

  2. Partition the array IN PLACE such that all values less than the pivot
      value are to the left of it and all values greater than the pivot value
      are to the right (not perfectly sorted).

  3. return: new idx of the pivot value or the index where the left section of
      smaller items ends.

  "Choosing a random pivot minimizes the chance that you will encounter
  worst-case O(n2) performance (always choosing first or last would cause
  worst-case performance for nearly-sorted or nearly-reverse-sorted data).
  Choosing the middle element would also be acceptable in the majority of
  cases."
  https://stackoverflow.com/questions/164163/quicksort-choosing-the-pivot
*/

const nums1 = [11, 8, 14, 3, 6, 2, 7];
const nums2 = [1, 17, 12, 3, 9, 13, 21, 4, 27];

/**
 * Partitions the given array in-place by selecting the number at the middle
 * index to use it as a "pivot" value, then arranges all numbers less than the
 * pivot to be to it's left and all larger numbers to the right of the pivot.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @param {number} left The index indicating the start of the slice of array
 *    being processed.
 * @param {number} right The index indicating the end of the slice of array
 *    being processed.
 * @return {Array<number>} The given array after being partitioned.
 */
function partition(nums = [], left = 0, right = nums.length - 1) {}

/*****************************************************************************/

/**
 * Partitions the given array in-place by selecting the number at the middle
 * index to use it as a "pivot" value, then arranges all numbers less than the
 * pivot to be to it's left and all larger numbers to the right of the pivot.
 * Hoare’s partitioning scheme, named for Sir Charles Anthony Richard Hoare,
 * who developed the quicksort algorithm in 1959. It does fewer swaps than
 * other schemes
 * NOTE that in this scheme, the pivot’s final location is not necessarily at
 * the index that was returned (some edge cases).
 * - Time: O(n) linear despite nested loops because we still don't visit an
 *    index more than once.
 * - Space: O(1) constant.
 * @param {Array<number>} nums
 * @param {number} left The index indicating the start of the slice of array
 *    being processed.
 * @param {number} right The index indicating the end of the slice of array
 *    being processed.
 * @return {Array<number>} The given array after being partitioned.
 */
function partition(nums = [], left = 0, right = nums.length - 1) {
  const midIdx = Math.floor((left + right) / 2);
  const pivotVal = nums[midIdx];

  while (left < right) {
    while (nums[left] < pivotVal) {
      left++;
    }

    while (nums[right] > pivotVal) {
      right--;
    }
    // array destructure swap syntax
    [nums[left], nums[right]] = [nums[right], nums[left]];
  }
  return left;
}

module.exports = {
  partition,
};
