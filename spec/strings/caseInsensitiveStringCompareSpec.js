const {
  caseInsensitiveStringCompare,
} = require("../../strings/caseInsensitiveStringCompare");
const argFormatter = require("../helpers/argFormatter");

describe("caseInsensitiveStringCompare", () => {
  const strA1 = "ABC";
  const strB1 = "abc";
  const expected1 = true;

  const strA2 = "ABC";
  const strB2 = "abd";
  const expected2 = false;

  const strA3 = "ABC";
  const strB3 = "bc";
  const expected3 = false;

  const testCases = [
    { arguments: [strA1, strB1], expected: expected1 },
    { arguments: [strA2, strB2], expected: expected2 },
    { arguments: [strA3, strB3], expected: expected3 },
  ];

  it("should return whether the strings are equal while ignoring case.", () =>
    testCases.forEach(({ arguments, expected }) =>
      expect(caseInsensitiveStringCompare(...arguments))
        .withContext(argFormatter(caseInsensitiveStringCompare, arguments))
        .toEqual(expected)
    ));
});
