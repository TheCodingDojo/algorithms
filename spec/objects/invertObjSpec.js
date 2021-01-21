const { invertObj } = require("../../objects/invertObj");
const argFormatter = require("../helpers/argFormatter");

describe("invertObj", () => {
  const obj1 = { name: "Zaphod", charm: "high", morals: "dicey" };
  const expected1 = { Zaphod: "name", high: "charm", dicey: "morals" };

  const testCases = [{ arguments: [obj1], expected: expected1 }];

  it("should return an object that has the keys and values from the given object swapped so that the values are the keys.", () =>
    testCases.forEach(({ arguments, expected }) =>
      expect(invertObj(...arguments))
        .withContext(argFormatter(invertObj, arguments))
        .toEqual(expected)
    ));
});
