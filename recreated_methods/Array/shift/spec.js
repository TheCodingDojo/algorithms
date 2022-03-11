const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const arr1 = [1, 2, 3];
    const expected1 = 1;
    // after running function arr1 should now be:
    const expectedArr1 = [2, 3];

    const arr2 = ["a", "b", "c", "d"];
    const expected2 = "a";
    // after running function arr2 should now be:
    const expectedArr2 = ["b", "c", "d"];

    const arr3 = [];
    const expected3 = undefined;
    const expectedArr3 = [];

    const testCases = [
      {
        arg: arr1,
        expectedRet: expected1,
        expectedArr: expectedArr1,
      },
      {
        arg: arr2,
        expectedRet: expected2,
        expectedArr: expectedArr2,
      },
      {
        arg: arr3,
        expectedRet: expected3,
        expectedArr: expectedArr3,
      },
    ];

    testCases.forEach(({ arg, expectedRet, expectedArr }, i) => {
      describe(`when given testCases[${i}] containing ${arg.length} items`, () => {
        it(`should return the first item from the given array.`, () => {
          expect(testFn(arg)).toBe(expectedRet);
        });

        it("should remove the first item and shift the remaining items down.", () => {
          expect(arg).toEqual(expectedArr);
        });
      });
    });
  });
});
