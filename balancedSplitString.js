/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let lcount = 0;
  let rcount = 0;
  let index = 0;
  let result = 0;
  while (index < s.length) {
    if (s.substr(index, 1) === "R") {
      rcount += 1;
    } else {
      lcount += 1;
    }
    if (rcount === lcount && rcount > 0 && lcount > 0) {
      result += 1;
      rcount = 0;
      lcount = 0;
    }
    index += 1;
  }
  return result;
};

console.log(balancedStringSplit("RLLLLRRRRRLL"));
console.log(balancedStringSplit("LLLLRRRR"));
console.log(balancedStringSplit("RLRRLLRLRL"));
