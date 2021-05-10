/**
 * STUDY this until the concept is clear to you, it is very important!
 *
 * A function is simply some instructions (code) that we want to save so that
 * we can re-use it without having to re-write the steps again and again.
 *
 * Parameters are just like variables, they can be named anything and can store
 * any kind of data. The difference is that parameters are variables that
 * hold value / data that is passed into a function at the time of the
 * function being called / executed / invoked.
 *
 * The parameters of a function are whatever outside information the function
 * needs in order to do it's job. Just like if I asked you to add together
 * two numbers, you would ask me, which two numbers? Our function needs
 * to know the same thing to add two numbers together. Get in the habit
 * of asking yourself what a function needs in order to do it's job to
 * determine what parameters are needed. Just as you would request needed
 * information to complete a task you were given, a function would need that
 * information to do the same task, because you are the one writing the
 * function to make it work. Remember this!
 */

/**
 * Below is JSDoc comment documentation to document the details of this
 * function. JSDoc is just a formal way to write documentation comments.
 *
 * This function adds two given numbers together to find the sum.
 * @param {number} num1 The first parameter is named num1,
 *    it is a number to add.
 * @param {number} num2 The second parameter is named num2,
 *    it is a number to add to the first number.
 * @returns {number} The return value will be a number which is the sum of
 *    the two given numbers added together.
 */
function addTwoNums(num1, num2) {
  /**
   * A function can "return" some value / data that can be saved and used
   * outside of the function. A function can only return one time because
   * the return causes the function to end.
   *
   * We are asking this function to add two numbers together, so it should
   * return us the answer.
   */
  return num1 + num2;
}

/**
 * Here we declare a new variable to store the value that the add function
 * returns when we execute it and pass in two numbers to be added.
 *
 * Argument #1 is the integer 5, it is passed into the parameter num1.
 * Argument #2 is the integer 10, it is passed into the parameter num2.
 *
 * Values passed into functions are called arguments while parameters are
 * part of the function's definition to give a name to the information
 * that will be / should be passed in when the function is executed.
 */
let sum = addTwoNums(5, 10);
console.log("addTwoNums function added 5 and 10 and returned:", sum);

/**
 * We can also pass in variables to our function if the variables contain the
 * values / data that we want to pass to our function's parameters.
 */
let netSalesPrice = 100;
let tax = 10;
let grossPrice = addTwoNums(netSalesPrice, tax);
console.log(
  "addTwoNums function added netSalesPrice and tax and returned the sum:",
  grossPrice
);

/***********************************README*************************************
 * Complete the below functions. Add the parameters the function needs to
 * do it's job. Refer to the above examples and comments when confused about
 * how to write parameters, how to make the function return data (an answer),
 * or how to execute / call a function.
 *
 * To run the file, at the to of VSCode, click Terminal, New Terminal, then
 * type node with a space after it, then drag and drop the the file you want to
 * run onto the terminal.
 *****************************************************************************/

/**
 * Concatenate three given strings together in this order:
 * 3rd string, 1st string, 2nd string.
 * @returns {string} The three given strings combined (concatenated).
 */
function combineStrings(/* Replace this comment with the needed parameters. What info does this function need? */) {
  // Replace this comment with the code needed to make this function work.
}

// Test the combineStrings function.
let test = combineStrings("a", "b", "c");
console.log(test, "should equal 'cab'");

/**
 * Combine two given strings together with the smaller string being added
 * in the front. If they are the same length, the first string will be
 * added to the front.
 * @returns {string} The combined strings.
 */
function combineSmallerStringFirst(/* Replace this comment with the needed parameters. What info does this function need? */) {
  // Replace this comment with the code needed to make this function work.
}

test = combineSmallerStringFirst("gramming", "pro");
console.log(test, "should be 'programming'");

test = combineSmallerStringFirst("pro", "gramming");
console.log(test, "should be 'programming'");

test = combineSmallerStringFirst("abc", "def");
console.log(test, "should be 'abcdef'");

/* 
  Test the below functions by executing them and logging what they return
  as seen above. You can do a simpler console.log, but the console / terminal
  gets messy quickly so it's helpful to have descriptive log messages.
*/

