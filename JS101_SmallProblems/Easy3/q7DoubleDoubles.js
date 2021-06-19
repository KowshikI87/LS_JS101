function twice(number) {
  return isDoubleDouble(number) ? number : number *2;
}

function isDoubleDouble(number) {
  //if odd number of length then return false
  let numberInString = String(number);
  if (numberInString.length % 2 !== 0) {
    return false;
  } else {
    let leftSide =  numberInString.slice(0, numberInString.length / 2);
    let rightSide = numberInString.slice(numberInString.length / 2);
    return leftSide === rightSide;
  }

  //else split into two side and return result of ===
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676