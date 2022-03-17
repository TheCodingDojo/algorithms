const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const str1 = "a x a";
    const expected1 = true;

    const str2 = "racecar";
    const expected2 = true;

    const str3 = "Dud";
    const expected3 = false;

    const str4 = "oho!";
    const expected4 = false;

    const testCases = [
      { args: [str1], expected: expected1 },
      { args: [str2], expected: expected2 },
      { args: [str3], expected: expected3 },
      { args: [str4], expected: expected4 },
    ];

    testCases.forEach(({ args, expected }, i) => {
      describe(`when given testCases[${i}]`, () => {
        it("should return whether or not the given string is a palindrome.", () => {
          expect(testFn(...args)).toEqual(expected);
        });
      });
    });
  });
});
