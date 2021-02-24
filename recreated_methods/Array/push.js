/* 
  Recreate the .push method without using .push
  
  Given an array and a new item, add the new item to the back of the array
  return the new length of the array

  What index are you adding a new item at?

  After finishing, finish the basic algos from yesterday that you did not finish.
*/

const arr1 = ["a", "b", "c"];
const newItem1 = "d";
const expected1 = 4;
// what arr1 should be after running push function
const expectedArr1 = ["a", "b", "c", "d"];

const arr2 = [];
const newItem2 = "a";
const expected2 = 1;
const expectedArr2 = ["a"];

/**
 * Adds the a given item to the back of the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr
 * @param {any} newItem
 * @return {number} The new length of the given array.
 */
function push(arr, newItem) {
  // code here
}

// Tests
const result1 = push(arr1, newItem1);
console.log(result1, "should be", expected1);
console.log(arr1, "should be", expectedArr1);

const result2 = push(arr2, newItem2);
console.log(result2, "should be", expected2);
console.log(arr2, "should be", expectedArr2);

module.exports = { push };

/*****************************************************************************/

/**
 * Adds the a given item to the back of given array.
 * - Time: O(1) constant. It takes the same amount of time to add to the back
 *    of the arr regardless of how long the arr is since there is no loop.
 * - Space: O(1) constant. This algo doesn't need to create an array or object
 *    that takes up extra space / memory as the size of input grows.
 * @param {Array<any>} arr
 * @param {any} newItem
 * @return {number} The new length of the given array.
 */
function push(arr, newItem) {
  arr[arr.length] = newItem;
  return arr.length;
}
