const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const arr1 = ["a", "a", "a"];
    const expected1 = {
      a: 3,
    };

    const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
    const expected2 = {
      a: 2,
      b: 1,
      c: 3,
      B: 1,
      d: 1,
    };

    const arr3 = [];
    const expected3 = {};

    const testCases = [
      {
        args: [arr1],
        expected: expected1,
        description: "an array of 'a' repeated three times",
      },
      {
        args: [arr2],
        expected: expected2,
        description:
          "an array of letters a-d with some dupes and different casing",
      },
      { args: [arr3], expected: expected3, description: "an empty array" },
    ];

    testCases.forEach(({ args, expected }, i) => {
      describe(`when given testCases[${i}]`, () => {
        it("should return an object that has keys corresponding to the given array's items and values that are a count of the item's frequency.", () => {
          const actual = testFn(...args);

          if (actual instanceof Map) {
            const pojo = [...actual.entries()].reduce((obj, [key, value]) => {
              obj[key] = value;
              return obj;
            }, {});
            expect(pojo).toEqual(expected);
          } else {
            expect(actual).toEqual(expected);
          }
        });
      });
    });
  });
});
