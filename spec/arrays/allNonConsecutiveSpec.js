const { allNonConsecutive } = require("../../arrays/allNonConsecutive");
const argFormatter = require("../helpers/argFormatter");

describe("allNonConsecutive", () => {
  const nums1 = [1, 2, 3, 4, 6, 7, 8, 10];
  const expected1 = [
    { i: 4, n: 6 },
    { i: 7, n: 10 },
  ];

  const testCases = [{ args: [nums1], expected: expected1 }];

  it("should return all the non consecutive ints in the given sorted array of ints.", () =>
    testCases.forEach(({ args, expected }) =>
      expect(allNonConsecutive(...args))
        .withContext(argFormatter(allNonConsecutive, args))
        .toEqual(expected)
    ));
});
