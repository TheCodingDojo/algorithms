const { dropIt } = require("../../callbacks/dropIt");
const argFormatter = require("../helpers/argFormatter");

describe("dropIt", () => {
  const nums = [1, 4, 3, 6, 9, 15];

  const callback1 = (elem) => {
    return elem > 5;
  };
  const expected1 = [6, 9, 15];

  const callback2 = (elem) => {
    return elem > 2;
  };
  const expected2 = [4, 3, 6, 9, 15];

  const callback3 = (elem) => false;
  const expected3 = [];

  const testCases = [
    { arguments: [nums.slice(), callback1], expected: expected1 },
    { arguments: [nums.slice(), callback2], expected: expected2 },
    { arguments: [nums.slice(), callback3], expected: expected3 },
  ];

  testCases.forEach(({ arguments, expected }) => {
    const formattedArgs = argFormatter(dropIt, arguments);
    const ret = dropIt(...arguments);

    it("should remove every item in the given array starting from index 0 until the callback returns true, then return the given array.", () => {
      expect(ret).withContext(formattedArgs).toEqual(expected);
    });

    it("should have not have returned a new array.", () => {
      expect(ret).toBe(arguments[0]);
    });
  });
});
