const { mergeSort } = require(".");

describe(mergeSort.name, () => {
  const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
  const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const testCases = [
    {
      arg: numsOrdered,
      expected: expected,
      description: "an already sorted array",
    },
    {
      arg: numsRandomOrder,
      expected: expected,
      description: "a randomly ordered array",
    },
    {
      arg: numsReversed,
      expected: expected,
      description: "a reverse-ordered array",
    },
  ];

  testCases.forEach(({ arg, expected, description }, i) => {
    describe(`when given ${description}`, () => {
      const arrCopy = [...arg];
      const actual = mergeSort(arg);

      it("should return a sorted array.", () => {
        expect(actual).toEqual(expected);
      });

      it("should have returned a new array.", () => {
        expect(actual).not.toBe(arg);
      });

      it("should not have mutated the given array.", () => {
        expect(arrCopy).toEqual(arg);
      });
    });
  });
});
