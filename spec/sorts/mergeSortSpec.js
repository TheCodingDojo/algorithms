const { merge, mergeSort } = require("../../sorts/mergeSort");
const argFormatter = require("../helpers/argFormatter");

describe("merge", () => {
  // merge
  const sortedA1 = [];
  const sortedB1 = [];
  const expectedMerge1 = [];

  const sortedA2 = [5];
  const sortedB2 = [2];
  const expectedMerge2 = [2, 5];

  const sortedA3 = [3];
  const sortedB3 = [2, 3, 4, 7];
  const expectedMerge3 = [2, 3, 3, 4, 7];

  const sortedA4 = [1, 2, 4, 5, 6, 9];
  const sortedB4 = [3, 7, 8, 10];
  const expectedMerge4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const testCases = [
    { arguments: [sortedA1, sortedB1], expected: expectedMerge1 },
    { arguments: [sortedA2, sortedB2], expected: expectedMerge2 },
    { arguments: [sortedA3, sortedB3], expected: expectedMerge3 },
    { arguments: [sortedA4, sortedB4], expected: expectedMerge4 },
  ];

  it("should return merge the two given sorted arrays into a new sorted array.", () => {
    testCases.forEach(({ arguments, expected }) => {
      const ret = merge(...arguments);

      expect(ret).withContext(argFormatter(merge, arguments)).toEqual(expected);
    });
  });
});

describe("mergeSort", () => {
  const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
  const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  const expectedSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const testCases = [
    { arguments: [numsOrdered], expected: expectedSort },
    { arguments: [numsRandomOrder], expected: expectedSort },
    { arguments: [numsReversed], expected: expectedSort },
  ];
  it("should return a new array that is the given array sorted in ascending order", () => {
    testCases.forEach(({ arguments, expected }) => {
      const ret = mergeSort(...arguments);

      expect(ret).withContext(argFormatter(merge, arguments)).toEqual(expected);
    });
  });
});
