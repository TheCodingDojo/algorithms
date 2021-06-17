const { isRotation } = require("../../strings/isRotation");
const argFormatter = require("../helpers/argFormatter");

describe("isRotation", () => {
  const strA1 = "ABCD";
  const strB1 = "CDAB";
  const expected1 = true;
  // Explanation: if you start from A in the 2nd string, the letters are in the same order, just rotated

  const strA2 = "ABCD";
  const strB2 = "CDBA";
  const expected2 = false;
  // Explanation: all same letters in 2nd string, but out of order

  const testCases = [
    { args: [strA1, strB1], expected: expected1 },
    { args: [strA2, strB2], expected: expected2 },
  ];

  it("should return whether or not the 1st given string is a rotation of the 2nd given string.", () =>
    testCases.forEach(({ args, expected }) =>
      expect(isRotation(...args))
        .withContext(argFormatter(isRotation, args))
        .toEqual(expected)
    ));
});
