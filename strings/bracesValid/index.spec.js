const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
    const expected1 = true;

    const str2 = "D(i{a}l[ t]o)n{e";
    const expected2 = false;

    const str3 = "A(1)s[O (n]0{t) 0}k";
    const expected3 = false;

    const testCases = [
      { args: [str1], expected: expected1 },
      { args: [str2], expected: expected2 },
      { args: [str3], expected: expected3 },
    ];

    testCases.forEach(({ args, expected }, i) => {
      describe(`when given testCases[${i}]`, () => {
        it("should return whether or not the braces in the given string are valid.", () => {
          expect(testFn(...args)).toEqual(expected);
        });
      });
    });
  });
});
