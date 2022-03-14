const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const arrA1 = [1, 2, 3];
    const arrB1 = ["a", "b", "c"];
    const expected1 = [1, "a", 2, "b", 3, "c"];

    const arrA2 = [1, 3];
    const arrB2 = [2, 4, 6, 8];
    const expected2 = [1, 2, 3, 4, 6, 8];

    const arrA3 = [1, 3, 5, 7];
    const arrB3 = [2, 4];
    const expected3 = [1, 2, 3, 4, 5, 7];

    const arrA4 = [];
    const arrB4 = [42, 0, 6];
    const expected4 = [42, 0, 6];

    const testCases = [
      {
        args: [arrA1, arrB1],
        expected: expected1,
        description: "three numbers and three letters",
      },
      {
        args: [arrA2, arrB2],
        expected: expected2,
        description: "a first array half the size of the second array",
      },
      {
        args: [arrA3, arrB3],
        expected: expected3,
        description: "a second array half the size of the first array",
      },
      {
        args: [arrA4, arrB4],
        expected: expected4,
        description: "the first array empty",
      },
    ];

    testCases.forEach(({ args, expected, description }) => {
      describe("when given " + description, () => {
        it("should return a new array that contains the items of the given arrays interleaved (alternated).", () => {
          expect(testFn(...args)).toEqual(expected);
        });
      });
    });
  });
});
