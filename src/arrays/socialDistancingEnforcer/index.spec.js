const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const queue1 = [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1];
    const expected1 = false;

    const queue2 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1];
    const expected2 = true;

    const queue3 = [1, 0, 0, 0, 0, 0, 0, 0, 1];
    const expected3 = true;

    const queue4 = [];
    const expected4 = true;

    const testCases = [
      {
        args: [queue1],
        expected: expected1,
        description:
          "the first two people socially distancing but the next is not.",
      },
      {
        args: [queue2],
        expected: expected2,
        description: "all people socially distancing",
      },
      {
        args: [queue3],
        expected: expected3,
        description:
          "a person at the start and the end with enough distance between",
      },
      { args: [queue4], expected: expected4, description: "an empty array" },
    ];

    testCases.forEach(({ args, expected, description }) => {
      describe("when given " + description, () => {
        it("should return a boolean representing if every person is separated by at least 6 empty spaces.", () => {
          expect(testFn(...args)).toEqual(expected);
        });
      });
    });
  });
});
