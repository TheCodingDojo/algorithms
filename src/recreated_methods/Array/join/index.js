/* 
  Given an arr and a separator string, output a string of every item in the array separated by the separator.
  
  No trailing separator at the end
  Default the separator to a comma with a space after it if no separator is provided
*/

const arr1 = [1, 2, 3];
const separator1 = ", ";
const expected1 = "1, 2, 3";

const arr2 = [1, 2, 3];
const separator2 = "-";
const expected2 = "1-2-3";

const arr3 = [1, 2, 3];
const separator3 = " - ";
const expected3 = "1 - 2 - 3";

const arr4 = [1];
const separator4 = ", ";
const expected4 = "1";

const arr5 = [];
const separator5 = ", ";
const expected5 = "";

/**
 * Converts the given array into a string of items separated by the given separator.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string|number|boolean>} arr The items to be joined as a string.
 * @param {string} separator To separate each item of the given arr.
 * @returns {string} The given array items as a string separated by the given separator.
 */
function join(arr, separator) {}

/*****************************************************************************/

/**
 * - Time: O(n) linear.
 * - Space: O(n) linear.
 * @param {Array<string|number|boolean>} arr
 * @param {string} separator
 * @returns {string}
 */
function join(arr = [], separator = ", ") {
  let joined = "";

  if (!arr.length) {
    return joined;
  }

  // less than arr.length - 1 to stop before last
  for (let i = 0; i < arr.length - 1; i++) {
    joined += arr[i] + separator;
  }
  return joined + arr[arr.length - 1];
}

/**
 * - Time: O(n) linear.
 * - Space: O(n) linear.
 * @param {Array<string|number|boolean>} arr
 * @param {string} separator
 * @returns {string}
 */
function join2(arr = [], separator = ", ") {
  let joined = "";

  if (!arr.length) {
    return joined;
  }

  joined += arr[0];

  for (let i = 1; i < arr.length; i++) {
    // Concatenate separator first to avoid trailing separator
    joined += separator + arr[i];
  }
  return joined;
}

/**
 * - Time: O(n) linear.
 * - Space: O(n) linear.
 * @param {Array<string|number|boolean>} arr
 * @param {string} separator
 * @returns {string}
 */
function join3(arr = [], separator = ", ") {
  let joined = "";

  if (!arr.length) {
    return joined;
  }

  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];

    joined += i === arr.length - 1 ? elem : elem + separator;

    // without ternary
    // if (i === arr.length - 1) {
    //   joined += elem;
    // } else {
    //   joined += elem + separator;
    // }
  }
  return joined;
}

module.exports = { join, join2, join3 };
