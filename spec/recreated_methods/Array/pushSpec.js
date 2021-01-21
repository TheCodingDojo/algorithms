const { push } = require("../../../recreated_methods/Array/push");
const argFormatter = require("../../helpers/argFormatter");

describe("push", () => {
  const arr = ["a"];
  const formattedArgs = argFormatter(push, [arr]);

  it("should return the new length after pushing the new item to the back of the array.", () => {
    expect(push(arr, "b")).withContext(formattedArgs).toBe(2);
  });

  it("should have added the new item to the back of the array.", () => {
    expect(arr).withContext(formattedArgs).toEqual(["a", "b"]);
  });
});
