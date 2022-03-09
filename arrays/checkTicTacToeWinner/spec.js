const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const grid1 = [
      ["x", "x", ""],
      ["x", "x", "o"],
      ["", "o", ""],
    ];
    const expected1 = false;

    const grid2 = [
      ["", "o", "x"],
      ["o", "x", ""],
      ["x", "", ""],
    ];
    const expected2 = true;

    const grid3 = [
      ["x", "", "o"],
      ["x", "x", "o"],
      ["", "", "o"],
    ];
    const expected3 = true;

    const grid4 = [
      ["", "", ""],
      ["o", "o", ""],
      ["x", "x", "x"],
    ];
    const expected4 = true;

    const testCases = [
      {
        args: [grid1],
        expected: expected1,
        description: "multiple two in a row",
      },
      {
        args: [grid2],
        expected: expected2,
        description: "a bottom left to top right win for 'x'",
      },
      {
        args: [grid3],
        expected: expected3,
        description: "a right column win for 'o'",
      },
      {
        args: [grid4],
        expected: expected4,
        description: "a bottom row win for 'x'",
      },
    ];

    testCases.forEach(({ args, expected, description }) => {
      describe("when given " + description, () => {
        it("should determine if a tic tac toe winner exists.", () => {
          expect(testFn(...args)).toEqual(expected);
        });
      });
    });
  });
});
