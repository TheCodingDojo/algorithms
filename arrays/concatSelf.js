/* 
  From zoom interview with student in year 2020

  Given one array,
  return a new array that contains all of the original items duplicated twice
*/

const arr1 = ["a", "b", "c"];
const expected1 = ["a", "b", "c", "a", "b", "c"];

const arr2 = ["a"];
const expected2 = ["a", "a"];

const arr3 = [];
const expected3 = [];

/**
 * Creates a new array that is a concatenation of the given array with itself.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr
 * @return {Array<any>} The resulting concatenation of the given arr with
 *    itself.
 */
function concatArrWithSelf(arr) {
  // code here
}

module.exports = { concatArrWithSelf };

/*****************************************************************************/

/**
 * Creates a new array that is a concatenation of the given array with itself.
 * - Time: O(2n) -> simplified to O(n) linear. arr is looped over twice to copy
 *    the items twice.
 * - Space: O(2n) -> O(n) linear. The new array created has arr.length * 2.
 * @param {Array<any>} arr
 * @return {Array<any>} The resulting concatenation of the given arr with
 *    itself.
 */
function concatArrWithSelfManually(arr) {
  const concatArr = [];

  for (let i = 0; i < 2; i++) {
    for (const elem of arr) {
      concatArr.push(elem);
    }
  }
  return concatArr;
}

function concatArrWithSelf(arr) {
  return arr.concat(arr);
}

function spreadArrWithSelf(arr) {
  return [...arr, ...arr];
}

// causes INCORRECT order: ["a", "a", "b", "b", "c", "c"]
function concatArrWithSelfManually2(arr) {
  const concatArr = [];

  for (const elem of arr) {
    concatArr.push(elem, elem);
  }
  return concatArr;
}

module.exports = {
  concatArrWithSelf,
  spreadArrWithSelf,
  concatArrWithSelfManually,
  concatArrWithSelfManually2,
};
