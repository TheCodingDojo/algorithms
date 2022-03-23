/* 
  Given in an alumni interview in 2021.

  String Encode

  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears. 
  
  
  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
  */

const str1 = "aaaabbcddd";
const expected1 = "a4b2c1d3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "bbcc";

/**
 * Encodes the given string such that duplicate characters appear once followed
 * by a number representing how many times the char occurs. Only encode strings
 * when the result yields a shorter length.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str The string to encode.
 * @returns {string} The given string encoded.
 */
function encodeStr(str) {}

/*****************************************************************************/

/**
 * - Time: O(n) linear.
 * - Space: O(n) linear.
 * @param {string} str
 * @returns {string}
 */
function encodeStr(str = "") {
  if (str.length === 0) {
    return "";
  }

  let encoded = "";
  let currChar = str[0];
  let currCharCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === currChar) {
      currCharCount++;
    }
    if (str[i] !== currChar || i === str.length - 1) {
      encoded += currChar + currCharCount;
      currChar = str[i];
      currCharCount = 1;
    }
  }
  return encoded.length < str.length ? encoded : str;
}

/**
 * - Time: O(n) linear, because nested while loop increments i as well so it is
 *    reducing the for loops iterations equally.
 * - Space: O(n) linear, because worst case every letter occurs one time so the
 *    output will be as long as input.
 * @param {string} str
 * @returns {string}
 */
function strEncode(str = "") {
  let encoded = "";

  for (let i = 0; i < str.length; i++) {
    let currChar = str[i],
      dupeCount = 1;

    while (str[i + 1] === currChar) {
      ++dupeCount;
      i++;
    }
    encoded += currChar + dupeCount;
  }
  return encoded.length < str.length ? encoded : str;
}

/**
 * - Time: O(2n) linear -> O(n).
 * - Space: O(2n) -> O(n), because given str is stored twice, in hash table and
 *    output str.
 * @param {string} str
 * @returns {string}
 */
function strEncodeHashTable(str = "") {
  const charFreq = {};
  let encoded = "";

  for (const char of str) {
    if (charFreq[char]) {
      charFreq[char]++;
    } else {
      charFreq[char] = 1;
    }
  }

  // iterate back over str to get the proper order
  // order of keys on obj is not guaranteed to be in order
  for (const char of str) {
    if (charFreq[char]) {
      encoded += char + charFreq[char];
      // we need to avoid the dupes
      charFreq[char] = 0;
    }
  }
  return encoded.length < str.length ? encoded : str;
}

module.exports = { encodeStr, strEncode, strEncodeHashTable };
