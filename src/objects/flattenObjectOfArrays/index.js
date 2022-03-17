/* 
My react dev friend had to do this for work.
*/

const object1 = {
  closedCreditMemos: [],
  closedDeliveryOrders: [],
  closedPickupOrders: [],
  openCreditMemos: [],
  openDeliveryOrders: [
    {
      number: 123,
      type: "delivery",
    },
    {
      number: 153,
      type: "delivery",
    },
  ],
  openPickupOrders: [
    {
      number: 123,
      type: "pickup",
    },
  ],
  returnPickupOrders: [],
};

const expected1 = [
  { number: 123, type: "delivery" },
  { number: 153, type: "delivery" },
  { number: 123, type: "pickup" },
];

/**
 * Takes an object containing arrays of objects and places all the nested
 * objects into a new one-dim array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object} o Containing arrays of objects.
 * @returns {Object[]} An array of objects.
 */
function flattenObjectOfArrays() {}

/*****************************************************************************/

/**
 * Takes an object containing arrays of objects and places all the nested
 * objects into a new one-dim array.
 * - Time: O(n + (n * m)). n = num of keys on object, m = longest length of
 *    nested array.
 * - Space: O(n * m).
 * @param {Object} o Containing arrays of objects.
 * @returns {Object[]} An array of objects.
 */
function flattenObjectOfArrays(obj) {
  const mergedArr = [];

  for (const key in obj) {
    const arrOfObjects = obj[key];

    for (const nestedObj of arrOfObjects) {
      mergedArr.push(nestedObj);
    }
  }

  return mergedArr;
}

/**
 * Takes an object containing arrays of objects and places all the nested
 * objects into a new one-dim array.
 * - Time: O(n + (n * m)). n = num of keys on object, m = longest length of
 *    nested array.
 * - Space: O(n * m).
 * @param {Object} o Containing arrays of objects.
 * @returns {Object[]} An array of objects.
 */
const functionalFlattenObjectOfArrays = (o) =>
  Object.values(o).reduce(
    (mergedArr, arrOfObjects) => mergedArr.concat(arrOfObjects),
    []
  );

module.exports = { flattenObjectOfArrays, functionalFlattenObjectOfArrays };
