/* 
  Given in an interview.

  Given a string of words
  return a string with the duplicate words removed

  no built in methods
*/

const s1 = "";
const expected1 = "";

const s2 = "hi";
const expected2 = "hi";

const s3 = "hi hi hi";
const expected3 = "hi";

const s4 = "hello flat hello flat world";
const expected4 = "hello flat world";

function removeDupeWords(str) {}

/*****************************************************************************/

function removeDupeWords(str) {
  let deduped = "";
  const seen = {};
  let word = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      word += str[i];
    }

    if ((str[i] === " " || i === str.length - 1) && word.length > 0) {
      if (!seen.hasOwnProperty(word)) {
        deduped.length !== 0 && (deduped += " ");
        deduped += word;
        seen[word] = true;
      }
      word = "";
    }
  }
  return deduped;
}

module.exports = { removeDupeWords };
