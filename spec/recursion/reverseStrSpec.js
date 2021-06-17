const { reverseStr } = require("../../recursion/reverseStr");
const argFormatter = require("../helpers/argFormatter");

describe("reverseStr", () => {
  const str1 = "abc";
  const expected1 = "cba";

  const str2 = "";
  const expected2 = "";

  const testCases = [
    { args: [str1], expected: expected1 },
    { args: [str2], expected: expected2 },
  ];

  it("should return a string that is the reverse of the given string.", () =>
    testCases.forEach(({ args, expected }) =>
      expect(reverseStr(...args))
        .withContext(argFormatter(reverseStr, args))
        .toEqual(expected)
    ));
});
