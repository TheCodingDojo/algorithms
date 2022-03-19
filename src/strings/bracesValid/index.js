/* 
Braces Valid

Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
*/

const str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
const expected1 = true;

const str2 = "D(i{a}l[ t]o)n{e";
const expected2 = false;

const str3 = "A(1)s[O (n]0{t) 0}k";
const expected3 = false;

/**
 * Determines whether the string's braces, brackets, and parenthesis are valid
 * based on the order and amount of opening and closing pairs.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given strings braces are valid.
 */
function bracesValid(str) {}

/*****************************************************************************/

/**
 * - Time: O(n) linear.
 * - Space: O(n) linear.
 * @param {string} str
 * @returns {boolean}
 */
function bracesValid(str = "") {
  const stack = [];
  const closeToOpen = { ")": "(", "}": "{", "]": "[" };

  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "(":
      case "{":
      case "[":
        stack.push(str[i]);
        break;
      case ")":
      case "}":
      case "]":
        if (closeToOpen[str[i]] === stack[stack.length - 1]) {
          stack.pop();
        } else {
          return false;
        }
        break;
      default:
        break;
    }
  }
  return stack.length === 0;
}

/**
 * - Time: O(n * m) where n = str.length and m = opens.length,
 *    since opens.length is constant length of 3 -> O(3n) -> O(n) linear.
 * - Space: O(n) linear.
 * @param {string} str
 * @returns {boolean}
 */
function bracesValid2(str = "") {
  const stack = [];
  const opens = "({[";
  const closeToOpen = { ")": "(", "}": "{", "]": "[" };

  for (let i = 0; i < str.length; i++) {
    if (opens.includes(str[i])) {
      stack.push(str[i]);
    } else if (str[i] in closeToOpen) {
      if (closeToOpen[str[i]] === stack[stack.length - 1]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}

module.exports = { bracesValid, bracesValid2 };
