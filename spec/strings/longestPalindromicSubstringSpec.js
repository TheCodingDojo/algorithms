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

  const testCases = [
    { arguments: [str1], expected: expected1 },
    { arguments: [str2], expected: expected2 },
    { arguments: [str3], expected: expected3 },
  ];

  it("should return the longest palindrome contained within the given string.", () =>
    testCases.forEach(({ arguments, expected }) =>
      expect(longestPalindromicSubstring(...arguments))
        .withContext(argFormatter(longestPalindromicSubstring, arguments))
        .toEqual(expected)
    ));
});
