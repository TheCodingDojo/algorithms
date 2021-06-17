const { mode } = require("../../arrays/mode");
const argFormatter = require("../helpers/argFormatter");

describe("mode", () => {
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
    { args: [nums1], expected: expected1 },
    { args: [nums2], expected: expected2 },
    { args: [nums3], expected: expected3 },
    { args: [nums4], expected: expected4 },
    { args: [nums5], expected: expected5 },
  ];

  it("should return an array of the integers that occur most frequently in the given array (more than one only if some have same frequency).", () =>
    testCases.forEach(({ args, expected }) =>
      expect(mode(...args))
        .withContext(argFormatter(mode, args))
        .toEqual(jasmine.arrayWithExactContents(expected))
    ));
});
