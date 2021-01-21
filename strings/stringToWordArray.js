/* 
  String to Word Array

  Input: string of words (with spaces, tabs and linefeeds)
  Output: array of words
  
  Input: "Life is not a drill!"
  Output: ["Life", "is" "not", "a", "drill!"]
*/

/* 
  '\n' == true
      => false

  if ('\n') { console.log(true) }
    => true

  if ('\n' == false) { console.log(true) }
    => true
*/

function stringToWordArr(wordsStr) {
  const words = [];
  let currWord = "";

  for (const char of wordsStr) {
    // space characters are falsy
    if (char == false) {
      // in case of multiple spaces, word might still be empty
      if (currWord.length > 0) {
        words.push(currWord);
        currWord = "";
      }
    } else {
      currWord += char;
    }
  }
  // when no space at end, need to include last word
  if (currWord.length > 0) {
    words.push(currWord);
  }
  return words;
}
