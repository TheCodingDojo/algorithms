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

/*****************************************************************************/

/**
 * Finds the only number that occurs odd times in the given odd-lengthed array.
 * - Time: O(2n) -> O(n) linear.
 * - Space: O(n) linear.
 * @param {number[]} nums Odd-lengthed.
 * @returns {number} The number that occurs odd times.
 */
function oddOccurrencesInArray(nums) {
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
function oddOccurrencesInArray2(nums) {
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
function oddOccurrencesInArray3(nums) {
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

console.log(oddOccurrencesInArray(nums1), expected1);
console.log(oddOccurrencesInArray(nums2), expected2);
console.log(oddOccurrencesInArray(nums3), expected3);
console.log(oddOccurrencesInArray(nums4), expected4);
console.log("-----------------------------------");
console.log(oddOccurrencesInArray2(nums1), expected1);
console.log(oddOccurrencesInArray2(nums2), expected2);
console.log(oddOccurrencesInArray2(nums3), expected3);
console.log(oddOccurrencesInArray2(nums4), expected4);
console.log("-----------------------------------");

console.log(oddOccurrencesInArray3(nums1), expected1);
console.log(oddOccurrencesInArray3(nums2), expected2);
console.log(oddOccurrencesInArray3(nums3), expected3);
console.log(oddOccurrencesInArray3(nums4), expected4);

module.exports = {
  oddOccurrencesInArray,
  oddOccurrencesInArray2,
  oddOccurrencesInArray3,
};
