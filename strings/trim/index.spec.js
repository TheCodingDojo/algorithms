const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const str1 = "   hello world     ";
    const expected1 = "hello world";

    const testCases = [{ arg: str1, expected: expected1 }];

    testCases.forEach(({ arg, expected }, i) => {
      describe(`when given testCases[${i}]`, () => {
        it("should return a string that is the given string with all leading and trailing spaces removed.", () => {
          expect(testFn(arg)).toEqual(expected);
        });
      });
    });
  });
});
