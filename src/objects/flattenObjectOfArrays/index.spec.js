const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const object1 = {
      closedCreditMemos: [],
      closedDeliveryOrders: [],
      closedPickupOrders: [
        { id: 112, type: "pickup" },
        { id: 117, type: "pickup" },
      ],
      openCreditMemos: [],
      openDeliveryOrders: [
        {
          id: 123,
          type: "delivery",
          gateCode: "#2552",
        },
        {
          id: 153,
          type: "delivery",
          instructions: "Place in secure delivery box.",
        },
      ],
      openPickupOrders: [
        {
          id: 123,
          type: "pickup",
        },
      ],
      returnPickupOrders: [],
    };

    const expected1 = [
      { id: 112, type: "pickup" },
      { id: 117, type: "pickup" },
      { id: 123, type: "delivery" },
      { id: 153, type: "delivery" },
      { id: 123, type: "pickup" },
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
