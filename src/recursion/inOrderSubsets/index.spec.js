const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const string1 = "abc";
    // In any order:
    const expected1 = ["", "c", "b", "bc", "a", "ac", "ab", "abc"];

    const testCases = [{ arg: string1, expected: expected1 }];

    testCases.forEach(({ arg, expected }, i) => {
      describe(`when given "${arg}"`, () => {
        it("should generate an array with every possible in-order character subset of the given string.", () => {
          expect(testFn(arg)).toEqual(jasmine.arrayContaining(expected));
        });
      });
    });
  });
});
