const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const nums1 = [2, 1, 1, 3, 1, 2];
    const k1 = 2;
    const expected1 = [1, 2];
    // Explanation: return the two most frequent elements, 1 and 2 are the two most frequent elements

    const nums2 = [0, 2, 0, 3, 2, 0];
    const k2 = 1;
    const expected2 = [0];
    // Explanation: k being 1 means return the single most frequent element

    const nums3 = [3, 1, 1, 2, 1, 2, 3];
    const k3 = 3;
    const expected3 = [1, 2, 3];
    /* 
      Explanation: 3 is the only value that would be passed in for k because it is the only value for k that has
      a valid solution. Since 1, 2, and 3, all occur 3 times, they are all the most frequent ints, so there is no
      1 most frequent int, or 2 most frequent int, but there are 3 most frequent ints. 
    */

    const testCases = [
      {
        args: [nums1, k1],
        expected: expected1,
        description: `an array of 3 numbers with each duplicated a few times and k=${k1}`,
      },
      {
        args: [nums2, k2],
        expected: expected2,
        description: `an array of 3 numbers with one that occurs more than the rest and k=${k2}`,
      },
      {
        args: [nums3, k3],
        expected: expected3,
        description: `an array of 3 numbers each duplicated and k=${k3}`,
      },
    ];

    testCases.forEach(({ args, expected, description }) => {
      describe("when given " + description, () => {
        it("should return the k most frequently occurring integers from the array in any order.", () => {
          expect(testFn(...args)).toEqual(
            jasmine.arrayWithExactContents(expected)
          );
        });
      });
    });
  });
});
