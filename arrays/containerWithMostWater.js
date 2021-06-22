/* 
https://leetcode.com/problems/container-with-most-water/
*/

const heights1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const expected1 = 49;

const heights2 = [1, 1];
const expected1 = 1;

const heights3 = [4, 3, 2, 1, 4];
const expected3 = 16;

const heights4 = [1, 2, 1];
const expected4 = 2;

/**
 * Finds the max area of a container from the given heights where the length
 * is the distance between indexes.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number[]} heights
 * @returns {number} Representing the max area of a container.
 */
function containerWithMostWater(heights) {}

/*****************************************************************************/

/**
 * Finds the max area of a container from the given heights where the length
 * is the distance between indexes.
 * - Time: O(n) linear.
 * - Space: O(1) constant.
 * @param {number[]} heights
 * @returns {number} Representing the max area of a container.
 */
function containerWithMostWater(heights) {
  let left = 0;
  let right = heights.length - 1;
  let maxArea = 0;

  while (left < right) {
    const area = (right - left) * Math.min(heights[left], heights[right]);
    area > maxArea && (maxArea = area);
    heights[left] < heights[right] ? left++ : right--;
  }
  return maxArea;
}

/**
 * Finds the max area of a container from the given heights where the length
 * is the distance between indexes.
 * - Time: O(n^2) quadratic.
 * - SPace: O(1) constant.
 * @param {number[]} heights
 * @returns {number} Representing the max area of a container.
 */
function containerWithMostWater2(heights) {
  let max = 0;

  for (let i = 0; i < heights.length; i++) {
    for (let j = i + 1; j < heights.length; j++) {
      const length = j - i,
        height = Math.min(heights[i], heights[j]),
        area = length * height;
      area > max && (max = area);
    }
  }
  return max;
}
