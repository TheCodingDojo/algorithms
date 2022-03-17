/* 
  Encode Bytes to 32

  Input: four values between 0-255, 
  Output: encode them into a 32-bit integer
  First should map to most significant 8 bits. Given [0xF0, 0xC3, 0x96, 0x59] , return 4039349849 ( 0xF0C39659 ).
*/

const hexadecimalToDecimal = require("../2_Tue/hexidecimalToDecimal");

function encodeBytesTo32(arr) {
  const combined = arr.map((digits) => digits.slice(2)).join("");

  return hexadecimalToDecimal("0x" + combined);
}
