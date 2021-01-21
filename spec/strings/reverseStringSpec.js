const { reverseString } = require("../../strings/reverseString");
const argFormatter = require("../helpers/argFormatter");

describe("reverseString", () => {
  const str1 = "creature";
  const expected1 = "erutaerc";

  const str2 = "dog";
  const expected2 = "god";

  const testCases = [
    { arguments: [str1], expected: expected1 },
    { arguments: [str2], expected: expected2 },
  ];

  it("should reverse and return the given string.", () =>
    testCases.forEach(({ arguments, expected }) =>
      expect(reverseString(...arguments))
        .withContext(argFormatter(reverseString, arguments))
        .toEqual(expected)
    ));
});
