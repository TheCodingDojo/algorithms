const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const s1 = "";
    const expected1 = "";

    const s2 = "hi";
    const expected2 = "hi";

    const s3 = "hi hi hi";
    const expected3 = "hi";

    const s4 = "hello flat hello flat world";
    const expected4 = "hello flat world";

    const testCases = [
      { arg: s1, expected: expected1 },
      { arg: s2, expected: expected2 },
      { arg: s3, expected: expected3 },
      { arg: s4, expected: expected4 },
    ];

    testCases.forEach(({ arg, expected }, i) => {
      describe(`when given "${arg}"`, () => {
        it("should remove duplicate words from the given string and return the deduped string.", () => {
          expect(testFn(arg)).toEqual(expected);
        });
      });
    });
  });
});
