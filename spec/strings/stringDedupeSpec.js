const { stringDedupe } = require("../../strings/stringDedupe");
const argFormatter = require("../helpers/argFormatter");

describe("stringDedupe", () => {
  const str1 = "abcABC";
  const expected1 = "abcABC";

  const str2 = "helloo";
  const expected2 = "helo";

  const testCases = [
    { arguments: [str1], expected: expected1 },
    { arguments: [str2], expected: expected2 },
  ];

  it("should return a string that is the given string with duplicate characters removed.", () =>
    testCases.forEach(({ arguments, expected }) =>
      expect(stringDedupe(...arguments))
        .withContext(argFormatter(stringDedupe, arguments))
        .toEqual(expected)
    ));
});
