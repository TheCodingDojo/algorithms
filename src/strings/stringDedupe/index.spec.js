const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const str1 = "abcABC";
    const expected1 = "abcABC";

    const str2 = "helloo";
    const expected2 = "helo";

    const str3 = "";
    const expected3 = "";

    const str4 = "aa";
    const expected4 = "a";

    const testCases = [
      { args: [str1], expected: expected1 },
      { args: [str2], expected: expected2 },
      { args: [str3], expected: expected3 },
      { args: [str4], expected: expected4 },
    ];

    testCases.forEach(({ args, expected }, i) => {
      describe(`when given testCases[${i}]`, () => {
        it("should return a string that is the given string with duplicate characters removed.", () => {
          expect(testFn(...args)).toEqual(expected);
        });
      });
    });
  });
});
