/* 
  Given a string,
  return a new string with the duplicates excluded

  Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "";
const expected3 = "";

const str4 = "aa";
const expected4 = "a";

/**
 * De-dupes the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string that may contain duplicates.
 * @returns {string} The given string with any duplicate characters removed.
 */
function stringDedupe(str) {}

/*****************************************************************************/

/**
 * - Time: O(n) linear.
 * - Space: O(2n) -> O(n) linear.
 * @param {string} str
 * @returns {string}
 */
function stringDedupe(str = "") {
  let distinctStr = "";
  const seen = {};

  // loop backwards to include last occurrence
  for (let i = str.length - 1; i >= 0; --i) {
    if (!seen[str[i]]) {
      distinctStr = str[i] + distinctStr;
      seen[str[i]] = true;
    }
  }
  return distinctStr;
}

/**
 * Keeps first occurrence, no hash table approach.
 * - Time: O(n^2) quadratic due to .include being nested loop.
 * - Space: O(n) linear.
 * @param {string} str
 * @returns {string}
 */
function stringDedupe2(str = "") {
  let distinctStr = "";

  for (const char of str) {
    if (distinctStr.includes(char) === false) {
      distinctStr += char;
    }
  }
  return distinctStr;
}

/**
 * - Time: O(3n) -> O(n) linear. Convert to Set. Convert to array. join.
 * - Space: O(n) linear.
 * @param {string} str
 * @returns {string}
 */
const stringDedupeWithSet = (str = "") => [...new Set(str)].join("");

module.exports = { stringDedupe, stringDedupe2, stringDedupeWithSet };
