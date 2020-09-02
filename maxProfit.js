/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxPrice = 0;
  let maxPriceArr = [];
  let endOfPrices = false;
  let temp = [];
  for (let i = 0; i < prices.length; i++) {
    if (temp.length !== 0) {
      maxPriceArr.push(temp);
    }
    temp = [];
    for (let j = 0; j < prices.length; j++) {
      maxPrice = prices[j] - prices[i];
      temp.push(maxPrice);
    }
  }
  maxPriceArr.push(temp);
  return maxPriceArr;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
