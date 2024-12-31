/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

let str = 'abba';

function reverseString(str) {
    return str.split('').reverse().join('');
}

function isPalindrome(str) {
    const lowerStr = str.toLowerCase();
    const temp = reverseString(lowerStr);
    return lowerStr === temp; 
}

const result = isPalindrome(str);
console.log(result); 

module.exports = isPalindrome;
