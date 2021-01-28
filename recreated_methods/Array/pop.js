/* 
  Recreate the pop method without using .pop()

  Remove and return the last item from a given array

  After removing an item from an array, what else changes?
*/

const arr1 = [1, 2, 3];
const expected1 = 3;
// what arr1 should be after running pop function
const expectedArr1 = [1, 2];

const arr2 = ["hello"];
const expected2 = "hello";
const expectedArr2 = []; // the only item was removed

const arr3 = ["hello", "world"];
const expected2 = "world";
const expectedArr3 = ["hello"]; // the last item was removed

const arr3 = [];
const expected3 = undefined;

/**
 * Removes the last item from the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr
 * @return {any} The removed last item or undefined if the given array was
 *    was empty.
 */
function pop(arr) {
  // code here
}

module.exports = { pop };

/*****************************************************************************/

/**
 * Removes the last item from the given array.
 * - Time: O(1) constant. There is no loop that is dependent on the size of
 *    the given arr.
 * - Space: O(1) constant. This algo doesn't have to create an array or object
 *    that grows in size as the size of the input array grows.
 * @param {Array<any>} arr
 * @return {any} The removed last item or undefined if the given array was
 *    was empty.
 */
function pop(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  const popped = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return popped;
}
