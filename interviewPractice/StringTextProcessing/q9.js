/*

Problem
- given a word and a string of text
- return an integer representing the number of times
the word appears in the text
- assume that word and text input will always be provided
- all word breaks are spaces (not sure what this means)
- Thus, some words will include puncuation such as periods 
and commas
- rules
  - words including puncutaion is still one word
  - words are only seperated by a space
  - case does not matter

Test Cases/Examples
- given

Data Structure
- string and array

Algorithm
- input: searchWord, text
- first text.split(' '); to get list of words
- call the reduce method on words
  - in each iteration, if word.tolowercase === searchWord.tolowercase
    - increment accumulator
  - iniitalize the accumulator to 0

Code

*/
// did not solve as alreayd solved in head. my previous solution is sick

function searchWord(wordToSearch, text) {
  return text.split(' ').reduce((count, word) => {
    return count + Boolean(word.toLowerCase() === wordToSearch.toLowerCase());
  }, 0);
}

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

searchWord('sed', text);      // 3
