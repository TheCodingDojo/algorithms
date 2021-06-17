const { getMaxServings } = require("../../objects/getMaxServings");
const argFormatter = require("../helpers/argFormatter");

describe("getMaxServings", () => {
  const recipe1 = {
    "organic fat": 99,
    "live squid": 1,
    "birds nest": 1,
    "fried flesh": 1,
    spicy: 5,
    "gourmet memes": 4200,
  };

  const available1 = {
    "organic fat": 990,
    "live squid": 1,
    "birds nest": 10,
    "fried flesh": 10,
    spicy: 50,
    "gourmet memes": 42000,
    sugar: 9001,
    spice: 5,
    "everything nice": 1,
    "triple point water": 5,
  };
  const expected1 = 1;
  // because only 1 live squid is available and that is the limiting ingredient

  // same as available1, except live squid has 10
  const available2 = { ...available1, ["live squid"]: 10 };
  const expected2 = 10;

  const available3 = { ...available1, ["live squid"]: 0 };
  const expected3 = 0;

  const testCases = [
    { args: [recipe1, available1], expected: expected1 },
    { args: [recipe1, available2], expected: expected2 },
    { args: [recipe1, available3], expected: expected3 },
  ];

  it("should return maximum amount of servings that can be made from the given recipe and available ingredients.", () =>
    testCases.forEach(({ args, expected }) => {
      expect(getMaxServings(...args))
        .withContext(argFormatter(getMaxServings, args))
        .toEqual(expected);
    }));
});
