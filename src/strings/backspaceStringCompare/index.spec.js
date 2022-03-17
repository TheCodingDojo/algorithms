const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const S1 = "ab#c";
    const T1 = "ad#c";
    const expected1 = true;
    // Explanation: Both S and T become "ac"

    const S2 = "ab##";
    const T2 = "c#d#";
    const expected2 = true;
    // Explanation: Both S and T become ""

    const S3 = "a##c";
    const T3 = "#a#c";
    const expected3 = true;
    // Explanation: Both S and T become "c"

    const S4 = "a#c";
    const T4 = "b";
    const expected4 = false;
    // Explanation: S becomes "c" while T becomes "b".

    const testCases = [
      { args: [S1, T1], expected: expected1 },
      { args: [S2, T2], expected: expected2 },
      { args: [S3, T3], expected: expected3 },
      { args: [S4, T4], expected: expected4 },
    ];

    testCases.forEach(({ args, expected }, i) => {
      describe(`when given testCases[${i}]`, () => {
        it("should return whether or not the strings are equal after processing the backspaces.", () => {
          expect(testFn(...args)).toEqual(expected);
        });
      });
    });
  });
});
