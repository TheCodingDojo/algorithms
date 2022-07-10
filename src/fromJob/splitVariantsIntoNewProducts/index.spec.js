const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const datoEntity1 = {
      /** Dato entity id. */
      id: 1,
      attributes: {
        title: "backpack",
        sku: "3d0921",
        variants: [
          {
            /** Dato variant id. */
            id: 1,
            attributes: { name: "cross-strap", price: 35, _v: 3 },
          },
          {
            id: 2,
            attributes: { name: "travel-40L", price: 68, _v: 1 },
          },
          {
            id: 3,
            attributes: { name: "gym-pack", price: 32, _v: 2 },
          },
          {
            id: 4,
            attributes: { name: "camping", price: 36, _v: 4 },
          },
          {
            id: 5,
            attributes: { name: "duffle", price: 45, _v: 3 },
          },
        ],
      },
    };

    // New products to be sent to shopify, variant limit of 2 for testing.
    const expected1 = [
      {
        id: null,
        title: "backpack",
        sku: "3d0921",
        variants: [
          {
            name: "cross-strap",
            price: 35,
          },
          {
            name: "travel-40L",
            price: 68,
          },
        ],
      },
      {
        id: null,
        title: "backpack",
        sku: "3d0921",
        variants: [
          {
            name: "gym-pack",
            price: 32,
          },
          {
            name: "camping",
            price: 36,
          },
        ],
      },
      {
        id: null,
        title: "backpack",
        sku: "3d0921",
        variants: [
          {
            name: "duffle",
            price: 45,
          },
        ],
      },
    ];

    const datoEntity2 = {
      id: 2,
      attributes: {
        title: "helmet",
        sku: "5c3449",
        variants: [
          {
            id: 1,
            attributes: { name: "skateboard", price: 42, _v: 2 },
          },
        ],
      },
    };

    const expected2 = [
      {
        id: null,
        title: "helmet",
        sku: "5c3449",
        variants: [{ name: "skateboard", price: 42 }],
      },
    ];

    [
      { args: [datoEntity1], expected: expected1 },
      { args: [datoEntity2], expected: expected2 },
    ].forEach(({ args, expected }, i) => {
      describe(`when given testCases[${i}]`, () => {
        const datoObject = args[0];
        const clonedGivenDatoObject = JSON.parse(JSON.stringify(datoObject));
        const ret = testFn(...args);

        it("should split the variants into the fewest number of products needed based on the limit", () => {
          expect(ret).toEqual(expected);
        });

        it("should not mutate the given data", () => {
          expect(datoObject).toEqual(clonedGivenDatoObject);
        });
      });
    });
  });
});
