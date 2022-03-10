const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    //
    testCases.forEach(({ args, expected }, i) => {
      describe(`when given testCases[${i}]`, () => {
        it("should return the fewest number of taps that need to be used to achieve full garden water coverage.", () =>
          expect(testFn(...args)).toEqual(expected));
      });
    });
  });
});
