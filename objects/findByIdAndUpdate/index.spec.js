const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const students1 = [
      {
        id: 1,
        name: "student1",
        isLateToday: false,
        lateCount: 15,
        redBeltStatus: false,
      },
      {
        id: 2,
        name: "student2",
        isLateToday: false,
        lateCount: 1,
        redBeltStatus: false,
      },
      {
        id: 3,
        name: "student3",
        isLateToday: false,
        lateCount: 0,
        redBeltStatus: false,
      },
    ];

    const id1 = 3;
    const updateData1 = { redBeltStatus: true, isLateToday: true };
    const expected1 = {
      id: 3,
      name: "student3",
      isLateToday: true,
      lateCount: 0,
      redBeltStatus: true,
    };

    const id2 = 1;
    const updateData2 = {
      isLateToday: true,
      lateCount: 16,
      randomKey: "randomValue",
    };
    const expected2 = {
      id: 1,
      name: "student1",
      isLateToday: true,
      lateCount: 16,
      redBeltStatus: false,
    };
    /* 
      Explanation: In this implementation
        randomKey was not added because it is not an existing key that can be updated
    */

    const id3 = 5;
    const updateData3 = {};
    const expected3 = null;

    const testCases = [
      { args: [id1, updateData1, students1], expected: expected1 },
      { args: [id2, updateData2, students1], expected: expected2 },
      { args: [id3, updateData3, students1], expected: expected3 },
    ];

    testCases.forEach(({ args, expected }, i) => {
      describe(`when given testCases[${i}]`, () => {
        const actual = testFn(...args);

        it("should find and update the object with the matching given id.", () =>
          expect(actual).toEqual(expected));

        actual !== null &&
          it("should not be a new object.", () => {
            const givenArr = args[2];
            expect(givenArr.includes(actual)).toBe(true);
          });
      });
    });
  });
});
