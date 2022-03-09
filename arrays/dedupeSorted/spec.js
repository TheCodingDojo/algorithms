const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const nums1 = [1, 1, 1, 1];
    const expected1 = [1];

    const nums2 = [1, 1, 2, 2, 3, 3];
    const expected2 = [1, 2, 3];

    const nums3 = [1, 1, 2, 3, 3, 4];
    const expected3 = [1, 2, 3, 4];

    const nums4 = [1, 1];
    const expected4 = [1];

    const testCases = [
      { args: [nums1], expected: expected1, description: "four ones" },
      {
        args: [nums2],
        expected: expected2,
        description: "1-3 with two of each",
      },
      {
        args: [nums3],
        expected: expected3,
        description: "1-4 with some dupes",
      },
      {
        args: [nums4],
        expected: expected4,
        description: "two of the same number",
      },
    ];

    testCases.forEach(({ args, expected, description }) => {
      describe("when given " + description, () => {
        it("should return an array with duplicate values removed.", () => {
          expect(testFn(...args)).toEqual(expected);
        });
      });
    });
  });
});
