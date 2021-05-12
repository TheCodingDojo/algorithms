const { orderedIntersection } = require("../../arrays/orderedIntersection");
const argFormatter = require("../helpers/argFormatter");

describe("orderedIntersection", () => {
  const numsA1 = [0, 1, 2, 2, 2, 7];
  const numsB1 = [2, 2, 6, 6, 7];
  const expected1 = [2, 7];
  
  const numsA2 = [0, 1, 2, 2, 2, 7];
  const numsB2 = [2, 2];
  const expected2 = [2];
  
  const numsA3 = [0, 1, 2, 2, 2, 7];
  const numsB3 = [10];
  const expected3 = [];

  const testCases = [
    { arguments: [numsA1, numsB1], expected: expected1 },
    { arguments: [numsA2, numsB2], expected: expected2 },
    { arguments: [numsA3, numsB3], expected: expected3 }
  ];

  it("should return the ordered deduped intersection of two given sorted arrays.", () =>
    testCases.forEach(({ arguments, expected }) =>
      expect(orderedIntersection(...arguments))
        .withContext(argFormatter(orderedIntersection, arguments))
        .toEqual(expected)
    ));
});
