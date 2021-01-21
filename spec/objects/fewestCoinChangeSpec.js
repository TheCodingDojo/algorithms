const { fewestCoinChange } = require("../../objects/fewestCoinChange");
const argFormatter = require("../helpers/argFormatter");

describe("fewestCoinChange", () => {
  const cents1 = 25;
  const expected1 = { quarter: 1 };

  const cents2 = 50;
  const expected2 = { quarter: 2 };

  const cents3 = 9;
  const expected3 = { nickel: 1, penny: 4 };

  const cents4 = 99;
  const expected4 = { quarter: 3, dime: 2, penny: 4 };

  const testCases = [
    { arguments: [cents1], expected: expected1 },
    { arguments: [cents2], expected: expected2 },
    { arguments: [cents3], expected: expected3 },
    { arguments: [cents4], expected: expected4 },
  ];

  it("should return an object detailing the fewest coins needed to get to the given cents.", () =>
    testCases.forEach(({ arguments, expected }) =>
      expect(fewestCoinChange(...arguments))
        .withContext(argFormatter(fewestCoinChange, arguments))
        .toEqual(expected)
    ));
});
