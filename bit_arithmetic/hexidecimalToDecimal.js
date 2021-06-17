/* 
  Hexadecimal to Decimal

  
*/

function hexadecimalToDecimal(hexadecimal) {
  const map = {
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
  };

  let count = 0,
    power = 0;
  for (let i = hexadecimal.length - 1; i >= 2; i--) {
    const char = hexadecimal[i];
    // If not a number, access map for value
    // otherwise, use the char, because it is a number
    // then do the multiplication before concatenating
    count += (isNaN(+char) ? map[char] : char) * Math.pow(16, power++);
  }
  return count;
}

module.exports = hexadecimalToDecimal;
