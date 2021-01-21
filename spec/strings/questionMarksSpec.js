const { questionMarks } = require("../../strings/questionMarks");
const argFormatter = require("../helpers/argFormatter");

describe("questionMarks", () => {
  const str1 = "aa6?9";
  const expected1 = false;

  const str2 = "acc?7??sss?3rr1??????5";
  const expected2 = true;

  const str3 = "?3?d?dad?7??????3";
  const expected3 = true;

  const str4 = "7??????3";
  const expected4 = false;
  // Explanation: too many question marks

  const testCases = [
    { arguments: [str1], expected: expected1 },
    { arguments: [str2], expected: expected2 },
    { arguments: [str3], expected: expected3 },
    { arguments: [str4], expected: expected4 },
  ];

  it("should return whether or not the given string contains exactly 3 questions marks between every two ints that sum to 10.", () => {
    testCases.forEach(({ arguments, expected }) => {
      expect(questionMarks(...arguments))
        .withContext(argFormatter(questionMarks, arguments))
        .toEqual(expected);
    });
  });
});
