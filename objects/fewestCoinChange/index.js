/* 
  Given an int to represent how much change is needed
  calculate the fewest number of coins needed to create that change,
  using the standard US denominations
*/

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

/**
 * Calculates the fewest coins of the standard American denominations needed
 *    to reach the given cents amount.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} cents
 * @param {string} sick
 * @returns {Object<string, number>} - A denomination table where the keys are
 *    denomination names and the value is the amount of that denomination
 *    needed.
 */
function fewestCoinChange(cents) {}

/*****************************************************************************/

/**
 * - Time: O(1) constant, no matter how large cents get, it's still 4 conditions.
 * - Space: O(1) constant, denominationTable has the same 4 keys (denominations)
 *    no matter how large cents gets.
 */
function fewestCoinChange(cents) {
  const denominationTable = {};

  if (cents >= 25) {
    const quartersCount = Math.floor(cents / 25);
    cents -= quartersCount * 25;
    denominationTable.quarter = quartersCount;
  }

  if (cents >= 10) {
    const dimesCount = Math.floor(cents / 10);
    cents -= dimesCount * 10;
    denominationTable.dime = dimesCount;
  }

  if (cents >= 5) {
    const nickelsCount = Math.floor(cents / 5);
    cents -= nickelsCount * 5;
    denominationTable.nickel = nickelsCount;
  }

  if (cents > 0) {
    denominationTable.penny = cents;
  }

  return denominationTable;
}

/**
 * - Time: O(1) constant, the loop always loops over the 4 denominations
 *    regardless of how large cents is.
 * - Space: O(1) constant.
 */
function fewestCoinChange2(cents) {
  const denominationsDescending = [
    { name: "quarter", amnt: 25 },
    { name: "dime", amnt: 10 },
    { name: "nickel", amnt: 5 },
    { name: "penny", amnt: 1 },
  ];

  const changeMap = {};

  for (const denomination of denominationsDescending) {
    if (cents >= denomination.amnt) {
      const count = Math.floor(cents / denomination.amnt);
      cents -= count * denomination.amnt;
      changeMap[denomination.name] = count;
    }
  }
  return changeMap;
}

module.exports = { fewestCoinChange, fewestCoinChange2 };
