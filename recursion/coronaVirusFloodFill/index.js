/* 
  Given 
    - a 2d array representing a social space as a grid
      Each grid space either has a string representing a person's name,
      or null if there is no person there
    - a point object {x: int, y: int} indicating where "patient zero" is in the grid

  return an array of all the names of the people who that corona virus will spread to due to not social distancing
  

  There will be exactly one grid space with the value "patient zero" that
  represents someone infected.

  Standing next to someone means there is someone in the grid space immediately
  above, below, left, or right. Infection cannot directly spread diagonally.

  Someone is social distancing if the grid space above, below, left, and right are null or
  there is no space next to them.

  For simplicity sake, let's assume if a person is standing
  next to someone who is or becomes infected, they will also become infected.

  Find everyone who corona virus will spread to starting from "patient zero" as the virus spreads outward.
*/

const socialSpaceGrid = [
  ["Jon2", "Jane2", null, null],
  [null, "Jon1", "Jane1", null],
  ["Jane4", "patient zero", null, "Jon3"],
  ["Jon4", null, "Jane3", null],
];
const patientZeroPoint = { x: 1, y: 2 };
const expected = ["Jane4", "Jon4", "Jon1", "Jane1", "Jane2", "Jon2"];
// order of output list does not matter

/**
 * Add params if needed for recursion
 * Recursively finds all the people who will become infected by being too
 * close to patient zero.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Array<string|null>>} grid A 2d array representing a social
 *    space.
 * @param {Object} point The location of patient zero.
 * @param {number} point.x The row index (idx of nested array)
 * @param {number} point.y The column index (idx of item in row).
 * @returns {Array<string|null>} Those that the infection has spread to
 *    due to proximity.
 */
function coronaVirusFloodFill(grid, point) {}

/*****************************************************************************/

/**
 * Recursively finds all the people who will become infected by being too
 * close to patient zero.
 * - Time: O(n^2) quadratic for square 2d grid matrix,
 *    or O(n * m) for non-square matrix,
 *    n = outer arr.length m = inner arr.length.
 * @param {Array<Array<string|null>>} grid A 2d array representing a social
 *    space.
 * @param {Object} point The location of patient zero.
 * @param {number} point.x The row index (idx of nested array)
 * @param {number} point.y The column index (idx of item in row).
 * @typedef {Array<string|null>} newCases
 * @param {Object<string, boolean>} visitedIndexesTable To avoid recursively
 *    visiting already visited indexes.
 * @returns {newCases} Those that the infection has spread to
 *    due to proximity.
 */
function coronaVirusFloodFill(
  grid,
  point,
  newCases = [],
  visitedIndexesTable = {}
) {
  const { x, y } = point;

  // if out of bounds or already visited, don't proceed
  if (
    y < 0 ||
    y > grid.length - 1 ||
    x < 0 ||
    x > grid[y].length - 1 ||
    visitedIndexesTable.hasOwnProperty(`${y}${x}`)
  ) {
    return;
  }

  // e.g., { 00: true, 01: true} means we've visited grid[0][0] and grid[0][1]
  // they key could be the name of the occupant, but if there was more than one person with same name that could cause problems
  visitedIndexesTable[`${y}${x}`] = true;
  const occupant = grid[y][x];

  if (occupant) {
    if (occupant !== "patient zero") {
      newCases.push(occupant);
    }

    // left, right, up, down
    const adjacentPoints = [
      { x: x - 1, y },
      { x: x + 1, y },
      { x, y: y + 1 },
      { x, y: y - 1 },
    ];

    // this is just to avoid writing the function call 4 times with 4 adjacent points
    for (const adjacentPoint of adjacentPoints) {
      coronaVirusFloodFill(grid, adjacentPoint, newCases, visitedIndexesTable);
    }
  }
  return newCases;
}

module.exports = { coronaVirusFloodFill };
