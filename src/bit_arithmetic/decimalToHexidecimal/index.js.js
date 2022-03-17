/* 
  Decimal to Hexadecimal

  
*/

function decimalToHexadecimal(decimal) {
  const map = {
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F",
  };

  let str = "";
  while (decimal > 0) {
    const remainder = decimal % 16;
    decimal = Math.floor(decimal / 16);
    str = (remainder < 10 ? remainder : map[remainder]) + str;
  }
  return "0x" + str;
}
