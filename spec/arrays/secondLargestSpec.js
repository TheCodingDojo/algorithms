const { secondLargest } = require("../../arrays/secondLargest");
const argFormatter = require("../helpers/argFormatter");

// 2nd largest is 2nd
const nums1 = [2, 3, 1, 4];
const expected1 = 3;

// largest is first
const nums2 = [4, 1, 3, 2];
const expected2 = 3;

// largest duplicated first
const nums3 = [4, 4, 4, 1, 3, 2];
const expected3 = 3;

// 2nd largest is first
const nums4 = [3, 1, 4, 2];
const expected4 = 3;

// largest is 2nd
const nums5 = [3, 4, 2, 1];
const expected5 = 3;

const nums6 = [3, 3];
const expected6 = null;

const nums7 = [2];
const expected7 = null;

const nums8 = [];
const expected8 = null;

const testCases = [
  { args: [nums1], expected: expected1 },
  { args: [nums2], expected: expected2 },
  { args: [nums3], expected: expected3 },
  { args: [nums4], expected: expected4 },
  { args: [nums5], expected: expected5 },
  { args: [nums6], expected: expected6 },
  { args: [nums7], expected: expected7 },
  { args: [nums8], expected: expected8 },
];

describe("secondLargest", () => {
  testCases.forEach(({ args, expected }) => {
    const formattedArgs = argFormatter(secondLargest, args);
    const ret = secondLargest(...args);

    it("should return the second largest value from the given array, or null if it doesn't exist.", () => {
      expect(ret).withContext(formattedArgs).toEqual(expected);
    });
  });
});
