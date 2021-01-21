const { flatten2dArray } = require("../../arrays/flatten2dArray");
const argFormatter = require("../helpers/argFormatter");

const twoDimArr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const expected1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const twoDimArr2 = [[1], [2], [3]];
const expected2 = [1, 2, 3];

const twoDimArr3 = [[], [], [10, 20]];
const expected3 = [10, 20];

const testCases = [
  { arguments: [twoDimArr1], expected: expected1 },
  { arguments: [twoDimArr2], expected: expected2 },
  { arguments: [twoDimArr3], expected: expected3 },
];

describe("flatten2dArray", () => {
  testCases.forEach(({ arguments, expected }) => {
    const formattedArgs = argFormatter(flatten2dArray, arguments);
    const ret = flatten2dArray(...arguments);

    it("should flatten the given 2d array into a 1d array and preserver the order of the items.", () => {
      expect(ret).withContext(formattedArgs).toEqual(expected);
    });
  });
});
