const { santasNaughtyList } = require("../../objects/santasNaughtyList");
const argFormatter = require("../helpers/argFormatter");

describe("santasNaughtyList", () => {
  const students = [
    {
      firstName: "FN1",
      lastName: "LN1",
      habits: [
        "doesn't wash dishes",
        "falls asleep in lecture",
        "shows up early",
      ],
    },
    {
      firstName: "FN2",
      lastName: "LN2",
      habits: ["shows up late", "washes dishes", "helps peers"],
    },
    {
      firstName: "FN3",
      lastName: "LN3",
      habits: ["doesn't wash dishes", "hoards snacks", "shows up late"],
    },
    {
      firstName: "FN4",
      lastName: "LN4",
      habits: ["shows up early", "helps peers", "washes dishes"],
    },
  ];

  const badHabit1 = "doesn't wash dishes";
  const expected1 = ["FN1 LN1", "FN3 LN3"];

  const badHabit2 = "shows up late";
  const expected2 = ["FN2 LN2", "FN3 LN3"];

  const badHabit3 = "vapes too much";
  const expected3 = [];

  const testCases = [
    { args: [students, badHabit1], expected: expected1 },
    { args: [students, badHabit2], expected: expected2 },
    { args: [students, badHabit3], expected: expected3 },
  ];

  it("should an array of all the student objects that have a matching given bad habit.", () =>
    testCases.forEach(({ args, expected }) => {
      expect(santasNaughtyList(...args))
        .withContext(argFormatter(santasNaughtyList, args))
        .toEqual(expected);
    }));
});
