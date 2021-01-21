const { binarySearch } = require("../../arrays/binarySearch");
const argFormatter = require("../helpers/argFormatter");

describe("binarySearch", () => {
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
    { arguments: [nums1, searchNum1], expected: expected1 },
    { arguments: [nums2, searchNum2], expected: expected2 },
    { arguments: [nums3, searchNum3], expected: expected3 },
  ];

  it("should return whether or not the given array contains the given int.", () =>
    testCases.forEach(({ arguments, expected }) =>
      expect(binarySearch(...arguments))
        .withContext(argFormatter(binarySearch, arguments))
        .toEqual(expected)
    ));
});
