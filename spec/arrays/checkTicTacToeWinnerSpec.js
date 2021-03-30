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
    { arguments: [grid1], expected: expected1 },
    { arguments: [grid2], expected: expected2 },
    { arguments: [grid3], expected: expected3 },
    { arguments: [grid4], expected: expected4 },
  ];

  it("should determine if there is a tic tac toe winner.", () =>
    testCases.forEach(({ arguments, expected }) =>
      expect(checkTicTacToeWinner(...arguments))
        .withContext(argFormatter(checkTicTacToeWinner, arguments))
        .toEqual(expected)
    ));
});
