const { symmetricDifferences } = require("../../arrays/symmetricDifferences");
const argFormatter = require("../helpers/argFormatter");

describe("symmetricDifferences", () => {
  const test1SetA = [1, 2];
  const test1SetB = [2, 1];
  const expected1 = [];
  // Explanation: 1 and 2 are in both arrays so are excluded

  const test2SetA = [1, 2, 3];
  const test2SetB = [4, 5, 6];
  const expected2 = [1, 2, 3, 4, 5, 6];
  // Explanation: neither array has shared values, so all are included

  const test3SetA = [4, 1, 2, 3, 4];
  const test3SetB = [1, 2, 3, 5, 5];
  const expected3 = [4, 5];
  /* 
    Explanation: 1, 2, and 3 are shared so are excluded
      4 and 5 are included because they exist only in 1 array, but have duplicates, so only one copy of each is kept
  */

  const testCases = [
    { args: [test1SetA, test1SetB], expected: expected1 },
    { args: [test2SetA, test2SetB], expected: expected2 },
    { args: [test3SetA, test3SetB], expected: expected3 },
  ];

  it("should return the symmetric differences (disjunctive union) of the two given unordered multisets.", () =>
    testCases.forEach(({ args, expected }) =>
      expect(symmetricDifferences(...args))
        .withContext(argFormatter(symmetricDifferences, args))
        .toEqual(expected)
    ));
});
