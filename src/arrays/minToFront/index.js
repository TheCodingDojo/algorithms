/* 
  Given an array, move the minimum value to the front in-place
  return the array after done.

  No built in methods.
*/

const nums1 = [6, 4, 5, 1, 3, 2];
const expected1 = [1, 6, 4, 5, 3, 2];

const nums2 = [1, 5, 2, 9];
const expected2 = [1, 5, 2, 9];

// The min occurs twice.
const nums3 = [5, 1, 0, 2, 3, 0];
const expected3 = [0, 5, 1, 2, 3, 0];

/**
 * Moves the smallest number in the given array to the front.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {Array<number>} The given arr after the min has been moved to front.
 */
function minToFront(nums) {
  // code here
}

// Tests
const result1 = minToFront(nums1);
console.log(result1, "should equal", expected1);
console.log(nums1, "should equal", expected1);

const result2 = minToFront(nums2);
console.log(result2, "should equal", expected2);
console.log(nums2, "should equal", expected2);

const result3 = minToFront(nums3);
console.log(result3, "should equal", expected3);
console.log(nums3, "should equal", expected3);

/*****************************************************************************/

/**
 * Moves the smallest number in the given array to the front.
 * - Time: O(2n) -> O(n) linear. n = nums.length.
 *    Drop the constant (2) to simplify.
 * - Space: O(1) constant because this algo doesn't take up any extra
 *    memory (space) as the length of the input arr grows. No new object or
 *    array is created that grows in size as the input grows.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given arr after the min has been moved to front.
 */
function minToFront(nums = []) {
  if (nums.length === 0) {
    return nums;
  }

  let idxOfMin = 0;
  let min = nums[idxOfMin];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
      idxOfMin = i;
    }
  }

  // starting from where the min is, shift to the right to overwrite the min
  // which will leave an empty space at the beginning
  //  i>= 1 so i - 1 doesn't go below 0
  for (let i = idxOfMin; i >= 1; i--) {
    nums[i] = nums[i - 1];
  }

  nums[0] = min;
  return nums;
}

// If we re-use other functions, this function can be easier to build and read
function functionalMinToFront(nums = []) {
  const minIdx = findMinIdx(nums);

  if (minIdx > -1) {
    const min = removeAt(nums, minIdx);
    unshift(nums, min);
  }
  return nums;
}

function findMinIdx(nums) {
  if (nums.length === 0) {
    return -1;
  }

  let minIdx = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[minIdx]) {
      minIdx = i;
    }
  }
  return minIdx;
}

function removeAt(arr, idx) {
  if (idx < 0 || idx >= arr.length) {
    return null;
  }

  let removed = arr[idx];

  for (let i = idx; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  // when the loop is done the 2nd to last item is set to the last item
  // so there is a duplicate that needs to be removed
  arr.pop();
  return removed;
}

function unshift(arr, val) {
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i + 1] = arr[i];
  }

  arr[0] = val;
  return arr.length;
}

// What it looks like using built in methods.
function moveMinFrontBuiltIn(nums = []) {
  if (nums.length === 0) {
    return null;
  }

  // Since Math.min doesn't accept an array, we use the ...spread operator
  // to spread all the nums to feed into the min method as separate arguments.
  // Math.min has to loop to find the min.
  const minVal = Math.min(...nums);

  // Now we have to loop to find the idx since we didn't write the loop ourself
  // we can't do both at the same time.
  const idxOfMin = nums.indexOf(minVal);

  // Remove it which has to loop to shift them.
  nums.splice(idxOfMin, 1);
  nums.unshift(minVal);
  return nums;
}

module.exports = { minToFront, moveMinFrontBuiltIn, functionalMinToFront };
