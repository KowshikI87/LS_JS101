function stringToSignedInteger(string) {
  sign = string[0] === '-' ? -1 : 1
  return sign * stringToUnsignedInteger(string);
}

function stringToUnsignedInteger(string) {
  numberCharacters = string.split('').filter((element) => (element >= '0' && element <= '9'))
  return +numberCharacters.join('');
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
