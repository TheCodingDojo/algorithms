function decimalToBinary(decimal) {
  let str = "";
  while (decimal > 0) {
    const char = decimal % 2;
    decimal = Math.floor(decimal / 2);
    str = char + str;
  }
  return "0b" + str;
}

console.log(decimalToBinary(14));
