const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const strA1 = "ABC";
    const strB1 = "abc";
    const expected1 = true;

    const strA2 = "ABC";
    const strB2 = "abd";
    const expected2 = false;

    const strA3 = "ABC";
    const strB3 = "bc";
    const expected3 = false;

    const testCases = [
      { args: [strA1, strB1], expected: expected1 },
      { args: [strA2, strB2], expected: expected2 },
      { args: [strA3, strB3], expected: expected3 },
    ];

    testCases.forEach(({ args, expected }, i) => {
      describe(`when given testCases[${i}]`, () => {
        it("should return whether the strings are equal while ignoring case.", () => {
          expect(testFn(...args)).toEqual(expected);
        });
      });
    });
  });
});
