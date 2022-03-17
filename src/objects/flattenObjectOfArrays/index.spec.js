const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const object1 = {
      closedCreditMemos: [],
      closedDeliveryOrders: [],
      closedPickupOrders: [],
      openCreditMemos: [],
      openDeliveryOrders: [
        {
          number: 123,
          type: "delivery",
        },
        {
          number: 153,
          type: "delivery",
        },
      ],
      openPickupOrders: [
        {
          number: 123,
          type: "pickup",
        },
      ],
      returnPickupOrders: [],
    };

    const expected1 = [
      { number: 123, type: "delivery" },
      { number: 153, type: "delivery" },
      { number: 123, type: "pickup" },
    ];

    const testCases = [
      {
        arg: object1,
        expected: expected1,
      },
    ];

    testCases.forEach(({ arg, expected }, i) => {
      describe(`when given testCases[${i}]`, () => {
        it("return a one-dim array of all the objects inside the arrays that are in the given object.", () =>
          expect(testFn(arg)).toEqual(expected));
      });
    });
  });
});
