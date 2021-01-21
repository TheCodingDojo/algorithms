const {
  backspaceStringCompare,
} = require("../../strings/backspaceStringCompare");
const argFormatter = require("../helpers/argFormatter");

describe("backspaceStringCompare", () => {
  const S1 = "ab#c";
  const T1 = "ad#c";
  const expected1 = true;
  // Explanation: Both S and T become "ac"

  const S2 = "ab##";
  const T2 = "c#d#";
  const expected2 = true;
  // Explanation: Both S and T become ""

  const S3 = "a##c";
  const T3 = "#a#c";
  const expected3 = true;
  // Explanation: Both S and T become "c"

  const S4 = "a#c";
  const T4 = "b";
  const expected4 = false;
  // Explanation: S becomes "c" while T becomes "b".

  const testCases = [
    { arguments: [S1, T1], expected: expected1 },
    { arguments: [S2, T2], expected: expected2 },
    { arguments: [S3, T3], expected: expected3 },
    { arguments: [S4, T4], expected: expected4 },
  ];

  it("should return whether or not the strings are equal after processing the backspaces.", () => {
    testCases.forEach(({ arguments, expected }) => {
      expect(backspaceStringCompare(...arguments))
        .withContext(argFormatter(backspaceStringCompare, arguments))
        .toEqual(expected);
    });
  });
});
