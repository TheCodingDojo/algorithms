/* 
  Write a recursive solution for removing consecutive duplicate words in a given string.
  Do not use any built in library functions for this. 
*/

const s1 = "";
const expected1 = "";

const s2 = "one two two three";
const expected2 = "one two three";

const s3 = "one one two";
const expected3 = "one two";

const s4 = "one one one two two two";
const expected4 = "one two";

/** Add more params if needed for recursion.
 * Recursively removes consecutive duplicate words.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str With space separated words.
 */
function removeConsecDupeWords(str) {}

/*****************************************************************************/

/**
 * Recursively removes consecutive duplicate words.
 * - Time: O(3n) -> O(n) linear, n = str.length. One loop from str.split,
 *    another loop to recurse over words.length, and the .slice that happens
 *    every iteration ultimately will slice each word once, which is the third
 *    'n' iterations.
 * - Space: O(3n) -> O(n) linear. One 'n' for the call stack.
 *    The str is duplicated twice, one in words and another in dedupedStr.
 *    Worst case is every word is unique so every word is copied twice.
 * @param {string} str With space separated words.
 * @returns {string} The given string deduped.
 */
function removeConsecDupeWords(str, words = str.split(" "), dedupedStr = "") {
  if (!words.length) {
    return dedupedStr;
  }

  const currWord = words.pop();
  const lastWordAdded = dedupedStr.slice(0, currWord.length);

  if (lastWordAdded !== currWord) {
    /* 
    Prepend lastWordAdded since the .pop is going through the words backwards.
    Ternary add a space unless there are no words yet in dedupedStr.
    */
    dedupedStr = currWord + (dedupedStr.length ? " " : "") + dedupedStr;
  }

  return removeConsecDupeWords(str, words, dedupedStr);
}

module.exports = { removeConsecDupeWords };
