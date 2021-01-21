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
 * Adds the a given item to the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr
 * @param {any} newItem
 * @return {number} The new length of the given array.
 */
function push(arr, newItem) {
  // code here
}

module.exports = { push };

/*****************************************************************************/

/**
 * Adds the a given item to the given array.
 * - Time: O(1) constant. It takes the same amount of time to add to the back
 *    of the arr regardless of how long the arr is.
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
