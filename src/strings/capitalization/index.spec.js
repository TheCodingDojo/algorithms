const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const strings1 = ["hello", "world"];
    const expectedStrings1 = ["Hello", "World"];

    const testCases = [
      {
        arr: strings1,
        expected: expectedStrings1,
      },
    ];

    testCases.forEach(({ arr, expected }, i) => {
      describe(`when given testCases[${i}]`, () => {
        const actual = testFn(arr);

        it("should have capitalized the first letter of each word.", () => {
          expect(actual).toEqual(expected);
        });

        it("should have mutated the given array", () => {
          expect(arr).toBe(actual);
        });
      });
    });
  });
});
