let rlSync = require('readline-sync');
let age = Number(rlSync.question('What is your age? '));
let retireAge = Number(rlSync.question('What is yAt what age would you like to retire? '));

let today = new Date(); //represents current date when no date given
let currentYear = today.getFullYear();

console.log(`It is ${currentYear}. You will retire in ${currentYear + (retireAge - age)}`);
console.log(`You have only ${retireAge - age} years of work to go!`);