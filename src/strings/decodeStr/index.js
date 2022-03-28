/* 
  String Decode  
*/

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

const str2 = "a3b2c12d10";
const expected2 = "aaabbccccccccccccdddddddddd";

/**
 * Decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @returns {string} The given str decoded / expanded.
 */
function decodeStr(str) {}

/*****************************************************************************/

/**
 * Decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * - Time: O(n * m) linear. n = str.length, m = max char.repeat amount since
 *    repeating a char x times is x repetitions (iterations).
 *    The nested while loop can be ignored because it increments i as well,
 *    so every char is only visited once.
 * - Space: Worst case is max string size is reached because we don't know how
 *    large the given ints will be.
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @returns {string} The given str decoded / expanded.
 */
function decodeStr(str = "") {
  let decoded = "";
  let i = 0;

  while (i < str.length) {
    // Retrieve letter at current index then increment the idx (post increment)
    // to get to the num that comes after the char.
    let char = str[i++];
    // the num is a string so multiple digits need to be concatenated before
    // converted to a number. '1' + '1' => '11'. 1 + 1 => 2
    let numStr = "";
    /* 
    parseInt returns NaN if it fails to parse. NaN is a weird special value
    that requires using isNaN to check b/c NaN === NaN => false.
    */
    let isNumber = isNaN(parseInt(str[i])) === false;

    /* 
    Iterate over all the nums that come after this string until the next
    non-number.
    */
    while (i < str.length && isNumber) {
      // concatenate the string-num digit then increment.
      numStr += str[i++];
      isNumber = isNaN(parseInt(str[i])) === false;
    }

    // .repeat will automatically convert numStr to a number if it can.
    decoded += char.repeat(numStr);
  }
  return decoded;
}

function decodeStr2(str = "") {
  let decoded = "";
  let numStr = "";
  let letter = str[0];

  for (let i = 1; i < str.length; i++) {
    const num = parseInt(str[i]);

    // letter found, means we have passed digits.
    if (isNaN(num)) {
      // .repeat parses numStr to int for us.
      decoded += letter.repeat(numStr);
      // reset for next letter and it's following digits
      letter = str[i];
      numStr = "";
    } else {
      numStr += str[i];
    }
  }
  // Since we end with a number concat above doesn't happen for the last one.
  return decoded + letter.repeat(numStr);
}

module.exports = { decodeStr, decodeStr2 };
