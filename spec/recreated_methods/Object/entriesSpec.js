const { entries } = require("../../../recreated_methods/Object/entries");
const argFormatter = require("../../helpers/argFormatter");

describe("entries", () => {
  const proto = { keyOnProto: "val from proto" };

  const obj1 = Object.assign(Object.create(proto), {
    firstName: "Foo",
    lastName: "Bar",
    age: 13,
  });

  const expected1 = [
    ["firstName", "Foo"],
    ["lastName", "Bar"],
    ["age", 13],
  ];

  const testCases = [{ args: [obj1], expected: expected1 }];

  it("should return a 2d array of the given objects key value pairs.", () =>
    testCases.forEach(({ args, expected }) =>
      expect(entries(...args))
        .withContext(argFormatter(entries, args))
        .toEqual(expected)
    ));
});
