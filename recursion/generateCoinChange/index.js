// http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2129

/* 
  Generate All Possible Coin Change

  Create generate All CoinChange(cents) . Given a number of American cents, compute and return an array enumerating all possible ways to represent it, with pennies (1 cent), nickels (5 cents), dimes (10 cents), quarters (25 cents). For 5 , return [{dimes:0,nickels:1,pennies:0,quarters:0}, {dimes:0,nickels:0,pennies:5,quarters:0}{}] . Do not return duplicate results.
*/

function generateCoinChange(
  cents,
  solutions = [],
  partial = { quarters: 0, dimes: 0, nickels: 0, pennies: 0 }
) {
  solutions.push({
    ...partial,
    pennies: cents,
  });

  if (!partial.quarters) {
    const maxQuarters = Math.floor(cents / 25);

    for (let i = 1; i <= maxQuarters; i++) {
      generateCoinChange(cents - i * 25, solutions, {
        ...partial,
        quarters: i,
      });
    }
  }

  if (!partial.dimes) {
    const maxDimes = Math.floor(cents / 10);

    for (let i = 1; i <= maxDimes; i++) {
      generateCoinChange(cents - i * 10, solutions, {
        ...partial,
        dimes: i,
      });
    }
  }

  if (!partial.nickels) {
    const maxNickels = Math.floor(cents / 5);

    for (let i = 1; i <= maxNickels; i++) {
      generateCoinChange(cents - i * 5, solutions, {
        ...partial,
        nickels: i,
      });
    }
  }

  return solutions;
}

module.exports = {
  generateCoinChange,
};
