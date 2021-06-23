function staggeredCase(sentence) {
  //easiest solution is do as before but keep a different index counter that only 
  //counts the letters
  let letterCounter = -1;
  return sentence.split('').reduce((characters, currentValue) => {
    if (currentValue.toLowerCase() >= 'a' && currentValue.toLowerCase() <= 'z') letterCounter += 1;
    
    if (letterCounter % 2 == 0) {
      return characters + currentValue.toUpperCase();
    } else {
      return characters + currentValue.toLowerCase();
    }

  }, '')

}
console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);