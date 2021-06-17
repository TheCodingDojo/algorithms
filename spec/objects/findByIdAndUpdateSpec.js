const { findByIdAndUpdate } = require("../../objects/findByIdAndUpdate");
const argFormatter = require("../helpers/argFormatter");

describe("findByIdAndUpdate", () => {
  const students = [
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
    { args: [id1, updateData1, students], expected: expected1 },
    { args: [id2, updateData2, students], expected: expected2 },
    { args: [id3, updateData3, students], expected: expected3 },
  ];

  testCases.forEach(({ args, expected }) => {
    const formattedArgs = argFormatter(findByIdAndUpdate, args);
    const ret = findByIdAndUpdate(...args);
    it("should find and update the object in the given array using the given id and update the found object based on the given objects key value pairs, then return the updated object or null if no matching object was found.", () =>
      expect(ret).withContext(formattedArgs).toEqual(expected));

    ret !== null &&
      it("should have returned the same object that was in the array", () => {
        const givenArr = args[2];
        expect(givenArr.includes(ret)).toBe(true);
      });
  });
});
