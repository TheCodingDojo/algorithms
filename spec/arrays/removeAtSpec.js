const { removeAt } = require("../../arrays/removeAt");
const argFormatter = require("../helpers/argFormatter");

describe("removeAt", () => {
  const arr1 = ["a", "b", "c"];
  const removeIdx1 = 1;
  const expected1 = "b";
  // after function call, arr1 should be:
  const arr1Expected = ["a", "c"];

  const arr2 = ["a", "b", "c"];
  const removeIdx2 = 3;
  const expected2 = null;
  const arr2Expected = ["a", "b", "c"];

  const arr3 = ["a", "b", "c"];
  const removeIdx3 = -3;
  const expected3 = null;
  const arr3Expected = ["a", "b", "c"];

  const testCases = [
    {
      args: [arr1, removeIdx1],
      expectedRet: expected1,
      expectedArr: arr1Expected,
    },
    {
      args: [arr2, removeIdx2],
      expectedRet: expected2,
      expectedArr: arr2Expected,
    },
    {
      args: [arr3, removeIdx3],
      expectedRet: expected3,
      expectedArr: arr3Expected,
    },
  ];

  testCases.forEach(({ args, expectedRet, expectedArr }) => {
    const formattedArgs = argFormatter(removeAt, args);
    it("should remove and return the item at the specified index", () => {
      expect(removeAt(...args)).toEqual(expectedRet);
    });

    it("should have removed the item at the given index from the given array.", () => {
      expect(args[0]).toEqual(expectedArr);
    });
  });
});
