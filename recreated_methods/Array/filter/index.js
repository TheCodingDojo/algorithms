/* 
  Recreate js .filter method (.Where in C#).
  Add it to the Array prototype so all arrays will have
  access to it.

  "The filter() method creates a new array with all elements
  that pass the test implemented by the provided callback function."

  .filter params: callback function.
  
  Starter code:

  Array.prototype.where = function (addYourParamsHere) {
    // `this` will point to the array that .where was called on
  }
  

  The provided callback needs:
    - to return true or false
      - true if the element is to be added to the new list
      - false if the element is to not be added to the new list
    - to be passed the following args:
      - current element being iterated over
      - index of current element
      - the array that is being iterated over

  Arrow Functions:
    - to the right of the => is automatically returned if it's one line
    - no curly braces are needed if the right of arrow is 1 line
*/

// Inputs & Outputs listed below
// Time: O(n) linear, n = this.length
// Space: O(n)
Array.prototype.where = function (callback) {
  const filteredArr = [];

  for (let i = 0; i < this.length; i++) {
    const currItem = this[i];
    const shouldKeepItem = callback(currItem, i, this);

    if (shouldKeepItem === true) {
      filteredArr.push(currItem);
    }
  }
  return filteredArr;
};

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const nums = [1, 2, 3, 4, 6];

// Input (below 3 are equivalent, just different syntax):
const evenBois = nums.where((num) => num % 2 === 0);

const evenBois2 = nums.where((num) => {
  return num % 2 === 0;
});

// Non Arrow version:
const evenBois3 = nums.where(function (num) {
  return num % 2 === 0;
});
// Output:
// [2, 4]

// Input (parens needed b/c callback uses more than 1 param):
const evenBoisAtEvenIndicies = nums.where(
  (num, i) => num % 2 === 0 && i % 2 === 0
);
// output:
// [6]

// Input:
const shortWords = words.where((word) => word.length < 6);
// Output:
// ["spray", "limit", "elite"]

// Input:
const wordsStartingWithE = words.where((word) => word[0].toLowerCase() === "e");
// Output:
// ['elite', 'exuberant']
