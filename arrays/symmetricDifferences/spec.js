const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const nums1 = [1, 5, -1, 2, -4, 9, -10, 0, -3, -2];
    const expected1 = 3;

    const nums2 = [];
    const expected2 = 0;

    const nums3 = [-4, -2, -6];
    const expected3 = 3;

    const testCases = [
      {
        args: [nums1],
        expected: expected1,
        description: "an unordered mixture",
      },
      {
        args: [nums2],
        expected: expected2,
        description: "an empty array",
      },
      {
        args: [nums3],
        expected: expected3,
        description: "all negative evens",
      },
    ];

    testCases.forEach(({ args, expected, description }) => {
      describe("when given " + description, () => {
        it("should return a count of how many numbers are both negative and even.", () => {
          expect(testFn(...args)).toEqual(expected);
        });
      });
    });
  });
});
