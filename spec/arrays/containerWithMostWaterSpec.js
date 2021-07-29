const {
  containerWithMostWater,
} = require("../../arrays/containerWithMostWater");
const argFormatter = require("../helpers/argFormatter");

describe("containerWithMostWater", () => {
  const heights1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
  const expected1 = 49;
  // Explanation: heights1[1] and heights1[8] as container edges.
  // Length = 8 - 1. Height = 7

  const heights2 = [1, 1];
  const expected2 = 1;

  const heights3 = [4, 3, 2, 1, 4];
  const expected3 = 16;

  const heights4 = [1, 2, 1];
  const expected4 = 2;

  const testCases = [
    { args: [heights1], expected: expected1 },
    { args: [heights2], expected: expected2 },
    { args: [heights3], expected: expected3 },
    { args: [heights4], expected: expected4 },
  ];

  it("should return area of the container that can hold the most water.", () =>
    testCases.forEach(({ args, expected }) =>
      expect(containerWithMostWater(...args))
        .withContext(argFormatter(containerWithMostWater, args))
        .toEqual(expected)
    ));
});
