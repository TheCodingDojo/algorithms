const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const str1 = "aa6?9";
    const expected1 = false;

    const str2 = "acc?7??sss?3rr1??????5";
    const expected2 = true;

    const str3 = "?3?d?dad?7??????3";
    const expected3 = true;

    const str4 = "7??????3";
    // Explanation: too many question marks.
    const expected4 = false;

    const testCases = [
      { arg: str1, expected: expected1 },
      { arg: str2, expected: expected2 },
      { arg: str3, expected: expected3 },
      { arg: str4, expected: expected4 },
    ];

    testCases.forEach(({ arg, expected }, i) => {
      describe(`when given "${arg}"`, () => {
        it("should return whether or not the given string contains exactly 3 questions marks between every two ints that sum to 10.", () => {
          expect(testFn(arg)).toEqual(expected);
        });
      });
    });
  });
});
