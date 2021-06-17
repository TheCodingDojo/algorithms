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
    { args: [num1], expected: expected1 },
    { args: [num2], expected: expected2 },
    { args: [num3], expected: expected3 },
  ];

  it("should sum the given int's digits until it becomes one digit and return that result.", () =>
    testCases.forEach(({ args, expected }) =>
      expect(sumToOneDigit(...args))
        .withContext(argFormatter(sumToOneDigit, args))
        .toEqual(expected)
    ));
});
