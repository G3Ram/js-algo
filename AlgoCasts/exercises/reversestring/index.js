// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

module.exports = reverse;

// SOLUTION 1
//   str = str.split("");
//   let result = [];
//   for (let i = str.length - 1; i > -1; i--) {
//     result.push(str[i]);
//   }
//   return result.join("");

//   SOLUTION 2
// return str.split("").reverse().join("");

// SOLUTION 3
//   let result = "";
//   for (let character of str) {
//     result = character + result;
//   }
//   return result;
