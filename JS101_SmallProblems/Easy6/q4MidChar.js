function centerOf(sentence) {
  let midLength = Math.floor(sentence.length / 2);
  if (sentence.length % 2 === 0) {
    return sentence.slice((midLength - 1), (midLength + 1));
  } else {
    return sentence[midLength];
  }
}
console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"
