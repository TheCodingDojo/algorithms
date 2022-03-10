const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const nums1 = [1, 4, 3, 6, 9, 15];

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
      {
        args: [nums1, callback1],
        expected: expected1,
        description: "a callback that checks for greater than 5",
      },
      {
        args: [nums1, callback2],
        expected: expected2,
        description: "a callback that checks for greater than 2",
      },
      {
        args: [nums1, callback3],
        expected: expected3,
        description: "a callback that always returns false",
      },
    ];

    testCases.forEach(({ args: [nums, cb], expected, description }) => {
      describe("when given " + description, () => {
        const numsCopy = [...nums];
        const actual = testFn(numsCopy, cb);

        it("should return the given array after removing every item from index 0 until the callback returns true.", () => {
          expect(actual).toEqual(expected);
        });

        it("should have mutated and returned the given array.", () => {
          expect(actual).toBe(numsCopy);
        });
      });
    });
  });
});
