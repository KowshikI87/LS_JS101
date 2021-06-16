function shortLongShort(string1, string2) {
  if (string1.length > string2.length) {
    return string2 + string1 + string2;
  } else {
    return string1 + string2 + string1;
  }
}


//I like this solution
// function shortLongShort(str1, str2) {
//   let short = (str1.length < str2.length ? str1 : str2);
//   let long = (short === str1 ? str2 : str1);

//   return short + long + short;
// }
