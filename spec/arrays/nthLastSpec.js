const { nthLast } = require("../../arrays/nthLast");
const argFormatter = require("../helpers/argFormatter");

describe("nthLast", () => {
  const arr = ["a", "b", "c", "d"];

  const testCases = [
    { args: [arr, 1], expected: "d" },
    { args: [arr, 2], expected: "c" },
    { args: [arr, 0], expected: null },
    { args: [arr, -1], expected: null },
  ];

  testCases.forEach(({ args, expected }) => {
    it(`should return the element at the nth index from the back of the given array.`, () => {
      expect(nthLast(...args))
        .withContext(argFormatter(nthLast, args))
        .toBe(expected);
    });
  });
});
