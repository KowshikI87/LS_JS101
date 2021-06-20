let rlSync = require('readline-sync');
let num;
let suffix;
let numbers = []
for (n = 1; n <= 5; n++) {
  suffix = n === 1 ? 'st' : 'th';
  num = Number(rlSync.question(`Enter the ${n}${suffix} number: `));
  numbers.push(num);
}

let lastNumber = Number(rlSync.question(`Enter the last number: `));

if (numbers.includes(lastNumber)) {
  console.log(`The number ${lastNumber} appears in ${numbers}`);
} else {
  console.log(`The number ${lastNumber} does not appear in ${numbers}`);
}

