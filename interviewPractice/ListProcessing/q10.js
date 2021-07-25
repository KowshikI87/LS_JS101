/*

Problem
- given id and transactions
- id represents an actual item, movement - in = increase quantity and
  out = decrease quantity
- tell me if item identified by the id has quantity > 0
after all transaction took place. the inital quantity is 0
- input: integer, array of objects
- output: true/false

Test Cases/Examples
- given

Data Structure
- we will just array

Algorithm
- input: id, transaction
- first: obtain the array of transactions
involving the given id (itemTransaction)
- then call reduce method on itemTransaction
  - if the current objects movement is in then add quantity
  - else subtarct quantity
  - quantity is 0 initially
- return if final quantity > 0

Code

*/
function transactionsFor(id, transactions) {
  return transactions.filter(transaction => transaction['id'] === id);
}

function isItemAvailable(id, transactions) {
  let itemTransactions = transactionsFor(id, transactions);
  return itemTransactions.reduce((totQty, transaction) => {
    if (transaction['movement'] === 'in') {
      return totQty + transaction['quantity'];
    } else {
      return totQty - transaction['quantity'];
    }
  }, 0) > 0;
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