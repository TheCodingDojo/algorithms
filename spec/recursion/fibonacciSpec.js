const { fibonacci } = require("../../recursion/fibonacci");
const argFormatter = require("../helpers/argFormatter");

describe("fibonacci", () => {
  const num1 = 0;
  const expected1 = 0;

  const num2 = 1;
  const expected2 = 1;

  const num3 = 2;
  const expected3 = 1;

  const num4 = 3;
  const expected4 = 2;

  const num5 = 4;
  const expected5 = 3;

  const num6 = 8;
  const expected6 = 21;

  const testCases = [
    { args: [num1], expected: expected1 },
    { args: [num2], expected: expected2 },
    { args: [num3], expected: expected3 },
    { args: [num4], expected: expected4 },
    { args: [num5], expected: expected5 },
    { args: [num6], expected: expected6 },
  ];

  it("should return the number from the fibonacci sequence at the given ints position (nth fibonacci num).", () =>
    testCases.forEach(({ args, expected }) =>
      expect(fibonacci(...args))
        .withContext(argFormatter(fibonacci, args))
        .toEqual(expected)
    ));
});
