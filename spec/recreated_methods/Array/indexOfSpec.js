const { indexOf } = require("../../../recreated_methods/Array/indexOf");
const argFormatter = require("../../helpers/argFormatter");

describe("indexOf", () => {
  const testCases = [
    { arguments: [["a", "b", "c"], "c"], expected: 2 },
    { arguments: [["a", "b", "c"], 5], expected: -1 },
    { arguments: [["c", "a", "b", "c"], "c"], expected: 0 },
    { arguments: [[], 5], expected: -1 },
  ];

  testCases.forEach(({ arguments, expected }) => {
    it(`should return the index of the given element in the given array.`, () => {
      expect(indexOf(...arguments))
        .withContext(argFormatter(indexOf, arguments))
        .toBe(expected);
    });
  });
});
