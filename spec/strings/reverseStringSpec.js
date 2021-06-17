const { reverseString } = require("../../strings/reverseString");
const argFormatter = require("../helpers/argFormatter");

describe("reverseString", () => {
  const str1 = "creature";
  const expected1 = "erutaerc";

  const str2 = "dog";
  const expected2 = "god";

  const testCases = [
    { args: [str1], expected: expected1 },
    { args: [str2], expected: expected2 },
  ];

  it("should reverse and return the given string.", () =>
    testCases.forEach(({ args, expected }) =>
      expect(reverseString(...args))
        .withContext(argFormatter(reverseString, args))
        .toEqual(expected)
    ));
});
