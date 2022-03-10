const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const cents1 = 25;
    const expected1 = { quarter: 1 };

    const cents2 = 50;
    const expected2 = { quarter: 2 };

    const cents3 = 9;
    const expected3 = { nickel: 1, penny: 4 };

    const cents4 = 99;
    const expected4 = { quarter: 3, dime: 2, penny: 4 };

    const testCases = [
      { cents: cents1, expected: expected1 },
      { cents: cents2, expected: expected2 },
      { cents: cents3, expected: expected3 },
      { cents: cents4, expected: expected4 },
    ];

    testCases.forEach(({ cents, expected }, i) => {
      describe(`when given case ${cents} cents`, () => {
        it("should return an object detailing the fewest coins needed to get to the given cents.", () =>
          expect(testFn(cents)).toEqual(expected));
      });
    });
  });
});
