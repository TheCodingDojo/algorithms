const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const nums1 = [3, 0, 1];
    const expected1 = 2;

    const nums2 = [3, 0, 1, 2];
    const expected2 = null;
    // Explanation: nothing is missing

    /* 
      Bonus: now the lowest value can now be any integer (including negatives),
      instead of always being 0. 
    */

    const nums3 = [2, -4, 0, -3, -2, 1];
    const expected3 = -1;

    const nums4 = [5, 2, 7, 8, 4, 9, 3];
    const expected4 = 6;

    const testCases = [
      {
        args: [nums1],
        expected: expected1,
        description: "an unordered sequence 0-3",
      },
      { args: [nums2], expected: expected2, description: "no missing value" },
      {
        args: [nums3],
        expected: expected3,
        description: "a BONUS with the sequence -4-2",
      },
      {
        args: [nums4],
        expected: expected4,
        description: "a BONUS with the sequence 2-9",
      },
    ];

    testCases.forEach(({ args, expected, description }) => {
      describe("when given " + description, () => {
        it("should return the missing value from an array containing a consecutive sequence of ints that is unordered but with one missing.", () => {
          expect(testFn(...args)).toEqual(expected);
        });
      });
    });
  });
});
