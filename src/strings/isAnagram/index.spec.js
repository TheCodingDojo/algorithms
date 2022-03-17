const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const strA1 = "yes";
    const strB1 = "eys";
    const expected1 = true;

    const strA2 = "yes";
    const strB2 = "eYs";
    const expected2 = true;

    const strA3 = "no";
    const strB3 = "noo";
    const expected3 = false;

    const strA4 = "silent";
    const strB4 = "listen";
    const expected4 = true;

    const testCases = [
      { args: [strA1, strB1], expected: expected1 },
      { args: [strA2, strB2], expected: expected2 },
      { args: [strA3, strB3], expected: expected3 },
      { args: [strA4, strB4], expected: expected4 },
    ];

    testCases.forEach(({ args, expected }, i) => {
      describe(`when given testCases[${i}]`, () => {
        it("should return whether or not the 1st given string is an anagram of the 2nd.", () => {
          expect(testFn(...args)).toEqual(expected);
        });
      });
    });
  });
});
