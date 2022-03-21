// https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/

/* 
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
*/

const nums1 = [1];
const expected1 = 1;

const nums2 = [5, 4, 5];
const expected2 = 4;

const nums3 = [5, 4, 3, 4, 3, 4, 5];
const expected3 = 4; // there is a pair of 4s but one 4 has no pair.

const nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const expected4 = 1;

function oddOccurrencesInArray(nums) {}

console.log(oddOccurrencesInArray(nums1), "should equal", expected1);
console.log(oddOccurrencesInArray(nums2), "should equal", expected2);
console.log(oddOccurrencesInArray(nums3), "should equal", expected3);
console.log(oddOccurrencesInArray(nums4), "should equal", expected4);

/*****************************************************************************/

/**
 * Finds the only number that occurs odd times in the given odd-lengthed array.
 * - Time: O(2n) -> O(n) linear.
 * - Space: O(n) linear.
 * @param {number[]} nums Odd-lengthed.
 * @returns {number} The number that occurs odd times.
 */
function oddOccurrencesInArray(nums = []) {
  const freqTable = {};

  for (const n of nums) {
    if (freqTable.hasOwnProperty(n)) {
      freqTable[n]++;
    } else {
      freqTable[n] = 1;
    }
  }

  for (const key in freqTable) {
    if (freqTable[key] % 2 !== 0) {
      return +key; // + converts the string key back to int.
    }
  }

  // The spec guaranteed there will be a solution so no other return is needed.
}

/**
 * Finds the only number that occurs odd times in the given odd-lengthed array.
 * - Time: O(2n) -> O(n) linear.
 * - Space: O(n) linear.
 * @param {number[]} nums Odd-lengthed.
 * @returns {number} The number that occurs odd times.
 */
function oddOccurrencesInArray2(nums = []) {
  // Map lets us store ints as keys so we don't have to convert back to int.
  const freqMap = new Map();

  for (const n of nums) {
    if (freqMap.has(n)) {
      freqMap.set(n, freqMap.get(n) + 1);
    } else {
      freqMap.set(n, 1);
    }
  }

  //         [key, val]
  for (const [n, count] of freqMap) {
    if (count % 2 !== 0) {
      return n;
    }
  }
}

/**
 * Finds the only number that occurs odd times in the given odd-lengthed array.
 * - Time: O(n^2) quadratic
 * - Space: O(1) constant.
 * @param {number[]} nums Odd-lengthed.
 * @returns {number} The number that occurs odd times.
 */
function oddOccurrencesInArray3(nums = []) {
  for (let i = 0; i < nums.length; i++) {
    let cnt = 1;

    // Can't use j = i + 1 because it will mis-count by missing nums before i.
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] === nums[j]) {
        cnt++;
      }
    }

    if (cnt % 2 !== 0) {
      return nums[i];
    }
  }
}

const { makeFrequencyTable } = require("../../objects/makeFrequencyTable");

/**
  `.entries` gives an array of key value pairs from our frequency table object:
  [[key1, val1], [key2, val2]]
  the + in front converts our final result into a number. Our frequency table
  put numbers from the arr into keys in the freq obj, but keys become strings
  so we need that to be converted back. Could also use parseInt() or Number()
  Using a Map object as our freq table would avoid the need to convert.
  
 * - Time: O(3n) -> O(n) linear. Creating the table is a loop, `.entries` is
 *    a loop, and `.filter` is a loop.
 * - Space: O(1) constant.
 * @param {number[]} nums
 * @returns {number}
 */
const functionalOddOccurrencesInArray = (nums = []) =>
  +Object.entries(makeFrequencyTable(nums))
    /* 
    Filter out the even frequencies so we are left with the one
    that has an odd frequency. Since our array is an array of arrays:
    [[theKeyWeWant, value]][0][0] <- get the nested arr, then the key.
    */
    .filter(([numStr, frequency]) => frequency % 2 !== 0)[0][0];

module.exports = {
  oddOccurrencesInArray,
  oddOccurrencesInArray2,
  oddOccurrencesInArray3,
  functionalOddOccurrencesInArray,
};
