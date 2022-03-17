const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const str1 = "lim";
    const expected1 = ["ilm", "iml", "lim", "lmi", "mil", "mli"];
    // Order of the output array does not matter

    const testCases = [{ arg: str1, expected: expected1 }];

    testCases.forEach(({ arg: arg, expected }, i) => {
      describe(`when given ${arg}`, () => {
        it("should return an array of all the anagrams of the given string.", () => {
          expect(testFn(arg)).toEqual(jasmine.arrayContaining(expected));
        });
      });
    });
  });
});
