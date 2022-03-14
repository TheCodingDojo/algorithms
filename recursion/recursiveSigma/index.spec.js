const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const num1 = 5;
    const expected1 = 15;
    // Explanation: (1+2+3+4+5)

    const num2 = 2.5;
    const expected2 = 3;
    // Explanation: (1+2)

    const num3 = -1;
    const expected3 = 0;

    const testCases = [
      { arg: num1, expected: expected1 },
      { arg: num2, expected: expected2 },
      { arg: num3, expected: expected3 },
    ];

    testCases.forEach(({ arg, expected }, i) => {
      describe(`when given ${arg}`, () => {
        it("should return the sum of 1 through the given int inclusive.", () => {
          expect(testFn(arg)).toEqual(expected);
        });
      });
    });
  });
});
