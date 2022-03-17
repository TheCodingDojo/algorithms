const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const socialSpaceGrid = [
      ["Jon2", "Jane2", null, null],
      [null, "Jon1", "Jane1", null],
      ["Jane4", "patient zero", null, "Jon3"],
      ["Jon4", null, "Jane3", null],
    ];
    const patientZeroPoint = { x: 1, y: 2 };
    const expected = ["Jane4", "Jon4", "Jon1", "Jane1", "Jane2", "Jon2"];
    // order of output list does not matter

    const testCases = [
      { args: [socialSpaceGrid, patientZeroPoint], expected: expected },
    ];

    testCases.forEach(({ args, expected }, i) => {
      describe(`when given testCases[${i}]`, () => {
        it("should return an array of the names new corona virus cases based on flood fill from a starting point.", () => {
          expect(testFn(...args)).toEqual(expected);
        });
      });
    });
  });
});
