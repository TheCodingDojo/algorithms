const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const str1 = "1?0?";
    const expected1 = ["1000", "1001", "1100", "1101"];
    // output list order does not matter

    const testCases = [{ args: [str1], expected: expected1 }];

    testCases.forEach(({ args, expected }, i) => {
      describe(`when given testCases[${i}]`, () => {
        it("should return an array of string representing all variations of the given string's question marks replaced with either 0 or 1.", () => {
          expect(testFn(...args)).toEqual(jasmine.arrayContaining(expected));
        });
      });
    });
  });
});
