const { reverseWords } = require("../../strings/reverseWords");
const argFormatter = require("../helpers/argFormatter");

describe("reverseWords", () => {
  const str1 = "hello";
  const expected1 = "olleh";

  const str2 = "hello world";
  const expected2 = "olleh dlrow";

  const str3 = "abc def ghi";
  const expected3 = "cba fed ihg";

  const testCases = [
    { args: [str1], expected: expected1 },
    { args: [str2], expected: expected2 },
    { args: [str3], expected: expected3 },
  ];

  it("should reverse each word's characters in the given string of space separated words.", () =>
    testCases.forEach(({ args, expected }) =>
      expect(reverseWords(...args))
        .withContext(argFormatter(reverseWords, args))
        .toEqual(expected)
    ));
});
