const { coronaVirusAtRisk } = require("../../objects/coronaVirusAtRisk");
const argFormatter = require("../helpers/argFormatter");

describe("coronaVirusAtRisk", () => {
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

  const people = [
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

  const expected = ["Person One", "Person Three"];

  const testCases = [{ arguments: [people], expected: expected }];

  it("should return an array of the names of people who are at risk of contracting corona virus.", () =>
    testCases.forEach(({ arguments, expected }) => {
      expect(coronaVirusAtRisk(...arguments))
        .withContext(argFormatter(coronaVirusAtRisk, arguments))
        .toEqual(expected);
    }));
});
