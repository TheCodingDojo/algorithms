/* 
  Recreate Object.entries method

  Given an object,
  return an array of arrays of the object's key value pairs, where each key value pair is a 2 item array

  Do not include key value pairs from the given objects prototype (these are included by default when looping over an object's keys)
*/

const proto = { keyOnProto: "val from proto" };

const obj1 = Object.assign(Object.create(proto), {
  firstName: "Foo",
  lastName: "Bar",
  age: 13,
});

const expected1 = [
  ["firstName", "Foo"],
  ["lastName", "Bar"],
  ["age", 13],
];

/**
 * Returns a 2d array of key value pairs from the given obj.
 * - Time: O(?).
 * - Space: O(?).
 * @param   {Object} obj
 * @typedef {Array<Array<string, any>>} output The nested array should look
 *    like [key, val]
 * @return  {output}
 */
function entries(obj) {}

module.exports = { entries };

/*****************************************************************************/

/**
 * Returns a 2d array of key value pairs from the given obj.
 * - Time: O(n) linear n = num of keys in obj.
 * - Space: O(n) linear
 * @param   {Object} obj
 * @typedef {Array<Array<string, any>>} output The nested array should look
 *    like [key, val]
 * @return  {output}
 */
function entries(obj) {
  const keyValPairs = [];

  for (const key in obj) {
    // has own property means it is a prop directly on obj, not on it's proto
    if (obj.hasOwnProperty(key)) {
      const val = obj[key];

      keyValPairs.push([key, val]);
    }
  }
  return keyValPairs;
}
