const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const obj1 = { name: "Zaphod", charm: "high", morals: "dicey" };
    const expected1 = { Zaphod: "name", high: "charm", dicey: "morals" };

    const testCases = [{ args: [obj1], expected: expected1 }];

    testCases.forEach(({ args, expected }, i) => {
      describe(`when given testCases[${i}]`, () => {
        it("should return an object that has the keys and values from the given object swapped so that the values are the keys.", () => {
          expect(testFn(...args)).toEqual(expected);
        });
      });
    });
  });
});
