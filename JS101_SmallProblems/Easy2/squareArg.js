function square(num) {
  return multiply(num, num);
}

function multiply(num1, num2) {
  return Number(num1) * Number(num2);
}

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true