/* 
  Given an array of objects / dictionaries to represent new inventory,
  and an array of objects / dictionaries to represent current inventory,
  update the quantities of the current inventory
  
  if the item doesn't exist in current inventory, add it to the inventory

  return the current inventory after updating it.
*/

const newInv1 = [
  { name: "Grain of Rice", quantity: 9000 },
  { name: "Peanut Butter", quantity: 50 },
  { name: "Royal Jelly", quantity: 20 },
];
const currInv1 = [
  { name: "Peanut Butter", quantity: 20 },
  { name: "Grain of Rice", quantity: 1 },
];
const expected1 = [
  { name: "Peanut Butter", quantity: 70 },
  { name: "Grain of Rice", quantity: 9001 },
  { name: "Royal Jelly", quantity: 20 },
];

const newInv2 = [];
const currInv2 = [{ name: "Peanut Butter", quantity: 20 }];
const expected2 = [{ name: "Peanut Butter", quantity: 20 }];

const newInv3 = [{ name: "Peanut Butter", quantity: 20 }];
const currInv3 = [];
const expected3 = [{ name: "Peanut Butter", quantity: 20 }];

/**
 * @typedef {Object} Inventory
 * @property {string} Inventory.name The name of the item.
 * @property {number} Inventory.quantity The quantity of the item.
 */

/**
 * Updates the current inventory based on the new inventory.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Inventory>} newInv A shipment of new inventory.
 *    An array of inventory objects.
 * @param {Array<Inventory>} currInv
 * @return The currInv after being updated.
 */
function updateInventory(newInv, currInv) {}

/*****************************************************************************/

/**
 * - Time: O(n * m), where n = newInv.length and m = currInv.length.
 * - Space: O(1) constant.
 * @param {Array<Inventory>} newInv
 * @param {Array<Inventory>} currInv
 * @return
 */
function updateInventory(newInv = [], currInv = []) {
  for (let i = 0; i < newInv.length; i++) {
    let itemFound = false;
    const newItem = newInv[i];

    for (let j = 0; j < currInv.length; ++j) {
      const currItem = currInv[j];

      if (newItem.name === currItem.name) {
        itemFound = true;
        currItem.quantity += newItem.quantity;
        // no need to keep looping over the rest of the items since we found what we are looking for
        break;
      }
    }
    // after looking through all current inventory
    if (itemFound === false) {
      currInv.push(newItem);
    }
  }
  return currInv;
}

/**
 * - Time: O(n + m) -> O(n) linear, n = currentInv.length, m = newInv.length.
 * - Space: O(n) linear, from currInvTable extra storage.
 * @param {Array<Inventory>} newInv A shipment of new inventory.
 *    An array of inventory objects.
 * @param {Array<Inventory>} currInv
 * @return
 */
function updateInventory2(newInv = [], currentInv = []) {
  const currInvTable = {};

  for (let i = 0; i < currentInv.length; i++) {
    // save a reference to this currentInv item into our hash table object
    // so we can look it up with O(1) constant time
    currInvTable[currentInv[i].name] = currentInv[i];
  }

  for (let i = 0; i < newInv.length; i++) {
    const item = newInv[i];

    if (currInvTable.hasOwnProperty(item.name)) {
      // retrieve the currentInv obj reference
      let currentInvItem = currInvTable[item.name];

      // update the obj by reference
      currentInvItem.quantity += item.quantity;
    } else {
      currentInv.push(item);
    }
  }
  return currentInv;
}

module.exports = { updateInventory, updateInventory2 };
