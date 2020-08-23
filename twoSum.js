/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(target - nums[i]) !== -1) {
      return [i, nums.indexOf(target - nums[i])];
    }
  }
  return nums;
};

console.log(twoSum([1, 2, 3, 4, 5], 6));
