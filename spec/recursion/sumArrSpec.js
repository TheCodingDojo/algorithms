const { sumArr } = require("../../recursion/sumArr");
const argFormatter = require("../helpers/argFormatter");

describe("sumArr", () => {
  const nums1 = [1, 2, 3];
  const expected1 = 6;

  const testCases = [{ args: [nums1], expected: expected1 }];

  it("should return the sum of the given array using recursion.", () =>
    testCases.forEach(({ args, expected }) =>
      expect(sumArr(...args))
        .withContext(argFormatter(sumArr, args))
        .toEqual(expected)
    ));
});
