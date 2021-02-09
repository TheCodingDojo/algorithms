/* 
  From an interview on 2/7/21. encodeStr algo was also given: 
    https://github.com/TheCodingDojo/algorithms/blob/main/strings/encodeStr.js
  

  Given an array of integers representing river water-level fluctuation, find
  the largest increase in a rising water-level cycle.

  A rising water-level cycle is a series of ascending integers. The cycle is
  broken when a descend begins.

  Return the largest increase in water levels or -1 if there was no increase.

  AKA find the largest range out of all the sequences of ascending ints.
*/

const riverLevels1 = [3, 1, 2, 4, 2, 3, 4];
const expected1 = 3; // 4 - 1 = 3

const riverLevels2 = [4, 3, 1, 4, 3, 7, 2, 1];
const expected2 = 4; // 7 - 3 = 4

const riverLevels3 = [3, 2, 2, 8, 5, 2, 4, 3, 1, 5, 21, 2];
const expected3 = 20; // 21 - 1 = 20

const riverLevels4 = [1, 5];
const expected4 = 4;

const riverLevels5 = [9, 7, 6, 3, 1];
const expected5 = -1;

const riverLevels6 = [9, 7, 7, 7];
const expected6 = -1;

const riverLevels7 = [5, 1];
const expected7 = -1;

const riverLevels8 = [42];
const expected8 = -1;

/**
 * Find the max range out of all the sequences of unbroken ascending ints.
 * Range = max - min to represent rising water-level.
 * @param {Array<number>} waterLevels
 * @return {number} The largest range or -1 if none.
 */
function riverReading(waterLevels) {}

module.exports = { riverReading };

/*****************************************************************************/

/**
 * Find the max range out of all the sequences of unbroken ascending ints.
 * Range = max - min to represent rising water-level.
 * @param {Array<number>} waterLevels
 * @return {number} The largest range or -1 if none.
 */
function riverReading(waterLevels) {
  if (waterLevels.length < 2) {
    return -1;
  }

  let min = waterLevels[0];
  let max = waterLevels[0];
  let maxRise = -1;

  for (let i = 1; i < waterLevels.length; i++) {
    const curr = waterLevels[i];
    const prev = waterLevels[i - 1];

    if (curr >= prev) {
      if (curr > max) {
        max = curr;
      }

      if (prev < min) {
        min = prev;
      }

      if (max - min > maxRise) {
        maxRise = max - min;
      }
    }
    // Water rising has stopped. Reset max & min for next cycle.
    else {
      max = curr;
      min = curr;
    }
  }

  return maxRise || -1; // Will return -1 when maxRise is 0.
}
