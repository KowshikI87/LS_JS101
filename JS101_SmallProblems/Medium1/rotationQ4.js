let register = 0;
let stack = []

let commands = {
  //thought about adding commands as key:value pair but don't have as much knoweldge yet
} 

function placeValue(value) {
  register = value;
}

function push() {
  stack.push(register);
}

function add() {
  register = register + stack.pop();
}

function sub() {
  register = stack.pop() - register;
}

function mult() {
  register = stack.pop * register;
}

function div() {
  register = register / stack.pop();
}

function remainder() {
  register = stack.pop % register;
}

function pop() {
  stack.pop();
}

function print() {
  console.log(register);
}

// use LS solution as it is simple. I like my approach better still


