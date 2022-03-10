const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const keys1 = ["abc", 3, "yo"];
    const vals1 = [42, "wassup", true];
    const expected1 = {
      abc: 42,
      3: "wassup",
      yo: true,
    };

    const keys2 = [];
    const vals2 = [];
    const expected2 = {};

    const testCases = [
      {
        args: [keys1, vals1],
        expected: expected1,
        description: "3 key value pairs",
      },
      {
        args: [keys2, vals2],
        expected: expected2,
        description: "an empty array for both keys and values",
      },
    ];

    testCases.forEach(({ args, expected }, i) => {
      describe(`when given testCases[${i}]`, () => {
        it("should return an object that has the keys and values from the two given arrays.", () =>
          expect(testFn(...args)).toEqual(expected));
      });
    });
  });
});
