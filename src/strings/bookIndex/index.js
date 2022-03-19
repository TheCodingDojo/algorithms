/* 
Book Index

Given an array of ints representing page numbers
return a string with the page numbers formatted as page ranges when the nums
span a consecutive range.
*/

const nums1 = [1, 13, 14, 15, 37, 38, 70];
const expected1 = "1, 13-15, 37-38, 70";

const nums2 = [5, 6, 7, 8, 9];
const expected2 = "5-9";

const nums3 = [1, 2, 3, 7, 9, 15, 16, 17];
const expected3 = "1-3, 7, 9, 15-17";

/**
 * Turns the given arr of page numbers into a string of comma hyphenated
 * page ranges.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Page numbers.
 * @returns {string} The given page numbers as comma separated hyphenated
 *    page ranges.
 */
function bookIndex(nums) {}

/*****************************************************************************/

/**
 * - Time: O(n) linear.
 * - Space: O(n) linear.
 */
function bookIndex(pageNums = "") {
  let formattedPageNums = "";
  let pageRangeStartIdx = 0;

  for (let i = 0; i < pageNums.length; i++) {
    let currentPageNum = pageNums[i];
    let nextPageNum = pageNums[i + 1];
    let pageRangeStopIdx = i;

    // page range is not sequential
    if (currentPageNum + 1 !== nextPageNum) {
      // single page, no range
      if (pageRangeStartIdx === pageRangeStopIdx) {
        formattedPageNums += currentPageNum;
      }
      // we have a page range
      else {
        formattedPageNums += `${pageNums[pageRangeStartIdx]}-${pageNums[pageRangeStopIdx]}`;
      }
      if (i !== pageNums.length - 1) {
        formattedPageNums += ", ";
      }

      // Since we've added a page range
      // need to get start idx set up for next page range
      pageRangeStartIdx = i + 1;
    }
  }
  return formattedPageNums;
}

module.exports = { bookIndex };
