const { quickSort } = require("../../sorts/quickSort");
const argFormatter = require("../helpers/argFormatter");

describe("quickSort", () => {
  const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
  const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const nums1 = [11, 8, 14, 3, 6, 2, 7];
  const expected1 = [2, 3, 6, 7, 8, 11, 14];

  const nums2 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
  const expected2 = [1, 3, 4, 9, 12, 13, 17, 21, 27];

  const testCases = [
    { arguments: [numsOrdered], expected: expected },
    { arguments: [numsRandomOrder], expected: expected },
    { arguments: [numsReversed], expected: expected },
    { arguments: [nums1], expected: expected1 },
    { arguments: [nums2], expected: expected2 },
  ];

  testCases.forEach(({ arguments, expected }) => {
    const ret = quickSort(...arguments);

    it("should return and sort the given array in ascending order.", () => {
      expect(ret)
        .withContext(argFormatter(quickSort, arguments))
        .toEqual(expected);
    });

    it("should have returned the given array, not a new array.", () => {
      expect(ret).toBe(arguments[0]);
    });
  });
});
