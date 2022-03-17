/* 
  Given an array of person objects with the following keys:
    firstName[string]
    lastName[string]
    friends[arr of friend objects]
    isSocialDistancing[bool]

    Friend object keys:
      firstName[string]
      lastName[string]
      isSocialDistancing[bool]
      hasCovid[bool]

    return a new array of the names of people (not friends) who are at high risk of infection

    A person is at high risk of catching the virus if they meet all the below criteria:
    1. not practicing social distancing
    2. have a friend who is not practicing social distancing whom hasCovid

    Bonus: after solving it, make a 2nd solution to practice functional programming with built in methods
*/

const friend1 = {
  firstName: "Friend",
  lastName: "One",
  isSocialDistancing: false,
  hasCovid: true,
};

const friend2 = {
  firstName: "Friend",
  lastName: "Two",
  isSocialDistancing: false,
  hasCovid: true,
};

const friend3 = {
  firstName: "Friend",
  lastName: "Three",
  isSocialDistancing: false,
  hasCovid: false,
};

const people = [
  {
    firstName: "Person",
    lastName: "One",
    isSocialDistancing: false,
    friends: [friend2, friend3],
  },
  {
    firstName: "Person",
    lastName: "Two",
    isSocialDistancing: true,
    friends: [friend2, friend1],
  },
  {
    firstName: "Person",
    lastName: "Three",
    isSocialDistancing: false,
    friends: [friend2, friend1],
  },
];

const expected = ["Person One", "Person Three"];

/**
 * @typedef {Object} Friend
 * @property {string} firstName
 * @property {string} lastName
 * @property {boolean} isSocialDistancing
 * @property {boolean} hasCovid
 *
 * @typedef {Object} Person
 * @property {Array<Friend>} friends
 * @property {string} firstName
 * @property {string} lastName
 * @property {boolean} isSocialDistancing
 */

/**
 * Finds the people who are at risk of contracting Covid.
 * - Time O(?).
 * - Space O(?).
 * @param {Array<Person>} persons
 * @returns {Array<string>} An array of Person full names for those people who
 *    are at risk. A Person is at risk if:
 *    1. not practicing social distancing.
 *    2. have a friend who is not practicing social distancing whom hasCovid.
 */
function coronaVirusAtRisk(persons) {}

/**
 * - Time O(?).
 * - Space O(?).
 */
function coronaVirusAtRiskFunctional(persons) {}

/*****************************************************************************/

/**
 * Finds the people who are at risk of contracting Covid.
 * - Time: O(n * m) n = persons.length, m = longest length of .friends
 *    to capture the worst case.
 * - Space: O(n) linear.
 * @param {Array<Person>} persons
 * @returns {Array<string>} An array of Person full names for those people who
 *    are at risk. A Person is at risk if:
 *    1. not practicing social distancing.
 *    2. have a friend who is not practicing social distancing whom hasCovid.
 */
function coronaVirusAtRisk(persons) {
  const atRiskPersons = [];

  for (const person of persons) {
    if (person.isSocialDistancing === false) {
      for (const friend of person.friends) {
        if (friend.isSocialDistancing === false && friend.hasCovid) {
          atRiskPersons.push(`${person.firstName} ${person.lastName}`);
          // don't need to check any other friends, already know this person
          // is at risk, and if we find they are at risk again, they will be
          // pushed again if we don't break
          break;
        }
      }
    }
  }
  return atRiskPersons;
}

/**
 * - Time: O(2n * m) -> O(n * m)  from nested loop of .findIndex.
 *    .map is another loop but not nested.
 * - Space: O(n) linear.
 */
const functionalCoronaVirusAtRisk = (persons) =>
  persons
    .filter(
      (person) =>
        person.isSocialDistancing === false &&
        person.friends.findIndex(
          (friend) => friend.isSocialDistancing === false && friend.hasCovid
        ) > -1
    )
    .map((person) => `${person.firstName} ${person.lastName}`);

module.exports = {
  coronaVirusAtRisk,
  functionalCoronaVirusAtRisk,
};
