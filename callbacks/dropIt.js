// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it

/*
  Input: arr, callback
  Output: arr (with elements removed)

  Remove every element in the array, starting from idx 0,
  until the callback function returns true when passed the
  iterated element.

  Return an empty array if the callback never returns true
*/

const nums = [1, 4, 3, 6, 9, 15];

const callback1 = (elem) => {
  return elem > 5;
};
const expected1 = [6, 9, 15];

const callback2 = (elem) => {
  return elem > 2;
};
const expected2 = [4, 3, 6, 9, 15];

const callback3 = (elem) => false;
const expected3 = [];

/**
 * Removes every element in the array, starting from idx 0 until the callback
 * function returns true when passed the iterated element.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr
 * @param {Function} callback
 * @return {Array<any>} The given array with only the remaining items.
 */
function dropIt(arr, callback) {}

module.exports = { dropIt: dropIt };

/*****************************************************************************/

/**
 * - Time: O(n) linear. n = arr.length.
 * - Space: O(n) linear, due to .splice creating a new array of n length at
 *    most.
 */
function dropIt(arr, callback) {
  let delCount = 0;

  for (const elem of arr) {
    const callbackResult = callback(elem);

    if (callbackResult !== true) {
      delCount++;
    } else {
      break;
    }
  }

  arr.splice(0, delCount);
  return arr;
}

function dropItFunctional(arr, callback) {
  const delCount = arr.findIndex((elem) => callback(elem) === true);
  arr.splice(0, delCount === -1 ? arr.length : delCount);
  return arr;
}
