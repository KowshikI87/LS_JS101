function xor(arg1, arg2) {
  result = Number(!!(arg1)) + Number(!!(arg2));
  return result >= 1;
}
console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);