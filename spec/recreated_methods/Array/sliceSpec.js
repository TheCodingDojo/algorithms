const { slice } = require("../../../recreated_methods/Array/slice");
const argFormatter = require("../../helpers/argFormatter");

describe("slice", () => {
  const arr1 = ["a", "b", "c", "d", "e"];
  const startIdx1 = 0;
  const endIdx1 = 5;
  const expected1 = ["a", "b", "c", "d", "e"];

  const arr2 = ["a", "b", "c", "d", "e"];
  const startIdx2 = 0;
  const endIdx2 = 1;
  const expected2 = ["a"];

  const arr3 = ["a", "b", "c", "d", "e"];
  const startIdx3 = 1;
  const endIdx3 = 2;
  const expected3 = ["b"];

  const arr4 = ["a", "b", "c", "d", "e"];
  const startIdx4 = -100;
  const endIdx4 = 100;
  const expected4 = ["a", "b", "c", "d", "e"];

  const arr5 = ["a", "b", "c", "d", "e"];
  const startIdx5 = 0;
  const endIdx5 = 0;
  const expected5 = [];

  const arr6 = ["a", "b", "c", "d", "e"];
  const startIdx6 = 1;
  const endIdx6 = 1;
  const expected6 = [];

  const testCases = [
    { arguments: [arr1, startIdx1, endIdx1], expected: expected1 },
    { arguments: [arr2, startIdx2, endIdx2], expected: expected2 },
    { arguments: [arr3, startIdx3, endIdx3], expected: expected3 },
    { arguments: [arr4, startIdx4, endIdx4], expected: expected4 },
    { arguments: [arr5, startIdx5, endIdx5], expected: expected5 },
    { arguments: [arr6, startIdx6, endIdx6], expected: expected6 },
  ];

  testCases.forEach(({ arguments, expected }) => {
    const formattedArgs = argFormatter(slice, arguments);
    const givenArr = arguments[0];
    const ret = slice(...arguments);

    it("should return a slice of the given array from the given start index (inclusive) to the given end index (exclusive).", () => {
      expect(ret).withContext(formattedArgs).toEqual(expected);
    });

    it("should have returned a new array, not the given array", () => {
      expect(ret).withContext(formattedArgs).not.toBe(givenArr);
    });
  });
});
