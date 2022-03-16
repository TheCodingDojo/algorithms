const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const str1 = "This is a test";
    const expected1 = "test a is This";

    const str2 = "hello";
    const expected2 = "hello";

    const str3 = "   This  is a   test  ";
    const expected3 = "test a is This";

    const testCases = [
      { arg: str1, expected: expected1 },
      { arg: str2, expected: expected2 },
      { arg: str3, expected: expected3 },
    ];

    testCases.forEach(({ arg, expected }, i) => {
      describe(`when given "${arg}"`, () => {
        it("should return a string with the order of the space separated words reversed, but the words themselves should not be reversed.", () => {
          expect(testFn(arg)).toEqual(expected);
        });
      });
    });
  });
});
