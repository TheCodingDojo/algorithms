/* 
  Interview question asked by a google engineer interviewer on interviewing.io

  Given two strings, find the largest common substring
  i.e., the largest string that could be built with common characters

  Output order doesn't matter

  Input: 'aaa', 'aa'
  Output: 'aa'

  Input: 'aaba', 'aa'
  Output: 'aa'

  Input: 'aeff', 'abcdef'
  Output: 'aef'

  Input: 'this hurts my head', 'this hurts my head too'
  Output: 'this hurts my head'
*/

function longestCommonSubstring(s1, s2) {
  const freq1 = getFreqTable(s1),
    freq2 = getFreqTable(s2);
  let longestSubStr = "";

  for (const key in freq1) {
    // the str with the smaller count of a shared letter limits us to using that many at most
    // if freq2[key] is undefined the or operator will return 0
    const min = Math.min(freq1[key], freq2[key] || 0);
    longestSubStr += key.repeat(min);
  }
  return longestSubStr;
}

function getFreqTable(s) {
  const freq = {};
  for (let char of s)
    freq.hasOwnProperty(char) ? freq[char]++ : (freq[char] = 1);
  return freq;
}
