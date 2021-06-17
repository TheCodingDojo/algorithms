const { frequencyTableBuilder } = require("../../objects/freqTable");
const argFormatter = require("../helpers/argFormatter");

describe("frequencyTableBuilder", () => {
  const arr1 = ["a", "a", "a"];
  const expected1 = {
    a: 3,
  };

  const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
  const expected2 = {
    a: 2,
    b: 1,
    c: 3,
    B: 1,
    d: 1,
  };

  const arr3 = [];
  const expected3 = {};

  const testCases = [
    { args: [arr1], expected: expected1 },
    { args: [arr2], expected: expected2 },
    { args: [arr3], expected: expected3 },
  ];

  it("should return an object that has keys corresponding to the given array's items and values that are a count of the item's frequency.", () =>
    testCases.forEach(({ args, expected }) =>
      expect(frequencyTableBuilder(...args))
        .withContext(argFormatter(frequencyTableBuilder, args))
        .toEqual(expected)
    ));
});
