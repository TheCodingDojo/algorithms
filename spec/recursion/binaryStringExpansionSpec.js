const {
  binaryStringExpansion,
} = require("../../recursion/binaryStringExpansion");
const argFormatter = require("../helpers/argFormatter");

describe("binaryStringExpansion", () => {
  const str1 = "1?0?";
  const expected1 = ["1000", "1001", "1100", "1101"];
  // output list order does not matter

  const testCases = [{ arguments: [str1], expected: expected1 }];

  it("should return an array of string representing all variations of the given string's question marks replaced with either 0 or 1.", () =>
    testCases.forEach(({ arguments, expected }) =>
      expect(binaryStringExpansion(...arguments))
        .withContext(argFormatter(binaryStringExpansion, arguments))
        .toEqual(jasmine.arrayWithExactContents(expected))
    ));
});
