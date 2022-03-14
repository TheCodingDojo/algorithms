const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const a1 = 5;
    const b1 = 5;
    const expected1 = 5;

    const a2 = 6;
    const b2 = 20;
    const expected2 = 2;

    const a3 = 54;
    const b3 = 12;
    const expected3 = 6;

    const a4 = 12;
    const b4 = 54;
    const expected4 = 6;

    const a5 = 65;
    const b5 = 25;
    const expected5 = 5;

    const a6 = 123456;
    const b6 = 987654;
    const expected6 = 6;

    const testCases = [
      { args: [a1, b1], expected: expected1 },
      { args: [a2, b2], expected: expected2 },
      { args: [a3, b3], expected: expected3 },
      { args: [a4, b4], expected: expected4 },
      { args: [a5, b5], expected: expected5 },
      // { args: [a6, b6], expected: expected6 },
    ];

    testCases.forEach(({ args: [a, b], expected }, i) => {
      describe(`when given (${a}, ${b})`, () => {
        it("should return the greatest common factor of the two given numbers.", () => {
          expect(testFn(a, b)).toEqual(expected);
        });
      });
    });
  });
});
