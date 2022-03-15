/* 
  Given a string containing space separated words
  Reverse each word in the string.

  If you need to, use .split to start, then try to do it without.
*/

const str1 = "hello";
const expected1 = "olleh";

const str2 = "hello world";
const expected2 = "olleh dlrow";

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";

/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */
function reverseWords(str) {}

module.exports = { reverseWords };

/*****************************************************************************/

/**
 * - Time: O(2n) -> O(n) linear, despite there being a nested loop,
 *    both loops amount to looping over every char in wordsStr, which is 'n'
 *    .split is 1n, and the two for loops are 1n, so 1n + 1n = 2n.
 * - Space: O(2n) -> O(n) linear, the input is stored twice, in words array and
 *    in wordsReversed.
 */
function reverseWordsSplit(wordsStr) {
  const words = wordsStr.split(" ");
  let wordsReversed = "";

  for (const word of words) {
    let reversedWord = "";

    for (let i = word.length - 1; i >= 0; --i) {
      reversedWord += word[i];
    }

    // add a space in front of word if it's not the first word
    if (wordsReversed.length > 0) {
      reversedWord = " " + reversedWord;
    }
    wordsReversed += reversedWord;
  }
  return wordsReversed;
}

/**
 * - Time: O(n) linear.
 * - Space: O(n) linear.
 */
function reverseWords(wordsStr) {
  let reversedWord = "";
  let wordsReversed = "";

  for (const char of wordsStr) {
    if (char !== " ") {
      // prepend to reverse it
      reversedWord = char + reversedWord;
    }
    // space found
    else {
      // add space in front of word if not first word added
      if (wordsReversed.length > 0) {
        reversedWord = " " + reversedWord;
      }

      wordsReversed += reversedWord;
      reversedWord = ""; // reset
    }
  }

  // last word wasn't added if there are no trailing spaces at the end to cause it to be added
  if (reversedWord.length > 0) {
    // to avoid adding a space when it's the only word
    if (wordsReversed.length !== 0) {
      reversedWord = " " + reversedWord;
    }
    wordsReversed += reversedWord;
  }

  return wordsReversed;
}
