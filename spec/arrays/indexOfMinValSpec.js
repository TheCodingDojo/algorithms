const { indexOfMinVal } = require("../../arrays/indexOfMinVal");
const argFormatter = require("../helpers/argFormatter");

describe("indexOfMinVal", () => {
  const nums1 = [5, 2, 3];
  const expected1 = 1;

  const nums2 = [5, 2, 2, 3];
  const expected2 = 1;

  const nums3 = [];
  const expected3 = -1;

  const testCases = [
    { arguments: [nums1], expected: expected1 },
    { arguments: [nums2], expected: expected2 },
    { arguments: [nums3], expected: expected3 },
  ];

  testCases.forEach(({ arguments, expected }) => {
    it(`should return the index of the minimum value from the given array.`, () => {
      expect(indexOfMinVal(...arguments))
        .withContext(argFormatter(indexOfMinVal, arguments))
        .toBe(expected);
    });
  });
});
