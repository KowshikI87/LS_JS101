function buyFruit(groceryList) {
  //create a new array
  //go through each element in the array and push element[0] for element[1] times
  let groceryListRepeat = []
  for (let i = 0; i < groceryList.length; i++) {
    for (f = 0; f < groceryList[i][1]; f++) {
      groceryListRepeat.push(groceryList[i][0]);
    }
  }
  return groceryListRepeat;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]