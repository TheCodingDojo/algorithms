const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const num1A = 1;
    const num1B = 1;
    const expected1 = 1;

    const num2A = 5;
    const num2B = 10;
    const expected2 = 10;

    const num3A = 10;
    const num3B = 5;
    const expected3 = 10;

    const num4A = 6;
    const num4B = 8;
    const expected4 = 24;

    const num5A = 15;
    const num5B = 25;
    const expected5 = 75;

    const testCases = [
      { args: [num1A, num1B], expected: expected1 },
      { args: [num2A, num2B], expected: expected2 },
      { args: [num3A, num3B], expected: expected3 },
      { args: [num4A, num4B], expected: expected4 },
      { args: [num5A, num5B], expected: expected5 },
    ];

    testCases.forEach(({ args: [a, b], expected }, i) => {
      describe(`when given (${(a, b)})`, () => {
        it("should return the lowest common multiple of the two given ints.", () => {
          expect(testFn(a, b)).toEqual(expected);
        });
      });
    });
  });
});
