const { acronymize } = require("../../strings/acronymize");
const argFormatter = require("../helpers/argFormatter");

describe("acronymize", () => {
  const str1 = " there's no free lunch - gotta pay yer way. ";
  const expected1 = "TNFL-GPYW";

  const str2 = "Live from New York, it's Saturday Night!";
  const expected2 = "LFNYISN";

  const testCases = [
    { arguments: [str1], expected: expected1 },
    { arguments: [str2], expected: expected2 },
  ];

  it("should return the acronym version of the given string.", () =>
    testCases.forEach(({ arguments, expected }) =>
      expect(acronymize(...arguments))
        .withContext(argFormatter(acronymize, arguments))
        .toEqual(expected)
    ));
});
