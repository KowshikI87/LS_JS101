function doubleConsonants(sentence) {
  let vowels = 'AEIOUaeiou';
  let doubleConsonantString = '';
  for (let c = 0; c < sentence.length; c++) {
    if (!(vowels.includes(sentence[c]))) {
      doubleConsonantString += sentence[c].repeat(2);
    } else {
      doubleConsonantString += sentence[c];
    }
  }
  return doubleConsonantString;
}
console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""