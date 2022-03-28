/* 
  String: Reverse

  Given a string,
  return a new string that is the given string reversed
*/

const str1 = "creature";
const expected1 = "erutaerc";

const str2 = "dog";
const expected2 = "god";

const str3 = "hello";
const expected3 = "olleh";

const str4 = "";
const expected4 = "";

/**
 * Reverses the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str String to be reversed.
 * @returns {string} The given str reversed.
 */
function reverseString(str) {}

/*****************************************************************************/

/**
 * - Time: O(n) linear.
 * - Space: O(n) linear.
 * @param {string} str
 * @returns {string}
 */
function reverseString(str = "") {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

/**
 * - Time: O(n) linear.
 * - Space: O(n) linear.
 * @param {string} str
 * @returns {string}
 */
function reverseString2(str = "") {
  let reversed = "";

  for (let i = 0; i < str.length; i++) {
    // prepend instead of append since we aren't looping backwards.
    reversed = str[i] + reversed;
  }

  return reversed;
}

/**
 * - Time: O(3n) -> O(n) linear.
 * - Space: O(2n) -> O(n) linear. Split and join are both duplicating data.
 * @param {string} str
 * @returns {string}
 */
const functionalReverseStr = (str = "") => str.split("").reverse().join("");

module.exports = { reverseString, reverseString2, functionalReverseStr };
