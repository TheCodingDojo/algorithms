// Given to an alumni in 2021 by DocuSign.

/* 
There is a one-dimensional garden of length N that is non-empty. In each
position of the N length garden, a fountain has been installed. Given an
array a[] such that a[i] describes the coverage limit of ith fountain.
A fountain can cover the range from the position
max(i – a[i], 0) to min(i + a[i], N - 1). In beginning, all the fountains
are switched off. The task is to find the minimum number of fountains needed to
be activated such that the whole N-length garden can be covered by water.
*/

const garden1 = [1, 2, 1];
const expected1 = 1;
// Explanation:
// garden[0] = 1, range = 0 to 1
// garden[1] = 2, range = 0 to 2
// garden[2] = 1, range = 1 to 2
// Therefore, the fountain at position a[2] covers the whole garden.
// Therefore, the required output is 1.

const garden2 = [2, 1, 1, 2, 1];
const expected2 = 2; // garden[0] and garden[3] || garden[1] and garden[4]

const garden3 = [2, 4, 1, 3, 2, 1, 1, 1, 2, 1];
const expected3 = 2; // garden[3] and garden[8] || garden[1] and garden[8]

const garden4 = [2, 1, 1, 2, 2, 1, 1, 1, 1, 5];
const expected4 = 3; // garden[0] and garden[3 || 4] and garden[9]

const garden5 = [1, 1, 1, 1];
const expected5 = 2;

const garden6 = [1, 1, 1, 1, 1, 1, 1, 5, 1];
const expected6 = 2; // garden[1] and garden[7]

const garden7 = [1];
const expected7 = 1;

const garden8 = [1, 1, 2, 3, 2, 1, 1, 1, 1, 1, 11, 8];
const expected8 = 1;

console.log("garden3");
printRanges(garden3);

/**
 * Finds the fewest fountains that can cover the whole 1d garden.
 * @param {number[]} garden Non-empty and 1d. Numbers are > 0 and represent a
 *    fountain's range: max(i – garden[i], 0) to min(i + garden[i], N - 1).
 * @returns {number} The fewest fountains for full garden coverage.
 */
function fewestFountains(garden) {}

/**
 * Prints the range of each fountain.
 * @param {number[]} garden
 * @param {boolean} startAsIdx
 */
function printRanges(garden, startAsIdx = false) {
  console.log(`[${garden.map((_, i) => i).join(" ")}]`, "| indexes.");

  for (let i = 0; i < garden.length; i++) {
    let str = "";
    let start, end;

    if (startAsIdx) {
      start = i;
      end = ranges[i];
    } else {
      [start, end] = getRange(garden, i);
    }

    for (let j = 0; j < garden.length; j++) {
      if (start <= j && j <= end) {
        //
        str += "~";
      } else {
        str += "_";
      }

      j !== garden.length - 1 && (str += " ".repeat(j.toString().length));
    }
    console.log(
      `[${str}] | i: ${i} | val: ${garden[i]} | startIdx: ${start} | endIdx: ${end}`
    );
  }
  console.log("*".repeat(50));
}

/**
 * @param {number[]} garden
 * @param {number} i
 * @returns {Array<number, number>} The ith fountain's inclusive range.
 */
function getRange(garden, i) {
  return [
    Math.max(i - garden[i], 0),
    Math.min(i + garden[i], garden.length - 1),
  ];
}

/*****************************************************************************/

/**
 * Finds the fewest fountains that can cover the whole 1d garden.
 * Time: O(n^2) quadratic. This does far fewer iterations than a typical
 *    nested j loop that starts at i + 1 because at worst (all 1s) our outer
 *    loop increments by 3, but that is a constant so it is ignored.
 * @param {number[]} garden Non-empty and 1d. Numbers are > 0 and represent a
 *    fountain's range: max(i – garden[i], 0) to min(i + garden[i], N - 1).
 * @returns {number} The fewest fountains for full garden coverage.
 */
function fewestFountains(garden) {
  let missingCoverageStart = 0;
  let count = 0;

  while (missingCoverageStart <= garden.length - 1) {
    let chosenFountain = missingCoverageStart;
    const [_candidateStartIdx, candidateEndIdx] = getRange(
      garden,
      chosenFountain
    );

    for (let i = missingCoverageStart; i < garden.length; i++) {
      const [startIdx, endIdx] = getRange(garden, i);

      if (startIdx === 0 && endIdx === garden.length - 1) {
        return 1;
      }

      /* 
      Find the fountain that is furthest from the start of the missing coverage
      that still reaches the start of missing coverage, since the further away
      it is the closer it will reach to the end of the missing coverage.
      */
      if (startIdx <= missingCoverageStart && endIdx > candidateEndIdx) {
        chosenFountain = i;
      }
    }
    count++;
    const [_newStartIdx, newEndIdx] = getRange(garden, chosenFountain);

    missingCoverageStart = newEndIdx + 1;
  }
  return count;
}

module.exports = { fewestFountains };
