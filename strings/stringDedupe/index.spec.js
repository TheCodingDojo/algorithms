const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const str1 = "abcABC";
    const expected1 = "abcABC";

    const str2 = "helloo";
    const expected2 = "helo";

    const testCases = [
      { args: [str1], expected: expected1 },
      { args: [str2], expected: expected2 },
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
