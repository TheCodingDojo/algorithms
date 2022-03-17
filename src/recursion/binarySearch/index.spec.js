const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const nums1 = [1, 3, 5, 6];
    const searchNum1 = 4;
    const expected1 = false;

    const nums2 = [4, 5, 6, 8, 12];
    const searchNum2 = 5;
    const expected2 = true;

    const nums3 = [3, 4, 6, 8, 12];
    const searchNum3 = 3;
    const expected3 = true;

    const testCases = [
      { args: [nums1, searchNum1], expected: expected1 },
      { args: [nums2, searchNum2], expected: expected2 },
      { args: [nums3, searchNum3], expected: expected3 },
    ];

    testCases.forEach(({ args, expected }, i) => {
      describe(`when given testCases[${i}]`, () => {
        it("should return whether or not the given array contains the given int.", () => {
          expect(testFn(...args)).toEqual(expected);
        });
      });
    });
  });
});
