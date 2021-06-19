function crunch(sentence) {
  let originalWordsList = sentence.split(' ')
  let modWordsList = originalWordsList.map(remConsDuplChar);
  return modWordsList.join(' ');
}

function remConsDuplChar(word) {
  let characters = []

  for (let c = 1; c < word.length; c++) {
    //console.log(c + " " + word.charAt(c) + " " + word.charAt(c - 1));

    if (word.charAt(c) !== word.charAt(c - 1)) {
      characters.push(word.charAt(c - 1));
    }
  }
  characters.push(word.charAt(word.length - 1)) //add in last charcter as it gets excluded
  return characters.join('');
}


console.log(crunch('ddaaiillyy ddoouubbllee'));
console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));  

