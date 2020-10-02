// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed = n.toString().split("").reverse().join("");
  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;

// SOLUTION 1
//   const nArr = n.toString().split("");
//   if (n > 0) {
//     return parseInt(nArr.reduce((rev, item) => item + rev, "")) || 0;
//   } else {
//     nArr.shift();
//     return parseInt(`-${nArr.reduce((rev, item) => item + rev, "")}`) || 0;
//   }
