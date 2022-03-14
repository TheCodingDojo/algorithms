const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const nums1 = [5, 2, 3];
    const expected1 = 1;

    const nums2 = [5, 2, 2, 3];
    const expected2 = 1;

    const nums3 = [];
    const expected3 = -1;

    const nums4 = [5, 15, 11, 20];
    const expected4 = 0;

    const nums5 = [15, 11, 20, 5];
    const expected5 = 3;

    const testCases = [
      {
        args: [nums1],
        expected: expected1,
        description: "a small array with the min centered",
      },
      {
        args: [nums2],
        expected: expected2,
        description: "a small array with the minimum duplicated",
      },
      { args: [nums3], expected: expected3, description: "an empty array" },
      {
        args: [nums4],
        expected: expected4,
        description: "the min at the front",
      },
      { args: [nums5], expected: expected5, description: "the min at the end" },
    ];

    testCases.forEach(({ args, expected, description }) => {
      describe("when given " + description, () => {
        it("should return the index of the minimum value from the given array.", () => {
          expect(testFn(...args)).toEqual(expected);
        });
      });
    });
  });
});
