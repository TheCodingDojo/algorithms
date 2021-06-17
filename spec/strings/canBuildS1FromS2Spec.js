const { canBuildS1FromS2 } = require("../../strings/canBuildS1FromS2");
const argFormatter = require("../helpers/argFormatter");

describe("canBuildS1FromS2", () => {
  const strA1 = "Hello World";
  const strB1 = "lloeh wordl";
  const expected1 = true;

  const strA2 = "Hey";
  const strB2 = "hello";
  const expected2 = false;
  // Explanation: second string is missing a "y"

  const strA3 = "hello";
  const strB3 = "helo";
  const expected3 = false;
  // Explanation: second string doesn't have enough "l" letters

  const strA4 = "hello";
  const strB4 = "lllheo";
  const expected4 = true;

  const testCases = [
    { args: [strA1, strB1], expected: expected1 },
    { args: [strA2, strB2], expected: expected2 },
    { args: [strA3, strB3], expected: expected3 },
    { args: [strA4, strB4], expected: expected4 },
  ];

  it("should return whether or not the first given string can be built using the characters from the second given string.", () => {
    testCases.forEach(({ args, expected }) => {
      expect(canBuildS1FromS2(...args))
        .withContext(argFormatter(canBuildS1FromS2, args))
        .toEqual(expected);
    });
  });
});
