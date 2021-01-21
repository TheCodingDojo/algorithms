/* 
  String: In-Order Subsets

  Create strSubsets(str) . Return an array with every possible in-order character subset of str. The resultant array itself need not be in any specific order – it is the subset of letters in each string that must be in the same order as they were in the original string. 
  
  Input: "abc" , 
  Output: return an array that includes ["", "c", "b", "bc", "a", "ac", "ab", "abc"] (in any order).
*/

function inOrderSubsets(str, solutions = [], partial = "") {
  solutions.push(partial);

  for (let i = 0; i < str.length; i++) {
    const sliced = str.slice(i + 1);
    inOrderSubsets(sliced, solutions, partial + str[i]);
  }

  return solutions;
}

console.log(inOrderSubsets("abcd").join(", "));
