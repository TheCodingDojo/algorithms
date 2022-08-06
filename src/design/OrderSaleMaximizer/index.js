/* 
Design a class to process incoming orders and keep track of the running total
sales and leftover orders awaiting new orders to possibly match with.

Orders should be matched and processed based on the following criteria:
  - Match the highest available buy price to the lowest available sell price
  - Only process the order if the sell price is <= the buy price.
  - Processing a matched pair of orders simply means using up available quantity
  and incrementing the total by the sale amount.
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

/** @typedef {Order & { action: 'sell'}} SellOrder */
/** @typedef {Order & { action: 'buy'}} BuyOrder */

/** @type {Order[]} */
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
    price: 90,
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

There are remaining buys at price 90 but the price is below the 3 leftover
sells at 110 so no more orders can be processed.

The total is 610 now until a new batch of orders comes in and are processed
with each other and the remaining orders that haven't been matched.
*/
const expected1 = 610;

/** @type {Order[]} */
const incomingOrders2 = [
  {
    price: 80,
    quantity: 6,
    action: "buy",
  },
  {
    price: 120,
    quantity: 4,
    action: "sell",
  },
  {
    price: 80,
    quantity: 8,
    action: "sell",
  },
];

/* 
Explanation: when these orders are added to the same OrderSaleMaximizer
instance, they will be merged with the leftover orders and the total will
continue to be incremented.

1. the 80 priced sell will be matched with the 100 price buys:
  - total: 610 + (80 * 2) = 770
  - the 80 sell has 6 quantity left
2. the remaining 80 sell quantities are matched with the next highest buy which
    is the leftover 90 price buys:
  - total: 770 + (80 * 2) = 930
  - the 80 sell has 4 quantity left
3. the remaining 80 price sell quantities match with the next highest buys at:
  price 80
  - total: 930 + (80 * 4) = 1250
  - the 80 price sell has no more quantity left
  - the 80 price buy has 2 quantity left
  - there are no more sells prices <= any buy prices
*/
const expected2 = 1250;

// Design a class below to handle the above requirements.

/*****************************************************************************/

/* 
Thought process:

Notice the smallest sell is needed to be matched to the largest buy
and then the next smallest sell needs to be matched to the next largest buy.

Whenever you need to repeatedly get the smallest or the largest from a set
of numbers or items, a MinHeap (smallest) and / or MaxHeap (largest)
are useful because they are built to efficiently handle that need.

Realizing the need for a MinHeap for sells and a MaxHeap for buys is already a
big step towards solving this algorithm because it clarifies the main problem
of how to match a sell to a buy.

Next it's  pretty straightforward to decide to add all the orders we are
given into the heaps so they are ready to be extracted in the correct order,
insert sells into a MinHeap and buys into a MaxHeap.

Doing this as step 1 also already solves the issue of having left over orders
that found no match, because the next batch of orders will be added into the
heaps that may contain old orders from the prior batch and the heap will
sort them.

After we have all the new orders added to our heaps, all that is left is
straightforward logic to continuously (while) get the smallest sell and
largest buy if the heaps aren't empty and check if
the sell is <= the buy price and then compare and adjust the quantities
and tally the total sale price.

Lastly, extract any orders that run out of quantity.
*/

const { BinaryHeap } = require("../../data_structures/BinaryHeap");

class OrderSaleMaximizer {
  constructor() {
    this.total = 0;

    /** @type {BinaryHeap<SellOrder>} */
    this.minSellOrders = new BinaryHeap(
      (orderA, orderB) => orderA.price - orderB.price
    );

    /** @type {BinaryHeap<BuyOrder>} */
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

orderBook.insertOrders(incomingOrders2);
console.log(orderBook.processMatchingOrders());

module.exports = { OrderSaleMaximizer };
