const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const nums1 = [2, 11, 7, 15];
    const targetSum1 = 9;
    const expected1 = [0, 2];
    // Explanation: nums[0] + nums[2] = 2 + 7 = 9

    const nums2 = [10, 3, 2, 5, 4, -1];
    const targetSum2 = 6;
    const expected2 = [2, 4];

    const nums3 = [3, 8, 4, 1, 9, 0, -2];
    const targetSum3 = 6;
    const expected3 = [1, 6];

    const nums4 = [3, 8, 4, 1, 9, 0, -2];
    const targetSum4 = 8;
    const expected4 = [1, 5];

    const testCases = [
      {
        args: [nums1, targetSum1],
        expected: expected1,
        description: "an array with the first number as part of the solution",
      },
      {
        args: [nums2, targetSum2],
        expected: expected2,
        description:
          "an array where the solution numbers are separated by one index",
      },
      {
        args: [nums3, targetSum3],
        expected: expected3,
        description:
          "an array where a negative number at the end is part of the solution",
      },
      {
        args: [nums4, targetSum4],
        expected: expected4,
        description: "an array where 0 is part of the solution",
      },
    ];

    testCases.forEach(({ args, expected, description }) => {
      describe("when given " + description, () => {
        it("should find the two ints in the given array that add up to the given sum and return their indexes.", () => {
          expect(testFn(...args)).toEqual(
            jasmine.arrayWithExactContents(expected)
          );
        });
      });
    });
  });
});
