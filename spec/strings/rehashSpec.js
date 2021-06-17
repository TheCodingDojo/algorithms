const { rehash } = require("../../strings/rehash");
const argFormatter = require("../helpers/argFormatter");

describe("rehash", () => {
  const str1 = "b70a164c32a20c10";
  const expected1 = "a184b70c42";

  const testCases = [{ args: [str1], expected: expected1 }];

  it("should return the correctly rehashed string.", () =>
    testCases.forEach(({ args, expected }) =>
      expect(rehash(...args))
        .withContext(argFormatter(rehash, args))
        .toEqual(expected)
    ));
});
