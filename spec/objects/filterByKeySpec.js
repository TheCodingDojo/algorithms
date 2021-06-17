const { filterByKey } = require("../../objects/filterByKey");
const argFormatter = require("../helpers/argFormatter");

describe("filterByKey", () => {
  const people = [
    {
      firstName: "John",
      lastName: "Doe",
    },
    {
      firstName: "Jane",
      lastName: "Doe",
    },
    {
      firstName: "Eddy",
      lastName: "Lee",
    },
    {
      firstName: "John",
      lastName: "Fawn",
    },
    {
      firstName: "Edward",
      lastName: "Kim",
    },
  ];

  const searchFor1 = "Jo";
  const searchBy1 = "firstName";
  const expected1 = [
    {
      firstName: "John",
      lastName: "Doe",
    },
    {
      firstName: "John",
      lastName: "Fawn",
    },
  ];

  const searchFor2 = "ohn";
  const searchBy2 = "firstName";
  const expected2 = [];
  // Explanation: "John" contains "ohn", it does not start with "ohn"

  const searchFor3 = "Do";
  const searchBy3 = "lastName";
  const expected3 = [
    {
      firstName: "John",
      lastName: "Doe",
    },
    {
      firstName: "Jane",
      lastName: "Doe",
    },
  ];

  // Bonus
  const searchFor4 = "E";
  const searchBy4 = "lastName";
  const searchMethod4 = "includes";
  const expected4 = [
    {
      firstName: "John",
      lastName: "Doe",
    },
    {
      firstName: "Jane",
      lastName: "Doe",
    },
    {
      firstName: "Eddy",
      lastName: "Lee",
    },
  ];

  const testCases = [
    { args: [people, searchFor1, searchBy1], expected: expected1 },
    { args: [people, searchFor2, searchBy2], expected: expected2 },
    { args: [people, searchFor3, searchBy3], expected: expected3 },
    {
      args: [people, searchFor4, searchBy4, searchMethod4],
      expected: expected4,
    },
  ];

  it("should return a new array of only the objects from the given array that match the provided search criteria.", () =>
    testCases.forEach(({ args, expected }) => {
      expect(filterByKey(...args))
        .withContext(argFormatter(filterByKey, args))
        .toEqual(expected);
    }));
});
