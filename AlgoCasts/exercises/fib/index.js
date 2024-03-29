// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
  let cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function slowFib(n) {
  if (n <= 2) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
}
const fib = memoize(slowFib);
module.exports = fib;

// RECURSIVE SOLUTION
// if (n <= 2) {
//     return 1;
//   }

//   return fib(n - 1) + fib(n - 2);

// ITERATIVE SOLUTION
// let n1 = 0;
// let n2 = 1;
// let fibVal = 0;
// if (n === 1) return 1;
// for (let i = 0; i < n - 1; i++) {
//   fibVal = n1 + n2;
//   n1 = n2;
//   n2 = fibVal;
// }
// return fibVal;
