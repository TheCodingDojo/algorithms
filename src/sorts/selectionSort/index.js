/* 
  https://visualgo.net/en/sorting
    
  Selection sort works by iterating through the list, finding the minimum
  value, and moving it to the beginning of the list. Then, ignoring the first
  position, which is now sorted, iterate through the list again to find the
  next minimum value and move it to index 1. This continues until all values
  are sorted.

  Unstable sort.
  
  Time Complexity
    - Best: O(n^2) quadratic.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic.

  Space: O(1) constant.

  Selection sort is one of the slower sorts.
  - ideal for: pagination, where page 1 displays 10 records for example,
      you run selection sort for 10 iterations only to display the first 10
      sorted items.
*/

const numbersOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numbersReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts given array in-place.
 * Best: O(n^2) quadratic.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic.
 * @param {Array<number>} numbers
 * @returns {Array<number>} The given array after being sorted.
 */
function selectionSort(numbers = []) {}

/*****************************************************************************/

/**
 * Sorts given array in-place.
 * Best: O(n^2) quadratic.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic.
 * @param   {Array<number>} numbers
 * @return  {Array<number>} The given array after being sorted.
 */
function selectionSort(numbers = []) {
  const len = numbers.length;
  let selectedIdx = 0;
  let idxOfCurrMin = 0;

  while (selectedIdx < len) {
    for (let i = selectedIdx; i < len; i++) {
      if (numbers[i] < numbers[idxOfCurrMin]) {
        idxOfCurrMin = i;
      }
    }

    if (numbers[selectedIdx] !== numbers[idxOfCurrMin]) {
      // Swap.
      [numbers[selectedIdx], numbers[idxOfCurrMin]] = [
        numbers[idxOfCurrMin],
        numbers[selectedIdx],
      ];
    }
    selectedIdx += 1;
    // reset idxOfCurrMin to the next selected index we are going to work with to find the next min
    idxOfCurrMin = selectedIdx;
  }
  return numbers;
}

module.exports = { selectionSort };
