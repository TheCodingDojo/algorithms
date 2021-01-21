const {
  canStringBecomePalindrome,
} = require("../../strings/canStringBecomePalindrome");
const argFormatter = require("../helpers/argFormatter");

describe("canStringBecomePalindrome", () => {
  const str1 = "";
  const expected1 = false;

  const str2 = "a";
  const expected2 = true;

  const str3 = "ddaa";
  const expected3 = true;
  // Explanation: "daad" or "adda"

  const str4 = "dda";
  const expected4 = true;
  // Explanation: "dad"

  const str5 = "aaadd";
  const expected5 = true;
  // Explanation: "daaad"

  const str6 = "abc";
  const expected6 = false;

  const testCases = [
    { arguments: [str1], expected: expected1 },
    { arguments: [str2], expected: expected2 },
    { arguments: [str3], expected: expected3 },
    { arguments: [str4], expected: expected4 },
    { arguments: [str5], expected: expected5 },
    { arguments: [str6], expected: expected6 },
  ];

  it("should return whether or not the given string could be rearranged into a palindrome.", () => {
    testCases.forEach(({ arguments, expected }) => {
      expect(canStringBecomePalindrome(...arguments))
        .withContext(argFormatter(canStringBecomePalindrome, arguments))
        .toEqual(expected);
    });
  });
});
