const { shift } = require("../../../recreated_methods/Array/shift");
const argFormatter = require("../../helpers/argFormatter");

describe("shift", () => {
  const arr = [1, 2, 3];
  const formattedArgs = argFormatter(shift, [arr]);

  it(`should return the first item from the given array.`, () => {
    expect(shift(arr)).withContext(formattedArgs).toBe(1);
  });

  it("should remove the first item and shift the remaining items down.", () => {
    expect(arr).withContext(argFormatter).toEqual([2, 3]);
  });
});
