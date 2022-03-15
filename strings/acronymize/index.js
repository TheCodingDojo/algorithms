/* 
  Acronyms

  Create a function that, given a string, returns the string’s acronym 
  (first letter of each word capitalized). 

  Do it with .split first if you need to, then try to do it without
*/

const str1 = "abstraction polymorphism inheritance encapsulation";
const expected1 = "APIE";

const str2 = "object oriented programming";
const expected2 = "OOP";

const str3 = "software development life cycle";
const expected3 = "SDLC";

// Bonus: ignore extra spaces
const str4 = "  global   information tracker    ";
const expected4 = "GIT";

/**
 * Turns the given str into an acronym.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string to be turned into an acronym.
 * @returns {string} The given str converted into an acronym.
 */
function acronymize(str) {}

/*****************************************************************************/

/**
 * - Time: O(n + m) linear -> O(n) where n is wordsStr.length and
 *    m is wordsArr.length.
 * - Space: O(n) linear.
 */
function acronymizeWithSplit(wordsStr) {
  let acronym = "";
  const wordsArr = wordsStr.split(" ");

  for (const word of wordsArr) {
    // Splitting can result in empty strings.
    if (word !== "") {
      acronym += word[0].toUpperCase();
    }
  }
  return acronym;
}

/**
 * - Time: O(n) linear
 * - Space: O(n) linear.
 */
function acronymize(wordsStr) {
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
 * @param {string} s The string to turn into an acronym.
 * @returns {string} An acronym.
 */
const functionalAcronymize = (s) =>
  s
    // Regex to split on non-alphabetical chars to remove special chars.
    .split(/[^A-Za-z]/)
    // Remove empty strings resulting from spaces and special chars being split.
    .filter((word) => word.length > 0)
    // map the filtered words into a new arr of upper-cased first letters.
    .map((word) => word[0].toUpperCase())
    // join the mapped array of first letters together without a separator.
    .join("");

module.exports = {
  /* acronymizeWithSplit, acronymize, */ functionalAcronymize,
};
