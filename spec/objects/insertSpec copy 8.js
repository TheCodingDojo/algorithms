const { insert } = require("../../objects/insert");
const argFormatter = require("../helpers/argFormatter");

describe("insert", () => {
  const table = "users";
  const insertData1 = { first_name: "John", last_name: "Doe" };
  const expected1 =
    "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

  // Bonus:
  const insertData2 = {
    first_name: "John",
    last_name: "Doe",
    age: 30,
    is_admin: false,
  };
  const expected2 =
    "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";
  // Explanation: no quotes areount the int or the bool, technically in SQL the bool would become a 0 or 1, but don't worry about that here.

  const testCases = [
    { arguments: [table, insertData1], expected: expected1 },
    { arguments: [table, insertData2], expected: expected2 },
  ];

  it("should return a SQL insert command as a string where the given objects key value pairs are the columns and values.", () =>
    testCases.forEach(({ arguments, expected }) => {
      expect(insert(...arguments))
        .withContext(argFormatter(insert, arguments))
        .toEqual(expected);
    }));
});
