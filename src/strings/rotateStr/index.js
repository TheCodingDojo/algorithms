/* 
  String: Rotate String

  Create a standalone function that accepts a string and an integer,
  and rotates the characters in the string to the right by that given
  integer amount.
*/

const str = "Hello World";

const rotateAmnt1 = 0;
const expected1 = "Hello World";

const rotateAmnt2 = 1;
const expected2 = "dHello Worl";

const rotateAmnt3 = 2;
const expected3 = "ldHello Wor";

const rotateAmnt4 = 4;
const expected4 = "orldHello W";

const rotateAmnt5 = 13;
const expected5 = "ldHello Wor";
/* 
Explanation: this is 2 more than the length so it ends up being the same
as rotating it 2 characters because after rotating every letter it gets back
to the original position.
*/

/**
 * Rotates a given string's characters to the right by the given amount,
 * wrapping characters to the beginning.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @param {number} amnt The amount of characters in the given str to rotate to the
 *    right.
 * @returns {string} The string rotated by the given amount.
 */
function rotateStr(str, amnt) {}

/*****************************************************************************/

/**
 * - Time: O(n) linear. Every character is visited once.
 * - Space: O(n) linear. Every character is stored again in the new str.
 */
function rotateStr(str = "", amnt = 0) {
  /* 
  We need to use the modulo operator only when the amnt > str.length, to get
  the remainder, but when amnt < str.length, rotateAmnt will be the same as
  amnt so we don't have to worry about that.

  The reason we only care about the remainder when amnt > str.length is because
  if amnt === str.length, the string is rotated one full cycle back to it's
  original position. So we can ignore all full cycles and just focus on the
  remainder that needs to be rotated.
  */
  const rotateAmnt = amnt % str.length;

  if (!rotateAmnt || rotateAmnt <= 0) {
    return str;
  }

  let charsToRotate = "";
  let newStr = "";

  for (let i = str.length - rotateAmnt; i < str.length; i++) {
    charsToRotate += str[i];
  }

  for (let i = 0; i < str.length - rotateAmnt; i++) {
    newStr += str[i];
  }
  return charsToRotate + newStr;
}

/**
 * - Time: O(n) linear. Every character is visited once.
 * - Space: O(n) linear. Every character is stored again in the new str.
 */
function rotateStr2(str, amnt) {
  const rotateAmnt = amnt % str.length;
  return (
    str.slice(str.length - rotateAmnt) + str.slice(0, str.length - rotateAmnt)
  );
}

module.exports = { rotateStr, rotateStr2 };
