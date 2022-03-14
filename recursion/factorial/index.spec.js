const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const num1 = 3;
    const expected1 = 6;
    // Explanation: 1*2*3 = 6

    const num2 = 6.8;
    const expected2 = 720;
    // Explanation: 1*2*3*4*5*6 = 720

    const num3 = 0;
    const expected3 = 1;

    const testCases = [
      { args: [num1], expected: expected1 },
      { args: [num2], expected: expected2 },
      { args: [num3], expected: expected3 },
    ];

    testCases.forEach(({ args, expected }, i) => {
      describe(`when given testCases[${i}]`, () => {
        it("should return the product of 1 through the given int inclusive.", () => {
          expect(testFn(...args)).toEqual(expected);
        });
      });
    });
  });
});
