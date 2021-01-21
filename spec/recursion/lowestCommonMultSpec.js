const { lowestCommonMult } = require("../../recursion/lowestCommonMult");
const argFormatter = require("../helpers/argFormatter");

describe("lowestCommonMult", () => {
  const num1A = 1;
  const num1B = 1;
  const expected1 = 1;

  const num2A = 5;
  const num2B = 10;
  const expected2 = 10;

  const num3A = 10;
  const num3B = 5;
  const expected3 = 10;

  const num4A = 6;
  const num4B = 8;
  const expected4 = 24;

  const num5A = 15;
  const num5B = 25;
  const expected5 = 75;

  const testCases = [
    { arguments: [num1A, num1B], expected: expected1 },
    { arguments: [num2A, num2B], expected: expected2 },
    { arguments: [num3A, num3B], expected: expected3 },
    { arguments: [num4A, num4B], expected: expected4 },
    { arguments: [num5A, num5B], expected: expected5 },
  ];

  it("should return the lowest common multiple of the two given ints.", () =>
    testCases.forEach(({ arguments, expected }) =>
      expect(lowestCommonMult(...arguments))
        .withContext(argFormatter(lowestCommonMult, arguments))
        .toEqual(expected)
    ));
});
