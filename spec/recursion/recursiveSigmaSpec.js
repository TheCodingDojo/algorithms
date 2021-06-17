const { recursiveSigma } = require("../../recursion/recursiveSigma");
const argFormatter = require("../helpers/argFormatter");

describe("recursiveSigma", () => {
  const num1 = 5;
  const expected1 = 15;
  // Explanation: (1+2+3+4+5)

  const num2 = 2.5;
  const expected2 = 3;
  // Explanation: (1+2)

  const num3 = -1;
  const expected3 = 0;

  const testCases = [
    { args: [num1], expected: expected1 },
    { args: [num2], expected: expected2 },
    { args: [num3], expected: expected3 },
  ];

  it("should return the sum of 1 through the given int inclusive.", () =>
    testCases.forEach(({ args, expected }) =>
      expect(recursiveSigma(...args))
        .withContext(argFormatter(recursiveSigma, args))
        .toEqual(expected)
    ));
});
