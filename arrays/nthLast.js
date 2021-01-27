/* 
  Given an array and an int which represents the position starting from the back,
  return the nth-to-last element
*/

// Last element:
const arr1 = ["a", "b", "c", "d"];
const idx1 = 1;
const expected1 = "d";

// Second to last element:
const arr2 = ["a", "b", "c", "d"];
const idx2 = 2;
const expected2 = "c";

const arr3 = ["a", "b", "c", "d"];
const idx3 = 0;
const expected3 = null;

const arr4 = ["a", "b", "c", "d"];
const idx4 = -1;
const expected4 = null;

/**
 * Retrieves the nth to last index from the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr
 * @param {number} nthToLast
 * @return {any} The item at the nthToLast index or null.
 */
function nthLast(arr, nthToLast) {
  // code here
}

/*****************************************************************************/

/**
 * Retrieves the nth to last item from the given array.
 * - Time: O(1) constant. This algo doesn't need to loop so the time it takes
 *    is constant whether or not the array is large or small.
 * - Space: O(1) constant. This algo doesn't need to create a new array or
 *    object that grows in size as the input array length increases.
 * @param {Array<any>} arr
 * @param {number} nthToLast
 * @return {any} The item at the nthToLast index or null.
 */
function nthLast(arr, nthToLast) {
  let idx = arr.length - nthToLast;

  if (idx >= 0 && idx < arr.length) {
    return arr[idx];
  } else {
    return null;
  }
}

module.exports = { nthLast };
