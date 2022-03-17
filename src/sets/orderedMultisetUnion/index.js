/* 
  Union Sorted Arrays

  Efficiently combine two already-sorted multiset arrays
  into a new sorted array containing the multiset union.

  Unions by default will take the set of dupes
  that has the highest occurrences from one array.

  Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const nums1A = [1, 2, 2, 2, 7];
const nums1B = [2, 2, 6, 6, 7];
const expected1 = [1, 2, 2, 2, 6, 6, 7];

const nums2A = [1, 1, 2, 2, 2, 3, 7, 10, 20, 30];
const nums2B = [2, 6, 6, 7];
const expected2 = [1, 1, 2, 2, 2, 3, 6, 6, 7, 10, 20, 30];

const nums3A = [];
const nums3B = [2, 2, 3, 3, 3];
const expected3 = [2, 2, 3, 3, 3];

const nums4A = [2, 2, 3, 3, 3];
const nums4B = [];
const expected4 = [2, 2, 3, 3, 3];

const nums5A = [];
const nums5B = [];
const expected5 = [];
/* 
  Explanation: Every int from each set is included in the result, for dupes, like 2, include it 3 times,
  because it occurs 3 times at most in ONE set
*/

/**
 * Combines two already sorted multiset arrays into an ordered multiset union
 * Venn Diagram Visualization (top):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA Both sets are sorted multisets
 *    (contain dupes).
 * @param {Array<number>} sortedB
 * @returns {Array<number>} An ordered multiset union of the given sets.
 *    The return should include dupes, but the amount of dupes for each int
 *    should be based on the max amount that dupe appears from one set,
 *    not the combined amount from both sets.
 */
function orderedMultisetUnion(sortedA, sortedB) {}

/*****************************************************************************/

/**
 * Combines two already sorted multiset arrays into an ordered multiset union
 * Venn Diagram Visualization (top):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(n + m) linear, n = sortedA.length, m = sortedB.length because
 *  we may be pushing from only 1 array at a time while the other array's idx
 *  is staying in place. At worst, we push all items from 1 array when that
 *  array has all smaller items and then iterate through the 2nd array after.
 * - Space: O(n + m) where n = sortedA.length, m = sortedB.length because if
 *    there are no dupes all will be kept from both.
 * @param {Array<number>} sortedA Both sets are sorted multisets
 *    (contain dupes).
 * @param {Array<number>} sortedB
 * @returns {Array<number>} An ordered multiset union of the given sets.
 *    The return should include dupes, but the amount of dupes for each int
 *    should be based on the max amount that dupe appears from one set,
 *    not the combined amount from both sets.
 */
function orderedMultisetUnion(sortedA, sortedB) {
  const union = [];
  let idxA = 0;
  let idxB = 0;

  while (idxA < sortedA.length || idxB < sortedB.length) {
    if (idxA === sortedA.length) {
      // sortedB is longer, push in all remaining sortedB nums
      union.push(sortedB[idxB++]);
      continue;
    } else if (idxB === sortedB.length) {
      // sortedA is longer, push in remaining sortedA nums
      union.push(sortedA[idxA++]);
      continue;
    }

    if (sortedA[idxA] === sortedB[idxB]) {
      union.push(sortedA[idxA++]);
      idxB++; // since both were same, increment both
    } else if (sortedA[idxA] < sortedB[idxB]) {
      union.push(sortedA[idxA++]);
    } else {
      union.push(sortedB[idxB++]);
    }
  }
  return union;
}

function orderedMultisetUnion2(sortedA, sortedB) {
  let idxA = 0;
  let idxB = 0;

  const union = [];
  const len1 = sortedA.length;
  const len2 = sortedB.length;

  while (idxA < len1 && idxB < len2) {
    const n1 = sortedA[idxA],
      n2 = sortedB[idxB];

    if (n1 === n2) {
      union.push(n1);
      idxA++;
      idxB++;
    } else if (n1 < n2) {
      union.push(n1);
      idxA++;
    } else {
      union.push(n2);
      idxB++;
    }
  }
  // arrays might be different lengths, if any elems are remaining, concat them
  return union.concat(sortedA.slice(idxA)).concat(sortedB.slice(idxB));
}

module.exports = { orderedMultisetUnion, orderedMultisetUnion2 };
