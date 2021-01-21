/* 
  Acronyms

  Create a function that, given a string, returns the string’s acronym 
  (first letter of each word capitalized). 

  Do it with .split first if you need to, then try to do it without
*/

const str1 = " there's no free lunch - gotta pay yer way. ";
const expected1 = "TNFL-GPYW";

const str2 = "Live from New York, it's Saturday Night!";
const expected2 = "LFNYISN";

/**
 * Turns the given str into an acronym.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string to be turned into an acronym.
 * @return {string} The given str converted into an acronym.
 */
function acronymize(str) {}

module.exports = { acronymize };

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
    acronym += word[0].toUpperCase();
  }
  return acronym;
}

/**
 * - Time: O(n) linear because the nested loops increment i, so every iteration
 *    of nested loops reduces iterations of outer loop.
 * - Space: O(n) linear.
 */
function acronymize(wordsStr) {
  let acronym = "";
  const len = wordsStr.length;

  for (let i = 0; i < len; i++) {
    while (wordsStr[i] === " " && i < len) {
      i++; // skip spaces, handles multiple spaces
    }
    // upperCase it now while we are already looping
    // to avoid upperCase having to loop over our output to upperCase
    acronym += wordsStr[i].toUpperCase();

    while (wordsStr[i] !== " " && i < len) {
      i++; // skip rest of word
    }
  }
  return acronym;
}
