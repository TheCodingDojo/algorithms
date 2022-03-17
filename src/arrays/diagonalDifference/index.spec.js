const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
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
      {
        args: [squareMatrix1],
        expected: expected1,
        description: "a 3x3 matrix",
      },
      {
        args: [squareMatrix2],
        expected: expected2,
        description: "a 5x5 matrix with equal diagonals",
      },
    ];

    testCases.forEach(({ args, expected, description }) => {
      describe("when given " + description, () => {
        it("should return the absolute difference between the sums of the diagonals of a given square matrix.", () => {
          expect(testFn(...args)).toEqual(expected);
        });
      });
    });
  });
});
