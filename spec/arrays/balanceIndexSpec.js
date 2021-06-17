const { balanceIndex } = require("../../arrays/balanceIndex");
const argFormatter = require("../helpers/argFormatter");

describe("balanceIndex", () => {
  const nums1 = [-2, 5, 7, 0, 3];
  const expected1 = 2;

  const nums2 = [9, 9];
  const expected2 = -1;

  const testCases = [
    { args: [nums1], expected: expected1 },
    { args: [nums2], expected: expected2 },
  ];

  it("should return the index at the sum to the left and the right of the index in the given array are equal, or -1 if there is none.", () =>
    testCases.forEach(({ args, expected }) =>
      expect(balanceIndex(...args))
        .withContext(argFormatter(balanceIndex, args))
        .toEqual(expected)
    ));
});
