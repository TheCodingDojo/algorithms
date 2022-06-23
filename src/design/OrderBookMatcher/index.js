/* 
Design a class to process incoming orders and keep track of the running total
sales and leftover orders waiting to be matched.

Buy orders should be matched to the lowest sell order and only be processed
when the sell price is <= the buy price.

Leftover orders / quantity that couldn't be matched should be kept so they can
be matched when new orders come in.
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
