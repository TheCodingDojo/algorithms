const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const arrA1 = [1, 2, 3];
    const arrB1 = [4, 5, 6];
    const expected1 = [5, 7, 9];

    const testCases = [
      {
        args: [arrA1, arrB1],
        expected: expected1,
        description: "a 3x3 matrix",
      },
    ];

    testCases.forEach(({ args, expected, description }) => {
      describe("when given " + description, () => {
        it("should return a new array that is the sum of the columns of the two given arrays.", () => {
          expect(testFn(...args)).toEqual(expected);
        });
      });
    });
  });
});
