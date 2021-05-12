const { dedupeSorted } = require("../../arrays/dedupeSorted");
const argFormatter = require("../helpers/argFormatter");

describe("dedupeSorted", () => {
  const nums1 = [1, 1, 1, 1];
  const expected1 = [1];

  const nums2 = [1, 1, 2, 2, 3, 3];
  const expected2 = [1, 2, 3];

  const nums3 = [1, 1, 2, 3, 3, 4];
  const expected3 = [1, 2, 3, 4];

  const nums4 = [1,1];
  const expected4 = [1];

  const testCases = [
    { arguments: [nums1], expected: expected1 },
    { arguments: [nums2], expected: expected2 },
    { arguments: [nums3], expected: expected3 },
    { arguments: [nums4], expected: expected4 },
  ];

  it("should return a new array with duplicate values removed.", () =>
    testCases.forEach(({ arguments, expected }) =>
      expect(dedupeSorted(...arguments))
        .withContext(argFormatter(dedupeSorted, arguments))
        .toEqual(expected)
    ));
});
