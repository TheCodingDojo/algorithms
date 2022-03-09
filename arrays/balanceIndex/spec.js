const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const nums1 = [-2, 5, 7, 0, 3];
    const expected1 = 2;

    const nums2 = [9, 9];
    const expected2 = -1;

    const testCases = [
      {
        args: [nums1],
        expected: expected1,
        description: "middle balanced array",
      },
      { args: [nums2], expected: expected2, description: "unbalanced array" },
    ];

    testCases.forEach(({ args, expected, description }) => {
      describe("when given " + description, () => {
        it("should return the index where the sum to the left and the right of the index are equal, or -1.", () => {
          expect(testFn(...args)).toEqual(expected);
        });
      });
    });
  });
});
