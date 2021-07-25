/*

Problems
- take a string consisting of words
- words consist of any sequence of non-space characters
  - words are seperated by at least one space

Test Cases/Examples
- given


Data Structure
- object for final output


Algorithm
- start with an empty object for word length histogram (wordCountHist)
- first, we get a list of words using single space as delimiter
- second, filter out the list of words so we don't have
words that are only empty space
- we iterate over all the words
  - we find its length and see if the length as an key exist in wordCountHist
    - if yes then increment the corresponding key's value by 1
  - else create a key value pair with value = 1 as initial value
Code

*/
function wordSizes(text) {
  let wordCountHist = {};
  let words = text.split(' ');
  words = words.filter(word => word !== '');
  for (let index = 0; index < words.length; index++) {
    let wordLength = words[index].length;
    if (wordCountHist.hasOwnProperty(String(wordLength))) {
      wordCountHist[String(wordLength)] += 1;
    } else {
      wordCountHist[String(wordLength)] = 1;
    }
  }
  return wordCountHist;
}


console.log(wordSizes('Four score and seven.'));               // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}
