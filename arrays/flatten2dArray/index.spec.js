const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const twoDimArr1 = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const expected1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const twoDimArr2 = [[1], [2], [3]];
    const expected2 = [1, 2, 3];

    const twoDimArr3 = [[], [], [10, 20]];
    const expected3 = [10, 20];

    const testCases = [
      { args: [twoDimArr1], expected: expected1, description: "a 3x3 matrix" },
      { args: [twoDimArr2], expected: expected2, description: "a 1x3 matrix" },
      {
        args: [twoDimArr3],
        expected: expected3,
        description: "a mixed length matrix with some empty nested arrays",
      },
    ];

    testCases.forEach(({ args, expected, description }) => {
      describe("when given " + description, () => {
        it("should flatten the given 2d array into a 1d array and preserver the order of the items.", () => {
          expect(testFn(...args)).toEqual(expected);
        });
      });
    });
  });
});
