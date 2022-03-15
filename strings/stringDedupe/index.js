/* 
  Given a string,
  return a new string with the duplicates excluded

  Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

/**
 * De-dupes the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string that may contain duplicates.
 * @returns {string} The given string with any duplicate characters removed.
 */
function stringDedupe(str) {}

module.exports = { stringDedupe };

/*****************************************************************************/

/**
 * - Time: O(n) linear.
 * - Space: O(2n) -> O(n) linear.
 */
function stringDedupe(str) {
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
 */
function strDedupe(str) {
  let distinctStr = "";

  for (const char of str) {
    if (distinctStr.includes(char) === false) {
      distinctStr += char;
    }
  }
  return distinctStr;
}
