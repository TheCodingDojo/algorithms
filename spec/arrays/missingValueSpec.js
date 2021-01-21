const { missingValue } = require("../../arrays/missingValue");
const argFormatter = require("../helpers/argFormatter");

describe("missingValue", () => {
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
    { arguments: [nums1], expected: expected1 },
    { arguments: [nums2], expected: expected2 },
    { arguments: [nums3], expected: expected3, type: "bonus" },
    { arguments: [nums4], expected: expected4, type: "bonus" },
  ];

  it("should return the missing value from an unordered array that contains a sequence of ints with one missing.", () =>
    testCases.forEach(({ arguments, expected, type }) =>
      expect(missingValue(...arguments))
        .withContext(
          argFormatter(
            missingValue,
            arguments,
            type === "bonus" ? "🧪 Bonus Challenge" : ""
          )
        )
        .toEqual(expected)
    ));
});
