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
    { arguments: [honorific1, names1], expected: expected1 },
    { arguments: [honorific2, names2], expected: expected2 },
    { arguments: [honorific3, names3], expected: expected3 },
  ];

  it("should return an array of the given names in the format of: Honorific FirstName LastName.", () => {
    testCases.forEach(({ arguments, expected }) => {
      expect(addHonorific(...arguments))
        .withContext(argFormatter(addHonorific, arguments))
        .toEqual(expected);
    });
  });
});
