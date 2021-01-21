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
 * @return {boolean} Whether the given str is a palindrome or not.
 */
function isPalindrome(str) {}

module.exports = { isPalindrome };

/*****************************************************************************/

/**
 * - Time: O(n/2) -> O(n) linear.
 * - Space: O(1) constant.
 */
function isPalindrome(str) {
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    // Looping inwards from both sides.
    let leftChar = str[i];
    let rightChar = str[str.length - 1 - i];

    if (leftChar !== rightChar) {
      return false; // early exit
    }
  }
  return true;
}
