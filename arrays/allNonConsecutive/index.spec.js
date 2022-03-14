const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const nums1 = [1, 2, 3, 4, 6, 7, 8, 10];
    const expected1 = [
      { i: 4, n: 6 },
      { i: 7, n: 10 },
    ];

    const nums2 = [];
    const expected2 = [];

    const nums3 = [1, 3, 7, 9];
    const expected3 = [
      { i: 1, n: 3 },
      { i: 2, n: 7 },
      { i: 3, n: 9 },
    ];

    const testCases = [
      {
        args: [nums1],
        expected: expected1,
        description: "non-consecutive one through ten",
      },
      {
        args: [nums2],
        expected: expected2,
        description: "an empty array",
      },
      {
        args: [nums3],
        expected: expected3,
        description: "all odds",
      },
    ];

    testCases.forEach(({ args, expected, description }) => {
      describe("when given " + description, () => {
        it("should return all the non consecutive ints in the given sorted array of ints.", () =>
          expect(testFn(...args)).toEqual(expected));
      });
    });
  });
});
