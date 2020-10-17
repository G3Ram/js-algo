// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const vowels = str.match(/[aeiou]/gi);
  return vowels ? vowels.length : 0;
}

module.exports = vowels;

// SOLUTION 1
// let vowels = {};
// for (let char of str) {
//   if (char.match(/[aeiou]/gi)) {
//     vowels[char] = vowels[char] ? vowels[char] + 1 : 1;
//   }
// }

// let result = 0;
// for (let char in vowels) {
//   result += vowels[char];
// }
// return result;

// SOLUTION 2
// let count = 0;
// const vowels = ["a", "e", "i", "o", "u"];

// for (let char of str.toLowerCase()) {
//   if (vowels.includes(char)) {
//     count++;
//   }
// }
// return count;
