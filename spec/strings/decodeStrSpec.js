const { decodeStr } = require("../../strings/decodeStr");
const argFormatter = require("../helpers/argFormatter");

describe("decodeStr", () => {
  const str1 = "a3b2c1d3";
  const expected1 = "aaabbcddd";

  const str2 = "a3b2c12d10";
  const expected2 = "aaabbccccccccccccdddddddddd";

  const testCases = [
    { arguments: [str1], expected: expected1 },
    { arguments: [str2], expected: expected2 },
  ];

  it("should return a decoded version of the given string such that each char is repeated based on integer that follows.", () =>
    testCases.forEach(({ arguments, expected }) =>
      expect(decodeStr(...arguments))
        .withContext(argFormatter(decodeStr, arguments))
        .toEqual(expected)
    ));
});
