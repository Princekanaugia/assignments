/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let string = str.toLowerCase().split("");
    const vowels = string.filter(counts)
    function counts(char) {
      if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
        return char;
      }
    }
    return vowels.length;
}

module.exports = countVowels;