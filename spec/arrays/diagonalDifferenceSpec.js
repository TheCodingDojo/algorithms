const { diagonalDifference } = require("../../arrays/diagonalDifference");
const argFormatter = require("../helpers/argFormatter");

describe("diagonalDifference", () => {
  const squareMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ];
  const expected = 2;

  const testCases = [{ arguments: [squareMatrix], expected: expected }];

  it("should return the absolute difference between the sums of the diagonals of a given square matrix.", () =>
    testCases.forEach(({ arguments, expected }) =>
      expect(diagonalDifference(...arguments))
        .withContext(argFormatter(diagonalDifference, arguments))
        .toEqual(expected)
    ));
});
