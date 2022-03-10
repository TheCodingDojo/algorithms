const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const arr1 = [1, 2, 3];
    const expected1 = [3, 2, 1];

    const arr2 = ["a", "b"];
    const expected2 = ["b", "a"];

    const arr3 = ["a"];
    const expected3 = ["a"];

    const arr4 = [];
    const expected4 = [];

    const testCases = [
      { args: [arr1], expected: expected1 },
      { args: [arr2], expected: expected2 },
      { args: [arr3], expected: expected3 },
      { args: [arr4], expected: expected4 },
    ];

    testCases.forEach(({ args, expected, description }) => {
      describe("when given " + description, () => {
        const inputArr = args[0];
        const outputArr = testFn(inputArr);

        it("should reverse the given array in place and return the given array.", () => {
          expect(outputArr).toEqual(expected);
        });

        it("should return the same array, not a new array.", () => {
          expect(inputArr).toBe(outputArr);
        });
      });
    });
  });
});
