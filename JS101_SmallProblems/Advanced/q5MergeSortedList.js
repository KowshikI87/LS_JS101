/*
**P
//function that takes two arrays and return them as one sorted array
//build the result array one element at a time in the proper order
//don't mutate the input array

**Examples/Test Cases
- given in problem

**Data Structure
- we will just use a list

**Algorithm

Algorithm 1 --> too complex to implement
//we create a new array using concat (refArray)
//first element ---> we push to array (sortedArray)
  //we start a loop that goes from second to last element of refArray
    //we go through each element in the sortedArray; let diff; let index;
      //if current number in refArray > current number in sortedArray; continue
      //if current number in refArray < current number in sortedArray;
        //currentDif = current Number Sorted Array - current number refArray
        //if not diff(initially undefined) then
          //if diff < currentDif then index = current index in sortedArray
      //at the end of loop we use splice method to insert
        //the number in correct place

Algorithm 2
- start with empty stack and start going through the elements in the list
- if stack is empty then push the element

-else
  if current element > stack[last] then push to stack
  else if current element < stack[first] then shift to stack
  // eslint-disable-next-line max-len
  // eslint-disable-next-line max-len
  else start going through the stack from second element in stack to
        //last element
    //at any point if current elemnt < stack [index] then
      //insert current elment that index and break
*/
// eslint-disable-next-line max-lines-per-function
function merge(array1, array2) {
  let unsortedArray = array1.concat(array2);
  let sortedArray = [];
  for (let idx = 0; idx < unsortedArray.length; idx++) {
    //first element so just push to the stack
    if (sortedArray.length === 0) {
      sortedArray.push(unsortedArray[idx]);
      continue;
    }
    //number is largest so far so it goes to the end of array
    if (unsortedArray[idx] >= sortedArray[sortedArray.length - 1]) {
      sortedArray.push(unsortedArray[idx]);
      continue;
    }
    //number is smallest so far so it goes to the start of the array
    if (unsortedArray[idx] <= sortedArray[0]) {
      sortedArray.shift(unsortedArray[idx]);
      continue;
    }
    //number needs to go somewhere in the middle
    for (let i = 1; i < sortedArray.length; i++) {
      if (unsortedArray[idx] <= sortedArray[i]) {
        sortedArray.splice(i, 0, unsortedArray[idx]);
        break;
      }
    }
  }
  return sortedArray;
}
console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]
console.log(merge([1, 5, 9], [4, 3, 6, 8]));      // [1, 2, 3, 4, 5, 6, 7, 8, 9]
