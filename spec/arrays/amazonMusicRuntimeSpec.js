const { amazonMusicRuntime } = require("../../arrays/amazonMusicRuntime");
const argFormatter = require("../helpers/argFormatter");

describe("amazonMusicRuntime", () => {
  const busDuration1 = 300;
  const songDurations1 = [70, 120, 200, 45, 210, 40, 60, 50];
  const expected1 = [4, 6]; // 210, 60
  /* Explanation:
  There are multiple pairs that add up to 30 seconds before the bus duration.
  The pair at indexes 4 and 6 is the pair with the longest song that is chosen.
  */

  const busDuration2 = 300;
  const songDurations2 = [70, 120, 200, 230, 45, 210, 40, 60, 50];
  const expected2 = [3, 6]; // 230, 40
  /* Explanation:
  This is the pair with the longest song.
  */

  const busDuration3 = 300;
  const songDurations3 = [70, 120, 20, 23, 45, 21, 40, 60, 50];
  const expected3 = [-1, -1]; // not found.

  const testCases = [
    { arguments: [busDuration1, songDurations1], expected: expected1 },
    { arguments: [busDuration2, songDurations2], expected: expected2 },
    { arguments: [busDuration3, songDurations3], expected: expected3 },
  ];

  it("should return the pair of songs that is 30 seconds less than the given bus duration or [-1, -1].", () =>
    testCases.forEach(({ arguments, expected }) =>
      expect(amazonMusicRuntime(...arguments))
        .withContext(argFormatter(amazonMusicRuntime, arguments))
        .toEqual(jasmine.arrayWithExactContents(expected))
    ));
});
