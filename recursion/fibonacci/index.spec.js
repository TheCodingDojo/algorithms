const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const num1 = 0;
    const expected1 = 0;

    const num2 = 1;
    const expected2 = 1;

    const num3 = 2;
    const expected3 = 1;

    const num4 = 3;
    const expected4 = 2;

    const num5 = 4;
    const expected5 = 3;

    const num6 = 8;
    const expected6 = 21;

    const testCases = [
      { arg: num1, expected: expected1 },
      { arg: num2, expected: expected2 },
      { arg: num3, expected: expected3 },
      { arg: num4, expected: expected4 },
      { arg: num5, expected: expected5 },
      { arg: num6, expected: expected6 },
    ];

    testCases.forEach(({ arg, expected }, i) => {
      describe(`when given ${arg}`, () => {
        it("should return the number from the fibonacci sequence at the given ints position (nth fibonacci num).", () => {
          expect(testFn(arg)).toEqual(expected);
        });
      });
    });
  });
});
