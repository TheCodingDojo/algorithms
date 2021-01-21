// given a string, return a new string that has all the vowels of the given string first

// Time: O(n) linear
// Space: O(n) linear, as n (length of str) grows we store that much more memory in the vars
function vowelsFirst(str) {
  let vowelsStr = "";
  let consonantsStr = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      vowelsStr += char;
    } else {
      consonantsStr += char;
    }
  }
  return vowelsStr + consonantsStr;
}
