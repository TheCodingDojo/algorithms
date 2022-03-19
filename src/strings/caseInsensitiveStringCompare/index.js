/* case insensitive string compare */

const strA1 = "ABC";
const strB1 = "abc";
const expected1 = true;

const strA2 = "ABC";
const strB2 = "abd";
const expected2 = false;

const strA3 = "ABC";
const strB3 = "bc";
const expected3 = false;

/**
 * Determines whether or not the strings are equal, ignoring case.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} strA
 * @param {string} strB
 * @returns {boolean} If the strings are equal or not.

 */
function caseInsensitiveStringCompare(strA, strB) {}

/*****************************************************************************/

/**
 * "Naive" because no early termination when early letters are different.
 * - Time: O(n) linear.
 *    - Best: O(n + m) linear, n = strA.length, m = strB.length.
 *        After both .toUpperCase happen, then comparison fails right away
 *        on first char being different or on different lengths.
 *    - Worst: O(3n) linear.
 *        When lengths are same, we can call length of both strings "n".
 *        Two .toUpperCase loops over "n" length to get 2n, then the worst
 *        case of looping to the whole string to find they are equal or
 *        last char is different which results in the 3rd "n".
 * - Space: O(n + m) -> O(n).
 *    .toUpperCase has to create a new copy of each string since strings
 *    are immutable.
 * @param {string} strA
 * @param {string} strB
 * @returns {boolean}
 */
function caseInsensitiveStringCompareNaive(strA = "", strB = "") {
  return strA.toUpperCase() === strB.toUpperCase();
}

/**
 * Best case is early termination on first different char.
 * - Time: O(n) linear, due to worst case looping to end.
 * - Space: O(1) constant, only upperCasing two letters at a time.
 * @param {string} strA
 * @param {string} strB
 * @returns {boolean}
 */
function caseInsensitiveStringCompare(strA = "", strB = "") {
  if (strA.length !== strB.length) {
    return false;
  }

  for (let i = 0; i < strA.length; i++)
    if (strA[i].toUpperCase() !== strB[i].toUpperCase()) {
      return false;
    }
  return true;
}

/**
 * Loop from both sides inwards to solve the problem of not knowing if looping
 * forwards or backwards would cause an earlier exit.
 * - Time: O(n/2) b/c loop is half length. This is still linear because if
 *    n doubles in size, the iterations double, so simplified to O(n).
 * - Space: O(1) constant.
 * @param {string} strA
 * @param {string} strB
 * @returns {boolean}
 */
function caseInsensitiveStringCompare2(strA = "", strB = "") {
  if (strA.length !== strB.length) {
    return false;
  }

  // check both sides for early exit
  for (let i = 0; i <= strA.length / 2; i++) {
    const leftCharA = strA[i].toUpperCase();
    const leftCharB = strB[i].toUpperCase();
    const rightCharA = strA[strA.length - 1 - i].toUpperCase();
    const rightCharB = strB[strB.length - 1 - i].toUpperCase();

    // Check outside in at the same time to increase chance of early exit.
    if (leftCharA !== leftCharB || rightCharA !== rightCharB) {
      return false;
    }
  }
  return true;
}

module.exports = {
  caseInsensitiveStringCompareNaive,
  caseInsensitiveStringCompare,
  caseInsensitiveStringCompare2,
};
