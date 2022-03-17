// http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2129

/* 
  Binary String Expansion

  You are given a STRING containing chars "0", "1", and "?"

  For every "?" character, either "0" or "1" can be substituted.

  Write a recursive function to return array of all valid strings with "?" chars expanded to "0" or "1". 
*/

const str1 = "1?0?";
const expected1 = ["1000", "1001", "1100", "1101"];
// output list order does not matter

/**
 * Add params if needed for recursion
 * Expands a string such that each "?" in the given string will be replaced
 * with a "0" and a "1".
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str The string containing to expand.
 * @returns {Array<string>} The expanded versions of the given string.
 */
function binaryStringExpansion(str) {}

/*****************************************************************************/

/**
 * Add params if needed for recursion
 * Expands a string such that each "?" in the given string will be replaced
 * with a "0" and a "1".
 * @param {string} str The string containing to expand.
 * @param {Array<string>} solutions Recursive param for storing curr solutions.
 * @param {string} partial A slice of the string being processed.
 * @returns {Array<string>} The expanded versions of the given string.
 */
function binaryStringExpansion(str, solutions = [], partial = "") {
  const index = str.indexOf("?");

  if (index < 0) {
    solutions.push(partial + str);
  } else {
    const front = str.slice(0, index);
    const back = str.slice(index + 1);
    const prefix = partial + front;
    binaryStringExpansion(back, solutions, prefix + "0");
    binaryStringExpansion(back, solutions, prefix + "1");
  }
  return solutions;
}

module.exports = { binaryStringExpansion };
