const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const nums1 = [1, 2, 3, 4, 10];
    const expected1 = true;
    // Explanation: between indices 3 & 4

    const nums2 = [1, 2, 4, 2, 1];
    const expected2 = false;

    const testCases = [
      {
        args: [nums1],
        expected: expected1,
        description: "array where last number is the sum of the rest",
      },
      { args: [nums2], expected: expected2, description: "unbalanced array" },
    ];

    testCases.forEach(({ args, expected, description }) => {
      describe("when given " + description, () => {
        it("should return whether there exists a point between indexes where the sum to the left and the right are equal.", () => {
          expect(testFn(...args)).toEqual(expected);
        });
      });
    });
  });
});
