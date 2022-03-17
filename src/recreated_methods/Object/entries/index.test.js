const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const obj1 = {
      name: "Pizza",
      calories: 9001,
    };

    const expected1 = [
      ["name", "Pizza"],
      ["calories", 9001],
    ];

    const proto = {
      inheritance: "inherited key",
      keyOnProto: "val from proto",
    };

    // This object contains inherited key value pairs from the above proto obj.
    const obj2 = Object.assign(Object.create(proto), {
      firstName: "Foo",
      lastName: "Bar",
      age: 13,
    });

    const expected2 = [
      ["firstName", "Foo"],
      ["lastName", "Bar"],
      ["age", 13],
    ];

    const testCases = [
      {
        args: [obj1],
        expected: expected1,
        description: "an object with no inherited keys",
      },
      {
        args: [obj2],
        expected: expected2,
        description: "an object with inherited keys",
      },
    ];

    testCases.forEach(({ args, expected }, i) => {
      describe(`when given testCases[${i}]`, () => {
        it("should return a 2d array of the given object's key value pairs.", () => {
          expect(testFn(...args)).toEqual(expected);
        });
      });
    });
  });
});
