const funcs = Object.values(require("../../sorts/partition"));
const argFormatter = require("../helpers/argFormatter");

for (const func of funcs) {
  describe(func.name, () => {
    const nums1 = [11, 8, 14, 3, 6, 2, 7];
    const nums2 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
    const nums3 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
    const nums4 = [2, 1];

    [nums1, nums2, nums3, nums4].forEach((nums) => {
      const numsCopy = [...nums];
      const pivotIdx = Math.floor(nums.length / 2);
      const pivot = nums[pivotIdx];
      func(nums, 0, nums.length - 1);
      let seenPivot = false;

      nums.forEach((n, i) => {
        it("should partition the given array in place around the pivot num at the middle idx such that all nums smaller or equal to the pivot are to it's left and all nums larger are to it's right.", () => {
          if (!seenPivot && n === pivot) {
            seenPivot = true;
          }

          if (seenPivot) {
            expect(n >= pivot)
              .withContext(
                `${n} should not be to the right of the pivot ${pivot}.\nGiven nums:       ${JSON.stringify(
                  numsCopy
                )}\nNums Partitioned: ${JSON.stringify(nums)}`
              )
              .toBe(true);
          } else {
            expect(n < pivot)
              .withContext(
                `${n} should not be to the left of the pivot ${pivot}.\nGiven nums:       ${JSON.stringify(
                  numsCopy
                )}\nNums Partitioned: ${JSON.stringify(nums)}`
              )
              .toBe(true);
          }
        });
      });
    });
  });
}
