const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const arr1 = ["a", "b", "c"];
    const searchItem1 = "c";
    const expected1 = 2;

    const arr2 = ["a", "b", "c"];
    const searchItem2 = 5;
    const expected2 = -1;

    const arr3 = ["c", "a", "b", "c"];
    const searchItem3 = "c";
    const expected3 = 0;

    const arr4 = [];
    const searchItem4 = 5;
    const expected4 = -1;

    const testCases = [
      {
        args: [arr1, searchItem1],
        expected: expected1,
        description: "the search item at the end",
      },
      {
        args: [arr2, searchItem2],
        expected: expected2,
        description: "a search item that doesn't exist",
      },
      {
        args: [arr3, searchItem3],
        expected: expected3,
        description: "a search item that appears twice",
      },
      {
        args: [arr4, searchItem4],
        expected: expected4,
        description: "an empty array",
      },
    ];

    testCases.forEach(({ args, expected }, i) => {
      describe(`when given testCases[${i}]`, () => {
        it("should return the index of the given element in the given array.", () =>
          expect(testFn(...args)).toEqual(expected));
      });
    });
  });
});
