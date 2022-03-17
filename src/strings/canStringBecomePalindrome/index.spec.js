const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const str1 = "";
    const expected1 = false;

    const str2 = "a";
    const expected2 = true;

    const str3 = "ddaa";
    const expected3 = true;
    // Explanation: "daad" or "adda"

    const str4 = "dda";
    const expected4 = true;
    // Explanation: "dad"

    const str5 = "aaadd";
    const expected5 = true;
    // Explanation: "daaad"

    const str6 = "abc";
    const expected6 = false;

    const testCases = [
      { args: [str1], expected: expected1 },
      { args: [str2], expected: expected2 },
      { args: [str3], expected: expected3 },
      { args: [str4], expected: expected4 },
      { args: [str5], expected: expected5 },
      { args: [str6], expected: expected6 },
    ];

    testCases.forEach(({ args, expected }, i) => {
      describe(`when given testCases[${i}]`, () => {
        it("should return whether or not the given string could be rearranged into a palindrome.", () => {
          expect(testFn(...args)).toEqual(expected);
        });
      });
    });
  });
});
