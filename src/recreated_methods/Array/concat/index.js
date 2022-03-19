/* 
  Array: Concat

  .push allowed: arrName.push(newItem)

  Replicate JavaScript’s concat() which combines two arrays into one NEW array

  Input: two arrays
  Output: one NEW array with the items of both in the original order
*/

const arrA1 = ["a", "b"];
const arrB1 = [1, 2, 3];
const expected1 = ["a", "b", 1, 2, 3];

const arrA2 = [1, 2, 3];
const arrB2 = ["a", "b"];
const expected2 = [1, 2, 3, "a", "b"];

/**
 * Concatenates the given arrays together into order that they are passed in.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items1
 * @param {Array<any>} items2
 * @returns {Array<any>} The new arr that is a concatenation of the given arrays.
 */
function concat(items1, items2) {
  // code here
}

// Tests
const result1 = concat(arrA1, arrB1);
console.log(result1, "should be", expected1);

const result2 = concat(arrA2, arrB2);
console.log(result2, "should be", expected2);

/*****************************************************************************/

/**
 * Concatenates the given arrays together into order that they are passed in.
 * - Time: O(n + m) -> O(n) linear. n = arr1.length, m = arr2.length. They are
 *    added instead of multiplied because the loops are not nested. This is
 *    simplified to O(n) because O(n + m) is still linear growth. The time it
 *    takes grows directly in proportion to the lengths. Whatever happens
 *    inside of a loop is multiplied by the amount of iterations.
 *    E.g., .push here, but .push does not loop, internally, so the size of
 *    the arrays have no impact on .push, so the .push is considered
 *    "constant" and constant's are ignored in Big O Notation.
 * - Space: O(n + m) -> O(n) linear. This algo takes up more space directly in
 *    proportion to the lengths of the inputs since the two arrays are being
 *    combined.
 * @param {Array<any>} arr1
 * @param {Array<any>} arr2
 * @returns {Array<any>} The new arr that is a concatenation of the given arrays.
 */
function concat(arr1 = [], arr2 = []) {
  const newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i]);
  }

  for (let i = 0; i < arr2.length; i++) {
    newArr.push(arr2[i]);
  }

  return newArr;
}

/**
 * Spreads the two arrays together into a new array.
 * @param {Array<any>} arr1
 * @param {Array<any>} arr2
 * @returns {Array<any>}
 */
const concatSpread = (arr1 = [], arr2 = []) => [...arr1, ...arr2];

/**
 * @param {...any[]} arrays An array of all the arrays passed in to the
 *    function. The `...` spread operator collects the passed in arguments
 *    into an array.
 * @returns {Array<any>}
 */
function concatMany(...arrays) {
  const newArr = [];

  for (const arr of arrays) {
    // Here, the spread operator spreads apart the array and passes in each
    // item like so: newArr.push(arr[0], arr[1], arr[2]...)
    newArr.push(...arr);
  }

  return newArr;
}

/**
 * Since the `...` spread operator is used to collect all the passed-in arrays
 * into an array, it is now a 2d array which we can flatten with `.flat` which
 * will return a new 1d array when used on a 2d array.
 * @param {...any[]} arrays
 * @returns {Array<any>}
 */
const concatManyWithFlat = (...arrays) => arrays.flat();

module.exports = { concat, concatSpread, concatMany, concatManyWithFlat };
