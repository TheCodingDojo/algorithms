const { riverReading } = require("../../arrays/riverReading");
const argFormatter = require("../helpers/argFormatter");

describe("riverReading", () => {
  const riverLevels1 = [3, 1, 2, 4, 2, 3, 4];
  const expected1 = 3; // 4 - 1 = 3

  const riverLevels2 = [4, 3, 1, 4, 3, 7, 2, 1];
  const expected2 = 4; // 7 - 3 = 4

  const riverLevels3 = [3, 2, 2, 8, 5, 2, 4, 3, 1, 5, 21, 2];
  const expected3 = 20; // 21 - 1 = 20

  const riverLevels4 = [1, 5];
  const expected4 = 4;

  const riverLevels5 = [9, 7, 6, 3, 1];
  const expected5 = -1;

  const riverLevels6 = [9, 7, 7, 7];
  const expected6 = -1;

  const riverLevels7 = [5, 1];
  const expected7 = -1;

  const riverLevels8 = [42];
  const expected8 = -1;

  const testCases = [
    { arguments: [riverLevels1], expected: expected1 },
    { arguments: [riverLevels2], expected: expected2 },
    { arguments: [riverLevels3], expected: expected3 },
    { arguments: [riverLevels4], expected: expected4 },
    { arguments: [riverLevels5], expected: expected5 },
    { arguments: [riverLevels6], expected: expected6 },
    { arguments: [riverLevels7], expected: expected7 },
    { arguments: [riverLevels8], expected: expected8 },
  ];

  it("should return the max range out of all the sequences of unbroken ascending ints.", () =>
    testCases.forEach(({ arguments, expected }) =>
      expect(riverReading(...arguments))
        .withContext(argFormatter(riverReading, arguments))
        .toEqual(expected)
    ));
});
