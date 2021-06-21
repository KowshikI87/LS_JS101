function reverseWords(sentence) {
  //first split into words
  //start a new array
    //go through each of split words. 
      //if the length is >= 5 then
        //split into character, reverse it and then push to new array
      //else just push to new array
  //return new array joined using ' '
  let splitWords = sentence.split(' ');
  let reverseSentenceWords = [];
  splitWords.forEach(element => {
    if (element.length >= 5) {
      reverseSentenceWords.push(element.split('').reverse().join(''));
    } else {
      reverseSentenceWords.push(element);
    }
  });

  return reverseSentenceWords.join(' ');
}
console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));