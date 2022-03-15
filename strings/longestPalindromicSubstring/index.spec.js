const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    //

    testCases.forEach(({ args, expected }, i) => {
      describe(`when given testCases[${i}]`, () => {
        it("", () => {
          expect(testFn(...args)).toEqual(expected);
        });
      });
    });
  });
});
