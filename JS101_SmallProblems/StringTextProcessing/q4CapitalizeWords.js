function wordCap(sentence) {
  //split into words
  //use a string with first letter capitalized and rest in lowercase
  //spaced out function call like LS
  return sentence
         .split(' ')
         .map(word => word[0].toUpperCase() + word.slice(1))
         .join(' ');
}
console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'