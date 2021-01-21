const { bracesValid } = require("../../strings/bracesValid");
const argFormatter = require("../helpers/argFormatter");

describe("bracesValid", () => {
  const str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
  const expected1 = true;

  const str2 = "D(i{a}l[ t]o)n{e";
  const expected2 = false;

  const str3 = "A(1)s[O (n]0{t) 0}k";
  const expected3 = false;

  const testCases = [
    { arguments: [str1], expected: expected1 },
    { arguments: [str2], expected: expected2 },
    { arguments: [str3], expected: expected3 },
  ];

  it("should return whether or not the braces in the given string are valid.", () =>
    testCases.forEach(({ arguments, expected }) =>
      expect(bracesValid(...arguments))
        .withContext(argFormatter(bracesValid, arguments))
        .toEqual(expected)
    ));
});
