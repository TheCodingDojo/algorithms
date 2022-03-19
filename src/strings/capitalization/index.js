/* 
Write two functions:

1. A function that returns a new string that is the given string with the first
  letter capitalized.

2. Given an array of strings,
  return the same array with the first letter of each string capitalized using
  the previously created helper function.

HINT: strings are immutable so to change a string you must create a new version
of it.
*/

/* Tests for capitalize function */
const string1 = "hello";
const expected1 = "Hello";

const string2 = "";
const expected2 = "";

/**
 * Capitalizes the first letter of the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} string The string to capitalize.
 * @returns {string} The given string with the first letter capitalized or an
 *    empty string.
 */
function capitalize(string) {}

/* Tests for capitalization function */
const strings1 = ["hello", "world"];
const expectedStrings1 = ["Hello", "World"];

/**
 * Capitalizes the first letter of each string in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} strings
 * @returns {Array<string>} The same given array with updated items.
 */
function capitalization(strings) {}

/*****************************************************************************/

/**
 * Capitalizes the first letter of the given string.
 * - Time: O(n) linear, n = string.length.
 * - Space: O(n) linear. A new string has to be created since strings are
 *    immutable.
 * @param {string} string The string to capitalize.
 * @returns {string} The given string with the first letter capitalized or an
 *    empty string.
 */
function capitalize(string = "") {
  if (string.length === 0) {
    return "";
  }
  // A new string with first letter capitalized plus the remaining chars.
  return string[0].toUpperCase() + string.slice(1);
}

/**
 * - Time: O(n) linear.
 * - Space: O(m) linear, m = longest string that has to be copied to be
 *    capitalized since strings are immutable. The array is mutated, not copied.
 * @param {Array<string>} strings
 * @returns {Array<string>}
 */
function capitalization(strings = []) {
  for (let i = 0; i < strings.length; i++) {
    /* 
    Reassign this index to what the capitalize function returns.
    */
    strings[i] = capitalize(strings[i]);
  }
  return strings;
}

// Without the helper function it would look like this.
function capitalization2(strings = []) {
  for (let i = 0; i < strings.length; i++) {
    let s = strings[i];

    if (s.length !== 0) {
      s = s[0].toUpperCase() + s.slice(1);
    }
    strings[i] = s;
  }
  return strings;
}

/**
 * NOTE: This `.map` returns a NEW array, it does not mutate the given array
 * so this version doesn't satisfy the mutation requirement. See the solution
 * using `.reduce` to see how it can be used to mutate.
 *
 * Passes our `capitalize` function to `.map` as the callback so `.map` will
 * execute `capitalize` while it loops and pass it `strings[i]`.
 * @param {Array<string>} strings
 * @returns {Array<string>}
 */
const functionalCapitalizationMap = (strings = []) => strings.map(capitalize);

/**
 * @param {Array<string>} strings
 * @returns {Array<string>}
 */
const functionalCapitalization = (strings = []) =>
  strings.reduce((mutatedStrings, currStr, i) => {
    mutatedStrings[i] = capitalize(currStr);
    return mutatedStrings;
  }, strings);

module.exports = {
  capitalization,
  capitalization2,
  functionalCapitalization,
};
