const { secondLargest } = require("../../arrays/secondLargest");
const argFormatter = require("../helpers/argFormatter");

const nums1 = [2, 3, 1, 4];
const expected1 = 3;

const nums2 = [3, 3];
const expected2 = null;

const nums3 = [2];
const expected3 = null;

const nums4 = [];
const expected4 = null;

const testCases = [
  { arguments: [nums1], expected: expected1 },
  { arguments: [nums2], expected: expected2 },
  { arguments: [nums3], expected: expected3 },
  { arguments: [nums4], expected: expected4 },
];

describe("secondLargest", () => {
  testCases.forEach(({ arguments, expected }) => {
    const formattedArgs = argFormatter(secondLargest, arguments);
    const ret = secondLargest(...arguments);

    it("should return the second largest value from the given array, or null if it doesn't exist.", () => {
      expect(ret).withContext(formattedArgs).toEqual(expected);
    });
  });
});
