const { isPalindrome } = require("../../strings/isPalindrome");
const argFormatter = require("../helpers/argFormatter");

describe("isPalindrome", () => {
  const str1 = "a x a";
  const expected1 = true;

  const str2 = "racecar";
  const expected2 = true;

  const str3 = "Dud";
  const expected3 = false;

  const str4 = "oho!";
  const expected4 = false;

  const testCases = [
    { arguments: [str1], expected: expected1 },
    { arguments: [str2], expected: expected2 },
    { arguments: [str3], expected: expected3 },
    { arguments: [str4], expected: expected4 },
  ];

  it("should return whether or not the given string is a palindrome.", () =>
    testCases.forEach(({ arguments, expected }) =>
      expect(isPalindrome(...arguments))
        .withContext(argFormatter(isPalindrome, arguments))
        .toEqual(expected)
    ));
});
