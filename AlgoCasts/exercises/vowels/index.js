// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let vowels = {};
  for (let char of str) {
    if (char.match(/[aeiouAEIOU]/g)) {
      vowels[char] = vowels[char] ? vowels[char] + 1 : 1;
    }
  }

  let result = 0;
  for (let char in vowels) {
    result += vowels[char];
  }
  return result;
}

module.exports = vowels;
