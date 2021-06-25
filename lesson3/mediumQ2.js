function swapCases(text) {
  return text
        .split('')
        .map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())
        .join('')
}


let munstersDescription = "The Munsters are creepy and spooky.";
console.log(swapCases(munstersDescription))
