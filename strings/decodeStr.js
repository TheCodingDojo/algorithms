/* 
  String Decode  
*/

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

/**
 * Decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @return {string} The given str decoded / expanded.
 */
function decodeStr(str) {}

module.exports = { decodeStr };

/*****************************************************************************/

/**
 * - Time: O(n * m), where n = str.length and m = largest (worst case) int in the
 *    string which will nested loop from .repeat.
 * - Space: O(n * m).
 */
function decodeStr(str) {
  let decoded = "";

  for (let i = 0; i < str.length; i++) {
    let n = parseInt(str[i]);

    if (n) {
      decoded += str[i - 1].repeat(n);
    }
  }
  return decoded;
}
