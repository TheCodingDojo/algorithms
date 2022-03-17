const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const str1 = "to be,; --or\tnot  : ;;; to-:: be";
    const expected1 = ["to", "be"];

    const testCases = [{ args: [str1], expected: expected1 }];

    testCases.forEach(({ args, expected }, i) => {
      describe(`when given testCases[${i}]`, () => {
        it("should return an array of the duplicate words between the specified separators.", () => {
          expect(testFn(...args)).toEqual(expected);
        });
      });
    });
  });
});
