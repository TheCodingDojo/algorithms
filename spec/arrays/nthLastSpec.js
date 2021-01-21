const { nthLast } = require("../../arrays/nthLast");
const argFormatter = require("../helpers/argFormatter");

describe("nthLast", () => {
  const arr = ["a", "b", "c", "d"];

  const testCases = [
    { arguments: [arr, 1], expected: "d" },
    { arguments: [arr, 2], expected: "c" },
    { arguments: [arr, 0], expected: null },
    { arguments: [arr, -1], expected: null },
  ];

  testCases.forEach(({ arguments, expected }) => {
    it(`should return the element at the nth index from the back of the given array.`, () => {
      expect(nthLast(...arguments))
        .withContext(argFormatter(nthLast, arguments))
        .toBe(expected);
    });
  });
});
