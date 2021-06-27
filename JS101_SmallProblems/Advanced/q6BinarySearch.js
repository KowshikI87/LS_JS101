/*
**Problem and test cases already given
- Given: Sorted array

**Algorithm
  //create a copy of the old sorted array

  //we have to loop through the array
    //initialize startIdx = 0, endIdx = array.length - 1
    //start of loop (run as long as start <= end)
      //midIdx = round down ((end - start) / 2) + startIdx
      //if element to Search === mid Index then return mid Index
      //else
        //if element to Search > mid element
          //startIdx = midIdx + 1, endIdx stays the same
            //(throw away upper half of array)
        //if element to search < mid element
          //startIdx stays the same and endIdx = midIdx - 1
            //(throw away bottom half)
*/

function binarySearch(array, elementToSearch) {
  let searchArray = array.slice();
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    let mid = Math.floor((end - start) / 2) + start;
    if (elementToSearch === searchArray[mid]) return mid;
    if (elementToSearch > searchArray[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}
let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6