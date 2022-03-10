const functions = require(".");

Object.values(functions).forEach((testFn) => {
  describe(testFn.name, () => {
    const medications = [
      {
        name: "Sulforaphane",
        treatableSymptoms: [
          "dementia",
          "alzheimer's",
          "cancer",
          "inflammation",
          "neuropathy",
        ],
      },
      {
        name: "Longvida Curcumin",
        treatableSymptoms: [
          "pain",
          "inflammation",
          "depression",
          "arthritis",
          "anxiety",
        ],
      },
      {
        name: "Hericium erinaceus",
        treatableSymptoms: ["anxiety", "cognitive decline", "depression"],
      },
      {
        name: "Nicotinamide mononucleotide",
        treatableSymptoms: [
          "ageing",
          "low NAD",
          "obesity",
          "mitochondrial myopathy",
          "diabetes",
        ],
      },
      {
        name: "PainAssassinator",
        treatableSymptoms: [
          "pain",
          "inflammation",
          "cramps",
          "headache",
          "toothache",
          "back pain",
          "fever",
        ],
      },
    ];

    const ailments1 = ["pain"];
    const expected1 = ["PainAssassinator", "Longvida Curcumin"];

    const ailments2 = ["pain", "inflammation", "depression"];
    const expected2 = ["Longvida Curcumin"];

    const ailments3 = ["existential dread"];
    const expected3 = [];

    const ailments4 = [];
    const expected4 = [];

    const testCases = [
      {
        args: [ailments1, medications],
        expected: expected1,
        description: "one ailment treated by multiple medications",
      },
      {
        args: [ailments2, medications],
        expected: expected2,
        description: "three ailments that only one medication treats all of",
      },
      {
        args: [ailments3, medications],
        expected: expected3,
        description: "an untreatable ailment",
      },
      {
        args: [ailments4, medications],
        expected: expected4,
        description: "an empty array of ailments",
      },
    ];

    testCases.forEach(({ args, expected }, i) => {
      describe(`when given testCases[${i}]`, () => {
        it("should return an array of all the names of each the medications that treat the most ailments given.", () => {
          expect(testFn(...args)).toEqual(
            jasmine.arrayWithExactContents(expected)
          );
        });
      });
    });
  });
});
