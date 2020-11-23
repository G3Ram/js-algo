/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let kidWithMaxCandies = [...candies];
  kidWithMaxCandies.sort(function (a, b) {
    return b - a;
  });
  let resultArr = [];
  for (let i = 0; i < candies.length; i++) {
    resultArr.push(candies[i] + extraCandies >= kidWithMaxCandies[0]);
  }
  return resultArr;
};

console.log(kidsWithCandies([2, 3, 1, 4], 2));
