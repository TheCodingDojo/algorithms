const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const num1 = 5;
    const expected1 = 5;

    const num2 = 10;
    const expected2 = 1;

    const num3 = 25;
    const expected3 = 7;

    const testCases = [
      { arg: num1, expected: expected1 },
      { arg: num2, expected: expected2 },
      { arg: num3, expected: expected3 },
    ];

    testCases.forEach(({ arg, expected }, i) => {
      describe(`when given ${arg}`, () => {
        it("should sum the given int's digits until it becomes one digit and return that result.", () => {
          expect(testFn(arg)).toEqual(expected);
        });
      });
    });
  });
});
