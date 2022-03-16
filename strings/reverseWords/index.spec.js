const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const str1 = "hello";
    const expected1 = "olleh";

    const str2 = "hello world";
    const expected2 = "olleh dlrow";

    const str3 = "abc def ghi";
    const expected3 = "cba fed ihg";

    const testCases = [
      { arg: str1, expected: expected1 },
      { arg: str2, expected: expected2 },
      { arg: str3, expected: expected3 },
    ];

    testCases.forEach(({ arg, expected }, i) => {
      describe(`when given "${arg}"`, () => {
        it("should reverse each word's characters in the given string of space separated words.", () => {
          expect(testFn(arg)).toEqual(expected);
        });
      });
    });
  });
});
