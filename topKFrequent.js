/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let temp = {};
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (!result.includes(nums[i])) {
      if (temp[nums[i].toString()]) {
        temp[nums[i]] = temp[nums[i]] + 1;
        if (temp[nums[i]] >= k) {
          result.push(nums[i]);
        }
      } else {
        temp[nums[i]] = 1;
      }
    }
  }
  console.log(result);
};

topKFrequent([1, 1, 1, 2, 2, 3], 2);
