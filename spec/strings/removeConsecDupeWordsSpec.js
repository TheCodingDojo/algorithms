const { removeConsecDupeWords } = require("../../recursion/removeConsecDupeWords");
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
    { arguments: [s1], expected: expected1 },
    { arguments: [s2], expected: expected2 },
    { arguments: [s3], expected: expected3 },
    { arguments: [s4], expected: expected4 },
  ];

  it("should recursively remove consecutive dupe words from a string.", () =>
    testCases.forEach(({ arguments, expected }) =>
      expect(removeConsecDupeWords(...arguments))
        .withContext(argFormatter(removeConsecDupeWords, arguments))
        .toEqual(expected)
    ));
});
