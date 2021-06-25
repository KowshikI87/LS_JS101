let title = "Flintstone Family Members";
let WIDTH = 40;
//let centeredTitle = " ".repeat(Math.floor(WIDTH - title.length)) + title + " ".repeat(Math.ceil(WIDTH - title.length));
let centeredTitle = " ".repeat(WIDTH - title.length) + title + " ".repeat(WIDTH - title.length); //so don't need to use floor or ceil to round to integer
//second: LS solution is better
  //they only care about the space on the left. that makes sense. on the right we have spaces and spaces so outputting space into space is useless
  //they are using .padStart method which padding string (equal to " " by default) till we have specified length which is length of word + max width / 2
// let padding = Math.floor((40 - title.length) / 2);
// title.padStart(padding + title.length);

//the

console.log(centeredTitle);
