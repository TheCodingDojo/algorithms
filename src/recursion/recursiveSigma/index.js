/* 
Recursive Sigma

Input: integer
Output: sum of integers from 1 to Input integer
*/

const num1 = 5;
const expected1 = 15;
// Explanation: (1+2+3+4+5)

const num2 = 2.5;
const expected2 = 3;
// Explanation: (1+2)

const num3 = -1;
const expected3 = 0;

/**
 * Recursively sum the given int and every previous positive int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num
 * @returns {number}
 */
function recursiveSigma(num) {}

/*****************************************************************************/

/**
 * Recursively sum the given int and every previous positive int.
 * - Time: O(n) linear.
 * - Space: O(n) linear due to the call stack.
 * @param {number} num
 * @returns {number}
 */
function recursiveSigma(n) {
  // get rid of decimals
  const int = parseInt(n);

  // Termination Condition if it's bad data (not a number)
  if (isNaN(int)) {
    return null;
  }

  // base case
  if (int < 1) {
    return 0;
  }
  // if the return keyword is missing below, undefined because returns that
  // happen deeper in the recursion don't get returned all the way out.
  return int + recursiveSigma(int - 1);
}
/* 
  recursiveSig(5) breakdown
  below function calls are added to top of call stack, .push (can be seen in debugger):

  5 + recursiveSig(4)
      4 + recursiveSig(3)
          3 + recursiveSig(2)
              2 + recursiveSig(1)
                  1 + recursiveSig(0)
                      0 is returned - base case reached, can start summing now
                      - call stack "unwinds" now with .pop LIFO (matching indentation)
                  1 + 0 = 1 <- this sum becomes the right side of the next addition
              2 + 1 = 3
          3 + 3 = 6
      4 + 6 = 10
  5 + 10 = 15
*/

function recursiveSigma2(n, sum = 0) {
  // get rid of decimals
  const int = parseInt(n);

  // Termination Condition if it's bad data (not a number)
  if (isNaN(int)) {
    return null;
  }

  // base case
  if (int < 1) {
    return sum;
  }

  const newSum = recursiveSigma2(int - 1, sum + int);
  return newSum;
}

module.exports = { recursiveSigma, recursiveSigma2 };
