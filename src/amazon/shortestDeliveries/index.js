/* 
Given a 2d array of delivery coordinates and `numDeliveries`

Return the `numDeliveries` shortest delivery coordinates based on the their shortest
distance from the starting coordinate of [0, 0].

Distance should always be calculated from [0, 0] to the other coordinate.

HINT: draw a graph with the [x, y] coords then look up how to find the distance
between two points on a graph.
*/

const coordinates1 = [
  [-2, 5],
  [3, 4],
  [1, 0],
];
const numDeliveries1 = 2;
/* 
Explanation: [1, 0] is the shortest distance from [0, 0]
and [3, 4] is the 2nd shortest.
*/
const expected1 = [
  [1, 0],
  [3, 4],
];

/**
 * Finds the `numDeliveries` amount of delivery coordinates that are ordered by shortest
 * distance to the starting point of [0, 0].
 * - Time: O(?).
 * - Space: O(?).
 * @param {[[number, number]]} deliveries A 2d array of delivery coordinates.
 * @param {number} numDeliveries The amount of delivery coordinates to return that are
 *    ordered by shortest distance to the starting point of [0, 0].
 */
function shortestDeliveries(deliveries = [], numDeliveries = 1) {}

/*****************************************************************************/

const { BinaryHeap } = require("../../data_structures/BinaryHeap");

/* 
This algo isn't a great example of a BinaryHeap being better than .sort because
the solution using .sort did not have to actually remove items from the sorted
array while also supporting adding new items to the sorted array while
maintaining the sort, which is where BinaryHeaps help with time efficiency.
*/

/**
 * Finds the `numDeliveries` amount of delivery coordinates that are ordered by
 * shortest distance to the starting point of [0, 0].
 * - Time: O(n + (n * log(n)) + n) -> O(2n + (n * log(n)))
 *    -> O(n + (n * log(n))) linearithmic.
 *    `.sort` is n log(n) and the rest are O(n). At worst, numDeliveries is
 *    the full length so that's why the `.slice` is also O(n).
 * - Space: O(numDeliveries) since that many are returned.
 * @param {[number, number][]} deliveryCoords A 2d array of delivery coordinates.
 * @param {number} numDeliveries The amount of coordinates to return.
 * @returns {[number, number][]}
 */
const shortestDeliveries1 = (
  deliveryCoords = [],
  numDeliveries = 1,
  startCoord = [0, 0]
) =>
  deliveryCoords
    // Copy to avoid mutating the original with .sort.
    .slice()
    .sort(
      (coordA, coordB) =>
        distanceBetweenCoords(startCoord, coordA) -
        distanceBetweenCoords(startCoord, coordB)
    )
    .slice(0, numDeliveries);

/**
 * - Time: O(n log(n) + n log(n)) -> O(2n log(n)) -> O(n log(n)) linearithmic.
 *    At worst `numDeliveries` can be all of them, which is `n` amount.
 *    from `.heapify` + `extractMany`.
 * - Space: O(numDeliveries) since that many are returned.
 * @param {[number, number][]} deliveryCoords A 2d array of delivery coordinates.
 * @param {number} numDeliveries The amount of delivery coordinates to return that are
 *    ordered by shortest distance to the starting point of [0, 0].
 */
function shortestDeliveries2(
  deliveryCoords = [],
  numDeliveries = 1,
  startCoord = [0, 0]
) {
  /** @type {BinaryHeap<[number, number][]>} */
  const heapOfCoordinates = BinaryHeap.heapify(
    deliveryCoords,
    (coordA, coordB) =>
      distanceBetweenCoords(startCoord, coordA) -
      distanceBetweenCoords(startCoord, coordB)
  );

  return heapOfCoordinates.extractMany(numDeliveries);
}

/**
 * Calculates the distance between two coordinates.
 * @param {[number, number]} coordA
 * @param {[number, number]} coordB
 * @returns {number}
 */
function distanceBetweenCoords([x1, y1], [x2, y2]) {
  return pythagorean(x2 - x1, y2 - y1);
}

/**
 *
 * @param {number} sideA
 * @param {number} sideB
 * @returns {number}
 */
function pythagorean(sideA, sideB) {
  return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
}

module.exports = {
  shortestDeliveries1,
  shortestDeliveries2,
};
