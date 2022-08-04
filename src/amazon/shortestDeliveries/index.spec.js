const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const coordinates1 = [
      [-2, 5],
      [3, 4],
      [1, 0],
    ];
    const numDeliveries1 = 2;
    /* 
    Explanation: [1, 0] is the shortest distance from [0, 0]
    and [3, 4] is the 2nd shortest.
    */
    const expected1 = [
      [1, 0],
      [3, 4],
    ];

    [[[coordinates1, numDeliveries1], expected1]].forEach(
      ([args, expected], i) => {
        describe(`when given testCases[${i}]`, () => {
          it("", () => {
            expect(testFn(...args)).toEqual(expected);
          });
        });
      }
    );
  });
});
