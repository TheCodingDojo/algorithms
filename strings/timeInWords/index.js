// https://www.hackerrank.com/challenges/the-time-in-words/problem

const hour1 = 5;
const min1 = 00;
const expected1 = "five o' clock";

const hour2 = 5;
const min2 = 01;
const expected2 = "one minute past five";

const hour3 = 5;
const min3 = 10;
const expected3 = "ten minutes past five";

const hour4 = 5;
const min4 = 15;
const expected4 = "quarter past five";

const hour5 = 5;
const min5 = 30;
const expected5 = "half past five";

const hour6 = 5;
const min6 = 40;
const expected6 = "twenty minutes to six";

const hour7 = 5;
const min7 = 45;
const expected7 = "quarter to six";

const hour8 = 5;
const min8 = 47;
const expected8 = "thirteen minutes to six";

const hour9 = 5;
const min9 = 28;
const expected9 = "twenty eight minutes past five";

const hour10 = 12;
const min10 = 45;
const expected10 = "quarter to one";

const hour11 = 12;
const min11 = 00;
const expected11 = "twelve o' clock";

/**
 * Formats the time in word form.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} hour
 * @param {number} min
 * @returns {string} The time in words.
 */
function timeInWords(hour, min) {}

/*****************************************************************************/

/**
 * Formats the time in word form.
 * - Time: O(1) constant.
 * - Space: O(1) constant.
 * @param {number} hour
 * @param {number} min
 * @returns {string} The time in words.
 */
function timeInWords(h, m) {
  const timeWords = [
    "o' clock",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "quarter",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
    "twenty one",
    "twenty two",
    "twenty three",
    "twenty four",
    "twenty five",
    "twenty six",
    "twenty seven",
    "twenty eight",
    "twenty nine",
    "half",
  ];

  let hour = h,
    min = m,
    temporalPreposition = "past",
    minuteNoun = "minutes ";

  // calc minutes til next hour and increment hour
  if (min > 30) {
    min = 60 - m;
    // increment from 12 to 1, otherwise increment by 1
    hour = h === 12 ? 1 : h + 1;
    temporalPreposition = "to";
  }

  if (min == 15 || min == 30) {
    minuteNoun = "";
  } else if (min == 1) {
    minuteNoun = "minute ";
  }

  const hourWord = timeWords[hour],
    minWord = timeWords[min];
  return min === 0
    ? `${hourWord} ${minWord}`
    : `${minWord} ${minuteNoun}${temporalPreposition} ${hourWord}`;
}

module.exports = { timeInWords };
