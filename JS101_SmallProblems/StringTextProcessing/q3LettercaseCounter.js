function lettercaseCounter(string) {
  //go thorugh each character
  //if >= 'a' and <= 'z' then add to lowercase
  //if >= 'A' and <= 'Z' then add to uppercase
  //else add to neither
  //copied from LS (try to do it using regex later)
  let counts = { lowercase: 0, uppercase: 0, neither: 0 }

  for (let index = 0; index < string.length; index += 1) {
    let char = string[index];
    if ((char >= 'a') && (char <= 'z')) {
      counts.lowercase += 1;
    } else if ((char >= 'A') && (char <= 'Z')) {
      counts.uppercase += 1;
    } else {
      counts.neither += 1;
    }
  }

  return counts;


}