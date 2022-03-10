const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    // Last element:
    const arr1 = ["a", "b", "c", "d"];
    const nthLast1 = 1;
    const expected1 = "d";

    // Second to last element:
    const arr2 = ["a", "b", "c", "d"];
    const nthLast2 = 2;
    const expected2 = "c";

    const arr3 = ["a", "b", "c", "d"];
    const nthLast3 = 0;
    const expected3 = null;

    const arr4 = ["a", "b", "c", "d"];
    const nthLast4 = -1;
    const expected4 = null;

    const arr5 = [];
    const nthLast5 = 2;
    const expected5 = null;

    const testCases = [
      {
        args: [arr1, nthLast1],
        expected: expected1,
      },
      { args: [arr2, nthLast2], expected: expected2 },
      { args: [arr3, nthLast3], expected: expected3 },
      { args: [arr4, nthLast4], expected: expected4 },
      {
        args: [arr5, nthLast5],
        expected: expected5,
        description: `an empty array and nthToLast=${nthLast5}`,
      },
    ];

    testCases.forEach(
      ({
        args: [arr, nthLast],
        expected,
        description = `a non-empty array and nthToLast=${nthLast}`,
      }) => {
        describe("when given " + description, () => {
          it("should return the nth item from the back of the given array.", () => {
            expect(testFn(arr, nthLast)).toEqual(expected);
          });
        });
      }
    );
  });
});
