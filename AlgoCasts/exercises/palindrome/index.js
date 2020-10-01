// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  const mid = str.length % 2 === 0 ? str.length / 2 : Math.ceil(str.length / 2);
  const strPalin = str;
  strPalin.length = mid;
  return strPalin
    .split("")
    .every((char, i) => char === str[str.length - i - 1]);
}

module.exports = palindrome;

// SOLUTION 1
//   const reversed = str.split("").reduce((rev, char) => char + rev, "");
//   return str === reversed;
