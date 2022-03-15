/**
 * Sums multiples of 3 or 5 up to the given number exclusive.
 * @param {number} n The exclusive end number.
 * @returns {number} The sum.
 */
const multiplesOf3And5 = (n) =>
  [...new Array(n).keys()]
    .filter((n) => n % 3 === 0 || n % 5 === 0)
    .reduce((sum, n) => sum + n, 0);

/**
 * Sums numbers between start and end exclusive that are divisible without
 * a remainder one of the multiples.
 * @param {number} start
 * @param {number} stop
 * @param {...number} multiples
 * @returns {number}
 */
const sumOfMultiplesInRange = (start, stop, ...multiples) =>
  [...new Array(stop - start + 1).keys()]
    .filter((n) =>
      multiples.some((multiple) => (n + start - 1) % multiple === 0)
    )
    .reduce((sum, n) => sum + n, 0);

module.exports = {
  multiplesOf3And5,
  sumOfMultiplesInRange,
};
