const number1 = 3524;
/* 
Explanation:
  1. 5432 - 2345 = 3087
  2. 8730 - 0378 = 8352
  3. 8532 - 2358 = 6174
*/
const expected1 = 3;

const number2 = 2111;
const expected2 = 5;

const number3 = 9831;
const expected3 = 7;

/**
 * Determines how many digit-summing steps are required to reach kaprekars
 * constant from the given number.
 * 1. Arrange digits in descending order.
 * 2. Sum the sorted digits.
 * 3. Repeat until reaching 6174.
 * @param {number} num
 * @returns {number} The number of summing operations required to reach
 *    kaprekars constant.
 */
function kaprekarsConstant(num) {}

/*****************************************************************************/

function kaprekarsConstant(num) {
  let count = 0;
  if (num === 6174) {
    return count;
  }

  let numStr = num.toString();

  while (numStr != 6174) {
    if (numStr.length < 4) numStr += "0";

    const strDigits = numStr.split("");

    const asc = strDigits
      .slice()
      .sort((a, b) => a - b)
      .join("");

    const desc = strDigits
      .slice()
      .sort((a, b) => b - a)
      .join("");

    numStr = (desc - asc).toString();
    count++;
  }
  return count;
}

module.exports = {
  kaprekarsConstant,
};
