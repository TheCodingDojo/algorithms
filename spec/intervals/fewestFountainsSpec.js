const { fewestFountains } = require("../../intervals/fewestFountains");
const argFormatter = require("../helpers/argFormatter");

describe("fewestFountains", () => {
  const garden1 = [1, 2, 1];
  const expected1 = 1;
  // Explanation:
  // garden[0] = 1, range = 0 to 1
  // garden[1] = 2, range = 0 to 2
  // garden[2] = 1, range = 1 to 2
  // Therefore, the fountain at position a[2] covers the whole garden.
  // Therefore, the required output is 1.

  const garden2 = [2, 1, 1, 2, 1];
  const expected2 = 2; // garden[0] and garden[3] || garden[1] and garden[4]

  const garden3 = [2, 4, 1, 3, 2, 1, 1, 1, 2, 1];
  const expected3 = 2; // garden[3] and garden[8] || garden[1] and garden[8]

  const garden4 = [2, 1, 1, 2, 2, 1, 1, 1, 1, 5];
  const expected4 = 3; // garden[0] and garden[3 || 4] and garden[9]

  const garden5 = [1, 1, 1, 1];
  const expected5 = 2;

  const garden6 = [1, 1, 1, 1, 1, 1, 1, 5, 1];
  const expected6 = 2; // garden[1] and garden[7]

  const garden7 = [1];
  const expected7 = 1;

  const garden8 = [1, 1, 2, 3, 2, 1, 1, 1, 1, 1, 11, 8];
  const expected8 = 1;

  const testCases = [
    { args: [garden1], expected: expected1 },
    { args: [garden2], expected: expected2 },
    { args: [garden3], expected: expected3 },
    { args: [garden4], expected: expected4 },
    { args: [garden5], expected: expected5 },
    { args: [garden6], expected: expected6 },
    { args: [garden7], expected: expected7 },
    { args: [garden8], expected: expected8 },
  ];

  it("should return fewest number of fountains that need to be used to achieve full garden water coverage.", () =>
    testCases.forEach(({ args, expected }) =>
      expect(fewestFountains(...args))
        .withContext(argFormatter(fewestFountains, args))
        .toEqual(expected)
    ));
});
