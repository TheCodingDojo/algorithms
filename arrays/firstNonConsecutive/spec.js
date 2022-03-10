const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const nums1 = [];
    const expected1 = null;

    const nums2 = [1, 2, 3, 4, 6, 7, 8];
    const expected2 = 6;

    const nums3 = [1, 4, 5, 6];
    const expected3 = 4;

    const testCases = [
      {
        args: [nums1],
        expected: expected1,
        description: "an empty array",
      },
      {
        args: [nums2],
        expected: expected2,
        description: "a non consecutive number near the middle",
      },
      {
        args: [nums3],
        expected: expected3,
        description: "a non consecutive number near the start",
      },
    ];

    testCases.forEach(({ args, expected, description }) => {
      describe("when given " + description, () => {
        it("should return the first number that is not exactly 1 larger than the previous.", () => {
          expect(testFn(...args)).toEqual(expected);
        });
      });
    });
  });
});
