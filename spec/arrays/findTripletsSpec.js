const { findTriplets } = require("../../arrays/findTriplets");
const argFormatter = require("../helpers/argFormatter");

describe("findTriplets", () => {
  const nums1 = [0, -1, 2, -3, 1];
  const expected1 = true;
  
  const nums2 = [1, 2, 3];
  const expected2 = false;

  const testCases = [
    { arguments: [nums1], expected: expected1 },
    { arguments: [nums2], expected: expected2 },
  ];

  it("should return whether or not there are 3 ints that add up to 0.", () =>
    testCases.forEach(({ arguments, expected }) =>
      expect(findTriplets(...arguments))
        .withContext(argFormatter(findTriplets, arguments))
        .toEqual(expected)
    ));
});
