/*
Outerloop that at most loops = number of elements
Inner loop that loops number of numbers - 1
  (compare index 0 to 1 then 1 to 2 and so on)
  Example: index 0 and 1 need to swap. temp = index 0, index 0 = index 1;
    index 1 = temp
As soon as we don't swap anymore, we break out of the loop. Use try/except block
  and throw an exception when no swap is made
Can assume that we will have at least 2 elements
*/
function bubbleSort(array) {
  try {
    for (let i = 0;  i < array.length; i++) {
      let numSwap = 0;
      for (let j = 1; j < array.length; j++ ) {
        if (array[j - 1] > array[j]) {
          numSwap += 1;
          let temp = array[j - 1];
          array[j - 1] = array[j];
          array[j] = temp;
        }
      }
      if (numSwap === 0) throw 'Finished Sorting';
      numSwap = 0;
    }
  } catch (error) {
    return array;
  }
  return array;
}
let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

//LS had some nice assignment without using temp

