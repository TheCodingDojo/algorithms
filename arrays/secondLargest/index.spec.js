const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    // 2nd largest is 2nd
    const nums1 = [2, 3, 1, 4];
    const expected1 = 3;

    // largest is first
    const nums2 = [4, 1, 3, 2];
    const expected2 = 3;

    // largest duplicated first
    const nums3 = [4, 4, 4, 1, 3, 2];
    const expected3 = 3;

    // 2nd largest is first
    const nums4 = [3, 1, 4, 2];
    const expected4 = 3;

    // largest is 2nd
    const nums5 = [3, 4, 2, 1];
    const expected5 = 3;

    const nums6 = [3, 3];
    const expected6 = null;

    const nums7 = [2];
    const expected7 = null;

    const nums8 = [];
    const expected8 = null;

    const testCases = [
      {
        args: [nums1],
        expected: expected1,
        description: "the largest at the end and second largest near the start",
      },
      {
        args: [nums2],
        expected: expected2,
        description: "the largest at the start and second largest a few later",
      },
      {
        args: [nums3],
        expected: expected3,
        description:
          "the largest duplicated at the start and the second largest near the end",
      },
      {
        args: [nums4],
        expected: expected4,
        description: "the second largest first",
      },
      {
        args: [nums5],
        expected: expected5,
        description: "the second largest is first and the largest is second",
      },
      {
        args: [nums6],
        expected: expected6,
        description: "two of the same number",
      },
      { args: [nums7], expected: expected7, description: "one number only" },
      { args: [nums8], expected: expected8, description: "an empty array" },
    ];

    testCases.forEach(({ args, expected, description }) => {
      describe("when given " + description, () => {
        it("should return the second largest value from the given array, or null if it doesn't exist.", () => {
          expect(testFn(...args)).toEqual(expected);
        });
      });
    });
  });
});
