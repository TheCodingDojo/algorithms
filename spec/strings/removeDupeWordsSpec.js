const { removeDupeWords } = require("../../strings/removeDupeWords");
const argFormatter = require("../helpers/argFormatter");

describe("removeDupeWords", () => {
  const s1 = "";
  const expected1 = "";

  const s2 = "hi";
  const expected2 = "hi";

  const s3 = "hi hi hi";
  const expected3 = "hi";

  const s4 = "hello flat hello flat world";
  const expected4 = "hello flat world";

  const testCases = [
    { argument: s1, expected: expected1 },
    { argument: s2, expected: expected2 },
    { argument: s3, expected: expected3 },
    { argument: s4, expected: expected4 },
  ];

  testCases.forEach(({ argument, expected }) =>
    it("should remove duplicate words from the given string and return the deduped string.", () =>
      expect(removeDupeWords(argument))
        .withContext(argFormatter(removeDupeWords, [argument]))
        .toBe(expected))
  );
});
