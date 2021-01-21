const { orderedIntersection } = require("../../arrays/orderedIntersection");
const argFormatter = require("../helpers/argFormatter");

describe("orderedIntersection", () => {
  const numsA = [0, 1, 2, 2, 2, 7];
  const numsB = [2, 2, 6, 6, 7];
  const expected = [2, 7];

  const testCases = [{ arguments: [numsA, numsB], expected: expected }];

  it("should return the ordered deduped intersection of two given sorted arrays.", () =>
    testCases.forEach(({ arguments, expected }) =>
      expect(orderedIntersection(...arguments))
        .withContext(argFormatter(orderedIntersection, arguments))
        .toEqual(expected)
    ));
});
