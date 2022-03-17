const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const items1 = [
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
      { args: [searchCriteria1, items1], expected: expected1 },
      { args: [searchCriteria2, items1], expected: expected2 },
    ];

    testCases.forEach(({ args, expected }, i) => {
      describe(`when given testCases[${i}]`, () => {
        it("should return an array of the objects from the given array that match the key value pairs of the given object.", () => {
          expect(testFn(...args)).toEqual(expected);
        });
      });
    });
  });
});
