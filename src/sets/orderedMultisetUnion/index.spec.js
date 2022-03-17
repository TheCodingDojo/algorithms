const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const nums1A = [1, 2, 2, 2, 7];
    const nums1B = [2, 2, 6, 6, 7];
    const expected1 = [1, 2, 2, 2, 6, 6, 7];

    const nums2A = [1, 1, 2, 2, 2, 3, 7, 10, 20, 30];
    const nums2B = [2, 6, 6, 7];
    const expected2 = [1, 1, 2, 2, 2, 3, 6, 6, 7, 10, 20, 30];

    const nums3A = [];
    const nums3B = [2, 2, 3, 3, 3];
    const expected3 = [2, 2, 3, 3, 3];

    const nums4A = [2, 2, 3, 3, 3];
    const nums4B = [];
    const expected4 = [2, 2, 3, 3, 3];

    const nums5A = [];
    const nums5B = [];
    const expected5 = [];

    const testCases = [
      {
        args: [nums1A, nums1B],
        expected: expected1,
        description: "two same lengthed arrays",
      },
      {
        args: [nums2A, nums2B],
        expected: expected2,
        description: "two different lengthed arrays",
      },
      {
        args: [nums3A, nums3B],
        expected: expected3,
        description: "a first array that is empty",
      },
      {
        args: [nums4A, nums4B],
        expected: expected4,
        description: "a second array that is empty",
      },
      {
        args: [nums5A, nums5B],
        expected: expected5,
        description: "two empty arrays",
      },
    ];

    testCases.forEach(({ args: [numsA, numsB], expected, description }) => {
      describe("when given " + description, () => {
        const copyOfNumsA = [...numsA];
        const copyOfNumsB = [...numsB];
        const actual = testFn(numsA, numsB);

        it("should return the ordered multiset union of the two given sorted arrays of integers.", () => {
          expect(actual).toEqual(expected);
        });

        it("should not mutate the first given array", () => {
          expect(numsA).toEqual(copyOfNumsA);
        });

        it("should not mutate the second given array", () => {
          expect(numsB).toEqual(copyOfNumsB);
        });
      });
    });
  });
});