/**
 * Given a string and an integer representing how many times the string should
 * be repeated, create a new string that is the given string repeated that
 * many times.
 * @returns {string} The given string repeated the specified amount of times.
 */
function stringRepeat() {}

/**
 * Calculate the total miles that can be driven before running out of gas.
 * What information (parameters) would you need if to know if someone asked you
 * this question?
 * @returns {number} The miles until empty.
 */
function milesToEmpty() {}

/**
 * Determines the total of the lengths of the words in the given array.
 * @returns {number} The total length of all the words.
 */
function totalWordsLength() {}

/**
 * Determines the average length of the words in the given array.
 * @returns {number} The average length of the given words.
 */
function avgWordLength() {}

/**
 * Finds the longest word in the given array of words.
 * @returns {string} The longest word. If there are multiple words with the same
 *    length, this should be the last word in the array with that length.
 */
function findLongestWord() {}

/**
 * Calculates the sum of the given range, inclusive. I.e., the sum of the first
 * number through the last number, inclusive.
 * @returns {number} The sum of the given range, inclusive.
 */
function inclusiveRangeSum() {}

/* SOLUTIONS ******************************************************************/

/**
 * Combines the given strings in the following order: 3rd, 1st, 2nd.
 * @param {string} s1 The first string.
 * @param {string} s2 The second string.
 * @param {string} s3 The third string.
 * @returns {string} The combined string.
 */
function combineStrings(s1, s2, s3) {
  return s3 + s1 + s2;
}

/**
 * Combines the two given strings with the smaller string first or the first
 * string first if the lengths are the same.
 * @param {string} s1 The first string.
 * @param {string} s2 The second string.
 * @returns {string} The given strings combined.
 */
function combineSmallerStringFirst(s1, s2) {
  if (s1.length <= s2.length) {
    return s1 + s2;
  } else {
    return s2 + s1;
  }
}

/**
 * Repeats the given string the given amount of times without using the built
 * in .repeat method.
 * @param {string} str The string to be repeated.
 * @param {number} repeatAmount The amount of times to repeat the given string.
 * @returns {string} The given string repeated.
 */
function stringRepeat(str, repeatAmount) {
  let repeatedStr = "";

  for (let i = 0; i < repeatAmount; i++) {
    repeatedStr += str;
  }
  return repeatedStr;
}
/**
 * Calculates how many miles can be driven before running out of gas.
 * @param {number} mpg How many miles the car gets per gallon.
 * @param {number} gallonsInTank How many gallons are in the tank.
 * @returns {number} The amount of miles until empty.
 */
function milesToEmpty(mpg, gallonsInTank) {
  return mpg * gallonsInTank;
}

/**
 * Totals the length of all the words in the given array.
 * @param {Array<string>} words
 * @returns {number} The total length of all the given words.
 */
function totalWordsLength(words) {
  let totalLen = 0;

  for (let i = 0; i < words.length; i++) {
    totalLen += words[i].length;
  }

  return totalLen;
}

/**
 * Totals the length of all the words in the given array.
 * @param {Array<string>} words
 * @returns {number} The total length of all the given words.
 */
function totalWordsLength2(words) {
  // Join the words together into 1 string then get the length of that.
  return words.join("").length;
}

/**
 * Finds the average length of the given words.
 * @param {Array<string>} words
 * @returns {number} The average length of the given words.
 */
function avgWordLength(words) {
  let totalLen = 0;

  for (let i = 0; i < words.length; i++) {
    totalLen += words[i].length;
  }

  return totalLen / words.length;
}

/**
 * Finds the average length of the given words.
 * @param {Array<string>} words
 * @returns {number} The average length of the given words.
 */
function avgWordLength2(words) {
  return words.join("").length / words.length;
}

/**
 * Finds the longest word in the given array of words.
 * @param {Array<string>} words
 * @returns {string} The longest word. If there are multiple words with the same
 *    length, this will be the last word in the array with that length.
 */
function findLongestWord(words) {
  let longestWord = "";

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (word.length >= longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

/**
 * Calculates the sum of the given range, inclusive. I.e., the sum of the first
 * number through the last number, inclusive.
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @returns {number} The sum of the given range, inclusive.
 */
function inclusiveRangeSum(start, end) {
  let sum = 0;

  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
}
