const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
    const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const testCases = [
      {
        arg: numsOrdered,
        expected: expected,
        description: "an already sorted array",
      },
      {
        arg: numsRandomOrder,
        expected: expected,
        description: "a randomly ordered array",
      },
      {
        arg: numsReversed,
        expected: expected,
        description: "a reverse-ordered array",
      },
    ];

    testCases.forEach(({ arg, expected, description }, i) => {
      describe(`when given ${description}`, () => {
        const actual = testFn(arg);

        it("should return a sorted array.", () => {
          expect(actual).toEqual(expected);
        });
      });
    });
  });
});
