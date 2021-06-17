const { indexOf } = require("../../../recreated_methods/Array/indexOf");
const argFormatter = require("../../helpers/argFormatter");

describe("indexOf", () => {
  const testCases = [
    { args: [["a", "b", "c"], "c"], expected: 2 },
    { args: [["a", "b", "c"], 5], expected: -1 },
    { args: [["c", "a", "b", "c"], "c"], expected: 0 },
    { args: [[], 5], expected: -1 },
  ];

  testCases.forEach(({ args, expected }) => {
    it(`should return the index of the given element in the given array.`, () => {
      expect(indexOf(...args))
        .withContext(argFormatter(indexOf, args))
        .toBe(expected);
    });
  });
});
