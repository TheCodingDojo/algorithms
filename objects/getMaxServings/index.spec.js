const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const recipe1 = {
      "organic fat": 99,
      "broccoli seeds": 1,
      okra: 1,
      potato: 1,
      spicy: 5,
      "gourmet memes": 4200,
    };

    const available1 = {
      "organic fat": 990,
      "broccoli seeds": 1,
      okra: 10,
      potato: 10,
      spicy: 50,
      "gourmet memes": 42000,
      sugar: 9001,
      spice: 5,
      "everything nice": 1,
      "triple point water": 5,
    };
    const expected1 = 1;
    // because only 1 broccoli seeds is available and that is the limiting ingredient

    // same as available1, except broccoli seeds has 10.
    const available2 = { ...available1, ["broccoli seeds"]: 10 };
    const expected2 = 10;

    // same as available1 except broccoli seeds key is deleted.
    const available3 = { ...available1 };
    delete available3["broccoli seeds"];
    const expected3 = 0; // broccoli seeds key doesn't exist in available ingredients

    const testCases = [
      { args: [recipe1, available1], expected: expected1 },
      { args: [recipe1, available2], expected: expected2 },
      { args: [recipe1, available3], expected: expected3 },
    ];

    testCases.forEach(({ args, expected }, i) => {
      describe(`when given testCases[${i}]`, () => {
        it("should return maximum amount of servings that can be made from the given recipe and available ingredients.", () =>
          expect(testFn(...args)).toEqual(expected));
      });
    });
  });
});
