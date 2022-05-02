/* 
Parens Valid

Given an str that has parenthesis in it
return whether the parenthesis are valid
*/

const str1 = "Y(3(p)p(3)r)s";
const expected1 = true;

const str2 = "N(0(p)3";
const expected2 = false;
// Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k";
const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.

const str4 = "a(b))(c";
const expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing.

/**
 * Determines whether the parenthesis in the given string are valid.
 * Each opening parenthesis must have exactly one closing parenthesis.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the parenthesis are valid.
 */
function parensValid(str) {}

/*****************************************************************************/

/**
 * - Time: O(n) linear.
 * - Space: O(n) linear.
 * @param {string} str
 * @returns {boolean}
 */
function parensValid(str = "") {
  const parensStack = [];

  for (const char of str) {
    if (char === "(") {
      parensStack.push(char);
    } else if (char === ")") {
      if (parensStack.length === 0) {
        return false;
      } else {
        parensStack.pop();
      }
    }
  }
  return parensStack.length === 0;
}

/**
 * A stack is helpful, but not necessary, we can have the same time complexity
 * but a better space complexity by using a counter.
 * - Time: O(n) linear.
 * - Space: O(1) constant.
 * @param {string} str
 * @returns {boolean}
 */
function parensValidCount(str = "") {
  let openLessCloseCount = 0;

  for (const char of str) {
    if (char === "(") {
      openLessCloseCount++;
    } else if (char === ")") {
      if (openLessCloseCount === 0) {
        return false;
      } else openLessCloseCount--;
    }
  }
  return openLessCloseCount === 0;
}

module.exports = { parensValid, parensValidCount };
