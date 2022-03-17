/* 
  Given two strings S and T containing only lowercase letters and "#" characters,
  return if they are equal when both are typed into empty text editors.
  # character means a backspace character.

  i.e., after processing the backspaces, are the two strings equal?

  Bonus: solve in O(n) time
*/

const S1 = "ab#c";
const T1 = "ad#c";
const expected1 = true;
// Explanation: Both S and T become "ac"

const S2 = "ab##";
const T2 = "c#d#";
const expected2 = true;
// Explanation: Both S and T become ""

const S3 = "a##c";
const T3 = "#a#c";
const expected3 = true;
// Explanation: Both S and T become "c"

const S4 = "a#c";
const T4 = "b";
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".

/**
 * Determines if the given strings are equal after the backspace characters
 * "#" are processed.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} S
 * @param {string} T
 * @returns {boolean} Whether the given strings are equal after backspaces
 *    have been processed.
 */
function backspaceStringCompare(S, T) {}

/*****************************************************************************/

/**
 * Determines if the given strings are equal after the backspace characters
 * "#" are processed.
 * - Time: O(n + m + p) -> O(n) linear. n = S.length, m = T.length from the
 *    getBackspacedStack call. p = the length of S and T after the backspaces
 *    were removed.
 * Best: O(n + m) because the earliest exit is after the two getBackspacedStack
 *    calls.
 * - Space: O(n + m) -> O(n).
 * @param {string} S
 * @param {string} T
 * @returns {boolean} Whether the given strings are equal after backspaces
 *    have been processed.
 */
function backspaceStringCompare(S, T) {
  const sBackspaced = getBackspacedStack(S);
  const tBackspaced = getBackspacedStack(T);

  if (sBackspaced.length !== tBackspaced.length) {
    return false;
  }

  for (let i = 0; i < sBackspaced.length; i++) {
    if (sBackspaced[i] !== tBackspaced[i]) {
      return false;
    }
  }
  return true;
}

function getBackspacedStack(str) {
  const backspacedStack = [];

  for (const char of str) {
    if (char !== "#") {
      backspacedStack.push(char);
    } else if (backspacedStack.length > 0) {
      backspacedStack.pop();
    }
  }

  return backspacedStack;
}

const backspaceCompare2 = (S, T) =>
  processBackspaces(S) === processBackspaces(T);

function processBackspaces(s) {
  let backspaceCount = 0;
  let newS = "";

  for (let i = s.length - 1; i >= 0; --i) {
    let isBackspace = s[i] === "#";

    if (backspaceCount > 0 && !isBackspace) {
      backspaceCount--;
    } else if (isBackspace) {
      backspaceCount++;
    } else {
      // prepend so the strings aren't reversed due to looping backwards,
      // however, it wouldn't break the final comparison if both are reversed.
      newS = s[i] + newS;
    }
  }
  return newS;
}

module.exports = { backspaceStringCompare, backspaceCompare2 };
