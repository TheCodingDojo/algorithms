/**
 * This helper function avoids having to visit the chars multiple times to both
 * check if it is a palindrome and to then slice to get the palindrome.
 * - Time: O(n) linear. n = right - left which could be the full string.
 * - Space: O(n) linear.
 * @param {string} str
 * @param {number} left The left idx to start at inclusive.
 * @param {number} right The left idx to end at exclusive.
 * @returns {string} The palindrome or an empty string.
 */
function getPalindrome(str, left = 0, right = str.length) {
  let leftStr = "";
  let rightStr = "";
  const len = right - left;
  const half = Math.floor(len / 2);
  let leftIdx = left - 1;

  for (let i = 0; i < half; i++) {
    leftIdx += 1;
    const rightIdx = right - 1 - i;

    if (str[leftIdx] !== str[rightIdx]) {
      return "";
    }

    leftStr += str[leftIdx];
    rightStr = str[rightIdx] + rightStr;
  }

  // For odd palindromes we need to save middle letter since loop skips it.
  if (len % 2 !== 0) {
    leftStr += str[leftIdx + 1];
  }

  return leftStr + rightStr;
}
