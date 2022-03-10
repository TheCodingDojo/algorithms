/* 
  Optional chaining is a newer syntax that can help with this problem in general (not necessarily intended to be used here): 
    https://levelup.gitconnected.com/new-javascript-features-in-2019-optional-chaining-null-coalescing-a7fd38f4ef2d

  The more you deal with objects, especially ones with many nested objects, where you
  are chaining dot notation to access nested values, the more you run into these errors:
    Uncaught TypeError: Cannot read property 'keyName' of undefined
    Uncaught TypeError: Cannot read property 'keyName' of null
  
  These errors mean, somewhere along your chain of dots, one of the keys did not exist
  on the object so it returned undefined, and then the next dot was trying to access
  a key on undefined, or the key did exist but null was it's value.

  One example of how this might happen is getting JSON data back from an API. Sometimes, 
  the record you requested has more data so there are more levels of nesting, which you get used to,
  so you write your code to access the nested data but then you request a different record, and
  less data is available, so your code breaks when trying to access nested data that isn't there.

  There is an entire library dedicated to solving this problem, the solution is referred to as a "lens",
  you look through a "lens" to help you see into an object and safely attempt to access a nested value.

  Without a lens, you would need to interrupt your dot chaining and check the value after each dot,
  one at a time, to make sure it is not undefined or null before going to the next dot.

  Input:
    Object,
    Array of strings representing a path of keys in the Object

  Output:
    - Value from traversing the object to the last key
    - null if at any point accessing a key returns undefined
      - this means a key was not found / the Object was not nested as deep as the path of keys goes
    - the given object if array of keys is empty
*/

const user = {
  id: 101,
  email: "jack@dev.com",
  personalInfo: {
    name: "Jack",
    address: {
      street: "westwish st",
      city: "wallas",
      state: "WX",
    },
  },
  favorites: {
    number: 0,
  },
};

const keys1 = ["personalInfo", "address", "city"];
const expected1 = "wallas";

const keys2 = ["personalInfo", "address", "country"];
const expected2 = null;

const keys3 = ["personalInfo", "mainHobby", "yearsActive"];
const expected3 = null;

const keys4 = ["favorites", "number"];
const expected4 = 0;

const keys5 = [];
const expected5 = user;

/**
 * Retrieves the value at the end of the path of keys or null.
 * - Time O(?).
 * - Space O(?).
 * @param {Object<string, any>} obj
 * @param {Array<string>} keys
 * @returns {any} The value at end of path of given keys or null.
 */
function lens(obj, keys) {}

/*****************************************************************************/

/**
 * Retrieves the value at the end of the path of keys or null.
 * Time: O(n) linear, n = keys.length.
 * Space: O(n) linear.
 * @param {Object<string, any>} obj
 * @param {Array<string>} keys
 * @returns {any} The value at end of path of given keys or null.
 */
function lens(obj, keys) {
  let val = obj;

  for (const currKey of keys) {
    if (val === undefined || val === null) {
      return null;
    }

    // go deeper into object, like runner = runner.next
    // except the key is not named "next" and the key is in a variable
    val = val[currKey];
  }

  // when the loop ends we might still have undefined
  // and our check in the loop won't catch it since loop ended
  if (val === undefined) {
    return null;
  }
  return val;
}

/**
 * Since reduce stops at the last key, if the last key's val is undefined,
 * the logic inside reduce won't catch it and return null, but
 * undefined || null at the end will return null.
 */
function lensReduce(obj, keys) {
  const val = keys.reduce(
    (val, key) => (val === undefined || val === null ? null : val[key]),
    obj
  );
  return val === undefined ? null : val;
}

function lensReduce2(obj, keys) {
  const val = keys.reduce((curr, key) => curr?.[key], obj);
  return val === undefined ? null : val;
}

function simpleLensRecursive(obj, keys) {
  if (keys.length === 0 && obj !== undefined) {
    return obj;
  }
  if (obj === undefined || obj === null) {
    return null;
  }
  return simpleLensRecursive(obj[keys[0]], keys.slice(1));
}

/* 
  This can be used to allow the path to be passed in as either an array of strings
  or a string itself that uses dot and/or bracket notation
*/
function splitKeyPath(path) {
  if (Array.isArray(path)) {
    return path;
  }

  if (typeof path === "string") {
    // regex to split into array based on brackets or period as separator / delimiter
    // .filter(Boolean) will return any empty string elements that are sometimes
    // present in the array .split returns
    return path.split(/[\\\[\\\].]/).filter(Boolean);
  }
  return [];
}

module.exports = { lens, lensReduce, lensReduce2, simpleLensRecursive };
