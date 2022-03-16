/* 
Interview question asked by a google engineer interviewer on interviewing.io

Given two strings, find the longest common substring
i.e., the longest string that could be built with common characters

Output order doesn't matter
*/

const str1A = "aaa";
const str1B = "aa";
const expected1 = "aa";

const str2A = "aaba";
const str2B = "aa";
const expected2 = "aa";

const str3A = "aeff";
const str3B = "abcdef";
// Expected chars can be in any order.
const expected3 = "aef";

const str4A = "z this hurts my head x";
const str4B = "my head, this hurts";
// Expected chars can be in any order.
const expected4 = "this hurts my head";

/**
 * Finds the longest longest string that can be built from characters that both
 * of the given strings share.
 * @param {string} s1
 * @param {string} s2
 * @returns {string} The longest common substring.
 */
function longestCommonSubstring(s1, s2) {}

/*****************************************************************************/

/**
 * Finds the longest longest string that can be built from characters that both
 * of the given strings share.
 * @param {string} s1
 * @param {string} s2
 * @returns {string} The longest common substring.
 */
function longestCommonSubstring(s1, s2) {
  const freq1 = getFreqTable(s1);
  const freq2 = getFreqTable(s2);
  let longestSubStr = "";

  for (const key in freq1) {
    // the str with the smaller count of a shared letter limits us to using that many at most
    // if freq2[key] is undefined the OR operator will return 0
    const min = Math.min(freq1[key], freq2[key] || 0);
    longestSubStr += key.repeat(min);
  }
  return longestSubStr;
}

function getFreqTable(s) {
  const freq = {};

  for (const char of s) {
    freq.hasOwnProperty(char) ? freq[char]++ : (freq[char] = 1);
  }

  return freq;
}

module.exports = { longestCommonSubstring };
