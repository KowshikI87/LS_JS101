/*

***P
Write two functions that each take a time of day in 24 hour format, 
and return the number of minutes before and after midnight, respectively. 
Both functions should return a value in the range 0..1439.
You may not use javascript's Date class methods.

***Example
console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);

***Data Structure and Algorithm
- afterMidnight function. (don't need to use midnight of 00:00)
  -split hour and minute. Total Minute = hour * 60 + minute
- beforeMidnight function --> Midnight = 23: 60
  - split hour and minute. 
    - hour = 23 - hour
    - minute = 63 - minute
    - totalMinute = hour * 60 + minute
*/
const MINUTE_TO_HOUR = 60;

function afterMidnight(time) {
  let timeArray = time.split(':');
  //special condition for 24:00
  if (Number(timeArray[0]) === 24) return 0;
  let totMinutePassed = Number(timeArray[0]) * MINUTE_TO_HOUR + Number(timeArray[1]);

  return totMinutePassed;
}

function beforeMidnight(time) {
  let midnightHour = 23;
  let midnightMinute = 60;
  let timeArray = time.split(':');
  //special condition for 24:00
  if (Number(timeArray[0]) === 24) return 0;
  //don't subtract if hour is 0; same logic with minute
  let hourPassed = Number(timeArray[0]) === 0 ? 0 : (midnightHour - Number(timeArray[0]));
  let minutePassed = Number(timeArray[1]) === 0 ? 0 : (midnightMinute - Number(timeArray[1]));
  let totMinutePassed = hourPassed * MINUTE_TO_HOUR + minutePassed;
  return totMinutePassed;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
console.log(afterMidnight("23:59") === 1439);
console.log(beforeMidnight("23:59") === 1);
