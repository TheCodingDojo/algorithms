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

    // 6 occurs 6 times, 3 occurs 3 times, 2 occurs 2 times, 1 occurs 1 time.
    const nums3 = [1, 6, 3, 3, 6, 6, 3, 6, 2, 2, 6, 6];
    const k3 = 3;
    const expected3 = [6, 3, 2];

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
