/* 
  Given an array of ailements (illnesses), and an array of medication objects that have a nested array of treatedSymptoms
  return the medication name(s) that treats the most given symptoms
*/

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

// Time: O(n*m) where n is meds length and m is longest treatableSymptoms length
function getMeMyMeds(ailments, meds) {
  let maxSymptomMatchCount = 0;

  // helps avoid having to loop over ailments every time
  const ailmentsMap = {};
  let matchedMeds = [];

  for (const ailment of ailments) {
    // the value isn't important
    ailmentsMap[ailment] = true;
  }

  for (const med of meds) {
    let symptomMatchCount = 0;

    for (const symptom of med.treatableSymptoms) {
      if (ailmentsMap.hasOwnProperty(symptom)) {
        symptomMatchCount++;
      }
    }

    if (symptomMatchCount > 0) {
      if (symptomMatchCount === maxSymptomMatchCount) {
        matchedMeds.push(med.name);
      } else if (symptomMatchCount > maxSymptomMatchCount) {
        maxSymptomMatchCount = symptomMatchCount;
        // new max found, old matchedMeds need to be replaced with new arr of the new best med
        matchedMeds = [med.name];
      }
    }
  }
  return matchedMeds;
}

module.exports = { getMeMyMeds };
