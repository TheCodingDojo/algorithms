const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const nums1 = [1, 13, 14, 15, 37, 38, 70];
    const expected1 = "1, 13-15, 37-38, 70";

    const nums2 = [5, 6, 7, 8, 9];
    const expected2 = "5-9";

    const nums3 = [1, 2, 3, 7, 9, 15, 16, 17];
    const expected3 = "1-3, 7, 9, 15-17";

    const testCases = [
      { args: [nums1], expected: expected1 },
      { args: [nums2], expected: expected2 },
      { args: [nums3], expected: expected3 },
    ];

    testCases.forEach(({ args, expected }, i) => {
      describe(`when given testCases[${i}]`, () => {
        it("should return a string formatted as comma separated pages and page ranges when needed.", () => {
          expect(testFn(...args)).toEqual(expected);
        });
      });
    });
  });
});
