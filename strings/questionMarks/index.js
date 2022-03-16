// https://coderbyte.com/editor/Questions%20Marks:JavaScript

/* 
  Given a string, containing letters, single digit ints, and question marks
  return whether or not there are exactly 3 question marks between EVERY two ints that add up to 10
    - if there are no two ints that add up to 10, return false

  Helpful functions:
    parseInt(char) => NaN or the string parsed to an int
    isNaN(x) => true or false
      - need to use isNaN if you want to know if something is NaN
      - the number 0 is falsy
      - NaN is falsy
*/

const str1 = "aa6?9";
const expected1 = false;

const str2 = "acc?7??sss?3rr1??????5";
const expected2 = true;

const str3 = "?3?d?dad?7??????3";
const expected3 = true;

const str4 = "7??????3";
// Explanation: too many question marks.
const expected4 = false;

/**
 * Determines if there are exactly 3 "?" chars between
 * EVERY two ints that add up to 10.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @return {boolean}
 */
function questionMarks(str) {}

/*****************************************************************************/

/**
 * - Time: O(n) linear. n = str length
 * - Space: O(1) constant.
 * @param {string} str
 * @return {boolean}
 */
function questionMarks(str) {
  let prevInt = 0;
  let qMarkCnt = 0;
  let sumTenExists = false;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "?") {
      ++qMarkCnt;
    } else {
      const parsed = parseInt(str[i]);

      // not not a number means it's a number
      if (!isNaN(parsed)) {
        if (prevInt + parsed === 10) {
          sumTenExists = true;

          if (qMarkCnt !== 3) {
            return false;
          }
        } else {
          prevInt = parsed;
          qMarkCnt = 0;
        }
      }
    }
  }
  return sumTenExists ? true : false;
}

module.exports = { questionMarks };
