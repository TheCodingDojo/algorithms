/* 
Reverse an array using Functional Programming (FP) principles with recursion:
  - Do not mutate the given array, return a new array.
  - Do not mutate params

  Bonus: avoid using an idx param.

  Note: for large arrays it is much slower than reversing in place.
*/

/**
 * Recursively reverses an arr.
 * @param {Array<any>} arr
 * @returns {Array<any>}
 */
function reverse1(arr = [], leftIdx = 0) {
  const arrCopy = [...arr];
  const rightIdx = arrCopy.length - 1 - leftIdx;

  if (rightIdx <= leftIdx) {
    return arrCopy;
  }

  // This array is being mutated but it is not causing a side effect, it isn't
  // changing any array outside the function since it was copied.
  [arrCopy[leftIdx], arrCopy[rightIdx]] = [arrCopy[rightIdx], arrCopy[leftIdx]];
  return reverse1(arrCopy, leftIdx + 1);
}

/**
 * Recursively reverses an array without any side effects.
 * @param {Array<any>} arr
 * @returns {Array<any>}
 */
function reverse2(arr = []) {
  const firstItem = arr[0];
  // slice returns a new array.
  const remainingItems = arr.slice(1);

  // Empty array given, could also use arr.length === 0 here which is typically
  // preferred, but to compare this more easily to the shorthand version below
  // the same logic is used.
  if (firstItem === undefined) {
    return [];
  }

  // Put the first item at the end and the remaining items at the beginning,
  // recursively.
  return [...reverse2(remainingItems), firstItem];
}

// Below is the shorthand version of above.

/**
 * Creates a new array that is reversed without mutations / side effects.
 * @param {[firstItem: any, remainingItems: Array<any>]} arr The passed in
 *    has the firstItem destructured and the remaining items collected into
 *    an array.
 * @returns {Array<any>}
 */
const reverse = ([firstItem, ...remainingItems]) =>
  // Due to destructuring, we don't have access to the array length, hence the
  // undefined check.
  firstItem === undefined ? [] : [...reverse(remainingItems), firstItem];

/* 
reverse([1, 2, 3, 4, 5])
[reverse([1, 2, 3, 4]), 5]
[reverse([1, 2, 3]), 5, 4]
[reverse([1, 2]), 5, 4, 3]
[reverse([1]), 5, 4, 3, 2]
[reverse([]), 5, 4, 3, 2, 1]
[...[], 5, 4, 3, 2, 1]
[5, 4, 3, 2, 1]
*/
