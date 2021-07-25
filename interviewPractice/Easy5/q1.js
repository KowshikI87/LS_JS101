/*

Problems
- given an angle as floating point number
- return the value in angle, minutes, and a double quote
- conversoin: 60 minutes in a degree, 60 seconds in a minute
- 76.73
  - 76 is degree
  - 0.73 * 60 = 43.8 ---> 43 is minutes
  - 0.8 * 60 ---> 48 is seconds
- 254.6
  - 254 is degree
  - 0.6 * 60 = 36 is minutes
  - no seconds (but they are saying 35 for minutes and 59 for seconds)
  - seems like when we have no remainder for seconds and minutes is non zero, subtract 1 from 
    minutes and use 59 for seconds
- 93.034773
  - 93 degrees
  - 2 minutes
  - 5 seconds (so we are rounding it down)


- we will tackle it such that this program handles any positive or negative integer

Test Cases/Examples
- given


Data Structure
- probably just numbers and strings


Algorithm
- first: convert non standard positive or negative floating point to standard positive floating point
  - if a number is >0 : number = number % 360
  - if a number is negative
    - first: Abs(number) % 360 ---> num*-1 
    - second: number from step 1 + 360
- second: we have a standard flaoting point between 0 and 360 now (number)
  - 93.034773

  - degree = parseInt(number)
  - remaining = number - degree; (0.034773)
  - minutes = parseInt(remaining* 60);
  - remaining = remaining * 60 - minutes;
  - seconds = Math.Floor(remaining * 60);
  - special conditions
    - if either of degree/minute/second is less than
    2 digit then pad with 0 starting
    - if seconds is 0 and minutes > 0 then
    minutes = minutes - 1 and seconds = 59
Code

*/
const TOTAL_DEGREES = 360;
const MINUTE_TO_DEGREES = 60;
const SECONDS_TO_MINUTES = 60;

function dms(number) {
  let stndNumber = getStandardDegree(number);
  let degree = parseInt(stndNumber, 10);
  let remaining = stndNumber - degree;
  let minutes = parseInt(remaining * MINUTE_TO_DEGREES, 10);
  remaining = (remaining * MINUTE_TO_DEGREES) - minutes;
  let seconds = Math.floor(remaining * SECONDS_TO_MINUTES);
  //Special circumstance
  //if seconds is 0 and minutes > 0 then
  //minutes = minutes - 1 and seconds = 59
  if (minutes > 0 && seconds === 0) {
    minutes -= 1;
    seconds = 59;
  }
  return `${String(degree).padStart(2, 0)}°${String(minutes ).padStart(2, 0)}'${String(seconds).padStart(2, 0)}"`;
}

function getStandardDegree(number) {
  if (number >= 0 ) return number % TOTAL_DEGREES;
  let numberStnd = Math.abs(number) % TOTAL_DEGREES;
  return (-1 * numberStnd) + TOTAL_DEGREES;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
console.log(dms(-420));
console.log(dms(-20));