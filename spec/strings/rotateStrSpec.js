const { rotateStr } = require("../../strings/rotateStr");
const argFormatter = require("../helpers/argFormatter");

describe("rotateStr", () => {
  const str1 = "Hello World";
  const rotateAmnt1 = 0;
  const expected1 = "Hello World";

  const str2 = "Hello World";
  const rotateAmnt2 = 1;
  const expected2 = "dHello Worl";

  const str3 = "Hello World";
  const rotateAmnt3 = 2;
  const expected3 = "ldHello Wor";

  const str4 = "Hello World";
  const rotateAmnt4 = 4;
  const expected4 = "orldHello W";

  const testCases = [
    { arguments: [str1, rotateAmnt1], expected: expected1 },
    { arguments: [str2, rotateAmnt2], expected: expected2 },
    { arguments: [str3, rotateAmnt3], expected: expected3 },
    { arguments: [str4, rotateAmnt4], expected: expected4 },
  ];

  it("should return a string that is the given string with chars rotated to the right by the given int amount.", () =>
    testCases.forEach(({ arguments, expected }) =>
      expect(rotateStr(...arguments))
        .withContext(argFormatter(rotateStr, arguments))
        .toEqual(expected)
    ));
});
