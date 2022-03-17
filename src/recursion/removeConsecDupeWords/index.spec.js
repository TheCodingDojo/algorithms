const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const s1 = "";
    const expected1 = "";

    const s2 = "one two two three";
    const expected2 = "one two three";

    const s3 = "one one two";
    const expected3 = "one two";

    const s4 = "one one one two two two";
    const expected4 = "one two";

    const testCases = [
      { arg: s1, expected: expected1 },
      { arg: s2, expected: expected2 },
      { arg: s3, expected: expected3 },
      { arg: s4, expected: expected4 },
    ];

    testCases.forEach(({ arg, expected }, i) => {
      describe(`when given "${arg}"`, () => {
        it("should recursively remove consecutive dupe words from a string.", () => {
          expect(testFn(arg)).toEqual(expected);
        });
      });
    });
  });
});
