const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const arr1 = ["a", "b", "c"];
    const newItem1 = "d";
    const expected1 = 4;
    // what arr1 should be after running push function
    const expectedArr1 = ["a", "b", "c", "d"];

    const arr2 = [];
    const newItem2 = "a";
    const expected2 = 1;
    const expectedArr2 = ["a"];

    const testCases = [
      {
        args: [arr1, newItem1],
        expectedRet: expected1,
        expectedArr: expectedArr1,
        description: "a non empty array",
      },
      {
        args: [arr2, newItem2],
        expectedRet: expected2,
        expectedArr: expectedArr2,
        description: "an empty array",
      },
    ];

    testCases.forEach(
      ({ args: [arr, newItem], expectedRet, expectedArr }, i) => {
        describe(`when given testCases[${i}]`, () => {
          it("should return the new length after pushing the new item to the back of the array.", () => {
            expect(testFn(arr, newItem)).toBe(expectedRet);
          });

          it("should have added the new item to the back of the array.", () => {
            expect(arr).toEqual(expectedArr);
          });
        });
      }
    );
  });
});
