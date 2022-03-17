/*
  Given two arrays of ints

  return the symmetric differences, (aka disjunctive union)
    - these are the elements which are in either of the sets and not their intersection (the union without the intersection)
      think of a venn diagram filled in except the overlapping middle part is not filled in (the intersection is excluded)
    - i.e., if an element is in at least one of the arrays, but not in any other, it should be included (dupes included 1 time only)

  Venn Diagram Visualization:
    - https://miro.medium.com/max/3194/1*N3Z94nCNu8IHsFenIAELJw.jpeg
*/

const setA1 = [1, 2];
const setB1 = [2, 1];
const expected1 = [];
// Explanation: 1 and 2 are in both arrays so are excluded

const setA2 = [1, 2, 3];
const setB2 = [4, 5, 6];
const expected2 = [1, 2, 3, 4, 5, 6];
// Explanation: neither array has shared values, so all are included

const setA3 = [4, 1, 2, 3, 4];
const setB3 = [1, 2, 3, 5, 5];
const expected3 = [4, 5];
/* 
  Explanation: 1, 2, and 3 are shared so are excluded
    4 and 5 are included because they exist only in 1 array, but have duplicates, so only one copy of each is kept
*/

const setA4 = [];
const setB4 = [];
const expected4 = [];

const setA5 = [];
const setB5 = [1, 2, 3];
const expected5 = [1, 2, 3];

/**
 * Produces the symmetric differences, aka disjunctive union of two sets.
 * Venn Diagram Visualization:
 * @see https://miro.medium.com/max/3194/1*N3Z94nCNu8IHsFenIAELJw.jpeg
 * - Time: O(?).
 * - Space: O(?).
 * @param  {Array<number>} numsA
 * @param  {Array<number>} numsB
 *    Both given sets are multisets in any order (contain dupes).
 * @returns {Array<number>} The union of the given sets but excluding the shared
 *    values (union without intersection).
 *    i.e., if the element is in one array and NOT the other, it should be
 *    included in the return.
 */
function symmetricDifferences(numsA, numsB) {}

/*****************************************************************************/

/**
 * Produces the symmetric differences, aka disjunctive union of two sets.
 * Venn Diagram Visualization:
 * @see https://miro.medium.com/max/3194/1*N3Z94nCNu8IHsFenIAELJw.jpeg
 * - Time: O(2(n * m)) -> O(n * m), n = numsA.length, m = numsB.length the two
 *    constant 2 was because we are doing the n * m twice. The constant 2 is
 *    dropped.
 * - Space:  O(n + m) because potentially all items from each are kept.
 * @param  {Array<number>} numsA
 * @param  {Array<number>} numsB
 *    Both given sets are multisets in any order (contain dupes).
 * @returns {Array<number>} The union of the given sets but excluding the shared
 *    values (union without intersection).
 *    i.e., if the element is in one array and NOT the other, it should be
 *    included in the return.
 */
function symmetricDifferences(numsA, numsB) {
  const disjunctiveUnion = [];

  for (const n of numsA) {
    if (numsB.includes(n) === false && disjunctiveUnion.includes(n) === false) {
      disjunctiveUnion.push(n);
    }
  }

  for (const n of numsB) {
    if (numsA.includes(n) === false && disjunctiveUnion.includes(n) === false) {
      disjunctiveUnion.push(n);
    }
  }
  return disjunctiveUnion;
}

/**
 * - Time: O(2(n + m)) -> O(n) linear, n = numsA.length, m = numsB.length.
 *    Each is looped over twice, once from the arr then again over it's seen
 *    hash table.
 * - Space: O(2(n + m)) -> O(n) linear. Each arr is stored twice, once in it's
 *    own seen table and once in the output array.
 */
function symmetricDifferencesHashTable(numsA, numsB) {
  const seenA = {};
  const seenB = {};
  const disjunctiveUnion = [];

  // O(n)
  for (const num of numsA) {
    // adding the num as the value avoids having to convert the string key back to int
    // O(1) - constant can be ignored. This happens n times.
    seenA[num] = num;
  }

  // O(m)
  for (const num of numsB) {
    // O(1) - constant can be ignored. This happens m times.
    seenB[num] = num;
  }

  // O(n) - could be smaller because of dicts not storing dupes, but if no
  // dupes it's same length.
  for (const key in seenA) {
    // O(1)
    if (seenB.hasOwnProperty(key) === false) {
      // O(1)
      disjunctiveUnion.push(seenA[key]);
    }
  }

  // O(m)
  for (const key in seenB) {
    // O(1)
    if (seenA.hasOwnProperty(key) === false) {
      // O(1)
      disjunctiveUnion.push(seenB[key]);
    }
  }
  return disjunctiveUnion;
  /* 
  Add all the O notations (multiple for things inside loops) but ignore the
  constants.
    O(n) + O(m) + O(n) + O(m) -> O(2n) + O(2m) -> O(2(n + m))
    Drop the constant 2 and n + m is still linear: O(n) simplified.
  */
}

function symmetricDifferencesSets(numsA, numsB) {
  const disjunctiveUnion = new Set(numsA);
  // To dedupe set B as well so that when a num is deleted if won't accidentally
  // be re-added below if there were a dupe
  const setB = new Set(numsB);

  for (const item of setB) {
    if (disjunctiveUnion.has(item)) {
      disjunctiveUnion.delete(item);
    } else {
      disjunctiveUnion.add(item);
    }
  }
  return [...disjunctiveUnion];
}

function symmetricDifferencesMath(numsA, numsB) {
  // Find Union
  const union = new Set([...numsA, ...numsB]);

  // Find Intersect
  const setA = new Set(numsA);
  const intersect = new Set(numsB.filter((item) => setA.has(item)));

  // Remove Intersect from Union
  return [...union].filter((item) => !intersect.has(item));
}

module.exports = {
  symmetricDifferences,
  symmetricDifferencesHashTable,
  symmetricDifferencesSets,
  symmetricDifferencesMath,
};
