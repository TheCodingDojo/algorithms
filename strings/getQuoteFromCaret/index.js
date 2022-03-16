/**
 * Given a str and an in-bounds idx that represents the position of the caret
 * return the substr that is enclosed by double quotes that the caret is within
 * or an empty string if the caret is not within double quotes.
 */

const str1 = `wow "jabascript cool" lol "foo"`;
const idx1 = 10;
const expected1 = "jabascript cool";

const str2 = `hello "world", good morning.`;
const idx2 = 2;
const expected2 = "";

/**
 * Finds the double quote enclosed substr that the caret is within.
 * @param {string} str
 * @param {number} caretIdx Represents the location of the caret.
 * @returns {string} The double quote enclosed substr.
 */
function getQuoteFromCaret(str, caretIdx) {}

/*****************************************************************************/

/**
 * Finds the double quote enclosed substr that the caret is within.
 * @param {string} str
 * @param {number} caretIdx Represents the location of the caret.
 * @returns {string} The double quote enclosed substr.
 */
function getQuoteFromCaret(str, caretIdx) {
  let quote = "";

  let leftQuoteFound = false;
  let leftIdx = caretIdx;

  while (leftIdx >= 0) {
    if (str[leftIdx] === `"`) {
      leftQuoteFound = true;
      break;
    }

    quote = str[leftIdx] + quote;
    leftIdx--;
  }

  let rightIdx = caretIdx + 1;
  let rightQuoteFound = false;

  while (rightIdx < str.length) {
    if (str[rightIdx] === `"`) {
      rightQuoteFound = true;
      break;
    }

    quote += str[rightIdx];
    rightIdx++;
  }

  if (leftQuoteFound && rightQuoteFound) {
    return quote;
  }

  return "";
}

module.exports = { getQuoteFromCaret };
