const { join } = require("../../../recreated_methods/Array/join");
const argFormatter = require("../../helpers/argFormatter");

describe("join", () => {
  const arr1 = [1, 2, 3];
  const separator1 = ", ";
  const expected1 = "1, 2, 3";

  const arr2 = [1, 2, 3];
  const separator2 = "-";
  const expected2 = "1-2-3";

  const arr3 = [1, 2, 3];
  const separator3 = " - ";
  const expected3 = "1 - 2 - 3";

  const arr4 = [1];
  const separator4 = ", ";
  const expected4 = "1";

  const arr5 = [];
  const separator5 = ", ";
  const expected5 = "";

  const testCases = [
    { args: [arr1, separator1], expected: expected1 },
    { args: [arr2, separator2], expected: expected2 },
    { args: [arr3, separator3], expected: expected3 },
    { args: [arr4, separator4], expected: expected4 },
    { args: [arr5, separator5], expected: expected5 },
  ];

  it("should return a string that contains the items of the given array joined and separated by the given separator.", () =>
    testCases.forEach(({ args, expected }) =>
      expect(join(...args))
        .withContext(argFormatter(join, args))
        .toEqual(expected)
    ));
});
