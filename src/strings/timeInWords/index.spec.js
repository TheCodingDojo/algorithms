const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const hour1 = 5;
    const min1 = 00;
    const expected1 = "five o' clock";

    const hour2 = 5;
    const min2 = 01;
    const expected2 = "one minute past five";

    const hour3 = 5;
    const min3 = 10;
    const expected3 = "ten minutes past five";

    const hour4 = 5;
    const min4 = 15;
    const expected4 = "quarter past five";

    const hour5 = 5;
    const min5 = 30;
    const expected5 = "half past five";

    const hour6 = 5;
    const min6 = 40;
    const expected6 = "twenty minutes to six";

    const hour7 = 5;
    const min7 = 45;
    const expected7 = "quarter to six";

    const hour8 = 5;
    const min8 = 47;
    const expected8 = "thirteen minutes to six";

    const hour9 = 5;
    const min9 = 28;
    const expected9 = "twenty eight minutes past five";

    const hour10 = 12;
    const min10 = 45;
    const expected10 = "quarter to one";

    const hour11 = 12;
    const min11 = 00;
    const expected11 = "twelve o' clock";

    const testCases = [
      { args: [hour1, min1], expected: expected1 },
      { args: [hour2, min2], expected: expected2 },
      { args: [hour3, min3], expected: expected3 },
      { args: [hour4, min4], expected: expected4 },
      { args: [hour5, min5], expected: expected5 },
      { args: [hour6, min6], expected: expected6 },
      { args: [hour7, min7], expected: expected7 },
      { args: [hour8, min8], expected: expected8 },
      { args: [hour9, min9], expected: expected9 },
      { args: [hour10, min10], expected: expected10 },
      { args: [hour11, min11], expected: expected11 },
    ];

    testCases.forEach(({ args, expected }, i) => {
      describe(`when given testCases[${i}]`, () => {
        it("should return time in words based on the given hours and minutes.", () => {
          expect(testFn(...args)).toEqual(expected);
        });
      });
    });
  });
});
