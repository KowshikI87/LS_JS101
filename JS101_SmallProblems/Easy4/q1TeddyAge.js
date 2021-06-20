
function randomNumInRange(min, max) {
  let num = Math.round(Math.random() * (max - min)) + min;
  return num;
}

console.log(`Teddy is ${randomNumInRange(20, 120)} years old!`);

