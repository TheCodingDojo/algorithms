/* 
  Longest Palindrome

  For this challenge, we will look not only at the entire string provided, but also at the substrings within it. Return the longest palindromic substring. 

  Strings longer or shorter than complete words are OK.

  All the substrings of "abc" are:
  a, ab, abc, b, bc, c
*/

const { isPalindrome } = require("./isPalindrome");

const str1 = "what up, daddy-o?";
const expected1 = "dad";

const str2 = "uh, not much";
const expected2 = "u";

const str3 = "Yikes! my favorite racecar erupted!";
const expected3 = "e racecar e";

const str4 = "a1001x20002y5677765z";
const expected4 = "5677765";

const str5 = "a1001x20002y567765z";
const expected5 = "567765";

/**
 * Finds the longest palindromic substring in the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The longest palindromic substring from the given string.
 */
function longestPalindromicSubstring(str) {}

module.exports = { longestPalindromicSubstring };

/*****************************************************************************/

/**
 * - Time: O(n^2 * k). The n^2 part comes from the j loop.
 *    k is the iterations of slice.
 * - Space: O(n) linear.
 */
function longestPalindromicSubstring(str) {
  let longestPalindrome = str[0];

  // generate every sub string 1 at a time and check
  // if it is a palindrome and if it is longer than
  // the current longest
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      let subStr = str.slice(i, j);

      if (subStr.length > longestPalindrome.length && isPalindrome(subStr)) {
        longestPalindrome = subStr;
      }
    }
  }
  return longestPalindrome;
}

/**
 * - Time: O(n^2) quadratic.
 * - Space: O(n) linear.
 */
function longestPal(str) {
  let longestPal = "";

  for (let i = 0; i < str.length; i++) {
    const oddPalindrome = concatPalindromeFromCenter(str, i, i);
    const evenPalindrome = concatPalindromeFromCenter(str, i, i + 1);
    oddPalindrome.length > longestPal.length && (longestPal = oddPalindrome);
    evenPalindrome.length > longestPal.length && (longestPal = evenPalindrome);

    if (longestPal.length === str.length) {
      break;
    }
  }
  return longestPal;
}

function concatPalindromeFromCenter(str, left, right) {
  let leftPalSub = "",
    rightPalSub = "";

  // Used for checking odd palindrome.
  if (left === right) {
    rightPalSub = str[right];
    left--;
    right++;
  }

  while (left >= 0 && right < str.length && str[left] === str[right]) {
    leftPalSub = str[left] + leftPalSub; // prepend.
    rightPalSub += str[right];
    left--;
    right++;
  }

  return leftPalSub + rightPalSub;
}
