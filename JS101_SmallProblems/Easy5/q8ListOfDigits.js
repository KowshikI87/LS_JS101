function digitList(integer) {
  let numbers = String(integer).split('');
  let digits = []
  numbers.forEach((element) => {
    digits.push(Number(element))
  })
  return digits;
}
console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]