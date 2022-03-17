const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const str1 = "a3b2c1d3";
    const expected1 = "aaabbcddd";

    const str2 = "a3b2c12d10";
    const expected2 = "aaabbccccccccccccdddddddddd";

    const testCases = [
      { arg: str1, expected: expected1 },
      { arg: str2, expected: expected2 },
    ];

    testCases.forEach(({ arg, expected }, i) => {
      describe(`when given "${arg}"`, () => {
        it("should return a decoded version of the given string such that each char is repeated based on the integer that follows.", () => {
          expect(testFn(arg)).toEqual(expected);
        });
      });
    });
  });
});
