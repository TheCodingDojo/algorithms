const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
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
      {
        args: [riverLevels1],
        expected: expected1,
        description: "a small sorted array",
      },
      {
        args: [riverLevels2],
        expected: expected2,
        description:
          "multiple rising cycles where the solution doesn't use the min or the max",
      },
      {
        args: [riverLevels3],
        expected: expected3,
        description:
          "a falling cycle to start where the solution uses the min but not the max",
      },
      {
        args: [riverLevels4],
        expected: expected4,
        description: "only two measurements that rise",
      },
      {
        args: [riverLevels5],
        expected: expected5,
        description: "only two measurements that fall",
      },
      {
        args: [riverLevels6],
        expected: expected6,
        description: "a falling cycle with the last 3 as duplicates",
      },
      {
        args: [riverLevels7],
        expected: expected7,
        description: "a single measurement",
      },
    ];

    testCases.forEach(({ args, expected, description }) => {
      describe("when given " + description, () => {
        it("should return the maximum rise in water-levels after and including the lowest point.", () => {
          expect(testFn(...args)).toEqual(expected);
        });
      });
    });
  });
});
