const { twoSum } = require("../../arrays/twoSum");
const argFormatter = require("../helpers/argFormatter");

describe("twoSum", () => {
  const nums1 = [2, 11, 7, 15];
  const targetSum1 = 9;
  const expected1 = [0, 2];
  // Explanation: nums[0] + nums[1] = 2 + 7 = 9

  const testCases = [{ arguments: [nums1, targetSum1], expected: expected1 }];

  it("should find the two ints in the given array that add up to the given sum and return their indicies.", () =>
    testCases.forEach(({ arguments, expected }) =>
      expect(twoSum(...arguments))
        .withContext(argFormatter(twoSum, arguments))
        .toEqual(jasmine.arrayWithExactContents(expected))
    ));
});
