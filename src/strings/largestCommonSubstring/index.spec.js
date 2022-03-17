const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const str1A = "aaa";
    const str1B = "aa";
    const expected1 = "aa";

    const str2A = "aaba";
    const str2B = "aa";
    const expected2 = "aa";

    const str3A = "aeff";
    const str3B = "abcdef";
    // Expected chars can be in any order.
    const expected3 = "aef";

    const str4A = "z this hurts my head x";
    const str4B = "my head, this hurts";
    // Expected chars can be in any order.
    const expected4 = "this hurts my head";

    const testCases = [
      { args: [str1A, str1B], expected: expected1 },
      { args: [str2A, str2B], expected: expected2 },
      { args: [str3A, str3B], expected: expected3 },
      { args: [str4A, str4B], expected: expected4 },
    ];

    testCases.forEach(({ args, expected }, i) => {
      describe(`when given testCases[${i}]`, () => {
        it("finds the longest longest string that can be built from characters that both of the given strings share.", () => {
          expect(testFn(...args).split("")).toEqual(
            jasmine.arrayContaining(expected.split(""))
          );
        });
      });
    });
  });
});
