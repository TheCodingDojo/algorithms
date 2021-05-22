const { socialDistancingEnforcer } = require("../../arrays/socialDistancingEnforcer");
const argFormatter = require("../helpers/argFormatter");

describe("socialDistancingEnforcer", () => {
  const queue1 = [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1];
  const expected1 = false;
  
  const queue2 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1];
  const expected2 = true;

  const testCases = [{ arguments: [queue1], expected: expected1 }, { arguments: [queue2], expected: expected2 }];

  it("should return a boolean representing if every person is separated by at least 6 empty spaces.", () =>
    testCases.forEach(({ arguments, expected }) =>
      expect(socialDistancingEnforcer(...arguments))
        .withContext(argFormatter(socialDistancingEnforcer, arguments))
        .toEqual(expected)
    ));
});
