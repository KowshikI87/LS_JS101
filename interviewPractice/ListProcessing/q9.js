/*

Problem
- takes two arguments: an inventory item ID and a list of transactions (object)
- reutrns an array containing only the transactions for the specified inventory item
- input: integer, array of objects
- output: array of object


Test Cases/Examples
- given


Data Structure
- use array

Algorithm
- input: id, transactions
- call the filter method on transactions object
  - select the element which's value for id property
  matches with input id


Code


*/
function transactionsFor(id, transactions) {
  return transactions.filter(transaction => transaction['id'] === id);
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

transactionsFor(101, transactions);
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]