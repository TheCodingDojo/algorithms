const { checkTicTacToeWinner } = require("../../arrays/checkTicTacToeWinner");
const argFormatter = require("../helpers/argFormatter");

describe("checkTicTacToeWinner", () => {
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
    { args: [grid1], expected: expected1 },
    { args: [grid2], expected: expected2 },
    { args: [grid3], expected: expected3 },
    { args: [grid4], expected: expected4 },
  ];

  it("should determine if there is a tic tac toe winner.", () =>
    testCases.forEach(({ args, expected }) =>
      expect(checkTicTacToeWinner(...args))
        .withContext(argFormatter(checkTicTacToeWinner, args))
        .toEqual(expected)
    ));
});
