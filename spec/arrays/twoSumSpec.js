const funcs = Object.values(require("../../arrays/twoSum"));
const argFormatter = require("../helpers/argFormatter");

for (const func of funcs) {
  describe(func.name, () => {
    const nums1 = [2, 11, 7, 15];
    const targetSum1 = 9;
    const expected1 = [0, 2];
    // Explanation: nums[0] + nums[1] = 2 + 7 = 9

    const nums2 = [10, 3, 2, 5, 4, -1];
    const targetSum2 = 6;
    const expected2 = [2, 4];

    const nums3 = [3, 8, 4, 1, 9, -2, 0];
    const targetSum3 = 6;
    const expected3 = [1, 5];

    const testCases = [
      [[nums1, targetSum1], expected1],
      [[nums2, targetSum2], expected2],
      [[nums3, targetSum3], expected3],
    ];

    it("should find the two ints in the given array that add up to the given sum and return their indexes.", () =>
      testCases.forEach(([args, expected]) =>
        expect(func(...args))
          .withContext(argFormatter(func, args))
          .toEqual(jasmine.arrayWithExactContents(expected))
      ));
  });
}
