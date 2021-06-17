const { addHonorific } = require("../../strings/addHonorific");
const argFormatter = require("../helpers/argFormatter");

describe("addHonorific", () => {
  const honorific1 = "Mr.";
  const names1 = [];
  const expected1 = [];

  const honorific2 = "Sir";
  const names2 = ["Sanchez, Rick", "Smith, Jerry"];
  const expected2 = ["Sir Rick Sanchez", "Sir Jerry Smith"];

  const honorific3 = "Mrs.";
  const names3 = ["HorseDoctor, Beth"];
  const expected3 = ["Mrs. Beth HorseDoctor"];

  const testCases = [
    { args: [honorific1, names1], expected: expected1 },
    { args: [honorific2, names2], expected: expected2 },
    { args: [honorific3, names3], expected: expected3 },
  ];

  it("should return an array of the given names in the format of: Honorific FirstName LastName.", () => {
    testCases.forEach(({ args, expected }) => {
      expect(addHonorific(...args))
        .withContext(argFormatter(addHonorific, args))
        .toEqual(expected);
    });
  });
});
