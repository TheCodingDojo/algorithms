const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const str1 = `wow "jabascript cool" lol "foo"`;
    const idx1 = 10;
    const expected1 = "jabascript cool";

    const str2 = `hello "world", good morning.`;
    const idx2 = 2;
    const expected2 = "";

    const testCases = [
      { args: [str1, idx1], expected: expected1 },
      { args: [str2, idx2], expected: expected2 },
    ];

    testCases.forEach(({ args, expected }, i) => {
      describe(`when given testCases[${i}]`, () => {
        it("return the string enclosed in double quotes that the caret idx is within.", () => {
          expect(testFn(...args)).toEqual(expected);
        });
      });
    });
  });
});
