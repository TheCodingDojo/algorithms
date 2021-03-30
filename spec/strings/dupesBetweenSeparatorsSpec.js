const {
  dupesBetweenSeparators,
} = require("../../strings/dupesBetweenSeparators");
const argFormatter = require("../helpers/argFormatter");

describe("dupesBetweenSeparators", () => {
  const str1 = "to be,; --or\tnot  : ;;; to-:: be";
  const expected1 = ["to", "be"];

  const testCases = [{ arguments: [str1], expected: expected1 }];

  it("should return an array of the duplicate words between the specified separators.", () =>
    testCases.forEach(({ arguments, expected }) =>
      expect(dupesBetweenSeparators(...arguments))
        .withContext(argFormatter(dupesBetweenSeparators, arguments))
        .toEqual(expected)
    ));
});
