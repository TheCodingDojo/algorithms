const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const nums1 = [3, 5, 4, 3, 4, 6, 5];
    const expected1 = 6;

    const nums2 = [3, 5, 5];
    const expected2 = 3;

    const nums3 = [3, 3, 5];
    const expected3 = 5;

    const nums4 = [5];
    const expected4 = 5;

    const nums5 = [];
    const expected5 = null;

    const testCases = [
      {
        args: [nums1],
        expected: expected1,
        description: "first unique near the end",
      },
      {
        args: [nums2],
        expected: expected2,
        description: "first unique at the start",
      },
      {
        args: [nums3],
        expected: expected3,
        description: "first unique at the end",
      },
      { args: [nums4], expected: expected4, description: "one number only" },
      { args: [nums5], expected: expected5, description: "an empty array" },
    ];

    testCases.forEach(({ args, expected, description }) => {
      describe("when given " + description, () => {
        it("should return the integer that appears earliest that has no duplicate anywhere else in the array.", () => {
          expect(testFn(...args)).toEqual(expected);
        });
      });
    });
  });
});
