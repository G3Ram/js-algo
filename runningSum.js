/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let newArr = [];
  if (nums.length > 0) {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
      total += nums[i];
      newArr.push(total);
    }
    return newArr;
  }
  return nums;
};

console.log(runningSum([1, 2, 3]));
