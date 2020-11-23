/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let totalVal = nums.reduce((total, num) => total + num);
  if (totalVal % 2 !== 0) {
    return totalVal % 2;
  }
};

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));
