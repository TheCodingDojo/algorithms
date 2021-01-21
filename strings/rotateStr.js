/* 
  String: Rotate String

  Create a standalone function that accepts a string and an integer, and rotates the characters in the string to the right by that given integer amount.
*/

const str1 = "Hello World";
const rotateAmnt1 = 0;
const expected1 = "Hello World";

const str2 = "Hello World";
const rotateAmnt2 = 1;
const expected2 = "dHello Worl";

const str3 = "Hello World";
const rotateAmnt3 = 2;
const expected3 = "ldHello Wor";

const str4 = "Hello World";
const rotateAmnt4 = 4;
const expected4 = "orldHello W";

/**
 * Rotates a given string's characters to the right by the given amount,
 * wrapping characters to the beginning.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @param {number} n The amount of characters in the given str to rotate to the
 *    right.
 * @return {string} The string rotated by the given amount.
 */
function rotateStr(str, n) {}

module.exports = { rotateStr };

/*****************************************************************************/

/**
 * - Time: O(n) linear.
 * - Space: O(n) linear.
 */
function rotateStr(str, n) {
  let res = "";
  let rotatedSubStr = "";

  for (let i = 0; i < str.length; i++) {
    if (i >= str.length - n) {
      rotatedSubStr += str[i];
    } else {
      res += str[i];
    }
  }
  return rotatedSubStr + res;
}

/**
 * - Time: O(n) linear.
 * - Space: O(n) linear.
 */
function rotateString(str, n) {
  // slice the last `n` characters then concatenate that to the string without those last `n` characters
  return str.slice(str.length - n) + str.slice(0, str.length - n);
}
