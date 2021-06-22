function transactionsFor(id, transactions) {
  //use filter function and return true if 
  //array's object element "id" property has same value has
  //id property supplied here
  return transactions.filter(transaction => transaction['id'] === id);
}

function isItemAvailable(id, transactions) {
  //first use filter to get all the objects for the id
  //then use filter method to get sum of quantity
  //return filter result > 0
  let idTransaction = transactionsFor(id, transactions);
  let totQuantity = idTransaction.reduce((total, currentElem) => {
    return currentElem['movement'] === 'in' ? total + currentElem['quantity'] : total - currentElem['quantity'];
  }, 0)
  return totQuantity > 0;
}
let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true