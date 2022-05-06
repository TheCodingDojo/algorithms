/* 
  Given an array of strings
  return the number of times each string occurs (a frequency / hash table)
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
function makeFrequencyTable(arr) {}

/*****************************************************************************/

/**
 * - Time: O(n) linear.
 * - Space: O(n) linear.
 * @param {Array<string>} arr
 * @returns {Object<string, number>}
 */
function makeFrequencyTable(arr = []) {
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

/**
 * - Time: O(n) linear.
 * - Space: O(n) linear.
 * @param {Array<string>} arr
 * @returns {Object<string, number>}
 */
function makeFrequencyTable2(arr = []) {
  const freqTable = {};

  for (const str of arr) {
    if (freqTable.hasOwnProperty(str) === false) {
      // first occurrence found
      freqTable[str] = 0;
    }
    freqTable[str]++;
  }

  return freqTable;
}

/**
 * - Time: O(n) linear.
 * - Space: O(n) linear.
 * @param {Array<string>} arr
 * @returns {Object<string, number>}
 */
const makeFrequencyTable3 = (arr = []) =>
  arr.reduce((freq, currStr) => {
    if (currStr in freq === false) {
      freq[currStr] = 0;
    }
    freq[currStr]++;
    return freq;
  }, {});

/**
 * Technically the `Map` object is better because the keys can be any data,
 * so it can count anything, rather than only strings or nums-as-strings.
 * - Time: O(n) linear.
 * - Space: O(n) linear.
 * @param {Array<any>} arr
 * @returns {Object<string, number>}
 */
const makeFrequencyMap = (arr = []) =>
  arr.reduce((freq, item) => {
    if (freq.has(item) === false) {
      freq.set(item, 0);
    }
    freq.set(item, freq.get(item) + 1);
    return freq;
  }, new Map());

module.exports = {
  makeFrequencyTable,
  makeFrequencyTable2,
  makeFrequencyTable3,
  makeFrequencyMap,
};
