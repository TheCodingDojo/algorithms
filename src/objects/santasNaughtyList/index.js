/* 
  Given an array of objects representing people, and a string representing a bad habit
  return a "santasNaughtyList" containing the first and last names of all the people who
  have the matching bad habit so that santa knows how much coal he needs.

  Bonus: after solving it, make a 2nd solution to practice functional programming with built in methods
*/

const students = [
  {
    firstName: "FN1",
    lastName: "LN1",
    habits: [
      "doesn't wash dishes",
      "falls asleep in lecture",
      "shows up early",
    ],
  },
  {
    firstName: "FN2",
    lastName: "LN2",
    habits: ["shows up late", "washes dishes", "helps peers"],
  },
  {
    firstName: "FN3",
    lastName: "LN3",
    habits: ["doesn't wash dishes", "hoards snacks", "shows up late"],
  },
  {
    firstName: "FN4",
    lastName: "LN4",
    habits: ["shows up early", "helps peers", "washes dishes"],
  },
];

const badHabit1 = "doesn't wash dishes";
const expected1 = ["FN1 LN1", "FN3 LN3"];

const badHabit2 = "shows up late";
const expected2 = ["FN2 LN2", "FN3 LN3"];

const badHabit3 = "vapes too much";
const expected3 = [];

/**
 * Finds a list of people whose habits contain the given bad habit.
 * - Time O(?).
 * - Space O(?).
 * @typedef {Object} Person
 * @property {string} firstName
 * @property {string} lastName
 * @property {Array<string>} habits
 * @param {Array<Person>} persons
 * @param {string} badHabit
 * @returns {Array<Person>} The people that have the given bad habit.
 */
function santasNaughtyList(persons, badHabit) {}

/**
 * Finds a list of people whose habits contain the given bad habit.
 * - Time O(?).
 * - Space O(?).
 * @typedef {Object} Person
 * @property {string} firstName
 * @property {string} lastName
 * @property {Array<string>} habits
 * @param {Array<Person>} persons
 * @param {string} badHabit
 * @returns {Array<Person>} The people that have the given bad habit.
 */
function santasNaughtyListFunctional(persons, badHabit) {}

/*****************************************************************************/

/**
 * Finds a list of people whose habits contain the given bad habit.
 * - Time: O(n * m). n = persons.length, m = habits.length.
 * - Space: O(n) linear. Every person could be matched.
 * @typedef {Object} Person
 * @property {string} firstName
 * @property {string} lastName
 * @property {Array<string>} habits
 * @param {Array<Person>} persons
 * @param {string} badHabit
 * @returns {Array<Person>} The people that have the given bad habit.
 */
function santasNaughtyList(persons, badHabit) {
  const coalRecipients = [];

  for (let i = 0; i < persons.length; i++) {
    const person = persons[i];

    for (let j = 0; j < person.habits.length; ++j) {
      const personsHabit = person.habits[j];

      if (personsHabit === badHabit) {
        coalRecipients.push(`${person.firstName} ${person.lastName}`);
        // found what we are looking for, no need to keep looping
        break;
      }
    }
  }
  return coalRecipients;
}

/**
 * - Time: O(n * m) + O(n), where n is persons.length and m is habits length.
 *    The + O(n) is from the .map.
 * - Space: O(n) linear.
 */
const functionalSantasNaughtyList = (persons, badHabit) =>
  persons
    .filter((person) => person.habits.includes(badHabit))
    .map((person) => `${person.firstName} ${person.lastName}`);

module.exports = {
  santasNaughtyList,
  functionalSantasNaughtyList,
};
