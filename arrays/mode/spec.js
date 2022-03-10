const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const nums1 = [];
    const expected1 = [];

    const nums2 = [1];
    const expected2 = [1];

    const nums3 = [5, 1, 4];
    const expected3 = [];

    const nums4 = [5, 1, 4, 1];
    const expected4 = [1];

    const nums5 = [5, 1, 4, 1, 5];
    const expected5 = [5, 1];
    //  - order doesn't matter

    const testCases = [
      { args: [nums1], expected: expected1, description: "an empty array" },
      { args: [nums2], expected: expected2, description: "a single number" },
      { args: [nums3], expected: expected3, description: "no duplicates" },
      {
        args: [nums4],
        expected: expected4,
        description: "a small array with one duplicate",
      },
      {
        args: [nums5],
        expected: expected5,
        description:
          "a small array with two of the numbers having the same frequency",
      },
    ];

    testCases.forEach(({ args, expected, description }) => {
      describe("when given " + description, () => {
        it("should return an array of the integers that occur most frequently in the given array (more than one only if some have the same frequency).", () => {
          expect(testFn(...args)).toEqual(
            jasmine.arrayWithExactContents(expected)
          );
        });
      });
    });
  });
});
