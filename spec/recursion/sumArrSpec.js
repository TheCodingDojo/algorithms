const { sumArr } = require("../../recursion/sumArr");
const argFormatter = require("../helpers/argFormatter");

describe("sumArr", () => {
  const nums1 = [1, 2, 3];
  const expected1 = 6;

  const testCases = [{ arguments: [nums1], expected: expected1 }];

  it("should return the sum of the given array using recursion.", () =>
    testCases.forEach(({ arguments, expected }) =>
      expect(sumArr(...arguments))
        .withContext(argFormatter(sumArr, arguments))
        .toEqual(expected)
    ));
});
