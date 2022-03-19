/* 
  Reverse Word Order

  Given a string of words (with spaces)
  return a new string with words in reverse sequence.
*/

const str1 = "This is a test";
const expected1 = "test a is This";

const str2 = "hello";
const expected2 = "hello";

const str3 = "   This  is a   test  ";
const expected3 = "test a is This";

/**
 * Reverses the order of the words but not the words themselves form the given
 * string of space separated words.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string containing space separated words.
 * @returns {string} The given string with the word order reversed but the words
 *    themselves are not reversed.
 */
function reverseWordOrder(wordsStr) {}

/*****************************************************************************/

/**
 * - Time: O(2n) -> O(n) linear. The 2n comes from the fact that words.length
 *    is at most the same length as wordsStr when there are no spaces.
 *    If there are spaces then words.length will be less than wordsStr
 *    because of the spaces being removed from the .split.
 * - Space: O(2n) -> O(n) linear. Storing wordsStr twice, once in words
 *    array and again in reversedWordOrder.
 * @param {string} wordsStr
 * @returns {string}
 */
function reverseWordOrderSplit(wordsStr = "") {
  // if all spaces
  if (wordsStr == false) {
    return wordsStr;
  }

  const words = wordsStr.split(" ");
  let reversedWordOrder = "";

  // loop backwards
  for (let i = words.length - 1; i >= 0; --i) {
    // Skip empty strings resulting from .split encountering multiple spaces.
    if (words[i] === "") {
      continue;
    }

    if (reversedWordOrder.length > 0) {
      reversedWordOrder += " ";
    }

    reversedWordOrder += words[i];
  }
  return reversedWordOrder;
}

/**
 * - Time: O(n) linear.
 * - Space: O(n) linear. wordsStr is stored again in reversedWOrdOrder var.
 * @param {string} wordsStr
 * @returns {string}
 */
function reverseWordOrder(wordsStr = "") {
  // if all spaces
  if (wordsStr == false) {
    return wordsStr;
  }

  let currWord = "";
  let reversedWordOrder = "";

  for (let i = 0; i < wordsStr.length; i++) {
    const char = wordsStr[i];
    const isSpace = char === " ";
    const isLastIteration = i === wordsStr.length - 1;
    const isFirstWord = reversedWordOrder.length === 0;

    if (isSpace === false) {
      currWord += char;
    }

    if (currWord.length > 0 && (isSpace || isLastIteration)) {
      if (isFirstWord === false) {
        // Add a space to separate words with no extra space at start / end.
        reversedWordOrder = " " + reversedWordOrder;
      }
      // Prepend the word so the order is reversed.
      reversedWordOrder = currWord + reversedWordOrder;
      currWord = "";
    }
  }
  return reversedWordOrder;
}

/**
 * - Time: O(4n) -> O(n) linear. Each method is looping.
 * - Space: O(3n) -> O(n) linear. Each method creates a new array except
 *    reverse.
 * @param {string} wordsStr
 * @returns {string}
 */
const functionalReverseWordOrder = (wordsStr = "") =>
  wordsStr
    // Convert to array split on spaces. Could result in empty strings
    // if there are multiple spaces in a row.
    .split(" ")
    // Create a new filtered array removing empty strings.
    .filter((word) => word !== "")
    // Reverse the filtered array in place. This doesn't mutate the original
    // array since filter already split and filter already created a new one.
    .reverse()
    // Join the words back together with a space between.
    .join(" ");

module.exports = {
  reverseWordOrder,
  reverseWordOrderSplit,
  functionalReverseWordOrder,
};
