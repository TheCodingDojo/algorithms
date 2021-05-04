const { rotateStr } = require("../../strings/rotateStr");
const argFormatter = require("../helpers/argFormatter");

describe("rotateStr", () => {
  const str = "Hello World";

  const rotateAmnt1 = 0;
  const expected1 = "Hello World";

  const rotateAmnt2 = 1;
  const expected2 = "dHello Worl";

  const rotateAmnt3 = 2;
  const expected3 = "ldHello Wor";

  const rotateAmnt4 = 4;
  const expected4 = "orldHello W";

  const rotateAmnt5 = 13;
  const expected5 = "ldHello Wor";

  const testCases = [
    { arguments: [str, rotateAmnt1], expected: expected1 },
    { arguments: [str, rotateAmnt2], expected: expected2 },
    { arguments: [str, rotateAmnt3], expected: expected3 },
    { arguments: [str, rotateAmnt4], expected: expected4 },
    { arguments: [str, rotateAmnt5], expected: expected5 },
  ];

  it("should return a string that is the given string with chars rotated to the right by the given int amount.", () =>
    testCases.forEach(({ arguments, expected }) =>
      expect(rotateStr(...arguments))
        .withContext(argFormatter(rotateStr, arguments))
        .toEqual(expected)
    ));
});
