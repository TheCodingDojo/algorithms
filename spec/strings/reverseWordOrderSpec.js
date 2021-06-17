const { reverseWordOrder } = require("../../strings/reverseWordOrder");
const argFormatter = require("../helpers/argFormatter");

describe("reverseWordOrder", () => {
  const str1 = "This is a test";
  const expected1 = "test a is This";

  const testCases = [{ args: [str1], expected: expected1 }];

  it("should return a string with the words of the given space separated string are reversed, but the word's characters are not reversed.", () =>
    testCases.forEach(({ args, expected }) =>
      expect(reverseWordOrder(...args))
        .withContext(argFormatter(reverseWordOrder, args))
        .toEqual(expected)
    ));
});
