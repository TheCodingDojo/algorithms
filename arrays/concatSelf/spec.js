const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const arr1 = ["a", "b", "c"];
    const expected1 = ["a", "b", "c", "a", "b", "c"];

    const arr2 = ["a"];
    const expected2 = ["a", "a"];

    const arr3 = [];
    const expected3 = [];

    const testCases = [
      { args: [arr1], expected: expected1, description: "three items" },
      { args: [arr2], expected: expected2, description: "one item" },
      { args: [arr3], expected: expected3, description: "empty array" },
    ];

    testCases.forEach(({ args, expected, description }) => {
      describe("when given " + description, () => {
        const inputArr = args[0];
        const inputArrCopy = [...inputArr];
        const outputArr = testFn(...args);

        it("should return a new array that contains all the given arrays items, and then all the same items repeated at the end.", () => {
          expect(outputArr).toEqual(expected);
        });

        it("should have returned a new array, not the given array.", () => {
          expect(outputArr).not.toBe(inputArr);
        });

        it("should not have mutated the given array.", () => {
          expect(inputArr).toEqual(inputArrCopy);
        });
      });
    });
  });
});
