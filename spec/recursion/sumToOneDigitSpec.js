const { sumToOneDigit } = require("../../recursion/sumToOneDigit");
const argFormatter = require("../helpers/argFormatter");

describe("sumToOneDigit", () => {
  const num1 = 5;
  const expected1 = 5;

  const num2 = 10;
  const expected2 = 1;

  const num3 = 25;
  const expected3 = 7;

  const testCases = [
    { arguments: [num1], expected: expected1 },
    { arguments: [num2], expected: expected2 },
    { arguments: [num3], expected: expected3 },
  ];

  it("should sum the given int's digits until it becomes one digit and return that result.", () =>
    testCases.forEach(({ arguments, expected }) =>
      expect(sumToOneDigit(...arguments))
        .withContext(argFormatter(sumToOneDigit, arguments))
        .toEqual(expected)
    ));
});
