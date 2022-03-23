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

/*****************************************************************************/

/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * - Time: O(2n) -> O(n) linear, despite there being a nested loop,
 *    both loops amount to looping over every char in wordsStr, which is 'n'
 *    .split is 1n, and the two for loops are 1n, so 1n + 1n = 2n.
 * - Space: O(2n) -> O(n) linear, the input is stored twice, in words array and
 *    in wordsReversed.
 * @param {string} wordsStr Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */
function reverseWordsSplit(wordsStr = "w") {
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
 * @param {string} wordsStr
 * @returns {string}
 */
function reverseWords(wordsStr = "w") {
  // if all spaces
  if (wordsStr == false) {
    return wordsStr;
  }

  let currWord = "";
  let wordsReversed = "";

  for (let i = 0; i < wordsStr.length; i++) {
    const char = wordsStr[i];
    const isSpace = char === " ";
    const isLastIteration = i === wordsStr.length - 1;
    const isFirstWord = wordsReversed.length === 0;

    if (isSpace === false) {
      // Prepend char to reverse the word.
      currWord = char + currWord;
    }

    if (currWord.length > 0 && (isSpace || isLastIteration)) {
      if (isFirstWord === false) {
        // Add a space to separate words with no extra space at start / end.
        wordsReversed += " ";
      }

      wordsReversed += currWord;
      currWord = "";
    }
  }
  return wordsReversed;
}

/**
 * - Time: O(4n) -> O(n) linear. Each method is looping.
 * - Space: O(4n) -> O(n) linear. Each method creates a new array.
 * @param {string} wordsStr
 * @returns {string}
 */
const functionalReverseWords = (wordsStr = "") =>
  wordsStr
    // Convert to array of words split on space. Whenever the split separated
    // has repeated duplicates, empty strings will be present in the new array.
    .split(" ")
    // Remove falsy values. .filter will call the Boolean constructor and pass
    // it the current item it is looping over. Boolean("") returns false which
    // means filter will remove empty strings.
    .filter(Boolean)
    // Convert the filtered array into a new array with the words reversed.
    .map((word) => word.split("").reverse().join(""))
    // Join the words back together with spaces.
    .join(" ");

module.exports = { reverseWords, reverseWordsSplit, functionalReverseWords };
