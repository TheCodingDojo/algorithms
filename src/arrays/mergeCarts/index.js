/* 
This was taken from a friend's job when he was working on an e-commerce site.

You are building the functionality to "add all wish list items to cart"
in a single click.

Given two arrays of product objects: a shopping cart and a wish list,

return a new array with all of the shopping cart items AND all of the wish
list items that were not already in the shopping cart (no dupes).

Do NOT compare products by reference, assume they came from an API / DB so they
are fresh copies and may not be references.

Bonus 1: After solving it, solve it again in O(n) time (no nested loop).
Bonus 2: solve it again more succinctly using built in methods.
*/

class Product {
  /**
   * @param {string} id
   * @param {string} name
   * @param {number} price
   * @param {string} href
   */
  constructor(id, name, price, href) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.href = href;
  }
}

const hoodie = new Product(
  "B075JV7RWV",
  "Amazon Essentials Zip Sweatshirt",
  20.4,
  "https://www.amazon.com/dp/B075JV7RWV?ref=ppx_yo2ov_dt_b_product_details&th=1&psc=1"
);

const algaeOmega = new Product(
  "B081QQ7PRP",
  "Nordic Naturals Algae Omega",
  36.99,
  "https://www.amazon.com/gp/product/B081QQ7PRP/ref=ppx_yo_dt_b_asin_title_o09_s00?ie=UTF8&psc=1"
);

const broccoMax = new Product(
  "B01D15LMCK",
  "Jarrow Formulas BroccoMax",
  29.63,
  "https://www.amazon.com/gp/product/B01D15LMCK/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1"
);

const tearsOfChios = new Product(
  "B07Q454QLH",
  "Chios Mastiha Gum",
  "https://www.amazon.com/gp/product/B07Q454QLH/ref=ppx_yo_dt_b_asin_title_o00_s01?ie=UTF8&psc=1"
);

const wideYogaMat = new Product(
  "B086BZL6JT",
  "CAMBIVO Extra Wide Yoga Mat",
  39.99,
  "https://www.amazon.com/gp/product/B086BZL6JT/ref=ppx_yo_dt_b_asin_title_o06_s01?ie=UTF8&psc=1"
);

const travelBackpack = new Product(
  "B07RM5D4XV",
  "Hynes Eagle 45L Travel Backpack",
  64.99,
  "https://www.amazon.com/gp/product/B07RM5D4XV/ref=ppx_yo_dt_b_asin_title_o01_s01?ie=UTF8&psc=1"
);

const officeChair = new Product(
  "B08L8LCRS3",
  "Ticova Ergonomic Office Chair",
  219.88,
  "https://www.amazon.com/gp/product/B08L8LCRS3/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1"
);

const chairArmrestPads = new Product(
  "B01M8F9IYC",
  "Aloudy Ergonomic Memory Foam Office Chair Armrest Pads",
  17.99,
  "https://www.amazon.com/gp/product/B01M8F9IYC/ref=ppx_yo_dt_b_asin_title_o09_s00?ie=UTF8&psc=1"
);

const backMassager = new Product(
  "B07Q5WHSBD",
  "Papillon Back Massager with Heat",
  39.99,
  "https://www.amazon.com/gp/product/B07Q5WHSBD/ref=ppx_yo_dt_b_asin_title_o06_s01?ie=UTF8&psc=1"
);

const assamBlackTea = new Product(
  "B00T0TZHTG",
  "Tealyra - Assam Black Beauty",
  24.69,
  "https://www.amazon.com/Tealyra-Taiwanese-Caffeine-Naturally-Processed/dp/B00T0TZHTG/ref=sr_1_95?keywords=Tealyra&qid=1655415356&sr=8-95"
);

const slimFoldWallet = new Product(
  "B01HH32JV0",
  "SlimFold Micro - Thin & Slim Bifold Wallet",
  57,
  "https://www.amazon.com/gp/product/B01HH32JV0/ref=ppx_yo_dt_b_asin_title_o04_s01?ie=UTF8&th=1"
);

const shoppingCart1 = [];
const wishList1 = [
  hoodie,
  tearsOfChios,
  wideYogaMat,
  travelBackpack,
  slimFoldWallet,
];
const expected1 = [
  hoodie,
  tearsOfChios,
  wideYogaMat,
  travelBackpack,
  slimFoldWallet,
];

