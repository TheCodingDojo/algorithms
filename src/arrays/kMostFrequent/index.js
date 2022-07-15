// From a technical interview with an AWS engineer: https://youtu.be/t0OQAD5gjd8

/* 
  Given an unsorted non-empty array of integers and int k, return the k most frequent elements (in any order)
  You can assume there is always a valid solution

  These example inputs are sorted for readability, but the input is NOT guaranteed to be sorted and the output does NOT need to be in any specific order

  Hard Bonus: make it O(n) time
*/

const nums1 = [1, 1, 1, 2, 2, 3];
const k1 = 2;
const expected1 = [1, 2];
// Explanation: return the two most frequent elements, 1 and 2 are the two most frequent elements

const nums2 = [0, 0, 0, 2, 2, 3];
const k2 = 1;
const expected2 = [0];
// Explanation: k being 1 means return the single most frequent element

// 6 occurs 6 times, 3 occurs 3 times, 2 occurs 2 times, 1 occurs 1 time.
const nums3 = [1, 6, 3, 3, 6, 6, 3, 6, 2, 2, 6, 6];
const k3 = 3;
const expected3 = [6, 3, 2];

/**
 * Returns the k most frequently occurring numbers from the given unordered
 * nums.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered.
 * @param {number} k Represents the amount of numbers that should be returned.
 * @returns {Array<number>} The k most frequently occurring numbers.
 */
function kMostFrequent(nums, k) {}

/*****************************************************************************/

/**
 * Returns the k most frequently occurring numbers from the given unordered
 * nums.
 * - Time: O(n) linear because the the methods called inside loops are
 *    O(1) constant time: .push, .pop, .hasOwnProperty.
 * - Space: O(3n) -> O(n) linear.
 * @param {Array<number>} nums Unordered.
 * @param {number} k Represents the amount of numbers that should be returned.
 * @returns {Array<number>} The k most frequently occurring numbers.
 */
function kMostFrequent(nums, k) {
  const mostFreqNums = [];
  const numToFrequency = new Map();
  const frequencyToNums = new Map();
  let maxFreq = 0;

  for (const num of nums) {
    if (numToFrequency.has(num) === false) {
      numToFrequency.set(num, 0);
    }
    const newFrequency = numToFrequency.get(num) + 1;
    numToFrequency.set(num, newFrequency);

    if (newFrequency > maxFreq) {
      maxFreq = newFrequency;
    }
  }

  /* 
  build a frequency table that is a reverse of the above so we can look up
  starting from a frequency to find what numbers have that frequency.
  since multiple nums can have the same frequency, the value of this table
  needs to be an array.

  Alternatively, this could be a 2d sparse array, often referred to as
  'buckets' where each nested array is a 'bucket' / container to hold
  items.
  */
  for (const [num, frequency] of numToFrequency) {
    if (frequencyToNums.has(frequency) === false) {
      frequencyToNums.set(frequency, []);
    }
    frequencyToNums.get(frequency).push(num);
  }

  console.log("numToFrequency:", numToFrequency);
  console.log("frequencyToNums:", frequencyToNums);
  console.log("maxFreq:", maxFreq);

  let nextMostFreq = maxFreq;

  while (mostFreqNums.length < k && nextMostFreq > 0) {
    // .has, .get, .push, .pop are all O(1) constant time.
    if (
      frequencyToNums.has(nextMostFreq) &&
      frequencyToNums.get(nextMostFreq).length > 0
    ) {
      const nextMostFreqNum = frequencyToNums.get(nextMostFreq).pop();
      mostFreqNums.push(nextMostFreqNum);
    } else {
      // no nums have this frequency, decrement to check for next most freq
      nextMostFreq--;
    }
  }
  return mostFreqNums;
}

/**
 * - Time: O(n) + O(n) + O(n^2) + O(k) -> O(n^2) quadratic due to sort's worst
 *    case.
 * - Space: O(n) linear.
 */
function kMostFrequentSort(nums, k) {
  const freq = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (freq.has(num)) {
      freq.set(num, freq.get(num) + 1);
    } else {
      freq.set(num, 1);
    }
  }

  const keys = [...freq.keys()];

  // sort gives us two elements side by side, A and B, a - b sorts ascending, b - a for descending
  keys.sort((numA, numB) => {
    const freqA = freq.get(numA);
    const freqB = freq.get(numB);
    return freqB - freqA;
  });

  // slice only the first k keys, if using a plain object for the freq table instead of the
  // built in Map object, would need to convert the keys back to ints, could do this with .map
  return keys.slice(0, k);
}

module.exports = { kMostFrequent, kMostFrequentSort };
