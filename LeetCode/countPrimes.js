/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (a, n) {
  let arr = new Array(n);
  arr.fill(false);
  let count = 0;
  if (n > 2) count = 1;
  for (let i = 3; i < n; i = i + 2) {
    if (!arr[i]) {
      count++;
      for (let j = 3; i * j < n; j = j + 2) {
        arr[i * j] = true;
      }
    }
  }
  if (n > 3) {
    for (let i = 4; i < n; i = i + 2) {
      arr[i] = true;
    }
  }
  let primeArr = [];
  arr.forEach((item, index) => {
    if (!item && index >= a) primeArr.push(index);
  });
  console.log(primeArr);
  return primeArr.length;
};

console.log(countPrimes(10, 100));
