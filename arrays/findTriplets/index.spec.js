const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const nums1 = [0, -1, 2, -3, 1];
    const expected1 = true;

    const nums2 = [3, 1, 2, 6, 4];
    const expected2 = false;

    const nums3 = [5, -1, 3, 2, -4, 1, 6];
    const expected3 = true;

    const testCases = [
      {
        args: [nums1],
        expected: expected1,
        description: "a mix of positives, negatives, and zero",
      },
      {
        args: [nums2],
        expected: expected2,
        description: "all positive numbers",
      },
      {
        args: [nums3],
        expected: expected3,
        description: "a mix of positive and negative numbers",
      },
    ];

    testCases.forEach(({ args, expected, description }) => {
      describe("when given " + description, () => {
        it("should return whether or not there are 3 ints that add up to 0.", () => {
          expect(testFn(...args)).toEqual(expected);
        });
      });
    });
  });
});
