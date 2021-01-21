const { kMostFrequent } = require("../../arrays/kMostFrequent");
const argFormatter = require("../helpers/argFormatter");

describe("kMostFrequent", () => {
  const nums1 = [1, 1, 1, 2, 2, 3];
  const k1 = 2;
  const expected1 = [1, 2];
  // Explanation: return the two most frequent elements, 1 and 2 are the two most frequent elements

  const nums2 = [0, 0, 0, 2, 2, 3];
  const k2 = 1;
  const expected2 = [0];
  // Explanation: k being 1 means return the single most frequent element

  const nums3 = [1, 1, 2, 2, 3, 3];
  const k3 = 3;
  const expected3 = [1, 2, 3];
  /* 
    Explanation: 3 is the only value that would be passed in for k because it is the only value for k that has
    a valid solution. Since 1, 2, and 3, all occur 3 times, they are all the most frequent ints, so there is no
    1 most frequent int, or 2 most frequent int, but there are 3 most frequent ints. 
  */

  const testCases = [
    { arguments: [nums1, k1], expected: expected1 },
    { arguments: [nums2, k2], expected: expected2 },
    { arguments: [nums3, k3], expected: expected3 },
  ];

  it("should return the k most frequently occuring integers from the array in any order.", () =>
    testCases.forEach(({ arguments, expected }) =>
      expect(kMostFrequent(...arguments))
        .withContext(argFormatter(kMostFrequent, arguments))
        .toEqual(jasmine.arrayWithExactContents(expected))
    ));
});
