/* 
  Create the function isRotation(str1,str2) that
  returns whether the second string is a rotation of the first.
*/

const strA1 = "ABCD";
const strB1 = "CDAB";
// Explanation: if you start from A in the 2nd string, the letters are in the same order, just rotated
const expected1 = true;

const strA2 = "ABCD";
const strB2 = "CDBA";
// Explanation: all same letters in 2nd string, but out of order
const expected2 = false;

const strA3 = "ABCD";
const strB3 = "BCDAB";
// Explanation: same letters in correct order but there is an extra letter.
const expected3 = false;

/**
 * Determines whether the second string is a rotated version of the first.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether the second string is a rotated version of the 1st.
 */
function isRotation(s1, s2) {}

/*****************************************************************************/

/**
 * Solution approach:
 *    All rotated versions of s2 are included in s1 + s1.
 *    s1: "ABCD".
 *    s1 + s1: "ABCDABCD".
 *
 *    s2 Rotation variations:
 *    s2: "CDAB".
 *    s2: "DABC".
 *    s2: "BCDA".
 * - Time: O(4n) -> O(n) linear. Concatenating s1 + s1 requires the characters
 *    of s1 to be copied into a new string twice (2n). The .includes is then
 *    looping over the string that is twice the length of s1 (2n) again. Add
 *    up both 2n to get 4n.
 * - Space: O(2n) -> O(n) linear, where n is s1.length, 2n from s1 + s1.
 */
function isRotation(s1 = "", s2 = "") {
  if (s1.length !== s2.length || s1 === s2) {
    return false;
  }
  return (s1 + s1).includes(s2);
}

module.exports = { isRotation };
