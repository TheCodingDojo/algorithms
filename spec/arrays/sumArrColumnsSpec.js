const { sumArrColumns } = require("../../arrays/sumArrColumns");
const argFormatter = require("../helpers/argFormatter");

const arrA1 = [1, 2, 3];
const arrB1 = [4, 5, 6];
const expected1 = [5, 7, 9];

const testCases = [{ args: [arrA1, arrB1], expected: expected1 }];

describe("sumArrColumns", () => {
  testCases.forEach(({ args, expected }) => {
    const formattedArgs = argFormatter(sumArrColumns, args);
    const ret = sumArrColumns(...args);

    it("should return a new array that is the sum of the columns of the two given arrays", () => {
      expect(ret).withContext(formattedArgs).toEqual(expected);
    });
  });
});
