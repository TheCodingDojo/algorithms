/* 
  String: Is Palindrome

  Create a function that returns a boolean whether the string is a strict palindrome. 
    - palindrome = string that is same forwards and backwards
  
  Do not ignore spaces, punctuation and capitalization
 */

const str1 = "a x a";
const expected1 = true;

const str2 = "racecar";
const expected2 = true;

const str3 = "Dud";
const expected3 = false;

const str4 = "oho!";
const expected4 = false;

/**
 * Determines if the given str is a palindrome (same forwards and backwards).
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given str is a palindrome or not.
 */
function isPalindrome(str) {}

/*****************************************************************************/

/**
 * - Time: O(n/2) -> O(n) linear.
 * - Space: O(1) constant.
 * @param {string} str
 * @returns {boolean}
 */
function isPalindrome(str = "") {
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    // Looping inwards from both sides.
    const leftChar = str[i];
    const rightChar = str[str.length - 1 - i];

    if (leftChar !== rightChar) {
      return false; // early exit
    }
  }
  return true;
}

/**
 * - Time: O(3n) -> O(n) linear. Each method used is looping.
 * - Space: O(2n) linear. Split and join both create a copy.
 * @param {string} str
 * @returns {boolean}
 */
const functionIsPalindrome = (str = "") =>
  str === str.split("").reverse().join("");

module.exports = { isPalindrome, functionIsPalindrome };
