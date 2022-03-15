const { multiplesOf3And5, sumOfMultiplesInRange } = require(".");

describe("multiplesOf3And5", () => {
  const testCases = [
    {
      arg: 0,
      expected: 0,
    },
    {
      arg: 10,
      expected: 23,
    },
    {
      arg: 1000,
      expected: 233168,
    },
    {
      args: 1,
      expected: 0,
    },
  ];

  testCases.forEach(({ arg, expected }) => {
    describe(`when given ${arg}`, () => {
      it(`should return the sum of the multiples of 3 or 5 up to the given exclusive number`, () => {
        expect(multiplesOf3And5(arg)).toBe(expected);
      });
    });
  });
});

describe("sumOfMultiplesInRange", () => {
  const testCases = [
    {
      args: [1, 10, 3, 5],
      expected: 23,
    },
    {
      args: [1, 1000, 3, 5],
      expected: 233168,
    },
    {
      args: [0, 0, 10, 20, 30],
      expected: 0,
    },
    {
      args: [1, 20, 2, 3, 7],
      expected: 124,
    },
    {
      args: [1, 1, 1],
      expected: 0,
    },
    {
      args: [30, 30, 2, 7, 13],
      expected: 0,
    },
  ];

  testCases.forEach(({ args: [start, stop, ...multiples], expected }) => {
    describe(`when given (${start}, ${stop}, ${multiples.join(", ")})`, () => {
      it(`should return the sum of the numbers in the range that are divisible by at least one multiple without a remainder.`, () => {
        expect(sumOfMultiplesInRange(start, stop, ...multiples)).toBe(expected);
      });
    });
  });
});
