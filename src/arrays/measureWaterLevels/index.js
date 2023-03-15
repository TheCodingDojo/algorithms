/**
 * From a Chipotle interview.
 * encodeStr algo was also given in this interview (aaabbcdd => a3b2cd2).
 *
 * It ain't much, but it's honest work. A worker who measures water level fluctuations in a river is asked to find the
 * largest fluctuation in water levels during a day, but only for rises in water levels.
 */

const riverLevels1 = [15, 17, 30];
const expected1 = 15; // 30 - 15 = 15

const riverLevels2 = [15, 17, 30, 14, 5, 16, 25, 9, 3];
const expected2 = 20; // 25 - 5 = 20

const riverLevels3 = [15, 17, 30, 20, 50, 16, 25, 9, 3];
const expected3 = 30; // 50 - 20 = 30

const riverLevels4 = [21, 18, 10, 11, 14, 9, 5, 13, 15, 7, 1, 6, 12, 4];
const expected4 = 11; // 12 - 1 = 11

const riverLevels5 = [1, 5];
const expected5 = 4;

const riverLevels6 = [5, 1];
const expected6 = -1;

const riverLevels7 = [9, 7, 7, 7];
const expected7 = -1;

const riverLevels8 = [42];
const expected8 = -1;

/**
 * It ain't much, but it's honest work. A worker who measures water level fluctuations in a river is asked to find the
 * largest fluctuation in water levels during a day, but only for rises in water levels.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} waterLevels Non-empty .
 * @returns {number} The max water-level rise amount or -1 if none.
 */
function measureWaterLevels(waterLevels) {}

/*****************************************************************************/

/**
 * It ain't much, but it's honest work. A worker who measures water level fluctuations in a river is asked to find the
 * largest fluctuation in water levels during a day, but only for rises in water levels.
 * - Time: O(n) linear.
 * - Space: O(1) constant.
 * @param {Array<number>} waterLevels Non-empty .
 * @returns {number} The max water-level rise amount or -1 if none.
 */
function measureWaterLevels(levels) {
  let largestRise = -1;
  let currLowLevel = levels[0];

  for (let i = 1; i < levels.length; i++) {
    const isNewMax = levels[i] - currLowLevel > largestRise;
    /**
     * When falling, currLow needs to update so it doesn't get stuck in a prev
     * cycle on an old low that is lower than the lowest part of current cycle.
     */
    const isWaterLevelFalling = levels[i] < levels[i - 1];
    const isLowerThanCurrLow = levels[i] < currLowLevel;

    if (isNewMax) {
      largestRise = levels[i] - currLowLevel;
    } else if (isWaterLevelFalling || isLowerThanCurrLow) {
      currLowLevel = levels[i];
    }
  }
  return largestRise === 0 ? -1 : largestRise;
}

module.exports = { measureWaterLevels };
