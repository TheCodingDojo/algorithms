const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const objects1 = [
      {
        name: "Baby Yoda",
        category: "cute",
      },
      {
        name: "Cricket Protein",
        category: "food",
      },
      {
        name: "Shibe",
        category: "Cute",
      },
      {
        name: "Ancient India",
        category: "Cradle of Civilization",
      },
      {
        name: "Wasp Crackers",
        category: "Food",
      },
      {
        name: "The Fertile Crescent",
        category: "Cradle of Civilization",
      },
    ];

    const expected1 = {
      cute: [
        {
          name: "Baby Yoda",
          category: "cute",
        },
        {
          name: "Shibe",
          category: "Cute",
        },
      ],
      food: [
        {
          name: "Cricket Protein",
          category: "food",
        },
        {
          name: "Wasp Crackers",
          category: "Food",
        },
      ],
      "cradle of civilization": [
        {
          name: "Ancient India",
          category: "Cradle of Civilization",
        },
        {
          name: "The Fertile Crescent",
          category: "Cradle of Civilization",
        },
      ],
    };

    const testCases = [{ args: [objects1], expected: expected1 }];
    testCases.forEach(({ args, expected }, i) => {
      describe(`when given testCases[${i}]`, () => {
        it("should return a new array of only the objects from the given array that match the provided search criteria.", () => {
          expect(testFn(...args)).toEqual(expected);
        });
      });
    });
  });
});
