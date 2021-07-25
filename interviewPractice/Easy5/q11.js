/*
Problems
- given minutes (integers: positive/negative) before or after midnight return 
the hour and minute in hr:mm format
- input: integer
- otput: a string in hr:mm format

Test Cases/Examples
- given

- first take integer and convert to < 1440 minute (24*60)

- number > 1440


-1437 ==> 23 hours 57 minutes

-4231 ==> 70 hours 31 minutes ==> 22 hours 31 minutes


Data Structure
- strings and numbers



Algorithm
- input: minutes
- stndMinutes = Abs(minutes) % 1440;
- if minutes > 0
  - midnightHour = 0, midnightMinute = 0
  - hour =  midnightHour + parseInt(stndMinutes / 60)
  - minute = midnightMinute + stndMinutes % 60
- if mintues < 0
  - midnightHour = 23, midnightMinute = 60
  - hour = midnightHour - parseInt(stndMinutes / 60)
  - minute = midnightMinute - (stndMinutes % 60);
Code
*/

const TOTAL_HR_DAY = 24;
const MIN_IN_HOUR = 60;
const TOTAL_MINS_DAY = TOTAL_HR_DAY * MIN_IN_HOUR;

function timeOfDay(deltaMinutes) {
  let stndDeltaMinutes = Math.abs(deltaMinutes) % TOTAL_MINS_DAY;
  let hours;
  let minutes;
  if (deltaMinutes >= 0) {
    hours = parseInt(stndDeltaMinutes / MIN_IN_HOUR);
    minutes = stndDeltaMinutes % MIN_IN_HOUR;
  } else {
    let midnightHour = 23;
    let midnightMinute = 60;
    hours = midnightHour - parseInt(stndDeltaMinutes / MIN_IN_HOUR);
    minutes =  midnightMinute - (stndDeltaMinutes % MIN_IN_HOUR);
  }
  return `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}`
}


console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");


//use LS solution. They convert all minutes to positive minutes first