// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  let n1 = 0;
  let n2 = 1;
  let fibVal = 0;
  if (n === 1) return 1;
  for (let i = 0; i < n - 1; i++) {
    fibVal = n1 + n2;
    n1 = n2;
    n2 = fibVal;
  }
  return fibVal;
}
console.log(fib(5));
module.exports = fib;

// RECURSIVE SOLUTION
// if (n <= 2) {
//     return 1;
//   }

//   return fib(n - 1) + fib(n - 2);
