const { trim } = require("../../strings/trim");
const argFormatter = require("../helpers/argFormatter");

describe("trim", () => {
  const str1 = "   hello world     ";
  const expected1 = "hello world";

  const testCases = [{ arguments: [str1], expected: expected1 }];

  it("should return a string that is the given string with all leading and trailing spaces removed.", () =>
    testCases.forEach(({ arguments, expected }) =>
      expect(trim(...arguments))
        .withContext(argFormatter(trim, arguments))
        .toEqual(expected)
    ));
});
