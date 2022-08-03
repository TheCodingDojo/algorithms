/* 
  Acronyms

  Create a function that, given a string, returns the string’s acronym 
  (first letter of each word capitalized). 

  Do it with .split first if you need to, then try to do it without
*/

const str1 = "object oriented programming";
const expected1 = "OOP";

// The 4 pillars of OOP
const str2 = "abstraction polymorphism inheritance encapsulation";
const expected2 = "APIE";

const str3 = "software development life cycle";
const expected3 = "SDLC";

// Bonus: ignore extra spaces
const str4 = "  global   information tracker    ";
const expected4 = "GIT";

/**
 * Turns the given str into an acronym.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string to be turned into an acronym.
 * @returns {string} The acronym.
 */
function acronymize(str) {}

/*****************************************************************************/

/**
 * - Time: O(n + m) linear -> O(n) where n is wordsStr.length and
 *    m is wordsArr.length.
 * - Space: O(n) linear.
 * @param {string} wordsStr
 * @returns {string}
 */
function acronymizeWithSplit(wordsStr = "") {
  let acronym = "";
  const wordsArr = wordsStr.split(" ");

  for (const word of wordsArr) {
    // Splitting can result in empty strings.
    if (word !== "") {
      // upper case each letter as it's added so toUpperCase doesn't have
      // to loop over each acronym char at the end to upper case.
      acronym += word[0].toUpperCase();
    }
  }
  return acronym;
}

/**
 * - Time: O(n) linear
 * - Space: O(n) linear.
 * @param {string} wordsStr
 * @returns {string}
 */
function acronymize(wordsStr = "") {
  let acronym = "";

  for (let i = 0; i < wordsStr.length; i++) {
    // These booleans add readability because they are named descriptively,
    // they also simplify how many conditional statements or nested conditions
    // are needed.
    const currentChar = wordsStr[i];
    const isCurrentCharSpace = currentChar === " ";
    const isPreviousCharSpace = wordsStr[i - 1] === " ";
    const isFirstLetterOfWord =
      (i === 0 && !isCurrentCharSpace) ||
      (!isCurrentCharSpace && isPreviousCharSpace);

    if (isFirstLetterOfWord) {
      acronym += currentChar.toUpperCase();
    }
  }
  return acronym;
}

/**
 * - Time: O(n) linear
 * - Space: O(n) linear.
 * @param {string} wordsStr
 * @returns {string}
 */
function acronymize2(wordsStr = "") {
  let acronym = "";

  for (let i = 0; i < wordsStr.length; i++) {
    const currentChar = wordsStr[i];
    const isCurrentCharSpace = currentChar === " ";
    const isPreviousCharSpace = wordsStr[i - 1] === " ";
    let isFirstLetterOfWord = !isCurrentCharSpace && isPreviousCharSpace;

    // Special case for idx 0 being start of word.
    if (i === 0 && !isCurrentCharSpace) {
      isFirstLetterOfWord = true;
    }

    if (isFirstLetterOfWord) {
      acronym += currentChar.toUpperCase();
    }
  }
  return acronym;
}

/**
 * Manually split into words to get the first letter of each.
 * - Time: O(n) linear
 * - Space: O(n) linear.
 * @param {string} wordsStr
 * @returns {string}
 */
function acronymize3(wordsStr = "") {
  let acronym = "";
  let currentWord = "";

  for (let i = 0; i < wordsStr.length; i++) {
    const isSpace = wordsStr[i] === " ";

    if (currentWord.length > 0 && isSpace) {
      acronym += currentWord[0].toUpperCase();
      // reset for next word.
      currentWord = "";
    } else if (isSpace === false) {
      currentWord += wordsStr[i];
    }

    // Reaching the end also indicates the current word is complete.
    if (i === wordsStr.length - 1 && currentWord.length > 0) {
      acronym += currentWord[0].toUpperCase();
    }
  }
  return acronym;
}

/**
 * - Time: O(4n) -> O(n) linear. Split, filter, map, and join each loop.
 * - Space: O(3n) -> O(n) linear. Split, filter, and map each create a new arr.
 * @param {string} s
 * @returns {string}
 */
const functionalAcronymize = (s = "") =>
  s
    // Regex can be used if more control over split is needed.
    // This example removes any non alphabetical chars with split.
    .split(/[^A-Za-z]/)
    // Create a new array without empty strings from the split array.
    .filter((word) => word.length > 0)
    // map the filtered words into a new arr of upper-cased first letters.
    .map((word) => word[0].toUpperCase())
    // join the mapped array of first letters together without a separator.
    .join("");

module.exports = {
  acronymizeWithSplit,
  acronymize,
  acronymize2,
  acronymize3,
  functionalAcronymize,
};
