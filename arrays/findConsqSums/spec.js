const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const nums1 = [2, 5, 3, 6, 7, 23, 12];
    const sum1 = 16;
    const expected1 = [
      [2, 5, 3, 6],
      [3, 6, 7],
    ];

    const nums2 = [];
    const sum2 = 5;
    const expected2 = [];

    const nums3 = [10, 15, 20, 35, 30];
    const sum3 = 5;
    const expected3 = [];

    // Bonus:
    const nums4 = [2, 5, 3, 6, 7, 0, 0, 23, 12];
    const sum4 = 16;
    const expected4 = [
      [2, 5, 3, 6],
      [3, 6, 7],
      [3, 6, 7, 0],
      [3, 6, 7, 0, 0],
    ];

    // Bonus:
    const nums5 = [-2, -5, -3, -6, -7, -0, -0, -23, -12];
    const sum5 = -16;
    const expected5 = [
      [-2, -5, -3, -6],
      [-3, -6, -7],
      [-3, -6, -7, -0],
      [-3, -6, -7, -0, -0],
    ];

    const testCases = [
      {
        args: [nums1, sum1],
        expected: expected1,
        description: "slightly overlapping sets that sum to the target",
      },
      {
        args: [nums2, sum2],
        expected: expected2,
        description: "an empty array",
      },
      {
        args: [nums3, sum3],
        expected: expected3,
        description: "all values larger than the target sum",
      },
      {
        args: [nums4, sum4],
        expected: expected4,
        description:
          "slightly overlapping solutions and multiple zeros in a row",
      },
      {
        args: [nums5, sum5],
        expected: expected5,
        description:
          "all negatives with slightly overlapping solutions and multiple zeros in a row",
      },
    ];

    testCases.forEach(({ args, expected, description }) => {
      describe("when given " + description, () => {
        it("should return all the sets of consecutive ints in the given array that add up to the given sum.", () => {
          expect(testFn(...args)).toEqual(expected);
        });
      });
    });
  });
});
