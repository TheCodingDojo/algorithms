const { orderedMultisetUnion } = require("../../arrays/orderedMultisetUnion");
const argFormatter = require("../helpers/argFormatter");

describe("orderedMultisetUnion", () => {
  const numsA = [1, 2, 2, 2, 7];
  const numsB = [2, 2, 6, 6, 7];
  const expected = [1, 2, 2, 2, 6, 6, 7];

  const testCases = [{ arguments: [numsA, numsB], expected: expected }];

  it("should return the ordered multiset union of the two given sorted arrays of integers.", () =>
    testCases.forEach(({ arguments, expected }) =>
      expect(orderedMultisetUnion(...arguments))
        .withContext(argFormatter(orderedMultisetUnion, arguments))
        .toEqual(expected)
    ));
});
