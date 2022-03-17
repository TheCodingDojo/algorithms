/* 
  Given two arrays, interleave them into one new array.

  The arrays may be different lengths. The extra items should be added to the
  back of the new array.
*/

const arrA1 = [1, 2, 3];
const arrB1 = ["a", "b", "c"];
const expected1 = [1, "a", 2, "b", 3, "c"];

const arrA2 = [1, 3];
const arrB2 = [2, 4, 6, 8];
const expected2 = [1, 2, 3, 4, 6, 8];

const arrA3 = [1, 3, 5, 7];
const arrB3 = [2, 4];
const expected3 = [1, 2, 3, 4, 5, 7];

const arrA4 = [];
const arrB4 = [42, 0, 6];
const expected4 = [42, 0, 6];

/**
 * Interleaves two arrays into a new array. Interleaving means alternating
 * the items starting from the first array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr1
 * @param {Array<any>} arr2
 * @returns {Array<any>} A new array of interleaved items.
 */
function interleaveArrays(arr1, arr2) {}

/*****************************************************************************/

/**
 * Interleaves two arrays into a new array. Interleaving means alternating
 * the items starting from the first array.
 * - Time: O(max(n, m)) linear. n = arr1.length, m = arr2.length.
 * - Space: O(n + m) linear. Each item from both arrays is included in new arr.
 * @param {Array<any>} arr1
 * @param {Array<any>} arr2
 * @returns {Array<any>} A new array of interleaved items.
 */
function interleaveArrays(arr1, arr2) {
  const interleavedItems = [];
  let largerArr = arr1;

  if (arr2.length > arr1.length) {
    largerArr = arr2;
  }

  for (let i = 0; i < largerArr.length; i++) {
    if (i < arr1.length && i < arr2.length) {
      interleavedItems.push(arr1[i], arr2[i]);
    } else {
      interleavedItems.push(largerArr[i]);
    }
  }

  return interleavedItems;
}

function interleaveArrays2(arr1, arr2) {
  const interleavedItems = [];
  let largerArr = arr1;

  if (arr2.length > arr1.length) {
    largerArr = arr2;
  }

  // var is used instead of let here so i will still exist after the loop.
  for (var i = 0; i < arr1.length && i < arr2.length; i++) {
    interleavedItems.push(arr1[i], arr2[i]);
  }

  for (let j = i; j < largerArr.length; j++) {
    interleavedItems.push(largerArr[j]);
  }

  return interleavedItems;
}

function interleaveArrays3(arr1, arr2) {
  const interleavedItems = [];
  // condition ? returned-if-true : returned-if-false
  let largerArr = arr1.length > arr2.length ? arr1 : arr2;

  // var is used instead of let here so i will still exist after the loop.
  for (var i = 0; i < arr1.length && i < arr2.length; i++) {
    interleavedItems.push(arr1[i], arr2[i]);
  }

  // concat the remaining items from the larger array.
  return interleavedItems.concat(largerArr.slice(i));
}

module.exports = { interleaveArrays, interleaveArrays2, interleaveArrays3 };
