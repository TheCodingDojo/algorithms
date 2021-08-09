// Given to an alumni in 2021 by DocuSign.

/* 
There is a one-dimensional garden on the x-axis. The garden starts at
the point 0 and ends at the point n. (i.e The length of the garden is n).

There are n + 1 taps located at points [0, 1, ..., n] in the garden.

Given an integer array ranges of length n + 1 where ranges[i] (0-indexed)
means the i-th tap can water the area 
[i - ranges[i], i + ranges[i]] if it was open.

Return the minimum number of taps that should be open to water the whole garden, If the garden cannot be watered return -1.
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

const garden9 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const expected9 = 5;

const garden10 = [3, 1, 2, 1, 0, 0, 0, 1, 1, 2, 1, 3];
const expected10 = -1;

printRanges(garden3);

/**
 * Finds the fewest taps that can cover the whole 1d garden.
 * @param {number[]} garden Non-empty and 1d. Numbers are > 0 and represent a
 *    tap's range: [i - ranges[i], i + ranges[i]].
 * @returns {number} The fewest taps for full garden coverage.
 */
function minTaps(garden) {}

/**
 * Prints the range of each tap.
 * @param {number[]} garden
 * @param {boolean} startAsIdx
 */
function printRanges(garden, startAsIdx = false) {
  console.log("\n\n");
  console.log(`[${garden.map((_, i) => i % 10).join(" ")}]`, "| indexes.");

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

      j !== garden.length - 1 && (str += " ");
    }
    console.log(
      `[${str}] | startIdx: ${start} | endIdx: ${end} | i: ${i} | garden[i]: ${garden[i]}`
    );
  }
}

/**
 * @param {number[]} garden
 * @param {number} i
 * @returns {Array<number, number>} The ith tap's inclusive range.
 */
function getRange(garden, i) {
  return [
    Math.max(i - garden[i], 0),
    Math.min(i + garden[i], garden.length - 1),
  ];
}

/*****************************************************************************/

/**
 * Finds the fewest taps that can water the whole 1d garden with water.
 * Time: O(n^2) quadratic. This does far fewer iterations than a typical
 *    nested j loop that starts at i + 1 because at worst (all 1s) our outer
 *    loop increments by 3, but that is a constant so it is ignored.
 * @param {number[]} garden Non-empty and 1d. Numbers are > 0 and represent a
 *    fountain's range: max(i – garden[i], 0) to min(i + garden[i], N - 1).
 * @returns {number} The fewest fountains for full garden coverage.
 */
function minTaps(garden) {
  let missingCoverageStart = 0;
  let count = 0;

  while (missingCoverageStart < garden.length) {
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

/**
 * - Time: O(2n) -> O(n) linear.
 * - Space: O(n) linear.
 */
function minTaps(ranges) {
  const calRanges = new Array(ranges.length).fill(0);

  for (let i = 0; i < ranges.length; ++i) {
    const [rangeStartIdx, rangeEndIdx] = getRange(ranges, i);

    if (rangeStartIdx === 0 && rangeEndIdx === ranges.length) {
      return 1;
    }

    if (rangeEndIdx > calRanges[rangeStartIdx]) {
      // This tap reaches the same start but reaches further to the right.
      calRanges[rangeStartIdx] = rangeEndIdx;
    }
  }

  let count = 1;
  let selectedRangeEndIdx = calRanges[0];
  let nextRangeEndIdx = calRanges[0];

  for (let rangeStartIdx = 1; rangeStartIdx < ranges.length; rangeStartIdx++) {
    if (rangeStartIdx > nextRangeEndIdx) {
      return -1;
    }

    if (rangeStartIdx > selectedRangeEndIdx) {
      selectedRangeEndIdx = nextRangeEndIdx;

      if (selectedRangeEndIdx === calRanges.length - 1) {
        return count;
      }

      ++count;
    }

    const currRangeEndIdx = calRanges[rangeStartIdx];

    if (currRangeEndIdx > nextRangeEndIdx) {
      nextRangeEndIdx = currRangeEndIdx;
    }
  }
  return count;
}

module.exports = { minTaps };
