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
const expected3 = "world";
const expectedArr3 = ["hello"]; // the last item was removed

const arr4 = [];
const expected4 = undefined;
const expectedArr4 = [];

/**
 * Removes the last item from the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items An array of any kind of items.
 * @returns {any} The removed last item or undefined if the given array was
 *    was empty.
 */
function pop(items) {
  // code here
}

// Tests
const result1 = pop(arr1);
console.log(result1, "should be", expected1);
console.log(arr1, "should be", expectedArr1);

const result2 = pop(arr2);
console.log(result2, "should be", expected2);
console.log(arr2, "should be", expectedArr2);

const result3 = pop(arr3);
console.log(result3, "should be", expected3);
console.log(arr3, "should be", expectedArr3);

const result4 = pop(arr4);
console.log(result4, "should be", expected4);

/*****************************************************************************/

/**
 * Removes the last item from the given array.
 * - Time: O(1) constant. There is no loop that is dependent on the size of
 *    the given arr.
 * - Space: O(1) constant. This algo doesn't have to create an array or object
 *    that grows in size as the size of the input array grows.
 * @param {Array<any>} items An array of any kind of items.
 * @returns {any} The removed last item or undefined if the given array was
 *    was empty.
 */
function pop(items) {
  if (items.length === 0) {
    return undefined;
  }

  const popped = items[items.length - 1];
  items.length = items.length - 1;
  return popped;
}

module.exports = { pop };
