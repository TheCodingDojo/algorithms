const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const str1 = "creature";
    const expected1 = "erutaerc";

    const str2 = "dog";
    const expected2 = "god";

    const str3 = "hello";
    const expected3 = "olleh";

    const str4 = "";
    const expected4 = "";

    const testCases = [
      { arg: str1, expected: expected1 },
      { arg: str2, expected: expected2 },
      { arg: str3, expected: expected3 },
      { arg: str4, expected: expected4 },
    ];

    testCases.forEach(({ arg, expected }, i) => {
      describe(`when given "${arg}"`, () => {
        it("should return a string that is the reverse of the given string.", () => {
          expect(testFn(arg)).toEqual(expected);
        });
      });
    });
  });
});
