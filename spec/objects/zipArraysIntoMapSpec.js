const { zipArraysIntoMap } = require("../../objects/zipArraysIntoMap");
const argFormatter = require("../helpers/argFormatter");

describe("zipArraysIntoMap", () => {
  const keys1 = ["abc", 3, "yo"];
  const vals1 = [42, "wassup", true];
  const expected1 = {
    abc: 42,
    3: "wassup",
    yo: true,
  };

  const testCases = [{ args: [keys1, vals1], expected: expected1 }];

  it("should return an object that has the keys and values from the two given arrays", () =>
    testCases.forEach(({ args, expected }) =>
      expect(zipArraysIntoMap(...args))
        .withContext(argFormatter(zipArraysIntoMap, args))
        .toEqual(expected)
    ));
});
