/* 
  Given an array, remove and
  return the value at the beginning of the array and then shift the remaining items down to fill the empty space.

  Do this without using any built-in array methods except pop().
*/

const arr1 = [1, 2, 3];
const expected1 = 1;
// after running function arr1 should now be:
const expectedArr1 = [2, 3];

const arr2 = ["a", "b", "c", "d"];
const expected2 = "a";
// after running function arr2 should now be:
const expectedArr2 = ["b", "c", "d"];

const arr3 = [];
const expected3 = undefined;
const expectedArr3 = [];

/**
 * Shifts every item of the array to the left by 1 so that the first item is
 * removed and returned.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items An array of any kind of items.
 * @returns {any} The removed value previously at idx 0.
 */
function shift(items) {
  // code here
}

// Tests
const result1 = shift(arr1);
console.log(result1, "should be", expected1);
console.log(arr1, "should be", expectedArr1);

const result2 = shift(arr2);
console.log(result2, "should be", expected2);
console.log(arr2, "should be", expectedArr2);

const result3 = shift(arr3);
console.log(result3, "should be", expected3);
console.log(arr3, "should be", expectedArr3);

/*****************************************************************************/

/**
 * Shifts every item of the array to the left by 1 so that the first item is
 * removed and returned.
 * - Time: O(n-1) -> O(n) linear. n = arr.length minus 1 because we start
 *    iterating at 1. Simplified to O(n).
 * - Space: O(1) constant, the algo doesn't create any new arrays or objects
 *    that grow in size as the input array grows.
 * @param {Array<any>} items
 * @returns {any} The removed value previously at idx 0.
 */
function shift(items = []) {
  const firstItem = items[0];

  if (items.length > 0) {
    for (let i = 1; i < items.length; i++) {
      items[i - 1] = items[i];
    }

    items.length = items.length - 1; // cut off 'empty' value at the end
  }

  return firstItem;
}

module.exports = { shift };
