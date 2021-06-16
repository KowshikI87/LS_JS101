let rlSync = require('readline-sync');
let length = Number(rlSync.question('Enter the length of the room in meters: \n'));
let width = Number(rlSync.question('Enter the width of the room in meters: \n'));
let areaMetSq = length * width;
const METER_TO_FEET = 3.28084;
console.log(`The area of the room is ${areaMetSq.toFixed(2)} square meters (${(areaMetSq * METER_TO_FEET * METER_TO_FEET).toFixed(2)} square feet)`);

