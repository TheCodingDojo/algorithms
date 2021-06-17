const { bookIndex } = require("../../strings/bookIndex");
const argFormatter = require("../helpers/argFormatter");

describe("bookIndex", () => {
  const nums1 = [1, 13, 14, 15, 37, 38, 70];
  const expected1 = "1, 13-15, 37-38, 70";

  const testCases = [{ args: [nums1], expected: expected1 }];

  it("should return a string formatted as comma separated pages and page ranges when needed.", () =>
    testCases.forEach(({ args, expected }) =>
      expect(bookIndex(...args))
        .withContext(argFormatter(bookIndex, args))
        .toEqual(expected)
    ));
});
