/* 
Given to alumni by Riot games in 2021.
*/

const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

module.exports = { rehash };

/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
function rehash(s) {}

/*****************************************************************************/

/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(n) linear. The nested while loop is incrementing i as well.
 * Space: O(n) linear.
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
function rehash(s) {
  const letterHashCounts = {};

  for (let i = 0; i < s.length; ) {
    // Retrieve letter at current index then increment to the num after.
    let char = s[i++];
    let numStr = "";

    /**
     * Look ahead to find potentially multiple digits after letter.
     * parseInt returns NaN if it fails to parse to a number.
     * We can't simply check for a truthy parsed int because 0 is falsy.
     * We can't use typeof because typeof NaN is "number". This is why we use
     * not Not a Number to check if we parsed a number.
     */
    while (i < s.length && !isNaN(parseInt(s[i]))) {
      numStr += s[i++];
    }

    if (letterHashCounts.hasOwnProperty(char)) {
      letterHashCounts[char] += parseInt(numStr);
    } else {
      letterHashCounts[char] = parseInt(numStr);
    }
  }

  const alphabetized = Object.keys(letterHashCounts).sort();

  let newHash = "";

  for (let i = 0; i < alphabetized.length; i++) {
    const letter = alphabetized[i];
    newHash += letter + letterHashCounts[letter];
  }

  return newHash;
}
