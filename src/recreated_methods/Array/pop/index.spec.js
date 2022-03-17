const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const arr1 = [1, 2, 3];
    const expected1 = 3;
    // what arr1 should be after running pop function
    const expectedArr1 = [1, 2];

    const arr2 = ["hello"];
    const expected2 = "hello";
    const expectedArr2 = []; // the only item was removed

    const arr3 = ["hello", "world"];
    const expected3 = "world";
    const expectedArr3 = ["hello"]; // the last item was removed

    const arr4 = [];
    const expected4 = undefined;
    const expectedArr4 = [];

    const testCases = [
      {
        args: [arr1],
        expectedRet: expected1,
        expectedArr: expectedArr1,
        description: "three numbers",
      },
      {
        args: [arr2],
        expectedRet: expected2,
        expectedArr: expectedArr2,
        description: "one word",
      },
      {
        args: [arr3],
        expectedRet: expected3,
        expectedArr: expectedArr3,
        description: "two words",
      },
      {
        args: [arr4],
        expectedRet: expected4,
        expectedArr: expectedArr4,
        description: "an empty array",
      },
    ];

    testCases.forEach(({ args: [arr], expectedRet, expectedArr }, i) => {
      describe(`when given testCases[${i}]`, () => {
        it("should return the last item from the given array.", () => {
          expect(testFn(arr)).toBe(expectedRet);
        });

        it("should have removed the last item from the given array.", () => {
          expect(arr).toEqual(expectedArr);
        });
      });
    });
  });
});
