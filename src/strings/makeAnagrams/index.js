const stringA1 = "cde";
const stringB1 = "abc";
/* 
Explanation:
c and e need to be removed from stringA
a and b need to be removed from stringB.
*/
const expected1 = 4;

const stringA2 = "daabbaaccc";
const stringB2 = "bazz";
/*
Explanation:
3 a's, 1 d, 1 b, and 3 c's need to be removed from stringA
2 z's need to be removed from stringB
*/
const expected2 = 10;

console.log(makingAnagrams(stringA2, stringB2));

function makingAnagrams(s1, s2) {
  const letterFrequencies1 = makeFrequencyMapFromString(s1);
  const letterFrequencies2 = makeFrequencyMapFromString(s2);

  const [missingFromS2Count, sharedExcessLettersCount] =
    countMissingAndSharedExcessDupes(letterFrequencies1, letterFrequencies2);

  const [missingFromS1Count] = countMissingAndSharedExcessDupes(
    letterFrequencies2,
    letterFrequencies1
  );

  // Only add the sharedExcessLettersCount once. Since they are shared they
  // will be found when checking from both sides so don't double add them.
  return missingFromS1Count + missingFromS2Count + sharedExcessLettersCount;
}

/**
 * @param {string} s
 * @returns {Map<string, number>} A map of letters and their frequency.
 */
function makeFrequencyMapFromString(s = "") {
  const charFrequencies = new Map();

  for (const letter of s) {
    if (charFrequencies.has(letter) === false) {
      charFrequencies.set(letter, 0);
    }
    charFrequencies.set(letter, charFrequencies.get(letter) + 1);
  }

  return charFrequencies;
}

/**
 * Counts the missing letters from both directions and counts the excess
 * frequencies of shared letters.
 * @param {Map<string, number>} letterFrequencies1
 * @param {Map<string, number>} letterFrequencies2
 * @returns {[number, number]}
 */
function countMissingAndSharedExcessDupes(
  letterFrequencies1,
  letterFrequencies2
) {
  let missingLettersCount = 0;
  let sharedExcessLettersCount = 0;

  for (const [s1Letter, s1LetterCount] of letterFrequencies1) {
    if (letterFrequencies2.has(s1Letter)) {
      const s2LetterCount = letterFrequencies2.get(s1Letter);
      // Could be 0 if same count, adding 0 won't have an effect.
      sharedExcessLettersCount += Math.abs(s1LetterCount - s2LetterCount);
    }
    // Letter not found in other string, all occurrences need to be removed.
    else {
      missingLettersCount += s1LetterCount;
    }
  }

  return [missingLettersCount, sharedExcessLettersCount];
}
