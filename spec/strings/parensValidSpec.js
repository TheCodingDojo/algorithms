const { parensValid } = require("../../strings/parensValid");
const argFormatter = require("../helpers/argFormatter");

describe("parensValid", () => {
  const str1 = "Y(3(p)p(3)r)s";
  const expected1 = true;

  const str2 = "N(0(p)3";
  const expected2 = false;
  // Explanation: not every parenthesis is closed.

  const str3 = "N(0)t ) 0(k";
  const expected3 = false;
  // Explanation: because the underlined ")" is premature: there is nothing open for it to close.

  const str4 = "a(b))(c";
  const expected4 = false;
  // Explanation: same number of opens and closes but the 2nd closing closes nothing

  const testCases = [
    { args: [str1], expected: expected1 },
    { args: [str2], expected: expected2 },
    { args: [str3], expected: expected3 },
    { args: [str4], expected: expected4 },
  ];

  it("should return whether or not the parenthesis in the given string are valid.", () =>
    testCases.forEach(({ args, expected }) =>
      expect(parensValid(...args))
        .withContext(argFormatter(parensValid, args))
        .toEqual(expected)
    ));
});
