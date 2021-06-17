const { generateAnagrams } = require("../../recursion/generateAnagrams");
const argFormatter = require("../helpers/argFormatter");

describe("generateAnagrams", () => {
  const str1 = "lim";
  const expected1 = ["ilm", "iml", "lim", "lmi", "mil", "mli"];
  // Order of the output array does not matter

  const testCases = [{ args: [str1], expected: expected1 }];

  it("should return an array of all the anagrams of the given string.", () =>
    testCases.forEach(({ args, expected }) =>
      expect(generateAnagrams(...args))
        .withContext(argFormatter(generateAnagrams, args))
        .toEqual(jasmine.arrayWithExactContents(expected))
    ));
});
