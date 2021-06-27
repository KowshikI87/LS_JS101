function merge(array1, array2) {
  let unsortedArray = array1.concat(array2);
  let sortedArray = [];
  sortedArray.push(unsortedArray[0]);
  for (let u = 1; u < unsortedArray.length; u++) {
    let diff;
    let insertIndex;
    for (let s = 1; s < sortedArray.length; s++) {
      if (unsortedArray[u] > sortedArray[s]) continue;

      if (unsortedArray[u] < sortedArray[s]) {
        let currentDif = sortedArray[s] - unsortedArray[u];
        if (!diff) {
          diff = currentDif;
          insertIndex = s;
        } else {
          diff = diff < currentDif ? insertIndex = s : diff;
          insertIndex = diff < currentDif ? insertIndex = s : diff;
        }

      }
    }
    //if length of sortedArray < (u + 1) then push the current element to end
    //this is the case when the current array element is to be pushed to the end of array
    if (sortedArray.length < (u + 1)) sortedArray.push(unsortedArray[u])
  }
}