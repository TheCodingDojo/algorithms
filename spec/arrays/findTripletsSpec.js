const { findTriplets } = require("../../arrays/findTriplets");
const argFormatter = require("../helpers/argFormatter");

describe("findTriplets", () => {
  const nums1 = [0, -1, 2, -3, 1];
  const expected1 = true;

  const nums2 = [3, 1, 2, 6, 4];
  const expected2 = false;

  const nums3 = [5, -1, 3, 2, -4, 1, 6];
  const expected3 = true;

  const testCases = [
    { args: [nums1], expected: expected1 },
    { args: [nums2], expected: expected2 },
    { args: [nums3], expected: expected3 },
  ];

  it("should return whether or not there are 3 ints that add up to 0.", () =>
    testCases.forEach(({ args, expected }) =>
      expect(findTriplets(...args))
        .withContext(argFormatter(findTriplets, args))
        .toEqual(expected)
    ));
});
