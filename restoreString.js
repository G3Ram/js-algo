/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  const sArr = s.split("");
  const result = new Array(indices.length);
  for (let i = 0; i < indices.length; i++) {
    result[indices[i]] = sArr[i];
  }
  return result.join("");
};

console.log(restoreString("aaiougrt", [4, 0, 2, 6, 7, 3, 1, 5]));
console.log(restoreString("aiohn", [3, 1, 4, 2, 0]));
