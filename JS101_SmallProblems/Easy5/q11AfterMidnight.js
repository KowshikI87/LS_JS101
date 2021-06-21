/*

***P

The time of day can be represented as the number of minutes 
before or after midnight. If the number of minutes is positive, 
the time is after midnight. If the number of minutes is negative, 
the time is before midnight.

Write a function that takes a time using this minute-based 
format and returns the time of day in 24 hour format (hh:mm). Your function should work with any integer input.

You may not use javascript's Date class methods.

Input: Integer
Output: Time in 24hr format (hr : mi) (mi for minute)
Implicit: can't use date class methods

***Examples
console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

***Data Structure and Algorithm
- given integer

- First Case : Positive Integer. Take Midnight as 00 : 00
  - totalHrPassed = integer / 60
    - minutePassed = integer - (hourTotal * 60)
    - hrPassedActual = hourTotal % 24 (discarding multiple days passed)
  - hr24format = (00 + hrPassedActual) : (00 + minutePassed)

- Second Case: Negative Integer. Take Midnight as 23 : 60
  - integer = abs(integer)
  - totalHrPassed = integer / 60
    -minutePassed = integer - (totalHrPassed * 60);
    -hrPassedActual = integer % 24
  - hr24format = (23 - hrPassedActual) : (60 - minutePassed)
  
- use padding both hour and minute
*/

function timeOfDay(integer) {
  const MINUTE_TO_HOUR = 60;
  const HOUR_IN_DAY = 24;

  let integerAbs = Math.abs(integer);
  let totalHrPassed = Math.floor(integerAbs / MINUTE_TO_HOUR);
  let totMinPassed = integerAbs - (totalHrPassed * MINUTE_TO_HOUR);
  let totalHrPassedActual = totalHrPassed % 24;

  let midnightHour;
  let midnightMinute;
  let twentyFourFormatHr;
  let twentyFourFormatMin;
  if (integer >= 0) {
    midnightHour = 0;
    midnightMinute = 0;
    twentyFourFormatHr = midnightHour + totalHrPassedActual;
    twentyFourFormatMin = midnightMinute + totMinPassed;
  } else {
    midnightHour = 23;
    midnightMinute = 60;
    twentyFourFormatHr = midnightHour - totalHrPassedActual;
    twentyFourFormatMin = midnightMinute - totMinPassed;
  }
  //let testReturn = `${String(twentyFourFormatHr).padStart(2,'0')}:${String(twentyFourFormatMin).padStart(2,'0')}`;

  return (`${String(twentyFourFormatHr).padStart(2,'0')}:${String(twentyFourFormatMin).padStart(2,'0')}`);
}
console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");