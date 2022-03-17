// https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript

/* 
  ROT13 is a simple letter substitution cipher that replaces
  a letter with the letter 13 letters after it in the alphabet.
  ROT13 is an example of the Caesar cipher.
  
  Create a function that takes a string and returns the string
  ciphered with Rot13. If there are numbers or special characters
  included in the string, they should be returned as they are.
  Only letters from the latin/english alphabet should be shifted,
  like in the original Rot13 "implementation".
 */

/*****************************************************************************/

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function rot13(s) {
  const chars = s.split("");

  for (let i = 0; i < chars.length; i++) {
    let alphabetIdx = alphabet.indexOf(chars[i]);

    if (alphabetIdx > -1) {
      let newAlphabetIdx = alphabetIdx + 13;
      if (newAlphabetIdx > alphabet.length - 1)
        // get the remainder and start indexing again from the beginning
        newAlphabetIdx = newAlphabetIdx - alphabet.length - 1;

      chars[i] = [alphabet[newAlphabetIdx]];
    }
  }
  return chars.join("");
}

module.exports = { rot13 };
