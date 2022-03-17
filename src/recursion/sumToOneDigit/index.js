/*
  Sum To One Digit
  Implement a function sumToOne(num)​ that,
  given a number, sums that number’s digits
  repeatedly until the sum is only one digit. Return
  that final one digit result.

  Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/

const num1 = 5;
const expected1 = 5;

const num2 = 10;
const expected2 = 1;

const num3 = 25;
const expected3 = 7;

/**
 * Sums the given number's digits until the number becomes one digit.
 * @param {number} num The number to sum to one digit.
 * @returns {number} One digit.
 */
function sumToOneDigit(num) {}

/*****************************************************************************/

function sumToOneDigit(n) {
  // Termination Condition if it's bad data (not a number)
  if (isNaN(parseInt(n))) {
    return null;
  }

  // base case: return solution
  if (n < 10) {
    return n;
  }

  const strNum = n.toString();
  let sum = 0;

  for (const strDigit of strNum) {
    sum += parseInt(strDigit);
  }

  return sumToOneDigit(sum);
}

function sumToOneDigit2(num) {
  if (num < 10) {
    return num;
  }

  let sum = 0;

  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sumToOneDigit2(sum);
}

module.exports = { sumToOneDigit, sumToOneDigit2 };