const shoppingCart2 = [tearsOfChios, assamBlackTea, hoodie];
const wishList2 = [tearsOfChios, chairArmrestPads, officeChair, assamBlackTea];
const expected2 = [
  tearsOfChios,
  assamBlackTea,
  hoodie,
  chairArmrestPads,
  officeChair,
];

const shoppingCart3 = [algaeOmega, wideYogaMat, backMassager];
const wishList3 = [backMassager, wideYogaMat, algaeOmega];
const expected3 = [algaeOmega, wideYogaMat, backMassager];

const shoppingCart4 = [hoodie];
const wishList4 = [];
const expected4 = [hoodie];

/* 
DO NOT compare products by reference, assume each list came from an API / DB
so they are fresh copies of the products and not references.
*/

/**
 * Creates a new array of products containing all the shoppingCart items and
 * any wishList item that wasn't already in the shoppingCart.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Product[]} shoppingCart
 * @param {Product[]} wishList
 * @returns {Product[]} A new merged array that is deduped.
 */
function mergeCarts(shoppingCart, wishList) {}

/*****************************************************************************/

/**
 * - Time: O(n + (m * n)). n = `shoppingCart.length`, m = `wishList.length`.
 *    Worst case is neither list is smaller (same size)
 *    which would result in O(n + n^2) -> O(2n^2) -> O(n^2) quadratic.
 *    Since we don't know if they will be the same size, we differentiate
 *    `n` and `m`
 * - Space: O(n + m) -> O(n) linear.
 * @param {Product[]} shoppingCart
 * @param {Product[]} wishList
 * @returns {Product[]} A new merged array that is deduped.
 */
function mergeCarts(shoppingCart = [], wishList = []) {
  // Initialize new array with all shopping cart items in it.
  const mergedCart = [...shoppingCart];

  for (const wishProduct of wishList) {
    let isDuplicate = false;

    // Loop over shoppingCart instead of mergedCart because they start as the
    // same items and we don't need to loop over the new items pushed
    // into mergedCart.
    for (const existingProduct of shoppingCart) {
      if (existingProduct.id === wishProduct.id) {
        isDuplicate = true;
        // We found what we were looking for, go to next wishProduct.
        break;
      }
    }

    if (isDuplicate === false) {
      mergedCart.push(wishProduct);
    }
  }

  return mergedCart;
}

/**
 * - Time: O(n + m) -> O(n) linear.
 * - Space: O(n + m) -> O(n) linear.
 * @param {Product[]} shoppingCart
 * @param {Product[]} wishList
 * @returns {Product[]} A new merged array that is deduped.
 */
function mergeCartsWithHashTable(shoppingCart, wishList) {
  const mergedCart = [];
  // A Map instance could also be used instead of an object.
  const productsTable = {};

  // O(n)
  for (const cartProduct of shoppingCart) {
    if (productsTable.hasOwnProperty(cartProduct.id) === false) {
      mergedCart.push(cartProduct);
      productsTable[cartProduct.id] = cartProduct;
    }
  }

  // O(m)
  for (const wishProduct of wishList) {
    if (productsTable.hasOwnProperty(wishProduct.id) === false) {
      mergedCart.push(wishProduct);
      productsTable[wishProduct.id] = wishProduct;
    }
  }
  return mergedCart;
}

/**
 * - Time: O(n) linear.
 *    n = shoppingCart.length, m = wishList.length.
 *    n + m to merge the lists, n + m again to .reduce merged list, n + m
 *    again to convert the Map into a list: O(3(n + m)), drop the constant
 *    3 and n + m is still considered O(n).
 * - Space: O(n + m) -> O(n) linear.
 * @param {Product[]} shoppingCart
 * @param {Product[]} wishList
 * @returns {Product[]} A new merged array that is deduped.
 */
const mergeCartsWithMap = (shoppingCart = [], wishList = []) => [
  // Spread the deduped products from hashMap.values() into an array
  ...[
    // Merge both lists into one, which will have dupes
    ...shoppingCart,
    ...wishList,
  ]
    // reduce merged list to a hashMap to dedupe by id. Object can also be used
    // but Maps preserve order and usually perform better.
    .reduce((hashMap, product) => {
      // Dupes will overwrite but it doesn't matter since it's the same data
      hashMap.set(product.id, product);
      return hashMap;
    }, new Map())
    // get the product's from the hashMap to convert into an array.
    .values(),
];

module.exports = { mergeCarts, mergeCartsWithHashTable, mergeCartsWithMap };
