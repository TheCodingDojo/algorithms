const { minToFront } = require("../../arrays/minToFront");
const argFormatter = require("../helpers/argFormatter");

describe("minToFront", () => {
  const nums1 = [1, 5, 2, 9];
  const expected1 = [1, 5, 2, 9];

  const nums2 = [5, 1, 0, 2, 3, 0];
  const expected2 = [0, 5, 1, 2, 3, 0];

  const testCases = [
    { argument: nums1, expected: expected1 },
    { argument: nums2, expected: expected2 },
  ];

  testCases.forEach(({ argument, expected }) => {
    const formattedArgs = argFormatter(minToFront, [argument]);
    const ret = minToFront(argument);

    it("should move the min value in the given array to the front and return the given array.", () => {
      expect(ret).withContext(formattedArgs).toEqual(expected);
    });

    it("should return the given array, not a new array.", () => {
      expect(ret).withContext(formattedArgs).toBe(argument);
    });
  });
});
