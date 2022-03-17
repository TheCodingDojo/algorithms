const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const number1 = 3524;
    /* 
    Explanation:
      1. 5432 - 2345 = 3087
      2. 8730 - 0378 = 8352
      3. 8532 - 2358 = 6174
    */
    const expected1 = 3;

    const number2 = 2111;
    const expected2 = 5;

    const number3 = 9831;
    const expected3 = 7;

    const testCases = [
      { arg: number1, expected: expected1 },
      { arg: number2, expected: expected2 },
      { arg: number3, expected: expected3 },
    ];

    testCases.forEach(({ arg, expected }, i) => {
      describe(`when given ${arg}`, () => {
        it("The number of summing operations required to reach kaprekars constant (6174).", () => {
          expect(testFn(arg)).toEqual(expected);
        });
      });
    });
  });
});
