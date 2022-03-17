/* 
This was extracted from a react interview challenge. The items were to be
displayed in category groups.

Given an array of objects that contain a category key,
return a hash table to group the objects by their category.

Make the grouping case-insensitive.

Bonus: allow the key that is grouped by to be provided.
*/

const objects = [
  {
    name: "Baby Yoda",
    category: "cute",
  },
  {
    name: "Cricket Protein",
    category: "food",
  },
  {
    name: "Shibe",
    category: "Cute",
  },
  {
    name: "Ancient India",
    category: "Cradle of Civilization",
  },
  {
    name: "Wasp Crackers",
    category: "Food",
  },
  {
    name: "The Fertile Crescent",
    category: "Cradle of Civilization",
  },
];

const expected = {
  cute: [
    {
      name: "Baby Yoda",
      category: "cute",
    },
    {
      name: "Shibe",
      category: "Cute",
    },
  ],
  food: [
    {
      name: "Cricket Protein",
      category: "food",
    },
    {
      name: "Wasp Crackers",
      category: "Food",
    },
  ],
  "cradle of civilization": [
    {
      name: "Ancient India",
      category: "Cradle of Civilization",
    },
    {
      name: "The Fertile Crescent",
      category: "Cradle of Civilization",
    },
  ],
};

/**
 * Creates a hash table of case-insensitive categories mapped to the items
 * belonging to that category.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Object>} items
 * @param {string} items.category
 * @returns {Object<string, Array<Object>>} The hash category hash table with
 *    string keys and array of objects as values.
 */
function groupObjects(items) {}

/*****************************************************************************/

/**
 * Creates a hash table of case-insensitive categories mapped to the items
 * belonging to that category.
 * - Time: O(n).
 * - Space: O(n).
 * @param {Array<Object>} items
 * @param {string} groupByKey The key to group the objects by. The value of
 *    this key must be a valid data type that can be used for keys in objects.
 * @returns {Object<string, Array<Object>>} The hash category hash table with
 *    string keys and array of objects as values.
 */
function groupObjects(items, groupByKey = "category") {
  const table = {};

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const lowerCaseCat = item[groupByKey].toLowerCase();

    if (!table.hasOwnProperty(lowerCaseCat)) {
      table[lowerCaseCat] = [];
    }

    table[lowerCaseCat].push(item);
  }

  return table;
}

const groupObjectsReduce = (items, groupByKey = "category") =>
  items.reduce((table, item) => {
    const lowerCaseCat = item[groupByKey].toLowerCase();

    if (!table.hasOwnProperty(lowerCaseCat)) {
      table[lowerCaseCat] = [];
    }

    table[lowerCaseCat].push(item);

    return table;
  }, {});

module.exports = { groupObjects, groupObjectsReduce };
