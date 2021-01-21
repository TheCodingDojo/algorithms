const {
  compareVersionNumbers,
} = require("../../strings/compareVersionNumbers");
const argFormatter = require("../helpers/argFormatter");

describe("compareVersionNumbers", () => {
  const test1V1 = "0.1";
  const test1V2 = "1.1";
  const expected1 = -1;

  const test2V1 = "1.0.1";
  const test2V2 = "1";
  const expected2 = 1;

  const test3V1 = "7.5.2.4";
  const test3V2 = "7.5.3";
  const expected3 = -1;

  const test4V1 = "7.5.2.4";
  const test4V2 = "7.5.2";
  const expected4 = 1;

  const test5V1 = "1.01";
  const test5V2 = "1.001";
  const expected5 = 0;
  // Explanation: Ignoring leading zeroes, both “01” and “001" represent the same number “1”

  const test6V1 = "1.0.1";
  const test6V2 = "1";
  const expected6 = 1;

  const testCases = [
    { arguments: [test1V1, test1V2], expected: expected1 },
    { arguments: [test2V1, test2V2], expected: expected2 },
    { arguments: [test3V1, test3V2], expected: expected3 },
    { arguments: [test4V1, test4V2], expected: expected4 },
    { arguments: [test5V1, test5V2], expected: expected5 },
    { arguments: [test6V1, test6V2], expected: expected6 },
  ];

  it("should return the acronym version of the given string.", () => {
    testCases.forEach(({ arguments, expected }) => {
      expect(compareVersionNumbers(...arguments))
        .withContext(argFormatter(compareVersionNumbers, arguments))
        .toEqual(expected);
    });
  });
});
