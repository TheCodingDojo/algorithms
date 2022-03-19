/* 
  An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
  typically using all the original letters exactly once.

  Is there a quick way to determine if they aren't an anagram before spending more time?

  Given two strings
  return whether or not they are anagrams
*/

const strA1 = "yes";
const strB1 = "eys";
const expected1 = true;

const strA2 = "yes";
const strB2 = "eYs";
const expected2 = true;

const strA3 = "no";
const strB3 = "noo";
const expected3 = false;

const strA4 = "silent";
const strB4 = "listen";
const expected4 = true;

/**
 * Determines whether s1 and s2 are anagrams of each other.
 * Anagrams have all the same letters but in different orders.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether s1 and s2 are anagrams.
 */
function isAnagram(s1, s2) {}

/*****************************************************************************/

/**
 * - Time: O(2n) -> O(n) linear.
 * - Space: O(2n) -> O(n) linear.
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */
function isAnagram(s1 = "", s2 = "") {
  if (s1.length !== s2.length) {
    return false;
  }

  // create a frequency table of characters in s1 and s2
  const s1CharFreq = {};
  const s2CharFreq = {};

  // build both tables in same loop since the strings are same length
  for (let i = 0; i < s1.length; i++) {
    const s1CharUpper = s1[i].toUpperCase();
    const s2CharUpper = s2[i].toUpperCase();

    if (s1CharFreq.hasOwnProperty(s1CharUpper) === false) {
      s1CharFreq[s1CharUpper] = 1;
    } else {
      s1CharFreq[s1CharUpper]++;
    }

    if (s2CharFreq.hasOwnProperty(s2CharUpper) === false) {
      s2CharFreq[s2CharUpper] = 1;
    } else {
      s2CharFreq[s2CharUpper]++;
    }
  }

  // compare both frequency tables to make sure all same characters and all same frequency
  for (const char in s1CharFreq) {
    if (!s2CharFreq.hasOwnProperty(char)) {
      return false;
    }

    // comparing frequency of this character
    if (s1CharFreq[char] !== s2CharFreq[char]) {
      return false;
    }
  }
  return true;
}

/**
 * - Time: O(n^2) quadratic.
 * - Space: O(1) constant.
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */
function isAnagram2(s1 = "", s2 = "") {
  if (s1.length !== s2.length) {
    return false;
  }

  for (let i = 0; i < s1.length; i++) {
    let s1CharCount = 0;
    let s2CharCount = 0;
    let currChar = s1[i].toUpperCase();

    // count how many times currChar appears in both strings
    for (let j = 0; j < s1.length; ++j) {
      if (s1[j].toUpperCase() === currChar) {
        s1CharCount++;
      }

      if (s2[j].toUpperCase() === currChar) {
        s2CharCount++;
      }
    }

    if (s1CharCount !== s2CharCount) {
      return false;
    }
  }
  return true;
}

module.exports = { isAnagram, isAnagram2 };
