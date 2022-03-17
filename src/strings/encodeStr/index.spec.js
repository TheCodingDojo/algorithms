const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const str1 = "aaaabbcddd";
    const expected1 = "a4b2c1d3";

    const str2 = "";
    const expected2 = "";

    const str3 = "a";
    const expected3 = "a";

    const str4 = "bbcc";
    const expected4 = "bbcc";

    const testCases = [
      { args: [str1], expected: expected1 },
      { args: [str2], expected: expected2 },
      { args: [str3], expected: expected3 },
      { args: [str4], expected: expected4 },
    ];

    testCases.forEach(({ args, expected }, i) => {
      describe(`when given testCases[${i}]`, () => {
        it("should return the given string encoded so that consecutively repeated chars are replaced with an int of its frequency.", () => {
          expect(testFn(...args)).toEqual(expected);
        });
      });
    });
  });
});
