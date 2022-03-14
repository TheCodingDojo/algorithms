const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const friend1 = {
      firstName: "Friend",
      lastName: "One",
      isSocialDistancing: false,
      hasCovid: true,
    };

    const friend2 = {
      firstName: "Friend",
      lastName: "Two",
      isSocialDistancing: false,
      hasCovid: true,
    };

    const friend3 = {
      firstName: "Friend",
      lastName: "Three",
      isSocialDistancing: false,
      hasCovid: false,
    };

    const people1 = [
      {
        firstName: "Person",
        lastName: "One",
        isSocialDistancing: false,
        friends: [friend2, friend3],
      },
      {
        firstName: "Person",
        lastName: "Two",
        isSocialDistancing: true,
        friends: [friend2, friend1],
      },
      {
        firstName: "Person",
        lastName: "Three",
        isSocialDistancing: false,
        friends: [friend2, friend1],
      },
    ];

    const expected1 = ["Person One", "Person Three"];

    const testCases = [{ args: [people1], expected: expected1 }];

    testCases.forEach(({ args, expected }, i) => {
      describe(`when given testCases[${i}]`, () => {
        it("should return an array of the names of people who are at risk of contracting corona virus.", () =>
          expect(testFn(...args)).toEqual(expected));
      });
    });
  });
});
