const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const strA1 = "ABCD";
    const strB1 = "CDAB";
    // Explanation: if you start from A in the 2nd string, the letters are in the same order, just rotated
    const expected1 = true;

    const strA2 = "ABCD";
    const strB2 = "CDBA";
    // Explanation: all same letters in 2nd string, but out of order
    const expected2 = false;

    const strA3 = "ABCD";
    const strB3 = "BCDAB";
    // Explanation: same letters in correct order but there is an extra letter.
    const expected3 = false;

    const testCases = [
      { args: [strA1, strB1], expected: expected1 },
      { args: [strA2, strB2], expected: expected2 },
      { args: [strA3, strB3], expected: expected3 },
    ];

    testCases.forEach(({ args, expected }, i) => {
      describe(`when given testCases[${i}]`, () => {
        it("should return whether or not the 1st given string is a rotation of the 2nd given string.", () => {
          expect(testFn(...args)).toEqual(expected);
        });
      });
    });
  });
});
