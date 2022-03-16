// given a string, return a new string that has all the vowels of the given string first

/**
 * Moves all the vowels of a string to the front.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string}
 */
function vowelsFirst(str) {}

/*****************************************************************************/

/**
 * Moves all the vowels of a string to the front.
 * - Time: O(n) linear.
 * - Space: O(n) linear, as n (length of str) grows we store that much more
 *    memory in the vars.
 * @param {string} str
 * @returns {string}
 */
function vowelsFirst(str) {
  let vowelsStr = "";
  let consonantsStr = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const lowerCaseChar = char.toLocaleLowerCase();

    if (
      lowerCaseChar === "a" ||
      lowerCaseChar === "e" ||
      lowerCaseChar === "i" ||
      lowerCaseChar === "o" ||
      lowerCaseChar === "u"
    ) {
      vowelsStr += char;
    } else {
      consonantsStr += char;
    }
  }
  return vowelsStr + consonantsStr;
}

module.exports = { vowelsFirst };
