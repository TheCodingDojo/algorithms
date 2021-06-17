const { trim } = require("../../strings/trim");
const argFormatter = require("../helpers/argFormatter");

describe("trim", () => {
  const str1 = "   hello world     ";
  const expected1 = "hello world";

  const testCases = [{ args: [str1], expected: expected1 }];

  it("should return a string that is the given string with all leading and trailing spaces removed.", () =>
    testCases.forEach(({ args, expected }) =>
      expect(trim(...args))
        .withContext(argFormatter(trim, args))
        .toEqual(expected)
    ));
});
