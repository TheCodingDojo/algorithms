const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const str1 = "hello world";
    const expected1 = "eoohll wrld";

    const str2 = "More people have been to Hawaii than I have.";
    const expected2 = "oeeoeaeeeoaaiiaIaeMr ppl hv bn t Hw thn  hv.";

    const testCases = [
      { arg: str1, expected: expected1 },
      { arg: str2, expected: expected2 },
    ];

    testCases.forEach(({ arg, expected }, i) => {
      describe(`when given testCases[${i}]`, () => {
        it("should move all the vowels of a string to the front.", () => {
          expect(testFn(arg)).toEqual(expected);
        });
      });
    });
  });
});
