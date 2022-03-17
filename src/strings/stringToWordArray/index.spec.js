const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const str1 = "Life is not a drill!";
    const expected1 = ["Life", "is", "not", "a", "drill!"];

    const testCases = [{ arg: str1, expected: expected1 }];

    testCases.forEach(({ arg, expected }, i) => {
      describe(`when given testCases[${i}]`, () => {
        it("should convert a string of space separated words into an array of words.", () => {
          expect(testFn(arg)).toEqual(expected);
        });
      });
    });
  });
});
