/* 
https://leetcode.com/problems/container-with-most-water/
*/

/* 
Finds the container that can hold the most water based on it's area.
A container's length is the distance between indexes and the two sides are
the heights at those indexes.

See: https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
*/

const heights1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const expected1 = 49;
// Explanation: heights1[1] and heights1[8] as container edges.
// Length = 8 - 1. Height = 7

const heights2 = [1, 1];
const expected2 = 1;

const heights3 = [4, 3, 2, 1, 4];
const expected3 = 16;

const heights4 = [1, 2, 1];
const expected4 = 2;

/**
 * Finds the container that can hold the most water based on it's area.
 * A container's length is the distance between indexes and the two sides are
 * the heights at those indexes.
 * @see https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {number[]} heights
 * @returns {number} Representing the max area of a container.
 */
function containerWithMostWater(heights) {}

/*****************************************************************************/

/**
 * Finds the container that can hold the most water based on it's area.
 * A container's length is the distance between indexes and the two sides are
 * the heights at those indexes.
 * @see https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
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
    // area = length * height using shorter height since water overflows
    // the short side first.
    const area = (right - left) * Math.min(heights[left], heights[right]);
    area > maxArea && (maxArea = area);
    // Increment the idx that points to the shorter wall to find a taller wall.
    heights[left] < heights[right] ? left++ : right--;
  }
  return maxArea;
}

/**
 * Finds the container that can hold the most water based on it's area.
 * A container's length is the distance between indexes and the two sides are
 * the heights at those indexes.
 * @see https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
 * - Time: O(n^2) quadratic.
 * - Space: O(1) constant.
 * @param {number[]} heights
 * @returns {number} Representing the max area of a container.
 */
function containerWithMostWater2(heights) {
  let max = 0;

  for (let i = 0; i < heights.length; i++) {
    for (let j = i + 1; j < heights.length; j++) {
      // x axis.
      const length = j - i;
      // y axis. Limited by shorter wall since water overflows the short side.
      const height = Math.min(heights[i], heights[j]);
      const area = length * height;
      area > max && (max = area);
    }
  }
  return max;
}

/* 
Unit Testing example using built in deprecating node testing library.
You should use a library like jasmine instead, but if you don't have
access to it, this could help for some quick testing.

If no errors are logged to the terminal then the tests passed.
There are multiple comparison methods that can be used, e.g.,
strictEqual for comparing primitives and deepStrictEqual for collections.
*/
const { strictEqual } = require("assert");

/* 
Using an array here and the .forEach just helps avoid having to copy paste
The function calls for each test case and the extra error message we gave.

The values don't have to be stored in vars above, they can be written in
like the first case then the vars above could be deleted.
*/
const testCases = [
  {
    args: [[1, 8, 6, 2, 5, 4, 8, 3, 7]],
    expected: 49,
    description: "a wide container solution ignoring first",
  },
  { args: [heights2], expected: expected2, description: "two same heights" },
  {
    args: [heights3],
    expected: expected3,
    description: "a whole container solution",
  },
  {
    args: [heights4],
    expected: expected4,
    description: "a whole container solution with short sides",
  },
];

// testCases.forEach((testData, i) => {});
testCases.forEach(({ args, expected, description }, i) => {
  const actual = containerWithMostWater(...args);

  strictEqual(actual, expected, description);
});

module.exports = { containerWithMostWater, containerWithMostWater2 };
