const { lens } = require("../../objects/lens");
const argFormatter = require("../helpers/argFormatter");

describe("lens", () => {
  const user = {
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
  const expected5 = user;

  const testCases = [
    { args: [user, keys1], expected: expected1 },
    { args: [user, keys2], expected: expected2 },
    { args: [user, keys3], expected: expected3 },
    { args: [user, keys4], expected: expected4 },
    { args: [user, keys5], expected: expected5 },
  ];

  it("should return the value at the end of the given path of keys, or null if it doesn't exist.", () =>
    testCases.forEach(({ args, expected }) => {
      expect(lens(...args))
        .withContext(argFormatter(lens, args))
        .toEqual(expected);
    }));
});
