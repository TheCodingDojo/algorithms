const { encodeStr } = require("../../strings/encodeStr");
const argFormatter = require("../helpers/argFormatter");

describe("encodeStr", () => {
  const str1 = "aaaabbcddd";
  const expected1 = "a4b2c1d3";

  const str2 = "";
  const expected2 = "";

  const str3 = "a";
  const expected3 = "a";

  const str4 = "bbcc";
  const expected4 = "bbcc";

  const testCases = [
    { args: [str1], expected: expected1 },
    { args: [str2], expected: expected2 },
    { args: [str3], expected: expected3 },
    { args: [str4], expected: expected4 },
  ];

  it("should return the given string encoded so that consecutively repeated chars are replaced with an int of its frequency.", () =>
    testCases.forEach(({ args, expected }) =>
      expect(encodeStr(...args))
        .withContext(argFormatter(encodeStr, args))
        .toEqual(expected)
    ));
});
