/* 
  KaprekarsConstant(num)
  Where num is a 4-digit number with at least two distinct digits
  
  Your program should perform the following routine on the number:
    - Arrange the digits in descending order and in ascending order (adding zeroes to fit it to a 4-digit number if needed)
    - subtract the smaller number from the bigger number. Then repeat the previous step. 

  Performing this routine will always cause you to reach a fixed number: 6174. Then performing the routine on 6174 will always give you 6174 (7641 - 1467 = 6174).
  
  Your program should return the number of times this routine must be performed until 6174 is reached. For example: if num is 3524 your program should return 3 because of the following steps: (1) 5432 - 2345 = 3087, (2) 8730 - 0378 = 8352, (3) 8532 - 2358 = 6174.

  Input: 3524
  Output: 3
  Steps:
    1. 5432 - 2345 = 3087
    2. 8730 - 0378 = 8352
    3. 8532 - 2358 = 6174
  
  Sample Test Cases

  Input:2111
  Output:5

  Input:9831
  Output:7

  Helpful methods:
  
  Number.prototype.toString()
  String.prototype.split(separator)
    - returns array of characters split on separator
  
  arr.sort((a, b) => a - b) // ascending
  arr.sort((a, b) => b - a) // descending
*/

function kaprekarsConstant(num) {
  let count = 0;
  if (num === 6174) return count;

  let numStr = num.toString();

  while (numStr != 6174) {
    if (numStr.length < 4) numStr += "0";

    const strDigits = numStr.split("");
    const asc = strDigits
      .slice()
      .sort((a, b) => a - b)
      .join("");
    const desc = strDigits
      .slice()
      .sort((a, b) => b - a)
      .join("");
    numStr = (desc - asc).toString();
    count++;
  }
  return count;
}
