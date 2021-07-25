/*

Problem
- modify from previous question so non alphabetic characters
don't count when want to toggle upperCase vs. lowerCase

Test Cases/Examples
- given


Data Structure
- string and array

Algorithm
- use the same functoin as before but maintain a alphIndex
that we initialize it to 0 and only increment if we encounter
alphabetic letters (char.toLower >= a and char.toLower <=z)
- and then if alphIndex is even then capitalize
- else don't capitalize

Code

*/
