const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const str1 = "abc";
    const expected1 = "cba";

    const str2 = "";
    const expected2 = "";

    const testCases = [
      { arg: str1, expected: expected1 },
      { arg: str2, expected: expected2 },
    ];

    testCases.forEach(({ arg, expected }, i) => {
      describe(`when given "${arg}"`, () => {
        it("should return a string that is the reverse of the given string.", () => {
          expect(testFn(arg)).toEqual(expected);
        });
      });
    });
  });
});
