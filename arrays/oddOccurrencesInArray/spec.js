const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const nums1 = [1];
    const expected1 = 1;

    const nums2 = [5, 4, 5];
    const expected2 = 4;

    const nums3 = [5, 4, 3, 4, 3, 4, 5];
    const expected3 = 4; // there is a pair of 4s but one 4 has no pair.

    const nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
    const expected4 = 1;

    const testCases = [
      {
        args: [nums1],
        expected: expected1,
        description: "an array with a length of one",
      },
      {
        args: [nums2],
        expected: expected2,
        description: "three numbers with one duplicated",
      },
      {
        args: [nums3],
        expected: expected3,
        description:
          "multiple duplicates with the odd frequency greater than 1",
      },
      {
        args: [nums4],
        expected: expected4,
        description:
          "even frequencies that exceed 2 and a single non-duplicated number",
      },
    ];

    testCases.forEach(({ args, expected, description }) => {
      describe("when given " + description, () => {
        it("should return the only number that occurs and odd number of times from a non empty array.", () => {
          expect(testFn(...args)).toEqual(expected);
        });
      });
    });
  });
});
