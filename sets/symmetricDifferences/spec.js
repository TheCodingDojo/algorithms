const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const setA1 = [1, 2];
    const setB1 = [2, 1];
    const expected1 = [];
    // Explanation: 1 and 2 are in both arrays so are excluded

    const setA2 = [1, 2, 3];
    const setB2 = [4, 5, 6];
    const expected2 = [1, 2, 3, 4, 5, 6];
    // Explanation: neither array has shared values, so all are included

    const setA3 = [4, 1, 2, 3, 4];
    const setB3 = [1, 2, 3, 5, 5];
    const expected3 = [4, 5];
    /* 
      Explanation: 1, 2, and 3 are shared so are excluded
        4 and 5 are included because they exist only in 1 array, but have duplicates, so only one copy of each is kept
    */

    const setA4 = [];
    const setB4 = [];
    const expected4 = [];

    const setA5 = [];
    const setB5 = [1, 2, 3];
    const expected5 = [1, 2, 3];

    const testCases = [
      {
        args: [setA1, setB1],
        expected: expected1,
        description:
          "two arrays of length two with the same numbers but in opposite order",
      },
      {
        args: [setA2, setB2],
        expected: expected2,
        description: "two arrays with no shared numbers",
      },
      {
        args: [setA3, setB3],
        expected: expected3,
        description:
          "two arrays where the the only non-shared numbers are duplicates",
      },
      {
        args: [setA4, setB4],
        expected: expected4,
        description: "two empty arrays",
      },
      {
        args: [setA5, setB5],
        expected: expected5,
        description: "an empty first array",
      },
    ];

    testCases.forEach(({ args, expected, description }) => {
      describe("when given " + description, () => {
        it("should return the symmetric differences (disjunctive union) of the two given unordered multisets.", () => {
          expect(testFn(...args)).toEqual(expected);
        });
      });
    });
  });
});
