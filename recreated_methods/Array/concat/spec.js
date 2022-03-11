const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const arrA1 = ["a", "b"];
    const arrB1 = [1, 2, 3];
    const expected1 = ["a", "b", 1, 2, 3];

    const arrA2 = [1, 2, 3];
    const arrB2 = ["a", "b"];
    const expected2 = [1, 2, 3, "a", "b"];

    const testCases = [
      { args: [arrA1, arrB1], expected: expected1 },
      { args: [arrA2, arrB2], expected: expected2 },
    ];

    testCases.forEach(({ args, expected }, i) => {
      describe(`when given testCases[${i}]`, () => {
        it("should return a new array that has all the first given array's items and then the second given array's items.", () =>
          expect(testFn(...args)).toEqual(expected));
      });
    });
  });
});
