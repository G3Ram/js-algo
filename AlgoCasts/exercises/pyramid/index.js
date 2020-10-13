// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  const lenVal = n * 2 - 1;
  const pyra = new Array(lenVal).fill(" ");
  let mid = 0;
  for (let i = 0; i < n; i++) {
    mid = Math.floor(lenVal / 2);
    for (let j = mid - i; j <= mid + i; j++) {
      pyra[j] = "#";
    }
    console.log(pyra.join(""));
  }
}
module.exports = pyramid;
