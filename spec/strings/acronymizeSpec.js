const { acronymize } = require("../../strings/acronymize");
const argFormatter = require("../helpers/argFormatter");

describe("acronymize", () => {
  const str1 = " there's no free lunch - gotta pay yer way. ";
  const expected1 = "TNFL-GPYW";

  const str2 = "Live from New York, it's Saturday Night!";
  const expected2 = "LFNYISN";

  const testCases = [
    { args: [str1], expected: expected1 },
    { args: [str2], expected: expected2 },
  ];

  it("should return the acronym version of the given string.", () =>
    testCases.forEach(({ args, expected }) =>
      expect(acronymize(...args))
        .withContext(argFormatter(acronymize, args))
        .toEqual(expected)
    ));
});
