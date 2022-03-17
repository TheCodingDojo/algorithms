/* 
Given an array of intervals where intervals[i] = [start_i, end_i] ordered by
start_i, merge all overlapping intervals, and return an array of the
non-overlapping intervals that cover all the intervals in the input.
*/

const intervals1 = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
const expected1 = [
  [1, 6],
  [8, 10],
  [15, 18],
];
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

const intervals2 = [
  [1, 4],
  [4, 5],
];
const expected2 = [[1, 5]];
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

/**
 * Merges the overlapping sortedIntervals into a new array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number[][]} sortedIntervals
 * @returns {number[][]} A new array.
 */
function mergeSortedIntervals(sortedIntervals) {}

/*****************************************************************************/

/**
 * Merges the overlapping sortedIntervals into a new array.
 * - Time: O(n) linear.
 * - Space: O(n) linear.
 * @param {number[][]} sortedIntervals
 * @returns {number[][]} A new array.
 */
function mergeSortedIntervals(sortedIntervals) {
  if (sortedIntervals.length === 0) {
    return [];
  }

  const mergedIntervals = [sortedIntervals[0]];

  if (sortedIntervals.length === 1) {
    return mergedIntervals;
  }

  for (let i = 1; i < sortedIntervals.length; i++) {
    const interval = sortedIntervals[i];
    const prevInterval = mergedIntervals[mergedIntervals.length - 1];

    if (isOverlap(interval, prevInterval)) {
      mergedIntervals[mergedIntervals.length - 1] = mergeOverlappingIntervals(
        interval,
        prevInterval
      );
    } else {
      mergedIntervals.push(interval);
    }
  }
  return mergedIntervals;
}

function isOverlap([startA, endA], [startB, endB]) {
  return startA <= endB && startB <= endA;
}

function mergeOverlappingIntervals(a, b) {
  return [Math.min(a[0], b[0]), Math.max(a[1], b[1])];
}

module.exports = {
  mergeSortedIntervals,
};
