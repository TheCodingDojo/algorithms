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
const expected3 = 2; // garden[3] and garden[8]

const garden4 = [2, 1, 1, 2, 2, 1, 1, 1, 1, 5];
const expected4 = 3; // garden[0] and garden[3 || 4] and garden[9]

/**
 * Finds the fewest fountains that can cover the whole 1d garden.
 * @param {number[]} garden Non-empty and 1d. Numbers are > 0 and represent a
 *    fountain's range: max(i – garden[i], 0) to min(i + garden[i], N - 1).
 * @returns {number} The fewest fountains for full garden coverage.
 */
function fewestFountains(garden) {
  if (!garden.length) {
    return 0;
  }

  if (garden.length === 1) {
    return 1;
  }

  const missingCoverage = {
    start: 0,
    end: garden.length - 1,
  };

  let count = 0;

  while (missingCoverage.start < missingCoverage.end) {
    let chosenFountain = missingCoverage.start;

    for (let i = missingCoverage.start; i < garden.length; i++) {
      const [_candidateStart, candidateEnd] = getFountainRange(
        garden,
        chosenFountain
      );
      const [start, end] = getFountainRange(garden, i);

      /* 
      Find the fountain that is furthest from the start of the missing coverage
      that still reaches the start of missing coverage, since the further away
      it is the closer it will reach to the end of the missing coverage.
      */
      if (start <= missingCoverage.start && end > candidateEnd) {
        chosenFountain = i;
      }
    }
    count++;
    const [_candidateStart, candidateEnd] = getFountainRange(
      garden,
      chosenFountain
    );

    missingCoverage.start = candidateEnd + 1;
  }
  return count;
}

function getFountainRange(garden, i) {
  return [
    Math.max(i - garden[i], 0),
    Math.min(i + garden[i], garden.length - 1),
  ];
}

console.log(fewestFountains(garden1), expected1);
console.log(fewestFountains(garden2), expected2);
console.log(fewestFountains(garden3), expected3);
console.log(fewestFountains(garden4), expected4);
