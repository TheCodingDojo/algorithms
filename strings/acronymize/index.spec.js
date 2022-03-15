const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const str1 = "abstraction polymorphism inheritance encapsulation";
    const expected1 = "APIE";

    const str2 = "object oriented programming";
    const expected2 = "OOP";

    const str3 = "software development life cycle";
    const expected3 = "SDLC";

    const str4 = "  global   information tracker    ";
    const expected4 = "GIT";

    const testCases = [
      { arg: str1, expected: expected1 },
      { arg: str2, expected: expected2 },
      { arg: str3, expected: expected3 },
      { arg: str4, expected: expected4 },
    ];

    testCases.forEach(({ arg, expected }, i) => {
      describe(`when given testCases[${i}]`, () => {
        it("should return the acronym version of the given string.", () => {
          expect(testFn(arg)).toEqual(expected);
        });
      });
    });
  });
});
