/* 
Binary to Decimal

For practice, convert the following from binary to decimal. Example: 0b100111 becomes 39 . 0b10100101 0b111 0b1111000 0b110110 0b000 0b11 -0b1010 0b100110 0b1010101010 0b111001 0b100101
*/

function binaryToDecimal(binary) {
  let count = 0,
    power = 0;
  for (let i = binary.length - 1; i >= 2; i--) {
    count += binary[i] * Math.pow(2, power++);
  }
  return count;
}
