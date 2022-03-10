const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const newInv1 = [
      { name: "Grain of Rice", quantity: 9000 },
      { name: "Peanut Butter", quantity: 50 },
      { name: "Royal Jelly", quantity: 20 },
    ];
    const currInv1 = [
      { name: "Peanut Butter", quantity: 20 },
      { name: "Grain of Rice", quantity: 1 },
    ];
    const expected1 = [
      { name: "Peanut Butter", quantity: 70 },
      { name: "Grain of Rice", quantity: 9001 },
      { name: "Royal Jelly", quantity: 20 },
    ];

    const newInv2 = [];
    const currInv2 = [{ name: "Peanut Butter", quantity: 20 }];
    const expected2 = [{ name: "Peanut Butter", quantity: 20 }];

    const newInv3 = [{ name: "Peanut Butter", quantity: 20 }];
    const currInv3 = [];
    const expected3 = [{ name: "Peanut Butter", quantity: 20 }];

    const testCases = [
      {
        args: [newInv1, currInv1],
        expected: expected1,
        description: "one two inventory item and two existing items",
      },
      {
        args: [newInv2, currInv2],
        expected: expected2,
        description: "an empty array of new inventory",
      },
      {
        args: [newInv3, currInv3],
        expected: expected3,
        description: "one new inventory item and empty current inventory",
      },
    ];

    testCases.forEach(({ args, expected }, i) => {
      describe(`when given testCases[${i}]`, () => {
        it("should return whether or not the 1st given string is a rotation of the 2nd given string.", () => {
          expect(testFn(...args)).toEqual(expected);
        });
      });
    });
  });
});
