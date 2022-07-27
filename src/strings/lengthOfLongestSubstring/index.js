// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/* 
  Given a string, find the length of the longest substring without repeating characters.
*/

const str1 = "abcabcbb";
const expected1 = 3;
// Explanation: The answer is "abc", with the length of 3.

const str2 = "bbbbb";
const expected2 = 1;
// Explanation: The answer is "b", with the length of 1.

const str3 = "pwwkew";
const expected3 = 3;
/* Explanation: The answer is "wke", with the length of 3. 
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */

const str4 = "dvadf";
const expected4 = 4;
// Explanation: "vadf"

/**
 * Determines the length of the longest substring in the given str.
 * @param {string} str
 * @returns {number} Length of the longest substring from the given str.
 * - Time: O(?).
 * - Space: O(?).
 */
function lengthOfLongestSubString(str) {}

/*****************************************************************************/

/**
 * Determines the length of the longest substring in the given str.
 * Starting from each character, go forward as far as possible until a dupe is
 * found.
 * - Time: O(n^3) cubed, the .includes is the 2nd nested loop.
 * - Space: O(n) linear.
 * @param {string} str
 * @returns {number} Length of the longest substring from the given str.
 */
function lengthOfLongestSubString(str) {
  let maxLen = 0;
  let subStr = "";

  for (let i = 0; i < str.length; i++) {
    const remainingLength = str.length - i;
    subStr = "";

    // if remaining chars left are fewer than current maxLen
    // it's not possible for there to be a longer subStr
    if (remainingLength < maxLen) {
      return maxLen;
    }

    for (let j = i; j < str.length; j++) {
      if (subStr.includes(str[j])) {
        break;
      } else {
        subStr += str[j];
      }
    }

    if (subStr.length > maxLen) {
      maxLen = subStr.length;
    }
  }
  return maxLen;
}

/**
 * Time: O(n^2) quadratic.
 * Space: O(n) linear.
 */
function lengthOfLongestSubString2(str) {
  let maxLen = 0;

  for (let i = 0; i < str.length; i++) {
    let count = 0;
    const seen = new Set();
    const remainingLength = str.length - i;

    // it's not possible for there to be a longer subStr
    if (remainingLength < maxLen) {
      return maxLen;
    }

    for (let j = i; j < str.length; j++) {
      let char = str[j];

      if (seen.has(char)) {
        break;
      } else {
        seen.add(char);
        count++;
      }
    }

    if (count > maxLen) {
      maxLen = count;
    }
  }
  return maxLen;
}

/**
 * Time: O(n) linear.
 * Space: O(n) linear.
 */
function lengthOfLongestSubString3(str) {
  const seenChars = {};
  let longest = 0;
  let startIndex = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (seenChars.hasOwnProperty(char) && startIndex <= seenChars[char]) {
      startIndex = seenChars[char] + 1;
    }

    seenChars[char] = i;
    const diff = i - startIndex + 1;

    if (diff > longest) {
      longest = diff;
    }
  }
  return longest;
}

module.exports = {
  lengthOfLongestSubString,
  lengthOfLongestSubString2,
  lengthOfLongestSubString3,
};
