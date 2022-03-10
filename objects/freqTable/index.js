/* 
  Given an array of strings
  return a sum to represent how many times each array item is found (a frequency table)

  Useful methods:
    Object.hasOwnProperty("keyName")
      - returns true or false if the object has the key or not

    Python: key in dict
*/

const arr1 = ["a", "a", "a"];
const expected1 = {
  a: 3,
};

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const expected2 = {
  a: 2,
  b: 1,
  c: 3,
  B: 1,
  d: 1,
};

const arr3 = [];
const expected3 = {};

/**
 * Builds a frequency table based on the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} arr
 * @returns {Object<string, number>} A frequency table where the keys are items
 *    from the given arr and the values are the amnt of times that item occurs.
 */
function frequencyTableBuilder(arr) {}

module.exports = { frequencyTableBuilder, frequencyTableBuilder2 };

/*****************************************************************************/

/**
 * - Time: O(n) linear.
 * - Space: O(n) linear.
 */
function frequencyTableBuilder(arr) {
  const freqTable = {};

  for (let i = 0; i < arr.length; i++) {
    const str = arr[i];

    if (freqTable.hasOwnProperty(str) === false) {
      // first occurrence found
      freqTable[str] = 1;
    } else {
      freqTable[str]++;
    }
  }
  return freqTable;
}

function frequencyTableBuilder2(arr) {
  const freqTable = {};

  for (const str of arr) {
    if (freqTable.hasOwnProperty(str) === false) {
      // first occurrence found
      freqTable[str] = 1;
    } else {
      freqTable[str]++;
    }
  }

  return freqTable;
}
