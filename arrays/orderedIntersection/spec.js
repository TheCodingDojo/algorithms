const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const numsA1 = [0, 1, 2, 2, 2, 7];
    const numsB1 = [2, 2, 6, 6, 7];
    const expected1 = [2, 7];

    const numsA2 = [0, 1, 2, 2, 2, 7];
    const numsB2 = [2, 2];
    const expected2 = [2];

    const numsA3 = [0, 1, 2, 2, 2, 7];
    const numsB3 = [10];
    const expected3 = [];

    const testCases = [
      {
        args: [numsA1, numsB1],
        expected: expected1,
        description: "a first array longer by one than the second array",
      },
      {
        args: [numsA2, numsB2],
        expected: expected2,
        description:
          "a first array more than double the size of the second array",
      },
      {
        args: [numsA3, numsB3],
        expected: expected3,
        description:
          "a second array with only one number that is larger than all the first array numbers",
      },
    ];

    testCases.forEach(({ args: [numsA, numsB], expected, description }) => {
      describe("when given " + description, () => {
        const copyOfNumsA = [...numsA];
        const copyOfNumsB = [...numsB];
        const actual = testFn(numsA, numsB);

        it("should return the ordered deduped intersection of two given sorted arrays.", () => {
          expect(actual).toEqual(expected);
        });

        it("should not mutate the first given array", () => {
          expect(numsA).toEqual(copyOfNumsA);
        });

        it("should not mutate the second given array", () => {
          expect(numsB).toEqual(copyOfNumsB);
        });
      });
    });
  });
});
