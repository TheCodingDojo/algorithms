const { insertionSort } = require("../../sorts/insertionSort");
const argFormatter = require("../helpers/argFormatter");

describe("insertionSort", () => {
  const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
  const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const testCases = [
    { arguments: [numsOrdered], expected: expected },
    { arguments: [numsRandomOrder], expected: expected },
    { arguments: [numsReversed], expected: expected },
  ];

  testCases.forEach(({ arguments, expected }) => {
    const ret = insertionSort(...arguments);

    it("should return and sort the given array in ascending order.", () => {
      expect(ret)
        .withContext(argFormatter(insertionSort, arguments))
        .toEqual(expected);
    });

    it("should have returned the given array, not a new array.", () => {
      expect(ret).toBe(arguments[0]);
    });
  });
});
