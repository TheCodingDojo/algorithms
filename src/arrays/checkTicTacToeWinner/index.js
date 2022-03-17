/* 
  Interview question from Slalom Consulting, LLC

  Given a 3x3 Two Dimensional array representing a tic tac toe board,
  return whether or not there is a winner.

  A winner is when there is 3 "x" values or 3 "o" values in a row,
  column, or diagonal.
*/

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

/**
 * Determines if there is a tic tac toe winner based on three in a row for "x"
 * or "o".
 * Time: O(?).
 * Space: O(?).
 * @param {Array<Array<string>>} grid
 * @returns {boolean} Whether there is a winner or not.
 */
function checkTicTacToeWinner(grid) {}

/*****************************************************************************/

/**
 * Hard coded version. If you present a hard-coded solution for most algos, you
 * will likely be asked a follow up question about if the input size gets
 * too large to hard-code.
 * Determines if there is a tic tac toe winner based on three in a row for "x"
 * or "o".
 * @param {Array<Array<string>>} g A 2 dim array tic tac toe grid.
 * @returns {boolean} Whether there is a winner or not.
 */
const checkTicTacToeWinnerHardCoded = (g) =>
  [
    g[0][0] + g[0][1] + g[0][2], // row1
    g[1][0] + g[1][1] + g[1][2], // row2
    g[2][0] + g[2][1] + g[2][2], // row3
    g[0][0] + g[1][0] + g[2][0], // col1
    g[0][1] + g[1][1] + g[2][1], // col2
    g[0][2] + g[1][2] + g[2][2], // col3
    g[0][0] + g[1][1] + g[2][2], // top left to right
    g[0][2] + g[1][1] + g[2][0], // top right to left
  ].some((str) => str === "xxx" || str === "ooo");

/**
 * Determines if there is a tic tac toe winner based on three in a row for "x"
 * or "o".
 * Using loops is only an advantage over the hard-coded version if the game can
 * be expanded to a larger grid.
 * Time: O(n^2). n = grid.length.
 * Space: O(n^2). colSums stores every letter of every column.
 * @param {Array<Array<string>>} grid
 * @returns {boolean} Whether there is a winner or not.
 */
function checkTicTacToeWinner(grid) {
  let diag1Concat = "";
  let diag2Concat = "";
  const colConcats = [];

  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    let rowConcat = "";

    for (let j = 0; j < row.length; j++) {
      const colVal = row[j];
      rowConcat += colVal;
      // If first time on column, (undefined || "") will return "".
      colConcats[j] = (colConcats[j] || "") + colVal;

      if (i === j) {
        diag1Concat += colVal;
      }

      if (j === row.length - i - 1) {
        diag2Concat += colVal;
      }

      /**
       * Check during the loop for early exits. Early exits only really matter
       * if the grid could become large (could be a bonus add on requirement)
       *
       * In order to check only when we know a row, col, or diag summation is
       * done, we would need if checks to determine if the sum is done, which
       * won't reduce the # of conditions being checked here.
       *
       * .some here is used just to avoid a large OR condition with the same
       * comparison repeated for diff vars.
       */
      if (
        [rowConcat, colConcats[j], diag1Concat, diag2Concat].some(
          (concat) => concat === "xxx" || concat === "ooo"
        )
      ) {
        return true;
      }
    }
  }
  return false;
}

// Code golf
const checkTicTacToeWinner2 = (g) =>
  [
    // array of concatenated row vals
    g.map((row) => row.reduce((s, curr) => s + curr)),
    // array of concatenated col vals
    g.map((_, i) => g.reduce((s, _, j) => s + g[j][i], "")),
    // array of concatenated diagonals
    [
      g.reduce((s, _, i) => s + g[i][i], ""),
      g.reduce((s, _, i) => s + g[i][g.length - 1 - i], ""),
    ],
  ].some((arr) => arr.some((s) => s === "xxx" || s === "ooo"));

module.exports = {
  checkTicTacToeWinner,
  checkTicTacToeWinner2,
  checkTicTacToeWinnerHardCoded,
};
