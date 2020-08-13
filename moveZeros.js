/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let numsLen = nums.length;
  nums = nums.filter((i) => i !== 0);
  while (nums.length < numsLen) {
    nums.push(0);
  }
  console.log(nums);
};

moveZeroes([0, 1, 0, 3, 12]);
