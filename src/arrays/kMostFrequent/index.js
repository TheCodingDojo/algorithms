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

const nums3 = [1, 1, 2, 2, 3, 3];
const k3 = 3;
const expected3 = [1, 2, 3];
/* 
  Explanation: 3 is the only value that would be passed in for k because it is the only value for k that has
  a valid solution. Since 1, 2, and 3, all occur 3 times, they are all the most frequent ints, so there is no
  1 most frequent int, or 2 most frequent int, but there are 3 most frequent ints. 
*/

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
  const numToFrequency = {};
  const frequencyToNums = {};
  let maxFreq = 0;

  for (const num of nums) {
    if (numToFrequency.hasOwnProperty(num)) {
      numToFrequency[num]++;

      if (numToFrequency[num] > maxFreq) {
        maxFreq = numToFrequency[num];
      }
    } else {
      numToFrequency[num] = 1;
    }
  }

  // build a frequency table that is a reverse of the above to help avoid O(n^2)
  // since multiple ints can have the same frequency, value must be an array of the ints that have that frequency
  // since keys are strings, convert the numKey back to an int when adding it to the array
  for (const numKey in numToFrequency) {
    const frequency = numToFrequency[numKey];

    if (frequencyToNums.hasOwnProperty(frequency)) {
      frequencyToNums[frequency].push(+numKey);
    } else {
      // create the array with the first num found that has this frequency
      frequencyToNums[frequency] = [+numKey];
    }
  }

  let nextMostFreq = maxFreq;

  while (mostFreqNums.length < k && nextMostFreq > 0) {
    if (
      frequencyToNums.hasOwnProperty(nextMostFreq) &&
      frequencyToNums[nextMostFreq].length > 0
    ) {
      mostFreqNums.push(frequencyToNums[nextMostFreq].pop());
    } else {
      // no nums have this frequency, decr to check for next most freq
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
