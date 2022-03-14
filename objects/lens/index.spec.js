const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const user1 = {
      id: 101,
      email: "jack@dev.com",
      personalInfo: {
        name: "Jack",
        address: {
          street: "Westwish st",
          city: "wallas",
          state: "WX",
        },
      },
      favorites: {
        number: 0,
      },
    };

    const keys1 = ["personalInfo", "address", "city"];
    const expected1 = "wallas";

    const keys2 = ["personalInfo", "address", "country"];
    const expected2 = null;

    const keys3 = ["personalInfo", "mainHobby", "yearsActive"];
    const expected3 = null;

    const keys4 = ["favorites", "number"];
    const expected4 = 0;

    const keys5 = [];
    const expected5 = user1;

    const testCases = [
      { args: [user1, keys1], expected: expected1 },
      { args: [user1, keys2], expected: expected2 },
      { args: [user1, keys3], expected: expected3 },
      { args: [user1, keys4], expected: expected4 },
      { args: [user1, keys5], expected: expected5 },
    ];
    testCases.forEach(({ args, expected }, i) => {
      describe(`when given testCases[${i}]`, () => {
        it("should return the value at the end of the given path of keys, or null if it doesn't exist.", () => {
          expect(testFn(...args)).toEqual(expected);
        });
      });
    });
  });
});
