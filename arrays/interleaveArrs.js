/* 
  Given two arrays, interleave them into one new array.
*/

const arr1A = [1, 2, 3];
const arr1B = ["a", "b", "c"];
const expected = [1, "a", 2, "b", 3, "c"];

function interleaveArrs(arr1, arr2) {
  const interleavedItems = [];

  for (let i = 0; i < arr1.length; i++) {
    interleavedItems.push(arr1[i], arr2[i]);
  }

  return interleavedItems;
}
