// Given to an alumni in 2021.

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

/**
 * Finds the fewest fountains that can cover the whole 1d garden.
 * @param {number[]} garden Non-empty and 1d. Numbers are > 0 and represent a
 *    fountain's range: max(i – garden[i], 0) to min(i + garden[i], N - 1).
 * @returns {number} The fewest fountains for full garden coverage.
 */
function fewestFountains(garden) {}

/*****************************************************************************/

/**
 * Finds the fewest fountains that can cover the whole 1d garden.
 * @param {number[]} garden Non-empty and 1d. Numbers are > 0 and represent a
 *    fountain's range: max(i – garden[i], 0) to min(i + garden[i], N - 1).
 * @returns {number} The fewest fountains for full garden coverage.
 */
function fewestFountains(garden) {
  let missingCoverageStart = 0;
  let missingCoverageEnd = garden.length - 1;
  let count = 0;

  while (missingCoverageStart <= missingCoverageEnd) {
    let chosenFountain = missingCoverageStart;
    const [_candidateStart, candidateEnd] = getFountainRange(
      garden,
      chosenFountain
    );

    for (let i = missingCoverageStart; i < garden.length; i++) {
      const [start, end] = getFountainRange(garden, i);

      if (start === 0 && end === garden.length - 1) {
        return 1;
      }

      /* 
      Find the fountain that is furthest from the start of the missing coverage
      that still reaches the start of missing coverage, since the further away
      it is the closer it will reach to the end of the missing coverage.
      */
      if (start <= missingCoverageStart && end > candidateEnd) {
        chosenFountain = i;
      }
    }
    count++;
    const [_newStart, newEnd] = getFountainRange(garden, chosenFountain);

    missingCoverageStart = newEnd + 1;
  }
  return count;
}

function getFountainRange(garden, i) {
  return [
    Math.max(i - garden[i], 0),
    Math.min(i + garden[i], garden.length - 1),
  ];
}

module.exports = { fewestFountains };
