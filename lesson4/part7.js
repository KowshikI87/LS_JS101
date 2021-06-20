let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit(produce) {
  let fruit = {};
  for (let prop in produce) {
    if (produce[prop] === 'Fruit') {
      fruit[prop] = produce[prop];
    }
  }
  return fruit;
}

console.log(selectFruit(produce));