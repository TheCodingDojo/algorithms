const { concatArrWithSelf } = require("../../arrays/concatSelf");
const argFormatter = require("../helpers/argFormatter");

describe("concatSelf", () => {
  const arr1 = ["a", "b", "c"];
  const expected1 = ["a", "b", "c", "a", "b", "c"];

  const arr2 = ["a"];
  const expected2 = ["a", "a"];

  const arr3 = [];
  const expected3 = [];

  const testCases = [
    { args: [arr1], expected: expected1 },
    { args: [arr2], expected: expected2 },
    { args: [arr3], expected: expected3 },
  ];

  testCases.forEach(({ args, expected }) => {
    const formattedArgs = argFormatter(concatArrWithSelf, args);
    const inputArr = args[0];
    const inputArrCopy = [...inputArr];
    const outputArr = concatArrWithSelf(inputArr);

    it("should return a new array that contains all the given arrays items, and then all the same items repeated at the end.", () => {
      expect(outputArr).withContext(formattedArgs).toEqual(expected);
    });

    it("should have returned a new array, not the given array.", () => {
      expect(outputArr).not.toBe(inputArr);
    });

    it("should not have mutated the given array.", () => {
      expect(inputArr).toEqual(inputArrCopy);
    });
  });
});
