/* 
https://leetcode.com/problems/container-with-most-water/
*/

/**
 * Finds the max area of a container from the given heights where the length
 * is the distance between indexes.
 * - Time: O(n^2) quadratic.
 * - SPace: O(1) constant.
 * @param {number[]} heights
 * @returns {number} Representing the max area of a container.
 */
function containerWithMostWater(heights) {
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

/**
 * Finds the max area of a container from the given heights where the length
 * is the distance between indexes.
 * - Time: TODO: better than quadratic.
 * - Space:
 * @param {number[]} heights
 * @returns {number} Representing the max area of a container.
 */
function containerWithMostWater(heights) {}

// [1, 20, 40, 2, 50, 4, 30, 3, 7];
