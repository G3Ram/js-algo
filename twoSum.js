/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let indexVal = -1;
  for (let i = 0; i < nums.length; i++) {
    indexVal = nums.indexOf(target - nums[i]);
    if (indexVal !== -1 && indexVal !== i) {
      return [i, nums.indexOf(target - nums[i])];
    }
  }
  return nums;
};

console.log(twoSum([3, 2, 4], 6));
