const { twoSum } = require("../../arrays/twoSum");
const argFormatter = require("../helpers/argFormatter");

describe("twoSum", () => {
  const nums1 = [2, 11, 7, 15];
  const targetSum1 = 9;
  const expected1 = [0, 2];
  // Explanation: nums[0] + nums[1] = 2 + 7 = 9

  const testCases = [{ args: [nums1, targetSum1], expected: expected1 }];

  it("should find the two ints in the given array that add up to the given sum and return their indicies.", () =>
    testCases.forEach(({ args, expected }) =>
      expect(twoSum(...args))
        .withContext(argFormatter(twoSum, args))
        .toEqual(jasmine.arrayWithExactContents(expected))
    ));
});
