/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function (A, B) {
  if (A === B) return true;
  let str = A;
  let part1 = "";
  let part2 = "";
  for (let i = 0; i < A.length; i++) {
    part1 = str.substring(1, A.length);
    part2 = str.slice(0, 1);
    str = part1.concat(part2);
    if (str === B) {
      return true;
    }
  }
  return false;
};

console.log(rotateString("abcde", "cdeab"));
