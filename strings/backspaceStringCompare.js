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
 * Determines if @S and @T are equal after the backspace
 * characters "#" are processed.
 * @param   {string} S
 * @param   {string} T
 *          @S and @T contain "#" chars which represent
 *          a backspace that needs to be processed.
 * @return  {boolean}
 * - Time: O(?).
 * - Space: O(?).
 */
function backspaceStringCompare(S, T) {}

module.exports = { backspaceStringCompare };

/*****************************************************************************/

/**
 * - Time:    O(n + m + p) -> O(n) linear
 *          n = @S length from the get stack fn
 *          m = @T length from the get stack fn
 *          p = the length of @S and @T after the
 *          backspaces were removed.
 * Best:    O(n + m) because the earliest exit is
 *          after the two getBackspacedStack calls.
 * - Space:   O(n + m)
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

function backspaceCompare2(S, T) {
  let sBackspaced = processBackspaces(S);
  let tBackspaced = processBackspaces(T);

  if (sBackspaced === tBackspaced) {
    return true;
  } else {
    return false;
  }
}

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
      newS = s[i] + newS;
    }
  }
  return newS;
}
