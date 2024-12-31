/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    const vowel='aeiou';
    let count=0;
    for(char of str.toLowerCase()){
      if(vowel.includes(char)) count++;
    }
    return count;
}
console.log(countVowels('Shaikh Ahmad'));
module.exports = countVowels;