const testFunctions = Object.values(
  require("../../intervals/mergeSortedIntervals")
);
const argFormatter = require("../helpers/argFormatter");

for (const func of testFunctions) {
  describe(func.name, () => {
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

    const testCases = [
      [[intervals1], expected1],
      [[intervals2], expected2],
    ];

    it("should merge overlapping intervals into a new array from a given array of sorted intervals.", () =>
      testCases.forEach(([args, expected]) =>
        expect(func(...args))
          .withContext(argFormatter(func, args))
          .toEqual(expected)
      ));
  });
}
