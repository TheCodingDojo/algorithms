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
  let longestPal = str[0] || "";
  const isEven = str.length % 2 === 0;

  for (let i = 0; i < str.length; i++) {
    let leftIdx = i - 1,
      rightIdx = i + 1;
    let palSub = "";

    if (isEven) {
      rightIdx = i;
    } else {
      // middle char for odd length strs
      palSub = str[i];
    }

    // for every character, go outwards left & right one char at a time until left & right chars are not equal
    while (
      leftIdx >= 0 &&
      rightIdx < str.length &&
      str[leftIdx] === str[rightIdx]
    ) {
      // add to our palSub before incrementing / decrementing
      // because after incr / decr letters might not match
      palSub = str[leftIdx] + palSub; // prepend left letter
      palSub += str[rightIdx]; // append right letter
      leftIdx--;
      rightIdx++;
    }

    if (palSub.length > longestPal.length) {
      longestPal = palSub;
    }
  }
  return longestPal;
}
