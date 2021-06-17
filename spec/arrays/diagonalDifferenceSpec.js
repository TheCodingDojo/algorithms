const { diagonalDifference } = require("../../arrays/diagonalDifference");
const argFormatter = require("../helpers/argFormatter");

describe("diagonalDifference", () => {
  const squareMatrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ];
  const expected1 = 2;
  /* 
    left to right diagonal: 1 + 5 + 9 = 15
    right to left diagonal: 3 + 5 + 9 = 17
    absolute difference = 2
  */

  const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
  ];
  const expected2 = 0;

  const testCases = [
    { args: [squareMatrix1], expected: expected1 },
    { args: [squareMatrix2], expected: expected2 },
  ];

  it("should return the absolute difference between the sums of the diagonals of a given square matrix.", () =>
    testCases.forEach(({ args, expected }) =>
      expect(diagonalDifference(...args))
        .withContext(argFormatter(diagonalDifference, args))
        .toEqual(expected)
    ));
});
