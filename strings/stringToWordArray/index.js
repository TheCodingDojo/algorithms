/* 
Helpful notes:

'\n' == true
    => false

if ('\n') { console.log(true) }
  => true

if ('\n' == false) { console.log(true) }
  => true
*/

const str1 = "Life is not a drill!";
const expected1 = ["Life", "is", "not", "a", "drill!"];

/**
 * Converts a string of space separated words into an array of words.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr Space separated words.
 * @returns {string} An array of words.
 */
function stringToWordArr(wordsStr) {}

/*****************************************************************************/

/**
 * Converts a string of space separated words into an array of words.
 * - Time: O(n) linear.
 * - Space: O(n) linear.
 * @param {string} wordsStr Space separated words.
 * @returns {string} An array of words.
 */
function stringToWordArr(wordsStr) {
  const words = [];
  let currWord = "";

  for (const char of wordsStr) {
    // space characters are falsy
    if (char == false) {
      // in case of multiple spaces, word might still be empty
      if (currWord.length > 0) {
        words.push(currWord);
        currWord = "";
      }
    } else {
      currWord += char;
    }
  }
  // when no space at end, need to include last word
  if (currWord.length > 0) {
    words.push(currWord);
  }
  return words;
}

module.exports = { stringToWordArr };
