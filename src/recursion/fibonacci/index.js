/* 
  Return the fibonacci number at the nth position, recursively.
  
  Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

  The next number is found by adding up the two numbers before it,
  starting with 0 and 1 as the first two numbers of the sequence.
*/

const num1 = 0;
const expected1 = 0;

const num2 = 1;
const expected2 = 1;

const num3 = 2;
const expected3 = 1;

const num4 = 3;
const expected4 = 2;

const num5 = 4;
const expected5 = 3;

const num6 = 8;
const expected6 = 21;

/**
 * Recursively finds the nth number in the fibonacci sequence.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num The position of the desired number in the fibonacci sequence.
 * @returns {number} The fibonacci number at the given position.
 */
function fibonacci(num) {}

/*****************************************************************************/

/**
 * Naive recursion.
 * - Time: O(2^n) exponential.
 * - Space: O(n) linear due to the max call stack depth.
 */
function fibNaiveRecursion(n) {
  if (n < 0) {
    return null;
  }

  if (n < 2) {
    return n;
  }
  return fibNaiveRecursion(n - 1) + fibNaiveRecursion(n - 2);
}

/**
 * Naive Memoization solution.
 * In computing, memoization or memoisation is an optimization technique used
 * primarily to speed up computer programs by storing the results of expensive
 * function calls and returning the cached result when the same inputs occur
 * again.
 *
 * NOTE: Since memo is a param, it only saves solutions that have been
 *    calculated within the recursive calls. After the recursion is finished,
 *    the next time this function is called, memo is re-declared, so it does
 *    not remember solutions from the last time the function was called.
 *    The memo param can be moved outside of the function so that it can
 *    persist all previous solutions. An advanced technique to avoid polluting
 *    the outer scope with a memo var would be to put the memo var in a closure
 *    function.
 *
 * - Time: O(2n) -> O(n) linear.
 * - Space: O(2n) -> O(n) linear. Call stack depth memo length are both 'n'.
 */
function fibNaiveMemo(n, memo = { 0: 0, 1: 1 }) {
  if (n < 0) {
    return null;
  }

  if (memo[n] !== undefined) {
    return memo[n];
  }

  memo[n] = fibNaiveMemo(n - 1, memo) + fibNaiveMemo(n - 2, memo);

  return memo[n];
}

/**
 * Non recursive.
 * - Time: O(n) linear.
 * - Space: O(2n) -> O(n) linear. Call stack depth seq length are both 'n'.
 */
function fibArr(n) {
  if (n < 0) {
    return null;
  }

  const seq = [0, 1];

  for (let i = 2; i <= n; i++) {
    seq.push(seq[i - 2] + seq[i - 1]);
  }
  return seq[n];
}

/**
 * Iteratively calculates the nth fib num. If memoization were added here,
 * this would be the most optimized of the solutions in this file.
 * - Time: O(n) linear.
 * - Space: O(3) -> O(1) constant. There are 3 vars used.
 * @see https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e
 * @param {number} n The nth fib num to be calculated
 * @returns {number} The nth fib num.
 */
function fibWhile(n) {
  if (n < 0) {
    return null;
  }

  let prev = 1;
  let prev2 = 0;
  let temp;

  while (n > 0) {
    temp = prev;
    prev = prev + prev2;
    prev2 = temp;
    n--;
  }
  return prev2;
}

module.exports = { fibNaiveMemo, fibNaiveRecursion, fibArr, fibWhile };
