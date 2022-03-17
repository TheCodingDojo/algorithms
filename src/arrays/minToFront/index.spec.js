const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const nums1 = [1, 5, 2, 9];
    const expected1 = [1, 5, 2, 9];

    const nums2 = [5, 1, 0, 2, 3, 0];
    const expected2 = [0, 5, 1, 2, 3, 0];

    const testCases = [
      {
        args: [nums1],
        expected: expected1,
        description: "the minimum at the front",
      },
      {
        args: [nums2],
        expected: expected2,
        description: "the minimum near the front and at the end",
      },
    ];

    testCases.forEach(({ args, expected, description }) => {
      describe("when given " + description, () => {
        const ret = testFn(...args);

        it("should move the min value in the given array to the front and return the given array.", () => {
          expect(ret).toEqual(expected);
        });

        it("should return the given array, not a new array.", () => {
          expect(ret).toBe(args[0]);
        });
      });
    });
  });
});
