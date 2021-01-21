const { findConsqSums } = require("../../arrays/findConsqSums");
const argFormatter = require("../helpers/argFormatter");

describe("findConsqSums", () => {
  const nums1 = [2, 5, 3, 6, 7, 23, 12];
  const sum1 = 16;
  const expected1 = [
    [2, 5, 3, 6],
    [3, 6, 7],
  ];

  // Bonus:
  const nums2 = [2, 5, 3, 6, 7, 0, 0, 23, 12];
  const sum2 = 16;
  const expected2 = [
    [2, 5, 3, 6],
    [3, 6, 7],
    [3, 6, 7, 0],
    [3, 6, 7, 0, 0],
  ];

  const testCases = [
    { arguments: [nums1, sum1], expected: expected1 },
    { arguments: [nums2, sum2], expected: expected2, type: "bonus" },
  ];

  it("should return all the sets of consecutive ints in the given array that add up to the given sum.", () =>
    testCases.forEach(({ arguments, expected, type }) =>
      expect(findConsqSums(...arguments))
        .withContext(
          argFormatter(
            findConsqSums,
            arguments,
            type === "bonus" ? "🧪 Bonus Challenge" : ""
          )
        )
        .toEqual(expected)
    ));
});
