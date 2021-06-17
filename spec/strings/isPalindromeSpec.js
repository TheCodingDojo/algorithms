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
    { args: [str1], expected: expected1 },
    { args: [str2], expected: expected2 },
    { args: [str3], expected: expected3 },
    { args: [str4], expected: expected4 },
  ];

  it("should return whether or not the given string is a palindrome.", () =>
    testCases.forEach(({ args, expected }) =>
      expect(isPalindrome(...args))
        .withContext(argFormatter(isPalindrome, args))
        .toEqual(expected)
    ));
});
