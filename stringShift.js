/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function (s, shift) {
  // find right or left
  let part1 = "";
  let part2 = "";
  for (let i = 0; i < shift.length; i++) {
    if (shift[i][0] === 0) {
      part1 = s.substr(0, shift[i][1]);
      part2 = s.substr(shift[i][1], s.length);
      s = part2 + part1;
    } else {
      part1 = s.substr(s.length - shift[i][1]);
      part2 = s.substr(0, s.length - shift[i][1]);
      s = part1 + part2;
    }
  }
  return s;
};

console.log(
  stringShift("abcdefg", [
    [1, 1],
    [1, 1],
    [0, 2],
    [1, 3],
  ])
);

console.log(
  stringShift("abc", [
    [0, 1],
    [1, 2],
  ])
);
