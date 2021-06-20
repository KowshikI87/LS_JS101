// PROBLEM:
//input: string
//output: array of strings

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes. Consider
// palindrome words case sensitive.

//rules:
  //Explicit requirements:
//  - return all substrings as words which are palindromes
//  - Palindromes are case sensitive (new: meaning "abBa" is not a palindrome)
// Implicit Requirements
  //- if the string is an empty string, the result should be an empty string

// Test cases:

// console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
// should return: ["ili"]
//
// console.log(palindromeSubstrings("abcddcbA"))
// should return: ["bcddcb", "cddc", "dd"]
//
// console.log(palindromeSubstrings("palindrome"))
// should log: []
//
// console.log(palindromeSubstrings(""))
// should log: []