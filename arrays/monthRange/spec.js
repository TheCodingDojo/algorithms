const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const start1 = 5;
    const end1 = 5;
    const expected1 = [5];

    const start2 = 5;
    const end2 = 6;
    const expected2 = [5, 6];

    const start3 = 10;
    const end3 = 3;
    const expected3 = [10, 11, 12, 1, 2, 3];

    const start4 = 12;
    const end4 = 12;
    const expected4 = [12];

    const start5 = 12;
    const end5 = 2;
    const expected5 = [12, 1, 2];

    const start6 = -1;
    const end6 = 4;
    const expected6 = [];

    const start7 = -1;
    const end7 = 15;
    const expected7 = [];

    const start8 = 5;
    const end8 = 15;
    const expected8 = [];

    const testCases = [
      {
        args: [start1, end1],
        expected: expected1,
        description: "the same start and end month",
      },
      {
        args: [start2, end2],
        expected: expected2,
        description: "two adjacent months in the middle of the year",
      },
      {
        args: [start3, end3],
        expected: expected3,
        description: "a late month and an early month",
      },
      {
        args: [start4, end4],
        expected: expected4,
        description: "the last month as for both start and end",
      },
      {
        args: [start5, end5],
        expected: expected5,
        description: "the last month and an early month",
      },
      {
        args: [start6, end6],
        expected: expected6,
        description: "only the start month out of bounds",
      },
      {
        args: [start7, end7],
        expected: expected7,
        description: "both months out of bounds",
      },
      {
        args: [start8, end8],
        expected: expected8,
        description: "only the end month out of bounds",
      },
    ];

    testCases.forEach(({ args, expected, description }) => {
      describe("when given " + description, () => {
        it("should return all the inclusive month numbers from the given range.", () => {
          expect(testFn(...args)).toEqual(expected);
        });
      });
    });
  });
});
