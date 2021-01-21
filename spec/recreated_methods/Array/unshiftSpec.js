const { unshift } = require("../../../recreated_methods/Array/unshift");
const argFormatter = require("../../helpers/argFormatter");

describe("unshift", () => {
  const arr1 = [1, 2, 3];
  const newItem1 = 0;
  const expected1 = 4;
  // after function is called, arr1 should be:
  const arr1Expected = [0, 1, 2, 3];

  const arr2 = [];
  const newItem2 = "a";
  const expected2 = 1;
  // after function is called, arr2 should be:
  const arr2Expected = ["a"];

  const testCases = [
    { arguments: [arr1, newItem1], expected: expected1 },
    { arguments: [arr2, newItem2], expected: expected2 },
  ];

  const expectedArrays = [arr1Expected, arr2Expected];

  testCases.forEach(({ arguments, expected }, idx) => {
    const formattedArgs = argFormatter(unshift, arguments);

    it("should return the new length after the new item has been added.", () => {
      expect(unshift(...arguments)).toBe(expected);
    });

    it("should have added the given new item to the front of the array", () => {
      const givenArray = arguments[0];
      const expectedArr = expectedArrays[idx];
      expect(givenArray).withContext(formattedArgs).toEqual(expectedArr);
    });
  });
});
