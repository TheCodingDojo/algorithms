/* 
Given an array and an int which represents the position starting from the back,
return the nth-to-last element.

JS has introduced the .at method for this purpose, but solve this algo w/o it.
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

const arr5 = [];
const idx5 = 2;
const expected5 = null;

/**
 * Retrieves the nth to last indexed item from the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items An array of any kind of items.
 * @param {number} nthToLast
 * @returns {any} The item at the nthToLast index or null.
 */
function nthLast(items, nthToLast) {
  // code here
}

// Tests
const result1 = nthLast(arr1, idx1);
console.log(result1, "should be", expected1);

const result2 = nthLast(arr2, idx2);
console.log(result2, "should be", expected2);

const result3 = nthLast(arr3, idx3);
console.log(result3, "should be", expected3);

const result4 = nthLast(arr4, idx4);
console.log(result4, "should be", expected4);

const result5 = nthLast(arr5, idx5);
console.log(result5, "should be", expected5);

/*****************************************************************************/

/**
 * Retrieves the nth to last item from the given array.
 * - Time: O(1) constant. This algo doesn't need to loop so the time it takes
 *    is constant whether or not the array is large or small.
 * - Space: O(1) constant. This algo doesn't need to create a new array or
 *    object that grows in size as the input array length increases.
 * @param {Array<any>} items An array of any kind of items.
 * @param {number} nthToLast
 * @returns {any} The item at the nthToLast index or null.
 */
function nthLast(items = [], nthToLast = 1) {
  let idx = items.length - nthToLast;

  if (idx >= 0 && idx < items.length) {
    return items[idx];
  } else {
    return null;
  }
}

module.exports = { nthLast };
