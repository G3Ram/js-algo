/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let mid = Math.floor(s.length / 2);
  let strlen = s.length;
  let temp = 0;
  for (let i = 0; i < mid; i++) {
    temp = s[i];
    s[i] = s[strlen - (i + 1)];
    s[strlen - (i + 1)] = temp;
  }

  return s;
};

console.log(
  reverseString(["m", "a", "n", "i", "k", "a", "n", "d", "a", "n", "a"])
);
