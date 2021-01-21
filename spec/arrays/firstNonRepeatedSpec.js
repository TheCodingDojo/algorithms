const { firstNonRepeated } = require("../../arrays/firstNonRepeated");
const argFormatter = require("../helpers/argFormatter");

describe("firstNonRepeated", () => {
  const nums1 = [3, 5, 4, 3, 4, 6, 5];
  const expected1 = 6;

  const nums2 = [3, 5, 5];
  const expected2 = 3;

  const nums3 = [3, 3, 5];
  const expected3 = 5;

  const nums4 = [5];
  const expected4 = 5;

  const nums5 = [];
  const expected5 = null;

  const testCases = [
    { arguments: [nums1], expected: expected1 },
    { arguments: [nums2], expected: expected2 },
    { arguments: [nums3], expected: expected3 },
    { arguments: [nums4], expected: expected4 },
    { arguments: [nums5], expected: expected5 },
  ];

  it("should return the integer that appears earliest that has no duplicate anywhere else in the array.", () =>
    testCases.forEach(({ arguments, expected }) =>
      expect(firstNonRepeated(...arguments))
        .withContext(argFormatter(firstNonRepeated, arguments))
        .toEqual(expected)
    ));
});
