const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const intervals1 = [
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ];
    const expected1 = [
      [1, 6],
      [8, 10],
      [15, 18],
    ];
    // Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

    const intervals2 = [
      [1, 4],
      [4, 5],
    ];
    const expected2 = [[1, 5]];
    // Explanation: Intervals [1,4] and [4,5] are considered overlapping.

    const intervals3 = [
      [2, 4],
      [8, 10],
      [15, 20],
    ];
    const expected3 = [
      [2, 4],
      [8, 10],
      [15, 20],
    ];

    const testCases = [
      {
        args: [intervals1],
        expected: expected1,
        description: "the first two intervals overlapping",
      },
      {
        args: [intervals2],
        expected: expected2,
        description: "only two intervals that overlap",
      },
      {
        args: [intervals3],
        expected: expected3,
        description: "no overlapping intervals",
      },
    ];

    testCases.forEach(({ args, expected, description }) => {
      describe("when given " + description, () => {
        it("should merge overlapping intervals into a new array from a given array of sorted intervals.", () =>
          expect(testFn(...args)).toEqual(expected));
      });
    });
  });
});
