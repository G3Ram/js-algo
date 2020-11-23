/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxPrice = 0;
  let temp = 0;
  let count = 1;
  let arr = [];
  do {
    for (let i = 1; i < prices.length; i = i + count) {
      temp = prices[i] - prices[i - 1];
      maxPrice = temp > 0 ? maxPrice + temp : maxPrice;
    }
    arr.push(maxPrice);
    maxPrice = 0;
    count = count + 1;
  } while (count < prices.length);
  arr.sort(function (a, b) {
    return b - a;
  });
  return arr[0];
};

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 4, 3, 1]));
