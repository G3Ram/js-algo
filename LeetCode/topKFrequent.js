/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let result = [];
  nums.sort();
  for (let i = 0; i < nums.length; i++) {
    if (!result.includes(nums[i]) && result.length < k) {
      result.push(nums[i]);
    }
  }

  return result;
};

topKFrequent([1, 1, 1, 2, 2, 3], 2);
