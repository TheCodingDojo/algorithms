/* 
Design a class to process incoming orders and keep track of the running total
sales and leftover orders waiting to for matches.

Orders should be matched and processed based on the following criteria:
  - Match the highest available buy price to the lowest available sell price
  - Only process the order if the sell price is <= the buy price.
  - Processing a matched pair of orders simply means using up available quantity
  and tracking the sale amount.
  - Continue matching orders until there are no more viable matches.
  
Leftover orders / quantity that couldn't be matched should be kept so they can
be matched when new orders come in.
*/

/**
 * @typedef {object} Order
 * @property {('buy' | 'sell')} action
 * @property {number} price
 * @property {number} quantity
 */

const incomingOrders1 = [
  {
    price: 155,
    quantity: 3,
    action: "buy",
  },
  {
    price: 100,
    quantity: 5,
    action: "sell",
  },
  {
    price: 125,
    quantity: 3,
    action: "buy",
  },
  {
    price: 99,
    quantity: 2,
    action: "buy",
  },
  {
    price: 110,
    quantity: 4,
    action: "sell",
  },
];

/* 
Explanation:

The highest buy price of 155 is matched to the lowest sell price of 100.
3 are bought at the 100 sell price, leaving 2 more sells left at that price.

total: 300 (3 * 100)

The next highest buy price of 125 is matched to the 2 leftover sells at 100,
increasing the total by 200 for a total of 500.

There is 1 more buy at 125 leftover which is matched to the next lowest sell
at a price of 110 increasing the total by 110 for a total of 610.

There are remaining buys at price 99 but the price is below the 3 leftover
sells at 110 so no more orders can be processed.

The total is 610 now until a new batch of orders comes in and are processed
with each other and the remaining orders that haven't been matched.
*/
const expected1 = 610;

// Design a class below to handle the above requirements.

/*****************************************************************************/

/* 
Thought process:

Notice the smallest sell is needed to be matched to the largest buy
and then the next smallest sell needs to be matched to the next largest buy.

Whenever you repeatedly need to repeatedly get the smallest or the largest
from a set of numbers or items, a MinHeap (smallest) and / or MaxHeap (largest)
are useful because they are built to efficiently handle that need.

Realizing the need for a MinHeap for sells and a MaxHeap for buys is already a
big step forward towards solving this algorithm.

Next it's a pretty straightforward to decide to add all the orders we are
given into the heaps, insert sells into a MinHeap and buys into a MaxHeap.
Doing this as step 1 also already solves the issue of having left over orders
that found no match, because new orders will be added into the heaps that may
contain old orders that are waiting for matches.

After we have all the new orders added to our heaps, all that is left is
straightforward logic to continuously (while) get the smallest sell and
largest buy and check if the sell is <= the buy price and then compare and
adjust the quantities and total sale price and extract any orders that run
out of quantity.
*/

// TODO separate sell and buy types.

const { BinaryHeap } = require("../../data_structures/BinaryHeap");

class OrderSaleMaximizer {
  constructor() {
    this.total = 0;

    /** @type {BinaryHeap<Order>} */
    this.minSellOrders = new BinaryHeap(
      (orderA, orderB) => orderA.price - orderB.price
    );

    /** @type {BinaryHeap<Order>} */
    this.maxBuyOrders = new BinaryHeap(
      (orderA, orderB) => orderB.price - orderA.price
    );
  }

  /**
   * Adds new orders into their respective heaps to be sorted for processing.
   * @param {Order[]} orders
   * @returns {number} The new total amount of orders in the book.
   */
  insertOrders(orders) {
    for (const order of orders) {
      if (order.action === "sell") {
        this.minSellOrders.insert(order);
      } else if (order.action === "buy") {
        this.maxBuyOrders.insert(order);
      }
    }
    // There isn't much to return, but similar to `.push`, we can return the
    // new total size of orders in the book.
    return this.minSellOrders.size() + this.maxBuyOrders.size();
  }

  /**
   * Matches the highest buy to the lowest sell and processes the sale when the
   * sell price is less than or equal to the buy price which adds to the
   * running total sale and removes consumed orders.
   * @returns {number} The new sales total.
   */
  processMatchingOrders() {
    // Avoid extracting to save some time complexity, otherwise the order with
    // leftover quantity has to be inserted back in.
    let minSell = this.minSellOrders.top();
    let maxBuy = this.maxBuyOrders.top();

    // While both orders exist and the price is right.
    while (minSell && maxBuy && minSell.price <= maxBuy.price) {
      const sameQuantity = minSell.quantity === maxBuy.quantity;
      const fewerSells = minSell.quantity < maxBuy.quantity;
      const fewerBuys = !fewerSells;

      if (sameQuantity) {
        this.total += minSell.price * minSell.quantity;
        minSell.quantity = 0;
        maxBuy.quantity = 0;
        this.minSellOrders.extract();
        this.maxBuyOrders.extract();
      } else if (fewerSells) {
        this.total += minSell.price * minSell.quantity;
        maxBuy.quantity -= minSell.quantity;
        minSell.quantity = 0;
        this.minSellOrders.extract();
      } else if (fewerBuys) {
        this.total += minSell.price * maxBuy.quantity;
        minSell.quantity -= maxBuy.quantity;
        maxBuy.quantity = 0;
        this.maxBuyOrders.extract();
      }

      minSell = this.minSellOrders.top();
      maxBuy = this.maxBuyOrders.top();
    }
    return this.total;
  }
}

const orderBook = new OrderSaleMaximizer();
orderBook.insertOrders(incomingOrders1);
console.log(orderBook.processMatchingOrders());

module.exports = { OrderSaleMaximizer };
