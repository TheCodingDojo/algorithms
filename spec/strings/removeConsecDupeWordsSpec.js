const {
  removeConsecDupeWords,
} = require("../../recursion/removeConsecDupeWords");
const argFormatter = require("../helpers/argFormatter");

describe("removeConsecDupeWords", () => {
  const s1 = "";
  const expected1 = "";

  const s2 = "one two two three";
  const expected2 = "one two three";

  const s3 = "one one two";
  const expected3 = "one two";

  const s4 = "one one one two two two";
  const expected4 = "one two";

  const testCases = [
    { args: [s1], expected: expected1 },
    { args: [s2], expected: expected2 },
    { args: [s3], expected: expected3 },
    { args: [s4], expected: expected4 },
  ];

  it("should recursively remove consecutive dupe words from a string.", () =>
    testCases.forEach(({ args, expected }) =>
      expect(removeConsecDupeWords(...args))
        .withContext(argFormatter(removeConsecDupeWords, args))
        .toEqual(expected)
    ));
});
