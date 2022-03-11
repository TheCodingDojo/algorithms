const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const arr1 = [1, 2, 3];
    const separator1 = ", ";
    const expected1 = "1, 2, 3";

    const arr2 = [1, 2, 3];
    const separator2 = "-";
    const expected2 = "1-2-3";

    const arr3 = [1, 2, 3];
    const separator3 = " - ";
    const expected3 = "1 - 2 - 3";

    const arr4 = [1];
    const separator4 = ", ";
    const expected4 = "1";

    const arr5 = [];
    const separator5 = ", ";
    const expected5 = "";

    const testCases = [
      {
        args: [arr1, separator1],
        expected: expected1,
        description: "three items to join with comma and a space",
      },
      {
        args: [arr2, separator2],
        expected: expected2,
        description: "three items to join with a hyphen",
      },
      {
        args: [arr3, separator3],
        expected: expected3,
        description:
          "three items to join with a hyphen and a space on both sides",
      },
      {
        args: [arr4, separator4],
        expected: expected4,
        description: "one item only",
      },
      {
        args: [arr5, separator5],
        expected: expected5,
        description: "an empty array ",
      },
    ];

    testCases.forEach(({ args, expected }, i) => {
      describe(`when given testCases[${i}]`, () => {
        it("should return a string that contains the items of the given array joined and separated by the given separator.", () => {
          expect(testFn(...args)).toEqual(expected);
        });
      });
    });
  });
});
