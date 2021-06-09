const {
  longestPalindromicSubstring,
} = require("../../strings/longestPalindromicSubstring");
const argFormatter = require("../helpers/argFormatter");

describe("longestPalindromicSubstring", () => {
  const str1 = "what up, daddy-o?";
  const expected1 = "dad";

  const str2 = "uh, not much";
  const expected2 = "u";

  const str3 = "Yikes! my favorite racecar erupted!";
  const expected3 = "e racecar e";


  const str4 = "a1001x20002y5677765z";
  const expected4 = "5677765";
  
  const str5 = "a1001x20002y567765z";
  const expected5 = "567765";

  const testCases = [
    { arguments: [str1], expected: expected1 },
    { arguments: [str2], expected: expected2 },
    { arguments: [str3], expected: expected3 },
    { arguments: [str4], expected: expected4 },
    { arguments: [str5], expected: expected5 },
  ];

  it("should return the longest palindrome contained within the given string.", () =>
    testCases.forEach(({ arguments, expected }) =>
      expect(longestPalindromicSubstring(...arguments))
        .withContext(argFormatter(longestPalindromicSubstring, arguments))
        .toEqual(expected)
    ));
});
