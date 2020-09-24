// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  str = str.split("");
  let result = [];
  for (let i = str.length - 1; i > -1; i--) {
    result.push(str[i]);
  }
  return result.join("");
}

module.exports = reverse;
