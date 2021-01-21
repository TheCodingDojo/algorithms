const { findObjects } = require("../../objects/findObjects");
const argFormatter = require("../helpers/argFormatter");

describe("findObjects", () => {
  const items = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
    { firstName: "Bob", lastName: "White", age: 31 },
  ];

  const searchCriteria1 = {
    firstName: "Bob",
    age: 31,
  };
  const expected1 = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 },
  ];

  const searchCriteria2 = {
    lastName: "Smith",
  };
  const expected2 = [
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
  ];

  const testCases = [
    { arguments: [searchCriteria1, items], expected: expected1 },
    { arguments: [searchCriteria2, items], expected: expected2 },
  ];

  it("should return an array of the objects from the given array that match the key value pairs of the given object.", () =>
    testCases.forEach(({ arguments, expected }) =>
      expect(findObjects(...arguments))
        .withContext(argFormatter(findObjects, arguments))
        .toEqual(expected)
    ));
});
