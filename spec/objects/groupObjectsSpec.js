const { groupObjects } = require("../../objects/groupObjects");
const argFormatter = require("../helpers/argFormatter");

describe("groupObjects", () => {
  const objects = [
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

  const expected = {
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

  const testCases = [{ arguments: [objects], expected: expected }];

  it("should return a new array of only the objects from the given array that match the provided search criteria.", () =>
    testCases.forEach(({ arguments, expected }) => {
      expect(groupObjects(...arguments))
        .withContext(argFormatter(groupObjects, arguments))
        .toEqual(expected);
    }));
});
