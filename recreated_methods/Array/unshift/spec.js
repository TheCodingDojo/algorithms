const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const arr1 = [1, 2, 3];
    const newItem1 = 0;
    const expected1 = 4;
    // after function is called, arr1 should be:
    const expectedArr1 = [0, 1, 2, 3];

    const arr2 = [];
    const newItem2 = "a";
    const expected2 = 1;
    // after function is called, arr2 should be:
    const expectedArr2 = ["a"];

    const testCases = [
      {
        args: [arr1, newItem1],
        expectedRet: expected1,
        expectedArr: expectedArr1,
      },
      {
        args: [arr2, newItem2],
        expectedRet: expected2,
        expectedArr: expectedArr2,
      },
    ];

    testCases.forEach(
      ({ args: [inputArr, newItem], expectedRet, expectedArr }, i) => {
        describe(`when given testCases[${i}]`, () => {
          it(`should return the new length after adding the new item.`, () => {
            expect(testFn(inputArr, newItem)).toBe(expectedRet);
          });

          it("should added the new item to the given array.", () => {
            expect(inputArr).toEqual(expectedArr);
          });
        });
      }
    );
  });
});
