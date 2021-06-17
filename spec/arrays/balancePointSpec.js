const { balancePoint } = require("../../arrays/balancePoint");
const argFormatter = require("../helpers/argFormatter");

describe("balancePoint", () => {
  const nums1 = [1, 2, 3, 4, 10];
  const expected1 = true;
  // Explanation: between indices 3 & 4

  const nums2 = [1, 2, 4, 2, 1];
  const expected2 = false;

  const testCases = [
    { args: [nums1], expected: expected1 },
    { args: [nums2], expected: expected2 },
  ];

  it("should return whether or not the given array of ints has a balance point between indicies where the sum is equal on the left and the right side.", () =>
    testCases.forEach(({ args, expected }) =>
      expect(balancePoint(...args))
        .withContext(argFormatter(balancePoint, args))
        .toEqual(expected)
    ));
});
