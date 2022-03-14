/* 
  Greatest Common Factor / Denominator

  Input: two integers
  Output: greatest common factor (the largest integer that can be evenly divided into both given ints)

  Greek mathematician Euclid demonstrated these facts:

  1) gcf(a,b) == a , if a == b;

  2) gcf(a,b) == gcf(a-b,b) , if a>b;

  3) gcf(a,b) == gcf(a,b-a) , if b>a.

  Second: rework facts #2 and #3 to reduce stack consumption and expand rGCF ’s reach. You should be able to compute rGCF(123456,987654)
*/

const a1 = 5;
const b1 = 5;
const expected1 = 5;

const a2 = 6;
const b2 = 20;
const expected2 = 2;

const a3 = 54;
const b3 = 12;
const expected3 = 6;

const a4 = 12;
const b4 = 54;
const expected4 = 6;

const a5 = 65;
const b5 = 25;
const expected5 = 5;

const a6 = 123456;
const b6 = 987654;
const expected6 = 6;

/**
 * Returns the greatest common factor of the two given numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number} The greatest common factor.
 */
function rGCF(a, b) {}

/*****************************************************************************/

// Maximum call stack exceeded for large inputs.
function rGCF(a, b) {
  if (a === b) {
    return a;
  }

  if (a > b) {
    return rGCF(a - b, b);
  }

  if (a < b) {
    return rGCF(a, b - a);
  }
}

function rGCF2(a, b) {
  if (!b) {
    return a;
  }

  return rGCF2(b, a % b);
}

module.exports = { /* rGCF, */ rGCF2 };
