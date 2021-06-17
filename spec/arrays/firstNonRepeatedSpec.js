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
    { args: [nums1], expected: expected1 },
    { args: [nums2], expected: expected2 },
    { args: [nums3], expected: expected3 },
    { args: [nums4], expected: expected4 },
    { args: [nums5], expected: expected5 },
  ];

  it("should return the integer that appears earliest that has no duplicate anywhere else in the array.", () =>
    testCases.forEach(({ args, expected }) =>
      expect(firstNonRepeated(...args))
        .withContext(argFormatter(firstNonRepeated, args))
        .toEqual(expected)
    ));
});
