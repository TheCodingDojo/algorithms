const { measureWaterLevels } = require("../../arrays/measureWaterLevels");
const argFormatter = require("../helpers/argFormatter");

describe("measureWaterLevels", () => {
  const riverLevels1 = [15, 17, 30];
  const expected1 = 15; // 30 - 15 = 15

  const riverLevels2 = [15, 17, 30, 14, 5, 16, 25, 9, 3];
  const expected2 = 20; // 25 - 5 = 20

  const riverLevels3 = [21, 18, 10, 11, 14, 9, 5, 13, 15, 7, 1, 6, 12, 4];
  const expected3 = 11; // 12 - 1 = 11

  const riverLevels4 = [1, 5];
  const expected4 = 4;

  const riverLevels5 = [5, 1];
  const expected5 = -1;

  const riverLevels6 = [9, 7, 7, 7];
  const expected6 = -1;

  const riverLevels7 = [42];
  const expected7 = -1;

  const testCases = [
    { arguments: [riverLevels1], expected: expected1 },
    { arguments: [riverLevels2], expected: expected2 },
    { arguments: [riverLevels3], expected: expected3 },
    { arguments: [riverLevels4], expected: expected4 },
    { arguments: [riverLevels5], expected: expected5 },
    { arguments: [riverLevels6], expected: expected6 },
    { arguments: [riverLevels7], expected: expected7 },
  ];

  it("should return the maximum rise in water-levels after and including the lowest point.", () =>
    testCases.forEach(({ arguments, expected }) =>
      expect(measureWaterLevels(...arguments))
        .withContext(argFormatter(measureWaterLevels, arguments))
        .toEqual(expected)
    ));
});
