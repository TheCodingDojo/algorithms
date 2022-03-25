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
  let encoded = "";
  let compareChar = str[0];
  let compareCharCount = 0;

  for (let i = 0; i < str.length; i++) {
    const isDuplicate = str[i] === compareChar;
    const isLastIteration = i === str.length - 1;

    if (isDuplicate) {
      compareCharCount++;
    }

    /* 
    Making the below an else is too restrictive and makes it more complex to
    cover all the cases w/o repeating conditions and nesting conditions.
    However, the above if statement could be turned into an else below this,
    but it may be clearer to keep it as two ifs since the conditions are both
    stated explicitly.
    */
    if (isDuplicate === false || isLastIteration) {
      encoded += compareChar + compareCharCount;
      compareChar = str[i];
      compareCharCount = 1;
    }
  }
  return encoded.length > 0 && encoded.length < str.length ? encoded : str;
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
    let currChar = str[i];
    let dupeCount = 1;

    while (str[i + 1] === currChar) {
      dupeCount++;
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
    if (charFreq[char] > 0) {
      encoded += char + charFreq[char];
      // Next time the same letter is looked up, it won't be added again.
      charFreq[char] = 0;
    }
  }
  return encoded.length < str.length ? encoded : str;
}

module.exports = { encodeStr, strEncode, strEncodeHashTable };
