const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const nums1 = [1, 2, 3];
    const expected1 = 6;

    const nums2 = [1];
    const expected2 = 1;

    const nums3 = [];
    const expected3 = 0;

    const testCases = [
      { arg: nums1, expected: expected1 },
      { arg: nums2, expected: expected2 },
      { arg: nums3, expected: expected3 },
    ];

    testCases.forEach(({ arg, expected }, i) => {
      describe(`when given an array of ${arg.length} items`, () => {
        it("should return the sum of the given array using recursion.", () => {
          expect(testFn(arg)).toEqual(expected);
        });
      });
    });
  });
});
