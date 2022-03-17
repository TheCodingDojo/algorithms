const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const str1 = "b70a164c32a20c10";
    const expected1 = "a184b70c42";

    const testCases = [{ arg: str1, expected: expected1 }];

    testCases.forEach(({ arg, expected }, i) => {
      describe(`when given "${arg}:`, () => {
        it("should return the correctly rehashed string.", () => {
          expect(testFn(arg)).toEqual(expected);
        });
      });
    });
  });
});
