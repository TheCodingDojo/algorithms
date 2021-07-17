// https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/

/**
 * Finds the only number that occurs once in the given odd-lengthed array.
 * - Time: O(2n) -> O(n) linear.
 * - Space: O(n) linear.
 * @param {number[]} nums Odd-lengthed.
 * @returns {number} The number that occurs once.
 */
function oddOccurrencesInArray(nums) {
  const freqMap = new Map();

  for (const n of nums) {
    if (freqMap.has(n)) {
      freqMap.set(n, freqMap.get(n) + 1);
    } else {
      freqMap.set(n, 1);
    }
  }

  for (const [n, count] of freqMap) {
    if (count % 2 !== 0) {
      return n;
    }
  }
}
