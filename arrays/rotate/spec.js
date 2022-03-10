const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const nums1 = [1, 2, 3, 4, 5, 6, 7];
    const k1 = 3;
    const expected1 = [5, 6, 7, 1, 2, 3, 4];
    /* Explanation:
    rotate 1 steps to the right: [7,1,2,3,4,5,6]
    rotate 2 steps to the right: [6,7,1,2,3,4,5]
    rotate 3 steps to the right: [5,6,7,1,2,3,4]
    */

    const nums2 = [-1, -100, 3, 99];
    const k2 = 2;
    const expected2 = [3, 99, -1, -100];
    /* Explanation:
    rotate 1 steps to the right: [99,-1,-100,3]
    rotate 2 steps to the right: [3,99,-1,-100]
    */

    const nums3 = [1, 2, 3, 4];
    const k3 = 4;
    const expected3 = [1, 2, 3, 4];
    /* Explanation: 
    After 4 rotations it is back to it's starting point.
    */

    const nums4 = [1, 2];
    const k4 = 5;
    const expected4 = [2, 1];
    /* 
    Explanation: After 2 rotations the array is back to it's original order.
    After 4 rotations it is back to it's original order again.
    1 more rotation makes 5.
    */

    const testCases = [
      {
        args: [nums1, k1],
        expected: expected1,
      },
      {
        args: [nums2, k2],
        expected: expected2,
      },
      {
        args: [nums3, k3],
        expected: expected3,
      },
      {
        args: [nums4, k4],
        expected: expected4,
      },
    ];

    testCases.forEach(({ args: [inputArr, rotateAmnt], expected }) => {
      const description = `a ${inputArr.length} lengthed array and rotate amount of ${rotateAmnt}`;
      describe("when given " + description, () => {
        const actual = testFn(inputArr, rotateAmnt);

        it("should mutate the given array so that it becomes rotated (wrapped around) to the right by the given amount.", () => {
          expect(actual).toEqual(expected);
        });

        it("should have returned the given array.", () => {
          expect(actual).toBe(inputArr);
        });
      });
    });
  });
});
