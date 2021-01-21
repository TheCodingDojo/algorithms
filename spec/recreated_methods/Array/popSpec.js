const { pop } = require("../../../recreated_methods/Array/pop");
const argFormatter = require("../../helpers/argFormatter");

describe("pop", () => {
  const arr = [1, 2, 3];
  const formattedArgs = argFormatter(pop, [arr]);

  it(`should return the last item from the given array.`, () => {
    expect(pop(arr)).withContext(formattedArgs).toBe(3);
  });

  it("should have removed the last item from the given array.", () => {
    expect(arr).withContext(formattedArgs).toEqual([1, 2]);
  });
});
