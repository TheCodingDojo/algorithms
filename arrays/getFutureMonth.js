/* 
Interview question from 2021.

Given a current month number (0 based) and an int 'n',
return the name of the month that is 'n' months in the future.
*/

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/**
 * Finds the month that is n months in the future.
 * @param {number} currMonth Zero based.
 * @param {number} n Amount of months to advance.
 * @returns {string} Month name.
 */
function getFutureMonth(currMonth, n) {
  if (currMonth < 0 || currMonth >= 12) {
    return "";
  }

  const i = (currMonth + n) % months.length;
  return months[i];
}
