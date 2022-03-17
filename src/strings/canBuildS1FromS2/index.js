/* 
Given two strings,
return true if the first string can be built from the letters in the 2nd string
Ignore case

.indexOf will only tell you if the letter is found one time
*/

const strA1 = "Hello World";
const strB1 = "lloeh wordl";
const expected1 = true;

const strA2 = "Hey";
const strB2 = "hello";
const expected2 = false;
// Explanation: second string is missing a "y"

const strA3 = "hello";
const strB3 = "helo";
const expected3 = false;
// Explanation: second string doesn't have enough "l" letters

const strA4 = "hello";
const strB4 = "lllheo";
const expected4 = true;

const strA5 = "hello";
const strB5 = "heloxyz";
const expected5 = false;
// Explanation: strB5 does not have enough "l" chars.

/**
 * Determines whether s1 can be built using the chars of s2.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */
function canBuildS1FromS2(s1, s2) {}

/*****************************************************************************/

/**
 * Determines whether neededChars can be built using the chars of availableChars.
 * - Time: O(n + m) -> O(n) linear, n = neededChars length,
 *    m = availableChars length.
 * - Space: O(m) -> O(n) since it's still linear just call it n for simplicity.
 * @param {string} neededChars
 * @param {string} availableChars
 * @returns {boolean}
 */
function canBuildS1FromS2(neededChars, availableChars) {
  if (availableChars.length < neededChars.length) {
    return false;
  }

  const availableCharsFreq = {};

  for (const availableChar of availableChars) {
    const availableCharLower = availableChar.toLowerCase();

    if (availableCharsFreq.hasOwnProperty(availableCharLower)) {
      availableCharsFreq[availableCharLower]++;
    } else {
      availableCharsFreq[availableCharLower] = 1;
    }
  }

  for (const neededChar of neededChars) {
    const neededCharLower = neededChar.toLowerCase();

    if (
      availableCharsFreq.hasOwnProperty(neededCharLower) === false ||
      availableCharsFreq[neededCharLower] === 0
    ) {
      return false;
    } else {
      availableCharsFreq[neededCharLower]--;
    }
  }
  return true;
}

module.exports = { canBuildS1FromS2 };
