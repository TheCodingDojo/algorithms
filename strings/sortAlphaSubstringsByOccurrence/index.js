/*
From an interview.

Given a string find all alphabetic character substrings within the string.

Sort them by occurrence and then alphabetically and ignore case.

Your output should be a string with the occurrence count followed by a
comma followed by the substring with each line separated by a new line.

Non alphabetic characters serve as delimiters and thus substrings are
only obtainable within alphabetic character sequences.
*/

/**
 * Finds all the substrings between non alpha char delimiters and sorts them
 * by occurrence then by alphabetical order.
 * - Time: O(?)
 * - Space: O(?)
 * @param {string} s Delimiters are non alpha chars.
 * @returns {string} In the format of occurrence,substring on new lines.
 */
function sortAlphaSubstringsByOccurrence(s) {}

/*****************************************************************************/

/**
 * Finds all the substrings between non alpha char delimiters and sorts them
 * by occurrence then by alphabetical order.
 * - Time: O(n^2) + O(m) + O(m log(m)) + O(m) -> O(n^2) + O(m log(m))
 *    n = s.length, m = substrings.length. n^2 from nested loop, and m log(m)
 *    from the .sort, and the other O(m) come from loops over substrings arr,
 *    namely the Object.keys and the last loop to format the return.
 * - Space: O(3n) -> O(n) linear.
 * @param {string} s Delimiters are non alpha chars.
 * @returns {string} In the format of occurrence,substring on new lines.
 */
function sortAlphaSubstringsByOccurrence(s) {
  const substrFreqTable = {};

  for (let i = 0; i < s.length; i++) {
    let subStr = "";

    for (let j = i; j < s.length; j++) {
      const lowerChar = s[j].toLowerCase();

      /**
       * This condition could be converted to be part of the loop condition,
       * but we don't have access to the lowerChar there so we would have to
       * lowerCase it twice for each part of the condition.
       */
      if (lowerChar < "a" || lowerChar > "z") {
        break;
      }

      subStr += lowerChar;

      substrFreqTable[subStr] = substrFreqTable.hasOwnProperty(subStr)
        ? substrFreqTable[subStr] + 1
        : 1;
    }
  }

  const subStrings = Object.keys(substrFreqTable);

  subStrings.sort((a, b) => {
    const freqA = substrFreqTable[a];
    const freqB = substrFreqTable[b];

    if (freqA > freqB) {
      return -1;
    }
    if (freqA < freqB) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });

  let ret = "";

  for (let i = 0; i < subStrings.length; i++) {
    ret += substrFreqTable[subStrings[i]] + "," + subStrings[i];

    if (i !== subStrings.length - 1) {
      ret += "\n";
    }
  }

  return ret;
}

module.exports = {
  sortAlphaSubstringsByOccurrence,
};
